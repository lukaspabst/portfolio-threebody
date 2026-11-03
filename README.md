# Lukas Pabst — Portfolio

Interactive developer portfolio built with **React 19**, **TypeScript**, **Three.js / React Three Fiber**, **GSAP ScrollTrigger**, and **Tailwind CSS v4**.

## Highlights

- **Real-Time Newtonian Three-Body Simulation:** Custom 16-substep symplectic Velocity-Verlet integrator simulating the gravitational choreography of *Alpha Centauri A*, *Alpha Centauri B*, *Proxima Centauri C*, and *Planet Trisolaris* in WebGL.
- **Custom GLSL Shaders:** Procedural solar photosphere granulation, volumetric corona halos, multi-star planetary illumination with nightside lava fissures, and a 2,600-star Airy-disk background starfield.
- **Interactive Telemetry HUD:** 3D raycast hover inspection displaying live orbital speed (`km/s`), stellar classification, mass, and dominant gravitational pull with automatic time-dilation on hover.
- **Scroll-Coupled Time Control:** Scrolling down accelerates orbital time; scrolling up reverses integration time ($dt < 0$).
- **Procedural Web Audio Lo-Fi Synth:** Built-in 73 BPM Web Audio API Rhodes chord and drum generator (zero external audio files).
- **Bilingual (EN / DE):** Instant language switching between English and German.

## Tech Stack

- **Framework:** React 19 + TypeScript 5.8 + Vite 6
- **3D & Shaders:** Three.js (`r182`), `@react-three/fiber`, `@react-three/postprocessing`, custom GLSL vertex/fragment shaders
- **Motion:** GSAP 3 + `@gsap/react` (`ScrollTrigger`)
- **Styling:** Tailwind CSS v4

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```
