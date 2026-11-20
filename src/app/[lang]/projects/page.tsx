import type { Metadata } from "next";
import { PageShell } from "@/components/site/page-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { getAlternates } from "@/lib/metadata";
import { getSideProjects } from "@/lib/side-projects";
import { formatYears } from "@/lib/trace";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale).side;
  return {
    title: t.title,
    description: t.intro,
    alternates: getAlternates(locale, "/projects"),
  };
}

export default async function SideProjectsPage() {
  const locale = await getLocale();
  const t = getDictionary(locale).side;
  const projects = await getSideProjects(locale);

  return (
    <PageShell locale={locale} path="/projects">
      <article className="side">
        <header className="side__intro">
          <h1 className="side__title">{t.title}</h1>
          <p>{t.intro}</p>
        </header>

        <ol className="side__list">
          {projects.map((project) => (
            <li key={project.slug} className="side-card" data-layer={project.accent}>
              <div className="side-card__head">
                <p className="side-card__meta">
                  <span className="side-card__status" data-status={project.status}>
                    {t.status[project.status]}
                  </span>
                  <span>{formatYears(project, locale)}</span>
                </p>
                <h2 className="side-card__name">{project.name}</h2>
                <p className="side-card__tagline">{project.tagline}</p>
              </div>

              <div className="side-card__body">
                <ul className="side-card__points">
                  {project.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <ul className="side-card__stack" aria-label={t.stack}>
                  {project.stack.map((tool) => (
                    <li key={tool}>
                      <Badge layer={project.accent}>{tool}</Badge>
                    </li>
                  ))}
                </ul>
                <div className="side-card__links">
                  {project.links.live ? (
                    <a
                      className={buttonVariants()}
                      href={project.links.live}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {t.visit}
                    </a>
                  ) : null}
                  <a
                    className={buttonVariants({ variant: "outline" })}
                    href={project.links.code}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t.code}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </article>
    </PageShell>
  );
}
