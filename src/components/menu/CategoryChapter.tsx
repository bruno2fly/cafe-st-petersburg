"use client";

import Image from "next/image";
import { FoodImage } from "@/components/FoodImage";
import type { MenuChapter, MenuItem } from "@/lib/menu-data";

const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEEA/ALPZ+5NQ0m2eC0u5I4ncuUByMkAE4P4KUpVW6Y//2Q==";

function formatPrice(price: number) {
  return `$${price.toFixed(2)}`;
}

function MenuItemRow({ item }: { item: MenuItem }) {
  return (
    <article className="group flex items-start gap-4 py-4">
      {item.image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
          <FoodImage
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-lg font-bold text-[#2C1810] sm:text-xl">
            {item.name}
          </h3>
          <span className="shrink-0 font-semibold text-[#C4A35A]">
            {formatPrice(item.price)}
          </span>
        </div>
        {item.description && (
          <p className="mt-1 max-w-[500px] text-sm text-[#2C1810]/85 sm:text-[15px]">
            {item.description}
          </p>
        )}
        {item.allergens && item.allergens.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {item.allergens.map((a) => (
              <span
                key={a}
                className="rounded bg-[#2C1810]/10 px-2 py-0.5 text-[10px] text-[#2C1810]/70"
              >
                {a}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

function FeatureSpotlightCard({
  spotlight,
}: {
  spotlight: NonNullable<MenuChapter["featureSpotlight"]>;
}) {
  return (
    <div className="mb-12 overflow-hidden rounded-2xl border border-[#2C1810]/10 bg-[#F9F6F0]/80 shadow-sm">
      <div className="grid lg:grid-cols-[60%_40%]">
        <div className="relative aspect-[4/3] overflow-hidden lg:aspect-auto lg:min-h-[280px]">
          <FoodImage
            src={spotlight.image}
            alt={spotlight.name}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 60vw"
          />
        </div>
        <div className="flex flex-col justify-center p-6 sm:p-8">
          <h3 className="font-serif text-2xl font-bold text-[#2C1810] sm:text-3xl">
            {spotlight.name}
          </h3>
          <p className="mt-2 text-lg font-semibold text-[#C4A35A]">
            {formatPrice(spotlight.price)}
          </p>
          <p className="mt-4 text-[#2C1810]/85">{spotlight.description}</p>
        </div>
      </div>
    </div>
  );
}

export function CategoryChapter({
  chapter,
  index,
}: {
  chapter: MenuChapter;
  index: number;
}) {
  const bgClass = chapter.bgColor === "cream" ? "bg-[#F9F6F0]" : "bg-white";

  return (
    <section
      id={chapter.id}
      className={`scroll-mt-28 py-12 sm:py-16 lg:scroll-mt-24 ${bgClass}`}
    >
      {/* Hero Block */}
      <div className="relative mb-12 aspect-[16/9] min-h-[40vh] overflow-hidden rounded-2xl sm:min-h-[50vh]">
        <Image
          src={chapter.heroImage}
          alt={chapter.title}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 80vw"
          placeholder="blur"
          blurDataURL={BLUR_DATA}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-10">
          <div className="flex items-start gap-3">
            <div className="h-full min-h-[60px] w-1 shrink-0 rounded-full bg-[#C4A35A]" />
            <div>
              <h2 className="font-serif text-3xl font-bold uppercase tracking-wide text-white sm:text-4xl lg:text-[2.5rem]">
                {chapter.title}
              </h2>
              <p className="mt-3 max-w-xl font-serif text-lg italic text-white/90">
                {chapter.storyIntro}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8">
        {chapter.featureSpotlight && (
          <FeatureSpotlightCard spotlight={chapter.featureSpotlight} />
        )}

        <div className="grid gap-x-8 gap-y-0 sm:grid-cols-2">
          {chapter.items
            .filter(
              (item) =>
                !chapter.featureSpotlight ||
                item.name !== chapter.featureSpotlight.name
            )
            .map((item, i) => (
            <div
              key={item.name}
              className="animate-fade-up opacity-0"
              style={{
                animationDelay: `${i * 50}ms`,
                animationFillMode: "forwards",
              }}
            >
              <MenuItemRow item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
