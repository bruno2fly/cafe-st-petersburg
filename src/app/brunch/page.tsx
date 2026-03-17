import Link from "next/link";
import { siteData, testimonials } from "@/lib/site-data";
import { FoodImage } from "@/components/FoodImage";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata = {
  title: "Sunday Brunch | Cafe St. Petersburg",
  description:
    "Sunday brunch at Cafe St. Petersburg in Newton Centre—Eastern European comfort: oladushki, syrniki, vareniki, draniki, and eggs. Reservations recommended.",
};

const BRUNCH_FAQS = [
  {
    q: "Do I need a reservation for Sunday brunch?",
    a: "Reservations are strongly recommended, especially for larger groups and holidays. Walk-ins are welcome when we have space, but booking ahead guarantees your spot.",
  },
  {
    q: "Is there anything for kids on the brunch menu?",
    a: "Yes. Many of our brunch dishes are very kid-friendly—oladushki (mini pancakes), syrniki, and vareniki with cherry are guest favorites with younger diners. We're happy to split portions and adjust toppings to suit little ones.",
  },
  {
    q: "Can I order from the regular menu during brunch?",
    a: "During brunch hours we focus on our brunch offerings and a selection of guest-favorite dishes from the main menu. If you're craving a particular item, ask your server—we'll do our best to accommodate when the kitchen allows.",
  },
  {
    q: "Do you offer vegetarian options at brunch?",
    a: "Absolutely. Syrniki, oladushki, vareniki with cherry, and classic draniki with sour cream are all great vegetarian choices. Ask your server for the best options on the day of your visit.",
  },
] as const;

const BRUNCH_GALLERY_IMAGES = [
  { src: "/images/food/hero.jpg", alt: "Brunch and Eastern European dishes at Cafe St. Petersburg" },
  { src: "/images/food/interior.jpg", alt: "Dining room at Cafe St. Petersburg" },
  { src: "/images/food/honey-cake.jpg", alt: "Honey cake and sweets" },
  { src: "/images/food/blini-red-caviar.jpg", alt: "Blini and brunch-style plates" },
  { src: "/images/food/borscht.jpg", alt: "Classic borscht" },
  { src: "/images/food/meat-platter.jpg", alt: "Shared plates at the table" },
] as const;

