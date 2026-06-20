import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { PageHero } from "@/components/sections/page-hero";
import { CookieSettingsReset } from "@/components/cookie-settings-reset";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie-Richtlinien",
  description:
    "Cookie-Richtlinien von Schurz Marketing mit Informationen zu notwendigen Speicherungen, Cookie-Einstellungen und Google Analytics.",
  alternates: { canonical: "/cookie-richtlinien" },
  robots: { index: false, follow: true },
};

export default function CookieRichtlinienPage() {
  return (
    <>
      <PageHero
        eyebrow="Rechtliches"
        title="Cookie-Richtlinien"
        subtitle="Welche Cookies und Browser-Speicher diese Website nutzt, wofür sie gebraucht werden und wie Sie einzelne Kategorien auswählen können."
      />

      <Section spacing="tight" aria-label="Cookie-Richtlinien">
        <Container>
          <div className="legal mx-auto max-w-3xl">
            <p>
              Stand: 3. Juni 2026. Diese Übersicht beschreibt den aktuellen technischen Stand
              von schurz-marketing.de. Beim Aufruf der öffentlichen Website wird serverseitig
              kein Cookie per HTTP-Header gesetzt. Die Website nutzt jedoch notwendige
              Browser-Speicher und kann nach Zustimmung Google Analytics laden.
            </p>

            <div className="mt-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
              <h2 className="mt-0">Cookie-Einstellungen ändern</h2>
              <p>
                Eine erteilte Einwilligung kann jederzeit für die Zukunft geändert oder
                widerrufen werden. Die Kategorien lassen sich einzeln auswählen. Notwendige
                Speicherungen bleiben aktiv, weil sie für den Betrieb der Website erforderlich
                sind.
              </p>
              <CookieSettingsReset />
            </div>

            <h2>1. Was sind Cookies und ähnliche Technologien?</h2>
            <p>
              Cookies sind kleine Textdateien, die im Browser gespeichert werden können. Ähnliche
              Technologien sind zum Beispiel Local Storage oder JavaScript-Tags, über die
              Informationen im Browser gespeichert oder ausgelesen werden können.
            </p>

            <h2>2. Kategorien der Cookie-Einstellungen</h2>
            <h3>Notwendig</h3>
            <p>
              Notwendige Speicherungen sind immer aktiv. Sie werden eingesetzt, damit die Website
              sicher funktioniert und Ihre Cookie-Entscheidung gespeichert werden kann. Diese
              Kategorie kann nicht deaktiviert werden.
            </p>
            <ul>
              <li>Name: sm-cookie-consent</li>
              <li>Technik: Local Storage im Browser</li>
              <li>Zweck: Speicherung der Cookie-Auswahl inklusive Zeitstempel</li>
              <li>Speicherdauer: bis zur Löschung im Browser oder bis zur Änderung der Auswahl</li>
              <li>Rechtsgrundlage: § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO</li>
            </ul>

            <h3>Statistik</h3>
            <p>
              Statistik ist optional. Wenn diese Kategorie aktiviert wird, lädt die Website
              Google Analytics, um Seitenaufrufe und Nutzung statistisch auszuwerten. Ohne
              Zustimmung wird der Google Tag nicht geladen.
            </p>
            <ul>
              <li>Anbieter: Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland</li>
              <li>Mess-ID: G-T18GP6KQLY</li>
              <li>Zweck: statistische Auswertung von Seitenaufrufen und Website-Nutzung</li>
              <li>Aktivierung: nur nach Einwilligung in der Kategorie Statistik</li>
              <li>Rechtsgrundlage: § 25 Abs. 1 TDDDG und Art. 6 Abs. 1 lit. a DSGVO</li>
            </ul>

            <h3>Marketing</h3>
            <p>
              Marketing-Cookies werden aktuell nicht eingesetzt. Der Meta-Pixel, TikTok Pixel,
              LinkedIn Insight Tag oder vergleichbare Dienste werden derzeit nicht über den
              Quellcode der Website geladen. Falls solche Dienste später ergänzt werden, wird die
              Kategorie Marketing vorher separat aktivierbar gemacht und diese Richtlinie wird
              aktualisiert.
            </p>

            <h2>3. Technisch notwendige Admin-Session</h2>
            <p>
              Das folgende Cookie betrifft nur den geschützten Adminbereich. Es wird nicht für
              normale Besucher der öffentlichen Website gesetzt und ist im Frontend nicht verlinkt.
            </p>
            <ul>
              <li>Name: sm_admin_session</li>
              <li>Technik: HTTP-only Session-Cookie</li>
              <li>Zweck: sichere Anmeldung im geschützten Adminbereich</li>
              <li>Speicherdauer: maximal 8 Stunden</li>
              <li>Rechtsgrundlage: § 25 Abs. 2 TDDDG und Art. 6 Abs. 1 lit. f DSGVO</li>
            </ul>

            <h2>4. Google-Analytics-Cookies</h2>
            <p>
              Nach Einwilligung in die Kategorie Statistik kann Google Analytics insbesondere
              folgende Cookies setzen:
            </p>
            <ul>
              <li>_ga: dient der Unterscheidung von Besuchern, Speicherdauer bis zu 2 Jahre</li>
              <li>
                _ga_T18GP6KQLY: dient der Speicherung des Sitzungsstatus, Speicherdauer bis zu 2
                Jahre
              </li>
            </ul>
            <p>
              Abhängig von Google-Konfigurationen können weitere technisch vergleichbare
              Google-Analytics-Kennungen gesetzt werden. Wird die Statistik-Einwilligung später
              widerrufen, versucht die Website, vorhandene Google-Analytics-Cookies zu löschen und
              lädt den Google Tag künftig nicht mehr.
            </p>

            <h2>5. Bedienung des Cookie-Banners</h2>
            <p>
              Der Cookie-Banner bietet die Optionen „Alle ablehnen“, „Auswahl anpassen“,
              „Auswahl speichern“ und „Alle akzeptieren“. „Alle akzeptieren“ bezieht sich auf die
              aktuell eingesetzten optionalen Kategorien. Derzeit ist das nur Statistik. Die
              Auswahl kann jederzeit über den Footer-Link „Cookie-Einstellungen“ geändert werden.
            </p>

            <h2>6. Kontakt</h2>
            <p>
              Fragen zu Cookies und Datenschutz können per E-Mail gestellt werden:
              <br />
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
            </p>
          </div>
        </Container>
      </Section>
    </>
  );
}
