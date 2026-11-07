import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { getDictionary } from "@/lib/i18n";
import { languages, site } from "@/lib/site";
import type { LangParams } from "@/lib/params";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export const alt = `${site.name} ${site.koreanName}`;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

/** Social share image: brand mark, both names and the phone number on awning green. */
export default async function OpenGraphImage({ params }: { params: LangParams }) {
  const { lang } = await params;
  const t = getDictionary(lang === "ko" ? "ko" : "en");

  // Satori needs a TTF/OTF/WOFF (not WOFF2). The static Fontsource package
  // ships one Korean subset file that also covers basic Latin.
  const fontData = await readFile(
    path.join(
      process.cwd(),
      "node_modules/@fontsource/noto-sans-kr/files/noto-sans-kr-korean-700-normal.woff",
    ),
  );

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#0F4D3A",
          color: "#F7F3EA",
          fontFamily: "Noto Sans KR",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 28,
            background: "#2DB38E",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 28,
            top: 0,
            bottom: 0,
            width: 12,
            background: "#E8541E",
            display: "flex",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "64px 72px 64px 112px",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
            <svg width="92" height="92" viewBox="0 0 64 64">
              <rect width="64" height="64" rx="14" fill="#F7F3EA" />
              <path d="M15 31h34v3.5C49 44.2 41.4 51.5 32 51.5S15 44.2 15 34.5V31z" fill="#0F4D3A" />
              <rect x="12.5" y="27.5" width="39" height="5.5" rx="2.75" fill="#0F4D3A" />
              <rect x="23" y="51.5" width="18" height="4" rx="2" fill="#0F4D3A" />
              <path d="M24.5 13.5 38.5 30" stroke="#E8541E" strokeWidth="7" strokeLinecap="round" />
              <circle cx="23.5" cy="12.5" r="6" fill="#E8541E" />
            </svg>
            <div style={{ display: "flex", fontSize: 30, color: "#8FDCC3", letterSpacing: 2 }}>
              {t.brand.tagline.toUpperCase()}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              marginTop: 44,
              lineHeight: 1.05,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "100%",
                fontSize: lang === "ko" ? 128 : 92,
                color: "#FFFFFF",
              }}
            >
              {lang === "ko" ? site.koreanName : site.name}
            </div>
            <div
              style={{
                display: "flex",
                width: "100%",
                fontSize: lang === "ko" ? 64 : 96,
                color: "#E8541E",
                marginTop: 10,
              }}
            >
              {lang === "ko" ? site.name : site.koreanName}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 40,
              fontSize: 34,
              color: "#F7F3EA",
              gap: 28,
            }}
          >
            <span>{site.address.street}, {site.address.city}</span>
            <span style={{ color: "#8FDCC3" }}>{site.phone.display}</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "Noto Sans KR", data: fontData, weight: 700, style: "normal" }],
    },
  );
}
