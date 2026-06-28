export default function CommunitySection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-6 py-14 text-center lg:px-10">
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.22),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.2),transparent_42%)]" />
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Trading Community
        </p>
        <h2 className="mx-auto mt-3 max-w-4xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          Thousands of traders are building their edge together on{" "}
          <span className="bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 bg-clip-text text-transparent">
            Traderoc
          </span>
          .
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-600">
          Join a high-signal trading community to share setups, review trades,
          learn from mentors, and stay accountable with real performance goals.
        </p>

        <div className="mt-8">
          <a
            href="#"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-9 py-3.5 text-base font-semibold text-white shadow-lg shadow-violet-300/50 transition hover:translate-y-[-1px]"
          >
            Join Traderoc Community
          </a>
        </div>

        <div className="relative mt-12 h-64 w-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white/70">
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-200/40 blur-2xl" />
          <div className="absolute left-[10%] top-[68%] h-px w-[31%] rotate-[14deg] bg-slate-300/80" />
          <div className="absolute left-[20%] top-[42%] h-px w-[30%] -rotate-[8deg] bg-slate-300/80" />
          <div className="absolute left-[32%] top-[60%] h-px w-[20%] rotate-[24deg] bg-slate-300/80" />
          <div className="absolute left-[45%] top-[49%] h-px w-[18%] -rotate-[18deg] bg-slate-300/80" />
          <div className="absolute left-[54%] top-[38%] h-px w-[28%] rotate-[10deg] bg-slate-300/80" />
          <div className="absolute left-[62%] top-[68%] h-px w-[24%] -rotate-[16deg] bg-slate-300/80" />
          <div className="absolute left-[28%] top-[72%] h-px w-[41%] -rotate-[5deg] bg-slate-300/70" />
          <div className="absolute left-[14%] top-[52%] h-px w-[68%] rotate-[6deg] bg-slate-300/60" />

          <div className="absolute left-[7%] top-[56%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-orange-300 to-rose-300 shadow-md" />
          <div className="absolute left-[18%] top-[26%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-cyan-300 to-blue-300 shadow-md" />
          <div className="absolute left-[30%] top-[62%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-indigo-300 to-violet-300 shadow-md" />
          <div className="absolute left-[39%] top-[33%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-fuchsia-300 to-purple-300 shadow-md" />
          <div className="absolute left-1/2 top-1/2 h-20 w-20 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-gradient-to-br from-violet-500 to-pink-500 shadow-xl shadow-violet-300/60" />
          <div className="absolute left-[56%] top-[28%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-amber-300 to-orange-300 shadow-md" />
          <div className="absolute left-[66%] top-[59%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-teal-300 to-cyan-300 shadow-md" />
          <div className="absolute left-[76%] top-[35%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-rose-300 to-pink-300 shadow-md" />
          <div className="absolute left-[86%] top-[56%] h-12 w-12 rounded-full border-4 border-white bg-gradient-to-br from-slate-300 to-indigo-300 shadow-md" />

          <div className="absolute left-[25%] top-[45%] h-2.5 w-2.5 rounded-full bg-violet-500" />
          <div className="absolute left-[47%] top-[63%] h-2.5 w-2.5 rounded-full bg-indigo-500" />
          <div className="absolute left-[60%] top-[49%] h-2.5 w-2.5 rounded-full bg-fuchsia-500" />
          <div className="absolute left-[73%] top-[68%] h-2.5 w-2.5 rounded-full bg-violet-500" />
        </div>
      </div>
    </section>
  );
}
