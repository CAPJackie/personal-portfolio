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

export async function getProjects(locale: Locale) {
  "use cache";
  cacheLife("days");
  cacheTag("projects");

  return [...projects]
    .sort((a, b) => a.startDate.localeCompare(b.startDate))
    .map((project) => localize(project, locale));
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

  const ordered = await getProjects(locale);
  const index = ordered.findIndex((project) => project.slug === slug);
  return ordered[(index + 1) % ordered.length];
}
