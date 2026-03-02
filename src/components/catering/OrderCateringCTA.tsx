"use client";

import { ChevronRight } from "lucide-react";
import { FoodImage } from "@/components/FoodImage";
import { cateringGalleryImages } from "@/lib/catering-data";

export function OrderCateringCTA() {
  return (
    <section className="bg-white py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
              Order Catering Today
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-[#2C1810]/85">
              Choose from convenient packages and order online in minutes. Or
              work with our team to create a custom menu for your event. A
              sampler of crowd-pleasing dishes that keep guests coming back for
              seconds.
            </p>
            <a
              href="#catering-form"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-md bg-[#3B5323] px-6 py-4 font-semibold text-white transition hover:bg-[#4a6b2d] sm:w-auto"
            >
              Order Catering Now
              <ChevronRight className="h-5 w-5" />
            </a>
          </div>
          <div className="mt-10 grid grid-cols-3 gap-4 lg:mt-0">
            {cateringGalleryImages.map((img, i) => (
              <div
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl transition duration-300 hover:shadow-lg"
              >
                <FoodImage
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 33vw, 200px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
