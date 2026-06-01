
import React, { useEffect } from 'react';
import { DetailPageData, PageType } from '../types';
import { ArrowRight, Zap, Shield, Check, Box } from 'lucide-react';

interface ProductDetailProps {
  data: DetailPageData;
  onNavigate: (page: PageType) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ data, onNavigate }) => {
  const Icon = data.icon;
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="pt-20 mesh-bg min-h-screen text-ink relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-hairline-grid opacity-80"></div>

       {/* Product Hero */}
      <div className="mobile-section-tight bg-paper text-ink py-24 relative overflow-hidden border-b border-hairline z-10">
         {/* Decorative blob */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-petrol opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <span className="bg-petrol/30 text-petrol px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 inline-block border border-petrol/30">
                        AI Product
                    </span>
                    <h1 className="text-[2.7rem] md:text-6xl font-bold mb-6 leading-tight">{data.title}</h1>
                    <p className="mobile-clamp-3 text-lg text-taupe max-w-2xl mx-auto lg:mx-0 leading-relaxed md:text-xl">{data.subtitle}</p>
                    <div className="mt-8 flex justify-center lg:justify-start gap-4">
                        <button 
                            onClick={() => onNavigate(PageType.CONTACT)}
                            className="bg-petrol text-bone px-8 py-3 rounded-full font-semibold hover:bg-petrolDeep transition-colors flex items-center shadow-lg shadow-petrol/20"
                        >
                            Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* 3D Image Title Card */}
                {Icon && (
                    <div className="mobile-visual-hide relative group perspective-1000">
                         <div className="absolute inset-0 bg-brass blur-[80px] opacity-10 rounded-full"></div>
                         <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-petrol/20 to-bone/80 backdrop-blur-xl border border-hairline rounded-3xl shadow-[0_20px_50px_-12px_rgba(79,70,229,0.18)] transform -rotate-y-12 -rotate-x-6 group-hover:rotate-0 transition-all duration-700 ease-out flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <div className="absolute inset-0 border border-hairline rounded-3xl transform scale-95"></div>
                            
                            <Icon className="w-32 h-32 text-petrol drop-shadow-[0_4px_12px_rgba(79,70,229,0.18)] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                            
                            {/* Card Details */}
                            <div className="absolute top-6 right-6">
                                <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_rgba(79,70,229,0.8)] animate-pulse"></div>
                            </div>
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <span className="text-xs font-mono text-petrol/50 uppercase tracking-widest">Ready to Deploy</span>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      <div className="mobile-section-tight max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
         {/* What It Is Section */}
         <div className="mb-20">
             {data.sections.map((section, idx) => (
                <div key={idx} className="max-w-3xl">
                     <h2 className="text-3xl font-bold text-ink mb-6">{section.title}</h2>
                     <div className="prose prose-lg text-taupe leading-relaxed">
                        {Array.isArray(section.content) ? (
                            section.content.map((p, i) => <p key={i} className="mobile-clamp-4 mb-4">{p}</p>)
                        ) : (
                            <p className="mobile-clamp-4">{section.content}</p>
                        )}
                     </div>
                </div>
             ))}
         </div>

         {/* Leveraged & Different Grid */}
         <div className="mobile-priority-two grid md:grid-cols-2 gap-12 mb-20">
             {/* How AI Is Leveraged */}
             {data.howAiIsLeveraged && (
                 <div className="mobile-card-compact bg-parchment/60 p-8 rounded-3xl border border-hairline">
                     <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-petrol/10 rounded-lg">
                             <Zap className="w-6 h-6 text-petrol" />
                         </div>
                         <h3 className="text-xl font-bold text-ink">How AI Is Leveraged</h3>
                     </div>
                     <ul className="mobile-priority-two space-y-4">
                         {data.howAiIsLeveraged.map((item, idx) => (
                             <li key={idx} className="flex items-start text-taupe">
                                 <div className="w-1.5 h-1.5 rounded-full bg-petrol mt-2 mr-3 flex-shrink-0"></div>
                                 <span className="mobile-clamp-3 leading-relaxed">{item}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
             )}

             {/* How It's Different */}
             {data.differentiation && (
                 <div className="mobile-card-compact bg-parchment/60 p-8 rounded-3xl border border-hairline">
                     <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-brass/10 rounded-lg">
                             <Shield className="w-6 h-6 text-brass" />
                         </div>
                         <h3 className="text-xl font-bold text-ink">How It's Different</h3>
                     </div>
                     <ul className="mobile-priority-two space-y-4">
                         {data.differentiation.map((item, idx) => (
                             <li key={idx} className="flex items-start text-taupe">
                                 <Check className="w-5 h-5 text-brass mr-3 flex-shrink-0" />
                                 <span className="mobile-clamp-3 leading-relaxed">{item}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
             )}
         </div>

         {/* Use Cases Grid */}
         {data.useCases && (
             <div className="mb-24">
                 <h2 className="text-3xl font-bold text-ink mb-10 text-center">Use Cases</h2>
                 <div className="mobile-priority-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {data.useCases.map((uc, idx) => (
                         <div key={idx} className="mobile-card-compact bg-paper p-8 rounded-2xl border border-hairline hover:border-petrol/30 transition-all hover:shadow-lg hover:-translate-y-1">
                             <h4 className="text-lg font-bold text-ink mb-4 flex items-center gap-2">
                                 <Box className="w-5 h-5 text-petrol" />
                                 {uc.title}
                             </h4>
                             <ul className="mobile-priority-two space-y-3">
                                 {uc.items.map((item, i) => (
                                     <li key={i} className="text-sm text-taupe flex items-start">
                                         <span className="mr-2 text-petrol/50">•</span>
                                         {item}
                                     </li>
                                 ))}
                             </ul>
                         </div>
                     ))}
                 </div>
             </div>
         )}
         
      </div>

      {/* Pricing Section - 3D Cards */}
      {data.pricing && data.pricing.length > 0 && (
          <section className="mobile-section-tight py-24 relative border-t border-hairline bg-paper/30">
             <div className="max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Transparent Pricing</h2>
                     <p className="text-taupe">Scalable plans for every stage of growth.</p>
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
                             <div className="h-full bg-paper rounded-[22px] p-8 flex flex-col relative overflow-hidden text-center">
                                 {/* Highlight Badge */}
                                 {tier.highlight && (
                                     <div className="absolute top-0 right-0 bg-petrol text-bone text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                         Most Popular
                                     </div>
                                 )}

                                 <h3 className="text-xl font-bold text-ink mb-2">{tier.name}</h3>
                                 <div className="text-2xl font-bold text-petrol mb-8">{tier.price}</div>
                                 
                                 {tier.features && tier.features.length > 0 && (
                                     <>
                                        <div className="w-full h-px bg-parchment mb-6"></div>
                                        <ul className="space-y-4 mb-8 flex-1 text-left">
                                            {tier.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start text-sm text-graphite">
                                                    <Check className="w-4 h-4 text-petrol mr-3 flex-shrink-0" />
                                                    <span className="leading-relaxed">{feat}</span>
                                                </li>
                                            ))}
                                        </ul>
                                     </>
                                 )}

                                 <button 
                                    onClick={() => onNavigate(PageType.CONTACT)}
                                    className={`
                                        w-full py-3.5 rounded-xl font-bold transition-all mt-auto
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

export default ProductDetail;
