"use client";

import { useState } from "react";
import Link from "next/link";
import { siteData, testimonials } from "@/lib/site-data";
import { menuChapters } from "@/lib/menu-data";
import { getUpcomingEvents } from "@/lib/events-data";
import { FoodImage } from "@/components/FoodImage";
import { EventsCalendar } from "@/components/EventsCalendar";
import { Toast } from "@/components/Toast";

export default function HomePage() {
  const upcomingEvents = getUpcomingEvents(3);
  const [showToast, setShowToast] = useState(false);

  const handleOrderOnlineClick = () => {
    setShowToast(true);
  };

  return (
    <div className="bg-white">
      {/* Toast */}
      {showToast && (
        <Toast
          message="Online ordering coming soon! Please call (617) 795-7372 to order for pickup or delivery."
          onClose={() => setShowToast(false)}
        />
      )}

      {/* Hero */}
      <section className="relative bg-[#F9F6F0] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center lg:pr-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4A35A]">
              Newton Centre
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl md:text-5xl">
              Cafe St. Petersburg
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              A cozy neighborhood spot for authentic Eastern European cuisine.
              House-made dumplings, hearty soups, and comfort food that feels
              like home.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleOrderOnlineClick}
                className="inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
              >
                Order Online
              </button>
              <a
                href={siteData.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md border border-[#2C1810]/20 px-8 py-4 font-semibold text-[#2C1810] transition hover:bg-[#2C1810]/5"
              >
                Reserve a Table
              </a>
            </div>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/hero.jpg"
              alt="Cafe St. Petersburg dining room"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="border-y border-[#2C1810]/10 bg-white py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12">
          <div className="flex items-center gap-2 text-sm font-medium text-[#2C1810]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
            <span>
              <span className="font-semibold">Open:</span> Thu-Sun for dine-in
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#2C1810]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#C4A35A]" />
            <span>
              <span className="font-semibold">Location:</span> Newton Centre
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#2C1810]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
            <span>
              <span className="font-semibold">Call:</span>{" "}
              <a
                href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                className="hover:underline"
              >
                {siteData.phone}
              </a>
            </span>
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Taste of Home
            </h2>
            <Link
              href="/menu"
              className="font-medium text-[#3B5323] hover:underline"
            >
              View full menu →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-[#2C1810]/80">
            Comfort food with a refined touch. House-made dumplings, soups
            simmered for hours, and classics passed down through generations.
          </p>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <article className="group overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white shadow-sm transition duration-300 hover:shadow-md">
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
                  Borscht
                </h3>
                <p className="mt-2 text-[#2C1810]/85">
                  Traditional beet soup with beef, vegetables, sour cream, and rye
                  bread. A warming classic.
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white shadow-sm transition duration-300 hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/pelmeni.jpg"
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
                <p className="mt-2 text-[#2C1810]/85">
                  Delicate dumplings filled with seasoned veal and pork. Made
                  fresh in-house daily.
                </p>
              </div>
            </article>

            <article className="group overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-white shadow-sm transition duration-300 hover:shadow-md">
              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src="/images/food/honey-cake.jpg"
                  alt="Traditional honey cake (medovik)"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-[#2C1810]">
                  Medovik (Honey Cake)
                </h3>
                <p className="mt-2 text-[#2C1810]/85">
                  Layers of honey sponge with smooth cream. The perfect end to
                  any meal.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Why We're Special */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              More Than a Meal
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
              At Cafe St. Petersburg, we believe food is meant to bring people
              together. Every dish tells a story, every recipe connects us to our
              roots, and every meal shared is a moment to slow down and savor.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              We&apos;re your neighborhood spot for authentic Eastern European
              cuisine—the kind of place where you can bring friends, celebrate
              special occasions, or just enjoy a quiet dinner that feels like
              home.
            </p>
            <Link
              href="/our-story"
              className="mt-6 inline-flex font-medium text-[#3B5323] hover:underline"
            >
              Read our story →
            </Link>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/interior.jpg"
              alt="Cozy dining atmosphere at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      {upcomingEvents.length > 0 && (
        <section className="bg-[#F9F6F0] py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <EventsCalendar
              title="Upcoming Events"
              eventsToShow={upcomingEvents}
            />
          </div>
        </section>
      )}

      {/* Social Proof */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            What Our Guests Say
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((review) => (
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

      {/* Call to Action */}
      <section className="bg-[#3B5323] py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Visit Us Today
          </h2>
          <p className="mt-4 text-lg text-white/90">
            Experience the warmth of Eastern European hospitality right here in
            Newton Centre.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button
              onClick={handleOrderOnlineClick}
              className="rounded-md bg-white px-8 py-4 font-semibold text-[#3B5323] transition hover:bg-[#F9F6F0]"
            >
              Order Online
            </button>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Make a Reservation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}