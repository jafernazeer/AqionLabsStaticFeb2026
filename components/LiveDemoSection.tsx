import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
  Check,
  Clapperboard,
  CreditCard,
  DraftingCompass,
  GraduationCap,
  Hotel,
  Landmark,
  Megaphone,
  MicOff,
  PhoneOff,
  Play,
  Scale,
  ShoppingBag,
  Square,
  Stethoscope,
  Truck,
  Volume2,
  type LucideIcon,
} from 'lucide-react';

type Agent = {
  lang: 'en' | 'ar';
  name: string;
  role: string;
  gender: string;
  tone: string;
};

type Scenario = {
  id: number;
  label: string;
  code: string;
  Icon: LucideIcon;
  latency: number;
  outcome: {
    title: string;
    sub: string;
    steps: { n: string; t: string }[];
  };
};

const scenarios: Scenario[] = [
  { id: 0, label: 'Healthcare', code: 'HC', Icon: Stethoscope, latency: 680, outcome: { title: 'Clinic workflow captured', sub: 'Patient inquiry qualified and booked', steps: [{ n: '1', t: 'Missed call logged' }, { n: '2', t: 'Appointment slot offered' }, { n: '3', t: 'WhatsApp confirmation sent' }] } },
  { id: 1, label: 'Real Estate', code: 'RE', Icon: Building2, latency: 720, outcome: { title: 'Viewing request qualified', sub: 'Lead routed with buyer intent', steps: [{ n: '1', t: 'Inquiry source matched' }, { n: '2', t: 'Budget and location captured' }, { n: '3', t: 'Viewing scheduled' }] } },
  { id: 2, label: 'Financial Services', code: 'FS', Icon: CreditCard, latency: 695, outcome: { title: 'Finance demo prepared', sub: 'Compliance questions answered', steps: [{ n: '1', t: 'Use case verified' }, { n: '2', t: 'Data residency confirmed' }, { n: '3', t: 'Technical call booked' }] } },
  { id: 3, label: 'Government', code: 'GV', Icon: Landmark, latency: 650, outcome: { title: 'Public-sector meeting set', sub: 'Formal handoff created', steps: [{ n: '1', t: 'Citizen-services volume captured' }, { n: '2', t: 'Procurement path noted' }, { n: '3', t: 'Official follow-up queued' }] } },
  { id: 4, label: 'Retail', code: 'RT', Icon: ShoppingBag, latency: 705, outcome: { title: 'Retail support flow built', sub: 'Order and return automation mapped', steps: [{ n: '1', t: 'Order status identified' }, { n: '2', t: 'Return policy explained' }, { n: '3', t: 'CRM note created' }] } },
  { id: 5, label: 'Education', code: 'ED', Icon: GraduationCap, latency: 735, outcome: { title: 'Admissions call handled', sub: 'Student inquiry moved to counsellor', steps: [{ n: '1', t: 'Program interest captured' }, { n: '2', t: 'Eligibility checked' }, { n: '3', t: 'Counsellor slot booked' }] } },
  { id: 6, label: 'Hospitality', code: 'HT', Icon: Hotel, latency: 690, outcome: { title: 'Guest request resolved', sub: 'Booking details confirmed', steps: [{ n: '1', t: 'Guest profile matched' }, { n: '2', t: 'Room preference logged' }, { n: '3', t: 'Confirmation sent' }] } },
  { id: 7, label: 'Logistics', code: 'LG', Icon: Truck, latency: 760, outcome: { title: 'Shipment query closed', sub: 'Delivery status synchronized', steps: [{ n: '1', t: 'AWB number captured' }, { n: '2', t: 'ETA explained' }, { n: '3', t: 'Escalation rule checked' }] } },
  { id: 8, label: 'Legal & Professional', code: 'LP', Icon: Scale, latency: 710, outcome: { title: 'Consultation screened', sub: 'Matter type routed safely', steps: [{ n: '1', t: 'Practice area identified' }, { n: '2', t: 'Conflict check requested' }, { n: '3', t: 'Consultation scheduled' }] } },
  { id: 9, label: 'Media & Events', code: 'ME', Icon: Clapperboard, latency: 725, outcome: { title: 'Event inquiry converted', sub: 'Brief sent to production team', steps: [{ n: '1', t: 'Date and venue captured' }, { n: '2', t: 'Budget range logged' }, { n: '3', t: 'Proposal task created' }] } },
  { id: 10, label: 'Architecture', code: 'AR', Icon: DraftingCompass, latency: 745, outcome: { title: 'Project lead organized', sub: 'Scope routed to design team', steps: [{ n: '1', t: 'Project type captured' }, { n: '2', t: 'Site location noted' }, { n: '3', t: 'Discovery call booked' }] } },
  { id: 11, label: 'Marketing & Design', code: 'MD', Icon: Megaphone, latency: 700, outcome: { title: 'Campaign brief captured', sub: 'Strategy consult booked', steps: [{ n: '1', t: 'Campaign goal captured' }, { n: '2', t: 'Channels identified' }, { n: '3', t: 'Audit call scheduled' }] } },
];

