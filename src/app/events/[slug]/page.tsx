import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  getEventBySlug,
  events,
  getUpcomingEvents,
  getEventStartEnd,
  type EventItem,
} from "@/lib/events-data";
import { siteData } from "@/lib/site-data";
import { EventsCalendar } from "@/components/EventsCalendar";

type Props = { params: Promise<{ slug: string }> };

const BRAND = "Café St. Petersburg";

function absUrl(path: string) {
  return path.startsWith("http") ? path : `${siteData.siteUrl}${encodeURI(path)}`;
}

function shortDate(dateStr: string) {
  const m = dateStr.match(/(\w+)\s+(\d+),/);
  return m ? `${m[1].slice(0, 3)} ${m[2]}` : dateStr;
}

function metaDescription(event: EventItem) {
  if (event.seoDescription) return event.seoDescription;
  const base = `${event.title} at ${BRAND}, Newton Centre, MA. ${event.date}, ${event.time}.`;
  const extra = event.description ? ` ${event.description}` : "";
  const full = base + extra;
  return full.length > 160 ? full.slice(0, 157).replace(/\s+\S*$/, "") + "…" : full;
}

export async function generateStaticParams() {
  return events.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return { title: "Event Not Found" };
  const url = `${siteData.siteUrl}/events/${event.slug}`;
  const title = event.seoTitle ?? `${event.title} · ${shortDate(event.date)} | ${BRAND}`;
  const description = metaDescription(event);
  const image = absUrl(event.image);
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: BRAND,
      title,
      description,
      images: [{ url: image, alt: event.alt }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}

function eventJsonLd(event: EventItem) {
  const { start, end } = getEventStartEnd(event);
  const url = `${siteData.siteUrl}/events/${event.slug}`;
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    url,
    startDate: start,
    ...(end ? { endDate: end } : {}),
    eventStatus: "https://schema.org/EventScheduled",
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Place",
      name: BRAND,
      address: {
        "@type": "PostalAddress",
        streetAddress: "57-1 Union St",
        addressLocality: "Newton Centre",
        addressRegion: "MA",
        postalCode: "02459",
        addressCountry: "US",
      },
    },
    image: [absUrl(event.image)],
    description: event.seoDescription ?? event.description ?? event.title,
    organizer: { "@type": "Organization", name: BRAND, url: siteData.siteUrl },
  };
  if (event.offers && event.ticketUrl) {
    data.offers = event.offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      price: o.price,
      priceCurrency: "USD",
      url: event.ticketUrl,
      availability: "https://schema.org/InStock",
    }));
  }
  return data;
}

function isReservationLink(url: string) {
  return url.includes("opentable.com") || url.includes("toast.app") || url.includes("toasttab.com");
}

function TicketButton({ url }: { url: string }) {
  if (url.startsWith("tel:")) {
    return (
      <a
        href={url}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#C4A35A] px-8 py-4 font-semibold text-white transition hover:bg-[#b08e47] sm:w-auto"
      >
        Call to Reserve Your Table
      </a>
    );
  }
  return (
    <>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex w-full items-center justify-center rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d] sm:w-auto"
      >
        {isReservationLink(url) ? "Reserve Now" : "Get Tickets"}
      </a>
      {url.includes("silaquiz.com") && (
        <p className="mt-2 text-sm text-[#2C1810]/70">
          Tickets available at{" "}
          <a href={url} target="_blank" rel="noopener noreferrer" className="font-medium text-[#3B5323] hover:underline">
            silaquiz.com
          </a>
        </p>
      )}
    </>
  );
}

const h2 = "font-serif text-xl font-bold text-[#2C1810] sm:text-2xl";

