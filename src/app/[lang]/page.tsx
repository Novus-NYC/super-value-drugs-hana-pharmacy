import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ClockIcon, PinIcon, ServiceGlyph } from "@/lib/components/icons";
import PharmacyJsonLd from "@/lib/components/json-ld";
import Reveal from "@/lib/components/reveal";
import {
  AddressLines,
  ButtonLink,
  ConfirmBadge,
  Container,
  Eyebrow,
  HoursTable,
} from "@/lib/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { resolveLang, type LangParams } from "@/lib/params";
import { services } from "@/lib/services";
import { localePath, site } from "@/lib/site";

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const { lang, t } = await resolveLang(params);
  return pageMetadata({
    lang,
    title: t.home.metaTitle,
    description: t.home.metaDescription,
    path: "/",
  });
}

export default async function HomePage({ params }: { params: LangParams }) {
  const { lang, t } = await resolveLang(params);
  const storefront = site.images.storefront;
  const pharmacist = site.images.pharmacist;
  const anyServiceUnconfirmed = services.some((service) => !service.confirmed);

  return (
    <>
      <PharmacyJsonLd lang={lang} />

      {/* Hero: type on the left, the storefront standing tall on the right. */}
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-10 md:grid-cols-12 md:items-center md:gap-8 md:py-14 lg:gap-12 lg:py-20">
            <div className="md:col-span-6 lg:col-span-6">
              <Eyebrow>{t.home.eyebrow}</Eyebrow>
              <h1 className="mt-5 tracking-tight">
                {lang === "ko" ? (
                  <>
                    <span className="block font-ko text-5xl font-bold text-green-900 sm:text-6xl md:text-5xl lg:text-6xl">
                      {site.koreanName}
                    </span>
                    <span className="mt-2 block font-sans text-3xl font-bold text-orange sm:text-4xl" lang="en">
                      {site.name}
                    </span>
                  </>
                ) : (
                  <>
                    <span className="block text-5xl font-bold text-green-900 sm:text-6xl md:text-5xl lg:text-6xl">{site.name}</span>
                    <span className="mt-2 block font-ko text-4xl font-bold text-orange sm:text-5xl md:text-4xl lg:text-5xl" lang="ko">
                      {site.koreanName}
                    </span>
                  </>
                )}
              </h1>
              <p className="mt-6 max-w-prose text-xl text-muted">{t.home.lead}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href={`tel:${site.phone.tel}`} icon="phone">
                  {t.nav.callFull}
                </ButtonLink>
                <ButtonLink href={site.mapsUrl} tone="secondary" external icon="external">
                  {t.nav.directions}
                </ButtonLink>
              </div>
              <p className="mt-7 flex items-start gap-2.5 text-base text-muted">
                <PinIcon className="mt-1 h-5 w-5 shrink-0 text-green-700" />
                <span>
                  {site.address.street}, {site.address.city}. {site.landmark[lang]}.
                </span>
              </p>
            </div>

            <figure className="md:col-span-6 lg:col-span-6">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -left-3 -top-3 h-full w-full rounded-md bg-green-100 sm:-left-5 sm:-top-5"
                />
                <div className="relative aspect-[4/3] overflow-hidden rounded-md md:aspect-[5/6]">
                  <Image
                    src={storefront.src}
                    alt={storefront.alt[lang]}
                    fill
                    priority
                    sizes="(min-width: 1280px) 600px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-[50%_88%] md:object-[50%_62%]"
                  />
                </div>
              </div>
              <figcaption className="mt-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.12em] text-green-700">
                <span aria-hidden="true" className="h-px w-8 bg-orange" />
                {t.home.photoCaption}
              </figcaption>
            </figure>
          </div>
        </Container>
      </section>

      {/* Services overview on the awning green. */}
      <section className="bg-green-900 text-white">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <Reveal className="md:col-span-7">
              <Eyebrow tone="cream">{t.nav.services}</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.home.servicesTitle}</h2>
              <p className="mt-4 max-w-prose text-lg text-white/85">{t.home.servicesIntro}</p>
            </Reveal>
            <Reveal className="md:col-span-5 md:justify-self-end" delay={100}>
              <Link
                href={localePath(lang, "/services")}
                className="inline-flex min-h-[2.75rem] items-center gap-2 rounded-sm text-lg font-semibold text-teal-light hover:text-white"
              >
                {t.home.servicesLink}
                <ArrowIcon className="h-5 w-5" />
              </Link>
            </Reveal>
          </div>

          <ul className="mt-10 grid gap-x-10 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal as="li" key={service.id} delay={Math.min(index, 5) * 60} className="border-t border-white/15 py-5">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-white/10 text-teal-light">
                    <ServiceGlyph icon={service.icon} className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xl font-bold">
                      <Link
                        href={`${localePath(lang, "/services")}#${service.id}`}
                        className="rounded-sm hover:text-teal-light"
                      >
                        {service.name[lang]}
                      </Link>
                      {!service.confirmed ? <ConfirmBadge t={t} tone="dark" /> : null}
                    </h3>
                    <p className="mt-1 text-base text-white/80">{service.short[lang]}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          {anyServiceUnconfirmed ? (
            <Reveal>
              <p className="mt-8 max-w-prose border-l-4 border-orange pl-4 text-base text-white/80">
                {t.confirm.servicesNote}
              </p>
            </Reveal>
          ) : null}
        </Container>
      </section>

      {/* Hours and find us, split by a vertical rule. */}
      <section className="border-b border-line">
        <Container>
          <div className="grid lg:grid-cols-2">
            <Reveal className="py-14 sm:py-16 lg:border-r lg:border-line lg:pr-12">
              <h2 className="flex flex-wrap items-center gap-3 text-3xl font-bold tracking-tight text-green-900">
                <ClockIcon className="h-8 w-8 text-orange" />
                {t.home.hoursTitle}
                {!site.hours.confirmed ? <ConfirmBadge t={t} /> : null}
              </h2>
              <HoursTable t={t} lang={lang} className="mt-6 text-lg" />
              {!site.hours.confirmed ? (
                <p className="mt-5 text-base text-muted">{t.confirm.hoursNote}</p>
              ) : null}
            </Reveal>

            <Reveal className="border-t border-line py-14 sm:py-16 lg:border-t-0 lg:pl-12" delay={120}>
              <h2 className="flex items-center gap-3 text-3xl font-bold tracking-tight text-green-900">
                <PinIcon className="h-8 w-8 text-orange" />
                {t.home.findTitle}
              </h2>
              <AddressLines className="mt-6 text-2xl font-semibold leading-snug text-ink" />
              <p className="mt-3 text-lg text-muted">{site.landmark[lang]}.</p>
              <p className="mt-1 text-lg text-muted">{t.home.findLead}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <ButtonLink href={site.mapsUrl} tone="secondary" external icon="external">
                  {t.nav.directions}
                </ButtonLink>
                <Link
                  href={localePath(lang, "/contact")}
                  className="inline-flex min-h-[3.25rem] items-center gap-2 rounded-sm px-2 text-lg font-semibold text-green-700 hover:text-green-900"
                >
                  {t.nav.contact}
                  <ArrowIcon className="h-5 w-5" />
                </Link>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Story teaser with the pharmacist at the counter. */}
      <section className="bg-cream-deep">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <Reveal variant="mask" className="md:col-span-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md md:aspect-[3/4]">
                <Image
                  src={pharmacist.src}
                  alt={pharmacist.alt[lang]}
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 768px) 42vw, 100vw"
                  className="object-cover object-[50%_30%]"
                />
              </div>
            </Reveal>
            <Reveal className="md:col-span-6 md:col-start-7" delay={120}>
              <Eyebrow tone="orange">{t.home.storyEyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                {t.home.storyTitle}
              </h2>
              <p className="mt-5 text-lg text-ink/85">{t.home.storyText}</p>
              <ButtonLink href={localePath(lang, "/about")} tone="secondary" icon="arrow" className="mt-8">
                {t.home.storyLink}
              </ButtonLink>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Closing call to action. */}
      <section>
        <Container className="py-16 sm:py-20">
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">{t.home.ctaTitle}</h2>
              <p className="mt-3 max-w-prose text-lg text-muted">{t.home.ctaText}</p>
            </div>
            <div className="md:col-span-5 md:justify-self-end">
              <a
                href={`tel:${site.phone.tel}`}
                className="inline-flex min-h-[4rem] items-center gap-3 rounded-md bg-orange px-7 text-2xl font-bold text-white tnum hover:bg-orange-deep sm:text-3xl"
              >
                {site.phone.display}
              </a>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
