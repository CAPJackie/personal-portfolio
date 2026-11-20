import Link from "next/link";
import { profile } from "@/data/profile";
import { type Locale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function SiteHeader({
  locale,
  path,
  contactId,
  menuId,
}: {
  locale: Locale;
  path: string;
  contactId: string;
  menuId: string;
}) {
  const t = getDictionary(locale);
  const otherLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="site-head" style={{ viewTransitionName: "site-header" }}>
      <div className="site-head__inner">
        <Link href={localizedPath(locale)} className="site-head__name">
          <span className="site-head__full">{profile.name}</span>
          <span className="site-head__short">{profile.shortName}</span>
        </Link>
        <div className="site-head__actions">
          <span className="site-percent" aria-hidden />
          <button type="button" className="site-control site-menu-button" popoverTarget={menuId}>
            {t.nav.menu}
          </button>
          {/* A dropdown on small screens, a plain row of links on wider ones. */}
          <nav id={menuId} popover="auto" className="site-nav" aria-label={t.nav.label}>
            <Link href={localizedPath(locale, `#${t.home.anchor}`)}>{t.nav.work}</Link>
            <Link href={localizedPath(locale, "/projects")}>{t.nav.projects}</Link>
            <Link href={localizedPath(locale, "/about")}>{t.nav.about}</Link>
            <button type="button" popoverTarget={contactId}>
              {t.nav.contact}
            </button>
          </nav>
          <Link
            href={localizedPath(otherLocale, path)}
            hrefLang={otherLocale}
            lang={otherLocale}
            prefetch={false}
            scroll={false}
            className="site-control"
            aria-label={t.controls.language}
          >
            {t.controls.languageShort}
          </Link>
          <button
            type="button"
            className="site-control"
            data-theme-toggle
            aria-label={t.controls.theme}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden>
              <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M12 3a9 9 0 0 1 0 18Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
      <div className="site-progress" aria-hidden />
    </header>
  );
}
