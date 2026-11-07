import { notFound } from "next/navigation";
import { getDictionary, isLang, type Dictionary } from "./i18n";
import type { Lang } from "./site";

export type LangParams = Promise<{ lang: string }>;

/** Resolve the [lang] segment, 404 for anything that is not en or ko. */
export async function resolveLang(params: LangParams): Promise<{ lang: Lang; t: Dictionary }> {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  return { lang, t: getDictionary(lang) };
}
