import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://rimamo.dev"),
  title: {
    default: "Ricardo Martínez | Estrategia Tecnológica y CTO Fraccional",
    template: "%s | Ricardo Martínez"
  },
  description: "Transformo el caos operativo y tecnológico de tu empresa en sistemas eficientes, escalables y rentables. Auditoría Tech, Consultoría de Operaciones y CTO Fraccional.",
  keywords: ["CTO", "CTO Fraccional", "Consultoria Tecnologica", "Estrategia de Software", "Automatizacion y Operaciones", "Auditoria SaaS", "Ricardo Martinez"],
  openGraph: {
    title: "Ricardo Martínez | Especialista en Eficiencia Tecnológica",
    description: "Deja de perder dinero en software desalineado. Transformo tu infraestructura y operaciones en sistemas altamente rentables.",
    url: "https://rimamo.dev",
    siteName: "Ricardo Martínez - Estrategia Tecnológica",
    locale: "es_ES",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <meta httpEquiv="Content-Security-Policy" content="upgrade-insecure-requests"/>
      
      <link rel="icon" href="/images/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      
      {/* Schema.org estructurado para GEO / AI Crawlers */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Person", "ProfessionalService"],
            "name": "Ricardo Martínez",
            "url": "https://rimamo.dev",
            "jobTitle": "Consultor Tecnológico y CTO Fraccional",
            "description": "Estrategia Tecnológica de Alto Nivel para CEOs y Managers. Auditoría de Ecosistemas y Eficiencia de Operaciones.",
            "knowsAbout": ["Software Architecture", "CTO as a Service", "Business Operations", "Technical Leadership", "SaaS Cost Reduction", "Automation"],
            "sameAs": [
              "https://linkedin.com/in/ricardomartinezmontes",
              "https://github.com/rimamo"
            ]
          })
        }}
      />
    </head>
      <body>
        {children}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-94GFMMXZB8`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
        >
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-94GFMMXZB8');
          `}
        </Script>
      </body>
    </html>
  );
}
