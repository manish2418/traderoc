import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Traderoc",
  description:
    "Read Traderoc privacy policy for details on data collection, usage, security, and your rights when using our trading journal platform.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900 lg:px-10">
      <div className="mx-auto w-full max-w-4xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
        <h1 className="text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 text-sm text-slate-500">
          Last updated: {new Date().toLocaleDateString()}
        </p>

        <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900">Information We Collect</h2>
            <p>
              We collect information you provide directly, such as your email for wishlist and
              early access requests. We may also collect technical information required to operate
              and improve the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">How We Use Information</h2>
            <p>
              We use your information to provide services, respond to requests, improve product
              experience, send important updates, and prevent misuse of the platform.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Data Security</h2>
            <p>
              We use reasonable safeguards to protect your data. No method of transmission or
              storage is fully secure, but we work to maintain appropriate protection measures.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Third-Party Services</h2>
            <p>
              We may use third-party services for hosting, analytics, and infrastructure. These
              providers process data based on their own terms and policies.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900">Your Rights</h2>
            <p>
              You can request updates or deletion of your data by contacting us. We will process
              requests within a reasonable time based on applicable requirements.
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
