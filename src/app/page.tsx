import Link from "next/link";
import {
  siteData,
  featuredDishes,
  testimonials,
  features,
  faqs,
  galleryImages,
} from "@/lib/site-data";
import { upcomingEvents } from "@/lib/events-data";
import { FoodImage } from "@/components/FoodImage";
import { FAQAccordion } from "@/components/FAQAccordion";
import { HeroBanner } from "@/components/HeroBanner";
import {
  UtensilsCrossed,
  Truck,
  ShoppingBag,
  Utensils,
  Wine,
  Banknote,
  Zap,
  Gift,
  Heart,
} from "lucide-react";

const FEATURE_ICONS = {
  Catering: UtensilsCrossed,
  Delivery: Truck,
  Takeout: ShoppingBag,
  "Dine In": Utensils,
  "Great Cocktails": Wine,
} as const;

export default function HomePage() {
  return (
    <div>
      {/* Section 1 — Hero */}
      <HeroBanner />

      {/* Section 2 — Reserve Your Table — LIGHT */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center lg:order-1 lg:pr-8">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Reserve Your Table
            </h2>
            <p className="mt-4 text-left text-lg leading-relaxed text-[#2C1810]/85">
              Whether you&apos;re planning a quiet dinner for two, a family gathering,
              or a celebration, we make reservations simple. Pull up a chair and
              experience <em className="font-semibold text-[#3B5323]">Zastolye</em>—the
              Russian tradition of the lavish feast. It&apos;s about more than food:
              it&apos;s conversation, toasts, and celebrating life and the people around
              the table.
            </p>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Book Now
            </a>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:order-2 lg:mt-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 h-full w-full object-cover"
            >
              <source src="/images/food/booktable2.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Section 3 — Featured Dishes — WHITE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Featured
            </h2>
            <Link
              href="/menu"
              className="font-medium text-[#3B5323] hover:underline"
            >
              View menu →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {featuredDishes.map((dish) => (
              <article
                key={dish.id}
                className="group overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <FoodImage
                    src={dish.image}
                    alt={dish.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-medium text-[#2C1810]">{dish.name}</h3>
                  <p className="mt-2 whitespace-nowrap font-semibold text-[#3B5323]">
                    ${dish.price.toFixed(2)}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4 — Welcome — LIGHT */}
      <section className="relative bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="max-w-[720px] text-left lg:max-w-none">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Welcome to Cafe St. Petersburg
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
              Tucked away at 57-1 Union Street in Newton Centre, we&apos;re a hidden
              gem serving classic recipes made with quality ingredients and
              time-honored methods. Every meal here feels like sitting down to a
              family dinner—whether you&apos;re new to Eastern European cuisine or grew
              up with it. Pull up a chair and make yourself at home.
            </p>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/hero.jpg"
              alt="Eastern European dishes at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 5 — Eastern European Classics — DARK */}
      <section className="bg-[#2C1810] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="text-left">
            <h2 className="font-serif text-3xl font-bold text-[#F5F0E8] sm:text-4xl">
              Eastern European Classics
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#F5F0E8]/90">
              Our menu celebrates Eastern European favorites with a strong Georgian
              influence. Expect rich, filling dishes meant to be shared—and
              don&apos;t miss our Georgian wine tastings. From hearty stews to delicate
              dumplings, every bite tells a story.
            </p>
            <Link
              href="/menu"
              className="mt-8 inline-flex rounded-md bg-[#C4A35A] px-6 py-3 font-semibold text-[#2C1810] transition hover:bg-[#d4b86a]"
            >
              Explore Our Menu
            </Link>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/meat-platter.jpg"
              alt="Eastern European classics and shared plates"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 6 — Upcoming Events — WHITE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            Upcoming events near you
          </h2>
          <div className="mt-10 grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event) => (
              <Link
                key={event.id}
                href={`/events/${event.slug}`}
                className="group flex flex-col overflow-hidden rounded-xl bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-square w-full shrink-0 overflow-hidden">
                  <FoodImage
                    src={event.image}
                    alt={event.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-4">
                  {event.repeats && (
                    <span className="inline-block w-fit rounded-full bg-[#3B5323] px-2.5 py-0.5 text-xs font-medium text-white">
                      Repeats
                    </span>
                  )}
                  <h3 className="mt-2 font-medium text-[#2C1810] group-hover:text-[#3B5323]">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#2C1810]/80">
                    {event.date} · {event.time}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-left">
            <Link
              href="/events"
              className="font-medium text-[#3B5323] hover:underline"
            >
              See More Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 7 — Order From Our Website — LIGHT */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="text-left">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Order From Our Website
            </h2>
            <ul className="mt-8 space-y-4">
              {[
                { Icon: Banknote, text: "Save on delivery and service fees" },
                { Icon: Zap, text: "Faster service when you order direct" },
                { Icon: Gift, text: "Earn free food through our rewards program" },
                { Icon: Heart, text: "Support your local neighborhood restaurant" },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#3B5323]" />
                  <span className="text-[#2C1810]/90">{text}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/menu"
              className="mt-10 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Order Now
            </Link>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/food/pazharsky-cutlet.jpg"
              alt="Food platters for takeout and delivery"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 8 — Gallery — WHITE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            Moments of Tradition and Comfort in Every Dish
          </h2>
          <div className="mt-10 columns-2 gap-4 md:columns-3">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative mb-4 break-inside-avoid overflow-hidden rounded-lg transition duration-300 hover:shadow-lg"
              >
                <div
                  className={`relative overflow-hidden ${
                    i % 3 === 0 ? "aspect-[4/5]" : i % 3 === 1 ? "aspect-square" : "aspect-[3/4]"
                  }`}
                >
                  <FoodImage
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9 — Banquets — DARK */}
      <section className="relative min-h-[400px] overflow-hidden py-20 sm:py-28">
        <FoodImage
          src="/images/food/interior.jpg"
          alt="Banquet and private events at Cafe St. Petersburg"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative flex min-h-[400px] flex-col justify-center px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-left">
            <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
              Banquets & Private Events
            </h2>
            <p className="mt-4 text-[#F5F0E8]/90">
              Special occasions deserve great food and warm service. From birthdays
              to corporate gatherings, we make it fun and memorable.
            </p>
            <Link
              href="/banquet"
              className="mt-8 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* Section 10 — Catering — LIGHT */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="text-left">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Catering for Every Occasion
            </h2>
            <p className="mt-4 text-lg text-[#2C1810]/85">
              From office lunches to family parties, we cater events of all sizes.
              Easy ordering, delicious food, and service you can count on.
            </p>
            <Link
              href="/catering"
              className="mt-8 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Order Catering
            </Link>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:mt-0">
            <FoodImage
              src="/images/catering.jpeg"
              alt="Catering for every occasion"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Section 11 — Guest Reviews — WHITE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            What our guests are saying
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {testimonials.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-xl border-l-4 border-[#C4A35A] bg-white p-6 shadow-sm"
              >
                <div className="mb-3 flex gap-1 text-[#C4A35A]">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="text-[#2C1810]/90">&ldquo;{review.text}&rdquo;</p>
                <footer className="mt-4 flex items-center gap-3">
                  <div className="h-10 w-10 shrink-0 rounded-full bg-[#F9F6F0]" />
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

      {/* Section 12 — Features Strip */}
      <section className="border-y border-[#2C1810]/10 bg-white py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12">
          {features.map((feature) => {
            const Icon = FEATURE_ICONS[feature];
            return (
              <span
                key={feature}
                className="flex items-center gap-2 text-sm font-medium text-[#2C1810]"
              >
                {Icon && <Icon className="h-5 w-5 text-[#3B5323]" />}
                {feature}
              </span>
            );
          })}
        </div>
      </section>

      {/* Section 13 — Rewards — DARK */}
      <section className="bg-[#3B5323] py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#F5F0E8] sm:text-4xl">
            Cafe St. Petersburg Rewards
          </h2>
          <p className="mt-4 text-lg text-[#F5F0E8]/90">
            Join to earn points on every order, redeem free items, and stay in the
            loop on special offers.
          </p>
          <Link
            href="/login"
            className="mt-8 inline-flex rounded-md bg-[#C4A35A] px-6 py-3 font-semibold text-[#2C1810] transition hover:bg-[#d4b86a]"
          >
            Join Rewards
          </Link>
        </div>
      </section>

      {/* Section 14 — FAQ — LIGHT */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-10">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>

      {/* Section 15 — Find Us — WHITE */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl">
              <iframe
                title="Cafe St. Petersburg location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0!2d-71.19!3d42.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377c3d0e3f0e1%3A0x0!2zNTctMSBVbmlvbiBTdCwgTmV3dG9uIENlbnRyZSwgTUEgMDI0NTk!5e0!3m2!1sen!2sus!4v1709155200000!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[400px] w-full rounded-2xl"
              />
            </div>
            <div className="text-left">
              <h2 className="font-serif text-3xl font-bold text-[#2C1810]">
                Find Us
              </h2>
              <div className="mt-6 space-y-2 text-[#2C1810]/90">
                <p>{siteData.address}</p>
                <p>
                  <a
                    href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                    className="hover:underline"
                  >
                    {siteData.phone}
                  </a>
                </p>
                <p>
                  <a
                    href={`mailto:${siteData.email}`}
                    className="hover:underline"
                  >
                    {siteData.email}
                  </a>
                </p>
              </div>
              <div className="mt-6">
                <table className="w-full text-sm">
                  <tbody>
                    <tr>
                      <td className="py-1 pr-4 text-[#2C1810]/80">Thursday</td>
                      <td className="py-1 font-medium">{siteData.hours.thursday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4 text-[#2C1810]/80">Friday</td>
                      <td className="py-1 font-medium">{siteData.hours.friday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4 text-[#2C1810]/80">Saturday</td>
                      <td className="py-1 font-medium">{siteData.hours.saturday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4 text-[#2C1810]/80">Sunday</td>
                      <td className="py-1 font-medium">{siteData.hours.sunday}</td>
                    </tr>
                    <tr>
                      <td className="py-1 pr-4 text-[#2C1810]/80">Mon–Wed</td>
                      <td className="py-1 font-medium">{siteData.hours.mondayToWednesday}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <a
                href={siteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
