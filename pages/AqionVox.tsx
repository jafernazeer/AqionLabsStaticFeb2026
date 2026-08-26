import React, { useEffect, useState } from 'react';
import { PageType } from '../types';
import { useLocation } from 'react-router-dom';
import { ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';
import VoxStage from '../components/vox/VoxStage';
import VoxCRM from '../components/vox/VoxCRM';
import {
  ArrowUpRight, Check, BarChart3, Users, MessageSquare, Video, Mail,
  ShieldCheck, Languages, Headphones, Workflow, X
} from 'lucide-react';

interface AqionVoxProps {
  onNavigate: (page: PageType) => void;
}

const firstSentence = (text: string) => text.match(/.*?[.!?](?:\s|$)/)?.[0].trim() ?? text;

const demoCapabilities = [
  { k: '24/7', l: 'Call handling', s: 'inbound workflows' },
  { k: 'EN + AR', l: 'Languages', s: 'regional support' },
  { k: 'CRM', l: 'Lead capture', s: 'structured records' },
  { k: 'Human', l: 'Escalation', s: 'clean handoff' },
  { k: 'Email', l: 'Summaries', s: 'after calls' },
  { k: 'UAE', l: 'Options', s: 'supported workloads' },
];

const AqionVox: React.FC<AqionVoxProps> = ({ onNavigate }) => {
  const location = useLocation();
  const [zoomedCapability, setZoomedCapability] = useState<{ title: string; image: string } | null>(null);

  // Arriving with a hash (for example the homepage "Experience Vox CRM"
  // button) should land on that section rather than snapping to the top.
  // The page is lazy-loaded and its artwork settles late, so keep re-aligning
  // for a moment instead of scrolling once against a shifting layout.
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return undefined;
    }

    let frame = 0;
    let attempts = 0;

    const align = () => {
      const target = document.querySelector(location.hash);
      if (target) target.scrollIntoView({ behavior: 'auto', block: 'start' });
      if (++attempts < 12) frame = window.setTimeout(align, 80);
    };

    align();
    return () => window.clearTimeout(frame);
  }, [location.pathname, location.hash]);

  useEffect(() => {
    if (!zoomedCapability) return undefined;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setZoomedCapability(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [zoomedCapability]);

  const capabilities = [
    {
      no: '01',
      title: 'Conversation analytics',
      description:
        'Managers can see call volume, captured leads, booked meetings and follow-through from one operating view.',
      icon: BarChart3,
      bullets: ['Call volume and outcomes', 'Lead and booking visibility', 'Exportable management views'],
      image: '/aqionvox-dashboard-overview.png',
    },
    {
      no: '02',
      title: 'Lead qualification',
      description:
        'Every conversation can be categorized, routed and saved with context so sales teams start with a cleaner record.',
      icon: Users,
      bullets: ['Intent and contact capture', 'CRM-ready handoff', 'Follow-up context retained'],
      image: '/aqionvox-dashboard-leads.png',
    },
    {
      no: '03',
      title: 'Call transcripts and oversight',
      description:
        'Transcripts, summaries and handoff context help teams audit calls, improve service quality and escalate when needed.',
      icon: MessageSquare,
      bullets: ['Transcript history', 'AI call summaries', 'Human escalation context'],
      image: '/aqionvox-dashboard-transcripts.png',
    },
    {
      no: '04',
      title: 'Bookings and follow-through',
      description:
        'AQION VOX can move from conversation to action by booking meetings, confirming next steps and notifying your team.',
      icon: Video,
      bullets: ['Calendar coordination', 'Next-step reminders', 'Automatic post-call summaries'],
      image: '/aqionvox-dashboard-meetings.png',
    },
    {
      no: '05',
      title: 'Email updates',
      description:
        'Add recipients in the dashboard so call summaries, transcripts and lead details reach the right team after a conversation.',
      icon: Mail,
      bullets: ['Instant call-summary emails', 'Daily analytics digest', 'Hot-lead priority alerts'],
      image: '/aqionvox-dashboard-email-updates.png',
    },
  ];

  return (
    <div className="mesh-bg text-ink overflow-x-hidden font-sans relative min-h-screen">
      {/* HERO — centered, inspired by V1 */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-[#FAF7F2] md:min-h-screen">
        {/* The wave rides with the handset inside VoxStage, so the hero itself
            carries only the wash and grid. */}
        <div aria-hidden className="absolute inset-0 z-[2] bg-gradient-to-b from-bone/95 via-bone/72 to-bone/94" />
        <div aria-hidden className="absolute inset-0 bg-hairline-grid" />

        <div id="live-demo" className="relative z-10 mx-auto w-full max-w-7xl scroll-mt-24 px-6 py-20 pt-32 md:py-28 md:pt-36">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-petrol/30 bg-petrol/8 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-petrol md:text-[12px] md:tracking-[0.18em]">
              <span className="w-1.5 h-1.5 rounded-full bg-petrol" />
              Now in Public Beta
            </div>

            {/* Main headline */}
            <h1 className="display-xxl text-[12.5vw] leading-[0.98] tracking-[-0.035em] text-ink sm:text-[8vw] lg:text-[5.2rem] xl:text-[5.8rem]">
              <span className="block">Customer Care,</span>
              <span className="block">
                Now Powered By <span className="display-italic text-petrol">Agentic Voice AI</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-[340px] text-[15px] leading-relaxed text-taupe md:max-w-2xl md:text-lg">
              Experience Aqion Vox, the Agentic Voice AI built by AqionLabs for modern enterprises across the UAE and
              GCC.
            </p>
          </div>

          <div className="mt-14 md:mt-16">
            <VoxStage />
          </div>
        </div>
      </section>

      {/* AQION VOX CRM — banner + live dashboard */}
      <section
        id="live-dashboard"
        className="mobile-section-tight relative z-10 scroll-mt-24 overflow-hidden border-t border-hairline bg-parchment/40 px-5 py-20 sm:px-6 md:py-28"
      >
        <ServiceMotionBackdrop className="opacity-40" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/82 via-bone/62 to-bone/90" />

        <div className="relative z-10 mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-[#0d0d10] px-4 py-10 text-bone shadow-[0_30px_90px_-45px_rgba(28,25,23,0.8)] sm:px-8 sm:py-12 md:rounded-[32px] lg:px-12">
            <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(129,140,248,0.8)_1px,transparent_1px)] bg-[length:20px_20px]" />
            <div aria-hidden className="absolute -right-24 top-1/3 h-72 w-72 rounded-full bg-[#4F46E5]/20 blur-3xl" />

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="eyebrow !text-[#7C7CFF]">[ Aqion Vox CRM ]</p>
              <h2 className="mt-4 font-display text-[2rem] leading-[1.04] tracking-tight text-bone sm:text-[2.75rem]">
                See what happens <span className="display-italic text-[#7C7CFF]">after every call.</span>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-[14.5px] leading-relaxed text-bone/60 sm:text-base">
                Every call the agent takes lands here — the lead it captured, the transcript it kept, and the summary it
                wrote.
              </p>
            </div>

            <div className="relative mt-9 md:mt-11">
              <VoxCRM />
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="aqionvox-live-strip" className="mobile-section-tight bg-petrol text-bone py-14 md:py-16 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(rgba(250,247,242,0.6)_1px,transparent_1px)] bg-[length:22px_22px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow !text-bone/70 mb-4">[ AQION VOX Live ]</p>
            <h2 className="font-display text-[2.65rem] leading-[0.98] tracking-tight text-bone md:text-6xl">
              From <span className="display-italic text-bone/90">hello</span><br />
              to next step.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone/75 md:text-[17px]">
              AQION VOX can capture structured information during the conversation and trigger what should happen next: create a lead, schedule an appointment, notify a team member, update a system or escalate to a person.
            </p>
          </div>
          <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-6 md:grid-cols-3 md:gap-3">
            {demoCapabilities.map((m) => (
              <div key={m.l} className="rounded-2xl border border-bone/20 bg-bone/[0.04] p-4 md:p-4">
                <p className="whitespace-nowrap font-display text-[1.7rem] leading-none text-bone md:text-[1.85rem]">{m.k}</p>
                <p className="mt-2 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.08em] text-bone/70 md:text-[11px]">{m.l}</p>
                <p className="mt-1 whitespace-nowrap text-[10px] leading-snug text-bone/55 md:text-[11px]">{m.s}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="capabilities" className="mobile-section-tight relative overflow-hidden py-24 md:py-32 aqion-platform-bg">
        <div aria-hidden className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/18 to-transparent" />
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/14 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 mb-12 md:mb-20">
            <div className="col-span-12 md:col-span-6">
              <p className="eyebrow mb-4">[ Inside the platform ]</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] text-bone">
                Not a chatbot.<br />
                <span className="display-italic text-white">An AI employee that acts.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-4">
              <p className="mobile-clamp-3 text-bone/70 text-lg leading-relaxed">
                <span className="md:hidden">AQION VOX turns customer calls into qualified leads, booked meetings, summaries and workflow actions.</span>
                <span className="hidden md:inline">AQION VOX turns customer calls into qualified leads, booked meetings, summaries and workflow actions — with the visibility managers need to improve service and conversion.</span>
              </p>
            </div>
          </div>

          <div className="mobile-priority-two space-y-14 md:space-y-28">
            {capabilities.map((cap, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div key={cap.no} className={`grid grid-cols-12 gap-8 items-center ${isEven ? '' : 'md:[direction:rtl] md:[&>*]:[direction:ltr]'}`}>
                  <div className="col-span-12 md:col-span-6">
                    <div className="flex items-center gap-3 mb-5">
                      <span className="font-mono text-xs text-bone/50">{cap.no} /</span>
                      <span className="w-10 h-10 rounded-xl bg-white/[0.07] border border-white/10 flex items-center justify-center text-petrol shadow-[0_0_28px_rgba(79,70,229,0.18)]">
                        <cap.icon className="w-5 h-5" strokeWidth={1.5} />
                      </span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl tracking-tight text-bone leading-[1.02]">
                      {cap.title}
                    </h3>
                    <p className="mobile-clamp-3 mt-4 text-base leading-relaxed text-bone/70 md:mt-5 md:text-lg">
                      <span className="md:hidden">{firstSentence(cap.description)}</span>
                      <span className="hidden md:inline">{cap.description}</span>
                    </p>
                    <ul className="mobile-priority-two mt-5 space-y-2.5 md:mt-7">
                      {cap.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-3 text-sm text-bone/75">
                          <span className="w-5 h-5 rounded-full bg-white/[0.07] border border-white/10 flex items-center justify-center">
                            <Check className="w-3 h-3 text-petrol" strokeWidth={3} />
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <button
                      type="button"
                      onClick={() => setZoomedCapability({ title: cap.title, image: cap.image })}
                      className="group relative block w-full cursor-pointer overflow-hidden rounded-3xl border border-white/12 bg-white/[0.06] p-3 text-left shadow-[0_24px_90px_-28px_rgba(0,0,0,0.82)] transition-colors duration-200 hover:border-white/26 focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/60 md:p-4"
                      aria-label={`Zoom ${cap.title} dashboard screenshot`}
                    >
                      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(100,206,251,0.12),transparent_46%)]" />
                      <img src={cap.image} alt={cap.title} className="relative w-full h-auto object-contain rounded-xl" loading="lazy" />
                      <span className="absolute bottom-5 right-5 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white/78 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100">
                        Zoom
                      </span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {zoomedCapability && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/72 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={`${zoomedCapability.title} dashboard preview`}
          onClick={() => setZoomedCapability(null)}
        >
          <div className="relative w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              onClick={() => setZoomedCapability(null)}
              className="absolute -right-2 -top-12 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/12 text-white transition-colors duration-200 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/60 md:-right-4"
              aria-label="Close dashboard preview"
            >
              <X size={20} />
            </button>
            <img
              src={zoomedCapability.image}
              alt={zoomedCapability.title}
              className="max-h-[84vh] w-full rounded-2xl border border-white/16 bg-white object-contain shadow-[0_28px_120px_-36px_rgba(0,0,0,0.9)]"
            />
          </div>
        </div>
      )}

      {/* COMPLIANCE / DIFFERENTIATORS */}
      <section className="mobile-section-tight py-24 md:py-32 bg-paper border-y border-hairline">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-12 gap-6 mb-12">
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-4">[ Why UAE enterprises trust AQION VOX ]</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Built for <span className="display-italic">regulated</span><br />industries — by default.
              </h2>
            </div>
          </div>
          <div className="mobile-priority-two grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
            {[
              { icon: ShieldCheck, t: 'UAE data-residency options', b: 'UAE deployment options for supported workloads, enterprise controls and a sovereign-AI roadmap.' },
              { icon: Languages, t: 'Arabic and English workflows', b: 'Designed for regional conversations, multilingual intake and clear escalation rules.' },
              { icon: Workflow, t: 'Human oversight by default', b: 'Define approvals, escalation rules and boundaries for sensitive decisions.' },
              { icon: Headphones, t: 'White-glove ops', b: 'Named UAE-based engineers run 24/7 alongside your team.' },
            ].map((f) => (
              <div key={f.t} className="bg-bone p-6 md:p-8">
                <span className="w-11 h-11 rounded-xl bg-parchment border border-hairline flex items-center justify-center text-petrol mb-6">
                  <f.icon strokeWidth={1.5} className="w-5 h-5" />
                </span>
                <h3 className="font-display text-xl text-ink mb-2">{f.t}</h3>
                <p className="mobile-clamp-2 text-sm text-taupe leading-relaxed">{f.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-section-tight py-24 md:py-32 max-w-7xl mx-auto px-6">
        <div className="rounded-3xl bg-petrol text-bone p-6 md:p-16 grid grid-cols-12 gap-6 items-end relative overflow-hidden">
          <div aria-hidden className="absolute -bottom-32 -left-20 w-[28rem] h-[28rem] rounded-full bg-bone/10 blur-3xl" />
          <div className="col-span-12 md:col-span-7 relative">
            <p className="eyebrow !text-bone/70 mb-4">[ Start with one workflow ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] text-bone">
              Hear AQION VOX<br /><span className="display-italic text-bone/90">handle your first workflow.</span>
            </h2>
            <p className="mobile-clamp-3 mt-5 text-bone/75 text-base max-w-xl md:mt-6 md:text-lg">
              Start with one high-volume customer conversation. We scope the knowledge, integrations, handoff rules and dashboard view needed before production launch.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:justify-end flex flex-col sm:flex-row gap-3 relative">
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] px-7 py-4 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Book a VOX demo
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AqionVox;
