import { useEffect, useRef, useState, useMemo, Suspense } from 'react';
import gsap from 'gsap';
import {
  ZenNavbar,
  ZenHeading,
  ZenCard,
  ZenBadge,
  ZenButton,
  ZenCopyButton,
  ZenSegmentedControl,
  ZenDossierPanel,
  ZenTimelineCard,
  ZenAudioController,
  ZenIcon,
  ZenModal,
  useZenAudioSynth,
  type ZenDossierItem,
} from '@zen-ui-capri/system';
import { ZenCosmosCanvas } from './cosmos';
import {
  ATELIER_PROFILE,
  ATELIER_WORKS,
  ATELIER_TIMELINE,
  type Locale,
  type AtelierWork,
} from './data/atelierData';

type WorkFilter = 'all' | 'enterprise' | 'personal';

export default function App() {
  const [locale, setLocale] = useState<Locale>('en');
  const [workFilter, setWorkFilter] = useState<WorkFilter>('all');
  const [activeWorkId, setActiveWorkId] = useState<string>(ATELIER_WORKS[0].id);
  const [imprintOpen, setImprintOpen] = useState<boolean>(false);

  const synth = useZenAudioSynth();

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollProgressRef = useRef<number>(0);

  const cvPdfHref =
    locale === 'en' ? '/CV_Lukas_Pabst_EN.pdf' : '/Lebenslauf_Lukas_Pabst_DE.pdf';

  const enterpriseWorks = useMemo(
    () => ATELIER_WORKS.filter((w) => w.category === 'enterprise'),
    []
  );
  const personalWorks = useMemo(
    () => ATELIER_WORKS.filter((w) => w.category === 'personal'),
    []
  );

  const activeWork = useMemo(
    () => ATELIER_WORKS.find((w) => w.id === activeWorkId) ?? ATELIER_WORKS[0],
    [activeWorkId]
  );

  const activeDossierItem: ZenDossierItem = useMemo(
    () => ({
      id: activeWork.id,
      index: activeWork.index,
      categoryLabel:
        activeWork.category === 'enterprise'
          ? locale === 'en'
            ? 'WORK PROJECT'
            : 'BERUFLICHES PROJEKT'
          : locale === 'en'
            ? 'SIDE PROJECT'
            : 'PRIVATES PROJEKT',
      year: activeWork.year[locale],
      title: activeWork.title,
      role: activeWork.role?.[locale],
      subtitle: activeWork.subtitle[locale],
      engineeringNote: activeWork.engineeringNote[locale],
      engineeringLabel:
        locale === 'en' ? 'TECHNICAL DETAILS' : 'TECHNISCHER HINTERGRUND',
      highlights: activeWork.highlights?.[locale],
      metrics: activeWork.metrics?.map((m) => ({
        value: m.val[locale],
        label: m.lbl[locale],
      })),
      tags: activeWork.stack,
      primaryAction: activeWork.liveUrl
        ? {
            label:
              locale === 'en'
                ? `Live Demo (${new URL(activeWork.liveUrl).host})`
                : `Live-Demo (${new URL(activeWork.liveUrl).host})`,
            href: activeWork.liveUrl,
            icon: <ZenIcon name="globe" size="sm" />,
          }
        : activeWork.href
          ? {
              label:
                activeWork.id === 'journeylink'
                  ? locale === 'en'
                    ? 'GitHub Org'
                    : 'GitHub-Org'
                  : locale === 'en'
                    ? 'GitHub Repo'
                    : 'GitHub-Repo',
              href: activeWork.href,
              icon: <ZenIcon name="code" size="sm" />,
            }
          : undefined,
      secondaryAction:
        activeWork.liveUrl && activeWork.href
          ? {
              label:
                activeWork.id === 'journeylink'
                  ? locale === 'en'
                    ? 'GitHub Org'
                    : 'GitHub-Org'
                  : locale === 'en'
                    ? 'GitHub Repo'
                    : 'GitHub-Repo',
              href: activeWork.href,
              icon: <ZenIcon name="code" size="sm" />,
            }
          : undefined,
    }),
    [activeWork, locale]
  );

  const handleSelectFilter = (next: WorkFilter) => {
    setWorkFilter(next);
    if (next === 'enterprise' && activeWork.category !== 'enterprise') {
      setActiveWorkId(enterpriseWorks[0].id);
    } else if (next === 'personal' && activeWork.category !== 'personal') {
      setActiveWorkId(personalWorks[0].id);
    }
  };

  useEffect(() => {
    const onScroll = () => {
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight
      );
      scrollProgressRef.current = Math.min(
        1,
        Math.max(0, window.scrollY / maxScroll)
      );
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.atelier-reveal',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.08,
          ease: 'power3.out',
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const renderWorkCard = (work: AtelierWork) => {
    const isSelected = activeWorkId === work.id;
    return (
      <div key={work.id} className="space-y-3">
        <ZenCard
          variant="interactive"
          selected={isSelected}
          onSelect={() => setActiveWorkId(work.id)}
          padding="md"
        >
          <div className="flex flex-wrap items-center justify-between gap-2 zen-font-mono text-xs text-[var(--zen-ink-muted)] mb-3">
            <span>
              NO. {work.index} · {work.discipline[locale]}
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {work.statusPill && (
                <ZenBadge tone="gold" pulse className="whitespace-nowrap">
                  {work.statusPill[locale]}
                </ZenBadge>
              )}
              {work.archPill && (
                <ZenBadge tone="neutral" className="whitespace-nowrap">
                  {work.archPill[locale]}
                </ZenBadge>
              )}
              <span className="text-[var(--zen-ink-secondary)] whitespace-nowrap">
                {work.year[locale]}
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-baseline justify-between gap-4">
            <h3 className="zen-font-display text-2xl sm:text-3xl font-bold text-[var(--zen-ink-primary)]">
              {work.title}
            </h3>
            <span className="zen-font-serif italic text-xl text-[var(--zen-accent-primary)]">
              {work.subtitle[locale]}
            </span>
          </div>

          <p className="text-sm sm:text-base text-[var(--zen-ink-secondary)] mt-4 leading-relaxed">
            {work.story[locale]}
          </p>
        </ZenCard>

        {isSelected && (
          <div className="lg:hidden">
            <ZenDossierPanel item={activeDossierItem} />
          </div>
        )}
      </div>
    );
  };

  return (
    <div ref={containerRef} className="relative min-h-screen overflow-x-clip">
      <Suspense fallback={null}>
        <ZenCosmosCanvas scrollProgressRef={scrollProgressRef} />
      </Suspense>

      <ZenNavbar
        brandTitle={<span className="whitespace-nowrap">Lukas Pabst</span>}
        brandSubtitle="FULL STACK DEVELOPER · SISSACH, CH"
        navSlot={
          <>
            <a
              href="#exhibition"
              className="zen-focus-ring px-3 py-1.5 rounded-lg zen-font-mono text-xs uppercase tracking-wider text-[var(--zen-ink-secondary)] hover:text-[var(--zen-ink-primary)] transition-colors"
            >
              {locale === 'en' ? 'Projects' : 'Projekte'}
            </a>
            <a
              href="#career"
              className="zen-focus-ring px-3 py-1.5 rounded-lg zen-font-mono text-xs uppercase tracking-wider text-[var(--zen-ink-secondary)] hover:text-[var(--zen-ink-primary)] transition-colors"
            >
              {locale === 'en' ? 'Experience' : 'Werdegang'}
            </a>
            <a
              href="#contact"
              className="zen-focus-ring px-3 py-1.5 rounded-lg zen-font-mono text-xs uppercase tracking-wider text-[var(--zen-ink-secondary)] hover:text-[var(--zen-ink-primary)] transition-colors"
            >
              {locale === 'en' ? 'Contact' : 'Kontakt'}
            </a>
          </>
        }
        actionsSlot={
          <>
            <ZenAudioController
              synth={synth}
              mode="pill"
              activeLabel={
                locale === 'en' ? 'Lo-Fi: ON' : 'Lo-Fi: AN'
              }
              idleLabel="Lo-Fi"
            />

            <ZenButton
              variant="secondary"
              size="sm"
              mono
              aria-label={
                locale === 'en'
                  ? 'Switch language to German'
                  : 'Sprache auf Englisch umschalten'
              }
              onClick={() => setLocale((prev) => (prev === 'en' ? 'de' : 'en'))}
              iconLeft={<ZenIcon name="globe" size="xs" tone="accent" />}
            >
              {locale.toUpperCase()}
            </ZenButton>
          </>
        }
      />

      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 pt-32 pb-24">
        <section className="min-h-[82vh] flex flex-col justify-between pb-12 border-b border-[var(--zen-border-subtle)]">
          <div className="max-w-4xl">
            <div className="atelier-reveal inline-flex items-center gap-2 zen-font-mono text-xs uppercase tracking-widest text-[var(--zen-accent-primary)] mb-6 drop-shadow-[0_2px_12px_rgba(7,7,9,0.9)]">
              <ZenIcon name="sparkles" size="xs" tone="accent" />
              <span>
                {ATELIER_PROFILE.role[locale]} · {ATELIER_PROFILE.company} ·
                Sissach, CH
              </span>
            </div>

            <h1 className="atelier-reveal zen-font-display font-extrabold text-[2.15rem] sm:text-7xl lg:text-8xl tracking-tight leading-[0.94] mb-8 text-[var(--zen-ink-primary)] drop-shadow-[0_4px_28px_rgba(7,7,9,0.95)]">
              {locale === 'en' ? (
                <>
                  Architecture in{' '}
                  <span className="zen-font-serif italic font-normal text-[var(--zen-accent-primary)]">
                    Motion
                  </span>{' '}
                  &amp; Code.
                </>
              ) : (
                <>
                  Architektur in{' '}
                  <span className="zen-font-serif italic font-normal text-[var(--zen-accent-primary)]">
                    Bewegung
                  </span>{' '}
                  &amp; Code.
                </>
              )}
            </h1>

            <ZenCard
              variant="static"
              padding="md"
              className="atelier-reveal max-w-2xl mb-10"
            >
              <p className="text-lg sm:text-xl text-[var(--zen-ink-secondary)] leading-relaxed">
                {ATELIER_PROFILE.statement[locale]}
              </p>
            </ZenCard>
          </div>

          <ZenCard
            variant="static"
            padding="md"
            className="atelier-reveal grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
          >
            <div className="lg:col-span-4">
              <div className="zen-telemetry-label">
                {locale === 'en' ? 'CURRENT ROLE' : 'AKTUELLE ROLLE'}
              </div>
              <div className="zen-font-display font-bold text-lg mt-1 text-[var(--zen-ink-primary)]">
                Full Stack Developer · Primeo Energie
              </div>
              <div className="text-xs text-[var(--zen-ink-secondary)] mt-0.5">
                {locale === 'en'
                  ? 'Technical Ownership Java & Angular · SCS · Keycloak IDP (since 09/2024)'
                  : 'Fachverantwortung Java & Angular · SCS · Keycloak IDP (seit 09/2024)'}
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="zen-telemetry-label">
                {locale === 'en'
                  ? 'SIDE PROJECT (LIVE DEMO)'
                  : 'PRIVATES PROJEKT (LIVE-DEMO)'}
              </div>
              <div className="zen-font-display font-bold text-lg mt-1 text-[var(--zen-ink-primary)]">
                {locale === 'en'
                  ? 'JourneyLink · Group Travel & SCS'
                  : 'JourneyLink · Gruppen-Reiseplattform'}
              </div>
              <div className="text-xs text-[var(--zen-ink-secondary)] mt-0.5">
                Angular 20 · Kotlin / Spring Boot 4 · Node.js · Python FastAPI · RabbitMQ
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-wrap items-center lg:justify-end gap-3">
              <a
                href="#exhibition"
                className="zen-btn-base zen-btn-primary zen-focus-ring px-5 py-3 text-sm whitespace-nowrap"
              >
                <span>
                  {locale === 'en' ? 'Explore Projects' : 'Projekte ansehen'}
                </span>
                <ZenIcon name="chevron-down" size="xs" />
              </a>

              <a
                href={cvPdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="zen-btn-base zen-btn-secondary zen-focus-ring px-4 py-3 text-xs zen-font-mono whitespace-nowrap"
              >
                <span>
                  {locale === 'en' ? 'Download CV (PDF)' : 'Lebenslauf (PDF)'}
                </span>
                <ZenIcon name="external-link" size="xs" tone="accent" />
              </a>
            </div>
          </ZenCard>
        </section>

        <section id="exhibition" className="py-24">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <ZenHeading
              as="h2"
              size="display"
              eyebrow={
                locale === 'en'
                  ? 'WORK & SIDE PROJECTS'
                  : 'BERUFLICHE PROJEKTE & EIGENE TOOLS'
              }
            >
              {locale === 'en' ? 'Projects' : 'Projekte'}
            </ZenHeading>

            <ZenSegmentedControl<WorkFilter>
              ariaLabel={
                locale === 'en'
                  ? 'Filter projects by category'
                  : 'Projekte nach Kategorie filtern'
              }
              value={workFilter}
              onChange={handleSelectFilter}
              items={[
                {
                  value: 'all',
                  label: locale === 'en' ? 'All' : 'Alle',
                  count: ATELIER_WORKS.length,
                },
                {
                  value: 'enterprise',
                  label: locale === 'en' ? 'Work' : 'Beruflich',
                  count: enterpriseWorks.length,
                  icon: <ZenIcon name="globe" size="xs" />,
                },
                {
                  value: 'personal',
                  label: locale === 'en' ? 'Personal' : 'Privat',
                  count: personalWorks.length,
                  icon: <ZenIcon name="code" size="xs" />,
                },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-10 min-w-0">
              {(workFilter === 'all' || workFilter === 'enterprise') && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--zen-border-subtle)]">
                    <div className="inline-flex items-center gap-2 zen-telemetry-label text-[var(--zen-accent-primary)]">
                      <ZenIcon name="globe" size="sm" tone="accent" />
                      <span>
                        {locale === 'en'
                          ? '01 // Work Projects'
                          : '01 // Berufliche Projekte'}
                      </span>
                    </div>
                    <span className="zen-telemetry-label">
                      Primeo Energie · Finanz-Data
                    </span>
                  </div>
                  <div className="space-y-4">
                    {enterpriseWorks.map(renderWorkCard)}
                  </div>
                </div>
              )}

              {(workFilter === 'all' || workFilter === 'personal') && (
                <div className="space-y-4">
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[var(--zen-border-subtle)]">
                    <div className="inline-flex items-center gap-2 zen-telemetry-label text-[var(--zen-accent-secondary)]">
                      <ZenIcon name="code" size="sm" tone="accent" />
                      <span>
                        {locale === 'en'
                          ? '02 // Side Projects & Open Source'
                          : '02 // Eigene Projekte & Open Source'}
                      </span>
                    </div>
                    <span className="zen-telemetry-label">
                      {locale === 'en' ? 'Personal Builds' : 'Freizeit & Hobby'}
                    </span>
                  </div>
                  <div className="space-y-4">
                    {personalWorks.map(renderWorkCard)}
                  </div>
                </div>
              )}
            </div>

            <div className="hidden lg:block lg:col-span-5 lg:sticky lg:top-24 self-start min-w-0">
              <ZenDossierPanel item={activeDossierItem} />
            </div>
          </div>
        </section>

        <section
          id="career"
          className="py-24 border-t border-[var(--zen-border-subtle)]"
        >
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <ZenHeading
              as="h2"
              size="display"
              eyebrow={
                locale === 'en' ? 'BACKGROUND & CV' : 'WERDEGANG & LEBENSLAUF'
              }
            >
              {locale === 'en'
                ? 'Experience & Education'
                : 'Berufserfahrung & Studium'}
            </ZenHeading>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-sm text-[var(--zen-ink-secondary)] max-w-sm">
                {locale === 'en'
                  ? 'Dual Bachelor in Business Informatics (B.Sc.) at DHBW Stuttgart & Allianz, followed by backend and full-stack development in Germany and Switzerland.'
                  : 'Duales Studium der Wirtschaftsinformatik (B.Sc.) an der DHBW Stuttgart & Allianz, gefolgt von Backend- und Full-Stack-Entwicklung in Deutschland und der Schweiz.'}
              </p>

              <a
                href={cvPdfHref}
                target="_blank"
                rel="noopener noreferrer"
                className="zen-btn-base zen-btn-secondary zen-focus-ring px-4 py-2.5 text-xs zen-font-mono whitespace-nowrap self-start sm:self-auto"
              >
                <span>
                  {locale === 'en' ? 'Download CV (PDF)' : 'Lebenslauf (PDF)'}
                </span>
                <ZenIcon name="external-link" size="xs" tone="accent" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ATELIER_TIMELINE.map((entry) => (
              <ZenTimelineCard
                key={`${entry.institution}-${entry.period.en}`}
                period={entry.period[locale]}
                location={entry.location[locale]}
                title={entry.title[locale]}
                institution={entry.institution}
                summary={entry.summary[locale]}
                bullets={entry.bullets?.[locale]}
                tags={entry.tags}
                icon={
                  <ZenIcon
                    name={
                      entry.category === 'experience' ? 'globe' : 'sparkles'
                    }
                    size="xs"
                    tone="accent"
                  />
                }
              />
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="py-20 border-t border-[var(--zen-border-subtle)]"
        >
          <ZenCard variant="static" padding="lg">
            <div className="max-w-3xl">
              <ZenHeading
                as="h2"
                size="display"
                eyebrow={
                  locale === 'en'
                    ? 'CONTACT · SISSACH, SWITZERLAND'
                    : 'KONTAKT · SISSACH, SCHWEIZ'
                }
                accentText={locale === 'en' ? 'talk.' : 'mir.'}
                className="mb-6"
              >
                {locale === 'en' ? "Let's" : 'Schreib'}
              </ZenHeading>

              <p className="text-base sm:text-lg text-[var(--zen-ink-secondary)] mb-8 leading-relaxed">
                {locale === 'en'
                  ? "Originally from Thuringia, I now live in Sissach near Basel. I studied Business Informatics (B.Sc.) at DHBW Stuttgart and speak native German and fluent English. When I'm not writing code, I'm usually in the gym lifting weights or reading."
                  : 'Ich komme ursprünglich aus Thüringen und lebe heute in Sissach bei Basel. Nach meinem dualen Wirtschaftsinformatik-Studium (B.Sc.) an der DHBW Stuttgart hat es mich in die Schweiz gezogen. Wenn ich nicht am Code sitze, findet man mich meistens beim Kraftsport im Gym oder mit einem Buch.'}
              </p>

              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href={`mailto:${ATELIER_PROFILE.email}`}
                  className="zen-btn-base zen-btn-primary zen-focus-ring px-6 py-3.5 text-sm"
                >
                  <span>{ATELIER_PROFILE.email}</span>
                </a>

                <ZenCopyButton
                  value={ATELIER_PROFILE.email}
                  label={locale === 'en' ? 'COPY EMAIL' : 'E-MAIL KOPIEREN'}
                  copiedLabel={locale === 'en' ? 'COPIED' : 'KOPIERT'}
                  size="lg"
                />

                <a
                  href={cvPdfHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zen-btn-base zen-btn-secondary zen-focus-ring px-5 py-3.5 text-xs zen-font-mono"
                >
                  <span>
                    {locale === 'en' ? 'Download CV (PDF)' : 'Lebenslauf (PDF)'}
                  </span>
                  <ZenIcon name="external-link" size="xs" tone="accent" />
                </a>

                <a
                  href={ATELIER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zen-btn-base zen-btn-secondary zen-focus-ring px-5 py-3.5 text-xs zen-font-mono"
                >
                  <span>GitHub</span>
                  <ZenIcon name="external-link" size="xs" tone="accent" />
                </a>

                <a
                  href={ATELIER_PROFILE.xing}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zen-btn-base zen-btn-secondary zen-focus-ring px-5 py-3.5 text-xs zen-font-mono"
                >
                  <span>XING</span>
                  <ZenIcon name="external-link" size="xs" tone="accent" />
                </a>
              </div>
            </div>
          </ZenCard>
        </section>

        <footer className="pt-8 border-t border-[var(--zen-border-subtle)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 zen-font-mono text-xs text-[var(--zen-ink-muted)]">
          <div className="flex flex-wrap items-center gap-3">
            <span>© {new Date().getFullYear()} Lukas Pabst</span>
            <span>·</span>
            <span>MIT License</span>
            <span>·</span>
            <span>Sissach, CH</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="https://ui.lpabst.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--zen-ink-primary)] transition-colors"
            >
              ui.lpabst.dev
            </a>
            <a
              href="https://terminal.lpabst.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--zen-ink-primary)] transition-colors"
            >
              terminal.lpabst.dev
            </a>
            <button
              type="button"
              onClick={() => setImprintOpen(true)}
              className="zen-focus-ring text-[var(--zen-accent-primary)] hover:underline cursor-pointer"
            >
              {locale === 'en'
                ? 'Imprint & Privacy'
                : 'Impressum & Datenschutz'}
            </button>
          </div>
        </footer>
      </main>

      <ZenModal
        open={imprintOpen}
        onClose={() => setImprintOpen(false)}
        eyebrow={
          locale === 'en'
            ? 'LEGAL NOTICE · SWITZERLAND & EU'
            : 'RECHTLICHE ANGABEN · SCHWEIZ & EU'
        }
        title={
          locale === 'en' ? 'Imprint & Privacy' : 'Impressum & Datenschutz'
        }
        subtitle="lpabst.dev · ui.lpabst.dev · terminal.lpabst.dev"
        footer={
          <ZenButton
            variant="secondary"
            size="sm"
            mono
            onClick={() => setImprintOpen(false)}
          >
            {locale === 'en' ? 'Close' : 'Schließen'}
          </ZenButton>
        }
      >
        <div className="space-y-4 text-sm text-[var(--zen-ink-secondary)] leading-relaxed">
          <div>
            <div className="zen-telemetry-label text-[var(--zen-ink-primary)] mb-1">
              {locale === 'en'
                ? 'RESPONSIBLE FOR CONTENT'
                : 'VERANTWORTLICH FÜR DEN INHALT'}
            </div>
            <p className="text-[var(--zen-ink-primary)] font-medium">
              Lukas Pabst
            </p>
            <p>4450 Sissach, Kanton Basel-Landschaft, Switzerland</p>
            <p className="mt-1">
              E-Mail:{' '}
              <a
                href={`mailto:${ATELIER_PROFILE.email}`}
                className="text-[var(--zen-accent-primary)] hover:underline"
              >
                {ATELIER_PROFILE.email}
              </a>
            </p>
          </div>

          <div>
            <div className="zen-telemetry-label text-[var(--zen-ink-primary)] mb-1">
              {locale === 'en'
                ? 'PURPOSE OF THIS WEBSITE'
                : 'ZWECK DIESER WEBSITE'}
            </div>
            <p>
              {locale === 'en'
                ? 'This website and its subdomains (ui.lpabst.dev, terminal.lpabst.dev) are a non-commercial personal developer portfolio and open-source software showcase.'
                : 'Diese Website sowie ihre Subdomains (ui.lpabst.dev, terminal.lpabst.dev) dienen ausschließlich als nicht-kommerzielles persönliches Entwickler-Portfolio und zur Vorstellung von Open-Source-Projekten.'}
            </p>
          </div>

          <div>
            <div className="zen-telemetry-label text-[var(--zen-ink-primary)] mb-1">
              {locale === 'en'
                ? 'PRIVACY & HOSTING (CH-nDSG / GDPR)'
                : 'DATENSCHUTZ & HOSTING (CH-nDSG / DSGVO)'}
            </div>
            <p>
              {locale === 'en'
                ? 'This site uses zero tracking cookies, zero analytics scripts, and no advertising trackers. It is hosted on a dedicated Linux server at Hetzner Online GmbH (Germany/EU) behind Cloudflare DNS/TLS protection. Standard technical server logs (IP address, timestamp, requested path) are processed solely to ensure secure operation and mitigate abuse.'
                : 'Diese Website verwendet keine Tracking-Cookies, keine Analyse-Tools und keine Werbe-Tracker. Das Hosting erfolgt auf einem Server bei der Hetzner Online GmbH (Deutschland/EU) sowie über Cloudflare zum Schutz der Verbindung. Technisch notwendige Server-Logs (IP-Adresse, Zeitpunkt, aufgerufener Pfad) werden ausschließlich zur sicheren Bereitstellung und Missbrauchsabwehr verarbeitet.'}
            </p>
          </div>

          <div>
            <div className="zen-telemetry-label text-[var(--zen-ink-primary)] mb-1">
              {locale === 'en'
                ? 'OPEN SOURCE LICENSE'
                : 'OPEN-SOURCE-LIZENZ'}
            </div>
            <p>
              {locale === 'en'
                ? 'Source code across linked repositories is released under the MIT License unless stated otherwise.'
                : 'Der Quellcode der verlinkten Repositories steht, sofern nicht anders angegeben, unter der MIT-Lizenz.'}
            </p>
          </div>
        </div>
      </ZenModal>
    </div>
  );
}
