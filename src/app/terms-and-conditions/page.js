import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | Traderoc",
  description:
    "Review Traderoc terms and conditions for platform usage, account responsibilities, acceptable use, and legal disclaimers.",
};

export default function TermsAndConditionsPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-10">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Terms and Conditions
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900">Acceptance of Terms</h2>
            <p>
              By using Traderoc, you agree to these terms. If you do not agree, you should stop
              using the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Use of Platform</h2>
            <p>
              You agree to use the platform only for lawful purposes and in a way that does not
              harm the service, other users, or related systems.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Educational Disclaimer</h2>
            <p>
              Traderoc content and tools are educational in nature and do not constitute financial
              or investment advice. Trading involves risk and potential loss.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Account Responsibility</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account details and
              for activity performed under your account.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Continued use of the platform after
              updates means you accept the revised terms.
            </p>
          </section>
        </div>

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
