import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name}, ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const bars = [
  { left: 0, width: 420, color: "#ff9d85" },
  { left: 180, width: 480, color: "#9cd8ff" },
  { left: 420, width: 560, color: "#ffd36b" },
];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 80,
        background: "#0f2e28",
        color: "#eaf3ec",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", fontSize: 76, fontWeight: 700 }}>
        <span>{profile.name}</span>
        <span>{profile.role}</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {bars.map((bar) => (
          <div
            key={bar.color}
            style={{
              width: bar.width,
              height: 30,
              marginLeft: bar.left,
              borderRadius: 15,
              background: bar.color,
            }}
          />
        ))}
      </div>
    </div>,
    size,
  );
}
