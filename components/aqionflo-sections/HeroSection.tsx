import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ChevronRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const pillsRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const panel = panelRef.current;
    const bg = bgRef.current;
    const pills = pillsRef.current;
    const logo = logoRef.current;
    const headline = headlineRef.current;
    const subheadline = subheadlineRef.current;
    const cta = ctaRef.current;

    if (!section || !panel || !bg) return;

    const ctx = gsap.context(() => {
      // Initial states
      gsap.set([pills, logo, headline, subheadline, cta], { opacity: 0, y: 40 });
      gsap.set(panel, { opacity: 0, y: 40, scale: 0.98 });
      gsap.set(bg, { scale: 1.08 });

      // Auto-play entrance animation
      const tl = gsap.timeline({ delay: 0.3 });

      tl.to(bg, { scale: 1, duration: 1.1, ease: 'power2.out' })
        .to(panel, { opacity: 1, y: 0, scale: 1, duration: 0.8, ease: 'power2.out' }, '-=0.7')
        .to(pills, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.5')
        .to(logo, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .to(headline, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .to(subheadline, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4')
        .to(cta, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }, '-=0.4');

      // Scroll-driven exit animation
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
          onLeaveBack: () => {
            // Reset to visible when scrolling back to top
            gsap.to(panel, { opacity: 1, y: 0, duration: 0.3 });
            gsap.to(bg, { scale: 1, y: 0, duration: 0.3 });
          }
        }
      });

      // Entrance (0-30%): micro parallax only
      scrollTl.fromTo(bg, 
        { y: 0 }, 
        { y: '-2vh', ease: 'none' }, 
        0
      );

      // Exit (70-100%): panel exits, background scales
      scrollTl.fromTo(panel, 
        { y: 0, opacity: 1 }, 
        { y: '-18vh', opacity: 0, ease: 'power2.in' }, 
        0.7
      );

      scrollTl.fromTo(bg, 
        { scale: 1, y: '-2vh' }, 
        { scale: 1.04, y: '-8vh', ease: 'none' }, 
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, []);

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
      className="section-pinned z-10"
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
        className="absolute left-1/2 top-[52%] -translate-x-1/2 -translate-y-1/2 w-[min(86vw,1100px)] min-h-[min(52vh,520px)] glass-panel flex flex-col items-center justify-center px-8 py-12 lg:px-16 lg:py-16"
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
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2EE9A8] to-[#1DB584] flex items-center justify-center">
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
    </section>
  );
};

export default HeroSection;
