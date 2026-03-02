import React, { useEffect } from 'react';
import { IndustryPageData, PageType } from '../types';
import { Check, ArrowRight, TrendingUp, Shield, Bot, Workflow, Server } from 'lucide-react';

interface IndustryDetailProps {
  data: IndustryPageData;
  onNavigate: (page: PageType) => void;
}

const IndustryDetail: React.FC<IndustryDetailProps> = ({ data, onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [data]);

  return (
    <div className="pt-20 bg-navy-950 min-h-screen text-slate-200 relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      {/* Hero Section */}
      <div className="bg-navy-900 py-20 border-b border-navy-800 relative z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
            <span className="bg-indigo-900/30 text-indigo-300 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide mb-6 inline-block border border-indigo-500/30">
                Industry Solution
            </span>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                {data.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-light text-indigo-400 mb-6">
                {data.headline}
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl leading-relaxed">
                {data.context}
            </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10 space-y-24">
        
        {/* Challenges Section */}
        <section>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-red-500 rounded-full"></span>
                Industry Challenges
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.challenges.map((challenge, idx) => (
                    <div key={idx} className="bg-navy-900/50 border border-navy-800 p-6 rounded-xl hover:border-red-500/30 transition-colors">
                        <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center mb-4 text-red-400 font-bold">
                            {idx + 1}
                        </div>
                        <p className="text-slate-300 font-medium">{challenge}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Solutions Section */}
        <section>
            <h3 className="text-3xl font-bold text-white mb-12 flex items-center gap-3">
                <span className="w-1 h-8 bg-indigo-500 rounded-full"></span>
                AqionLabs Solutions
            </h3>
            
            <div className="grid gap-8">
                {/* AqionVox */}
                {data.solutions.aqionVox && (
                    <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800 rounded-2xl p-8 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Bot className="w-32 h-32 text-indigo-500" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Bot className="w-6 h-6 text-indigo-400" />
                                AqionVox Capabilities
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.solutions.aqionVox.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-indigo-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* AI Automation */}
                {data.solutions.aiAutomation && (
                    <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800 rounded-2xl p-8 relative overflow-hidden group hover:border-emerald-500/30 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Workflow className="w-32 h-32 text-emerald-500" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Workflow className="w-6 h-6 text-emerald-400" />
                                AI Automation
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.solutions.aiAutomation.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Enterprise AI */}
                {data.solutions.enterpriseAi && (
                    <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800 rounded-2xl p-8 relative overflow-hidden group hover:border-purple-500/30 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Server className="w-32 h-32 text-purple-500" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Server className="w-6 h-6 text-purple-400" />
                                Enterprise AI Solutions
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.solutions.enterpriseAi.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                {/* Governance */}
                {data.solutions.governance && (
                    <div className="bg-gradient-to-br from-navy-900 to-navy-950 border border-navy-800 rounded-2xl p-8 relative overflow-hidden group hover:border-orange-500/30 transition-all">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Shield className="w-32 h-32 text-orange-500" />
                        </div>
                        <div className="relative z-10">
                            <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Shield className="w-6 h-6 text-orange-400" />
                                Governance & Compliance
                            </h4>
                            <div className="grid md:grid-cols-2 gap-4">
                                {data.solutions.governance.map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3">
                                        <Check className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                                        <span className="text-slate-300">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>

        {/* Outcomes Section */}
        <section>
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <span className="w-1 h-8 bg-green-500 rounded-full"></span>
                Measurable Outcomes
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                {data.outcome.map((outcome, idx) => (
                    <div key={idx} className="bg-navy-900/80 border border-navy-800 p-6 rounded-xl text-center">
                        <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4 text-green-400">
                            <TrendingUp className="w-6 h-6" />
                        </div>
                        <p className="text-lg font-semibold text-white">{outcome}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 border border-indigo-500/30 rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white opacity-5 pointer-events-none"></div>
            <div className="relative z-10">
                <h3 className="text-3xl font-bold text-white mb-6">Ready to Transform?</h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button 
                        onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                        className="bg-white text-indigo-900 px-8 py-4 rounded-full font-bold hover:bg-indigo-50 transition-colors shadow-lg shadow-white/10 flex items-center justify-center gap-2"
                    >
                        Book AqionVox Demo <ArrowRight className="w-5 h-5" />
                    </button>
                    <button 
                        onClick={() => onNavigate(PageType.CONTACT)}
                        className="bg-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20 flex items-center justify-center gap-2"
                    >
                        Request AI Strategy Session
                    </button>
                </div>
            </div>
        </section>

      </div>
    </div>
  );
};

export default IndustryDetail;
