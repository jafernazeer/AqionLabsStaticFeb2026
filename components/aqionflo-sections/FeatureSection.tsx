import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
      className="relative min-h-[80vh] flex items-center justify-center py-20"
      style={{ zIndex: 20 }}
    >
      {/* Background Grid */}
      <div ref={bgRef} className="absolute inset-0 w-full h-full bg-navy-950 bg-grid-indigo pointer-events-none">
        <div className="bg-overlay" />
      </div>

      {/* Content Container */}
      <div className="absolute inset-0 flex items-center">
        <div className="w-full px-6 lg:px-[7vw] flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-0">

          {/* Left Panel - Text */}
          <div
            ref={leftPanelRef}
            className={`w-full lg:w-[40vw] lg:max-w-[520px] glass-panel p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-300 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}
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
                style={{ filter: 'hue-rotate(80deg)' }}
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
