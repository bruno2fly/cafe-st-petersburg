"use client";

const BANQUET_VIDEO_EMBED =
  "https://drive.google.com/file/d/1lltHgRVptCe5EluhD-L_D4t5j84-8QmP/preview";

export function BanquetHero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(to top, rgba(45, 64, 26, 0.95) 0%, rgba(45, 64, 26, 0.85) 30%, rgba(45, 64, 26, 0.7) 60%, rgba(45, 64, 26, 0.5) 100%), url('/images/catering.jpeg')",
        }}
      />
      <div className="relative flex min-h-[90vh] flex-col items-center justify-center px-6 py-24 text-center">
        <span className="mb-4 rounded-full border border-[#c4a35a]/60 bg-[#c4a35a]/20 px-4 py-1.5 text-sm font-medium text-[#f5f0e8]">
          From $115 per person
        </span>
        <h1 className="font-serif text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl md:text-6xl lg:text-7xl">
          Celebrate with Flavor
        </h1>
        <p className="mx-auto mt-6 max-w-2xl rounded-xl bg-black/30 px-6 py-4 text-lg leading-relaxed text-white sm:text-xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
          We offer a unique space for group gatherings and special occasions—family
          milestones, work events, celebrations—with authentic Eastern European meals in
          a warm, inviting setting designed for connection and shared moments.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:gap-6">
          <button
            type="button"
            onClick={() => scrollToSection("banquet-packages")}
            className="rounded-full bg-[#c4a35a] px-8 py-4 font-semibold text-[#2d401a] transition hover:bg-[#d4b86a]"
          >
            View Banquet Menus
          </button>
          <button
            type="button"
            onClick={() => scrollToSection("banquet-inquiry")}
            className="rounded-full border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Inquire Now
          </button>
        </div>
      </div>
    </section>
  );
}
