"use client";

import Link from "next/link";
import { useState } from "react";

export default function WishlistPage() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/wishlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "wishlist_page" }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setErrorMessage(data?.message || "Unable to join wishlist.");
        return;
      }

      setServerMessage(data.message || "You have been added to the wishlist.");
      setSubmitted(true);
    } catch {
      setErrorMessage("Unable to join wishlist right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-16 text-slate-900 lg:px-10">
      <div className="mx-auto w-full max-w-xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          Early Access Waitlist
        </p>
        <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-900">
          Join the Traderoc AI trading journal wishlist
        </h1>
        <p className="mt-4 text-base leading-relaxed text-slate-600">
          Be first to access new trading journal features, AI trade analysis,
          backtesting tools, and live trader education updates.
        </p>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-7 space-y-4">
            <label className="block text-sm font-semibold text-slate-700" htmlFor="email">
              Email address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-base text-slate-900 outline-none transition focus:border-violet-500"
              placeholder="you@example.com"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-300/50 transition hover:translate-y-[-1px]"
            >
              {isLoading ? "Joining..." : "Join Early Access"}
            </button>
            {errorMessage ? (
              <p className="text-sm font-medium text-rose-600">{errorMessage}</p>
            ) : null}
          </form>
        ) : (
          <div className="mt-7 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-4 text-emerald-800">
            {serverMessage || "Thanks! You are on the waitlist."} We will
            notify you at {email}.
          </div>
        )}

        <Link
          href="/"
          className="mt-6 inline-flex text-sm font-semibold text-violet-600 transition hover:text-violet-700"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
