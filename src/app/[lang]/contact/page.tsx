import type { Metadata } from "next";
import Image from "next/image";
import { ClockIcon, ExternalIcon, PhoneIcon, PinIcon } from "@/lib/components/icons";
import Reveal from "@/lib/components/reveal";
import { AddressLines, ButtonLink, ConfirmBadge, Container, Eyebrow, HoursTable } from "@/lib/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { resolveLang, type LangParams } from "@/lib/params";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const { lang, t } = await resolveLang(params);
  return pageMetadata({
    lang,
    title: t.contact.metaTitle,
    description: t.contact.metaDescription,
    path: "/contact",
  });
}

export default async function ContactPage({ params }: { params: LangParams }) {
  const { lang, t } = await resolveLang(params);
  const storefront = site.images.storefront;

  return (
    <>
      <section className="border-b border-line">
        <Container>
          <div className="py-12 md:py-16 lg:py-20">
            <Eyebrow>{t.contact.eyebrow}</Eyebrow>
            <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
              {t.contact.title}
            </h1>
            <p className="mt-6 max-w-prose text-xl text-muted">{t.contact.lead}</p>
          </div>
        </Container>
      </section>

      {/* Address and phone on the left, hours on the right. */}
      <section className="border-b border-line">
        <Container>
          <div className="grid lg:grid-cols-12">
            <div className="py-14 sm:py-16 lg:col-span-7 lg:border-r lg:border-line lg:pr-12">
              <Reveal>
                <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-700">
                  <PinIcon className="h-5 w-5 text-orange" />
                  {t.contact.addressTitle}
                </h2>
                <AddressLines className="mt-4 text-3xl font-bold leading-tight tracking-tight text-green-900 sm:text-4xl" />
                <p className="mt-4 max-w-prose text-lg text-muted">{t.contact.directionsText}</p>
                <ButtonLink href={site.mapsUrl} external icon="external" className="mt-6">
                  {t.contact.openInMaps}
                </ButtonLink>
              </Reveal>

              <Reveal className="mt-12 grid gap-8 sm:grid-cols-2" delay={100}>
                <div>
                  <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-700">
                    <PhoneIcon className="h-5 w-5 text-orange" />
                    {t.contact.phoneTitle}
                  </h2>
                  <a
                    href={`tel:${site.phone.tel}`}
                    className="mt-3 inline-block rounded-sm text-3xl font-bold tracking-tight text-green-900 tnum hover:text-orange-deep"
                  >
                    {site.phone.display}
                  </a>
                </div>
                {site.fax ? (
                  <div>
                    <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-green-700">
                      {t.contact.faxTitle}
                    </h2>
                    <p className="mt-3 text-3xl font-bold tracking-tight text-ink tnum">{site.fax.display}</p>
                  </div>
                ) : null}
              </Reveal>

              {!site.email ? (
                <Reveal delay={150}>
                  <p className="mt-10 max-w-prose border-l-4 border-teal pl-4 text-base text-muted">
                    {t.contact.noEmail}
                  </p>
                </Reveal>
              ) : null}
            </div>

            <Reveal className="border-t border-line py-14 sm:py-16 lg:col-span-5 lg:border-t-0 lg:pl-12" delay={120}>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.14em] text-green-700">
                  <ClockIcon className="h-5 w-5 text-orange" />
                  {t.contact.hoursTitle}
                </h2>
                {!site.hours.confirmed ? <ConfirmBadge t={t} /> : null}
              </div>
              <HoursTable t={t} lang={lang} className="mt-4 text-lg" />
              {!site.hours.confirmed ? (
                <p className="mt-5 text-base text-muted">{t.confirm.hoursNote}</p>
              ) : null}
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The awning, cropped wide, so visitors know what to look for. */}
      <section>
        <Container className="py-12 sm:py-16">
          <Reveal variant="mask">
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md sm:aspect-[21/9]">
                <Image
                  src={storefront.src}
                  alt={storefront.alt[lang]}
                  fill
                  sizes="(min-width: 1280px) 1216px, 100vw"
                  className="object-cover object-[50%_52%]"
                />
              </div>
              <figcaption className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-base text-muted">
                <span className="font-semibold text-green-900">{site.name}</span>
                <span lang="ko" className="font-ko font-semibold text-orange-text">
                  {site.koreanName}
                </span>
                <span>{site.landmark[lang]}</span>
                <a
                  href={site.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[2.75rem] items-center gap-1 rounded-sm font-semibold text-green-700 hover:text-green-900"
                >
                  {t.nav.directions}
                  <ExternalIcon className="h-4 w-4" />
                </a>
              </figcaption>
            </figure>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
