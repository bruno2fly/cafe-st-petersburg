"use client";

import { useRef, useEffect } from "react";
import { menuChapters } from "@/lib/menu-data";

type Props = {
  activeId: string | null;
  onCategoryClick?: (id: string) => void;
};

export function MenuMobileNav({ activeId, onCategoryClick }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const activeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (activeId && activeRef.current && scrollRef.current) {
      const container = scrollRef.current;
      const el = activeRef.current;
      const containerRect = container.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      const scrollLeft = el.offsetLeft - containerRect.width / 2 + elRect.width / 2;
      container.scrollTo({ left: Math.max(0, scrollLeft), behavior: "smooth" });
    }
  }, [activeId]);

  return (
    <div
      ref={scrollRef}
      className="menu-mobile-nav-scroll sticky top-16 z-40 -mx-4 overflow-x-auto overflow-y-hidden border-b border-[#2C1810]/10 bg-[#F9F6F0]/95 px-4 py-3 backdrop-blur-sm lg:hidden [scrollbar-width:none] [-webkit-overflow-scrolling:touch]"
    >
      <div className="flex min-w-max gap-2 pr-4">
        {menuChapters.map((chapter) => (
          <a
            key={chapter.id}
            ref={activeId === chapter.id ? activeRef : null}
            href={`#${chapter.id}`}
            onClick={() => onCategoryClick?.(chapter.id)}
            className={`shrink-0 rounded-full px-4 py-2.5 text-sm font-medium transition touch-manipulation ${
              activeId === chapter.id
                ? "bg-[#3B5323] text-white"
                : "bg-white/80 text-[#2C1810]/80"
            }`}
          >
            {chapter.title}
          </a>
        ))}
      </div>
    </div>
  );
}
