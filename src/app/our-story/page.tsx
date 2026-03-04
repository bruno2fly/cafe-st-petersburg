import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Our Story",
  description:
    "Discover the story behind Cafe St. Petersburg—Eastern European cuisine, warm hospitality, and a neighborhood place to gather.",
};

export default function OurStoryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative aspect-[16/9] min-h-[50vh] overflow-hidden sm:aspect-[21/9]">
        <Image
          src="/images/our-story.jpg"
          alt="Cafe St. Petersburg"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(44,24,16,0.9) 0%, rgba(44,24,16,0.4) 50%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-10 lg:p-16">
          <h1 className="font-serif text-4xl font-bold text-white sm:text-5xl lg:text-6xl">
            Our Story
          </h1>
          <p className="mt-3 max-w-2xl font-serif text-lg italic text-white/90">
            A neighborhood place for Eastern European cuisine and warm hospitality
          </p>
        </div>
      </section>

      {/* Our Story — Text + Image */}
      <section className="bg-[#F9F6F0] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center lg:order-2">
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
              More Than a Restaurant
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/90">
              We&apos;re a neighborhood restaurant serving Eastern European cuisine
              with a warm, approachable vibe—the kind of place where you can slow
              down, share a meal, and feel at home. We fit right into the rhythm
              of our neighborhood: weeknight dinners, date nights, and catch-ups
              over wine.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/90">
              This place exists because we love sharing family recipes and the
              art of hospitality. We wanted a spot where guests could experience
              real comfort food—dishes that feel familiar even if you&apos;ve never
              tried them before—and leave feeling a little more connected.
            </p>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1 lg:mt-0">
            <Image
              src="/images/our-story/dining-room.png"
              alt="Warm dining room at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* The Food — Image + Text */}
      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/our-story/olivier-salad.png"
              alt="Olivier salad—a classic Eastern European dish"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="flex flex-col justify-center lg:pl-4">
            <h2 className="mt-10 font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl lg:mt-0">
              The Food
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/90">
              Our menu celebrates Eastern European cooking with a strong
              Georgian influence. Think comfort food with a refined touch: quality
              ingredients, shareable plates, and flavors that have been passed
              down for generations. If you&apos;re new to this cuisine, expect
              hearty stews, delicate dumplings, and dishes meant to be enjoyed
              together.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/90">
              We keep things simple and honest. No fuss, no pretense—just good
              food that speaks for itself.
            </p>
          </div>
        </div>
      </section>

      {/* The Atmosphere — Text + Image */}
      <section className="bg-[#F9F6F0] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center lg:order-2">
            <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
              The Atmosphere
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/90">
              We think of ourselves as the neighborhood living room—a place
              where the lighting is warm, the music is relaxed, and the pace lets
              you actually talk. Whether it&apos;s a celebration, a date night, a
              pre-show dinner, or a casual meetup with friends, we&apos;re here
              for it.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/90">
              Our service is friendly and low-pressure. We want you to focus on
              the people at your table, not on us. There&apos;s always a seat
              waiting.
            </p>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:order-1 lg:mt-0">
            <Image
              src="/images/our-story/interior-hallway.png"
              alt="Elegant interior and event space at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Join Us — CTA */}
      <section className="bg-[#2C1810] py-16 sm:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-2xl font-bold text-[#F5F0E8] sm:text-3xl">
            Join Us
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#F5F0E8]/90">
            Come by for a slow dinner, grab your favorites to take home, or
            order online when you need something easy. However you choose to
            enjoy us, we&apos;re glad you&apos;re here.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/menu"
              className="rounded-md bg-[#C4A35A] px-8 py-4 font-semibold text-[#2C1810] transition hover:bg-[#d4b86a]"
            >
              Explore Our Menu
            </Link>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border-2 border-[#C4A35A] px-8 py-4 font-semibold text-[#C4A35A] transition hover:bg-[#C4A35A]/10"
            >
              Reserve a Table
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
