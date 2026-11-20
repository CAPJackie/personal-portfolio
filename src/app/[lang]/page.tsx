import Link from "next/link";
import { StackStory, Statement } from "@/components/site/home-story";
import { PageShell } from "@/components/site/page-shell";
import { CareerTrace } from "@/components/trace/career-trace";
import { buttonVariants } from "@/components/ui/button";
import { profile } from "@/data/profile";
import { localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { cssVars } from "@/lib/trace";

export default async function HomePage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const copy = profile.copy[locale];
  const longestLine = Math.max(...copy.headline.map((line) => line.length));

  return (
    <PageShell locale={locale}>
      <section className="hero">
        <h1
          className="hero__title"
          aria-label={copy.headline.join(" ")}
          style={cssVars({ "--chars": longestLine })}
        >
          {copy.headline.map((line, index) => (
            <span key={line} className="hero__line" aria-hidden style={cssVars({ "--i": index })}>
              <span>{line}</span>
            </span>
          ))}
        </h1>
        <div className="hero__foot">
          <p>{copy.intro}</p>
          <Link href={localizedPath(locale, `#${t.home.anchor}`)} className={buttonVariants()}>
            {t.home.cta}
          </Link>
        </div>
      </section>

      <Statement locale={locale} />
      <StackStory locale={locale} />
      <CareerTrace locale={locale} />

      <section className="home-about">
        <p>{copy.homeAbout}</p>
        <div className="home-about__links">
          <Link href={localizedPath(locale, "/about")} className={buttonVariants()}>
            {t.home.aboutCta}
          </Link>
          <Link
            href={localizedPath(locale, "/projects")}
            className={buttonVariants({ variant: "outline" })}
          >
            {t.home.projectsCta}
          </Link>
        </div>
      </section>
    </PageShell>
  );
}
