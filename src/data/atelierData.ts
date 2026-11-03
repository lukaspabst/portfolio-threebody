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
  readonly role?: string;
  readonly statusPill?: string;
  readonly archPill?: string;
  readonly subtitle: { readonly en: string; readonly de: string };
  readonly discipline: { readonly en: string; readonly de: string };
  readonly year: string;
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
  base: 'Sissach / Münchenstein, Switzerland',
  origin: 'Sondershausen, Germany',
  birth: '23.03.2001',
  company: 'Primeo Energie',
  flagship: 'JourneyLink (Personal Demo)',
  previousCompany: 'Finanz-Data GmbH (Gotha)',
  degree: 'B.Sc. Business Informatics (DHBW Stuttgart)',
  email: 'lukas.pabst@outlook.de',
  github: 'https://github.com/lukaspabst',
  journeyLinkGithub: 'https://github.com/Journey-Link',
  xing: 'https://www.xing.com/profile/Lukas_Pabst102',
  statement: {
    en: 'Full Stack Developer at Primeo Energie (Switzerland) with technical ownership for Java and Angular. Designing and building Self-Contained Systems (SCS) for the customer portal, Keycloak IDP extensions, and Magnolia CMS apps.',
    de: 'Full Stack Developer bei Primeo Energie (Schweiz) mit Fachverantwortung für Java und Angular. Entwicklung von Self-Contained Systems (SCS) für das Kundenportal, Solution Design, Keycloak-IDP-Erweiterungen und Magnolia-CMS-Apps.',
  },
} as const;

