import { useRef } from 'react';
import { ArrowRight, ChevronRight } from 'lucide-react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  const pills = ['Dashboard', 'Sales', 'Inventory', 'Accounts', 'Reports'];

  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 z-10"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="/images/bg-hero.jpg"
          alt="Modern logistics hub"
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        />
        <div className="bg-overlay" />
      </div>

      {/* Glass Panel */}
      <div
        ref={panelRef}
        className="relative w-[min(86vw,1100px)] min-h-[min(52vh,520px)] glass-panel flex flex-col items-center justify-center px-8 py-12 lg:px-16 lg:py-16"
      >
        {/* Pills */}
        <div ref={pillsRef} className="flex flex-wrap justify-center gap-2 lg:gap-3 mb-8">
          {pills.map((pill) => (
            <button
              key={pill}
              onClick={() => scrollToSection(`#${pill.toLowerCase()}`)}
              className="pill"
            >
              {pill}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div ref={logoRef} className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#c084fc] flex items-center justify-center">
            <span className="text-[#070B14] font-bold text-xl">A</span>
          </div>
          <span className="text-[#F4F7FF] font-semibold text-xl">AqionFlo</span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="text-[clamp(32px,5vw,64px)] font-semibold text-[#F4F7FF] text-center leading-tight mb-4"
        >
          Unified Logic. <span className="text-gradient">Infinite Flow.</span>
        </h1>

        {/* Subheadline */}
        <p
          ref={subheadlineRef}
          className="text-[#A7B1C8] text-center text-base lg:text-lg max-w-2xl mb-8 leading-relaxed"
        >
          An AI-integrated ERP that connects finance, operations, and sales—so your team moves as one system.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => scrollToSection('#cta')}
            className="btn-primary"
          >
            Request a demo
            <ArrowRight size={18} />
          </button>
          <button
            onClick={() => scrollToSection('#financial')}
            className="btn-secondary"
          >
            Explore solutions
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section >
  );
};

export default HeroSection;
