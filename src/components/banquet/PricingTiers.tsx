import { FoodImage } from "@/components/FoodImage";

const pricingTiers = [
  {
    name: "Classic Banquet",
    price: "$115",
    description: "Traditional Eastern European feast with all the favorites",
    features: [
      "Choice of 3 appetizers",
      "Choice of 2 soups",
      "Choice of 3 main courses",
      "House salad and bread",
      "Coffee and tea service",
      "Basic table settings",
    ],
    image: "/images/banquet/classic-spread.jpg",
  },
  {
    name: "Ukrainian Banquet",
    price: "$135",
    description: "Authentic Ukrainian celebration menu with traditional specialties",
    features: [
      "Соління",
      "Холодець",
      "Ковбаса куряча та свино-яловича",
      "Каша гречана по особливому",
      "Картопля в мундирі",
      "Літній салат зі свіжих овочів",
      "Сало з грінками та часничком",
      "Оселедець",
      "Борщок",
      "Котлети (мікс свинини з яловичиною)",
      "Вареники з картоплею",
    ],
    image: "/images/banquet/premium-table.jpg",
    popular: true,
  },
  {
    name: "Premium Experience",
    price: "$165",
    description: "Elevated dining with premium ingredients and presentation",
    features: [
      "Caviar service",
      "Premium meat selections",
      "Chef's special preparations",
      "Wine pairing recommendations",
      "Enhanced presentation",
      "Dedicated service staff",
      "Special occasion touches",
    ],
    image: "/images/banquet/luxury-dining.jpg",
  },
];

export function PricingTiers() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold text-[#3B5323] sm:text-4xl">
            Banquet Packages
          </h2>
          <p className="mt-4 text-lg text-[#2C1810]/80">
            Choose the perfect celebration menu for your event
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative overflow-hidden rounded-2xl border-2 bg-white shadow-lg transition-all hover:shadow-xl ${
                tier.popular
                  ? "border-[#C4A35A] ring-4 ring-[#C4A35A]/20"
                  : "border-[#2C1810]/10"
              }`}
            >
              {tier.popular && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-[#C4A35A] px-4 py-1 text-xs font-semibold text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="relative aspect-[4/3] overflow-hidden">
                <FoodImage
                  src={tier.image}
                  alt={`${tier.name} banquet setup`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="font-serif text-xl font-bold text-white">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-2xl font-bold text-[#C4A35A]">
                    {tier.price}
                    <span className="text-sm font-medium text-white/90">
                      /person
                    </span>
                  </p>
                </div>
              </div>

              <div className="p-6">
                <p className="text-[#2C1810]/80">{tier.description}</p>

                <ul className="mt-6 space-y-3">
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#3B5323]" />
                      <span className="text-sm text-[#2C1810]/90">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#banquet-inquiry"
                  className={`mt-8 block rounded-md px-6 py-3 text-center font-semibold transition ${
                    tier.popular
                      ? "bg-[#3B5323] text-white hover:bg-[#4a6b2d]"
                      : "border-2 border-[#3B5323] text-[#3B5323] hover:bg-[#3B5323] hover:text-white"
                  }`}
                >
                  Select This Package
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-[#F5F0E8] p-8 text-center">
          <h3 className="font-serif text-xl font-semibold text-[#3B5323]">
            Custom Packages Available
          </h3>
          <p className="mt-2 text-[#2C1810]/80">
            Need something different? We can create a custom menu and experience
            tailored to your event.
          </p>
          <a
            href="#banquet-inquiry"
            className="mt-4 inline-flex font-medium text-[#3B5323] hover:underline"
          >
            Discuss Custom Options →
          </a>
        </div>
      </div>
    </section>
  );
}