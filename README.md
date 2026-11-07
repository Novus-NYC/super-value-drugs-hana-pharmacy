# Super Value Drugs / Hana Pharmacy 하나약국

Website for Super Value Drugs (legal name Hana Pharmacy Inc, Korean name 하나약국), an independent, Korean and English speaking community pharmacy at 29-26 Union Street, Flushing, NY 11354, at the corner of the H Mart parking lot entrance. The site's one job is to get a visitor to call (718) 359-3373 or find the door.

Built by Novus. See `BUILD_NOTES.md` for verified facts, art direction, decisions and the open items for the client.

## Stack

- Next.js 16 (App Router), TypeScript (strict), Tailwind CSS v3, `next/image`
- Self-hosted fonts via Fontsource: Source Sans 3 Variable (Latin) and Noto Sans KR Variable (Korean)
- ESLint 9 flat config with `eslint-config-next`
- No CMS, no database, no analytics, no third-party scripts

## Routes

English lives at the clean root URLs and Korean is mirrored under `/ko`:

| English     | Korean         | Page                                    |
| ----------- | -------------- | --------------------------------------- |
| `/`         | `/ko`          | Home                                    |
| `/services` | `/ko/services` | Services, prescriptions, insurance      |
| `/about`    | `/ko/about`    | Story, owner, community roots, location |
| `/contact`  | `/ko/contact`  | Address, phone, fax, hours              |

`/en` and `/en/...` redirect (308) to the clean English URLs. Unknown URLs get a static, branded 404. `robots.txt`, `sitemap.xml`, `icon.svg`, `apple-icon` and per-language `opengraph-image` are generated.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint       # eslint .
npm run typecheck  # tsc --noEmit
```

`npm install` sometimes stalls on Windows. If it hangs for a few minutes, cancel and run it again.

## Where content lives

- `src/lib/site.ts`: every business fact (names, address, phone, fax, hours, landmark, owner, photo metadata, source links). Unknowns are `null` and their UI hides itself. Hours carry `confirmed: false` until the owner confirms them; the UI shows a "to be confirmed" badge while that flag is false.
- `src/lib/services.ts`: the services list with English and Korean names and descriptions. Each item has `confirmed: false` until the owner confirms it; set it to `true` or delete the item.
- `src/lib/i18n.ts`: every visible string in English and Korean. The `Dictionary` type forces both languages to have every key.
- `src/lib/metadata.ts`: `pageMetadata()` gives every route its own title, description, canonical URL, hreflang alternates and Open Graph tags.
- `src/app/[lang]/`: the pages. `layout.tsx` is the root layout (`<html lang>`), with the header, footer and the mobile call bar.
- `src/lib/components/`: header and mobile menu, footer, call bar, scroll reveal, language switch, brand marks, icons, shared UI.
- `public/images/`: the three photographs from the HAN IN TOWN feature (WebP, copied byte for byte).

## Deployment

Intended for Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL (for example `https://supervaluedrugs.com`) so canonical URLs, Open Graph URLs, the sitemap and robots.txt point at the real domain. Until it is set they fall back to `https://example.com`.
