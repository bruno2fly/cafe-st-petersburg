"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type Announcement = {
  id: string;
  /** Show until the end of this date (America/New_York), YYYY-MM-DD. */
  until: string;
  text: string;
  href?: string;
  cta?: string;
};

// Add or remove announcements here. Expired ones hide automatically.
const ANNOUNCEMENTS: Announcement[] = [
  {
    id: "thanksgiving-2026",
    until: "2026-11-26",
    text: "We're closed Thursday, Nov 26 for Thanksgiving. See you Friday from 5 PM!",
  },
  {
    id: "nye-2027",
    until: "2026-12-31",
    text: "New Year's Eve Masquerade Ball 2027 · Gala dinner, live music & show · Dec 31",
    href: "/events/new-years-eve-masquerade-ball-2027",
    cta: "See menu & tickets",
  },
];

function todayNY(): string {
  return new Intl.DateTimeFormat("en-CA", { timeZone: "America/New_York" }).format(new Date());
}

export function AnnouncementBar() {
  const [today, setToday] = useState<string | null>(null);
  useEffect(() => setToday(todayNY()), []);

  // Before hydration, render using build-time date so the bar is in the HTML for SEO.
  const now = today ?? todayNY();
  const active = ANNOUNCEMENTS.filter((a) => now <= a.until);
  if (active.length === 0) return null;

  return (
    <div className="bg-[#2C1810] text-[#F5F0E8]">
      {active.map((a) => (
        <div
          key={a.id}
          className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 border-b border-white/10 px-4 py-2 text-center text-sm last:border-b-0"
        >
          <span>{a.text}</span>
          {a.href && (
            <Link href={a.href} className="font-semibold text-[#C4A35A] underline underline-offset-2 hover:text-[#d4b86a]">
              {a.cta ?? "Learn more"} →
            </Link>
          )}
        </div>
      ))}
    </div>
  );
}
