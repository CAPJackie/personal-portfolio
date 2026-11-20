import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { SkillBadge } from "@/components/site/skill-badge";
import { profile } from "@/data/profile";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { getAlternates } from "@/lib/metadata";
import { cssVars, formatRange, getDomain, getYearTicks, layers, placeDates } from "@/lib/trace";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return {
    title: getDictionary(locale).about.title,
    description: profile.copy[locale].intro,
    alternates: getAlternates(locale, "/about"),
  };
}

export default async function AboutPage() {
  const locale = await getLocale();
  const t = getDictionary(locale);
  const copy = profile.copy[locale];
  const domain = getDomain(profile.experience);
  const ticks = getYearTicks(domain);

  return (
    <PageShell locale={locale} path="/about">
      <article className="about">
        <h1 className="about__title">{copy.aboutTitle}</h1>

        <div className="about__story">
          {copy.story.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <section aria-labelledby={`experience-${locale}`}>
          <h2 id={`experience-${locale}`} className="section-title">
            {t.about.experience}
          </h2>
          <div className="axis axis--static" aria-hidden>
            {ticks.map((tick) => (
              <span key={tick.year} style={cssVars({ "--x": tick.x })}>
                {tick.year}
              </span>
            ))}
          </div>
          <ol className="experience">
            {profile.experience.map((job) => {
              const { start, dur } = placeDates(job, domain);
              return (
                <li
                  key={`${job.company}-${job.startDate}`}
                  style={cssVars({ "--start": start, "--dur": dur })}
                >
                  <i className="experience__bar" aria-hidden />
                  <h3>
                    {job[locale].role}, {job.company}
                  </h3>
                  <p className="experience__dates">{formatRange(job, locale)}</p>
                </li>
              );
            })}
          </ol>
        </section>

        <section aria-labelledby={`education-${locale}`}>
          <h2 id={`education-${locale}`} className="section-title">
            {t.about.education}
          </h2>
          <div className="education">
            <h3>{copy.education.degree}</h3>
            <p>
              {copy.education.school}, {copy.education.years}
            </p>
          </div>
        </section>

        <section aria-labelledby={`skills-${locale}`}>
          <h2 id={`skills-${locale}`} className="section-title">
            {t.about.skills}
          </h2>
          <dl className="skills">
            {layers.map((layer) => (
              <div key={layer}>
                <dt>{t.layers[layer]}</dt>
                <dd>
                  {profile.skills[layer].map((skill) => (
                    <SkillBadge key={skill.name} skill={skill} layer={layer} locale={locale} />
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      </article>
    </PageShell>
  );
}
