import type { ReactNode } from "react";
import { ContactPanel } from "@/components/site/contact-panel";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

/**
 * Lives in each page rather than the layout so the language link can point at
 * the same page in the other language without any client-side code.
 */
export function PageShell({
  locale,
  path = "",
  children,
}: {
  locale: Locale;
  path?: string;
  children: ReactNode;
}) {
  // Next keeps visited pages mounted but hidden, so ids must differ between pages.
  const pageId = `${locale}${path}`.replace(/[^a-z0-9]+/gi, "-");
  const contactId = `contact-panel-${pageId}`;

  return (
    <>
      <a className="skip-link" href={`#content-${pageId}`}>
        {getDictionary(locale).skipLink}
      </a>
      <SiteHeader
        locale={locale}
        path={path}
        contactId={contactId}
        menuId={`site-menu-${pageId}`}
      />
      <main id={`content-${pageId}`}>{children}</main>
      <SiteFooter locale={locale} contactId={contactId} />
      <ContactPanel id={contactId} locale={locale} />
    </>
  );
}
