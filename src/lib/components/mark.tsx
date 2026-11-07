/**
 * Brand marks drawn for this site. The mortar and pestle is inspired by the
 * Rx sign on the awning; the orange 약 roundel echoes the window signs.
 * Neither copies a third-party trademark.
 */

interface MarkProps {
  className?: string;
  title?: string;
}

export function MortarMark({ className, title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <rect width="64" height="64" rx="14" fill="#0F4D3A" />
      <path
        d="M15 31h34v3.5C49 44.2 41.4 51.5 32 51.5S15 44.2 15 34.5V31z"
        fill="#F7F3EA"
      />
      <rect x="12.5" y="27.5" width="39" height="5.5" rx="2.75" fill="#F7F3EA" />
      <rect x="23" y="51.5" width="18" height="4" rx="2" fill="#F7F3EA" />
      <path
        d="M24.5 13.5 38.5 30"
        stroke="#E8541E"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <circle cx="23.5" cy="12.5" r="6" fill="#E8541E" />
    </svg>
  );
}

export function YakRoundel({ className, title }: MarkProps) {
  return (
    <span
      className={`inline-flex items-center justify-center rounded-full bg-orange text-white font-ko font-bold leading-none select-none ${className ?? ""}`}
      aria-hidden={title ? undefined : true}
      role={title ? "img" : undefined}
      aria-label={title}
      lang="ko"
    >
      약
    </span>
  );
}
