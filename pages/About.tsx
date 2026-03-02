
import React, { useEffect } from 'react';
import { PageType } from '../types';
import { 
  Target, Rocket, ShieldCheck, Search, FlaskConical, Zap, 
  Users, Code, GraduationCap, CheckCircle, LayoutTemplate, Globe 
} from 'lucide-react';

interface AboutProps {
    onNavigate: (page: PageType) => void;
}

const About: React.FC<AboutProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 font-sans relative overflow-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      {/* Hero Section */}
      <div className="relative py-24 px-6 overflow-hidden z-10">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-indigo-900/10 blur-[120px] rounded-full translate-x-1/3 -translate-y-1/3"></div>
        
        <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
                {/* Left Column: Text Content */}
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                        Intelligence That <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Delivers Growth</span>
                    </h1>
                    <p className="text-lg text-slate-300 leading-relaxed mb-8">
                        AqionLabs proudly operates from the United Arab Emirates, contributing to the nation’s ambition to lead in advanced technology, digital economy growth, and AI innovation.
                    </p>
                    <p className="text-slate-400 text-lg leading-relaxed border-l-4 border-indigo-600 pl-6 italic mb-8 lg:mb-0">
                        By combining local leadership with global delivery, AqionLabs helps position the UAE as a hub for enterprise AI excellence — exporting innovation from the region to the world.
                    </p>
                </div>

                {/* Right Column: Vision Card */}
                <div className="bg-navy-900/50 border border-navy-800 rounded-2xl p-8 backdrop-blur-sm">
                    <h3 className="text-white font-semibold mb-6 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-indigo-400" />
                        Aligned with the UAE’s Vision 2031 strategy:
                    </h3>
                    <ul className="space-y-4">
                        {[
                            "Digital transformation across public and private sectors",
                            "AI adoption that enhances economic diversification",
                            "Development of knowledge-based, innovation-driven enterprises",
                            "Creation of high-value technology capabilities within the region"
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0 mt-0.5" />
                                <span className="text-slate-400 text-sm leading-relaxed">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
        </div>

      {/* Vision & Mission */}
      <section className="py-24 bg-navy-900 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-2 gap-12">
                  {/* Vision */}
                  <div className="bg-navy-950 p-10 rounded-3xl border border-navy-800 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                      <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Target className="w-32 h-32 text-indigo-500" />
                      </div>
                      <div className="relative z-10">
                          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                              <Target className="w-7 h-7" />
                          </div>
                          <h2 className="text-3xl font-bold text-white mb-6">Vision</h2>
                          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                              To become the leading Artificial intelligence platform originating from the UAE, empowering organisations worldwide to operate with intelligent, data-driven precision and sustainable growth.
                          </p>
                          <p className="text-slate-400 leading-relaxed">
                              We envision a future where AI is seamlessly embedded across every enterprise — driving smarter decisions, greater efficiency, and long-term economic impact.
                          </p>
                      </div>
                  </div>

                  {/* Mission */}
                  <div className="bg-navy-950 p-10 rounded-3xl border border-navy-800 relative overflow-hidden group hover:border-indigo-500/30 transition-all">
                       <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                          <Rocket className="w-32 h-32 text-indigo-500" />
                      </div>
                      <div className="relative z-10">
                          <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                              <Rocket className="w-7 h-7" />
                          </div>
                          <h2 className="text-3xl font-bold text-white mb-6">Mission</h2>
                          <p className="text-slate-400 leading-relaxed mb-6 text-lg">
                              Our mission is to transform AI from experimentation into measurable business performance.
                          </p>
                          <p className="text-slate-400 leading-relaxed">
                              We design, deploy, and scale secure, enterprise-grade AI systems that increase revenue, optimise operations, and strengthen competitive advantage across healthcare, retail, financial services, and corporate sectors.
                          </p>
                          <p className="text-slate-400 leading-relaxed mt-4 font-semibold text-indigo-400">
                              Through structured frameworks, certified expertise, and scalable platforms, we ensure intelligence is applied — not just discussed.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* What We Enable */}
      <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">What We Enable</h2>
                  <div className="w-24 h-1 bg-indigo-600 mx-auto rounded-full"></div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                  <div className="flex flex-col h-full bg-navy-900/50 border border-navy-800 p-8 rounded-3xl hover:bg-navy-900 transition-colors">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-400">
                              <LayoutTemplate className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">AI Frameworks That Accelerate Growth</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed flex-grow">
                          We build and curate a structured Intelligence Hub — powered by proprietary frameworks, deployment playbooks, certified partners, AI platforms, and applied research — ensuring clients move faster from strategy to measurable results.
                      </p>
                  </div>

                  <div className="flex flex-col h-full bg-navy-900/50 border border-navy-800 p-8 rounded-3xl hover:bg-navy-900 transition-colors">
                      <div className="flex items-center gap-4 mb-6">
                          <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center text-purple-400">
                              <ShieldCheck className="w-6 h-6" />
                          </div>
                          <h3 className="text-2xl font-bold text-white">Enterprise-Grade Delivery at Scale</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed flex-grow">
                          We empower independent consultants and developer partners with structured methodology, governance standards, and AI tooling to support large-scale enterprise deployments across healthcare, retail, and corporate sectors.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* How AqionLabs Works */}
      <section className="py-24 bg-navy-900 border-t border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-4xl font-bold text-white mb-16 text-center">How AqionLabs Works</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                  {/* Step 1 */}
                  <div className="relative p-8 rounded-3xl bg-navy-950 border border-navy-800 group hover:-translate-y-2 transition-transform duration-300">
                      <div className="absolute -top-6 left-8 bg-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-900/40">1</div>
                      <div className="mt-6 mb-6 text-indigo-400">
                          <Search className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Exploration</h3>
                      <p className="text-slate-400 leading-relaxed">
                          We assess AI readiness and identify high-impact opportunities across revenue, marketing, service, and operations — prioritising use cases that deliver measurable ROI.
                      </p>
                  </div>

                  {/* Step 2 */}
                  <div className="relative p-8 rounded-3xl bg-navy-950 border border-navy-800 group hover:-translate-y-2 transition-transform duration-300">
                      <div className="absolute -top-6 left-8 bg-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-900/40">2</div>
                      <div className="mt-6 mb-6 text-indigo-400">
                          <FlaskConical className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Experimentation</h3>
                      <p className="text-slate-400 leading-relaxed">
                          Using structured Lab frameworks and certified technology partners, we rapidly build Proof-of-Concepts (PoCs) and MVPs that validate value before full-scale investment.
                      </p>
                  </div>

                  {/* Step 3 */}
                  <div className="relative p-8 rounded-3xl bg-navy-950 border border-navy-800 group hover:-translate-y-2 transition-transform duration-300">
                      <div className="absolute -top-6 left-8 bg-indigo-600 text-white w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl shadow-lg shadow-indigo-900/40">3</div>
                      <div className="mt-6 mb-6 text-indigo-400">
                          <Zap className="w-10 h-10" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4">Execution</h3>
                      <p className="text-slate-400 leading-relaxed">
                          We deploy secure, scalable AI systems with full integration, team enablement, governance controls, and performance measurement — supported by our master consultant and partner network.
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Ecosystem Section */}
      <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16 max-w-3xl mx-auto">
                  <h2 className="text-4xl font-bold text-white mb-6">The AqionLabs Ecosystem</h2>
                  <p className="text-lg text-slate-400">
                      AqionLabs operates through a structured ecosystem designed to deliver enterprise-grade AI at scale — combining expertise, technology, and research into a unified intelligence network.
                  </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                  {/* Consultants */}
                  <div className="bg-navy-900 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all">
                      <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-6 text-blue-400">
                          <Users className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Licensed Consultants</h3>
                      <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                          <p>A curated network of certified AI specialists delivering strategy, workshops, and implementation across industries.</p>
                          <p>Backed by AqionLabs proprietary frameworks, global case studies, and governance standards, our consultants ensure consistent, high-quality outcomes for enterprise clients.</p>
                          <p>Regional leaders oversee quality assurance, partner certification, and enterprise alignment across key markets.</p>
                      </div>
                  </div>

                  {/* Developers */}
                  <div className="bg-navy-900 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all">
                      <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400">
                          <Code className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Developer Partners</h3>
                      <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                          <p>Accredited AI engineers and product builders who co-create MVPs, customise enterprise systems, and scale intelligent solutions.</p>
                          <p>Operating under structured SLAs, our developer partners ensure secure deployment, continuous optimisation, and long-term performance.</p>
                      </div>
                  </div>

                  {/* Tech Partners */}
                  <div className="bg-navy-900 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-all">
                      <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400">
                          <GraduationCap className="w-7 h-7" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-4">Technology & Academic Partners</h3>
                      <div className="space-y-4 text-slate-400 leading-relaxed text-sm">
                          <p>Preferred technology providers and research institutions that contribute innovation, applied research, and best practices into the AqionLabs Intelligence Hub — ensuring our clients stay ahead of emerging AI advancements.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* CTA */}
      <div className="py-24 text-center px-6 relative z-10 border-t border-navy-800 bg-navy-900/30">
          <h2 className="text-3xl font-bold mb-6">Ready to transform your business?</h2>
          <button 
            onClick={() => onNavigate(PageType.CONTACT)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg shadow-indigo-900/30"
          >
              Get in Touch
          </button>
      </div>
    </div>
  );
};

export default About;
