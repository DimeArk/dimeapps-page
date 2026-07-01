"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

// ── Visual sub-components ────────────────────────────────────────────────────

function TranscriptVisual() {
  const lines = [
    { speaker: "Speaker 1", text: "So the main thing I want to cover today is the Q3 rollout timeline.", delay: "0s" },
    { speaker: "Speaker 2", text: "Sounds good — can we start with the blockers on the API side?", delay: "0.4s" },
    { speaker: "Speaker 1", text: "Sure. We're waiting on the auth changes before we can ship staging.", delay: "0.8s" },
    { speaker: "Speaker 2", text: "Got it. I'll follow up with the platform team this afternoon.", delay: "1.2s" },
  ];
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#0C0C0E 0%,#0A0A0B 100%)",
        borderRadius: 24,
        padding: "28px 24px 20px",
        border: "1px solid rgba(132,225,93,0.2)",
        boxShadow: "0 0 60px rgba(132,225,93,0.06)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 11, color: "#84E15D", letterSpacing: "0.08em" }}>LIVE TRANSCRIPT · EN</div>
          <div style={{ fontSize: 12, color: "#556052", marginTop: 3 }}>00:14:02 elapsed · 4 speakers detected</div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(132,225,93,0.08)", border: "1px solid rgba(132,225,93,0.22)", borderRadius: 999, padding: "5px 12px" }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#84E15D", display: "inline-block", animation: "scoobs-blink 1.2s infinite" }} />
          <span style={{ fontSize: 11, color: "#84E15D", letterSpacing: "0.08em" }}>LIVE</span>
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {lines.map(({ speaker, text, delay }) => (
          <div key={speaker + delay} style={{ animationName: "scoobs-fade-in", animationDuration: "0.6s", animationTimingFunction: "ease-out", animationDelay: delay, animationFillMode: "both" }}>
            <div style={{ fontSize: 10.5, color: "#3A6A2E", letterSpacing: "0.06em", marginBottom: 4 }}>{speaker.toUpperCase()}</div>
            <div style={{ fontSize: 13.5, lineHeight: 1.5, color: "#D6DAD4" }}>{text}</div>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 18, paddingTop: 14, borderTop: "1px solid rgba(132,225,93,0.1)", display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["70+ LANGUAGES", "AUTO SPEAKER ID", "EXPORTABLE"].map((t) => (
          <span key={t} style={{ fontSize: 9.5, padding: "4px 9px", background: "rgba(132,225,93,0.06)", border: "1px solid rgba(132,225,93,0.16)", borderRadius: 6, color: "#84E15D", letterSpacing: "0.04em" }}>{t}</span>
        ))}
      </div>
    </div>
  );
}

