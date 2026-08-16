import React, { useEffect } from 'react';
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

const operatingPrinciples = [
  {
    title: 'Build before the board forgets',
    body: 'We turn executive AI intent into shipped product, measured workflows and live dashboards within weeks, not quarters.',
    icon: Workflow,
  },
  {
    title: 'Revenue is the benchmark',
    body: 'Every engagement is tied to a commercial metric: conversion, response time, cost-per-resolution, lead velocity or operating margin.',
    icon: TrendingUp,
  },
  {
    title: 'UAE-first, globally credible',
    body: 'Arabic-first experiences, GCC data expectations and enterprise controls are treated as product requirements from day one.',
    icon: ShieldCheck,
  },
];

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden pt-20 font-sans text-ink">
      <section className="mesh-bg mobile-section-tight relative flex min-h-0 items-start overflow-hidden border-b border-hairline py-14 md:min-h-[calc(100vh-5rem)] md:items-center md:py-24">
        <ServiceMotionBackdrop className="mobile-visual-reduce opacity-55" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/84 via-bone/70 to-bone/92" />
        <div aria-hidden className="absolute inset-0 bg-hairline-grid opacity-25" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[130px]" />
        <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-12 items-center gap-8 px-5 sm:px-6 md:gap-10">
          <div className="mobile-page-center col-span-12 min-w-0 lg:col-span-7 lg:text-left">
            <p className="eyebrow mb-4 md:mb-5">[ About AqionLabs ]</p>
            <h1 className="mobile-heading max-w-full font-display text-[2.35rem] leading-[1] tracking-tight text-ink md:text-7xl md:leading-[0.98]">
              UAE's Premier<br />
              <span className="display-italic block break-words text-petrol md:inline">AI Product Development</span>
              <span className="display-italic block text-petrol md:inline"> House.</span>
            </h1>
            <p className="mobile-copy-measure mt-5 max-w-[21rem] break-words font-display text-lg leading-[1.24] tracking-tight text-graphite md:mt-7 md:max-w-2xl md:text-3xl md:leading-[1.18] lg:mx-0">
              We build production AI that improves revenue, service and operations for UAE companies.
            </p>
            <p className="mt-5 hidden max-w-2xl text-base leading-relaxed text-taupe md:mt-6 md:block md:text-lg">
              AqionLabs is not a slideware consultancy and not a generic dev shop. We work like a senior AI product team embedded inside your business, combining strategy, software engineering, workflow automation and enterprise governance into one accountable delivery model.
            </p>
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
                Explore Aqion Vox
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

      {/* FOUNDER */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="grid grid-cols-12 items-start gap-10 md:gap-14">
          <div className="col-span-12 md:col-span-5">
            <div className="relative rounded-[34px] border border-hairline bg-white/74 p-4 shadow-[0_28px_90px_-42px_rgba(28,25,23,0.35)] backdrop-blur-md">
              <img
                src="/founder-jafer.jpg"
                alt="Jafer Mohammed, Founder of AqionLabs"
                loading="lazy"
                className="aspect-[4/5] w-full rounded-[24px] object-cover object-top"
              />
              <div className="absolute -bottom-5 left-8 right-8 rounded-2xl border border-hairline bg-paper/95 px-5 py-3 shadow-[0_18px_40px_-24px_rgba(28,25,23,0.4)] backdrop-blur-md">
                <p className="font-display text-lg leading-tight text-ink">Jafer Mohammed</p>
                <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-taupe">Founder · AqionLabs</p>
              </div>
            </div>
          </div>

          <div className="mobile-page-center col-span-12 md:col-span-6 md:col-start-7 md:text-left">
            <p className="eyebrow mb-4">[ The founder ]</p>
            <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              No safety net.<br />
              <span className="display-italic">No playbook.</span>
            </h2>

            <div className="mobile-copy-measure mt-6 space-y-4 text-[15px] leading-relaxed text-graphite md:mt-8 md:text-lg">
              <p>
                Almost a year ago I walked away from a stable career and started building AqionLabs — with no safety net and no playbook, just a problem I couldn't stop thinking about.
              </p>
              <p>
                Ten-plus years across enterprise communications, cloud infrastructure, contact centres and large-scale digital transformation — with organisations including Tesla, Disney, UPS and Bank of America. After all of that, one thing became impossible to ignore.
              </p>
            </div>

            <figure className="mt-8 rounded-2xl border border-hairline bg-parchment/70 p-6 md:mt-10">
              <blockquote className="font-display text-2xl leading-snug tracking-tight text-ink md:text-3xl">
                Large enterprises have access to world-class AI.{' '}
                <span className="display-italic">Most SMBs don't.</span>
              </blockquote>
              <figcaption className="mt-4 text-sm leading-relaxed text-taupe">
                Not because they don't need it — because the cost, complexity and infrastructure have always been out of reach.
              </figcaption>
            </figure>

            <div className="mobile-copy-measure mt-8 space-y-4 text-[15px] leading-relaxed text-graphite md:text-lg">
              <p>
                That's why I started AqionLabs: to build Agentic AI platforms that let everyday businesses use enterprise-grade AI without enterprise-level costs. Our first solution, Aqion Vox, answers, qualifies, converts and follows up with customers 24/7 — with multilingual regional language support.
              </p>
              <p>
                The real turning point was realising AI can become a real-time mentor if you're curious enough — something you can ask anything, explore any technical challenge with, and get clear, judgment-free guidance from instantly. Not just a productivity tool, but a true problem-solving partner.
              </p>
              <p className="text-ink">
                The future belongs to people who combine human experience with AI effectively under pressure. And honestly, we're only getting started.
              </p>
            </div>
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
                  'Voice, WhatsApp, CRM and automation deployment',
                  'Governance, security and data-residency planning',
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
