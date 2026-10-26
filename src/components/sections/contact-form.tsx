"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Check } from "../ui/icons";
import { submitContactAction, type ContactFormState } from "@/app/kontakt/actions";

const inputClass =
  "w-full border border-ink/20 bg-white px-4 py-3 text-ink placeholder:text-ink/40 outline-none transition-colors focus:border-ink focus:ring-1 focus:ring-ink";
const labelClass = "mb-2 block text-sm font-medium text-ink";
const blockClass = "mt-8 border-t border-ink/10 pt-6";
const initialState: ContactFormState = { status: "idle", message: "" };

// Beantwortetes tritt zurueck, damit die naechste Frage vorn steht. Es bleibt
// stehen und kommt bei Mausberuehrung oder Tastaturfokus sofort zurueck.
const stufe = (erledigt: boolean) =>
  `transition-opacity duration-300 ${
    erledigt ? "opacity-60 hover:opacity-100 focus-within:opacity-100" : ""
  }`;

function Pflicht() {
  return <span className="text-accent">*</span>;
}

function Fehler({ id, text }: { id: string; text?: string }) {
  if (!text) return null;

  return (
    <p id={id} className="mt-2 text-sm text-red-700">
      {text}
    </p>
  );
}

function JaNein({
  name,
  legende,
  wert,
  onChange,
}: {
  name: string;
  legende: string;
  wert: string;
  onChange: (wert: string) => void;
}) {
  return (
    <fieldset>
      <legend className={labelClass}>
        {legende} <Pflicht />
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {[
          { value: "ja", label: "Ja" },
          { value: "nein", label: "Nein" },
        ].map((option) => (
          <label
            key={option.value}
            htmlFor={`${name}-${option.value}`}
            className="service-choice flex min-h-14 cursor-pointer items-center gap-3 border border-ink/20 bg-white px-4 py-3 text-sm font-medium text-ink/70 transition-colors hover:border-ink"
          >
            <input
              id={`${name}-${option.value}`}
              name={name}
              type="radio"
              value={option.value}
              checked={wert === option.value}
              onChange={() => onChange(option.value)}
              className="h-4 w-4 shrink-0 accent-accent"
            />
            {option.label}
          </label>
        ))}
      </div>
    </fieldset>
  );
}

