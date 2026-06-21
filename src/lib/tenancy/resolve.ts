import { headers } from 'next/headers';
import { prisma, withTenant } from '../db/withTenant';
import { Tenant } from '@prisma/client';

export type TenantContext = {
  tenantId: string;
  slug: string;
};

/**
 * Resolves the tenant context from the request headers, injected by middleware.
 */
export async function getTenantContext(): Promise<TenantContext | null> {
  const headersList = await headers();
  const slug = headersList.get('x-tenant-slug');

  if (!slug) {
    return null;
  }

  // Look up tenant by slug
  // For production, this should ideally be heavily cached in Redis
  const business = await prisma.business.findUnique({
    where: { slug },
    select: { tenantId: true },
  });

  if (!business) {
    return null;
  }

  return {
    tenantId: business.tenantId,
    slug,
  };
}
