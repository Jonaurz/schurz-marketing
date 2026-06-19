import { cn } from "@/lib/cn";

type Variant = "default" | "accent" | "solid" | "gold";

const variants: Record<Variant, string> = {
  default: "border-ink/20 text-ink/70",
  accent: "border-accent/40 text-accent",
  gold: "border-accent/40 text-accent",
  solid: "border-transparent bg-ink text-paper",
};

/** Kleines Label/Chip für Aufzählungen (z. B. Kanäle). */
export function Tag({
  children,
  variant = "default",
  dot = false,
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  dot?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 border px-3 py-1 text-xs font-medium uppercase tracking-[0.1em]",
        variants[variant],
        className,
      )}
    >
      {dot && <span aria-hidden className="h-1.5 w-1.5 bg-accent" />}
      {children}
    </span>
  );
}
