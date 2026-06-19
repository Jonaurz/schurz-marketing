"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Check } from "../ui/icons";
import { submitContactAction, type ContactFormState } from "@/app/kontakt/actions";

const services = [
  { value: "webseite", label: "Webseite" },
  { value: "social-media", label: "Social Media Betreuung" },
] as const;

const inputClass =
  "w-full border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink";
const labelClass = "mb-2 block text-sm font-medium text-ink";
const initialState: ContactFormState = { status: "idle", message: "" };

export function ContactForm({ csrfToken }: { csrfToken: string }) {
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState);
  const fieldErrors = state.fieldErrors ?? {};

  useEffect(() => {
    if (state.status !== "error") return;

    const firstInvalid = document.querySelector<HTMLElement>(
      '.contact-form [aria-invalid="true"]',
    );
    firstInvalid?.focus({ preventScroll: false });
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex flex-col items-center border border-ink/15 bg-white p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center bg-ink text-paper">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-ink">Bitte E-Mail bestätigen</h3>
        <p className="mt-3 max-w-sm text-pretty leading-relaxed text-ink/70">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby={state.status === "error" ? "contact-form-error" : undefined}
      className="contact-form mx-auto max-w-4xl border border-ink/10 bg-white p-6 sm:p-8"
    >
      <input type="hidden" name="_csrf" value={csrfToken} />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-accent">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            aria-required="true"
            aria-invalid={fieldErrors.name ? "true" : undefined}
            aria-describedby={fieldErrors.name ? "name-error" : undefined}
            autoComplete="name"
            className={inputClass}
            placeholder="Ihr Name"
          />
          {fieldErrors.name ? (
            <p id="name-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.name}
            </p>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            E-Mail-Adresse <span className="text-accent">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            aria-required="true"
            aria-invalid={fieldErrors.email ? "true" : undefined}
            aria-describedby={fieldErrors.email ? "email-error" : undefined}
            autoComplete="email"
            className={inputClass}
            placeholder="name@firma.de"
          />
          {fieldErrors.email ? (
            <p id="email-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.email}
            </p>
          ) : null}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="phone" className={labelClass}>
            Telefonnummer <span className="text-accent">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            aria-required="true"
            aria-invalid={fieldErrors.phone ? "true" : undefined}
            aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
            autoComplete="tel"
            className={inputClass}
            placeholder="+49 ..."
          />
          {fieldErrors.phone ? (
            <p id="phone-error" className="mt-2 text-sm text-red-700">
              {fieldErrors.phone}
            </p>
          ) : null}
        </div>
      </div>

      <fieldset
        className="mt-5"
        aria-invalid={fieldErrors.services ? "true" : undefined}
        aria-describedby={fieldErrors.services ? "services-help services-error" : "services-help"}
      >
        <legend className={labelClass}>
          Welche Dienstleistung wird gebraucht? <span className="text-accent">*</span>
        </legend>
        <p id="services-help" className="mb-3 text-sm leading-relaxed text-ink/75">
          Eine oder beide Leistungen auswählen. Die passenden Zusatzfelder erscheinen automatisch.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {services.map((service) => (
            <label
              key={service.value}
              htmlFor={`service-${service.value}`}
              className="service-choice flex min-h-14 cursor-pointer items-center gap-3 border border-ink/20 bg-white px-4 py-3 text-sm font-medium text-ink/70 transition-colors hover:border-ink"
            >
              <input
                id={`service-${service.value}`}
                name="services"
                type="checkbox"
                value={service.value}
                className="h-4 w-4 shrink-0 accent-accent"
              />
              {service.label}
            </label>
          ))}
        </div>
        {fieldErrors.services ? (
          <p id="services-error" className="mt-2 text-sm text-red-700">
            {fieldErrors.services}
          </p>
        ) : null}
      </fieldset>

      <div className="conditional-fields">
        <div className="service-field service-field-web mt-5">
          <label htmlFor="currentWebsite" className={labelClass}>
            Aktuelle Website, falls vorhanden
          </label>
          <input
            id="currentWebsite"
            name="currentWebsite"
            type="url"
            autoComplete="url"
            className={inputClass}
            placeholder="https://www.ihre-domain.de"
          />
        </div>

        <div className="service-field service-field-social mt-5">
          <label htmlFor="socialChannels" className={labelClass}>
            Social-Media-Kanäle, falls vorhanden
          </label>
          <textarea
            id="socialChannels"
            name="socialChannels"
            rows={4}
            className={`${inputClass} resize-y`}
            placeholder="Instagram, Facebook, LinkedIn, TikTok oder andere Kanäle"
          />
        </div>
      </div>

      <div className="mt-5 flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          aria-required="true"
          aria-invalid={fieldErrors.consent ? "true" : undefined}
          aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
          className="mt-1 h-4 w-4 shrink-0 accent-accent"
        />
        <label htmlFor="consent" className="text-sm leading-relaxed text-ink/70">
          Die Angaben dürfen zur Bearbeitung der Anfrage verwendet werden. Hinweise dazu
          stehen unter{" "}
          <Link href="/datenschutz" className="text-accent underline underline-offset-4 hover:text-ink">
            Datenschutz
          </Link>
          . <span className="text-accent">*</span>
        </label>
      </div>
      {fieldErrors.consent ? (
        <p id="consent-error" className="mt-2 text-sm text-red-700">
          {fieldErrors.consent}
        </p>
      ) : null}

      <div aria-live="polite" className="mt-4 min-h-[1.25rem]">
        {state.status === "error" ? (
          <p id="contact-form-error" role="alert" className="text-sm text-red-700">
            {state.message}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <Button type="submit" size="lg" withArrow className="w-full sm:w-auto" disabled={isPending}>
          {isPending ? "Wird vorbereitet..." : "Anfrage bestätigen lassen"}
        </Button>
      </div>
    </form>
  );
}
