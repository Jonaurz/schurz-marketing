import { cn } from "@/lib/cn";

type Spacing = "default" | "tight" | "none";

const spacings: Record<Spacing, string> = {
  default: "py-20 sm:py-24 lg:py-28",
  tight: "py-12 sm:py-16",
  none: "",
};

/** Semantischer Abschnitt mit einheitlichem vertikalem Rhythmus. */
export function Section({
  id,
  spacing = "default",
  className,
  children,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledby,
}: {
  id?: string;
  spacing?: Spacing;
  className?: string;
  children: React.ReactNode;
  "aria-label"?: string;
  "aria-labelledby"?: string;
}) {
  return (
    <section
      id={id}
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledby}
      className={cn("relative", spacings[spacing], className)}
    >
      {children}
    </section>
  );
}
