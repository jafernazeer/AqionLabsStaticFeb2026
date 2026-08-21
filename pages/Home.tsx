import React, { useEffect } from 'react';
import { PageType } from '../types';
import LiveDemoSection from '../components/LiveDemoSection';
import OptimizedHeroMotion from '../components/OptimizedHeroMotion';
import { RobotHero } from '../components/ui/robot-hero';
import {
  ArrowUpRight, ArrowRight, ShieldCheck, Sparkles, Cpu, Layers, Zap, Database,
  Workflow, Server, Stethoscope, Building2, CreditCard, Scale, Hotel, GraduationCap
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const aqionVoxFeatures = [
  'Voice AI',
  'Live Conversations',
  'Lead Qualification',
  'CRM Intelligence',
  'Workflow Automation',
  'Appointment Booking',
  'Human Handoff',
  'Arabic • English • Hindi',
  'Enterprise Deployment',
];

const aqionVoxMetrics = [
  { k: '24/7', l: 'Coverage', s: 'customer conversations' },
  { k: 'EN + AR', l: 'Languages', s: 'regional workflows' },
  { k: 'CRM', l: 'Actions', s: 'lead records updated' },
  { k: 'Human', l: 'Handoff', s: 'when judgment matters' },
  { k: 'Email', l: 'Summaries', s: 'after every call' },
  { k: 'UAE', l: 'Options', s: 'supported workloads' },
];

const services = [
  {
    no: '01',
    category: 'Customer Conversation Agent',
    title: 'Aqion Vox',
    body: 'Answers calls, understands intent, qualifies requirements and triggers the next business action.',
    page: PageType.AGENT_CUSTOMER_SUPPORT,
    href: '/agents/customer-support',
  },
  {
    no: '02',
    category: 'Business Knowledge Agent',
    title: 'Aqion Brain',
    body: 'Turns company documents, policies and operational knowledge into trusted, source-linked answers.',
    page: PageType.AGENT_KNOWLEDGE,
    href: '/agents/knowledge',
  },
  {
    no: '03',
    category: 'Executive Intelligence Agent',
    title: 'Aqion Chief',
    body: 'Turns business activity into concise briefings, priorities and actionable insights.',
    page: PageType.AGENT_EXECUTIVE,
    href: '/agents/executive',
  },
  {
    no: '04',
    category: 'Operations Agent',
    title: 'Aqion Ops',
    body: 'Coordinates routine requests, tickets, approvals, assignments and follow-through.',
    page: PageType.AGENT_WORKFORCE,
    href: '/agents/workforce',
  },
  {
    no: '05',
    category: 'Procurement Agent',
    title: 'Aqion Procure',
    body: 'Moves purchasing from request and RFQ through supplier follow-up and approval.',
    page: PageType.AGENT_REVENUE,
    href: '/agents/revenue',
  },
  {
    no: '06',
    category: 'Finance Operations Agent',
    title: 'Aqion Fin',
    body: 'Automates repetitive finance administration while keeping people in control.',
    page: PageType.AGENT_FINANCE,
    href: '/agents/finance',
  },
  {
    no: '07',
    category: 'Growth Automation Agent',
    title: 'Aqion Growth',
    body: 'Scales campaigns, content, nurturing and follow-up with structured human approval.',
    page: PageType.AGENT_GROWTH,
    href: '/agents/growth',
  },
];

const pilotFlow = ['Customer conversation', 'AI qualification', 'Lead capture', 'Business dashboard'];

const cloudStack = [
  { label: 'Agentic AI', detail: 'Specialized agents for each business function', icon: Sparkles },
  { label: 'AI Runtime', detail: 'Think · Decide · Coordinate', icon: Cpu },
  { label: 'Business Memory', detail: 'Customers · Knowledge · Documents · Context', icon: Database },
  { label: 'Workflow Engine', detail: 'Automate · Integrate · Execute', icon: Workflow },
  { label: 'Enterprise Infrastructure', detail: 'Secure · Govern · Scale', icon: Server },
];

const whyAqion = [
  {
    icon: Zap,
    title: 'From Conversations to Actions',
    body: 'AI that doesn\'t stop at answering. It understands intent and triggers the next business action.',
  },
  {
    icon: Database,
    title: 'Business Context Included',
    body: 'Agents work with customer information, documents and workflows instead of isolated conversations.',
  },
  {
    icon: Layers,
    title: 'Enterprise Ready',
    body: 'Designed for multilingual, secure and scalable deployment across UAE businesses.',
  },
  {
    icon: ShieldCheck,
    title: 'Human Control',
    body: 'Autonomous where useful. Human oversight where required.',
  },
];

const industries = [
  { name: 'Healthcare', icon: Stethoscope, page: PageType.INDUSTRY_HEALTHCARE },
  { name: 'Real Estate', icon: Building2, page: PageType.INDUSTRY_REAL_ESTATE },
  { name: 'Financial Services', icon: CreditCard, page: PageType.INDUSTRY_FINANCE },
  { name: 'Legal & Professional', icon: Scale, page: PageType.INDUSTRY_PROFESSIONAL },
  { name: 'Hospitality', icon: Hotel, page: PageType.INDUSTRY_HOSPITALITY },
  { name: 'Education', icon: GraduationCap, page: PageType.INDUSTRY_EDUCATION },
];

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg text-ink overflow-x-hidden font-sans relative">
      {/* HERO */}
      <section className="home-mobile-hero relative isolate z-20 min-h-[820px] overflow-hidden px-6 pt-20 pb-12 sm:min-h-[860px] md:min-h-[900px] md:pt-28 lg:min-h-screen lg:overflow-visible lg:px-10 lg:pt-32 lg:pb-10">
        <div className="absolute inset-0 -z-10 mesh-bg" aria-hidden />
        <OptimizedHeroMotion
          kind="image"
          src="/service-motion.svg"
          className="hero-video-bg absolute inset-0 pointer-events-none overflow-hidden opacity-[0.42]"
          mediaClassName="h-full w-full object-cover object-center [transform:translateY(-4%)_scale(1.04)] sm:[transform:translateY(-2%)_scale(1.02)] md:[transform:translateY(2%)_scale(1.02)] lg:[transform:translateY(6%)_scale(1.02)]"
          onLoad={() => document.getElementById('hero-wave-prepaint')?.remove()}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-bone/82 via-bone/66 to-bone/92" aria-hidden />
        <div className="home-mobile-robot absolute inset-x-0 top-[24.5rem] z-[2] h-[420px] sm:top-[25.5rem] sm:h-[460px] md:top-[27rem] md:h-[500px] lg:top-16 lg:bottom-[-140px] lg:left-0 lg:right-0 lg:z-30 lg:h-auto lg:w-full">
          <RobotHero height="100%" />
        </div>

        <div className="home-desktop-grid pointer-events-none relative z-10 mx-auto grid min-h-[690px] w-full max-w-7xl items-start gap-0 sm:min-h-[730px] md:min-h-[760px] lg:min-h-[calc(100vh-14rem)] lg:grid-cols-[minmax(0,1fr)_minmax(380px,0.9fr)] lg:items-center lg:gap-10">
          <div className="home-mobile-content relative z-20 order-1 flex w-full max-w-[660px] flex-col items-center pt-[9rem] text-center sm:pt-[9.75rem] md:pt-[10.5rem] lg:items-start lg:pt-16 lg:text-left">
            <div className="mb-5 inline-flex max-w-full animate-entry items-center justify-center gap-2 rounded-full border border-ink/[0.08] bg-white/60 px-3 py-1.5 text-center font-mono text-[8.5px] uppercase leading-[1.25] tracking-[0.075em] text-graphite backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-[11px] sm:tracking-[0.14em] lg:mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#9333ea] shadow-[0_0_0_5px_rgba(79,70,229,0.12)]" />
              Agentic AI • Built in the UAE
            </div>

            <h1 className="relative z-30 flex w-full max-w-[calc(100vw-3rem)] flex-col items-center leading-[1.05] lg:max-w-none lg:items-start">
              <span className="block font-serif text-[clamp(1.7rem,7.4vw,2.05rem)] italic tracking-[-0.015em] text-[#71717a] sm:text-[clamp(1.9rem,3.5vw,3.3rem)]">
                AI Agents That
              </span>
              <span
                className="mt-1 block max-w-full bg-clip-text pb-2 font-hero text-[clamp(1.7rem,7vw,2rem)] font-bold tracking-[-0.025em] text-transparent drop-shadow-[0_8px_24px_rgba(79,70,229,0.18)] sm:mt-2 sm:text-[clamp(2rem,4vw,4rem)] sm:tracking-[-0.035em]"
                style={{ backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}
              >
                Thinks, Talks and Executes.
              </span>
            </h1>

            <p className="home-mobile-copy relative z-30 mx-auto mt-5 max-w-[312px] animate-entry text-center text-[13.5px] leading-[1.55] tracking-[0.005em] text-[#52525b] sm:max-w-[540px] sm:text-[15px] md:text-lg lg:mx-0 lg:text-left">
              Aqion builds AI agents that understand business context, automate workflows and connect conversations to real business outcomes.
            </p>

            <div className="relative z-30 mt-7 flex animate-entry flex-col items-center gap-3 sm:flex-row lg:items-start">
              <button
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                style={{ backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
              >
                Experience Aqion Vox
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => onNavigate(PageType.PLATFORM_AQION_CLOUD)}
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-ink/[0.12] bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition-all duration-200 hover:-translate-y-px hover:border-[#4f46e5]/30 hover:text-[#4f46e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
              >
                Explore Aqion Cloud
                <Sparkles className="h-4 w-4 text-[#4f46e5] transition-transform group-hover:scale-110" />
              </button>
            </div>

            <p className="relative z-30 mt-6 max-w-[320px] animate-entry text-center font-mono text-[9px] uppercase leading-[1.7] tracking-[0.11em] text-[#8b8b93] sm:max-w-none sm:text-[10px] sm:tracking-[0.14em] lg:text-left">
              UAE deployment options · Enterprise controls · Human oversight · Built to integrate
            </p>

                      </div>

          <div className="hidden lg:order-2 lg:block" aria-hidden="true" />
        </div>

      </section>

      {/* AQION VOX CAPABILITY MARQUEE */}
      <section className="border-y border-hairline bg-paper/40 overflow-hidden">
        <div className="py-6 flex items-center gap-6">
          <span className="eyebrow shrink-0 pl-6">Aqion Vox</span>
          <div className="relative flex-1 overflow-hidden">
            <div className="flex gap-12 animate-marquee whitespace-nowrap">
              {[...aqionVoxFeatures, ...aqionVoxFeatures].map((l, i) => (
                <span key={i} className="font-display text-lg tracking-tight text-graphite/70 hover:text-ink transition-colors">{l}</span>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bone to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bone to-transparent" />
          </div>
        </div>
      </section>

      {/* SECTION 01 — AGENTIC AI */}
      <section id="services" className="mobile-section-tight relative overflow-hidden bg-[#0d0d10] py-24 text-bone md:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow !text-[#4F46E5] mb-4">[ 01 — Agentic AI ]</p>
              <h2 className="font-display text-[clamp(1.65rem,7.4vw,2.25rem)] tracking-tight leading-[1.02] text-bone md:text-6xl">
                <span className="block">One Platform.</span>
                <span className="display-italic text-bone/90">Multiple Intelligent Agents.</span>
              </h2>
            </div>
            <div className="hidden md:col-span-5 md:col-start-8 md:block md:pt-4">
              <p className="text-bone/78 text-lg leading-relaxed">
                Businesses don't need another chatbot. They need AI systems that understand their workflows, remember context and execute meaningful actions.
              </p>
              <p className="mt-4 text-bone/60 text-base leading-relaxed">
                Aqion Cloud powers specialized AI agents designed for customer engagement, knowledge, operations and business automation.
              </p>
            </div>
          </div>

          <div className="mobile-priority-list border-t border-bone/15">
            {services.map((s) => (
              <a
                key={s.no}
                href={s.href}
                className="group grid w-full cursor-pointer grid-cols-12 items-baseline gap-4 rounded-md border-b border-bone/15 px-2 py-6 text-left transition-colors hover:bg-white/[0.04] md:gap-6 md:py-8"
              >
                <span className="col-span-12 font-mono text-xs text-bone/50 transition-colors group-hover:text-[#7c7cff] md:col-span-1 md:pt-2">{s.no}</span>
                <div className="col-span-12 min-w-0 md:col-span-5">
                  <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">{s.category}</p>
                  <h3 className="whitespace-normal break-words font-display text-[1.45rem] leading-tight tracking-tight text-bone transition-colors duration-200 group-hover:text-[#4F46E5] md:text-4xl">
                    {s.title}
                  </h3>
                </div>
                <p className="mobile-clamp-2 col-span-12 min-w-0 break-words text-sm leading-relaxed text-bone/70 transition-colors group-hover:text-[#c7d2fe] md:col-span-5 md:text-base">{s.body}</p>
                <span className="col-span-12 md:col-span-1 flex md:justify-end pt-2">
                  <ArrowUpRight className="w-5 h-5 text-bone/60 transition-all group-hover:text-[#7c7cff] group-hover:rotate-12" />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 02 — FEATURED PRODUCT */}
      <section id="featured-aqionvox" className="mobile-section-tight bg-petrol text-bone py-10 md:py-12 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(rgba(250,247,242,0.6)_1px,transparent_1px)] bg-[length:22px_22px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-12 items-center gap-8 md:gap-10">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow !text-bone/70 mb-4">[ 02 — Featured product ]</p>
              <h2 className="font-display text-[2.65rem] md:text-7xl tracking-tight leading-[0.98] text-bone">
                Aqion Vox —<br />
                <span className="display-italic text-bone/90">the Agentic Voice AI</span><br />
                platform.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/75 md:text-[17px]">
                <span className="font-medium text-bone">Talk to Aqion Vox.</span> Not a demo video. Not a chatbot. A live AI conversation.
                <span className="mt-3 block">
                  Aqion Vox answers calls, understands customer intent, qualifies requirements and converts conversations into structured business opportunities.
                </span>
              </p>
            </div>
            <div className="mobile-priority-two col-span-12 grid grid-cols-2 gap-3 md:col-span-6 md:grid-cols-3 md:gap-3">
              {aqionVoxMetrics.map((m) => (
                <div key={m.l} className="border border-bone/20 rounded-2xl bg-bone/[0.04] p-4 md:p-4">
                  <p className="whitespace-nowrap font-display text-[1.7rem] leading-none text-bone md:text-[1.85rem]">{m.k}</p>
                  <p className="mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] text-bone/70 md:text-[11px]">{m.l}</p>
                  <p className="mt-1 whitespace-nowrap text-[10px] leading-snug text-bone/55 md:text-[11px]">{m.s}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section className="mesh-bg border-y border-hairline relative z-10">
        <LiveDemoSection />
      </section>

      {/* LIVE PILOT — INVESTOR PROOF */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="relative overflow-hidden rounded-[32px] border border-hairline bg-paper/82 p-6 shadow-[0_28px_90px_-52px_rgba(28,25,23,0.4)] backdrop-blur md:p-12">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-petrol/10 blur-3xl" />
          <div className="relative grid grid-cols-12 items-center gap-8 md:gap-10">
            <div className="col-span-12 lg:col-span-5">
              <p className="eyebrow mb-4">[ Live pilot ]</p>
              <h2 className="font-display text-3xl leading-[1.04] tracking-tight text-ink md:text-5xl">
                EthikCorp <span className="display-italic text-petrol">×</span> AqionLabs
              </h2>
              <p className="mt-4 text-[15px] leading-relaxed text-taupe md:text-lg">
                The first deployment of Aqion Vox.
              </p>
              <button
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                className="group mt-7 inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-bone transition-colors hover:bg-petrolDeep"
              >
                Experience Live Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">
              <div className="grid gap-2.5">
                {pilotFlow.map((step, idx) => (
                  <div key={step}>
                    <div className="flex items-center gap-3 rounded-2xl border border-hairline bg-bone/70 px-5 py-4">
                      <span className="font-mono text-[10px] tracking-[0.16em] text-petrol">{String(idx + 1).padStart(2, '0')}</span>
                      <span className="font-display text-lg leading-tight text-ink md:text-xl">{step}</span>
                    </div>
                    {idx < pilotFlow.length - 1 && (
                      <div aria-hidden className="flex justify-center py-0.5">
                        <ArrowRight className="h-4 w-4 rotate-90 text-petrol/50" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 03 — AQION CLOUD */}
      <section className="mobile-section-tight relative overflow-hidden bg-[#0d0d10] py-24 text-bone md:py-32">
        <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(rgba(250,247,242,0.6)_1px,transparent_1px)] bg-[length:24px_24px]" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-14 grid grid-cols-12 gap-6 md:mb-16">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow !text-[#a5b4fc] mb-4">[ 03 — Aqion Cloud ]</p>
              <h2 className="font-display text-[clamp(1.65rem,7.4vw,2.25rem)] leading-[1.02] tracking-tight text-bone md:text-6xl">
                <span className="block">The Intelligence Layer</span>
                <span className="display-italic text-bone/90">Behind Every Aqion Agent.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
              <p className="text-bone/78 text-lg leading-relaxed">
                Aqion Cloud connects AI reasoning, business memory and workflow execution into one platform.
              </p>
              <p className="mt-4 text-bone/60 text-base leading-relaxed">
                Every agent shares the same intelligence foundation — allowing businesses to start with one workflow and expand into an AI-powered operating layer.
              </p>
            </div>
          </div>

          <div className="mx-auto grid max-w-3xl gap-2.5">
            {cloudStack.map((layer, idx) => (
              <div key={layer.label}>
                <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-5 transition-colors hover:border-[#7c7cff]/30 hover:bg-white/[0.08] md:px-7">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.07] text-[#a5b4fc]">
                    <layer.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-xl leading-tight text-bone md:text-2xl">{layer.label}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone/50 md:text-[11px]">{layer.detail}</p>
                  </div>
                </div>
                {idx < cloudStack.length - 1 && (
                  <div aria-hidden className="flex justify-center py-1">
                    <span className="h-4 w-px bg-gradient-to-b from-[#7c7cff]/60 to-transparent" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 04 — WHY AQION */}
      <section className="mobile-section-tight py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">[ 04 — Why Aqion ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              Built for <span className="display-italic">Real Business</span><br />Execution.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
              <p className="mobile-clamp-3 text-graphite text-lg leading-relaxed">
                Aqion agents use business context, connect to your systems and execute approved actions — turning a conversation into a qualified lead, a booked meeting, an updated CRM record or a completed workflow.
              </p>
          </div>
        </div>

        <div className="mobile-priority-two grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
          {whyAqion.map((f) => (
            <div key={f.title} className="bg-bone p-6 md:p-8">
              <span className="w-11 h-11 rounded-xl bg-parchment border border-hairline flex items-center justify-center text-petrol mb-6">
                <f.icon strokeWidth={1.5} className="w-5 h-5" />
              </span>
              <h3 className="font-display text-xl text-ink mb-2">{f.title}</h3>
              <p className="mobile-clamp-2 text-sm text-taupe leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 05 — INDUSTRIES */}
      <section className="mobile-section-tight border-y border-hairline bg-parchment/50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 grid grid-cols-12 gap-6 md:mb-16">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4">[ 05 — Industries ]</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Agentic AI Built Around<br /><span className="display-italic">Industry Workflows.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
              <p className="text-graphite text-lg leading-relaxed">
                Different industries. Different workflows. One intelligence platform.
              </p>
            </div>
          </div>

          <div className="mobile-priority-grid grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <button
                key={industry.name}
                type="button"
                onClick={() => onNavigate(industry.page)}
                className="group flex cursor-pointer items-center justify-between gap-4 rounded-[26px] border border-hairline bg-paper p-6 text-left shadow-[0_18px_60px_-48px_rgba(28,25,23,0.35)] transition-colors duration-200 hover:border-ink/30 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/35"
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-parchment text-petrol transition-colors group-hover:border-[#4f46e5]/30 group-hover:bg-[#4f46e5]/10">
                    <industry.icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <span className="truncate font-display text-xl leading-tight text-ink md:text-2xl">{industry.name}</span>
                </span>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-ash transition-all group-hover:rotate-12 group-hover:text-petrol" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="mobile-section-tight py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl border border-white/10 bg-petrol p-6 md:p-16 grid grid-cols-12 gap-6 items-end relative overflow-hidden text-bone shadow-[0_30px_90px_-45px_rgba(79,70,229,0.8)]">
          <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(250,247,242,0.7)_1px,transparent_1px)] bg-[length:22px_22px]" />
          <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="col-span-12 md:col-span-7 relative">
            <p className="eyebrow !text-white mb-4">[ The next move ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] text-bone">
              Deploy Your First<br /><span className="display-italic">Agentic AI</span> Workflow.
            </h2>
            <p className="mobile-clamp-3 mt-5 text-bone/76 text-base max-w-xl md:mt-6 md:text-lg">
              Start with one customer journey. Expand into a connected AI workforce.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:justify-end gap-3 flex flex-col sm:flex-row relative">
            <button
              onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
              className="inline-flex items-center justify-center gap-2 bg-bone text-petrol px-7 py-4 rounded-full text-sm font-medium hover:bg-parchment transition-colors cursor-pointer"
            >
              Experience Aqion Vox
              <Sparkles className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-bone border border-white/15 px-7 py-4 rounded-full text-sm font-medium hover:bg-white/15 transition-colors cursor-pointer"
            >
              Book a Demo
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
