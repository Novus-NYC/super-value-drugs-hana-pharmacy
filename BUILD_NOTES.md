# Build notes: Super Value Drugs / Hana Pharmacy 하나약국

Built 2026-11-06 from the Novus base template. Sources: the student's assignment, the NPPES record (via npiprofile.com), the loc8nearme listing, the HAN IN TOWN feature (https://hanintownflushing.com/hana-pharmacy) and the storefront photograph from that feature, which shows the pharmacy's own signage.

## Verified facts

| Fact | Value used on the site | Source |
| --- | --- | --- |
| Trade name | Super Value Drugs | Awning; NPI registry DBA; loc8nearme |
| Korean name | 하나약국 | Awning; HAN IN TOWN |
| Legal name | Hana Pharmacy Inc | NPPES |
| Alternate name | Hana Pharmacy | Awning pill "HANA PHARMACY Inc." |
| Address | 29-26 Union Street, Flushing, NY 11354 | Awning ("29-26"), NPPES, assignment |
| Landmark | At the corner of the H Mart parking lot entrance on Union Street | HAN IN TOWN; the storefront photo shows the H Mart sign next door |
| Phone | (718) 359-3373 | Awning, window poster, NPPES, assignment |
| Fax | (718) 321-8647 | NPPES |
| Owner / authorized official | Myeongha Jo, Owner | NPPES; "Mr. Jo" in HAN IN TOWN |
| Established | 2001 | HAN IN TOWN (NPI active since 2006, not used on the site) |
| Languages | English and Korean | HAN IN TOWN ("Korean bilingual pharmacy"); bilingual signage |
| Hours (shown, marked to be confirmed) | Mon to Fri 8:30 AM to 7:00 PM; Sat 8:30 AM to 6:00 PM; Sun and holidays closed | Window poster. loc8nearme lists Mon to Sat 9 AM to 6 PM instead |
| Services (shown, each marked to be confirmed) | Free delivery, free consultation, free blood pressure check, fast prescription process, copy and fax, notary public, DMV vision test | Window poster and door signs. "MetroCard sold here" is on the poster but not shown (see open items: MetroCard sales ended in 2025) |
| Vaccines (shown as "ask about vaccines") | No menu listed; the site only invites the question | CMS Medicare Part B claims show flu shot administration; door sign for COVID-19 vaccine |
| Email, website, socials | None (null, UI hidden) | None found |
| Insurance plans | Not listed; the site says "ask us about your plan" | Aggregator data only, not an owner claim |

