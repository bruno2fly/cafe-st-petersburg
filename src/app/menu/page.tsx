"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { siteData } from "@/lib/site-data";
import { menuChapters } from "@/lib/menu-data";
import { MenuSidebar } from "@/components/menu/MenuSidebar";
import { MenuMobileNav } from "@/components/menu/MenuMobileNav";
import { CategoryChapter } from "@/components/menu/CategoryChapter";

export default function MenuPage() {
  const [activeId, setActiveId] = useState<string | null>(menuChapters[0]?.id ?? null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  useEffect(() => {
    const isMobile = () => window.innerWidth < 1024;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target;
            for (const [id, refEl] of sectionRefs.current) {
              if (refEl === el) {
                setActiveId(id);
                break;
              }
            }
          }
        }
      },
      {
        rootMargin: isMobile()
          ? "-22% 0px -55% 0px"
          : "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    const refs = sectionRefs.current;
    refs.forEach((el) => observer.observe(el));
    return () => refs.forEach((el) => observer.unobserve(el));
  }, []);

  const setRef = (id: string) => (el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(id, el);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <MenuMobileNav
        activeId={activeId}
        onCategoryClick={(id) => setActiveId(id)}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 lg:px-8">
        <MenuSidebar
          activeId={activeId}
          onCategoryClick={(id) => setActiveId(id)}
        />

        <div className="py-8 lg:py-12">
          {menuChapters.map((chapter, index) => (
            <div key={chapter.id} ref={setRef(chapter.id)}>
              <CategoryChapter chapter={chapter} index={index} />
            </div>
          ))}
        </div>
      </div>

      {/* Order CTA Banner */}
      <section className="bg-[#3B5323] py-12 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl font-bold text-white sm:text-3xl">
            Ready to Order?
          </h2>
          <p className="mt-2 text-white/90">
            Call us or visit in person to place your order.
          </p>
          <a
            href={`tel:${siteData.phone.replace(/\D/g, "")}`}
            className="mt-6 inline-flex rounded-md bg-white px-8 py-4 font-semibold text-[#3B5323] transition hover:bg-[#F9F6F0]"
          >
            Call to Order
          </a>
        </div>
      </section>
    </div>
  );
}
