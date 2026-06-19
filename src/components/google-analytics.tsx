"use client";

import { useEffect } from "react";
import {
  COOKIE_CONSENT_EVENT,
  hasAnalyticsConsent,
  type CookieConsentPreferences,
} from "./cookie-banner";

const GOOGLE_TAG_ID = "G-T18GP6KQLY";
const GOOGLE_TAG_SCRIPT_ID = "schurz-google-tag";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
    __schurzGoogleTagLoaded?: boolean;
  }
}

function loadGoogleTag(force = false) {
  if (typeof window === "undefined") return;
  if (!force && !hasAnalyticsConsent()) return;
  if (window.__schurzGoogleTagLoaded) return;

  window.__schurzGoogleTagLoaded = true;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  if (!document.getElementById(GOOGLE_TAG_SCRIPT_ID)) {
    const script = document.createElement("script");
    script.id = GOOGLE_TAG_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_TAG_ID}`;
    document.head.appendChild(script);
  }

  window.gtag("js", new Date());
  window.gtag("config", GOOGLE_TAG_ID);
}

export function GoogleAnalytics() {
  useEffect(() => {
    loadGoogleTag();

    function handleConsentChange(event: Event) {
      const detail = (event as CustomEvent<{ preferences?: CookieConsentPreferences }>).detail;
      if (detail?.preferences?.analytics) {
        loadGoogleTag(true);
      }
    }

    window.addEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(COOKIE_CONSENT_EVENT, handleConsentChange);
  }, []);

  return null;
}