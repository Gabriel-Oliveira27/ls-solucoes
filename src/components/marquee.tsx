const words = [
  "Construção civil",
  "Reformas",
  "Projetos",
  "Gerenciamento de obra",
  "Regularização",
  "Manutenção predial",
];

export function Marquee() {
  return (
    <div className="relative flex overflow-hidden border-y border-navy-900/10 bg-orange-500 py-3.5 text-navy-950">
      <div className="animate-marquee flex shrink-0 gap-10 pr-10">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 text-sm font-bold tracking-[0.2em] whitespace-nowrap uppercase"
          >
            {word}
            <span className="h-1.5 w-1.5 rotate-45 bg-navy-950" />
          </span>
        ))}
      </div>
      <div className="animate-marquee flex shrink-0 gap-10 pr-10" aria-hidden="true">
        {[...words, ...words].map((word, i) => (
          <span
            key={i}
            className="flex shrink-0 items-center gap-10 text-sm font-bold tracking-[0.2em] whitespace-nowrap uppercase"
          >
            {word}
            <span className="h-1.5 w-1.5 rotate-45 bg-navy-950" />
          </span>
        ))}
      </div>
    </div>
  );
}
