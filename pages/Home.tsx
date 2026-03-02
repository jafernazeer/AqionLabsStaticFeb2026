
import React from 'react';
import { PageType } from '../types';
import { 
  ArrowRight, Bot, MessageSquare, Shield, 
  Phone, Check, Activity, Globe, Users, GraduationCap,
  Briefcase, ShieldCheck, Layers, ShoppingCart,
  Workflow, Server, Stethoscope, Building, Landmark, Truck, Coffee, TrendingUp
} from 'lucide-react';

interface HomeProps {
    onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const scrollToServices = () => {
    const element = document.getElementById('core-ai-services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-navy-950 text-white overflow-x-hidden font-sans relative">
      
      {/* Background Grid - Global for Home - Increased opacity */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
      
      {/* Subtle Indigo Glows */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Hero Section */}
      <main className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto z-10 flex flex-col items-center text-center">
          
          <h1 className="font-bold text-white mb-8 max-w-6xl tracking-tight animate-entry delay-[100ms] flex flex-col items-center">
             <span className="text-3xl md:text-5xl lg:text-7xl leading-tight text-slate-200">Intelligence That</span>
             <span className="text-5xl md:text-7xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 leading-[0.9] mt-2 pb-4 drop-shadow-2xl">Delivers Growth</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed animate-entry delay-[200ms] font-light">
             At AqionLabs, we help businesses across the UAE turn AI into measurable revenue, operational efficiency, and real competitive advantage. Through our integrated AI ecosystem, we convert strategy into fully deployed solutions, enabling scalable growth from pilot projects to enterprise-wide implementation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-entry delay-[300ms] w-full justify-center">
              <button 
                  onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                  className="group px-8 py-4 rounded-full bg-white text-navy-950 font-bold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              >
                  <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                    Explore AqionVox
                  </span>
                  <Bot className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
              </button>
              <button 
                  onClick={scrollToServices}
                  className="px-8 py-4 rounded-full bg-indigo-600/10 border border-indigo-500/50 text-white font-bold hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
              >
                  Explore AI Services <ArrowRight className="w-4 h-4" />
              </button>
          </div>
      </main>

      {/* Flagship Product Showcase: AqionVox */}
      <section className="py-24 relative z-10 border-y border-navy-800 bg-navy-900/50">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div>
                      <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionVox</span></h2>
                      <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                          The AI customer support agent that answers, qualifies, and converts. <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 font-bold">Generating Revenue 24/7.</span>
                      </p>
                      
                      <div className="space-y-4 mb-10">
                          {[
                              "Answers phone calls instantly in natural Arabic and English",
                              "Engages and nurtures leads on WhatsApp 24/7",
                              "Qualifies leads based on intent and books slots",
                              "Unified CRM view of every interaction"
                          ].map((feature, i) => (
                              <div key={i} className="flex items-start gap-3">
                                  <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                      <Check className="w-4 h-4 text-emerald-500" />
                                  </div>
                                  <span className="text-slate-400">{feature}</span>
                              </div>
                          ))}
                      </div>

                      <button 
                          onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                          className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-indigo-300 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                      >
                          Explore AqionVox <ArrowRight className="w-5 h-5" />
                      </button>
                  </div>

                  {/* Visual Representation */}
                  <div className="relative group perspective-1000">
                      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
                      <div className="relative bg-navy-900 border border-navy-800 rounded-3xl p-8 shadow-2xl transform rotate-y-6 group-hover:rotate-0 transition-all duration-700">
                          {/* Mock UI Elements */}
                          <div className="flex items-center justify-between mb-8 border-b border-navy-800 pb-4">
                              <div className="flex items-center gap-3">
                                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                              </div>
                              <div className="text-xs text-slate-500 font-mono">AqionVox Engine</div>
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                                  <Phone className="w-6 h-6 text-indigo-400 mb-2" />
                                  <div className="text-2xl font-bold text-white">0s</div>
                                  <div className="text-xs text-slate-500">Hold Time</div>
                              </div>
                              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                                  <Activity className="w-6 h-6 text-emerald-400 mb-2" />
                                  <div className="text-2xl font-bold text-white">24/7</div>
                                  <div className="text-xs text-slate-500">Availability</div>
                              </div>
                          </div>

                          <div className="bg-navy-950 rounded-xl p-4 border border-navy-800 space-y-3">
                              <div className="flex gap-3">
                                  <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                                  <div className="bg-navy-800 rounded-lg rounded-tl-none p-3 text-sm text-slate-300">
                                      Hello! I'd like to book an appointment for tomorrow.
                                  </div>
                              </div>
                              <div className="flex gap-3 flex-row-reverse">
                                  <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                      <Bot className="w-4 h-4 text-white" />
                                  </div>
                                  <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg rounded-tr-none p-3 text-sm text-indigo-100">
                                      I can help with that. We have slots at 10:00 AM and 2:00 PM. Which works best for you?
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>



      {/* Core AI Services Section */}
      <section id="core-ai-services" className="py-24 relative bg-navy-950/50 z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core AI Services</h2>
                  <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                      Comprehensive strategies, development, and governance to integrate intelligence into your business fabric.
                  </p>
                  <div className="w-24 h-1 bg-indigo-600 mx-auto mt-8 rounded-full"></div>
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                  {/* Web & Mobile Application Development */}
                  <div 
                    onClick={() => onNavigate(PageType.SERVICE_RAPID_APP)}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                      <div className="relative z-10">
                          <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                              <Globe className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">Web & Mobile Application Development</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Web & mobile applications — rapid deployment. We build custom web apps, SaaS digital products, PWAs, and single-page solutions.
                          </p>
                      </div>
                      <Globe className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Conversational AI */}
                  <div 
                    onClick={() => onNavigate(PageType.SERVICE_CONVERSATIONAL_AI)}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                      <div className="relative z-10">
                          <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                              <MessageSquare className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">Conversational AI</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Custom AI chat, voice, and avatar systems. Deploy hyper-realistic, interactive AI avatars and intelligent chatbots.
                          </p>
                      </div>
                      <MessageSquare className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* AI Automation */}
                  <div 
                    onClick={() => onNavigate(PageType.SERVICE_AI_AUTOMATION)}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                      <div className="relative z-10">
                          <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                              <Workflow className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">AI Automation</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Streamline workflows and operational processes. Automate internal task flows between people and systems.
                          </p>
                      </div>
                      <Workflow className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* Enterprise AI Solutions */}
                  <div 
                    onClick={() => onNavigate(PageType.SERVICE_ENTERPRISE_AI)}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                      <div className="relative z-10">
                          <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                              <Server className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">Enterprise AI Solutions</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              Private GPT, secure AI deployments, knowledge systems. Turn your static file storage into an active intelligence engine.
                          </p>
                      </div>
                      <Server className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  </div>

