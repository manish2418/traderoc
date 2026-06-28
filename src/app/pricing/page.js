import Image from "next/image";
import Link from "next/link";

const plans = [
  {
    name: "Free Trial",
    price: "$0",
    period: "for 14 days",
    badge: "Best value",
    cta: "Start Free Trial",
    comingSoon: false,
    features: [
      "Smart trade journal",
      "AI trade review insights",
      "Performance analytics dashboard",
      "Web and mobile access",
    ],
  },
  {
    name: "Pro Plan",
    price: "Coming Soon",
    period: "pre-launch waitlist",
    badge: "Most Popular",
    cta: "Notify Me",
    comingSoon: true,
    features: [
      "Advanced AI coaching",
      "Deep behavior pattern analytics",
      "Unlimited playbooks",
      "Priority support",
    ],
  },
  {
    name: "Team Plan",
    price: "Coming Soon",
    period: "enterprise waitlist",
    badge: "For desks",
    cta: "Join Waitlist",
    comingSoon: true,
    features: [
      "Multi-user workspaces",
      "Team performance boards",
      "Shared review workflows",
      "Desk manager insights",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <Link href="/" className="flex items-center">
            <span className="relative block h-11 w-[230px] overflow-hidden md:h-12 md:w-[250px]">
              <Image
                src="/logo.png"
                alt="Traderoc logo"
                fill
                className="object-cover object-left scale-[1.08]"
                priority
              />
            </span>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Back to Home
          </Link>
        </div>
      </header>

      <main className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Trading Journal Pricing
          </p>
          <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Affordable pricing for serious trading performance growth
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            Start with a free AI trading journal trial, track every trade, and
            upgrade when advanced analytics plans go live.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-3xl border p-6 shadow-sm ${
                plan.comingSoon
                  ? "border-slate-200 bg-white"
                  : "border-violet-200 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 shadow-violet-200/40"
              }`}
            >
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black tracking-tight text-slate-900">
                  {plan.name}
                </h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    plan.comingSoon
                      ? "bg-slate-100 text-slate-600"
                      : "bg-violet-100 text-violet-700"
                  }`}
                >
                  {plan.badge}
                </span>
              </div>

              <div className="mt-5">
                <p
                  className={`font-black tracking-tight ${
                    plan.comingSoon
                      ? "text-3xl text-slate-700"
                      : "text-5xl text-slate-900"
                  }`}
                >
                  {plan.price}
                </p>
                <p className="mt-1 text-sm text-slate-500">{plan.period}</p>
              </div>

              <ul className="mt-6 space-y-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-slate-700">
                    <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`mt-7 inline-flex w-full items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition ${
                  plan.comingSoon
                    ? "border border-slate-300 bg-white text-slate-700 hover:border-slate-400"
                    : "bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 text-white shadow-lg shadow-violet-300/50 hover:translate-y-[-1px]"
                }`}
              >
                {plan.cta}
              </a>
            </article>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          Transparent pricing for traders. No hidden fees and no long lock-ins.
        </p>
      </main>
    </div>
  );
}
