import { projects } from "@/content/site";
import { ArrowRight } from "./icons";

export function Projects() {
  return (
    <section id="obras" className="bg-ice-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="max-w-lg text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            Obras que já estão de pé
          </h2>
          <a
            href="#contato"
            className="group inline-flex items-center gap-3 font-bold text-brand-600"
          >
            Quero a minha na lista
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="group">
              <div
                className="relative aspect-4/3 overflow-hidden bg-navy-800 bg-cover bg-center"
                style={{ backgroundImage: `url(/obras/${project.slug}.jpg)` }}
              >
                <div className="absolute inset-0 bg-brand-600/45 mix-blend-multiply transition-opacity group-hover:opacity-0" />
                <div className="blueprint absolute inset-0 text-white/40" />
                <span className="absolute top-0 left-0 bg-orange-500 px-4 py-2 text-xs font-bold tracking-widest text-navy-950 uppercase">
                  {project.category}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{project.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-navy-900/65">
                {project.summary}
              </p>
              <p className="mt-4 border-t border-ice-200 pt-3 text-xs font-semibold tracking-wider text-navy-900/45 uppercase">
                {project.location} · {project.year}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