export default function BrunchPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="flex flex-col justify-center lg:order-1 lg:pr-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4A35A]">
              Sundays in Newton Centre
            </p>
            <h1 className="mt-3 font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl md:text-5xl">
              Sunday Brunch at Cafe St. Petersburg
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              Slow down, gather your favorite people, and experience Sunday brunch
              the Eastern European way. At Cafe St. Petersburg, brunch feels like{" "}
              <em className="font-semibold text-[#3B5323]">Zastolye</em>—a long,
              cozy table full of comfort dishes, conversation, and toasts.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={siteData.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
              >
                Reserve Your Brunch Table
              </a>
              <a
                href="#brunch-menu"
                className="inline-flex rounded-md border border-[#2C1810]/20 px-8 py-4 font-semibold text-[#2C1810] transition hover:bg-[#2C1810]/5"
              >
                See Brunch Menu
              </a>
            </div>
          </div>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl lg:order-2 lg:mt-0">
            <FoodImage
              src="/images/food/hero.jpg"
              alt="Sunday brunch at Cafe St. Petersburg"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Info Strip */}
      <section className="border-y border-[#2C1810]/10 bg-white py-6">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-8 px-4 sm:gap-12">
          <div className="flex items-center gap-2 text-sm font-medium text-[#2C1810]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
            <span>
              <span className="font-semibold">When:</span> Sundays, 11:30 AM – 2:00 PM
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#2C1810]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#C4A35A]" />
            <span>
              <span className="font-semibold">Where:</span> {siteData.address}
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-[#2C1810]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
            <span>
              <span className="font-semibold">How:</span> Reservations recommended;
              walk-ins welcome when space allows
            </span>
          </div>
        </div>
      </section>

      {/* Brunch Story */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="max-w-2xl text-left">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Brunch with a Taste of Eastern Europe
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
              Sunday brunch at Cafe St. Petersburg is built around the flavors we
              grew up with—golden potato pancakes, pillowy dumplings, cottage
              cheese cakes hot from the pan. It&apos;s the kind of meal that invites you
              to linger over tea, coffee, and one more toast.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              We lean into Eastern European and Georgian traditions: generous
              portions, bright salads, and rich dairy, all meant to be shared across
              the table. Bring your family, invite friends, or make it a standing
              Sunday ritual.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              Kids are welcome, groups are encouraged, and there&apos;s always room for
              another pot of tea.
            </p>
          </div>
        </div>
      </section>

      {/* Brunch Menu Preview */}
      <section id="brunch-menu" className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Brunch Menu Highlights
            </h2>
            <Link
              href="/menu"
              className="font-medium text-[#3B5323] hover:underline"
            >
              View full menu →
            </Link>
          </div>
          <p className="mt-4 max-w-2xl text-lg text-[#2C1810]/80">
            Here&apos;s a taste of what we&apos;re serving on Sundays—classic eggs, sweet
            pancakes, and the comfort dishes that make our brunch feel like home.
          </p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {/* Left column – Eggs & Morning Plates */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C4A35A]">
                Eggs & Morning Plates
              </h3>
              <div className="mt-6 space-y-6">
                <article className="rounded-xl border border-[#2C1810]/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2C1810]">
                      Knyazheshkiy
                    </h4>
                    <span className="font-semibold text-[#3B5323]">$14</span>
                  </div>
                  <p className="mt-2 text-[#2C1810]/85">
                    Two fried eggs layered with creamy brynza cheese and fresh
                    scallions, served with rustic bread. Rich, salty, and simple—just
                    like brunch at your бабушка&apos;s table.
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#2C1810]/60">
                    Make it yours: choose your egg doneness; add sardelka sausage.
                  </p>
                </article>
                <article className="rounded-xl border border-[#2C1810]/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2C1810]">
                      Kupecheskiy
                    </h4>
                    <span className="font-semibold text-[#3B5323]">$17</span>
                  </div>
                  <p className="mt-2 text-[#2C1810]/85">
                    Farmer&apos;s-style eggs baked with kielbasa, onions, and potatoes in
                    a hearty skillet. A warm, filling plate that will carry you through
                    the rest of your Sunday.
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#2C1810]/60">
                    Options: choose your egg doneness; add extra sardelka sausage.
                  </p>
                </article>
              </div>
            </div>

            {/* Right column – Sweet & Savory Breakfast Classics */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[#C4A35A]">
                Sweet & Savory Breakfast Classics
              </h3>
              <div className="mt-6 space-y-6">
                <article className="rounded-xl border border-[#2C1810]/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2C1810]">
                      Oladushki
                    </h4>
                    <span className="font-semibold text-[#3B5323]">$14</span>
                  </div>
                  <p className="mt-2 text-[#2C1810]/85">
                    Mini buttermilk pancakes stacked high and dusted with sugar.
                    Choose how sweet you like them.
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#2C1810]/60">
                    Served with your choice of preserves, honey, or sweet condensed milk.
                  </p>
                </article>
                <article className="rounded-xl border border-[#2C1810]/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2C1810]">
                      Syrniki
                    </h4>
                    <span className="font-semibold text-[#3B5323]">$18</span>
                  </div>
                  <p className="mt-2 text-[#2C1810]/85">
                    Golden cottage cheese cakes, crisp at the edges and soft inside.
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#2C1810]/60">
                    Served with sour cream and berry preserves.
                  </p>
                </article>
                <article className="rounded-xl border border-[#2C1810]/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2C1810]">
                      Vareniki with Cherry
                    </h4>
                    <span className="font-semibold text-[#3B5323]">$19</span>
                  </div>
                  <p className="mt-2 text-[#2C1810]/85">
                    Tender dumplings filled with sour cherries, finished with a warm
                    berry sauce.
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#2C1810]/60">
                    Add sour cream for a classic Ukrainian touch.
                  </p>
                </article>
                <article className="rounded-xl border border-[#2C1810]/10 bg-white p-5 shadow-sm">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-serif text-xl font-semibold text-[#2C1810]">
                      Draniki (Potato Pancakes)
                    </h4>
                    <span className="font-semibold text-[#3B5323]">$14</span>
                  </div>
                  <p className="mt-2 text-[#2C1810]/85">
                    Shallow-fried potato pancakes with crisp edges and a soft center,
                    served with sour cream.
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wide text-[#2C1810]/60">
                    Add smoked salmon (+$7) or herring (+$5).
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brunch & Events */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Make Brunch Part of the Day
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
              Sunday at Cafe St. Petersburg is about more than one meal. Many of our
              family programs, kids parties, and themed events happen around brunch
              and early afternoon—so you can plan a full day without leaving Newton
              Centre.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
              Start with a relaxed brunch, then stay for a kids party, an interactive
              family program, or one of our special Sunday events.
            </p>
            <Link
              href="/events"
              className="mt-6 inline-flex font-medium text-[#3B5323] hover:underline"
            >
              See Upcoming Events →
            </Link>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            What Guests Love About Cafe St. Petersburg
          </h2>
          <p className="mt-4 text-[#2C1810]/80">
            Our brunch may be new, but the feeling our guests describe is the same—warm,
            welcoming, and unforgettable.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {testimonials.slice(0, 2).map((review) => (
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

      {/* Gallery */}
      <section className="bg-[#F9F6F0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
            A Cozy Sunday Table in Newton Centre
          </h2>
          <p className="mt-4 max-w-2xl text-[#2C1810]/80">
            Picture your brunch here—steaming plates, hot tea and coffee, and sunlight
            across the table.
          </p>
          <div className="mt-10 columns-2 gap-4 md:columns-3">
            {BRUNCH_GALLERY_IMAGES.map((img, i) => (
              <div
                key={img.src}
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

      {/* Final CTA + FAQ */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Ready for Sunday Brunch?
            </h2>
            <p className="mt-4 text-lg text-[#2C1810]/85">
              Reserve your table for this Sunday or plan ahead for a special family
              brunch. We&apos;re looking forward to welcoming you.
            </p>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Reserve Your Brunch Table
            </a>
          </div>

          <div className="mt-16">
            <h3 className="mb-4 font-serif text-2xl font-bold text-[#2C1810]">
              Brunch FAQs
            </h3>
            <FAQAccordion items={BRUNCH_FAQS} />
          </div>
        </div>
      </section>
    </div>
  );
}
