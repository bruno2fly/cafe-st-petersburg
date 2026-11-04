import type { Metadata } from "next";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { EventsCalendar } from "@/components/EventsCalendar";
import { getUpcomingEvents } from "@/lib/events-data";
import { MetaPixelEvent } from "@/components/MetaPixelEvent";

// Revalidate every 12 hours so past events automatically stop showing
export const revalidate = 43200;

const TITLE = "Live Music & Events in Newton, MA | Café St. Petersburg";
const DESCRIPTION =
  "Live music, karaoke battles, jazz nights and concerts at Café St. Petersburg in Newton Centre, MA. See upcoming events near Boston and get your tickets.";
const URL = `${siteData.siteUrl}/events`;

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    siteName: "Café St. Petersburg",
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: { card: "summary_large_image", title: TITLE, description: DESCRIPTION },
};

export default function EventsPage() {
  const upcomingEvents = getUpcomingEvents();
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-20 lg:px-8">
      <MetaPixelEvent event="ViewContent" />
      <h1 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
        Live Music & Events in Newton, MA
      </h1>
      <p className="mt-4 max-w-3xl text-lg text-[#2C1810]/80">
        Concerts, karaoke battles, jazz nights and live music every weekend. Looking for things to do in
        Newton Centre or a restaurant with live music near Boston? Here is what&apos;s coming up.
      </p>
      <div className="mt-10">
        <EventsCalendar title="Upcoming Events" eventsToShow={upcomingEvents} />
      </div>

      <section className="mt-12 flex flex-col items-start gap-4 rounded-2xl bg-[#2C1810] p-6 text-[#F5F0E8] sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <h2 className="font-serif text-xl font-bold sm:text-2xl">
          Never miss a night: join our Telegram for event announcements
        </h2>
        <a
          href={siteData.social.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-md bg-[#229ED9] px-6 py-3 font-semibold text-white transition hover:bg-[#1c8cc2] sm:w-auto"
        >
          <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M9.78 18.65l.28-4.23 7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3 3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.81c-.19.91-.74 1.13-1.5.71L12.6 16.3l-1.99 1.93c-.23.23-.42.42-.83.42z" />
          </svg>
          Join Telegram
        </a>
      </section>

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
