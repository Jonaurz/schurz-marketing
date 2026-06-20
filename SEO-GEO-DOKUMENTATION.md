# SEO- und GEO-Überarbeitung

Stand: 20. Juni 2026

## Technischer Ausgangspunkt

- Next.js 16 mit App Router
- React 19 und TypeScript
- eigener Server mit Docker
- Caddy als Reverse Proxy
- dynamische Inhalte für Referenzen und Kundenstimmen im Verzeichnis `data/`
- Deployment der Website aus `/opt/schurz-marketing`
- zentrale Caddy-Konfiguration in `/opt/schurz-crm/Caddyfile`

Die Website ist kein WordPress-Projekt. Alle Änderungen wurden im Next.js-Projekt
oder in der zugehörigen Serverkonfiguration umgesetzt.

## Umgesetzte Änderungen

### Technische SEO-Grundlage

- zentrale Metadata-Hilfe für Canonical, Open Graph und Twitter Cards ergänzt
- eindeutige Seitentitel und Beschreibungen für die wichtigen Seiten geprüft
- dynamische Metadaten für Orts- und Gewerkeseiten vereinheitlicht
- dynamische Sitemap stabilisiert und um das indexierbare Impressum ergänzt
- `robots.txt` um Admin-Bereich und Bestätigungsseite ergänzt
- neue 404-Seite mit hilfreichen internen Links und `noindex` ergänzt
- zentrale, sicher serialisierte JSON-LD-Komponente ergänzt
- strukturierte Daten für `ProfessionalService`, `Person`, `WebSite`, `Service`,
  `FAQPage` und `BreadcrumbList` ausgebaut
- widersprüchliche Indexierungsangaben auf Datenschutz, AGB,
  Cookie-Richtlinien und Barrierefreiheitsseite bereinigt
- bestehende Redirects beibehalten

### Inhalte und GEO

- Startseite mit klarerem Hero, Zielgruppen, Region und sichtbaren Antwortblöcken
  überarbeitet
- Anbieterbeschreibung für Webdesign, Social Media und digitale Sichtbarkeit aus
  Sachsen geschärft
- Webdesign- und Social-Media-Seite mit eindeutigeren H1, FAQ, Ablauf,
  Leistungsbeschreibung und Service-Schema verbessert
- Handwerker-Seite um typische Fehler, Projektgalerien, regionale Auffindbarkeit,
  Kontaktwege und einen zitierfähigen Antwortblock erweitert
- Unterseiten für Garten- und Landschaftsbau, Bauunternehmen, Zaunbau, Maler,
  Elektriker, Fliesenleger, Dachdecker und Sanitär/SHK geprüft und intern verbunden
- Zielgruppenseiten für Dienstleister und Reinigungsfirmen gestärkt
- Ortsseiten für Neustadt in Sachsen, Dresden, Pirna, Sebnitz, Bautzen, Chemnitz,
  Leipzig und Meißen mit eigenen lokalen Einleitungen und Fragen ausgebaut
- natürliche Verlinkungen zwischen Leistungen, Branchen, Orten und Kontakt ergänzt
- sichtbare Verkaufstexte weitgehend von formeller Ansprache auf `du` umgestellt
- unnötige Fachsprache und typische Werbefloskeln aus den bearbeiteten Texten entfernt

### Vertrauen und Referenzen

- bestehende echte Referenz bleibt öffentlich sichtbar
- keine erfundenen Kunden, Bewertungen oder Ergebnisse ergänzt
- Referenz-Datenstruktur um Region, Ziel, Ergebnis, Leistungen und mobiles
  Projektbild erweitert
- Admin-Formular für diese zusätzlichen echten Projektdaten vorbereitet
- öffentlich werden neue Referenzfelder nur angezeigt, wenn echte Inhalte gepflegt sind
- Kontaktseite um Telefonnummer, E-Mail und den Ablauf nach der Anfrage ergänzt

### Vorbereitete Ratgeber

Die geplanten Themen und ihre interne Verlinkung liegen in `src/lib/guides.ts`.
Sie sind noch nicht öffentlich und erzeugen daher keine dünnen indexierbaren Seiten.

## Demo-Subdomain

Die frühere Demo-Subdomain `webseite.schurz-marketing.de` wird nicht mehr an eine
Website weitergeleitet.

Umgesetzt wurden:

- gültiges TLS-Zertifikat über Caddy
- `410 Gone` für die Startseite und alle Unterseiten
- HTTP-Header
  `X-Robots-Tag: noindex, nofollow, noarchive, nosnippet`
