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
  { test: (h) => /toasttab\.|toast\.app/i.test(h), ga: "reserve_click", meta: "Lead" },
  { test: (h) => /google\.[a-z.]+\/maps|maps\.google|goo\.gl\/maps|maps\.app\.goo\.gl/i.test(h), ga: "directions_click", meta: "FindLocation" },
  { test: (h) => /\/menus\/.*\.pdf$|\/menu(\b|\/|$)/i.test(h), ga: "menu_view", meta: "ViewContent" },
  { test: (h) => h.startsWith("mailto:"), ga: "email_click", meta: "Contact" },
];

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content", "fbclid", "gclid"];
const UTM_STORE = "csp_utm";

/** Remember UTM params from the landing URL for this browser session. */
function captureUtm() {
  try {
    const qs = new URLSearchParams(window.location.search);
    const found: Record<string, string> = {};
    UTM_KEYS.forEach((k) => {
      const v = qs.get(k);
      if (v) found[k] = v;
    });
    if (Object.keys(found).length) sessionStorage.setItem(UTM_STORE, JSON.stringify(found));
  } catch {
    /* storage may be blocked */
  }
}

/** Add stored UTM params to Eventbrite / OpenTable / Toast links (without overwriting existing ones). */
function withUtm(a: HTMLAnchorElement) {
  try {
    if (!/eventbrite\.|opentable\.|toasttab\.|toast\.app/i.test(a.href)) return;
    const stored = JSON.parse(sessionStorage.getItem(UTM_STORE) || "{}") as Record<string, string>;
    const current = new URLSearchParams(window.location.search);
    UTM_KEYS.forEach((k) => {
      const v = current.get(k);
      if (v) stored[k] = v;
    });
    if (!Object.keys(stored).length) return;
    const url = new URL(a.href);
    Object.entries(stored).forEach(([k, v]) => {
      if (!url.searchParams.has(k)) url.searchParams.set(k, v);
    });
    a.href = url.toString();
  } catch {
    /* never break navigation */
  }
}

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
    captureUtm();
    const onClick = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.("a");
      const href = a?.getAttribute("href");
      if (!href) return;
      withUtm(a as HTMLAnchorElement);
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
