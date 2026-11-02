import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Dimeapps handles personal information on dimeapps.com and in its apps, including payments, support and analytics.",
  alternates: { canonical: "https://www.dimeapps.com/privacy" },
};

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;
const h2 = { fontFamily: "'Space Grotesk', sans-serif", fontSize: 22, fontWeight: 700, margin: "36px 0 10px" } as const;
const p = { color: "#9AA1A9", fontSize: 15.5, lineHeight: 1.7, marginBottom: 10 } as const;
const a = { color: "#ED7D31", fontWeight: 600 } as const;

const SECTIONS: { title: string; body: React.ReactNode[] }[] = [
  {
    title: "Who we are",
    body: [
      "Dimeapps is an independent software studio based in British Columbia, Canada. It makes Vizalyze, Scoobs Live and CDDG. This policy covers dimeapps.com and the account, billing and support information we handle for all of our apps. Some apps publish additional, product-specific details, linked below.",
    ],
  },
  {
    title: "What we collect",
    body: [
      "Contact and support: when you use the contact form or email us, we receive your name, email address and message, and use them only to reply.",
      "Accounts: when you create an account in one of our apps, we store your email address and the plan or licence you hold, so we can sign you in and provide what you paid for.",
      "Payments: purchases are processed by Stripe. We receive the payment status, amount, plan and the email on the order. We never see or store your full card number.",
      "Website analytics: dimeapps.com uses Google Analytics to count visits and see which pages and links are used. It records things like pages viewed, approximate location and device type, not your name.",
    ],
  },
  {
    title: "What we do not do",
    body: [
      "We do not sell your personal information, and we do not share it with advertisers.",
    ],
  },
  {
    title: "Service providers we use",
    body: [
      "We rely on a small number of providers to run our services: Stripe (payments), Vercel (website hosting), Supabase (accounts and licensing), Brevo (account and support emails), and Google Analytics (website analytics). They process data on our behalf under their own security and privacy terms, and some of them store data outside Canada, including in the United States.",
    ],
  },
  {
    title: "App-specific details",
    body: [
      <>Vizalyze is a local-first desktop app: your measurement files stay on your computer unless you choose a cloud feature. The <a href="https://vizalyze.app/privacy" style={a}>Vizalyze privacy page</a> explains exactly what cloud sync, report sharing and AI features send.</>,
      "Scoobs Live and CDDG handle account, billing and support information as described on this page.",
    ],
  },
  {
    title: "How long we keep it",
    body: [
      "We keep account information while your account is active, and billing records for as long as tax and accounting rules require. Support emails are kept while they are useful for helping you, then deleted.",
    ],
  },
  {
    title: "Your choices and rights",
    body: [
      <>You can ask to see, correct or delete the personal information we hold about you, or close your account, by emailing <a href="mailto:support@dimeapps.com" style={a}>support@dimeapps.com</a>. We will respond within 30 days. You can block Google Analytics with your browser&apos;s privacy settings or an extension.</>,
    ],
  },
  {
    title: "Changes",
    body: [
      "If we change this policy, we will update the date below and, for significant changes, tell account holders by email or in the app.",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: 820, margin: "0 auto", padding: "120px 24px 80px" }}>
      <a href="/" style={{ ...mono, fontSize: 13, color: "#8A94A0" }}>← dimeapps</a>
      <p style={{ ...mono, fontSize: 12, letterSpacing: "0.08em", color: "#ED7D31", margin: "28px 0 12px" }}>PRIVACY</p>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 14 }}>Privacy Policy</h1>
      <p style={{ ...p, fontSize: 17 }}>Plain-language, and short on purpose. Last updated November 1, 2026.</p>
      {SECTIONS.map((s) => (
        <section key={s.title}>
          <h2 style={h2}>{s.title}</h2>
          {s.body.map((b, i) => <p key={i} style={p}>{b}</p>)}
        </section>
      ))}
      <p style={{ marginTop: 40, color: "#8A94A0", fontSize: 14 }}>
        Dimeapps · British Columbia, Canada · <a href="mailto:support@dimeapps.com" style={{ color: "#C9CED4" }}>support@dimeapps.com</a> · <a href="/billing" style={{ color: "#C9CED4" }}>Billing &amp; charges</a>
      </p>
    </main>
  );
}
