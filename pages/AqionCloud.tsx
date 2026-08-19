import React, { useEffect } from 'react';
import { PageType } from '../types';
import OptimizedHeroMotion from '../components/OptimizedHeroMotion';
import {
  ArrowUpRight, Sparkles, Cpu, Database, Workflow, ShieldCheck,
} from 'lucide-react';

interface AqionCloudProps {
  onNavigate: (page: PageType) => void;
}

const PAGE_TITLE = 'AQION Cloud | AI Workforce Platform for Middle East Businesses';
const PAGE_DESCRIPTION =
  'Discover AQION Cloud, the shared AI runtime, business memory, workflow engine and enterprise foundation powering the AQION AI Workforce.';

const workforce = ['VOX', 'BRAIN', 'CHIEF', 'OPS', 'PROCURE', 'FIN', 'GROWTH'];

const stack = [
  {
    icon: Cpu,
    title: 'AI Runtime',
    items: ['Think', 'Decide', 'Coordinate'],
  },
  {
    icon: Database,
    title: 'Business Memory',
    items: ['Customers', 'Knowledge', 'Documents', 'Context'],
  },
  {
    icon: Workflow,
    title: 'Workflow Engine',
    items: ['Automate', 'Integrate', 'Execute'],
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Infrastructure',
    items: ['Security', 'Governance', 'UAE Deployment', 'Sovereign AI Roadmap'],
  },
];

const capabilities = [
  {
    icon: Cpu,
    title: 'AI Runtime',
    body: 'The intelligence layer that gives each AI employee its role, goals, instructions, context and guardrails.',
    micro: 'Think · Decide · Coordinate',
  },
  {
    icon: Database,
    title: 'Business Memory',
    body: 'The shared context your AI workforce can use — customers, conversations, documents, company knowledge and operational data.',
    micro: 'Know · Remember · Understand',
  },
  {
    icon: Workflow,
    title: 'Workflow Engine',
    body: 'The execution layer that turns decisions into approved actions across business systems.',
    micro: 'Automate · Integrate · Execute',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Infrastructure',
    body: 'The foundation for security, tenant isolation, monitoring, deployment, access control and regional infrastructure options.',
    micro: 'Secure · Govern · Scale',
  },
];

const enterpriseStrip = [
  'UAE deployment options',
  'Auditability',
  'Role-based controls',
  'Human approval',
  'Model flexibility',
  'Integration APIs',
];

const Connector: React.FC = () => (
  <div className="flex flex-col items-center" aria-hidden>
    <span className="h-6 w-px bg-gradient-to-b from-hairline to-petrol/35 sm:h-8" />
    <span className="h-1.5 w-1.5 rounded-full bg-petrol/40" />
    <span className="h-6 w-px bg-gradient-to-b from-petrol/35 to-hairline sm:h-8" />
  </div>
);

