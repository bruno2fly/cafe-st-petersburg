"use client";

import Image from "next/image";
import { ChevronRight } from "lucide-react";

const HERO_IMAGE = "/images/catering.jpeg";
const BLUR_DATA =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBQYSIRMxQVH/xAAVAQEBAAAAAAAAAAAAAAAAAAADBP/EABoRAAICAwAAAAAAAAAAAAAAAAECAAMRITH/2gAMAwEAAhEDEEA/ALPZ+5NQ0m2eC0u5I4ncuUByMkAE4P4KUpVW6Y//2Q==";

export function CateringHero() {
  return (
    <section className="bg-[#F9F6F0] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="flex flex-col justify-center lg:order-1 lg:pr-8">
          <h1 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl lg:text-[2.5rem]">
            Eastern European Catering for Events in Newton MA!
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#2C1810]/85">
            Freshly prepared, professionally delivered catering for corporate
            lunches, private parties, weddings, and more. Order online in
            minutes.
          </p>
          <a
            href="#catering-form"
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-md bg-[#3B5323] px-6 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
          >
            Order Catering Now
            <ChevronRight className="h-5 w-5" />
          </a>
        </div>
        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg lg:order-2 lg:mt-0">
          <Image
            src={HERO_IMAGE}
            alt="Catered buffet spread with purple ambient lighting, floral arrangement, and food display"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
            placeholder="blur"
            blurDataURL={BLUR_DATA}
          />
        </div>
      </div>
    </section>
  );
}
