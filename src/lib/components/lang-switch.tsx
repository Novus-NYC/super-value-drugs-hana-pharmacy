"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { Lang } from "../site";
import { GlobeIcon } from "./icons";

interface LangSwitchProps {
  lang: Lang;
  label: string;
  ariaLabel: string;
  className?: string;
  onNavigate?: () => void;
  showIcon?: boolean;
}

/** Strip a leading /en or /ko so the link points at the same page in the other language. */
export function alternatePath(pathname: string, lang: Lang): string {
  const rest = pathname.replace(/^\/(en|ko)(?=\/|$)/, "") || "/";
  if (lang === "en") return rest === "/" ? "/ko" : `/ko${rest}`;
  return rest;
}

export default function LangSwitch({
  lang,
  label,
  ariaLabel,
  className,
  onNavigate,
  showIcon = true,
}: LangSwitchProps) {
  const pathname = usePathname() ?? "/";
  const other: Lang = lang === "en" ? "ko" : "en";

  return (
    <Link
      href={alternatePath(pathname, lang)}
      hrefLang={other}
      aria-label={ariaLabel}
      className={className}
      onClick={onNavigate}
    >
      {showIcon ? <GlobeIcon className="h-5 w-5 shrink-0" /> : null}
      {/* Only the visible label is in the other language; the accessible
          name (aria-label) stays in the page language on the link itself. */}
      <span lang={other}>{label}</span>
    </Link>
  );
}
