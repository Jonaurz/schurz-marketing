import type { Metadata, Viewport } from "next";
import "./globals.css";
import { display, sans } from "./fonts";
import { Providers } from "./providers";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { CookieBanner } from "@/components/cookie-banner";
import { GoogleAnalytics } from "@/components/google-analytics";
import { site } from "@/lib/site";

const logoSvgUrl = `${site.url}/logo.svg`;
const logoPngUrl = `${site.url}/images/schurz-marketing-logo.png`;

const metaDescription =
  "Webdesign und Social-Media-Betreuung für Unternehmen, Dienstleister und lokale Betriebe. Klare, DSGVO-konforme und barrierefreie Websites, die Vertrauen schaffen und Anfragen bringen.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name}. ${site.tagline}`,
    template: `%s · ${site.name}`,
  },
  description: metaDescription,
  applicationName: site.name,
  authors: [{ name: site.founder }],
  creator: site.founder,
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/images/schurz-marketing-logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/images/schurz-marketing-logo.png", sizes: "512x512" }],
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: site.url,
    siteName: site.name,
    title: `${site.name}. ${site.tagline}`,
    description: metaDescription,
    images: [
      {
        url: "/images/schurz-marketing-webdesign.png",
        width: 1448,
        height: 1086,
        alt: "Von Schurz Marketing gestaltete Website auf Laptop und Smartphone",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name}. ${site.tagline}`,
    description: metaDescription,
    images: ["/images/schurz-marketing-webdesign.png"],
  },
  keywords: [
    "Webdesign",
    "Website erstellen lassen",
    "Webdesigner",
    "Social-Media-Betreuung",
    "Landingpages",
    "lokale SEO",
    "Website-Wartung",
    "WordPress-Webseiten",
    "Webdesign für Handwerker",
    "Schurz Marketing",
    "Jonas Schurz",
  ],
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#f5f5f4",
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${site.url}/#organization`,
  name: site.name,
  legalName: site.name,
  url: site.url,
  logo: {
    "@type": "ImageObject",
    "@id": `${site.url}/#logo`,
    url: logoPngUrl,
    contentUrl: logoPngUrl,
    width: 512,
    height: 512,
  },
  image: [logoPngUrl, logoSvgUrl, `${site.url}/images/schurz-marketing-webdesign.png`],
  description:
    "Webdesign und Social-Media-Betreuung für Unternehmen, Dienstleister und lokale Betriebe. Klar, DSGVO-konform und barrierefrei.",
  slogan: site.tagline,
  founder: { "@type": "Person", "@id": `${site.url}/#founder`, name: site.founder },
  email: site.contact.email,
  telephone: site.contact.phone,
  areaServed: { "@type": "Country", name: "Deutschland" },
  knowsAbout: [
    "Webdesign",
    "Webentwicklung",
    "WordPress-Webseiten",
    "Landingpages",
    "Lokale SEO",
    "Google-Unternehmensprofil",
    "Website-Wartung",
    "Webseiten für Handwerker",
    "Social-Media-Marketing",
    "Barrierefreiheit",
    "DSGVO",
  ],
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${site.url}/#founder`,
  name: site.founder,
  jobTitle: "Webdesigner und Online-Marketing-Berater",
  worksFor: { "@id": `${site.url}/#organization` },
  url: `${site.url}/ueber-mich`,
};

const webSiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  name: site.name,
  url: site.url,
  inLanguage: "de-DE",
  publisher: { "@id": `${site.url}/#organization` },
};

const animationPolyfill = `
(function () {
  var startedAt = Date.now();
  if (!window.performance) {
    window.performance = { now: function () { return Date.now() - startedAt; } };
  } else if (typeof window.performance.now !== "function") {
    window.performance.now = function () { return Date.now() - startedAt; };
  }

  if (typeof window.requestAnimationFrame !== "function") {
    window.requestAnimationFrame = function (callback) {
      return window.setTimeout(function () {
        callback(window.performance.now());
      }, 16);
    };
  }

  if (typeof window.cancelAnimationFrame !== "function") {
    window.cancelAnimationFrame = function (handle) {
      window.clearTimeout(handle);
    };
  }
})();
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${display.variable} ${sans.variable} h-full antialiased`}
    >
      <body
        suppressHydrationWarning
        className="flex min-h-full flex-col bg-paper text-ink"
      >
        <script dangerouslySetInnerHTML={{ __html: animationPolyfill }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteJsonLd) }}
        />
        {/* Inhalte nie per JS verstecken: ohne JS sind Reveal-Elemente sichtbar. */}
        <noscript>
          <style>{`.reveal-js{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>

        <a
          href="#hauptinhalt"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
        >
          Zum Inhalt springen
        </a>

        <Providers>
          <Navbar />
          <main id="hauptinhalt" className="flex-1">
            {children}
          </main>
          <Footer />
        </Providers>
        <GoogleAnalytics />
        <CookieBanner />
      </body>
    </html>
  );
}
