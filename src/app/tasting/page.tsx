import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { FoodImage } from "@/components/FoodImage";

export const metadata = {
  title: "Signature Tasting Experience",
  description:
    "A curated multi-course journey inspired by Eastern European flavors. $75 per person. Available Thursday-Sunday with reservations recommended.",
};

const BALTIC_COAST_COURSES = [
  {
    course: "First Course",
    description: "Zakuska-style toast topped with smoked salmon, served with marinated cabbage and shot of infused vodka",
  },
  {
    course: "Second Course", 
    description: "Traditional fish soup (Ukha) served with a savory pie (pirozhok) and shot of infused vodka",
  },
  {
    course: "Third Course",
    description: "Beet and vegetable salad (Vinegret) / Layered salmon",
  },
  {
    course: "Fourth Course",
    description: "Pan-seared carp cutlets (3) served with house pickled cucumbers",
  },
  {
    course: "Dessert",
    description: "Choice of Medovik (honey cake) or Napoleon (layered cream pastry)",
  },
] as const;

const TSARS_TABLE_COURSES = [
  {
    course: "First Course",
    description: "Zakuska-style toast with smoked meat, served with marinated cabbage and shot of infused vodka",
  },
  {
    course: "Second Course",
    description: "Borscht (beet soup) served with a savory pie (pirozhok)",
  },
  {
    course: "Third Course",
    description: "Olivier Salad / Beet and vegetable salad (Vinegret)",
  },
  {
    course: "Fourth Course",
    description: "Classic Pozharsky chicken cutlet served with house pickled cucumbers and shot of infused vodka",
  },
  {
    course: "Dessert",
    description: "Choice of Medovik (honey cake) or Napoleon (layered pastry)",
  },
] as const;

export default function TastingPage() {
  return (
    <div className="bg-[#F9F6F0]">
      {/* Hero Section */}
      <section className="relative bg-[#2C1810] py-20 sm:py-28">
        <div className="absolute inset-0">
          <FoodImage
            src="/images/food/hero.jpg"
            alt="Signature Tasting Experience at Cafe St. Petersburg"
            fill
            className="object-cover opacity-40"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[#2C1810]/60" />
        </div>
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <span className="inline-block rounded-full bg-[#C4A35A] px-4 py-2 text-sm font-semibold text-[#2C1810]">
            $75 per person
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold text-white sm:text-5xl md:text-6xl">
            Signature Tasting Experience
          </h1>
          <p className="mt-6 text-lg text-white/90 sm:text-xl">
            A curated multi-course journey inspired by Eastern European flavors
          </p>
          <a
            href={siteData.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
          >
            Reserve Your Tasting
          </a>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-xl leading-relaxed text-[#2C1810]/90">
            Experience Cafe St. Petersburg through a carefully crafted multi-course tasting. 
            Each menu tells a story. Choose your journey, or create your own.
          </p>
        </div>
      </section>

      {/* Menu Cards */}
      <section className="bg-[#F9F6F0] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Baltic Coast Menu */}
            <div className="rounded-2xl border border-[#2C1810]/10 bg-white p-8 shadow-lg">
              <div className="text-center">
                <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
                  Baltic Coast
                </h2>
                <div className="mx-auto mt-4 h-px w-16 bg-[#C4A35A]" />
              </div>
              <div className="mt-8 space-y-6">
                {BALTIC_COAST_COURSES.map((item, index) => (
                  <div key={index} className="border-b border-[#2C1810]/10 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-[#C4A35A]">{item.course}</h3>
                    <p className="mt-2 text-[#2C1810]/85">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* The Tsars Table Menu */}
            <div className="rounded-2xl border border-[#2C1810]/10 bg-white p-8 shadow-lg">
              <div className="text-center">
                <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
                  The Tsars Table
                </h2>
                <div className="mx-auto mt-4 h-px w-16 bg-[#C4A35A]" />
              </div>
              <div className="mt-8 space-y-6">
                {TSARS_TABLE_COURSES.map((item, index) => (
                  <div key={index} className="border-b border-[#2C1810]/10 pb-4 last:border-b-0">
                    <h3 className="font-semibold text-[#C4A35A]">{item.course}</h3>
                    <p className="mt-2 text-[#2C1810]/85">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Create Your Own */}
          <div className="mx-auto mt-12 max-w-2xl">
            <div className="rounded-2xl border border-[#2C1810]/10 bg-white p-6 shadow-lg">
              <div className="text-center">
                <h2 className="font-serif text-xl font-bold text-[#2C1810] sm:text-2xl">
                  Create Your Own
                </h2>
                <p className="mt-3 text-[#2C1810]/85">
                  Mix and match your favorite courses from either menu
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#3B5323] py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="text-white">
            <div className="text-4xl font-bold">
              $75 <span className="text-lg font-normal">per person</span>
            </div>
            <p className="mt-4 text-lg text-white/90">
              Available Thu-Sun · Reservations recommended for groups of 4+
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={siteData.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-white px-8 py-4 font-semibold text-[#3B5323] transition hover:bg-[#F9F6F0]"
              >
                Reserve Your Tasting
              </a>
              <a
                href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                className="inline-flex rounded-md border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                Call {siteData.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}