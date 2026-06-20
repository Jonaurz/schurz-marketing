# Serverkonfiguration

`Caddyfile.server` dokumentiert die am 20. Juni 2026 verwendete Caddy-Konfiguration
des Servers.

Die aktive Datei liegt auf dem Server unter:

```text
/opt/schurz-crm/Caddyfile
```

Vor Änderungen eine Sicherung anlegen. Danach die Konfiguration prüfen und den
Caddy-Container neu laden oder neu starten:

```bash
docker exec schurz-crm-caddy-1 caddy validate --config /etc/caddy/Caddyfile
docker restart schurz-crm-caddy-1
```

Anschließend Hauptdomain und Demo-Subdomain getrennt prüfen:

```bash
curl -I https://schurz-marketing.de/
curl -I https://webseite.schurz-marketing.de/
curl -I https://webseite.schurz-marketing.de/robots.txt
```

Die Demo-Subdomain muss `410 Gone` und den vollständigen
`X-Robots-Tag` liefern. Die Hauptdomain darf keinen `noindex`-Header erhalten.
