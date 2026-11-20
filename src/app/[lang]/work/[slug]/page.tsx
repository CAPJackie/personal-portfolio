import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ViewTransition } from "react";
import { PageShell } from "@/components/site/page-shell";
import { ProjectHighlights } from "@/components/trace/project-highlights";
import { SpanBar } from "@/components/trace/span-bar";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getLocale } from "@/i18n/get-locale";
import { getAlternates } from "@/lib/metadata";
import { getNextProject, getProject } from "@/lib/projects";
import { formatRange, layers } from "@/lib/trace";

export function generateStaticParams() {
  return projects.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[lang]/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProject(locale, slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.tagline,
    alternates: getAlternates(locale, `/work/${slug}`),
  };
}

export default async function ProjectPage({ params }: PageProps<"/[lang]/work/[slug]">) {
  const { slug } = await params;
  const locale = await getLocale();
  const project = await getProject(locale, slug);
  if (!project) notFound();

  const t = getDictionary(locale);
  const next = await getNextProject(locale, slug);
  const resultsId = `results-${locale}-${slug}`;
  const stackId = `stack-${locale}-${slug}`;

  return (
    <PageShell locale={locale} path={`/work/${slug}`}>
      <article className="project">
        <header className="project__head">
          <Link href={localizedPath(locale, `#${t.home.anchor}`)} className="back-link">
            {t.project.allWork}
          </Link>
          <ViewTransition name={`project-title-${project.slug}`} share="morph" default="none">
            <h1 className="project__name">{project.name}</h1>
          </ViewTransition>
          <p className="project__tagline">{project.tagline}</p>
          <ViewTransition name={`project-bar-${project.slug}`} share="morph" default="none">
            <SpanBar project={project} />
          </ViewTransition>
          <dl className="project__facts">
            <div>
              <dt>{t.project.role}</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>{t.project.when}</dt>
              <dd>{formatRange(project, locale)}</dd>
            </div>
            <div>
              <dt>{t.project.type}</dt>
              <dd>{t.kinds[project.kind]}</dd>
            </div>
          </dl>
        </header>

        <div className="project__summary">
          {project.summary.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        <ProjectHighlights project={project} locale={locale} />

        {project.outcomes.length > 0 ? (
          <section className="project__results" aria-labelledby={resultsId}>
            <h2 id={resultsId} className="section-title">
              {t.project.results}
            </h2>
            <ul className="outcomes">
              {project.outcomes.map((outcome) => (
                <li key={outcome.label}>
                  <strong>{outcome.value}</strong> {outcome.label}
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <section className="project__stack" aria-labelledby={stackId}>
          <h2 id={stackId} className="section-title">
            {t.project.stack}
          </h2>
          <dl>
            {layers.map((layer) =>
              project.stack[layer] ? (
                <div key={layer}>
                  <dt>{t.layers[layer]}</dt>
                  <dd>
                    {project.stack[layer].map((tool) => (
                      <Badge key={tool} layer={layer}>
                        {tool}
                      </Badge>
                    ))}
                  </dd>
                </div>
              ) : null,
            )}
          </dl>
        </section>

        <Link href={localizedPath(locale, `/work/${next.slug}`)} prefetch className="next-project">
          <span>{t.project.next}</span>
          <ViewTransition name={`project-title-${next.slug}`} share="morph" default="none">
            <strong>{next.name}</strong>
          </ViewTransition>
        </Link>
      </article>
    </PageShell>
  );
}
