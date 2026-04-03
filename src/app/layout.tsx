import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ricardo Martinez Montes",
  description: "Personal website of Ricardo Martinez Montes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <meta charSet="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1"/>
      <link rel="icon" href="/images/favicon.ico"/>
      <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png"/>
      <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
      <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
      <link rel="manifest" href="/site.webmanifest"/>
      <script defer src="https://odoo.rimamo.dev/im_livechat/loader/2" type="text/javascript"></script>
      <script defer src="https://odoo.rimamo.dev/im_livechat/assets_embed.js" type="text/javascript"></script>
    </head>
      <body className={inter.className}>
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
