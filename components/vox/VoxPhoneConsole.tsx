import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Vapi from '@vapi-ai/web';
import { MicOff, PhoneOff, Play, Square, Volume2 } from 'lucide-react';

/** Vite injects `import.meta.env`; the project ships no `vite/client` types. */
const env = (import.meta as unknown as { env?: Record<string, string | undefined> }).env ?? {};

/**
 * The AQION VOX agent console: a phone mockup that places a real Vapi call and
 * streams the live transcript back onto the handset screen while it runs.
 *
 * The public key and assistant belong to AqionLabs' own Vapi workspace. If a
 * dedicated agent id is issued later, override it through the environment
 * rather than editing this file.
 */
const vapiConfig = {
  publicKey: env.VITE_AQIONVOX_PUBLIC_KEY || '6dbefa7a-7a06-416f-a207-4702d564c97f',
  assistantId: env.VITE_AQIONVOX_ASSISTANT_ID || 'e2eaf5e0-2335-475d-b915-a2261fa0d197',
};

export type CallStatus = 'Ready' | 'Connecting' | 'Connected' | 'Call Ended' | 'Error';

type TranscriptLine = {
  id: string;
  speaker: 'agent' | 'caller';
  text: string;
  isFinal: boolean;
};

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

/**
 * Live transcript with considerate auto-scroll: it follows the newest line but
 * stops the moment the reader scrolls up, and resumes when they return.
 */
