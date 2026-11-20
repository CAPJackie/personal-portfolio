import type { CSSProperties } from "react";
import { profile } from "@/data/profile";
import type { Layer, Project } from "@/data/projects";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";

export const layers: Layer[] = ["interface", "backend", "data", "team"];

type Dated = { startDate: string; endDate: string | null };
export type Domain = { from: number; to: number; startYear: number; endYear: number };

function toMonths(date: string) {
  const [year, month] = date.split("-").map(Number);
  return year * 12 + month - 1;
}

const round = (value: number) => Math.round(value * 100) / 100;

export function cssVars(values: Record<`--${string}`, string | number>) {
  return values as CSSProperties;
}

/** The whole calendar years that contain every item. */
export function getDomain(items: Dated[]): Domain {
  const startYear = Math.min(...items.map((item) => Number(item.startDate.slice(0, 4))));
  const endYear = Math.max(
    ...items.map((item) => Number((item.endDate ?? profile.traceEnd).slice(0, 4))),
  );
  return { from: startYear * 12, to: (endYear + 1) * 12, startYear, endYear };
}

/** Position on the timeline, as percentages of its width. */
export function placeDates(item: Dated, domain: Domain) {
  const size = domain.to - domain.from;
  const start = toMonths(item.startDate) - domain.from;
  const end = toMonths(item.endDate ?? profile.traceEnd) + 1 - domain.from;
  return { start: round((start / size) * 100), dur: round(((end - start) / size) * 100) };
}

export function getYearTicks(domain: Domain) {
  const count = domain.endYear - domain.startYear + 1;
  return Array.from({ length: count }, (_, index) => ({
    year: domain.startYear + index,
    x: round((index / count) * 100),
  }));
}

export function getProjectLayers(project: Project) {
  return layers.filter(
    (layer) => project.stack[layer] || project.highlights.some((item) => item.layer === layer),
  );
}

function formatMonth(date: string, locale: Locale) {
  const [year, month] = date.split("-").map(Number);
  return new Intl.DateTimeFormat(locale, {
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1)));
}

export function formatRange(item: Dated, locale: Locale) {
  const { to, now } = getDictionary(locale).time;
  const end = item.endDate ? formatMonth(item.endDate, locale) : now;
  return `${formatMonth(item.startDate, locale)} ${to} ${end}`;
}

export function formatYears(item: Dated, locale: Locale) {
  const { to, now } = getDictionary(locale).time;
  const start = item.startDate.slice(0, 4);
  const end = item.endDate?.slice(0, 4) ?? now;
  return start === end ? start : `${start} ${to} ${end}`;
}
