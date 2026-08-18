import { steps } from "@/content/site";

export function Process() {
  return (
    <section id="processo" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-6 border-b border-ice-200 pb-10 md:flex-row md:items-end">
          <h2 className="max-w-xl text-4xl leading-[1.1] font-extrabold tracking-tight sm:text-5xl">
            Como sua obra sai do papel
          </h2>
          <p className="max-w-sm text-[15px] leading-relaxed text-navy-900/60">
            Quatro etapas, sem etapa surpresa. Você sabe o que acontece hoje e o
            que acontece na semana que vem.
          </p>
        </div>

        <ol className="grid gap-px bg-ice-200 md:grid-cols-4">
          {steps.map((step, i) => (
            <li key={step.title} className="group relative bg-white pt-8 pb-10 md:px-7">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-extrabold text-ice-200 transition-colors group-hover:text-orange-500">
                  0{i + 1}
                </span>
                <span className="h-px flex-1 bg-ice-200" />
              </div>
              <h3 className="mt-6 text-lg font-bold">{step.title}</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-navy-900/65">
                {step.text}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
