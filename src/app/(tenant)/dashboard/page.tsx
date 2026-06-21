import React from "react";

export default function Dashboard() {
  return (
    <div className="h-screen w-full flex bg-slate-50 text-slate-900 overflow-hidden select-none">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col shrink-0">
        <div className="p-6 flex items-center gap-3 border-b border-slate-100">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
          <span className="font-bold text-lg tracking-tight">Reasy</span>
        </div>
        <nav className="flex-1 p-4 space-y-1">
          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2">
            Overview
          </div>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-700 rounded-md font-medium text-sm"
          >
            <span className="material-symbols-outlined text-[20px]">dashboard</span>
            Dashboard
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">calendar_month</span>
            Bookings
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">people</span>
            Customers
          </a>

          <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3 py-2 mt-6">
            Management
          </div>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">work</span>
            Services & Pricing
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">group</span>
            Staff & Resources
          </a>
          <a
            href="#"
            className="flex items-center gap-3 px-3 py-2 text-slate-600 hover:bg-slate-100 rounded-md font-medium text-sm transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">settings</span>
            Business Settings
          </a>
        </nav>
        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-900 rounded-xl p-4 text-white">
            <div className="text-xs opacity-60 mb-1">Current Plan</div>
            <div className="text-sm font-mono">Professional</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-full">
        {/* Header */}
        <header className="h-20 bg-white border-b border-slate-200 px-10 flex items-center justify-between shrink-0">
          <div className="space-y-1">
            <div>
              <span className="text-xs font-semibold text-indigo-600 uppercase tracking-widest">
                Business Analytics
              </span>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Dashboard
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white flex items-center justify-center text-xs font-bold text-slate-600">CH</div>
            </div>
            <button className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg transition-colors flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">add</span>
              New Booking
            </button>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 p-10 flex gap-8 overflow-y-auto">
          {/* Main Column */}
          <div className="flex-1 space-y-8">
            <section>
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">
                Overview
              </h3>
              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                Managing your business bookings seamlessly. You have <span className="text-slate-900 font-semibold">12 appointments</span> today and a projected revenue of <span className="text-slate-900 font-semibold">$1,250</span>.
              </p>
            </section>

            <section className="grid grid-cols-3 gap-4">
              <div className="p-5 border border-slate-200 rounded-xl bg-white">
                <div className="text-xs text-slate-400 font-bold uppercase mb-2">Bookings Today</div>
                <div className="flex items-center gap-2 font-semibold text-emerald-600 text-2xl">
                  12
                </div>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-white">
                <div className="text-xs text-slate-400 font-bold uppercase mb-2">Pending Deposits</div>
                <div className="font-semibold text-slate-900 text-2xl">$450</div>
              </div>
              <div className="p-5 border border-slate-200 rounded-xl bg-white">
                <div className="text-xs text-slate-400 font-bold uppercase mb-2">No-Show Rate</div>
                <div className="font-semibold text-slate-900 text-2xl italic">2.4%</div>
              </div>
            </section>

            <section className="space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400">
                Recent Bookings
              </h3>
              <div className="space-y-2">
                <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full"></div>
                    <div>
                      <span className="text-slate-700 font-medium block">Haircut & Styling</span>
                      <span className="text-xs text-slate-500">Ana González - Today, 14:00</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-1 rounded">Confirmed</span>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
                    <div>
                      <span className="text-slate-700 font-medium block">Beard Trim</span>
                      <span className="text-xs text-slate-500">Roberto Méndez - Today, 15:30</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-yellow-50 text-yellow-700 border border-yellow-200 px-2 py-1 rounded">Pending Dep.</span>
                </div>
                <div className="p-4 bg-white border border-slate-200 rounded-lg flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-1.5 h-1.5 bg-slate-300 rounded-full"></div>
                    <div>
                      <span className="text-slate-700 font-medium block">Coloring</span>
                      <span className="text-xs text-slate-500">Lucia Pérez - Tomorrow, 10:00</span>
                    </div>
                  </div>
                  <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded">Draft</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-6 shrink-0">
            <div className="p-6 bg-slate-900 rounded-2xl text-white shadow-xl">
              <h4 className="text-sm font-bold mb-4">Revenue Trends</h4>
              <div className="h-32 flex items-end justify-between gap-1 mb-4">
                <div className="w-3 bg-indigo-400/20 rounded-t h-[40%]"></div>
                <div className="w-3 bg-indigo-400/40 rounded-t h-[60%]"></div>
                <div className="w-3 bg-indigo-400/60 rounded-t h-[55%]"></div>
                <div className="w-3 bg-indigo-400/80 rounded-t h-[80%]"></div>
                <div className="w-3 bg-indigo-400 rounded-t h-[95%]"></div>
                <div className="w-3 bg-indigo-400/50 rounded-t h-[70%]"></div>
                <div className="w-3 bg-indigo-400/30 rounded-t h-[50%]"></div>
              </div>
              <div className="flex justify-between items-center text-xs opacity-60">
                <span className="font-mono uppercase">Weekly Growth</span>
                <span className="font-bold">+18.4%</span>
              </div>
            </div>

            <div className="p-6 bg-white border border-slate-200 rounded-2xl">
              <h4 className="text-sm font-bold text-slate-900 mb-4">System Status</h4>
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full absolute inset-0 text-slate-100" viewBox="0 0 36 36">
                    <path className="stroke-current" strokeWidth="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <svg className="w-full h-full absolute inset-0 text-emerald-500" viewBox="0 0 36 36" strokeDasharray="100, 100">
                    <path className="stroke-current" strokeWidth="4" strokeLinecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="relative z-10 text-xs font-bold text-emerald-700">100%</span>
                </div>
                <div className="flex-1">
                  <p className="text-xs text-slate-500 mb-1">Stripe Checkout processing normally.</p>
                  <div className="text-[10px] text-emerald-600 font-bold uppercase">Healthy</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-indigo-50 border border-indigo-100 rounded-2xl">
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-indigo-600 text-[18px]">info</span>
                <span className="text-sm font-bold text-indigo-900">Platform Updates</span>
              </div>
              <p className="text-xs text-indigo-800 leading-relaxed">
                We&apos;ve enhanced the multi-tenant isolation rules as defined in PRD Sec 4.2.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
