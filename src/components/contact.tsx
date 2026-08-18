"use client";

import { useState, type FormEvent } from "react";
import {
  company,
  defaultWhatsappMessage,
  services,
  whatsappLink,
} from "@/content/site";
import { Check, MailIcon, PinIcon, WhatsAppIcon } from "./icons";

type Status = "idle" | "loading" | "success" | "error";

const fieldClass =
  "w-full border border-ice-200 bg-ice-50 px-4 py-3 text-[15px] text-navy-900 outline-none transition-colors placeholder:text-navy-900/35 focus:border-brand-500 focus:bg-white";

const labelClass =
  "mb-2 block text-xs font-bold tracking-wider uppercase text-navy-900/55";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError(null);

    const data = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, source: "landing" }),
      });
      const payload = await response.json();

      if (!response.ok) {
        throw new Error(payload?.message ?? "Não foi possível enviar agora.");
      }
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    }
  }

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-navy-950 py-24 text-white sm:py-32"
    >
      <div className="blueprint absolute inset-0 text-white/30" />
      <div className="absolute -right-32 -bottom-40 h-[480px] w-[480px] rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
            Preparado para ter um projeto{" "}
            <span className="text-orange-500">sensacional?</span>
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-white/65">
            Conte o que você quer construir. Respondemos no mesmo dia útil com
            os próximos passos e o que precisamos para montar seu orçamento.
          </p>

          <div className="mt-10 space-y-px bg-white/10">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-4 bg-navy-950 px-5 py-5 transition-colors hover:bg-navy-900"
            >
              <WhatsAppIcon className="h-6 w-6 text-orange-500" />
              <span>
                <span className="block text-xs tracking-wider text-white/50 uppercase">
                  WhatsApp
                </span>
                <span className="text-lg font-bold">
                  {company.whatsapp.label}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-4 bg-navy-950 px-5 py-5 transition-colors hover:bg-navy-900"
            >
              <MailIcon className="h-6 w-6 text-orange-500" />
              <span>
                <span className="block text-xs tracking-wider text-white/50 uppercase">
                  E-mail
                </span>
                <span className="text-lg font-bold">{company.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-4 bg-navy-950 px-5 py-5">
              <PinIcon className="h-6 w-6 text-orange-500" />
              <span>
                <span className="block text-xs tracking-wider text-white/50 uppercase">
                  Atendimento
                </span>
                <span className="text-lg font-bold">
                  {company.city} e {company.region}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white p-7 text-navy-900 sm:p-10">
          {status === "success" ? (
            <div className="flex h-full min-h-80 flex-col items-start justify-center">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-orange-500 text-white">
                <Check className="h-7 w-7" />
              </span>
              <h3 className="mt-6 text-2xl font-extrabold">Pedido recebido</h3>
              <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-navy-900/65">
                Já caiu aqui. Retornamos pelo WhatsApp em até um dia útil — se
                for urgente, chama a gente direto.
              </p>
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener"
                className="chevron-right mt-7 inline-flex items-center gap-2.5 bg-orange-500 py-3.5 pr-10 pl-6 font-bold text-white"
              >
                <WhatsAppIcon />
                Chamar no WhatsApp
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="name">
                    Nome
                  </label>
                  <input
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Como podemos te chamar"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="phone">
                    WhatsApp
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="(88) 90000-0000"
                    className={fieldClass}
                  />
                </div>
                <div>
                  <label className={labelClass} htmlFor="city">
                    Cidade
                  </label>
                  <input
                    id="city"
                    name="city"
                    placeholder="Onde fica a obra"
                    className={fieldClass}
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="service">
                    O que você precisa
                  </label>
                  <select
                    id="service"
                    name="service"
                    className={fieldClass}
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Selecione um serviço
                    </option>
                    {services.map((service) => (
                      <option key={service.slug} value={service.slug}>
                        {service.title}
                      </option>
                    ))}
                    <option value="outro">Outro / ainda não sei</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass} htmlFor="message">
                    Detalhes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Metragem, prazo desejado, se já tem projeto..."
                    className={`${fieldClass} resize-none`}
                  />
                </div>
              </div>

              {/* anti-spam: invisivel para pessoas, atrai robo */}
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                className="absolute h-0 w-0 opacity-0"
              />

              {error && (
                <p className="mt-5 border-l-2 border-orange-500 bg-orange-500/10 px-4 py-3 text-sm">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="chevron-right mt-7 w-full bg-orange-500 py-4 pr-8 font-bold text-white transition-colors hover:bg-orange-400 disabled:opacity-60 sm:w-auto sm:pr-12 sm:pl-8"
              >
                {status === "loading" ? "Enviando..." : "Solicitar orçamento"}
              </button>
              <p className="mt-4 text-xs text-navy-900/45">
                Seus dados são usados só para responder este contato.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
