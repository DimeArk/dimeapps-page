"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

// ── Feature row helper ───────────────────────────────────────────────────────

function ScreenshotFrame({ file, alt }: { file: string; alt: string }) {
  return (
    <div
      style={{
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(183,155,255,0.22)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(106,66,232,0.08)",
        background: "#0A0A11",
      }}
    >
      <Image
        src={`/assets/vizalyze/${file}`}
        alt={alt}
        width={960}
        height={600}
        style={{ width: "100%", height: "auto", display: "block" }}
      />
    </div>
  );
}

function FeatureRow({
  tag,
  title,
  desc,
  bullets,
  visual,
  reverse = false,
}: {
  tag: string;
  title: string;
  desc: string;
  bullets: string[];
  visual: React.ReactNode;
  reverse?: boolean;
}) {
  return (
    <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 50, paddingBottom: 50 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center" }}>
        <div style={{ order: reverse ? 2 : 0 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#B79BFF", marginBottom: 16 }}>{tag}</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.08, marginBottom: 18 }}>{title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#8A87A0", marginBottom: 26 }}>{desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {bullets.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#C4BEDB" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#B79BFF", flexShrink: 0, marginTop: 6 }} />
                {f}
              </div>
            ))}
          </div>
        </div>
        <div style={{ order: reverse ? 1 : 0 }}>{visual}</div>
      </div>
    </section>
  );
}

// ── Main page ────────────────────────────────────────────────────────────────

