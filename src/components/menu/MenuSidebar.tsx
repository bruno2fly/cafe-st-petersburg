"use client";

import Link from "next/link";
import { menuChapters } from "@/lib/menu-data";

type Props = {
  activeId: string | null;
  onCategoryClick?: (id: string) => void;
};

export function MenuSidebar({ activeId, onCategoryClick }: Props) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-24 pt-4">
        <div className="flex items-center gap-3">
          <div className="h-16 w-1 shrink-0 rounded-full bg-[#C4A35A]" />
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-bold uppercase tracking-widest text-[#2C1810]">
              The
            </span>
            <span className="font-serif text-2xl font-bold uppercase tracking-widest text-[#2C1810]">
              Menu
            </span>
          </div>
        </div>
        <nav className="mt-8 space-y-1">
          {menuChapters.map((chapter) => (
            <Link
              key={chapter.id}
              href={`#${chapter.id}`}
              onClick={() => onCategoryClick?.(chapter.id)}
              className={`block rounded-full px-4 py-2.5 text-sm font-medium transition ${
                activeId === chapter.id
                  ? "bg-[#3B5323] text-white"
                  : "text-[#2C1810]/80 hover:bg-[#2C1810]/5 hover:text-[#2C1810]"
              }`}
            >
              {chapter.title}
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
}
