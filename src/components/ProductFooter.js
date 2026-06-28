import Image from "next/image";
import Link from "next/link";

export default function ProductFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-indigo-900/60 bg-[#050b26] text-slate-200">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.16),transparent_40%),radial-gradient(circle_at_85%_85%,rgba(168,85,247,0.14),transparent_35%)]" />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <a
              href="#"
              className="inline-flex items-center rounded-2xl bg-gradient-to-r from-violet-500/40 via-indigo-500/40 to-fuchsia-500/40 p-[1px] shadow-[0_12px_30px_rgba(99,102,241,0.25)]"
            >
              <span className="inline-flex min-w-[250px] items-center justify-center rounded-2xl bg-white px-6 py-2">
                <span className="relative block h-10 w-[210px] overflow-hidden">
                  <Image
                    src="/logo.png"
                    alt="Traderoc logo"
                    fill
                    className="object-cover object-left scale-[1.08]"
                  />
                </span>
              </span>
            </a>
            <p className="max-w-sm text-sm leading-7 text-slate-300">
              Traderoc is an AI trading journal platform built for trade
              tracking, performance analytics, backtesting, and execution replay.
            </p>
            <p className="max-w-sm text-xs leading-6 text-slate-500">
              Educational content only. Trading carries risk and requires proper
              risk management.
            </p>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-base font-semibold tracking-wide text-white">
              Company
            </p>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Features
            </a>
            <Link href="/blog" className="block text-slate-400 transition hover:text-white">
              Blog
            </Link>
            <Link href="/pricing" className="block text-slate-400 transition hover:text-white">
              Pricing
            </Link>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Broker Integrations
            </a>
            <Link
              href="/contact-us"
              className="block text-slate-400 transition hover:text-white"
            >
              Contact
            </Link>
          </div>

          <div className="space-y-3 text-sm">
            <p className="text-base font-semibold tracking-wide text-white">
              Compare
            </p>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Traderoc vs TraderSync
            </a>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Traderoc vs Edgewonk
            </a>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Traderoc vs Notion
            </a>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Traderoc vs TradingView
            </a>
            <a href="#" className="block text-slate-400 transition hover:text-white">
              Traderoc vs FX Replay
            </a>
          </div>

          <div className="space-y-5">
            <p className="text-base font-semibold tracking-wide text-white">
              Follow us
            </p>
            <div className="grid grid-cols-1 gap-3 text-xs font-semibold">
              <a
                href="https://www.instagram.com/traderocoffical/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-indigo-800 bg-indigo-950/60 px-3 py-2.5 text-center text-slate-200 transition hover:border-violet-500 hover:text-white"
              >
                Instagram
              </a>
            </div>
            <a
              href="#"
              className="inline-block text-sm font-medium text-violet-300 transition hover:text-violet-200"
            >
              Explore 500+ broker integrations »
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-indigo-900/60 pt-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {year} Traderoc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/privacy-policy" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="transition hover:text-slate-300">
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
