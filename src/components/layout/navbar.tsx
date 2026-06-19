"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Logo } from "../logo";
import { Button } from "../ui/button";
import { Phone } from "../ui/icons";
import { navItems, site } from "@/lib/site";
import { cn } from "@/lib/cn";

function useIsActive() {
  const pathname = usePathname();
  return (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);
}

export function Navbar() {
  const isActive = useIsActive();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scrollsperre und Fokusführung, solange das mobile Menü offen ist.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    if (!open) {
      return () => {
        document.body.style.overflow = "";
      };
    }

    const focusableSelector =
      'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

    const menuElement = menuRef.current;
    const menuButton = menuButtonRef.current;

    const getFocusableElements = () => {
      const menuElements = Array.from(
        menuElement?.querySelectorAll<HTMLElement>(focusableSelector) ?? [],
      ).filter((element) => element.tabIndex >= 0);

      return [menuButton, ...menuElements].filter(
        (element): element is HTMLElement => Boolean(element),
      );
    };

    const focusTimer = window.setTimeout(() => {
      getFocusableElements()[1]?.focus({ preventScroll: true });
    }, 0);

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        menuButton?.focus({ preventScroll: true });
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = getFocusableElements();
      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (document.activeElement && menuElement?.contains(document.activeElement)) {
        menuButton?.focus({ preventScroll: true });
      }
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b bg-paper transition-[border-color,box-shadow] duration-300 ease-out",
          scrolled || open ? "border-ink/10" : "border-transparent",
        )}
      >
        <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-6 px-5 sm:px-8 lg:h-[4.5rem] lg:px-10">
          <Logo />

          <nav aria-label="Hauptnavigation" className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative py-1 text-sm transition-colors duration-300 ease-out",
                    active ? "font-medium text-ink" : "text-ink/70 hover:text-ink",
                  )}
                >
                  {item.label}
                  {active && (
                    <span aria-hidden className="absolute inset-x-0 -bottom-0.5 h-px bg-ink" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/kontakt" size="md">
              Erstgespräch anfragen
            </Button>
          </div>

          {/* Hamburger: zwei Linien drehen sich zum X. */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menü schließen" : "Menü öffnen"}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center border border-ink/15 text-ink transition-colors duration-300 ease-out hover:border-ink lg:hidden"
          >
            <span className="relative block h-3 w-5" aria-hidden>
              <span
                className={cn(
                  "absolute left-0 top-0 h-px w-5 bg-current transition-transform duration-300 ease-out",
                  open && "top-1/2 -translate-y-1/2 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute bottom-0 left-0 h-px w-5 bg-current transition-transform duration-300 ease-out",
                  open && "bottom-1/2 translate-y-1/2 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* Mobiles Menü: vollflächig, hell, klare Liste. */}
      <div
        ref={menuRef}
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation"
        aria-hidden={!open}
        className={cn(
          "fixed inset-0 z-40 flex flex-col overflow-y-auto bg-paper pt-16 transition-opacity duration-300 ease-out lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      >
        <div className="mx-auto flex min-h-full w-full max-w-container flex-col px-5 pb-10 pt-6 sm:px-8">
          <nav aria-label="Mobile Navigation" className="flex flex-col">
            {navItems.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={active ? "page" : undefined}
                  tabIndex={open ? 0 : -1}
                  style={{ transitionDelay: open ? `${0.05 + i * 0.04}s` : "0s" }}
                  className={cn(
                    "border-b border-ink/10 py-5 text-3xl font-bold tracking-tight transition-all duration-500 ease-out",
                    open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
                    active ? "text-accent" : "text-ink",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div
            style={{ transitionDelay: open ? "0.28s" : "0s" }}
            className={cn(
              "mt-auto flex flex-col gap-4 pt-12 transition-all duration-500 ease-out",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0",
            )}
          >
            <Button href="/kontakt" size="lg" withArrow className="w-full" tabIndex={open ? 0 : -1}>
              Erstgespräch anfragen
            </Button>
            {site.contact.phoneHref ? (
              <a
                href={`tel:${site.contact.phoneHref}`}
                tabIndex={open ? 0 : -1}
                className="inline-flex items-center justify-center gap-2 text-sm text-ink/70 transition-colors hover:text-ink"
              >
                <Phone className="h-4 w-4" /> {site.contact.phone}
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}
