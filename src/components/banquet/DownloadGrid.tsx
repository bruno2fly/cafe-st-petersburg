"use client";

import { BANQUET_MENU_PDF } from "@/lib/banquet-pdf-urls";

const BANQUETS_EMAIL = "banquets@cafestpete.com";

const downloads = [
  {
    label: "Banquet Menu in English — $125",
    href: BANQUET_MENU_PDF.classical125,
    isPdf: true,
  },
  {
    label: "Banquet Menu in Russian — $125",
    href: `mailto:${BANQUETS_EMAIL}?subject=${encodeURIComponent("Request: Russian banquet menu ($125 per person)")}`,
    isPdf: false,
  },
  {
    label: "Banquet Menu in English — $160",
    href: BANQUET_MENU_PDF.premium160,
    isPdf: true,
  },
  {
    label: "Banquet Menu in Russian — $160",
    href: `mailto:${BANQUETS_EMAIL}?subject=${encodeURIComponent("Request: Russian banquet menu ($160 per person)")}`,
    isPdf: false,
  },
] as const;

export function DownloadGrid() {
  return (
    <section className="bg-[#f5f0e8] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-serif text-2xl font-bold text-[#3b5323] sm:text-3xl">
          Downloadable Menus
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {downloads.map((d) => (
            <a
              key={d.label}
              href={d.href}
              {...(d.isPdf
                ? { target: "_blank" as const, rel: "noopener noreferrer" as const, download: true }
                : {})}
              className="flex items-center justify-between rounded-xl border border-[#3b5323]/20 bg-white p-6 transition hover:border-[#c4a35a] hover:shadow-md"
            >
              <span className="font-medium text-[#3b5323]">{d.label}</span>
              <svg
                className="h-6 w-6 shrink-0 text-[#c4a35a]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </a>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-[#3b5323]/70">
          Меню также доступно на русском языке
        </p>
      </div>
    </section>
  );
}
