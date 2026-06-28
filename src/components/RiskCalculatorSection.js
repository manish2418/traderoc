"use client";

import { useMemo, useState } from "react";

const forexPairs = [
  { symbol: "EUR/USD", pipValue: 10 },
  { symbol: "GBP/USD", pipValue: 10 },
  { symbol: "AUD/USD", pipValue: 10 },
  { symbol: "NZD/USD", pipValue: 10 },
  { symbol: "USD/JPY", pipValue: 9.1 },
  { symbol: "EUR/JPY", pipValue: 9.1 },
  { symbol: "GBP/JPY", pipValue: 9.1 },
  { symbol: "USD/CAD", pipValue: 7.4 },
  { symbol: "USD/CHF", pipValue: 10.9 },
  { symbol: "XAU/USD", pipValue: 1 },
];

const futuresContracts = [
  { symbol: "ES (S&P 500 E-mini)", tickValue: 12.5 },
  { symbol: "NQ (Nasdaq E-mini)", tickValue: 5 },
  { symbol: "YM (Dow E-mini)", tickValue: 5 },
  { symbol: "CL (Crude Oil)", tickValue: 10 },
  { symbol: "GC (Gold)", tickValue: 10 },
  { symbol: "6E (Euro FX)", tickValue: 12.5 },
  { symbol: "MES (Micro ES)", tickValue: 1.25 },
  { symbol: "MNQ (Micro NQ)", tickValue: 0.5 },
];

export default function RiskCalculatorSection() {
  const [mode, setMode] = useState("forex");
  const [accountBalance, setAccountBalance] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [stopLoss, setStopLoss] = useState(20);
  const [forexSymbol, setForexSymbol] = useState(forexPairs[0].symbol);
  const [futuresSymbol, setFuturesSymbol] = useState(futuresContracts[0].symbol);
  const [customValue, setCustomValue] = useState("");

  const selectedForex = useMemo(
    () => forexPairs.find((pair) => pair.symbol === forexSymbol) || forexPairs[0],
    [forexSymbol]
  );
  const selectedFutures = useMemo(
    () =>
      futuresContracts.find((contract) => contract.symbol === futuresSymbol) ||
      futuresContracts[0],
    [futuresSymbol]
  );

  const riskAmount = useMemo(() => {
    const balance = Number(accountBalance) || 0;
    const risk = Number(riskPercent) || 0;
    return (balance * risk) / 100;
  }, [accountBalance, riskPercent]);

  const valuePerUnit = useMemo(() => {
    const custom = Number(customValue);
    if (custom > 0) {
      return custom;
    }
    if (mode === "forex") {
      return selectedForex.pipValue;
    }
    return selectedFutures.tickValue;
  }, [customValue, mode, selectedForex, selectedFutures]);

  const result = useMemo(() => {
    const sl = Number(stopLoss) || 0;
    if (sl <= 0 || valuePerUnit <= 0 || riskAmount <= 0) {
      return 0;
    }
    return riskAmount / (sl * valuePerUnit);
  }, [riskAmount, stopLoss, valuePerUnit]);

  const forexLots = result;
  const forexUnits = result * 100000;
  const futuresContractsCount = result;

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Risk Calculator
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Lot size and risk calculator for Forex and Futures
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Calculate position size based on account balance, risk per trade, and
          stop loss distance so each trade follows a consistent risk model.
        </p>

        <div className="mt-8 inline-flex rounded-2xl border border-slate-200 bg-slate-50 p-1">
          <button
            type="button"
            onClick={() => setMode("forex")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold ${
              mode === "forex"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-600"
            }`}
          >
            Forex
          </button>
          <button
            type="button"
            onClick={() => setMode("futures")}
            className={`rounded-xl px-4 py-2 text-sm font-semibold ${
              mode === "futures"
                ? "bg-white text-violet-700 shadow-sm"
                : "text-slate-600"
            }`}
          >
            Futures
          </button>
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Account Balance ($)
              </label>
              <input
                type="number"
                value={accountBalance}
                onChange={(event) => setAccountBalance(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Risk Per Trade (%)
              </label>
              <input
                type="number"
                step="0.1"
                value={riskPercent}
                onChange={(event) => setRiskPercent(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Stop Loss ({mode === "forex" ? "Pips" : "Ticks"})
              </label>
              <input
                type="number"
                value={stopLoss}
                onChange={(event) => setStopLoss(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500"
              />
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                {mode === "forex" ? "Forex Pair" : "Futures Contract"}
              </label>
              {mode === "forex" ? (
                <select
                  value={forexSymbol}
                  onChange={(event) => setForexSymbol(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500"
                >
                  {forexPairs.map((pair) => (
                    <option key={pair.symbol} value={pair.symbol}>
                      {pair.symbol}
                    </option>
                  ))}
                </select>
              ) : (
                <select
                  value={futuresSymbol}
                  onChange={(event) => setFuturesSymbol(event.target.value)}
                  className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500"
                >
                  {futuresContracts.map((contract) => (
                    <option key={contract.symbol} value={contract.symbol}>
                      {contract.symbol}
                    </option>
                  ))}
                </select>
              )}
            </div>
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700">
                Custom {mode === "forex" ? "Pip Value" : "Tick Value"} (optional)
              </label>
              <input
                type="number"
                step="0.01"
                value={customValue}
                onChange={(event) => setCustomValue(event.target.value)}
                className="w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-violet-500"
                placeholder={`Default: ${valuePerUnit}`}
              />
            </div>
          </div>

          <div className="rounded-2xl border border-violet-200 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 p-5">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-600">
              Calculation Result
            </p>
            <div className="mt-4 space-y-3">
              <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                  Risk Amount
                </p>
                <p className="mt-1 text-2xl font-black text-slate-900">
                  ${riskAmount.toFixed(2)}
                </p>
              </div>
              {mode === "forex" ? (
                <>
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      Recommended Lot Size
                    </p>
                    <p className="mt-1 text-2xl font-black text-slate-900">
                      {forexLots.toFixed(2)} lots
                    </p>
                  </div>
                  <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                      Approx Position Units
                    </p>
                    <p className="mt-1 text-2xl font-black text-slate-900">
                      {Number.isFinite(forexUnits)
                        ? forexUnits.toFixed(0)
                        : "0"}{" "}
                      units
                    </p>
                  </div>
                </>
              ) : (
                <div className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.12em] text-slate-500">
                    Recommended Contracts
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-900">
                    {futuresContractsCount.toFixed(2)} contracts
                  </p>
                </div>
              )}
            </div>
            <p className="mt-5 text-sm text-slate-600">
              Tip: use this calculator before every trade to keep risk
              management consistent across all forex pairs and futures contracts.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
