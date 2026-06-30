"use client";

import { useState } from "react";
import Image from "next/image";
import AnimatedLogo from "@/components/AnimatedLogo";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />

      <div style={{ minHeight: "100vh", width: "100%", overflowX: "hidden" }}>

        {/* Nav */}
        <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "18px 40px", background: "rgba(11,12,15,0.82)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <Image src="/assets/dimeapps_logo.svg" alt="Dimeapps" width={30} height={30} style={{ height: 30, width: "auto" }} />
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", color: "#fff" }}>dimeapps</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 28, fontSize: 15, fontWeight: 500 }}>
            <a href="#apps" className="nav-link">Apps</a>
            <a href="#studio" className="nav-link">Studio</a>
            <button
              onClick={() => setContactOpen(true)}
              className="nav-link"
              style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 500, fontFamily: "inherit" }}
            >Contact</button>
            <a
              href="https://scoobslive.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 17px", background: "#ED7D31", color: "#fff", borderRadius: 999, fontWeight: 600, fontSize: 15 }}
            >Explore apps</a>
          </div>
        </nav>

        {/* Hero */}
        <header style={{ maxWidth: 1180, margin: "0 auto", padding: "120px 40px 90px" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 15px", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.06em", color: "#ED7D31", marginBottom: 34 }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#ED7D31", display: "inline-block" }} />
            INDEPENDENT SOFTWARE STUDIO
          </div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(44px,7vw,86px)", lineHeight: 0.98, letterSpacing: "-0.03em", color: "#fff", maxWidth: "14ch" }}>
            Small, sharp apps that do one thing well.
          </h1>
          <p style={{ marginTop: 30, fontSize: "clamp(18px,2.2vw,22px)", lineHeight: 1.5, color: "#9AA1A9", maxWidth: "56ch" }}>
            Dimeapps is an independent studio building focused tools — from live meeting transcription to measurement-data analysis to homologation-grade vehicle testing. Three products, one obsession with craft.
          </p>
          <div style={{ marginTop: 40, display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a href="#apps" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "#ED7D31", color: "#fff", borderRadius: 999, fontWeight: 600, fontSize: 16 }}>See the apps →</a>
            <a href="#studio" style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "transparent", color: "#E7EAEE", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 999, fontWeight: 600, fontSize: 16 }}>What we believe</a>
          </div>
        </header>

        {/* Apps */}
        <section id="apps" style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 40px 30px" }}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 20, flexWrap: "wrap", marginBottom: 34 }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(28px,3.6vw,42px)", letterSpacing: "-0.02em", color: "#fff" }}>The apps</h2>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 13, color: "#8A94A0" }}>03 / live products</span>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 22 }}>

            {/* Scoobs Live */}
            <a
              href="https://scoobslive.com"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover"
              style={{ display: "flex", flexDirection: "column", background: "#0C0C0E", borderRadius: 22, padding: 32, minHeight: 380, color: "#fff", position: "relative", overflow: "hidden", border: "1px solid #18181b" }}
            >
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(132,225,93,0.35),transparent 70%)" }} />
              <Image src="/assets/mascots/scoobs-fly.png" alt="" width={118} height={118} style={{ position: "absolute", top: 18, right: 14, width: 118, height: "auto", transform: "rotate(4deg)", filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.4))" }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#84E15D" }}>01 · TRANSCRIPTION</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em", marginTop: "auto" }}>Scoobs Live</h3>
              <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.5, color: "#A8AEB6" }}>Real-time meeting transcription and an AI interview copilot with STAR-method coaching — in 70+ languages.</p>
              <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "5px 10px", border: "1px solid #2A2A2E", borderRadius: 999, color: "#C9CDD3" }}>Live transcripts</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "5px 10px", border: "1px solid #2A2A2E", borderRadius: 999, color: "#C9CDD3" }}>Interview AI</span>
              </div>
              <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 15, color: "#84E15D" }}>Explore Scoobs Live →</div>
            </a>

            {/* Vizalyze */}
            <a
              href="https://vizalyze.app"
              target="_blank"
              rel="noopener noreferrer"
              className="card-hover"
              style={{ display: "flex", flexDirection: "column", background: "#0A0A11", borderRadius: 22, padding: 32, minHeight: 380, color: "#fff", position: "relative", overflow: "hidden", border: "1px solid #1A1726" }}
            >
              <div style={{ position: "absolute", top: -40, right: -40, width: 200, height: 200, borderRadius: "50%", background: "radial-gradient(circle,rgba(106,66,232,0.4),transparent 70%)" }} />
              <div style={{ position: "absolute", bottom: -50, left: -30, width: 160, height: 160, borderRadius: "50%", background: "radial-gradient(circle,rgba(242,79,160,0.22),transparent 70%)" }} />
              <AnimatedLogo size={62} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#B79BFF" }}>02 · DATA ANALYSIS</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em", marginTop: "auto" }}>Vizalyze</h3>
              <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.5, color: "#9499A8" }}>A desktop workbench to load, chart, compare and report on test &amp; measurement data — from CSV and Excel to MDF, TDMS and CAN logs.</p>
              <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "5px 10px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, color: "#C4B5F5" }}>Charts &amp; reports</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "5px 10px", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 999, color: "#C4B5F5" }}>CAN · MDF · CSV</span>
              </div>
              <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 15, color: "#B79BFF" }}>Explore Vizalyze →</div>
            </a>

            {/* CDDG */}
            <a
              href="#contact-cddg"
              onClick={(e) => { e.preventDefault(); setContactOpen(true); }}
              className="card-hover"
              style={{ display: "flex", flexDirection: "column", background: "#0E1418", borderRadius: 22, padding: 32, minHeight: 380, color: "#fff", position: "relative", overflow: "hidden", border: "1px solid #16202a", cursor: "pointer" }}
            >
              <div style={{ position: "absolute", top: -40, right: -40, width: 180, height: 180, borderRadius: "50%", background: "radial-gradient(circle,rgba(40,210,180,0.3),transparent 70%)" }} />
              <Image src="/assets/cddg_logo.png" alt="CDDG logo" width={96} height={96} style={{ position: "absolute", top: 14, right: 14, width: 96, height: 96, objectFit: "contain", filter: "drop-shadow(0 6px 18px rgba(40,210,180,0.4))" }} />
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4" }}>03 · AUTOMOTIVE</div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 30, letterSpacing: "-0.02em", marginTop: "auto" }}>CDDG</h3>
              <p style={{ marginTop: 12, fontSize: 15.5, lineHeight: 1.5, color: "#9BA7AD" }}>Homologation-grade vehicle test workflows for Android — drive cycles, RDE, EV/hybrid, OBD logging and audit-ready reports.</p>
              <div style={{ marginTop: 22, display: "flex", gap: 8, flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "5px 10px", border: "1px solid #1E2A33", borderRadius: 999, color: "#BFC9CE" }}>Dyno · RDE · EV</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, padding: "5px 10px", border: "1px solid #1E2A33", borderRadius: 999, color: "#BFC9CE" }}>Audit reports</span>
              </div>
              <div style={{ marginTop: 20, display: "inline-flex", alignItems: "center", gap: 8, fontWeight: 600, fontSize: 15, color: "#34D6B4" }}>Private beta — contact us →</div>
            </a>

          </div>
        </section>

        {/* Studio / What we believe */}
        <section id="studio" style={{ maxWidth: 1180, margin: "0 auto", padding: "80px 40px 40px" }}>
          <div style={{ background: "linear-gradient(155deg,#191D26 0%,#0E1014 62%)", borderRadius: 28, padding: "clamp(34px,4.6vw,60px)", color: "#fff", position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
            <div style={{ position: "absolute", top: -130, right: -90, width: 440, height: 440, borderRadius: "50%", background: "radial-gradient(circle,rgba(237,125,49,0.2),transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(255,255,255,0.05) 1px,transparent 1px)", backgroundSize: "22px 22px", opacity: 0.45, pointerEvents: "none" }} />
            <div style={{ position: "absolute", right: 18, bottom: -46, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 210, lineHeight: 1, color: "rgba(255,255,255,0.022)", letterSpacing: "-0.05em", pointerEvents: "none", userSelect: "none" }}>dime</div>

            <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(290px,1fr))", gap: "clamp(28px,4vw,54px)", alignItems: "center" }}>
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#ED7D31", marginBottom: 22 }}>
                  <span style={{ width: 20, height: 1, background: "#ED7D31", display: "inline-block" }} />
                  WHAT WE BELIEVE
                </div>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(28px,3.5vw,44px)", letterSpacing: "-0.025em", lineHeight: 1.05 }}>
                  Tools should be <span style={{ color: "#ED7D31" }}>honest</span>, fast, and respect the people using them.
                </h2>
                <p style={{ marginTop: 18, fontSize: 15, lineHeight: 1.6, color: "#9AA1A9", maxWidth: "36ch" }}>Three principles behind every Dimeapps product — no exceptions, no asterisks.</p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 13 }}>
                {[
                  { n: "01", title: "Focused, not bloated", desc: "Each app solves one real problem instead of ten shallow ones." },
                  { n: "02", title: "Your data, your keys", desc: "Local-first storage and bring-your-own-API-keys wherever it makes sense." },
                  { n: "03", title: "Built to be trusted", desc: "From audit trails to no-nonsense privacy, we sweat the parts that matter." },
                ].map(({ n, title, desc }) => (
                  <div
                    key={n}
                    className="belief-hover"
                    style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "20px 22px", borderRadius: 18, background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)" }}
                  >
                    <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 30, lineHeight: 1, color: "transparent", WebkitTextStroke: "1.4px rgba(237,125,49,0.85)", flexShrink: 0, width: 46 }}>{n}</div>
                    <div>
                      <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 600, fontSize: 18 }}>{title}</h4>
                      <p style={{ marginTop: 6, fontSize: 14.5, lineHeight: 1.55, color: "#9AA1A9" }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section style={{ maxWidth: 1180, margin: "0 auto", padding: "60px 40px 40px", textAlign: "center" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: "0.08em", color: "#ED7D31", marginBottom: 14 }}>GET IN TOUCH</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "clamp(26px,3.2vw,38px)", letterSpacing: "-0.025em", color: "#fff", marginBottom: 12 }}>Questions, feedback, or just want to say hi?</h2>
          <p style={{ fontSize: 16, color: "#9AA1A9", marginBottom: 28 }}>We&apos;re a small team and we read every message.</p>
          <button
            onClick={() => setContactOpen(true)}
            style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 28px", background: "#ED7D31", color: "#fff", border: "none", borderRadius: 999, fontWeight: 600, fontSize: 16, cursor: "pointer", fontFamily: "inherit" }}
          >Send us a message →</button>
        </section>

        {/* Footer */}
        <footer style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 40px 60px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 30, flexWrap: "wrap", alignItems: "flex-start", borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 40 }}>
            <div style={{ maxWidth: 320 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
                <Image src="/assets/dimeapps_logo.svg" alt="Dimeapps" width={28} height={28} style={{ height: 28, width: "auto" }} />
                <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 19, letterSpacing: "-0.02em" }}>dimeapps</span>
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#9AA1A9" }}>An independent software studio. Built with care, shipped with intent.</p>
            </div>
            <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>APPS</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <a href="https://scoobslive.com" target="_blank" rel="noopener noreferrer" className="footer-link">Scoobs Live</a>
                  <a href="https://vizalyze.app" target="_blank" rel="noopener noreferrer" className="footer-link">Vizalyze</a>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>CDDG</button>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>LIVE SITES</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <a href="https://scoobslive.com" target="_blank" rel="noopener noreferrer" className="footer-link">scoobslive.com ↗</a>
                  <a href="https://vizalyze.app" target="_blank" rel="noopener noreferrer" className="footer-link">vizalyze.app ↗</a>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "#9AA1A9", fontSize: 15, fontFamily: "inherit", textAlign: "left", padding: 0 }}>CDDG · private beta</button>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>CONNECT</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>Contact us</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 36, fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: "#8A94A0" }}>© 2026 Dimeapps · All rights reserved</div>
        </footer>

      </div>
    </>
  );
}
