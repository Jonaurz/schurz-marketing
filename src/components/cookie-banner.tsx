"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

export const COOKIE_CONSENT_STORAGE_KEY = "sm-cookie-consent";
export const COOKIE_CONSENT_EVENT = "sm-cookie-consent-change";
export const COOKIE_SETTINGS_EVENT = "sm-cookie-settings-open";

export type CookieConsentPreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  at: string;
  version: 2;
};

type CookieSelection = Pick<CookieConsentPreferences, "analytics" | "marketing">;

const defaultSelection: CookieSelection = { analytics: false, marketing: false };

function createPreferences(selection: CookieSelection): CookieConsentPreferences {
  return {
    necessary: true,
    analytics: selection.analytics,
    marketing: false,
    at: new Date().toISOString(),
    version: 2,
  };
}

export function getCookieConsentPreferences(): CookieConsentPreferences | null {
  if (typeof window === "undefined") return null;

  try {
    const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const parsed = JSON.parse(raw) as Partial<CookieConsentPreferences> & {
      choice?: "accepted" | "declined";
    };

    if (parsed.version === 2 && typeof parsed.analytics === "boolean") {
      return {
        necessary: true,
        analytics: parsed.analytics,
        marketing: false,
        at: typeof parsed.at === "string" ? parsed.at : new Date().toISOString(),
        version: 2,
      };
    }

    if (parsed.choice === "accepted") {
      return createPreferences({ analytics: true, marketing: false });
    }

    if (parsed.choice === "declined") {
      return createPreferences(defaultSelection);
    }

    return null;
  } catch {
    return null;
  }
}

export function hasAnalyticsConsent() {
  return getCookieConsentPreferences()?.analytics === true;
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(COOKIE_SETTINGS_EVENT));
}

function deleteCookie(name: string) {
  const hostname = window.location.hostname;
  const domains = [hostname, `.${hostname}`];
  const expires = "expires=Thu, 01 Jan 1970 00:00:00 GMT";

  document.cookie = `${name}=; ${expires}; path=/; SameSite=Lax`;
  for (const domain of domains) {
    document.cookie = `${name}=; ${expires}; path=/; domain=${domain}; SameSite=Lax`;
  }
}

