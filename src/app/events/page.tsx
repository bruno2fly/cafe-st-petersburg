import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { EventsCalendar } from "@/components/EventsCalendar";
import { getEventsThisMonth } from "@/lib/events-data";

export const metadata = {
  title: "Events",
};

export default function EventsPage() {
  const eventsThisMonth = getEventsThisMonth();
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-bold text-[#2C1810]">
        Upcoming Events
      </h1>
      <p className="mt-4 text-lg text-[#2C1810]/80">
        Join us for special events, tastings, and gatherings.
      </p>
      <div className="mt-12">
        <EventsCalendar
          title="Event Calendar"
          eventsToShow={eventsThisMonth}
        />
      </div>
      <p className="mt-12 text-center text-[#2C1810]/80">
        For private events and reservations,{" "}
        <a
          href={siteData.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-[#3B5323] hover:underline"
        >
          book a table
        </a>{" "}
        or{" "}
        <Link href="/contacts" className="font-medium text-[#3B5323] hover:underline">
          contact us
        </Link>
        .
      </p>
    </div>
  );
}
