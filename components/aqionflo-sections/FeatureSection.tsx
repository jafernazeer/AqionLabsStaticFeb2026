import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  id: string;
  eyebrow: string;
  headline: string;
  body: string;
  cta: string;
  image: string;
  bgImage: string;
  reverse?: boolean;
  showAnnotation?: boolean;
}

const FeatureSection = ({ 
  id, 
  eyebrow, 
  headline, 
  body, 
  cta, 
  image, 
  bgImage, 
  reverse = false,
  showAnnotation = false 
}: FeatureSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const annotationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const leftPanel = leftPanelRef.current;
    const rightPanel = rightPanelRef.current;
    const annotation = annotationRef.current;

    if (!section || !bg || !leftPanel || !rightPanel) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        }
      });

      // Background animation
      scrollTl.fromTo(bg, 
        { scale: 1.06, y: '6vh' }, 
        { scale: 1, y: 0, ease: 'none' }, 
        0
      );

      // Left panel entrance (0-30%)
      scrollTl.fromTo(leftPanel, 
        { x: reverse ? '55vw' : '-55vw', opacity: 0, rotate: reverse ? 1.5 : -1.5 }, 
        { x: 0, opacity: 1, rotate: 0, ease: 'power2.out' }, 
        0
      );

      // Right panel entrance (5-30%)
      scrollTl.fromTo(rightPanel, 
        { x: reverse ? '-55vw' : '55vw', opacity: 0, rotate: reverse ? -1.5 : 1.5, scale: 0.985 }, 
        { x: 0, opacity: 1, rotate: 0, scale: 1, ease: 'power2.out' }, 
        0.05
      );

      // Annotation dot entrance
      if (annotation && showAnnotation) {
        scrollTl.fromTo(annotation, 
          { scale: 0, opacity: 0 }, 
          { scale: 1, opacity: 1, ease: 'back.out(1.7)' }, 
          0.18
        );
      }

      // Exit animations (70-100%)
      scrollTl.fromTo(leftPanel, 
        { x: 0, opacity: 1 }, 
        { x: reverse ? '-28vw' : '-28vw', opacity: 0, ease: 'power2.in' }, 
        0.7
      );

      scrollTl.fromTo(rightPanel, 
        { x: 0, opacity: 1 }, 
        { x: reverse ? '28vw' : '28vw', opacity: 0, ease: 'power2.in' }, 
        0.7
      );

      if (annotation && showAnnotation) {
        scrollTl.fromTo(annotation, 
          { scale: 1, opacity: 1 }, 
          { scale: 0.6, opacity: 0, ease: 'power2.in' }, 
          0.7
        );
      }

      scrollTl.fromTo(bg, 
        { scale: 1, y: 0 }, 
        { scale: 1.04, y: '-6vh', ease: 'none' }, 
        0.7
      );

    }, section);

    return () => ctx.revert();
  }, [reverse, showAnnotation]);

  const scrollToCTA = () => {
    const element = document.querySelector('#cta');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      id={id}
      className="section-pinned"
      style={{ zIndex: 20 }}
    >
      {/* Background Image */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full">
        <img 
          src={bgImage} 
          alt=""
          className="w-full h-full object-cover"
          style={{ filter: 'saturate(0.85) contrast(1.05)' }}
        />
        <div className="bg-overlay" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 lg:px-[7vw] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">
          
          {/* Left Panel - Text */}
          <div 
            ref={leftPanelRef}
            className={`w-full lg:w-[40vw] lg:max-w-[520px] glass-panel p-6 lg:p-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
          >
            <div className="eyebrow">{eyebrow}</div>
            <h2 className="headline">{headline}</h2>
            <p className="body-text mb-6">{body}</p>
            <button onClick={scrollToCTA} className="link-arrow">
              {cta}
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Panel - Dashboard Image */}
          <div 
            ref={rightPanelRef}
            className={`relative w-full lg:w-[46vw] lg:max-w-[640px] ${reverse ? 'lg:order-1' : 'lg:order-2'}`}
          >
            <div className="dashboard-card">
              <img 
                src={image} 
                alt={`${eyebrow} dashboard`}
                className="w-full h-auto"
              />
            </div>
            
            {/* Annotation Dot */}
            {showAnnotation && (
              <div 
                ref={annotationRef}
                className="absolute top-[46%] left-[62%]"
              >
                <div className="annotation-dot" />
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
