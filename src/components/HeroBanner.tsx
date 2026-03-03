"use client";

import Link from "next/link";
import { siteData } from "@/lib/site-data";

export function HeroBanner() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videohome.mp4" type="video/mp4" />
      </video>
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)",
        }}
      />
      <div className="relative flex min-h-[85vh] items-end pb-16 pl-4 pr-4 sm:pl-8 sm:pr-8 md:pl-12 md:pr-12 lg:pl-16 lg:pr-16">
        <div className="max-w-3xl text-left">
          <p
            className="animate-fade-up text-[13px] font-medium uppercase tracking-[3px] text-[#C4A35A] opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Newton, MA
          </p>
          <h1
            className="mt-3 font-serif text-[36px] font-bold leading-tight text-white opacity-0 animate-fade-up sm:text-[44px] md:text-[52px]"
            style={{
              maxWidth: "650px",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
            }}
          >
            Authentic Eastern European Cuisine in Newton, MA
          </h1>
          <p
            className="mt-4 text-lg text-white/85 opacity-0 animate-fade-up"
            style={{
              maxWidth: "500px",
              animationDelay: "0.6s",
              animationFillMode: "forwards",
            }}
          >
            A hidden gem serving classic recipes and warm hospitality
          </p>
          <div
            className="mt-8 flex flex-wrap gap-4 opacity-0 animate-fade-up"
            style={{
              animationDelay: "0.8s",
              animationFillMode: "forwards",
            }}
          >
            <Link
              href="/menu"
              className="rounded-md bg-[#3B5323] px-8 py-4 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Order Online
            </Link>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-[#2C1810]"
            >
              Book a Table
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
