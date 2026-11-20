import { connection } from "next/server";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/** The one per-request value on the site. It streams into the static shell. */
export async function LocalTime({ locale }: { locale: Locale }) {
  await connection();

  const time = new Intl.DateTimeFormat(locale, {
    hour: "numeric",
    minute: "2-digit",
    timeZone: profile.timeZone,
  }).format(new Date());

  return (
    <span className="local-time">
      {time} {getDictionary(locale).footer.localTime}
    </span>
  );
}