Not used on purpose: "Lowest prices" from the window poster (a price claim; the student decided not to state it), the Valu-Rite sign over the door (a franchise brand, not the pharmacy's own mark), the NY pharmacy license number, and the second phone number and gmail address that appear on a small label in the counter photo (not legible with certainty; see open items).

## Art direction

"The pharmacist who knows your name." The storefront sets everything: deep awning green, the bright teal-green window trim, cream brick, and the orange of DRUGS and the 약 window signs. The site is clear and warm, clinical only in its tidiness. Type is large because many customers are older: 18 px body, generous line height, strong contrast, 44 px and larger tap targets, a sticky bottom call bar on phones and a phone button in the header at every width. Compositions vary by page: a split hero with the storefront standing tall (never letterboxed), a services list on a green band, hours and address split by a hairline, a story teaser with the pharmacist, the services page's "window poster" list, big-number facts on About, and a wide awning crop on Contact.

- Palette: green 900 `#0F4D3A` (awning, primary), green 950 `#093226` (footer), teal `#2DB38E` and teal light `#8FDCC3` (trim, accents on dark), orange `#E8541E` (large display text and shapes only), orange deep `#C4420F` (filled button background), orange hover `#9E3509`, orange text `#A8380C` (small orange text and the badge), orange soft `#FBE7DC` (badge background), cream canvas `#F7F3EA`, cream deep `#EBE3D0`, ink `#15211B`, muted `#4E5D56`, line `#D8D1C1`. Contrast ratios are in the review-fixes section below.
- Type: Source Sans 3 Variable for Latin, Noto Sans KR Variable for Korean, both self-hosted from Fontsource. Korean pages lead with Noto Sans KR; any Korean inside English pages is set in it through `:lang(ko)`.
- Marks: a drawn mortar and pestle (inspired by the Rx sign on the awning) for the favicon, Apple icon, header and OG image; an orange 약 roundel echoing the window signs for the 404 page. No third-party trademark is copied.
- Motion: one small vocabulary of scroll reveals (fade up, scale, slide, mask), 500 to 700 ms, opacity, transform and clip-path only; a header surface change on scroll; a slide-in mobile menu. Everything is visible without JavaScript, in print and with reduced motion.

## Page architecture

English at the root, Korean mirrored under `/ko`, both complete.

| Route | Content |
| --- | --- |
| `/`, `/ko` | Hero (both names, one line on what it is, Call primary, Get directions secondary, storefront photo; on phones the awning crop comes first), services overview with badges and note, hours block with badge, Find us block with the H Mart landmark, "since 2001" story teaser linking to About, closing call to action with the phone number. Pharmacy JSON-LD. |
| `/services`, `/ko/services` | Header with the window-poster list (in-page anchors), eight services with two or three sentence descriptions, badge and "Call to ask"; counter labels photo; Prescriptions (call to transfer or refill, no online refill); Insurance (only an invitation to ask). |
| `/about`, `/ko/about` | The HAN IN TOWN story in our own words with an attributed link; big-number facts (2001, 5 years, 1 location); At a glance (owner, established, legal name, languages); Korean community roots with the labels photo; location. |
| `/contact`, `/ko/contact` | Address, landmark, Google Maps link, phone, fax, hours table with badge and note, no-email note, wide awning crop. No form (no verified email). No parking note (not sourced). |
| 404 | Static branded page via Next's `global-not-found` convention, bilingual body, English chrome. |

Also: `robots.txt`, `sitemap.xml` with both languages and hreflang alternates, `icon.svg`, `apple-icon` (180x180), `/opengraph-image` and `/ko/opengraph-image` (1200x630, built with ImageResponse from the mark and both names; Korean set from the static Noto Sans KR 700 WOFF in `@fontsource/noto-sans-kr`).

## Decisions and exceptions

- Unconfirmed hours and services are shown, each with a visible "To be confirmed" / "확인 중" badge and a short note in the pharmacy's own voice, as the student decided. They live in `src/lib/site.ts` (`hours.confirmed`) and `src/lib/services.ts` (`confirmed` per item) so each can be confirmed or removed with one edit. Opening hours are left out of the JSON-LD until confirmed.
- Vaccines appear only as "Ask about vaccines", never as a list. Insurance appears only as "ask us about your plan". Delivery is a service "to be confirmed". No price claims.
- Owner is named as "Owner" only. The sources do not state that Mr. Jo is the pharmacist, so the site never says so; the pharmacist in the photo is not named.
- The bilingual routing follows the common brief: the `[lang]` segment holds the root layout, `/` and `/:path*` are rewritten to the `en` tree (with a negative lookahead that excludes `/ko`, `/en`, `/_next` and `/images`), and `/en`, `/en/:path*` redirect (308) to the clean URLs. Redirect and rewrite sources are matched case-sensitively (`experimental.caseSensitiveRoutes`), and `/KO`, `/Ko/...`, `/EN`, `/En/...` and the other case variants redirect (308) to the lowercase URL, so a mis-cased prefix never reaches the `[lang]` segment.
- 404 handling: a catch-all route calling `notFound()` produced a client-rendered error shell in Next 16 (empty body without JavaScript). The site uses `experimental.globalNotFound` with `src/app/global-not-found.tsx` instead, which prerenders a complete static document with a 404 status. Its header and footer are English because the global page gets no route params; the body is bilingual.
- The desktop navigation starts at 1024 px. Below that, the header shows a phone icon button and the menu button, and the bottom call bar is present, because logo, five links and the phone button do not fit at 768 px.
- Photo `hanintown-untitled.jpg` (pharmacy workstation) is NOT used: the monitor shows a patient record with a name, date of birth, address and phone number. The other three photos are copied byte for byte as WebP (the source files are WebP despite the .jpg extension).
- Fonts are self-hosted (Fontsource). The static `@fontsource/noto-sans-kr` package is installed only for the single WOFF file the OG image generator needs; browsers load the variable fonts.
- `outputFileTracingRoot` and `turbopack.root` are pinned to the repo because this PC has another package-lock.json above it.
- The template's `/pages/*` routes and template page were removed. The build updated `tsconfig.json` (`jsx: react-jsx`, Next type includes) as Next 16 requires.

## Verification done

- `npm run build`, `npm run lint` (`eslint .`) and `npx tsc --noEmit` pass with no errors or warnings.
- `next start` checked with curl: `/`, `/services`, `/about`, `/contact`, `/ko`, `/ko/services`, `/ko/about`, `/ko/contact` return 200 with `<html lang>` set correctly; `/en` and `/en/services` return 308 to the clean URLs; `/KO`, `/Ko/services`, `/EN`, `/En/about` return 308 to the lowercase URLs; `/foo`, `/ko/foo`, `/services/x`, `/xx/yy` return 404 with the branded static page server-rendered; `/robots.txt`, `/sitemap.xml`, `/icon.svg`, `/apple-icon`, `/opengraph-image`, `/ko/opengraph-image` and the image files return 200.
- Rendered HTML checked for: per-route title, description, canonical, hreflang alternates (en, ko, x-default), og:url, og:image, JSON-LD with verified fields only, the language switch pointing at the same page in the other language on all pages, and the exact "Made by Novus" link.
- Both OG images and the Apple icon were rendered and viewed.
- `src` grepped for em dashes, en dashes and leading-zero times: none.
- Not done here (browser tools were off limits for this build): visual checks at 1440, 768 and 390 px, keyboard walkthrough of the mobile menu, and reduced-motion and JavaScript-off checks in a real browser. The lead will do these.

## Korean to be checked by a fluent reader

None of the Korean copy came from the owner. The sources supplied only 하나약국 and the door sign "DMV 시력검사". Everything else was written for this build and should be read by a fluent reader before the owner sees it. In particular:

- Nav and labels: 홈, 서비스, 약국 소개, 오시는 길, 전화, 길찾기, 확인 중 (the "to be confirmed" badge), 휴무, 영업시간, 본문으로 건너뛰기, and the short footer day labels 월~금, 토, 일, 공휴일.
- Service names: 무료 배달, 무료 상담, 무료 혈압 측정, 빠른 처방 조제, 복사 및 팩스, 공증(노터리), DMV 시력검사, 예방접종 문의, and all eight descriptions in `src/lib/services.ts`.
- Hero, services intro, hours and find-us copy, story teaser and the closing call to action in `home` of `src/lib/i18n.ts`.
- Services page: the prescriptions paragraph (처방전 이관 및 리필, 생년월일), the insurance paragraph, the labels caption.
- About page: the three story paragraphs (러시아계 유대인 주인들, 50만 달러, 도매상, 프랜차이즈), the attribution sentence (the link now ends the clause so no particle follows the icon), 뉴욕한인봉사센터(KCS) as the rendering of Korean Community Services of Metropolitan New York, the big-number labels, 대표 as the owner's title, 조명하 as the Hangul spelling of Myeongha Jo (inferred from the romanization; confirm with the owner).
- Contact page and footer copy, the 404 copy, and all Korean meta titles and descriptions.
- Alt text for the three photos.
- Day labels use "월요일 ~ 금요일" and times use "오전 8:30 ~ 오후 7:00"; confirm this format reads naturally.

## Review fixes (2026-11-06)

A design, accessibility, content and code review of the built site produced 34 confirmed findings. All of them were fixed in this pass.

Contrast (WCAG 2 ratios computed from the tokens; AA needs 4.5:1 for normal text and 3:1 for large text):

| Pair | Ratio | Use |
| --- | --- | --- |
| White on orange `#E8541E` | 3.67:1 | Was the button fill; now only the 404 roundel (large bold text) |
| Orange `#E8541E` on canvas / cream deep / white | 3.32 / 2.87 / 3.67 | Now only the hero 하나약국 (large bold) and the About big numbers (large bold); otherwise shapes |
| White on orange deep `#C4420F` | 5.08:1 | Every filled button: header phone buttons, hero Call, call bar, menu panel Call, closing phone number, primary and onDark `ButtonLink`, skip link |
| White on orange hover `#9E3509` | 7.08:1 | Filled button hover |
| Orange text `#A8380C` on canvas `#F7F3EA` | 5.86:1 | `Eyebrow tone="orange"`, service index numbers |
| Orange text `#A8380C` on cream deep `#EBE3D0` | 5.08:1 | The "Since 2001" eyebrow on the story band |
| Orange text `#A8380C` on white `#FFFFFF` | 6.49:1 | Poster-box label on the services page, contact figcaption |
| Orange text `#A8380C` on orange soft `#FBE7DC` | 5.43:1 | The "To be confirmed" badge |

Content and facts:

- About story: no longer claims there was "no pharmacy where customers could ask in Korean" (not in the source); the Korean no longer calls the previous owners a couple (부부); the lead says "owned and run by Myeongha Jo since 2001" instead of "the same family"; the community paragraph no longer dates the 약 window signs ("more than twenty years" was unsupported). The story stays attributed to the HAN IN TOWN feature.
- Voice: the hours and services notes, the services lead and two service descriptions are written in the pharmacy's own voice ("posted on our window", "we have given flu shots") instead of a builder's note ("being confirmed with the owner"). The "To be confirmed" badge stays.
- MetroCard: removed from the services list, the services meta descriptions and the home intro, because the MTA stopped selling MetroCards at the end of 2025. New open item below.
- Korean: badge "확인 중" (was 확인 예정) to match the notes, "공증(노터리)" without the space, and the attribution sentence restructured so the link ends the clause (the external-link icon no longer splits the particle 에 from the link text). The tail string is rendered only when non-empty.
- Contact lead no longer promises the phone is answered during opening hours.
- Footer legal line reads "© 2026 Hana Pharmacy Inc. Trading as Super Value Drugs." (the legal name was printed twice).
- Phone, fax, street address and the founding year are interpolated into the dictionary from `src/lib/site.ts` (`callFull`, meta descriptions, photo captions, eyebrows, the About year), so a change in site.ts updates every string. `site.address` now also carries `streetNumber` and `streetName`.

Layout and accessibility:

- Hero on phones: the storefront figure comes first (`order-first md:order-none`) as a short 16:10 awning crop, the h1 starts at `text-4xl`, and the duplicated address line under the buttons is gone (the figcaption and Find us already carry it).
- Services page header: the poster box moves under the intro until `lg`, so at 768 px its uppercase bars no longer wrap.
- About numbers: the big figure now sits above its label (the column is `flex flex-col` so `order-first` works); labels capitalized.
- About "At a glance": the owner cell shows the name only (it read "Owner / Myeongha Jo / Owner").
- Footer: grid rebalanced to 3 / 3 / 4 / 2, times are `whitespace-nowrap`, and the footer uses short day labels (`daysShort` in site.ts, `compact` prop on `HoursTable`), so hours no longer wrap mid-phrase at 1440 px.
- The "To be confirmed" badge is a sibling of the heading, never inside h2/h3, so heading navigation reads clean names.
- Phone-number links and buttons are `whitespace-nowrap` (the Korean closing CTA broke the number across two lines at 768 px); the closing number is `text-2xl lg:text-3xl`.
- Mobile menu: while the panel is open the header, main, footer and call bar are `inert`, so Tab cannot leave the dialog. Escape and return-focus behavior are unchanged (inert is lifted before focus returns to the toggle).
- Language switch: `lang` moved from the link to the visible label span, so the English aria-label is no longer announced with the Korean voice.
- `<html data-scroll-behavior="smooth">` in both layouts, so Next 16 disables the CSS smooth scroll during route changes while in-page anchors stay smooth.
- Sitemap entries no longer carry a build-time `lastModified`.
- Routing: `experimental.caseSensitiveRoutes: true` plus 308 redirects for every non-lowercase spelling of `/ko` and `/en` (`/KO`, `/Ko/services`, `/EN`, `/En/about` verified with curl). Before, `/KO` bypassed the case-insensitive rewrite lookahead and returned Next's blank error shell.

Verification after the fixes: `npm run build`, `npm run lint` and `npx tsc --noEmit` pass with no errors; the curl checklist above was rerun; `src` grepped for em dashes, en dashes and leading-zero times (only the 24-hour source values in site.ts, which are formatted before display). Visual checks in a browser were out of scope for this pass.

## Open items for the client

Reminder for the student: confirm each of these with the owner (Mr. Jo) before launch, and update `src/lib/site.ts`, `src/lib/services.ts` and `src/lib/i18n.ts` accordingly.

1. Hours: the window poster says Mon to Fri 8:30 AM to 7:00 PM, Sat 8:30 AM to 6:00 PM, Sun and holidays closed; loc8nearme says Mon to Sat 9 AM to 6 PM. Confirm the real hours, then set `hours.confirmed: true` (the badges and notes disappear) and consider adding hours to the JSON-LD.
2. Each service on the window poster: free delivery, free consultation, free blood pressure check, fast prescription process, copy and fax, notary public, DMV vision test. Confirm each is still offered (the photo shows COVID-era notices, so some may be outdated), then set `confirmed: true` or delete the item.
3. MetroCard or OMNY cards still sold? The poster says "MetroCard SOLD HERE", but the MTA stopped selling MetroCards at the end of 2025, so the item is not on the site. If the pharmacy sells OMNY cards (or still has MetroCards), add a service entry (with its own icon) to `src/lib/services.ts` and mention it in the services meta description and the home services intro in `src/lib/i18n.ts`.
4. Delivery: confirm it exists, whether it is free, the area covered and any minimum.
5. Vaccines: which vaccines are offered (flu, COVID-19, others), walk-in or appointment, and whether to list them.
6. Insurance plans accepted: whether to name major plans (Medicare, Medicaid, others) or keep "ask us about your plan".
7. Preferred brand name order: "Super Value Drugs" first (as built) or "Hana Pharmacy 하나약국" first, and whether "Hana Pharmacy" should appear in English more prominently.
8. Photo permission: the three photographs come from the HAN IN TOWN feature (made with Korean Community Services of Metropolitan New York, kcsny.org). No license is stated. Confirm permission with the owner or KCS, and ask who the photographer is for a credit. The fourth photo (workstation) was excluded because it shows a patient record.
9. The pharmacist in the photo: confirm whether it is Mr. Jo and whether he wants to be named in the caption.
10. Email address: none found. If one exists, add it to `site.email` and the contact page will show it (a mailto form can then be added).
11. Socials: none found. Add any real profiles to `site.socials`.
12. Logo file: the site uses a drawn mortar and pestle mark. Ask whether a logo file exists (the awning lettering, or the mark on the window poster).
13. Korean strings: have a fluent reader check the list above, and confirm the Hangul spelling of the owner's name (조명하).
14. Production URL: set `NEXT_PUBLIC_SITE_URL` on Vercel to the real domain. hanarx.com redirects to a domain-for-sale page and must not be used.
15. The counter photo shows a small label with what looks like a second phone number and a gmail address; neither is legible with certainty, so neither is used. Ask the owner whether there is a second line or an email for customers.
16. Parking: nothing sourced, so nothing is said. Ask whether customers may use the H Mart lot.
17. Optional after deploy: a Google Maps embed on the contact page (a plain Maps link is used now), and Google Business Profile hours alignment.
