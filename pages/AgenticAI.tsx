import React, { useEffect } from 'react';
import { PageType } from '../types';
import {
  ArrowUpRight,
  Brain,
  Briefcase,
  Headphones,
  Receipt,
  Share2,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react';

interface AgenticAIProps {
  onNavigate: (page: PageType) => void;
}

const agents = [
  {
    no: '01',
    category: 'Customer Agents',
    name: 'Aqion Engage',
    body: 'Voice, WhatsApp and web — in Arabic and English. Answers every call, qualifies the lead and books the meeting, around the clock.',
    icon: Headphones,
    href: '/products/aqion-voice',
    live: true,
  },
  {
    no: '02',
    category: 'Knowledge Agents',
    name: 'Aqion Brain',
    body: 'Your company chatbot and knowledge base. Every policy, SOP and document — answered in seconds, not three emails.',
    icon: Brain,
  },
  {
    no: '03',
    category: 'Executive AI',
    name: 'Aqion Chief',
    body: 'An assistant for owners and senior management. Briefings, decisions and follow-through, with the full context of the business behind it.',
    icon: Briefcase,
  },
  {
    no: '04',
    category: 'Workforce Agents',
    name: 'Aqion Desk',
    body: 'Internal tickets, job confirmations and site operations — routed, chased and closed without anyone rekeying a thing.',
    icon: ShieldCheck,
  },
  {
    no: '05',
    category: 'Procurement Agents',
    name: 'Aqion Procure',
    body: 'Sell side: respond to RFQs and tenders. Buy side: supplier sourcing and PO routing. Both directions, same agent.',
    icon: ShoppingCart,
  },
  {
    no: '06',
    category: 'Finance & Back-Office',
    name: 'Aqion Ledger',
    body: 'Collections, document handling and e-invoicing readiness — the back office that reconciles itself.',
    icon: Receipt,
  },
  {
    no: '07',
    category: 'Content Agents',
    name: 'Aqion Social',
    body: 'Social, video and LinkedIn automation — with a human approval loop before anything ships.',
    icon: Share2,
  },
];

const AgenticAI: React.FC<AgenticAIProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg text-ink font-sans">
      {/* HERO */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-6 md:pb-24 md:pt-40">
        <div className="grid grid-cols-12 gap-6">
          <div className="mobile-page-center col-span-12 md:col-span-7 md:text-left">
            <p className="eyebrow mb-4">[ Agentic AI ]</p>
            <h1 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-7xl">
              Seven agents.<br />
              <span className="display-italic">One operating partner.</span>
            </h1>
          </div>
          <div className="mobile-page-center col-span-12 md:col-span-5 md:pt-6 md:text-left">
            <p className="mobile-copy-measure text-[15px] leading-relaxed text-graphite md:text-lg">
              Each agent owns a function the way a good hire would — with the context, the access and the judgment to finish the job. Together they run the business.
            </p>
          </div>
        </div>
      </section>

      {/* AGENT LIST */}
      <section className="mobile-section-tight bg-[#0d0d10] py-24 text-bone md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="mobile-priority-list border-t border-bone/15">
            {agents.map((a) => {
              const Icon = a.icon;
              const inner = (
                <>
                  <span className="col-span-12 font-mono text-xs text-bone/50 transition-colors group-hover:text-[#4F46E5] md:col-span-1 md:pt-2">
                    {a.no}
                  </span>
                  <div className="col-span-12 min-w-0 md:col-span-4">
                    <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">
                      {a.category}
                    </p>
                    <h2 className="flex items-center gap-3 whitespace-normal break-words font-display text-[1.45rem] leading-tight tracking-tight text-bone transition-colors duration-200 group-hover:text-[#4F46E5] md:text-4xl">
                      {a.name}
                      {a.live && (
                        <span className="rounded-full border border-[#4F46E5]/40 bg-[#4F46E5]/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.14em] text-[#a5b4fc]">
                          Live
                        </span>
                      )}
                    </h2>
                  </div>
                  <p className="col-span-12 min-w-0 break-words text-sm leading-relaxed text-bone/70 md:col-span-6 md:text-base">
                    {a.body}
                  </p>
                  <span className="col-span-12 flex pt-2 md:col-span-1 md:justify-end">
                    {a.href ? (
                      <ArrowUpRight className="h-5 w-5 text-bone/60 transition-all group-hover:rotate-12 group-hover:text-[#4F46E5]" />
                    ) : (
                      <Icon className="h-5 w-5 text-bone/35" strokeWidth={1.5} />
                    )}
                  </span>
                </>
              );

              const cls =
                'group grid w-full grid-cols-12 items-baseline gap-4 rounded-md border-b border-bone/15 px-2 py-6 text-left transition-colors hover:bg-white/[0.04] md:gap-6 md:py-8';

              return a.href ? (
                <a key={a.no} href={a.href} className={`${cls} cursor-pointer`}>
                  {inner}
                </a>
              ) : (
                <div key={a.no} className={cls}>
                  {inner}
                </div>
              );
            })}
          </div>

          {/* SOVEREIGN TRUST STRIP */}
          <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 rounded-2xl border border-bone/15 bg-white/[0.03] px-6 py-5 font-mono text-[11px] uppercase tracking-[0.08em] text-bone/60">
            <span className="text-[#a5b4fc]">Sovereign by default</span>
            <span>Data resident in me-central-1</span>
            <span className="hidden h-1 w-1 rounded-full bg-bone/30 md:inline-block" />
            <span>Your choice of inference</span>
            <span className="hidden h-1 w-1 rounded-full bg-bone/30 md:inline-block" />
            <span>Open frameworks, no lock-in</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-24 sm:px-6 md:py-32">
        <div className="mobile-page-center rounded-[34px] border border-hairline bg-white/74 p-10 shadow-[0_28px_90px_-42px_rgba(28,25,23,0.35)] backdrop-blur-md md:p-16 md:text-left">
          <p className="eyebrow mb-4">[ Start somewhere real ]</p>
          <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
            Talk to Aqion Engage<br />
            <span className="display-italic">before you buy anything.</span>
          </h2>
          <p className="mobile-copy-measure mt-5 max-w-2xl text-[15px] leading-relaxed text-graphite md:text-lg">
            The fastest way to judge an agent is to make it answer. Call the live one, then decide.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row md:justify-start">
            <button
              onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#9333ea] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
            >
              Try Aqion Engage
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => onNavigate(PageType.CONTACT)}
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-graphite transition-all duration-200 hover:-translate-y-px hover:border-[#4f46e5]/40 hover:bg-ink/[0.04] hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f46e5]"
            >
              Book a call
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AgenticAI;
