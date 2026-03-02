import { cateringOccasions } from "@/lib/catering-data";

export function OccasionGrid() {
  return (
    <section className="bg-[#F9F6F0] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
          Eastern European Catering for Every Occasion
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cateringOccasions.map(({ id, title, description, Icon }) => (
            <article
              key={id}
              className="group rounded-xl bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#3B5323]/10 text-[#3B5323] transition group-hover:bg-[#3B5323]/20">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-4 font-semibold text-[#2C1810]">{title}</h3>
              <p className="mt-2 text-sm text-[#2C1810]/80">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
