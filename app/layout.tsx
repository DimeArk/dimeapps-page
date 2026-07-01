import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: {
    default: "Dimeapps — Small, sharp apps that do one thing well",
    template: "%s | Dimeapps",
  },
  description:
    "Dimeapps is an independent studio building focused tools — from live meeting transcription (Scoobs Live) to measurement-data analysis (Vizalyze) to homologation-grade vehicle testing (CDDG).",
  metadataBase: new URL("https://www.dimeapps.com"),
  alternates: { canonical: "https://www.dimeapps.com" },
  keywords: ["Dimeapps", "Scoobs Live", "Vizalyze", "CDDG", "indie apps", "productivity apps", "meeting transcription", "data analysis"],
  authors: [{ name: "Dimeapps" }],
  creator: "Dimeapps",
  openGraph: {
    title: "Dimeapps — Small, sharp apps that do one thing well",
    description: "An independent studio building focused tools. Each app does one thing, and does it well.",
    url: "https://www.dimeapps.com",
    siteName: "Dimeapps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dimeapps — Small, sharp apps that do one thing well",
    description: "An independent studio building focused tools. Each app does one thing, and does it well.",
    creator: "@dimeapps",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-snippet": -1, "max-image-preview": "large" },
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Dimeapps",
    url: "https://www.dimeapps.com",
    description: "An independent studio building small, sharp apps that do one thing well.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://www.dimeapps.com/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Dimeapps",
    url: "https://www.dimeapps.com",
    logo: "https://www.dimeapps.com/assets/dimeapps_logo.svg",
    description: "An independent studio building small, sharp apps that do one thing well.",
    foundingDate: "2024",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Scoobs Live",
          url: "https://scoobslive.com",
          applicationCategory: "ProductivityApplication",
          description: "Live meeting transcription app",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "Vizalyze",
          url: "https://vizalyze.app",
          applicationCategory: "BusinessApplication",
          description: "Measurement data analysis and visualization",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "SoftwareApplication",
          name: "CDDG",
          url: "https://www.dimeapps.com/apps/cddg",
          operatingSystem: "Android",
          applicationCategory: "AutomotiveApplication",
          description:
            "Homologation-grade vehicle test workflows for Android — drive cycles, RDE, EV/hybrid, OBD logging and audit-ready reports.",
        },
      },
    ],
  },
];

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${space.variable} ${jetbrains.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Explicit preconnect for faster font loading = positive Core Web Vitals signal */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}
