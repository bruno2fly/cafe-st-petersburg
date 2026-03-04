"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { siteData, navLinks } from "@/lib/site-data";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#2C1810]/10 bg-[#F9F6F0]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 bg-transparent">
          <Image
            src="/images/logo.png"
            alt={siteData.name}
            width={180}
            height={48}
            className="h-10 w-auto bg-transparent sm:h-12"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.main.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-[#2C1810]/90 transition hover:text-[#3B5323]"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteData.reservationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-[#3B5323] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#4a6b2d]"
          >
            Make a Reservation
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 lg:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-[#2C1810] transition ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#2C1810] transition ${mobileOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-[#2C1810] transition ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-[#2C1810]/10 bg-[#F9F6F0] px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-2">
            {navLinks.main.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-2 text-sm font-medium text-[#2C1810]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-md bg-[#3B5323] px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMobileOpen(false)}
            >
              Make a Reservation
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
