"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

type Rule = { test: (href: string) => boolean; ga: string; meta: string };

// Order matters: first match wins.
const RULES: Rule[] = [
  { test: (h) => h.startsWith("tel:"), ga: "phone_click", meta: "Contact" },
  { test: (h) => /eventbrite\./i.test(h), ga: "tickets_click", meta: "InitiateCheckout" },
  { test: (h) => /opentable\.|resy\.|\/reservation/i.test(h), ga: "reserve_click", meta: "Lead" },
  { test: (h) => /toasttab\.com\/.*(order|online)|doordash\.|ubereats\.|grubhub\./i.test(h), ga: "order_click", meta: "Lead" },
  { test: (h) => /toasttab\./i.test(h), ga: "reserve_click", meta: "Lead" },
  { test: (h) => /google\.[a-z.]+\/maps|maps\.google|goo\.gl\/maps|maps\.app\.goo\.gl/i.test(h), ga: "directions_click", meta: "FindLocation" },
  { test: (h) => /\/menus\/.*\.pdf$|\/menu(\b|\/|$)/i.test(h), ga: "menu_view", meta: "ViewContent" },
  { test: (h) => h.startsWith("mailto:"), ga: "email_click", meta: "Contact" },
];

function send(ga: string, meta: string, params: Record<string, string>) {
  try {
    window.gtag?.("event", ga, params);
    window.fbq?.("track", meta, params);
    (window.dataLayer = window.dataLayer || []).push({ event: ga, ...params });
  } catch {
    /* never break navigation */
  }
}

/** Global click listener that turns key outbound links into GA4 + Meta conversion events. */
export function ClickTracking() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href");
      if (!href) return;
      const rule = RULES.find((r) => r.test(href));
      if (!rule) return;
      send(rule.ga, rule.meta, {
        link_url: href,
        link_text: (a?.textContent || "").trim().slice(0, 80),
        page_path: window.location.pathname,
      });
    };

    const onSubmit = (e: SubmitEvent) => {
      const form = e.target as HTMLFormElement | null;
      if (!form) return;
      const path = window.location.pathname;
      const kind = /banquet|catering|contact|tasting|event/i.test(path + " " + (form.id || "") + " " + (form.className || ""))
        ? "banquet_lead"
        : "form_submit";
      send(kind, "Lead", { page_path: path, form_id: form.id || "" });
    };

    document.addEventListener("click", onClick, { capture: true });
    document.addEventListener("submit", onSubmit, { capture: true });
    return () => {
      document.removeEventListener("click", onClick, { capture: true });
      document.removeEventListener("submit", onSubmit, { capture: true });
    };
  }, []);

  return null;
}
