import Link from "next/link";
import { ViewTransition } from "react";
import { SpanBar } from "@/components/trace/span-bar";
import { type Locale, localizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { getProjects } from "@/lib/projects";
import {
  cssVars,
  formatYears,
  getDomain,
  getProjectLayers,
  getYearTicks,
  layers,
  placeDates,
} from "@/lib/trace";

export async function CareerTrace({ locale }: { locale: Locale }) {
  const t = getDictionary(locale);
  const projects = await getProjects(locale);
  const domain = getDomain(projects);
  const ticks = getYearTicks(domain);
  const titleId = `work-title-${locale}`;

  return (
    <section id={t.home.anchor} className="career" aria-labelledby={titleId}>
      <div className="career__pin">
        <div className="career__head">
          <div>
            <h2 id={titleId} className="career__title">
              {t.home.workTitle}
            </h2>
            <fieldset className="layer-filter">
              <legend className="sr-only">{t.home.filterLabel}</legend>
              <label>
                <input type="radio" name={`layer-${locale}`} value="all" defaultChecked />
                {t.home.allAreas}
              </label>
              {layers.map((layer) => (
                <label key={layer} data-layer={layer}>
                  <input type="radio" name={`layer-${locale}`} value={layer} />
                  {t.layers[layer]}
                </label>
              ))}
            </fieldset>
          </div>
          <p
            className="career__year"
            aria-hidden
            style={cssVars({ "--from": domain.startYear, "--to": domain.endYear })}
          />
        </div>

        <div className="lanes" style={cssVars({ "--rows": projects.length })}>
          <div className="axis" aria-hidden>
            {ticks.map((tick) => (
              <span key={tick.year} style={cssVars({ "--x": tick.x })}>
                {tick.year}
              </span>
            ))}
          </div>

          <ol className="lanes__rows">
            {projects.map((project) => {
              const { start, dur } = placeDates(project, domain);
              const tipId = `tip-${locale}-${project.slug}`;

              return (
                <li
                  key={project.slug}
                  className="row"
                  data-layers={getProjectLayers(project).join(" ")}
                  data-tip={start > 55 ? "end" : "start"}
                  style={cssVars({ "--start": start, "--dur": dur })}
                >
                  <div className="row__label">
                    <h3 className="row__name">
                      <ViewTransition
                        name={`project-title-${project.slug}`}
                        share="morph"
                        default="none"
                      >
                        <Link
                          href={localizedPath(locale, `/work/${project.slug}`)}
                          prefetch
                          className="row__link"
                          aria-describedby={tipId}
                        >
                          {project.name}
                        </Link>
                      </ViewTransition>
                    </h3>
                    <p className="row__dates">{formatYears(project, locale)}</p>
                  </div>
                  <div className="row__lane">
                    <div className="row__bar">
                      <ViewTransition
                        name={`project-bar-${project.slug}`}
                        share="morph"
                        default="none"
                      >
                        <SpanBar project={project} />
                      </ViewTransition>
                    </div>
                    <p id={tipId} role="tooltip" className="row__tip">
                      {project.tagline}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="playhead" aria-hidden>
            <i />
          </div>
        </div>
      </div>
    </section>
  );
}
