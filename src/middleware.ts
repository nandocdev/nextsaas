import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 1. Resolver tenant desde host
// 2. Inyectar tenant_id en el contexto de request (header interno)
// 3. Autenticar (manejo via auth.js middleware posterior)

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const hostname = request.headers.get('host') || '';

  // Definir dominio base para saber si estamos en central o tenant
  // En producción esto idealmente viene de una variable de entorno
  const BASE_DOMAIN = process.env.NEXT_PUBLIC_BASE_DOMAIN || 'domain.com';

  let tenantSlug: string | null = null;
  let isCentral = false;

  if (hostname === BASE_DOMAIN || hostname.endsWith(`.${BASE_DOMAIN}`) === false) {
    if (hostname === BASE_DOMAIN) {
      isCentral = true;
    } else {
      // Custom domains o localhost test fallback
      if (hostname.includes('localhost')) {
         isCentral = true;
      }
    }
  } else {
    // Es un subdominio: slug.domain.com
    tenantSlug = hostname.replace(`.${BASE_DOMAIN}`, '');
  }

  // Rewrite URLs based on context
  if (isCentral) {
    // Map central routes
    if (!url.pathname.startsWith('/central')) {
      return NextResponse.rewrite(new URL(`/central${url.pathname}`, request.url));
    }
  } else if (tenantSlug) {
    // Map tenant routes and inject tenant context securely
    const response = NextResponse.rewrite(new URL(`/tenant${url.pathname}`, request.url));
    // Header for internal backend use only, never trusted if sent by client directly
    response.headers.set('x-tenant-slug', tenantSlug);
    return response;
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes - handled separately or inside context)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
