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
        <div className="relative mx-auto grid w-full min-w-0 max-w-7xl grid-cols-12 items-center gap-8 px-6 md:gap-10">
          <div className="col-span-12 min-w-0 lg:col-span-7">
            <p className="eyebrow mb-4 md:mb-5">[ About AqionLabs ]</p>
            <h1 className="max-w-full font-display text-[2.35rem] leading-[1] tracking-tight text-ink md:text-7xl md:leading-[0.98]">
              UAE's Premier<br />
              <span className="display-italic block break-words text-petrol md:inline">AI Product Development</span>
              <span className="display-italic block text-petrol md:inline"> House.</span>
            </h1>
            <p className="mobile-clamp-3 mt-5 max-w-[21rem] break-words font-display text-lg leading-[1.24] tracking-tight text-graphite md:mt-7 md:max-w-2xl md:text-3xl md:leading-[1.18]">
              We design, build and operate AI products that move revenue, service quality and operational leverage for ambitious UAE companies.
            </p>
            <p className="mt-5 hidden max-w-2xl text-base leading-relaxed text-taupe md:mt-6 md:block md:text-lg">
              AqionLabs is not a slideware consultancy and not a generic dev shop. We work like a senior AI product team embedded inside your business, combining strategy, software engineering, workflow automation and enterprise governance into one accountable delivery model.
            </p>
            <div className="mt-7 flex max-w-full flex-col gap-3 sm:flex-row md:mt-9">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-petrolDeep sm:w-auto md:px-7 md:py-4"
              >
                Start a build conversation <ArrowUpRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                className="inline-flex min-h-11 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-hairline bg-paper px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30 sm:w-auto md:px-7 md:py-4"
              >
                Explore AqionVox
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

      <section className="mobile-section-tight mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14 grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">[ How we work ]</p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Strategy, code<br />
              <span className="display-italic">and operations.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <p className="mobile-clamp-3 text-base leading-relaxed text-graphite md:text-lg">
              The SaaS market now rewards teams that ship AI into real workflows, prove adoption and compound data advantages. Our model is built for that reality.
            </p>
          </div>
        </div>

        <div className="mobile-priority-two grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {operatingPrinciples.map((item) => (
            <div key={item.title} className="mobile-card-compact bg-paper p-8">
              <span className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-parchment text-petrol">
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
              <h3 className="font-display text-2xl leading-tight text-ink">{item.title}</h3>
              <p className="mobile-clamp-3 mt-4 text-sm leading-relaxed text-taupe">{item.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mobile-section-tight bg-[#0d0d10] py-24 text-bone md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4">[ Delivery system ]</p>
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
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
                  <div key={item} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-bone/76">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-petrol" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-section-tight mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="rounded-3xl bg-petrol p-6 text-bone md:p-14">
          <p className="eyebrow !text-white/70 mb-4">[ The offer ]</p>
          <div className="grid grid-cols-12 items-end gap-6">
            <div className="col-span-12 md:col-span-8">
              <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
                Bring us the metric.<br />
                <span className="display-italic">We bring the build plan.</span>
              </h2>
              <p className="mobile-clamp-3 mt-6 max-w-2xl text-bone/76">
                In one working session, we map the workflow, commercial upside, risk controls and first deployable AI product worth building.
              </p>
            </div>
            <div className="col-span-12 flex gap-3 md:col-span-4 md:justify-end">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-bone px-7 py-4 text-sm font-medium text-petrol transition-colors hover:bg-parchment"
              >
                Book a call <Sparkles className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate(PageType.SERVICE_DIGITAL_PRESENCE_STUDIO)}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-white/15"
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
