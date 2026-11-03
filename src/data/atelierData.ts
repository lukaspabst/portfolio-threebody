export type Locale = 'en' | 'de';

export interface AtelierWork {
  readonly id: string;
  readonly index: string;
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
  readonly href: string;
}

export const ATELIER_PROFILE = {
  name: 'Lukas Pabst',
  role: {
    en: 'Software Developer',
    de: 'Softwareentwickler',
  },
  base: 'Sissach, Switzerland',
  origin: 'Mühlhausen / Thüringen, Germany',
  birth: '23.03.2001',
  company: 'Primeo Energie AG',
  flagship: 'JourneyLink (Personal Demo)',
  previousCompany: 'Finanz-Data GmbH (Gotha)',
  degree: 'B.Sc. Wirtschaftsinformatik',
  email: 'lukas.pabst.business@outlook.de',
  github: 'https://github.com/lukaspabst',
  journeyLinkGithub: 'https://github.com/Journey-Link',
  xing: 'https://www.xing.com/profile/Lukas_Pabst102',
  statement: {
    en: 'Software Developer at Primeo Energie AG in Sissach, Switzerland. In my spare time, I build JourneyLink as a personal hobby project and interactive architecture demo exploring Self-Contained Systems and Angular Native Federation.',
    de: 'Softwareentwickler bei der Primeo Energie AG in Sissach, Schweiz. In meiner Freizeit entwickle ich JourneyLink als persönliches Hobbyprojekt und interaktive Architektur-Demo rund um Self-Contained Systems und Angular Native Federation.',
  },
} as const;

