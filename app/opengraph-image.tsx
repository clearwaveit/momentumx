import { ImageResponse } from "next/og";

// Default share card for every page that does not supply its own image.
export const alt = "MomentumX — digital & AI transformation";
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
          padding: "72px 80px",
          background: "#050505",
          color: "#ffffff",
          fontFamily: "sans-serif"
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44, fontWeight: 700, letterSpacing: -1 }}>
          Momentum<span style={{ color: "#f3ed48" }}>X</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 76, lineHeight: 1.05, letterSpacing: -2, maxWidth: 980 }}>
            technology built around how your business actually works.
          </div>
          <div style={{ display: "flex", marginTop: 36, fontSize: 26, color: "#bdbdbd" }}>
            Digital & AI transformation · Middle East
          </div>
        </div>
        <div style={{ display: "flex", height: 10, width: 160, background: "#f3ed48" }} />
      </div>
    ),
    size
  );
}
