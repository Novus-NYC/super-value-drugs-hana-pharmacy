import type { Localized } from "./site";

export type ServiceIcon =
  | "delivery"
  | "consult"
  | "pressure"
  | "rx"
  | "fax"
  | "notary"
  | "metrocard"
  | "eye"
  | "vaccine";

export interface Service {
  id: string;
  icon: ServiceIcon;
  name: Localized;
  /** One line for the home page overview. */
  short: Localized;
  /** Two or three plain-language sentences for the services page. */
  description: Localized;
  /**
   * false = read from the storefront window poster (or, for vaccines, hinted
   * by public Medicare data) and not yet confirmed by the owner. The UI shows a
   * "to be confirmed" marker until this is true.
   */
  confirmed: boolean;
  source: string;
}

const poster = "Storefront window poster";

/**
 * Exactly the window poster list, plus "ask about vaccines" (public Medicare
 * claims data shows flu shot administration, so the site invites the question
 * rather than listing an immunization menu). Insurance plans are deliberately
 * not listed; the services page only invites visitors to ask.
 */
export const services: Service[] = [
  {
    id: "delivery",
    icon: "delivery",
    name: { en: "Free delivery", ko: "무료 배달" },
    short: {
      en: "Prescriptions brought to your door at no charge.",
      ko: "처방약을 무료로 댁까지 배달해 드립니다.",
    },
    description: {
      en: "The window poster lists free deliveries. Call to ask whether your address is covered and when a delivery can be made. Have your name and the prescription ready so the pharmacy can confirm it quickly.",
      ko: "매장 안내문에 무료 배달이 안내되어 있습니다. 배달 가능 지역과 시간은 전화로 문의해 주세요. 성함과 처방 내용을 미리 준비하시면 빠르게 확인해 드릴 수 있습니다.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "consultation",
    icon: "consult",
    name: { en: "Free consultation", ko: "무료 상담" },
    short: {
      en: "Talk through your medicines with the pharmacist, in English or Korean.",
      ko: "복용 중인 약에 대해 약사와 한국어 또는 영어로 상담하세요.",
    },
    description: {
      en: "Bring your questions about a new prescription, side effects, how and when to take a medicine, or whether two medicines are safe together. The pharmacist speaks English and Korean. There is no charge for asking.",
      ko: "새로 받은 처방약, 부작용, 복용 방법과 시간, 함께 먹어도 되는 약인지 등 궁금한 점을 편하게 물어보세요. 약사가 한국어와 영어로 설명해 드립니다. 상담은 무료입니다.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "blood-pressure",
    icon: "pressure",
    name: { en: "Free blood pressure check", ko: "무료 혈압 측정" },
    short: {
      en: "Stop in for a quick reading between doctor visits.",
      ko: "병원 방문 사이에 들러서 간단히 혈압을 확인하세요.",
    },
    description: {
      en: "A quick blood pressure reading at the pharmacy, free of charge. It is useful between doctor visits or when you start a new blood pressure medicine. Ask at the counter.",
      ko: "약국에서 무료로 혈압을 측정해 드립니다. 병원 방문 사이나 새 혈압약을 시작했을 때 확인하기 좋습니다. 카운터에 말씀해 주세요.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "fast-prescriptions",
    icon: "rx",
    name: { en: "Fast prescription process", ko: "빠른 처방 조제" },
    short: {
      en: "New prescriptions and refills filled without a long wait.",
      ko: "새 처방과 리필을 오래 기다리지 않고 받으실 수 있습니다.",
    },
    description: {
      en: "Your doctor can send a prescription electronically, or you can bring the paper copy. Small independent pharmacies can often fill a prescription while you wait. Call ahead and it can be ready when you arrive.",
      ko: "의사가 처방전을 전자로 보내거나 종이 처방전을 직접 가져오실 수 있습니다. 동네 독립 약국이라 기다리시는 동안 조제가 되는 경우가 많습니다. 미리 전화 주시면 도착하실 때 준비해 둘 수 있습니다.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "copy-fax",
    icon: "fax",
    name: { en: "Copy and fax", ko: "복사 및 팩스" },
    short: {
      en: "Copies and faxes for forms and paperwork.",
      ko: "서류와 양식의 복사와 팩스를 도와드립니다.",
    },
    description: {
      en: "Copying and fax services for insurance forms, medical records and everyday paperwork. Ask at the counter for current pricing.",
      ko: "보험 서류, 진료 기록, 일상 서류의 복사와 팩스 전송을 도와드립니다. 요금은 카운터에 문의해 주세요.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "notary",
    icon: "notary",
    name: { en: "Notary public", ko: "공증 (노터리)" },
    short: {
      en: "Documents notarized in the neighborhood.",
      ko: "동네에서 서류 공증을 받으실 수 있습니다.",
    },
    description: {
      en: "Notary public services for documents that need a witnessed signature. Bring valid photo identification and the unsigned document. Call first to check that a notary is in that day.",
      ko: "서명 공증이 필요한 서류를 위한 노터리 서비스입니다. 유효한 사진 신분증과 서명하지 않은 서류를 가져오세요. 당일 공증 가능 여부는 먼저 전화로 확인해 주세요.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "metrocard",
    icon: "metrocard",
    name: { en: "MetroCard sold here", ko: "메트로카드 판매" },
    short: {
      en: "Pick up a MetroCard with your prescription.",
      ko: "처방약을 찾으면서 메트로카드도 구입하세요.",
    },
    description: {
      en: "MetroCards are sold at the counter, so you can take care of your fare on the same trip. Ask which cards are in stock.",
      ko: "카운터에서 메트로카드를 판매하므로 약국에 오신 김에 교통카드도 해결하실 수 있습니다. 재고가 있는 카드 종류는 문의해 주세요.",
    },
    confirmed: false,
    source: poster,
  },
  {
    id: "dmv-vision",
    icon: "eye",
    name: { en: "DMV vision test", ko: "DMV 시력검사" },
    short: {
      en: "The vision test for your New York driver license.",
      ko: "뉴욕 운전면허용 시력검사를 받으실 수 있습니다.",
    },
    description: {
      en: "A vision test for New York driver license applications and renewals, as advertised on the door. Call to confirm availability, what to bring and any fee before you come in.",
      ko: "출입문에 안내된 대로 뉴욕 운전면허 신청과 갱신에 필요한 시력검사를 제공합니다. 방문 전 가능 여부, 준비물, 비용을 전화로 확인해 주세요.",
    },
    confirmed: false,
    source: "Door sign (DMV vision test / DMV 시력검사)",
  },
  {
    id: "vaccines",
    icon: "vaccine",
    name: { en: "Ask about vaccines", ko: "예방접종 문의" },
    short: {
      en: "Call to ask which vaccines, such as the flu shot, are available.",
      ko: "독감 예방접종 등 접종 가능한 백신은 전화로 문의해 주세요.",
    },
    description: {
      en: "The pharmacy has given flu shots in past seasons. Which vaccines are available changes through the year, so call to ask what is in stock, whether you need an appointment, and what to bring.",
      ko: "이 약국은 과거 독감 예방접종을 시행한 적이 있습니다. 접종 가능한 백신은 시기에 따라 달라지므로 재고, 예약 필요 여부, 준비물을 전화로 문의해 주세요.",
    },
    confirmed: false,
    source: "Public Medicare claims data (influenza vaccine administration); door sign for COVID-19 vaccine",
  },
];
