import type { NextConfig } from "next";

/**
 * Bilingual routing.
 * English lives at the clean root URLs (/, /services, ...) and Korean under /ko.
 * Both trees are rendered by the src/app/[lang] segment: the root URLs are
 * rewritten to the "en" tree, and any direct /en URL is redirected back to the
 * clean root so there is exactly one canonical English URL per page.
 */
const nextConfig: NextConfig = {
  // This PC has another lockfile above the repo; pin the workspace root here.
  outputFileTracingRoot: process.cwd(),
  turbopack: { root: process.cwd() },
  experimental: {
    // Serve src/app/global-not-found.tsx as a fully static 404 document
    // (server-rendered, works without JavaScript) for any unmatched URL.
    globalNotFound: true,
  },
  async redirects() {
    return [
      { source: "/en", destination: "/", permanent: true },
      { source: "/en/:path*", destination: "/:path*", permanent: true },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [],
      afterFiles: [
        { source: "/", destination: "/en" },
        {
          // Everything except the Korean tree, the English tree itself,
          // Next internals and static image files.
          source: "/:path((?!ko/|ko$|en/|en$|_next/|images/).*)",
          destination: "/en/:path",
        },
      ],
      fallback: [],
    };
  },
};

export default nextConfig;
