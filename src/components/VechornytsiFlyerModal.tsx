"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

const STORAGE_KEY = "csp-vechornytsi-flyer-dismissed";

const TICKET_URL_APR_24 =
  "https://www.eventbrite.com/e/ukrainian-evening-celebration-tickets-1986581505761?aff=ebdsoporgprofile";
const TICKET_URL_APR_25 =
  "https://www.eventbrite.com/e/ukrainian-evening-celebration-tickets-1986583090501?aff=ebdsoporgprofile";

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

/** Modal runs for the 2026 campaign window (ET): Jan 1 – Apr 25, 2026. */
function isCampaignWindowActive(): boolean {
  const { year, month, day } = getEasternDateParts();
  if (year !== 2026) return false;
  if (month < 4) return true;
  if (month === 4 && day <= 25) return true;
  return false;
}

/** Apr 24 → Eventbrite night 1; Apr 25 → night 2; before Apr 24 → upcoming first night. */
function getTicketUrlForEasternToday(): string {
  const { month, day } = getEasternDateParts();
  if (month === 4 && day === 25) return TICKET_URL_APR_25;
  return TICKET_URL_APR_24;
}

export function VechornytsiFlyerModal() {
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

  if (!open) return null;

  const ticketHref = getTicketUrlForEasternToday();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="vechornytsi-flyer-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/55"
        aria-label="Close"
        onClick={close}
      />
      <div className="relative z-[1] flex max-h-[min(90vh,900px)] w-full max-w-lg flex-col overflow-hidden rounded-lg bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-black/10 px-3 py-2 sm:px-4">
          <h2
            id="vechornytsi-flyer-title"
            className="font-serif text-lg text-[#2c1810] sm:text-xl"
          >
            Українські вечорниці — Vuyko Show
          </h2>
          <button
            type="button"
            onClick={close}
            className="rounded-full p-2 text-[#2c1810] transition hover:bg-black/5"
            aria-label="Close dialog"
          >
            <span aria-hidden className="text-2xl leading-none">
              ×
            </span>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="relative h-[min(72vh,680px)] w-full bg-neutral-100 sm:h-[min(65vh,640px)]">
            <Image
              src="/images/events/ukrainian-vechornytsi-flyer.png"
              alt="Ukrainian Vechornytsi — Vuyko Show. April 24–25, Cafe St. Petersburg, Newton Centre."
              fill
              className="object-contain object-top"
              sizes="(max-width: 640px) 100vw, 512px"
              priority
            />
          </div>
        </div>
        <div className="border-t border-black/10 bg-[#f5f0e8] p-4 sm:p-5">
          <a
            href={ticketHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center rounded-full bg-[#0057B7] px-6 py-3.5 text-center text-base font-semibold text-white shadow-md transition hover:bg-[#004a9e] sm:text-lg"
          >
            Купити квитки
          </a>
        </div>
      </div>
    </div>
  );
}
