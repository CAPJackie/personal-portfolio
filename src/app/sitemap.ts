import type { MetadataRoute } from "next";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { locales } from "@/i18n/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/about", "/projects", ...projects.map(({ slug }) => `/work/${slug}`)];

  return paths.map((path) => ({
    url: `${profile.siteUrl}/en${path}`,
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, `${profile.siteUrl}/${locale}${path}`]),
      ),
    },
  }));
}
