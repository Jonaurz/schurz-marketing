"use client";

import { useEffect, useRef, useState } from "react";

type FrameHandle =
  | { id: number; type: "animation" }
  | { id: number; type: "timeout" };

function getNow() {
  const performanceFallback = (
    window as Window & { performance?: { now?: () => number } }
  ).performance;

  return typeof performanceFallback?.now === "function"
    ? performanceFallback.now()
    : Date.now();
}

function scheduleFrame(callback: FrameRequestCallback): FrameHandle {
  const scheduleAnimation = (
    window as Window & { requestAnimationFrame?: (callback: FrameRequestCallback) => number }
  ).requestAnimationFrame;

  if (typeof scheduleAnimation === "function") {
    return { id: scheduleAnimation.call(window, callback), type: "animation" };
  }

  return {
    id: window.setTimeout(() => callback(getNow()), 16),
    type: "timeout",
  };
}

function cancelFrame(handle: FrameHandle) {
  if (handle.type === "timeout") {
    window.clearTimeout(handle.id);
    return;
  }

  const cancelAnimation = (
    window as Window & { cancelAnimationFrame?: (handle: number) => void }
  ).cancelAnimationFrame;

  cancelAnimation?.call(window, handle.id);
}

/** Zählt beim Sichtbarwerden hoch und fällt bei reduzierter Bewegung auf den Endwert zurück. */
export function StatCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const frameRef = useRef<FrameHandle | null>(null);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const counterElement = element;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function cancelActiveFrame() {
      if (frameRef.current !== null) {
        cancelFrame(frameRef.current);
        frameRef.current = null;
      }
    }

    if (reducedMotion || value === 0) {
      frameRef.current = scheduleFrame(() => setDisplay(value));

      return () => {
        cancelActiveFrame();
      };
    }

    let hasAnimated = false;
    let observer: IntersectionObserver | null = null;

    function animateValue() {
      if (hasAnimated) return;
      hasAnimated = true;

      const start = getNow();
      const durationMs = duration * 1000;

      function tick(now: number) {
        const progress = Math.min((now - start) / durationMs, 1);
        const eased = 1 - Math.pow(1 - progress, 3);

        setDisplay(Math.round(value * eased));

        if (progress < 1) {
          frameRef.current = scheduleFrame(tick);
        } else {
          setDisplay(value);
        }
      }

      setDisplay(0);
      frameRef.current = scheduleFrame(tick);
    }

    function isElementVisible() {
      const rect = counterElement.getBoundingClientRect();

      return rect.top <= window.innerHeight * 0.85 && rect.bottom >= 0;
    }

    function handleVisibility() {
      if (!isElementVisible()) return;

      animateValue();
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
    }

    const IntersectionObserverFallback = (
      window as Window & { IntersectionObserver?: typeof IntersectionObserver }
    ).IntersectionObserver;

    if (typeof IntersectionObserverFallback === "function") {
      observer = new IntersectionObserverFallback(
        ([entry]) => {
          if (entry?.isIntersecting) {
            animateValue();
            observer?.disconnect();
          }
        },
        { threshold: 0.25, rootMargin: "0px 0px -10% 0px" },
      );

      observer.observe(counterElement);
    } else {
      frameRef.current = scheduleFrame(() => {
        setDisplay(0);
        handleVisibility();
      });
      window.addEventListener("scroll", handleVisibility, { passive: true });
      window.addEventListener("resize", handleVisibility);
    }

    return () => {
      observer?.disconnect();
      window.removeEventListener("scroll", handleVisibility);
      window.removeEventListener("resize", handleVisibility);
      cancelActiveFrame();
    };
  }, [duration, value]);

  return (
    <span ref={ref} aria-label={`${prefix}${value}${suffix}`}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
