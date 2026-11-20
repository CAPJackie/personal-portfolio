import { cacheLife, cacheTag } from "next/cache";
import { type SideProject, type SideProjectRecord, sideProjects } from "@/data/side-projects";
import type { Locale } from "@/i18n/config";

/**
 * The only module that knows where personal project data comes from.
 * To move to a database, replace the body below and keep the signature.
 */

function localize({ copy, ...record }: SideProjectRecord, locale: Locale): SideProject {
  return { ...record, ...copy[locale] };
}

export async function getSideProjects(locale: Locale) {
  "use cache";
  cacheLife("days");
  cacheTag("side-projects");

  return sideProjects.map((project) => localize(project, locale));
}
