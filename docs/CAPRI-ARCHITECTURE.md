---
project: "portfolio"
version: "1.0.0"
files: 6
loc: 1500
tags: [capri-docu, architecture, ideaprojects]
---
# portfolio // CAPRI Architecture & AI Context Dossier
> **Executive Summary:** Interactive 3D Creative Developer Portfolio (`https://lpabst.dev`) built with React 19, Three.js / R3F Three-Body orbital physics, GSAP ScrollTrigger, and `@zen-ui-capri/system`.
>
> *Generated automatically via `npx capri docu` (Zero build or browser runtime overhead) · Linked to [[000-Master-Workspace-Index]]*

## 1. Project Identity & Stack Overview
- **Repository:** `portfolio` (`lukas-pabst-portfolio`)
- **Version:** `1.0.0`
- **Detected Stack:** React 19 · Three.js / WebGL · GSAP Motion · Vite · @zen-ui-capri/system (CAPRI) · TypeScript · Docker Containerized
- **Top-Level Subsystems:** `/docker`, `/public`, `/src`
- **Container Readiness:** `docker-compose.yml` present

## 2. Codebase Metrics & Language Breakdown
- **Total Source Files Scanned:** 6
- **Total Lines of Code (LOC):** 1,500
- **File Extensions:** `.tsx` (2), `.ts` (2), `.html` (1), `.css` (1)
- **Key Domain Symbols / Classes / Functions (8):** `Locale`, `WorkCategory`, `AtelierTimelineEntry`, `AtelierMetric`, `AtelierWork`, `ATELIER_PROFILE`, `ATELIER_TIMELINE`, `ATELIER_WORKS`

## 4. Architecture & Subsystem Topology (`flowchart TD`)
```mermaid
flowchart TD
  Repo["portfolio v1.0.0"]
  Stack["Stack: React 19 · Three.js / WebGL · GSAP Motion · Vite · @zen-ui-capri/system (CAPRI)"]
  Repo --> Stack
  N0_docker["/docker"]
  Stack --> N0_docker
  N1_public["/public"]
  Stack --> N1_public
  N2_src["/src"]
  Stack --> N2_src
  Docker["Docker / Compose Runtime"]
  Repo -.->|"Containerized"| Docker
```

## 5. Key Domain Modules & Entrypoints Inventory
| Module Path | Lines | Extension |
| :--- | ---: | :--- |
| `src/App.tsx` | 747 | `.tsx` |
| `src/data/atelierData.ts` | 663 | `.ts` |
| `index.html` | 33 | `.html` |
| `src/index.css` | 21 | `.css` |
| `vite.config.ts` | 21 | `.ts` |
| `src/main.tsx` | 15 | `.tsx` |

## 7. Available Build & Automation Scripts
- `npm run dev`: `vite --port 5175`
- `npm run build`: `tsc --noEmit && vite build`
- `npm run preview`: `vite preview`

## 8. Capri AI Agent Protocol (Claude / Codex / Gemini / Antigravity)
- **Subroutine `orion` (`CAPRI // UNLEASHED`):** Use `@zen-ui-capri/system` primitives and `<ZenIcon>` (40 vector glyphs) for UI views; keep action labels concise (`1-3 words`).
- **Subroutine `architect` (`SCS // ARCHITECT`):** Enforce strict typing (zero `any`, `readonly T[]`), modular files (`< 900` lines), and `--zen-*` CSS tokens.
- **Subroutine `guard` (`CYBERPSYCHOSIS // GUARD`):** Sanitize untrusted inputs (`capri.sanitizeForPrompt()`), prevent XSS/secret leaks, bind dropdowns to `onMouseDown`, and ensure zero horizontal overflow (`320px` to `4K`).
- **Subroutine `zen` (`THEME // MATRIX`):** Maintain 4 Dark + 4 Light themes (`>= 4.5:1` AA contrast) and 60fps `--zen-ease-spring` tactile motion.
- **Subroutine `docu` (`CAPRI // AUTO-DOCU`):** Re-run `npm run capri -- docu --workspace "C:\Users\Lukas\IdeaProjects" --write` whenever architectural boundaries or modules change.
