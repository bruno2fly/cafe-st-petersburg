"use client";

import { useState } from "react";

type FAQItem = {
  q: string;
  a: string;
};

export function FAQAccordion({ items }: { items: readonly FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-[#2C1810]/10 rounded-xl border border-[#2C1810]/10 bg-white">
      {items.map((item, index) => (
        <div key={index}>
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[#2C1810] transition hover:bg-[#F9F6F0]"
          >
            {item.q}
            <svg
              className={`h-5 w-5 shrink-0 transition ${openIndex === index ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {openIndex === index && (
            <div className="border-t border-[#2C1810]/5 px-6 py-4 text-[#2C1810]/85">
              {item.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
