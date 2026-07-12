"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/gtag";

export default function OutboundLinkTracker() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;

      let url: URL;
      try {
        url = new URL(link.href, window.location.href);
      } catch {
        return;
      }
      if (url.hostname === window.location.hostname) return;

      trackEvent("outbound_click", {
        link_url: url.href,
        link_domain: url.hostname,
        link_text: link.textContent?.trim().slice(0, 100) || "",
      });
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
