import { ImageResponse } from "next/og";

export const alt = "ChorAI – Prozessautomatisierung für Handwerk & KMU";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a1525",
          color: "#f8fafc",
        }}
      >
        <div style={{ display: "flex", fontSize: 110, fontWeight: 800, letterSpacing: -3 }}>
          <span>Chor</span>
          <span style={{ color: "#3b82f6" }}>AI</span>
        </div>
        <div style={{ display: "flex", marginTop: 24, fontSize: 42, color: "#cbd5e1" }}>
          Prozessautomatisierung für Handwerk & KMU
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: 56,
            fontSize: 28,
            color: "#64748b",
          }}
        >
          <div style={{ display: "flex", width: 48, height: 4, backgroundColor: "#3b82f6", marginRight: 20 }} />
          chorai.de · Schaumburg · Minden-Lübbecke · OWL
        </div>
      </div>
    ),
    size
  );
}
