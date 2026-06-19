"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

/**
 * Scroll-Eintritt per IntersectionObserver: schwerer Fade-up mit Unschärfe
 * (Stile in globals.css unter .reveal-js). Ohne JS und bei reduzierter
 * Bewegung bleiben Inhalte sofort sichtbar.
 */
export function Reveal({
  children,
  delay = 0,
  immediate = false,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  immediate?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(immediate);

  useEffect(() => {
    if (immediate) {
      // Eintritt direkt nach Mount (z. B. Hero oberhalb der Falz).
      const frame = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(frame);
    }

    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver !== "function") {
      const frame = requestAnimationFrame(() => setRevealed(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setRevealed(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [immediate]);

  return (
    <div
      ref={ref}
      className={cn("reveal-js", revealed && "is-revealed", className)}
      style={delay ? ({ "--reveal-delay": `${delay}s` } as React.CSSProperties) : undefined}
    >
      {children}
    </div>
  );
}
