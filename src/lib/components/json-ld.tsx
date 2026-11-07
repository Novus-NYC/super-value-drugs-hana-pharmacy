import { localePath, site, siteUrl, type Lang } from "../site";

/**
 * Pharmacy structured data built only from verified fields in site.ts.
 * Opening hours are deliberately left out until the owner confirms them.
 */
export default function PharmacyJsonLd({ lang }: { lang: Lang }) {
  const data = {
    "@context": "https://schema.org",
    "@type": "Pharmacy",
    "@id": `${siteUrl}/#pharmacy`,
    name: site.name,
    alternateName: [site.altName, site.koreanName],
    legalName: site.legalName,
    url: `${siteUrl}${localePath(lang, "/")}`,
    image: `${siteUrl}${site.images.storefront.src}`,
    telephone: site.phone.tel,
    ...(site.fax ? { faxNumber: site.fax.tel } : {}),
    ...(site.email ? { email: site.email } : {}),
    ...(site.established ? { foundingDate: String(site.established) } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.state,
      postalCode: site.address.zip,
      addressCountry: "US",
    },
    hasMap: site.mapsUrl,
    availableLanguage: ["en", "ko"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
