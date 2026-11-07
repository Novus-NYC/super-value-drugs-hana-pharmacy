import Link from "next/link";
import type { Dictionary } from "../i18n";
import { localePath, site, type Lang } from "../site";
import { ExternalIcon } from "./icons";
import LangSwitch from "./lang-switch";
import { MortarMark } from "./mark";
import { AddressLines, ConfirmBadge, HoursTable } from "./ui";

interface SiteFooterProps {
  lang: Lang;
  t: Dictionary;
}

export default function SiteFooter({ lang, t }: SiteFooterProps) {
  const links = [
    { href: localePath(lang, "/"), label: t.nav.home },
    { href: localePath(lang, "/services"), label: t.nav.services },
    { href: localePath(lang, "/about"), label: t.nav.about },
    { href: localePath(lang, "/contact"), label: t.nav.contact },
  ];
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-950 text-white">
      <div className="rule-awning h-1.5" aria-hidden="true" />
      <div className="mx-auto w-full max-w-site px-5 py-14 sm:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="flex items-center gap-3">
              <MortarMark className="h-12 w-12" />
              <div className="leading-tight">
                <p className="text-xl font-bold">{site.name}</p>
                <p className="font-ko text-lg font-semibold text-teal-light" lang="ko">
                  {site.koreanName}
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-xs text-base text-teal-light/90">{t.brand.tagline}</p>
            <p className="text-base text-teal-light/90">{t.brand.bilingual}</p>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              {t.footer.addressTitle}
            </h2>
            <AddressLines className="mt-3 text-base" />
            <p className="mt-2 text-base text-white/80">{site.landmark[lang]}</p>
            <h2 className="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              {t.footer.phoneTitle}
            </h2>
            <a
              href={`tel:${site.phone.tel}`}
              className="mt-2 inline-block rounded-sm text-xl font-bold tnum hover:text-teal-light"
            >
              {site.phone.display}
            </a>
            {site.fax ? (
              <p className="mt-1 text-base text-white/80">
                {t.contact.faxTitle}: <span className="tnum">{site.fax.display}</span>
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-4">
            <div className="flex flex-wrap items-center gap-2">
              <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
                {t.footer.hoursTitle}
              </h2>
              {!site.hours.confirmed ? <ConfirmBadge t={t} tone="dark" /> : null}
            </div>
            <HoursTable t={t} lang={lang} tone="dark" compact className="mt-2 text-base" />
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              {t.footer.pagesTitle}
            </h2>
            <ul className="mt-3 space-y-1">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block min-h-[2.75rem] rounded-sm py-2 text-base font-semibold hover:text-teal-light"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <LangSwitch
                  lang={lang}
                  label={t.otherLangLabel}
                  ariaLabel={t.otherLangAria}
                  className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-sm py-2 text-base font-semibold text-teal-light hover:text-white"
                />
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-sm text-white/75 sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {year} {site.legalName}. {t.footer.legal}
          </p>
          <a
            href="https://novusnyc.org"
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-[2.75rem] items-center gap-1.5 rounded-sm font-semibold text-white hover:text-teal-light"
          >
            {t.footer.madeBy}
            <ExternalIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
