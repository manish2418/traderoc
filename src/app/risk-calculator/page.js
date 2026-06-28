import Image from "next/image";
import Link from "next/link";
import RiskCalculatorSection from "@/components/RiskCalculatorSection";

export const metadata = {
  title: "Risk Calculator | Forex & Futures Position Size - Traderoc",
  description:
    "Use Traderoc risk calculator to compute forex lot size and futures contracts using account size, risk percentage, and stop loss distance.",
};

export default function RiskCalculatorPage() {
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

      <main className="pt-14">
        <RiskCalculatorSection />
      </main>
    </div>
  );
}
