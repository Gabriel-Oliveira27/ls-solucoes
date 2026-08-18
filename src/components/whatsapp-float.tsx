"use client";

import { useEffect, useState } from "react";
import { defaultWhatsappMessage, whatsappLink } from "@/content/site";
import { WhatsAppIcon } from "./icons";

export function WhatsAppFloat() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={whatsappLink(defaultWhatsappMessage)}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className={`fixed right-5 bottom-5 z-40 grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-white shadow-lg shadow-navy-950/25 transition-all duration-300 hover:bg-orange-400 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  );
}
