import type { Metadata } from "next";
import Image from "next/image";
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { getAdminSession } from "@/lib/admin-auth";
import { readContent, type ReferenceCase, type Testimonial } from "@/lib/content";
import {
  readEmailSettings,
  toAdminEmailSettings,
  type EmailSettingsForAdmin,
} from "@/lib/email-settings";
import {
  deleteReferenceAction,
  deleteTestimonialAction,
  logoutAction,
  saveEmailSettingsAction,
  saveReferenceAction,
  saveTestimonialAction,
  sendDoubleOptInTestAction,
  testEmailConnectionAction,
} from "./actions";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Admin",
  robots: { index: false, follow: false },
};

const inputClass =
  "w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-platinum outline-none transition-colors placeholder:text-platinum/45 focus:border-gold/50 focus:ring-1 focus:ring-gold/40";
const labelClass = "mb-2 block text-sm font-medium text-platinum";

function Field({
  label,
  name,
  value,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  value?: string | number;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        defaultValue={value}
        className={inputClass}
      />
    </label>
  );
}

function TextArea({
  label,
  name,
  value,
  required,
}: {
  label: string;
  name: string;
  value?: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className={labelClass}>
        {label}
        {required ? <span className="text-gold"> *</span> : null}
      </span>
      <textarea
        name={name}
        required={required}
        defaultValue={value}
        rows={4}
        className={`${inputClass} resize-y`}
      />
    </label>
  );
}

function PublishToggle({ checked = true }: { checked?: boolean }) {
  return (
    <label className="flex items-center gap-3 text-sm text-platinum/85">
      <input name="published" type="checkbox" defaultChecked={checked} className="h-4 w-4 accent-gold" />
      Veröffentlicht
    </label>
  );
}

function ReferenceForm({ reference }: { reference?: ReferenceCase }) {
  const isExisting = Boolean(reference);

  return (
    <article className="rounded-2xl border border-white/10 bg-graphite/45 p-5">
      <form action={saveReferenceAction} encType="multipart/form-data" className="grid gap-5">
        <input type="hidden" name="id" value={reference?.id ?? ""} />
        <input type="hidden" name="existingImageUrl" value={reference?.imageUrl ?? ""} />
        <div className="grid gap-5 sm:grid-cols-[1fr_8rem]">
          <Field label="Branche" name="sector" value={reference?.sector} required />
          <Field label="Reihenfolge" name="sortOrder" type="number" value={reference?.sortOrder ?? 99} />
        </div>
        <Field label="Titel" name="title" value={reference?.title} required />
        {reference?.imageUrl ? (
          <div>
            <span className={labelClass}>Aktuelles Bild</span>
            <div className="mt-2 overflow-hidden border border-white/10 bg-obsidian/40">
              <Image
                src={reference.imageUrl}
                alt={reference.imageAlt || reference.title}
                width={900}
                height={520}
                className="h-52 w-full object-cover"
              />
            </div>
          </div>
        ) : null}
        <Field label="Bildbeschreibung / Alt-Text" name="imageAlt" value={reference?.imageAlt} />
        <label className="block">
          <span className={labelClass}>Referenzbild hochladen</span>
          <input
            name="imageFile"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="w-full rounded-xl border border-white/10 bg-charcoal px-4 py-3 text-sm text-platinum file:mr-4 file:rounded-lg file:border-0 file:bg-gold file:px-4 file:py-2 file:text-sm file:font-medium file:text-obsidian"
          />
          <span className="mt-2 block text-xs leading-relaxed text-platinum/55">
            JPG, PNG oder WebP bis 4 MB. Ein neues Bild ersetzt das bisherige Bild.
          </span>
        </label>
        <TextArea label="Ausgangslage" name="problem" value={reference?.problem} />
        <TextArea label="Was das auslöst" name="consequence" value={reference?.consequence} />
        <TextArea label="Lösung" name="solution" value={reference?.solution} />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <PublishToggle checked={reference?.published ?? true} />
          <Button type="submit" withArrow>
            {isExisting ? "Referenz speichern" : "Referenz hinzufügen"}
          </Button>
        </div>
      </form>

      {reference ? (
        <form action={deleteReferenceAction} className="mt-4 border-t border-white/10 pt-4">
          <input type="hidden" name="id" value={reference.id} />
          <button
            type="submit"
            className="text-sm text-platinum/70 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Referenz löschen
          </button>
        </form>
      ) : null}
    </article>
  );
}

type EmailStatusMessage = {
  tone: "success" | "error";
  message: string;
};

