import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "MeducateX Community — Surgical Education, Reimagined";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: '"Inter", sans-serif',
          padding: "80px",
        }}
      >
        {/* top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #1d4ed8, #3b82f6)",
          }}
        />
        <div
          style={{
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "0.25em",
            color: "#1d4ed8",
            marginBottom: "24px",
          }}
        >
          MEDUCATEX
        </div>
        <div
          style={{
            fontSize: "56px",
            fontWeight: 800,
            color: "#0a0f1e",
            textAlign: "center",
            lineHeight: 1.1,
            maxWidth: "900px",
          }}
        >
          Surgical education, built for what&apos;s next.
        </div>
        <div
          style={{
            fontSize: "24px",
            color: "#64748b",
            textAlign: "center",
            maxWidth: "720px",
            marginTop: "28px",
            lineHeight: 1.5,
          }}
        >
          Educational infrastructure for the next generation of surgical intelligence.
        </div>
        <div
          style={{
            marginTop: "40px",
            background: "#1d4ed8",
            color: "white",
            fontSize: "16px",
            fontWeight: 600,
            letterSpacing: "0.05em",
            padding: "14px 32px",
            borderRadius: "9999px",
          }}
        >
          community.meducatex.com
        </div>
      </div>
    ),
    { ...size }
  );
}
