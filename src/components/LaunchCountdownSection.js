"use client";

import { useEffect, useRef, useState } from "react";

export default function LaunchCountdownSection() {
  const sectionRef = useRef(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  useEffect(() => {
    if (!sectionRef.current || hasTriggered) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsPopupOpen(true);
          setHasTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.55 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [hasTriggered]);

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
        body: JSON.stringify({ email, source: "coming_soon_popup" }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setErrorMessage(data?.message || "Unable to join wishlist.");
        return;
      }

      setServerMessage(data.message || "You are on the wishlist now.");
      setIsSubmitted(true);
    } catch {
      setErrorMessage("Unable to join wishlist right now.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} className="mx-auto w-full max-w-7xl px-6 pb-20 lg:px-10">
      <div className="relative overflow-hidden rounded-3xl border border-violet-100 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 px-6 py-10 shadow-sm lg:px-10">
        <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-violet-200/40 blur-3xl" />
        <div className="absolute -bottom-20 left-0 h-56 w-56 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="relative">
          <p className="text-center text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
            Product Launch Update
          </p>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            New AI trading journal release is coming soon
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-600 sm:text-lg">
            We are shipping major upgrades across trade analytics, strategy
            backtesting, and execution replay for a better trading workflow.
          </p>

          <div className="mt-8 flex items-center justify-center">
            <div className="rounded-3xl border border-violet-200 bg-white/90 px-8 py-6 shadow-lg shadow-violet-200/50">
              <div className="flex flex-col items-center gap-4">
                <svg
                  width="88"
                  height="88"
                  viewBox="0 0 64 64"
                  className="drop-shadow-[0_8px_16px_rgba(139,92,246,0.35)]"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="frame" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                    <linearGradient id="sandTop" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fde68a" />
                      <stop offset="100%" stopColor="#f59e0b" />
                    </linearGradient>
                    <linearGradient id="sandBottom" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#f97316" />
                    </linearGradient>
                  </defs>
                  <g>
                    <animateTransform
                      attributeName="transform"
                      type="rotate"
                      values="0 32 32;0 32 32;180 32 32;180 32 32;360 32 32"
                      dur="2.6s"
                      repeatCount="indefinite"
                    />
                    <rect
                      x="18"
                      y="8"
                      width="28"
                      height="4"
                      rx="2"
                      fill="url(#frame)"
                    />
                    <rect
                      x="18"
                      y="52"
                      width="28"
                      height="4"
                      rx="2"
                      fill="url(#frame)"
                    />
                    <path
                      d="M20 12h24c-1 10-5 14-12 20-7-6-11-10-12-20Z"
                      fill="url(#sandTop)"
                    />
                    <path
                      d="M20 52h24c-1-10-5-14-12-20-7 6-11 10-12 20Z"
                      fill="url(#sandBottom)"
                    />
                    <rect x="31" y="29" width="2" height="6" rx="1" fill="#f59e0b">
                      <animate
                        attributeName="height"
                        values="6;1;6"
                        dur="1.3s"
                        repeatCount="indefinite"
                      />
                    </rect>
                  </g>
                </svg>
                <p className="rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-white">
                  Coming Soon
                </p>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm font-medium text-slate-500">
            Stay tuned. Early access details will be announced soon.
          </p>
        </div>
      </div>

      {isPopupOpen ? (
        <div className="fixed inset-0 z-[12000] flex items-center justify-center bg-slate-900/40 px-4">
          <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-2xl sm:p-7">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600">
                  Traderoc Wishlist
                </p>
                <h3 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                  Get early access first
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setIsPopupOpen(false)}
                className="rounded-lg border border-slate-200 px-2 py-1 text-sm font-semibold text-slate-500 hover:text-slate-700"
              >
                X
              </button>
            </div>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Enter your email to join the Traderoc early access list for the
              new AI trading journal platform release.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-violet-500"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white"
                >
                  {isLoading ? "Joining..." : "Join Wishlist"}
                </button>
                {errorMessage ? (
                  <p className="text-sm font-medium text-rose-600">{errorMessage}</p>
                ) : null}
              </form>
            ) : (
              <div className="mt-5 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-800">
                {serverMessage || "Thanks. You are on the wishlist now."}
              </div>
            )}
          </div>
        </div>
      ) : null}
    </section>
  );
}
