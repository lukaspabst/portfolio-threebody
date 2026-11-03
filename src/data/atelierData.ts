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
      en: 'Personal Side Project & Architecture Sandbox',
      de: 'Persönliches Hobbyprojekt & Architektur-Sandbox',
    },
    statusPill: { en: 'Live Demo', de: 'Live-Demo' },
    archPill: 'Micro-Frontends & RabbitMQ',
    subtitle: {
      en: 'Group travel planner built to test micro-frontends at scale',
      de: 'Gruppen-Reiseplaner als Sandbox für Micro-Frontends & Event-Driven Backend',
    },
    discipline: {
      en: 'Angular 20 Native Federation · Spring Boot · RabbitMQ · MongoDB',
      de: 'Angular 20 Native Federation · Spring Boot · RabbitMQ · MongoDB',
    },
    year: { en: 'SIDE PROJECT · DEMO', de: 'HOBBY · DEMO' },
    story: {
      en: 'JourneyLink is my personal playground for testing how far you can push Angular Native Federation and Self-Contained Systems in a single hobby project. The app lets a group find free travel dates via local .ics calendar files, vote on stops, and split trip expenses.',
      de: 'JourneyLink ist mein privates Hobbyprojekt, mit dem ich Angular Native Federation und Self-Contained Systems in der Praxis ausreize. Als Demo-App kann man damit in Gruppen freie Reisetage per .ics-Kalender abgleichen, über Stopps abstimmen und Ausgaben aufteilen.',
    },
    engineeringNote: {
      en: 'Each service has its own isolated MongoDB database (checked via ArchUnit tests) and communicates asynchronously over RabbitMQ domain events rather than synchronous REST chains.',
      de: 'Jeder Service hat seine eigene MongoDB-Datenbank (per ArchUnit-Tests geprüft) und synchronisiert Daten asynchron über RabbitMQ-Events statt über synchrone REST-Aufrufe.',
    },
    highlights: {
      en: [
        'Angular 20 Native Federation host shell loading independent micro-frontends with a shared UI library',
        'Strict database-per-service isolation on MongoDB with RabbitMQ event synchronization',
        'Client-side .ics calendar availability heatmap, group voting, and expense splitting',
      ],
      de: [
        'Angular 20 Native Federation Shell, die eigenständige Micro-Frontends und eine gemeinsame UI-Library lädt',
        'Eigene MongoDB pro Service und asynchrone Synchronisation über RabbitMQ-Events',
        'Lokale .ics-Kalender-Heatmap im Browser, Gruppen-Voting und Ausgaben-Splitting',
      ],
    },
    metrics: [
      { val: '12 MFEs', lbl: 'Angular 20' },
      { val: 'Event-Driven', lbl: 'RabbitMQ' },
      { val: 'DB-per-Service', lbl: 'Isolated Mongo' },
      { val: '5 Locales', lbl: 'EN/DE/FR/ES/IT' },
    ],
    stack: [
      'Angular 20',
      'Native Federation',
      'Spring Boot',
      'Node.js / NestJS',
      'Python FastAPI',
      'RabbitMQ',
      'MongoDB',
      'Docker',
    ],
    liveUrl: 'https://demo.journeylink.dev',
    href: 'https://github.com/Journey-Link',
  },
  {
    id: 'dc-translation',
    index: 'V',
    category: 'personal',
    title: 'Discord Translation Bot (dc-translation)',
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
      en: 'TypeScript 6 · Node.js 20+ · Discord.js v14 · Google Cloud & DeepL · AES-256-GCM',
      de: 'TypeScript 6 · Node.js 20+ · Discord.js v14 · Google Cloud & DeepL · AES-256-GCM',
    },
    year: { en: 'SIDE PROJECT', de: 'HOBBYPROJEKT' },
    story: {
      en: 'Most Discord translation bots spam public channels with flag-reaction replies and burn through API quotas on emojis or bot commands. I built dc-translation so users get a private split-screen Live Thread or right-click ephemeral translation cards instead.',
      de: 'Klassische Übersetzungs-Bots auf Discord müllen öffentliche Channels oft mit Flaggen-Antworten voll und verfeuern API-Kontingente für Emojis oder Bot-Commands. Deshalb habe ich dc-translation gebaut: Übersetzungen landen in einem privaten Split-Screen-Live-Thread oder als nur für dich sichtbare Rechtsklick-Karte.',
    },
    engineeringNote: {
      en: 'Before calling Google Cloud Translation or DeepL, a local filter strips markup, URLs, and bot commands and checks n-gram language detection. Concurrent requests share an in-flight cache backed by L1 memory and L2 MongoDB Atlas, with user settings encrypted via AES-256-GCM.',
      de: 'Vor jedem API-Call an Google Cloud oder DeepL filtert der Bot Markup, Links und Befehle heraus und prüft lokal die Sprache. Parallele Anfragen werden über einen L1-Memory- und L2-MongoDB-Cache abgefangen; Nutzereinstellungen liegen AES-256-GCM-verschlüsselt in SQLite und MongoDB.',
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
      { val: 'L1 + L2 Cache', lbl: 'Memory + Mongo' },
    ],
    stack: [
      'TypeScript 6.0',
      'Node.js 20+',
      'Discord.js v14',
      'Google Cloud Translation',
      'DeepL API',
      'AES-256-GCM',
      'SQLite WAL',
      'MongoDB Atlas',
      'Docker',
    ],
    href: 'https://github.com/lukaspabst/dc-translation',
  },
  {
    id: 'zen-ui',
    index: 'VI',
    category: 'personal',
    title: 'zeN-UI // CAPRI (@zen-ui/system)',
    role: {
      en: 'Design System, WebGL Engine & Security Co-Pilot',
      de: 'Design-System, WebGL-Engine & Security Co-Pilot',
    },
    statusPill: { en: 'Powers This Site', de: 'Basis dieser Seite' },
    archPill: '8 Themes · Web Components · Capri Guard',
    subtitle: {
      en: 'Cross-framework UI library (React, Angular 20+, Vue) with built-in SQLi/XSS/Prompt-Injection firewall',
      de: 'Framework-übergreifende UI-Library (React, Angular 20+, Vue) mit integrierter SQLi/XSS/Prompt-Injection-Firewall',
    },
    discipline: {
      en: 'React 19 · Angular 20+ · Web Components · Three.js GLSL · Web Audio · CLI Security',
      de: 'React 19 · Angular 20+ · Web Components · Three.js GLSL · Web Audio · CLI-Security',
    },
    year: { en: 'OPEN SOURCE · NPM', de: 'OPEN SOURCE · NPM' },
    story: {
      en: 'Instead of hand-coding cards, Three.js scenes, and audio synthesizers per project, I extracted @zen-ui/system as a reusable package with 8 dark and light themes, 40 vector icons, and the Capri CLI security scanner that protects inputs against SQL/NoSQL injection, XSS, and prompt injection.',
      de: 'Statt Karten, Three.js-Szenen und Audio-Synthesizer in jedem Projekt neu zu bauen, habe ich @zen-ui/system als eigenes Paket mit 8 Dark- und Light-Themes, 40 Vektor-Icons und dem Capri-Security-Scanner (Schutz vor SQL/NoSQL-Injection, XSS und Prompt-Injection) entwickelt.',
    },
    engineeringNote: {
      en: 'Ships both native React 19 primitives and framework-agnostic Custom Elements (<zen-icon>, <zen-theme-switcher>) plus the zero-runtime npx capri CLI for automated architecture docs and security audits.',
      de: 'Liefert sowohl React-19-Komponenten als auch Custom Elements (<zen-icon>, <zen-theme-switcher>) für Angular 20+ und Vue sowie die npx capri CLI für Architektur-Dokumentation und Security-Audits.',
    },
    highlights: {
      en: [
        '8 dark & light themes with semantic CSS variables and 60fps spring physics',
        'Real-time input firewall blocking SQL/NoSQL injection, XSS, and LLM prompt injection',
        'Procedural Web Audio synthesizer and RK4 Three-Body WebGL cosmos canvas included',
      ],
      de: [
        '8 Dark- & Light-Themes mit semantischen CSS-Variablen und 60fps-Animationen',
        'Echtzeit-Input-Firewall gegen SQL/NoSQL-Injection, XSS und LLM-Prompt-Injection',
        'Prozeduraler Web-Audio-Synthesizer und RK4-Three-Body-WebGL-Szene direkt integriert',
      ],
    },
    metrics: [
      { val: '8 Themes', lbl: '4 Dark + 4 Light' },
      { val: '40 Icons', lbl: 'Zero-Dep SVG' },
      { val: 'Capri Guard', lbl: 'SQLi/XSS/Prompt' },
      { val: '0 Runtime Cost', lbl: 'CLI & Static' },
    ],
    stack: [
      'TypeScript 5.8',
      'React 19',
      'Web Components',
      'Three.js / R3F',
      'Web Audio API',
      'Tailwind CSS v4',
      'Playwright',
    ],
    liveUrl: 'https://lukaspabst.github.io/zeN-UI/',
    href: 'https://github.com/lukaspabst/zeN-UI',
  },
];
