import React, { useEffect } from 'react';
import { PageType } from '../types';
import { WaveBackdrop } from '../components/OptimizedHeroMotion';
import {
  ArrowRight,
  Building,
  Coffee,
  GraduationCap,
  Landmark,
  Scale,
  Stethoscope,
  type LucideIcon,
} from 'lucide-react';

interface IndustriesProps {
  onNavigate: (page: PageType) => void;
}

type IndustryCard = {
  name: string;
  eyebrow: string;
  description: string;
  page: PageType;
  icon: LucideIcon;
};

const industries: IndustryCard[] = [
  {
    name: 'Healthcare',
    eyebrow: 'Patient access',
    description: 'Appointment booking, front-desk automation, patient follow-up and multilingual call handling.',
    page: PageType.INDUSTRY_HEALTHCARE,
    icon: Stethoscope,
  },
  {
    name: 'Real Estate',
    eyebrow: 'Lead conversion',
    description: 'Property enquiry qualification, viewing scheduling, WhatsApp follow-up and agent routing.',
    page: PageType.INDUSTRY_REAL_ESTATE,
    icon: Building,
  },
  {
    name: 'Financial Services',
    eyebrow: 'Secure servicing',
    description: 'Customer onboarding, advisory workflows, compliant knowledge access and service automation.',
    page: PageType.INDUSTRY_FINANCE,
    icon: Landmark,
  },
  {
    name: 'Education',
    eyebrow: 'Admissions',
    description: 'Student enquiries, programme qualification, admissions coordination and support assistants.',
    page: PageType.INDUSTRY_EDUCATION,
    icon: GraduationCap,
  },
  {
    name: 'Hospitality',
    eyebrow: 'Guest experience',
    description: 'Booking support, concierge requests, guest updates and direct reservation workflows.',
    page: PageType.INDUSTRY_HOSPITALITY,
    icon: Coffee,
  },
  {
    name: 'Legal & Professional',
    eyebrow: 'Client intake',
    description: 'Matter screening, consultation booking, knowledge retrieval and document workflow support.',
    page: PageType.INDUSTRY_PROFESSIONAL,
    icon: Scale,
  },
];

const Industries: React.FC<IndustriesProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden pt-20 font-sans text-ink">
      <section className="mobile-section-tight mesh-bg relative flex min-h-0 items-center overflow-hidden border-b border-hairline px-5 py-16 sm:px-6 md:min-h-[82vh] md:py-28">
        <WaveBackdrop className="opacity-70" />
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/84 via-bone/66 to-bone/92" />
        <div aria-hidden className="absolute inset-0 bg-hairline-grid opacity-25" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[130px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-12 items-end gap-8">
          <div className="mobile-page-center col-span-12 lg:col-span-7 lg:text-left">
            <p className="eyebrow mb-5">[ Industries ]</p>
            <h1 className="mobile-heading font-display text-[3rem] leading-[0.98] tracking-tight text-ink md:text-7xl">
              Twelve verticals.<br />
              <span className="display-italic text-petrol">One AI operating layer.</span>
            </h1>
          </div>
          <div className="mobile-page-center col-span-12 lg:col-span-5 lg:pb-2 lg:text-left">
            <p className="mobile-copy-measure max-w-xl text-base leading-relaxed text-graphite md:text-lg">
              Explore the sectors where AQION deploys AI employees and industry workflows that respond faster, convert cleaner and scale with control — connected to the systems your teams already use.
            </p>
          </div>
        </div>
      </section>

      <section className="mobile-section-tight mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="mobile-page-center md:mx-0 md:text-left">
            <p className="eyebrow mb-3">[ Directory ]</p>
            <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
              Choose a vertical.
            </h2>
          </div>
          <p className="mobile-copy-measure max-w-md text-sm leading-relaxed text-taupe md:text-base md:mx-0 md:text-left">
            Each page maps the use case, pressure points, AI stack and outcomes for that industry.
          </p>
        </div>

        <div className="mobile-priority-grid grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, index) => (
            <button
              key={industry.name}
              type="button"
              onClick={() => onNavigate(industry.page)}
              className="group mobile-card-center mobile-card-compact min-h-[190px] cursor-pointer rounded-[26px] border border-hairline bg-paper p-6 text-left shadow-[0_18px_60px_-48px_rgba(28,25,23,0.35)] transition-colors duration-200 hover:border-ink/30 hover:bg-white focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/35 md:min-h-[210px] md:text-left"
            >
              <div className="mb-6 flex items-start justify-between gap-4 md:mb-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-hairline bg-parchment text-petrol transition-colors group-hover:border-[#4f46e5]/30 group-hover:bg-[#4f46e5]/10">
                  <industry.icon className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <span className="font-mono text-xs text-ash">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#4f46e5]">{industry.eyebrow}</p>
              <div className="mobile-center-row mt-3 flex items-start justify-between gap-4 md:justify-between md:text-left">
                <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">{industry.name}</h3>
                <ArrowRight className="mt-1 h-5 w-5 shrink-0 text-ash transition-transform duration-200 group-hover:translate-x-1 group-hover:text-petrol" />
              </div>
              <p className="mobile-copy-measure mt-4 text-sm leading-relaxed text-taupe md:text-[15px] md:mx-0 md:text-left">{industry.description}</p>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Industries;
