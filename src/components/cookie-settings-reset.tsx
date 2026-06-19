"use client";

import { openCookieSettings } from "./cookie-banner";
import { Button } from "./ui/button";

export function CookieSettingsReset() {
  return (
    <Button type="button" variant="secondary" onClick={openCookieSettings}>
      Cookie-Einstellungen öffnen
    </Button>
  );
}