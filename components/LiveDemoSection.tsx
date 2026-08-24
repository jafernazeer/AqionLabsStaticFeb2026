import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';
import { ServiceMotionBackdrop } from './OptimizedHeroMotion';
import VoxPhoneConsole from './vox/VoxPhoneConsole';

/**
 * Homepage live demo: the Aqion Vox handset and nothing else. The CRM itself
 * lives on the Aqion Vox page, so the banner below sends visitors straight to
 * that dashboard rather than duplicating it here.
 */

const complianceItems = [
  'UAE deployment options',
  'Enterprise controls',
  'Human oversight',
  'Built to integrate',
];

const voxDashboardPath = '/products/aqion-voice#live-dashboard';

export default function LiveDemoSection() {
  const navigate = useNavigate();

  return (
    <section
      id="live-demo"
      className="mesh-bg mobile-section-tight relative z-10 scroll-mt-24 overflow-hidden px-5 pb-14 pt-12 font-sans text-[#1C1917] sm:px-6 md:pb-20 md:pt-16"
    >
      <ServiceMotionBackdrop className="mobile-visual-reduce opacity-45" />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/78 via-bone/58 to-bone/88" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4 text-[#4F46E5]">[ See Aqion Vox in action ]</p>
          <p className="max-w-2xl text-[16px] font-medium leading-[1.6] text-[#6B6357] md:text-[18px]">
            Start a live call. Aqion Vox will ask about your industry and use case, then adapt the conversation in real
            time — and the transcript appears on screen as you speak.
          </p>
        </div>

        <div className="flex w-full flex-col items-center">
          <VoxPhoneConsole />
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
              Analytics, call transcripts, captured leads, meeting management and automated email summaries — all in one
              operating view.
            </p>
          </div>
          <div className="relative mt-6 flex shrink-0 flex-col items-start gap-2 lg:mt-0 lg:items-end">
            <button
              type="button"
              onClick={() => navigate(voxDashboardPath)}
              className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full bg-bone px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-[#EDE9FE] focus:outline-none focus:ring-2 focus:ring-[#A5B4FC]/60"
            >
              Experience Vox CRM
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>
        </div>

        <div className="rounded-[24px] border border-hairline bg-paper/88 p-3 shadow-[0_20px_70px_-35px_rgba(28,25,23,0.28)] sm:p-5 md:rounded-[28px] lg:p-4">
          <div className="mobile-priority-grid grid grid-cols-2 gap-2 rounded-2xl border border-hairline bg-[#FAF7F2] p-3 text-[9px] text-[#6B6357] sm:text-[10px] lg:grid-cols-4 lg:gap-3 lg:p-2">
            {complianceItems.map((item) => (
              <div
                key={item}
                className="flex min-h-11 items-center justify-center gap-1.5 rounded-xl border border-hairline bg-paper/62 px-2.5 py-2 text-center lg:min-h-10 lg:justify-start lg:px-3"
              >
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
