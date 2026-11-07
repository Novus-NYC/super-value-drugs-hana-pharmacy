import Link from "next/link";
import type { ReactNode } from "react";
import type { Dictionary } from "../i18n";
import { formatHoursRange, site, type Lang } from "../site";
import { ArrowIcon, ExternalIcon, PhoneIcon } from "./icons";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={["mx-auto w-full max-w-site px-5 sm:px-8", className].filter(Boolean).join(" ")}>
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "green",
}: {
  children: ReactNode;
  className?: string;
  tone?: "green" | "orange" | "cream";
}) {
  const color =
    tone === "orange" ? "text-orange" : tone === "cream" ? "text-teal-light" : "text-green-700";
  return (
    <p
      className={[
        "text-sm font-semibold uppercase tracking-[0.14em]",
        color,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}

type ButtonTone = "primary" | "secondary" | "onDark" | "onDarkSecondary";

const buttonBase =
  "inline-flex min-h-[3.25rem] items-center justify-center gap-2.5 rounded-md px-6 text-lg font-semibold leading-none transition-colors duration-200";

const buttonTones: Record<ButtonTone, string> = {
  primary: "bg-orange text-white hover:bg-orange-deep",
  secondary:
    "border-2 border-green-900 bg-transparent text-green-900 hover:bg-green-900 hover:text-white",
  onDark: "bg-orange text-white hover:bg-orange-deep",
  onDarkSecondary:
    "border-2 border-teal-light/70 bg-transparent text-white hover:bg-white hover:text-green-900",
};

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  tone?: ButtonTone;
  className?: string;
  external?: boolean;
  icon?: "phone" | "arrow" | "external" | "none";
}

export function ButtonLink({
  href,
  children,
  tone = "primary",
  className,
  external,
  icon = "none",
}: ButtonLinkProps) {
  const classes = [buttonBase, buttonTones[tone], className].filter(Boolean).join(" ");
  const glyph =
    icon === "phone" ? (
      <PhoneIcon className="h-5 w-5" />
    ) : icon === "arrow" ? (
      <ArrowIcon className="h-5 w-5" />
    ) : icon === "external" ? (
      <ExternalIcon className="h-5 w-5" />
    ) : null;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {glyph}
        <span>{children}</span>
      </a>
    );
  }
  if (href.startsWith("tel:")) {
    return (
      <a href={href} className={classes}>
        {glyph}
        <span className="tnum">{children}</span>
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      <span>{children}</span>
      {glyph}
    </Link>
  );
}

/** Small, consistent "to be confirmed" marker used wherever unconfirmed data shows. */
export function ConfirmBadge({
  t,
  tone = "light",
  className,
}: {
  t: Dictionary;
  tone?: "light" | "dark";
  className?: string;
}) {
  const styles =
    tone === "dark"
      ? "border-teal-light/50 text-teal-light"
      : "border-orange/50 bg-orange-soft text-orange-deep";
  return (
    <span
      className={[
        "inline-flex items-center gap-1.5 whitespace-nowrap rounded-sm border px-2 py-0.5 text-xs font-semibold uppercase tracking-wide",
        styles,
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      title={t.confirm.badgeAria}
    >
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-current" />
      {t.confirm.badge}
    </span>
  );
}

export function HoursTable({
  t,
  lang,
  tone = "light",
  className,
}: {
  t: Dictionary;
  lang: Lang;
  tone?: "light" | "dark";
  className?: string;
}) {
  const divide = tone === "dark" ? "divide-white/15" : "divide-line";
  const muted = tone === "dark" ? "text-teal-light" : "text-muted";
  return (
    <table className={["w-full border-collapse text-left", className].filter(Boolean).join(" ")}>
      <caption className="sr-only">{t.hours.title}</caption>
      <tbody className={`divide-y ${divide}`}>
        {site.hours.rows.map((row) => {
          const closed = !row.open;
          return (
            <tr key={row.days.en}>
              <th scope="row" className="py-3 pr-4 align-top font-medium">
                {row.days[lang]}
              </th>
              <td
                className={[
                  "py-3 text-right align-top tnum",
                  closed ? muted : "font-semibold",
                ].join(" ")}
              >
                {formatHoursRange(row, lang, t.hours.closed)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export function AddressLines({ className }: { className?: string }) {
  return (
    <address className={["not-italic", className].filter(Boolean).join(" ")}>
      <span className="block">{site.address.street}</span>
      <span className="block">
        {site.address.city}, {site.address.state} {site.address.zip}
      </span>
    </address>
  );
}
