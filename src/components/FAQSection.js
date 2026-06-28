const faqs = [
  {
    question: "What is Traderoc and who is it for?",
    answer:
      "Traderoc is an AI trading journal platform for day traders, swing traders, and prop firm traders who want better consistency, cleaner execution, and stronger review workflows.",
  },
  {
    question: "How does the AI trading journal help improve performance?",
    answer:
      "Traderoc analyzes your trade history, identifies repeat mistakes, and highlights actionable insights so you can improve decision quality, risk management, and strategy discipline.",
  },
  {
    question: "Can I use Traderoc for backtesting and trade replay?",
    answer:
      "Yes. Traderoc includes backtesting and replay tools so you can validate setups, review market structure, and optimize entries and exits before risking more capital.",
  },
  {
    question: "Does Traderoc support prop firm traders?",
    answer:
      "Yes. Traderoc supports prop firm workflows with rule tracking, consistency monitoring, and alerts designed to help you avoid violations during evaluations.",
  },
  {
    question: "How do I get early access to new Traderoc features?",
    answer:
      "You can join the Traderoc wishlist from the launch section or wishlist page. We notify subscribers first when new modules and live sessions become available.",
  },
];

export default function FAQSection() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-6 pb-24 lg:px-10">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-600">
          FAQ
        </p>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Frequently asked questions about Traderoc
        </h2>
        <p className="mt-4 max-w-3xl text-lg text-slate-600">
          Quick answers about our AI trading journal, backtesting, replay, and
          performance analytics platform.
        </p>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <article
              key={item.question}
              className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.question}</h3>
              <p className="mt-2 text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
