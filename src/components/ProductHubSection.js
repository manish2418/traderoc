"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const products = [
  {
    id: "journal",
    name: "Automated Journal",
    kicker: "Automated Journal",
    title: "Auto-log every fill with zero manual entry.",
    description:
      "Connect your broker once and let Traderoc capture entries, exits, PnL, and tags in real time for clean trade journaling.",
    bullets: [
      "500+ brokers and prop firms",
      "Real-time sync and auto-tagging",
      "Notes, screenshots, and voice memos",
    ],
    accent: "indigo",
    image: "/automatedjournal.png",
  },
  {
    id: "backtesting",
    name: "Backtesting",
    kicker: "Backtesting",
    title: "Backtest your strategy before risking capital.",
    description:
      "Test setups across historical market data and validate win rate, drawdown, and risk-to-reward before live execution.",
    bullets: [
      "Tick-level historical data",
      "Bar-by-bar replay",
      "Multi-strategy comparison",
    ],
    accent: "cyan",
    image: "/backtest.png",
  },
  {
    id: "replay",
    name: "Trade Replay",
    kicker: "Trade Replay",
    title: "Replay every trade candle by candle.",
    description:
      "Review your execution exactly as the market moved so you can refine entries, exits, and trade management decisions.",
    bullets: [
      "Synced with your fills",
      "Variable playback speed",
      "Drawing tools and annotations",
    ],
    accent: "violet",
    image: "/replay.png",
  },
  {
    id: "insights",
    name: "AI Insights",
    kicker: "AI Insights",
    title: "See what is hurting performance in plain English.",
    description:
      "AI trade analysis finds recurring mistakes, timing leaks, and behavior patterns with practical next-step recommendations.",
    bullets: [
      "Behavior and tilt detection",
      "Plain-English Q&A",
      "Weekly performance digest",
    ],
    accent: "amber",
    image: "/aiinsights.png",
  },
  {
    id: "spaces",
    name: "Spaces",
    kicker: "Spaces",
    title: "Build a focused private trading community.",
    description:
      "Create invite-only rooms to share setups, trade ideas, and reviews with mentors, teammates, or accountability partners.",
    bullets: [
      "Private invite-only rooms",
      "Live trade sharing",
      "Leaderboards and challenges",
    ],
    accent: "teal",
    image: "/spaces.png",
  },
  {
    id: "prop-sync",
    name: "Prop Firm Sync",
    kicker: "Prop Firm Sync",
    title: "Track prop firm rules with confidence.",
    description:
      "Monitor drawdown and daily loss limits across prop accounts and get alerts before a rule breach impacts your challenge.",
    bullets: [
      "Rule monitoring in real time",
      "Pass-rate forecasting",
      "Multi-account dashboards",
    ],
    accent: "pink",
    image: "/prop.png",
  },
];

const accentStyles = {
  indigo:
    "border-indigo-200 text-indigo-700 bg-indigo-50 shadow-indigo-100/80 ring-indigo-500",
  cyan: "border-cyan-200 text-cyan-700 bg-cyan-50 shadow-cyan-100/80 ring-cyan-500",
  violet:
    "border-violet-200 text-violet-700 bg-violet-50 shadow-violet-100/80 ring-violet-500",
  amber:
    "border-amber-200 text-amber-700 bg-amber-50 shadow-amber-100/80 ring-amber-500",
  teal: "border-teal-200 text-teal-700 bg-teal-50 shadow-teal-100/80 ring-teal-500",
  pink: "border-pink-200 text-pink-700 bg-pink-50 shadow-pink-100/80 ring-pink-500",
};

const panelStyles = {
  indigo: "from-indigo-50 via-white to-violet-50",
  cyan: "from-cyan-50 via-white to-teal-50",
  violet: "from-violet-50 via-white to-fuchsia-50",
  amber: "from-amber-50 via-white to-orange-50",
  teal: "from-teal-50 via-white to-cyan-50",
  pink: "from-pink-50 via-white to-violet-50",
};

export default function ProductHubSection() {
  const [activeId, setActiveId] = useState(products[0].id);

  const activeProduct = useMemo(
    () => products.find((product) => product.id === activeId) || products[0],
    [activeId]
  );

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
      <div className="text-center">
        <p className="text-base text-slate-500">
          <span className="mr-2 text-violet-500">•</span>
          Traderoc Platform
        </p>
        <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Six trading tools. <span className="text-violet-600">One growth system.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          From AI trading journal workflows to backtesting and replay, every
          Traderoc module is built to help you trade with discipline.
        </p>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        {products.map((product) => {
          const isActive = product.id === activeProduct.id;
          return (
            <button
              key={product.id}
              type="button"
              onClick={() => setActiveId(product.id)}
              className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${
                isActive
                  ? `${accentStyles[product.accent]} ring-2`
                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
              }`}
            >
              <span
                className={`inline-block h-2.5 w-2.5 rounded-full ${
                  isActive ? "bg-current" : "bg-slate-300"
                }`}
              />
              {product.name}
            </button>
          );
        })}
      </div>

      <div
        className={`mt-8 grid gap-8 rounded-3xl border border-slate-200 bg-gradient-to-br p-8 shadow-sm lg:grid-cols-2 lg:p-10 ${panelStyles[activeProduct.accent]}`}
      >
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
            {activeProduct.kicker}
          </p>
          <h3 className="mt-3 text-4xl font-black leading-tight tracking-tight text-slate-900">
            {activeProduct.title}
          </h3>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-600">
            {activeProduct.description}
          </p>
          <ul className="mt-6 space-y-2 text-slate-700">
            {activeProduct.bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-2 text-base">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-violet-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center">
          {activeProduct.image ? (
            <div className="w-full overflow-hidden rounded-2xl border border-white/70 bg-white/80 p-3 shadow-xl backdrop-blur">
              <Image
                src={activeProduct.image}
                alt={`${activeProduct.name} preview`}
                width={1200}
                height={800}
                className="h-auto w-full rounded-xl"
              />
            </div>
          ) : (
            <div className="w-full rounded-2xl border border-white/70 bg-white/80 p-5 shadow-xl backdrop-blur">
              <div className="grid grid-cols-5 gap-2">
                <div className="h-3 rounded-full bg-slate-200" />
                <div className="h-3 rounded-full bg-slate-100" />
                <div className="h-3 rounded-full bg-slate-100" />
                <div className="h-3 rounded-full bg-slate-200" />
                <div className="h-3 rounded-full bg-slate-100" />
              </div>
              <div className="mt-4 space-y-3">
                <div className="h-12 rounded-xl bg-gradient-to-r from-emerald-100 to-emerald-50" />
                <div className="h-12 rounded-xl bg-gradient-to-r from-violet-100 to-fuchsia-50" />
                <div className="h-12 rounded-xl bg-gradient-to-r from-cyan-100 to-blue-50" />
                <div className="h-12 rounded-xl bg-gradient-to-r from-amber-100 to-orange-50" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
