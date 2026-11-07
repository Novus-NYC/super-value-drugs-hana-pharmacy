/**
 * Central business config for Super Value Drugs / Hana Pharmacy 하나약국.
 *
 * Every business fact used anywhere on the site comes from here.
 * Unknown values are typed `null` and the UI that would show them hides itself.
 * Items marked `confirmed: false` were read from the storefront signage or a
 * third-party listing and have not yet been confirmed by the owner; the UI
 * shows them with a visible "to be confirmed" marker. Flip the flag (or delete
 * the item) once the owner confirms.
 */

export type Lang = "en" | "ko";
export type Localized = Record<Lang, string>;

export const languages: readonly Lang[] = ["en", "ko"] as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://example.com";

export interface HoursRow {
  /** Day label in both languages. */
  days: Localized;
  /** Short day label for narrow places such as the footer. */
  daysShort: Localized;
  /** Opening time, 24 hour "HH:MM", or null when closed. */
  open: string | null;
  /** Closing time, 24 hour "HH:MM", or null when closed. */
  close: string | null;
  /** Days of the week covered (0 = Sunday) for structured data. */
  weekdays: number[];
}

export interface Hours {
  confirmed: boolean;
  /** Where the displayed hours were read from. */
  source: string;
  rows: HoursRow[];
}

export interface SiteConfig {
  name: string;
  koreanName: string;
  altName: string;
  legalName: string;
  owner: { name: string; role: Localized } | null;
  established: number | null;
  address: {
    /** "29-26 Union Street": number and name joined. */
    street: string;
    /** The Queens-style house number alone, for Korean copy ("유니온 스트리트 29-26"). */
    streetNumber: string;
    streetName: string;
    city: string;
    state: string;
    zip: string;
    neighborhood: string;
    borough: string;
  };
  landmark: Localized;
  phone: { display: string; tel: string };
  fax: { display: string; tel: string } | null;
  email: string | null;
  website: string | null;
  socials: { label: string; url: string }[];
  hours: Hours;
  mapsUrl: string;
  /** The HAN IN TOWN feature that tells the pharmacy's story and supplied the photos. */
  storySource: { label: string; url: string; partner: string; partnerUrl: string };
  images: {
    storefront: { src: string; width: number; height: number; alt: Localized };
    pharmacist: { src: string; width: number; height: number; alt: Localized };
    labels: { src: string; width: number; height: number; alt: Localized };
  };
}

const streetNumber = "29-26";
const streetName = "Union Street";
const streetAddress = `${streetNumber} ${streetName}`;
const cityLine = "Flushing, NY 11354";

