import { SectionLabel } from "./section-label";
import { Reveal } from "./reveal";
import { cn } from "@/lib/cn";

const titleSize = {
  default: "text-3xl sm:text-4xl md:text-[2.75rem]",
  compact: "text-2xl sm:text-3xl",
};

/**
 * Abschnittskopf: Headline, optional Einleitung darunter (gestapelt,
 * max. 65ch). Ein Eyebrow-Label nur setzen, wenn es wirklich nötig ist,
 * höchstens eines pro drei Abschnitte.
 */
export function SectionHeading({
  index,
  label,
  eyebrow,
  title,
  intro,
  align = "left",
  size = "default",
  className,
}: {
  index?: string;
  label?: React.ReactNode;
  eyebrow?: React.ReactNode;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  size?: "default" | "compact";
  rule?: boolean;
  className?: string;
}) {
  const marker = label ?? eyebrow;
  const centered = align === "center";

  return (
    <div className={cn(centered && "text-center", className)}>
      {marker && (
        <Reveal>
          <SectionLabel index={index} className={centered ? "justify-center" : undefined}>
            {marker}
          </SectionLabel>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance",
            marker ? "mt-4" : undefined,
            titleSize[size],
            centered && "mx-auto max-w-3xl",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 max-w-[65ch] text-pretty text-base leading-relaxed text-ink/70 sm:text-lg",
              centered && "mx-auto",
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
