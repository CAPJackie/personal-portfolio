import type { Locale } from "@/i18n/config";
import type { Layer } from "./projects";

/**
 * Personal projects, from each repository's code, history and deploys.
 * Pages read this through src/lib/side-projects.ts, so a database can replace it later.
 */

export type SideProjectStatus = "live" | "prototype" | "study";

export type SideProjectCopy = {
  name: string;
  tagline: string;
  points: string[];
};

export type SideProjectRecord = {
  slug: string;
  status: SideProjectStatus;
  /** Format: YYYY-MM */
  startDate: string;
  /** Format: YYYY-MM, or null while ongoing. */
  endDate: string | null;
  /** Colours the card. */
  accent: Layer;
  links: { live?: string; code: string };
  stack: string[];
  copy: Record<Locale, SideProjectCopy>;
};

export type SideProject = Omit<SideProjectRecord, "copy"> & SideProjectCopy;

/** Shown in this order. */
export const sideProjects: SideProjectRecord[] = [
  {
    slug: "setlist-extractor",
    status: "live",
    startDate: "2026-04",
    endDate: null,
    accent: "backend",
    links: {
      live: "https://soundcloud-setlist-extractor.vercel.app",
      code: "https://github.com/CAPJackie/soundcloud-setlist-extractor",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Server-Sent Events",
      "MongoDB Atlas",
      "Auth.js",
      "Stripe",
      "Resend",
      "ACRCloud",
      "Spotify API",
      "Vercel",
    ],
    copy: {
      en: {
        name: "Setlist Extractor",
        tagline: "Finds every track in a SoundCloud DJ mix.",
        points: [
          "Reads the tracklist from the description, or identifies the audio every 80 seconds with ACRCloud.",
          "Tracks appear as they are found, streamed with Server-Sent Events, and results are cached in MongoDB.",
          "Accounts, Free and Pro plans with Stripe, Spotify playlist export and recommendations based on your sets.",
        ],
      },
      es: {
        name: "Setlist Extractor",
        tagline: "Encuentra cada canción de un mix de SoundCloud.",
        points: [
          "Lee la lista de canciones de la descripción, o identifica el audio cada 80 segundos con ACRCloud.",
          "Las canciones aparecen a medida que se encuentran, con Server-Sent Events, y los resultados quedan en caché en MongoDB.",
          "Cuentas, planes Free y Pro con Stripe, exportación a playlists de Spotify y recomendaciones según tus sets.",
        ],
      },
    },
  },
  {
    slug: "lol-skill",
    status: "live",
    startDate: "2019-12",
    endDate: "2026-04",
    accent: "interface",
    links: {
      live: "https://lol-info-app.vercel.app",
      code: "https://github.com/CAPJackie/lol-info-app",
    },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Server Actions",
      "Material UI",
      "Vercel KV",
      "Riot Games API",
      "Docker",
      "Vercel",
    ],
    copy: {
      en: {
        name: "LoL Skill",
        tagline: "My bootcamp project, rebuilt every time I learned something new.",
        points: [
          "League of Legends champions, a Challenger tier list and player search, with data from the Riot Games API.",
          "Started in 2019 as a React app for the Globant bootcamp, then moved from classes to Hooks and to TypeScript.",
          "Rewritten with the Next.js App Router and Server Actions, plus a blog stored in Vercel KV.",
        ],
      },
      es: {
        name: "LoL Skill",
        tagline: "Mi proyecto del bootcamp, reconstruido cada vez que aprendía algo nuevo.",
        points: [
          "Campeones de League of Legends, tier list Challenger y búsqueda de jugadores, con datos de la API de Riot Games.",
          "Empezó en 2019 como app en React para el bootcamp de Globant y pasó de clases a Hooks y luego a TypeScript.",
          "Reescrito con el App Router de Next.js y Server Actions, más un blog guardado en Vercel KV.",
        ],
      },
    },
  },
  {
    slug: "content-factory",
    status: "prototype",
    startDate: "2026-06",
    endDate: "2026-07",
    accent: "data",
    links: { code: "https://github.com/CAPJackie/proyecto-x" },
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "shadcn/ui",
      "Route Handlers",
      "Groq",
      "Llama 3.1",
    ],
    copy: {
      en: {
        name: "Content Factory",
        tagline: "Turns Google Trends into product ideas with AI.",
        points: [
          "Pulls the ten searches trending in Colombia from the Google Trends feed.",
          "Scores them from 0 to 100 and sorts them into three tiers by potential.",
          "Asks Llama 3.1 on Groq for a micro-product idea, from eBooks to checklists, sized to each tier.",
        ],
      },
      es: {
        name: "Content Factory",
        tagline: "Convierte las tendencias de Google en ideas de producto con IA.",
        points: [
          "Trae las diez búsquedas que son tendencia en Colombia desde el feed de Google Trends.",
          "Las puntúa de 0 a 100 y las agrupa en tres niveles según su potencial.",
          "Le pide a Llama 3.1 en Groq una idea de micro-producto, de eBooks a checklists, a la medida de cada nivel.",
        ],
      },
    },
  },
  {
    slug: "frameworks-lab",
    status: "study",
    startDate: "2026-09",
    endDate: "2026-09",
    accent: "team",
    links: { code: "https://github.com/CAPJackie/frontend-framework-learning" },
    stack: [
      "Turborepo",
      "pnpm",
      "Next.js",
      "Vue",
      "Angular",
      "Astro",
      "TanStack Start",
      "Zustand",
      "Pinia",
      "Recharts",
    ],
    copy: {
      en: {
        name: "Frameworks Lab",
        tagline: "The same app in five frameworks, side by side.",
        points: [
          "A counter, a saved to-do list, URL filters and a users page, built in Next.js, Vue, Angular, Astro and TanStack Start.",
          "Each one uses its own tools, from Zustand and Pinia to signals and nanostores, and a different rendering strategy.",
          "A Next.js hub compares the concepts and charts enterprise adoption from 2021 to 2025.",
        ],
      },
      es: {
        name: "Frameworks Lab",
        tagline: "La misma app en cinco frameworks, lado a lado.",
        points: [
          "Un contador, una lista de tareas guardada, filtros por URL y una página de usuarios, en Next.js, Vue, Angular, Astro y TanStack Start.",
          "Cada una usa sus propias herramientas, de Zustand y Pinia a signals y nanostores, y una estrategia de renderizado distinta.",
          "Un hub en Next.js compara los conceptos y grafica la adopción empresarial de 2021 a 2025.",
        ],
      },
    },
  },
];