const agents: Agent[] = [
  {
    lang: 'en',
    name: 'Isha',
    role: 'English',
    gender: 'Female',
    tone: 'Consultative',
  },
  {
    lang: 'en',
    name: 'Dev',
    role: 'English',
    gender: 'Male',
    tone: 'Direct',
  },
  {
    lang: 'ar',
    name: 'Amina',
    role: 'Arabic',
    gender: 'Female',
    tone: 'Gulf Arabic',
  },
  {
    lang: 'ar',
    name: 'Nazeer',
    role: 'Arabic',
    gender: 'Male',
    tone: 'Gulf Arabic',
  },
];

const complianceItems = [
  'UAE PDPL',
  'TDRA Compliant WhatsApp API',
  'Enterprise-Grade Security',
  'UAE Data Residency',
];

function IndustryIcon({ Icon, active }: { Icon: LucideIcon; active: boolean }) {
  return (
    <span
      className={`relative mb-1.5 flex h-9 w-9 items-center justify-center rounded-xl transition-colors duration-200 ${
        active
          ? 'bg-gradient-to-br from-[#4F46E5] via-[#6258FF] to-[#9333EA] shadow-[0_14px_26px_-14px_rgba(79,70,229,0.85)]'
          : 'bg-gradient-to-br from-white via-[#F6F1EA] to-[#E8E1D7] shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_13px_24px_-18px_rgba(28,25,23,0.45)] group-hover:from-[#F3F0FF] group-hover:via-white group-hover:to-[#EAE7FF]'
      }`}
      aria-hidden="true"
    >
      <span
        className={`absolute inset-x-1 bottom-0 h-3 rounded-full blur-sm ${
          active ? 'bg-[#201A6F]/35' : 'bg-[#6B6357]/12 group-hover:bg-[#4F46E5]/14'
        }`}
      />
      <span className="absolute inset-[2px] rounded-[10px] border border-white/40" />
      <Icon
        size={18}
        strokeWidth={2.15}
        className={`relative z-10 drop-shadow-sm ${
          active ? 'text-white' : 'text-[#6B6357] group-hover:text-[#4F46E5]'
        }`}
      />
    </span>
  );
}

