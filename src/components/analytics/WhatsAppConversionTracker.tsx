"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
  }
}

export default function WhatsAppConversionTracker() {
  useEffect(() => {
    const handleWhatsAppClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      if (!target) {
        return;
      }

      const whatsappLink = target.closest(
        'a[data-track="goa-whatsapp"]'
      ) as HTMLAnchorElement | null;

      if (!whatsappLink) {
        return;
      }

      window.dataLayer = window.dataLayer || [];

      window.dataLayer.push({
        event: "goa_whatsapp_enquiry",
        value: 1.0,
        currency: "INR",
      });
    };

    document.addEventListener("click", handleWhatsAppClick);

    return () => {
      document.removeEventListener("click", handleWhatsAppClick);
    };
  }, []);

  return null;
}