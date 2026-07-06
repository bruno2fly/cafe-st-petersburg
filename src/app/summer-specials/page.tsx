import Link from "next/link";
import { siteData } from "@/lib/site-data";

export const metadata = {
  title: "Summer Specials | Cafe St. Petersburg",
  description:
    "Weekly rotating summer menu at Cafe St. Petersburg. Seasonal dishes crafted with the freshest ingredients - duck, lamb rack, salmon, caviar, and more. Contact us to pre-order.",
};

const COLD_APPETIZERS = [
  {
    name: "Homemade Pickles",
    description: "A delightful assortment of sauerkraut, tomatoes, and cucumbers.",
  },
  {
    name: "Bruschetta Assortment",
    description: "Six mini bruschettas topped with Parma ham, smoked salmon, feta, and basil-tomato salsa.",
  },
  {
    name: "Meat Platter",
    description: "Seasonal assortment of house-made meat delicacies. Selection subject to change. Include pork / exclude pork.",
  },
  {
    name: "Fish Delicacies",
    description: "A balanced mix of salted herring, smoked white fish fillet, and lightly salted salmon, served with roasted potatoes and green onions.",
  },
  {
    name: "Classic Chicken Liver Pâté",
    description: "Smooth and creamy pâté, served with honey and rye crisps.",
  },
  {
    name: "Homemade Kholodets",
    description: "Traditional chicken and beef aspic paired with mustard and horseradish.",
  },
  {
    name: "Eggplant Appetizer",
    description: "Grilled eggplant layered with basil cream cheese and cherry tomatoes.",
  },
  {
    name: "Odessa-Style Forshmack",
    description: "A spiced cold appetizer made from finely chopped herring fillet, onion, apple, boiled egg, and fresh herbs. Served on rice chips with bread & milk.",
  },
];

const SALADS = [
  {
    name: "Vegetable Salad",
    description: "Fresh organic vegetables and greens: tomatoes, cucumbers, red onion, bell peppers, and homemade bryndza cheese drizzled with homemade oil.",
  },
  {
    name: "Classic Olivier Salad",
    description: "Blend of boiled root vegetables, eggs, green peas, and your choice of chicken or beef, garnished with dill and dressed with light homemade mayonnaise.",
  },
  {
    name: "Herring Under a Fur Coat",
    description: "A Soviet culinary classic: layered salted herring beneath a \"blanket\" of potatoes, beets, carrots, eggs, and mayonnaise.",
  },
  {
    name: "Caesar with Chicken / Shrimp",
    description: "Crisp mix of lettuce, tender chicken or juicy shrimp, crunchy croutons, and a bold Caesar dressing.",
  },
  {
    name: "Smoked Eel Salad with Nut Dressing",
    description: "A refined mix of fresh salad greens, cucumber, nutty dressing, and smoked eel.",
    sharing: true,
  },
  {
    name: "Caribbean Salad",
    description: "Chicken, mango, and mixed greens topped with almonds and tossed in an orange-honey dressing.",
    sharing: true,
  },
  {
    name: "Nevsky Salad",
    description: "Green beans and chicken liver on mixed greens with a sesame sauce.",
    sharing: true,
  },
];

const HOT_APPETIZERS = [
  {
    name: "Pirozhki (Puff Pastry Hand Pies)",
    description: "Delicate yeast dough pastry turnovers filled with your choice of meat, braised cabbage, or egg with fresh herbs.",
  },
  {
    name: "Tiger Shrimp in Sauce Vierge",
    description: "Juicy tiger shrimp served with a fresh French sauce vierge made from olive oil, lemon juice, tomatoes, herbs, olives, and capers.",
    sharing: true,
  },
  {
    name: "Mushroom Julienne",
    description: "Porcini mushrooms baked in a creamy sauce with onions, spices, and grated cheese. Served hot in tartlets.",
    sharing: true,
  },
  {
    name: "Crepes",
    description: "Homemade crêpes filled with your choice of beef or chicken with spinach and blue cheese.",
    sharing: true,
  },
  {
    name: "Stuffed Cabbage Rolls (Golubtsy)",
    description: "A hearty blend of pork, beef, cabbage, and rice, served with sour cream. Include pork / exclude pork.",
  },
];

