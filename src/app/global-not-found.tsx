import "@fontsource-variable/source-sans-3";
import "@fontsource-variable/noto-sans-kr";
import "./globals.css";

import type { Metadata } from "next";
import CallBar from "@/lib/components/call-bar";
import { YakRoundel } from "@/lib/components/mark";
import SiteFooter from "@/lib/components/site-footer";
import SiteHeader from "@/lib/components/site-header";
import { ButtonLink, Container, Eyebrow } from "@/lib/components/ui";
import { dictionaries, getDictionary } from "@/lib/i18n";
import { languages, localePath, site, siteUrl } from "@/lib/site";

const en = getDictionary("en");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: en.notFound.metaTitle,
  description: en.notFound.text,
  robots: { index: false, follow: true },
};

/**
 * Branded 404 for every unmatched URL in either language tree. It is a
 * standalone document (Next's global-not-found convention), prerendered as
 * static HTML, so it works without JavaScript. It has no route params, so the
 * chrome is English and the body carries both languages.
 */
export default function GlobalNotFound() {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }}
        />
      </head>
      <body className="flex min-h-screen flex-col">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-orange-deep focus:px-4 focus:py-3 focus:font-semibold focus:text-white"
        >
          {en.skipToContent}
        </a>
        <SiteHeader lang="en" t={en} />
        <main id="main" className="flex-1">
          <section className="py-20 sm:py-28">
            <Container className="max-w-prose">
              <YakRoundel className="h-16 w-16 text-3xl" />
              <Eyebrow className="mt-8">404</Eyebrow>
              {languages.map((lang, index) => {
                const t = dictionaries[lang];
                return (
                  <div
                    key={lang}
                    lang={lang}
                    className={index === 0 ? "mt-3" : "mt-8 border-t border-line pt-8"}
                  >
                    {index === 0 ? (
                      <h1 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                        {t.notFound.title}
                      </h1>
                    ) : (
                      <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                        {t.notFound.title}
                      </h2>
                    )}
                    <p className="mt-3 text-lg text-muted">{t.notFound.text}</p>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <ButtonLink href={localePath(lang, "/")} icon="arrow">
                        {t.notFound.home}
                      </ButtonLink>
                      <ButtonLink href={`tel:${site.phone.tel}`} tone="secondary" icon="phone">
                        {site.phone.display}
                      </ButtonLink>
                    </div>
                  </div>
                );
              })}
            </Container>
          </section>
        </main>
        <SiteFooter lang="en" t={en} />
        <CallBar lang="en" t={en} />
      </body>
    </html>
  );
}
