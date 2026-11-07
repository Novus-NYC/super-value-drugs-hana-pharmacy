import type { ServiceIcon } from "../services";

interface IconProps {
  className?: string;
}

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M5.5 3h3l1.8 4.5-2.1 1.6a12 12 0 0 0 6.7 6.7l1.6-2.1L21 15.5v3A2.5 2.5 0 0 1 18.5 21 15.5 15.5 0 0 1 3 5.5 2.5 2.5 0 0 1 5.5 3z" />
    </svg>
  );
}

export function PinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M12 21s-6.5-6.2-6.5-11a6.5 6.5 0 0 1 13 0c0 4.8-6.5 11-6.5 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M14 4h6v6M20 4l-9 9M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" />
    </svg>
  );
}

export function ClockIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base} strokeWidth={2}>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17M12 3.5c2.5 2.6 3.8 5.4 3.8 8.5s-1.3 5.9-3.8 8.5c-2.5-2.6-3.8-5.4-3.8-8.5s1.3-5.9 3.8-8.5z" />
    </svg>
  );
}

function DeliveryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M3 7h10v9H3zM13 10h4l3 3v3h-7z" />
      <circle cx="7" cy="17.5" r="1.75" />
      <circle cx="16.5" cy="17.5" r="1.75" />
    </svg>
  );
}

function ConsultIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M4 5h12a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M20 9h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1v3l-3-3" />
    </svg>
  );
}

function PressureIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M12 20s-7-4.6-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.4-7 10-7 10z" />
      <path d="M6 11h3l1.5-3 2 6 1.5-3h4" />
    </svg>
  );
}

function RxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M6 20V4h5a3.5 3.5 0 0 1 0 7H6M11 11l8 9M19 13l-6 7" />
    </svg>
  );
}

function FaxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M7 9V4h10v5M5 9h14a2 2 0 0 1 2 2v6h-4v3H7v-3H3v-6a2 2 0 0 1 2-2z" />
      <path d="M7 15h10" />
    </svg>
  );
}

function NotaryIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M9.5 9l1.7 1.7L14.8 7M8.5 13.8 7 21l5-2.5 5 2.5-1.5-7.2" />
    </svg>
  );
}

function MetroCardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path d="M3 10h18M7 14.5h4" />
    </svg>
  );
}

function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6z" />
      <circle cx="12" cy="12" r="2.75" />
    </svg>
  );
}

function VaccineIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" {...base}>
      <path d="m18 3 3 3M19.5 4.5 15 9M16 8l-8.5 8.5L4 20l3.5-3.5L16 8zM12 10l2 2M9.5 12.5l2 2" />
    </svg>
  );
}

export function ServiceGlyph({ icon, className }: { icon: ServiceIcon; className?: string }) {
  switch (icon) {
    case "delivery":
      return <DeliveryIcon className={className} />;
    case "consult":
      return <ConsultIcon className={className} />;
    case "pressure":
      return <PressureIcon className={className} />;
    case "rx":
      return <RxIcon className={className} />;
    case "fax":
      return <FaxIcon className={className} />;
    case "notary":
      return <NotaryIcon className={className} />;
    case "metrocard":
      return <MetroCardIcon className={className} />;
    case "eye":
      return <EyeIcon className={className} />;
    case "vaccine":
      return <VaccineIcon className={className} />;
  }
}
