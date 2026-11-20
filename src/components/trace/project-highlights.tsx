import type { Project } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export function ProjectHighlights({ project, locale }: { project: Project; locale: Locale }) {
  const t = getDictionary(locale);
  const titleId = `highlights-title-${locale}-${project.slug}`;

  return (
    <section className="highlights" aria-labelledby={titleId}>
      <h2 id={titleId} className="section-title">
        {t.project.highlights}
      </h2>
      <ol className="highlights__list">
        {project.highlights.map((item, index) => (
          <li key={item.title}>
            <details
              className="span"
              name={`highlights-${locale}-${project.slug}`}
              open={index === 0}
              data-layer={item.layer}
            >
              <summary>
                <span className="span__name">{item.title}</span>
                <span className="span__layer">{t.layers[item.layer]}</span>
              </summary>
              <p className="span__body">{item.detail}</p>
            </details>
          </li>
        ))}
      </ol>
    </section>
  );
}
