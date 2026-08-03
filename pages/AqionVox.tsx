import React, { useEffect, useState } from 'react';
import { PageType } from '../types';
import { useLocation } from 'react-router-dom';
import LiveDemoSection from '../components/LiveDemoSection';
import OptimizedHeroMotion from '../components/OptimizedHeroMotion';
import {
  ArrowUpRight, Check, Play, BarChart3, Users, MessageSquare, Video, Smartphone,
  ShieldCheck, Languages, Headphones, Workflow, X
} from 'lucide-react';

interface AqionVoxProps {
  onNavigate: (page: PageType) => void;
}

const firstSentence = (text: string) => text.match(/.*?[.!?](?:\s|$)/)?.[0].trim() ?? text;

const demoCapabilities = [
  { k: '680ms', l: 'Avg Response', s: 'target under 800ms' },
  { k: '2', l: 'Languages', s: 'English + Arabic' },
  { k: '12', l: 'Industries', s: 'ready-made playbooks' },
  { k: '24/7', l: 'Availability', s: 'voice + WhatsApp' },
  { k: '93%', l: 'self-serve resolution', s: 'across deployments' },
  { k: 'AED 1.40', l: 'cost per call', s: 'vs. AED 28 human avg' },
];

const AqionVox: React.FC<AqionVoxProps> = ({ onNavigate }) => {
  const location = useLocation();
  const [zoomedCapability, setZoomedCapability] = useState<{ title: string; image: string } | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

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
      title: 'Boardroom-grade analytics',
      description:
        'A single pane for volume, sentiment, latency, conversion and cost-per-resolution across every agent and channel. Drill from a CFO dashboard to a single utterance in two clicks.',
      icon: BarChart3,
      bullets: ['Cost-per-resolution by intent', 'Sentiment & escalation triggers', 'Exportable executive views'],
      image: '/overview-light.png',
    },
    {
      no: '02',
      title: 'Lead qualification that earns its seat',
      description:
        'Every conversation is automatically scored, categorised and routed. Sales sees pre-qualified, context-rich leads with full transcripts attached — no copy-paste from a contact form.',
      icon: Users,
      bullets: ['Intent + budget scoring', 'CRM hand-off (Salesforce, HubSpot, Zoho)', 'Recovery flows for cold leads'],
      image: '/leads-light.png',
    },
    {
      no: '03',
      title: 'Real-time conversation oversight',
      description:
        'Live transcripts, on-screen whisper coaching, and one-click human takeover. Audit any call in seconds — useful for compliance, useful for QA, indispensable for the regulator.',
      icon: MessageSquare,
      bullets: ['Live transcript + sentiment', 'Whisper coaching', 'Single-click human takeover'],
      image: '/conversations-light.png',
    },
    {
      no: '04',
      title: 'Booking, payments & follow-through',
      description:
        'AqionVox doesn\'t just talk — it acts. Confirms appointments, takes deposits, sends Emirates ID requests, books site visits, and writes the calendar event for your team.',
      icon: Video,
      bullets: ['Calendar + payment gateway integrations', 'Document & ID capture', 'Automatic post-call summaries'],
      image: '/meetings-light.png',
    },
    {
      no: '05',
      title: 'WhatsApp-first by design',
      description:
        'The UAE customer lives on WhatsApp. AqionVox runs natively as a WhatsApp Business agent — with location, document and media flows that feel native, not retrofitted.',
      icon: Smartphone,
      bullets: ['Meta Business verified', 'Voice notes & location pins', 'Tap-to-call escalation'],
      image: '/whatsapp-light.png',
    },
  ];

  return (
    <div className="mesh-bg text-ink overflow-x-hidden font-sans relative min-h-screen">
      {/* HERO — centered, inspired by V1 */}
      <section className="relative flex min-h-[82vh] items-center justify-center overflow-hidden bg-[#FAF7F2] md:min-h-screen">
        <OptimizedHeroMotion
          kind="image"
          src="/Aqionvoxhero1.svg"
          className="absolute left-1/2 top-[44%] z-[1] h-[164vw] max-h-[1820px] w-[164vw] max-w-[1820px] pointer-events-none overflow-hidden opacity-[0.68] [transform:translate(-50%,-50%)] [translate:none] [backface-visibility:hidden] [contain:layout_paint_size] md:top-[59%] md:h-[98vw] md:max-h-[980px] md:w-[98vw] md:max-w-[980px] lg:top-[60%] lg:h-[69vw] lg:max-h-[980px] lg:w-[69vw] lg:max-w-[980px]"
          mediaClassName="h-full w-full object-contain"
          mediaStyle={{ transform: 'translateZ(0)' }}
        />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/84 via-bone/58 to-bone/92" />
        <div aria-hidden className="absolute inset-0 bg-hairline-grid opacity-24" />

        <div className="relative z-10 flex w-full max-w-6xl flex-col items-center px-6 py-20 pt-32 text-center md:py-32 md:pt-40">
          {/* Badge */}
          <div className="mb-5 inline-flex -translate-y-5 items-center gap-2 rounded-full border border-petrol/30 bg-petrol/8 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.16em] text-petrol md:mb-10 md:translate-y-0 md:text-[12px] md:tracking-[0.18em]">
            <span className="w-1.5 h-1.5 rounded-full bg-petrol" />
            Now in Public Beta
          </div>

          {/* Main headline */}
          <h1 className="display-xxl text-[16.5vw] leading-[0.9] tracking-[-0.04em] text-ink md:text-[11.8vw] lg:text-[10.5rem]">
            <span className="mb-2 block md:mb-0 md:mr-[0.08em] md:inline">Meet</span>
            <span className="display-italic block text-petrol md:inline">AqionVox</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 max-w-[272px] font-display text-lg leading-[1.25] tracking-tight text-graphite md:mt-7 md:max-w-none md:text-[2.1rem] lg:text-[2.75rem]">
            The AI That Picks Up the Phone <span className="font-display text-ink">24/7</span>
          </p>

          {/* Feature line */}
          <p className="mt-5 max-w-[312px] text-[15px] leading-relaxed text-taupe md:mt-7 md:max-w-3xl md:text-xl">
            <span className="block">Voice calls, WhatsApp messaging, lead management, and Analytics</span>
            <strong className="mt-3 block font-semibold text-ink">All under one AI-native CRM</strong>
          </p>

          {/* CTAs */}
          <div className="mt-14 flex translate-y-4 flex-col items-center justify-center gap-3 sm:flex-row md:mt-10 md:translate-y-0">
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="group inline-flex items-center justify-center gap-2 bg-ink text-bone px-8 py-4 rounded-full text-base font-medium hover:bg-petrolDeep transition-colors cursor-pointer min-w-[160px]"
            >
              Book Demo
              <ArrowUpRight className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
            <a
              href="#live-demo"
              className="inline-flex items-center justify-center gap-2 bg-paper text-ink border border-hairline px-8 py-4 rounded-full text-base font-medium hover:border-ink/40 transition-colors cursor-pointer min-w-[160px]"
            >
              <Play className="w-4 h-4" />
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="aqionvox-live-strip" className="mobile-section-tight bg-petrol text-bone py-14 md:py-16 relative overflow-hidden">
        <div aria-hidden className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(rgba(250,247,242,0.6)_1px,transparent_1px)] bg-[length:22px_22px]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-12 items-center gap-8 px-6 md:gap-10">
          <div className="col-span-12 md:col-span-6">
            <p className="eyebrow !text-bone/70 mb-4">[ AqionVox Live ]</p>
            <h2 className="font-display text-[2.65rem] leading-[0.98] tracking-tight text-bone md:text-6xl">
              Your <span className="display-italic text-bone/90">best agent</span>,<br />
              cloned 10,000 times.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone/75 md:text-[17px]">
              AqionVox learns your products and processes, then answers calls and WhatsApp messages with the same tone, timing and handoff quality as your strongest team member.
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

      <section className="mesh-bg relative z-10 py-0 md:py-10">
        <LiveDemoSection />
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
                <span className="display-italic text-white">A revenue engine.</span>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 md:pt-4">
              <p className="mobile-clamp-3 text-bone/70 text-lg leading-relaxed">
                <span className="md:hidden">AqionVox replaces the patchwork of IVR, contact-centre, helpdesk and CRM tooling with one AI-native operating layer.</span>
                <span className="hidden md:inline">AqionVox replaces the patchwork of IVR, contact-centre, helpdesk and CRM tooling with one AI-native operating layer — and gives your COO a single number to defend in the boardroom.</span>
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
                  <div className="mobile-visual-hide col-span-12 md:col-span-6">
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
              <p className="eyebrow mb-4">[ Why UAE enterprises trust AqionVox ]</p>
              <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02]">
                Built for <span className="display-italic">regulated</span><br />industries — by default.
              </h2>
            </div>
          </div>
          <div className="mobile-priority-two grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
            {[
              { icon: ShieldCheck, t: 'UAE data residency', b: 'Hosted in AWS Bahrain / Azure UAE Central. No data leaves the GCC.' },
              { icon: Languages, t: 'Arabic-first models', b: 'Tuned for Khaleeji, MSA, Levantine and Egyptian. Code-switching native.' },
              { icon: Workflow, t: 'Outcome-tied pricing', b: 'A share of our fees moves only when your CSAT, AHT or conversion does.' },
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
            <p className="eyebrow !text-bone/70 mb-4">[ Pilot in 21 days ]</p>
            <h2 className="font-display text-4xl md:text-6xl tracking-tight leading-[1.02] text-bone">
              Hear AqionVox<br /><span className="display-italic text-bone/90">handle your toughest call.</span>
            </h2>
            <p className="mobile-clamp-3 mt-5 text-bone/75 text-base max-w-xl md:mt-6 md:text-lg">
              Send us 30 of your real (anonymised) transcripts. In three weeks we'll come back with a live voice agent answering those exact calls — at a fixed price, on your numbers.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5 md:flex md:justify-end flex flex-col sm:flex-row gap-3 relative">
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="inline-flex items-center justify-center gap-2 bg-bone text-petrol px-7 py-4 rounded-full text-sm font-medium hover:bg-parchment transition-colors cursor-pointer"
            >
              Start a 21-day pilot
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AqionVox;