export const site: SiteConfig = {
  name: "Super Value Drugs",
  koreanName: "하나약국",
  altName: "Hana Pharmacy",
  legalName: "Hana Pharmacy Inc",
  owner: {
    name: "Myeongha Jo",
    role: { en: "Owner", ko: "대표" },
  },
  // Per the HAN IN TOWN feature. The NPI record is active since 2006.
  established: 2001,
  address: {
    street: streetAddress,
    streetNumber,
    streetName,
    city: "Flushing",
    state: "NY",
    zip: "11354",
    neighborhood: "Flushing",
    borough: "Queens",
  },
  landmark: {
    en: "At the corner of the H Mart parking lot entrance on Union Street",
    ko: "유니온 스트리트 H마트 주차장 입구 모퉁이",
  },
  phone: { display: "(718) 359-3373", tel: "+17183593373" },
  fax: { display: "(718) 321-8647", tel: "+17183218647" },
  email: null,
  website: null,
  socials: [],
  hours: {
    // Read from the window poster. A third-party listing shows 9 AM to 6 PM
    // instead, so the owner needs to confirm before this flag is flipped.
    confirmed: false,
    source: "Storefront window poster",
    rows: [
      {
        days: { en: "Monday to Friday", ko: "월요일 ~ 금요일" },
        daysShort: { en: "Mon to Fri", ko: "월~금" },
        open: "08:30",
        close: "19:00",
        weekdays: [1, 2, 3, 4, 5],
      },
      {
        days: { en: "Saturday", ko: "토요일" },
        daysShort: { en: "Sat", ko: "토" },
        open: "08:30",
        close: "18:00",
        weekdays: [6],
      },
      {
        days: { en: "Sunday and holidays", ko: "일요일 및 공휴일" },
        daysShort: { en: "Sun and holidays", ko: "일, 공휴일" },
        open: null,
        close: null,
        weekdays: [0],
      },
    ],
  },
  mapsUrl: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${streetAddress}, ${cityLine}`,
  )}`,
  storySource: {
    label: "HAN IN TOWN",
    url: "https://hanintownflushing.com/hana-pharmacy",
    partner: "Korean Community Services of Metropolitan New York",
    partnerUrl: "https://www.kcsny.org",
  },
  images: {
    storefront: {
      src: "/images/storefront-union-street.webp",
      width: 2000,
      height: 2500,
      alt: {
        en: "The Super Value Drugs storefront on Union Street: a deep green awning reading Super Value Drugs and 하나약국 in large white letters, a teal-green window frame with a services poster and orange 약 signs, next to the H Mart sign.",
        ko: "유니온 스트리트의 하나약국 매장 전경. 짙은 녹색 차양에 Super Value Drugs와 하나약국이 흰 글씨로 크게 쓰여 있고, 청록색 창틀에 서비스 안내문과 주황색 약 간판이 붙어 있으며 옆에 H마트 간판이 보입니다.",
      },
    },
    pharmacist: {
      src: "/images/pharmacist-counting-tablets.webp",
      width: 1668,
      height: 2500,
      alt: {
        en: "A pharmacist in a white coat counts tablets on a blue counting tray behind the pharmacy counter, with stocked shelves behind him.",
        ko: "흰 가운을 입은 약사가 약국 조제대 뒤에서 파란 계수 트레이 위의 알약을 세고 있고, 뒤로 약품이 채워진 선반이 보입니다.",
      },
    },
    labels: {
      src: "/images/korean-label-rolls.webp",
      width: 1668,
      height: 2500,
      alt: {
        en: "Rolls of colored pharmacy stickers labeled in Korean, including heart, stomach, thyroid, diabetes and blood pressure, hanging at the dispensing counter in front of prescription files and a computer.",
        ko: "심장, 위장, 갑상선, 당뇨, 혈압 등 한글로 표시된 색색의 약국 스티커 롤이 처방 서류와 컴퓨터 앞 조제대에 걸려 있습니다.",
      },
    },
  },
};

/** Full postal address on one line, for maps links and structured data. */
export const fullAddress = `${site.address.street}, ${site.address.city}, ${site.address.state} ${site.address.zip}`;

/** "8:30 AM" style, no leading zeroes (English). */
export function formatTimeEn(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${suffix}`;
}

/** "오전 8:30" style (Korean). */
export function formatTimeKo(time: string): string {
  const [h, m] = time.split(":").map(Number);
  const suffix = h >= 12 ? "오후" : "오전";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${suffix} ${hour12}:${String(m).padStart(2, "0")}`;
}

export function formatTime(time: string, lang: Lang): string {
  return lang === "ko" ? formatTimeKo(time) : formatTimeEn(time);
}

/** Localized "8:30 AM to 7:00 PM" or the closed label. */
export function formatHoursRange(
  row: HoursRow,
  lang: Lang,
  closedLabel: string,
): string {
  if (!row.open || !row.close) return closedLabel;
  return lang === "ko"
    ? `${formatTimeKo(row.open)} ~ ${formatTimeKo(row.close)}`
    : `${formatTimeEn(row.open)} to ${formatTimeEn(row.close)}`;
}

/** Path for a page in the given language. English is the clean root URL. */
export function localePath(lang: Lang, path: string): string {
  const clean = path === "/" ? "" : path.replace(/\/$/, "");
  if (lang === "en") return clean || "/";
  return `/ko${clean}`;
}
