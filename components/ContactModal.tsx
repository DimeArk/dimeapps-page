"use client";

import { useState } from "react";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) { setStatus("sent"); setForm({ name: "", email: "", message: "" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  return (
    <div
      style={{ position: "fixed", inset: 0, zIndex: 200, background: "rgba(0,0,0,0.7)", backdropFilter: "blur(6px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "20px" }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{ background: "#13141A", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "clamp(28px,4vw,48px)", width: "100%", maxWidth: 500, position: "relative" }}>
        <button
          onClick={onClose}
          style={{ position: "absolute", top: 18, right: 18, background: "rgba(255,255,255,0.07)", border: "none", color: "#9AA1A9", borderRadius: "50%", width: 32, height: 32, cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}
          aria-label="Close"
        >×</button>

        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: "0.08em", color: "#ED7D31", marginBottom: 12 }}>GET IN TOUCH</div>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: 28, letterSpacing: "-0.02em", color: "#fff", marginBottom: 8 }}>Say hello</h2>
        <p style={{ fontSize: 15, color: "#9AA1A9", marginBottom: 28 }}>Feedback, questions, partnerships - we read everything.</p>

        {status === "sent" ? (
          <div style={{ textAlign: "center", padding: "40px 0" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>✓</div>
            <p style={{ color: "#84E15D", fontWeight: 600, fontSize: 18 }}>Message sent!</p>
            <p style={{ color: "#9AA1A9", marginTop: 8 }}>We&apos;ll get back to you soon.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "you@example.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} style={{ display: "block", fontSize: 13, color: "#9AA1A9", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>{label.toUpperCase()}</label>
                <input
                  id={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[id as "name" | "email"]}
                  onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                  style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "11px 14px", color: "#E7EAEE", fontSize: 15, outline: "none", fontFamily: "inherit" }}
                />
              </div>
            ))}
            <div>
              <label htmlFor="message" style={{ display: "block", fontSize: 13, color: "#9AA1A9", marginBottom: 6, fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.05em" }}>MESSAGE</label>
              <textarea
                id="message"
                required
                placeholder="What's on your mind?"
                rows={4}
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                style={{ width: "100%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.12)", borderRadius: 10, padding: "11px 14px", color: "#E7EAEE", fontSize: 15, outline: "none", resize: "vertical", fontFamily: "inherit" }}
              />
            </div>
            {status === "error" && (
              <p style={{ color: "#f87171", fontSize: 14 }}>Something went wrong. Please try again or email us directly.</p>
            )}
            <button
              type="submit"
              disabled={status === "sending"}
              style={{ background: "#ED7D31", color: "#fff", border: "none", borderRadius: 999, padding: "13px 28px", fontWeight: 600, fontSize: 16, cursor: status === "sending" ? "not-allowed" : "pointer", opacity: status === "sending" ? 0.7 : 1, fontFamily: "inherit", marginTop: 4 }}
            >
              {status === "sending" ? "Sending…" : "Send message →"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
