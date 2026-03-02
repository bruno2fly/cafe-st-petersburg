"use client";

import Link from "next/link";
import { useState } from "react";
import { siteData } from "@/lib/site-data";

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

const HOURS_MAP: Record<string, string> = {
  Sunday: siteData.hours.sunday,
  Monday: siteData.hours.mondayToWednesday,
  Tuesday: siteData.hours.mondayToWednesday,
  Wednesday: siteData.hours.mondayToWednesday,
  Thursday: siteData.hours.thursday,
  Friday: siteData.hours.friday,
  Saturday: siteData.hours.saturday,
};

export function LocationMap() {
  const [showHours, setShowHours] = useState(false);
  const today = DAYS[new Date().getDay()];
  const todayHours = HOURS_MAP[today];

  return (
    <section className="bg-[#F9F6F0] py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-3xl font-bold text-[#2C1810] sm:text-4xl">
          Our location
        </h2>
        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <iframe
              title="Cafe St. Petersburg location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.0!2d-71.19!3d42.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e377c3d0e3f0e1%3A0x0!2zNTctMSBVbmlvbiBTdCwgTmV3dG9uIENlbnRyZSwgTUEgMDI0NTk!5e0!3m2!1sen!2sus!4v1709155200000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[400px] w-full"
            />
          </div>
          <div>
            <p className="text-sm font-medium uppercase tracking-wider text-[#C4A35A]">
              Cafe St. Petersburg
            </p>
            <h3 className="mt-2 font-serif text-2xl font-bold text-[#2C1810]">
              Newton Centre, MA
            </h3>
            <address className="mt-4 not-italic text-[#2C1810]/90">
              {siteData.address}
            </address>
            <div className="mt-4 space-y-1">
              <a
                href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                className="block text-[#3B5323] hover:underline"
              >
                {siteData.phone}
              </a>
              <a
                href={`mailto:${siteData.email}`}
                className="block text-[#3B5323] hover:underline"
              >
                {siteData.email}
              </a>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <a
                href={siteData.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-md bg-[#3B5323] px-6 py-3 font-semibold text-white transition hover:bg-[#4a6b2d]"
              >
                Get Directions →
              </a>
              <Link
                href="/menu"
                className="inline-flex rounded-md border border-[#3B5323] px-6 py-3 font-semibold text-[#3B5323] transition hover:bg-[#3B5323] hover:text-white"
              >
                Order Now
              </Link>
            </div>
            <div className="mt-6">
              <button
                type="button"
                onClick={() => setShowHours(!showHours)}
                className="text-sm font-medium text-[#3B5323] hover:underline"
              >
                {showHours ? "Hide hours" : "See hours"}
              </button>
              {showHours && (
                <div className="mt-2 space-y-1 text-sm text-[#2C1810]/90">
                  <p>
                    <strong>Today ({today}):</strong> {todayHours}
                  </p>
                  <p>Thursday: {siteData.hours.thursday}</p>
                  <p>Friday: {siteData.hours.friday}</p>
                  <p>Saturday: {siteData.hours.saturday}</p>
                  <p>Sunday: {siteData.hours.sunday}</p>
                  <p>Mon–Wed: {siteData.hours.mondayToWednesday}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