- `Cache-Control: no-store`
- eigene `robots.txt` mit `Disallow: /`
- `410 Gone` auch für eine mögliche Demo-Sitemap
- zusätzlicher hostbasierter X-Robots-Fallback in `next.config.ts`
- keine Demo-URL in der Sitemap der Hauptdomain
- keine internen Links von der Hauptdomain zur Demo-Subdomain
- Hauptdomain bleibt ohne `noindex`

Die Serverkonfiguration ist als `deployment/Caddyfile.server` dokumentiert.

Prüfbefehle:

```bash
curl -I https://webseite.schurz-marketing.de/
curl -I https://webseite.schurz-marketing.de/klempner/
curl -I https://webseite.schurz-marketing.de/robots.txt
curl -I https://schurz-marketing.de/
```

Für Demo-Inhalte wird `410` zusammen mit dem vollständigen X-Robots-Header erwartet.
Die Hauptdomain muss `200` liefern und darf keinen `noindex`-Header enthalten.

## Qualitätssicherung

Automatisiert geprüft wurden:

- alle URLs aus der Sitemap
- Statuscodes
- genau eine H1 pro indexierbarer Seite
- eindeutige Titles und Meta Descriptions
- Canonical URLs
- unbeabsichtigte `noindex`-Angaben
- JSON-LD-Syntax
- interne Links
- Links zur Demo-Subdomain
- ESLint
- TypeScript und Produktions-Build

Der lokale Crawl umfasste 33 indexierbare Seiten und 38 interne Linkziele. Nach
der Ergänzung des Impressums umfasst die Sitemap 34 URLs.

## Kritischer offener Punkt: Anbieterangaben

**Bitte rechtlich korrekte Anbieterangaben prüfen und einsetzen.**

Marke, Website und Ansprechpartner nennen `Schurz Marketing` beziehungsweise
`Jonas Schurz`. Impressum, Datenschutz und AGB nennen aktuell dagegen
`Enrico Sturm / Finanz- und Wirtschaftsberatung`.

Diese Angaben wurden nicht frei geändert. Vor einer Änderung müssen mindestens
folgende rechtlich korrekten Daten feststehen:

- vollständiger Anbietername
- verantwortliche Person oder Rechtsform
- ladungsfähige Anschrift
- korrekte Telefonnummer und E-Mail-Adresse
- gegebenenfalls Register-, Umsatzsteuer- und Aufsichtsangaben
- datenschutzrechtlich verantwortliche Stelle

Danach müssen Impressum, Datenschutz, AGB, Footer und strukturierte Daten gemeinsam
abgeglichen werden.

Die Datenschutzerklärung nennt außerdem mehrere Dienste und Werkzeuge, deren
tatsächlicher Einsatz technisch und rechtlich geprüft werden muss, unter anderem
TikTok, LinkedIn Insight Tag, YouTube, Zoom, Microsoft Teams und Ninja Firewall.
Ninja Firewall stammt typischerweise aus einem WordPress-Kontext und wurde im
vorliegenden Next.js-Projekt nicht gefunden. Solche Passagen nicht automatisch
löschen, sondern mit den tatsächlich verwendeten Diensten und Verträgen abgleichen.
Diese Dokumentation ist keine Rechtsberatung.

## Weitere offene Punkte

- Google Search Console: bekannte Demo-URLs, insbesondere `/` und `/klempner/`,
  über das Entfernungstool ausblenden und anschließend erneut crawlen lassen
- echte Referenzen mit Region, Ausgangslage, Ziel, Umsetzung und Ergebnis ergänzen
- echte Kundenstimmen nur mit Freigabe und sichtbarer Quelle eintragen
- Social-Media-Profile in `src/lib/site.ts` ergänzen, sobald die echten URLs feststehen
- Google-Unternehmensprofil vollständig pflegen und mit der Website verknüpfen
- weitere echte Desktop- und Mobilbilder der Projekte bereitstellen
- falls gewünscht eine nachvollziehbare Preis- oder Paketlogik ergänzen
- vorbereitete Ratgeber nach Priorität schreiben und mit Leistungsseiten verbinden

## Empfohlene nächste Content-Schritte

1. `Was kostet eine Website für Handwerker?`
2. `Was gehört auf eine gute Handwerker-Webseite?`
3. `Social Media für Handwerker: Was wirklich sinnvoll ist`
4. `Google-Unternehmensprofil für Handwerker optimieren`
5. `Webdesign Dresden: Worauf Unternehmen achten sollten`

Neue Inhalte sollten erst veröffentlicht werden, wenn sie eine konkrete Frage
vollständig beantworten und einen sinnvollen internen Link zur passenden Leistung
und zur Kontaktseite enthalten.
