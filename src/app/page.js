import Image from "next/image";
import Link from "next/link";
import ProductFooter from "@/components/ProductFooter";
import ProductHubSection from "@/components/ProductHubSection";
import ProductMegaMenu from "@/components/ProductMegaMenu";
import TestimonialsSection from "@/components/TestimonialsSection";
import CommunitySection from "@/components/CommunitySection";
import LaunchCountdownSection from "@/components/LaunchCountdownSection";
import TradeXZoneSection from "@/components/TradeXZoneSection";
import FAQSection from "@/components/FAQSection";
import RiskCalculatorSection from "@/components/RiskCalculatorSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="relative z-[10000] border-b border-slate-200/70 bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
          <a href="#" className="flex items-center">
            <span className="relative block h-11 w-[230px] overflow-hidden md:h-12 md:w-[250px]">
              <Image
                src="/logo.png"
                alt="Traderoc logo"
                fill
                className="object-cover object-left scale-[1.08]"
                priority
              />
            </span>
          </a>
          <nav className="relative z-[10001] hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <div className="group/menu relative">
              <a
                href="#"
                className="inline-flex items-center gap-1.5 hover:text-slate-900"
              >
                Products
                <span className="text-xs">▾</span>
              </a>
              <ProductMegaMenu />
            </div>
            <a href="#tradex-zone" className="hover:text-slate-900">
              TradeX Zone
            </a>
            <a href="/risk-calculator" className="hover:text-slate-900">
              Risk Calculator
            </a>
            <a href="/pricing" className="hover:text-slate-900">
              Pricing
            </a>
            <a href="/blog" className="hover:text-slate-900">
              Blog
            </a>
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/wishlist"
              className="hidden text-sm font-semibold text-slate-700 md:inline-flex"
            >
              Log In
            </Link>
            <Link
              href="/wishlist"
              className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-300/50 transition hover:scale-[1.02]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="mx-auto grid w-full max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-24">
        <section>
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            AI Trading Journal Software
          </p>
          <h1 className="max-w-xl text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            The AI Trading Journal Built To Improve Every Trade
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            Traderoc helps you journal trades automatically, review mistakes
            with AI insights, run backtesting, and replay executions so your
            trading strategy becomes more consistent and profitable.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/wishlist"
              className="inline-flex items-center rounded-2xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-7 py-3.5 text-base font-semibold text-white shadow-xl shadow-fuchsia-300/40 transition hover:translate-y-[-1px]"
            >
              Get Started
            </Link>
            <a
              href="#"
              className="inline-flex items-center rounded-2xl border border-slate-300 bg-white px-7 py-3.5 text-base font-semibold text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
            >
              Explore Platform
            </a>
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600">
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Automated Journaling
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Backtesting
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Trade Replay
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              AI Insights
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Trader Community
            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Prop Firm Sync

            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Performance Reports

            </span>
            <span className="rounded-full border border-slate-200 bg-white px-4 py-2">
              Strategy Tracking

            </span>
          </div>
        </section>

        <section className="relative">
          <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-tr from-indigo-200 via-fuchsia-100 to-cyan-100 blur-2xl" />
          <div className="overflow-hidden rounded-[2rem] border border-violet-100 bg-white p-3 shadow-2xl shadow-violet-200/60">
            <Image
              src="/traderoc.png"
              alt="Traderoc dashboard"
              width={1200}
              height={800}
              className="h-auto w-full rounded-[1.4rem]"
              priority
            />
          </div>
        </section>
      </main>

      <LaunchCountdownSection />
      <RiskCalculatorSection />

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
        <div className="rounded-3xl border border-slate-200 bg-white">
          <div className="grid gap-6 border-b border-slate-200 px-6 py-8 md:grid-cols-4 md:gap-0 md:px-10">
            <div className="text-center md:border-r md:border-slate-200">
              <p className="text-4xl font-extrabold tracking-tight text-slate-800">
                18.9B
              </p>
              <p className="mt-1 text-sm text-slate-500">Trades logged and analyzed</p>
            </div>
            <div className="text-center md:border-r md:border-slate-200">
              <p className="text-4xl font-extrabold tracking-tight text-slate-800">
                120K+
              </p>
              <p className="mt-1 text-sm text-slate-500">Active traders trust Traderoc</p>
            </div>
            <div className="text-center md:border-r md:border-slate-200">
              <p className="text-4xl font-extrabold tracking-tight text-slate-800">
                620+
              </p>
              <p className="mt-1 text-sm text-slate-500">Supported broker integrations</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extrabold tracking-tight text-slate-800">
                4.9
              </p>
              <p className="mt-1 text-sm text-slate-500">Average trader satisfaction rating</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 px-6 py-5 text-sm text-slate-600 md:px-10">
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">
              Connects with
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-900 text-[10px] font-bold text-white">
                IB
              </span>
              Interactive Brokers
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-700 text-[10px] font-bold text-white">
                FT
              </span>
              FTMO
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-700 text-[10px] font-bold text-white">
                AX
              </span>
              Apex
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-700 text-[10px] font-bold text-white">
                TS
              </span>
              TradeStation
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                RH
              </span>
              Robinhood
            </span>
            <span className="text-xs text-slate-400">+312 more</span>
          </div>
        </div>
      </section>

      <ProductHubSection />
      <TestimonialsSection />
      <CommunitySection />
      <TradeXZoneSection />
      <FAQSection />
      <ProductFooter />
    </div>
  );
}
