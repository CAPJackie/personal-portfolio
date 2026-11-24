import type { Locale } from "@/i18n/config";

/**
 * Career and project facts from Juan's LinkedIn profile.
 * Pages read this through src/lib/projects.ts, so a database can replace it later.
 */

/** Every area of work, used to tag skills and cards. */
export type Area = "interface" | "backend" | "data" | "team";
/** The lanes of the career trace: the technical areas only. */
export type Layer = Exclude<Area, "team">;
export type ProjectKind = "work" | "teaching" | "university";

export type ProjectCopy = {
  name: string;
  tagline: string;
  summary: string[];
  role: string;
  highlights: { layer: Layer; title: string; detail: string }[];
  outcomes: { value: string; label: string }[];
};

export type ProjectRecord = {
  slug: string;
  kind: ProjectKind;
  /** Format: YYYY-MM */
  startDate: string;
  /** Format: YYYY-MM, or null while ongoing. */
  endDate: string | null;
  stack: Partial<Record<Layer, string[]>>;
  copy: Record<Locale, ProjectCopy>;
};

export type Project = Omit<ProjectRecord, "copy"> & ProjectCopy;

export const projects: ProjectRecord[] = [
  {
    slug: "froobger",
    kind: "university",
    startDate: "2017-03",
    endDate: "2017-05",
    stack: { interface: ["Java UI"], backend: ["Java", "Object-oriented programming"] },
    copy: {
      en: {
        name: "Froobger",
        tagline: "An arcade classic, rebuilt in Java.",
        summary: ["A remake of Frogger with new textures and design."],
        role: "Developer",
        highlights: [
          { layer: "interface", title: "New game design", detail: "New textures and a new look." },
          {
            layer: "backend",
            title: "Object-oriented architecture",
            detail: "A Java application built around OOP.",
          },
        ],
        outcomes: [{ value: "Best", label: "project of the course" }],
      },
      es: {
        name: "Froobger",
        tagline: "Un clásico arcade, reconstruido en Java.",
        summary: ["Una nueva versión de Frogger con texturas y diseño renovados."],
        role: "Desarrollador",
        highlights: [
          {
            layer: "interface",
            title: "Nuevo diseño del juego",
            detail: "Texturas nuevas y otra imagen.",
          },
          {
            layer: "backend",
            title: "Arquitectura orientada a objetos",
            detail: "Una aplicación Java construida con POO.",
          },
        ],
        outcomes: [{ value: "Mejor", label: "proyecto del curso" }],
      },
    },
  },
  {
    slug: "planning-tool",
    kind: "university",
    startDate: "2017-09",
    endDate: "2017-12",
    stack: { interface: ["JSF", "PrimeFaces"], backend: ["Java", "Google Guice"] },
    copy: {
      en: {
        name: "Planning tool",
        tagline: "Planning software for my university.",
        summary: ["Built for the Development Processes course by a five-person Scrum team."],
        role: "Developer",
        highlights: [
          { layer: "interface", title: "JSF interface", detail: "Built with JSF and PrimeFaces." },
          {
            layer: "backend",
            title: "Dependency injection",
            detail: "Organized with Google Guice.",
          },
        ],
        outcomes: [],
      },
      es: {
        name: "Herramienta de planeación",
        tagline: "Software de planeación para mi universidad.",
        summary: [
          "Creada para el curso de Procesos de Desarrollo por un equipo Scrum de cinco personas.",
        ],
        role: "Desarrollador",
        highlights: [
          {
            layer: "interface",
            title: "Interfaz con JSF",
            detail: "Construida con JSF y PrimeFaces.",
          },
          {
            layer: "backend",
            title: "Inyección de dependencias",
            detail: "Organizada con Google Guice.",
          },
        ],
        outcomes: [],
      },
    },
  },
  {
    slug: "eciwar",
    kind: "university",
    startDate: "2018-02",
    endDate: "2018-08",
    stack: {
      interface: ["Cocos2D"],
      backend: ["STOMP", "WebSockets", "REST APIs", "NGINX", "AWS EC2"],
      data: ["Redis"],
    },
    copy: {
      en: {
        name: "EciWar",
        tagline: "An online 2D shooter on a scalable architecture.",
        summary: [
          "Built for the Software Architectures course, with the focus on what runs underneath the game.",
        ],
        role: "Developer",
        highlights: [
          {
            layer: "backend",
            title: "Realtime messaging",
            detail: "STOMP, WebSockets and REST APIs.",
          },
          { layer: "backend", title: "Load balancing", detail: "NGINX on AWS EC2 instances." },
          { layer: "data", title: "Persistence", detail: "Redis and in-memory models." },
        ],
        outcomes: [],
      },
      es: {
        name: "EciWar",
        tagline: "Un shooter 2D en línea sobre una arquitectura escalable.",
        summary: [
          "Creado para el curso de Arquitecturas de Software, con el foco en lo que corre debajo del juego.",
        ],
        role: "Desarrollador",
        highlights: [
          {
            layer: "backend",
            title: "Mensajería en tiempo real",
            detail: "STOMP, WebSockets y APIs REST.",
          },
          { layer: "backend", title: "Balanceo de carga", detail: "NGINX en instancias AWS EC2." },
          { layer: "data", title: "Persistencia", detail: "Modelos en Redis y en memoria." },
        ],
        outcomes: [],
      },
    },
  },
  {
    slug: "asesoftware",
    kind: "work",
    startDate: "2019-07",
    endDate: "2020-02",
    stack: { interface: ["JavaScript"], backend: ["REST APIs"] },
    copy: {
      en: {
        name: "Asesoftware",
        tagline: "Where my career started.",
        summary: ["From an intensive training program to production projects."],
        role: "Software Developer",
        highlights: [
          {
            layer: "interface",
            title: "Web features",
            detail: "Built with a cross-functional team.",
          },
        ],
        outcomes: [],
      },
      es: {
        name: "Asesoftware",
        tagline: "Donde empezó mi carrera.",
        summary: ["De un programa intensivo de formación a proyectos en producción."],
        role: "Desarrollador de software",
        highlights: [
          {
            layer: "interface",
            title: "Funcionalidades web",
            detail: "Construidas con un equipo multidisciplinario.",
          },
        ],
        outcomes: [],
      },
    },
  },
  {
    slug: "smartsoft",
    kind: "work",
    startDate: "2020-02",
    endDate: "2021-02",
    stack: { interface: ["React Native", "JavaScript"], backend: ["REST APIs"] },
    copy: {
      en: {
        name: "SmartSoft Solutions",
        tagline: "Mobile apps with React Native.",
        summary: ["iOS and Android experiences for Colombian clients."],
        role: "Mobile Engineer",
        highlights: [
          {
            layer: "interface",
            title: "Shared features",
            detail: "One codebase for iOS and Android.",
          },
          { layer: "backend", title: "API integration", detail: "Authentication, data and state." },
        ],
        outcomes: [],
      },
      es: {
        name: "SmartSoft Solutions",
        tagline: "Aplicaciones móviles con React Native.",
        summary: ["Experiencias para iOS y Android dirigidas a clientes colombianos."],
        role: "Ingeniero móvil",
        highlights: [
          {
            layer: "interface",
            title: "Funcionalidades compartidas",
            detail: "Lógica común para iOS y Android.",
          },
          {
            layer: "backend",
            title: "Integración de APIs",
            detail: "Autenticación, datos y estado.",
          },
        ],
        outcomes: [],
      },
    },
  },
  {
    slug: "perficient",
    kind: "work",
    startDate: "2021-02",
    endDate: null,
    stack: {
      interface: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      backend: [".NET", "Node.js", "Express", "REST APIs", "Azure", "LLM APIs", "Vercel"],
      data: ["MySQL", "MongoDB"],
    },
    copy: {
      en: {
        name: "Perficient",
        tagline: "Next.js applications for enterprise clients.",
        summary: ["Production web apps, from the React interface to the services behind it."],
        role: "Senior Software Engineer",
        highlights: [
          {
            layer: "interface",
            title: "Production Next.js",
            detail: "Fast, SEO-friendly apps with SSR and SSG.",
          },
          {
            layer: "backend",
            title: ".NET on Azure",
            detail: "Three years of .NET services, MySQL and Azure.",
          },
          { layer: "backend", title: "Generative AI", detail: "LLM APIs inside web products." },
        ],
        outcomes: [{ value: "10+", label: "technical interviews" }],
      },
      es: {
        name: "Perficient",
        tagline: "Aplicaciones Next.js para clientes empresariales.",
        summary: [
          "Aplicaciones web en producción, de la interfaz React a los servicios que la sostienen.",
        ],
        role: "Senior Software Engineer",
        highlights: [
          {
            layer: "interface",
            title: "Next.js en producción",
            detail: "Apps rápidas y optimizadas para SEO con SSR y SSG.",
          },
          {
            layer: "backend",
            title: ".NET en Azure",
            detail: "Tres años de servicios .NET, MySQL y Azure.",
          },
          {
            layer: "backend",
            title: "IA generativa",
            detail: "APIs de LLM dentro de productos web.",
          },
        ],
        outcomes: [{ value: "10+", label: "entrevistas técnicas" }],
      },
    },
  },
  {
    slug: "university-instructor",
    kind: "teaching",
    startDate: "2022-01",
    endDate: "2022-12",
    stack: {
      interface: ["React", "PWAs"],
      backend: ["Spring Boot", "REST APIs"],
    },
    copy: {
      en: {
        name: "University teaching",
        tagline: "Teaching full-stack at my own university.",
        summary: ["I designed and taught a Software Engineering course."],
        role: "University Instructor",
        highlights: [
          {
            layer: "backend",
            title: "REST APIs",
            detail: "Spring Boot with React and Android clients.",
          },
          { layer: "interface", title: "Progressive web apps", detail: "Built with React." },
        ],
        outcomes: [],
      },
      es: {
        name: "Docencia universitaria",
        tagline: "Enseñando full-stack en mi propia universidad.",
        summary: ["Diseñé y dicté un curso de Ingeniería de Software."],
        role: "Profesor universitario",
        highlights: [
          {
            layer: "backend",
            title: "APIs REST",
            detail: "Spring Boot con clientes React y Android.",
          },
          {
            layer: "interface",
            title: "Aplicaciones web progresivas",
            detail: "Construidas con React.",
          },
        ],
        outcomes: [],
      },
    },
  },
];
