import {
  company,
  defaultWhatsappMessage,
  navigation,
  services,
  whatsappLink,
} from "@/content/site";
import { InstagramIcon, WhatsAppIcon } from "./icons";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-[15px] leading-relaxed text-white/55">
              Construtora e engenharia atuando em {company.city} e {company.region}.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={whatsappLink(defaultWhatsappMessage)}
                target="_blank"
                rel="noopener"
                aria-label="WhatsApp"
                className="grid h-11 w-11 place-items-center border border-white/15 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                <WhatsAppIcon />
              </a>
              <a
                href={company.instagram}
                target="_blank"
                rel="noopener"
                aria-label="Instagram"
                className="grid h-11 w-11 place-items-center border border-white/15 transition-colors hover:border-orange-500 hover:text-orange-500"
              >
                <InstagramIcon />
              </a>
            </div>
          </div>

          <nav>
            <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/70 hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold tracking-widest text-white/40 uppercase">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-[15px]">
              <li>
                <a
                  href={whatsappLink(defaultWhatsappMessage)}
                  target="_blank"
                  rel="noopener"
                  className="font-bold hover:text-orange-500"
                >
                  {company.whatsapp.label}
                </a>
              </li>
              <li>
                <a
                  href={whatsappLink(
                    defaultWhatsappMessage,
                    company.whatsappSecondary.e164,
                  )}
                  target="_blank"
                  rel="noopener"
                  className="font-bold hover:text-orange-500"
                >
                  {company.whatsappSecondary.label}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${company.email}`}
                  className="text-white/70 hover:text-white"
                >
                  {company.email}
                </a>
              </li>
              <li className="text-white/70">
                {company.city} — {company.state}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {company.name}. Todos os direitos reservados.
          </p>
          <p className="flex flex-wrap gap-x-2">
            {services.slice(0, 3).map((service) => (
              <span key={service.slug}>{service.title} ·</span>
            ))}
            <span>{company.region}</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
