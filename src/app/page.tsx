import Link from "next/link";
import { FoodImage } from "@/components/FoodImage";
import { siteData, testimonials } from "@/lib/site-data";
import { getUpcomingEvents } from "@/lib/events-data";
import { EventsCalendar } from "@/components/EventsCalendar";

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents(3);

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center lg:pr-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4A35A]">
              Newton Centre, MA
            </p>
            <h1 className="mt-3 font-serif text-4xl font-bold text-[#2C1810] sm:text-5xl md:text-6xl">
              Cafe St. Petersburg
            </h1>
            <p className="mt-4 text-xl leading-relaxed text-[#2C1810]/85">
              Authentic Eastern European cuisine with a warm, welcoming atmosphere.
              Featuring traditional dishes from Russia, Georgia, and beyond.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/menu"
                className="inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
              >
                View Menu
              </Link>
              <a
                href={siteData.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-[#2C1810]/20 px-8 py-4 font-semibold text-[#2C1810] transition hover:bg-[#2C1810]/5"
              >
                Reserve Table
              </a>
            </div>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/hero.jpg"
              alt="Delicious Eastern European dishes at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="border-b border-[#2C1810]/10 bg-white py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 text-sm font-medium text-[#2C1810] sm:gap-12">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
            <span>
              <strong>Address:</strong> {siteData.address}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#C4A35A]" />
            <span>
              <strong>Phone:</strong>{" "}
              <a
                href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                className="hover:underline"
              >
                {siteData.phone}
              </a>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
            <span>
              <strong>Hours:</strong> Thu-Sun, Mon-Wed Closed
            </span>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Signature Dishes
            </h2>
            <p className="mt-4 text-lg text-[#2C1810]/80">
              Experience the flavors of Eastern Europe with our chef&apos;s specialties
            </p>
          </div>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Borscht */}
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/borscht.jpg"
                  alt="Traditional borscht soup"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Traditional Borscht
                </h3>
                <p className="mt-2 text-[#2C1810]/80">
                  Rich beet soup with tender beef, vegetables, and a dollop of sour
                  cream
                </p>
              </div>
            </article>

            {/* Pelmeni */}
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/meat-platter.jpg"
                  alt="Handmade pelmeni dumplings"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Handmade Pelmeni
                </h3>
                <p className="mt-2 text-[#2C1810]/80">
                  Delicate dumplings filled with seasoned meat, served with sour
                  cream and fresh herbs
                </p>
              </div>
            </article>

            {/* Blini */}
            <article className="group overflow-hidden rounded-2xl bg-white shadow-sm transition hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/blini-red-caviar.jpg"
                  alt="Blini with red caviar"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Blini & Caviar
                </h3>
                <p className="mt-2 text-[#2C1810]/80">
                  Thin pancakes served with premium red caviar, crème fraîche, and
                  fresh dill
                </p>
              </div>
            </article>
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
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <FoodImage
              src="/images/food/interior.jpg"
              alt="Elegant dining room at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="mt-10 flex flex-col justify-center lg:mt-0">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              A Taste of Home
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
              At Cafe St. Petersburg, we bring you the authentic flavors of Eastern
              Europe in a warm, welcoming atmosphere. Our recipes have been passed
              down through generations, using traditional techniques and the finest
              ingredients.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              Whether you&apos;re seeking comfort food that reminds you of home or
              exploring new flavors, our dishes tell the story of rich culinary
              traditions from Russia, Georgia, and beyond.
            </p>
            <div className="mt-8">
              <Link
                href="/our-story"
                className="font-medium text-[#3B5323] hover:underline"
              >
                Learn more about our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      {upcomingEvents.length > 0 && (
        <section className="bg-[#F9F6F0] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <EventsCalendar
              title="Upcoming Events"
              eventsToShow={upcomingEvents}
            />
            <div className="mt-10 text-center">
              <Link
                href="/events"
                className="font-medium text-[#3B5323] hover:underline"
              >
                View all events →
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            What Our Guests Say
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.slice(0, 3).map((review) => (
              <blockquote
                key={review.name}
                className="rounded-xl border-l-4 border-[#C4A35A] bg-[#F9F6F0] p-6"
              >
                <div className="mb-3 flex gap-1 text-[#C4A35A]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-[#2C1810]/90">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#C4A35A]/20" />
                  <div>
                    <p className="font-medium text-[#2C1810]">{review.name}</p>
                    <p className="text-sm text-[#2C1810]/70">{review.source}</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-[#2C1810] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center font-serif text-3xl font-bold text-[#F5F0E8] sm:text-4xl">
            How You Can Enjoy Us
          </h2>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C4A35A]">
                <svg
                  className="h-8 w-8 text-[#2C1810]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2v0"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#F5F0E8]">
                Dine In
              </h3>
              <p className="mt-2 text-[#F5F0E8]/80">
                Experience our warm atmosphere and attentive service
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C4A35A]">
                <svg
                  className="h-8 w-8 text-[#2C1810]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 11V7a4 4 0 00-8 0v4M8 11v6h8v-6M8 11H6a2 2 0 00-2 2v6a2 2 0 002 2h12a2 2 0 002-2v-6a2 2 0 00-2-2h-2"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#F5F0E8]">
                Takeout
              </h3>
              <p className="mt-2 text-[#F5F0E8]/80">
                Enjoy our cuisine in the comfort of your home
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C4A35A]">
                <svg
                  className="h-8 w-8 text-[#2C1810]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#F5F0E8]">
                Delivery
              </h3>
              <p className="mt-2 text-[#F5F0E8]/80">
                Fresh, authentic dishes delivered to your door
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#C4A35A]">
                <svg
                  className="h-8 w-8 text-[#2C1810]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </div>
              <h3 className="mt-4 font-serif text-xl font-semibold text-[#F5F0E8]">
                Catering
              </h3>
              <p className="mt-2 text-[#F5F0E8]/80">
                Let us make your special events memorable
              </p>
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/catering"
              className="font-medium text-[#C4A35A] hover:underline"
            >
              Learn more about catering →
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-[#F9F6F0] py-16 sm:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
            Visit Us Today
          </h2>
          <p className="mt-4 text-lg text-[#2C1810]/85">
            Experience authentic Eastern European cuisine in the heart of Newton
            Centre
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Call {siteData.phone}
            </a>
            <a
              href={siteData.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex rounded-md border border-[#2C1810]/20 px-8 py-4 font-semibold text-[#2C1810] transition hover:bg-[#2C1810]/5"
            >
              Get Directions
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
