"use client";

import { FoodImage } from "@/components/FoodImage";

const BANQUET_IMAGES = [
  { src: "/images/food/interior.jpg", alt: "Restaurant interior" },
  { src: "/images/food/hero.jpg", alt: "Table setting" },
  { src: "/images/food/meat-platter.jpg", alt: "Meat platter" },
  { src: "/images/food/blini-red-caviar.jpg", alt: "Blini with caviar" },
  { src: "/images/food/beef-stroganoff.jpg", alt: "Beef stroganoff" },
  { src: "/images/food/borscht.jpg", alt: "Borscht" },
];

export function ImageGallery() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#3b5323] sm:text-4xl">
          Memorable Moments
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {BANQUET_IMAGES.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden rounded-xl transition duration-300 hover:scale-[1.02]"
            >
              <FoodImage
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
