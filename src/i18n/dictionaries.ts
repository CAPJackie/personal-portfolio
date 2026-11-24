import type { Locale } from "@/i18n/config";

const en = {
  skipLink: "Skip to content",
  nav: {
    label: "Main",
    work: "Work",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    menu: "Menu",
  },
  side: {
    title: "Side projects",
    intro: "What I build on my own time to try ideas and learn new tools.",
    status: { live: "Live", prototype: "Prototype", study: "Study project" },
    stack: "Built with",
    visit: "Visit site",
    code: "View code",
    universityTitle: "University projects",
    details: "View details",
  },
  controls: {
    language: "Ver en español",
    languageShort: "ES",
    theme: "Switch between light and dark theme",
  },
  contact: {
    title: "Let’s talk",
    copy: "Copy email",
    copied: "Copied",
    gmail: "Open in Gmail",
    mailApp: "Mail app",
    close: "Close",
  },
  home: {
    anchor: "work",
    cta: "See my work",
    workTitle: "Career",
    filterLabel: "Highlight an area of work",
    allAreas: "All",
    aboutCta: "About me",
    projectsCta: "Side projects",
  },
  layers: { interface: "Frontend", backend: "Backend", data: "Data", team: "Team" },
  kinds: { work: "Professional work", teaching: "Teaching", university: "University project" },
  project: {
    allWork: "All work",
    role: "Role",
    when: "When",
    type: "Type",
    highlights: "What I did",
    results: "Worth noting",
    stack: "Built with",
    next: "Next",
  },
  about: {
    title: "About",
    experience: "Experience",
    education: "Education",
    skills: "What I work with",
  },
  footer: { title: "Let’s build something", localTime: "local time" },
  time: { to: "to", now: "now" },
  notFound: {
    title: "This page doesn’t exist",
    body: "The link may be out of date. You can find everything from the home page.",
    cta: "Go to the home page",
  },
};

export type Dictionary = typeof en;

const es: Dictionary = {
  skipLink: "Saltar al contenido",
  nav: {
    label: "Principal",
    work: "Trabajo",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    menu: "Menú",
  },
  side: {
    title: "Proyectos personales",
    intro: "Lo que construyo en mi tiempo libre para probar ideas y aprender herramientas nuevas.",
    status: { live: "En línea", prototype: "Prototipo", study: "Proyecto de estudio" },
    stack: "Tecnologías",
    visit: "Ver sitio",
    code: "Ver código",
    universityTitle: "Proyectos universitarios",
    details: "Ver detalles",
  },
  controls: {
    language: "View in English",
    languageShort: "EN",
    theme: "Cambiar entre tema claro y oscuro",
  },
  contact: {
    title: "Hablemos",
    copy: "Copiar correo",
    copied: "Copiado",
    gmail: "Abrir en Gmail",
    mailApp: "App de correo",
    close: "Cerrar",
  },
  home: {
    anchor: "trabajo",
    cta: "Ver mi trabajo",
    workTitle: "Trayectoria",
    filterLabel: "Resaltar un área de trabajo",
    allAreas: "Todo",
    aboutCta: "Sobre mí",
    projectsCta: "Proyectos personales",
  },
  layers: { interface: "Frontend", backend: "Backend", data: "Datos", team: "Equipo" },
  kinds: {
    work: "Trabajo profesional",
    teaching: "Docencia",
    university: "Proyecto universitario",
  },
  project: {
    allWork: "Todo el trabajo",
    role: "Rol",
    when: "Cuándo",
    type: "Tipo",
    highlights: "Qué hice",
    results: "Para destacar",
    stack: "Tecnologías",
    next: "Siguiente",
  },
  about: {
    title: "Sobre mí",
    experience: "Experiencia",
    education: "Educación",
    skills: "Con qué trabajo",
  },
  footer: { title: "Construyamos algo", localTime: "hora local" },
  time: { to: "a", now: "hoy" },
  notFound: {
    title: "Esta página no existe",
    body: "Es posible que el enlace esté desactualizado. Encontrarás todo desde la página de inicio.",
    cta: "Ir a la página de inicio",
  },
};

const dictionaries: Record<Locale, Dictionary> = { en, es };

export function getDictionary(locale: Locale) {
  return dictionaries[locale];
}
