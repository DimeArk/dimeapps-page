import type { Metadata } from "next";
import { Hanken_Grotesk, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const hanken = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-hanken", display: "swap" });
const space = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

export const metadata: Metadata = {
  title: "Dimeapps — Small, sharp apps that do one thing well",
  description:
    "Dimeapps is an independent studio building focused tools — from live meeting transcription to measurement-data analysis to homologation-grade vehicle testing.",
  metadataBase: new URL("https://www.dimeapps.com"),
  openGraph: {
    title: "Dimeapps",
    description: "Small, sharp apps that do one thing well.",
    url: "https://www.dimeapps.com",
    siteName: "Dimeapps",
    type: "website",
  },
  twitter: { card: "summary_large_image", title: "Dimeapps", description: "Small, sharp apps that do one thing well." },
};

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${hanken.variable} ${space.variable} ${jetbrains.variable}`}>
      <head>
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
