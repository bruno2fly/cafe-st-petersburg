"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

interface MetaPixelEventProps {
  event: "ViewContent" | "Lead" | "Purchase";
  params?: Record<string, unknown>;
}

export function MetaPixelEvent({ event, params }: MetaPixelEventProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.fbq) {
      if (params) {
        window.fbq("track", event, params);
      } else {
        window.fbq("track", event);
      }
    }
  }, [event, params]);

  return null;
}
