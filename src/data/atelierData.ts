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

export interface AtelierMetric {
  readonly val: { readonly en: string; readonly de: string };
  readonly lbl: { readonly en: string; readonly de: string };
}

export interface AtelierWork {
  readonly id: string;
  readonly index: string;
  readonly category: WorkCategory;
  readonly title: string;
  readonly role?: { readonly en: string; readonly de: string };
  readonly statusPill?: { readonly en: string; readonly de: string };
  readonly archPill?: { readonly en: string; readonly de: string };
  readonly subtitle: { readonly en: string; readonly de: string };
  readonly discipline: { readonly en: string; readonly de: string };
  readonly year: { readonly en: string; readonly de: string };
  readonly story: { readonly en: string; readonly de: string };
  readonly engineeringNote: { readonly en: string; readonly de: string };
  readonly highlights?: {
    readonly en: readonly string[];
    readonly de: readonly string[];
  };
  readonly metrics?: readonly AtelierMetric[];
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
    en: "Hi, I'm Lukas, a Full Stack Developer based in Sissach near Basel. At Primeo Energie, I build Self-Contained Systems with Java and Angular for our customer portal and hold technical ownership for both stacks. Outside of work, I enjoy building my own web projects and testing distributed architecture concepts.",
    de: 'Hi, ich bin Lukas, Full Stack Developer in Sissach bei Basel. Bei Primeo Energie entwickle ich Self-Contained Systems mit Java und Angular für unser Kundenportal und übernehme die Fachverantwortung für beide Stacks. Privat baue ich gerne eigene Web-Projekte und probiere neue Architektur-Konzepte aus.',
  },
} as const;

