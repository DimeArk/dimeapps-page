import type { Metadata } from "next";
import CddgPageContent from "./CddgPageContent";

export const metadata: Metadata = {
  title: "CDDG - Vehicle Test Workflow App for Android",
  description:
    "CDDG is an Android workflow app for vehicle test execution: drive cycles, RDE setup, EV/hybrid workflows, OBD/GPS logging, replay, validation, and review-ready audit records. Demo trials available.",
  keywords: [
    "CDDG",
    "vehicle homologation software",
    "RDE testing app",
    "drive cycle testing Android",
    "WLTP test software mobile",
    "automotive OBD logging app",
    "vehicle test workflow software",
    "emission testing app Android",
    "EV range testing app",
    "pre-compliance workflow software",
    "automotive test Android app",
    "Real Driving Emissions app",
    "FTP-75 drive cycle app",
    "NEDC testing software",
    "Euro 6d workflow validation",
    "homologation app",
    "automotive test workflow Android",
    "OBD-II logging app",
    "PEMS data logging mobile",
    "dimeapps CDDG",
  ],
  alternates: { canonical: "https://www.dimeapps.com/apps/cddg" },
  openGraph: {
    title: "CDDG - Vehicle Test Workflows on Android",
    description:
      "Drive cycles, RDE setup, EV/hybrid workflows, OBD/GPS logging, validation, replay, and audit exports on Android.",
    url: "https://www.dimeapps.com/apps/cddg",
    siteName: "Dimeapps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CDDG - Vehicle Test Workflows on Android",
    description:
      "Drive cycles, RDE setup, EV/hybrid workflows, OBD/GPS logging, validation, replay, and audit exports on Android.",
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
    "Vehicle test workflow software for Android - drive cycles, RDE setup, EV/hybrid workflows, OBD/GPS logging, validation, replay, and audit exports.",
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
    "RDE (Real Driving Emissions) Euro 6d and Euro 7 workflow monitoring",
    "EV and hybrid REESS/SOC monitoring",
    "OBD-II and J1939 logging at up to 10 Hz",
    "Review-ready audit records and raw export paths",
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