function EmailSettingsForm({
  settings,
  status,
}: {
  settings: EmailSettingsForAdmin;
  status: EmailStatusMessage | null;
}) {
  const canTest = Boolean(
    settings.enabled &&
      settings.smtpHost &&
      settings.smtpPort &&
      settings.smtpUser &&
      settings.hasSmtpPassword &&
      settings.fromEmail &&
      settings.recipientEmail,
  );

  return (
    <article className="rounded-2xl border border-white/10 bg-graphite/45 p-5">
      {status ? (
        <div
          role={status.tone === "error" ? "alert" : "status"}
          className={`mb-5 rounded-xl border p-4 text-sm leading-relaxed ${
            status.tone === "success"
              ? "border-gold/30 bg-gold/[0.06] text-platinum/85"
              : "border-red-400/30 bg-red-500/[0.08] text-platinum/85"
          }`}
        >
          {status.message}
        </div>
      ) : null}

      <form action={saveEmailSettingsAction} className="grid gap-5">
        <label className="flex items-center gap-3 text-sm text-platinum/85">
          <input name="enabled" type="checkbox" defaultChecked={settings.enabled} className="h-4 w-4 accent-gold" />
          E-Mail-Versand und Double-Opt-In aktivieren
        </label>
        <p className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-relaxed text-platinum/60">
          Wenn der E-Mail-Versand aktiviert ist, werden Host, Port, TLS, Benutzer und Passwort
          bereits beim Speichern geprüft. Falsche Daten werden nicht übernommen und erscheinen
          hier als Fehlermeldung.
        </p>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="SMTP-Host" name="smtpHost" value={settings.smtpHost} />
          <Field label="SMTP-Port" name="smtpPort" type="number" value={settings.smtpPort} />
        </div>
        <label className="flex items-center gap-3 text-sm text-platinum/85">
          <input name="smtpSecure" type="checkbox" defaultChecked={settings.smtpSecure} className="h-4 w-4 accent-gold" />
          SSL/TLS direkt verwenden
        </label>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="SMTP-Benutzer" name="smtpUser" value={settings.smtpUser} />
          <Field
            label={settings.hasSmtpPassword ? "SMTP-Passwort neu setzen" : "SMTP-Passwort"}
            name="smtpPassword"
            type="password"
          />
        </div>
        {settings.hasSmtpPassword ? (
          <p className="text-xs leading-relaxed text-platinum/55">
            Es ist bereits ein verschlüsseltes SMTP-Passwort gespeichert. Leer lassen, um es
            beizubehalten.
          </p>
        ) : null}
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Absender-E-Mail" name="fromEmail" value={settings.fromEmail} />
          <Field label="Absender-Name" name="fromName" value={settings.fromName} />
        </div>
        <Field label="Empfänger-E-Mail für bestätigte Anfragen" name="recipientEmail" value={settings.recipientEmail} />
        <Field label="Live-Domain für Bestätigungslinks" name="baseUrl" value={settings.baseUrl} />
        <p className="text-xs leading-relaxed text-platinum/55">
          Lokal wird automatisch die aktuelle Adresse genutzt. Für die Live-Seite sollte hier
          https://schurz-marketing.de stehen.
        </p>
        <div className="flex justify-end">
          <Button type="submit" withArrow>
            E-Mail-Einstellungen speichern
          </Button>
        </div>
      </form>

      <div className="mt-6 border-t border-white/10 pt-5">
        <h3 className="text-lg font-bold text-platinum">E-Mail-System testen</h3>
        <p className="mt-2 text-sm leading-relaxed text-platinum/65">
          Die Testmail prüft SMTP-Verbindung, Login und Versand. Der Double-Opt-In-Test sendet
          eine Bestätigungsmail an die gespeicherte Empfänger-Adresse. Nach Klick auf den Link
          wird die bestätigte Anfrage erneut über das System weitergeleitet.
        </p>
        {!canTest ? (
          <p className="mt-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs leading-relaxed text-platinum/60">
            Zum Testen müssen E-Mail-Versand, SMTP-Host, Port, Benutzer, Passwort, Absender und
            Empfänger gespeichert sein.
          </p>
        ) : null}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <form action={testEmailConnectionAction}>
            <Button type="submit" variant="secondary" disabled={!canTest}>
              SMTP-Testmail senden
            </Button>
          </form>
          <form action={sendDoubleOptInTestAction}>
            <Button type="submit" disabled={!canTest}>
              Double-Opt-In-Test senden
            </Button>
          </form>
        </div>
      </div>
    </article>
  );
}

