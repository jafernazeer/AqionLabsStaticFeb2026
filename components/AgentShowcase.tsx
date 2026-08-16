import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { AgentShowcase as ShowcaseData } from '../types';

interface AgentShowcaseProps {
  data: ShowcaseData;
}

/** Reveals children once the section scrolls into view. Falls back to visible if unsupported. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { rootMargin: '-12% 0px' },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return { ref, shown };
}

const AgentShowcase: React.FC<AgentShowcaseProps> = ({ data }) => {
  const { ref, shown } = useReveal<HTMLDivElement>();
  const [active, setActive] = useState(0);
  const images = data.images ?? [];
  const steps = data.steps ?? [];

  return (
    <section className="mobile-section-tight relative overflow-hidden bg-[#0d0d10] py-24 text-bone md:py-32">
      {/* Ambient brand glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.22),rgba(147,51,234,0.10)_52%,transparent_72%)] blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(rgba(250,247,242,0.7)_1px,transparent_1px)] bg-[length:22px_22px]"
      />

      <style>{`
        @keyframes aqionShowcaseFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes aqionShowcasePulse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(320%); }
        }
        .aqion-showcase-float { animation: aqionShowcaseFloat 9s ease-in-out infinite; }
        .aqion-showcase-pulse { animation: aqionShowcasePulse 4.2s linear infinite; }
        @media (prefers-reduced-motion: reduce) {
          .aqion-showcase-float,
          .aqion-showcase-pulse { animation: none !important; }
          .aqion-showcase-reveal { transition: none !important; }
        }
      `}</style>

      <div ref={ref} className="relative mx-auto max-w-7xl px-5 sm:px-6">
        <div className="mb-12 grid grid-cols-12 gap-6 md:mb-16">
          <div className="mobile-page-center col-span-12 md:col-span-6 md:text-left">
            <p className="eyebrow !text-[#a5b4fc] mb-4">[ {data.eyebrow} ]</p>
            <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight text-bone md:text-5xl">
              {data.title}
            </h2>
          </div>
          <div className="mobile-page-center col-span-12 md:col-span-5 md:col-start-8 md:pt-4 md:text-left">
            <p className="mobile-copy-measure text-[15px] leading-relaxed text-bone/72 md:text-base">{data.body}</p>
            {data.cta && (
              <a
                href={data.cta.href}
                className="group mt-5 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-[#a5b4fc] transition-colors hover:text-bone"
              >
                {data.cta.label}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            )}
          </div>
        </div>

        {data.kind === 'screenshots' ? (
          <div
            className={`aqion-showcase-reveal transition-all duration-700 ease-out ${
              shown ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          >
            {/* Product frame */}
            <div className="aqion-showcase-float rounded-[26px] border border-bone/15 bg-white/[0.04] p-2.5 shadow-[0_40px_120px_-50px_rgba(0,0,0,0.9)] backdrop-blur-sm md:p-3">
              <div className="flex items-center gap-2 px-3 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-bone/20" />
                <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/40">
                  {images[active]?.caption}
                </span>
              </div>
              <div className="overflow-hidden rounded-[18px] border border-bone/10 bg-[#08080a]">
                {images.map((img, i) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.caption}
                    loading="lazy"
                    className={`w-full transition-opacity duration-500 ${i === active ? 'block opacity-100' : 'hidden opacity-0'}`}
                  />
                ))}
              </div>
            </div>

            {/* Tabs */}
            <div className="mt-6 flex flex-wrap justify-center gap-2 md:justify-start">
              {images.map((img, i) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={i === active}
                  className={`min-h-11 cursor-pointer rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a5b4fc] ${
                    i === active
                      ? 'border-[#4F46E5]/50 bg-[#4F46E5]/15 text-bone'
                      : 'border-bone/15 text-bone/55 hover:border-bone/30 hover:text-bone/85'
                  }`}
                >
                  {img.caption}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="relative">
            {/* Connecting rail with travelling pulse (desktop only) */}
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-[38px] hidden md:block">
              <div className="relative h-px w-full overflow-hidden bg-bone/15">
                <div className="aqion-showcase-pulse absolute inset-y-0 w-1/4 bg-gradient-to-r from-transparent via-[#7C6BFF] to-transparent" />
              </div>
            </div>

            <ol className="relative grid gap-8 md:grid-cols-4 md:gap-6">
              {steps.map((step, i) => (
                <li
                  key={step.label}
                  className={`aqion-showcase-reveal transition-all duration-700 ease-out ${
                    shown ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                  }`}
                  style={{ transitionDelay: `${i * 90}ms` }}
                >
                  <div className="mb-5 flex items-center gap-3 md:mb-6">
                    <span className="relative flex h-[76px] w-[76px] shrink-0 items-center justify-center rounded-2xl border border-bone/15 bg-[#0d0d10] font-mono text-lg text-[#a5b4fc] shadow-[0_18px_40px_-24px_rgba(79,70,229,0.8)]">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="font-display text-xl leading-tight text-bone md:text-2xl">{step.label}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-bone/68">{step.detail}</p>
                </li>
              ))}
            </ol>

            <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/35">
              Reference workflow · configured per deployment
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default AgentShowcase;
