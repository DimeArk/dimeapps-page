import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Dimeapps - Small, sharp apps that do one thing well";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 1200,
          height: 630,
          background: "#0B0C0F",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "80px 90px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: -120,
            right: -100,
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(237,125,49,0.25) 0%, transparent 65%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -80,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(106,66,232,0.18) 0%, transparent 65%)",
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 48,
          }}
        >
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              background: "#ED7D31",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 900,
              color: "#fff",
            }}
          >
            d
          </div>
          <span style={{ fontSize: 32, fontWeight: 700, color: "#fff", letterSpacing: "-0.03em" }}>
            dimeapps
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            fontSize: 68,
            fontWeight: 800,
            color: "#fff",
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            maxWidth: 820,
            marginBottom: 28,
          }}
        >
          Small, sharp apps that do one thing well.
        </div>

        {/* Tagline */}
        <div style={{ fontSize: 26, color: "#9AA1A9", maxWidth: 680, lineHeight: 1.4 }}>
          Live transcription · Data analysis · Automotive testing
        </div>

        {/* URL badge */}
        <div
          style={{
            marginTop: 48,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "10px 22px",
            border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: 999,
            fontSize: 20,
            color: "#ED7D31",
            fontFamily: "monospace",
            letterSpacing: "0.04em",
          }}
        >
          dimeapps.com
        </div>
      </div>
    ),
    { ...size }
  );
}
