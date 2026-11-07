"use client";

import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Dictionary } from "../i18n";
import { localePath, site, type Lang } from "../site";
import { CloseIcon, MenuIcon, PhoneIcon, PinIcon } from "./icons";
import LangSwitch from "./lang-switch";
import { MortarMark } from "./mark";

interface SiteHeaderProps {
  lang: Lang;
  t: Dictionary;
}

const DESKTOP_QUERY = "(min-width: 1024px)";

/** Everything outside the menu panel that must not take focus while it is open. */
const INERT_SELECTOR = "header, main, footer, [data-callbar], [data-skip]";

function setPageInert(on: boolean) {
  document.querySelectorAll<HTMLElement>(INERT_SELECTOR).forEach((el) => {
    el.inert = on;
  });
}

/**
 * Sticky header plus the mobile menu panel. The panel is rendered as a
 * sibling of the <header>, never inside it, and the header never carries
 * backdrop-filter, filter or transform, so the fixed panel is positioned
 * against the viewport. While the panel is open the rest of the page is
 * inert, so Tab cannot leave the dialog.
 */
export default function SiteHeader({ lang, t }: SiteHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  const links = [
    { href: localePath(lang, "/"), label: t.nav.home },
    { href: localePath(lang, "/services"), label: t.nav.services },
    { href: localePath(lang, "/about"), label: t.nav.about },
    { href: localePath(lang, "/contact"), label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    // The header is inert while the panel is open; lift that before focusing
    // the toggle, since an inert element cannot receive focus.
    setPageInert(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    document.body.style.overflow = "hidden";
    setPageInert(true);
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };
    const media = window.matchMedia(DESKTOP_QUERY);
    const onMedia = (event: MediaQueryListEvent) => {
      if (event.matches) close(false);
    };
    document.addEventListener("keydown", onKey);
    media.addEventListener("change", onMedia);
    return () => {
      document.removeEventListener("keydown", onKey);
      media.removeEventListener("change", onMedia);
      document.body.style.overflow = "";
      setPageInert(false);
    };
  }, [open, close]);

  return (
    <>
      <header
        className={[
          "site-header sticky top-0 z-40 h-header border-b border-transparent bg-canvas",
          scrolled ? "is-scrolled border-line" : "",
        ].join(" ")}
      >
        <div className="mx-auto flex h-full w-full max-w-site items-center justify-between gap-4 px-5 sm:px-8">
          <Link
            href={localePath(lang, "/")}
            className="flex min-h-[2.75rem] items-center gap-3 rounded-sm"
            aria-label={`${site.name} ${site.koreanName}, ${t.nav.home}`}
          >
            <MortarMark className="h-10 w-10 shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold tracking-tight text-green-900">{site.name}</span>
              <span className="font-ko text-sm font-semibold text-green-700" lang="ko">
                {site.koreanName}
              </span>
            </span>
          </Link>

          <nav aria-label={t.nav.menuTitle} className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-sm px-3 py-2 text-base font-semibold text-ink hover:text-green-700"
              >
                {link.label}
              </Link>
            ))}
            <LangSwitch
              lang={lang}
              label={t.otherLangLabel}
              ariaLabel={t.otherLangAria}
              className="ml-1 inline-flex items-center gap-1.5 rounded-sm px-3 py-2 text-base font-semibold text-green-800 hover:text-green-700"
            />
            <a
              href={`tel:${site.phone.tel}`}
              className="ml-3 inline-flex min-h-[2.75rem] items-center gap-2 whitespace-nowrap rounded-md bg-orange-deep px-4 text-base font-semibold text-white hover:bg-orange-hover"
            >
              <PhoneIcon className="h-5 w-5" />
              <span className="tnum">{site.phone.display}</span>
            </a>
          </nav>

          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-orange-deep text-white hover:bg-orange-hover"
              aria-label={t.nav.callFull}
            >
              <PhoneIcon className="h-6 w-6" />
            </a>
            <button
              ref={toggleRef}
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-green-900 text-green-900"
              aria-expanded={open}
              aria-controls={panelId}
              aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
              onClick={() => (open ? close() : setOpen(true))}
            >
              <MenuIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <div
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label={t.nav.menuTitle}
        aria-hidden={!open}
        className={[
          "menu-panel fixed inset-0 z-50 flex flex-col bg-green-900 text-white lg:hidden",
          open ? "is-open visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0",
        ].join(" ")}
      >
        <div className="flex h-header items-center justify-between px-5">
          <span className="flex items-center gap-3">
            <MortarMark className="h-10 w-10" />
            <span className="flex flex-col leading-tight">
              <span className="text-lg font-bold">{site.name}</span>
              <span className="font-ko text-sm font-semibold text-teal-light" lang="ko">
                {site.koreanName}
              </span>
            </span>
          </span>
          <button
            ref={closeRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border-2 border-teal-light/60 text-white"
            aria-label={t.nav.menuClose}
            onClick={() => close()}
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>

        <nav aria-label={t.nav.menuTitle} className="flex flex-1 flex-col overflow-y-auto px-5 pb-8 pt-4">
          <ul className="divide-y divide-white/15 border-y border-white/15">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="flex min-h-[3.5rem] items-center text-2xl font-bold"
                  onClick={() => close(false)}
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
                className="flex min-h-[3.5rem] items-center gap-2.5 text-2xl font-bold text-teal-light"
                onNavigate={() => close(false)}
              />
            </li>
          </ul>

          <div className="mt-8 flex flex-col gap-3">
            <a
              href={`tel:${site.phone.tel}`}
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-3 whitespace-nowrap rounded-md bg-orange-deep px-6 text-xl font-bold text-white hover:bg-orange-hover"
            >
              <PhoneIcon className="h-6 w-6" />
              <span className="tnum">{t.nav.callFull}</span>
            </a>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-[3.5rem] items-center justify-center gap-3 rounded-md border-2 border-teal-light/70 px-6 text-xl font-semibold text-white"
              onClick={() => close(false)}
            >
              <PinIcon className="h-6 w-6" />
              <span>{t.nav.directions}</span>
            </a>
          </div>

          <p className="mt-auto pt-10 text-base text-teal-light">
            {site.address.street}, {site.address.city}, {site.address.state} {site.address.zip}
          </p>
        </nav>
      </div>
    </>
  );
}
