import { ImageResponse } from "next/og";
import { doctor } from "@/data/doctor";

export const runtime = "edge";
export const alt = `${doctor.name} — Laparoscopic surgeon in Gujrat & Mandi Bahauddin`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #011839 0%, #0A2A4E 48%, #143A5C 100%)",
          color: "#F7F5F0",
          fontFamily: "Georgia, serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E6C98A",
            fontFamily: "sans-serif",
          }}
        >
          Laparoscopic & General Surgeon
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, lineHeight: 1.05, maxWidth: 900 }}>
            {doctor.name}
          </div>
          <div
            style={{
              fontSize: 30,
              color: "#E6C98A",
              fontFamily: "sans-serif",
              maxWidth: 820,
            }}
          >
            Precision Surgery. Faster Recovery.
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(247,245,240,0.78)",
              fontFamily: "sans-serif",
              maxWidth: 860,
            }}
          >
            Laparoscopic surgeon in Gujrat · Gallbladder surgery in Mandi
            Bahauddin
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 20,
            color: "rgba(247,245,240,0.7)",
            fontFamily: "sans-serif",
          }}
        >
          <span>Shifa Hospital, Gujrat</span>
          <span>Tarar Hospital, Mandi Bahauddin</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
