import { siteData } from "@/lib/site-data";
import { FoodImage } from "@/components/FoodImage";

export const metadata = {
  title: "Signature Tasting Experience — Café St. Petersburg",
  description:
    "Boston's only Eastern European multi-course tasting experience. Two curated journeys through authentic flavors — $75 per person.",
};

const BALTIC_COURSES = [
  { label: "First Course", text: "Zakuska-style toast topped with smoked salmon, served with marinated cabbage & shot of our infused vodka" },
  { label: "Second Course", text: "Traditional fish soup (Ukha) served with a savory pie (pirozhok) & shot of our infused vodka" },
  { label: "Third Course", text: "Beet & vegetable salad (Vinegret) · Layered salmon" },
  { label: "Fourth Course", text: "Pan-seared carp cutlets served with house pickled cucumbers" },
  { label: "Dessert", text: "Choice of Medovik (honey cake) or Napoleon (layered cream pastry)" },
];

const TSAR_COURSES = [
  { label: "First Course", text: "Zakuska-style toast with smoked meat, served with marinated cabbage & shot of our infused vodka" },
  { label: "Second Course", text: "Borscht (beet soup) served with a savory pie (pirozhok)" },
  { label: "Third Course", text: "Olivier Salad · Beet & vegetable salad (Vinegret)" },
  { label: "Fourth Course", text: "Classic Pozharsky chicken cutlet served with house pickled cucumbers & shot of infused vodka" },
  { label: "Dessert", text: "Choice of Medovik (honey cake) or Napoleon (layered pastry)" },
];

function CourseItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="py-5 border-b border-[#2C1810]/8 last:border-0">
      <p className="text-sm font-semibold uppercase tracking-[2px] text-[#C4A35A] mb-2">{label}</p>
      <p className="text-[#2C1810]/80 leading-relaxed">{text}</p>
    </div>
  );
}

export default function TastingPage() {
  return (
    <div>
      {/* Hero — Full-bleed with atmosphere photo */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <FoodImage
          src="/images/tasting-dinner.jpg"
          alt="Tasting dinner at Café St. Petersburg"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        <div className="relative text-center px-4 max-w-3xl">
          <p
            className="text-[#C4A35A] text-sm font-semibold uppercase tracking-[4px] mb-4"
          >
            Boston&apos;s Only Eastern European Tasting
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Signature Tasting<br />Experience
          </h1>
          <p className="text-white/80 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto mb-8">
            A curated multi-course journey through authentic Eastern European flavors — each dish a story, each course a celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3B5323] text-white font-semibold px-8 py-4 rounded-md hover:bg-[#4a6b2d] transition"
            >
              Reserve Your Tasting
            </a>
            <span className="text-white/60 text-sm">$75 per person · Thursday Night only</span>
          </div>
        </div>
      </section>

      {/* Statement section */}
      <section className="bg-[#2C1810] py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-12 h-[2px] bg-[#C4A35A] mx-auto mb-8" />
          <p className="font-serif text-2xl sm:text-3xl text-white/90 leading-relaxed">
            The only multi-course Eastern European tasting experience in Greater Boston.
            Five courses, two journeys, one unforgettable evening.
          </p>
          <div className="w-12 h-[2px] bg-[#C4A35A] mx-auto mt-8" />
        </div>
      </section>

      {/* Atmosphere photo strip */}
      <section className="relative h-[40vh] sm:h-[50vh] overflow-hidden">
        <FoodImage
          src="/images/tasting-table.jpg"
          alt="Elegant table setting at Café St. Petersburg"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#F9F6F0]" />
      </section>

      {/* Menu Cards */}
      <section className="bg-[#F9F6F0] py-16 sm:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <p className="text-[#C4A35A] text-sm font-semibold uppercase tracking-[3px] mb-3">Choose Your Journey</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#2C1810]">Two Curated Menus</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Baltic Coast */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#2C1810]/8 overflow-hidden">
              <div className="bg-[#2C1810] px-8 py-6 text-center">
                <p className="text-[#C4A35A] text-xs font-semibold uppercase tracking-[3px] mb-1">Journey I</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">Baltic Coast</h3>
                <p className="text-white/50 text-sm mt-2">A seafood-forward voyage through Eastern European shores</p>
              </div>
              <div className="px-8 py-6">
                {BALTIC_COURSES.map((c) => (
                  <CourseItem key={c.label} {...c} />
                ))}
              </div>
            </div>

            {/* Tsar's Table */}
            <div className="bg-white rounded-2xl shadow-sm border border-[#2C1810]/8 overflow-hidden">
              <div className="bg-[#2C1810] px-8 py-6 text-center">
                <p className="text-[#C4A35A] text-xs font-semibold uppercase tracking-[3px] mb-1">Journey II</p>
                <h3 className="font-serif text-2xl sm:text-3xl text-white">The Tsar&apos;s Table</h3>
                <p className="text-white/50 text-sm mt-2">A rich, hearty feast fit for royalty</p>
              </div>
              <div className="px-8 py-6">
                {TSAR_COURSES.map((c) => (
                  <CourseItem key={c.label} {...c} />
                ))}
              </div>
            </div>
          </div>

          {/* Create Your Own */}
          <div className="mt-12 bg-white rounded-2xl shadow-sm border border-[#C4A35A]/30 p-8 sm:p-10 text-center max-w-2xl mx-auto">
            <p className="text-[#C4A35A] text-xs font-semibold uppercase tracking-[3px] mb-2">Journey III</p>
            <h3 className="font-serif text-2xl text-[#2C1810] mb-3">Create Your Own</h3>
            <p className="text-[#2C1810]/70 leading-relaxed">
              Can&apos;t decide? Mix and match your favorite courses from either menu to build your perfect tasting journey. Your server will guide you through the possibilities.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#2C1810] py-16 sm:py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <p className="text-[#C4A35A] text-sm font-semibold uppercase tracking-[3px] mb-4">Begin Your Journey</p>
          <h2 className="font-serif text-3xl sm:text-4xl text-white mb-4">$75 Per Person</h2>
          <p className="text-white/60 mb-8 leading-relaxed">
            Available Thursday Night only · Reservations recommended for groups of 4+
          </p>
          <a
            href={siteData.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#C4A35A] text-[#2C1810] font-semibold px-10 py-4 rounded-md hover:bg-[#d4b96a] transition text-lg"
          >
            Reserve Your Tasting
          </a>
          <p className="text-white/40 text-sm mt-6">
            57 Union Street, Newton · (617) 762-7830
          </p>
        </div>
      </section>
    </div>
  );
}
