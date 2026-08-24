import { AudioLines, ScanText, UserRoundCheck, type LucideIcon } from 'lucide-react';
import VoxPhoneConsole from './VoxPhoneConsole';

/**
 * The demo stage: the Aqion Vox handset centred on the wave artwork, flanked by
 * the three notes that explain what a visitor is about to watch happen.
 *
 * The notes are decorative scaffolding around the console — they only appear
 * once there is room for them, so narrow screens get the handset alone.
 */

type Note = { number: string; icon: LucideIcon; title: string; copy: string };

const LEFT_NOTES: Note[] = [
  {
    number: '01',
    icon: AudioLines,
    title: 'Speak naturally',
    copy: 'No forms. No scripts. Begin with a real conversation.',
  },
  {
    number: '02',
    icon: ScanText,
    title: 'Watch it understand',
    copy: 'See each exchange become a clear live transcript.',
  },
];

const RIGHT_NOTES: Note[] = [
  {
    number: '03',
    icon: UserRoundCheck,
    title: 'Receive a qualified lead',
    copy: 'Contact details and requirements become structured data.',
  },
];

function NoteColumn({ notes, side }: { notes: Note[]; side: 'left' | 'right' }) {
  const alignment = side === 'left' ? 'items-end text-right' : 'items-start text-left';

  return (
    <aside
      aria-hidden="true"
      className={`mobile-decorative-hide hidden flex-col justify-center gap-14 lg:flex ${alignment}`}
    >
      {notes.map(({ number, icon: Icon, title, copy }) => (
        <div key={number} className={`flex max-w-[15rem] flex-col gap-1.5 ${alignment}`}>
          <div className={`flex w-full items-center gap-2 ${side === 'left' ? 'flex-row-reverse' : ''}`}>
            <Icon className="h-4 w-4 shrink-0 text-petrol" strokeWidth={1.6} />
            <span className="h-px flex-1 bg-hairline" />
            <span className="font-mono text-[10px] tracking-[0.16em] text-taupe">{number}</span>
          </div>
          <p className="text-[13.5px] font-semibold text-ink">{title}</p>
          <p className="text-[12px] leading-relaxed text-taupe">{copy}</p>
        </div>
      ))}
    </aside>
  );
}

export default function VoxStage({ caption = true }: { caption?: boolean }) {
  return (
    <div className="relative w-full">
      {/* Wave artwork, riding across the lower half of the handset */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-[58%] overflow-hidden">
        <img
          src="/service-motion.svg"
          alt=""
          loading="lazy"
          decoding="async"
          className="mobile-visual-reduce h-auto w-[150%] max-w-none -translate-x-[16%] opacity-80 md:w-[128%] md:-translate-x-[11%] lg:w-full lg:translate-x-0"
        />
      </div>

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-8 lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] lg:gap-10">
        <NoteColumn notes={LEFT_NOTES} side="left" />
        <VoxPhoneConsole />
        <NoteColumn notes={RIGHT_NOTES} side="right" />
      </div>

      {caption && (
        <p className="relative z-10 mt-8 text-center font-mono text-[9px] uppercase leading-relaxed tracking-[0.16em] text-taupe sm:text-[10px] sm:tracking-[0.2em]">
          One conversation. Live understanding. A structured opportunity ready for your team.
        </p>
      )}
    </div>
  );
}
