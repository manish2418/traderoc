import Image from "next/image";

const productCards = [
  {
    title: "Journaling + Analytics",
    description: "Auto-sync trades and transform raw execution into actionable performance insights.",
    image: "/automatedjournal.png",
    tone: "from-indigo-50 to-violet-50",
  },
  {
    title: "Backtesting",
    description: "Validate your trading strategy on historical data before risking live capital.",
    image: "/backtest.png",
    tone: "from-rose-50 to-pink-50",
  },
  {
    title: "ROC AI",
    description: "AI trading analysis that surfaces leaks, patterns, and high-impact improvements.",
    image: "/aiinsights.png",
    tone: "from-fuchsia-50 to-violet-50",
  },
  {
    title: "Prop Firm Sync",
    description: "Track prop rules, drawdown limits, and challenge progress across accounts.",
    image: "/prop.png",
    tone: "from-amber-50 to-orange-50",
  },
];

const quickLinks = [
  {
    title: "Trade Replay",
    description: "Replay market structure tick-by-tick and sharpen your entries and exits.",
  },
  {
    title: "Spaces",
    description: "Collaborate with mentors and traders in focused, invite-only strategy rooms.",
  },
];

export default function ProductMegaMenu() {
  return (
    <div className="invisible absolute left-1/2 top-full z-[9999] mt-4 w-[1020px] max-w-[95vw] -translate-x-1/2 opacity-0 transition-all duration-200 group-hover/menu:visible group-hover/menu:opacity-100 group-focus-within/menu:visible group-focus-within/menu:opacity-100">
      <div className="rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-300/50">
        <div className="grid gap-4 lg:grid-cols-[2fr_1.05fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {productCards.map((card) => (
              <div
                key={card.title}
                className={`group cursor-default rounded-2xl border border-slate-200 bg-gradient-to-br ${card.tone} p-4`}
              >
                <h4 className="text-[1.35rem] font-extrabold tracking-tight text-slate-900">
                  {card.title}
                </h4>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
                <div className="mt-4 overflow-hidden rounded-xl border border-white bg-white/70">
                  <Image
                    src={card.image}
                    alt={card.title}
                    width={720}
                    height={420}
                    className="h-28 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <div className="space-y-4">
              {quickLinks.map((link) => (
                <div
                  key={link.title}
                  className="block cursor-default rounded-xl border border-transparent p-3"
                >
                  <h5 className="text-4xl font-black tracking-tight text-slate-900">
                    {link.title}
                  </h5>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    {link.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/traderoc.png"
                alt="Traderoc dashboard preview"
                width={1200}
                height={780}
                className="h-56 w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