function TestimonialForm({ testimonial }: { testimonial?: Testimonial }) {
  const isExisting = Boolean(testimonial);

  return (
    <article className="rounded-2xl border border-white/10 bg-graphite/45 p-5">
      <form action={saveTestimonialAction} className="grid gap-5">
        <input type="hidden" name="id" value={testimonial?.id ?? ""} />
        <div className="grid gap-5 sm:grid-cols-[1fr_8rem]">
          <Field label="Unternehmen" name="company" value={testimonial?.company} required />
          <Field label="Reihenfolge" name="sortOrder" type="number" value={testimonial?.sortOrder ?? 99} />
        </div>
        <TextArea label="Kundenstimme" name="quote" value={testimonial?.quote} required />
        <div className="grid gap-5 sm:grid-cols-2">
          <Field label="Name" name="author" value={testimonial?.author} />
          <Field label="Rolle" name="role" value={testimonial?.role} />
        </div>
        <Field label="Projekt" name="project" value={testimonial?.project} />
        <TextArea label="Ergebnis / Wirkung" name="result" value={testimonial?.result} />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <PublishToggle checked={testimonial?.published ?? true} />
          <Button type="submit" withArrow>
            {isExisting ? "Kundenstimme speichern" : "Kundenstimme hinzufügen"}
          </Button>
        </div>
      </form>

      {testimonial ? (
        <form action={deleteTestimonialAction} className="mt-4 border-t border-white/10 pt-4">
          <input type="hidden" name="id" value={testimonial.id} />
          <button
            type="submit"
            className="text-sm text-platinum/70 underline-offset-4 transition-colors hover:text-gold hover:underline"
          >
            Kundenstimme löschen
          </button>
        </form>
      ) : null}
    </article>
  );
}

function getEmailStatusMessage(params: { emailStatus?: string; emailMessage?: string }) {
  if (!params.emailStatus || !params.emailMessage) return null;
  if (params.emailStatus !== "success" && params.emailStatus !== "error") return null;

  return {
    tone: params.emailStatus,
    message: params.emailMessage,
  } satisfies EmailStatusMessage;
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams?: Promise<{ emailStatus?: string; emailMessage?: string }>;
}) {
  const params = searchParams ? await searchParams : {};
  const emailStatus = getEmailStatusMessage(params);
  const session = await getAdminSession();
  if (!session) redirect("/schurz-admin/login");

  const content = await readContent();
  const emailSettings = toAdminEmailSettings(await readEmailSettings());

  return (
    <>
      <PageHero
        eyebrow="Privater Bereich"
        title="Referenzen, Kundenstimmen und E-Mail verwalten"
        subtitle="Änderungen werden serverseitig gespeichert und erst nach Veröffentlichung auf der Startseite angezeigt."
      >
        <form action={logoutAction}>
          <Button type="submit" variant="secondary">
            Ausloggen
          </Button>
        </form>
      </PageHero>

      <Section spacing="tight" aria-label="Referenzen verwalten">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-label text-gold">Referenzen</p>
              <h2 className="mt-3 text-3xl font-bold text-platinum">Probleme und Lösungen</h2>
              <p className="mt-4 text-sm leading-relaxed text-platinum/70">
                Tragen Sie echte Projekte so ein, dass Besucher die Ausgangslage, die Wirkung
                und die Lösung schnell verstehen. Optional kann ein Referenzbild ergänzt werden.
              </p>
            </div>
            <div className="grid gap-5">
              {content.references
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((reference) => (
                  <ReferenceForm key={reference.id} reference={reference} />
                ))}
              <ReferenceForm />
            </div>
          </div>
        </Container>
      </Section>

      <Section spacing="tight" aria-label="E-Mail-Versand verwalten" className="bg-graphite/20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-label text-gold">
                E-Mail & Double-Opt-In
              </p>
              <h2 className="mt-3 text-3xl font-bold text-platinum">Kontaktformular versenden</h2>
              <p className="mt-4 text-sm leading-relaxed text-platinum/70">
                Hier werden die SMTP-Daten serverseitig gespeichert. Das Passwort wird
                verschlüsselt abgelegt und nicht im Frontend ausgegeben.
              </p>
            </div>
            <EmailSettingsForm settings={emailSettings} status={emailStatus} />
          </div>
        </Container>
      </Section>

      <Section spacing="tight" aria-label="Kundenstimmen verwalten">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-xs font-medium uppercase tracking-label text-gold">Kundenstimmen</p>
              <h2 className="mt-3 text-3xl font-bold text-platinum">Stimmen mit Substanz</h2>
              <p className="mt-4 text-sm leading-relaxed text-platinum/70">
                Kundenstimmen können mit Projekt und Ergebnis ergänzt werden, damit sie nicht
                beliebig wirken.
              </p>
            </div>
            <div className="grid gap-5">
              {content.testimonials
                .sort((a, b) => a.sortOrder - b.sortOrder)
                .map((testimonial) => (
                  <TestimonialForm key={testimonial.id} testimonial={testimonial} />
                ))}
              <TestimonialForm />
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
