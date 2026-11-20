import Link from "next/link";
import { PageShell } from "@/components/site/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/i18n/get-locale";

export default async function NotFound() {
  const locale = await getLocale();
  const t = getDictionary(locale).notFound;

  return (
    <PageShell locale={locale}>
      <section className="missing">
        <div className="missing__bar" aria-hidden />
        <h1>{t.title}</h1>
        <p>{t.body}</p>
        <Link href={localizedPath(locale)} className={buttonVariants()}>
          {t.cta}
        </Link>
      </section>
    </PageShell>
  );
}
