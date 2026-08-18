import { defaultWhatsappMessage, reasons, whatsappLink } from "@/content/site";
import { ArrowRight } from "./icons";

export function Reasons() {
  return (
    <section id="motivos" className="relative overflow-hidden bg-navy-900 py-24 text-white sm:py-32">
      <div className="blueprint absolute inset-0 text-white/30" />
      <div className="absolute top-1/3 -left-40 h-[420px] w-[420px] rounded-full bg-brand-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="flex items-start gap-4 text-4xl leading-[1.05] font-extrabold tracking-tight sm:text-5xl">
              <span className="text-[4.5rem] leading-[0.8] text-orange-500 sm:text-[5.5rem]">
                4
              </span>
              <span className="pt-1">
                motivos para tocar sua obra com a gente
              </span>
            </h2>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-white/65">
              Não é discurso de vendedor: é como a obra funciona na prática
              quando existe planejamento antes da primeira parede.
            </p>
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener"
              className="group mt-8 inline-flex items-center gap-3 font-bold text-orange-500"
            >
              Tirar uma dúvida agora
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <ul className="space-y-5">
            {reasons.map((reason, i) => {
              const flip = i % 2 === 1;
              return (
                <li
                  key={reason.number}
                  className={`flex items-stretch ${flip ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full bg-navy-800 ring-1 ring-white/15 lg:h-20 lg:w-20">
                    <span className="text-xl font-extrabold lg:text-2xl">
                      {reason.number}
                    </span>
                  </div>
                  <div
                    className={`-ml-6 flex-1 bg-linear-to-r from-orange-500 to-orange-400 py-6 pr-8 pl-10 text-navy-950 ${
                      flip
                        ? "chevron-right lg:chevron-left lg:-mr-8 lg:ml-0 lg:pr-14 lg:pl-16"
                        : "chevron-right lg:-ml-8 lg:pr-16 lg:pl-14"
                    }`}
                  >
                    <h3 className="text-xl font-extrabold">{reason.title}</h3>
                    <p className="mt-2 max-w-md text-[15px] leading-relaxed text-navy-950/75">
                      {reason.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