const AqionCloud: React.FC<AqionCloudProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const prevTitle = document.title;
    const metaEl = document.querySelector('meta[name="description"]');
    const prevDescription = metaEl?.getAttribute('content') ?? '';
    document.title = PAGE_TITLE;
    metaEl?.setAttribute('content', PAGE_DESCRIPTION);
    return () => {
      document.title = prevTitle;
      metaEl?.setAttribute('content', prevDescription);
    };
  }, []);

  return (
    <div className="mesh-bg text-ink overflow-x-hidden font-sans relative">
      {/* HERO */}
      <section className="relative isolate overflow-hidden px-6 pb-16 pt-28 md:pb-24 md:pt-36 lg:px-10">
        <div className="absolute inset-0 -z-10 mesh-bg" aria-hidden />
        <OptimizedHeroMotion
          kind="image"
          src="/service-motion.svg"
          className="absolute inset-0 pointer-events-none overflow-hidden opacity-[0.34]"
          mediaClassName="h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bone/80 via-bone/62 to-bone/94" aria-hidden />

        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-end gap-6">
          <div className="col-span-12 lg:col-span-7">
            <p className="eyebrow mb-4">[ Platform — AQION Cloud ]</p>
            <h1 className="font-display text-[clamp(2.1rem,8vw,2.7rem)] leading-[1.02] tracking-tight md:text-6xl lg:text-7xl">
              One platform.<br />
              <span
                className="display-italic bg-clip-text text-transparent"
                style={{ backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}
              >
                An entire AI workforce.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-graphite md:text-lg">
              AQION Cloud gives every AI employee the intelligence, business memory, workflows and enterprise foundation it needs to work across your organization.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)]"
              >
                Book a Platform Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => onNavigate(PageType.AGENT_CUSTOMER_SUPPORT)}
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-ink/[0.12] bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition-all duration-200 hover:-translate-y-px hover:border-petrol/30 hover:text-petrol"
              >
                Explore the AI Workforce
                <Sparkles className="h-4 w-4 text-petrol transition-transform group-hover:scale-110" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* PLATFORM STACK DIAGRAM */}
      <section className="mobile-section-tight border-y border-hairline bg-parchment/50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6">
          {/* Crown */}
          <div
            className="relative overflow-hidden rounded-[28px] p-7 text-center text-bone shadow-[0_30px_90px_-45px_rgba(79,70,229,0.8)] md:p-9"
            style={{ background: 'linear-gradient(120deg, #4f46e5, #9333ea)' }}
          >
            <div aria-hidden className="absolute inset-0 opacity-[0.09] bg-[radial-gradient(rgba(250,247,242,0.8)_1px,transparent_1px)] bg-[length:20px_20px]" />
            <p className="relative font-display text-[1.9rem] leading-none tracking-tight md:text-4xl">AQION Cloud</p>
            <p className="relative mt-2.5 font-mono text-[10px] uppercase tracking-[0.18em] text-bone/80 md:text-[11px]">
              The AI Workforce Platform
            </p>
          </div>

          <Connector />

          {/* AI Workforce pills */}
          <div className="rounded-[28px] border border-hairline bg-paper/85 p-6 text-center shadow-[0_24px_70px_-50px_rgba(28,25,23,0.35)] backdrop-blur md:p-7">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-taupe">AI Workforce</p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {workforce.map((w) => (
                <span
                  key={w}
                  className="rounded-full border border-petrol/20 bg-petrol/[0.06] px-3.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.1em] text-petrol"
                >
                  {w}
                </span>
              ))}
            </div>
          </div>

          <Connector />

          {/* Shared layers */}
          <div className="space-y-3">
            {stack.map((layer) => (
              <div
                key={layer.title}
                className="flex flex-col items-center gap-4 rounded-[24px] border border-hairline bg-paper/85 p-5 text-center shadow-[0_20px_60px_-50px_rgba(28,25,23,0.35)] backdrop-blur transition-colors duration-200 hover:border-petrol/25 sm:flex-row sm:text-left md:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-parchment text-petrol">
                  <layer.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-display text-xl leading-tight text-ink md:text-2xl">{layer.title}</p>
                  <div className="mt-2 flex flex-wrap justify-center gap-x-2.5 gap-y-1 sm:justify-start">
                    {layer.items.map((item, i) => (
                      <React.Fragment key={item}>
                        {i > 0 && <span className="text-hairline" aria-hidden>·</span>}
                        <span className="text-sm text-taupe">{item}</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OPERATING LAYER */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="mb-14 grid grid-cols-12 gap-6 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">[ 01 — Shared capabilities ]</p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              The operating layer behind<br /><span className="display-italic">every AQION employee.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <p className="mobile-clamp-3 text-lg leading-relaxed text-graphite">
              Instead of building isolated AI bots for every department, AQION Cloud provides shared capabilities that can power an entire workforce.
            </p>
          </div>
        </div>

        <div className="mobile-priority-two grid gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((c) => (
            <div key={c.title} className="flex flex-col bg-bone p-6">
              <span className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-hairline bg-parchment text-petrol">
                <c.icon strokeWidth={1.5} className="h-5 w-5" />
              </span>
              <h3 className="mb-2 font-display text-xl text-ink">{c.title}</h3>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-taupe">{c.body}</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-petrol">{c.micro}</p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPOUNDING VALUE */}
      <section className="mobile-section-tight relative overflow-hidden bg-[#0d0d10] py-24 text-bone md:py-32">
        <div aria-hidden className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(rgba(250,247,242,0.7)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 gap-6 px-6">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow !text-[#4F46E5] mb-4">[ 02 — Compounding value ]</p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-bone md:text-6xl">
              One employee learns.<br />
              <span className="display-italic text-bone/90">The platform gets stronger.</span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <p className="text-lg leading-relaxed text-bone/78">
              Shared infrastructure means new AQION employees do not need to recreate integrations, business context and workflow logic from zero. The platform becomes more valuable as more of the organization is connected.
            </p>
          </div>
        </div>
      </section>

      {/* ENTERPRISE EVOLUTION */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">[ 03 — Enterprise readiness ]</p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Built for <span className="display-italic">enterprise</span><br />evolution.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <p className="mobile-clamp-3 text-lg leading-relaxed text-graphite">
              Start with managed cloud infrastructure. Add stricter data controls, private deployment paths and sovereign AI options as the organization and regulatory requirements evolve.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2.5 md:mt-14">
          {enterpriseStrip.map((item) => (
            <span
              key={item}
              className="rounded-full border border-hairline bg-paper/80 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.12em] text-graphite backdrop-blur transition-colors duration-200 hover:border-petrol/25 hover:text-petrol md:text-[11px]"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-6 pb-24 md:pb-32">
        <div className="relative grid grid-cols-12 items-end gap-6 overflow-hidden rounded-3xl border border-white/10 bg-petrol p-6 text-bone shadow-[0_30px_90px_-45px_rgba(79,70,229,0.8)] md:p-16">
          <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(250,247,242,0.7)_1px,transparent_1px)] bg-[length:22px_22px]" />
          <div aria-hidden className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
          <div className="relative col-span-12 md:col-span-7">
            <p className="eyebrow !text-white mb-4">[ The next move ]</p>
            <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-bone md:text-6xl">
              See the platform<br /><span className="display-italic">behind the workforce.</span>
            </h2>
            <p className="mobile-clamp-3 mt-5 max-w-xl text-base text-bone/76 md:mt-6 md:text-lg">
              We'll walk through the runtime, the business memory model, the workflow engine and the deployment options — mapped to the systems you already run.
            </p>
          </div>
          <div className="relative col-span-12 flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-bone px-7 py-4 text-sm font-medium text-petrol transition-colors hover:bg-parchment"
            >
              Book a Platform Demo
              <ArrowUpRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => onNavigate(PageType.AGENT_CUSTOMER_SUPPORT)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-white/15"
            >
              Explore the AI Workforce
              <Sparkles className="h-4 w-4 text-bone/80" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AqionCloud;