export const ATELIER_WORKS: readonly AtelierWork[] = [
  {
    id: 'journeylink',
    index: 'I',
    title: 'JourneyLink',
    role: 'Personal Hobby Project & Architecture Demo',
    statusPill: 'Interactive Demo',
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
      en: 'A personal hobby project and technical sandbox built to explore distributed micro-frontend and microservice patterns. Features a demo group travel planner with client-side .ics calendar heatmaps, trip voting, and expense splitting.',
      de: 'Ein persönliches Hobbyprojekt und technische Sandbox zur Erprobung verteilter Micro-Frontend- und Microservice-Architekturen. Beinhaltet eine Demo-Reiseplanung mit lokalem Kalender-Abgleich, Voting und Ausgaben-Splitting.',
    },
    engineeringNote: {
      en: 'Strict DB-per-Service isolation on MongoDB (verified via ArchUnit) with asynchronous RabbitMQ domain events, custom @journey-link/ui design system, and automated Google Cloud Build & Playwright pipelines.',
      de: 'Strikte Daten-Isolation pro Microservice auf MongoDB (geprüft per ArchUnit) und asynchrone Synchronisation über RabbitMQ Domain Events – ressourcenoptimiert auf einem einzigen Hetzner-Cluster betrieben.',
    },
    highlights: {
      en: [
        'Micro-Frontend Architecture: Dynamic Angular 20 Native Federation host shell with custom @journey-link/ui design system and 100% mobile-first responsiveness.',
        'DB-per-Service & Event-Driven Sync: Strict per-service MongoDB isolation verified by ArchUnit and asynchronous RabbitMQ domain events.',
        'End-to-End Product Features: Zero-knowledge .ics calendar heatmap in browser, democratic trip voting, min-cash-flow expense splitting, and B2B royalty engine.',
        'Role-Based Security & CI/CD: Server-verified role isolation (Traveler, Agency, Creator) and automated Google Cloud Build & Playwright pipelines.',
      ],
      de: [
        'Micro-Frontend Architektur: Dynamische Angular 20 Native Federation Host-Shell mit eigenem @journey-link/ui Design-System und 100 % Mobile-First-Responsiveness.',
        'DB-per-Service & Event-Driven Sync: Strikte Daten-Isolation pro Microservice auf MongoDB (geprüft per ArchUnit) und asynchrone Synchronisation über RabbitMQ Domain Events.',
        'End-to-End Produkt-Features: Zero-Knowledge .ics Kalender-Heatmap im Browser, demokratisches Trip-Voting, Min-Cash-Flow Ausgaben-Splitting und B2B-Royalty-Engine.',
        'Role-Based Security & CI/CD: Server-verifizierte Rollen-Isolation (Traveler, Agency, Creator) und vollautomatisierte Google Cloud Build & Playwright-Pipelines.',
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
      'Kotlin / Spring Boot 4',
      'Node.js / NestJS',
      'Python FastAPI',
      'RabbitMQ',
      'MongoDB',
      'Docker & Cloud Build',
    ],
    liveUrl: 'https://journeylink.dev',
    href: 'https://github.com/Journey-Link',
  },
  {
    id: 'customer-service-platform',
    index: 'II',
    title: 'Customer Service Platform',
    subtitle: {
      en: 'Distributed Energy Operations Core (Primeo Energie)',
      de: 'Verteilter Energie-Service-Kern (Primeo Energie)',
    },
    discipline: {
      en: 'Java · Spring Boot · Kafka · PostgreSQL',
      de: 'Java · Spring Boot · Kafka · PostgreSQL',
    },
    year: '2024 — 2026',
    story: {
      en: 'Built for Primeo Energie AG in Sissach to unify high-volume customer ticketing, energy metering workflows, and asynchronous cross-service state orchestration.',
      de: 'Entwickelt für die Primeo Energie AG in Sissach zur Bündelung komplexer Kundenservice-Prozesse, Ticketing-Workflows und ereignisgesteuerter Datenströme.',
    },
    engineeringNote: {
      en: 'Decoupled domain aggregates communicating over partitioned Apache Kafka topics with strict transactional guarantees.',
      de: 'Entkoppelte Fachdomänen über partitionierte Apache-Kafka-Streams mit strikter transaktionaler Konsistenz.',
    },
    stack: ['Java 21', 'Spring Boot', 'Apache Kafka', 'PostgreSQL', 'Docker'],
    href: 'https://github.com/lukaspabst/customer-service',
  },
  {
    id: 'synth-fm',
    index: 'III',
    title: 'SYNTH FM',
    subtitle: {
      en: 'Generative Web Audio & Shader Radio',
      de: 'Generatives Web-Audio- & Shader-Radio',
    },
    discipline: {
      en: 'WebGL · Tone.js · GLSL · Neural Audio',
      de: 'WebGL · Tone.js · GLSL · Echtzeit-DSP',
    },
    year: '2025 — 2026',
    story: {
      en: 'An infinite generative ambient and lo-fi synthesis station running entirely in the browser, pairing algorithmic harmonic progressions with audio-reactive GLSL surfaces.',
      de: 'Ein unendlicher generativer Lo-Fi- und Ambient-Radiosender im Browser, der algorithmische Harmonien mit reaktiven GLSL-Oberflächen verschmilzt.',
    },
    engineeringNote: {
      en: 'Custom Web Audio API oscillator & filter graph synchronized with 60 FPS vertex displacement uniforms.',
      de: 'Maßgeschneiderter Web-Audio-Synthese-Graph synchronisiert mit 60-FPS-Vertex-Displacement-Shadern.',
    },
    stack: ['Three.js', 'Web Audio API', 'Tone.js', 'Custom GLSL', 'TypeScript'],
    href: 'https://github.com/lukaspabst',
  },
  {
    id: 'void-chat',
    index: 'IV',
    title: 'VOID CHAT',
    subtitle: {
      en: 'Ephemeral Zero-Knowledge Messenger',
      de: 'Flüchtiges Zero-Knowledge-Messaging',
    },
    discipline: {
      en: 'Web Crypto · WebSockets · Redis',
      de: 'Web Crypto · WebSockets · Redis',
    },
    year: '2025 — 2026',
    story: {
      en: 'Cryptographic messaging room where payloads are encrypted client-side and atomically purged from volatile Redis memory the instant they are read.',
      de: 'Kryptografische Messaging-Plattform, in der Nachrichten clientseitig verschlüsselt und unmittelbar nach dem Lesen atomar aus dem Speicher gelöscht werden.',
    },
    engineeringNote: {
      en: 'Zero plaintext persistence; ECDH key negotiation with real-time WebSocket delivery receipts.',
      de: 'Null Klartext-Persistenz; ECDH-Schlüsselaustausch mit Echtzeit-WebSocket-Bestätigung.',
    },
    stack: ['TypeScript', 'Web Crypto API', 'Redis', 'WebSockets', 'React'],
    href: 'https://github.com/lukaspabst',
  },
  {
    id: 'finance-aggregator',
    index: 'V',
    title: 'Finance Aggregator',
    subtitle: {
      en: 'Real-Time Market Feed Engine',
      de: 'Echtzeit-Finanzdaten-Aggregator',
    },
    discipline: {
      en: 'Java · Spring Security · REST · Docker',
      de: 'Java · Spring Security · REST · Docker',
    },
    year: '2023 — 2024',
    story: {
      en: 'High-integrity financial data service unifying multi-provider feeds into normalized, low-latency analytical endpoints.',
      de: 'Hochintegrer REST-API-Service zur Konsolidierung und Echtzeit-Auswertung verteilter Finanzdatenquellen.',
    },
    engineeringNote: {
      en: 'Hardened with Spring Security filter chains, resilient retry policies, and deterministic schema contracts.',
      de: 'Abgesichert durch Spring-Security-Filterketten, resiliente Retry-Strategien und strikte API-Verträge.',
    },
    stack: ['Java', 'Spring Boot', 'Spring Security', 'Docker', 'PostgreSQL'],
    href: 'https://github.com/lukaspabst/finance-aggregator',
  },
  {
    id: 'neo-tasker',
    index: 'VI',
    title: 'NEO TASKER',
    subtitle: {
      en: 'Keyboard-First Rust Desktop Suite',
      de: 'Tastaturzentrierte Rust-Desktop-Suite',
    },
    discipline: {
      en: 'Rust · Tauri · React · Command UX',
      de: 'Rust · Tauri · React · Command UX',
    },
    year: '2025 — 2026',
    story: {
      en: 'A distraction-free desktop productivity instrument built on Rust and Tauri for engineers who operate exclusively via keyboard shortcuts.',
      de: 'Ein kompromisslos schnelles Desktop-Produktivitätswerkzeug auf Basis von Rust und Tauri für reine Tastatur-Workflows.',
    },
    engineeringNote: {
      en: 'Sub-10MB native binary footprint with instant cold-start and local-first state persistence.',
      de: 'Nativer Binary-Footprint unter 10 MB mit sofortigem Kaltstart und lokaler Persistenz.',
    },
    stack: ['Rust', 'Tauri', 'React 19', 'TypeScript'],
    href: 'https://github.com/lukaspabst',
  },
];
