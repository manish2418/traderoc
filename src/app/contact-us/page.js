"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactUsPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [submitError, setSubmitError] = useState("");

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(`Traderoc Contact - ${name || "New message"}`);
    const body = encodeURIComponent(
      `Name: ${name || "-"}\nEmail: ${email || "-"}\n\nMessage:\n${message || "-"}`
    );
    return `mailto:mkdestiny2410@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setSubmitError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data?.ok) {
        setSubmitError(data?.message || "Unable to submit message right now.");
        return;
      }

      setSubmitMessage(
        "Message submitted successfully. We will reach out on your email soon."
      );
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setSubmitError("Unable to submit message right now.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-10">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Contact Us
        </h1>
        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="Your name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-violet-500"
          />
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder="Your email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-violet-500"
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Write your message"
            rows={6}
            required
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm outline-none focus:border-violet-500"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center rounded-xl bg-gradient-to-r from-indigo-600 via-violet-600 to-pink-500 px-6 py-3 text-sm font-semibold text-white"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
          <a
            href={getMailtoUrl()}
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Send via Email App
          </a>
          {submitMessage ? (
            <p className="text-sm font-medium text-emerald-600">{submitMessage}</p>
          ) : null}
          {submitError ? (
            <p className="text-sm font-medium text-rose-600">{submitError}</p>
          ) : null}
        </form>

        <div className="mt-10">
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