function LiveTranscript({ lines }: { lines: TranscriptLine[] }) {
  const scrollRef = useRef<HTMLOListElement | null>(null);
  const stickToBottomRef = useRef(true);

  const handleScroll = useCallback(() => {
    const node = scrollRef.current;
    if (!node) return;
    stickToBottomRef.current = node.scrollHeight - node.scrollTop - node.clientHeight < 48;
  }, []);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node || !stickToBottomRef.current) return;
    node.scrollTo({ top: node.scrollHeight, behavior: 'smooth' });
  }, [lines]);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <p className="mb-2 shrink-0 text-[9px] font-semibold uppercase tracking-[0.2em] text-white/35">
        Live transcript
      </p>
      {lines.length === 0 ? (
        <div className="flex flex-1 items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/[0.02] px-4 py-6">
          <p className="max-w-[220px] text-center text-xs leading-relaxed text-white/38">
            Your call transcript appears here as you speak.
          </p>
        </div>
      ) : (
        <ol
          ref={scrollRef}
          onScroll={handleScroll}
          aria-live="polite"
          aria-label="Live call transcript"
          className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-1"
        >
          {lines.map((line) => (
            <li
              key={line.id}
              className={`max-w-[86%] rounded-2xl px-3 py-2 text-[12.5px] leading-snug ${
                line.speaker === 'agent'
                  ? 'self-start border border-[#7C7CFF]/25 bg-[#7C7CFF]/[0.12] text-white/85'
                  : 'self-end border border-white/10 bg-white/[0.06] text-white/70'
              } ${line.isFinal ? '' : 'opacity-60'}`}
            >
              <span className="mb-0.5 block text-[8.5px] font-semibold uppercase tracking-[0.16em] text-white/35">
                {line.speaker === 'agent' ? 'Aqion Vox' : 'You'}
              </span>
              {line.text}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default function VoxPhoneConsole() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [speakerOn, setSpeakerOn] = useState(true);
  const [callStatus, setCallStatus] = useState<CallStatus>('Ready');
  const [callSeconds, setCallSeconds] = useState(0);
  const [callError, setCallError] = useState('');
  const [assistantVolume, setAssistantVolume] = useState(0);
  const [transcript, setTranscript] = useState<TranscriptLine[]>([]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const vapiRef = useRef<Vapi | null>(null);
  const mountedRef = useRef(false);

  const clearTimers = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const startCallTimer = useCallback(() => {
    clearTimers();
    timerRef.current = setInterval(() => setCallSeconds((seconds) => seconds + 1), 1000);
  }, []);

  const getVapi = () => {
    if (!vapiRef.current) vapiRef.current = new Vapi(vapiConfig.publicKey);
    return vapiRef.current;
  };

  const startDemo = async () => {
    if (isConnecting || isPlaying) return;

    clearTimers();
    setCallSeconds(0);
    setCallError('');
    setTranscript([]);
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

    /**
     * Vapi streams partial transcripts before finalising each utterance. Keep a
     * single in-flight line per speaker so the text refines in place instead of
     * stacking a new bubble for every partial.
     */
    const handleMessage = (message: unknown) => {
      if (!mountedRef.current || !message || typeof message !== 'object') return;

      const payload = message as {
        type?: string;
        role?: string;
        transcript?: string;
        transcriptType?: string;
      };
      if (payload.type !== 'transcript' || typeof payload.transcript !== 'string') return;

      const text = payload.transcript.trim();
      if (!text) return;

      const speaker: TranscriptLine['speaker'] = payload.role === 'assistant' ? 'agent' : 'caller';
      const isFinal = payload.transcriptType !== 'partial';

      setTranscript((lines) => {
        const last = lines[lines.length - 1];

        if (last && last.speaker === speaker && !last.isFinal) {
          return [...lines.slice(0, -1), { ...last, text, isFinal }];
        }

        return [...lines, { id: `${speaker}-${lines.length}-${text.length}`, speaker, text, isFinal }];
      });
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
    vapi.on('message', handleMessage);
    vapi.on('error', handleError);
    vapi.on('call-start-failed', handleError);

    return () => {
      mountedRef.current = false;
      clearTimers();
      vapi.removeListener('call-start', handleCallStart);
      vapi.removeListener('call-end', handleCallEnd);
      vapi.removeListener('volume-level', handleVolume);
      vapi.removeListener('message', handleMessage);
      vapi.removeListener('error', handleError);
      vapi.removeListener('call-start-failed', handleError);
      void vapi.stop();
    };
  }, [startCallTimer]);

  const formatTime = (seconds: number) => `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;

  // The orb owns the screen until the call connects; once it does, the
  // transcript takes over and the orb shrinks to a status strip.
  const showTranscript = isPlaying || transcript.length > 0;

  const statusCopy = useMemo(() => {
    if (callStatus === 'Connecting') return 'Connecting to Aqion Vox. Allow microphone access when prompted.';
    if (callStatus === 'Error') return callError || 'The live call could not connect.';
    if (isPlaying) return 'Listening and responding in real time';
    if (callStatus === 'Call Ended') return 'Call completed successfully';
    return 'Ready for a live conversation';
  }, [callStatus, callError, isPlaying]);

  return (
    <div className="mx-auto w-full max-w-[420px] rounded-[32px] bg-gradient-to-b from-[#777981] to-[#42434a] p-1.5 shadow-[0_28px_80px_-30px_rgba(8,8,12,0.5)] sm:rounded-[38px]">
      <div className="relative flex min-h-[510px] flex-col overflow-hidden rounded-[26px] border border-white/10 bg-[#07080d] px-4 pb-4 pt-9 text-white sm:min-h-[586px] sm:rounded-[32px] sm:px-5 sm:pb-5 sm:pt-10 lg:min-h-[660px]">
        <div className="absolute left-1/2 top-0 h-12 w-36 -translate-x-1/2 rounded-b-[28px] bg-black" />
        <div className="absolute left-1/2 top-5 h-2 w-14 -translate-x-1/2 rounded-full bg-white/10" />
        <div className="absolute left-1/2 top-5 h-2 w-2 -translate-x-[48px] rounded-full bg-white/10" />
        <div aria-hidden className="absolute inset-x-0 top-28 h-56 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.2),transparent_68%)]" />

        <div className="relative z-10 flex shrink-0 items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.05]">
              <img src="/AqionVoxLogoIcon-clean.png" alt="Aqion Vox" className="h-7 w-7 object-contain" />
            </span>
            <div className="min-w-0">
              <div className="truncate text-[15px] font-semibold tracking-tight">AQION VOX</div>
              <div className="truncate text-[9px] uppercase tracking-[0.14em] text-white/38 sm:text-[10px]">
                AQION VOX agent console
              </div>
            </div>
          </div>
          <div
            className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-2.5 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.14em] sm:text-[10px] ${
              isPlaying
                ? 'border-[#7C7CFF]/55 bg-[#34316F]/70 text-[#B8BCFF]'
                : callStatus === 'Error'
                  ? 'border-red-400/45 bg-red-500/10 text-red-200'
                  : 'border-[#4B4A91]/70 bg-[#191931] text-[#9FA5FF]'
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                isPlaying || isConnecting
                  ? 'animate-pulse bg-[#7C7CFF]'
                  : callStatus === 'Error'
                    ? 'bg-red-300'
                    : 'bg-[#8E94FF]'
              }`}
            />
            {callStatus}
          </div>
        </div>

        {showTranscript ? (
          <div className="relative z-10 mt-5 flex min-h-0 flex-1 flex-col">
            <div className="mb-3 flex shrink-0 items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <div className="flex h-6 items-end gap-[3px]" aria-hidden="true">
                  {[14, 22, 16, 24, 18].map((height, idx) => (
                    <span
                      key={idx}
                      className={`w-[3px] rounded-full bg-gradient-to-t from-[#818CF8] to-[#C4B5FD] ${
                        isPlaying ? 'animate-pulse' : 'opacity-45'
                      }`}
                      style={{
                        height: `${isPlaying ? Math.max(height * 0.55, height * assistantVolume + 8) : height * 0.6}px`,
                        animationDelay: `${idx * 90}ms`,
                      }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/40">
                  {isPlaying ? 'Live' : 'Ended'}
                </span>
              </div>
              <span className="font-mono text-sm font-semibold tracking-[0.08em] text-white/70">
                {formatTime(callSeconds)}
              </span>
            </div>
            <LiveTranscript lines={transcript} />
          </div>
        ) : (
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
            <p className="mt-2 max-w-[240px] text-xs leading-relaxed text-white/38">{statusCopy}</p>
          </div>
        )}

        <div className="relative z-10 mt-4 shrink-0 rounded-[22px] border border-white/10 bg-white/[0.045] p-3 backdrop-blur-sm sm:p-4">
          <button
            type="button"
            onClick={
              isPlaying || isConnecting
                ? () => void endActiveCall(isConnecting ? 'Ready' : 'Call Ended')
                : () => void startDemo()
            }
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
              className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 ${
                isMuted
                  ? 'border-[#7C7CFF]/45 bg-[#7C7CFF]/20 text-[#C7D2FE]'
                  : 'border-white/10 bg-black/18 text-white/58 hover:text-white'
              }`}
            >
              <MicOff size={18} />
            </button>
            <button
              type="button"
              aria-label="Disconnect call"
              title="Disconnect call"
              onClick={() => void endActiveCall()}
              className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-red-500/28 bg-red-500/10 text-red-400 transition-colors hover:bg-red-500/20 focus:outline-none focus:ring-2 focus:ring-red-400/50"
            >
              <PhoneOff size={18} />
            </button>
            <button
              type="button"
              aria-label="Speaker volume"
              aria-pressed={speakerOn}
              title="Speaker volume"
              onClick={toggleSpeaker}
              className={`flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border transition-colors focus:outline-none focus:ring-2 focus:ring-[#7C7CFF]/50 ${
                speakerOn
                  ? 'border-[#7C7CFF]/45 bg-[#7C7CFF]/20 text-[#C7D2FE]'
                  : 'border-white/10 bg-black/18 text-white/45 hover:text-white'
              }`}
            >
              <Volume2 size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
