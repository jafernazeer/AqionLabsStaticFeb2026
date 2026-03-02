
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
    <div className="pt-20 bg-navy-950 min-h-screen text-slate-200 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

       {/* Product Hero */}
      <div className="bg-navy-900 text-white py-24 relative overflow-hidden border-b border-navy-800 z-10">
         {/* Decorative blob */}
         <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-600 opacity-10 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
         
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <div className="flex-1 text-center lg:text-left">
                    <span className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 inline-block border border-indigo-500/30">
                        AI Product
                    </span>
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">{data.title}</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed">{data.subtitle}</p>
                    <div className="mt-8 flex justify-center lg:justify-start gap-4">
                        <button 
                            onClick={() => onNavigate(PageType.CONTACT)}
                            className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:from-indigo-400 hover:to-purple-500 transition-colors flex items-center shadow-lg shadow-indigo-900/20"
                        >
                            Request Demo <ArrowRight className="ml-2 w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* 3D Image Title Card */}
                {Icon && (
                    <div className="relative group perspective-1000">
                         <div className="absolute inset-0 bg-violet-500 blur-[80px] opacity-10 rounded-full"></div>
                         <div className="relative w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-indigo-600/20 to-navy-900/80 backdrop-blur-xl border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(79,70,229,0.3)] transform -rotate-y-12 -rotate-x-6 group-hover:rotate-0 transition-all duration-700 ease-out flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent rounded-3xl pointer-events-none"></div>
                            <div className="absolute inset-0 border border-white/5 rounded-3xl transform scale-95"></div>
                            
                            <Icon className="w-32 h-32 text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.5)] transform group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                            
                            {/* Card Details */}
                            <div className="absolute top-6 right-6">
                                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(34,197,94,0.8)] animate-pulse"></div>
                            </div>
                            <div className="absolute bottom-6 left-0 w-full text-center">
                                <span className="text-xs font-mono text-indigo-300/50 uppercase tracking-widest">Ready to Deploy</span>
                            </div>
                         </div>
                    </div>
                )}
            </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
         {/* What It Is Section */}
         <div className="mb-20">
             {data.sections.map((section, idx) => (
                <div key={idx} className="max-w-3xl">
                     <h2 className="text-3xl font-bold text-white mb-6">{section.title}</h2>
                     <div className="prose prose-lg text-slate-400 leading-relaxed">
                        {Array.isArray(section.content) ? (
                            section.content.map((p, i) => <p key={i} className="mb-4">{p}</p>)
                        ) : (
                            <p>{section.content}</p>
                        )}
                     </div>
                </div>
             ))}
         </div>

         {/* Leveraged & Different Grid */}
         <div className="grid md:grid-cols-2 gap-12 mb-20">
             {/* How AI Is Leveraged */}
             {data.howAiIsLeveraged && (
                 <div className="bg-navy-900/50 p-8 rounded-3xl border border-navy-800">
                     <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-indigo-500/10 rounded-lg">
                             <Zap className="w-6 h-6 text-indigo-400" />
                         </div>
                         <h3 className="text-xl font-bold text-white">How AI Is Leveraged</h3>
                     </div>
                     <ul className="space-y-4">
                         {data.howAiIsLeveraged.map((item, idx) => (
                             <li key={idx} className="flex items-start text-slate-400">
                                 <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></div>
                                 <span className="leading-relaxed">{item}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
             )}

             {/* How It's Different */}
             {data.differentiation && (
                 <div className="bg-navy-900/50 p-8 rounded-3xl border border-navy-800">
                     <div className="flex items-center gap-3 mb-6">
                         <div className="p-2 bg-violet-500/10 rounded-lg">
                             <Shield className="w-6 h-6 text-violet-400" />
                         </div>
                         <h3 className="text-xl font-bold text-white">How It's Different</h3>
                     </div>
                     <ul className="space-y-4">
                         {data.differentiation.map((item, idx) => (
                             <li key={idx} className="flex items-start text-slate-400">
                                 <Check className="w-5 h-5 text-violet-500 mr-3 flex-shrink-0" />
                                 <span className="leading-relaxed">{item}</span>
                             </li>
                         ))}
                     </ul>
                 </div>
             )}
         </div>

         {/* Use Cases Grid */}
         {data.useCases && (
             <div className="mb-24">
                 <h2 className="text-3xl font-bold text-white mb-10 text-center">Use Cases</h2>
                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                     {data.useCases.map((uc, idx) => (
                         <div key={idx} className="bg-navy-900 p-8 rounded-2xl border border-navy-800 hover:border-indigo-500/30 transition-all hover:shadow-lg hover:-translate-y-1">
                             <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                                 <Box className="w-5 h-5 text-indigo-500" />
                                 {uc.title}
                             </h4>
                             <ul className="space-y-3">
                                 {uc.items.map((item, i) => (
                                     <li key={i} className="text-sm text-slate-400 flex items-start">
                                         <span className="mr-2 text-indigo-500/50">•</span>
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
          <section className="py-24 relative border-t border-navy-800 bg-navy-900/30">
             <div className="max-w-7xl mx-auto px-6">
                 <div className="text-center mb-16">
                     <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Transparent Pricing</h2>
                     <p className="text-slate-400">Scalable plans for every stage of growth.</p>
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
                             <div className="h-full bg-navy-900 rounded-[22px] p-8 flex flex-col relative overflow-hidden text-center">
                                 {/* Highlight Badge */}
                                 {tier.highlight && (
                                     <div className="absolute top-0 right-0 bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-bl-xl uppercase tracking-wider">
                                         Most Popular
                                     </div>
                                 )}

                                 <h3 className="text-xl font-bold text-white mb-2">{tier.name}</h3>
                                 <div className="text-2xl font-bold text-indigo-400 mb-8">{tier.price}</div>
                                 
                                 {tier.features && tier.features.length > 0 && (
                                     <>
                                        <div className="w-full h-px bg-navy-800 mb-6"></div>
                                        <ul className="space-y-4 mb-8 flex-1 text-left">
                                            {tier.features.map((feat, fIdx) => (
                                                <li key={fIdx} className="flex items-start text-sm text-slate-300">
                                                    <Check className="w-4 h-4 text-indigo-500 mr-3 flex-shrink-0" />
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

export default ProductDetail;
