"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Zeilenstruktur für große Headlines mit gestaffeltem Eintritt.
 * Ohne JS (noscript-Regel in layout.tsx) und bei reduzierter Bewegung
 * bleiben die Zeilen sofort sichtbar.
 */
export function LineReveal({
  lines,
  className,
  lineClassName,
  delay = 0,
}: {
  lines: React.ReactNode[];
  className?: string;
  lineClassName?: string;
  delay?: number;
  immediate?: boolean;
}) {
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setRevealed(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span className={cn("block", className)}>
      {lines.map((line, i) => (
        <span key={i} className="contents">
          <span
            className={cn("reveal-js block", revealed && "is-revealed", lineClassName)}
            style={{ "--reveal-delay": `${delay + i * 0.12}s` } as React.CSSProperties}
          >
            {line}
          </span>
          {i < lines.length - 1 ? " " : null}
        </span>
      ))}
    </span>
  );
}
