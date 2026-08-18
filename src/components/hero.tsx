import {
  company,
  defaultWhatsappMessage,
  stats,
  whatsappLink,
} from "@/content/site";
import { ArrowDown, WhatsAppIcon } from "./icons";
import { LogoMark } from "./logo";

const brandQuote =
  "Engenharia é a arte de solucionar problemas transformando ideias em realidade.";

/** Espaço reservado para foto: basta salvar o arquivo em /public/obras/. */
function PhotoTile({
  src,
  className = "",
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={`overflow-hidden bg-brand-600 bg-cover bg-center ${className}`}
      style={{ backgroundImage: `url(${src})` }}
    >
      <div className="absolute inset-0 bg-brand-600/55 mix-blend-multiply" />
      <div className="blueprint absolute inset-0 text-white/70" />
    </div>
  );
}

export function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden bg-navy-950 text-white">
      <div className="blueprint absolute inset-0 text-white/40" />
      <div className="absolute -top-40 -right-32 h-[560px] w-[560px] rounded-full bg-brand-500/25 blur-3xl" />
      <div className="absolute -bottom-56 -left-20 h-[420px] w-[420px] rounded-full bg-orange-500/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pt-40 lg:pb-28">
        <div>
          <h1 className="max-w-2xl text-[2.6rem] leading-[1.05] font-extrabold tracking-tight sm:text-6xl">
            A{" "}
            <span className="box-decoration-clone bg-orange-500 px-2 py-0.5">
              solução
            </span>{" "}
            para sua obra, do primeiro traço à entrega das chaves.
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
            Construtora e engenharia em {company.city}. Projetamos, executamos e
            gerenciamos sua obra com orçamento aberto, prazo definido e um único
            responsável técnico do começo ao fim.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={whatsappLink(defaultWhatsappMessage)}
              target="_blank"
              rel="noopener"
              className="chevron-right flex items-center justify-center gap-2.5 bg-orange-500 py-4 pr-11 pl-7 font-bold transition-colors hover:bg-orange-400"
            >
              <WhatsAppIcon />
              Pedir orçamento
            </a>
            <a
              href="#servicos"
              className="flex items-center justify-center gap-2.5 border border-white/25 py-4 pr-7 pl-7 font-semibold transition-colors hover:border-white/60"
            >
              Ver o que fazemos
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-px border-y border-white/15 bg-white/10">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-navy-950 py-5 pr-4">
                <dt className="text-3xl font-extrabold">{stat.value}</dt>
                <dd className="mt-1 text-xs leading-snug text-white/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Colagem inspirada nas artes da marca */}
        <div className="relative hidden aspect-4/5 w-full max-w-[520px] justify-self-end lg:block">
          <PhotoTile
            src="/obras/hero-1.jpg"
            className="absolute top-0 right-0 h-[36%] w-[68%]"
          />
          <PhotoTile
            src="/obras/hero-2.jpg"
            className="absolute bottom-0 left-[6%] h-[34%] w-[74%]"
          />
          <div className="chevron-right absolute top-[30%] left-0 z-20 flex h-[36%] w-[88%] items-center bg-linear-to-r from-orange-500 to-orange-300 pr-14 pl-8">
            <p className="text-[1.35rem] leading-tight font-bold text-navy-950">
              {brandQuote}
            </p>
          </div>
          <div className="absolute top-[3%] left-0 z-30 flex h-24 w-24 items-center justify-center bg-white text-navy-900">
            <LogoMark className="h-12 w-12" />
          </div>
        </div>

        <div className="chevron-right flex items-center bg-linear-to-r from-orange-500 to-orange-300 py-6 pr-12 pl-6 lg:hidden">
          <p className="text-lg leading-tight font-bold text-navy-950">
            {brandQuote}
          </p>
        </div>
      </div>
    </section>
  );
}
