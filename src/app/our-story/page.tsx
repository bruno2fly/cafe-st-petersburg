import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <article className="mx-auto max-w-2xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-[#2C1810]">
        Our Story
      </h1>

      <section className="mt-10 space-y-6">
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          We&apos;re a neighborhood restaurant serving Eastern European cuisine with a
          warm, approachable vibe—the kind of place where you can slow down,
          share a meal, and feel at home. We fit right into the rhythm of our
          neighborhood: weeknight dinners, date nights, and catch-ups over wine.
        </p>
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          This place exists because we love sharing family recipes and the art of
          hospitality. We wanted a spot where guests could experience real
          comfort food—dishes that feel familiar even if you&apos;ve never tried them
          before—and leave feeling a little more connected.
        </p>
      </section>

      <h2 className="mt-14 font-serif text-2xl font-bold text-[#2C1810]">
        The Food
      </h2>
      <section className="mt-6 space-y-6">
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          Our menu celebrates Eastern European cooking with a strong Georgian
          influence. Think comfort food with a refined touch: quality ingredients,
          shareable plates, and flavors that have been passed down for
          generations. If you&apos;re new to this cuisine, expect hearty stews,
          delicate dumplings, and dishes meant to be enjoyed together.
        </p>
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          We keep things simple and honest. No fuss, no pretense—just good food
          that speaks for itself.
        </p>
      </section>

      <h2 className="mt-14 font-serif text-2xl font-bold text-[#2C1810]">
        The Atmosphere
      </h2>
      <section className="mt-6 space-y-6">
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          We think of ourselves as the neighborhood living room—a place where
          the lighting is warm, the music is relaxed, and the pace lets you
          actually talk. Whether it&apos;s a celebration, a date night, a pre-show
          dinner, or a casual meetup with friends, we&apos;re here for it.
        </p>
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          Our service is friendly and low-pressure. We want you to focus on the
          people at your table, not on us. There&apos;s always a seat waiting.
        </p>
      </section>

      <h2 className="mt-14 font-serif text-2xl font-bold text-[#2C1810]">
        Join Us
      </h2>
      <section className="mt-6">
        <p className="text-lg leading-relaxed text-[#2C1810]/90">
          Come by for a slow dinner, grab your favorites to take home, or order
          online when you need something easy. However you choose to enjoy us,
          we&apos;re glad you&apos;re here.
        </p>
      </section>

      <div className="mt-14 flex flex-wrap gap-4">
        <Link
          href="/menu"
          className="rounded-md bg-[#3B5323] px-6 py-3 font-semibold text-white transition hover:bg-[#4a6b2d]"
        >
          Explore Our Menu
        </Link>
        <a
          href={siteData.reservationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-md border border-[#2C1810]/20 px-6 py-3 font-semibold text-[#2C1810] transition hover:bg-[#2C1810]/5"
        >
          Reserve a Table
        </a>
      </div>
    </article>
  );
}
