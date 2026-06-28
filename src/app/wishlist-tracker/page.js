"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

function maskEmail(email) {
  if (!email || !email.includes("@")) {
    return "Anonymous user";
  }
  const [name, domain] = email.split("@");
  if (!name || !domain) {
    return "Anonymous user";
  }
  const safeName =
    name.length <= 2
      ? `${name[0] || "x"}*`
      : `${name.slice(0, 2)}${"*".repeat(Math.max(2, name.length - 2))}`;
  return `${safeName}@${domain}`;
}

function getRelativeTimeLabel(value) {
  if (!value) {
    return "just now";
  }
  const timestamp = new Date(value).getTime();
  if (Number.isNaN(timestamp)) {
    return "just now";
  }
  const diffMs = Date.now() - timestamp;
  const seconds = Math.max(0, Math.floor(diffMs / 1000));
  if (seconds < 60) {
    return "just now";
  }
  const minutes = Math.floor(seconds / 60);
  if (minutes < 60) {
    return `${minutes}m ago`;
  }
  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours}h ago`;
  }
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

function buildTrendData(records, bucketCount = 20, windowHours = 24) {
  const windowMs = windowHours * 60 * 60 * 1000;
  const now = Date.now();
  const start = now - windowMs;
  const bucketSize = windowMs / bucketCount;
  const buckets = Array.from({ length: bucketCount }, () => 0);

  records.forEach((record) => {
    const timestamp = new Date(record.updatedAt || record.createdAt || "").getTime();
    if (Number.isNaN(timestamp) || timestamp < start || timestamp > now) {
      return;
    }
    const index = Math.min(
      bucketCount - 1,
      Math.max(0, Math.floor((timestamp - start) / bucketSize))
    );
    buckets[index] += 1;
  });

  return buckets;
}

export default function WishlistTrackerPage() {
  const [adminKey, setAdminKey] = useState("");
  const [records, setRecords] = useState([]);
  const [total, setTotal] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isLive, setIsLive] = useState(false);
  const [liveMessage, setLiveMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const latestSeenRef = useRef(0);
  const liveMessageTimeoutRef = useRef(null);

  const loadRecords = useCallback(async (silent = false) => {
    if (!adminKey.trim()) {
      setErrorMessage("Enter admin key first.");
      return;
    }

    if (!silent) {
      setIsLoading(true);
      setErrorMessage("");
    }

    try {
      const response = await fetch("/api/wishlist", {
        method: "GET",
        headers: {
          "x-admin-key": adminKey.trim(),
        },
      });
      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setErrorMessage(data?.message || "Unable to fetch records.");
        setRecords([]);
        setTotal(0);
        setIsLive(false);
        return;
      }

      const nextRecords = data.records || [];
      setRecords(nextRecords);
      setTotal(data.total || 0);

      const latestTimestamp = new Date(
        nextRecords[0]?.updatedAt || nextRecords[0]?.createdAt || 0
      ).getTime();

      if (
        silent &&
        latestSeenRef.current &&
        latestTimestamp &&
        latestTimestamp > latestSeenRef.current
      ) {
        setLiveMessage(`${maskEmail(nextRecords[0].email)} joined the wishlist.`);
        if (liveMessageTimeoutRef.current) {
          clearTimeout(liveMessageTimeoutRef.current);
        }
        liveMessageTimeoutRef.current = setTimeout(() => {
          setLiveMessage("");
        }, 3200);
      }

      if (latestTimestamp && latestTimestamp > latestSeenRef.current) {
        latestSeenRef.current = latestTimestamp;
      }
    } catch {
      setErrorMessage("Unable to fetch records right now.");
    } finally {
      if (!silent) {
        setIsLoading(false);
      }
    }
  }, [adminKey]);

  useEffect(() => {
    if (!isLive || !adminKey.trim()) {
      return;
    }
    const interval = setInterval(() => {
      loadRecords(true);
    }, 5000);
    return () => clearInterval(interval);
  }, [adminKey, isLive, loadRecords]);

  useEffect(() => {
    return () => {
      if (liveMessageTimeoutRef.current) {
        clearTimeout(liveMessageTimeoutRef.current);
      }
    };
  }, []);

  const trendData = useMemo(() => buildTrendData(records), [records]);

  const trendPoints = useMemo(() => {
    if (trendData.length === 0) {
      return "";
    }
    const maxValue = Math.max(...trendData, 1);
    return trendData
      .map((value, index) => {
        const x = trendData.length === 1 ? 100 : (index / (trendData.length - 1)) * 100;
        const y = 100 - (value / maxValue) * 100;
        return `${x},${y}`;
      })
      .join(" ");
  }, [trendData]);

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-10">
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
            Traderoc Wishlist Lead Tracker
          </h1>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Back to Home
          </Link>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <label className="block text-sm font-semibold text-slate-700" htmlFor="admin-key">
            Admin key for wishlist data
          </label>
          <div className="mt-2 flex flex-col gap-3 sm:flex-row">
            <input
              id="admin-key"
              type="password"
              value={adminKey}
              onChange={(event) => setAdminKey(event.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-violet-500"
              placeholder="Enter secure admin key"
            />
            <button
              type="button"
              onClick={() => loadRecords(false)}
              disabled={isLoading}
              className="inline-flex min-w-[160px] items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-5 py-3 text-sm font-semibold text-white"
            >
              {isLoading ? "Loading..." : "Load Wishlist Leads"}
            </button>
            <button
              type="button"
              onClick={() => setIsLive((prev) => !prev)}
              className={`inline-flex min-w-[150px] items-center justify-center rounded-xl border px-5 py-3 text-sm font-semibold ${
                isLive
                  ? "border-emerald-300 bg-emerald-50 text-emerald-700"
                  : "border-slate-300 bg-white text-slate-700"
              }`}
            >
              {isLive ? "Live: ON" : "Live: OFF"}
            </button>
          </div>
          {errorMessage ? (
            <p className="mt-3 text-sm font-medium text-rose-600">{errorMessage}</p>
          ) : null}
          {liveMessage ? (
            <p className="mt-3 rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-700">
              {liveMessage}
            </p>
          ) : null}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
              Live Audience
            </p>
            <p className="mt-2 text-3xl font-black text-slate-900">{total}</p>
            <p className="mt-1 text-sm text-slate-500">Total wishlist leads</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 lg:col-span-2">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-700">Audience Curve (Last 24h)</p>
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500">
                auto updates every 5s
              </p>
            </div>
            <div className="mt-4 h-36 w-full rounded-xl bg-slate-50 p-3">
              <svg viewBox="0 0 100 100" className="h-full w-full">
                <polyline
                  fill="none"
                  stroke="#7c3aed"
                  strokeWidth="2.5"
                  points={trendPoints}
                  vectorEffect="non-scaling-stroke"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <p className="text-sm font-semibold text-slate-700">Latest wishlist activity</p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            {records.slice(0, 8).map((record) => (
              <div
                key={`${record.email}-${record.updatedAt || ""}`}
                className="rounded-xl border border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-700"
              >
                {maskEmail(record.email)} joined {getRelativeTimeLabel(record.updatedAt)}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[620px] border-separate border-spacing-0">
              <thead>
                <tr>
                  <th className="border-b border-slate-200 px-3 py-2 text-left text-xs uppercase tracking-[0.12em] text-slate-500">
                    Email
                  </th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left text-xs uppercase tracking-[0.12em] text-slate-500">
                    Source
                  </th>
                  <th className="border-b border-slate-200 px-3 py-2 text-left text-xs uppercase tracking-[0.12em] text-slate-500">
                    Updated
                  </th>
                </tr>
              </thead>
              <tbody>
                {records.length > 0 ? (
                  records.map((record) => (
                    <tr key={`${record.email}-${record.updatedAt || ""}`}>
                      <td className="border-b border-slate-100 px-3 py-2 text-sm text-slate-800">
                        {record.email}
                      </td>
                      <td className="border-b border-slate-100 px-3 py-2 text-sm text-slate-600">
                        {record.source || "unknown"}
                      </td>
                      <td className="border-b border-slate-100 px-3 py-2 text-sm text-slate-600">
                        {record.updatedAt
                          ? new Date(record.updatedAt).toLocaleString()
                          : "-"}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={3}
                      className="px-3 py-6 text-center text-sm text-slate-500"
                    >
                      No records loaded yet.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
