import React from 'react';
import { ArrowDown, ArrowUpRight, Check, type LucideIcon } from 'lucide-react';
import { ServiceMotionBackdrop } from './OptimizedHeroMotion';

/**
 * Shared building blocks for AQION content pages.
 * Keeps every page on the same design language: beige mesh hero, hairline
 * cards, black feature bands and the brand violet accent.
 */

export const PageHero: React.FC<{
  eyebrow: string;
  title: React.ReactNode;
  lede?: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
}> = ({ eyebrow, title, lede, body, actions }) => (
  <section className="mesh-bg mobile-section-tight relative overflow-hidden border-b border-hairline px-5 pb-20 pt-28 sm:px-6 md:pb-28 md:pt-36">
    <ServiceMotionBackdrop className="opacity-50" />
    <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/86 via-bone/70 to-bone/94" />
    <div aria-hidden className="absolute inset-0 bg-hairline-grid opacity-25" />
    <div aria-hidden className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[120px]" />

    <div className="relative mx-auto max-w-7xl">
      <p className="eyebrow mb-5">[ {eyebrow} ]</p>
      <h1 className="mobile-heading max-w-4xl font-display text-[2.35rem] leading-[1] tracking-tight text-ink md:text-6xl">
        {title}
      </h1>
      {lede && (
        <p className="mt-6 max-w-3xl text-[16px] leading-relaxed text-graphite md:text-xl">{lede}</p>
      )}
      {body && (
        <p className="mt-4 max-w-3xl text-[14.5px] leading-relaxed text-taupe md:text-lg">{body}</p>
      )}
      {actions && <div className="mobile-center-row mt-8 flex flex-col gap-3 sm:flex-row">{actions}</div>}
    </div>
  </section>
);

