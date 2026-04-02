"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteData } from "@/lib/site-data";

const NAV_ITEMS = [
  { label: "Menu", href: "/menu" },
  { label: "Our Story", href: "/our-story" },
  { label: "Tasting", href: "/tasting" },
  { label: "Brunch", href: "/brunch" },
  { label: "Events", href: "/events" },
  { label: "Catering", href: "/catering" },
  { label: "Banquets", href: "/banquet" },
] as const;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/Logo/LOGOTYPE.svg"
              alt={siteData.name}
              width={303}
              height={52}
              className="h-8 w-auto lg:h-10"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex lg:items-center lg:gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-medium text-[#2C1810] transition hover:text-[#3B5323]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex lg:items-center lg:gap-4">
            <a
              href={`tel:${siteData.phone.replace(/\D/g, "")}`}
              className="font-medium text-[#2C1810] hover:text-[#3B5323]"
            >
              {siteData.phone}
            </a>
            <a
              href={siteData.reservationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-[#3B5323] px-4 py-2 font-semibold text-white transition hover:bg-[#4a6b2d]"
            >
              Reserve
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-16 z-40 bg-white lg:hidden">
          <nav className="flex h-full flex-col justify-between p-4">
            <div className="space-y-4">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block py-3 text-lg font-medium text-[#2C1810] transition hover:text-[#3B5323]"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="space-y-4">
              <a
                href={`tel:${siteData.phone.replace(/\D/g, "")}`}
                className="block py-3 text-center font-medium text-[#2C1810]"
              >
                {siteData.phone}
              </a>
              <a
                href={siteData.reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-md bg-[#3B5323] py-3 text-center font-semibold text-white"
              >
                Reserve a Table
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}