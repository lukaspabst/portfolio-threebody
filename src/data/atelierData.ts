export type Locale = 'en' | 'de';
export type WorkCategory = 'enterprise' | 'personal';

export interface AtelierTimelineEntry {
  readonly period: { readonly en: string; readonly de: string };
  readonly category: 'experience' | 'education';
  readonly title: { readonly en: string; readonly de: string };
  readonly institution: string;
  readonly location: { readonly en: string; readonly de: string };
  readonly summary: { readonly en: string; readonly de: string };
  readonly bullets?: {
    readonly en: readonly string[];
    readonly de: readonly string[];
  };
  readonly tags: readonly string[];
}

export interface AtelierWork {
  readonly id: string;
  readonly index: string;
  readonly category: WorkCategory;
  readonly title: string;
  readonly role?: { readonly en: string; readonly de: string };
  readonly statusPill?: { readonly en: string; readonly de: string };
  readonly archPill?: string;
  readonly subtitle: { readonly en: string; readonly de: string };
  readonly discipline: { readonly en: string; readonly de: string };
  readonly year: { readonly en: string; readonly de: string };
  readonly story: { readonly en: string; readonly de: string };
  readonly engineeringNote: { readonly en: string; readonly de: string };
  readonly highlights?: {
    readonly en: readonly string[];
    readonly de: readonly string[];
  };
  readonly metrics?: readonly { readonly val: string; readonly lbl: string }[];
  readonly stack: readonly string[];
  readonly liveUrl?: string;
  readonly href?: string;
}

export const ATELIER_PROFILE = {
  name: 'Lukas Pabst',
  role: {
    en: 'Full Stack Developer',
    de: 'Full Stack Developer',
  },
  base: 'Sissach / Basel Area, Switzerland',
  origin: 'Sondershausen, Germany',
  birth: '23.03.2001',
  company: 'Primeo Energie',
  flagship: 'JourneyLink',
  previousCompany: 'Finanz-Data GmbH (Gotha)',
  degree: 'B.Sc. Business Informatics (DHBW Stuttgart)',
  email: 'lukas.pabst@outlook.de',
  github: 'https://github.com/lukaspabst',
  journeyLinkGithub: 'https://github.com/Journey-Link',
  xing: 'https://www.xing.com/profile/Lukas_Pabst102',
  statement: {
    en: "Hi, I'm Lukas, a 25-year-old Full Stack Developer based in Sissach near Basel. At Primeo Energie, I build Self-Contained Systems with Java and Angular for our customer portal and serve as technical lead for both stacks. In my free time, I like building my own web projects and experimenting with distributed architectures.",
    de: 'Hi, ich bin Lukas, 25 Jahre alt und Full Stack Developer in Sissach bei Basel. Bei Primeo Energie entwickle ich Self-Contained Systems mit Java und Angular für unser Kundenportal und übernehme die Fachverantwortung für beide Stacks. Privat baue ich gerne eigene Web-Projekte und probiere neue Architektur-Konzepte aus.',
  },
} as const;

