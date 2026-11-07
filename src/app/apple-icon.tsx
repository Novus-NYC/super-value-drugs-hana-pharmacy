import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Apple touch icon: the mortar and pestle mark on the awning green. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0F4D3A",
        }}
      >
        <svg width="150" height="150" viewBox="0 0 64 64">
          <path d="M15 31h34v3.5C49 44.2 41.4 51.5 32 51.5S15 44.2 15 34.5V31z" fill="#F7F3EA" />
          <rect x="12.5" y="27.5" width="39" height="5.5" rx="2.75" fill="#F7F3EA" />
          <rect x="23" y="51.5" width="18" height="4" rx="2" fill="#F7F3EA" />
          <path d="M24.5 13.5 38.5 30" stroke="#E8541E" strokeWidth="7" strokeLinecap="round" />
          <circle cx="23.5" cy="12.5" r="6" fill="#E8541E" />
        </svg>
      </div>
    ),
    size,
  );
}
