# Schurz Marketing – Upload & Deployment

Diese Website ist eine **Next.js-Anwendung mit Server-Funktionen** (Admin-Bereich,
Kontaktformular mit Double-Opt-In, E-Mail-Versand, datei-basierte Inhalte).

> **Wichtig:** Das ist **kein reiner Statik-Upload** per FTP. Die Seite braucht einen
> **Server, der Node.js ausführen kann** (z. B. eigener Server / VPS, oder ein Hoster
> mit Node-Unterstützung). Klassisches reines Webspace-Hosting (nur HTML/FTP) reicht
> für Admin-Bereich, Kontaktformular und E-Mail-Versand **nicht** aus.

---

## 1. Voraussetzungen auf dem Server

- **Node.js 20.9 oder neuer**
- Ein dauerhaft beschreibbarer Ordner `data/` (für Anfragen, Inhalte, E-Mail-Einstellungen)
- Eine Domain (`schurz-marketing.de`) mit SSL-Zertifikat (z. B. über Let’s Encrypt)
- Empfohlen: Reverse Proxy (nginx) vor der Node-App

## 2. Installation & Build

```bash
# Projektdateien auf den Server bringen (Git oder Upload, OHNE node_modules / .next)
npm ci                 # Abhängigkeiten installieren
npm run build          # Produktions-Build erstellen
npm run start          # Server starten (Standard: Port 3000)
```

Damit die App nach einem Neustart automatisch wieder läuft, empfiehlt sich ein
Prozess-Manager wie **pm2**:

```bash
npm install -g pm2
pm2 start npm --name schurz-marketing -- start
pm2 save
```

## 3. Umgebungsvariablen (`.env.local` auf dem Server)

Siehe `.env.example`. Pflicht sind drei Werte:

```env
ADMIN_USERNAME=...
ADMIN_PASSWORD_HASH=...
ADMIN_SESSION_SECRET=...
```

Hash + Secret erzeugst du mit:

```bash
npm run admin:password -- "EinSehrSicheresPasswort"
```

Die Ausgabe (zwei Zeilen) in die `.env.local` auf dem Server eintragen.
**Auf dem Live-Server unbedingt ein eigenes, starkes Passwort setzen** (nicht das lokale).

## 4. Reverse Proxy (Beispiel nginx)

```nginx
server {
  server_name schurz-marketing.de www.schurz-marketing.de;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto $scheme;
  }
  # SSL-Zertifikat (z. B. via certbot) hier einbinden
}
```

## 5. E-Mail-Versand einrichten (im Admin-Bereich)

Nach dem ersten Start:

1. `https://schurz-marketing.de/schurz-admin/login` aufrufen und anmelden.
2. Unter **E-Mail-Einstellungen** eintragen:
   - SMTP-Host, Port, Benutzer, Passwort (deines Mail-Anbieters)
   - **Empfänger-Adresse** (wohin Anfragen gehen sollen)
   - **Basis-URL** = `https://schurz-marketing.de` (für die Bestätigungslinks)
3. Eine Test-Anfrage über `/kontakt` senden und Double-Opt-In prüfen.

Die SMTP-Daten werden verschlüsselt in `data/email-settings.json` gespeichert
(Schlüssel = `ADMIN_SESSION_SECRET`).

## 6. Inhalte pflegen (Admin)

Im Admin-Bereich lassen sich **Referenzen** und **Kundenstimmen** anlegen/bearbeiten.
Diese liegen in `data/site-content.json`. Der Ordner `data/` muss daher dauerhaft
erhalten bleiben (nicht bei jedem Deployment löschen).

---

## ✅ Checkliste vor dem Livegang

- [ ] **Kontaktdaten** in `src/lib/site.ts` ergänzen: `contact.phone` und `contact.phoneHref`
      (und optional `whatsapp`). Aktuell ist nur die E-Mail gesetzt.
- [ ] **Impressum** (`src/app/impressum/page.tsx`): Anschrift, Telefon, ggf. USt-IdNr.
      bzw. Kleinunternehmer-Hinweis eintragen.
- [ ] **Datenschutz** (`src/app/datenschutz/page.tsx`): Anschrift, Hoster + AVV ergänzen.
- [ ] **AGB / Cookie-Richtlinien** inhaltlich prüfen.
- [ ] **Admin-Passwort** auf dem Server neu und stark setzen.
- [ ] **SMTP** im Admin konfigurieren und eine Test-Anfrage durchspielen.
- [ ] Domain steht in `src/lib/site.ts` (`url`) auf `https://schurz-marketing.de` ✔
- [ ] Rechtstexte (Impressum/Datenschutz) vor Veröffentlichung kurz juristisch prüfen lassen.

## Hinweise

- **Bild-Optimierung:** Sollte die Bildoptimierung auf dem Server Probleme machen,
  hilft `npm install sharp`.
- **Vercel & Co.:** Plattformen mit „serverless"/kurzlebigem Dateisystem sind hier
  **nicht ideal**, weil Anfragen und Inhalte in `data/` als Dateien gespeichert werden.
  Diese würden dort nicht zuverlässig erhalten bleiben. Ein klassischer Node-Server mit
  persistenter Festplatte ist die richtige Wahl.
- Sicherheits-Header sind in `next.config.ts` gesetzt; der Admin-Bereich ist auf
  `noindex` und in `robots.txt` gesperrt.
