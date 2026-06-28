export default function TradeXZoneSection() {
  return (
    <section id="tradex-zone" className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          TradeX Zone
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Dedicated trader learning hub, downloads, and live sessions
        </h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
          TradeX Zone is being prepared as your complete learning center for
          trading courses, PDF strategy notes, and live market mentoring.
        </p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-violet-50 to-indigo-50 p-5">
            <p className="text-base font-bold text-slate-900">My Courses</p>
            <p className="mt-2 text-sm text-slate-600">
              Structured trading courses and guided curriculum are launching
              soon for beginner to advanced traders.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <p className="rounded-lg bg-white px-3 py-2">Coming Soon</p>
              <p className="rounded-lg bg-white px-3 py-2">Coming Soon</p>
              <p className="rounded-lg bg-white px-3 py-2">Coming Soon</p>
            </div>
            <span className="mt-4 inline-flex items-center rounded-xl bg-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-600">
              Coming Soon
            </span>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="text-base font-bold text-slate-900">PDF & Docs Notes</p>
            <p className="mt-2 text-sm text-slate-600">
              Trading strategy PDFs, execution checklists, and review templates
              will be available for direct download soon.
            </p>
            <div className="mt-4 space-y-2 text-sm text-slate-700">
              <span className="block rounded-lg border border-slate-200 bg-white px-3 py-2">
                PDF Downloads - Coming Soon
              </span>
              <span className="block rounded-lg border border-slate-200 bg-white px-3 py-2">
                Docs Notes - Coming Soon
              </span>
              <span className="block rounded-lg border border-slate-200 bg-white px-3 py-2">
                Study Templates - Coming Soon
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-cyan-50 p-5">
            <p className="text-base font-bold text-slate-900">Live Trading / Class URL</p>
            <p className="mt-2 text-sm text-slate-600">
              Live trading classes, coaching calls, and market sessions will be
              available here when the zone goes live.
            </p>
            <div className="mt-4 rounded-xl border border-emerald-200 bg-white px-3 py-3 text-left">
              <p className="text-xs uppercase tracking-[0.15em] text-slate-500">Live link</p>
              <p className="mt-1 truncate text-sm font-semibold text-slate-800">Coming Soon</p>
            </div>
            <span className="mt-4 inline-flex items-center rounded-xl bg-emerald-200 px-4 py-2.5 text-sm font-semibold text-emerald-700">
              Coming Soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
