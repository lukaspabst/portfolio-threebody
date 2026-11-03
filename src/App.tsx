import { useState, useRef, useEffect, lazy, Suspense } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import {
  Volume2,
  VolumeX,
  Globe,
  ArrowUpRight,
  Disc3,
  Mail,
  Github,
  Sparkles,
  Check,
  Copy,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Code2,
} from 'lucide-react';
import {
  ATELIER_PROFILE,
  ATELIER_TIMELINE,
  ATELIER_WORKS,
  type AtelierWork,
  type Locale,
  type WorkCategory,
} from './data/atelierData';

const ChromaticSculptureScene = lazy(
  () => import('./components/ChromaticSculptureScene')
);

gsap.registerPlugin(ScrollTrigger, useGSAP);

const LOFI_CHORDS: readonly (readonly number[])[] = [
  [146.83, 220.0, 261.63, 329.63, 392.0],
  [130.81, 196.0, 246.94, 293.66, 349.23],
  [116.54, 174.61, 220.0, 261.63, 329.63],
  [110.0, 164.81, 207.65, 246.94, 311.13],
];

type WorkFilter = 'all' | WorkCategory;

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [workFilter, setWorkFilter] = useState<WorkFilter>('all');
  const [activeWorkId, setActiveWorkId] = useState<string>(ATELIER_WORKS[0].id);
  const [synthActive, setSynthActive] = useState(false);
  const [copied, setCopied] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  const enterpriseWorks = ATELIER_WORKS.filter((w) => w.category === 'enterprise');
  const personalWorks = ATELIER_WORKS.filter((w) => w.category === 'personal');

  const activeWork =
    ATELIER_WORKS.find((w) => w.id === activeWorkId) ?? ATELIER_WORKS[0];

  const handleSelectFilter = (nextFilter: WorkFilter) => {
    setWorkFilter(nextFilter);
    if (nextFilter !== 'all' && activeWork.category !== nextFilter) {
      const firstMatch = ATELIER_WORKS.find((w) => w.category === nextFilter);
      if (firstMatch) {
        setActiveWorkId(firstMatch.id);
      }
    }
  };

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 0.4,
        onUpdate: (self) => {
          scrollProgressRef.current = self.progress;
        },
      });

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)'
      ).matches;

      if (!prefersReducedMotion) {
        gsap.from('.atelier-reveal', {
          y: 45,
          opacity: 0,
          duration: 1.0,
          stagger: 0.12,
          ease: 'power3.out',
        });
      }
    },
    { scope: containerRef }
  );

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current !== null) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        void audioCtxRef.current.close();
      }
    };
  }, []);

  useEffect(() => {
    if (!synthActive) {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    const AudioContextClass = window.AudioContext;
    if (!AudioContextClass) return;

    if (!audioCtxRef.current || audioCtxRef.current.state === 'closed') {
      audioCtxRef.current = new AudioContextClass();
    }
    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      void ctx.resume();
    }

    const playLoFiStep = (stepIdx: number) => {
      const now = ctx.currentTime;
      const barStep = stepIdx % 8;
      const chordIdx = Math.floor(stepIdx / 8) % LOFI_CHORDS.length;
      const chord = LOFI_CHORDS[chordIdx];

      if (barStep === 0 || barStep === 3) {
        chord.forEach((freq, idx) => {
          const osc = ctx.createOscillator();
          const gain = ctx.createGain();
          const filter = ctx.createBiquadFilter();
          const vibrato = ctx.createOscillator();
          const vibGain = ctx.createGain();

          osc.type = idx === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, now);

          vibrato.frequency.setValueAtTime(4.2, now);
          vibGain.gain.setValueAtTime(idx === 0 ? 0.2 : 1.1, now);
          vibrato.connect(vibGain);
          vibGain.connect(osc.frequency);

          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(520, now);

          const peakGain = idx === 0 ? 0.042 : 0.018;
          const dur = barStep === 0 ? 1.45 : 1.95;
          gain.gain.setValueAtTime(0.0001, now);
          gain.gain.linearRampToValueAtTime(peakGain, now + 0.08);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + dur);

          osc.connect(filter);
          filter.connect(gain);
          gain.connect(ctx.destination);

          osc.start(now);
          vibrato.start(now);
          osc.stop(now + dur + 0.05);
          vibrato.stop(now + dur + 0.05);
        });
      }

      if (barStep === 0 || barStep === 5) {
        const kickOsc = ctx.createOscillator();
        const kickGain = ctx.createGain();
        kickOsc.type = 'sine';
        kickOsc.frequency.setValueAtTime(108, now);
        kickOsc.frequency.exponentialRampToValueAtTime(38, now + 0.14);
        kickGain.gain.setValueAtTime(0.065, now);
        kickGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);
        kickOsc.connect(kickGain);
        kickGain.connect(ctx.destination);
        kickOsc.start(now);
        kickOsc.stop(now + 0.26);
      }

      if (barStep === 2 || barStep === 6) {
        const bufferSize = Math.floor(ctx.sampleRate * 0.09);
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          output[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.35));
        }
        const noise = ctx.createBufferSource();
        noise.buffer = noiseBuffer;
        const snareFilter = ctx.createBiquadFilter();
        snareFilter.type = 'bandpass';
        snareFilter.frequency.setValueAtTime(1150, now);
        const snareGain = ctx.createGain();
        snareGain.gain.setValueAtTime(0.022, now);
        snareGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
        noise.connect(snareFilter);
        snareFilter.connect(snareGain);
        snareGain.connect(ctx.destination);
        noise.start(now);
      }
    };

    let step = 0;
    playLoFiStep(step);
    intervalRef.current = window.setInterval(() => {
      step += 1;
      playLoFiStep(step);
    }, 410);

    return () => {
      if (intervalRef.current !== null) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [synthActive]);

  const handleCopyEmail = () => {
    void navigator.clipboard.writeText(ATELIER_PROFILE.email);
    setCopied(true);
    if (copyTimeoutRef.current !== null) {
      window.clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = window.setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const bgClass = 'bg-[#070709] text-[#F6F2E9]';
  const restingCardClass =
    'bg-[#0B0C10]/88 border-[#FFF3D1]/16 text-[#F6F2E9] hover:border-[#FFF3D1]/32 hover:bg-[#101117]/92';
  const activeCardClass =
    'bg-[#101117]/94 border-[#F5B841]/70 text-[#F6F2E9] ring-1 ring-[#F5B841]/50 shadow-[0_0_32px_-8px_rgba(245,184,65,0.28)]';
  const staticCardClass = 'bg-[#0B0C10]/90 border-[#FFF3D1]/18 text-[#F6F2E9]';

  const renderWorkCard = (work: AtelierWork) => {
    const isSelected = work.id === activeWork.id;
    return (
      <div
        key={work.id}
        onMouseEnter={() => setActiveWorkId(work.id)}
        onClick={() => setActiveWorkId(work.id)}
        role="button"
        aria-pressed={isSelected}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setActiveWorkId(work.id);
          }
        }}
        className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl transition-all cursor-pointer ${
          isSelected ? activeCardClass : restingCardClass
        }`}
      >
        <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs text-[#A69F91] mb-3">
          <span>
            NO. {work.index} — {work.discipline[locale]}
          </span>
          <div className="flex items-center gap-2">
            {work.statusPill && (
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F5B841]/15 text-[#FCD34D] border border-[#F5B841]/40 font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5B841] animate-pulse" />
                {work.statusPill}
              </span>
            )}
            {work.archPill && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#FFF3D1]/[0.07] text-[#E6DEC8] border border-[#FFF3D1]/22">
                {work.archPill}
              </span>
            )}
            <span className="text-[#D6CFC2]">{work.year}</span>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="font-['Syne'] text-2xl sm:text-3xl font-bold text-[#F6F2E9]">
            {work.title}
          </h3>
          <span className="font-['Instrument_Serif'] italic text-xl text-[#F5B841]">
            {work.subtitle[locale]}
          </span>
        </div>

        <p className="text-sm sm:text-base text-[#D6CFC2] mt-4 leading-relaxed">
          {work.story[locale]}
        </p>

        {work.metrics && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 p-3 rounded-2xl bg-[#FFF3D1]/[0.04] border border-[#FFF3D1]/12 text-center">
            {work.metrics.map((m) => (
              <div key={m.lbl}>
                <div className="font-['Syne'] font-bold text-sm text-[#F6F2E9]">
                  {m.val}
                </div>
                <div className="font-mono text-[10px] text-[#A69F91]">{m.lbl}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={containerRef} className={`relative min-h-screen ${bgClass}`}>
      <Suspense fallback={null}>
        <ChromaticSculptureScene scrollProgressRef={scrollProgressRef} />
      </Suspense>

      <header className="fixed top-0 inset-x-0 z-30 border-b border-[#FFF3D1]/12 bg-[#070709]/75 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div>
            <span className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl tracking-tight text-[#F6F2E9]">
              Lukas Pabst
            </span>
            <span className="hidden md:inline-block ml-3 font-mono text-xs text-[#A69F91]">
              FULL STACK DEVELOPER · SISSACH, CH
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-pressed={synthActive}
              aria-label={
                locale === 'en'
                  ? 'Toggle Lo-Fi background audio'
                  : 'Lo-Fi Hintergrundmusik umschalten'
              }
              onClick={() => setSynthActive((prev) => !prev)}
              className={`px-3.5 py-2 rounded-full font-mono text-xs border transition-all flex items-center gap-2 cursor-pointer ${
                synthActive
                  ? 'bg-[#F5B841] border-[#F5B841] text-[#070709] font-semibold shadow-[0_0_25px_rgba(245,184,65,0.35)]'
                  : 'border-[#F6F2E9]/32 text-[#F6F2E9] hover:border-[#F5B841]/60'
              }`}
            >
              {synthActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>{locale === 'en' ? 'Lo-Fi Radio: ON' : 'Lo-Fi Radio: AN'}</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-[#F5B841]" />
                  <span>{locale === 'en' ? 'Lo-Fi Background' : 'Lo-Fi Musik'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              aria-label={
                locale === 'en'
                  ? 'Switch language to German'
                  : 'Sprache auf Englisch umschalten'
              }
              onClick={() => setLocale((prev) => (prev === 'en' ? 'de' : 'en'))}
              className="px-3 py-1.5 rounded-full border border-[#F6F2E9]/32 hover:border-[#F5B841]/60 font-mono text-xs text-[#F6F2E9] flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Globe className="w-3.5 h-3.5 text-[#F5B841]" />
              {locale.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-24">
        <section className="min-h-[82vh] flex flex-col justify-between pb-12 border-b border-[#FFF3D1]/12">
          <div className="max-w-4xl">
            <div className="atelier-reveal inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#F5B841] mb-6 drop-shadow-[0_2px_12px_rgba(7,7,9,0.9)]">
              <Sparkles className="w-3.5 h-3.5" />
              {ATELIER_PROFILE.role[locale]} · {ATELIER_PROFILE.company} · Sissach, CH
            </div>

            <h1 className="atelier-reveal font-['Syne'] font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.94] mb-8 text-[#F6F2E9] drop-shadow-[0_4px_28px_rgba(7,7,9,0.95)]">
              {locale === 'en' ? (
                <>
                  Architecture in{' '}
                  <span className="font-['Instrument_Serif'] italic font-normal text-[#F5B841]">
                    Motion
                  </span>{' '}
                  & Code.
                </>
              ) : (
                <>
                  Architektur in{' '}
                  <span className="font-['Instrument_Serif'] italic font-normal text-[#F5B841]">
                    Bewegung
                  </span>{' '}
                  & Code.
                </>
              )}
            </h1>

            <div className="atelier-reveal max-w-2xl rounded-2xl bg-[#070709]/65 backdrop-blur-md border border-[#FFF3D1]/12 p-5 sm:p-6 mb-10 shadow-[0_12px_36px_rgba(0,0,0,0.65)]">
              <p className="text-lg sm:text-xl text-[#D6CFC2] leading-relaxed">
                {ATELIER_PROFILE.statement[locale]}
              </p>
            </div>
          </div>

          <div className="atelier-reveal grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-[#FFF3D1]/12 bg-[#070709]/55 backdrop-blur-md rounded-2xl p-4 sm:p-6">
            <div>
              <div className="font-mono text-xs text-[#A69F91]">CURRENT APPOINTMENT</div>
              <div className="font-['Syne'] font-bold text-lg mt-1 text-[#F6F2E9]">
                Full Stack Developer · Primeo Energie
              </div>
              <div className="text-xs text-[#D6CFC2] mt-0.5">
                {locale === 'en'
                  ? 'Technical Lead Java & Angular · SCS · Keycloak IDP (09/2024 – Present)'
                  : 'Fachverantwortung Java & Angular · SCS · Keycloak IDP (seit 09/2024)'}
              </div>
            </div>

            <div>
              <div className="font-mono text-xs text-[#A69F91]">
                {locale === 'en'
                  ? 'PERSONAL HOBBY PROJECT (DEMO)'
                  : 'PERSÖNLICHES HOBBYPROJEKT (DEMO)'}
              </div>
              <div className="font-['Syne'] font-bold text-lg mt-1 text-[#F6F2E9]">
                JourneyLink (Architecture Sandbox)
              </div>
              <div className="text-xs text-[#D6CFC2] mt-0.5">
                Angular 20 Native Federation · Spring Boot · RabbitMQ
              </div>
            </div>

            <div className="flex items-center md:justify-end gap-3">
              <a
                href="https://demo.journeylink.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#F5B841] hover:bg-[#FCD34D] text-[#070709] font-semibold text-sm inline-flex items-center gap-2 shadow-[0_0_28px_rgba(245,184,65,0.28)] transition-colors"
              >
                {locale === 'en' ? 'Try Demo (demo.journeylink.dev)' : 'Demo (demo.journeylink.dev)'}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                aria-pressed={synthActive}
                onClick={() => setSynthActive((prev) => !prev)}
                className="px-5 py-3.5 rounded-full border border-[#F6F2E9]/32 hover:border-[#F5B841]/60 font-mono text-xs text-[#F6F2E9] inline-flex items-center gap-2 cursor-pointer transition-colors"
              >
                <Disc3 className={`w-4 h-4 ${synthActive ? 'animate-spin text-[#F5B841]' : 'text-[#F5B841]'}`} />
                {synthActive ? 'Pause Lo-Fi' : 'Lo-Fi Beats'}
              </button>
            </div>
          </div>
        </section>

        <section id="exhibition" className="py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5B841]">
                {locale === 'en'
                  ? 'ENTERPRISE WORK & PERSONAL HOBBY PROJECTS'
                  : 'BERUFLICHE PROJEKTE & PERSÖNLICHE HOBBY-ARBEITEN'}
              </span>
              <h2 className="font-['Syne'] text-4xl sm:text-6xl font-bold mt-2 text-[#F6F2E9]">
                {locale === 'en' ? 'Selected Works' : 'Ausgewählte Projekte'}
              </h2>
            </div>

            <div
              role="group"
              aria-label={locale === 'en' ? 'Filter projects by category' : 'Projekte nach Kategorie filtern'}
              className="inline-flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#0B0C10]/90 border border-[#FFF3D1]/16 backdrop-blur-xl self-start lg:self-auto"
            >
              <button
                type="button"
                onClick={() => handleSelectFilter('all')}
                className={`px-4 py-2 rounded-xl font-mono text-xs transition-all cursor-pointer ${
                  workFilter === 'all'
                    ? 'bg-[#F5B841] text-[#070709] font-semibold shadow-sm'
                    : 'text-[#D6CFC2] hover:text-[#F6F2E9]'
                }`}
              >
                {locale === 'en' ? 'All Works (5)' : 'Alle Projekte (5)'}
              </button>
              <button
                type="button"
                onClick={() => handleSelectFilter('enterprise')}
                className={`px-4 py-2 rounded-xl font-mono text-xs inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                  workFilter === 'enterprise'
                    ? 'bg-[#F5B841] text-[#070709] font-semibold shadow-sm'
                    : 'text-[#D6CFC2] hover:text-[#F6F2E9]'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
                {locale === 'en' ? 'Enterprise & Work (3)' : 'Berufliche Projekte (3)'}
              </button>
              <button
                type="button"
                onClick={() => handleSelectFilter('personal')}
                className={`px-4 py-2 rounded-xl font-mono text-xs inline-flex items-center gap-1.5 transition-all cursor-pointer ${
                  workFilter === 'personal'
                    ? 'bg-[#F5B841] text-[#070709] font-semibold shadow-sm'
                    : 'text-[#D6CFC2] hover:text-[#F6F2E9]'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                {locale === 'en' ? 'Personal & Hobby (2)' : 'Hobby & Open Source (2)'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-10">
              {(workFilter === 'all' || workFilter === 'enterprise') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#FFF3D1]/14">
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#F5B841]">
                      <Briefcase className="w-4 h-4" />
                      {locale === 'en'
                        ? '01 // Enterprise & Professional Work'
                        : '01 // Berufliche Enterprise-Projekte'}
                    </div>
                    <span className="font-mono text-xs text-[#A69F91]">
                      Primeo Energie · Finanz-Data · DHBW
                    </span>
                  </div>
                  <div className="space-y-4">
                    {enterpriseWorks.map(renderWorkCard)}
                  </div>
                </div>
              )}

              {(workFilter === 'all' || workFilter === 'personal') && (
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-3 border-b border-[#FFF3D1]/14">
                    <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#FB923C]">
                      <Code2 className="w-4 h-4" />
                      {locale === 'en'
                        ? '02 // Personal Hobby & Open-Source Projects'
                        : '02 // Persönliche Hobby- & Open-Source-Projekte'}
                    </div>
                    <span className="font-mono text-xs text-[#A69F91]">
                      Sandbox Demos · GitHub Open Source
                    </span>
                  </div>
                  <div className="space-y-4">
                    {personalWorks.map(renderWorkCard)}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div
                className={`p-8 rounded-3xl border backdrop-blur-2xl shadow-2xl ${activeCardClass}`}
              >
                <div className="flex items-center justify-between font-mono text-xs text-[#F5B841] mb-3">
                  <span>
                    {activeWork.category === 'enterprise'
                      ? 'ENTERPRISE DOSSIER'
                      : 'PERSONAL PROJECT DOSSIER'}{' '}
                    // {activeWork.index}
                  </span>
                  <span>{activeWork.year}</span>
                </div>

                <h3 className="font-['Instrument_Serif'] italic text-4xl sm:text-5xl mb-1 text-[#F6F2E9]">
                  {activeWork.title}
                </h3>
                {activeWork.role && (
                  <div className="font-mono text-xs text-[#FB923C] mb-2">
                    {activeWork.role}
                  </div>
                )}
                <div className="font-mono text-xs text-[#A69F91] mb-5">
                  {activeWork.subtitle[locale]}
                </div>

                {activeWork.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3 rounded-2xl bg-[#FFF3D1]/[0.04] border border-[#FFF3D1]/12 text-center">
                    {activeWork.metrics.map((m) => (
                      <div key={m.lbl}>
                        <div className="font-bold text-xs text-[#F6F2E9]">{m.val}</div>
                        <div className="font-mono text-[10px] text-[#A69F91]">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-[#FFF3D1]/[0.04] border border-[#FFF3D1]/14 mb-5">
                  <div className="font-mono text-[11px] text-[#FB923C] mb-1">
                    SYSTEM ARCHITECTURE NOTE
                  </div>
                  <p className="text-sm leading-relaxed text-[#D6CFC2]">
                    {activeWork.engineeringNote[locale]}
                  </p>
                </div>

                {activeWork.highlights && (
                  <div className="space-y-2 mb-6">
                    {activeWork.highlights[locale].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs text-[#D6CFC2]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B841] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeWork.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-[#FFF3D1]/18 bg-[#FFF3D1]/[0.03] font-mono text-xs text-[#E6DEC8]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  {activeWork.liveUrl && (
                    <a
                      href={activeWork.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-3.5 px-5 rounded-full bg-[#F5B841] hover:bg-[#FCD34D] text-[#070709] font-semibold text-xs inline-flex items-center justify-center gap-2 shadow-[0_0_24px_rgba(245,184,65,0.25)] transition-colors"
                    >
                      {locale === 'en'
                        ? 'Interactive Demo (demo.journeylink.dev)'
                        : 'Interaktive Demo (demo.journeylink.dev)'}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  {activeWork.href && (
                    <a
                      href={activeWork.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 py-3.5 px-5 rounded-full font-semibold text-xs inline-flex items-center justify-center gap-2 transition-colors ${
                        activeWork.liveUrl
                          ? 'bg-[#FFF3D1]/[0.08] hover:bg-[#FFF3D1]/[0.14] text-[#F6F2E9] border border-[#F6F2E9]/30 hover:border-[#F5B841]/60'
                          : 'bg-[#F5B841] hover:bg-[#FCD34D] text-[#070709] shadow-[0_0_24px_rgba(245,184,65,0.25)]'
                      }`}
                    >
                      <Github className="w-4 h-4" />
                      {activeWork.id === 'journeylink' ? 'GitHub Org' : 'Source on GitHub'}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="career" className="py-24 border-t border-[#FFF3D1]/12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#F5B841]">
                {locale === 'en'
                  ? 'CURRICULUM VITAE · CAREER & EDUCATION'
                  : 'WERDEGANG & AUSBILDUNG'}
              </span>
              <h2 className="font-['Syne'] text-4xl sm:text-6xl font-bold mt-2 text-[#F6F2E9]">
                {locale === 'en' ? 'Experience & Education' : 'Berufserfahrung & Studium'}
              </h2>
            </div>
            <p className="text-sm text-[#D6CFC2] max-w-sm mt-3 md:mt-0">
              {locale === 'en'
                ? 'Academic foundation in Business Informatics (B.Sc., DHBW Stuttgart) combined with enterprise backend and full-stack software engineering.'
                : 'Duales Studium der Wirtschaftsinformatik (B.Sc., DHBW Stuttgart) kombiniert mit mehrjähriger Praxis in der Java- & Angular-Entwicklung.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ATELIER_TIMELINE.map((entry) => (
              <div
                key={`${entry.institution}-${entry.period.en}`}
                className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl flex flex-col justify-between ${staticCardClass}`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 font-mono text-xs mb-4">
                    <span className="inline-flex items-center gap-1.5 text-[#F5B841]">
                      {entry.category === 'experience' ? (
                        <Briefcase className="w-3.5 h-3.5" />
                      ) : (
                        <GraduationCap className="w-3.5 h-3.5" />
                      )}
                      {entry.period[locale]}
                    </span>
                    <span className="text-[#A69F91]">{entry.location[locale]}</span>
                  </div>

                  <h3 className="font-['Syne'] text-xl sm:text-2xl font-bold text-[#F6F2E9]">
                    {entry.title[locale]}
                  </h3>
                  <div className="font-['Instrument_Serif'] italic text-xl text-[#F5B841] mt-0.5 mb-3">
                    {entry.institution}
                  </div>

                  <p className="text-sm text-[#D6CFC2] leading-relaxed mb-4">
                    {entry.summary[locale]}
                  </p>

                  {entry.bullets && (
                    <ul className="space-y-1.5 mb-5">
                      {entry.bullets[locale].map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-2 text-xs text-[#D6CFC2]"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B841] shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#FFF3D1]/12">
                  {entry.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-full border border-[#FFF3D1]/18 bg-[#FFF3D1]/[0.03] font-mono text-[11px] text-[#E6DEC8]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 border-t border-[#FFF3D1]/12">
          <div className={`p-8 sm:p-14 rounded-3xl border backdrop-blur-2xl ${staticCardClass}`}>
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-[#F5B841]">
                CORRESPONDENCE · SISSACH, SWITZERLAND
              </span>
              <h2 className="font-['Syne'] text-4xl sm:text-6xl font-bold mt-3 mb-6 text-[#F6F2E9]">
                {locale === 'en' ? (
                  <>
                    Initiate a{' '}
                    <span className="font-['Instrument_Serif'] italic font-normal text-[#F5B841]">
                      Conversation
                    </span>
                    .
                  </>
                ) : (
                  <>
                    Lassen Sie uns{' '}
                    <span className="font-['Instrument_Serif'] italic font-normal text-[#F5B841]">
                      sprechen
                    </span>
                    .
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg text-[#D6CFC2] mb-8">
                {locale === 'en'
                  ? 'Born 23.03.2001 in Sondershausen, living in Sissach, Switzerland. B.Sc. in Business Informatics (DHBW Stuttgart). German (Native) & English (Proficient in spoken and written). Interests: Weightlifting, Programming, Reading.'
                  : 'Geboren am 23.03.2001 in Sondershausen, wohnhaft in Sissach, Schweiz. B.Sc. Wirtschaftsinformatik (DHBW Stuttgart). Deutsch (Muttersprache) & Englisch (Fließend in Wort und Schrift). Interessen: Kraftsport, Programmieren, Lesen.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${ATELIER_PROFILE.email}`}
                  className="px-6 py-3.5 rounded-full bg-[#F5B841] hover:bg-[#FCD34D] text-[#070709] font-semibold text-sm inline-flex items-center gap-2 shadow-[0_0_24px_rgba(245,184,65,0.25)] transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {ATELIER_PROFILE.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-full border border-[#F6F2E9]/32 hover:border-[#F5B841]/60 font-mono text-xs text-[#F6F2E9] inline-flex items-center gap-2 cursor-pointer transition-colors"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-[#F5B841]" />
                  ) : (
                    <Copy className="w-4 h-4 text-[#F5B841]" />
                  )}
                  {copied ? 'COPIED' : 'COPY ADDRESS'}
                </button>

                <a
                  href="https://demo.journeylink.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-[#F6F2E9]/32 hover:border-[#F5B841]/60 font-mono text-xs text-[#F6F2E9] inline-flex items-center gap-2 transition-colors"
                >
                  demo.journeylink.dev <ArrowUpRight className="w-3.5 h-3.5 text-[#F5B841]" />
                </a>

                <a
                  href={ATELIER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-[#F6F2E9]/32 hover:border-[#F5B841]/60 font-mono text-xs text-[#F6F2E9] inline-flex items-center gap-2 transition-colors"
                >
                  GitHub <ArrowUpRight className="w-3.5 h-3.5 text-[#F5B841]" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
