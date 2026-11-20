import { notFound } from "next/navigation";
import { lang } from "next/root-params";
import { hasLocale } from "@/i18n/config";

export async function getLocale() {
  const locale = await lang();
  if (!hasLocale(locale)) notFound();
  return locale;
}
