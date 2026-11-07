import type { Metadata } from "next";
import { localePath, site, siteUrl, type Lang } from "./site";

interface PageMetadataInput {
  lang: Lang;
  title: string;
  description: string;
  /** Language-neutral path, for example "/services". */
  path: string;
  /** Optional absolute or root-relative image. Defaults to the language's OG image route. */
  image?: string;
}

/**
 * Per-route metadata so every page has its own canonical URL, og:url,
 * title, description, image and hreflang alternates.
 */
export function pageMetadata({
  lang,
  title,
  description,
  path,
  image,
}: PageMetadataInput): Metadata {
  const canonical = localePath(lang, path);
  const ogImage = image ?? (lang === "en" ? "/opengraph-image" : "/ko/opengraph-image");
  const siteName =
    lang === "ko" ? `${site.koreanName} ${site.name}` : `${site.name} (${site.altName} ${site.koreanName})`;

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: localePath("en", path),
        ko: localePath("ko", path),
        "x-default": localePath("en", path),
      },
    },
    openGraph: {
      type: "website",
      siteName,
      locale: lang === "ko" ? "ko_KR" : "en_US",
      alternateLocale: lang === "ko" ? ["en_US"] : ["ko_KR"],
      url: canonical,
      title,
      description,
      images: [{ url: ogImage, width: 1200, height: 630, alt: siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export { siteUrl };
