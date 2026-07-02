import type { Metadata } from "next";
import ScoobsLivePageContent from "./ScoobsLivePageContent";

export const metadata: Metadata = {
  title: "Scoobs Live - AI Meeting Transcription & Interview Copilot",
  description:
    "Scoobs Live gives you real-time meeting transcription in 70+ languages and an AI interview copilot with STAR-method coaching. Free to start, no signup needed.",
  keywords: [
    "Scoobs Live",
    "AI meeting transcription",
    "live meeting transcription app",
    "real-time transcription software",
    "AI interview copilot",
    "STAR method interview coach",
    "meeting notes AI",
    "free meeting transcription",
    "live captions for meetings",
    "interview preparation AI",
    "multilingual transcription app",
    "meeting summary AI",
    "dimeapps Scoobs Live",
  ],
  alternates: { canonical: "https://www.dimeapps.com/apps/scoobs-live" },
  openGraph: {
    title: "Scoobs Live - AI Meeting Transcription & Interview Copilot",
    description:
      "Real-time meeting transcription in 70+ languages, plus an AI interview copilot with STAR-method coaching. Free to start.",
    url: "https://www.dimeapps.com/apps/scoobs-live",
    siteName: "Dimeapps",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scoobs Live - AI Meeting Transcription & Interview Copilot",
    description:
      "Real-time meeting transcription in 70+ languages, plus an AI interview copilot with STAR-method coaching.",
    creator: "@dimeapps",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Scoobs Live",
  applicationCategory: "ProductivityApplication",
  url: "https://scoobslive.com",
  description:
    "Real-time meeting transcription in 70+ languages and an AI interview copilot with STAR-method coaching.",
  author: { "@type": "Organization", name: "Dimeapps", url: "https://www.dimeapps.com" },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    availability: "https://schema.org/InStock",
  },
  featureList: [
    "Real-time live captions and transcripts",
    "70+ language support",
    "AI interview copilot with STAR-method coaching",
    "Meeting summaries and action items",
    "No signup required to try",
  ],
};

export default function ScoobsLivePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScoobsLivePageContent />
    </>
  );
}
