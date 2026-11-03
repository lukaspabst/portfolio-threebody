# portfolio // CAPRI Automated Architecture & AI Context Dossier
> Generated on demand via `npx capri docu` (Zero build or browser runtime overhead)

## 1. Project Identity & Stack Overview
- **Repository:** `portfolio` (`lukas-pabst-portfolio`)
- **Version:** `1.0.0`
- **Detected Stack:** React ^19.2.3 · Three.js / WebGL · GSAP Motion · Vite · @zen-ui/system (CAPRI) · TypeScript · Docker Containerized
- **Top-Level Subsystems:** `/docker`, `/docs`, `/public`, `/src`
- **Container Readiness:** `docker-compose.yml` present

## 2. Codebase Metrics & Language Breakdown
- **Total Source Files Scanned:** 6
- **Total Lines of Code (LOC):** 1,341
- **File Extensions:** `.tsx` (2), `.ts` (2), `.html` (1), `.css` (1)
- **Key Exported Symbols / Classes / Functions (7):** `Locale`, `WorkCategory`, `AtelierTimelineEntry`, `AtelierWork`, `ATELIER_PROFILE`, `ATELIER_TIMELINE`, `ATELIER_WORKS`

## 3. Architecture & Subsystem Topology (`flowchart TD`)
```mermaid
flowchart TD
  Repo["portfolio v1.0.0"]
  Stack["Stack: React ^19.2.3 · Three.js / WebGL · GSAP Motion · Vite"]
  Repo --> Stack
  N0_docker["/docker"]
  Stack --> N0_docker
  N1_docs["/docs"]
  Stack --> N1_docs
  N2_public["/public"]
  Stack --> N2_public
  N3_src["/src"]
  Stack --> N3_src
  Docker["Docker / Compose Runtime"]
  Repo -.->|"Containerized"| Docker
```

## 4. Largest Modules & Entrypoints Inventory
| Module Path | Lines | Extension |
| :--- | ---: | :--- |
| `src/App.tsx` | 717 | `.tsx` |
| `src/data/atelierData.ts` | 536 | `.ts` |
| `index.html` | 31 | `.html` |
| `src/index.css` | 21 | `.css` |
| `vite.config.ts` | 21 | `.ts` |
| `src/main.tsx` | 15 | `.tsx` |

## 6. Available Build & Automation Scripts
- `npm run dev`: `vite --port 5175`
- `npm run build`: `tsc --noEmit && vite build`
- `npm run preview`: `vite preview`

## 7. Capri AI Agent Protocol (Claude / Codex / Gemini / Antigravity)
- **Subroutine `orion` (`CAPRI // UNLEASHED`):** Use `@zen-ui/system` primitives and `<ZenIcon>` (40 vector glyphs) for UI views; keep action labels concise (`1-3 words`).
- **Subroutine `architect` (`SCS // ARCHITECT`):** Enforce strict typing (zero `any`, `readonly T[]`), modular files (`< 900` lines), and `--zen-*` CSS tokens.
- **Subroutine `guard` (`CYBERPSYCHOSIS // GUARD`):** Sanitize untrusted inputs (`capri.sanitizeForPrompt()`), prevent XSS/secret leaks, bind dropdowns to `onMouseDown`, and ensure zero horizontal overflow (`320px` to `4K`).
- **Subroutine `zen` (`THEME // MATRIX`):** Maintain 4 Dark + 4 Light themes (`>= 4.5:1` AA contrast) and 60fps `--zen-ease-spring` tactile motion.
- **Subroutine `docu` (`CAPRI // AUTO-DOCU`):** Re-run `npx capri docu --write` whenever architectural boundaries or modules change.
