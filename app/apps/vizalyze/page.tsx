import type { Metadata } from "next";
import VizalyzePageContent from "./VizalyzePageContent";

export const metadata: Metadata = {
  title: "Vizalyze — MDF, TDMS & CAN Bus Viewer for Engineers",
  description:
    "Vizalyze is a desktop workbench to load, chart, compare and report on test and measurement data — from CSV and Excel to MDF, TDMS and CAN bus logs. A fast DIAdem alternative. Free to download.",
  keywords: [
    "Vizalyze",
    "MDF file viewer",
    "TDMS viewer",
    "DIAdem alternative",
    "CAN bus analysis tool",
    "measurement data analysis software",
    "test data visualization software",
    "engineering data viewer",
    "MDF4 viewer",
    "signal analysis software",
    "FFT analysis tool",
    "vehicle test data software",
    "dimeapps Vizalyze",
  ],
  alternates: { canonical: "https://www.dimeapps.com/apps/vizalyze" },
  openGraph: {
    title: "Vizalyze — MDF, TDMS & CAN Bus Viewer for Engineers",
    description:
      "Load, chart, compare and report on test and measurement data — from CSV and Excel to MDF, TDMS and CAN bus logs.",
    url: "https://www.dimeapps.com/apps/vizalyze",
    siteName: "Dimeapps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizalyze — MDF, TDMS & CAN Bus Viewer for Engineers",
    description:
      "Load, chart, compare and report on test and measurement data — from CSV and Excel to MDF, TDMS and CAN bus logs.",
    creator: "@dimeapps",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Vizalyze",
  applicationCategory: "BusinessApplication",
  url: "https://vizalyze.app",
  description:
    "A desktop workbench to load, chart, compare and report on test and measurement data — from CSV and Excel to MDF, TDMS and CAN logs.",
  author: { "@type": "Organization", name: "Dimeapps", url: "https://www.dimeapps.com" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "MDF and MDF4 file support",
    "TDMS file support",
    "CAN bus log decoding",
    "CSV and Excel import",
    "3D surface charting",
    "FFT signal analysis",
    "Run comparison",
    "Automated report builder",
  ],
};

export default function VizalyzePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <VizalyzePageContent />
    </>
  );
}
