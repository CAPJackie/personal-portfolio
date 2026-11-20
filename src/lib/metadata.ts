import type { Metadata } from "next";
import { type Locale, locales, localizedPath } from "@/i18n/config";

/** Canonical and alternate-language links for a page. */
export function getAlternates(locale: Locale, path = ""): Metadata["alternates"] {
  return {
    canonical: localizedPath(locale, path),
    languages: Object.fromEntries(locales.map((item) => [item, localizedPath(item, path)])),
  };
}
