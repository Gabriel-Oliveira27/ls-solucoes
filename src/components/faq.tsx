"use client";

import { useState } from "react";
import { faq } from "@/content/site";
import { Plus } from "./icons";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
        <h2 className="text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl lg:sticky lg:top-28 lg:self-start">
          Perguntas que
          <br />
          sempre aparecem
        </h2>

        <div className="border-t border-ice-200">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q} className="border-b border-ice-200">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                >
                  <span className="text-lg font-bold">{item.q}</span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-orange-500 transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] pb-6" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="overflow-hidden text-[15px] leading-relaxed text-navy-900/65">
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
