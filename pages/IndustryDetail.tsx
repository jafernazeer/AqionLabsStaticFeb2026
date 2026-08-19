import React, { useEffect } from 'react';
import { IndustryPageData, PageType } from '../types';
import {
  ArrowRight,
  Bot,
  Building2,
  Check,
  CheckCircle,
  Clapperboard,
  CreditCard,
  DraftingCompass,
  GraduationCap,
  Hotel,
  Landmark,
  Megaphone,
  Scale,
  Server,
  Shield,
  ShoppingBag,
  Stethoscope,
  Truck,
  Workflow,
  type LucideIcon,
} from 'lucide-react';
import { IndustryMotionBackdrop, ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';

interface IndustryDetailProps {
  data: IndustryPageData;
  onNavigate: (page: PageType, scrollToDemo?: boolean) => void;
}

const iconMap: Record<string, LucideIcon> = {
  Healthcare: Stethoscope,
  'Real Estate': Building2,
  Education: GraduationCap,
  Retail: ShoppingBag,
  Government: Landmark,
  'Financial Services': CreditCard,
  Hospitality: Hotel,
  Logistics: Truck,
  'Legal Services': Scale,
  'Media & Events': Clapperboard,
  'Marketing & Design': Megaphone,
  'Architecture & Planning': DraftingCompass,
};

const useCaseContext: Record<string, { headline: string; context: string; signal: string }> = {
  Healthcare: {
    headline: 'Patient access, capacity utilisation and front-desk economics in one AI operating layer.',
    context: 'AqionLabs helps clinics and hospital groups convert every call, WhatsApp message and follow-up into a measurable access workflow. The result is fewer missed bookings, lower administrative load and a cleaner path to scale across UAE care networks.',
    signal: 'Designed for appointment density, multilingual access and audit-ready workflows.',
  },
  'Real Estate': {
    headline: 'Turn fragmented property demand into qualified, routed and revenue-ready buyer pipelines.',
    context: 'AqionLabs gives developers, brokers and property groups an AI layer that responds instantly, qualifies intent, schedules viewings and keeps every lead warm until a human closer is needed.',
    signal: 'Built for off-plan launches, viewing velocity and WhatsApp-first buyer journeys.',
  },
  Education: {
    headline: 'Make admissions, student support and programme enquiries run like a growth engine.',
    context: 'AqionLabs helps schools, universities and training groups respond around the clock, qualify applicants and guide families or students through next steps with consistent, multilingual precision.',
    signal: 'Built for enrolment conversion, counsellor productivity and repeatable admissions operations.',
  },
  Retail: {
    headline: 'Convert commerce conversations into sales, retention and service intelligence.',
    context: 'AqionLabs helps retail operators automate product enquiries, order support, WhatsApp sales and post-purchase flows so service volume becomes a measurable revenue channel.',
    signal: 'Designed for faster replies, higher conversion and lower support cost per order.',
  },
  Government: {
    headline: 'Secure AI service layers for high-volume citizen and resident engagement.',
    context: 'AqionLabs supports public-sector and regulated teams with multilingual AI systems that improve responsiveness while preserving governance, auditability and operational control.',
    signal: 'Built for national digital transformation goals, compliance discipline and service reliability.',
  },
  'Financial Services': {
    headline: 'Compliant customer operations for onboarding, servicing and advisory workflows.',
    context: 'AqionLabs helps financial institutions reduce friction across high-volume enquiries, KYC routing and knowledge access without compromising security or governance.',
    signal: 'Designed for regulated data handling, faster onboarding and executive-grade oversight.',
  },
  Hospitality: {
    headline: 'Always-on guest engagement for bookings, concierge and post-stay revenue.',
    context: 'AqionLabs gives hotels, restaurants and hospitality groups an AI service layer that handles demand spikes, multilingual requests and reservation flows without adding front-desk headcount.',
    signal: 'Built for guest experience, direct booking growth and service consistency.',
  },
  Logistics: {
    headline: 'Real-time shipment communication and exception handling at operational scale.',
    context: 'AqionLabs helps logistics operators automate tracking enquiries, routing updates and internal support so teams spend less time answering status questions and more time resolving exceptions.',
    signal: 'Designed for visibility, response-time reduction and scalable support economics.',
  },
  'Legal Services': {
    headline: 'Client intake, knowledge retrieval and matter workflows without administrative drag.',
    context: 'AqionLabs helps legal and professional firms qualify enquiries, structure intake, surface internal knowledge and automate routine coordination while keeping human experts focused on judgment.',
    signal: 'Built for faster client response, secure knowledge access and partner leverage.',
  },
  'Media & Events': {
    headline: 'AI engagement infrastructure for ticketing spikes, attendee support and sponsor operations.',
    context: 'AqionLabs helps event and media operators absorb demand surges across voice and WhatsApp while keeping schedules, FAQs, refunds and attendee updates coordinated.',
    signal: 'Designed for peak-volume resilience, fan experience and post-event data capture.',
  },
  'Marketing & Design': {
    headline: 'Lead response, proposal workflows and campaign operations for faster agency growth.',
    context: 'AqionLabs helps creative and marketing teams convert inbound demand faster, automate client onboarding and reduce the coordination burden around proposals, approvals and reporting.',
    signal: 'Built for pipeline discipline, delivery speed and scalable client operations.',
  },
  'Architecture & Planning': {
    headline: 'Project intake, technical knowledge and approval workflows for design-led firms.',
    context: 'AqionLabs helps architecture and planning firms qualify opportunities, manage documentation and coordinate approvals while preserving the premium client experience expected from senior design teams.',
    signal: 'Designed for RFP velocity, project visibility and reduced administrative load.',
  },
};

const solutionGroups = [
  { key: 'aqionVox', title: 'Aqion Vox growth layer', icon: Bot },
  { key: 'aiAutomation', title: 'Automation backbone', icon: Workflow },
  { key: 'enterpriseAi', title: 'Enterprise intelligence', icon: Server },
  { key: 'governance', title: 'Governance controls', icon: Shield },
] as const;

const industryMotionAssets: Record<string, string> = {
  Healthcare: '/industryhero.svg',
  Retail: '/industryhero.svg',
  Government: '/industryhero.svg',
  Logistics: '/industryhero.svg',
  'Real Estate': '/industryhero2.svg',
  'Financial Services': '/industryhero2.svg',
  'Legal Services': '/industryhero2.svg',
  'Architecture & Planning': '/industryhero2.svg',
  Education: 'service-motion',
  Hospitality: 'service-motion',
  'Media & Events': 'service-motion',
  'Marketing & Design': 'service-motion',
};

const IndustryDetail: React.FC<IndustryDetailProps> = ({ data, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const HeroIcon = iconMap[data.title] || Building2;
  const industryMotionAsset = industryMotionAssets[data.title] || '/industryhero.svg';
  const useServiceMotion = industryMotionAsset === 'service-motion';
  const copy = useCaseContext[data.title] || {
    headline: data.headline,
    context: data.context,
    signal: 'Designed for measurable growth, stronger operations and clearer visibility.',
  };
  const compactContext = copy.context.match(/^.*?[.!?](?:\s|$)/)?.[0]?.trim() || copy.context;

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden pt-20 font-sans text-ink">
      <section className="mobile-section-tight relative z-10 flex min-h-0 items-center overflow-hidden border-b border-hairline mesh-bg py-20 md:min-h-[calc(100vh-5rem)]">
        {useServiceMotion ? (
          <ServiceMotionBackdrop className="opacity-70 mobile-visual-reduce" />
        ) : (
          <IndustryMotionBackdrop src={industryMotionAsset} className="mobile-visual-reduce opacity-[0.55]" />
        )}
        <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/88 via-bone/72 to-bone/94" />
        <div aria-hidden className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[110px]" />

        <div className="relative mx-auto flex w-full min-w-0 max-w-7xl flex-col items-center px-5 sm:px-6 md:grid md:grid-cols-12 md:gap-10">
          <div className="mobile-page-center col-span-12 lg:col-span-7 lg:text-left">
            <p className="eyebrow mb-5">[ Industry playbook ]</p>
            <h1 className="mobile-heading font-display text-[2.7rem] leading-[0.98] tracking-tight text-ink md:text-7xl">
              {data.title}<br />
              <span className="display-italic text-petrol">AI operating model.</span>
            </h1>
            <p className="mobile-copy-measure mt-5 max-w-2xl font-display text-lg leading-[1.22] tracking-tight text-graphite md:mt-7 md:text-3xl lg:mx-0">
              {copy.headline}
            </p>
            <p className="mobile-copy-measure mt-4 text-[15px] leading-relaxed text-taupe md:hidden">{compactContext}</p>
            <p className="mt-6 hidden max-w-2xl text-lg leading-relaxed text-taupe md:block">{copy.context}</p>
            <div className="mobile-center-row mt-7 flex flex-col gap-3 sm:flex-row md:mt-8 lg:justify-start">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="mobile-action inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-petrolDeep sm:w-auto"
              >
                Discuss this vertical <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX, true)}
                className="mobile-action inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-hairline bg-paper px-7 py-4 text-sm font-medium text-ink transition-colors hover:border-ink/30 sm:w-auto"
              >
                Try Aqion Vox demo
              </button>
            </div>
          </div>

          <div className="mobile-decorative-hide col-span-12 lg:col-span-5 md:block">
            <div className="relative mx-auto flex h-72 w-72 items-center justify-center rounded-[36px] border border-hairline bg-white/72 shadow-[0_28px_80px_-36px_rgba(28,25,23,0.35)] backdrop-blur-md md:h-96 md:w-96">
              <div className="absolute inset-4 rounded-[28px] border border-white/70 bg-gradient-to-br from-white via-[#f7f4ef] to-[#ece7dc]" />
              <div className="absolute -inset-8 rounded-full bg-petrol/12 blur-3xl" />
              <HeroIcon className="relative h-32 w-32 text-petrol drop-shadow-[0_18px_24px_rgba(79,70,229,0.18)] md:h-40 md:w-40" strokeWidth={1.1} />
            </div>
          </div>
        </div>
      </section>

      {/* Item 10: market-pressure section on black */}
      <section className="mobile-section-tight relative z-10 bg-[#0d0d10] py-20 text-bone md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-12 gap-6">
            <div className="mobile-page-center col-span-12 md:col-span-5 md:text-left">
              <p className="eyebrow mb-4 !text-[#a5b4fc]">[ Market pressure ]</p>
              <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight text-bone md:text-6xl">
                Where growth<br />
                <span className="display-italic text-bone/90">leaks today.</span>
              </h2>
            </div>
            <div className="mobile-page-center col-span-12 md:col-span-6 md:col-start-7 md:pt-4 md:text-left">
              <p className="mobile-copy-measure text-[15px] leading-relaxed text-bone/72 md:hidden">
                We remove the response, conversion and operating gaps that hold growth back.
              </p>
              <p className="hidden text-lg leading-relaxed text-bone/72 md:block">
                AI works when it improves the operating rhythm: faster response, clearer conversion, lower cost-to-serve and cleaner data visibility. These are the pressure points we remove first.
              </p>
            </div>
          </div>

          <div className="mt-9 rounded-[28px] border border-white/10 bg-white/[0.04] p-4 md:mt-12 md:p-7">
            <div className="mobile-priority-grid flex flex-wrap justify-center gap-3">
            {data.challenges.map((challenge, idx) => (
              <div key={challenge} className="mobile-card-center mobile-card-compact w-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 sm:w-[calc(50%-0.375rem)] md:text-left lg:w-[calc(33.333%-0.5rem)]">
                <span className="font-mono text-xs text-[#a5b4fc]">{String(idx + 1).padStart(2, '0')} /</span>
                <p className="mt-3 font-display text-xl leading-tight text-bone md:mt-4">{challenge}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
      </section>

      {/* Item 11: AI layer + outcomes combined, side by side, beige background */}
      <section className="mobile-section-tight relative z-10 bg-parchment/60 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-6">
          <div className="grid grid-cols-12 gap-10 lg:gap-8">
            <div className="col-span-12 lg:col-span-6">
              <p className="eyebrow mb-4">[ Deployment stack ]</p>
              <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight text-ink md:text-5xl">
                The AI layer<br />
                <span className="display-italic text-petrol">behind the outcome.</span>
              </h2>

              <div className="mobile-priority-two mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {solutionGroups.map(({ key, title, icon: Icon }) => {
                  const items = data.solutions[key];
                  if (!items?.length) return null;
                  return (
                    <div key={key} className="mobile-card-center mobile-card-compact rounded-[28px] border border-hairline bg-paper/82 p-6 shadow-[0_24px_70px_-45px_rgba(28,25,23,0.28)] backdrop-blur md:text-left">
                      <div className="mobile-center-row mb-4 flex items-center gap-3 md:justify-start md:text-left">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-hairline bg-parchment text-petrol">
                          <Icon className="h-5 w-5" strokeWidth={1.5} />
                        </span>
                        <h3 className="font-display text-xl text-ink">{title}</h3>
                      </div>
                      <div className="mobile-priority-two grid gap-2.5">
                        {items.map((item) => (
                          <div key={item} className="mobile-center-row flex items-center gap-2 text-sm leading-relaxed text-graphite md:items-start md:justify-start md:text-left">
                            <Check className="h-4 w-4 shrink-0 text-petrol md:mt-0.5" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6">
              <p className="eyebrow mb-4">[ Operating outcomes ]</p>
              <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight text-ink md:text-5xl">
                What changes<br />
                <span className="display-italic text-petrol">after deployment.</span>
              </h2>

              <div className="mt-8 divide-y divide-hairline/70 border-t border-hairline/70">
                {data.outcome.map((outcome) => (
                  <div key={outcome} className="mobile-center-row flex items-center gap-4 py-5 md:justify-start md:text-left">
                    <CheckCircle className="h-6 w-6 shrink-0 text-petrol" strokeWidth={1.5} />
                    <p className="font-display text-xl leading-tight text-ink">{outcome}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mobile-section-tight relative z-10 mx-auto max-w-7xl px-5 pb-24 sm:px-6">
        <div className="mobile-card-center rounded-3xl bg-petrol p-6 text-bone md:p-14 md:text-left">
          <p className="eyebrow !text-white/70 mb-4">[ Next step ]</p>
          <div className="grid grid-cols-12 gap-6 items-end">
            <h2 className="mobile-subheading col-span-12 font-display text-4xl leading-[1.02] tracking-tight md:col-span-7 md:text-6xl">
              Build the operating case for<br />
              <span className="display-italic">AI in {data.title}.</span>
            </h2>
            <div className="col-span-12 md:col-span-5 md:flex md:justify-end">
              <button
                onClick={() => onNavigate(PageType.CONTACT)}
                className="mobile-action inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-bone px-7 py-4 text-sm font-medium text-petrol transition-colors hover:bg-parchment md:w-auto"
              >
                Request strategy session <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IndustryDetail;
