"use client";

import { FoodImage } from "@/components/FoodImage";

const BANQUET_IMAGES = [
  { src: "/images/banquet/image.jpg", alt: "Private banquet event at Cafe St. Petersburg" },
  { src: "/images/banquet/image2.jpg", alt: "Banquet celebration and dining" },
  { src: "/images/banquet/image3.jpg", alt: "Private party and event space" },
  { src: "/images/banquet/image4.jpg", alt: "Special occasion dining experience" },
];

export function ImageGallery() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#3b5323] sm:text-4xl">
          Celebrations at Our Table
        </h2>
        <div className="mt-10 grid grid-cols-2 gap-4">
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
                sizes="(max-width: 768px) 50vw, 50vw"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
