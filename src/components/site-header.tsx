"use client";

import { useEffect, useState } from "react";
import { Logo } from "./logo";
import { CloseIcon, MenuIcon, WhatsAppIcon } from "./icons";
import {
  company,
  defaultWhatsappMessage,
  navigation,
  whatsappLink,
} from "@/content/site";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-ice-200 bg-white/95 text-navy-900 backdrop-blur"
          : "text-white"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-5 sm:px-8">
        <a href="#topo" className="shrink-0">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1 transition-opacity after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-orange-500 after:transition-transform hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink(defaultWhatsappMessage)}
            target="_blank"
            rel="noopener"
            className="chevron-right hidden items-center gap-2 bg-orange-500 py-3 pr-9 pl-5 text-[13px] font-bold text-white transition-colors hover:bg-orange-400 sm:flex"
          >
            <WhatsAppIcon className="h-[18px] w-[18px]" />
            {company.whatsapp.label}
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className="lg:hidden"
          >
            <MenuIcon className="h-7 w-7" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 bg-navy-950 text-white lg:hidden">
          <div className="flex h-20 items-center justify-between px-5 sm:px-8">
            <Logo />
            <button type="button" onClick={() => setOpen(false)} aria-label="Fechar menu">
              <CloseIcon className="h-7 w-7" />
            </button>
          </div>
          <nav className="flex flex-col px-5 sm:px-8">
            {navigation.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-white/10 py-5 text-2xl font-bold"
              >
                <span className="text-xs font-semibold text-orange-500">
                  0{i + 1}
                </span>
                {item.label}
              </a>
            ))}
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener"
              className="mt-8 flex items-center justify-center gap-2 bg-orange-500 py-4 font-bold"
            >
              <WhatsAppIcon />
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