export const ATELIER_TIMELINE: readonly AtelierTimelineEntry[] = [
  {
    period: { en: '09/2024 – Present', de: '09/2024 – Heute' },
    category: 'experience',
    title: {
      en: 'Full Stack Developer (Tech Lead Java & Angular)',
      de: 'Full Stack Developer (Fachverantwortung Java & Angular)',
    },
    institution: 'Primeo Energie',
    location: { en: 'Münchenstein / Sissach, CH', de: 'Münchenstein / Sissach, CH' },
    summary: {
      en: 'Working on the customer portal in a Self-Contained Systems (SCS) architecture, from solution design to backend and frontend implementation.',
      de: 'Weiterentwicklung des Kundenportals in einer Self-Contained-Systems-Architektur (SCS), vom Solution Design bis zur Umsetzung in Java und Angular.',
    },
    bullets: {
      en: [
        'Building Self-Contained Systems (SCS) for the customer portal with Angular and Java',
        'Technical ownership (Fachverantwortung) for Java and Angular across the team',
        'Co-designing the technical solution architecture for new portal features',
        'Building custom CMS apps for Magnolia and custom themes/plugins for Keycloak IDP',
        'Coordinating tasks and code reviews with nearshoring developers',
      ],
      de: [
        'Entwicklung von Self-Contained Systems (SCS) für das Kundenportal mit Angular und Java',
        'Fachverantwortung für Java und Angular im Team',
        'Mitarbeit am Solution Design für neue Portal-Funktionen',
        'Entwicklung von CMS-Apps für Magnolia sowie eigenen Themes und Plugins für Keycloak IDP',
        'Fachliche Abstimmung und Koordination mit Nearshoring-Entwicklern',
      ],
    },
    tags: [
      'Java',
      'Angular',
      'Self-Contained Systems (SCS)',
      'Solution Design',
      'Keycloak IDP',
      'Magnolia CMS',
    ],
  },
  {
    period: { en: '01/2023 – 08/2024', de: '01/2023 – 08/2024' },
    category: 'experience',
    title: { en: 'Software Developer', de: 'Software Developer' },
    institution: 'Finanz-Data GmbH',
    location: { en: 'Gotha, Germany', de: 'Gotha, Deutschland' },
    summary: {
      en: 'Java backend development and REST service migration to Spring Boot in the HUK insurance environment.',
      de: 'Java-Backend-Entwicklung und Migration bestehender REST-Services auf Spring Boot im HUK-Versicherungsumfeld.',
    },
    bullets: {
      en: [
        'Developed backend services in Java and migrated legacy REST services to Spring Boot',
        'Supported daily operations in the HUK environment and clarified functional requirements',
        'Wrote automated unit and integration tests with JUnit, Postman, and Jenkins',
      ],
      de: [
        'Backend-Entwicklung in Java und schrittweise Migration bestehender REST-Services auf Spring Boot',
        'Betreuung der HUK-Umgebung im Tagesgeschäft inklusive Anforderungsanalyse',
        'Aufbau automatisierter Tests mit JUnit, Postman und Jenkins',
      ],
    },
    tags: ['Java', 'Spring Boot', 'REST Services', 'JUnit', 'Jenkins', 'Innovator'],
  },
  {
    period: { en: '10/2019 – 10/2022', de: '10/2019 – 10/2022' },
    category: 'education',
    title: {
      en: 'B.Sc. Business Informatics (Wirtschaftsinformatik)',
      de: 'Duales Studium Wirtschaftsinformatik (B.Sc.)',
    },
    institution: 'Duale Hochschule Baden-Württemberg (DHBW)',
    location: { en: 'Stuttgart, Germany', de: 'Stuttgart, Deutschland' },
    summary: {
      en: 'Three-year dual bachelor program alternating between university theory in Stuttgart and practical software development phases.',
      de: 'Dreijähriges duales Bachelorstudium im Wechsel zwischen Theoriephasen in Stuttgart und praktischer Softwareentwicklung im Unternehmen.',
    },
    tags: ['Bachelor of Science', 'Software Engineering', 'Java / Spring', 'SQL & NoSQL', 'Scrum'],
  },
  {
    period: { en: '08/2011 – 06/2019', de: '08/2011 – 06/2019' },
    category: 'education',
    title: { en: 'Abitur (High School Diploma)', de: 'Abitur' },
    institution: 'Staatliches Seiler-Gymnasium Schlotheim',
    location: { en: 'Schlotheim, Germany', de: 'Schlotheim, Deutschland' },
    summary: {
      en: 'General university entrance qualification (Abitur) in Thuringia.',
      de: 'Allgemeine Hochschulreife in Thüringen.',
    },
    tags: ['Abitur'],
  },
];

