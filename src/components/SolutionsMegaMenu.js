const solutionItems = [
  {
    title: "For New Traders",
    description:
      "Build strong trading habits, avoid common mistakes, and start with a structured trading journal.",
    icon: "◈",
    tone: "from-amber-50 to-yellow-50 text-amber-600",
  },
  {
    title: "For Developing Traders",
    description:
      "Turn your setup into a repeatable process with clear metrics, replay, and performance reviews.",
    icon: "≈",
    tone: "from-sky-50 to-cyan-50 text-sky-600",
  },
  {
    title: "For Consistent Traders",
    description:
      "Protect your edge, optimize risk management, and scale consistency with advanced trade analytics.",
    icon: "↗",
    tone: "from-emerald-50 to-teal-50 text-emerald-600",
  },
  {
    title: "For Prop Firm Traders",
    description:
      "Track prop challenge rules in real time and get alerts before you violate risk limits.",
    icon: "⌁",
    tone: "from-violet-50 to-fuchsia-50 text-violet-600",
  },
  {
    title: "For Trading Teams",
    description:
      "Coach members with shared dashboards, accountability workflows, and team-level progress tracking.",
    icon: "◎",
    tone: "from-rose-50 to-pink-50 text-rose-600",
  },
];

export default function SolutionsMegaMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-[9999] mt-4 w-[760px] max-w-[92vw] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover/solutions:visible group-hover/solutions:opacity-100 group-focus-within/solutions:visible group-focus-within/solutions:opacity-100">
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-2xl shadow-slate-300/50">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Solutions By Trader Type
          </p>
          <a
            href="#"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600 hover:text-violet-700"
          >
            Explore all solutions
          </a>
        </div>

        <div className="space-y-2">
          {solutionItems.map((item) => (
            <a
              key={item.title}
              href="#"
              className="group flex items-start gap-4 rounded-2xl border border-transparent p-3 transition hover:border-slate-200 hover:bg-slate-50"
            >
              <span
                className={`inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br text-base font-bold ${item.tone}`}
              >
                {item.icon}
              </span>
              <span>
                <span className="block text-[1.7rem] font-black leading-none tracking-tight text-slate-900">
                  {item.title}
                </span>
                <span className="mt-1.5 block text-sm leading-6 text-slate-600">
                  {item.description}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
