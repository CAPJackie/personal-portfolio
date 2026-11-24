import { cacheLife, cacheTag } from "next/cache";
import { type Project, type ProjectRecord, projects } from "@/data/projects";
import type { Locale } from "@/i18n/config";

/**
 * The only module that knows where project data comes from.
 * To move to a database, replace the bodies below and keep the signatures.
 */

function localize({ copy, ...record }: ProjectRecord, locale: Locale): Project {
  return { ...record, ...copy[locale] };
}

async function getSorted(locale: Locale) {
  "use cache";
  cacheLife("days");
  cacheTag("projects");

  return [...projects]
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .map((project) => localize(project, locale));
}

/** Professional experience: what the career trace shows. */
export async function getProjects(locale: Locale) {
  return (await getSorted(locale)).filter((project) => project.kind !== "university");
}

/** Coursework, listed with the side projects instead of the career trace. */
export async function getUniversityProjects(locale: Locale) {
  return (await getSorted(locale)).filter((project) => project.kind === "university");
}

export async function getProject(locale: Locale, slug: string) {
  "use cache";
  cacheLife("days");
  cacheTag("projects", `project-${slug}`);

  const project = projects.find((item) => item.slug === slug);
  return project ? localize(project, locale) : null;
}

export async function getNextProject(locale: Locale, slug: string) {
  "use cache";
  cacheLife("days");
  cacheTag("projects");

  const current = projects.find((project) => project.slug === slug);
  const ordered =
    current?.kind === "university"
      ? await getUniversityProjects(locale)
      : await getProjects(locale);
  const index = ordered.findIndex((project) => project.slug === slug);
  return ordered[(index + 1) % ordered.length];
}
