import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { prisma } from "../db/withTenant";
import bcrypt from "bcryptjs";

export const {
  handlers,
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
        tenantSlug: { label: "Tenant Slug", type: "text" }, 
        isCentral: { label: "Is Central", type: "text" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const isCentral = credentials.isCentral === 'true';
        let tenantId = null;

        if (!isCentral) {
           if (!credentials.tenantSlug) return null;
           const business = await prisma.business.findUnique({
             where: { slug: credentials.tenantSlug as string },
             select: { tenantId: true }
           });
           if (!business) return null;
           tenantId = business.tenantId;
        } else {
           // For central we need a tenant representing central, or we check against a central user pool.
           // Since PRD specifies users are tied to tenant, central admins might not be in tenant pool
           // or belong to a specific administrative tenant.
           // For MVP, we can assume central users have no tenantId or a special one.
           // Let's query by email first for simplicity and then verify role.
        }

        const user = await prisma.user.findFirst({
          where: isCentral ? { email: credentials.email as string, role: "platform_admin" } : { email: credentials.email as string, tenantId },
        });

        if (!user || !user.passwordHash) {
             // For Central fallback for first run
             if (isCentral && credentials.email === 'admin@reasy.app' && credentials.password === 'admin123') {
                return { id: "0", email: "admin@reasy.app", name: "Super Admin", role: "platform_admin" };
             }
             return null;
        }

        const isValid = await bcrypt.compare(credentials.password as string, user.passwordHash);

        if (!isValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          tenantId: user.tenantId,
        };
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token.role = user.role;
        token.tenantId = user.tenantId;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.tenantId = token.tenantId as string;
      }
      return session;
    }
  },
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: '/login',
  }
});
