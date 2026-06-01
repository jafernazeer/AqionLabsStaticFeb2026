
import React, { useEffect } from 'react';
import { DetailPageData, PageType } from '../types';
import { ArrowRight, Check } from 'lucide-react';
import { ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';

interface ServiceDetailProps {
  data: DetailPageData;
  onNavigate: (page: PageType) => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ data, onNavigate }) => {
  const Icon = data.icon;
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  const renderTitle = (title: string) => {
    const highlights: Record<string, string> = {
        "Custom Web App Development": "Web App",
        "Mobile App Development": "Mobile App",
        "AI Strategy Consulting & Integration": " Consulting & Integration",
        "Private GPT Development": "GPT",
        "AI Governance & Security": "Security",
        "Human AI Avatars": "Avatars",
        // Agentic AI Services
        "Digital Presence Studio": "Presence Studio",
        "Marketing Agent": "Agent",
        "Sales Agent": "Agent",
        "Customer Conversation Agent": "Conversation Agent",
        "Operations Agent": "Agent",
        "Internal Knowledge Agent": "Knowledge Agent",
        "Sovereign AI Foundation": "AI Foundation"
    };

    const highlight = highlights[title];
    if (!highlight) return title;

    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    
    return parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="text-petrol display-italic">
                {part}
            </span>
        ) : part
    );
  };

  return (
    <div className="pt-20 mesh-bg min-h-screen text-ink relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-hairline-grid opacity-80"></div>
      
      {/* Header */}
      <div className="mobile-section-tight mesh-bg py-20 min-h-[calc(100vh-5rem)] border-b border-hairline relative z-10 overflow-hidden flex items-center">
        <ServiceMotionBackdrop className="opacity-70 mobile-visual-reduce" />
        <div className="absolute inset-0 bg-gradient-to-b from-bone/82 via-bone/70 to-bone/92" aria-hidden />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-petrol/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <span className="bg-petrol/30 text-petrol px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 inline-block border border-petrol/30">
                        AI Service
                    </span>
                    <h1 className="font-display text-[2.65rem] md:text-6xl tracking-tight leading-[1.02] text-ink mb-6">
                        {renderTitle(data.title)}
                    </h1>
                    <p className="mobile-clamp-3 text-lg md:text-xl text-taupe max-w-2xl mx-auto lg:mx-0 leading-relaxed">{data.subtitle}</p>
                </div>
                
                {/* 3D Image Title Card */}
                {Icon && (
                    <div className="mobile-visual-hide relative group perspective-1000">
                         <div className="absolute inset-0 bg-petrol blur-[80px] opacity-20 rounded-full"></div>
                         <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-petrol/20 to-bone/80 backdrop-blur-xl border border-hairline rounded-3xl shadow-[0_20px_50px_-12px_rgba(79,70,229,0.18)] transform rotate-y-12 rotate-x-12 group-hover:rotate-0 transition-all duration-700 ease-out flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <Icon className="w-32 h-32 text-petrol drop-shadow-[0_4px_12px_rgba(79,70,229,0.18)] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                            
                            {/* Card Details */}
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <span className="text-xs font-mono text-petrol/50 uppercase tracking-widest">AqionLabs</span>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mobile-section-tight relative z-10 mx-auto max-w-7xl px-6 py-20 md:py-28">
        <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 lg:col-span-7">
                <p className="eyebrow mb-4">[ Delivery model ]</p>
                <h2 className="font-display text-4xl leading-[1.02] tracking-tight text-ink md:text-6xl">
                    What this service<br />
                    <span className="display-italic text-petrol">changes.</span>
                </h2>
                <div className="mobile-priority-two mt-8 grid gap-4 md:mt-10 md:gap-5">
                    {data.sections.map((section, idx) => (
                        <article key={idx} className="mobile-card-compact rounded-[28px] border border-hairline bg-paper/82 p-6 shadow-[0_24px_70px_-45px_rgba(28,25,23,0.28)] backdrop-blur md:p-8">
                            <div className="mb-5 flex items-center gap-3">
                                <span className="font-mono text-xs text-petrol">{String(idx + 1).padStart(2, '0')} /</span>
                                <h3 className="font-display text-2xl leading-tight text-ink md:text-3xl">{section.title}</h3>
                            </div>
                            {Array.isArray(section.content) ? (
                                section.content.map((p, pIdx) => (
                                    <p key={pIdx} className="mobile-clamp-3 mb-4 text-base leading-relaxed text-taupe md:text-lg">{p}</p>
                                ))
                            ) : (
                                <p className="mobile-clamp-3 mb-4 text-base leading-relaxed text-taupe md:text-lg">{section.content}</p>
                            )}
                            {section.bullets && (
                                <ul className="mobile-priority-two mt-5 grid gap-3 sm:grid-cols-2 md:mt-6">
                                    {section.bullets.map((b, bIdx) => (
                                        <li key={bIdx} className="flex items-start gap-3 rounded-2xl border border-hairline bg-bone/70 p-4 text-sm leading-relaxed text-graphite">
                                            <Check className="mt-0.5 h-4 w-4 shrink-0 text-petrol" />
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </article>
                    ))}
                </div>
            </div>

            <div className="col-span-12 lg:col-span-5">
                {(data.features || data.process) && (
                    <aside className="sticky top-28 overflow-hidden rounded-[32px] border border-white/10 bg-[#0d0d10] p-7 text-bone shadow-[0_30px_100px_-50px_rgba(28,25,23,0.7)] md:p-9">
                        <div aria-hidden className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-petrol/24 blur-[70px]" />
                        <div aria-hidden className="absolute -bottom-28 left-8 h-64 w-64 rounded-full bg-[#9333ea]/18 blur-[80px]" />
                        <div className="relative">
                            <p className="eyebrow mb-4 !text-white/55">[ Operating layer ]</p>
                            <h3 className="font-display text-3xl leading-tight text-bone md:text-4xl">
                                {data.featuresTitle || data.processTitle || "Key details"}
                            </h3>
                            <div className="mt-8 space-y-5">
                                {(data.features || data.process)?.map((item, idx) => (
                                    <div key={idx} className="mobile-card-compact group rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                                        <h4 className="mb-2 flex items-center gap-3 font-display text-xl leading-tight text-bone transition-colors group-hover:text-white">
                                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#4f46e5] to-[#9333ea] text-white">
                                                <Check className="h-4 w-4" />
                                            </span>
                                            {item.title}
                                        </h4>
                                        <p className="mobile-clamp-3 text-sm leading-relaxed text-bone/68">{item.description}</p>
                                    </div>
                                ))}
                            </div>
                            <button 
                                onClick={() => onNavigate(PageType.CONTACT)}
                                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-bone px-7 py-4 text-sm font-medium text-petrol transition-colors hover:bg-parchment"
                            >
                                Book consultation <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </aside>
                )}
            </div>
        </div>
      </div>

      {/* Pricing Section - 3D Cards */}
      {data.pricing && data.pricing.length > 0 && (
          <section className="mobile-section-tight py-24 relative border-t border-hairline bg-paper/30">
             <div className="max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Transparent Pricing</h2>
                     <p className="text-taupe">Choose the tier that matches your ambition.</p>
                 </div>

                 <div className="mobile-priority-two grid md:grid-cols-3 gap-8 perspective-1000">
                     {data.pricing.map((tier, idx) => (
                         <div 
                            key={idx}
                            className={`
                                relative group rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2
                                ${tier.highlight ? 'bg-petrol shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]' : 'bg-parchment hover:bg-sand'}
                            `}
                         >
                             {/* Content Container */}
                             <div className="h-full bg-paper rounded-[22px] p-8 flex flex-col relative overflow-hidden">
                                 {/* Highlight Badge */}
                                 {tier.highlight && (
                                     <div className="absolute top-0 right-0 bg-petrol text-bone text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                         Most Popular
                                     </div>
                                 )}

                                 <h3 className="text-xl font-bold text-ink mb-2">{tier.name}</h3>
                                 <div className="text-3xl font-bold text-petrol mb-6">{tier.price}</div>
                                 
                                 <div className="w-full h-px bg-parchment mb-6"></div>

                                 <ul className="space-y-4 mb-8 flex-1">
                                     {tier.features?.map((feat, fIdx) => (
                                         <li key={fIdx} className="flex items-start text-sm text-graphite">
                                             <Check className="w-5 h-5 text-petrol mr-3 flex-shrink-0" />
                                             <span className="leading-relaxed">{feat}</span>
                                         </li>
                                     ))}
                                 </ul>

                                 <button 
                                    onClick={() => onNavigate(PageType.CONTACT)}
                                    className={`
                                        w-full py-3.5 rounded-xl font-bold transition-all
                                        ${tier.highlight 
                                            ? 'bg-petrol text-bone hover:bg-petrolDeep shadow-lg shadow-petrol/40' 
                                            : 'bg-parchment text-graphite hover:bg-sand border border-dune hover:text-ink'}
                                    `}
                                 >
                                     Get Started
                                 </button>

                                 {/* Subtle 3D Elements */}
                                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-petrol/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
                             </div>
                         </div>
                     ))}
                 </div>
             </div>
          </section>
      )}
    </div>
  );
};

export default ServiceDetail;