export const ATELIER_TIMELINE: readonly AtelierTimelineEntry[] = [
  {
    period: { en: '09/2024 – Present', de: '09/2024 – Heute' },
    category: 'experience',
    title: {
      en: 'Full Stack Developer (Technical Lead Java & Angular)',
      de: 'Full Stack Developer (Fachverantwortung Java & Angular)',
    },
    institution: 'Primeo Energie (Primeo Holding AG)',
    location: { en: 'Münchenstein / Sissach, CH', de: 'Münchenstein / Sissach, CH' },
    summary: {
      en: 'Full-stack engineering and solution design for the Primeo Energie customer portal built on Self-Contained Systems (SCS).',
      de: 'Full-Stack-Entwicklung und Solution Design für das Primeo-Energie-Kundenportal auf Basis von Self-Contained Systems (SCS).',
    },
    bullets: {
      en: [
        'Developing Self-Contained Systems (SCS) for the customer portal with Angular and Java',
        'Technical ownership (Fachverantwortung) for Java and Angular',
        'Supporting Solution Design for the customer portal',
        'Developing CMS apps for Magnolia CMS',
        'Supporting the coordination of nearshoring developers',
        'Developing custom themes and plugins for Keycloak IDP',
      ],
      de: [
        'Entwickeln von Self-Contained Systems (SCS) für das Kundenportal mit Angular und Java',
        'Fachverantwortung für Java und Angular',
        'Unterstützung beim Solution Design für das Kundenportal',
        'Entwickeln von CMS-Apps für das CMS Magnolia',
        'Unterstützung bei der Koordination von Nearshoring-Entwicklern',
        'Entwickeln von Themes und Plugins für Keycloak IDP',
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
      en: 'Backend and REST service development with Java and Spring Boot in the HUK environment.',
      de: 'Backend- und REST-Service-Entwicklung mit Java und Spring Boot im HUK-Umfeld.',
    },
    bullets: {
      en: [
        'Backend development with Java and REST service development with Spring Boot',
        'Support of the HUK environment in daily operations and analysis of functional requirements',
        'Transition of legacy REST services to Spring and creation of automated test suites',
      ],
      de: [
        'Backend-Entwicklung mit Java sowie REST-Service-Entwicklung mit Spring Boot',
        'Betreuung der HUK-Umgebung im Tagesgeschäft und Analyse fachlicher Anforderungen',
        'Transition von REST-Services auf Spring sowie Erstellung automatisierter Tests',
      ],
    },
    tags: ['Java', 'Spring Boot', 'REST Services', 'JUnit', 'Jenkins', 'Innovator'],
  },
  {
    period: { en: '10/2019 – 10/2022', de: '10/2019 – 10/2022' },
    category: 'education',
    title: {
      en: 'B.Sc. Business Informatics (Wirtschaftsinformatik)',
      de: 'Studium der Wirtschaftsinformatik (B.Sc.)',
    },
    institution: 'Duale Hochschule Baden-Württemberg (DHBW)',
    location: { en: 'Stuttgart, Germany', de: 'Stuttgart, Deutschland' },
    summary: {
      en: 'Dual Bachelor of Science degree combining software engineering, enterprise systems, and business administration.',
      de: 'Duales Studium mit Abschluss Bachelor of Science an der Schnittstelle von Software Engineering und Wirtschaftsinformatik.',
    },
    tags: ['Bachelor of Science', 'Software Engineering', 'Java / Spring', 'SQL & NoSQL', 'Scrum'],
  },
  {
    period: { en: '08/2011 – 06/2019', de: '08/2011 – 06/2019' },
    category: 'education',
    title: { en: 'Abitur (University Entrance Qualification)', de: 'Allgemeine Hochschulreife (Abitur)' },
    institution: 'Staatliches Seiler-Gymnasium Schlotheim',
    location: { en: 'Schlotheim, Germany', de: 'Schlotheim, Deutschland' },
    summary: {
      en: 'Secondary school graduation with general higher education entrance qualification (Abitur).',
      de: 'Abschluss der allgemeinen Hochschulreife (Abitur).',
    },
    tags: ['Abitur'],
  },
];

export const ATELIER_WORKS: readonly AtelierWork[] = [
  {
    id: 'primeo-kundenportal',
    index: 'I',
    category: 'enterprise',
    title: 'Primeo Energie — Kundenportal',
    role: 'Full Stack Developer · Fachverantwortung Java & Angular',
    statusPill: 'Enterprise Work',
    archPill: 'Self-Contained Systems (SCS)',
    subtitle: {
      en: 'Self-Contained Systems (SCS), Keycloak IDP & Magnolia CMS',
      de: 'Self-Contained Systems (SCS), Keycloak IDP & Magnolia CMS',
    },
    discipline: {
      en: 'Java · Angular · Self-Contained Systems · Keycloak IDP · Magnolia CMS',
      de: 'Java · Angular · Self-Contained Systems · Keycloak IDP · Magnolia CMS',
    },
    year: '09/2024 — PRESENT',
    story: {
      en: 'Enterprise customer portal at Primeo Energie. Responsible for developing Self-Contained Systems (SCS) with Angular and Java, holding technical ownership (Fachverantwortung) for both stacks, contributing to Solution Design, and coordinating nearshoring developers.',
      de: 'Enterprise-Kundenportal bei Primeo Energie. Entwicklung von Self-Contained Systems (SCS) mit Angular und Java, Fachverantwortung für beide Technologien, Mitwirkung am Solution Design sowie Koordination von Nearshoring-Entwicklern.',
    },
    engineeringNote: {
      en: 'Modular Self-Contained Systems (SCS) architecture paired with custom Keycloak Identity Provider (IDP) themes & plugins and integrated Magnolia CMS applications.',
      de: 'Modulare Self-Contained-Systems-Architektur (SCS) kombiniert mit maßgeschneiderten Keycloak-IDP-Themes & -Plugins sowie integrierten Magnolia-CMS-Applikationen.',
    },
    highlights: {
      en: [
        'Developing Self-Contained Systems (SCS) for the customer portal using Angular and Java.',
        'Technical ownership (Fachverantwortung) for Java and Angular as well as Solution Design support.',
        'Developing custom themes and plugins for Keycloak IDP and CMS apps for Magnolia.',
        'Supporting the technical coordination of nearshoring development teams.',
      ],
      de: [
        'Entwickeln von Self-Contained Systems (SCS) für das Kundenportal mit Angular und Java.',
        'Fachverantwortung für Java und Angular sowie Unterstützung beim Solution Design.',
        'Entwickeln von Themes und Plugins für Keycloak IDP sowie CMS-Apps für Magnolia.',
        'Unterstützung bei der fachlichen Koordination von Nearshoring-Entwicklern.',
      ],
    },
    metrics: [
      { val: 'SCS', lbl: 'Architecture' },
      { val: 'Java & Angular', lbl: 'Tech Lead' },
      { val: 'Keycloak IDP', lbl: 'Plugins & Themes' },
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
    role: 'Software Developer · Finanz-Data GmbH (Gotha)',
    statusPill: 'Enterprise Work',
    archPill: 'Backend & Spring Migration',
    subtitle: {
      en: 'REST Service Modernization & Operations in the HUK Environment',
      de: 'REST-Service-Modernisierung & Backend-Betrieb im HUK-Umfeld',
    },
    discipline: {
      en: 'Java · Spring Boot · REST Services · JUnit · Jenkins',
      de: 'Java · Spring Boot · REST-Services · JUnit · Jenkins',
    },
    year: '01/2023 — 08/2024',
    story: {
      en: 'Enterprise project at Finanz-Data GmbH supporting the HUK environment in daily operations, analyzing functional requirements, implementing backend solutions, and transitioning legacy REST services to Spring Boot.',
      de: 'Enterprise-Projekt bei der Finanz-Data GmbH zur Betreuung der HUK-Umgebung im laufenden Betrieb, Analyse fachlicher Anforderungen, Implementierung neuer Backend-Lösungen und Migration bestehender REST-Services auf Spring Boot.',
    },
    engineeringNote: {
      en: 'Step-by-step migration of production REST endpoints to Spring Boot accompanied by automated JUnit regression suites and Jenkins CI pipelines.',
      de: 'Schrittweise Transition produktiver REST-Schnittstellen auf Spring Boot inklusive Aufbau automatisierter JUnit-Testsuites und Jenkins-Pipelines.',
    },
    highlights: {
      en: [
        'Analysis of functional requirements and technical specification in Confluence and Innovator.',
        'Transition and refactoring of legacy REST services to modern Java & Spring Boot architectures.',
        'Creation of automated unit and integration tests (JUnit, Postman) integrated with Jenkins.',
      ],
      de: [
        'Analyse fachlicher Anforderungen sowie technische Konzeption in Confluence und Innovator.',
        'Transition und Refactoring bestehender REST-Services auf moderne Java- & Spring-Boot-Architekturen.',
        'Aufbau automatisierter Unit- und Integrationstests (JUnit, Postman) mit Jenkins-Anbindung.',
      ],
    },
    stack: ['Java', 'Spring Boot', 'REST APIs', 'JUnit', 'Jenkins', 'Postman', 'Innovator', 'Git'],
  },
  {
    id: 'burda-timetracking',
    index: 'III',
    category: 'enterprise',
    title: 'BURDA Timetracking',
    role: 'Software Developer · Enterprise Project (DHBW)',
    statusPill: 'Enterprise Work',
    archPill: 'HR Workflow & AWS Cloud',
    subtitle: {
      en: 'Employee Time Tracking & HR Approval Workflow System',
      de: 'Zeiterfassungssystem & HR-Freigabe-Workflow',
    },
    discipline: {
      en: 'Java · Spring · Web · AWS · Scrum',
      de: 'Java · Spring · Web · AWS · Scrum',
    },
    year: 'DHBW · ENTERPRISE',
    story: {
      en: 'Development of an internal time-tracking application enabling employees to record, modify, save, and submit working hours while providing HR reviewers with approval and rejection workflows including mandatory feedback.',
      de: 'Entwicklung einer Zeiterfassungs-Applikation, mit der Mitarbeitende Arbeitszeiten erfassen, bearbeiten, speichern und einreichen können – inklusive HR-Prüfungsprozess für Genehmigungen oder begründete Ablehnungen.',
    },
    engineeringNote: {
      en: 'Designed and implemented end-to-end in an agile Scrum environment with automated test coverage and AWS infrastructure integration.',
      de: 'End-to-End konzipiert und umgesetzt im agilen Scrum-Prozess mit automatisierten Tests und AWS-Cloud-Integration.',
    },
    highlights: {
      en: [
        'Analysis and documentation of functional requirements and support for overall sprint & project management.',
        'Full application design and implementation for employee time entry and HR approval/rejection workflows.',
        'Automated test suite implementation and deployment workflow on AWS.',
      ],
      de: [
        'Analyse und Dokumentation fachlicher Anforderungen sowie Unterstützung im gesamten Sprint- und Projektmanagement.',
        'Konzeption und Implementierung der Zeiterfassungs- und HR-Genehmigungsprozesse.',
        'Erstellung automatisierter Tests und Bereitstellung unter Einsatz von AWS.',
      ],
    },
    stack: ['Java', 'Spring', 'AWS', 'Scrum', 'Postman', 'JUnit', 'Git', 'IntelliJ IDEA'],
  },
  {
    id: 'journeylink',
    index: 'IV',
    category: 'personal',
    title: 'JourneyLink',
    role: 'Personal Hobby Project & Architecture Demo',
    statusPill: 'Hobby · Live Demo',
    archPill: 'Microservices & MFEs Sandbox',
    subtitle: {
      en: 'Personal Full-Stack Travel Planning Sandbox & Architecture Demo',
      de: 'Persönliches Full-Stack-Hobbyprojekt & Architektur-Demo',
    },
    discipline: {
      en: 'Angular 20 Native Federation · Spring Boot · RabbitMQ · MongoDB',
      de: 'Angular 20 Native Federation · Spring Boot · RabbitMQ · MongoDB',
    },
    year: 'HOBBY · DEMO',
    story: {
      en: 'A personal hobby project and technical sandbox built to explore distributed micro-frontend and Self-Contained System patterns. Features a demo group travel planner with client-side .ics calendar heatmaps, trip voting, and expense splitting.',
      de: 'Ein persönliches Hobbyprojekt und technische Sandbox zur Erprobung verteilter Micro-Frontend- und Self-Contained-System-Architekturen. Beinhaltet eine Demo-Reiseplanung mit lokalem Kalender-Abgleich, Voting und Ausgaben-Splitting.',
    },
    engineeringNote: {
      en: 'Strict DB-per-Service isolation on MongoDB (verified via ArchUnit) with asynchronous RabbitMQ domain events, custom @journey-link/ui design system, and automated Google Cloud Build & Playwright pipelines.',
      de: 'Strikte Daten-Isolation pro Microservice auf MongoDB (geprüft per ArchUnit) und asynchrone Synchronisation über RabbitMQ Domain Events – als Demo-Umgebung betrieben.',
    },
    highlights: {
      en: [
        'Micro-Frontend Architecture: Dynamic Angular 20 Native Federation host shell with custom @journey-link/ui design system.',
        'DB-per-Service & Event-Driven Sync: Strict per-service MongoDB isolation verified by ArchUnit and asynchronous RabbitMQ domain events.',
        'End-to-End Demo Features: Client-side .ics calendar heatmap in browser, group trip voting, and min-cash-flow expense splitting.',
      ],
      de: [
        'Micro-Frontend Architektur: Dynamische Angular 20 Native Federation Host-Shell mit eigenem @journey-link/ui Design-System.',
        'DB-per-Service & Event-Driven Sync: Strikte Daten-Isolation pro Microservice auf MongoDB (geprüft per ArchUnit) und asynchrone Synchronisation über RabbitMQ Domain Events.',
        'End-to-End Demo-Features: Clientseitige .ics Kalender-Heatmap im Browser, Gruppen-Voting und Min-Cash-Flow Ausgaben-Splitting.',
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
    liveUrl: 'https://journeylink.dev',
    href: 'https://github.com/Journey-Link',
  },
  {
    id: 'dc-translation',
    index: 'V',
    category: 'personal',
    title: 'Discord Translation Bot (dc-translation)',
    role: 'Personal Open-Source Project',
    statusPill: 'Hobby · Open Source',
    archPill: 'Live Threads & AES-256-GCM',
    subtitle: {
      en: 'Quota-Preserving Multilingual Discord Bot with Private Live Threads',
      de: 'Ressourcenschonender mehrsprachiger Discord-Bot mit privaten Live-Threads',
    },
    discipline: {
      en: 'TypeScript 6 · Node.js 20+ · Discord.js v14 · Google Cloud & DeepL · AES-256-GCM',
      de: 'TypeScript 6 · Node.js 20+ · Discord.js v14 · Google Cloud & DeepL · AES-256-GCM',
    },
    year: 'HOBBY · OPEN SOURCE',
    story: {
      en: 'High-performance multilingual Discord translation bot replacing public channel spam with private split-screen Live Translation Threads, right-click ephemeral context menu cards, and country flag reactions across 135+ languages.',
      de: 'Performanter mehrsprachiger Discord-Übersetzungs-Bot, der öffentlichen Channel-Spam durch private Split-Screen-Live-Threads, ephemere Kontextmenü-Karten (Apps › Translate) und Flaggen-Reaktionen in über 135 Sprachen ersetzt.',
    },
    engineeringNote: {
      en: 'Algorithmic pre-flight filtering and local n-gram language detection feed a 3.5s message batcher and a stampede-proof coalesced cache (L1 LRU memory + L2 MongoDB Atlas 14-day TTL), secured at rest via AES-256-GCM and HMAC-SHA256 derived keys.',
      de: 'Algorithmische Vorfilterung und lokale N-Gram-Spracherkennung speisen einen 3,5-Sekunden-Message-Batcher sowie einen Stampede-geschützten L1/L2-Cache (Memory LRU + MongoDB Atlas TTL), verschlüsselt via AES-256-GCM und HMAC-SHA256.',
    },
    highlights: {
      en: [
        'Unified Private Live Threads & Ephemeral Cards: Streams 3.5s-batched translations into a personal split-screen thread with channel focus filtering, unread catch-up, and 1-click channel muting.',
        'Algorithmic Pre-Filtering & Coalesced Cache: Strips markup, custom emojis, URLs, and bot commands before API calls; deduplicates concurrent in-flight requests across L1 memory and L2 MongoDB Atlas.',
        'AES-256-GCM Field Encryption & HMAC-SHA256 Key Derivation: Encrypts user preferences, guild anti-flood guardrails, and buffered messages at rest in SQLite WAL and MongoDB Atlas.',
        'Zero-Friction Onboarding (135+ Languages): Auto-detects the Discord client locale on first use with interactive /setup & /settings wizards and localized UI dictionaries.',
      ],
      de: [
        'Private Live-Translation-Threads & Ephemere Karten: Streamt gebündelte Echtzeit-Übersetzungen (3,5s Batching) in einen privaten Split-Screen-Thread inklusive Channel-Fokus, Unread-Catch-up und Stummschaltung.',
        'Algorithmisches Pre-Filtering & Coalesced Cache: Filtert Discord-Markup, Emojis, Links und Bot-Befehle vorab; dedupliziert parallele Requests über L1-Memory-LRU und L2-MongoDB-Atlas-Cache.',
        'AES-256-GCM-Feldverschlüsselung & HMAC-SHA256: Verschlüsselt Nutzereinstellungen, Server-Guardrails und gepufferte Nachrichten in SQLite WAL und MongoDB Atlas mit abgeleiteten Schlüsseln.',
        'Zero-Friction-Onboarding (135+ Sprachen): Automatische Erkennung der Discord-Client-Sprache beim ersten Aufruf sowie dynamische Lokalisierung der Bot-Oberfläche.',
      ],
    },
    metrics: [
      { val: '135+ Locales', lbl: 'Auto-Onboarding' },
      { val: '3.5s Batching', lbl: 'Live Threads' },
      { val: 'AES-256-GCM', lbl: 'HMAC Key Deriv.' },
      { val: 'L1 + L2 Cache', lbl: 'LRU + Mongo TTL' },
    ],
    stack: [
      'TypeScript 6.0',
      'Node.js 20+',
      'Discord.js v14',
      'Google Cloud Translation v2',
      'DeepL API',
      'AES-256-GCM / HMAC-SHA256',
      'SQLite WAL',
      'MongoDB Atlas',
      'Docker',
    ],
    href: 'https://github.com/lukaspabst/dc-translation',
  },
];
