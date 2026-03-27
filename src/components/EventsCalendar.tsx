import Link from "next/link";
import Image from "next/image";

export type Event = {
  id: string;
  slug: string;
  title: string;
  date: string;
  time: string;
  category?: "music" | "food" | "family" | "special";
  image: string;
  alt: string;
  description?: string;
  ticketUrl?: string;
  repeats?: boolean;
};

type EventsCalendarProps = {
  title?: string;
  eventsToShow: Event[];
  excludeSlug?: string;
  showFilter?: boolean;
};

const categoryColors = {
  music: "bg-purple-100 text-purple-800 border-purple-200",
  food: "bg-orange-100 text-orange-800 border-orange-200",
  family: "bg-green-100 text-green-800 border-green-200",
  special: "bg-blue-100 text-blue-800 border-blue-200",
} as const;

export function EventsCalendar({
  title = "Upcoming Events",
  eventsToShow,
  excludeSlug,
  showFilter = true,
}: EventsCalendarProps) {
  // Filter out excluded event
  const filteredEvents = excludeSlug
    ? eventsToShow.filter((event) => event.slug !== excludeSlug)
    : eventsToShow;

  if (filteredEvents.length === 0) {
    return (
      <section className="py-12">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-[#2C1810]/70">
          No events scheduled at this time. Check back soon!
        </p>
      </section>
    );
  }

  return (
    <section className="py-12">
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
          {title}
        </h2>
        {showFilter && (
          <div className="flex flex-wrap gap-2">
            <button className="rounded-full border border-[#2C1810]/20 bg-white px-4 py-2 text-sm font-medium text-[#2C1810] transition hover:bg-[#2C1810]/5">
              All Events
            </button>
            <button className="rounded-full border border-[#2C1810]/20 bg-white px-4 py-2 text-sm font-medium text-[#2C1810] transition hover:bg-[#2C1810]/5">
              Music
            </button>
            <button className="rounded-full border border-[#2C1810]/20 bg-white px-4 py-2 text-sm font-medium text-[#2C1810] transition hover:bg-[#2C1810]/5">
              Food & Drink
            </button>
            <button className="rounded-full border border-[#2C1810]/20 bg-white px-4 py-2 text-sm font-medium text-[#2C1810] transition hover:bg-[#2C1810]/5">
              Family
            </button>
          </div>
        )}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredEvents.map((event) => (
          <Link
            key={event.id}
            href={`/events/${event.slug}`}
            className="group overflow-hidden rounded-xl border border-[#2C1810]/10 bg-white shadow-sm transition hover:shadow-md"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={event.image}
                alt={event.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {event.repeats && (
                <div className="absolute left-3 top-3">
                  <span className="rounded-full bg-[#3B5323] px-2 py-1 text-xs font-medium text-white">
                    Repeats
                  </span>
                </div>
              )}
              {event.category && (
                <div className="absolute right-3 top-3">
                  <span
                    className={`rounded-full border px-2 py-1 text-xs font-medium ${
                      categoryColors[event.category]
                    }`}
                  >
                    {event.category === "music"
                      ? "Music"
                      : event.category === "food"
                        ? "Food & Drink"
                        : event.category === "family"
                          ? "Family"
                          : "Special"}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="font-serif text-lg font-semibold text-[#2C1810] group-hover:text-[#3B5323]">
                {event.title}
              </h3>
              <p className="mt-2 font-medium text-[#C4A35A]">
                {event.date} · {event.time}
              </p>
              {event.description && (
                <p className="mt-3 line-clamp-2 text-sm text-[#2C1810]/80">
                  {event.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}