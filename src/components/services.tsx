import { services } from "@/content/site";
import { ArrowRight, serviceIcons } from "./icons";

export function Services() {
  return (
    <section id="servicos" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.6fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <h2 className="text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
              Uma construtora
              <br />
              para a obra inteira
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-navy-900/65">
              Você contrata um serviço ou todos eles. A diferença é que, com a
              LS, projeto e execução falam a mesma língua — e ninguém empurra
              problema para a etapa seguinte.
            </p>
            <a
              href="#contato"
              className="group mt-8 inline-flex items-center gap-3 font-bold text-brand-600"
            >
              Falar sobre o seu caso
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="grid gap-px bg-ice-200 sm:grid-cols-2">
            {services.map((service) => {
              const Icon = serviceIcons[service.slug];
              return (
                <article
                  key={service.slug}
                  className="group relative bg-white p-8 transition-colors hover:bg-ice-50"
                >
                  <span className="absolute top-0 left-0 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full" />
                  {Icon && (
                    <Icon className="h-8 w-8 text-brand-500 transition-colors group-hover:text-orange-500" />
                  )}
                  <h3 className="mt-6 text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy-900/65">
                    {service.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <li
                        key={item}
                        className="bg-ice-100 px-3 py-1 text-xs font-semibold text-navy-700"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