export default async function EventPage({ params }: Props) {
  const { slug } = await params;
  const event = getEventBySlug(slug);

  if (!event) notFound();

  const hasTickets = !!event.ticketUrl && !isReservationLink(event.ticketUrl) && !event.ticketUrl.startsWith("tel:");

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd(event)) }}
      />

      <Link
        href="/events"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#2C1810]/80 transition hover:text-[#3B5323]"
      >
        ← Back to Events
      </Link>

      <article className="overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white shadow-lg">
        {event.imageWide ? (
          <div className="relative aspect-[2/1] w-full overflow-hidden bg-[#2C1810]">
            <Image src={event.image} alt={event.alt} fill className="object-contain" sizes="(max-width: 896px) 100vw, 896px" priority />
          </div>
        ) : (
          <div className="relative mx-auto aspect-[3/4] w-full max-w-[400px] overflow-hidden">
            <Image src={event.image} alt={event.alt} fill className="object-cover object-top" sizes="400px" priority />
          </div>
        )}

        <div className="p-5 sm:p-10">
          <div className="flex flex-wrap gap-2">
            {event.featured && (
              <span className="inline-block rounded-full bg-[#C4A35A] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                🎟 Tickets
              </span>
            )}
            {event.repeats && (
              <span className="inline-block rounded-full bg-[#3B5323] px-3 py-1 text-xs font-medium text-white">
                Repeats
              </span>
            )}
          </div>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-[#2C1810] sm:text-4xl">
            {event.title}
          </h1>
          <p className="mt-2 text-lg font-medium text-[#C4A35A]">
            {event.date} · {event.time}
          </p>

          {event.ticketUrl && (
            <div className="mt-6">
              <TicketButton url={event.ticketUrl} />
            </div>
          )}

          <section className="mt-10">
            <h2 className={h2}>What to expect</h2>
            {(event.body ?? (event.description ? [event.description] : [])).map((p, i) => (
              <p key={i} className="mt-3 leading-relaxed text-[#2C1810]/90">
                {p}
              </p>
            ))}
            {event.highlights && (
              <ul className="mt-4 space-y-2">
                {event.highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-[#2C1810]/90">
                    <span className="text-[#C4A35A]">★</span>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </section>

          <section className="mt-10">
            <h2 className={h2}>Schedule</h2>
            <p className="mt-3 font-medium text-[#2C1810]">{event.date}</p>
            <ul className="mt-2 space-y-1 text-[#2C1810]/90">
              {(event.schedule ?? [event.time]).map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </section>

          {hasTickets && (
            <section className="mt-10">
              <h2 className={h2}>Tickets</h2>
              {event.priceLines && (
                <ul className="mt-3 space-y-1 text-[#2C1810]/90">
                  {event.priceLines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              )}
              <div className="mt-4">
                <TicketButton url={event.ticketUrl!} />
              </div>
            </section>
          )}

          <section className="mt-10">
            <h2 className={h2}>Location</h2>
            <p className="mt-3 font-medium text-[#2C1810]">{BRAND}</p>
            <p className="text-[#2C1810]/85">{siteData.address}</p>
            <p className="mt-2 text-[#2C1810]/85">{siteData.entrance}</p>
            <p className="text-[#2C1810]/85">{siteData.parking}</p>
            <a
              href={siteData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-[#3B5323] hover:underline"
            >
              Get directions →
            </a>
          </section>

          <section className="mt-10 rounded-xl bg-[#F9F6F0] p-5 sm:p-6">
            <h2 className={h2}>Plan your night: Reserve a table</h2>
            <p className="mt-2 text-[#2C1810]/85">
              Make it a full evening of live music and Eastern European dinner in Newton Centre. Browse the{" "}
              <Link href="/menu" className="font-medium text-[#3B5323] hover:underline">menu</Link>, see all{" "}
              <Link href="/events" className="font-medium text-[#3B5323] hover:underline">upcoming events</Link>, or{" "}
              <Link href="/reservation" className="font-medium text-[#3B5323] hover:underline">book your table</Link>.
            </p>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex w-full items-center justify-center rounded-md border-2 border-[#3B5323] px-6 py-3 font-semibold text-[#3B5323] transition hover:bg-[#3B5323] hover:text-white sm:w-auto"
            >
              Reserve a Table
            </a>
          </section>
        </div>
      </article>

      <div className="mt-16">
        <EventsCalendar title="More Upcoming Events" eventsToShow={getUpcomingEvents()} excludeSlug={slug} />
      </div>
    </div>
  );
}
