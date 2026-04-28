"use client";

import { usePathname } from "next/navigation";

export function CanonicalUrl() {
  const pathname = usePathname();
  const baseUrl = "https://cafestpetersburg.com";
  const canonicalUrl = `${baseUrl}${pathname}`;

  return <link rel="canonical" href={canonicalUrl} />;
}