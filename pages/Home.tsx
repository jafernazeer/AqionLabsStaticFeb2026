
import React, { useEffect, useRef, useState } from 'react';
import { PageType } from '../types';
import { useLocation } from 'react-router-dom';
import Vapi from '@vapi-ai/web';
import { VAPI_PUBLIC_KEY, VAPI_ASSISTANT_ID } from '../constants';
import { 
  ArrowRight, Bot, MessageSquare, Shield, 
  Phone, Check, Activity, Globe, GraduationCap,
  ShieldCheck, Layers, ShoppingBag, Ticket,
  Workflow, Server, Stethoscope, Building, Landmark, Truck, Coffee, TrendingUp, Megaphone, Ruler, Banknote, Briefcase,
  Loader2, PhoneOff
} from 'lucide-react';

interface HomeProps {
    onNavigate: (page: PageType) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const location = useLocation();
  const industriesSectionRef = useRef<HTMLElement>(null);
  const [callStatus, setCallStatus] = useState<'inactive' | 'loading' | 'active'>('inactive');
  const vapiRef = useRef<any>(null);

  useEffect(() => {
    const vapi = new Vapi(VAPI_PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on('call-start', () => {
      setCallStatus('active');
    });

    vapi.on('call-end', () => {
      setCallStatus('inactive');
    });

    vapi.on('error', (e) => {
      console.error(e);
      setCallStatus('inactive');
    });

    return () => {
      vapi.stop();
    };
  }, []);

  const toggleCall = async () => {
    if (callStatus === 'active') {
      vapiRef.current?.stop();
      setCallStatus('inactive');
    } else {
      setCallStatus('loading');
      try {
        await vapiRef.current?.start(VAPI_ASSISTANT_ID);
      } catch (e) {
        console.error(e);
        setCallStatus('inactive');
      }
    }
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const shouldScrollToIndustries = urlParams.get('industries') === 'true';

    if (shouldScrollToIndustries && industriesSectionRef.current) {
        setTimeout(() => {
            industriesSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    } else {
        window.scrollTo(0, 0);
    }
  }, [location.search]);

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



      <div className="flex flex-col">
          {/* Core AI Services Section */}
          <section id="core-ai-services" className="py-24 relative bg-navy-950/50 z-10 order-3 md:order-1">
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
          <section ref={industriesSectionRef} className="py-12 md:py-24 relative z-10 bg-navy-900 order-1 md:order-2">
               <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-10 md:mb-16">
                      <h2 className="text-4xl font-bold text-white mb-6">Industries We Serve</h2>
                      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                          Tailored AI solutions for specific industry challenges.
                      </p>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">
                      {[
                          { title: "Healthcare", icon: Stethoscope, page: PageType.INDUSTRY_HEALTHCARE, color: 'text-teal-400', bg: 'bg-teal-500/20', desc: 'Patient booking & triage.' },
                          { title: "Retail", icon: ShoppingBag, page: PageType.INDUSTRY_RETAIL, color: 'text-blue-400', bg: 'bg-blue-500/20', desc: 'Order & FAQ handling.' },
                          { title: "Government", icon: Landmark, page: PageType.INDUSTRY_GOVERNMENT, color: 'text-slate-400', bg: 'bg-slate-500/20', desc: 'Citizen support.' },
                          { title: "Real Estate", icon: Building, page: PageType.INDUSTRY_REAL_ESTATE, color: 'text-amber-400', bg: 'bg-amber-500/20', desc: 'Lead qualification.' },
                          { title: "Education", icon: GraduationCap, page: PageType.INDUSTRY_EDUCATION, color: 'text-indigo-400', bg: 'bg-indigo-500/20', desc: 'Enrollment enquiries.' },
                          { title: "Financial Services", icon: Banknote, page: PageType.INDUSTRY_FINANCE, color: 'text-emerald-400', bg: 'bg-emerald-500/20', desc: 'Account queries.' },
                          { title: "Hospitality", icon: Coffee, page: PageType.INDUSTRY_HOSPITALITY, color: 'text-rose-400', bg: 'bg-rose-500/20', desc: 'Booking management.' },
                          { title: "Legal", icon: Briefcase, page: PageType.INDUSTRY_PROFESSIONAL, color: 'text-sky-400', bg: 'bg-sky-500/20', desc: 'Client onboarding.' },
                          { title: "Media & Events", icon: Ticket, page: PageType.INDUSTRY_MEDIA_EVENTS, color: 'text-purple-400', bg: 'bg-purple-500/20', desc: 'Ticketing enquiries.' },
                          { title: "Logistics", icon: Truck, page: PageType.INDUSTRY_LOGISTICS, color: 'text-orange-400', bg: 'bg-orange-500/20', desc: 'Shipment tracking.' },
                          { title: "Architecture & Planning", mobileTitle: "Architecture", icon: Ruler, page: PageType.INDUSTRY_ARCHITECTURE, color: 'text-cyan-400', bg: 'bg-cyan-500/20', desc: 'Project enquiries.' },
                          { title: "Marketing & Design", mobileTitle: "Marketing", icon: Megaphone, page: PageType.INDUSTRY_MARKETING_DESIGN, color: 'text-pink-400', bg: 'bg-pink-500/20', desc: 'Campaign enquiries.' }
                      ].map((industry, idx) => (
                          <div 
                            key={idx}
                            onClick={() => onNavigate(industry.page)}
                            className={`bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-2 md:p-4 flex items-center gap-2 md:gap-3 hover:bg-white/10 transition-colors group cursor-pointer`}
                          >
                              <div className={`p-1.5 md:p-2 rounded-lg ${industry.bg} ${industry.color} group-hover:scale-110 transition-transform duration-300 shrink-0`}>
                                  <industry.icon className="w-4 h-4 md:w-5 md:h-5" />
                              </div>
                              <div className="flex-1 min-w-0">
                                  <h4 className="text-[11px] sm:text-xs md:text-base font-bold text-white leading-tight truncate">
                                      <span className="md:hidden">{industry.mobileTitle || industry.title}</span>
                                      <span className="hidden md:block">{industry.title}</span>
                                  </h4>
                                  <p className="text-slate-400 text-xs mt-0.5 line-clamp-2 hidden md:block">{industry.desc}</p>
                              </div>
                          </div>
                      ))}
                  </div>
               </div>
          </section>

          {/* Try an Industry Demo Now Section */}
          <section className="py-12 md:py-24 bg-navy-900/30 border-y border-navy-800 relative z-10 order-2 md:order-3">
              <div className="max-w-7xl mx-auto px-6">
                  <div className="text-center mb-10 md:mb-12">
                      <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                          <span className="md:hidden">Try a Demo Call Now</span>
                          <span className="hidden md:inline">Try a Live Demo Call Now</span>
                      </h2>
                  </div>

                  <div className="flex justify-center px-4">
                      <div className="w-full max-w-2xl">
                          <div className="bg-navy-950 border border-navy-800 rounded-3xl p-8 md:p-10 relative overflow-hidden flex flex-col items-center justify-center text-center shadow-2xl">
                              {/* Background Glow */}
                              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
                              
                              <div className="relative z-10 w-full flex flex-col items-center">
                                  <h3 className="text-lg md:text-xl font-medium text-slate-300 mb-8 max-w-md leading-relaxed">
                                      Click the "Start a Call" button to speak with our AI agent now.
                                  </h3>
                                  
                                  <div className="mb-6 relative inline-block">
                                      <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 p-1 shadow-[0_0_40px_rgba(99,102,241,0.3)]">
                                          <div className="w-full h-full rounded-full bg-navy-900 flex items-center justify-center border-4 border-navy-950">
                                              <Phone className="w-10 h-10 md:w-12 md:h-12 text-white fill-current" />
                                          </div>
                                      </div>
                                      <div className="absolute bottom-2 right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-navy-950 flex items-center justify-center">
                                          <div className="w-full h-full rounded-full bg-green-400 animate-ping opacity-75 absolute"></div>
                                          <div className="w-3 h-3 bg-white rounded-full relative z-10"></div>
                                      </div>
                                  </div>

                                  <div className="mb-2 text-3xl font-bold text-white">Rahul</div>
                                  
                                  <div className="flex items-center justify-center gap-2 mb-8">
                                      <div className={`w-2 h-2 rounded-full ${callStatus === 'active' ? 'bg-red-500' : 'bg-green-500'} animate-pulse`}></div>
                                      <span className={`${callStatus === 'active' ? 'text-red-400' : 'text-green-400'} font-medium tracking-wide uppercase text-sm`}>
                                          {callStatus === 'active' ? 'On Call' : 'Available Now'}
                                      </span>
                                  </div>

                                  <button 
                                      onClick={toggleCall}
                                      disabled={callStatus === 'loading'}
                                      className={`w-full max-w-xs py-4 font-bold text-lg rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.15)] flex items-center justify-center gap-3 group ${
                                          callStatus === 'active' 
                                              ? 'bg-red-500 text-white hover:bg-red-600 shadow-red-500/20' 
                                              : 'bg-white text-navy-950 hover:scale-105'
                                      } ${callStatus === 'loading' ? 'opacity-80 cursor-not-allowed' : ''}`}
                                  >
                                      {callStatus === 'loading' ? (
                                          <>
                                              <Loader2 className="w-5 h-5 animate-spin" />
                                              Connecting...
                                          </>
                                      ) : callStatus === 'active' ? (
                                          <>
                                              <PhoneOff className="w-5 h-5" />
                                              End Call
                                          </>
                                      ) : (
                                          <>
                                              <Phone className="w-5 h-5 fill-current" />
                                              Start a Call
                                          </>
                                      )}
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
      </div>

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
