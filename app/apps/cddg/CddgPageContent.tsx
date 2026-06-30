"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ContactModal from "@/components/ContactModal";

// ── Visual sub-components ────────────────────────────────────────────────────

function DriveCycleVisual() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#06100D 0%,#091411 100%)",
        borderRadius: 24,
        padding: "28px 24px 20px",
        border: "1px solid rgba(52,214,180,0.22)",
        boxShadow: "0 0 60px rgba(52,214,180,0.07)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
        <div>
          <div style={{ fontSize: 11, color: "#34D6B4", letterSpacing: "0.08em" }}>WLTP CLASS 3 · PHASE 4 OF 4</div>
          <div style={{ fontSize: 12, color: "#3A6A5A", marginTop: 3 }}>00:11:22 remaining · 23.2 km covered</div>
        </div>
        <div
          style={{ display: "flex", alignItems: "center", gap: 7, background: "rgba(52,214,180,0.07)", border: "1px solid rgba(52,214,180,0.2)", borderRadius: 999, padding: "5px 12px" }}
        >
          <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D6B4", display: "inline-block", animation: "cddg-live-blink 1.2s infinite" }} />
          <span style={{ fontSize: 11, color: "#34D6B4", letterSpacing: "0.08em" }}>ACTIVE</span>
        </div>
      </div>

      <svg viewBox="0 0 440 152" style={{ width: "100%", height: "auto", display: "block" }}>
        {/* Grid lines */}
        {[14, 54, 107, 148].map((y) => (
          <line key={y} x1="36" y1={y} x2="440" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
        ))}
        {/* Y-axis labels */}
        <text x="30" y="18" fill="#2A5040" fontSize="8.5" textAnchor="end" fontFamily="JetBrains Mono">140</text>
        <text x="30" y="58" fill="#2A5040" fontSize="8.5" textAnchor="end" fontFamily="JetBrains Mono">100</text>
        <text x="30" y="111" fill="#2A5040" fontSize="8.5" textAnchor="end" fontFamily="JetBrains Mono">50</text>
        <text x="30" y="151" fill="#2A5040" fontSize="8.5" textAnchor="end" fontFamily="JetBrains Mono">0</text>
        {/* Phase dividers */}
        {[113, 220, 335].map((x) => (
          <line key={x} x1={x} y1="10" x2={x} y2="148" stroke="rgba(52,214,180,0.07)" strokeWidth="1" strokeDasharray="2,4" />
        ))}
        {/* Phase labels */}
        {[
          { x: 74, label: "LOW" },
          { x: 167, label: "MEDIUM" },
          { x: 278, label: "HIGH" },
          { x: 388, label: "XHIGH" },
        ].map(({ x, label }) => (
          <text key={label} x={x} y="9" fill="rgba(52,214,180,0.28)" fontSize="7.5" textAnchor="middle" fontFamily="JetBrains Mono">{label}</text>
        ))}
        {/* Target speed — teal dashed */}
        <polyline
          points="36,148 48,148 55,128 64,104 73,98 84,98 92,116 98,136 104,148 109,148 119,116 130,98 139,116 144,148 149,148 160,108 170,77 184,77 194,98 202,148 207,148 218,98 230,54 253,54 264,78 274,126 280,148 286,148 298,88 312,54 326,63 336,148 341,148 357,78 370,20 400,20 413,47 425,78 434,103 440,113"
          fill="none"
          stroke="#34D6B4"
          strokeWidth="1.8"
          strokeDasharray="6,4"
          opacity="0.65"
        />
        {/* Actual speed — white animated draw */}
        <polyline
          points="36,148 48,148 55,130 64,102 73,100 84,96 92,118 98,134 104,148 109,148 119,114 130,100 139,118 144,148 149,148 160,106 170,79 184,75 194,100 202,148 207,148 218,96 230,56 253,52 264,80 274,124 280,148 286,148 298,86 312,52 326,65 336,148 341,148 357,76 370,22 400,22 413,45 425,80 434,101 440,116"
          fill="none"
          stroke="#E7EAEE"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeDasharray="1600"
          strokeDashoffset="1600"
          style={{
            animationName: "cddg-draw",
            animationDuration: "4.5s",
            animationTimingFunction: "ease-out",
            animationDelay: "0.4s",
            animationFillMode: "forwards",
          }}
        />
        {/* Current position — pulsing dot */}
        <circle
          cx="440" cy="116" r="5" fill="#34D6B4"
          style={{ animationName: "cddg-pulse-dot", animationDuration: "1.6s", animationTimingFunction: "ease-in-out", animationIterationCount: "infinite" }}
        />
        <circle
          cx="440" cy="116" r="5" fill="none" stroke="#34D6B4" strokeWidth="1.5"
          style={{
            opacity: 0.35,
            animationName: "cddg-pulse-ring",
            animationDuration: "1.6s",
            animationTimingFunction: "ease-out",
            animationIterationCount: "infinite",
            transformBox: "fill-box",
            transformOrigin: "center",
          }}
        />
      </svg>

      {/* Stats row */}
      <div style={{ display: "flex", gap: 20, marginTop: 16, paddingTop: 14, borderTop: "1px solid rgba(52,214,180,0.1)", flexWrap: "wrap" }}>
        {[
          { label: "TARGET", value: "118 km/h", color: "#34D6B4" },
          { label: "ACTUAL", value: "116 km/h", color: "#E7EAEE" },
          { label: "DEVIATION", value: "−1.7%", color: "#84E15D" },
          { label: "DISTANCE", value: "23.2 km", color: "#5A8A7A" },
        ].map(({ label, value, color }) => (
          <div key={label}>
            <div style={{ fontSize: 9, color: "#2A5040", letterSpacing: "0.08em", marginBottom: 4 }}>{label}</div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, color, letterSpacing: "-0.01em" }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function RdeVisual() {
  const r = 62;
  const c = 2 * Math.PI * r; // ≈ 389.6

  const urban = c * 0.34;   // ≈ 132.5
  const rural = c * 0.33;   // ≈ 128.6

  return (
    <div
      style={{
        background: "linear-gradient(160deg,#06100D 0%,#091411 100%)",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(52,214,180,0.22)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}>
        {/* Donut */}
        <div style={{ flexShrink: 0 }}>
          <svg viewBox="0 0 160 160" style={{ width: 160, height: 160 }}>
            {/* Track */}
            <circle cx="80" cy="80" r={r} fill="none" stroke="#061A14" strokeWidth="20" />
            {/* Motorway (fills entire circle, darkest) */}
            <circle cx="80" cy="80" r={r} fill="none" stroke="#093D30" strokeWidth="20" transform="rotate(-90 80 80)" />
            {/* Rural */}
            <circle
              cx="80" cy="80" r={r} fill="none" stroke="#1B7A62" strokeWidth="20"
              strokeDasharray={`0 ${c}`}
              strokeDashoffset={-urban}
              transform="rotate(-90 80 80)"
              style={{
                animationName: "cddg-rde-rural",
                animationDuration: "1.4s",
                animationTimingFunction: "ease-out",
                animationDelay: "0.55s",
                animationFillMode: "both",
              }}
            />
            {/* Urban */}
            <circle
              cx="80" cy="80" r={r} fill="none" stroke="#34D6B4" strokeWidth="20"
              strokeDasharray={`0 ${c}`}
              strokeDashoffset="0"
              transform="rotate(-90 80 80)"
              style={{
                animationName: "cddg-rde-urban",
                animationDuration: "1.2s",
                animationTimingFunction: "ease-out",
                animationDelay: "0.3s",
                animationFillMode: "both",
              }}
            />
            {/* Center text */}
            <text x="80" y="72" textAnchor="middle" fill="#34D6B4" fontSize="22" fontWeight="700" fontFamily="Space Grotesk">82.4</text>
            <text x="80" y="90" textAnchor="middle" fill="#2A7060" fontSize="11" fontFamily="JetBrains Mono">km total</text>
            <text x="80" y="108" textAnchor="middle" fill="#1E9A72" fontSize="9" fontFamily="JetBrains Mono">▲ VALID</text>
          </svg>
        </div>

        {/* Legend */}
        <div style={{ flex: 1, minWidth: 140 }}>
          <div style={{ fontSize: 11, color: "#34D6B4", letterSpacing: "0.08em", marginBottom: 16 }}>RDE TRIP · EURO 6D</div>
          {[
            { label: "URBAN", pct: "34%", color: "#34D6B4", km: "28.0 km" },
            { label: "RURAL", pct: "33%", color: "#1B7A62", km: "27.2 km" },
            { label: "MOTORWAY", pct: "33%", color: "#093D30", km: "27.2 km" },
          ].map(({ label, pct, color, km }) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12 }}>
              <span style={{ width: 10, height: 10, borderRadius: 2, background: color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: 11, color: "#8ABAA8", display: "flex", gap: 8 }}>
                  <span>{label}</span>
                  <span style={{ color }}>{pct}</span>
                </div>
                <div style={{ fontSize: 10, color: "#2A5A46", marginTop: 1 }}>{km}</div>
              </div>
            </div>
          ))}
          <div style={{ marginTop: 14, paddingTop: 12, borderTop: "1px solid rgba(52,214,180,0.1)" }}>
            {[
              ["TEMP", "14–29°C ✓"],
              ["DURATION", "68 min ✓"],
              ["COLD START", "INCLUDED ✓"],
              ["ALTITUDE Δ", "< 100 m ✓"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 10, color: "#3A6A58", marginBottom: 5 }}>
                <span>{k}</span>
                <span style={{ color: "#84E15D" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function EvHybridVisual() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#06100D 0%,#091411 100%)",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(52,214,180,0.22)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ fontSize: 11, color: "#34D6B4", letterSpacing: "0.08em", marginBottom: 20 }}>REESS MONITORING · CHARGE-DEPLETING MODE</div>

      {/* SOC bar */}
      <div style={{ marginBottom: 22 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 8 }}>
          <span style={{ fontSize: 10, color: "#2A5040" }}>STATE OF CHARGE</span>
          <span style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 22, fontWeight: 700, color: "#34D6B4" }}>78%</span>
        </div>
        <div style={{ position: "relative", height: 20, background: "#061A12", borderRadius: 4, overflow: "hidden", border: "1px solid rgba(52,214,180,0.12)" }}>
          <div
            style={{
              position: "absolute",
              top: 0, left: 0, bottom: 0,
              width: "0%",
              background: "linear-gradient(90deg,#1A7A62 0%,#34D6B4 100%)",
              borderRadius: 3,
              animationName: "cddg-soc-fill",
              animationDuration: "2.2s",
              animationTimingFunction: "ease-out",
              animationDelay: "0.4s",
              animationFillMode: "forwards",
            }}
          />
          {[25, 50, 75].map((pct) => (
            <div key={pct} style={{ position: "absolute", top: 0, bottom: 0, left: `${pct}%`, width: 1, background: "rgba(0,0,0,0.5)", zIndex: 1 }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 9, color: "#1A4030", marginTop: 4 }}>
          <span>0%</span><span>25%</span><span>50%</span><span>75%</span><span>100%</span>
        </div>
      </div>

      {/* Metrics grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        {[
          { label: "PACK VOLTAGE", value: "396.2 V" },
          { label: "PACK CURRENT", value: "−42.8 A" },
          { label: "REGEN ENERGY", value: "4.82 kWh" },
          { label: "ENERGY USED", value: "18.3 kWh" },
          { label: "EV RANGE EST.", value: "141 km" },
          { label: "MOTOR TEMP", value: "68°C" },
        ].map(({ label, value }) => (
          <div key={label} style={{ background: "rgba(52,214,180,0.04)", border: "1px solid rgba(52,214,180,0.08)", borderRadius: 10, padding: "10px 12px" }}>
            <div style={{ fontSize: 9, color: "#2A5040", letterSpacing: "0.06em", marginBottom: 5 }}>{label}</div>
            <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 15, fontWeight: 700, color: "#D4EAE4" }}>{value}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ObdLoggerVisual() {
  const pids = [
    { name: "ENGINE_RPM", value: "2,340", unit: "rpm", delay: "0s" },
    { name: "VEHICLE_SPEED", value: "89", unit: "km/h", delay: "0.35s" },
    { name: "MAF_SENSOR", value: "24.8", unit: "g/s", delay: "0.7s" },
    { name: "COOLANT_TEMP", value: "89", unit: "°C", delay: "1.1s" },
    { name: "THROTTLE_POS", value: "31.4", unit: "%", delay: "0.55s" },
    { name: "O2_SENSOR_B1S1", value: "0.742", unit: "V", delay: "0.9s" },
    { name: "NOx_SENSOR", value: "82", unit: "ppm", delay: "1.4s" },
    { name: "FUEL_RATE", value: "6.84", unit: "L/h", delay: "0.2s" },
  ];

  return (
    <div
      style={{
        background: "linear-gradient(160deg,#06100D 0%,#091411 100%)",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(52,214,180,0.22)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div>
          <div style={{ fontSize: 11, color: "#34D6B4", letterSpacing: "0.08em" }}>OBD-II LIVE DATA</div>
          <div style={{ fontSize: 10, color: "#2A5040", marginTop: 3 }}>24 PIDs · 10 Hz · OBDLink MX+ BT</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, background: "rgba(132,225,93,0.07)", border: "1px solid rgba(132,225,93,0.18)", borderRadius: 999, padding: "4px 10px" }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#84E15D", display: "inline-block", animation: "cddg-live-blink 0.9s infinite" }} />
          <span style={{ fontSize: 10, color: "#84E15D", letterSpacing: "0.05em" }}>CONNECTED</span>
        </div>
      </div>

      {/* Column headers */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 80px 50px", gap: 8, padding: "0 4px 8px", borderBottom: "1px solid rgba(52,214,180,0.1)", fontSize: 9, color: "#1E4A38", letterSpacing: "0.08em" }}>
        <span>PARAMETER</span>
        <span style={{ textAlign: "right" }}>VALUE</span>
        <span style={{ textAlign: "right" }}>UNIT</span>
      </div>
      {pids.map(({ name, value, unit, delay }) => (
        <div
          key={name}
          style={{ display: "grid", gridTemplateColumns: "1fr 80px 50px", gap: 8, padding: "7px 4px", borderBottom: "1px solid rgba(255,255,255,0.025)", animationName: "cddg-value-tick", animationDuration: "3.2s", animationIterationCount: "infinite", animationDelay: delay }}
        >
          <span style={{ fontSize: 11, color: "#4A8A72", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{name}</span>
          <span style={{ fontSize: 13, fontWeight: 700, color: "#E7EAEE", textAlign: "right", fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.01em" }}>{value}</span>
          <span style={{ fontSize: 10, color: "#2A5040", textAlign: "right" }}>{unit}</span>
        </div>
      ))}
    </div>
  );
}

function AuditReportVisual() {
  return (
    <div
      style={{
        background: "linear-gradient(160deg,#06100D 0%,#091411 100%)",
        borderRadius: 24,
        padding: 28,
        border: "1px solid rgba(52,214,180,0.22)",
        fontFamily: "'JetBrains Mono',monospace",
      }}
    >
      {/* Doc header */}
      <div style={{ borderBottom: "2px solid rgba(52,214,180,0.28)", paddingBottom: 14, marginBottom: 16 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#34D6B4", fontFamily: "'Space Grotesk',sans-serif", letterSpacing: "-0.01em" }}>CDDG TEST REPORT</div>
            <div style={{ fontSize: 10, color: "#2A5A46", marginTop: 3 }}>WLTP Class 3 · Homologation Grade · v2.4</div>
          </div>
          <div style={{ fontSize: 9, color: "#2A5040", textAlign: "right" }}>
            <div>REF: CDDG-2026-0047</div>
            <div style={{ marginTop: 2 }}>2026-06-30 09:14</div>
          </div>
        </div>
      </div>

      {/* Metadata grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 7, marginBottom: 16 }}>
        {[
          ["VEHICLE", "BMW 320d xDrive"],
          ["VIN (masked)", "WBA8E9C5●●●●●●0"],
          ["TEST CYCLE", "WLTP Class 3"],
          ["AMBIENT TEMP", "22.4°C"],
          ["DISTANCE", "23.27 km"],
          ["DURATION", "30:00 mm:ss"],
          ["FUEL TYPE", "Diesel"],
          ["OBD ADAPTER", "OBDLink MX+"],
        ].map(([k, v]) => (
          <div key={k}>
            <div style={{ fontSize: 8.5, color: "#1E4A36", marginBottom: 2 }}>{k}</div>
            <div style={{ fontSize: 11, color: "#8ABAA2" }}>{v}</div>
          </div>
        ))}
      </div>

      {/* Mini speed chart */}
      <div style={{ background: "rgba(52,214,180,0.04)", border: "1px solid rgba(52,214,180,0.09)", borderRadius: 8, padding: "10px 12px", marginBottom: 14 }}>
        <div style={{ fontSize: 8.5, color: "#1E4A36", marginBottom: 6 }}>SPEED TRACE — TARGET vs MEASURED</div>
        <svg viewBox="0 0 280 38" style={{ width: "100%", height: 38 }}>
          <polyline
            points="0,36 6,36 10,28 16,20 22,16 32,16 38,22 44,32 48,36 52,36 58,24 66,16 72,22 76,36 80,36 88,20 98,12 110,12 116,20 122,36 126,36 134,16 144,6 160,6 166,16 176,30 180,36 186,36 194,12 206,2 224,2 232,8 240,20 244,36 248,36 256,10 268,0 280,2"
            fill="none" stroke="#34D6B4" strokeWidth="1.4" strokeDasharray="4,3" opacity="0.6"
          />
          <polyline
            points="0,36 6,36 10,29 16,19 22,17 32,15 38,23 44,31 48,36 52,36 58,25 66,15 72,23 76,36 80,36 88,19 98,13 110,11 116,21 122,36 126,36 134,14 144,7 160,5 166,17 176,29 180,36 186,36 194,10 206,3 224,1 232,9 240,19 244,36 248,36 256,8 268,1 280,3"
            fill="none" stroke="#D4EAE4" strokeWidth="1.4"
          />
        </svg>
      </div>

      {/* Validation badges */}
      <div style={{ display: "flex", gap: 7, flexWrap: "wrap" }}>
        {["SPEED TRACE ✓", "GPS TRACK ✓", "OBD DATA ✓", "TRIP VALID ✓"].map((s) => (
          <span key={s} style={{ fontSize: 9, padding: "4px 8px", background: "rgba(132,225,93,0.07)", border: "1px solid rgba(132,225,93,0.18)", borderRadius: 4, color: "#84E15D" }}>{s}</span>
        ))}
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
    <section
      className="section-pad"
      style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 50, paddingBottom: 50 }}
    >
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 60, alignItems: "center" }}>
        <div style={{ order: reverse ? 2 : 0 }}>
          <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4", marginBottom: 16 }}>{tag}</div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.025em", color: "#fff", lineHeight: 1.08, marginBottom: 18 }}>{title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#7A9A94", marginBottom: 26 }}>{desc}</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {bullets.map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "#C2D8D2" }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34D6B4", flexShrink: 0, marginTop: 6 }} />
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

export default function CddgPageContent() {
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
        <button
          onClick={() => { closeMenu(); setContactOpen(true); }}
          style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "12px 24px", background: "#34D6B4", color: "#06100D", borderRadius: 999, fontWeight: 700, fontSize: 18, border: "none", cursor: "pointer", fontFamily: "inherit" }}
        >Request Demo →</button>
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
            <button
              onClick={() => setContactOpen(true)}
              style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "9px 17px", background: "#34D6B4", color: "#06100D", borderRadius: 999, fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", fontFamily: "inherit" }}
            >Request Demo →</button>
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
          <div style={{ position: "absolute", top: -80, right: -120, width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,214,180,0.1),transparent 60%)", pointerEvents: "none" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(52,214,180,0.055) 1px,transparent 1px)", backgroundSize: "28px 28px", opacity: 0.6, pointerEvents: "none" }} />

          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 64, alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "7px 15px", border: "1px solid rgba(52,214,180,0.28)", borderRadius: 999, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.06em", color: "#34D6B4", marginBottom: 34 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D6B4", display: "inline-block", animation: "cddg-live-blink 1.5s infinite" }} />
                03 · AUTOMOTIVE TESTING PLATFORM
              </div>
              <h1 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(40px,5.8vw,76px)", lineHeight: 0.96, letterSpacing: "-0.03em", color: "#fff" }}>
                Professional<br />vehicle testing.<br />
                <span style={{ color: "#34D6B4" }}>Now on Android.</span>
              </h1>
              <p style={{ marginTop: 28, fontSize: "clamp(16px,1.9vw,20px)", lineHeight: 1.58, color: "#8A9EA0", maxWidth: "46ch" }}>
                CDDG is the only mobile-native app for homologation-grade vehicle testing — drive cycles, RDE compliance, EV/hybrid protocols, OBD logging, and certification-ready reports. No laptop required.
              </p>
              <div className="hero-ctas" style={{ marginTop: 36 }}>
                <button
                  onClick={() => setContactOpen(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "#34D6B4", color: "#06100D", borderRadius: 999, fontWeight: 700, fontSize: 16, border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >Request Demo Trial →</button>
                <button
                  onClick={() => setContactOpen(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "14px 26px", background: "transparent", color: "#34D6B4", border: "1px solid rgba(52,214,180,0.32)", borderRadius: 999, fontWeight: 600, fontSize: 16, cursor: "pointer", fontFamily: "inherit" }}
                >Enquire About Licensing</button>
              </div>
              <div style={{ marginTop: 40, display: "flex", gap: 10, flexWrap: "wrap", alignItems: "center" }}>
                {["Android 8+", "OBD-II / BLE", "WLTP · RDE · FTP-75", "Audit-Ready PDF"].map((label, i, arr) => (
                  <span key={label} style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
                    <span style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#3A6A5A", letterSpacing: "0.04em" }}>{label}</span>
                    {i < arr.length - 1 && <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#1A3A30", display: "inline-block" }} />}
                  </span>
                ))}
              </div>
            </div>
            <div><DriveCycleVisual /></div>
          </div>
        </header>

        {/* ── SCREENSHOTS ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 10, paddingBottom: 60 }}>
          <div style={{ marginBottom: 36 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4", marginBottom: 12 }}>SEE IT IN ACTION</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(24px,2.8vw,36px)", letterSpacing: "-0.02em", color: "#fff" }}>
              Real app. Real screens.
            </h2>
          </div>

          {/* Horizontal scroll gallery */}
          <div
            style={{
              display: "flex",
              gap: 20,
              overflowX: "auto",
              paddingBottom: 16,
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {[
              { file: "drive-cycle.png",    label: "Drive Cycle",       desc: "WLTP Extra High phase active — real-time speed vs target" },
              { file: "rde-monitoring.png", label: "RDE Monitoring",    desc: "Live urban/rural/motorway split with Euro 6d validity check" },
              { file: "obd-live-data.png",  label: "OBD Live Data",     desc: "24 PIDs at 10 Hz via OBDLink MX+ Bluetooth adapter" },
              { file: "ev-reess.png",       label: "REESS Monitor",     desc: "78% SOC, pack current, regen energy in CD mode" },
              { file: "test-report.png",    label: "Test Complete",     desc: "One-tap PDF export with full audit trail" },
            ].map(({ file, label, desc }) => (
              <div
                key={file}
                style={{ flexShrink: 0, scrollSnapAlign: "start", width: 210 }}
              >
                <div
                  style={{
                    borderRadius: 22,
                    overflow: "hidden",
                    border: "1px solid rgba(52,214,180,0.2)",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.5), 0 0 0 1px rgba(52,214,180,0.08)",
                  }}
                >
                  <Image
                    src={`/assets/cddg/${file}`}
                    alt={label}
                    width={412}
                    height={892}
                    style={{ width: "100%", height: "auto", display: "block" }}
                  />
                </div>
                <div style={{ marginTop: 14, paddingLeft: 4 }}>
                  <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 15, color: "#fff", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#3A7A6A", lineHeight: 1.4 }}>{desc}</div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ marginTop: 20, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#2A5040", textAlign: "center" }}>
            ← SCROLL TO SEE ALL SCREENS →
          </p>
        </section>

        {/* ── WHY CDDG ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4", marginBottom: 14 }}>WHY CDDG IS DIFFERENT</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,40px)", letterSpacing: "-0.025em", color: "#fff", maxWidth: "34ch", margin: "0 auto" }}>
              The first mobile-native homologation platform. There is nothing else like it.
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(256px,1fr))", gap: 20 }}>
            {[
              {
                icon: "📱",
                title: "No laptop. No wires.",
                desc: "Enterprise-grade test workflows that run entirely on a rugged Android tablet in the cabin. Take your lab anywhere.",
              },
              {
                icon: "📋",
                title: "Audit-ready from the first drive",
                desc: "Every data point is timestamped, GPS-tagged, and validated. Export certification-grade PDF reports in a single tap.",
              },
              {
                icon: "⚡",
                title: "Every protocol. One app.",
                desc: "WLTP, RDE, FTP-75, NEDC, EV/hybrid, and custom cycles — all included. No extra modules, no annual add-ons.",
              },
            ].map(({ icon, title, desc }) => (
              <div
                key={title}
                className="card-hover"
                style={{ background: "linear-gradient(160deg,#0C1814 0%,#0A1210 100%)", border: "1px solid rgba(52,214,180,0.14)", borderRadius: 22, padding: "32px 28px" }}
              >
                <div style={{ fontSize: 38, marginBottom: 18 }}>{icon}</div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 21, letterSpacing: "-0.02em", color: "#fff", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#6A8A84" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── FEATURE 01: DRIVE CYCLES ── */}
        <FeatureRow
          tag="FEATURE 01 · DRIVE CYCLE EXECUTION"
          title="Real-time speed guidance for every major protocol"
          desc="CDDG streams the target speed trace to your screen overlaid on your current speed. A single glance tells you if you're on track, ahead, or behind. Phase transitions, hold periods, and acceleration ramps are handled automatically."
          bullets={[
            "WLTP Class 1, 2 and 3 (UN GTR No. 15)",
            "FTP-75, US06, SC03, HWFET",
            "NEDC and modified NEDC",
            "ARTEMIS urban, road and motorway",
            "EPA City and Highway cycles",
            "Custom cycles imported from CSV speed trace",
          ]}
          visual={<DriveCycleVisual />}
        />

        {/* ── FEATURE 02: RDE ── */}
        <FeatureRow
          tag="FEATURE 02 · RDE COMPLIANCE MONITORING"
          title="Real Driving Emissions tracking — live, as you drive"
          desc="CDDG monitors your urban/rural/motorway distribution in real time and alerts you when it risks invalidating the trip. Moving Average Window analysis runs continuously, and all Euro 6d/7 boundary conditions are checked at journey's end."
          bullets={[
            "Live urban / rural / motorway phase split",
            "MAW (Moving Average Window) continuous analysis",
            "Dynamic and extended conditional monitoring",
            "Cold-start inclusion verification",
            "Altitude, temperature and humidity logging",
            "Post-trip validity report with annotated flags",
          ]}
          visual={<RdeVisual />}
          reverse
        />

        {/* ── FEATURE 03: EV / HYBRID ── */}
        <FeatureRow
          tag="FEATURE 03 · EV & HYBRID PROTOCOLS"
          title="EV and hybrid support built in — not bolted on"
          desc="CDDG's EV/hybrid module handles REESS monitoring, SOC correction, charge-depleting and charge-sustaining mode differentiation, and regenerative braking efficiency accounting — out of the box, for both OVC-HEV and NOVC-HEV vehicles."
          bullets={[
            "State of Charge (SOC) monitoring and correction",
            "REESS voltage, current and temperature logging",
            "Charge-depleting (CD) and charge-sustaining (CS) modes",
            "OVC-HEV and NOVC-HEV protocol compliance",
            "Regenerative braking energy accounting",
            "Electric-only range and energy consumption",
          ]}
          visual={<EvHybridVisual />}
        />

        {/* ── FEATURE 04: OBD LOGGING ── */}
        <FeatureRow
          tag="FEATURE 04 · OBD-II & J1939 DATA LOGGING"
          title="100+ PIDs at up to 10 Hz — on any BT or WiFi adapter"
          desc="Connect any ELM327-compatible Bluetooth or WiFi OBD adapter and start logging immediately. CDDG supports the full standard PID library plus custom PIDs in hex, with configurable sample rates, units and scaling factors per channel."
          bullets={[
            "Bluetooth (Classic & BLE) and WiFi OBD adapters",
            "100+ standard Mode 01/02/09 PIDs",
            "Custom PID support — Mode 22 and raw hex input",
            "SAE J1939 for heavy-duty and commercial vehicles",
            "Configurable sample rate up to 10 Hz per channel",
            "Real-time display with rolling min/max/average overlay",
          ]}
          visual={<ObdLoggerVisual />}
          reverse
        />

        {/* ── FEATURE 05: REPORTS ── */}
        <FeatureRow
          tag="FEATURE 05 · AUDIT-READY REPORTS"
          title="One tap from completed drive to certification-ready PDF"
          desc="CDDG generates structured PDF test reports that include all test metadata, GPS traces, OBD channel data, speed trace comparisons, validity flag summaries and mass-per-km calculations — formatted to meet certification submission requirements."
          bullets={[
            "Structured PDF with full test metadata and conditions",
            "GPS trace map with speed overlay",
            "All OBD channels with min / max / average summary",
            "Data validation flags with explanatory annotations",
            "Mass per km (g/km) calculations for RDE emission compliance",
            "Raw CSV export for further post-processing",
          ]}
          visual={<AuditReportVisual />}
        />

        {/* ── HOW IT WORKS ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 30, paddingBottom: 60 }}>
          <div style={{ background: "linear-gradient(155deg,#0C1814 0%,#08100D 65%)", borderRadius: 28, padding: "clamp(36px,4.6vw,62px)", border: "1px solid rgba(52,214,180,0.12)", position: "relative", overflow: "hidden" }}>
            <div style={{ position: "absolute", top: -100, right: -80, width: 380, height: 380, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,214,180,0.1),transparent 65%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(52,214,180,0.04) 1px,transparent 1px)", backgroundSize: "22px 22px", opacity: 0.5, pointerEvents: "none" }} />

            <div style={{ position: "relative" }}>
              <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4", marginBottom: 16 }}>HOW IT WORKS</div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3.2vw,40px)", letterSpacing: "-0.025em", color: "#fff", marginBottom: 50 }}>
                From plug-in to PDF in four steps
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(190px,1fr))", gap: 36 }}>
                {[
                  { n: "01", title: "Connect", desc: "Pair your Bluetooth or WiFi OBD adapter. CDDG auto-detects the protocol and confirms vehicle communication." },
                  { n: "02", title: "Configure", desc: "Select your test protocol, enter vehicle details and ambient conditions. CDDG pre-validates readiness checks." },
                  { n: "03", title: "Drive", desc: "Follow the real-time speed guidance on screen. CDDG simultaneously monitors all channels and flags deviations." },
                  { n: "04", title: "Export", desc: "When the test completes, export your audit-ready PDF and raw CSV data with one tap. Immediately shareable." },
                ].map(({ n, title, desc }) => (
                  <div key={n}>
                    <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 50, lineHeight: 1, color: "transparent", WebkitTextStroke: "1.5px rgba(52,214,180,0.35)", marginBottom: 14 }}>{n}</div>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 21, color: "#fff", marginBottom: 8 }}>{title}</h3>
                    <p style={{ fontSize: 14.5, lineHeight: 1.55, color: "#5A8A80" }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── SUPPORTED STANDARDS ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ textAlign: "center", marginBottom: 38 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4", marginBottom: 12 }}>SUPPORTED STANDARDS</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(24px,2.8vw,36px)", letterSpacing: "-0.02em", color: "#fff" }}>
              Every major homologation protocol
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {[
              "WLTP CLASS 1", "WLTP CLASS 2", "WLTP CLASS 3",
              "RDE EURO 6D", "RDE EURO 7", "FTP-75",
              "US06 SUPPLEMENT", "SC03", "HWFET",
              "NEDC", "ARTEMIS URBAN", "ARTEMIS ROAD", "ARTEMIS MOTORWAY",
              "UN GTR No. 15", "EPA CITY / HWY",
              "SAE J1939 HDV", "OVC-HEV", "NOVC-HEV",
              "CUSTOM CYCLES",
            ].map((s) => (
              <span
                key={s}
                style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11.5, padding: "8px 14px", background: "rgba(52,214,180,0.055)", border: "1px solid rgba(52,214,180,0.16)", borderRadius: 8, color: "#5ABAAA", letterSpacing: "0.04em" }}
              >{s}</span>
            ))}
          </div>
        </section>

        {/* ── WHO IT'S FOR ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 60 }}>
          <div style={{ marginBottom: 40 }}>
            <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 12, letterSpacing: "0.08em", color: "#34D6B4", marginBottom: 14 }}>WHO USES CDDG</div>
            <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(26px,3vw,38px)", letterSpacing: "-0.025em", color: "#fff" }}>
              Built for engineers who test vehicles for a living
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 18 }}>
            {[
              {
                role: "R&D Engineers",
                org: "OEMs & Tier-1 suppliers",
                desc: "Pre-production type approval validation and powertrain calibration in the field — without a laptop in the cabin.",
              },
              {
                role: "Certification Labs",
                org: "Independent test houses",
                desc: "Client vehicle testing without enterprise software overhead. Scale up with demand; pay only for active use.",
              },
              {
                role: "Research Groups",
                org: "Universities & institutes",
                desc: "Academic vehicle energy and emissions research. Gives students access to professional-grade data acquisition.",
              },
              {
                role: "Inspection Agencies",
                org: "Government & regulatory bodies",
                desc: "In-service conformity and RDE spot checks. Portable, rugged, and produces printable compliance evidence on the spot.",
              },
            ].map(({ role, org, desc }) => (
              <div
                key={role}
                className="card-hover"
                style={{ background: "rgba(52,214,180,0.04)", border: "1px solid rgba(52,214,180,0.11)", borderRadius: 20, padding: "26px 22px" }}
              >
                <div style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: 20, color: "#fff", marginBottom: 4 }}>{role}</div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 10.5, color: "#34D6B4", letterSpacing: "0.04em", marginBottom: 14 }}>{org.toUpperCase()}</div>
                <p style={{ fontSize: 15, lineHeight: 1.55, color: "#5A8A80" }}>{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DEMO & LICENSING CTA ── */}
        <section className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", paddingTop: 20, paddingBottom: 90 }}>
          <div
            style={{ background: "linear-gradient(135deg,#0C1E1A 0%,#091410 50%,#0A1814 100%)", border: "1px solid rgba(52,214,180,0.18)", borderRadius: 28, padding: "clamp(44px,5.5vw,72px)", position: "relative", overflow: "hidden", textAlign: "center" }}
          >
            <div style={{ position: "absolute", top: -130, left: "50%", transform: "translateX(-50%)", width: 560, height: 560, borderRadius: "50%", background: "radial-gradient(circle,rgba(52,214,180,0.13),transparent 60%)", pointerEvents: "none" }} />
            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(rgba(52,214,180,0.06) 1px,transparent 1px)", backgroundSize: "22px 22px", opacity: 0.5, pointerEvents: "none" }} />

            <div style={{ position: "relative" }}>
              <Image
                src="/assets/cddg_logo.png"
                alt="CDDG"
                width={80}
                height={80}
                style={{ width: 80, height: 80, objectFit: "contain", margin: "0 auto 28px", display: "block", filter: "drop-shadow(0 0 24px rgba(52,214,180,0.55))" }}
              />
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "6px 14px", background: "rgba(52,214,180,0.08)", border: "1px solid rgba(52,214,180,0.22)", borderRadius: 999, fontFamily: "'JetBrains Mono',monospace", fontSize: 11, color: "#34D6B4", letterSpacing: "0.06em", marginBottom: 26 }}>
                <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#34D6B4", display: "inline-block", animation: "cddg-live-blink 1.5s infinite" }} />
                DEMO TRIALS AVAILABLE · LIMITED SPOTS
              </div>
              <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontWeight: 700, fontSize: "clamp(30px,4vw,54px)", letterSpacing: "-0.03em", color: "#fff", lineHeight: 1.04, marginBottom: 20 }}>
                Try CDDG before you commit
              </h2>
              <p style={{ fontSize: "clamp(15px,1.8vw,19px)", lineHeight: 1.6, color: "#6A9A90", maxWidth: "52ch", margin: "0 auto 38px" }}>
                We offer limited-time demo trials for qualified organisations — enough time to run a full test cycle and evaluate fit for your workflow. Reach out to arrange access or to discuss an enterprise licence for your team.
              </p>
              <div className="hero-ctas" style={{ justifyContent: "center" }}>
                <button
                  onClick={() => setContactOpen(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 32px", background: "#34D6B4", color: "#06100D", borderRadius: 999, fontWeight: 700, fontSize: 17, border: "none", cursor: "pointer", fontFamily: "inherit" }}
                >Request Demo Trial →</button>
                <button
                  onClick={() => setContactOpen(true)}
                  style={{ display: "inline-flex", alignItems: "center", gap: 9, padding: "16px 32px", background: "transparent", color: "#34D6B4", border: "1px solid rgba(52,214,180,0.32)", borderRadius: 999, fontWeight: 600, fontSize: 17, cursor: "pointer", fontFamily: "inherit" }}
                >Licensing Enquiry</button>
              </div>
              <p style={{ marginTop: 26, fontSize: 13, color: "#2A5A4A", fontFamily: "'JetBrains Mono',monospace" }}>
                No credit card. No commitment. We respond within 24 hours.
              </p>
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
                  <a href="https://vizalyze.app" target="_blank" rel="noopener noreferrer" className="footer-link">Vizalyze</a>
                  <Link href="/apps/cddg" className="footer-link" style={{ color: "#34D6B4" }}>CDDG</Link>
                </div>
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono',monospace", fontSize: 11, letterSpacing: "0.08em", color: "#8A94A0", marginBottom: 14 }}>CDDG</div>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, fontSize: 15, fontWeight: 500 }}>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>Request Demo</button>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>Licensing</button>
                  <button onClick={() => setContactOpen(true)} className="footer-link" style={{ background: "none", border: "none", cursor: "pointer", color: "inherit", fontSize: 15, fontWeight: 500, fontFamily: "inherit", textAlign: "left", padding: 0 }}>Contact</button>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 36, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontFamily: "'JetBrains Mono',monospace", fontSize: 12, color: "#3A5050" }}>
            <span>© 2026 Dimeapps · All rights reserved</span>
            <Link href="/" style={{ color: "#34D6B4" }}>← Back to all apps</Link>
          </div>
        </footer>

      </div>
    </>
  );
}
