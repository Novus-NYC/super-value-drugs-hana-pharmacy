import "@fontsource-variable/source-sans-3";
import "@fontsource-variable/noto-sans-kr";
import "../globals.css";

import type { Metadata } from "next";
import type { ReactNode } from "react";
import CallBar from "@/lib/components/call-bar";
import SiteFooter from "@/lib/components/site-footer";
import SiteHeader from "@/lib/components/site-header";
import { getDictionary } from "@/lib/i18n";
import { resolveLang, type LangParams } from "@/lib/params";
import { languages, site, siteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const { lang } = await params;
  const t = getDictionary(lang === "ko" ? "ko" : "en");
  return {
    metadataBase: new URL(siteUrl),
    title: t.home.metaTitle,
    description: t.home.metaDescription,
    applicationName: `${site.name} ${site.koreanName}`,
    formatDetection: { telephone: true },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: LangParams;
}) {
  const { lang, t } = await resolveLang(params);

  return (
    <html lang={lang} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        {/* Marks that JavaScript is running before first paint, so scroll
            reveals only hide content when they can also show it again. */}
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-orange-deep focus:px-4 focus:py-3 focus:font-semibold focus:text-white"
        >
          {t.skipToContent}
        </a>
        <SiteHeader lang={lang} t={t} />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter lang={lang} t={t} />
        <CallBar lang={lang} t={t} />
      </body>
    </html>
  );
}