export default function VizalyzePageContent() {
  const [contactOpen, setContactOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* Mobile menu */}
      <div className={`nav-mobile-menu${menuOpen ? " open" : ""}`} role="dialog" aria-modal="true">
        <button
          onClick={closeMenu}
          style={{ position: "absolute", top: 20, right: 20, background: "none", border: "1px solid rgba(255,255,255,0.15)", borderRadius: 10, width: 40, height: 40, color: "#fff", cursor: "pointer", fontSize: 20, display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Close menu"
        >✕</button>
        <Link href="/" className="nav-mobile-link" onClick={closeMenu}>Home</Link>
        <Link href="/#apps" className="nav-mobile-link" onClick={closeMenu}>All Apps</Link>
        <button className="nav-mobile-link" onClick={() => { closeMenu(); setContactOpen(true); }}>Contact</button>
        <a
          href="https://vizalyze.app"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", background: "#6A42E8", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 18 }}
        >Download Vizalyze →</a>
      </div>

      <div style={{ minHeight: "100vh", width: "100%", overflowX: "hidden" }}>

        {/* Nav */}
        <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", background: "rgba(10,10,17,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <Image src="/assets/dimeapps_logo.svg" alt="Dimeapps" width={30} height={30} style={{ height: 30, width: "auto" }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", color: "#fff" }}>dimeapps</span>
          </Link>
          <div className="nav-links-desktop" style={{ alignItems: "center", gap: 28, fontSize: 15, fontWeight: 500 }}>
            <Link href="/#apps" className="nav-link">All Apps</Link>
            <Link href="/#studio" className="nav-link">Studio</Link>
            <button onClick={() => setContactOpen(true)} className="nav-link" style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 500, fontFamily: "inherit" }}>Contact</button>
            <a
              href="https://vizalyze.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 17px", background: "#6A42E8", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 15 }}
            >Download free →</a>
          </div>
          <button className="nav-hamburger" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none">
              <rect width="18" height="2" rx="1" fill="currentColor"/>
              <rect y="6" width="18" height="2" rx="1" fill="currentColor"/>
              <rect y="12" width="12" height="2" rx="1" fill="currentColor"/>
            </svg>
          </button>
        </nav>

        {/* ── HERO ── */}
        <header className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 80, paddingBottom: 70, position: "relative" }}>
          <div style={{ position: "absolute", top: -80, right: -120, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(106,66,232,0.14),transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", bottom: -60, left: -100, width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle,rgba(242,79,160,0.1),transparent 60%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 15px", border: "1px solid rgba(183,155,255,0.3)", borderRadius: 999, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.06em", color: "#B79BFF", marginBottom: 34 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#B79BFF", display: "inline-block" }} />
                02 · MEASUREMENT DATA WORKBENCH
              </div>
              <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.8vw,76px)", lineHeight: 0.96, letterSpacing: "-0.03em", color: "#fff" }}>
                31+ formats, AI,<br />
                <span style={{ color: "#B79BFF" }}>finally readable.</span>
              </h1>
              <p style={{ marginTop: 28, fontSize: "clamp(16px,1.9vw,20px)", lineHeight: 1.58, color: "#8A87A0", maxWidth: "46ch" }}>
                Vizalyze is a local-first desktop app for MDF, TDMS, HDF5, CAN/LIN and 31+ formats. Ask Axy about your data, process signals, compare runs, apply standards templates, and batch-report without surrendering your raw files.
              </p>
              <div className="hero-ctas" style={{ marginTop: 36 }}>
                <a
                  href="https://vizalyze.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "#6A42E8", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 16 }}
                >Download Vizalyze - free →</a>
                <button
                  onClick={() => setContactOpen(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "transparent", color: "#B79BFF", border: "1px solid rgba(183,155,255,0.32)", borderRadius: 999, fontWeight: 600, fontSize: 16, cursor: "pointer", fontFamily: "inherit" }}
                >Ask a question</button>
              </div>
              <div style={{ marginTop: 40, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                {["31+ formats", "Axy AI", "CAN/LIN", "Local-first"].map((label, i, arr) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#5A5470", letterSpacing: "0.04em" }}>{label}</span>
                    {i < arr.length - 1 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#2A2440", display: "inline-block" }} />}
                  </span>
                ))}
              </div>
            </div>
            <div><ScreenshotFrame file="hero-main-window.png" alt="Vizalyze main window with charted measurement data" /></div>
          </div>
        </header>

        {/* ── WHY VIZALYZE ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#B79BFF", marginBottom: 14 }}>WHY VIZALYZE</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.025em", color: "#fff", maxWidth: "36ch", margin: "0 auto" }}>
              A DIAdem alternative built for engineers who need the whole workflow
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))", gap: 20 }}>
            {[
              { icon: "📂", title: "31+ formats, one workbench", desc: "MDF/MF4, TDMS, HDF5, NetCDF, Parquet, MATLAB, CSV, Excel, CAN/LIN and specialist lab formats." },
              { icon: "🤖", title: "Axy AI built in", desc: "Ask about channels, anomalies, filters, report recipes, or chart setup using hosted AI, your own key, or local models." },
              { icon: "📄", title: "Reports without the busywork", desc: "Build repeatable report templates, batch-generate outputs, and share results without emailing raw data." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-hover"
                style={{ background: "linear-gradient(160deg,#0F0C18 0%,#0A0A11 100%)", border: "1px solid rgba(183,155,255,0.14)", borderRadius: 22, padding: "32px 28px" }}
              >
                <div style={{ fontSize: 38, marginBottom: 18 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em", color: "#fff", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#7A7690" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE 01: IMPORT ── */}
        <FeatureRow
          tag="FEATURE 01 · UNIVERSAL IMPORT"
          title="31+ engineering, lab, and automotive formats - no conversion step"
          desc="Point Vizalyze at raw measurement files and start working immediately. Smart import, content detection, channel metadata, units, and specialist packs keep more of the original context intact."
          bullets={[
            "MDF and MDF4 (ASAM) file support",
            "National Instruments TDMS support",
            "HDF5, NetCDF, Parquet, MATLAB, CSV and Excel",
            "Specialist lab, scientific, big-data and pharma format packs",
          ]}
          visual={<ScreenshotFrame file="axy-integration.png" alt="Vizalyze data import and channel integration view" />}
        />

        {/* ── FEATURE 02: COMPARE RUNS ── */}
        <FeatureRow
          tag="FEATURE 02 · AXY AI"
          title="Ask your dataset what to look at next"
          desc="Axy understands loaded channel names, statistics, and health findings. Use it to explain anomalies, suggest filters, draft summaries, or generate repeatable analysis steps."
          bullets={[
            "Hosted AI, bring-your-own-key, or local model options",
            "AI-assisted formulas, filters and chart setup",
            "Raw files stay local unless you choose a cloud workflow",
          ]}
          visual={<ScreenshotFrame file="axy-integration.png" alt="Vizalyze Axy AI analysis view" />}
          reverse
        />

        {/* ── FEATURE 03: 3D SURFACE ── */}
        <FeatureRow
          tag="FEATURE 03 · RUN COMPARISON"
          title="Overlay runs to see what actually changed"
          desc="Load multiple test runs side by side, align them, overlay channels, and inspect deltas. It is built for spotting drift, regressions, and calibration changes without juggling exports."
          bullets={[
            "Multiple alignment modes",
            "Synchronized zoom and pan across charts",
            "Per-channel statistics, deltas and lineage",
          ]}
          visual={<ScreenshotFrame file="compare-runs.png" alt="Vizalyze comparing multiple test runs on the same chart" />}
        />

        {/* ── FEATURE 04: FFT / SIGNAL ANALYSIS ── */}
        <FeatureRow
          tag="FEATURE 04 · SIGNAL ANALYSIS"
          title="FFT and signal analysis built in"
          desc="Run frequency-domain and time-domain analysis directly on imported signals - find noise sources, resonances, trends, and derived channels without exporting to MATLAB or Python first."
          bullets={[
            "FFT, PSD and configurable windowing",
            "Filtering, smoothing, curve fitting and integration",
            "Time and frequency domain side by side",
          ]}
          visual={<ScreenshotFrame file="signal-fft.png" alt="Vizalyze FFT signal analysis view" />}
          reverse
        />

        {/* ── FEATURE 05: DATA HEALTH ── */}
        <FeatureRow
          tag="FEATURE 05 · DATA HEALTH & LINEAGE"
          title="Catch bad data before it wastes an afternoon"
          desc="Vizalyze flags gaps, dropouts and out-of-range values, then tracks load, transform, filter, merge and export steps so results stay reproducible."
          bullets={[
            "Automatic gap and dropout detection",
            "Per-channel range and sanity checks",
            "Data lineage for transformations and derived datasets",
          ]}
          visual={<ScreenshotFrame file="data-health.png" alt="Vizalyze data health check summary" />}
        />

        {/* ── FEATURE 06: REPORTS ── */}
        <FeatureRow
          tag="FEATURE 06 · REPORT BUILDER"
          title="Build the report once, re-run it on every new dataset"
          desc="Lay out charts, tables and annotations in a report template, then point it at new test data and regenerate. Pro workflows can batch-generate PPTX/PDF outputs and share results securely."
          bullets={[
            "Reusable report templates",
            "Mixed charts, tables and text in one layout",
            "Batch reporting and secure report sharing",
          ]}
          visual={<ScreenshotFrame file="report-builder.png" alt="Vizalyze report builder view" />}
          reverse
        />

        {/* ── WHO IT'S FOR ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#B79BFF", marginBottom: 14 }}>WHO USES VIZALYZE</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.025em", color: "#fff" }}>
              Built for engineers working with real measurement data
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {[
              { role: "Automotive test engineers", org: "OEMs & suppliers", desc: "Decode CAN/LIN in MDF/MF4 files, apply EV signal presets, compare runs, and build repeatable reports." },
              { role: "Test & measurement teams", org: "Aerospace & industrial", desc: "Load TDMS and other instrument files into charts, signal processing, live monitoring, and batch reports." },
              { role: "R&D and calibration", org: "Powertrain & controls", desc: "Compare calibration runs, analyze signals, build 3D surfaces, and keep every transformation traceable." },
              { role: "Labs and specialists", org: "Pharma, scientific & big data", desc: "Use extension packs for lab, scientific, pharma, and columnar data formats while keeping raw files local." },
            ].map(({ role, org, desc }) => (
              <div
                key={role}
                className="card-hover"
                style={{ background: "rgba(106,66,232,0.05)", border: "1px solid rgba(183,155,255,0.12)", borderRadius: 20, padding: "26px 22px" }}
              >
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{role}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#B79BFF", letterSpacing: "0.04em", marginBottom: 14 }}>{org.toUpperCase()}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#7A7690" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 90 }}>
          <div
            style={{ background: "linear-gradient(135deg,#160E2E 0%,#0A0A11 50%,#1A0E24 100%)", border: "1px solid rgba(183,155,255,0.18)", borderRadius: 28, padding: "clamp(44px,5.5vw,72px)", position: "relative", overflow: "hidden", textAlign: "center" }}
          >
            <div style={{ position: "absolute", top: -130, left: "50%", transform: "translateX(-50%)", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(106,66,232,0.16),transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,54px)", letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.04, marginBottom: 20 }}>
                Download Vizalyze free
              </h2>
              <p style={{ fontSize: "clamp(15px,1.8vw,19px)", lineHeight: 1.6, color: "#8A87A0", maxWidth: "52ch", margin: "0 auto 38px" }}>
                No credit card required. Load your first MDF, TDMS, CAN/LIN, CSV, Excel, or specialist format and start analyzing in minutes.
              </p>
              <div className="hero-ctas" style={{ justifyContent: "center" }}>
                <a
                  href="https://vizalyze.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 32px", background: "#6A42E8", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 17 }}
                >Download Vizalyze - free →</a>
              </div>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 10, paddingBottom: 50 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 30, flexWrap: "wrap", alignItems: "flex-start", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 40 }}>
            <div style={{ maxWidth: 310 }}>
              <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                <Image src="/assets/dimeapps_logo.svg" alt="Dimeapps" width={28} height={28} style={{ height: 28, width: "auto" }} />
                <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em" }}>dimeapps</span>
              </Link>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#9AA1A9" }}>An independent software studio. Built with care, shipped with intent.</p>
            </div>
            <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>APPS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <a href="https://scoobslive.com" target="_blank" rel="noopener noreferrer" className="footer-link">Scoobs Live</a>
                  <Link href="/apps/vizalyze" className="footer-link" style={{ color: "#B79BFF" }}>Vizalyze</Link>
                  <Link href="/apps/cddg" className="footer-link">CDDG</Link>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>VIZALYZE</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <a href="https://vizalyze.app" target="_blank" rel="noopener noreferrer" className="footer-link">Open app ↗</a>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>Contact</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#3A3550" }}>
            <span>© 2026 Dimeapps · All rights reserved</span>
            <Link href="/" style={{ color: "#B79BFF" }}>← Back to all apps</Link>
          </div>
        </footer>

      </div>
    </>
  );
}
