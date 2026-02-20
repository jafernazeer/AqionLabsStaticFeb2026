
import React, { useEffect } from 'react';
import { DetailPageData, PageType } from '../types';
import { Check, Zap, Shield, Star, Rocket } from 'lucide-react';

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
        "Human AI Avatars": "Avatars"
    };

    const highlight = highlights[title];
    if (!highlight) return title;

    const parts = title.split(new RegExp(`(${highlight})`, 'gi'));
    
    return parts.map((part, i) => 
        part.toLowerCase() === highlight.toLowerCase() ? (
            <span key={i} className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">
                {part}
            </span>
        ) : part
    );
  };

  return (
    <div className="pt-20 bg-navy-950 min-h-screen text-slate-200 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      {/* Header */}
      <div className="bg-navy-900 py-20 border-b border-navy-800 relative z-10 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <span className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 inline-block border border-indigo-500/30">
                        AI Service
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                        {renderTitle(data.title)}
                    </h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">{data.subtitle}</p>
                </div>
                
                {/* 3D Image Title Card */}
                {Icon && (
                    <div className="relative group perspective-1000">
                         <div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-20 rounded-full"></div>
                         <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600/20 to-navy-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(99,102,241,0.3)] transform rotate-y-12 rotate-x-12 group-hover:rotate-0 transition-all duration-700 ease-out flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <Icon className="w-32 h-32 text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                            
                            {/* Card Details */}
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <span className="text-xs font-mono text-indigo-300/50 uppercase tracking-widest">AqionLabs</span>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-12">
                {data.sections.map((section, idx) => (
                    <div key={idx}>
                        <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                        {Array.isArray(section.content) ? (
                            section.content.map((p, pIdx) => (
                                <p key={pIdx} className="text-slate-400 leading-relaxed mb-4">{p}</p>
                            ))
                        ) : (
                            <p className="text-slate-400 leading-relaxed mb-4">{section.content}</p>
                        )}
                        {section.bullets && (
                            <ul className="mt-6 space-y-3">
                                {section.bullets.map((b, bIdx) => (
                                    <li key={bIdx} className="flex items-start">
                                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                        <span className="text-slate-300">{b}</span>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>

            {/* Sidebar / Feature List */}
            <div className="lg:col-span-1">
                {(data.features || data.process) && (
                    <div className="bg-navy-900/50 p-8 rounded-2xl sticky top-28 border border-navy-800 backdrop-blur-sm shadow-xl">
                        <h3 className="text-lg font-bold text-white mb-6">
                            {data.featuresTitle || data.processTitle || "Key Details"}
                        </h3>
                        <div className="space-y-6">
                            {(data.features || data.process)?.map((item, idx) => (
                                <div key={idx} className="group">
                                    <h4 className="font-semibold text-slate-200 mb-1 flex items-center group-hover:text-indigo-400 transition-colors">
                                        <div className="w-6 h-6 rounded bg-indigo-500/10 flex items-center justify-center mr-3 border border-indigo-500/20 group-hover:bg-indigo-500/20">
                                            <Check className="w-3.5 h-3.5 text-indigo-400" />
                                        </div>
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-slate-500 pl-9 leading-relaxed">{item.description}</p>
                                </div>
                            ))}
                        </div>
                        <button 
                            onClick={() => onNavigate(PageType.CONTACT)}
                            className="w-full mt-8 bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3.5 rounded-lg font-bold hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2"
                        >
                           Book Consultation
                        </button>
                    </div>
                )}
            </div>
        </div>
      </div>

      {/* Pricing Section - 3D Cards */}
      {data.pricing && data.pricing.length > 0 && (
          <section className="py-24 relative border-t border-navy-800 bg-navy-900/30">
             <div className="max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
                     <p className="text-slate-400">Choose the tier that matches your ambition.</p>
                 </div>

                 <div className="grid md:grid-cols-3 gap-8 perspective-1000">
                     {data.pricing.map((tier, idx) => (
                         <div 
                            key={idx}
                            className={`
                                relative group rounded-3xl p-1 transition-all duration-500 hover:-translate-y-2
                                ${tier.highlight ? 'bg-gradient-to-b from-indigo-500 to-purple-600 shadow-[0_0_40px_-10px_rgba(99,102,241,0.4)]' : 'bg-navy-800 hover:bg-navy-700'}
                            `}
                         >
                             {/* Content Container */}
                             <div className="h-full bg-navy-900 rounded-[22px] p-8 flex flex-col relative overflow-hidden">
                                 {/* Highlight Badge */}
                                 {tier.highlight && (
                                     <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                         Most Popular
                                     </div>
                                 )}

                                 <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                 <div className="text-3xl font-bold text-indigo-400 mb-6">{tier.price}</div>
                                 
                                 <div className="w-full h-px bg-navy-800 mb-6"></div>

                                 <ul className="space-y-4 mb-8 flex-1">
                                     {tier.features.map((feat, fIdx) => (
                                         <li key={fIdx} className="flex items-start text-sm text-slate-300">
                                             <Check className="w-5 h-5 text-indigo-500 mr-3 flex-shrink-0" />
                                             <span className="leading-relaxed">{feat}</span>
                                         </li>
                                     ))}
                                 </ul>

                                 <button 
                                    onClick={() => onNavigate(PageType.CONTACT)}
                                    className={`
                                        w-full py-3.5 rounded-xl font-bold transition-all
                                        ${tier.highlight 
                                            ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white hover:from-indigo-400 hover:to-purple-500 shadow-lg shadow-indigo-900/40' 
                                            : 'bg-navy-800 text-slate-300 hover:bg-navy-700 border border-navy-700 hover:text-white'}
                                    `}
                                 >
                                     Get Started
                                 </button>

                                 {/* Subtle 3D Elements */}
                                 <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-gradient-to-br from-indigo-500/10 to-transparent rounded-full blur-2xl pointer-events-none group-hover:scale-150 transition-transform duration-700"></div>
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
