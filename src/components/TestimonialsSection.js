const testimonials = [
  {
    name: "Arjun M.",
    role: "Futures Trader",
    quote:
      "Traderoc showed me exactly why I overtraded on weak days. My trade journal review process is now structured and profitable.",
    metric: "Win rate up 11%",
  },
  {
    name: "Neha R.",
    role: "Prop Firm Challenger",
    quote:
      "Prop Firm Sync plus AI feedback made challenge prep simple. I passed with fewer emotional errors and cleaner risk control.",
    metric: "Passed in 34 days",
  },
  {
    name: "Rahul S.",
    role: "Swing Trader",
    quote:
      "Trade replay changed my execution quality. Reviewing bar-by-bar helped me improve entries and protect profits faster.",
    metric: "Drawdown reduced 27%",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-600">
            Testimonials
          </p>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
            Trusted by traders who track performance seriously
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Real stories from traders using Traderoc for AI trade analysis,
            trading journal reviews, and consistent execution improvement.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5"
            >
              <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4">
                <div>
                  <p className="text-sm font-bold text-slate-900">{item.name}</p>
                  <p className="text-xs text-slate-500">{item.role}</p>
                </div>
                <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold text-violet-700">
                  {item.metric}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
