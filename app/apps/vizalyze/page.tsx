import type { Metadata } from "next";
import VizalyzePageContent from "./VizalyzePageContent";

export const metadata: Metadata = {
  title: "Vizalyze - Professional Test Data Analysis for Engineers",
  description:
    "Vizalyze analyzes MDF, TDMS, HDF5, CAN/LIN and 31+ formats with Axy AI, signal processing, standards templates, batch reporting, live monitoring, and local-first data handling. Free to start.",
  keywords: [
    "Vizalyze",
    "MDF file viewer",
    "TDMS viewer",
    "DIAdem alternative",
    "CAN bus analysis tool",
    "CAN LIN analysis",
    "Axy AI",
    "batch reporting software",
    "live test monitoring",
    "engineering standards templates",
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
    title: "Vizalyze - Professional Test Data Analysis for Engineers",
    description:
      "Analyze 31+ engineering data formats with Axy AI, signal processing, CAN/LIN decoding, batch reporting, and local-first workflows.",
    url: "https://www.dimeapps.com/apps/vizalyze",
    siteName: "Dimeapps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizalyze - Professional Test Data Analysis for Engineers",
    description:
      "Analyze 31+ formats with Axy AI, signal processing, CAN/LIN decoding, batch reporting, and local-first workflows.",
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
    "A local-first desktop workbench for MDF, TDMS, HDF5, CAN/LIN and 31+ formats with Axy AI, signal processing, standards templates, batch reporting, live monitoring, and encrypted sync.",
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
    "HDF5, NetCDF, Parquet, MATLAB, CSV, Excel and specialist format packs",
    "CAN/LIN bus decoding with DBC, ARXML, KCD and SYM databases",
    "Axy AI with hosted, bring-your-own-key, and local model options",
    "3D surface charting",
    "FFT, PSD, filtering, smoothing, curve fitting and signal analysis",
    "Run comparison",
    "Standards templates and KPI checks",
    "Batch PPTX/PDF reporting",
    "Live monitoring and SPC",
    "Encrypted cloud sync and report sharing",
    "Data lineage and reproducible workflows",
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
