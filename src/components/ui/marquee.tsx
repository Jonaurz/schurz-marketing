import { cn } from "@/lib/cn";

/**
 * Endlos laufendes Label-Band (reine CSS-Animation, pausiert bei Hover,
 * stoppt bei „Bewegung reduzieren"). Inhalt wird verdoppelt für nahtlose Schleife.
 */
export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  return (
    <div aria-hidden="true" role="presentation" className={cn("mask-fade-x overflow-hidden", className)}>
      <ul className="flex w-max animate-marquee items-center gap-x-12 will-change-transform [animation-play-state:running] hover:[animation-play-state:paused]">
        {[...items, ...items].map((item, i) => (
          <li
            key={i}
            className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.14em] text-ink/70"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
