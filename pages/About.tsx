import React, { useEffect, useState } from 'react';
import { PageType } from '../types';
import {
  ArrowUpRight,
  Check,
  Globe,
  Layers,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Workflow,
} from 'lucide-react';
import { ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';

interface AboutProps {
  onNavigate: (page: PageType) => void;
}

const team = [
  {
    name: 'Mohamed Shihas',
    role: 'CTO',
    initials: 'MS',
    photo: '/team-shihas.webp',
    linkedin: 'https://www.linkedin.com/in/shihasck/',
    body: 'Owns the agent runtime, integrations and deployment architecture behind AQION Cloud.',
  },
  {
    name: 'Rinas Musthafa',
    role: 'Forward Deployed Engineer',
    initials: 'RM',
    photo: '/team-rinas.webp',
    linkedin: 'https://www.linkedin.com/in/rinas-musthafa/',
    body: 'Takes deployments from first workflow to production inside customer systems.',
  },
  {
    name: 'Muhammed Niyas A',
    role: 'Forward Deployed Engineer',
    initials: 'MN',
    photo: '/team-niyas-a.webp',
    linkedin: 'https://www.linkedin.com/in/muhammedniyas123/',
    body: 'Builds and hardens the customer-facing agent workflows and integrations.',
  },
  {
    name: 'Muhammed Niyas',
    role: 'Sales & Marketing',
    initials: 'MN',
    photo: '/team-niyas.webp',
    linkedin: 'https://www.linkedin.com/in/niyas35/',
    body: 'Owns pipeline, vertical playbooks and the path from pilot to production.',
  },
];

const operatingPrinciples = [
  {
    title: 'Move beyond experimentation',
    body: 'We turn AI intent into working employees that answer, understand, coordinate and execute inside real business workflows.',
    icon: Workflow,
  },
  {
    title: 'Workflows are the benchmark',
    body: 'Every deployment starts with one high-value workflow, the systems it touches and the outcome it should improve.',
    icon: TrendingUp,
  },
  {
    title: 'Regional by design',
    body: 'UAE and GCC workflows, enterprise controls, multilingual experience and deployment options are product requirements from day one.',
    icon: ShieldCheck,
  },
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  // Fall back to a monogram until a member's photo is dropped into /public.
  const [photoFailed, setPhotoFailed] = useState<Record<string, boolean>>({});

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden pt-20 font-sans text-ink">
      <section className="mesh-bg mobile-section-tight relative flex min-h-0 items-start overflow-hidden border-b border-hairline py-14 md:items-center md:py-24">
        <ServiceMotionBackdrop className="opacity-55" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/84 via-bone/70 to-bone/92" />
        <div aria-hidden className="absolute inset-0 bg-hairline-grid opacity-25" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[130px]" />
        <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-12 items-center gap-8 px-5 sm:px-6 md:gap-10">
          <div className="mobile-page-center col-span-12 min-w-0 lg:col-span-7 lg:text-left">
            <p className="eyebrow mb-4 md:mb-5">[ About AQION ]</p>
            <h1 className="mobile-heading max-w-full font-display text-[2.35rem] leading-[1] tracking-tight text-ink md:text-6xl md:leading-[1]">
              Building the Agentic AI<br />
              <span className="display-italic block break-words text-petrol md:inline">Platform for the Middle East.</span>
            </h1>
            <p className="mobile-copy-measure mt-5 max-w-[21rem] break-words text-base leading-relaxed text-graphite md:mt-7 md:max-w-2xl md:text-xl md:leading-[1.5] lg:mx-0">
              The first generation of enterprise AI helped people search information, generate content and work faster. The next generation will increasingly understand, decide and act.
            </p>
            <p className="mobile-copy-measure mt-4 max-w-[21rem] break-words text-[14.5px] leading-relaxed text-taupe md:max-w-2xl md:text-lg lg:mx-0">
              AQION Labs is building agentic AI solutions that combine reasoning, business context and workflow execution to perform meaningful work across customer and business operations.
            </p>
            <ul className="mt-7 hidden max-w-2xl space-y-4 md:mt-8 md:block">
              {[
                { k: 'Not more AI demos', v: "Businesses don't need another demo. They need AI that answers customers, understands the organization, works across existing systems and reliably completes everyday tasks." },
                { k: 'AI employees, not wrappers', v: 'We build specialized AI workers on one shared platform — AI runtime, business memory, workflow engine and enterprise controls — not isolated chatbots bolted onto every department.' },
                { k: 'Practical for the region', v: 'AQION was created to make the shift from experimentation to real, measurable work practical for businesses across the UAE and GCC.' },
              ].map((item) => (
                <li key={item.k} className="flex gap-3 text-left">
                  <span className="mt-[9px] h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#9333ea]" />
                  <p className="text-base leading-relaxed text-taupe">
                    <span className="font-medium text-ink">{item.k}:</span> {item.v}
                  </p>
                </li>
              ))}
            </ul>
            <div className="mobile-center-row mt-7 flex max-w-full flex-col gap-3 sm:flex-row md:mt-9 lg:justify-start">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="mobile-action inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-petrolDeep sm:w-auto md:px-7 md:py-4"
              >
                Start a build conversation <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                className="mobile-action inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-hairline bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30 sm:w-auto md:px-7 md:py-4"
              >
                Explore AQION VOX
              </button>
            </div>
          </div>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="rounded-[34px] border border-hairline bg-white/74 p-6 shadow-[0_28px_90px_-42px_rgba(28,25,23,0.35)] backdrop-blur-md">
              <div className="rounded-[26px] bg-[#0d0d10] p-7 text-bone">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-bone/55">Operating from</span>
                  <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-xs text-petrol">UAE</span>
                </div>
                <div className="mb-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#4f46e5] to-[#9333ea] text-white shadow-[0_18px_36px_-22px_rgba(79,70,229,0.9)]">
                  <Globe className="h-8 w-8" strokeWidth={1.4} />
                </div>
                <h2 className="font-display text-4xl leading-tight">
                  Built for the market where AI adoption, regulation and ambition move fastest.
                </h2>
                <p className="mt-5 text-bone/66 leading-relaxed">
                  We align with the UAE's digital economy goals by turning AI from experimentation into deployable infrastructure for private and regulated teams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOUNDER — compacted: portrait, pull-quote and three tight beats */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
        <div className="grid grid-cols-12 items-center gap-9 md:gap-14">
          <div className="col-span-12 md:col-span-5">
            <div className="relative mx-auto max-w-[19rem] rounded-[28px] border border-hairline bg-white/74 p-3.5 shadow-[0_28px_90px_-42px_rgba(28,25,23,0.35)] backdrop-blur-md md:max-w-none md:rounded-[34px] md:p-4">
              <img
                src="/founder-jafer.jpg"
                alt="Jafer Mohammed, Founder and CEO of AqionLabs"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[22px] object-cover object-top md:rounded-[24px]"
              />
              <a
                href="https://www.linkedin.com/in/jafermohammed/"
                target="_blank"
                rel="noopener noreferrer"
                className="group absolute -bottom-5 left-6 right-6 flex items-center justify-between gap-3 rounded-2xl border border-hairline bg-paper/95 px-4 py-3 shadow-[0_18px_40px_-24px_rgba(28,25,23,0.4)] backdrop-blur-md transition-colors hover:border-ink/25 md:left-8 md:right-8 md:px-5"
              >
                <span className="min-w-0">
                  <span className="block font-display text-lg leading-tight text-ink">Jafer Mohammed</span>
                  <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-taupe">Founder &amp; CEO</span>
                </span>
                <span className="flex shrink-0 items-center gap-1 text-[11px] font-medium text-graphite transition-colors group-hover:text-petrol">
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            </div>
          </div>

          <div className="mobile-page-center col-span-12 mt-6 md:col-span-6 md:col-start-7 md:mt-0 md:text-left">
            <p className="eyebrow mb-4">[ The founder ]</p>
            <h2 className="mobile-subheading font-display text-[2.1rem] leading-[1.02] tracking-tight md:text-5xl">
              No safety net.<br />
              <span className="display-italic text-petrol">No playbook.</span>
            </h2>

            <p className="mobile-copy-measure mt-5 text-[15px] leading-relaxed text-graphite md:mt-6 md:text-lg">
              Ten-plus years across enterprise communications, cloud infrastructure and contact centres — with organisations including Tesla, Disney, UPS and Bank of America. Then a year ago, a stable career traded for a problem I couldn&apos;t stop thinking about.
            </p>

            <figure className="mt-6 rounded-2xl border border-hairline bg-parchment/70 p-5 md:mt-7 md:p-6">
              <blockquote className="font-display text-xl leading-snug tracking-tight text-ink md:text-2xl">
                Large enterprises have world-class AI.{' '}
                <span className="display-italic text-petrol">Most businesses here don&apos;t.</span>
              </blockquote>
              <figcaption className="mt-3 text-[13px] leading-relaxed text-taupe md:text-sm">
                Not for lack of need — the cost, complexity and infrastructure have always been out of reach.
              </figcaption>
            </figure>

            <p className="mobile-copy-measure mt-6 text-[15px] leading-relaxed text-graphite md:text-lg">
              AQION Cloud exists to close that gap: specialized AI agents a regional business can deploy without turning adoption into a transformation programme. AQION VOX is the first.
            </p>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="mobile-section-tight border-y border-hairline bg-parchment/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-12 grid grid-cols-12 gap-6 md:mb-16">
            <div className="mobile-page-center col-span-12 md:col-span-6 md:text-left">
              <p className="eyebrow mb-4">[ The team ]</p>
              <h2 className="mobile-subheading font-display text-[2.4rem] leading-[1.02] tracking-tight md:text-6xl">
                Small team.<br />
                <span className="display-italic text-petrol">Shipped product.</span>
              </h2>
            </div>
            <div className="mobile-page-center col-span-12 md:col-span-5 md:col-start-8 md:pt-3 md:text-left">
              <p className="text-[15px] leading-relaxed text-graphite md:text-lg">
                Engineers who deploy inside customer systems, not from behind a roadmap. Everyone here works on something a customer touches.
              </p>
              <div className="mobile-center-row mt-5 flex flex-wrap items-center gap-2.5 md:justify-start">
                <span className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-graphite">
                  5 people
                </span>
                <span className="rounded-full border border-hairline bg-paper px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-graphite">
                  Dubai, UAE
                </span>
                <span className="rounded-full border border-[#4f46e5]/25 bg-[#4f46e5]/10 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-petrol">
                  Shipping since 2026
                </span>
              </div>
            </div>
          </div>

          <div className="mobile-priority-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((m) => (
              <a
                key={m.name}
                href={m.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col rounded-[26px] border border-hairline bg-paper p-6 text-center shadow-[0_18px_60px_-48px_rgba(28,25,23,0.35)] transition-colors duration-200 hover:border-ink/25 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/35 md:text-left"
              >
                <span className="mx-auto mb-5 block h-24 w-24 shrink-0 overflow-hidden rounded-full border border-hairline bg-parchment md:mx-0 md:h-[6.5rem] md:w-[6.5rem]">
                  {m.photo && !photoFailed[m.name] ? (
                    <img
                      src={m.photo}
                      alt={`${m.name}, ${m.role} at AqionLabs`}
                      loading="lazy"
                      onError={() => setPhotoFailed((prev) => ({ ...prev, [m.name]: true }))}
                      className="h-full w-full object-cover object-top"
                    />
                  ) : (
                    <span className="flex h-full w-full items-center justify-center bg-gradient-to-br from-[#4f46e5]/12 to-[#9333ea]/12 font-display text-xl text-petrol">
                      {m.initials}
                    </span>
                  )}
                </span>
                <p className="font-display text-xl leading-tight text-ink">{m.name}</p>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-petrol">{m.role}</p>
                <p className="mt-3 text-[13.5px] leading-relaxed text-taupe">{m.body}</p>
                <span className="mobile-center-row mt-4 flex items-center gap-1.5 text-[11px] font-medium text-graphite transition-colors group-hover:text-petrol md:justify-start">
                  LinkedIn
                  <ArrowUpRight className="h-3 w-3" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>


      {/* OUR APPROACH */}
      <section className="mobile-section-tight border-b border-hairline bg-parchment/50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-10 grid grid-cols-12 gap-6 md:mb-14">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4">[ Our approach ]</p>
              <h2 className="mobile-subheading font-display text-[1.9rem] leading-[1.04] tracking-tight text-ink md:text-5xl">
                Start With a Real Workflow.<br />
                <span className="display-italic text-petrol">Build the Platform Around It.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-3">
              <p className="text-[15px] leading-relaxed text-graphite md:text-lg">
                AQION is starting with customer conversations through AQION VOX rather than attempting to launch an entire AI Workforce at once.
              </p>
              <p className="mt-4 text-[14.5px] leading-relaxed text-taupe md:text-base">
                The platform capabilities developed around VOX — runtime intelligence, business memory, integrations and workflow execution — form the foundation for AQION Cloud and the broader AI Workforce.
              </p>
            </div>
          </div>

          <div className="mobile-priority-grid grid gap-3 sm:grid-cols-3">
            {[
              { stage: 'Today', title: 'AQION VOX', detail: 'Agentic Voice AI' },
              { stage: 'Platform', title: 'AQION Cloud', detail: 'Shared intelligence layer' },
              { stage: 'Expansion', title: 'AI Workforce', detail: 'Connected specialized agents' },
            ].map((step) => (
              <div key={step.stage} className="rounded-[24px] border border-hairline bg-paper p-5 shadow-[0_18px_60px_-48px_rgba(28,25,23,0.35)] sm:p-6">
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-petrol">{step.stage}</p>
                <h3 className="mt-3 font-display text-xl leading-tight text-ink md:text-2xl">{step.title}</h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-taupe sm:text-sm">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="mb-14 grid grid-cols-12 gap-6">
          <div className="mobile-page-center col-span-12 md:col-span-6 md:text-left">
            <p className="eyebrow mb-4">[ How we work ]</p>
            <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Strategy, code<br />
              <span className="display-italic">and operations.</span>
            </h2>
          </div>
          <div className="mobile-page-center col-span-12 md:col-span-5 md:col-start-8 md:pt-4 md:text-left">
            <p className="mobile-copy-measure text-[15px] leading-relaxed text-graphite md:hidden">
              We ship AI into real workflows and measure what changes.
            </p>
            <p className="hidden text-lg leading-relaxed text-graphite md:block">
              The SaaS market now rewards teams that ship AI into real workflows, prove adoption and compound data advantages. Our model is built for that reality.
            </p>
          </div>
        </div>

        <div className="mobile-priority-two grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {operatingPrinciples.map((item) => (
            <div key={item.title} className="mobile-card-center mobile-card-compact bg-paper p-8 md:text-left">
              <span className="mobile-center-icon mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-parchment text-petrol md:mb-7 md:ml-0">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-2xl leading-tight text-ink">{item.title}</h3>
              <p className="mobile-copy-measure mt-3 text-sm leading-relaxed text-taupe md:mt-4 md:mx-0">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-section-tight bg-[#0d0d10] py-24 text-bone md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="mobile-page-center col-span-12 md:col-span-6 md:text-left">
              <p className="eyebrow mb-4">[ Delivery system ]</p>
              <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
                A studio built<br />
                <span className="display-italic text-white">for production AI.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:pt-4">
              <div className="mobile-priority-list space-y-4">
                {[
                  'AI product strategy and use-case prioritisation',
                  'Full-stack web, mobile and workflow engineering',
                  'Voice, CRM and workflow automation deployment',
                  'Governance, security and data-residency option planning',
                  'Post-launch optimisation against commercial KPIs',
                ].map((item) => (
                  <div key={item} className="mobile-center-row flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-bone/76 md:items-start md:justify-start md:text-left">
                    <Check className="h-4 w-4 shrink-0 text-petrol md:mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="mobile-card-center rounded-3xl bg-petrol p-6 text-bone md:p-14 md:text-left">
          <p className="eyebrow !text-white/70 mb-4">[ The offer ]</p>
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 md:col-span-8">
              <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
                Bring us the metric.<br />
                <span className="display-italic">We bring the build plan.</span>
              </h2>
              <p className="mobile-copy-measure mt-5 max-w-2xl text-bone/76 md:mt-6 md:mx-0">
                In one working session, we map the workflow, commercial upside, risk controls and first deployable AI product worth building.
              </p>
            </div>
            <div className="mobile-center-row col-span-12 flex flex-col gap-3 sm:flex-row md:col-span-4 md:justify-end">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="mobile-action inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-bone px-7 py-4 text-sm font-medium text-petrol transition-colors hover:bg-parchment sm:w-auto"
              >
                Book a call <Sparkles className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate(PageType.SERVICE_DIGITAL_PRESENCE_STUDIO)}
                className="mobile-action inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-white/15 sm:w-auto"
              >
                View services <Layers className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
