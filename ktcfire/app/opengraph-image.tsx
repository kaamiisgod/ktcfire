import { ImageResponse } from "next/og";

export const alt =
  "Krishnatech Consulting & Engineer Services — Fire Protection Engineering";
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
          justifyContent: "space-between",
          backgroundColor: "#141a4e",
          backgroundImage:
            "linear-gradient(to right, rgba(238,240,251,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(238,240,251,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          padding: "72px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 24,
            letterSpacing: 6,
            color: "#F36F21",
            fontWeight: 700,
          }}
        >
          KTC / ENGINEERING SERVICE OUTSOURCING
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 88,
              fontWeight: 800,
              color: "#ffffff",
              letterSpacing: -2,
              lineHeight: 1.05,
            }}
          >
            KRISHNATECH
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              color: "#aeb4d9",
              marginTop: 20,
              maxWidth: 900,
              lineHeight: 1.4,
            }}
          >
            Fire protection design — hydrant, sprinkler, spray, foam,
            detection and suppression systems.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            color: "#aeb4d9",
            letterSpacing: 3,
          }}
        >
          <div style={{ display: "flex" }}>NBC · IS · NFPA · OISD · FM</div>
          <div style={{ display: "flex", color: "#F36F21", fontWeight: 700 }}>
            ktcfire.vercel.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
