import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getEventBySlug, events, getUpcomingEvents } from "@/lib/events-data";
import { siteData } from "@/lib/site-data";
import { EventsCalendar } from "@/components/EventsCalendar";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  return { title: `${event.title} | ${siteData.name}` };
}

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <Link
        href="/events"
        className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#2C1810]/80 transition hover:text-[#3B5323]"
      >
        ← Back to Events
      </Link>

      <article className="overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white shadow-lg">
        <div className="relative mx-auto h-[400px] w-[400px] max-w-full overflow-hidden">
          <Image
            src={event.image}
            alt={event.alt}
            fill
            className="object-cover"
            sizes="400px"
            priority
          />
        </div>

        <div className="p-6 sm:p-10">
          {event.repeats && (
            <span className="inline-block rounded-full bg-[#3B5323] px-3 py-1 text-xs font-medium text-white">
              Repeats
            </span>
          )}
          <h1 className="mt-4 font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            {event.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-[#C4A35A]">
            {event.date} · {event.time}
          </p>

          {event.description && (
            <p className="mt-6 text-[#2C1810]/90">{event.description}</p>
          )}

          <div className="mt-8 space-y-4">
            <div>
              <h2 className="font-semibold text-[#2C1810]">Location</h2>
              <p className="mt-1 text-[#2C1810]/85">{siteData.address}</p>
              <a
                href={siteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-block text-sm font-medium text-[#3B5323] hover:underline"
              >
                Get directions →
              </a>
            </div>

            {event.ticketUrl && (
              <div className="pt-4">
                {event.ticketUrl.startsWith('tel:') ? (
                  <a
                    href={event.ticketUrl}
                    className="inline-flex items-center gap-2 rounded-md bg-[#C4A35A] px-8 py-4 font-semibold text-white transition hover:bg-[#b08e47]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path fillRule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clipRule="evenodd" />
                    </svg>
                    Call to Reserve Your Table
                  </a>
                ) : (
                  <>
                    <a
                      href={event.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
                    >
                      {event.ticketUrl.includes('opentable.com') ? 'Reserve Now' : 'Get Tickets'}
                    </a>
                    {event.ticketUrl.includes('silaquiz.com') && (
                      <p className="mt-2 text-sm text-[#2C1810]/70">
                        Tickets available at{" "}
                        <a
                          href={event.ticketUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-medium text-[#3B5323] hover:underline"
                        >
                          silaquiz.com
                        </a>
                      </p>
                    )}
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </article>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <EventsCalendar
          title="More Upcoming Events"
          eventsToShow={getUpcomingEvents()}
          excludeSlug={slug}
        />
      </div>
    </div>
  );
}
