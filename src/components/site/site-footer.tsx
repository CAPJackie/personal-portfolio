import { Suspense } from "react";
import { LocalTime } from "@/components/site/local-time";
import { profile } from "@/data/profile";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SiteFooter({ locale, contactId }: { locale: Locale; contactId: string }) {
  const t = getDictionary(locale);

  return (
    <footer className="site-foot">
      <h2 className="site-foot__title">
        <button type="button" popoverTarget={contactId}>
          {t.footer.title}
        </button>
      </h2>
      <div className="site-foot__meta">
        <p>
          {profile.copy[locale].location},{" "}
          <Suspense fallback={<span className="local-time">{t.footer.localTime}</span>}>
            <LocalTime locale={locale} />
          </Suspense>
        </p>
        <ul>
          {profile.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} rel="noreferrer" target="_blank">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
