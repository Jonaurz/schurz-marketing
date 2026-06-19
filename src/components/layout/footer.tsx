import Link from "next/link";
import { Container } from "../ui/container";
import { Logo } from "../logo";
import { Mail, Phone, MapPin } from "../ui/icons";
import { CookieSettingsLink } from "../cookie-settings-link";
import { localSeoPages } from "@/lib/local-seo";
import { navItems, services, site } from "@/lib/site";

const legalItems = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
  { label: "AGB", href: "/agb" },
  { label: "Cookie-Richtlinien", href: "/cookie-richtlinien" },
  { label: "Barrierefreiheit", href: "/barrierefreiheit" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink/10 bg-paper">
      <Container className="py-16 sm:py-20">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Marke */}
          <div className="col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-ink/70">
              Webdesign und Social Media für Unternehmen, Dienstleister und
              lokale Betriebe. Persönlich und aus einer Hand.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Footer-Navigation">
            <h2 className="text-xs font-semibold uppercase tracking-label text-ink/70">
              Navigation
            </h2>
            <ul className="mt-4 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-ink/75 transition-colors hover:text-ink"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Leistungen */}
          <nav aria-label="Leistungen">
            <h2 className="text-xs font-semibold uppercase tracking-label text-ink/70">
              Leistungen
            </h2>
            <ul className="mt-4 space-y-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm text-ink/75 transition-colors hover:text-ink"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Kontakt */}
          <div>
            <h2 className="text-xs font-semibold uppercase tracking-label text-ink/70">
              Kontakt
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink/75">
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 text-ink/40" />
                  {site.contact.email}
                </a>
              </li>
              {site.contact.phone ? (
                <li>
                  {site.contact.phoneHref ? (
                    <a
                      href={`tel:${site.contact.phoneHref}`}
                      className="inline-flex items-center gap-2 transition-colors hover:text-ink"
                    >
                      <Phone className="h-4 w-4 text-ink/40" />
                      {site.contact.phone}
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2">
                      <Phone className="h-4 w-4 text-ink/40" />
                      {site.contact.phone}
                    </span>
                  )}
                </li>
              ) : null}
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-ink/40" />
                {site.contact.city}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-ink/10 pt-8">
          <h2 className="text-xs font-semibold uppercase tracking-label text-ink/70">
            Regional
          </h2>
          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {localSeoPages.map((page) => (
              <li key={page.href}>
                <Link
                  href={page.href}
                  className="text-sm text-ink/75 transition-colors hover:text-ink"
                >
                  {page.service.shortLabel} {page.city.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink/10 pt-8 text-sm text-ink/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}
          </p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-3">
            {legalItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition-colors hover:text-ink">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <CookieSettingsLink className="transition-colors hover:text-ink" />
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