                  {/* AI Strategy & Governance */}
                  <div 
                    onClick={() => onNavigate(PageType.SERVICE_AI_STRATEGY)}
                    className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  >
                      <div className="relative z-10">
                          <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                              <Shield className="w-6 h-6" />
                          </div>
                          <h3 className="text-xl font-bold text-white mb-3">AI Strategy & Governance</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">
                              AI readiness, advisory, compliance frameworks. Ensure your AI is implemented responsibly and aligned with business goals.
                          </p>
                      </div>
                      <Shield className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                  </div>
              </div>
          </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="py-24 relative z-10 bg-navy-900">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                      Tailored AI solutions for specific industry challenges.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                      { title: "Healthcare", icon: Stethoscope, page: PageType.INDUSTRY_HEALTHCARE },
                      { title: "Real Estate", icon: Building, page: PageType.INDUSTRY_REAL_ESTATE },
                      { title: "Education", icon: GraduationCap, page: PageType.INDUSTRY_EDUCATION },
                      { title: "Retail", icon: ShoppingCart, page: PageType.INDUSTRY_RETAIL },
                      { title: "Government", icon: Landmark, page: PageType.INDUSTRY_GOVERNMENT },
                      { title: "Financial Services", icon: Briefcase, page: PageType.INDUSTRY_FINANCE },
                      { title: "Hospitality", icon: Coffee, page: PageType.INDUSTRY_HOSPITALITY },
                      { title: "Logistics", icon: Truck, page: PageType.INDUSTRY_LOGISTICS },
                      { title: "Professional Services", icon: Users, page: PageType.INDUSTRY_PROFESSIONAL }
                  ].map((industry, idx) => (
                      <div 
                        key={idx}
                        onClick={() => onNavigate(industry.page)}
                        className="bg-navy-950 border border-navy-800 p-6 rounded-2xl hover:border-indigo-500/30 hover:bg-navy-900 transition-all cursor-pointer flex items-center gap-4 group"
                      >
                          <div className="w-12 h-12 bg-indigo-500/10 rounded-xl flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                              <industry.icon className="w-6 h-6" />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">{industry.title}</h3>
                              <span className="text-xs text-slate-500 uppercase tracking-wider group-hover:text-slate-400">View Solution</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-600 ml-auto group-hover:text-indigo-400 group-hover:translate-x-1 transition-all" />
                      </div>
                  ))}
              </div>
           </div>
      </section>

      {/* Why AqionLabs Section */}
      <section className="py-24 relative z-10 bg-navy-950/50">
           <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold text-white mb-6">Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionLabs</span>?</h2>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                      We deliver more than just technology; we deliver outcomes.
                  </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  <div className="bg-navy-900/50 p-8 rounded-3xl border border-navy-800 text-center hover:border-indigo-500/30 transition-all">
                      <div className="w-16 h-16 bg-indigo-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-indigo-400">
                          <Globe className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Arabic AI Capability</h3>
                      <p className="text-slate-400 text-sm">Native understanding of local dialects and cultural nuances.</p>
                  </div>
                  <div className="bg-navy-900/50 p-8 rounded-3xl border border-navy-800 text-center hover:border-indigo-500/30 transition-all">
                      <div className="w-16 h-16 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
                          <ShieldCheck className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
                      <p className="text-slate-400 text-sm">Bank-grade security protocols and data sovereignty compliance.</p>
                  </div>
                  <div className="bg-navy-900/50 p-8 rounded-3xl border border-navy-800 text-center hover:border-indigo-500/30 transition-all">
                      <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-purple-400">
                          <TrendingUp className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Revenue Focused</h3>
                      <p className="text-slate-400 text-sm">Solutions designed to generate ROI, not just operational efficiency.</p>
                  </div>
                  <div className="bg-navy-900/50 p-8 rounded-3xl border border-navy-800 text-center hover:border-indigo-500/30 transition-all">
                      <div className="w-16 h-16 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-400">
                          <Layers className="w-8 h-8" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">Strategy to Execution</h3>
                      <p className="text-slate-400 text-sm">End-to-end partnership from initial roadmap to full deployment.</p>
                  </div>
              </div>
           </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative z-10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-navy-950"></div>
          <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to transform your business?</h2>
              <p className="text-xl text-slate-300 mb-12">
                  Whether you need a strategic roadmap or a fully deployed AI workforce, AqionLabs is your partner in intelligence.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button 
                      onClick={() => onNavigate(PageType.CONTACT)}
                      className="px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg hover:from-indigo-400 hover:to-purple-500 transition-all shadow-xl shadow-indigo-900/40"
                  >
                      Book a Consultation
                  </button>
                  <button 
                      onClick={() => onNavigate(PageType.ABOUT)}
                      className="px-10 py-5 rounded-full bg-navy-800 text-white font-bold text-lg hover:bg-navy-700 transition-all border border-navy-700"
                  >
                      Learn More About Us
                  </button>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