export const ATELIER_TIMELINE: readonly AtelierTimelineEntry[] = [
  {
    period: { en: '09/2024 – Present', de: '09/2024 – Heute' },
    category: 'experience',
    title: {
      en: 'Full Stack Developer (Technical Ownership Java & Angular)',
      de: 'Full Stack Developer (Fachverantwortung Java & Angular)',
    },
    institution: 'Primeo Energie',
    location: {
      en: 'Münchenstein (Basel Area), CH',
      de: 'Münchenstein (Region Basel), CH',
    },
    summary: {
      en: 'Developing the customer portal in a Self-Contained Systems (SCS) architecture, from solution design to backend and frontend implementation.',
      de: 'Weiterentwicklung des Kundenportals in einer Self-Contained-Systems-Architektur (SCS), vom Solution Design bis zur Umsetzung in Java und Angular.',
    },
    bullets: {
      en: [
        'Developing Self-Contained Systems (SCS) for the customer portal with Angular and Java',
        'Technical ownership for the Java and Angular stacks across the team',
        'Contributing to the technical Solution Design for new portal features',
        'Developing custom CMS apps for Magnolia and custom themes and plugins for Keycloak IDP',
        'Supporting technical coordination and code reviews with nearshoring developers',
      ],
      de: [
        'Entwicklung von Self-Contained Systems (SCS) für das Kundenportal mit Angular und Java',
        'Fachverantwortung für Java und Angular im Team',
        'Unterstützung beim Solution Design für neue Portal-Funktionen',
        'Entwicklung von CMS-Apps für Magnolia sowie eigenen Themes und Plugins für Keycloak IDP',
        'Fachliche Unterstützung bei der Koordination von Nearshoring-Entwicklern',
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
      en: 'Java backend development and REST service migration to Spring Boot in the HUK insurance environment, preceded by the two-month BURDA time-tracking project.',
      de: 'Java-Backend-Entwicklung und Migration bestehender REST-Services auf Spring Boot im HUK-Versicherungsumfeld sowie zum Einstieg das zweimonatige BURDA-Projekt.',
    },
    bullets: {
      en: [
        'Developed backend services in Java and migrated legacy REST services to Spring Boot (HUK environment)',
        'Supported daily operations, analyzed functional requirements, and built JUnit/Postman/Jenkins test suites',
        'Implemented the internal BURDA time-tracking web app with HR approval workflow on AWS (01–02/2023)',
      ],
      de: [
        'Backend-Entwicklung in Java und schrittweise Migration bestehender REST-Services auf Spring Boot (HUK-Umfeld)',
        'Betreuung im Tagesgeschäft, Anforderungsanalyse sowie automatisierte Tests mit JUnit, Postman und Jenkins',
        'Umsetzung des internen BURDA-Zeiterfassungs-Tools mit HR-Freigabeprozess auf AWS (01–02/2023)',
      ],
    },
    tags: ['Java', 'Spring Boot', 'REST Services', 'JUnit', 'Jenkins', 'AWS', 'Innovator'],
  },
  {
    period: { en: '10/2019 – 10/2022', de: '10/2019 – 10/2022' },
    category: 'education',
    title: {
      en: 'B.Sc. Business Informatics (Dual Study · Allianz)',
      de: 'Duales Studium Wirtschaftsinformatik (B.Sc. · Allianz)',
    },
    institution: 'DHBW Stuttgart & Allianz',
    location: { en: 'Stuttgart, Germany', de: 'Stuttgart, Deutschland' },
    summary: {
      en: 'Three-year dual bachelor program with 3 years of practical phases as Backend Developer at Allianz and Frontend Developer in academic student projects.',
      de: 'Dreijähriges duales Bachelorstudium mit 3 Jahren Praxisphasen als Backend-Entwickler bei der Allianz sowie als Frontend-Entwickler in Studienprojekten.',
    },
    bullets: {
      en: [
        'Practical phases (3 years): Backend development in enterprise insurance systems at Allianz',
        'Academic study projects: Frontend development and agile software engineering in student teams',
      ],
      de: [
        'Praxisphasen (3 Jahre): Backend-Entwicklung im Enterprise-Versicherungsumfeld bei der Allianz',
        'Studienprojekte an der DHBW: Frontend-Entwicklung und agile Softwareentwicklung im Team',
      ],
    },
    tags: ['Bachelor of Science', 'Allianz (Backend)', 'Frontend Projects', 'Java / Spring', 'SQL & NoSQL', 'Scrum'],
  },
  {
    period: { en: '08/2011 – 06/2019', de: '08/2011 – 06/2019' },
    category: 'education',
    title: { en: 'Abitur (University Entrance Qualification)', de: 'Allgemeine Hochschulreife (Abitur)' },
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
      en: 'Full Stack Developer · Technical Ownership Java & Angular',
      de: 'Full Stack Developer · Fachverantwortung Java & Angular',
    },
    statusPill: { en: 'Current Work', de: 'Aktuelles Projekt' },
    archPill: {
      en: 'Self-Contained Systems (SCS)',
      de: 'Self-Contained Systems (SCS)',
    },
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
      en: 'At Primeo Energie, I work on the customer portal and hold technical ownership for the Java and Angular stacks. We build the portal as independent Self-Contained Systems (SCS), which keeps domain logic, UI, and deployments cleanly separated.',
      de: 'Bei Primeo Energie arbeite ich am Kundenportal und trage die Fachverantwortung für Java und Angular. Wir setzen das Portal als unabhängige Self-Contained Systems (SCS) um, sodass Fachlogik, UI und Deployments sauber getrennt bleiben.',
    },
    engineeringNote: {
      en: 'Alongside the Java and Angular SCS modules, I build custom themes and plugins for our Keycloak Identity Provider (IDP), develop CMS apps for Magnolia, contribute to Solution Design, and support the coordination of our nearshoring developers.',
      de: 'Neben den SCS-Modulen in Java und Angular entwickle ich eigene Themes und Plugins für unseren Keycloak Identity Provider (IDP), baue CMS-Apps für Magnolia und unterstütze beim Solution Design sowie der Koordination unserer Nearshoring-Entwickler.',
    },
    highlights: {
      en: [
        'Developing Self-Contained Systems (SCS) for the customer portal in Angular and Java',
        'Technical ownership for the Java and Angular stacks and contribution to Solution Design',
        'Developing custom themes and plugins for Keycloak IDP and custom CMS apps for Magnolia',
        'Supporting technical coordination and code reviews with nearshoring developers',
      ],
      de: [
        'Entwicklung von Self-Contained Systems (SCS) für das Kundenportal mit Angular und Java',
        'Fachverantwortung für Java und Angular sowie Unterstützung beim Solution Design',
        'Eigene Themes und Plugins für Keycloak IDP sowie CMS-Apps für Magnolia',
        'Fachliche Unterstützung bei der Koordination von Nearshoring-Entwicklern',
      ],
    },
    metrics: [
      {
        val: { en: 'SCS', de: 'SCS' },
        lbl: { en: 'Architecture', de: 'Architektur' },
      },
      {
        val: { en: 'Java & Angular', de: 'Java & Angular' },
        lbl: { en: 'Stack Ownership', de: 'Fachverantwortung' },
      },
      {
        val: { en: 'Keycloak IDP', de: 'Keycloak IDP' },
        lbl: { en: 'Themes & Plugins', de: 'Themes & Plugins' },
      },
      {
        val: { en: 'Magnolia', de: 'Magnolia' },
        lbl: { en: 'CMS Apps', de: 'CMS-Apps' },
      },
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
    archPill: {
      en: 'Spring Boot Migration',
      de: 'Spring-Boot-Migration',
    },
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
        'Analyzed functional requirements with stakeholders and documented specs in Confluence and Innovator',
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
      en: 'Software Developer · Finanz-Data GmbH (Gotha)',
      de: 'Software Developer · Finanz-Data GmbH (Gotha)',
    },
    statusPill: { en: 'Previous Work', de: 'Früheres Projekt' },
    archPill: {
      en: 'HR Workflow & AWS',
      de: 'HR-Workflow & AWS',
    },
    subtitle: {
      en: 'Internal time tracking tool with HR approval workflow',
      de: 'Zeiterfassungs-Tool mit HR-Freigabeprozess',
    },
    discipline: {
      en: 'Java · Spring · Web · AWS · Scrum',
      de: 'Java · Spring · Web · AWS · Scrum',
    },
    year: { en: '01/2023 – 02/2023', de: '01/2023 – 02/2023' },
    story: {
      en: 'During my first two months at Finanz-Data GmbH, I worked on an internal time-tracking web app for BURDA where employees log, edit, and submit their working hours, and HR approves or rejects entries with feedback.',
      de: 'In meinen ersten beiden Monaten bei der Finanz-Data GmbH habe ich an einem Zeiterfassungs-Tool für BURDA mitgearbeitet, in dem Mitarbeitende ihre Arbeitszeiten eintragen, bearbeiten und einreichen können und HR Einträge mit Rückmeldung freigibt oder ablehnt.',
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
      en: 'Full-Stack Group Travel Platform & SCS Architecture Project',
      de: 'Full-Stack Gruppen-Reiseplattform & SCS-Architekturprojekt',
    },
    statusPill: { en: 'Live Demo', de: 'Live-Demo' },
    archPill: {
      en: 'Native Federation · Event-Driven SCS',
      de: 'Native Federation · Event-Driven SCS',
    },
    subtitle: {
      en: 'Group travel platform & B2B marketplace built with Angular Native Federation, Kotlin & Node.js',
      de: 'Gruppen-Reiseplattform & B2B-Marktplatz mit Angular Native Federation, Kotlin & Node.js',
    },
    discipline: {
      en: 'Angular Native Federation · Kotlin / Spring Boot · Node.js / Express · Python FastAPI · RabbitMQ · MongoDB · Redis',
      de: 'Angular Native Federation · Kotlin / Spring Boot · Node.js / Express · Python FastAPI · RabbitMQ · MongoDB · Redis',
    },
    year: { en: 'SIDE PROJECT · DEMO', de: 'HOBBY · DEMO' },
    story: {
      en: 'JourneyLink is a group travel platform where friends find common dates via client-side .ics calendar matching (only free/busy slots leave the browser), vote on stops in real time, store encrypted tickets, and split expenses—paired with B2B agency and creator portals.',
      de: 'JourneyLink ist eine Gruppen-Reiseplattform, auf der Freunde über einen clientseitigen .ics-Kalenderabgleich (nur Frei/Belegt-Zeiten verlassen den Browser) gemeinsame Termine finden, live über Stopps abstimmen, Tickets verschlüsselt ablegen und Ausgaben aufteilen.',
    },
    engineeringNote: {
      en: '6 Kotlin / Spring Boot APIs, 10 Node.js / Express services, and a Python FastAPI crawler run against 16 isolated MongoDB databases (enforced via ArchUnit), syncing asynchronously over RabbitMQ topic exchanges with Redis rate-limiting, Clerk JWKS auth, and Prometheus/Grafana container monitoring.',
      de: '6 Kotlin / Spring Boot APIs, 10 Node.js / Express-Services und ein Python FastAPI-Crawler arbeiten auf 16 strikt getrennten MongoDB-Datenbanken (per ArchUnit geprüft) und synchronisieren sich asynchron über RabbitMQ-Exchanges – abgesichert durch Redis, Clerk JWKS und Prometheus/Grafana-Monitoring.',
    },
    highlights: {
      en: [
        'Fault-tolerant Angular Native Federation shell loading 12 remote apps with @journey-link/ui (38 theme tokens)',
        '16 isolated MongoDB databases (ArchUnit-verified) + RabbitMQ AMQP topic exchanges (trips, catalog, collaboration) & Redis cache',
        'Clerk JWKS identity guards, cross-platform Java/Node AES-256-GCM ticket encryption, plus Stripe, Duffel, Gemini & Open-Meteo integrations',
        'Automated Playwright E2E, Lighthouse CI quality gates, and Prometheus/Grafana container monitoring',
      ],
      de: [
        'Fehlertolerante Angular Native Federation Shell für 12 Remote-Apps mit eigenem @journey-link/ui Design-System',
        '16 isolierte MongoDB-Datenbanken (per ArchUnit geprüft) + asynchrone RabbitMQ-Exchanges (trips, catalog, collaboration) & Redis-Cache',
        'Clerk JWKS Role-Guards, plattformübergreifende Java/Node AES-256-GCM-Verschlüsselung sowie Stripe-, Duffel-, Gemini- & Open-Meteo-Anbindung',
        'Automatisierte Playwright-E2E-Tests, Lighthouse-CI-Gates und Prometheus/Grafana-Container-Monitoring',
      ],
    },
    metrics: [
      {
        val: { en: '17 Backend APIs', de: '17 Backend-APIs' },
        lbl: { en: 'Kotlin · Node · Py', de: 'Kotlin · Node · Py' },
      },
      {
        val: { en: '12 MFEs', de: '12 MFEs' },
        lbl: { en: 'Angular Shell', de: 'Angular Shell' },
      },
      {
        val: { en: '16 Mongo DBs', de: '16 Mongo-DBs' },
        lbl: { en: 'ArchUnit Isolated', de: 'ArchUnit-isoliert' },
      },
      {
        val: { en: 'RabbitMQ + Redis', de: 'RabbitMQ + Redis' },
        lbl: { en: 'Event-Driven', de: 'Event-Driven' },
      },
    ],
    stack: [
      'Angular',
      'Native Federation',
      '@journey-link/ui',
      'TypeScript',
      'Kotlin',
      'Spring Boot',
      'Node.js & Express',
      'Python & FastAPI',
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
    archPill: {
      en: 'Live Threads & AES-256-GCM',
      de: 'Live-Threads & AES-256-GCM',
    },
    subtitle: {
      en: 'Multilingual Discord bot with private live threads & multi-tier caching',
      de: 'Mehrsprachiger Discord-Bot mit privaten Live-Threads & mehrstufigem Cache',
    },
    discipline: {
      en: 'TypeScript · Node.js · Discord.js · Google Cloud & DeepL · SQLite WAL · MongoDB · Redis',
      de: 'TypeScript · Node.js · Discord.js · Google Cloud & DeepL · SQLite WAL · MongoDB · Redis',
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
      {
        val: { en: '135+ Locales', de: '135+ Sprachen' },
        lbl: { en: 'Auto-Detection', de: 'Auto-Erkennung' },
      },
      {
        val: { en: '3.5s Batching', de: '3,5s-Batching' },
        lbl: { en: 'Live Threads', de: 'Live-Threads' },
      },
      {
        val: { en: 'AES-256-GCM', de: 'AES-256-GCM' },
        lbl: { en: 'Encrypted DB', de: 'Verschlüsselte DB' },
      },
      {
        val: { en: 'L1 + L2 Cache', de: 'L1 + L2 Cache' },
        lbl: { en: 'Mem · Redis · Mongo', de: 'Mem · Redis · Mongo' },
      },
    ],
    stack: [
      'TypeScript',
      'Node.js',
      'Discord.js',
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
      en: 'Cross-Framework UI Library, WebGL Scene & CLI Security Linter',
      de: 'Framework-übergreifende UI-Library, WebGL-Szene & CLI-Security-Linter',
    },
    statusPill: { en: 'Powers This Site', de: 'Basis dieser Seite' },
    archPill: {
      en: '51 Components · 8 Themes · Capri CLI',
      de: '51 Komponenten · 8 Themes · Capri CLI',
    },
    subtitle: {
      en: 'Cross-framework UI library (React, Angular, Vue) with Three.js canvas & CLI security linter',
      de: 'Framework-übergreifende UI-Library (React, Angular, Vue) mit Three.js-Szene & CLI-Security-Linter',
    },
    discipline: {
      en: 'React · Angular · W3C Custom Elements · Three.js / R3F · GSAP · Web Audio · Capri CLI',
      de: 'React · Angular · W3C Custom Elements · Three.js / R3F · GSAP · Web Audio · Capri CLI',
    },
    year: { en: 'OPEN SOURCE · NPM', de: 'OPEN SOURCE · NPM' },
    story: {
      en: 'Instead of rebuilding cards, Three.js backgrounds, and audio controls for every project, I packaged @zen-ui-capri/system with 51 UI components, 8 dark and light themes, 40 vector icons, and the Capri CLI security linter that checks inputs for SQL/NoSQL injection, XSS, and prompt-injection patterns.',
      de: 'Statt Karten, Three.js-Hintergründe und Audio-Steuerung in jedem Projekt neu zu bauen, habe ich @zen-ui-capri/system als eigenes Paket mit 51 UI-Komponenten, 8 Dark- und Light-Themes, 40 Vektor-Icons und dem Capri-CLI-Security-Linter (Prüfung auf SQL/NoSQL-Injection, XSS und Prompt-Injection-Muster) entwickelt.',
    },
    engineeringNote: {
      en: 'Ships both native React components and framework-agnostic W3C Custom Elements (<zen-icon>, <zen-theme-switcher>) plus the npx capri CLI for architecture checks and client-side input sanitization.',
      de: 'Liefert sowohl React-Komponenten als auch W3C Custom Elements (<zen-icon>, <zen-theme-switcher>) für Angular, Vue und Svelte sowie die npx capri CLI für Architektur-Checks und Input-Validierung.',
    },
    highlights: {
      en: [
        '51 UI components & 8 dark/light themes with CSS custom properties and 60fps spring animations',
        'Client-side input sanitizer & CLI security linter (capri-guard) detecting SQL/NoSQL injection, XSS, and prompt injection patterns',
        'Procedural Web Audio synthesizer, GSAP motion utilities, and interactive Three.js orbital background included',
      ],
      de: [
        '51 UI-Komponenten & 8 Dark-/Light-Themes mit semantischen CSS-Variablen und 60fps-Animationen',
        'Clientseitige Input-Prüfung & CLI-Security-Linter (capri-guard) zur Erkennung von SQL/NoSQL-Injection-, XSS- und Prompt-Injection-Mustern',
        'Prozeduraler Web-Audio-Synthesizer, GSAP-Animationen und interaktiver Three.js-Hintergrund direkt integriert',
      ],
    },
    metrics: [
      {
        val: { en: '51 Components', de: '51 Komponenten' },
        lbl: { en: 'React + Web Comp', de: 'React + Web Comp' },
      },
      {
        val: { en: '8 Themes', de: '8 Themes' },
        lbl: { en: '4 Dark + 4 Light', de: '4 Dark + 4 Light' },
      },
      {
        val: { en: '40 Icons', de: '40 Icons' },
        lbl: { en: 'Zero-Dep SVG', de: 'Zero-Dep SVG' },
      },
      {
        val: { en: 'capri-guard', de: 'capri-guard' },
        lbl: { en: 'Security Linter', de: 'Security-Linter' },
      },
    ],
    stack: [
      'TypeScript',
      'React',
      'Angular & Vue',
      'W3C Custom Elements',
      'Tailwind CSS',
      'Three.js & React Three Fiber',
      'GLSL Post-Processing',
      'GSAP',
      'Web Audio API',
      'Capri CLI (Node.js)',
      'Playwright E2E',
      'Vite',
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
    archPill: {
      en: 'PWSH · Windows Terminal · HLSL Shader',
      de: 'PWSH · Windows Terminal · HLSL-Shader',
    },
    subtitle: {
      en: 'Brings all 8 @zen-ui-capri/system themes, HLSL CRT shaders, and PSReadLine safety checks into PowerShell, Windows Terminal & CMD',
      de: 'Bringt alle 8 @zen-ui-capri/system-Themes, HLSL-CRT-Shader und PSReadLine-Sicherheitschecks in PowerShell, Windows Terminal & CMD',
    },
    discipline: {
      en: 'PowerShell · Windows Terminal · CMD · Direct3D HLSL Shader · ANSI TrueColor · React Workbench',
      de: 'PowerShell · Windows Terminal · CMD · Direct3D HLSL Shader · ANSI TrueColor · React Workbench',
    },
    year: { en: 'SIDE PROJECT · CLI', de: 'HOBBY · CLI' },
    story: {
      en: 'I wanted my local PowerShell prompt, PSReadLine syntax highlighting, CMD shell, and Windows Terminal color schemes to match my web projects. zeN-Terminal switches all of them at once—including procedural 1080p wallpapers and an optional Direct3D HLSL CRT pixel shader—and provides an interactive web catalog at terminal.lpabst.dev.',
      de: 'Ich wollte meinen lokalen PowerShell-Prompt, das PSReadLine-Syntax-Highlighting, CMD und mein Windows-Terminal-Farbschema an meine Web-Projekte anpassen. Mit zeN-Terminal schalte ich alles gleichzeitig per zen-theme-Befehl um – inklusive prozeduraler 1080p-Wallpapers, optionalem Direct3D-HLSL-CRT-Shader und interaktivem Web-Katalog.',
    },
    engineeringNote: {
      en: 'The PowerShell installer backs up your existing $PROFILE and Windows Terminal settings.json, configures 24-bit TrueColor ANSI prompts, PSReadLine token colors, and CMD AutoRun hooks, and registers a PSReadLine Enter-key handler (capri-guard) that warns before executing suspicious shell strings.',
      de: 'Der PowerShell-Installer legt vorab Backups von $PROFILE und der Windows-Terminal-settings.json an, richtet 24-Bit-TrueColor-ANSI-Prompts, PSReadLine-Farben und CMD-AutoRun-Hooks ein und registriert einen PSReadLine-Enter-Handler (capri-guard), der vor verdächtigen Befehlen warnt.',
    },
    highlights: {
      en: [
        'One-command PowerShell, CMD & Windows Terminal theme switching across all 8 @zen-ui-capri/system palettes',
        'Full-screen in-terminal TUI workbench (zen-ui), procedural 1080p wallpapers, and Direct3D HLSL CRT scanline pixel shader',
        'PSReadLine Enter-key safety check (capri-guard) inspecting shell inputs for SQLi, XSS, and prompt-injection patterns',
      ],
      de: [
        'Wechsel des PowerShell-, CMD- und Windows-Terminal-Themes über alle 8 @zen-ui-capri/system-Paletten mit einem Befehl',
        'Interaktive Vollbild-TUI im Terminal (zen-ui), prozedurale 1080p-Wallpapers und Direct3D-HLSL-CRT-Pixel-Shader',
        'PSReadLine-Sicherheitscheck beim Drücken von Enter (capri-guard) zum Prüfen von Befehlen auf SQLi-, XSS- und Prompt-Injection-Muster',
      ],
    },
    metrics: [
      {
        val: { en: '8 Themes', de: '8 Themes' },
        lbl: { en: '24-Bit TrueColor', de: '24-Bit TrueColor' },
      },
      {
        val: { en: '3 Shells', de: '3 Shells' },
        lbl: { en: 'PWSH / WT / CMD', de: 'PWSH / WT / CMD' },
      },
      {
        val: { en: 'HLSL Shader', de: 'HLSL-Shader' },
        lbl: { en: 'Direct3D CRT', de: 'Direct3D CRT' },
      },
      {
        val: { en: 'capri-guard', de: 'capri-guard' },
        lbl: { en: 'PSReadLine Check', de: 'PSReadLine-Check' },
      },
    ],
    stack: [
      'PowerShell',
      'PSReadLine',
      'Windows Terminal',
      'CMD AutoRun',
      'Direct3D HLSL Shader',
      '24-Bit ANSI TrueColor',
      '@zen-ui-capri/system',
      'React',
      'Three.js / R3F',
      'TypeScript',
      'Tailwind CSS',
      'Docker & Nginx',
    ],
    liveUrl: 'https://terminal.lpabst.dev',
    href: 'https://github.com/lukaspabst/zeN-Terminal',
  },
  {
    id: 'zensonics',
    index: 'VIII',
    category: 'personal',
    title: 'ZenSonics',
    role: {
      en: 'Unified Cross-Platform Music Hub, Multi-Engine Player & BYOK Vault',
      de: 'Plattformübergreifender Musik-Hub, Multi-Engine-Player & BYOK-Vault',
    },
    statusPill: { en: 'Live Hub', de: 'Live-Hub' },
    archPill: {
      en: 'Go · Next.js · AES-256-GCM AAD Vault',
      de: 'Go · Next.js · AES-256-GCM AAD-Vault',
    },
    subtitle: {
      en: 'Multi-engine audio player (Spotify, YouTube, SoundCloud, Apple Music), playlist transfer hub & cryptographic BYOK vault',
      de: 'Multi-Engine-Audioplayer (Spotify, YouTube, SoundCloud, Apple Music), Playlist-Transfer-Hub & kryptografischer BYOK-Vault',
    },
    discipline: {
      en: 'Go · Next.js · TypeScript · @zen-ui-capri/system · HKDF + AES-256-GCM · Web Audio DSP · MongoDB',
      de: 'Go · Next.js · TypeScript · @zen-ui-capri/system · HKDF + AES-256-GCM · Web Audio DSP · MongoDB',
    },
    year: { en: 'SIDE PROJECT · LIVE', de: 'HOBBY · LIVE' },
    story: {
      en: 'Jumping between Spotify, YouTube Music, SoundCloud, and Apple Music breaks shared playlists and hits strict third-party API quotas. ZenSonics combines all four platforms into a single library and dual-deck player with equal-power crossfading, real-time SSE playlist transfers, and a Bring-Your-Own-Key (BYOK) credential vault.',
      de: 'Der Wechsel zwischen Spotify, YouTube Music, SoundCloud und Apple Music zerreißt gemeinsame Playlists und scheitert oft an engen API-Limits. ZenSonics vereint alle vier Plattformen in einer gemeinsamen Mediathek mit Dual-Deck-Player, Equal-Power-Crossfader, Echtzeit-SSE-Playlist-Transfers und einem Bring-Your-Own-Key-(BYOK)-Tresor.',
    },
    engineeringNote: {
      en: 'The Go backend encrypts user OAuth tokens and BYOK developer keys with HKDF-SHA256 derived AES-256-GCM keys and strict Additional Authenticated Data (AAD) binding, enforces a zero-SSRF outbound dialer blocking RFC1918/link-local ranges, deduplicates token refreshes via singleflight, and runs a 2-stage ISRC + Levenshtein/duration track matcher across parallel errgroup adapters.',
      de: 'Das Go-Backend verschlüsselt OAuth-Tokens und eigene Entwickler-API-Keys per HKDF-SHA256 und AES-256-GCM inklusive strikter AAD-Bindung, blockiert private IP-Bereiche über einen Zero-SSRF-Dialer, bündelt Token-Refreshes via singleflight und gleicht Tracks zweistufig über ISRC sowie Levenshtein- und Laufzeit-Matching ab.',
    },
    highlights: {
      en: [
        'HKDF-SHA256 + AES-256-GCM vault with AAD tenant/provider binding, Clerk JWKS verification, GDPR tombstone enforcement, and zero-SSRF outbound dialer',
        'Dual-deck A/B browser audio orchestrator with Widevine EME capability probing, 0s–12s equal-power cosine/sine crossfading, and 3-candidate YouTube failover',
        '2-stage ISRC + fuzzy title/artist/duration track matcher with L1/L2 caching and idempotent Server-Sent Events (SSE) playlist transfers',
        'Built with @zen-ui-capri/system across all 8 themes, verified across 5 responsive viewports with Playwright E2E and packaged for Web, Tauri, and Capacitor',
      ],
      de: [
        'HKDF-SHA256 + AES-256-GCM-Tresor mit AAD-Bindung, Clerk-JWKS-Prüfung, DSGVO-Tombstones und Zero-SSRF-HTTP-Dialer',
        'Dual-Deck-A/B-Audio-Orchestrierung mit Widevine-EME-Prüfung, 0s–12s Equal-Power-Crossfader und 3-stufigem YouTube-Failover',
        'Zweistufiges ISRC- und Fuzzy-Track-Matching (Levenshtein + Laufzeit) mit L1/L2-Cache und idempotenten Echtzeit-SSE-Playlist-Transfers',
        'Umgesetzt mit @zen-ui-capri/system in 8 Themes, per Playwright E2E über 5 Viewports getestet und bereitgestellt für Web, Tauri und Capacitor',
      ],
    },
    metrics: [
      {
        val: { en: '4 Platforms', de: '4 Plattformen' },
        lbl: { en: 'Unified Audio Hub', de: 'Vereinter Audio-Hub' },
      },
      {
        val: { en: 'AES-256-GCM', de: 'AES-256-GCM' },
        lbl: { en: 'HKDF + AAD Vault', de: 'HKDF + AAD-Vault' },
      },
      {
        val: { en: '0s–12s DSP', de: '0s–12s DSP' },
        lbl: { en: 'Dual-Deck Crossfade', de: 'Dual-Deck-Crossfade' },
      },
      {
        val: { en: 'ISRC + Fuzzy', de: 'ISRC + Fuzzy' },
        lbl: { en: 'SSE Track Matcher', de: 'SSE-Track-Matcher' },
      },
    ],
    stack: [
      'Go',
      'Chi Router',
      'Next.js',
      'React',
      'TypeScript',
      '@zen-ui-capri/system',
      'AES-256-GCM + HKDF-SHA256',
      'Clerk Auth (JWKS)',
      'MongoDB',
      'Web Audio API',
      'Server-Sent Events (SSE)',
      'Tauri & Capacitor',
      'Playwright E2E',
      'Docker & Nginx',
    ],
    liveUrl: 'https://sonics.lpabst.dev',
  },
  {
    id: 'capri-assistant',
    index: 'IX',
    category: 'personal',
    title: 'Capri Assistant (Project Capricorn)',
    role: {
      en: 'Custom Fine-Tuned AI Assistant, Shielded Smart-Home Control & Desktop/Mobile App',
      de: 'Selbst weitertrainierter KI-Assistent, abgeschirmte Smart-Home-Steuerung & Desktop-/Mobile-App',
    },
    statusPill: { en: 'Private System', de: 'Privates System' },
    archPill: { en: 'Fine-Tuned 27B Model · Smart-Home Proxy · 2-Zone Sandbox', de: 'Weitertrainiertes 27B-Modell · Smart-Home-Proxy · 2-Zonen-Sandbox' },
    subtitle: {
      en: 'Voice-enabled desktop & mobile assistant with a custom fine-tuned 27B AI model, inbox triage & private smart-home control',
      de: 'Sprachgesteuerter Desktop- & Mobile-Assistent mit weitertrainiertem 27B-KI-Modell, E-Mail-Sortierung & sicherer Smart-Home-Steuerung',
    },
    discipline: {
      en: 'Angular · Electron · TypeScript / Node.js · Qwen 27B (QLoRA) · Smart-Home Proxy · Cloudflare Zero Trust',
      de: 'Angular · Electron · TypeScript / Node.js · Qwen 27B (QLoRA) · Smart-Home-Proxy · Cloudflare Zero Trust',
    },
    year: { en: 'SIDE PROJECT · ZERO-TRUST', de: 'HOBBY · ZERO-TRUST' },
    story: {
      en: 'Visually inspired by Cyberpunk: Edgerunners, I built Capri as my own voice-enabled AI assistant for Windows and mobile, powered by a 27-billion-parameter language model that I fine-tuned myself. In daily use, Capri automatically sorts and moves incoming emails, sends push alerts to my phone when something important lands in the inbox, and summarizes local code projects. Across my home network, it can also turn on my PC, control my TV, speakers, and room lighting, and run system health checks, all through a privacy layer that hides real device details and personal data from the AI.',
      de: 'Optisch inspiriert von Cyberpunk: Edgerunners habe ich Capri als eigenen sprachgesteuerten KI-Assistenten für Windows und das Smartphone gebaut, angetrieben von einem selbst weitertrainierten 27-Milliarden-Parameter-Sprachmodell. Im Alltag sortiert und verschiebt Capri eingehende E-Mails automatisch, schickt mir bei wichtigen Nachrichten im Posteingang sofort eine Push-Meldung aufs Handy und fasst lokale Code-Projekte zusammen. Im Heimnetz kann das System außerdem meinen PC einschalten, Fernseher, Lautsprecher und Raumbeleuchtung steuern sowie den Systemzustand prüfen, wobei eine eigene Datenschutzschicht echte Gerätedaten und persönliche Infos vor der KI verbirgt.',
    },
    engineeringNote: {
      en: 'To tailor the assistant to my workflows, I further trained Qwen 27B (QLoRA fine-tuning) on an anonymized dataset. A small 24/7 Hetzner server automatically starts a dedicated cloud GPU (A100) during the day for sub-second answers with zero load on my own PC, and switches to Gemini Flash overnight. For home-network devices like my PC, Smart TV, audio receiver, or lighting, the AI never sees real IP addresses, device names, or access tokens: it only sends neutral placeholders such as TV_MAIN, which a local service translates inside my network behind the scenes. Personal details like names, emails, and IBANs are masked locally before any cloud call, and because the system connects directly to my inbox, home network, and custom AI model, it stays private behind Cloudflare Zero Trust.',
      de: 'Damit das Sprachmodell meine Abläufe und Werkzeuge direkt beherrscht, habe ich Qwen 27B mit eigenen, vorab anonymisierten Trainingsdaten per QLoRA weitertrainiert. Ein kleiner 24/7-Hetzner-Server startet tagsüber automatisch eine Cloud-GPU (A100) für Antworten unter einer Sekunde ohne Last auf meinem eigenen PC; nachts übernimmt Gemini Flash. Bei der Steuerung von PC, Smart-TV, Audio-Receiver oder Licht erfährt die KI nie, welche Geräte, IP-Adressen oder Zugangsdaten im Netzwerk existieren: Sie sendet nur neutrale Platzhalter wie TV_MAIN, die erst ein lokaler Dienst intern im Heimnetz übersetzt. Namen, E-Mails und IBANs werden vor Cloud-Anfragen lokal geschwärzt, und wegen der direkten Anbindung an Postfach, Heimnetz und mein eigenes KI-Modell läuft das System privat hinter Cloudflare Zero Trust.',
    },
    highlights: {
      en: [
        'Further trained an open 27B language model (Qwen 27B via QLoRA) on an anonymized custom dataset, served on an auto-started cloud A100 GPU for sub-second replies',
        'Shielded smart-home broker to turn on my PC remotely (Wake-on-LAN) and control TV, audio, room lighting, and PC RGB (SignalRGB) via neutral aliases (like TV_MAIN) without exposing device models, IPs, or passwords',
        'Automated Outlook email sorting and folder moves via Microsoft Graph, instant phone push notifications for important inbox messages, local personal-data (PII) masking, and offline codebase indexing',
        'Frameless Windows Electron desktop app with a click-through 2D Canvas animation, lip-synced voice chat, and a private mobile web app behind Cloudflare Zero Trust',
      ],
      de: [
        'Offenes 27B-Sprachmodell (Qwen 27B per QLoRA) mit einem eigenen, anonymisierten Datensatz weitertrainiert und über eine automatisch gestartete Cloud-A100-GPU mit Antwortzeiten unter einer Sekunde angebunden',
        'Abgeschirmter Smart-Home-Broker, um meinen PC aus der Ferne einzuschalten (Wake-on-LAN) sowie Fernseher, Audio, Licht und PC-Beleuchtung (SignalRGB) über neutrale Platzhalter (wie TV_MAIN) ohne echte IPs oder Passwörter zu steuern',
        'Automatische E-Mail-Sortierung und Ordner-Ablage über Microsoft Graph, direkte Handy-Push-Meldungen bei wichtigen E-Mails im Posteingang, lokale Schwärzung persönlicher Daten und Offline-Code-Analyse',
        'Rahmenlose Windows-Desktop-App (Electron & 2D-Canvas) mit Click-Through-Fenster, lippensynchronem Sprachchat und privater Smartphone-Web-App hinter Cloudflare Zero Trust',
      ],
    },
    metrics: [
      { val: { en: '27B AI Model', de: '27B-KI-Modell' }, lbl: { en: 'Custom Fine-Tuned', de: 'Weitertrainiert' } },
      { val: { en: 'Smart Home', de: 'Smart-Home' }, lbl: { en: 'Shielded LAN Proxy', de: 'Abgeschirmtes LAN' } },
      { val: { en: '< 1s Replies', de: '< 1s Antwort' }, lbl: { en: 'Auto Cloud GPU', de: 'Auto-Cloud-GPU' } },
      { val: { en: '2-Zone Sandbox', de: '2-Zonen-Sandbox' }, lbl: { en: 'Zero-Trust Privacy', de: 'Lokaler Datenschutz' } },
    ],
    stack: ['Angular', '@zen-ui-capri/system', 'Electron', 'TypeScript & Node.js', 'Qwen 27B (QLoRA)', 'Cloud GPU (Colab A100)', 'Gemini Flash API', 'Shielded Smart-Home / LAN Proxy', 'Wake-on-LAN & Webhooks', 'Two-Zone Privacy Sandbox', 'Microsoft Graph & Push Alerts', 'SignalRGB', 'Hetzner Docker', 'Cloudflare Zero Trust'],
  },
];
