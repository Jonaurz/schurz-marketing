import { cn } from "@/lib/cn";

/**
 * Abschnitts-Marker: kleines Versalien-Label. Sparsam einsetzen,
 * höchstens eines pro drei Abschnitte.
 */
export function SectionLabel({
  index,
  children,
  className,
}: {
  index?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-center gap-3 text-xs font-semibold uppercase tracking-label text-accent",
        className,
      )}
    >
      {index && <span className="text-ink/70">({index})</span>}
      {children}
    </div>
  );
}
