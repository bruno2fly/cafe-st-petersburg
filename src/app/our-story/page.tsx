import Link from "next/link";

export const metadata = {
  title: "Our Story",
};

export default function OurStoryPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <h1 className="font-serif text-4xl font-bold text-amber-950">Our Story</h1>
      <p className="mt-6 text-lg leading-relaxed text-amber-900/85">
        Cafe St. Petersburg brings a taste of Eastern Europe to Newton Centre. We&apos;re
        a hidden gem at 57-1 Union Street, serving classic recipes made with quality
        ingredients and time-honored methods.
      </p>
      <p className="mt-4 text-amber-900/85">
        Every meal here feels like sitting down to a family dinner—whether you&apos;re
        new to this cuisine or grew up with it. We focus on Eastern European favorites
        with a strong Georgian influence: rich, filling, shareable dishes that bring
        people together.
      </p>
      <Link
        href="/menu"
        className="mt-10 inline-flex rounded-full bg-amber-700 px-6 py-3 font-semibold text-white hover:bg-amber-800"
      >
        Explore Our Menu
      </Link>
    </div>
  );
}
