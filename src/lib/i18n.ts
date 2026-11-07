import type { Lang } from "./site";

/**
 * Every visible string on the site. The English object defines the shape and
 * the Korean object must provide every key (checked by the Dictionary type).
 * Korean copy uses the polite formal register (합니다체) for body text and
 * concise noun phrases for labels.
 */
const en = {
  langName: "English",
  otherLangLabel: "한국어",
  otherLangAria: "View this page in Korean",
  skipToContent: "Skip to content",
  nav: {
    home: "Home",
    services: "Services",
    about: "About",
    contact: "Find us",
    call: "Call",
    callFull: "Call (718) 359-3373",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    menuTitle: "Menu",
    directions: "Get directions",
    language: "Language",
  },
  brand: {
    tagline: "Community pharmacy in Flushing, Queens",
    bilingual: "English and Korean spoken",
  },
  confirm: {
    badge: "To be confirmed",
    badgeAria: "To be confirmed with the pharmacy",
    hoursNote:
      "Hours are taken from the storefront sign and are being confirmed with the pharmacy. Please call before a special trip.",
    servicesNote:
      "These services are listed on the pharmacy's own window and are being confirmed with the owner. Call to check availability before you come in.",
  },
  hours: {
    title: "Hours",
    closed: "Closed",
    today: "Today",
  },
  home: {
    metaTitle: "Super Value Drugs | Hana Pharmacy 하나약국, Flushing NY",
    metaDescription:
      "Independent community pharmacy at 29-26 Union Street, Flushing, Queens, at the H Mart parking lot entrance. Prescriptions, advice and everyday health needs in English and Korean. Call (718) 359-3373.",
    eyebrow: "Flushing, Queens · Union Street · Since 2001",
    lead: "An independent pharmacy at the corner of the H Mart parking lot entrance on Union Street. Prescriptions, honest advice and everyday health needs, in English and Korean.",
    photoCaption: "29-26 Union Street, Flushing",
    servicesTitle: "What we can help with",
    servicesIntro:
      "A pharmacy that still does the small things: delivery, a quick blood pressure reading, a notary stamp, a MetroCard with your prescription.",
    servicesLink: "See all services",
    hoursTitle: "Hours",
    findTitle: "Find us",
    findLead: "Look for the green awning next to H Mart.",
    storyEyebrow: "Since 2001",
    storyTitle: "A pharmacy built on a promise",
    storyText:
      "In 2001, Myeongha Jo took over an older pharmacy at this corner with borrowed money and a great deal of trust, and paid every loan back within five years. More than two decades later the pharmacy is still independent, still bilingual, and still here.",
    storyLink: "Read our story",
    ctaTitle: "Questions about a prescription?",
    ctaText:
      "Call and talk to the pharmacist. We can answer in English or Korean.",
  },
  services: {
    metaTitle: "Services | Super Value Drugs, Hana Pharmacy Flushing",
    metaDescription:
      "Free delivery, free consultation, blood pressure checks, fast prescriptions, copy and fax, notary public, MetroCard and DMV vision test at Super Value Drugs (Hana Pharmacy) in Flushing. Call (718) 359-3373 to ask.",
    eyebrow: "Services",
    title: "Services, as posted on our window",
    lead: "Everything below is listed on the pharmacy's own storefront. Each item is being confirmed with the owner, so please call before you come in for a specific service.",
    callToAsk: "Call to ask",
    rxTitle: "Prescriptions",
    rxEyebrow: "Transfer or refill",
    rxText:
      "Call us to transfer or refill a prescription. Have your prescription number, or the name of your current pharmacy, and your date of birth ready. Your doctor can also send new prescriptions to us directly.",
    rxNote: "There is no online refill form. The phone is the fastest way to reach the pharmacist.",
    rxCall: "Call to transfer or refill",
    insuranceTitle: "Insurance",
    insuranceEyebrow: "Ask us about your plan",
    insuranceText:
      "Bring your insurance card, or call with the name of your plan, and we will check whether we can bill it. If you are unsure what your plan covers, ask; the pharmacist can usually tell you before you fill.",
    insuranceCall: "Call about insurance",
    labelsCaption:
      "Color-coded labels in Korean at the counter: heart, stomach, thyroid, diabetes, blood pressure.",
  },
  about: {
    metaTitle: "About | Super Value Drugs, Hana Pharmacy 하나약국",
    metaDescription:
      "The story of Hana Pharmacy (Super Value Drugs) on Union Street in Flushing: an independent, Korean and English speaking pharmacy owned by Myeongha Jo since 2001.",
    eyebrow: "About",
    title: "The pharmacist who knows your name",
    lead: "Super Value Drugs, known to the neighborhood as Hana Pharmacy 하나약국, is an independent pharmacy on Union Street in Flushing. It has been owned and run by the same family since 2001.",
    storyTitle: "How the pharmacy came to this corner",
    storyP1:
      "In 2001 the Korean business district around Union Street was growing fast, but there was no pharmacy where customers could ask questions in Korean. Myeongha Jo noticed an older pharmacy, run by its Russian-Jewish owners, at the corner of the H Mart parking lot entrance. He thought it was the right place for a bilingual pharmacy, and he asked to buy it, even though he did not have the money.",
    storyP2:
      "The price was half a million dollars. A longtime member of his church lent part of it, the wholesaler lent part, and the sellers themselves financed the largest share because they believed he would succeed. Within five years every loan was repaid.",
    storyP3:
      "He later considered growing the business into a franchise, and decided against it. He chose to stay at this one counter and put his time into his family, his community and his patients. That choice is still the character of the pharmacy today.",
    storyAttribution: "This story is told in full in the",
    storyAttributionLink: "HAN IN TOWN feature on Hana Pharmacy",
    storyAttributionTail: "a project made with Korean Community Services of Metropolitan New York.",
    factsTitle: "At a glance",
    factOwner: "Owner",
    factEstablished: "Established",
    factLegal: "Legal name",
    factLanguages: "Languages",
    factLanguagesValue: "English and Korean",
    factAddress: "Address",
    communityTitle: "Rooted in the Korean community",
    communityText:
      "The counter labels are color-coded in Korean, the pharmacist explains medicines in whichever language you prefer, and the window signs have carried 약 in orange for more than twenty years. Everyone is welcome; many of our neighbors simply find it easier to ask about their health in Korean.",
    locationTitle: "Where to find us",
    locationText:
      "We are on Union Street in downtown Flushing, at the corner of the H Mart parking lot entrance. Look for the green awning.",
    numbers: {
      year: "2001",
      yearLabel: "the year the pharmacy opened under its current owner",
      years: "5",
      yearsLabel: "years to repay every loan used to buy the store",
      one: "1",
      oneLabel: "location, by choice, instead of a franchise",
    },
  },
  contact: {
    metaTitle: "Find us | Super Value Drugs, Hana Pharmacy Flushing",
    metaDescription:
      "Super Value Drugs (Hana Pharmacy 하나약국) is at 29-26 Union Street, Flushing, NY 11354, at the H Mart parking lot entrance. Phone (718) 359-3373, fax (718) 321-8647.",
    eyebrow: "Find us",
    title: "Union Street, next to H Mart",
    lead: "Call first for anything urgent. The phone is answered during opening hours, and the pharmacist can speak with you in English or Korean.",
    addressTitle: "Address",
    phoneTitle: "Phone",
    faxTitle: "Fax",
    directionsTitle: "Directions",
    directionsText:
      "The pharmacy is on Union Street in downtown Flushing, at the corner of the H Mart parking lot entrance. Look for the green awning with 하나약국 in white letters.",
    noEmail:
      "There is no email or online form at the moment. Please call, or stop by during opening hours.",
    hoursTitle: "Hours",
    openInMaps: "Open in Google Maps",
  },
  footer: {
    addressTitle: "Visit",
    phoneTitle: "Call",
    hoursTitle: "Hours",
    pagesTitle: "Pages",
    legal: "Hana Pharmacy Inc, trading as Super Value Drugs.",
    madeBy: "Made by Novus",
  },
  notFound: {
    metaTitle: "Page not found | Super Value Drugs",
    title: "That page is not here",
    text: "The address may have changed, or the link may be out of date. The pharmacy itself has not moved.",
    home: "Back to the home page",
  },
  callBar: {
    call: "Call",
    directions: "Directions",
  },
};

