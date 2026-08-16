import React, { useCallback, useEffect, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';
import {
  ArrowUpRight,
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

const complianceItems = [
  'UAE PDPL',
  'TDRA Compliant WhatsApp API',
  'Enterprise-Grade Security',
  'UAE Data Residency',
];

const vapiConfig = {
  publicKey: '6dbefa7a-7a06-416f-a207-4702d564c97f',
  assistantId: 'e2eaf5e0-2335-475d-b915-a2261fa0d197',
};

const voiceCrmDashboardUrl = 'https://aqionvoice.aqionlabs.com';

type CallStatus = 'Ready' | 'Connecting' | 'Connected' | 'Call Ended' | 'Error';

function getCallErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  if (typeof error === 'string') return error;

  if (error && typeof error === 'object') {
    const details = error as { message?: unknown; error?: unknown };
    if (typeof details.message === 'string') return details.message;
    if (typeof details.error === 'string') return details.error;
    if (details.error && typeof details.error === 'object' && 'message' in details.error) {
      const nestedMessage = (details.error as { message?: unknown }).message;
      if (typeof nestedMessage === 'string') return nestedMessage;
    }
  }

  return 'The live call could not connect.';
}

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
  const [isPlaying, setIsPlaying] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);
  const [callStatus, setCallStatus] = useState<CallStatus>('Ready');
  const [callSeconds, setCallSeconds] = useState(0);
  const [callError, setCallError] = useState('');
  const [assistantVolume, setAssistantVolume] = useState(0);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const vapiRef = useRef<Vapi | null>(null);
  const mountedRef = useRef(false);

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startCallTimer = useCallback(() => {
    clearTimers();
    timerRef.current = setInterval(() => {
      setCallSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  const getVapi = () => {
    if (!vapiRef.current) {
      vapiRef.current = new Vapi(vapiConfig.publicKey);
    }

    return vapiRef.current;
  };

  const startDemo = async () => {
    if (isConnecting || isPlaying) return;

    clearTimers();
    setCallSeconds(0);
    setCallError('');
    setIsConnecting(true);
    setIsPlaying(false);
    setCallStatus('Connecting');

    try {
      await getVapi().start(vapiConfig.assistantId);
    } catch (error) {
      setIsConnecting(false);
      setIsPlaying(false);
      setCallStatus('Error');
      setCallError(getCallErrorMessage(error));
    }
  };

  const endActiveCall = async (nextStatus: CallStatus = 'Call Ended') => {
    clearTimers();
    setIsConnecting(false);
    setIsPlaying(false);

    try {
      await vapiRef.current?.stop();
    } catch {
      // The SDK may already have closed the room after a call-end event.
    }

    setCallStatus(nextStatus);
    setAssistantVolume(0);
  };

  const toggleMute = () => {
    const nextMuted = !isMuted;
    setIsMuted(nextMuted);
    vapiRef.current?.setMuted(nextMuted);
  };

  const toggleSpeaker = () => {
    const nextSpeakerOn = !speakerOn;
    setSpeakerOn(nextSpeakerOn);

    try {
      vapiRef.current?.send({
        type: 'control',
        control: nextSpeakerOn ? 'unmute-assistant' : 'mute-assistant',
      });
    } catch {
      // Speaker control is only available once the live call is connected.
    }
  };

  useEffect(() => {
    mountedRef.current = true;
    const vapi = getVapi();

    const handleCallStart = () => {
      if (!mountedRef.current) return;
      setIsConnecting(false);
      setIsPlaying(true);
      setCallStatus('Connected');
      setCallError('');
      startCallTimer();
    };

    const handleCallEnd = () => {
      if (!mountedRef.current) return;
      clearTimers();
      setIsConnecting(false);
      setIsPlaying(false);
      setAssistantVolume(0);

      setCallStatus('Call Ended');
    };

    const handleVolume = (volume: number) => {
      if (!mountedRef.current) return;
      setAssistantVolume(Math.max(0, Math.min(1, volume)));
    };

    const handleError = (error: unknown) => {
      if (!mountedRef.current) return;
      clearTimers();
      setIsConnecting(false);
      setIsPlaying(false);
      setCallStatus('Error');
      setCallError(getCallErrorMessage(error));
      setAssistantVolume(0);
    };

    vapi.on('call-start', handleCallStart);
    vapi.on('call-end', handleCallEnd);
    vapi.on('volume-level', handleVolume);
    vapi.on('error', handleError);
    vapi.on('call-start-failed', handleError);

    return () => {
      mountedRef.current = false;
      clearTimers();
      vapi.removeListener('call-start', handleCallStart);
      vapi.removeListener('call-end', handleCallEnd);
      vapi.removeListener('volume-level', handleVolume);
      vapi.removeListener('error', handleError);
      vapi.removeListener('call-start-failed', handleError);
      void vapi.stop();
    };
  }, [startCallTimer]);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  return (
    <section id="live-demo" className="mesh-bg mobile-section-tight relative z-10 scroll-mt-24 overflow-hidden px-5 pb-14 pt-12 font-sans text-[#1C1917] sm:px-6 md:pb-20 md:pt-16">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-[#4F46E5]">[ See Aqion Vox in Action ]</p>
          <p className="max-w-2xl text-[16px] font-medium leading-[1.6] text-[#6B6357] md:text-[18px]">
            Start a live call. Aqion Vox will ask about your industry and use case, then adapt the conversation in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_390px] lg:items-stretch lg:gap-x-12 lg:gap-y-8">
          <div className="order-2 flex flex-col gap-6 lg:order-none">
            <div className="flex min-h-0 flex-col rounded-[28px] border border-hairline bg-paper/88 p-5 shadow-[0_20px_70px_-35px_rgba(28,25,23,0.28)] lg:h-[696px]">
              <div>
                <div className="mb-4 flex items-end justify-between gap-4">
                  <div>
                    <p className="eyebrow mb-2">Industry coverage</p>
                    <h3 className="font-display text-2xl leading-tight text-ink">Industries Aqion Vox serves</h3>
                  </div>
                  <span className="hidden rounded-full bg-[#4F46E5]/10 px-3 py-1 text-xs font-semibold text-[#4F46E5] sm:inline-flex">
                    12 industries
                  </span>
                </div>
              </div>

              <div className="grid flex-1 grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-2 lg:grid-rows-6">
                {scenarios.map((item) => (
                  <div
                    key={item.id}
                    className="group flex min-h-[92px] flex-col items-center justify-center rounded-2xl border border-hairline bg-[#FAF7F2] p-2.5 text-center text-[#6B6357] transition-colors duration-200 hover:border-[#4F46E5]/25 hover:text-ink lg:min-h-0"
                  >
                    <IndustryIcon Icon={item.Icon} active={false} />
                    <span className="block text-[12px] font-semibold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex flex-col gap-4 lg:order-none lg:gap-6">
            <div className="mx-auto w-full max-w-[390px] rounded-[32px] bg-gradient-to-b from-[#777981] to-[#42434a] p-1.5 shadow-[0_28px_80px_-30px_rgba(8,8,12,0.5)] lg:max-w-none lg:rounded-[38px]">
              <div className="relative flex min-h-[510px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#07080d] px-4 pb-4 pt-9 text-white sm:min-h-[586px] sm:rounded-[32px] sm:px-5 sm:pb-5 sm:pt-10 lg:min-h-[684px]">
                <div className="absolute left-1/2 top-0 h-12 w-36 -translate-x-1/2 rounded-b-[28px] bg-black" />
                <div className="absolute left-1/2 top-5 h-2 w-14 -translate-x-1/2 rounded-full bg-white/10" />
                <div className="absolute left-1/2 top-5 h-2 w-2 -translate-x-[48px] rounded-full bg-white/10" />
                <div aria-hidden className="absolute inset-x-0 top-28 h-56 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_68%)]" />

                <div className="relative z-10 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
                      <img src="/AqionVoxLogoIcon-clean.png" alt="Aqion Vox" className="h-7 w-7 object-contain" />
                    </span>
                    <div className="min-w-0">
                      <div className="truncate text-[15px] font-semibold tracking-tight">Aqion Vox</div>
                      <div className="truncate text-[9px] uppercase tracking-[0.14em] text-white/38 sm:text-[10px]">Aqion Vox agent console</div>
                    </div>
                  </div>
                  <div className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] sm:text-[10px] ${
                    isPlaying
                      ? 'border-[#7C7CFF]/55 bg-[#34316F]/70 text-[#B8BCFF]'
                      : callStatus === 'Error'
                        ? 'border-red-400/45 bg-red-500/10 text-red-200'
                        : 'border-[#4B4A91]/70 bg-[#191931] text-[#9FA5FF]'
                  }`}>
                    <span className={`h-1.5 w-1.5 rounded-full ${isPlaying || isConnecting ? 'animate-pulse bg-[#7C7CFF]' : callStatus === 'Error' ? 'bg-red-300' : 'bg-[#8E94FF]'}`} />
                    {callStatus}
                  </div>
                </div>

                <div className="relative z-10 flex flex-1 flex-col items-center justify-center py-7 text-center sm:py-10">
                  <div className="relative flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
                    <span className={`absolute inset-0 rounded-full border border-[#7477ff]/20 ${isPlaying ? 'animate-ping' : ''}`} />
                    <span className={`absolute inset-5 rounded-full border border-[#7477ff]/25 bg-[#7477ff]/[0.04] ${isPlaying ? 'animate-pulse' : ''}`} />
                    <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#232449] via-[#15162c] to-[#0c0d16] shadow-[0_24px_60px_-20px_rgba(99,102,241,0.85)] sm:h-28 sm:w-28">
                      <div className="flex h-10 items-center gap-1" aria-hidden="true">
                        {[18, 30, 22, 38, 26, 34, 20].map((height, idx) => (
                          <span
                            key={idx}
                            className={`w-1 rounded-full bg-gradient-to-t from-[#818CF8] to-[#C4B5FD] ${isPlaying ? 'animate-pulse' : 'opacity-55'}`}
                            style={{
                              height: `${isPlaying ? Math.max(height * 0.58, height * assistantVolume + 12) : height}px`,
                              animationDelay: `${idx * 90}ms`,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/35">Adaptive voice workflow</p>
                  <p className="mt-2 font-mono text-2xl font-semibold tracking-[0.1em] text-white/75">{formatTime(callSeconds)}</p>
                  <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-white/38">
                    {callStatus === 'Connecting'
                      ? 'Connecting to Aqion Vox. Allow microphone access when prompted.'
                      : callStatus === 'Error'
                        ? callError || 'The live call could not connect.'
                        : isPlaying
                          ? 'Listening and responding in real time'
                          : callStatus === 'Call Ended'
                            ? 'Call completed successfully'
                            : 'Ready for a live conversation'}
                  </p>
                </div>

                <div className="relative z-10 rounded-[22px] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-sm sm:p-4">
                  <button
                    type="button"
                    onClick={isPlaying || isConnecting ? () => void endActiveCall(isConnecting ? 'Ready' : 'Call Ended') : () => void startDemo()}
                    className={`mb-3 flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-xl text-sm font-semibold text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 ${
                      isPlaying || isConnecting ? 'bg-red-500/80 hover:bg-red-500' : 'bg-[#4F46E5] hover:bg-[#4338CA]'
                    }`}
                  >
                    {isPlaying || isConnecting ? <Square size={16} className="fill-current" /> : <Play size={17} className="fill-current" />}
                    {isPlaying || isConnecting ? 'Stop call' : 'Start call'}
                  </button>
                  <div className="flex justify-center gap-5">
                    <button
                      type="button"
                      aria-label="Mute microphone"
                      aria-pressed={isMuted}
                      title="Mute microphone"
                      onClick={toggleMute}
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 ${isMuted ? 'border-[#7C7CFF]/45 bg-[#7C7CFF]/20 text-[#C7D2FE]' : 'border-white/10 bg-black/18 text-white/58 hover:text-white'}`}
                    >
                      <MicOff size={18} />
                    </button>
                    <button type="button" aria-label="Disconnect call" title="Disconnect call" onClick={() => void endActiveCall()} className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-red-500/28 bg-red-500/10 text-red-400 transition-colors hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400/50">
                      <PhoneOff size={18} />
                    </button>
                    <button
                      type="button"
                      aria-label="Speaker volume"
                      aria-pressed={speakerOn}
                      title="Speaker volume"
                      onClick={toggleSpeaker}
                      className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 ${speakerOn ? 'border-[#7C7CFF]/45 bg-[#7C7CFF]/20 text-[#C7D2FE]' : 'border-white/10 bg-black/18 text-white/45 hover:text-white'}`}
                    >
                      <Volume2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d10] px-6 py-7 text-bone shadow-[0_24px_70px_-38px_rgba(28,25,23,0.72)] sm:px-8 sm:py-8 lg:flex lg:items-center lg:justify-between lg:gap-12 lg:px-10">
          <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(129,140,248,0.8)_1px,transparent_1px)] bg-[length:20px_20px]" />
          <div aria-hidden className="absolute -right-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#4F46E5]/20 blur-3xl" />
          <div className="relative max-w-3xl">
            <p className="eyebrow mb-3 !text-[#4F46E5]">[ Aqion Vox CRM ]</p>
            <h3 className="font-display text-[2rem] leading-[1.04] tracking-tight text-bone sm:text-4xl">
              See what happens <span className="display-italic text-[#4F46E5]">after every call.</span>
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-bone/62 sm:text-base">
              Explore the live Voice CRM for analytics, call transcripts, captured leads, meeting management and automated email summaries.
            </p>
          </div>
          <div className="relative mt-6 flex shrink-0 flex-col items-start gap-2 lg:mt-0 lg:items-end">
            <a
              href={voiceCrmDashboardUrl}
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#EDE9FE] focus:outline-none focus:ring-2 focus:ring-[#A5B4FC]/60"
            >
              Experience Voice CRM
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
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
