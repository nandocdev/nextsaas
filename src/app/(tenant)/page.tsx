import { redirect } from 'next/navigation';
import { getTenantContext } from '@/lib/tenancy/resolve';
import { prisma } from '@/lib/db/withTenant';
import { notFound } from 'next/navigation';

export default async function TenantRoot() {
  const ctx = await getTenantContext();
  
  if (!ctx) {
    return notFound();
  }

  const business = await prisma.business.findFirst({
    where: { tenantId: ctx.tenantId },
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900">
      {business?.logoUrl ? (
        <img src={business.logoUrl} alt={business?.name} className="w-24 h-24 rounded-full mb-6" />
      ) : (
        <div className="w-24 h-24 bg-indigo-100 text-indigo-700 flex items-center justify-center rounded-full mb-6 font-bold text-3xl">
          {business?.name?.charAt(0) || 'R'}
        </div>
      )}
      <h1 className="text-3xl font-bold mb-4 tracking-tight">{business?.name || 'Reasy Booking'}</h1>
      <p className="text-slate-600 mb-8">Book your next appointment online.</p>
      
      <div className="flex gap-4">
        <a href="/book" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors">
          Book Now
        </a>
        <a href="/login" className="px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-sm font-semibold rounded-lg transition-colors">
          Staff Login
        </a>
      </div>
    </div>
  );
}
