import type { Metadata } from "next";
import CddgPageContent from "./CddgPageContent";

export const metadata: Metadata = {
  title: "CDDG — Homologation Vehicle Testing App for Android",
  description:
    "CDDG is the only mobile-native app for professional automotive homologation. Drive cycle execution (WLTP, RDE, FTP-75), OBD-II logging, EV/hybrid testing, and certification-ready PDF reports — all from an Android device. Demo trials available.",
  keywords: [
    "CDDG",
    "vehicle homologation software",
    "RDE testing app",
    "drive cycle testing Android",
    "WLTP test software mobile",
    "automotive OBD logging app",
    "vehicle certification software",
    "emission testing app Android",
    "EV range testing app",
    "type approval software",
    "automotive test Android app",
    "Real Driving Emissions app",
    "FTP-75 drive cycle app",
    "NEDC testing software",
    "Euro 6d compliance testing",
    "homologation app",
    "automotive homologation Android",
    "OBD-II logging app",
    "PEMS data logging mobile",
    "dimeapps CDDG",
  ],
  alternates: { canonical: "https://www.dimeapps.com/apps/cddg" },
  openGraph: {
    title: "CDDG — Professional Vehicle Homologation on Android",
    description:
      "Drive cycles, RDE compliance, EV/hybrid testing, OBD logging and audit-ready reports — in your pocket. The only mobile-native homologation platform.",
    url: "https://www.dimeapps.com/apps/cddg",
    siteName: "Dimeapps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDDG — Professional Vehicle Homologation on Android",
    description:
      "Drive cycles, RDE compliance, EV/hybrid testing, OBD logging and audit-ready reports — in your pocket.",
    creator: "@dimeapps",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "CDDG",
  operatingSystem: "Android",
  applicationCategory: "AutomotiveApplication",
  url: "https://www.dimeapps.com/apps/cddg",
  description:
    "Homologation-grade vehicle test workflows for Android — drive cycles, RDE, EV/hybrid, OBD logging and audit-ready reports.",
  author: { "@type": "Organization", name: "Dimeapps", url: "https://www.dimeapps.com" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/LimitedAvailability",
    description: "Demo trials available for qualified organisations. Contact for licensing.",
  },
  featureList: [
    "WLTP Class 1, 2 and 3 drive cycle execution",
    "RDE (Real Driving Emissions) Euro 6d and Euro 7 compliance monitoring",
    "EV and hybrid REESS/SOC monitoring",
    "OBD-II and J1939 logging at up to 10 Hz",
    "Audit-ready PDF report export",
    "GPS-tagged test data",
    "FTP-75, NEDC, ARTEMIS, custom cycles",
  ],
  softwareRequirements: "Android 8.0 or later",
};

export default function CddgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CddgPageContent />
    </>
  );
}
