import type { Metadata } from "next";
import Image from "next/image";
import { PhoneIcon, ServiceGlyph } from "@/lib/components/icons";
import Reveal from "@/lib/components/reveal";
import { ButtonLink, ConfirmBadge, Container, Eyebrow } from "@/lib/components/ui";
import { pageMetadata } from "@/lib/metadata";
import { resolveLang, type LangParams } from "@/lib/params";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const { lang, t } = await resolveLang(params);
  return pageMetadata({
    lang,
    title: t.services.metaTitle,
    description: t.services.metaDescription,
    path: "/services",
  });
}

export default async function ServicesPage({ params }: { params: LangParams }) {
  const { lang, t } = await resolveLang(params);
  const labels = site.images.labels;
  const tel = `tel:${site.phone.tel}`;

  return (
    <>
      {/* Header: type on the left, the window-poster list on the right. */}
      <section className="border-b border-line">
        <Container>
          <div className="grid gap-10 py-12 md:grid-cols-12 md:gap-8 md:py-16 lg:py-20">
            <div className="md:col-span-6">
              <Eyebrow>{t.services.eyebrow}</Eyebrow>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-green-900 sm:text-5xl">
                {t.services.title}
              </h1>
              <p className="mt-6 max-w-prose text-xl text-muted">{t.services.lead}</p>
              <ButtonLink href={tel} icon="phone" className="mt-8">
                {t.nav.callFull}
              </ButtonLink>
            </div>
            <Reveal variant="left" className="md:col-span-5 md:col-start-8">
              <nav aria-label={t.nav.services} className="rounded-md border-2 border-green-900 bg-surface p-5 sm:p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange">
                  {site.name} {t.services.eyebrow}
                </p>
                <ol className="mt-4 space-y-2">
                  {services.map((service) => (
                    <li key={service.id}>
                      <a
                        href={`#${service.id}`}
                        className="flex min-h-[2.75rem] items-center justify-between gap-3 rounded-sm bg-green-900 px-4 py-2 text-base font-bold uppercase tracking-wide text-white hover:bg-green-700"
                      >
                        <span>{service.name[lang]}</span>
                        <ServiceGlyph icon={service.icon} className="h-5 w-5 shrink-0 text-teal-light" />
                      </a>
                    </li>
                  ))}
                </ol>
                <p className="mt-5 text-center text-2xl font-bold tnum text-green-900">{site.phone.display}</p>
              </nav>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Each service in detail. */}
      <section>
        <Container className="py-6 sm:py-10">
          <ul>
            {services.map((service, index) => (
              <Reveal as="li" key={service.id} className="border-b border-line">
                <article id={service.id} className="grid gap-5 py-10 md:grid-cols-12 md:gap-8">
                  <div className="flex items-start gap-4 md:col-span-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md bg-green-100 text-green-800">
                      <ServiceGlyph icon={service.icon} className="h-8 w-8" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange tnum">
                        {index + 1}
                      </p>
                      <h2 className="mt-1 text-2xl font-bold tracking-tight text-green-900 sm:text-3xl">
                        {service.name[lang]}
                      </h2>
                      {!service.confirmed ? <ConfirmBadge t={t} className="mt-2" /> : null}
                    </div>
                  </div>
                  <div className="md:col-span-7">
                    <p className="max-w-prose text-lg text-ink/85">{service.description[lang]}</p>
                    <a
                      href={tel}
                      className="mt-4 inline-flex min-h-[2.75rem] items-center gap-2 rounded-sm text-lg font-semibold text-green-700 hover:text-green-900"
                    >
                      <PhoneIcon className="h-5 w-5" />
                      <span>{t.services.callToAsk}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
          <Reveal>
            <p className="mt-8 max-w-prose border-l-4 border-orange pl-4 text-base text-muted">
              {t.confirm.servicesNote}
            </p>
          </Reveal>
        </Container>
      </section>

      {/* A detail from the counter: labels in Korean. */}
      <section className="bg-cream-deep">
        <Container className="py-16 sm:py-20">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <Reveal variant="mask" className="md:col-span-7">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md md:aspect-[3/2]">
                <Image
                  src={labels.src}
                  alt={labels.alt[lang]}
                  fill
                  sizes="(min-width: 1280px) 700px, (min-width: 768px) 58vw, 100vw"
                  className="object-cover object-[50%_45%]"
                />
              </div>
            </Reveal>
            <Reveal className="md:col-span-5" delay={120}>
              <p className="text-2xl font-bold tracking-tight text-green-900">{t.services.labelsCaption}</p>
              <p className="mt-4 text-lg text-muted">{t.brand.bilingual}.</p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Prescriptions: transfer or refill by phone. */}
      <section className="bg-green-900 text-white">
        <Container className="py-16 sm:py-20">
          <Reveal className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow tone="cream">{t.services.rxEyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.services.rxTitle}</h2>
              <p className="mt-5 max-w-prose text-lg text-white/85">{t.services.rxText}</p>
              <p className="mt-3 max-w-prose text-base text-teal-light">{t.services.rxNote}</p>
            </div>
            <div className="md:col-span-5 md:self-center md:justify-self-end">
              <ButtonLink href={tel} icon="phone" tone="onDark">
                {t.services.rxCall}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* Insurance: only an invitation to ask. */}
      <section className="border-b border-line">
        <Container className="py-16 sm:py-20">
          <Reveal className="grid gap-8 md:grid-cols-12">
            <div className="md:col-span-7">
              <Eyebrow tone="orange">{t.services.insuranceEyebrow}</Eyebrow>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-green-900 sm:text-4xl">
                {t.services.insuranceTitle}
              </h2>
              <p className="mt-5 max-w-prose text-lg text-ink/85">{t.services.insuranceText}</p>
            </div>
            <div className="md:col-span-5 md:self-center md:justify-self-end">
              <ButtonLink href={tel} icon="phone" tone="secondary">
                {t.services.insuranceCall}
              </ButtonLink>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
