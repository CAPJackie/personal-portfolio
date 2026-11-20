import type { Route } from "next";

export const locales = ["en", "es"] as const;
export const defaultLocale = "en";
export const localeCookie = "NEXT_LOCALE";

export type Locale = (typeof locales)[number];

export function hasLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

/** Builds a link inside a language, for example ("es", "/about") to /es/about. */
export function localizedPath(locale: Locale, path = "") {
  return `/${locale}${path}` as Route;
}
