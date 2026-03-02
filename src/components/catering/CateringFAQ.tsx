"use client";

import { useState } from "react";
import { cateringFAQs } from "@/lib/catering-data";

export function CateringFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 divide-y divide-[#2C1810]/10 rounded-xl border border-[#2C1810]/10 bg-white">
          {cateringFAQs.map((item, index) => (
            <div key={index}>
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between px-6 py-4 text-left font-medium text-[#2C1810] transition hover:bg-[#F9F6F0]"
              >
                {item.q}
                <svg
                  className={`h-5 w-5 shrink-0 transition duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
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
              <div
                className={`overflow-hidden transition-all duration-200 ease-in-out ${
                  openIndex === index ? "max-h-64" : "max-h-0"
                }`}
              >
                <div className="border-t border-[#2C1810]/5 px-6 py-4 text-[#2C1810]/85">
                  {item.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
