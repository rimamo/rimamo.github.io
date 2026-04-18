import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://rimamo.dev"),
  title: {
    default: "Ricardo Martínez | Tech Lead a horas · CTO fraccional",
    template: "%s | Ricardo Martínez"
  },
  description: "Tech Lead senior a horas, sin contratarme a jornada completa. 16 años construyendo software: arquitectura, decisiones técnicas y refuerzo a tu equipo. Factura desde Rimamo SL.",
  keywords: ["CTO fraccional", "Tech Lead a horas", "Consultoría tecnológica", "Automatizaciones", "IA operativa", "Ricardo Martinez", "Rimamo"],
  openGraph: {
    title: "Ricardo Martínez | Tech Lead a horas",
    description: "Refuerzo técnico senior para tu equipo sin contrato laboral. Arquitectura, decisiones clave y automatizaciones reales.",
    url: "https://rimamo.dev",
    siteName: "Rimamo — Ricardo Martínez",
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
            "jobTitle": "Tech Lead a horas · CTO fraccional",
            "description": "Tech Lead senior a horas. Refuerzo técnico para equipos que necesitan arquitectura, decisiones clave y automatizaciones sin contratar a jornada completa.",
            "knowsAbout": ["Software Architecture", "Fractional CTO", "Technical Leadership", "Automation", "AI Integration", "MCP Agents", "Next.js", "TypeScript"],
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
