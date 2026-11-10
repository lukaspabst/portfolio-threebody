---
project: "portfolio"
files: 9
loc: 2993
tags: [capri-docu, architecture]
---
# portfolio // CAPRI Architecture & AI Context Dossier
> **Executive Summary:** Interactive 3D Creative Developer Portfolio (`https://lpabst.dev`) built with React, Three.js / R3F Three-Body orbital physics, GSAP ScrollTrigger, and `@zen-ui-capri/system`.
>
> *Generated automatically via `npx capri docu` (Zero build or browser runtime overhead)*

## 1. Project Identity & Stack Overview
- **Repository:** `portfolio` (`lukas-pabst-portfolio`)
- **Detected Stack:** React · Three.js / WebGL · GSAP Motion · Vite · @zen-ui-capri/system (CAPRI) · TypeScript · Docker Containerized
- **Top-Level Subsystems:** `/docker`, `/public`, `/src`
- **Container Readiness:** `docker-compose.yml` present

## 2. Codebase Metrics & Language Breakdown
- **Total Source Files Scanned:** 9
- **Total Lines of Code (LOC):** 2,993
- **File Extensions:** `.tsx` (4), `.ts` (3), `.html` (1), `.css` (1)
- **Key Domain Symbols / Classes / Functions (20):** `ZenCosmosCanvasProps`, `CelestialBodyState`, `CosmosSceneInternalProps`, `CelestialCatalogEntry`, `DEFAULT_CELESTIAL_CATALOG`, `ZenTelemetryPayload`, `ZenTelemetryBridge`, `ZenTelemetryHud`, `ZenTelemetryTargetId`, `ZenTelemetryInspector`, `ZenTelemetryHudProps`, `ZenTelemetryInspectorProps`, `Locale`, `WorkCategory`, `AtelierTimelineEntry`, `AtelierMetric`, `AtelierWork`, `ATELIER_PROFILE`, `ATELIER_TIMELINE`, `ATELIER_WORKS`

## 4. Architecture & Subsystem Topology (`flowchart TD`)
```mermaid
flowchart TD
  Repo["portfolio"]
  Stack["Stack: React · Three.js / WebGL · GSAP Motion · Vite · @zen-ui-capri/system (CAPRI)"]
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
| `src/cosmos/ZenCosmosCanvas.tsx` | 932 | `.tsx` |
| `src/data/atelierData.ts` | 794 | `.ts` |
| `src/App.tsx` | 774 | `.tsx` |
| `src/cosmos/ZenTelemetryHud.tsx` | 386 | `.tsx` |
| `index.html` | 33 | `.html` |
| `vite.config.ts` | 21 | `.ts` |
| `src/cosmos/index.ts` | 17 | `.ts` |
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
- **Subroutine `docu` (`CAPRI // AUTO-DOCU`):** Run `npx capri docu --write` whenever architectural boundaries or modules change.
