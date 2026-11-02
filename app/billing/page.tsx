import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Billing & Support - Charges from DIMEAPPS",
  description:
    "Seeing DIMEAPPS on your card statement? Find out which Dimeapps product the charge is for, how to cancel or get a refund, and how to reach support.",
  alternates: { canonical: "https://www.dimeapps.com/billing" },
};

const mono = { fontFamily: "'JetBrains Mono', monospace" } as const;
const card = { border: "1px solid rgba(255,255,255,0.1)", borderRadius: 18, padding: 26, background: "rgba(255,255,255,0.02)" } as const;
const link = { color: "#ED7D31", fontWeight: 600 } as const;

const ROWS = [
  {
    product: "Vizalyze",
    what: "Desktop app for engineering test data",
    statement: ["DIMEAPPS VIZALYZE", "DIMEAPPS* VIZALYZE"],
    manage: { label: "vizalyze.app/dashboard", href: "https://vizalyze.app/dashboard" },
    policies: [
      { label: "Refund policy", href: "https://vizalyze.app/refund-policy" },
      { label: "Terms", href: "https://vizalyze.app/terms" },
      { label: "Privacy", href: "https://vizalyze.app/privacy" },
    ],
    email: "support@vizalyze.app",
  },
  {
    product: "Scoobs Live",
    what: "AI meeting transcription and interview copilot",
    statement: ["DIMEAPPS SCOOBSLIVE", "DIMEAPPS"],
    manage: { label: "scoobslive.com", href: "https://scoobslive.com" },
    policies: [{ label: "Privacy", href: "/privacy" }],
    email: "support@dimeapps.com",
  },
];

export default function BillingPage() {
  return (
    <main style={{ maxWidth: 980, margin: "0 auto", padding: "120px 24px 80px" }}>
      <a href="/" style={{ ...mono, fontSize: 13, color: "#8A94A0" }}>← dimeapps</a>
      <p style={{ ...mono, fontSize: 12, letterSpacing: "0.08em", color: "#ED7D31", margin: "28px 0 12px" }}>BILLING &amp; SUPPORT</p>
      <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, marginBottom: 18 }}>
        Seeing DIMEAPPS on your statement?
      </h1>
      <p style={{ fontSize: 18, lineHeight: 1.6, color: "#9AA1A9", maxWidth: 680, marginBottom: 44 }}>
        Dimeapps is the independent software studio behind the apps below. Charges appear on card statements under the
        Dimeapps name, followed by the product. Use the table to find which product a charge is for.
      </p>

      <div style={{ display: "grid", gap: 18 }}>
        {ROWS.map((r) => (
          <section key={r.product} style={card}>
            <div style={{ display: "flex", justifyContent: "space-between", gap: 16, flexWrap: "wrap", alignItems: "baseline" }}>
              <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700 }}>{r.product}</h2>
              <span style={{ color: "#9AA1A9", fontSize: 15 }}>{r.what}</span>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginTop: 20, fontSize: 15, lineHeight: 1.6 }}>
              <div>
                <div style={{ ...mono, fontSize: 11, color: "#8A94A0", marginBottom: 6 }}>ON YOUR STATEMENT</div>
                {r.statement.map((s) => <div key={s} style={{ ...mono, fontSize: 14 }}>{s}</div>)}
              </div>
              <div>
                <div style={{ ...mono, fontSize: 11, color: "#8A94A0", marginBottom: 6 }}>MANAGE OR CANCEL</div>
                <a href={r.manage.href} style={link}>{r.manage.label}</a>
              </div>
              <div>
                <div style={{ ...mono, fontSize: 11, color: "#8A94A0", marginBottom: 6 }}>SUPPORT &amp; REFUNDS</div>
                <a href={`mailto:${r.email}`} style={link}>{r.email}</a>
                {r.policies.length > 0 && (
                  <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4, fontSize: 14 }}>
                    {r.policies.map((p) => <a key={p.href} href={p.href} style={{ color: "#C9CED4", textDecoration: "underline" }}>{p.label}</a>)}
                  </div>
                )}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section style={{ ...card, marginTop: 28 }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 20, fontWeight: 700, marginBottom: 10 }}>Don&apos;t recognise a charge?</h2>
        <p style={{ color: "#9AA1A9", fontSize: 15.5, lineHeight: 1.6 }}>
          Email <a href="mailto:billing@dimeapps.com" style={link}>billing@dimeapps.com</a> with the date and amount, before
          disputing it with your bank. We usually answer within one business day and refund any charge made in error.
          Payments are processed securely by Stripe; we never see or store your full card number.
        </p>
      </section>

      <p style={{ marginTop: 40, color: "#8A94A0", fontSize: 14 }}>
        Dimeapps · British Columbia, Canada · <a href="mailto:support@dimeapps.com" style={{ color: "#C9CED4" }}>support@dimeapps.com</a>
      </p>
    </main>
  );
}