export default function LiveDemoSection() {
  const [currentScenario, setCurrentScenario] = useState(0);
  const [selectedAgent, setSelectedAgent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [callStatus, setCallStatus] = useState<'Ready' | 'Connected' | 'Call Ended'>('Ready');
  const [callSeconds, setCallSeconds] = useState(0);
  const [showOutcome, setShowOutcome] = useState(false);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const endTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const phoneRef = useRef<HTMLDivElement | null>(null);

  const scenario = scenarios[currentScenario];
  const agent = agents[selectedAgent];

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (endTimerRef.current) clearTimeout(endTimerRef.current);
    timerRef.current = null;
    endTimerRef.current = null;
  };

  const resetState = () => {
    clearTimers();
    setIsPlaying(false);
    setCallStatus('Ready');
    setCallSeconds(0);
    setShowOutcome(false);
  };

  const changeScenario = (idx: number, scrollToPhone = false) => {
    resetState();
    setCurrentScenario(idx);
    setSelectedAgent(0);
    if (scrollToPhone && typeof window !== 'undefined') {
      window.setTimeout(() => {
        phoneRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 80);
    }
  };

  const startDemo = () => {
    resetState();
    setIsPlaying(true);
    setCallStatus('Connected');

    timerRef.current = setInterval(() => {
      setCallSeconds((seconds) => seconds + 1);
    }, 1000);

    endTimerRef.current = setTimeout(() => {
      clearTimers();
      setIsPlaying(false);
      setCallStatus('Call Ended');
      setShowOutcome(true);
    }, 7800);
  };

  const stopDemo = () => {
    clearTimers();
    setIsPlaying(false);
    setCallStatus('Ready');
    setCallSeconds(0);
  };

  useEffect(() => () => clearTimers(), []);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <section id="live-demo" className="mesh-bg mobile-section-tight relative z-10 scroll-mt-24 overflow-hidden px-5 pb-14 pt-12 font-sans text-[#1C1917] sm:px-6 md:pb-20 md:pt-16">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-[#4F46E5]">[ See AqionVox in Action ]</p>
          <p className="max-w-2xl text-[16px] font-medium leading-[1.6] text-[#6B6357] md:text-[18px]">
            Select any industry below to test the agent live:
          </p>
          <div className="mt-6 rounded-[22px] border border-hairline bg-paper/88 p-4 shadow-[0_16px_48px_-32px_rgba(28,25,23,0.35)] lg:hidden">
            <label htmlFor="mobile-industry-select" className="eyebrow mb-2 block">
              Industry Selection
            </label>
            <div className="relative">
              <select
                id="mobile-industry-select"
                value={currentScenario}
                onChange={(event) => changeScenario(Number(event.target.value), true)}
                className="min-h-12 w-full cursor-pointer appearance-none rounded-2xl border border-[#4F46E5]/25 bg-[#FAF7F2] px-4 py-3 pr-11 text-[15px] font-semibold text-ink outline-none transition-colors duration-200 focus:border-[#4F46E5]/45 focus:ring-2 focus:ring-[#4F46E5]/20"
              >
                {scenarios.map((item, idx) => (
                  <option key={item.id} value={idx}>
                    {item.label}
                  </option>
                ))}
              </select>
              <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#4F46E5]" aria-hidden="true">
                ▾
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-stretch lg:gap-x-12 lg:gap-y-8">
          <div className="order-1 flex flex-col gap-6 lg:order-none">
            <div className="hidden min-h-0 flex-col rounded-[28px] border border-hairline bg-paper/88 p-5 shadow-[0_20px_70px_-35px_rgba(28,25,23,0.28)] lg:flex lg:h-[696px]">
              <div>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">Industry Selection</p>
                    <h3 className="font-display text-2xl leading-tight text-ink">Choose a live use case</h3>
                  </div>
                  <span className="hidden rounded-full bg-[#4F46E5]/10 px-3 py-1 text-xs font-semibold text-[#4F46E5] sm:inline-flex">
                    12 industries
                  </span>
                </div>
              </div>

              <div className="grid flex-1 grid-cols-2 grid-rows-6 gap-2.5">
                {scenarios.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => changeScenario(idx)}
                    className={`group flex min-h-0 flex-col items-center justify-center rounded-2xl border p-2.5 text-center transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#4F46E5]/35 ${
                      idx === currentScenario
                        ? 'border-[#4F46E5]/35 bg-[#4F46E5]/10 text-[#4F46E5]'
                        : 'border-hairline bg-[#FAF7F2] text-[#6B6357] hover:border-[#4F46E5]/25 hover:text-ink'
                    }`}
                  >
                    <IndustryIcon Icon={item.Icon} active={idx === currentScenario} />
                    <span className="block text-[12px] font-semibold leading-tight">{item.label}</span>
                  </button>
                ))}
              </div>

              {showOutcome && (
                <div className="rounded-2xl border border-[#4F46E5]/20 bg-[#4F46E5]/8 p-4 animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <div className="mb-3 flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#4F46E5] text-white">
                      <Check size={18} />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-ink">{scenario.outcome.title}</div>
                      <div className="text-xs text-[#6B6357]">{scenario.outcome.sub}</div>
                    </div>
                  </div>
                  <div className="grid gap-2 sm:grid-cols-3">
                    {scenario.outcome.steps.map((step) => (
                      <div key={step.n} className="rounded-xl border border-hairline bg-[#FAF7F2] p-3">
                        <div className="mb-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#4F46E5]/10 text-[10px] font-bold text-[#4F46E5]">{step.n}</div>
                        <div className="text-[11px] leading-snug text-[#6B6357]">{step.t}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="order-2 flex flex-col gap-4 lg:order-none lg:gap-6">
            <div ref={phoneRef} className="order-2 mx-auto w-full max-w-[390px] scroll-mt-6 rounded-[30px] bg-[#5F6067] p-1.5 shadow-[0_24px_74px_-32px_rgba(8,8,12,0.45)] lg:max-w-none lg:rounded-[38px]">
              <div className="relative min-h-[500px] overflow-hidden rounded-[24px] border border-white/10 bg-[#07080d] px-4 pb-4 pt-9 text-white sm:min-h-[586px] sm:rounded-[32px] sm:px-5 sm:pb-5 sm:pt-10 lg:min-h-[684px]">
                <div className="absolute left-1/2 top-0 h-12 w-36 -translate-x-1/2 rounded-b-[28px] bg-black" />
                <div className="absolute left-1/2 top-5 h-2 w-14 -translate-x-1/2 rounded-full bg-white/10" />
                <div className="absolute left-1/2 top-5 h-2 w-2 -translate-x-[48px] rounded-full bg-white/10" />

                <div className="relative z-10 flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center overflow-visible">
                        <img
                          src="/AqionVoxLogoIcon-clean.png"
                          alt=""
                          className="h-7 w-7 object-contain"
                          aria-hidden="true"
                        />
                      </span>
                      <div>
                        <div className="text-[15px] font-semibold tracking-tight">AqionVox</div>
                        <div className="text-[10px] uppercase tracking-[0.16em] text-white/35">agent console</div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-1 text-right">
                    <div className={`inline-flex items-center gap-2 rounded-lg border px-2.5 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] ${
                      isPlaying ? 'border-[#7C7CFF]/55 bg-[#34316F]/70 text-[#B8BCFF]' : 'border-[#4B4A91]/70 bg-[#191931] text-[#9FA5FF]'
                    }`}>
                      <span className={`h-1.5 w-1.5 rounded-full ${isPlaying ? 'bg-[#7C7CFF] animate-pulse' : 'bg-[#8E94FF]'}`} />
                      {callStatus}
                    </div>
                    <div className="mt-3 font-mono text-base font-bold tracking-[0.16em] text-white/45">{formatTime(callSeconds)}</div>
                  </div>
                </div>

                <div className="relative z-10 mt-7 sm:mt-12">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/36">Select agent</div>
                      <div className="mt-1 text-xs text-white/35">English and Arabic call agents</div>
                    </div>
                    <span className="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-medium text-white/45">
                      4 voices
                    </span>
                  </div>

                  <div className="space-y-2">
                    {agents.map((option, idx) => (
                      <button
                        key={`${option.lang}-${option.gender}`}
                        type="button"
                        onClick={() => !isPlaying && setSelectedAgent(idx)}
                        className={`relative flex min-h-[50px] w-full items-center justify-between rounded-xl border px-3.5 py-2 text-left transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 sm:min-h-[58px] sm:px-4 sm:py-2.5 ${
                          idx === selectedAgent
                            ? 'border-[#4F46E5]/70 bg-[#17162d]'
                            : 'border-white/10 bg-white/[0.035] hover:border-white/20'
                        } ${isPlaying ? 'cursor-default' : 'cursor-pointer'}`}
                        disabled={isPlaying}
                      >
                        <div>
                          <div className="truncate text-[14px] font-semibold leading-tight text-white">{option.name}</div>
                          <div className="mt-1 text-[11px] text-white/38">{option.role} · {option.gender}</div>
                        </div>
                        {idx === selectedAgent ? (
                          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#6868FF] text-white">
                            <Check size={14} strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="h-6 w-6 shrink-0 rounded-full border border-white/10" />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 mt-4 rounded-[22px] border border-white/10 bg-white/[0.045] p-3">
                  <button
                    type="button"
                    onClick={isPlaying ? stopDemo : startDemo}
                    className={`mb-3 flex h-11 w-full items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 ${
                      isPlaying ? 'bg-red-500/80 hover:bg-red-500' : 'bg-[#4F46E5] hover:bg-[#4338CA]'
                    }`}
                  >
                    {isPlaying ? <Square size={16} className="fill-current" /> : <Play size={17} className="fill-current" />}
                    {isPlaying ? 'Stop call' : callStatus === 'Call Ended' ? 'Replay call' : 'Start call'}
                  </button>
                  <div className="flex justify-center gap-4">
                    <button type="button" aria-label="Mute microphone" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/18 text-white/58">
                      <MicOff size={18} />
                    </button>
                    <button type="button" aria-label="End call" onClick={stopDemo} className="flex h-11 w-11 items-center justify-center rounded-full border border-red-500/28 bg-red-500/10 text-red-400">
                      <PhoneOff size={18} />
                    </button>
                    <button type="button" aria-label="Speaker volume" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/18 text-white/58">
                      <Volume2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="rounded-[24px] border border-hairline bg-paper/88 p-3 shadow-[0_20px_70px_-35px_rgba(28,25,23,0.28)] sm:p-5 md:rounded-[28px] lg:p-4">
          <div className="mobile-priority-grid grid grid-cols-2 gap-2 rounded-2xl border border-hairline bg-[#FAF7F2] p-3 text-[9px] text-[#6B6357] sm:text-[10px] lg:grid-cols-4 lg:gap-3 lg:p-2">
            {complianceItems.map((item) => (
              <div key={item} className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-hairline bg-paper/62 px-2.5 py-2 text-center lg:min-h-10 lg:justify-start lg:px-3">
                <Check size={12} className="shrink-0 text-[#4F46E5]" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