export const ATELIER_WORKS: readonly AtelierWork[] = [
  {
    id: 'primeo-kundenportal',
    index: 'I',
    category: 'enterprise',
    title: 'Primeo Energie · Customer Portal',
    role: {
      en: 'Full Stack Developer · Tech Lead Java & Angular',
      de: 'Full Stack Developer · Fachverantwortung Java & Angular',
    },
    statusPill: { en: 'Current Work', de: 'Aktuelles Projekt' },
    archPill: 'Self-Contained Systems (SCS)',
    subtitle: {
      en: 'Customer portal built with Angular, Java, Keycloak & Magnolia',
      de: 'Kundenportal mit Angular, Java, Keycloak & Magnolia',
    },
    discipline: {
      en: 'Java · Angular · Self-Contained Systems · Keycloak IDP · Magnolia CMS',
      de: 'Java · Angular · Self-Contained Systems · Keycloak IDP · Magnolia CMS',
    },
    year: { en: '09/2024 – PRESENT', de: 'SEIT 09/2024' },
    story: {
      en: 'At Primeo Energie, I work on the customer portal and hold technical ownership for Java and Angular. We build the portal as independent Self-Contained Systems (SCS), which keeps domain logic, UI, and deployments cleanly separated.',
      de: 'Bei Primeo Energie arbeite ich am Kundenportal und trage die Fachverantwortung für Java und Angular. Wir setzen das Portal als unabhängige Self-Contained Systems (SCS) um, sodass Fachlogik, UI und Deployments sauber getrennt bleiben.',
    },
    engineeringNote: {
      en: 'Alongside the Java and Angular SCS modules, I build custom themes and plugins for our Keycloak Identity Provider (IDP), develop CMS apps for Magnolia, and help coordinate our nearshoring developers.',
      de: 'Neben den SCS-Modulen in Java und Angular entwickle ich eigene Themes und Plugins für unseren Keycloak Identity Provider (IDP), baue CMS-Apps für Magnolia und unterstütze beim Solution Design sowie der Koordination unserer Nearshoring-Entwickler.',
    },
    highlights: {
      en: [
        'Developing Self-Contained Systems (SCS) for the customer portal in Angular and Java',
        'Technical ownership (Fachverantwortung) for Java and Angular and input on Solution Design',
        'Custom themes and plugins for Keycloak IDP and custom CMS apps for Magnolia',
        'Technical coordination and code reviews with nearshoring developers',
      ],
      de: [
        'Entwicklung von Self-Contained Systems (SCS) für das Kundenportal mit Angular und Java',
        'Fachverantwortung für Java und Angular sowie Mitarbeit beim Solution Design',
        'Eigene Themes und Plugins für Keycloak IDP sowie CMS-Apps für Magnolia',
        'Fachliche Koordination und Unterstützung der Nearshoring-Entwickler',
      ],
    },
    metrics: [
      { val: 'SCS', lbl: 'Architecture' },
      { val: 'Java & Angular', lbl: 'Tech Lead' },
      { val: 'Keycloak IDP', lbl: 'Themes & Plugins' },
      { val: 'Magnolia', lbl: 'CMS Apps' },
    ],
    stack: [
      'Java',
      'Spring Boot',
      'Angular',
      'Self-Contained Systems (SCS)',
      'Keycloak IDP',
      'Magnolia CMS',
      'Solution Design',
    ],
  },
  {
    id: 'huk-environment',
    index: 'II',
    category: 'enterprise',
    title: 'HUK-Environment',
    role: {
      en: 'Software Developer · Finanz-Data GmbH (Gotha)',
      de: 'Software Developer · Finanz-Data GmbH (Gotha)',
    },
    statusPill: { en: 'Previous Work', de: 'Früheres Projekt' },
    archPill: 'Spring Boot Migration',
    subtitle: {
      en: 'Migrating legacy REST services to Spring Boot',
      de: 'Migration bestehender REST-Services auf Spring Boot',
    },
    discipline: {
      en: 'Java · Spring Boot · REST Services · JUnit · Jenkins',
      de: 'Java · Spring Boot · REST-Services · JUnit · Jenkins',
    },
    year: { en: '01/2023 – 08/2024', de: '01/2023 – 08/2024' },
    story: {
      en: 'During my time at Finanz-Data GmbH in Gotha, I worked on backend systems in the HUK insurance environment. My main focus was keeping daily operations running smoothly and migrating older REST services over to Spring Boot.',
      de: 'Während meiner Zeit bei der Finanz-Data GmbH in Gotha habe ich an Backend-Systemen im HUK-Umfeld gearbeitet. Mein Schwerpunkt lag auf der Betreuung des laufenden Betriebs und der schrittweisen Migration älterer REST-Services auf Spring Boot.',
    },
    engineeringNote: {
      en: 'Migrating live services required matching existing API contracts while introducing clean Spring Boot layers and automated JUnit test coverage in Jenkins.',
      de: 'Da die Services produktiv im Einsatz waren, mussten bestehende Schnittstellen exakt eingehalten und parallel mit automatisierten JUnit-Tests und Jenkins-Pipelines abgesichert werden.',
    },
    highlights: {
      en: [
        'Clarified functional requirements with stakeholders and documented specs in Confluence and Innovator',
        'Migrated legacy REST services to Java and Spring Boot',
        'Built automated unit and integration tests with JUnit, Postman, and Jenkins',
      ],
      de: [
        'Fachliche Anforderungen analysiert und in Confluence sowie Innovator dokumentiert',
        'Bestehende REST-Services schrittweise auf Java und Spring Boot umgestellt',
        'Automatisierte Tests mit JUnit, Postman und Jenkins aufgebaut',
      ],
    },
    stack: ['Java', 'Spring Boot', 'REST APIs', 'JUnit', 'Jenkins', 'Postman', 'Innovator', 'Git'],
  },
  {
    id: 'burda-timetracking',
    index: 'III',
    category: 'enterprise',
    title: 'BURDA Timetracking',
    role: {
      en: 'Software Developer · Dual Study Project',
      de: 'Software Developer · Praxisprojekt im Studium',
    },
    statusPill: { en: 'Study Project', de: 'Studienprojekt' },
    archPill: 'HR Workflow & AWS',
    subtitle: {
      en: 'Internal time tracking tool with HR approval workflow',
      de: 'Zeiterfassungs-Tool mit HR-Freigabeprozess',
    },
    discipline: {
      en: 'Java · Spring · Web · AWS · Scrum',
      de: 'Java · Spring · Web · AWS · Scrum',
    },
    year: { en: '2019 – 2022', de: '2019 – 2022' },
    story: {
      en: 'Built an internal time-tracking web app where employees log, edit, and submit their working hours, and HR can approve or reject entries with feedback.',
      de: 'Entwicklung eines internen Zeiterfassungs-Tools, in dem Mitarbeitende ihre Arbeitszeiten eintragen, bearbeiten und einreichen können und HR Einträge mit Rückmeldung freigibt oder ablehnt.',
    },
    engineeringNote: {
      en: 'Developed in a Scrum team from requirement analysis and data modeling through to implementation, automated testing, and deployment on AWS.',
      de: 'Im Scrum-Team von der Anforderungsaufnahme über das Anwendungsdesign bis hin zu automatisierten Tests und dem Deployment auf AWS umgesetzt.',
    },
    highlights: {
      en: [
        'Gathered functional requirements and helped plan Scrum sprints',
        'Implemented the time entry views and the HR approval/rejection workflow',
        'Wrote automated tests and deployed the service on AWS',
      ],
      de: [
        'Anforderungen aufgenommen, dokumentiert und bei der Sprint-Planung unterstützt',
        'Zeiterfassung und HR-Genehmigungsworkflow entworfen und implementiert',
        'Automatisierte Tests geschrieben und auf AWS bereitgestellt',
      ],
    },
    stack: ['Java', 'Spring', 'AWS', 'Scrum', 'Postman', 'JUnit', 'Git', 'IntelliJ IDEA'],
  },
  {
    id: 'journeylink',
    index: 'IV',
    category: 'personal',
    title: 'JourneyLink',
    role: {
      en: 'Personal Side Project & 22-SCS Architecture Sandbox',
      de: 'Persönliches Hobbyprojekt & 22-SCS-Architektur-Sandbox',
    },
    statusPill: { en: 'Live Demo', de: 'Live-Demo' },
    archPill: '22 SCSs · Native Federation · RabbitMQ',
    subtitle: {
      en: 'Group travel platform & B2B creator marketplace across 22 Self-Contained Systems',
      de: 'Gruppen-Reiseplattform & B2B-Creator-Marktplatz mit 22 Self-Contained Systems',
    },
    discipline: {
      en: 'Angular 20 Native Federation · Kotlin / Spring Boot 4 · Node.js / Express · Python FastAPI · RabbitMQ · MongoDB · Redis',
      de: 'Angular 20 Native Federation · Kotlin / Spring Boot 4 · Node.js / Express · Python FastAPI · RabbitMQ · MongoDB · Redis',
    },
    year: { en: 'SIDE PROJECT · DEMO', de: 'HOBBY · DEMO' },
    story: {
      en: 'JourneyLink is my personal playground for testing how far you can push Angular 20 Native Federation and 22 decoupled Self-Contained Systems on a single Hetzner host. It combines zero-knowledge .ics calendar polling, group voting, AES-256-GCM ticket storage, and expense splitting with B2B agency and creator portals.',
      de: 'JourneyLink ist mein privates Hobbyprojekt, mit dem ich Angular 20 Native Federation und 22 entkoppelte Self-Contained Systems auf einem Hetzner-Server ausreize. Die Plattform verbindet lokalen .ics-Kalender-Abgleich, Gruppen-Voting, einen AES-256-GCM-Ticket-Tresor und Ausgaben-Splitting mit B2B-Agency- und Creator-Portalen.',
    },
    engineeringNote: {
      en: '6 Kotlin / Spring Boot 4 APIs, 10 Node.js / Express services, and a Python 3.12 FastAPI crawler run against 16 isolated MongoDB databases (enforced via ArchUnit), syncing asynchronously over RabbitMQ topic exchanges with Redis rate-limiting, Clerk JWKS auth, and Prometheus/Grafana telemetry.',
      de: '6 Kotlin / Spring Boot 4 APIs, 10 Node.js / Express-Services und ein Python 3.12 FastAPI-Crawler arbeiten auf 16 strikt getrennten MongoDB-Datenbanken (per ArchUnit geprüft) und synchronisieren sich asynchron über RabbitMQ-Exchanges – abgesichert durch Redis, Clerk JWKS und Prometheus/Grafana.',
    },
    highlights: {
      en: [
        'Self-healing Angular 20 Native Federation shell loading consumer & B2B micro-frontends with @journey-link/ui (38 theme tokens)',
        '16 isolated MongoDB databases (ArchUnit-verified) + RabbitMQ AMQP topic exchanges (trips, catalog, collaboration) & Redis cache',
        'Clerk JWKS identity guards, cross-platform Java/Node AES-256-GCM ticket vault, plus Stripe, Duffel, Gemini & Open-Meteo integrations',
        'Automated Playwright E2E, Lighthouse CI quality gates, and Prometheus/Grafana container memory monitoring',
      ],
      de: [
        'Self-Healing Angular 20 Native Federation Shell für Consumer- & B2B-Micro-Frontends mit eigenem @journey-link/ui Design-System',
        '16 isolierte MongoDB-Datenbanken (per ArchUnit geprüft) + asynchrone RabbitMQ-Exchanges (trips, catalog, collaboration) & Redis-Cache',
        'Clerk JWKS Role-Guards, plattformübergreifende Java/Node AES-256-GCM-Verschlüsselung sowie Stripe-, Duffel-, Gemini- & Open-Meteo-Anbindung',
        'Automatisierte Playwright-E2E-Tests, Lighthouse-CI-Gates und Prometheus/Grafana-Monitoring',
      ],
    },
    metrics: [
      { val: '22 SCSs', lbl: 'Kotlin · Node · Py' },
      { val: '12 MFEs', lbl: 'Angular 20' },
      { val: '16 Mongo DBs', lbl: 'Isolated + GCS' },
      { val: 'RabbitMQ + Redis', lbl: 'Event-Driven' },
    ],
    stack: [
      'Angular 20+',
      'Native Federation',
      '@journey-link/ui',
      'TypeScript',
      'Kotlin',
      'Spring Boot 4',
      'Node.js & Express',
      'Python 3.12 & FastAPI',
      'MongoDB (Replica Set)',
      'RabbitMQ (AMQP)',
      'Redis',
      'Google Cloud Storage',
      'Clerk Auth (JWKS)',
      'AES-256-GCM',
      'Stripe & Duffel API',
      'Gemini & Open-Meteo API',
      'ArchUnit',
      'Playwright & Lighthouse CI',
      'Prometheus & Grafana',
      'Docker & Nginx',
    ],
    liveUrl: 'https://demo.journeylink.dev',
    href: 'https://github.com/Journey-Link',
  },
  {
    id: 'dc-translation',
    index: 'V',
    category: 'personal',
    title: 'Discord Translation Bot',
    role: {
      en: 'Personal Open-Source Project',
      de: 'Privates Open-Source-Projekt',
    },
    statusPill: { en: 'Side Project', de: 'Hobbyprojekt' },
    archPill: 'Live Threads & AES-256-GCM',
    subtitle: {
      en: 'Multilingual Discord bot with private live threads & smart caching',
      de: 'Mehrsprachiger Discord-Bot mit privaten Live-Threads & eigenem Cache',
    },
    discipline: {
      en: 'TypeScript 6 · Node.js 20+ · Discord.js v14 · Google Cloud & DeepL · SQLite WAL · MongoDB · Redis',
      de: 'TypeScript 6 · Node.js 20+ · Discord.js v14 · Google Cloud & DeepL · SQLite WAL · MongoDB · Redis',
    },
    year: { en: 'SIDE PROJECT', de: 'HOBBYPROJEKT' },
    story: {
      en: 'Most Discord translation bots spam public channels with flag-reaction replies and burn through API quotas on emojis or bot commands. I built this bot so users get a private split-screen Live Thread or right-click ephemeral translation cards instead.',
      de: 'Klassische Übersetzungs-Bots auf Discord müllen öffentliche Channels oft mit Flaggen-Antworten voll und verfeuern API-Kontingente für Emojis oder Bot-Commands. Deshalb habe ich diesen Bot gebaut: Übersetzungen landen in einem privaten Split-Screen-Live-Thread oder als nur für dich sichtbare Rechtsklick-Karte.',
    },
    engineeringNote: {
      en: 'Before calling Google Cloud Translation or DeepL, a local filter strips markup, URLs, and bot commands and checks n-gram language detection. Concurrent requests share an in-flight cache backed by L1 memory, Redis, and L2 MongoDB Atlas, with user settings encrypted via AES-256-GCM in SQLite WAL.',
      de: 'Vor jedem API-Call an Google Cloud oder DeepL filtert der Bot Markup, Links und Befehle heraus und prüft lokal die Sprache. Parallele Anfragen werden über einen L1-Memory-, Redis- und L2-MongoDB-Cache abgefangen; Nutzereinstellungen liegen AES-256-GCM-verschlüsselt in SQLite WAL und MongoDB.',
    },
    highlights: {
      en: [
        'Private Live Threads that batch rapid channel messages every 3.5s with channel focus filters and mute toggles',
        'Right-click message translation (Apps › Translate) with live language switching and DeepL toggle',
        'Local pre-filtering and n-gram language detection to save external API quota',
        'AES-256-GCM encryption with per-user and per-channel HMAC-SHA256 derived keys',
      ],
      de: [
        'Private Live-Threads, die schnelle Chat-Nachrichten alle 3,5 Sekunden bündeln, inklusive Channel-Filter und Mute-Funktion',
        'Rechtsklick-Übersetzung (Apps › Translate) mit direktem Sprachwechsel und DeepL-Option',
        'Lokale Vorfilterung und Spracherkennung, um unnötige API-Aufrufe zu sparen',
        'AES-256-GCM-Verschlüsselung mit abgeleiteten HMAC-SHA256-Schlüsseln pro User und Channel',
      ],
    },
    metrics: [
      { val: '135+ Locales', lbl: 'Auto-Setup' },
      { val: '3.5s Batching', lbl: 'Live Threads' },
      { val: 'AES-256-GCM', lbl: 'Encrypted DB' },
      { val: 'L1 + L2 Cache', lbl: 'Mem · Redis · Mongo' },
    ],
    stack: [
      'TypeScript 6.0',
      'Node.js 20+',
      'Discord.js v14',
      'Google Cloud Translation',
      'DeepL API',
      'N-Gram Language Detection',
      'AES-256-GCM',
      'HMAC-SHA256',
      'SQLite WAL (better-sqlite3)',
      'MongoDB Atlas',
      'Redis (ioredis)',
      'Docker',
    ],
    href: 'https://github.com/lukaspabst/dc-translation',
  },
  {
    id: 'zen-ui',
    index: 'VI',
    category: 'personal',
    title: 'zeN-UI & Capri CLI',
    role: {
      en: 'Design System, WebGL Engine & Security Co-Pilot',
      de: 'Design-System, WebGL-Engine & Security Co-Pilot',
    },
    statusPill: { en: 'Powers This Site', de: 'Basis dieser Seite' },
    archPill: '51 Primitives · 8 Themes · Capri Guard',
    subtitle: {
      en: 'Cross-framework UI library (React 19, Angular 20+, Vue 3) with built-in SQLi/XSS/Prompt-Injection firewall',
      de: 'Framework-übergreifende UI-Library (React 19, Angular 20+, Vue 3) mit integrierter SQLi/XSS/Prompt-Injection-Firewall',
    },
    discipline: {
      en: 'React 19 · Angular 20+ · W3C Custom Elements · Three.js / R3F · GSAP · Web Audio · Capri CLI',
      de: 'React 19 · Angular 20+ · W3C Custom Elements · Three.js / R3F · GSAP · Web Audio · Capri CLI',
    },
    year: { en: 'OPEN SOURCE · NPM', de: 'OPEN SOURCE · NPM' },
    story: {
      en: 'Instead of hand-coding cards, Three.js scenes, and audio synthesizers per project, I extracted @zen-ui/system as a reusable package with 51 UI primitives, 8 dark and light themes, 40 vector icons, and the Capri CLI security scanner that protects inputs against SQL/NoSQL injection, XSS, and prompt injection.',
      de: 'Statt Karten, Three.js-Szenen und Audio-Synthesizer in jedem Projekt neu zu bauen, habe ich @zen-ui/system als eigenes Paket mit 51 UI-Komponenten, 8 Dark- und Light-Themes, 40 Vektor-Icons und dem Capri-Security-Scanner (Schutz vor SQL/NoSQL-Injection, XSS und Prompt-Injection) entwickelt.',
    },
    engineeringNote: {
      en: 'Ships both native React 19 primitives and framework-agnostic W3C Custom Elements (<zen-icon>, <zen-theme-switcher>) plus the zero-runtime npx capri CLI for automated architecture docs and security audits.',
      de: 'Liefert sowohl React-19-Komponenten als auch W3C Custom Elements (<zen-icon>, <zen-theme-switcher>) für Angular 20+, Vue 3 und Svelte 5 sowie die npx capri CLI für Architektur-Dokumentation und Security-Audits.',
    },
    highlights: {
      en: [
        '51 components & 8 dark/light themes with semantic CSS tokens and 60fps spring physics',
        'Real-time input firewall blocking SQL/NoSQL injection, XSS, and LLM prompt injection',
        'Procedural Web Audio synthesizer, GSAP motion, and RK4 Three-Body WebGL cosmos canvas included',
      ],
      de: [
        '51 Komponenten & 8 Dark-/Light-Themes mit semantischen CSS-Variablen und 60fps-Animationen',
        'Echtzeit-Input-Firewall gegen SQL/NoSQL-Injection, XSS und LLM-Prompt-Injection',
        'Prozeduraler Web-Audio-Synthesizer, GSAP-Animationen und RK4-Three-Body-WebGL-Szene direkt integriert',
      ],
    },
    metrics: [
      { val: '51 Modules', lbl: 'React + Web Comp' },
      { val: '8 Themes', lbl: '4 Dark + 4 Light' },
      { val: '40 Icons', lbl: 'Zero-Dep SVG' },
      { val: 'Capri Guard', lbl: 'SQLi/XSS/Prompt' },
    ],
    stack: [
      'TypeScript 5.8',
      'React 19',
      'Angular 20+ & Vue 3',
      'W3C Custom Elements',
      'Tailwind CSS v4',
      'Three.js & React Three Fiber',
      'GLSL Post-Processing',
      'GSAP 3',
      'Web Audio API',
      'Capri CLI (Node.js)',
      'Playwright E2E',
      'Vite 6',
      'Docker & Nginx',
    ],
    liveUrl: 'https://ui.lpabst.dev',
    href: 'https://github.com/lukaspabst/zeN-UI',
  },
  {
    id: 'zen-terminal',
    index: 'VII',
    category: 'personal',
    title: 'zeN-Terminal',
    role: {
      en: 'PowerShell, Windows Terminal & CMD Theme Engine',
      de: 'PowerShell-, Windows-Terminal- & CMD-Theme-Engine',
    },
    statusPill: { en: 'Live Workbench', de: 'Live-Workbench' },
    archPill: 'PWSH · Windows Terminal · HLSL Shader',
    subtitle: {
      en: 'Brings all 8 @zen-ui/system themes, HLSL CRT shaders, and the Capri Guard CLI firewall into PowerShell, Windows Terminal & CMD',
      de: 'Bringt alle 8 @zen-ui/system-Themes, HLSL-CRT-Shader und die Capri-Guard-CLI-Firewall in PowerShell, Windows Terminal & CMD',
    },
    discipline: {
      en: 'PowerShell 7 · Windows Terminal · CMD · Direct3D HLSL Shader · ANSI TrueColor · React 19 Workbench',
      de: 'PowerShell 7 · Windows Terminal · CMD · Direct3D HLSL Shader · ANSI TrueColor · React 19 Workbench',
    },
    year: { en: 'SIDE PROJECT · CLI', de: 'HOBBY · CLI' },
    story: {
      en: 'I wanted my local PowerShell prompt, PSReadLine syntax highlighting, CMD shell, and Windows Terminal color schemes to match my web projects. zeN-Terminal switches all of them at once—including procedural 1080p wallpapers and an optional Direct3D HLSL CRT pixel shader—and provides an interactive web workbench at terminal.lpabst.dev.',
      de: 'Ich wollte meinen lokalen PowerShell-Prompt, das PSReadLine-Syntax-Highlighting, CMD und mein Windows-Terminal-Farbschema an meine Web-Projekte anpassen. Mit zeN-Terminal schalte ich alles gleichzeitig per zen-theme-Befehl um – inklusive prozeduraler 1080p-Wallpapers, optionalem Direct3D-HLSL-CRT-Shader und interaktiver Web-Workbench.',
    },
    engineeringNote: {
      en: 'The PowerShell installer backs up your existing $PROFILE and Windows Terminal settings.json, injects 24-bit TrueColor ANSI prompt hooks, PSReadLine token colors, and CMD AutoRun hooks, and registers the capri-guard command for real-time Enter-key SQLi/XSS/Prompt-Injection interception.',
      de: 'Der PowerShell-Installer legt vorab Backups von $PROFILE und der Windows-Terminal-settings.json an, richtet 24-Bit-TrueColor-ANSI-Prompts, PSReadLine-Farben und CMD-AutoRun-Hooks ein und stellt capri-guard für Echtzeit-Checks bei jedem Enter-Tastendruck bereit.',
    },
    highlights: {
      en: [
        'One-command PowerShell, CMD & Windows Terminal theme switching across all 8 @zen-ui/system palettes',
        'Full-screen in-terminal TUI workbench (zen-ui), procedural 1080p wallpapers, and Direct3D HLSL CRT scanline pixel shader',
        'Real-time Enter-key CLI firewall (capri-guard) scanning shell strings for SQLi, XSS, and prompt injection',
      ],
      de: [
        'Wechsel des PowerShell-, CMD- und Windows-Terminal-Themes über alle 8 @zen-ui/system-Paletten mit einem Befehl',
        'Interaktive Vollbild-TUI im Terminal (zen-ui), prozedurale 1080p-Wallpapers und Direct3D-HLSL-CRT-Pixel-Shader',
        'Echtzeit-CLI-Firewall (capri-guard) zum Prüfen von Befehlen auf SQLi, XSS und Prompt-Injection direkt beim Tippen',
      ],
    },
    metrics: [
      { val: '8 Themes', lbl: '24-Bit TrueColor' },
      { val: '3 Shells', lbl: 'PWSH / WT / CMD' },
      { val: 'HLSL Shader', lbl: 'Direct3D CRT' },
      { val: 'capri-guard', lbl: 'CLI Firewall' },
    ],
    stack: [
      'PowerShell 7',
      'PSReadLine',
      'Windows Terminal',
      'CMD AutoRun',
      'Direct3D HLSL Shader',
      '24-Bit ANSI TrueColor',
      '@zen-ui/system',
      'React 19',
      'Three.js / R3F',
      'TypeScript 5.8',
      'Tailwind CSS v4',
      'Docker & Nginx',
    ],
    liveUrl: 'https://terminal.lpabst.dev',
    href: 'https://github.com/lukaspabst/zeN-Terminal',
  },
];
