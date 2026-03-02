"use client";

import { useState } from "react";
import { cateringReviews } from "@/lib/catering-data";

function ReviewCard({
  name,
  text,
  fullText,
}: {
  name: string;
  text: string;
  fullText: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const isTruncated = fullText.length > text.length;
  const displayText = expanded ? fullText : text;

  return (
    <article className="flex min-w-[300px] max-w-[380px] shrink-0 flex-col rounded-xl bg-white p-6 shadow-lg sm:min-w-0">
      <div className="mb-3 flex gap-1 text-[#C4A35A]">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i}>★</span>
        ))}
      </div>
      <p className="flex-1 text-[#2C1810]/90">&ldquo;{displayText}&rdquo;</p>
      {isTruncated && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className="mt-2 self-start text-sm font-medium text-[#3B5323] hover:underline"
        >
          {expanded ? "View less" : "View more"}
        </button>
      )}
      <footer className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F9F6F0] font-semibold text-[#3B5323]">
          {name.charAt(0)}
        </div>
        <p className="font-medium text-[#2C1810]">{name}</p>
      </footer>
    </article>
  );
}

export function GuestReviews() {
  return (
    <section className="bg-[#1A1A1A] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-white sm:text-4xl">
          What our guests are saying
        </h2>
        <div className="mt-12 flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0">
          {cateringReviews.map((review) => (
            <ReviewCard
              key={review.name}
              name={review.name}
              text={review.text}
              fullText={review.fullText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