function deleteAnalyticsCookies() {
  if (typeof document === "undefined") return;

  const visibleCookieNames = document.cookie
    .split(";")
    .map((cookie) => cookie.trim().split("=")[0])
    .filter(Boolean);
  const analyticsCookieNames = new Set([
    "_ga",
    "_ga_T18GP6KQLY",
    "_gid",
    "_gat",
    ...visibleCookieNames.filter(
      (name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid" || name.startsWith("_gat"),
    ),
  ]);

  analyticsCookieNames.forEach(deleteCookie);
}

const noopSubscribe = () => () => {};

export function CookieBanner() {
  const hasDecision = useSyncExternalStore(
    noopSubscribe,
    () => getCookieConsentPreferences() !== null,
    () => true,
  );
  const [dismissed, setDismissed] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [selection, setSelection] = useState<CookieSelection>(defaultSelection);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  const visible = settingsOpen || (!hasDecision && !dismissed);

  useEffect(() => {
    function handleOpenSettings() {
      const existing = getCookieConsentPreferences();
      setSelection(existing ? { analytics: existing.analytics, marketing: false } : defaultSelection);
      setSettingsOpen(true);
      setDismissed(false);
    }

    window.addEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
    return () => window.removeEventListener(COOKIE_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  useEffect(() => {
    if (!visible) return;
    previousFocusRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const focusTimer = window.setTimeout(() => dialogRef.current?.focus(), 0);
    return () => window.clearTimeout(focusTimer);
  }, [visible, settingsOpen]);

  useEffect(() => {
    if (!visible) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && getCookieConsentPreferences()) {
        setSettingsOpen(false);
        setDismissed(true);
        return;
      }

      if (event.key !== "Tab") return;

      const focusableElements = Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((element) => element.tabIndex >= 0);

      const first = focusableElements[0];
      const last = focusableElements[focusableElements.length - 1];

      if (!first || !last) return;

      if (event.shiftKey && (document.activeElement === first || document.activeElement === dialogRef.current)) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [visible]);

  useEffect(() => {
    if (visible) return;
    previousFocusRef.current?.focus({ preventScroll: true });
    previousFocusRef.current = null;
  }, [visible]);

  function storePreferences(nextSelection: CookieSelection) {
    const hadAnalytics = hasAnalyticsConsent();
    const nextPreferences = createPreferences(nextSelection);

    try {
      window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(nextPreferences));
    } catch {
      /* Wenn localStorage blockiert ist, wird die Auswahl nur für diese Sitzung angewendet. */
    }

    if (!nextPreferences.analytics) {
      deleteAnalyticsCookies();
    }

    window.dispatchEvent(
      new CustomEvent(COOKIE_CONSENT_EVENT, { detail: { preferences: nextPreferences } }),
    );

    setSettingsOpen(false);
    setDismissed(true);

    if (hadAnalytics && !nextPreferences.analytics) {
      window.location.reload();
    }
  }

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-end bg-obsidian/70 p-4 backdrop-blur-sm sm:items-center sm:justify-center sm:p-6">
      <div
        ref={dialogRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-dialog-title"
        className="max-h-[calc(100vh-2rem)] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/[0.12] bg-obsidian/95 p-5 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.95)] outline-none backdrop-blur-xl sm:p-6"
      >
        <div className="flex flex-col gap-4 border-b border-white/10 pb-5 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-label text-gold">Privatsphäre</p>
            <h2 id="cookie-dialog-title" className="mt-2 text-2xl font-bold text-platinum">
              Cookie-Einstellungen
            </h2>
          </div>
          {hasDecision ? (
            <button
              type="button"
              onClick={() => {
                setSettingsOpen(false);
                setDismissed(true);
              }}
              className="self-start text-sm text-platinum/70 transition-colors hover:text-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              Schließen
            </button>
          ) : null}
        </div>

        <p className="mt-5 text-sm leading-relaxed text-platinum/75">
          Diese Website nutzt notwendige Speicherungen für den Betrieb. Statistik über Google
          Analytics wird nur geladen, wenn Sie aktiv zustimmen. Sie können Ihre Auswahl nach Zweck
          getrennt festlegen und später im Footer wieder ändern.
        </p>

        {settingsOpen ? (
          <div className="mt-6 space-y-3">
            <label className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <span>
                <span className="block text-sm font-semibold text-platinum">Notwendig</span>
                <span className="mt-1 block text-sm leading-relaxed text-platinum/65">
                  Erforderlich für Grundfunktionen, Cookie-Entscheidung und Admin-Session. Immer
                  aktiv.
                </span>
              </span>
              <input
                type="checkbox"
                checked
                disabled
                aria-label="Notwendige Cookies immer aktiv"
                className="mt-1 h-5 w-5 accent-gold"
              />
            </label>

            <label className="flex cursor-pointer items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors hover:border-gold/40">
              <span>
                <span className="block text-sm font-semibold text-platinum">Statistik</span>
                <span className="mt-1 block text-sm leading-relaxed text-platinum/65">
                  Google Analytics zur anonymisierten Auswertung von Seitenaufrufen und Nutzung.
                  Erst aktiv nach Zustimmung.
                </span>
              </span>
              <input
                type="checkbox"
                checked={selection.analytics}
                onChange={(event) =>
                  setSelection({ analytics: event.target.checked, marketing: false })
                }
                aria-label="Statistik Cookies erlauben"
                className="mt-1 h-5 w-5 accent-gold"
              />
            </label>

            <label className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.02] p-4 opacity-70">
              <span>
                <span className="block text-sm font-semibold text-platinum">Marketing</span>
                <span className="mt-1 block text-sm leading-relaxed text-platinum/65">
                  Derzeit nicht eingesetzt. Falls später Meta-Pixel oder ähnliche Dienste ergänzt
                  werden, wird diese Kategorie vorher separat aktivierbar gemacht.
                </span>
              </span>
              <input
                type="checkbox"
                checked={false}
                disabled
                aria-label="Marketing Cookies derzeit nicht eingesetzt"
                className="mt-1 h-5 w-5 accent-gold"
              />
            </label>
          </div>
        ) : null}

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-between">
          <Link
            href="/cookie-richtlinien"
            className="text-sm text-gold underline-offset-2 hover:text-gold-champagne hover:underline"
          >
            Cookie-Richtlinien ansehen
          </Link>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button onClick={() => storePreferences(defaultSelection)} variant="secondary" size="md">
              Alle ablehnen
            </Button>
            {settingsOpen ? (
              <Button onClick={() => storePreferences(selection)} variant="secondary" size="md">
                Auswahl speichern
              </Button>
            ) : (
              <Button
                onClick={() => {
                  const existing = getCookieConsentPreferences();
                  setSelection(
                    existing ? { analytics: existing.analytics, marketing: false } : defaultSelection,
                  );
                  setSettingsOpen(true);
                }}
                variant="secondary"
                size="md"
              >
                Auswahl anpassen
              </Button>
            )}
            <Button onClick={() => storePreferences({ analytics: true, marketing: false })} size="md">
              Alle akzeptieren
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
