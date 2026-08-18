import { company } from "@/content/site";

/**
 * Marca provisória em SVG, desenhada a partir do monograma da LS.
 * Para usar o arquivo oficial: salve em /public/logo.svg e troque o <svg> por
 * <img src="/logo.svg" alt={company.name} />.
 */
export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 72"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle
        cx="36"
        cy="36"
        r="29"
        stroke="currentColor"
        strokeWidth="5"
        pathLength={100}
        strokeDasharray="72 100"
        strokeDashoffset="-14"
        strokeLinecap="butt"
      />
      <path d="M23 17h9.5v28H49v9.5H23V17z" fill="currentColor" />
      <path
        d="M52.5 17 38 36.5h10L33.5 56l4.5-15.5H27L41 17h11.5z"
        fill="currentColor"
        opacity="0.92"
      />
    </svg>
  );
}

export function Logo({
  className = "",
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" />
      <span className="leading-none">
        <span className="block text-[15px] font-extrabold tracking-[0.18em] uppercase">
          {company.name}
        </span>
        {!compact && (
          <span className="mt-1 block text-[9px] font-semibold tracking-[0.24em] uppercase opacity-60">
            {company.tagline}
          </span>
        )}
      </span>
    </span>
  );
}
