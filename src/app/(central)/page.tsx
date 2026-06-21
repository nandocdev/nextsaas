import { redirect } from 'next/navigation';

export default function CentralRoot() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-50 text-slate-900">
      <h1 className="text-4xl font-bold mb-4 tracking-tight">Reasy Platform</h1>
      <p className="text-lg text-slate-600 mb-8 max-w-md text-center">
        The multi-tenant booking platform for Latin America.
      </p>
      <a href="/admin" className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors">
        Platform Admin Login
      </a>
    </div>
  );
}
