import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon, ExternalIcon } from "@/lib/components/icons";
import Reveal from "@/lib/components/reveal";
import { AddressLines, ButtonLink, Container, Eyebrow } from "@/lib/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { resolveLang, type LangParams } from "@/lib/params";
import { localePath, site } from "@/lib/site";

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const { lang, t } = await resolveLang(params);
  return pageMetadata({
    lang,
    title: t.about.metaTitle,
    description: t.about.metaDescription,
    path: "/about",
  });
}

export default async function AboutPage({ params }: { params: LangParams }) {
  const { lang, t } = await resolveLang(params);
  const pharmacist = site.images.pharmacist;
  const labels = site.images.labels;
  const numbers = [
    { value: t.about.numbers.year, label: t.about.numbers.yearLabel },
    { value: t.about.numbers.years, label: t.about.numbers.yearsLabel },
    { value: t.about.numbers.one, label: t.about.numbers.oneLabel },
  ];

  return (
    <>
      {/* Header: statement on the left, the pharmacist on the right. */}
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-12 md:grid-cols-12 md:items-center md:gap-8 md:py-16 lg:py-20">
            <div className="md:col-span-7">
              <Eyebrow>{t.about.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
                {t.about.title}
              </h1>
              <p className="mt-6 max-w-prose text-xl text-muted">{t.about.lead}</p>
            </div>
            <Reveal variant="scale" className="md:col-span-4 md:col-start-9">
              <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                <Image
                  src={pharmacist.src}
                  alt={pharmacist.alt[lang]}
                  fill
                  priority
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 33vw, 100vw"
                  className="object-cover object-[50%_35%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* The story, told in our own words and attributed. */}
      <section>
        <Container className="py-16 sm:py-20">
          <div className="grid gap-12 md:grid-cols-12">
            <Reveal className="md:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                {t.about.storyTitle}
              </h2>
              <div className="mt-6 max-w-prose space-y-5 text-lg text-ink/85">
                <p>{t.about.storyP1}</p>
                <p>{t.about.storyP2}</p>
                <p>{t.about.storyP3}</p>
              </div>
              <p className="mt-8 max-w-prose border-l-4 border-teal pl-4 text-base text-muted">
                {t.about.storyAttribution}{" "}
                <a
                  href={site.storySource.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-semibold text-green-700 underline decoration-teal/60 underline-offset-4 hover:text-green-900"
                >
                  {t.about.storyAttributionLink}
                  <ExternalIcon className="h-4 w-4" />
                </a>
                {/* The link ends the clause in Korean, so the tail is empty there. */}
                {t.about.storyAttributionTail ? `, ${t.about.storyAttributionTail}` : null}
              </p>
            </Reveal>

            <div className="md:col-span-4 md:col-start-9">
              <dl className="grid gap-8 sm:grid-cols-3 md:grid-cols-1">
                {numbers.map((item, index) => (
                  <Reveal
                    as="div"
                    key={item.label}
                    delay={index * 100}
                    className="flex flex-col border-t-2 border-green-900 pt-4"
                  >
                    {/* dt stays before dd in the DOM (valid dl); the flex order shows the figure first. */}
                    <dt className="text-sm text-muted">{item.label}</dt>
                    <dd className="order-first text-5xl font-bold tracking-tight text-orange tnum">
                      {item.value}
                    </dd>
                  </Reveal>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* At a glance. */}
      <section className="bg-green-900 text-white">
        <Container className="py-14 sm:py-16">
          <Reveal>
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-teal-light">
              {t.about.factsTitle}
            </h2>
            <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {site.owner ? (
                <div className="border-t border-white/20 pt-4">
                  <dt className="text-base text-teal-light">{t.about.factOwner}</dt>
                  <dd className="mt-1 text-xl font-bold">{site.owner.name}</dd>
                </div>
              ) : null}
              {site.established ? (
                <div className="border-t border-white/20 pt-4">
                  <dt className="text-base text-teal-light">{t.about.factEstablished}</dt>
                  <dd className="mt-1 text-xl font-bold tnum">{site.established}</dd>
                </div>
              ) : null}
              <div className="border-t border-white/20 pt-4">
                <dt className="text-base text-teal-light">{t.about.factLegal}</dt>
                <dd className="mt-1 text-xl font-bold">{site.legalName}</dd>
              </div>
              <div className="border-t border-white/20 pt-4">
                <dt className="text-base text-teal-light">{t.about.factLanguages}</dt>
                <dd className="mt-1 text-xl font-bold">{t.about.factLanguagesValue}</dd>
              </div>
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Community roots, with the Korean counter labels. */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <Reveal className="md:col-span-6">
              <Eyebrow tone="orange">{site.koreanName}</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                {t.about.communityTitle}
              </h2>
              <p className="mt-5 max-w-prose text-lg text-ink/85">{t.about.communityText}</p>
            </Reveal>
            <Reveal variant="mask" className="md:col-span-5 md:col-start-8" delay={100}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-md md:aspect-[4/5]">
                <Image
                  src={labels.src}
                  alt={labels.alt[lang]}
                  fill
                  sizes="(min-width: 1280px) 480px, (min-width: 768px) 42vw, 100vw"
                  className="object-cover object-[50%_45%]"
                />
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Location. */}
      <section>
        <Container className="py-16 sm:py-20">
          <Reveal className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <h2 className="text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                {t.about.locationTitle}
              </h2>
              <p className="mt-4 max-w-prose text-lg text-muted">{t.about.locationText}</p>
              <AddressLines className="mt-5 text-2xl font-semibold leading-snug text-ink" />
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-5 md:justify-self-end">
              <ButtonLink href={site.mapsUrl} external icon="external" tone="secondary">
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
        </Container>
      </section>
    </>
  );
}