export type Dictionary = typeof en;

const ko: Dictionary = {
  langName: "한국어",
  otherLangLabel: "English",
  otherLangAria: "이 페이지를 영어로 보기",
  skipToContent: "본문으로 건너뛰기",
  nav: {
    home: "홈",
    services: "서비스",
    about: "약국 소개",
    contact: "오시는 길",
    call: "전화",
    callFull: "전화 (718) 359-3373",
    menuOpen: "메뉴 열기",
    menuClose: "메뉴 닫기",
    menuTitle: "메뉴",
    directions: "길찾기",
    language: "언어",
  },
  brand: {
    tagline: "퀸즈 플러싱의 동네 약국",
    bilingual: "한국어와 영어로 상담",
  },
  confirm: {
    badge: "확인 예정",
    badgeAria: "약국과 확인 예정인 정보입니다",
    hoursNote:
      "영업시간은 매장 간판을 기준으로 표시했으며 약국과 확인 중입니다. 일부러 방문하시기 전에 전화로 확인해 주세요.",
    servicesNote:
      "아래 서비스는 약국 창문에 안내된 내용이며 대표님과 확인 중입니다. 특정 서비스를 위해 방문하시기 전에 전화로 가능 여부를 확인해 주세요.",
  },
  hours: {
    title: "영업시간",
    closed: "휴무",
    today: "오늘",
  },
  home: {
    metaTitle: "하나약국 | Super Value Drugs, 뉴욕 플러싱",
    metaDescription:
      "플러싱 유니온 스트리트 29-26, H마트 주차장 입구에 있는 독립 동네 약국입니다. 처방약 조제와 건강 상담을 한국어와 영어로 도와드립니다. 전화 (718) 359-3373.",
    eyebrow: "퀸즈 플러싱 · 유니온 스트리트 · 2001년부터",
    lead: "유니온 스트리트 H마트 주차장 입구 모퉁이에 있는 독립 약국입니다. 처방약 조제, 정직한 상담, 일상 건강 용품까지 한국어와 영어로 도와드립니다.",
    photoCaption: "플러싱 유니온 스트리트 29-26",
    servicesTitle: "이런 일을 도와드립니다",
    servicesIntro:
      "배달, 간단한 혈압 측정, 공증 도장, 처방약과 함께 사는 메트로카드까지. 작은 일도 여전히 직접 챙기는 약국입니다.",
    servicesLink: "전체 서비스 보기",
    hoursTitle: "영업시간",
    findTitle: "오시는 길",
    findLead: "H마트 옆 녹색 차양을 찾으세요.",
    storyEyebrow: "2001년부터",
    storyTitle: "약속 위에 세운 약국",
    storyText:
      "2001년, 조명하 대표는 빌린 돈과 큰 신뢰로 이 모퉁이의 오래된 약국을 인수했고, 5년 안에 모든 빚을 갚았습니다. 20년이 넘은 지금도 약국은 여전히 독립 약국이고, 여전히 두 언어로 상담하며, 여전히 이 자리에 있습니다.",
    storyLink: "약국 이야기 읽기",
    ctaTitle: "처방약에 대해 궁금한 점이 있으신가요?",
    ctaText: "전화 주시면 약사가 직접 답해 드립니다. 한국어와 영어 모두 가능합니다.",
  },
  services: {
    metaTitle: "서비스 | 하나약국 Super Value Drugs 플러싱",
    metaDescription:
      "플러싱 하나약국(Super Value Drugs)의 무료 배달, 무료 상담, 혈압 측정, 빠른 처방 조제, 복사 및 팩스, 공증, 메트로카드, DMV 시력검사 안내. 문의 (718) 359-3373.",
    eyebrow: "서비스",
    title: "창문에 안내된 그대로의 서비스",
    lead: "아래 내용은 모두 약국 매장에 직접 게시된 안내입니다. 각 항목은 대표님과 확인 중이니, 특정 서비스를 위해 방문하시기 전에 전화로 확인해 주세요.",
    callToAsk: "전화로 문의",
    rxTitle: "처방약",
    rxEyebrow: "처방전 이관 및 리필",
    rxText:
      "처방전 이관과 리필은 전화로 요청해 주세요. 처방전 번호 또는 현재 이용 중인 약국 이름, 그리고 생년월일을 준비해 주시면 됩니다. 담당 의사가 새 처방전을 저희 약국으로 직접 보낼 수도 있습니다.",
    rxNote: "온라인 리필 양식은 없습니다. 약사에게 가장 빨리 연락하는 방법은 전화입니다.",
    rxCall: "이관 및 리필 전화 문의",
    insuranceTitle: "보험",
    insuranceEyebrow: "가입하신 보험 플랜을 문의하세요",
    insuranceText:
      "보험 카드를 가져오시거나 플랜 이름을 알려주시면 청구 가능 여부를 확인해 드립니다. 보장 범위가 확실하지 않으시면 조제 전에 물어보세요. 약사가 미리 안내해 드릴 수 있습니다.",
    insuranceCall: "보험 관련 전화 문의",
    labelsCaption:
      "카운터의 한글 색상 라벨: 심장, 위장, 갑상선, 당뇨, 혈압.",
  },
  about: {
    metaTitle: "약국 소개 | 하나약국 Super Value Drugs",
    metaDescription:
      "플러싱 유니온 스트리트의 하나약국(Super Value Drugs) 이야기. 2001년부터 조명하 대표가 운영해 온, 한국어와 영어로 상담하는 독립 약국입니다.",
    eyebrow: "약국 소개",
    title: "이름을 기억하는 약사",
    lead: "Super Value Drugs, 동네에서는 하나약국으로 불리는 이곳은 플러싱 유니온 스트리트의 독립 약국입니다. 2001년부터 같은 가족이 운영하고 있습니다.",
    storyTitle: "약국이 이 모퉁이에 오기까지",
    storyP1:
      "2001년, 유니온 스트리트 주변의 한인 상권은 빠르게 커지고 있었지만 한국어로 질문할 수 있는 약국은 없었습니다. 조명하 대표는 H마트 주차장 입구 모퉁이에서 러시아계 유대인 부부가 운영하던 오래된 약국을 눈여겨보았습니다. 두 언어로 상담하는 약국에 꼭 맞는 자리라고 생각했고, 돈이 없는데도 인수 의사를 밝혔습니다.",
    storyP2:
      "가격은 50만 달러였습니다. 오랜 교회 교인이 일부를, 도매상이 일부를 빌려주었고, 가장 큰 몫은 그가 성공할 것이라고 믿은 전 주인 부부가 직접 융자해 주었습니다. 5년 안에 모든 빚을 갚았습니다.",
    storyP3:
      "이후 프랜차이즈로 키우는 것도 고민했지만 그렇게 하지 않기로 했습니다. 이 한 곳의 카운터를 지키며 가족과 지역사회, 환자에게 시간을 쓰기로 한 것입니다. 그 선택이 지금도 이 약국의 성격입니다.",
    storyAttribution: "전체 이야기는",
    storyAttributionLink: "HAN IN TOWN의 하나약국 특집 기사",
    storyAttributionTail: "에 실려 있습니다. 뉴욕한인봉사센터(KCS)와 함께 만든 프로젝트입니다.",
    factsTitle: "한눈에 보기",
    factOwner: "대표",
    factEstablished: "설립",
    factLegal: "법인명",
    factLanguages: "상담 언어",
    factLanguagesValue: "한국어, 영어",
    factAddress: "주소",
    communityTitle: "한인 커뮤니티에 뿌리를 둔 약국",
    communityText:
      "카운터의 라벨은 한글로 색상별로 구분되어 있고, 약사는 원하시는 언어로 약을 설명해 드리며, 창문의 주황색 약 간판은 20년 넘게 같은 자리에 있습니다. 누구나 환영합니다. 다만 많은 이웃분들이 건강 이야기는 한국어로 하는 것이 더 편하다고 하십니다.",
    locationTitle: "오시는 길",
    locationText:
      "플러싱 다운타운 유니온 스트리트, H마트 주차장 입구 모퉁이에 있습니다. 녹색 차양을 찾으세요.",
    numbers: {
      year: "2001",
      yearLabel: "현재 대표가 약국 운영을 시작한 해",
      years: "5",
      yearsLabel: "약국 인수에 쓴 모든 빚을 갚는 데 걸린 햇수",
      one: "1",
      oneLabel: "프랜차이즈 대신 선택한 단 하나의 매장",
    },
  },
  contact: {
    metaTitle: "오시는 길 | 하나약국 Super Value Drugs 플러싱",
    metaDescription:
      "하나약국(Super Value Drugs)은 뉴욕 플러싱 유니온 스트리트 29-26 (우편번호 11354), H마트 주차장 입구에 있습니다. 전화 (718) 359-3373, 팩스 (718) 321-8647.",
    eyebrow: "오시는 길",
    title: "유니온 스트리트, H마트 바로 옆",
    lead: "급한 일은 먼저 전화해 주세요. 영업시간에는 전화를 받으며, 약사가 한국어 또는 영어로 상담해 드립니다.",
    addressTitle: "주소",
    phoneTitle: "전화",
    faxTitle: "팩스",
    directionsTitle: "찾아오시는 방법",
    directionsText:
      "플러싱 다운타운 유니온 스트리트, H마트 주차장 입구 모퉁이에 있습니다. 흰 글씨로 하나약국이 쓰인 녹색 차양을 찾으세요.",
    noEmail:
      "현재 이메일이나 온라인 문의 양식은 없습니다. 전화 주시거나 영업시간에 방문해 주세요.",
    hoursTitle: "영업시간",
    openInMaps: "구글 지도에서 열기",
  },
  footer: {
    addressTitle: "방문",
    phoneTitle: "전화",
    hoursTitle: "영업시간",
    pagesTitle: "페이지",
    legal: "Hana Pharmacy Inc (상호: Super Value Drugs).",
    madeBy: "Made by Novus",
  },
  notFound: {
    metaTitle: "페이지를 찾을 수 없습니다 | 하나약국",
    title: "찾으시는 페이지가 없습니다",
    text: "주소가 바뀌었거나 오래된 링크일 수 있습니다. 약국은 그대로 같은 자리에 있습니다.",
    home: "홈으로 돌아가기",
  },
  callBar: {
    call: "전화",
    directions: "길찾기",
  },
};

export const dictionaries: Record<Lang, Dictionary> = { en, ko };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export function isLang(value: string): value is Lang {
  return value === "en" || value === "ko";
}
