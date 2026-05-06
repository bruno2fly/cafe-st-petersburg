"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const STORAGE_KEY = "csp-tequila-night-dismissed";

/** Calendar date parts in America/New_York (Boston area). */
function getEasternDateParts(date = new Date()): {
  year: number;
  month: number;
  day: number;
} {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const parts = formatter.formatToParts(date);
  const year = Number(parts.find((p) => p.type === "year")?.value);
  const month = Number(parts.find((p) => p.type === "month")?.value);
  const day = Number(parts.find((p) => p.type === "day")?.value);
  return { year, month, day };
}

/** Campaign window: May 1 – May 8, 2026 */
function isCampaignWindowActive(): boolean {
  const { year, month, day } = getEasternDateParts();
  if (year !== 2026) return false;
  if (month < 5) return false;
  if (month === 5 && day <= 8) return true;
  return false;
}

export function TequilaNightModal() {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => {
    setOpen(false);
    try {
      localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!isCampaignWindowActive()) return;
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {
      /* ignore */
    }
    setOpen(true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={close}
          aria-hidden="true"
        />
      )}

      {/* Modal */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tequila-modal-title"
        >
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-gray-200">
              <Image
                src="/images/events/tequila-night-may8.jpg"
                alt="Tequila Night - May 8"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8">
              <h2
                id="tequila-modal-title"
                className="text-3xl font-serif font-bold text-[#2C1810] mb-3"
              >
                🍃 Tequila Night 🍃
              </h2>
              <p className="text-lg font-medium text-[#C4A35A] mb-4">
                Thursday, May 8 • Cafe St. Petersburg
              </p>
              <p className="text-[#2C1810]/85 leading-relaxed mb-6">
                Experience an unforgettable evening of premium tequila tastings, live music, and authentic cuisine. Join us for a night of vibrant flavors and entertainment at Boston's favorite Russian-Ukrainian destination.
              </p>
              <p className="text-sm text-[#2C1810]/70 mb-6">
                📍 57 Union St, Newton Centre, MA
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="/events"
                  className="flex-1 inline-block text-center bg-[#C4A35A] text-[#2D3436] font-bold py-3 px-6 rounded-lg hover:bg-[#d4b86a] transition"
                >
                  Learn More
                </a>
                <a
                  href="tel:6177627830"
                  className="flex-1 inline-block text-center border-2 border-[#3B5323] text-[#3B5323] font-bold py-3 px-6 rounded-lg hover:bg-[#3B5323] hover:text-white transition"
                >
                  Call (617) 762-7830
                </a>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={close}
              className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/95 hover:bg-white text-[#2C1810] text-xl font-bold transition z-10"
              aria-label="Close popup"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  );
}
