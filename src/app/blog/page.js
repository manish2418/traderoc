import Link from "next/link";

const posts = [
  {
    title: "How to Build a Winning Trading Journal Routine",
    excerpt:
      "Learn a practical daily review framework to track mistakes, improve execution, and strengthen strategy discipline.",
    category: "Trading Journal",
    readTime: "7 min read",
  },
  {
    title: "Backtesting Checklist: Validate Any Strategy Faster",
    excerpt:
      "A step-by-step backtesting checklist to test setups with confidence and avoid overfitting weak rules.",
    category: "Backtesting",
    readTime: "6 min read",
  },
  {
    title: "Trade Replay Mistakes That Kill Profitability",
    excerpt:
      "Discover common replay mistakes and how to use market replays to improve entries, exits, and risk management.",
    category: "Trade Replay",
    readTime: "8 min read",
  },
  {
    title: "AI Trade Analysis: What Metrics Actually Matter",
    excerpt:
      "See how AI-powered analytics can uncover behavior patterns, emotional leaks, and hidden strategy weaknesses.",
    category: "AI Insights",
    readTime: "5 min read",
  },
];

export const metadata = {
  title: "Traderoc Blog | Trading Journal, Backtesting & AI Insights",
  description:
    "Read Traderoc blog guides on AI trading journals, backtesting, trade replay, risk management, and performance improvement.",
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-slate-50 px-6 py-14 text-slate-900 lg:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
              Traderoc Blog
            </p>
            <h1 className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
              Trading Journal and Performance Guides
            </h1>
          </div>
          <Link
            href="/"
            className="inline-flex items-center rounded-xl border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700"
          >
            Back to Home
          </Link>
        </div>

        <p className="mt-5 max-w-3xl text-lg text-slate-600">
          Actionable articles on AI trading journal workflows, strategy
          backtesting, execution replay, and trader psychology.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-600">
                {post.category}
              </p>
              <h2 className="mt-2 text-2xl font-black tracking-tight text-slate-900">
                {post.title}
              </h2>
              <p className="mt-3 text-slate-600">{post.excerpt}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-slate-500">{post.readTime}</span>
                <span className="text-sm font-semibold text-violet-600">
                  Coming Soon
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
