import React, { useEffect } from 'react';
import { PageType } from '../types';
import { ArrowUpRight, Compass, LayoutTemplate, Lock, Server, ShieldCheck, Shuffle } from 'lucide-react';

interface ServicesProps {
  onNavigate: (page: PageType) => void;
}

const services = [
  {
    no: '01',
    title: 'AI-Ready Web Studio',
    body: 'Web and mobile designed and built to ship in weeks, not quarters — and structured so agents can read, update and act on them from day one. Not a brochure that needs rebuilding the moment you add AI.',
    icon: LayoutTemplate,
    points: ['Design and build in weeks', 'Agent-readable content model', 'Analytics and SEO wired in'],
  },
  {
    no: '02',
    title: 'Sovereign Infrastructure Deployment',
    body: 'The ground your agents stand on. Private LLMs, retrieval and observability inside your own VPC or on-premise, with UAE data residency by default and no vendor holding the keys.',
    icon: Server,
    points: ['VPC or on-premise deployment', 'Retrieval and observability stack', 'Residency and audit controls'],
  },
  {
    no: '03',
    title: 'AI Strategy & Discovery',
    body: 'A one-week diagnostic that ends in a deployment plan, not a slide deck. We map the workflows worth automating, size the return, and tell you plainly what is not worth doing yet.',
    icon: Compass,
    points: ['One-week diagnostic', 'Prioritised workflow map', 'Costed deployment plan'],
  },
];

const sovereignPillars = [
  {
    no: '01',
    title: 'Data residency',
    body: 'Application, database and all records live in me-central-1. Never replicated cross-region.',
    icon: Lock,
  },
  {
    no: '02',
    title: 'Processing choice',
    body: 'Inference runs on international providers under DPA, on UAE endpoints, or fully on-premise. You pick — the agent behaves the same either way.',
    icon: ShieldCheck,
  },
  {
    no: '03',
    title: 'Portability',
    body: 'Open frameworks and open-weight models. No vendor lock-in anywhere in the pipeline.',
    icon: Shuffle,
  },
];

const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg text-ink font-sans">
      {/* HERO */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="mobile-page-center col-span-12 md:col-span-7 md:text-left">
            <p className="eyebrow mb-4">[ Services ]</p>
            <h1 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-7xl">
              Built to run,<br />
              <span className="display-italic">not to present.</span>
            </h1>
          </div>
          <div className="mobile-page-center col-span-12 md:col-span-5 md:pt-6 md:text-left">
            <p className="mobile-copy-measure text-[15px] leading-relaxed text-graphite md:text-lg">
              Three ways we engage — from a one-week diagnostic to the sovereign infrastructure your agents run on. Every engagement ends in software in production.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICE CARDS */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 pb-24 sm:px-6 md:pb-32">
        <div className="mobile-priority-two grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-3">
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <div key={s.no} className="mobile-card-center mobile-card-compact flex flex-col bg-paper p-8 md:text-left">
                <div className="mobile-center-icon mb-5 flex items-center justify-between md:mb-7">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-hairline bg-parchment text-petrol">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="font-mono text-xs text-taupe">{s.no}</span>
                </div>
                <h2 className="font-display text-2xl leading-tight text-ink">{s.title}</h2>
                <p className="mobile-copy-measure mt-3 text-sm leading-relaxed text-taupe md:mx-0 md:mt-4">{s.body}</p>
                <ul className="mt-6 space-y-2 border-t border-hairline pt-5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-left text-[13px] leading-relaxed text-graphite">
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#9333ea]" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>

      {/* SOVEREIGN BY DEFAULT */}
      <section className="mobile-section-tight bg-[#0d0d10] py-24 text-bone md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mb-14 grid grid-cols-12 gap-6">
            <div className="mobile-page-center col-span-12 md:col-span-6 md:text-left">
              <p className="eyebrow !text-[#a5b4fc] mb-4">[ Sovereign by default ]</p>
              <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight text-bone md:text-6xl">
                Three things,<br />
                <span className="display-italic text-bone/90">stated plainly.</span>
              </h2>
            </div>
            <div className="mobile-page-center col-span-12 md:col-span-5 md:col-start-8 md:pt-4 md:text-left">
              <p className="mobile-copy-measure text-[15px] leading-relaxed text-bone/72 md:text-lg">
                &ldquo;Sovereign&rdquo; is a word every vendor uses and few will define. Here is exactly what it means when we say it — testable, not marketing.
              </p>
            </div>
          </div>

          <div className="grid gap-px overflow-hidden rounded-2xl border border-bone/15 bg-bone/15 md:grid-cols-3">
            {sovereignPillars.map((p) => {
              const Icon = p.icon;
              return (
                <div key={p.no} className="bg-[#0d0d10] p-8">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-bone/15 bg-white/[0.04] text-[#a5b4fc]">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">{p.no}</p>
                  <h3 className="font-display text-2xl leading-tight text-bone">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-bone/70">{p.body}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="mobile-page-center rounded-[34px] border border-hairline bg-white/74 p-10 shadow-[0_28px_90px_-42px_rgba(28,25,23,0.35)] backdrop-blur-md md:p-16 md:text-left">
          <p className="eyebrow mb-4">[ Start with the diagnostic ]</p>
          <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
            One week to know<br />
            <span className="display-italic">what is worth building.</span>
          </h2>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <a
              href="/agentic-ai"
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-graphite transition-all duration-200 hover:-translate-y-px hover:border-[#4f46e5]/40 hover:bg-ink/[0.04] hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
            >
              See the agents
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
