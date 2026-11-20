import type { Layer } from "./projects";

/** Facts provided by Juan and from his LinkedIn profile, in both site languages. */
export const profile = {
  name: "Juan Ramirez",
  shortName: "Juan",
  role: "Senior Next.js Engineer",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  timeZone: "America/Bogota",
  email: "c4pjackie@gmail.com",
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/c4pjackie/" }],
  /** The month ongoing work reaches on the timeline. */
  traceEnd: "2026-11",
  copy: {
    en: {
      location: "Bogotá, Colombia",
      headline: ["Fast interfaces.", "Solid backends."],
      intro:
        "Senior engineer in Bogotá. Next.js and React up front, .NET, Node.js and Azure behind them.",
      statement: "For the last three years I’ve worked deeply with Next.js, .NET, MySQL and Azure.",
      stackTitle: "One request, end to end",
      homeAbout: "I also interview engineers, mentor teams and give talks.",
      aboutTitle: "From the interface to the database.",
      story: [
        "Senior Software Engineer at Perficient. I’ve been building web and mobile products since 2019.",
        "Next.js and React are my focus, and I work a lot on the backend. Lately I’m also bringing generative AI into web products.",
      ],
      education: {
        degree: "Software Engineering",
        school: "Escuela Colombiana de Ingeniería Julio Garavito",
        years: "2015 to 2019",
      },
    },
    es: {
      location: "Bogotá, Colombia",
      headline: ["Interfaces rápidas.", "Backends sólidos."],
      intro: "Ingeniero senior en Bogotá. Next.js y React al frente, .NET, Node.js y Azure detrás.",
      statement: "Los últimos tres años he trabajado a fondo con Next.js, .NET, MySQL y Azure.",
      stackTitle: "Una petición, de punta a punta",
      homeAbout: "También entrevisto ingenieros, acompaño equipos y doy charlas.",
      aboutTitle: "De la interfaz a la base de datos.",
      story: [
        "Senior Software Engineer en Perficient. Construyo productos web y móviles desde 2019.",
        "Next.js y React son mi enfoque, y trabajo mucho en el backend. Últimamente también llevo IA generativa a productos web.",
      ],
      education: {
        degree: "Ingeniería de Software",
        school: "Escuela Colombiana de Ingeniería Julio Garavito",
        years: "2015 a 2019",
      },
    },
  },
  /** The scroll story on the home page, one stop per part of the stack. */
  chapters: [
    {
      layer: "interface",
      name: "Next.js",
      tools: "React, TypeScript",
      label: { en: "Interface", es: "Interfaz" },
    },
    {
      layer: "backend",
      name: ".NET",
      tools: "Node.js, REST APIs",
      label: { en: "API", es: "API" },
    },
    { layer: "data", name: "MySQL", tools: "MongoDB, Redis", label: { en: "Data", es: "Datos" } },
    { layer: "team", name: "Azure", tools: "Vercel", label: { en: "Cloud", es: "Nube" } },
  ] satisfies { layer: Layer; name: string; tools: string; label: { en: string; es: string } }[],
  experience: [
    {
      startDate: "2021-02",
      endDate: null,
      company: "Perficient",
      en: { role: "Senior Software Engineer" },
      es: { role: "Senior Software Engineer" },
    },
    {
      startDate: "2022-01",
      endDate: "2022-12",
      company: "Escuela Colombiana de Ingeniería",
      en: { role: "University Instructor" },
      es: { role: "Profesor universitario" },
    },
    {
      startDate: "2020-02",
      endDate: "2021-02",
      company: "SmartSoft Solutions",
      en: { role: "Mobile Engineer" },
      es: { role: "Ingeniero móvil" },
    },
    {
      startDate: "2019-07",
      endDate: "2020-02",
      company: "Asesoftware",
      en: { role: "Software Developer" },
      es: { role: "Desarrollador de software" },
    },
    {
      startDate: "2016-08",
      endDate: "2019-10",
      company: "Escuela Colombiana de Ingeniería",
      en: { role: "Academic Monitor" },
      es: { role: "Monitor académico" },
    },
  ],
  /** Each skill explains, in a tooltip on the About page, where and how it was used. */
  skills: {
    interface: [
      {
        name: "Next.js",
        where: { en: "Perficient and side projects", es: "Perficient y proyectos personales" },
        detail: {
          en: "Production apps for enterprise clients with server rendering, static generation, the App Router and Server Components, tuned for speed and SEO. It is also the base of my side projects and this site.",
          es: "Aplicaciones en producción para clientes empresariales con renderizado en servidor, generación estática, App Router y Server Components, optimizadas para velocidad y SEO. También es la base de mis proyectos personales y de este sitio.",
        },
      },
      {
        name: "React",
        where: { en: "Perficient and university", es: "Perficient y universidad" },
        detail: {
          en: "Behind every interface I build. I mentor engineers on its practices, interview React candidates and taught React SPAs and PWAs at university.",
          es: "Está detrás de cada interfaz que construyo. Acompaño a ingenieros en sus buenas prácticas, entrevisto candidatos de React y enseñé SPA y PWA con React en la universidad.",
        },
      },
      {
        name: "TypeScript",
        where: { en: "Perficient", es: "Perficient" },
        detail: {
          en: "The language of my Next.js and React work for enterprise clients.",
          es: "El lenguaje de mi trabajo con Next.js y React para clientes empresariales.",
        },
      },
      {
        name: "Tailwind CSS",
        where: { en: "Perficient", es: "Perficient" },
        detail: {
          en: "Styling responsive interfaces in Next.js projects, including this site.",
          es: "Estilos de interfaces adaptables en proyectos Next.js, incluido este sitio.",
        },
      },
      {
        name: "React Native",
        where: { en: "SmartSoft Solutions, 2020 to 2021", es: "SmartSoft Solutions, 2020 a 2021" },
        detail: {
          en: "iOS and Android apps for Colombian clients from one codebase, with authentication, data fetching and state management.",
          es: "Aplicaciones iOS y Android para clientes colombianos desde un mismo código, con autenticación, consulta de datos y manejo de estado.",
        },
      },
      {
        name: "Vue, Angular, Astro",
        where: { en: "Frameworks Lab, 2026", es: "Frameworks Lab, 2026" },
        detail: {
          en: "I built the same app in Vue, Angular, Astro, TanStack Start and Next.js to compare how each handles state, routing and rendering.",
          es: "Construí la misma app en Vue, Angular, Astro, TanStack Start y Next.js para comparar cómo maneja cada uno el estado, el enrutado y el renderizado.",
        },
      },
    ],
    backend: [
      {
        name: ".NET",
        where: { en: "Perficient, last 3 years", es: "Perficient, últimos 3 años" },
        detail: {
          en: "My main backend for the last three years, working alongside Azure and MySQL.",
          es: "Mi backend principal en los últimos tres años, junto con Azure y MySQL.",
        },
      },
      {
        name: "Node.js",
        where: { en: "Perficient and side projects", es: "Perficient y proyectos personales" },
        detail: {
          en: "Full-stack features on the MERN stack, connecting REST APIs to React frontends. In Setlist Extractor, Route Handlers stream results live with Server-Sent Events.",
          es: "Funcionalidades full-stack en el stack MERN, conectando APIs REST con frontends en React. En Setlist Extractor, los Route Handlers envían resultados en vivo con Server-Sent Events.",
        },
      },
      {
        name: "Express",
        where: { en: "Perficient", es: "Perficient" },
        detail: {
          en: "REST APIs on the MERN stack that feed React interfaces.",
          es: "APIs REST en el stack MERN que alimentan interfaces en React.",
        },
      },
      {
        name: "REST APIs",
        where: { en: "My whole career", es: "Toda mi carrera" },
        detail: {
          en: "From the APIs behind my Next.js apps to the Spring Boot APIs I taught at university, plus integrations with Spotify, ACRCloud, Riot Games and Groq in my side projects.",
          es: "Desde las APIs detrás de mis apps Next.js hasta las APIs con Spring Boot que enseñé en la universidad, además de integraciones con Spotify, ACRCloud, Riot Games y Groq en mis proyectos personales.",
        },
      },
      {
        name: "Azure",
        where: { en: "Perficient, last 3 years", es: "Perficient, últimos 3 años" },
        detail: {
          en: "The cloud behind my .NET and MySQL work for the last three years.",
          es: "La nube detrás de mi trabajo con .NET y MySQL en los últimos tres años.",
        },
      },
      {
        name: "LLM APIs",
        where: { en: "Perficient and side projects", es: "Perficient y proyectos personales" },
        detail: {
          en: "Generative AI features inside web products, built with modern prompt engineering. In Content Factory, Llama 3.1 on Groq turns search trends into product ideas.",
          es: "Funcionalidades de IA generativa dentro de productos web, con técnicas actuales de prompt engineering. En Content Factory, Llama 3.1 en Groq convierte tendencias de búsqueda en ideas de producto.",
        },
      },
      {
        name: "Auth.js",
        where: { en: "Setlist Extractor", es: "Setlist Extractor" },
        detail: {
          en: "Sign-in with email and password, hashed with bcrypt, and with Google.",
          es: "Inicio de sesión con correo y contraseña, cifrada con bcrypt, y con Google.",
        },
      },
      {
        name: "Stripe",
        where: { en: "Setlist Extractor", es: "Setlist Extractor" },
        detail: {
          en: "Free and Pro plans with monthly limits, with emails sent through Resend.",
          es: "Planes Free y Pro con límites mensuales, con correos enviados a través de Resend.",
        },
      },
      {
        name: "Vercel",
        where: { en: "Side projects", es: "Proyectos personales" },
        detail: {
          en: "Where my Next.js side projects are deployed, including Setlist Extractor and LoL Skill.",
          es: "Donde despliego mis proyectos personales en Next.js, como Setlist Extractor y LoL Skill.",
        },
      },
    ],
    data: [
      {
        name: "MySQL",
        where: { en: "Perficient, last 3 years", es: "Perficient, últimos 3 años" },
        detail: {
          en: "The relational database of my .NET work for the last three years.",
          es: "La base de datos relacional de mi trabajo con .NET en los últimos tres años.",
        },
      },
      {
        name: "MongoDB",
        where: { en: "Perficient and Setlist Extractor", es: "Perficient y Setlist Extractor" },
        detail: {
          en: "Document storage for full-stack features on the MERN stack. In Setlist Extractor, MongoDB Atlas caches every result so repeated lookups are instant.",
          es: "Almacenamiento de documentos para funcionalidades full-stack en el stack MERN. En Setlist Extractor, MongoDB Atlas guarda cada resultado en caché para que las búsquedas repetidas sean instantáneas.",
        },
      },
      {
        name: "Redis",
        where: { en: "EciWar and LoL Skill", es: "EciWar y LoL Skill" },
        detail: {
          en: "Persistence for an online multiplayer game, and Vercel KV, built on Redis, for the LoL Skill blog.",
          es: "Persistencia para un juego multijugador en línea, y Vercel KV, basado en Redis, para el blog de LoL Skill.",
        },
      },
    ],
    team: [
      {
        name: "Technical interviews",
        where: { en: "Perficient", es: "Perficient" },
        detail: {
          en: "More than ten interviews for React and Next.js candidates.",
          es: "Más de diez entrevistas a candidatos de React y Next.js.",
        },
      },
      {
        name: "Mentoring",
        where: { en: "Perficient", es: "Perficient" },
        detail: {
          en: "Guiding junior and mid-level engineers on React practices, component architecture and code quality.",
          es: "Acompaño a ingenieros junior y semi senior en prácticas de React, arquitectura de componentes y calidad de código.",
        },
      },
      {
        name: "Tech talks",
        where: { en: "Perficient", es: "Perficient" },
        detail: {
          en: "Internal talks on generative AI, frontend architecture and engineering practices.",
          es: "Charlas internas sobre IA generativa, arquitectura frontend y prácticas de ingeniería.",
        },
      },
      {
        name: "Teaching",
        where: { en: "Escuela Colombiana de Ingeniería", es: "Escuela Colombiana de Ingeniería" },
        detail: {
          en: "Taught a Software Engineering course in 2022, after supporting courses as an academic monitor from 2016 to 2019.",
          es: "Dicté un curso de Ingeniería de Software en 2022, después de apoyar cursos como monitor académico de 2016 a 2019.",
        },
      },
    ],
  } satisfies Record<Layer, Skill[]>,
};

export type Skill = {
  name: string;
  where: { en: string; es: string };
  detail: { en: string; es: string };
};