const ENTREES = [
  {
    name: "Baked Salmon with Sauce of Your Choice",
    description: "Tender baked salmon served with your choice of sauce: a creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta.",
  },
  {
    name: "Baked White Fish (Seabass) with Sauce of Your Choice",
    description: "Tender baked white fish (seabass), served with your choice of sauce: a creamy parsnip sauce or basil sauce with crispy breadcrumbs and pancetta.",
    sharing: true,
  },
  {
    name: "Whole Roasted Duck with Apples",
    description: "A whole duck, slow-roasted with apples, served with a fruity berry sauce that complements the richness of the meat with a sweet and tangy balance.",
    sharing: true,
  },
  {
    name: "Lamb Rack with Juniper Sauce",
    description: "Tender lamb rack served with an aromatic juniper sauce, creating a perfectly balanced combination of earthy meat flavor and fresh pine notes.",
    sharing: true,
  },
  {
    name: "Duck Breast with Berry Sauce",
    description: "Juicy duck breast served with an exquisite berry sauce that enhances the rich and flavorful taste of the duck meat.",
    sharing: true,
  },
  {
    name: "Ribeye Steak, Roasted Whole",
    description: "A marbled ribeye steak roasted whole, preserving all the juiciness and aroma, perfectly cooked for true meat lovers.",
    sharing: true,
  },
  {
    name: "Baked Pork Shoulder with Garlic Butter",
    description: "Juicy and tender pork shoulder, slow-baked to perfection, infused with the rich aroma of garlic butter and herbs. A hearty and flavorful centerpiece for any feast.",
    sharing: true,
  },
  {
    name: "Chicken Tabaka",
    description: "A whole chicken marinated in a savory spiced sauce, then grilled to a crispy golden perfection.",
  },
  {
    name: "Roasted Lamb Fillet",
    description: "Succulent lamb meat, perfectly roasted and served with a classic demi-glace sauce that adds depth and richness to each bite.",
    sharing: true,
    servings: "4-6",
  },
  {
    name: "Pozharskie Cutlets",
    description: "Delicate and tender chopped chicken fillet cutlets, with a crispy golden crust. Served with a creamy sauce enriched with parsnip for a unique and savory touch.",
  },
];

const SIDES = [
  {
    name: "Baby Vegetables with Herbs and Parmesan",
    description: "Tender baby vegetables seasoned with herbs and finished with grated Parmesan.",
  },
  {
    name: "Baked Potatoes with Spices",
    description: "Crispy baked potatoes seasoned with a blend of spices.",
  },
  {
    name: "Grilled Vegetables",
    description: "Seasonal vegetables grilled until tender with a light smoky flavor.",
  },
  {
    name: "Rice with Vegetables",
    description: "Steamed rice served with vegetables sautéed in butter.",
  },
];