export function ContactForm({ csrfToken }: { csrfToken: string }) {
  const [state, formAction, isPending] = useActionState(submitContactAction, initialState);
  const fieldErrors = state.fieldErrors ?? {};

  const [webseite, setWebseite] = useState(false);
  const [social, setSocial] = useState(false);
  const [hatWebsite, setHatWebsite] = useState("");
  const [websiteAdresse, setWebsiteAdresse] = useState("");
  const [websiteWunsch, setWebsiteWunsch] = useState("");
  const [socialZiel, setSocialZiel] = useState("");
  const [hatKanaele, setHatKanaele] = useState("");
  const [socialKanaele, setSocialKanaele] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [telefon, setTelefon] = useState("");

  const gefuellt = (wert: string) => wert.trim() !== "";

  const webseiteFertig =
    gefuellt(hatWebsite) &&
    (hatWebsite === "nein" || gefuellt(websiteAdresse)) &&
    gefuellt(websiteWunsch);
  const socialFertig =
    gefuellt(socialZiel) && gefuellt(hatKanaele) && (hatKanaele === "nein" || gefuellt(socialKanaele));

  const leistungGewaehlt = webseite || social;
  const rueckfragenFertig =
    leistungGewaehlt && (!webseite || webseiteFertig) && (!social || socialFertig);

  // Die Kontaktfelder erscheinen nacheinander, sobald das vorherige steht.
  const zeigeEmail = rueckfragenFertig && gefuellt(name);
  const zeigeTelefon = zeigeEmail && gefuellt(email);
  const zeigeAbschluss = zeigeTelefon && gefuellt(telefon);

  useEffect(() => {
    if (state.status !== "error") return;

    const firstInvalid = document.querySelector<HTMLElement>('.contact-form [aria-invalid="true"]');
    firstInvalid?.focus({ preventScroll: false });
  }, [state]);

  if (state.status === "success") {
    return (
      <div
        role="status"
        className="flex max-w-4xl flex-col items-center border border-ink/15 bg-white p-10 text-center"
      >
        <span className="flex h-14 w-14 items-center justify-center bg-ink text-paper">
          <Check className="h-7 w-7" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-ink">Anfrage ist angekommen</h3>
        <p className="mt-3 max-w-sm text-pretty leading-relaxed text-ink/70">{state.message}</p>
      </div>
    );
  }

  return (
    <form
      action={formAction}
      noValidate
      aria-describedby={state.status === "error" ? "contact-form-error" : undefined}
      className="contact-form max-w-4xl border border-ink/10 bg-white p-6 sm:p-8"
    >
      <input type="hidden" name="_csrf" value={csrfToken} />

      {/* Botfalle: fuer Menschen unsichtbar und nicht erreichbar. Wer hier etwas eintraegt, ist keiner. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website_url">Dieses Feld bitte leer lassen</label>
        <input id="website_url" name="website_url" type="text" tabIndex={-1} autoComplete="off" />
        <label htmlFor="firmenname">Dieses Feld bitte leer lassen</label>
        <input id="firmenname" name="firmenname" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <fieldset
        className={stufe(leistungGewaehlt)}
        aria-invalid={fieldErrors.services ? "true" : undefined}
        aria-describedby={fieldErrors.services ? "services-error" : undefined}
      >
        <legend className={labelClass}>
          Womit kann ich dir helfen? <Pflicht />
        </legend>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { value: "webseite", label: "Webseite", an: webseite, setzen: setWebseite },
            { value: "social-media", label: "Social Media", an: social, setzen: setSocial },
          ].map((service) => (
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
                checked={service.an}
                onChange={(event) => service.setzen(event.target.checked)}
                className="h-4 w-4 shrink-0 accent-accent"
              />
              {service.label}
            </label>
          ))}
        </div>
        <Fehler id="services-error" text={fieldErrors.services} />
      </fieldset>

      {webseite ? (
        <div className={blockClass}>
          <div className={stufe(gefuellt(hatWebsite))}>
            <JaNein
              name="hatWebsite"
              legende="Hast du schon eine Website?"
              wert={hatWebsite}
              onChange={setHatWebsite}
            />
          </div>

          {hatWebsite === "ja" ? (
            <div className={`mt-5 ${stufe(gefuellt(websiteAdresse))}`}>
              <label htmlFor="websiteAdresse" className={labelClass}>
                Wie lautet die Adresse? <Pflicht />
              </label>
              <input
                id="websiteAdresse"
                name="websiteAdresse"
                type="url"
                autoComplete="url"
                value={websiteAdresse}
                onChange={(event) => setWebsiteAdresse(event.target.value)}
                className={inputClass}
                placeholder="https://www.deine-domain.de"
              />
            </div>
          ) : null}

          {gefuellt(hatWebsite) && (hatWebsite === "nein" || gefuellt(websiteAdresse)) ? (
            <div className={`mt-5 ${stufe(gefuellt(websiteWunsch))}`}>
              <label htmlFor="websiteWunsch" className={labelClass}>
                Was möchtest du mit der Website genau erreichen? <Pflicht />
              </label>
              <textarea
                id="websiteWunsch"
                name="websiteWunsch"
                rows={4}
                value={websiteWunsch}
                onChange={(event) => setWebsiteWunsch(event.target.value)}
                className={`${inputClass} resize-y`}
                placeholder="z. B. mehr Anfragen, bei Google gefunden werden, endlich auf dem Handy gut aussehen"
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {social ? (
        <div className={blockClass}>
          <div className={stufe(gefuellt(socialZiel))}>
            <label htmlFor="socialZiel" className={labelClass}>
              Was willst du mit Social Media erreichen? <Pflicht />
            </label>
            <textarea
              id="socialZiel"
              name="socialZiel"
              rows={4}
              value={socialZiel}
              onChange={(event) => setSocialZiel(event.target.value)}
              className={`${inputClass} resize-y`}
              placeholder="z. B. bekannter werden in der Region, Mitarbeiter finden, regelmäßig sichtbar sein"
            />
          </div>

          {gefuellt(socialZiel) ? (
            <div className={`mt-5 ${stufe(gefuellt(hatKanaele))}`}>
              <JaNein
                name="hatKanaele"
                legende="Hast du schon Kanäle?"
                wert={hatKanaele}
                onChange={setHatKanaele}
              />
            </div>
          ) : null}

          {hatKanaele === "ja" ? (
            <div className={`mt-5 ${stufe(gefuellt(socialKanaele))}`}>
              <label htmlFor="socialKanaele" className={labelClass}>
                Welche? <Pflicht />
              </label>
              <input
                id="socialKanaele"
                name="socialKanaele"
                type="text"
                value={socialKanaele}
                onChange={(event) => setSocialKanaele(event.target.value)}
                className={inputClass}
                placeholder="Instagram, Facebook, LinkedIn, TikTok"
              />
            </div>
          ) : null}
        </div>
      ) : null}

      {rueckfragenFertig ? (
        <div className={blockClass}>
          <div className={stufe(zeigeEmail)}>
            <label htmlFor="name" className={labelClass}>
              Dein Name <Pflicht />
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              aria-invalid={fieldErrors.name ? "true" : undefined}
              aria-describedby={fieldErrors.name ? "name-error" : undefined}
              value={name}
              onChange={(event) => setName(event.target.value)}
              className={inputClass}
              placeholder="Vor- und Nachname"
            />
            <Fehler id="name-error" text={fieldErrors.name} />
          </div>

          {zeigeEmail ? (
            <div className={`mt-5 ${stufe(zeigeTelefon)}`}>
              <label htmlFor="email" className={labelClass}>
                E-Mail-Adresse <Pflicht />
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={fieldErrors.email ? "true" : undefined}
                aria-describedby={fieldErrors.email ? "email-error" : undefined}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className={inputClass}
                placeholder="name@firma.de"
              />
              <Fehler id="email-error" text={fieldErrors.email} />
            </div>
          ) : null}

          {zeigeTelefon ? (
            <div className={`mt-5 ${stufe(zeigeAbschluss)}`}>
              <label htmlFor="phone" className={labelClass}>
                Telefonnummer <Pflicht />
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                aria-invalid={fieldErrors.phone ? "true" : undefined}
                aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                value={telefon}
                onChange={(event) => setTelefon(event.target.value)}
                className={inputClass}
                placeholder="+49 ..."
              />
              <Fehler id="phone-error" text={fieldErrors.phone} />
            </div>
          ) : null}
        </div>
      ) : null}

      {zeigeAbschluss ? (
        <>
          <div className="mt-6 flex items-start gap-3">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              aria-invalid={fieldErrors.consent ? "true" : undefined}
              aria-describedby={fieldErrors.consent ? "consent-error" : undefined}
              className="mt-1 h-4 w-4 shrink-0 accent-accent"
            />
            <label htmlFor="consent" className="text-sm leading-relaxed text-ink/70">
              Die Angaben dürfen zur Bearbeitung der Anfrage verwendet werden. Hinweise dazu stehen
              unter{" "}
              <Link
                href="/datenschutz"
                className="text-accent underline underline-offset-4 hover:text-ink"
              >
                Datenschutz
              </Link>
              . <Pflicht />
            </label>
          </div>
          <Fehler id="consent-error" text={fieldErrors.consent} />

          <div className="mt-4">
            <Button type="submit" size="lg" withArrow className="w-full sm:w-auto" disabled={isPending}>
              {isPending ? "Wird gesendet..." : "Anfrage senden"}
            </Button>
          </div>
        </>
      ) : null}

      <div aria-live="polite" className="mt-4 min-h-[1.25rem]">
        {state.status === "error" ? (
          <p id="contact-form-error" role="alert" className="text-sm text-red-700">
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
