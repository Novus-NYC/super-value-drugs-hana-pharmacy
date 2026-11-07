import type { Dictionary } from "../i18n";
import { site, type Lang } from "../site";
import { PhoneIcon, PinIcon } from "./icons";
import LangSwitch from "./lang-switch";

interface CallBarProps {
  lang: Lang;
  t: Dictionary;
}

/** Sticky bottom bar on phones: call, directions, language. */
export default function CallBar({ lang, t }: CallBarProps) {
  return (
    <div
      className="print-hidden fixed inset-x-0 bottom-0 z-30 border-t border-line bg-canvas pb-[env(safe-area-inset-bottom,0px)] lg:hidden"
      data-callbar=""
      role="region"
      aria-label={t.nav.call}
    >
      <div className="grid h-callbar grid-cols-[1fr_auto_auto] items-stretch gap-2 px-3 py-2.5">
        <a
          href={`tel:${site.phone.tel}`}
          className="inline-flex items-center justify-center gap-2.5 rounded-md bg-orange-deep px-4 text-lg font-bold text-white hover:bg-orange-hover"
        >
          <PhoneIcon className="h-6 w-6" />
          <span>{t.callBar.call}</span>
          <span className="sr-only tnum">{site.phone.display}</span>
        </a>
        <a
          href={site.mapsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-w-[3.25rem] items-center justify-center gap-2 rounded-md border-2 border-green-900 px-3 text-base font-semibold text-green-900"
          aria-label={t.callBar.directions}
        >
          <PinIcon className="h-6 w-6" />
          <span className="hidden xs:inline">{t.callBar.directions}</span>
        </a>
        <LangSwitch
          lang={lang}
          label={t.otherLangLabel}
          ariaLabel={t.otherLangAria}
          showIcon={false}
          className="inline-flex min-w-[3.25rem] items-center justify-center rounded-md border-2 border-green-900 px-3 text-base font-bold text-green-900"
        />
      </div>
    </div>
  );
}