function SharingBadge({ servings }: { servings?: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-[#C4A35A]/15 px-2.5 py-0.5 text-xs font-medium text-[#8B6914]">
      🍽 Perfect for Sharing · Serves {servings ?? "2-4"}
    </span>
  );
}

function MenuSection({
  title,
  icon,
  items,
  bg,
}: {
  title: string;
  icon: string;
  items: { name: string; description: string; sharing?: boolean; servings?: string }[];
  bg: "white" | "cream";
}) {
  return (
    <section className={`py-16 sm:py-20 ${bg === "cream" ? "bg-[#FBF7EF]" : "bg-white"}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <span className="text-3xl">{icon}</span>
          <h2 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">{title}</h2>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-[#2C1810]/8 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-[#C4A35A]/40"
            >
              <h3 className="font-serif text-lg font-semibold text-[#2C1810] leading-snug">
                {item.name}
              </h3>
              {item.sharing && (
                <div className="mt-2">
                  <SharingBadge servings={item.servings} />
                </div>
              )}
              <p className="mt-2 text-sm leading-relaxed text-[#2C1810]/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function SummerSpecialsPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#1a3a0f] via-[#2d5a1b] to-[#1a3a0f] py-24 sm:py-32">
        {/* Decorative sun rays */}
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -top-32 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[#F5C842]" />
        </div>
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute bottom-0 left-0 h-32 w-64 rounded-tr-full bg-[#C4A35A]/10" />
          <div className="absolute top-0 right-0 h-48 w-48 rounded-bl-full bg-[#C4A35A]/10" />
        </div>

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#C4A35A]/40 bg-[#C4A35A]/15 px-4 py-1.5 text-sm font-semibold text-[#F5D98A] mb-6">
            ☀️ Weekly Rotating Menu
          </div>
          <h1 className="font-serif text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Summer Specials
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl">
            Our seasonal specialties change throughout the summer, crafted using the
            freshest available ingredients at their peak. Every visit brings something new.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C4A35A] px-8 py-4 font-semibold text-[#1a2e0a] transition hover:bg-[#d4b86a] hover:scale-105"
            >
              Reserve Your Table
            </a>
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Call to Pre-Order
            </a>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="bg-[#FFF8E7] border-y border-[#C4A35A]/30 py-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <div className="shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-[#C4A35A]/20 text-2xl">
              📋
            </div>
            <div>
              <h2 className="font-semibold text-[#2C1810] text-lg">How Summer Specials Work</h2>
              <p className="mt-1 text-[#2C1810]/80 leading-relaxed">
                Our Summer Specials change <strong>weekly</strong> - so availability may vary from one visit to the next.
                All dishes are served in <strong>generous portions intended for sharing</strong>.
                Please <a href={`tel:${siteData.phone.replace(/\D/g, "")}`} className="font-semibold text-[#3B5323] underline underline-offset-2 hover:text-[#4a6b2d]">contact us before your reservation</a> to
                check availability or pre-order your favorites.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Jump Links */}
      <section className="bg-white border-b border-[#2C1810]/10 py-5 sticky top-16 z-30 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-hide">
            <span className="shrink-0 text-xs font-semibold uppercase tracking-widest text-[#2C1810]/50 mr-2">Jump to:</span>
            {[
              { href: "#cold-appetizers", label: "Cold Appetizers" },
              { href: "#salads", label: "Salads" },
              { href: "#hot-appetizers", label: "Hot Appetizers" },
              { href: "#entrees", label: "Entrées" },
              { href: "#sides", label: "Sides" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="shrink-0 rounded-full border border-[#2C1810]/15 px-4 py-1.5 text-sm font-medium text-[#2C1810] transition hover:bg-[#3B5323] hover:text-white hover:border-[#3B5323]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Cold Appetizers */}
      <div id="cold-appetizers">
        <MenuSection title="Cold Appetizers" icon="🧊" items={COLD_APPETIZERS} bg="white" />
      </div>

      {/* Salads */}
      <div id="salads">
        <MenuSection title="Salads" icon="🥗" items={SALADS} bg="cream" />
      </div>

      {/* Hot Appetizers */}
      <div id="hot-appetizers">
        <MenuSection title="Hot Appetizers" icon="🔥" items={HOT_APPETIZERS} bg="white" />
      </div>

      {/* Entrees */}
      <div id="entrees">
        <MenuSection title="Entrées" icon="🍽️" items={ENTREES} bg="cream" />
      </div>

      {/* Sides */}
      <div id="sides">
        <MenuSection title="Sides" icon="🌿" items={SIDES} bg="white" />
      </div>

      {/* Bottom CTA */}
      <section className="bg-gradient-to-br from-[#1a3a0f] via-[#2d5a1b] to-[#1a3a0f] py-20 sm:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C4A35A] mb-4">
            ☀️ Summer 2026
          </p>
          <h2 className="font-serif text-3xl font-bold text-white sm:text-4xl">
            Don&apos;t Miss This Week&apos;s Menu
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/75">
            Our specials rotate weekly. Call us ahead to confirm what&apos;s available
            and pre-order your favorites so nothing runs out before you arrive.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#C4A35A] px-8 py-4 font-semibold text-[#1a2e0a] transition hover:bg-[#d4b86a]"
            >
              Reserve Now
            </a>
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="rounded-full border-2 border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              {siteData.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