export const Section: React.FC<{
  eyebrow?: string;
  title?: React.ReactNode;
  lede?: React.ReactNode;
  tone?: 'light' | 'parchment' | 'dark';
  children?: React.ReactNode;
}> = ({ eyebrow, title, lede, tone = 'light', children }) => {
  const toneClass =
    tone === 'dark'
      ? 'bg-[#0d0d10] text-bone'
      : tone === 'parchment'
        ? 'border-y border-hairline bg-parchment/50'
        : '';

  return (
    <section className={`mobile-section-tight relative overflow-hidden py-20 md:py-28 ${toneClass}`}>
      {tone === 'dark' && (
        <div aria-hidden className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(rgba(250,247,242,0.6)_1px,transparent_1px)] bg-[length:24px_24px]" />
      )}
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6">
        {(eyebrow || title || lede) && (
          <div className="mb-10 grid grid-cols-12 gap-6 md:mb-14">
            <div className="col-span-12 md:col-span-6">
              {eyebrow && (
                <p className={`eyebrow mb-4 ${tone === 'dark' ? '!text-[#4F46E5]' : ''}`}>[ {eyebrow} ]</p>
              )}
              {title && (
                <h2
                  className={`mobile-subheading font-display text-[1.9rem] leading-[1.04] tracking-tight md:text-5xl ${
                    tone === 'dark' ? 'text-bone' : 'text-ink'
                  }`}
                >
                  {title}
                </h2>
              )}
            </div>
            {lede && (
              <div className="col-span-12 md:col-span-5 md:col-start-8 md:pt-3">
                <p className={`text-[15px] leading-relaxed md:text-lg ${tone === 'dark' ? 'text-bone/75' : 'text-graphite'}`}>
                  {lede}
                </p>
              </div>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export const StatusPill: React.FC<{ label: string; tone?: 'light' | 'dark' }> = ({ label, tone = 'light' }) => {
  const available = label.toLowerCase().includes('available');
  if (tone === 'dark') {
    return (
      <span className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${
        available ? 'border-[#7c7cff]/40 bg-[#4F46E5]/20 text-[#c7d2fe]' : 'border-white/12 bg-white/[0.06] text-bone/45'
      }`}>
        {label}
      </span>
    );
  }
  return (
    <span className={`shrink-0 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${
      available ? 'border-[#4f46e5]/25 bg-[#4f46e5]/10 text-petrol' : 'border-hairline bg-parchment text-taupe'
    }`}>
      {label}
    </span>
  );
};

export const FeatureGrid: React.FC<{
  items: { icon?: LucideIcon; title: string; body?: string; badge?: string; bullets?: string[] }[];
  columns?: 2 | 3 | 4;
  tone?: 'light' | 'dark';
}> = ({ items, columns = 3, tone = 'light' }) => {
  const colClass = columns === 2 ? 'sm:grid-cols-2' : columns === 4 ? 'sm:grid-cols-2 lg:grid-cols-4' : 'sm:grid-cols-2 lg:grid-cols-3';

  return (
    <div className={`mobile-priority-grid grid gap-3 ${colClass}`}>
      {items.map((item) => (
        <div
          key={item.title}
          className={`rounded-[24px] border p-5 sm:p-6 ${
            tone === 'dark'
              ? 'border-white/10 bg-white/[0.05]'
              : 'border-hairline bg-paper shadow-[0_18px_60px_-48px_rgba(28,25,23,0.35)]'
          }`}
        >
          <div className="mb-4 flex items-center justify-between gap-3">
            {item.icon && (
              <span className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                tone === 'dark'
                  ? 'border-[#4F46E5]/30 bg-[#4F46E5]/15 text-[#4F46E5]'
                  : 'border-hairline bg-parchment text-petrol'
              }`}>
                <item.icon className="h-5 w-5" strokeWidth={1.5} />
              </span>
            )}
            {item.badge && <StatusPill label={item.badge} tone={tone} />}
          </div>
          <h3 className={`font-display text-lg leading-tight sm:text-xl ${tone === 'dark' ? 'text-bone' : 'text-ink'}`}>
            {item.title}
          </h3>
          {item.body && (
            <p className={`mt-2.5 text-[13.5px] leading-relaxed sm:text-sm ${tone === 'dark' ? 'text-bone/65' : 'text-taupe'}`}>
              {item.body}
            </p>
          )}
          {item.bullets && (
            <ul className="mt-4 grid gap-2">
              {item.bullets.map((b) => (
                <li key={b} className={`flex items-start gap-2 text-[13px] leading-snug sm:text-sm ${tone === 'dark' ? 'text-bone/70' : 'text-graphite'}`}>
                  <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-petrol" strokeWidth={2.5} />
                  <span className="min-w-0">{b}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export const FlowSteps: React.FC<{ steps: string[]; tone?: 'light' | 'dark'; compact?: boolean }> = ({
  steps,
  tone = 'light',
  compact = false,
}) => (
  <div className={`mx-auto grid gap-2 ${compact ? 'max-w-xl' : 'max-w-2xl'}`}>
    {steps.map((step, idx) => (
      <div key={step}>
        <div
          className={`flex min-w-0 items-center gap-2.5 rounded-2xl border px-4 py-3.5 sm:gap-3 sm:px-5 sm:py-4 ${
            tone === 'dark' ? 'border-white/10 bg-white/[0.05]' : 'border-hairline bg-paper'
          }`}
        >
          <span className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-petrol">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span
            className={`min-w-0 break-words font-display text-[15px] leading-snug sm:text-lg ${
              tone === 'dark' ? 'text-bone' : 'text-ink'
            }`}
          >
            {step}
          </span>
        </div>
        {idx < steps.length - 1 && (
          <div aria-hidden className="flex justify-center py-0.5">
            <ArrowDown className="h-3.5 w-3.5 text-petrol/50 sm:h-4 sm:w-4" />
          </div>
        )}
      </div>
    ))}
  </div>
);

export const CTABand: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  body?: string;
  actions: React.ReactNode;
}> = ({ eyebrow = 'Next step', title, body, actions }) => (
  <section className="mobile-section-tight mx-auto max-w-7xl px-5 py-20 sm:px-6 md:py-28">
    <div className="relative grid grid-cols-12 items-end gap-6 overflow-hidden rounded-3xl border border-white/10 bg-petrol p-6 text-bone shadow-[0_30px_90px_-45px_rgba(79,70,229,0.8)] md:p-14">
      <div aria-hidden className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(rgba(250,247,242,0.7)_1px,transparent_1px)] bg-[length:22px_22px]" />
      <div aria-hidden className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="relative col-span-12 md:col-span-7">
        <p className="eyebrow !text-white mb-4">[ {eyebrow} ]</p>
        <h2 className="font-display text-[1.9rem] leading-[1.04] tracking-tight text-bone md:text-5xl">{title}</h2>
        {body && <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-bone/76 md:text-lg">{body}</p>}
      </div>
      <div className="relative col-span-12 flex flex-col gap-3 sm:flex-row md:col-span-5 md:justify-end">{actions}</div>
    </div>
  </section>
);

export const PrimaryButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    style={{ backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}
    className="group inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full px-7 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(79,70,229,0.35)] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_14px_36px_rgba(79,70,229,0.45)]"
  >
    {children}
    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
  </button>
);

export const GhostButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="inline-flex min-h-12 cursor-pointer items-center justify-center gap-2.5 rounded-full border border-ink/[0.12] bg-white/70 px-7 py-3.5 text-sm font-semibold text-ink backdrop-blur-md transition-all duration-200 hover:-translate-y-px hover:border-[#4f46e5]/30 hover:text-[#4f46e5]"
  >
    {children}
  </button>
);

export const BoneButton: React.FC<{ onClick: () => void; children: React.ReactNode }> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-bone px-7 py-4 text-sm font-medium text-petrol transition-colors hover:bg-parchment"
  >
    {children}
    <ArrowUpRight className="h-4 w-4" />
  </button>
);
