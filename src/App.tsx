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
} from 'lucide-react';
import { ATELIER_PROFILE, ATELIER_WORKS, type Locale } from './data/atelierData';

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

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [activeWorkId, setActiveWorkId] = useState<string>(ATELIER_WORKS[0].id);
  const [synthActive, setSynthActive] = useState(false);
  const [copied, setCopied] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const intervalRef = useRef<number | null>(null);
  const copyTimeoutRef = useRef<number | null>(null);

  const activeWork =
    ATELIER_WORKS.find((w) => w.id === activeWorkId) ?? ATELIER_WORKS[0];

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

  const bgClass = 'bg-[#070709] text-[#F3EFE6]';
  const cardBgClass = 'bg-[#0D0E12]/80 border-white/15 text-[#F3EFE6]';

  return (
    <div ref={containerRef} className={`relative min-h-screen ${bgClass}`}>
      <Suspense fallback={null}>
        <ChromaticSculptureScene scrollProgressRef={scrollProgressRef} />
      </Suspense>

      <header className="fixed top-0 inset-x-0 z-30 border-b border-current/10 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between gap-4">
          <div>
            <span className="font-['Instrument_Serif'] italic text-2xl sm:text-3xl tracking-tight">
              Lukas Pabst
            </span>
            <span className="hidden md:inline-block ml-3 font-mono text-xs opacity-65">
              SOFTWARE DEVELOPER · SISSACH, CH
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              aria-pressed={synthActive}
              aria-label={locale === 'en' ? 'Toggle Lo-Fi background audio' : 'Lo-Fi Hintergrundmusik umschalten'}
              onClick={() => setSynthActive((prev) => !prev)}
              className={`px-3.5 py-2 rounded-full font-mono text-xs border transition-all flex items-center gap-2 cursor-pointer ${
                synthActive
                  ? 'bg-[#2952FF] border-[#2952FF] text-white shadow-[0_0_25px_rgba(41,82,255,0.5)]'
                  : 'border-current/20 hover:border-current/40'
              }`}
            >
              {synthActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                  <span>{locale === 'en' ? 'Lo-Fi Radio: ON' : 'Lo-Fi Radio: AN'}</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5" />
                  <span>{locale === 'en' ? 'Lo-Fi Background' : 'Lo-Fi Musik'}</span>
                </>
              )}
            </button>

            <button
              type="button"
              aria-label={locale === 'en' ? 'Switch language to German' : 'Sprache auf Englisch umschalten'}
              onClick={() => setLocale((prev) => (prev === 'en' ? 'de' : 'en'))}
              className="px-3 py-1.5 rounded-full border border-current/20 font-mono text-xs flex items-center gap-1.5 cursor-pointer"
            >
              <Globe className="w-3.5 h-3.5 text-[#2952FF]" />
              {locale.toUpperCase()}
            </button>
          </div>
        </div>
      </header>

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-24">
        <section className="min-h-[82vh] flex flex-col justify-between pb-12 border-b border-current/15">
          <div className="max-w-4xl">
            <div className="atelier-reveal inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#D4AF37] mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              {ATELIER_PROFILE.role[locale]} · {ATELIER_PROFILE.company} · Sissach, CH
            </div>

            <h1 className="atelier-reveal font-['Syne'] font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.94] mb-8">
              {locale === 'en' ? (
                <>
                  Architecture in{' '}
                  <span className="font-['Instrument_Serif'] italic font-normal text-[#D4AF37]">
                    Motion
                  </span>{' '}
                  & Code.
                </>
              ) : (
                <>
                  Architektur in{' '}
                  <span className="font-['Instrument_Serif'] italic font-normal text-[#D4AF37]">
                    Bewegung
                  </span>{' '}
                  & Code.
                </>
              )}
            </h1>

            <p className="atelier-reveal text-lg sm:text-xl max-w-2xl opacity-85 leading-relaxed mb-10">
              {ATELIER_PROFILE.statement[locale]}
            </p>
          </div>

          <div className="atelier-reveal grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-current/10">
            <div>
              <div className="font-mono text-xs opacity-60">CURRENT APPOINTMENT</div>
              <div className="font-['Syne'] font-bold text-lg mt-1">
                Software Developer · Primeo Energie AG
              </div>
              <div className="text-xs opacity-70 mt-0.5">Sissach, Switzerland (09.2024 – Present)</div>
            </div>

            <div>
              <div className="font-mono text-xs opacity-60">
                {locale === 'en' ? 'PERSONAL HOBBY PROJECT (DEMO)' : 'PERSÖNLICHES HOBBYPROJEKT (DEMO)'}
              </div>
              <div className="font-['Syne'] font-bold text-lg mt-1">
                JourneyLink (Architecture Sandbox)
              </div>
              <div className="text-xs opacity-70 mt-0.5">
                Angular 20 Native Federation · Spring Boot · RabbitMQ
              </div>
            </div>

            <div className="flex items-center md:justify-end gap-3">
              <a
                href="https://journeylink.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-full bg-[#2952FF] text-white font-medium text-sm inline-flex items-center gap-2 shadow-lg hover:opacity-95 transition-opacity"
              >
                {locale === 'en' ? 'Try Demo (journeylink.dev)' : 'Demo (journeylink.dev)'}
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                type="button"
                aria-pressed={synthActive}
                onClick={() => setSynthActive((prev) => !prev)}
                className="px-5 py-3.5 rounded-full border border-current/25 font-mono text-xs inline-flex items-center gap-2 cursor-pointer"
              >
                <Disc3 className={`w-4 h-4 ${synthActive ? 'animate-spin text-[#D4AF37]' : ''}`} />
                {synthActive ? 'Pause Lo-Fi' : 'Lo-Fi Beats'}
              </button>
            </div>
          </div>
        </section>

        <section id="exhibition" className="py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="font-mono text-xs text-[#2952FF]">
                {locale === 'en' ? 'ENGINEERING & HOBBY PROJECTS' : 'PROJEKTE & ARCHITEKTUR-DEMOS'}
              </span>
              <h2 className="font-['Syne'] text-4xl sm:text-6xl font-bold mt-2">
                {locale === 'en' ? 'Selected Works' : 'Ausgewählte Projekte'}
              </h2>
            </div>
            <p className="text-sm opacity-75 max-w-sm mt-3 md:mt-0">
              {locale === 'en'
                ? 'Select any project below to inspect its system architecture, tech stack, and implementation details.'
                : 'Wähle ein Projekt aus, um Details zur Systemarchitektur, zum Tech-Stack und zur technischen Umsetzung einzusehen.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              {ATELIER_WORKS.map((work) => {
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
                    className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-xl transition-all cursor-pointer ${cardBgClass} ${
                      isSelected ? 'ring-2 ring-[#2952FF]' : 'opacity-80 hover:opacity-100'
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs opacity-75 mb-3">
                      <span>
                        NO. {work.index} — {work.discipline[locale]}
                      </span>
                      <div className="flex items-center gap-2">
                        {work.statusPill && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            {work.statusPill}
                          </span>
                        )}
                        {work.archPill && (
                          <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-400 border border-sky-500/30">
                            {work.archPill}
                          </span>
                        )}
                        <span>{work.year}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap items-baseline justify-between gap-4">
                      <h3 className="font-['Syne'] text-2xl sm:text-4xl font-bold">
                        {work.title}
                      </h3>
                      <span className="font-['Instrument_Serif'] italic text-xl text-[#D4AF37]">
                        {work.subtitle[locale]}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base opacity-80 mt-4 leading-relaxed">
                      {work.story[locale]}
                    </p>

                    {work.metrics && (
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 p-3 rounded-2xl bg-current/5 border border-current/10 text-center">
                        {work.metrics.map((m) => (
                          <div key={m.lbl}>
                            <div className="font-['Syne'] font-bold text-sm">{m.val}</div>
                            <div className="font-mono text-[10px] opacity-65">{m.lbl}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className={`p-8 rounded-3xl border backdrop-blur-2xl shadow-2xl ${cardBgClass}`}>
                <div className="flex items-center justify-between font-mono text-xs text-[#D4AF37] mb-3">
                  <span>PROJECT DOSSIER // {activeWork.index}</span>
                  <span>{activeWork.year}</span>
                </div>

                <h3 className="font-['Instrument_Serif'] italic text-4xl sm:text-5xl mb-1">
                  {activeWork.title}
                </h3>
                {activeWork.role && (
                  <div className="font-mono text-xs text-[#2952FF] mb-2">{activeWork.role}</div>
                )}
                <div className="font-mono text-xs opacity-65 mb-5">
                  {activeWork.subtitle[locale]}
                </div>

                {activeWork.metrics && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-5 p-3 rounded-2xl bg-current/5 border border-current/10 text-center">
                    {activeWork.metrics.map((m) => (
                      <div key={m.lbl}>
                        <div className="font-bold text-xs">{m.val}</div>
                        <div className="font-mono text-[10px] opacity-65">{m.lbl}</div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-4 rounded-2xl bg-current/5 border border-current/10 mb-5">
                  <div className="font-mono text-[11px] text-[#2952FF] mb-1">
                    SYSTEM ARCHITECTURE NOTE
                  </div>
                  <p className="text-sm leading-relaxed opacity-90">
                    {activeWork.engineeringNote[locale]}
                  </p>
                </div>

                {activeWork.highlights && (
                  <div className="space-y-2 mb-6">
                    {activeWork.highlights[locale].map((item) => (
                      <div key={item} className="flex items-start gap-2 text-xs opacity-85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeWork.stack.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full border border-current/15 font-mono text-xs"
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
                      className="flex-1 py-3.5 px-5 rounded-full bg-[#0ea5e9] text-[#020617] font-semibold text-xs inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                    >
                      {locale === 'en' ? 'Interactive Demo (journeylink.dev)' : 'Interaktive Demo (journeylink.dev)'}
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                  <a
                    href={activeWork.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-3.5 px-5 rounded-full bg-[#2952FF] text-white font-medium text-xs inline-flex items-center justify-center gap-2 hover:opacity-95 transition-opacity"
                  >
                    <Github className="w-4 h-4" />
                    {activeWork.id === 'journeylink' ? 'GitHub Org' : 'Source on GitHub'}
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 border-t border-current/15">
          <div className={`p-8 sm:p-14 rounded-3xl border backdrop-blur-2xl ${cardBgClass}`}>
            <div className="max-w-3xl">
              <span className="font-mono text-xs text-[#D4AF37]">
                CORRESPONDENCE · SISSACH, SWITZERLAND
              </span>
              <h2 className="font-['Syne'] text-4xl sm:text-6xl font-bold mt-3 mb-6">
                {locale === 'en' ? (
                  <>
                    Initiate a{' '}
                    <span className="font-['Instrument_Serif'] italic font-normal text-[#2952FF]">
                      Conversation
                    </span>
                    .
                  </>
                ) : (
                  <>
                    Lassen Sie uns{' '}
                    <span className="font-['Instrument_Serif'] italic font-normal text-[#2952FF]">
                      sprechen
                    </span>
                    .
                  </>
                )}
              </h2>
              <p className="text-base sm:text-lg opacity-80 mb-8">
                {locale === 'en'
                  ? 'Born 23.03.2001 in Germany, living in Sissach, Switzerland. Native German & fluent English. Outside of software architecture, dedicated to strength training (Kraftsport) and technical literature.'
                  : 'Geboren am 23.03.2001, wohnhaft in Sissach, Schweiz. Deutsch (Muttersprache) & Englisch (Fließend). Neben der Softwarearchitektur leidenschaftlich im Kraftsport und der Fachliteratur aktiv.'}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`mailto:${ATELIER_PROFILE.email}`}
                  className="px-6 py-3.5 rounded-full bg-[#2952FF] text-white font-medium text-sm inline-flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  {ATELIER_PROFILE.email}
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  className="px-5 py-3.5 rounded-full border border-current/20 font-mono text-xs inline-flex items-center gap-2 cursor-pointer"
                >
                  {copied ? <Check className="w-4 h-4 text-[#2952FF]" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'COPIED' : 'COPY ADDRESS'}
                </button>

                <a
                  href="https://journeylink.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-current/20 font-mono text-xs inline-flex items-center gap-2"
                >
                  journeylink.dev <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={ATELIER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-full border border-current/20 font-mono text-xs inline-flex items-center gap-2"
                >
                  GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
