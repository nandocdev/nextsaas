import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

/**
 * Execute a transaction within the context of a specific tenant.
 * This is CRITICAL for RLS isolation. It uses an explicit transaction
 * and sets the session variable locally to the transaction.
 *
 * @param tenantId The ID of the tenant to isolate to.
 * @param fn The callback containing queries.
 * @returns The result of the callback.
 */
export async function withTenant<T>(
  tenantId: string,
  fn: (tx: any) => Promise<T>
): Promise<T> {
  return prisma.$transaction(async (tx) => {
    // We use set_config to avoid SQL injection risks associated with string interpolation in SET LOCAL
    // The "true" argument means it's a LOCAL setting (scoped to the current transaction)
    await (tx as any).$executeRaw`SELECT set_config('app.tenant_id', ${tenantId}, true)`;
    return fn(tx);
  });
}
