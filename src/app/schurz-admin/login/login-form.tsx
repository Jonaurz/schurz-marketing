"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { loginAction } from "../actions";

export function LoginForm() {
  const [state, action, pending] = useActionState(loginAction, { error: "" });

  return (
    <form action={action} className="mx-auto mt-8 max-w-md rounded-2xl border border-white/10 bg-graphite/50 p-6">
      <label htmlFor="username" className="block text-sm font-medium text-platinum">
        Benutzer
      </label>
      <input
        id="username"
        name="username"
        type="text"
        autoComplete="username"
        required
        className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-platinum outline-none transition-colors placeholder:text-platinum/45 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
      />
      <label htmlFor="password" className="mt-5 block text-sm font-medium text-platinum">
        Admin-Passwort
      </label>
      <input
        id="password"
        name="password"
        type="password"
        autoComplete="current-password"
        required
        className="mt-2 w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-platinum outline-none transition-colors placeholder:text-platinum/45 focus:border-gold/50 focus:ring-1 focus:ring-gold/40"
      />
      <div aria-live="polite" className="mt-4 min-h-[1.25rem]">
        {state?.error ? (
          <p role="alert" className="text-sm text-gold-champagne">
            {state.error}
          </p>
        ) : null}
      </div>
      <Button type="submit" size="lg" className="mt-4 w-full" disabled={pending}>
        {pending ? "Prüfung läuft" : "Einloggen"}
      </Button>
    </form>
  );
}
