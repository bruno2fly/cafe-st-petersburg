"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Clock } from "lucide-react";
import { events, getDateOverlay, type EventItem } from "@/lib/events-data";
import { siteData } from "@/lib/site-data";

const CARD_COLORS = [
  "bg-teal-600",   // teal
  "bg-purple-600", // purple
  "bg-amber-600",  // goldenrod
] as const;

type EventsCalendarProps = {
  title?: string;
  showFilter?: boolean;
  excludeSlug?: string;
  /** When set, only these events are shown (e.g. upcoming only or event of the week). */
  eventsToShow?: EventItem[];
};

export function EventsCalendar({
  title = "Event Calendar",
  showFilter = true,
  excludeSlug,
  eventsToShow,
}: EventsCalendarProps) {
  const [filter, setFilter] = useState<string>("all");
  const [filterOpen, setFilterOpen] = useState(false);

  const sourceEvents = eventsToShow ?? events;
  const eventTypes = ["all", ...new Set(sourceEvents.map((e) => e.eventType ?? "EVENTS"))];
  const filtered =
    filter === "all"
      ? sourceEvents
      : sourceEvents.filter((e) => (e.eventType ?? "EVENTS") === filter);

  const displayEvents = excludeSlug
    ? filtered.filter((e) => e.slug !== excludeSlug)
    : filtered;

  return (
    <section className="w-full">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
          {title}
        </h2>
        {showFilter && eventTypes.length > 1 && (
          <div className="relative">
            <button
              type="button"
              onClick={() => setFilterOpen(!filterOpen)}
              className="flex items-center gap-2 rounded-lg border border-[#2C1810]/20 bg-white px-4 py-2.5 text-sm font-medium text-[#2C1810] transition hover:border-[#2C1810]/40"
            >
              Event Type
              <ChevronDown
                className={`h-4 w-4 transition ${filterOpen ? "rotate-180" : ""}`}
              />
            </button>
            {filterOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden
                  onClick={() => setFilterOpen(false)}
                />
                <ul className="absolute right-0 top-full z-20 mt-1 min-w-[180px] rounded-lg border border-[#2C1810]/10 bg-white py-1 shadow-lg">
                  {eventTypes.map((type) => (
                    <li key={type}>
                      <button
                        type="button"
                        onClick={() => {
                          setFilter(type);
                          setFilterOpen(false);
                        }}
                        className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-[#F9F6F0] ${
                          filter === type ? "font-semibold text-[#3B5323]" : ""
                        }`}
                      >
                        {type === "all" ? "All Events" : type}
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        )}
      </div>

      <div className="mt-6 overflow-x-auto pb-4">
        <div className="flex gap-6" style={{ minWidth: "min-content" }}>
          {displayEvents.map((event, index) => (
            <EventCalendarCard
              key={event.id}
              event={event}
              colorClass={CARD_COLORS[index % CARD_COLORS.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCalendarCard({
  event,
  colorClass,
}: {
  event: EventItem;
  colorClass: string;
}) {
  const dateOverlay = getDateOverlay(event.date);

  return (
    <Link
      href={`/events/${event.slug}`}
      className="group flex w-[280px] shrink-0 flex-col overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={event.image}
          alt={event.alt}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="280px"
        />
        <div className="absolute left-3 top-3 rounded-lg bg-[#2C1810]/85 px-3 py-1.5 text-sm font-semibold text-white">
          {dateOverlay}
        </div>
      </div>
      <div
        className={`flex flex-1 flex-col p-4 text-white ${colorClass}`}
      >
        <span className="text-xs font-medium uppercase tracking-wider text-white/90">
          {event.eventType ?? "EVENTS"}
        </span>
        <h3 className="mt-1 font-serif text-lg font-bold leading-tight">
          {event.title}
        </h3>
        <p className="mt-1 text-sm text-white/90">
          {siteData.address.split(",")[0]}
        </p>
        <p className="mt-2 flex items-center gap-1.5 text-sm text-white/95">
          <Clock className="h-3.5 w-3.5 shrink-0" />
          {event.time}
        </p>
      </div>
    </Link>
  );
}
