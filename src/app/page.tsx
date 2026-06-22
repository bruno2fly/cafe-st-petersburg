import Link from "next/link";
import { siteData, testimonials } from "@/lib/site-data";
import { FoodImage } from "@/components/FoodImage";
import { getUpcomingEvents } from "@/lib/events-data";
import { EventsCalendar } from "@/components/EventsCalendar";
import { HeroBanner } from "@/components/HeroBanner";
import { TequilaNightModal } from "@/components/TequilaNightModal";

// Revalidate every 12 hours so past events automatically stop showing
export const revalidate = 43200;

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents();

  return (
    <>
      {/* Tequila Night Event Popup */}
      <TequilaNightModal />
      {/* Hero Section — Video Banner */}
      <HeroBanner />

      {/* Hours & Location Strip */}
      <section className="border-y border-[#2C1810]/10 bg-white py-6">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 text-center sm:gap-12">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
              <span className="text-sm font-medium text-[#2C1810]">
                <strong>Thu-Sun:</strong> {siteData.hours.thursday}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#C4A35A]" />
              <span className="text-sm font-medium text-[#2C1810]">
                <strong>Location:</strong> {siteData.address}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
              <span className="text-sm font-medium text-[#2C1810]">
                <strong>Phone:</strong>{" "}
                <a
                  href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                  className="text-[#3B5323] hover:underline"
                >
                  {siteData.phone}
                </a>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Our Signature Dishes
            </h2>
            <p className="mt-4 text-lg text-[#2C1810]/80">
              Comfort food rooted in tradition, made with care.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <Link href="/menu" className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/borscht.jpg"
                  alt="Classic Ukrainian borscht"
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Classic Borscht
                </h3>
                <p className="mt-2 text-[#2C1810]/80">
                  Traditional beet soup with tender beef, fresh vegetables, and a
                  dollop of sour cream.
                </p>
              </div>
            </Link>
            <Link href="/menu" className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/Cafe St. Petersburg_beef stroganoff_01092025_002.jpg"
                  alt="Beef Stroganoff with sides"
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Beef Stroganoff
                </h3>
                <p className="mt-2 text-[#2C1810]/80">
                  Tender beef in a rich, creamy sauce with mushrooms, served over
                  buttery noodles.
                </p>
              </div>
            </Link>
            <Link href="/menu" className="group cursor-pointer overflow-hidden rounded-2xl bg-white shadow-lg transition hover:shadow-xl block">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/blini-red-caviar.jpg"
                  alt="Blini with red caviar"
                  fill
                  className="object-cover transition group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Blini & Caviar
                </h3>
                <p className="mt-2 text-[#2C1810]/80">
                  Delicate pancakes topped with premium red caviar—a true taste
                  of luxury.
                </p>
              </div>
            </Link>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/menu"
              className="inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Explore Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              More Than Just a Restaurant
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/90">
              We&apos;re a neighborhood place where Eastern European traditions meet
              warm, approachable hospitality. Whether you&apos;re trying our cuisine
              for the first time or it reminds you of home, every dish is crafted
              with care and meant to be shared.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/90">
              Come for a slow dinner with friends, a cozy date night, or order
              your favorites to enjoy at home. However you choose to experience
              us, we&apos;re glad you&apos;re here.
            </p>
            <Link
              href="/our-story"
              className="mt-8 inline-flex font-semibold text-[#3B5323] hover:underline"
            >
              Read Our Full Story →
            </Link>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/interior.jpg"
              alt="Interior of Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      {/* Events Preview */}
      {upcomingEvents.length > 0 && (
        <section className="bg-[#F9F6F0] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <EventsCalendar
              title="Upcoming Events"
              eventsToShow={upcomingEvents.slice(0, 4)}
            />
            {upcomingEvents.length > 4 && (
              <div className="mt-8 text-center">
                <Link
                  href="/events"
                  className="font-medium text-[#3B5323] hover:underline"
                >
                  View All Events →
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            What Our Guests Are Saying
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((testimonial, i) => (
              <blockquote
                key={i}
                className="rounded-xl border-l-4 border-[#C4A35A] bg-[#F9F6F0] p-6"
              >
                <div className="mb-3 flex gap-1 text-[#C4A35A]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <span key={starIndex}>★</span>
                  ))}
                </div>
                <p className="text-[#2C1810]/90">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                <footer className="mt-4">
                  <p className="font-medium text-[#2C1810]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#2C1810]/70">
                    {testimonial.source}
                  </p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* How to Find Us */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              How to Find Us
            </h2>
            <p className="mt-6 max-w-4xl mx-auto text-lg leading-relaxed text-[#2C1810]/90">
              We know, we know… we&rsquo;re a little off the beaten path! But that&rsquo;s part of our charm. 
              The best treasures are often the hardest to find, right? Don&rsquo;t worry, we&rsquo;ve got you covered. 
              Follow our simple directions below, and you&rsquo;ll be savoring our delicious dishes in no time. 
              Trust us, the adventure is worth it! Each first-timer will quickly learn the way and it 
              becomes one of their favorite destinations!
            </p>
          </div>

          {/* Google Maps */}
          <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
            <img
              src="/directions-map.png"
              alt="Directions to Cafe St. Petersburg — showing Central Parking on Beacon St, Main Entrance, and Uber Drop-Off on Union St"
              width={800}
              height={500}
              className="mx-auto h-auto max-w-xl rounded-xl"
              loading="lazy"
            />
          </div>

          {/* Parking Directions */}
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B5323]/10">
                <div className="h-6 w-6 rounded bg-[#3B5323]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                Central Parking on Beacon St
              </h3>
              <p className="mt-2 text-[#2C1810]/80">
                Free parking lot - our recommended option for the easiest access to the restaurant.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#C4A35A]/10">
                <div className="h-6 w-6 rounded bg-[#C4A35A]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                Uber Drop-Off / On-Street Parking
              </h3>
              <p className="mt-2 text-[#2C1810]/80">
                Union St offers convenient rideshare drop-off and limited street parking options.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#3B5323]/10">
                <div className="h-6 w-6 rounded bg-[#3B5323]" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                Main Entrance
              </h3>
              <p className="mt-2 text-[#2C1810]/80">
                Our main entrance is easily accessible from the parking area - just follow the signs!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#2C1810] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-[#F5F0E8] sm:text-3xl">
            Ready to Experience Authentic Eastern European Cuisine?
          </h2>
          <p className="mt-4 text-lg text-[#F5F0E8]/90">
            Reserve your table today or call to place a takeout order.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#C4A35A] px-8 py-4 font-semibold text-[#2C1810] transition hover:bg-[#d4b86a]"
            >
              Make a Reservation
            </a>
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="rounded-md border-2 border-[#C4A35A] px-8 py-4 font-semibold text-[#C4A35A] transition hover:bg-[#C4A35A]/10"
            >
              Call to Order
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
