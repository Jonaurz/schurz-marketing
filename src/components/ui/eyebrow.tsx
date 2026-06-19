import { cn } from "@/lib/cn";

/** Kleines Versalien-Label. Sparsam einsetzen. */
export function Eyebrow({
  children,
  className,
  withLine = false,
}: {
  children: React.ReactNode;
  className?: string;
  withLine?: boolean;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-label text-accent",
        className,
      )}
    >
      {withLine && <span aria-hidden className="h-px w-8 bg-accent/50" />}
      {children}
    </span>
  );
}
