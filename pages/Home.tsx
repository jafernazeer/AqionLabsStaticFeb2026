import React, { useEffect } from 'react';
import { PageType } from '../types';
import LiveDemoSection from '../components/LiveDemoSection';
import OptimizedHeroMotion from '../components/OptimizedHeroMotion';
import { RobotHero } from '../components/ui/robot-hero';
import {
  ArrowUpRight, ShieldCheck, Sparkles, Globe, Cpu, Layers
} from 'lucide-react';

interface HomeProps {
  onNavigate: (page: PageType) => void;
}

const aqionVoxFeatures = [
  '24/7 call handling',
  'Lead qualification',
  'Appointment booking',
  'CRM updates',
  'Call summaries',
  'Human handoff',
  'Arabic + English',
  'Workflow triggers',
  'UAE deployment options',
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
    category: 'Customer conversations',
    title: 'AQION VOX',
    body: 'Answer calls, qualify leads, book appointments, support customers and trigger the next step.',
    page: PageType.AGENT_CUSTOMER_SUPPORT,
    href: '/agents/customer-support',
  },
  {
    no: '02',
    category: 'Business knowledge',
    title: 'AQION BRAIN',
    body: 'Give employees and AI workers instant access to trusted company knowledge.',
    page: PageType.AGENT_KNOWLEDGE,
    href: '/agents/knowledge',
  },
  {
    no: '03',
    category: 'Executive intelligence',
    title: 'AQION CHIEF',
    body: 'Turn business activity into concise briefings, priorities and actionable insights.',
    page: PageType.AGENT_EXECUTIVE,
    href: '/agents/executive',
  },
  {
    no: '04',
    category: 'Operations',
    title: 'AQION OPS',
    body: 'Coordinate routine requests, tickets, approvals, assignments and follow-through.',
    page: PageType.AGENT_WORKFORCE,
    href: '/agents/workforce',
  },
  {
    no: '05',
    category: 'Procurement',
    title: 'AQION PROCURE',
    body: 'Accelerate purchasing administration from request and RFQ through approval and supplier follow-up.',
    page: PageType.AGENT_REVENUE,
    href: '/agents/revenue',
  },
  {
    no: '06',
    category: 'Finance operations',
    title: 'AQION FIN',
    body: 'Automate repetitive finance administration while keeping people in control.',
    page: PageType.AGENT_FINANCE,
    href: '/agents/finance',
  },
  {
    no: '07',
    category: 'Growth & marketing',
    title: 'AQION GROWTH',
    body: 'Scale campaigns, content, nurturing and follow-up with structured human approval.',
    page: PageType.AGENT_GROWTH,
    href: '/agents/growth',
  },
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
          <div className="home-mobile-content relative z-20 order-1 flex w-full max-w-[660px] flex-col items-center pt-[7.25rem] text-center sm:pt-[8rem] md:pt-[8.75rem] lg:items-start lg:pt-0 lg:text-left">
            <div className="mb-5 inline-flex max-w-full animate-entry items-center justify-center gap-2 rounded-full border border-ink/[0.08] bg-white/60 px-3 py-1.5 text-center font-mono text-[8.5px] uppercase leading-[1.25] tracking-[0.075em] text-graphite backdrop-blur-md sm:px-3.5 sm:py-2 sm:text-[11px] sm:tracking-[0.14em] lg:mb-7">
              <span className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#9333ea] shadow-[0_0_0_5px_rgba(79,70,229,0.12)]" />
              AI Workforce Platform for the Middle East
            </div>

            <h1 className="relative z-30 flex w-full max-w-[calc(100vw-3rem)] flex-col items-center leading-[1.05] lg:max-w-none lg:items-start">
              <span className="block font-serif text-[clamp(1.7rem,7.4vw,2.05rem)] italic tracking-[-0.015em] text-[#71717a] sm:text-[clamp(1.9rem,3.5vw,3.3rem)]">
                Deploy AI employees
              </span>
              <span
                className="mt-1 block max-w-full bg-clip-text pb-2 font-hero text-[clamp(1.85rem,7.6vw,2.15rem)] font-bold tracking-[-0.025em] text-transparent drop-shadow-[0_8px_24px_rgba(79,70,229,0.18)] sm:mt-2 sm:text-[clamp(2.2rem,4.4vw,4.4rem)] sm:tracking-[-0.035em]"
                style={{ backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}
              >
                that get work done.
              </span>
            </h1>

            <p className="home-mobile-copy relative z-30 mx-auto mt-5 max-w-[312px] animate-entry text-center text-[13.5px] leading-[1.55] tracking-[0.005em] text-[#52525b] sm:max-w-[540px] sm:text-[15px] md:text-lg lg:mx-0 lg:text-left">
              AQION Cloud gives UAE and GCC businesses specialized AI workers that answer customers, use company knowledge, execute workflows and operate across the systems your teams already use.
            </p>

            <div className="relative z-30 mt-7 flex animate-entry flex-col items-center gap-3 sm:flex-row lg:items-start">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
              >
                Book a Demo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-ink/[0.12] bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition-all duration-200 hover:-translate-y-px hover:border-[#4f46e5]/30 hover:text-[#4f46e5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
              >
                Call AQION VOX
                <Sparkles className="h-4 w-4 text-[#4f46e5] transition-transform group-hover:scale-110" />
              </button>
            </div>

            <p className="relative z-30 mt-6 max-w-[320px] animate-entry text-center font-mono text-[9px] uppercase leading-[1.7] tracking-[0.11em] text-[#8b8b93] sm:max-w-none sm:text-[10px] sm:tracking-[0.14em] lg:text-left">
              UAE deployment options · Enterprise controls · Human oversight · Built to integrate
            </p>

                      </div>

          <div className="hidden lg:order-2 lg:block" aria-hidden="true" />
        </div>

        <div className="home-desktop-status-row absolute inset-x-10 bottom-7 z-10 mx-auto hidden max-w-7xl items-center justify-between gap-6 font-mono text-[11px] uppercase tracking-[0.06em] text-[#71717a] lg:flex">
          <div className="flex items-center gap-2">
            <span className="text-[#a1a1aa]">System</span>
            <span>AQION Cloud v1.0</span>
            <span className="h-1 w-1 rounded-full bg-[#a1a1aa]" />
            <span>Operational</span>
          </div>
          <div className="flex items-center gap-2 lg:translate-x-6">
            <span className="text-[#a1a1aa]">Region</span>
            <span>United Arab Emirates</span>
          </div>
        </div>
      </section>

      {/* AQIONVOX CAPABILITY MARQUEE */}
      <section className="border-y border-hairline bg-paper/40 overflow-hidden">
        <div className="py-6 flex items-center gap-6">
          <span className="eyebrow shrink-0 pl-6">AQION VOX</span>
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

      {/* SERVICES */}
      <section id="services" className="mobile-section-tight relative overflow-hidden bg-[#0d0d10] py-24 text-bone md:py-32">
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-12 gap-6 mb-16">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow !text-[#4F46E5] mb-4">[ 01 — AI Workforce ]</p>
              <h2 className="font-display text-[clamp(1.65rem,7.4vw,2.25rem)] tracking-tight leading-[1.02] text-bone md:text-6xl">
                <span className="block">Meet your</span>
                <span className="display-italic text-bone/90">AI workforce.</span>
              </h2>
            </div>
            <div className="hidden md:col-span-5 md:col-start-8 md:block md:pt-4">
              <p className="mobile-clamp-3 text-bone/78 text-lg leading-relaxed">
                Start with one AI employee. Expand into an intelligent workforce across your business.
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

      {/* AQIONVOX FEATURE STRIP */}
      <section id="featured-aqionvox" className="mobile-section-tight bg-petrol text-bone py-10 md:py-12 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(rgba(250,247,242,0.6)_1px,transparent_1px)] bg-[length:22px_22px]" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="grid grid-cols-12 items-center gap-8 md:gap-10">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow !text-bone/70 mb-4">[ Featured product ]</p>
              <h2 className="font-display text-[2.65rem] md:text-7xl tracking-tight leading-[0.98] text-bone">
                AQION VOX —<br />
                <span className="display-italic text-bone/90">customer conversations</span><br />
                that turn into action.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-bone/75 md:text-[17px]">
                Start with the AI employee that answers calls, qualifies opportunities, supports customers and triggers the next step.
                <span className="mt-3 block">
                  AQION VOX uses approved company knowledge, captures structured call data and hands over to people when judgment is required.
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

      {/* WHY US */}
      <section className="mobile-section-tight py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-12 gap-6 mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">[ 02 — Why operators choose us ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              AI that <span className="display-italic">acts</span><br />— not just answers.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
              <p className="mobile-clamp-3 text-graphite text-lg leading-relaxed">
                AQION employees can use business context, connect to your systems and execute approved actions. A conversation can become a qualified lead, booked meeting, updated CRM record, supplier request or completed workflow.
              </p>
          </div>
        </div>

        <div className="mobile-priority-two grid md:grid-cols-2 lg:grid-cols-5 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
          {[
            { icon: Globe, title: 'Available when your business isn\'t', body: 'Capture opportunities and handle routine work beyond office hours.' },
            { icon: Cpu, title: 'Connected to real business systems', body: 'Give AI the ability to work across CRM, calendars, communications tools and operational software.' },
            { icon: Sparkles, title: 'Built on shared business memory', body: 'Connect customer context, company knowledge, documents and interactions.' },
            { icon: ShieldCheck, title: 'Human control where it matters', body: 'Define approvals, escalation rules and boundaries for sensitive decisions.' },
            { icon: Layers, title: 'Ready to evolve with enterprise requirements', body: 'Start quickly, then move toward stricter deployment, data-residency and sovereign-AI configurations where required.' },
          ].map((f) => (
            <div key={f.title} className="bg-bone p-6">
              <span className="w-11 h-11 rounded-xl bg-parchment border border-hairline flex items-center justify-center text-petrol mb-6">
                <f.icon strokeWidth={1.5} className="w-5 h-5" />
              </span>
              <h3 className="font-display text-xl text-ink mb-2">{f.title}</h3>
              <p className="mobile-clamp-2 text-sm text-taupe leading-relaxed">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-section-tight py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="mb-12 grid grid-cols-12 gap-6 md:mb-16">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-4">[ 03 — How to begin ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
              Start with <span className="display-italic">one workflow.</span><br />Expand from there.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-4">
            <p className="mobile-clamp-3 text-graphite text-lg leading-relaxed">
              You don't need to transform the entire company on day one. Start with the repetitive workflow creating the most friction, measure the result, then expand your AI workforce.
            </p>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-petrol p-6 md:p-16 grid grid-cols-12 gap-6 items-end relative overflow-hidden text-bone shadow-[0_30px_90px_-45px_rgba(79,70,229,0.8)]">
          <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(250,247,242,0.7)_1px,transparent_1px)] bg-[length:22px_22px]" />
          <div aria-hidden className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-white/10 blur-3xl" />
          <div className="col-span-12 md:col-span-7 relative">
            <p className="eyebrow !text-white mb-4">[ The next move ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] text-bone">
              What would you<br /><span className="display-italic">delegate to AI</span> first?
            </h2>
            <p className="mobile-clamp-3 mt-5 text-bone/76 text-base max-w-xl md:mt-6 md:text-lg">
              Tell us the workflow costing your team the most time today. We'll show you the AI employee best suited to take it over, the systems it needs and the controls required for launch.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:justify-end gap-3 flex flex-col sm:flex-row relative">
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="inline-flex items-center justify-center gap-2 bg-bone text-petrol px-7 py-4 rounded-full text-sm font-medium hover:bg-parchment transition-colors cursor-pointer"
            >
              Book a Demo
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-bone border border-white/15 px-7 py-4 rounded-full text-sm font-medium hover:bg-white/15 transition-colors cursor-pointer"
            >
              Experience AQION VOX
              <Sparkles className="w-4 h-4 text-bone/80" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
