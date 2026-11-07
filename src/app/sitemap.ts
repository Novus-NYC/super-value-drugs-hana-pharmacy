import type { MetadataRoute } from "next";
import { languages, localePath, siteUrl } from "@/lib/site";

const paths = ["/", "/services", "/about", "/contact"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return paths.flatMap((path) =>
    languages.map((lang) => ({
      url: `${siteUrl}${localePath(lang, path)}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: {
          en: `${siteUrl}${localePath("en", path)}`,
          ko: `${siteUrl}${localePath("ko", path)}`,
        },
      },
    })),
  );
}