function InterviewCopilotVisual() {
  const steps = [
    { k: "SITUATION", v: "Set the scene — team, project, stakes." },
    { k: "TASK", v: "What were you responsible for?" },
    { k: "ACTION", v: "The specific steps you took." },
    { k: "RESULT", v: "Outcome, ideally with a number." },
  ];
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#0C0C0E 0%,#0A0A0B 100%)",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(132,225,93,0.2)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ fontSize: 11, color: "#84E15D", letterSpacing: "0.08em", marginBottom: 6 }}>AI INTERVIEW COPILOT</div>
      <div style={{ fontSize: 14, color: "#D6DAD4", marginBottom: 18, lineHeight: 1.5 }}>
        &ldquo;Tell me about a time you handled a conflicting priority.&rdquo;
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {steps.map(({ k, v }, i) => (
          <div key={k} style={{ display: "flex", gap: 12, alignItems: "flex-start", padding: "10px 12px", background: "rgba(132,225,93,0.04)", border: "1px solid rgba(132,225,93,0.1)", borderRadius: 10 }}>
            <span style={{ fontSize: 11, color: "#84E15D", fontWeight: 700, width: 20, flexShrink: 0 }}>{i + 1}</span>
            <div>
              <div style={{ fontSize: 10.5, color: "#84E15D", letterSpacing: "0.06em", marginBottom: 3 }}>{k}</div>
              <div style={{ fontSize: 12.5, color: "#9FA89A", lineHeight: 1.4 }}>{v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function LanguagesVisual() {
  const langs = ["English", "Español", "Français", "Deutsch", "日本語", "中文", "Português", "हिन्दी", "العربية", "한국어", "Italiano", "Nederlands"];
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#0C0C0E 0%,#0A0A0B 100%)",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(132,225,93,0.2)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ fontSize: 11, color: "#84E15D", letterSpacing: "0.08em", marginBottom: 18 }}>70+ LANGUAGES SUPPORTED</div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        {langs.map((l) => (
          <span key={l} style={{ fontSize: 12, padding: "7px 12px", background: "rgba(132,225,93,0.05)", border: "1px solid rgba(132,225,93,0.14)", borderRadius: 8, color: "#B8C4B0" }}>{l}</span>
        ))}
        <span style={{ fontSize: 12, padding: "7px 12px", color: "#556052" }}>+ 58 more</span>
      </div>
    </div>
  );
}

// ── Feature row helper ───────────────────────────────────────────────────────

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
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#84E15D", marginBottom: 16 }}>{tag}</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.08, marginBottom: 18 }}>{title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#8A9488", marginBottom: 26 }}>{desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {bullets.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#C4CCC0" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#84E15D", flexShrink: 0, marginTop: 6 }} />
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

export default function ScoobsLivePageContent() {
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
          href="https://scoobslive.com"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
          style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", background: "#ED7D31", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 18 }}
        >Try Scoobs Live →</a>
      </div>

      <div style={{ minHeight: "100vh", width: "100%", overflowX: "hidden" }}>

        {/* Nav */}
        <nav style={{ position: "sticky", top: 0, zIndex: 50, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 24px", background: "rgba(11,12,15,0.92)", backdropFilter: "blur(12px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11 }}>
            <Image src="/assets/dimeapps_logo.svg" alt="Dimeapps" width={30} height={30} style={{ height: 30, width: "auto" }} />
            <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, letterSpacing: "-0.02em", color: "#fff" }}>dimeapps</span>
          </Link>
          <div className="nav-links-desktop" style={{ alignItems: "center", gap: 28, fontSize: 15, fontWeight: 500 }}>
            <Link href="/#apps" className="nav-link">All Apps</Link>
            <Link href="/#studio" className="nav-link">Studio</Link>
            <button onClick={() => setContactOpen(true)} className="nav-link" style={{ background: "transparent", border: "none", cursor: "pointer", fontSize: 15, fontWeight: 500, fontFamily: "inherit" }}>Contact</button>
            <a
              href="https://scoobslive.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 17px", background: "#ED7D31", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 15 }}
            >Try free →</a>
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
          <div style={{ position: "absolute", top: -80, right: -120, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(132,225,93,0.12),transparent 60%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 15px", border: "1px solid rgba(132,225,93,0.3)", borderRadius: 999, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.06em", color: "#84E15D", marginBottom: 34 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#84E15D", display: "inline-block", animation: "scoobs-blink 1.5s infinite" }} />
                01 · LIVE MEETING TRANSCRIPTION
              </div>
              <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.8vw,76px)", lineHeight: 0.96, letterSpacing: "-0.03em", color: "#fff" }}>
                Every meeting,<br />transcribed live.<br />
                <span style={{ color: "#84E15D" }}>Every interview, coached.</span>
              </h1>
              <p style={{ marginTop: 28, fontSize: "clamp(16px,1.9vw,20px)", lineHeight: 1.58, color: "#8A9488", maxWidth: "46ch" }}>
                Scoobs Live gives you real-time meeting transcription in 70+ languages, plus an AI interview copilot with STAR-method coaching to help you answer with confidence. Free to start, no signup needed.
              </p>
              <div className="hero-ctas" style={{ marginTop: 36 }}>
                <a
                  href="https://scoobslive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "#ED7D31", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 16 }}
                >Try Scoobs Live — free →</a>
                <button
                  onClick={() => setContactOpen(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "transparent", color: "#84E15D", border: "1px solid rgba(132,225,93,0.32)", borderRadius: 999, fontWeight: 600, fontSize: 16, cursor: "pointer", fontFamily: "inherit" }}
                >Ask a question</button>
              </div>
              <div style={{ marginTop: 40, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                {["70+ Languages", "No signup", "Live captions", "AI interview coach"].map((label, i, arr) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#556052", letterSpacing: "0.04em" }}>{label}</span>
                    {i < arr.length - 1 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#2A3A22", display: "inline-block" }} />}
                  </span>
                ))}
              </div>
            </div>
            <div><TranscriptVisual /></div>
          </div>
        </header>

        {/* ── MASCOT STRIP ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 0, paddingBottom: 40 }}>
          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { file: "scoobs-front.png", label: "Ready to listen" },
              { file: "scoobs-wink.png", label: "Nailed that answer" },
              { file: "scoobs-fly.png", label: "Keeping up, live" },
              { file: "scoobs-crouch.png", label: "Focused on the details" },
            ].map(({ file, label }) => (
              <div key={file} style={{ textAlign: "center", width: 130 }}>
                <div style={{ borderRadius: 20, background: "linear-gradient(160deg,#0C0C0E 0%,#0A0A0B 100%)", border: "1px solid rgba(132,225,93,0.16)", padding: 14 }}>
                  <Image src={`/assets/mascots/${file}`} alt={label} width={100} height={100} style={{ width: "100%", height: "auto", display: "block" }} />
                </div>
                <div style={{ marginTop: 10, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#556052" }}>{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WHY SCOOBS LIVE ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#84E15D", marginBottom: 14 }}>WHY SCOOBS LIVE</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.025em", color: "#fff", maxWidth: "34ch", margin: "0 auto" }}>
              Transcription that keeps up, coaching that helps you sound like yourself.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))", gap: 20 }}>
            {[
              { icon: "🎙️", title: "Live, not after the fact", desc: "Captions and transcripts appear as people talk — no waiting for a recording to process." },
              { icon: "🌍", title: "70+ languages, one app", desc: "Run a meeting in Spanish, review it in English. Scoobs Live handles the switch automatically." },
              { icon: "🎯", title: "STAR-method interview coaching", desc: "Live prompts structure your answers around Situation, Task, Action, Result — without sounding scripted." },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-hover"
                style={{ background: "linear-gradient(160deg,#0C0C0E 0%,#0A0A0B 100%)", border: "1px solid rgba(132,225,93,0.14)", borderRadius: 22, padding: "32px 28px" }}
              >
                <div style={{ fontSize: 38, marginBottom: 18 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em", color: "#fff", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#7A8474" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE 01: TRANSCRIPTION ── */}
        <FeatureRow
          tag="FEATURE 01 · LIVE TRANSCRIPTION"
          title="Real-time captions and transcripts for every meeting"
          desc="Scoobs Live listens alongside you and turns speech into text as it happens — with automatic speaker identification, so you always know who said what."
          bullets={[
            "Real-time live captions",
            "Automatic speaker identification",
            "Full session transcript export",
            "Works across your existing meeting tools",
          ]}
          visual={<TranscriptVisual />}
        />

        {/* ── FEATURE 02: INTERVIEW COPILOT ── */}
        <FeatureRow
          tag="FEATURE 02 · AI INTERVIEW COPILOT"
          title="An interview coach that structures your answers live"
          desc="Facing a behavioral question? Scoobs Live's copilot prompts you through the STAR method in real time — Situation, Task, Action, Result — so your answers land with substance, not filler."
          bullets={[
            "STAR-method structure prompts, live",
            "Works for job interviews and practice sessions",
            "Helps you avoid rambling or losing the thread",
            "Private — coaching cues are visible only to you",
          ]}
          visual={<InterviewCopilotVisual />}
          reverse
        />

        {/* ── FEATURE 03: LANGUAGES ── */}
        <FeatureRow
          tag="FEATURE 03 · MULTILINGUAL"
          title="70+ languages, transcribed and understood"
          desc="Global teams and cross-border interviews don't need a separate tool per language. Scoobs Live detects and transcribes in 70+ languages, so the conversation flows naturally."
          bullets={[
            "Automatic language detection",
            "Mixed-language meetings supported",
            "Consistent transcript formatting across languages",
          ]}
          visual={<LanguagesVisual />}
        />

        {/* ── WHO IT'S FOR ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#84E15D", marginBottom: 14 }}>WHO USES SCOOBS LIVE</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.025em", color: "#fff" }}>
              Built for anyone who needs a live record — or a live coach
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {[
              { role: "Job seekers", org: "Interview prep", desc: "Practice behavioral questions with live STAR-method structure, then walk into the real interview prepared." },
              { role: "Remote teams", org: "Meetings & standups", desc: "Never lose a decision or action item — every meeting gets a searchable, exportable transcript." },
              { role: "Recruiters", org: "Screening calls", desc: "Focus on the conversation instead of note-taking; review the transcript afterward." },
              { role: "Students & researchers", org: "Interviews & lectures", desc: "Transcribe interviews and lectures across languages without manual note-taking." },
            ].map(({ role, org, desc }) => (
              <div
                key={role}
                className="card-hover"
                style={{ background: "rgba(132,225,93,0.04)", border: "1px solid rgba(132,225,93,0.12)", borderRadius: 20, padding: "26px 22px" }}
              >
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{role}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#84E15D", letterSpacing: "0.04em", marginBottom: 14 }}>{org.toUpperCase()}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#7A8474" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 90 }}>
          <div
            style={{ background: "linear-gradient(135deg,#111A0E 0%,#0A0A0B 50%,#0E140A 100%)", border: "1px solid rgba(132,225,93,0.18)", borderRadius: 28, padding: "clamp(44px,5.5vw,72px)", position: "relative", overflow: "hidden", textAlign: "center" }}
          >
            <div style={{ position: "absolute", top: -130, left: "50%", transform: "translateX(-50%)", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(132,225,93,0.14),transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "relative" }}>
              <Image
                src="/assets/mascots/scoobs-front.png"
                alt="Scoobs Live"
                width={80}
                height={80}
                style={{ width: 80, height: 80, objectFit: "contain", margin: "0 auto 28px", display: "block", filter: "drop-shadow(0 0 24px rgba(132,225,93,0.5))" }}
              />
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,54px)", letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.04, marginBottom: 20 }}>
                Try Scoobs Live free
              </h2>
              <p style={{ fontSize: "clamp(15px,1.8vw,19px)", lineHeight: 1.6, color: "#8A9488", maxWidth: "52ch", margin: "0 auto 38px" }}>
                No signup required to start. Open a live session and see the transcript appear in real time.
              </p>
              <div className="hero-ctas" style={{ justifyContent: "center" }}>
                <a
                  href="https://scoobslive.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 32px", background: "#ED7D31", color: "#fff", borderRadius: 999, fontWeight: 700, fontSize: 17 }}
                >Try Scoobs Live — free →</a>
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
                  <Link href="/apps/scoobs-live" className="footer-link" style={{ color: "#84E15D" }}>Scoobs Live</Link>
                  <a href="https://vizalyze.app" target="_blank" rel="noopener noreferrer" className="footer-link">Vizalyze</a>
                  <Link href="/apps/cddg" className="footer-link">CDDG</Link>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>SCOOBS LIVE</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <a href="https://scoobslive.com" target="_blank" rel="noopener noreferrer" className="footer-link">Open app ↗</a>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>Contact</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#3A4038" }}>
            <span>© 2026 Dimeapps · All rights reserved</span>
            <Link href="/" style={{ color: "#84E15D" }}>← Back to all apps</Link>
          </div>
        </footer>

      </div>
    </>
  );
}
