import Link from "next/link";
import Image from "next/image";
import { upcomingEvents } from "@/lib/events-data";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Events",
};

export default function EventsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <h1 className="font-serif text-4xl font-bold text-[#2C1810]">
        Upcoming Events
      </h1>
      <p className="mt-4 text-lg text-[#2C1810]/80">
        Join us for special events, tastings, and gatherings.
      </p>
      <div className="mt-12 grid grid-cols-1 items-stretch gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {upcomingEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="group flex flex-col overflow-hidden rounded-xl border border-[#2C1810]/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-square w-full shrink-0 overflow-hidden">
              <Image
                src={event.image}
                alt={event.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
            <div className="flex flex-1 flex-col p-5">
              {event.repeats && (
                <span className="inline-block w-fit rounded-full bg-[#3B5323] px-2.5 py-0.5 text-xs font-medium text-white">
                  Repeats
                </span>
              )}
              <h2 className="mt-2 font-serif text-xl font-semibold text-[#2C1810] group-hover:text-[#3B5323]">
                {event.title}
              </h2>
              <p className="mt-2 text-[#2C1810]/80">
                {event.date} · {event.time}
              </p>
            </div>
          </Link>
        ))}
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
