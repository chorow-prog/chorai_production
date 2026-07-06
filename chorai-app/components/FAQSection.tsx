"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  items: FAQItem[];
};

export default function FAQSection({ title, items }: FAQSectionProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-[#0a1525]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-50 mb-12 text-center">
          {title}
        </h2>
        <div className="space-y-3">
          {items.map((item, index) => (
            <div key={index} className="border border-slate-800 rounded-lg overflow-hidden">
              <button
                onClick={() => setExpanded(expanded === index ? null : index)}
                className="w-full flex items-center justify-between p-4 sm:p-6 hover:bg-slate-900/40 transition-colors text-left"
              >
                <h3 className="text-base sm:text-lg font-semibold text-slate-50 pr-4">
                  {item.question}
                </h3>
                <ChevronDown
                  className={`h-5 w-5 text-[#3b82f6] flex-shrink-0 transition-transform ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {expanded === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-800 bg-slate-900/20">
                  <p className="text-slate-300/90 leading-relaxed whitespace-pre-line">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* JSON-LD FAQPage schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: items.map((item) => ({
              "@type": "Question",
              name: item.question,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.answer.replace(/<[^>]*>/g, ""),
              },
            })),
          }),
        }}
      />
    </section>
  );
}
