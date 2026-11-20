# Personal portfolio

@AGENTS.md

Bilingual (en/es) personal portfolio. The career is drawn as a "trace" (like a distributed-tracing
waterfall): each job/project is a span across layers `interface | backend | data | team`.
Static content, no database or env vars. Not a git repo yet.

## Commands

```bash
npm run dev        # http://localhost:3000 → redirects to /en or /es
npm run validate   # lint + typecheck + build — runs automatically on git push (husky)
```

## Architecture

```
src/proxy.ts                 Locale negotiation: NEXT_LOCALE cookie → Accept-Language → "en";
                             redirects to /<lang>/…
src/i18n/                    config.ts (locales, localizedPath), dictionaries.ts (UI strings), get-locale.ts
src/app/[lang]/              layout, home, about/, work/, projects/, not-found, [...missing] catch-all
src/app/                     robots.ts, sitemap.ts, opengraph-image.tsx, icon.svg
src/data/                    profile.ts, projects.ts, side-projects.ts — the content (bilingual fields)
src/lib/                     projects.ts / side-projects.ts (read layer over data/), trace.ts
                             (timeline math for spans), metadata.ts (per-page SEO)
src/components/trace/        career-trace, span-bar, project-highlights
src/components/site/         Layout pieces · components/ui/ shadcn (badge, button)
src/styles/*.css             Section stylesheets (site, trace, story, project, side) + Tailwind v4 in globals.css
```

## Conventions

- Content changes go in `src/data/*` only; pages read it through `src/lib/*` (so a DB can replace it later).
- Every user-visible string exists in both `en` and `es` (dictionaries or bilingual data fields).
- Internal links: `localizedPath(locale, "/path")` — never hardcode `/en/...`.
- New pages need metadata via `src/lib/metadata.ts` and an entry in `sitemap.ts`.
