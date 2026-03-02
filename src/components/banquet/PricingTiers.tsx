"use client";

import { useState } from "react";
import {
  banquetTiers,
  additionalPricing,
  type BanquetTier,
} from "@/lib/banquet-menus";
import { MenuDetail } from "./MenuDetail";

export function PricingTiers() {
  const [openTier, setOpenTier] = useState<BanquetTier | null>(null);
  const [expandedMobile, setExpandedMobile] = useState<BanquetTier | null>(null);

  const handleViewMenu = (tier: BanquetTier) => {
    if (typeof window !== "undefined" && window.innerWidth < 1024) {
      setExpandedMobile(expandedMobile?.id === tier.id ? null : tier);
    } else {
      setOpenTier(tier);
    }
  };

  return (
    <>
      <section id="banquet-packages" className="scroll-mt-24 bg-[#f5f0e8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-[#3b5323] sm:text-4xl">
            Banquet Packages
          </h2>
          <p className="mt-4 text-[#3b5323]/80">
            All packages include tea, coffee, water (still & sparkling), and soda. 7%
            tax and 20% gratuity added.
          </p>
          <div className="mt-12 grid gap-8 lg:grid-cols-2">
            {banquetTiers.map((tier) => (
              <div
                key={tier.id}
                className={`relative overflow-hidden rounded-2xl border-2 bg-white p-8 shadow-sm transition hover:shadow-md ${
                  tier.badge
                    ? "border-[#c4a35a]"
                    : "border-[#c4a35a]/60"
                }`}
              >
                {tier.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-[#c4a35a] px-3 py-1 text-xs font-semibold text-[#2d401a]">
                    {tier.badge}
                  </span>
                )}
                <h3 className="font-serif text-2xl font-bold text-[#3b5323]">
                  {tier.name}
                </h3>
                <p className="mt-2 text-2xl font-bold text-[#c4a35a]">
                  ${tier.price}/person
                </p>
                <ul className="mt-6 space-y-2 text-sm text-[#3b5323]/85">
                  <li>Cold Appetizers: pick 3</li>
                  <li>Salads: pick 3</li>
                  <li>Hot Appetizers: pick 3</li>
                  <li>Entrees: pick 3</li>
                  <li>Sides: pick 2</li>
                  <li>Desserts: pick 1</li>
                </ul>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => handleViewMenu(tier)}
                    className="rounded-full bg-[#c4a35a] px-6 py-3 font-semibold text-[#2d401a] transition hover:bg-[#d4b86a]"
                  >
                    View Full ${tier.price} Menu
                  </button>
                  <a
                    href="#"
                    className="text-center text-sm text-[#3b5323]/70 underline hover:text-[#3b5323]"
                  >
                    Download PDF
                  </a>
                </div>
                {expandedMobile?.id === tier.id && (
                  <div className="mt-8 border-t border-[#3b5323]/20 pt-8 lg:hidden">
                    <MenuDetail
                      tierName={tier.name}
                      price={tier.price}
                      categories={tier.categories}
                      onClose={() => setExpandedMobile(null)}
                      variant="inline"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-[#3b5323]/20 bg-white p-8">
            <h4 className="font-serif text-lg font-semibold text-[#3b5323]">
              Want to add more dishes?
            </h4>
            <p className="mt-2 text-sm text-[#3b5323]/80">
              Additional items available per person:
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {additionalPricing.perPerson.map((p) => (
                <span key={p.item} className="text-[#3b5323]/90">
                  {p.item}: ${p.price}
                </span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {additionalPricing.specials.map((p) => (
                <span key={p.item} className="text-[#3b5323]/90">
                  {p.item}: {typeof p.price === "number" ? `$${p.price}` : p.price}
                </span>
              ))}
            </div>
            <h4 className="mt-8 font-serif text-base font-semibold text-[#3b5323]">
              Additional Drinks (per person)
            </h4>
            <div className="mt-2 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {additionalPricing.drinks.map((p) => (
                <span key={p.item} className="text-[#3b5323]/90">
                  {p.item}: ${p.price}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {openTier && (
        <div
          className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-4 lg:flex"
          onClick={() => setOpenTier(null)}
        >
          <div
            className="w-full max-w-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <MenuDetail
              tierName={openTier.name}
              price={openTier.price}
              categories={openTier.categories}
              onClose={() => setOpenTier(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}
