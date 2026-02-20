
import React, { useEffect } from 'react';
import { PageType } from '../types';
import { 
  Bot, Phone, MessageSquare, Calendar, Filter, DollarSign, 
  BarChart, Users, Clock, Shield, Check, ArrowRight, Brain, Globe,
  Activity, Zap, Mail, RefreshCw, TrendingUp, Building, ShoppingBag, 
  GraduationCap, Stethoscope, Database, Settings, LayoutGrid
} from 'lucide-react';

interface AqionVoxProps {
    onNavigate: (page: PageType) => void;
}

const AqionVox: React.FC<AqionVoxProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

      {/* Hero Section - Meet AqionVox Ai */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionVox Ai</span></h1>
              <p className="text-xl md:text-2xl text-slate-300 leading-relaxed font-light">
                  UAE's first AI Revenue Engine.
              </p>
          </div>

          {/* Architecture Diagram */}
          <div className="relative max-w-7xl mx-auto">
              {/* Desktop Connection Lines (Absolute Background) */}
              <div className="hidden lg:block absolute top-1/2 left-0 w-full -translate-y-1/2 z-0 pointer-events-none">
                  <div className="max-w-4xl mx-auto h-[400px] flex items-center justify-center relative">
                      {/* We'll use individual lines in the grid items for better responsiveness, 
                          but could add a central glow here if needed */}
                  </div>
              </div>

              <div className="grid lg:grid-cols-3 items-center gap-8 lg:gap-0 relative z-10">
                  
                  {/* Left Column Features */}
                  <div className="flex flex-col gap-8 lg:gap-16 lg:items-end lg:pr-4 order-2 lg:order-1">
                      {/* Feature 1 */}
                      <div className="flex items-center gap-4 lg:flex-row-reverse text-left lg:text-right group relative">
                           <div className="bg-navy-900 border border-navy-700 p-4 rounded-2xl shadow-lg group-hover:border-indigo-500/50 transition-colors z-10 relative">
                               <Phone className="w-6 h-6 text-indigo-400" />
                           </div>
                           <div className="flex-1">
                               <h3 className="text-slate-200 font-semibold text-lg">Answers phone calls instantly</h3>
                           </div>
                           {/* Connecting Line */}
                           <div className="hidden lg:block absolute right-[-50px] top-1/2 w-[50px] h-[2px] bg-gradient-to-r from-navy-700 to-indigo-500/30"></div>
                           <div className="hidden lg:block absolute right-[-54px] top-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-y-[3px]"></div>
                      </div>

                      {/* Feature 2 */}
                      <div className="flex items-center gap-4 lg:flex-row-reverse text-left lg:text-right group relative">
                           <div className="bg-navy-900 border border-navy-700 p-4 rounded-2xl shadow-lg group-hover:border-indigo-500/50 transition-colors z-10 relative">
                               <MessageSquare className="w-6 h-6 text-green-400" />
                           </div>
                           <div className="flex-1">
                               <h3 className="text-slate-200 font-semibold text-lg">Engages and nurtures on WhatsApp</h3>
                           </div>
                           <div className="hidden lg:block absolute right-[-50px] top-1/2 w-[50px] h-[2px] bg-gradient-to-r from-navy-700 to-indigo-500/30"></div>
                           <div className="hidden lg:block absolute right-[-54px] top-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-y-[3px]"></div>
                      </div>

                      {/* Feature 3 */}
                      <div className="flex items-center gap-4 lg:flex-row-reverse text-left lg:text-right group relative">
                           <div className="bg-navy-900 border border-navy-700 p-4 rounded-2xl shadow-lg group-hover:border-indigo-500/50 transition-colors z-10 relative">
                               <Filter className="w-6 h-6 text-orange-400" />
                           </div>
                           <div className="flex-1">
                               <h3 className="text-slate-200 font-semibold text-lg">Qualifies leads based on intent</h3>
                           </div>
                           <div className="hidden lg:block absolute right-[-50px] top-1/2 w-[50px] h-[2px] bg-gradient-to-r from-navy-700 to-indigo-500/30"></div>
                           <div className="hidden lg:block absolute right-[-54px] top-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-y-[3px]"></div>
                      </div>
                  </div>

                  {/* Center Hub */}
                  <div className="flex justify-center order-1 lg:order-2 py-12 lg:py-0 relative">
                      <div className="relative z-20">
                          {/* Glow effect */}
                          <div className="absolute inset-0 bg-indigo-500 blur-[80px] opacity-30 rounded-full"></div>
                          
                          {/* Central Badge Icon */}
                          <div className="relative w-64 h-64 bg-gradient-to-b from-navy-800 to-navy-950 rounded-[3rem] border border-indigo-500/30 shadow-[0_0_50px_rgba(99,102,241,0.15)] flex items-center justify-center p-2">
                              <div className="absolute inset-0 rounded-[3rem] border border-white/5 opacity-50"></div>
                              <div className="w-full h-full bg-navy-900/80 rounded-[2.5rem] flex flex-col items-center justify-center backdrop-blur-md overflow-hidden relative border border-white/5">
                                  
                                  {/* Inner Content */}
                                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-400 flex items-center justify-center shadow-lg mb-4 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                                      <Brain className="w-12 h-12 text-white" />
                                  </div>
                                  
                                  <div className="text-center px-4">
                                      <h3 className="text-white font-bold text-lg tracking-tight">AqionVox Ai</h3>
                                      <div className="text-indigo-400 text-sm font-semibold tracking-wider uppercase">AI Engine</div>
                                  </div>
                                  
                                  {/* Scanning line animation */}
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-400/5 to-transparent h-full w-full animate-float pointer-events-none"></div>
                              </div>
                          </div>
                          
                          {/* Connecting lines entering center (visual enhancement) */}
                          <div className="absolute top-1/2 left-[-20px] w-[20px] h-[2px] bg-indigo-500/30 hidden lg:block"></div>
                          <div className="absolute top-1/2 right-[-20px] w-[20px] h-[2px] bg-indigo-500/30 hidden lg:block"></div>
                      </div>
                  </div>

                  {/* Right Column Features */}
                  <div className="flex flex-col gap-8 lg:gap-16 items-start lg:pl-4 order-3">
                      {/* Feature 4 */}
                      <div className="flex items-center gap-4 group relative">
                           <div className="hidden lg:block absolute left-[-50px] top-1/2 w-[50px] h-[2px] bg-gradient-to-l from-navy-700 to-indigo-500/30"></div>
                           <div className="hidden lg:block absolute left-[-54px] top-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-y-[3px]"></div>
                           <div className="bg-navy-900 border border-navy-700 p-4 rounded-2xl shadow-lg group-hover:border-indigo-500/50 transition-colors z-10 relative">
                               <Calendar className="w-6 h-6 text-blue-400" />
                           </div>
                           <div className="flex-1">
                               <h3 className="text-slate-200 font-semibold text-lg">Books appointments autonomously</h3>
                           </div>
                      </div>

                      {/* Feature 5 */}
                      <div className="flex items-center gap-4 group relative">
                           <div className="hidden lg:block absolute left-[-50px] top-1/2 w-[50px] h-[2px] bg-gradient-to-l from-navy-700 to-indigo-500/30"></div>
                           <div className="hidden lg:block absolute left-[-54px] top-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-y-[3px]"></div>
                           <div className="bg-navy-900 border border-navy-700 p-4 rounded-2xl shadow-lg group-hover:border-indigo-500/50 transition-colors z-10 relative">
                               <RefreshCw className="w-6 h-6 text-purple-400" />
                           </div>
                           <div className="flex-1">
                               <h3 className="text-slate-200 font-semibold text-lg">Follows up automatically</h3>
                           </div>
                      </div>

                      {/* Feature 6 */}
                      <div className="flex items-center gap-4 group relative">
                           <div className="hidden lg:block absolute left-[-50px] top-1/2 w-[50px] h-[2px] bg-gradient-to-l from-navy-700 to-indigo-500/30"></div>
                           <div className="hidden lg:block absolute left-[-54px] top-1/2 w-2 h-2 bg-indigo-500 rounded-full -translate-y-[3px]"></div>
                           <div className="bg-navy-900 border border-navy-700 p-4 rounded-2xl shadow-lg group-hover:border-indigo-500/50 transition-colors z-10 relative">
                               <TrendingUp className="w-6 h-6 text-yellow-400" />
                           </div>
                           <div className="flex-1">
                               <h3 className="text-slate-200 font-semibold text-lg">Converts conversations into tangible revenue</h3>
                           </div>
                      </div>
                  </div>

              </div>
          </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-navy-900/50 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Core Capabilities</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {[
                      { icon: Phone, title: "AI Voice Agent", desc: "Natural Arabic and English conversation capabilities with human-like latency.", color: "text-indigo-400" },
                      { icon: MessageSquare, title: "WhatsApp AI", desc: "Manages instant messaging and automated follow-ups.", color: "text-green-400" },
                      { icon: Filter, title: "Lead Intelligence", desc: "Captures and qualifies every enquiry, filtering noise from value.", color: "text-orange-400" },
                      { icon: Calendar, title: "Appointment Automation", desc: "Books and confirms slots instantly without human back-and-forth.", color: "text-blue-400" },
                      { icon: Users, title: "Conversation CRM", desc: "Provides a unified view of every interaction across channels.", color: "text-purple-400" },
                      { icon: BarChart, title: "Analytics & Insights", desc: "Tracks real business outcomes and performance metrics.", color: "text-red-400" }
                  ].map((card, i) => (
                      <div key={i} className="bg-navy-950 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/50 transition-colors">
                          <div className={`mb-6 ${card.color}`}>
                              <card.icon className="w-10 h-10" />
                          </div>
                          <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                          <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 relative z-10">
           <div className="max-w-7xl mx-auto px-6">
               <div className="text-center mb-16">
                   <p className="text-xl text-slate-400 mb-2 uppercase tracking-wide font-medium">Built for</p>
                   <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                       High Volume & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">High Value</span>
                   </h2>
                   <p className="text-2xl text-slate-300">conversations across industries.</p>
               </div>
               
               <div className="grid md:grid-cols-2 gap-6">
                   {/* Healthcare */}
                   <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:bg-white/10 transition-colors">
                       <div className="p-4 bg-teal-500/20 rounded-xl text-teal-400">
                           <Stethoscope className="w-8 h-8" />
                       </div>
                       <div>
                           <h4 className="text-xl font-bold text-white mb-2">Healthcare & Clinics</h4>
                           <p className="text-slate-300">Patient booking and triage.</p>
                       </div>
                   </div>

                   {/* Real Estate */}
                   <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:bg-white/10 transition-colors">
                       <div className="p-4 bg-amber-500/20 rounded-xl text-amber-400">
                           <Building className="w-8 h-8" />
                       </div>
                       <div>
                           <h4 className="text-xl font-bold text-white mb-2">Real Estate</h4>
                           <p className="text-slate-300">Lead qualification and viewing scheduling.</p>
                       </div>
                   </div>

                   {/* Retail */}
                   <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:bg-white/10 transition-colors">
                       <div className="p-4 bg-blue-500/20 rounded-xl text-blue-400">
                           <ShoppingBag className="w-8 h-8" />
                       </div>
                       <div>
                           <h4 className="text-xl font-bold text-white mb-2">Retail & Services</h4>
                           <p className="text-slate-300">Order updates and FAQ handling.</p>
                       </div>
                   </div>

                   {/* Education */}
                   <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 flex items-start gap-6 hover:bg-white/10 transition-colors">
                       <div className="p-4 bg-indigo-500/20 rounded-xl text-indigo-400">
                           <GraduationCap className="w-8 h-8" />
                       </div>
                       <div>
                           <h4 className="text-xl font-bold text-white mb-2">Education & Training</h4>
                           <p className="text-slate-300">Enrollment enquiries.</p>
                       </div>
                   </div>
               </div>

               <div className="text-center mt-12 text-slate-400 text-sm">
                   Differentiation: Each industry runs on custom conversation logic, not generic bots.
               </div>
           </div>
      </section>

      {/* AI Voice Experience (Screenshot 4) */}
      <section className="py-24 relative overflow-hidden bg-navy-900/50 border-y border-navy-800">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                  <h2 className="text-4xl font-bold mb-8 leading-tight">An AI Voice Experience that sounds human and works 24/7.</h2>
                  
                  <div className="bg-gradient-to-br from-indigo-900/20 to-purple-800/10 border border-indigo-500/20 rounded-2xl p-8">
                       <ul className="space-y-6">
                          {[
                              { title: "Answers calls instantly with zero hold time.", icon: Clock },
                              { title: "Understands customer intent in real-time.", icon: Brain },
                              { title: "Handles interruptions naturally (non-linear conversation).", icon: Activity },
                              { title: "Books appointments directly during the call.", icon: Calendar },
                              { title: "Intelligently escalates to humans only when necessary.", icon: Users }
                          ].map((item, i) => (
                              <li key={i} className="flex items-start gap-4">
                                  <div className="mt-1 text-indigo-400">
                                      <item.icon className="w-5 h-5" />
                                  </div>
                                  <span className="text-slate-300 text-lg">{item.title}</span>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>

              <div className="relative h-[500px] w-full flex items-center justify-center">
                   {/* Background Elements */}
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-900/10 to-transparent blur-3xl"></div>
                   
                   {/* Chat Bubbles */}
                   <div className="flex flex-col gap-8 w-full max-w-md relative z-10">
                       
                       {/* English Bubble */}
                       <div className="self-end relative group">
                           <div className="absolute inset-0 bg-indigo-500 blur-xl opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl"></div>
                           <div className="relative bg-gradient-to-br from-indigo-500/20 to-indigo-900/40 backdrop-blur-xl border border-indigo-500/30 text-white px-8 py-6 rounded-3xl rounded-br-none text-2xl shadow-xl">
                               How can I help you?
                           </div>
                       </div>

                       {/* Arabic Bubble */}
                       <div className="self-start relative group">
                            <div className="absolute inset-0 bg-amber-500 blur-xl opacity-20 group-hover:opacity-30 transition-opacity rounded-3xl"></div>
                            <div className="relative bg-gradient-to-br from-amber-500/20 to-amber-900/40 backdrop-blur-xl border border-amber-500/30 text-white px-8 py-6 rounded-3xl rounded-bl-none text-2xl shadow-xl text-right font-serif" dir="rtl">
                               كيف يمكنني مساعدتك؟
                            </div>
                       </div>
                   </div>

                   <div className="absolute bottom-10 text-center w-full">
                       <p className="text-slate-400">Fully fluent in English and <br/> UAE-optimised Arabic.</p>
                   </div>
              </div>
          </div>
      </section>

      {/* WhatsApp Section */}
      <section className="py-24 bg-transparent relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 flex justify-center">
                  {/* Simulated Phone UI */}
                  <div className="w-[300px] h-[600px] bg-navy-950 rounded-[40px] border-8 border-slate-800 relative overflow-hidden shadow-2xl">
                      <div className="absolute top-0 w-full h-8 bg-slate-800 rounded-b-xl z-20"></div>
                      <div className="p-4 pt-12 h-full flex flex-col bg-[#0b141a]"> {/* WhatsApp Dark Mode Color */}
                          <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-800">
                              <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs">A</div>
                              <div>
                                  <div className="text-xs font-bold text-gray-200">AqionVox Business</div>
                                  <div className="text-[10px] text-green-500">Online</div>
                              </div>
                          </div>
                          
                          <div className="flex-1 space-y-3 overflow-hidden">
                               <div className="bg-[#1f2c34] p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-gray-200">
                                   Do you have appointments available tomorrow?
                               </div>
                               <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto text-xs text-gray-100">
                                   Yes, we have 10:00 AM and 2:00 PM available. Would you like to book one?
                               </div>
                               <div className="bg-[#1f2c34] p-3 rounded-lg rounded-tl-none shadow-sm max-w-[85%] text-xs text-gray-200">
                                   10 AM please.
                               </div>
                               <div className="bg-[#005c4b] p-3 rounded-lg rounded-tr-none shadow-sm max-w-[85%] ml-auto text-xs text-gray-100">
                                   Confirmed! I've booked you for 10:00 AM tomorrow.
                               </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="order-1 lg:order-2">
                  <h2 className="text-4xl font-bold mb-8 text-white">Dominate the #1 Business Channel in the UAE</h2>
                  <div className="mb-8">
                      <h3 className="font-bold text-lg mb-4 text-slate-200">WhatsApp Intelligence Features:</h3>
                      <ul className="space-y-3 text-slate-400">
                          {[
                              "Instant automated replies",
                              "Automated FAQ handling",
                              "Direct appointment booking via chat",
                              "Automated follow-ups on missed voice calls",
                              "Outbound nurturing sequences"
                          ].map((item, i) => (
                              <li key={i} className="flex items-center gap-2">
                                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                                  {item}
                              </li>
                          ))}
                      </ul>
                  </div>
                  <div className="bg-navy-900 border border-navy-800 p-6 rounded-xl">
                      <p className="font-semibold text-center text-sm md:text-base text-slate-300">The One Conversation Rule: Voice + WhatsApp = One Context. No silos. No lost information.</p>
                  </div>
              </div>
          </div>
      </section>

      {/* Lead Intelligence Engine (Screenshot 6) */}
      <section className="py-24 bg-navy-900/50 border-y border-navy-800 relative z-10">
           <div className="max-w-7xl mx-auto px-6">
               <div className="text-center mb-16">
                   <h2 className="text-3xl md:text-5xl font-bold mb-4">The Lead Intelligence Engine:</h2>
                   <p className="text-2xl text-slate-400">Where conversations turn into ROI.</p>
               </div>

               <div className="grid md:grid-cols-4 gap-6">
                   {/* Card 1: Sources */}
                   <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center h-full">
                       <div className="w-16 h-16 mb-6">
                           <Filter className="w-full h-full text-teal-400 stroke-1" />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-4">Sources</h3>
                       <p className="text-slate-400 text-sm">Missed calls, WhatsApp enquiries, Website visitors, Ads & portals</p>
                   </div>
                   
                   {/* Arrow */}
                   <div className="hidden md:flex items-center justify-center absolute left-[25%] top-1/2 -translate-x-1/2 z-20">
                       <ArrowRight className="text-slate-600 w-8 h-8" />
                   </div>

                   {/* Card 2: Capture */}
                   <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center h-full">
                       <div className="w-16 h-16 mb-6">
                           <Bot className="w-full h-full text-yellow-400 stroke-1" />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-4">Capture</h3>
                       <p className="text-slate-400 text-sm">Captures leads automatically from all sources.</p>
                   </div>

                   {/* Arrow */}
                   <div className="hidden md:flex items-center justify-center absolute left-[50%] top-1/2 -translate-x-1/2 z-20">
                       <ArrowRight className="text-slate-600 w-8 h-8" />
                   </div>

                   {/* Card 3: Qualify & Score */}
                   <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center h-full">
                       <div className="w-16 h-16 mb-6">
                           <Activity className="w-full h-full text-orange-400 stroke-1" />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-4">Qualify & Score</h3>
                       <p className="text-slate-400 text-sm">Qualifies intent and scores urgency.</p>
                   </div>

                   {/* Arrow */}
                   <div className="hidden md:flex items-center justify-center absolute left-[75%] top-1/2 -translate-x-1/2 z-20">
                       <ArrowRight className="text-slate-600 w-8 h-8" />
                   </div>

                   {/* Card 4: Handover */}
                   <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center h-full">
                       <div className="w-16 h-16 mb-6">
                           <Zap className="w-full h-full text-indigo-400 stroke-1" />
                       </div>
                       <h3 className="text-xl font-bold text-white mb-4">Handover</h3>
                       <p className="text-slate-400 text-sm">Hands 'hot' leads directly to human staff for closing.</p>
                   </div>
               </div>
           </div>
      </section>

      {/* Unified CRM Mockup (Screenshot 7) */}
      <section className="py-24 bg-transparent relative z-10 text-white">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Unified Conversation CRM:</h2>
                <h3 className="text-2xl text-slate-400">Every interaction on a single timeline.</h3>
              </div>
              
              <div className="max-w-6xl mx-auto bg-navy-900 border border-navy-700 rounded-2xl shadow-2xl overflow-hidden p-4">
                   {/* Fake Browser Toolbar */}
                   <div className="bg-navy-950 rounded-t-xl p-3 flex items-center gap-4 border-b border-navy-800 mb-4">
                       <div className="flex gap-2">
                           <div className="w-3 h-3 rounded-full bg-red-500"></div>
                           <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                           <div className="w-3 h-3 rounded-full bg-green-500"></div>
                       </div>
                       <div className="flex-1 bg-navy-900 rounded-md h-6 w-full max-w-sm mx-auto"></div>
                       <div className="flex gap-3 text-slate-500">
                           <Clock className="w-4 h-4" />
                           <Settings className="w-4 h-4" />
                           <div className="w-6 h-6 rounded-full bg-slate-700"></div>
                       </div>
                   </div>

                   <div className="grid md:grid-cols-12 gap-6">
                       {/* Sidebar */}
                       <div className="md:col-span-3 bg-navy-950 rounded-xl p-4 border border-navy-800">
                           <div className="flex items-center gap-3 mb-6">
                               <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                                   <Users className="w-6 h-6" />
                               </div>
                               <div>
                                   <div className="font-bold text-white">Omar Al-Fayed</div>
                                   <div className="text-xs text-slate-500">omari@ltgmail.com</div>
                               </div>
                           </div>
                           <div className="space-y-4">
                                <div className="p-2 bg-navy-900 rounded border border-navy-800 text-sm text-slate-300">Customer</div>
                                <div className="p-2 hover:bg-navy-900 rounded cursor-pointer text-sm text-slate-500">Notifications</div>
                                <div className="p-2 hover:bg-navy-900 rounded cursor-pointer text-sm text-slate-500">Profile</div>
                           </div>
                       </div>

                       {/* Main Content */}
                       <div className="md:col-span-6 bg-navy-950 rounded-xl p-6 border border-navy-800">
                           <div className="flex justify-between items-center mb-6">
                               <h3 className="font-bold text-lg">Customer Profile</h3>
                               <button className="bg-emerald-500/20 text-emerald-500 px-3 py-1 rounded text-xs font-bold">+ Add cx post</button>
                           </div>

                           <div className="space-y-6 relative">
                               {/* Timeline Line */}
                               <div className="absolute left-4 top-4 bottom-4 w-px bg-slate-800"></div>

                               {/* Item 1 */}
                               <div className="relative pl-10">
                                   <div className="absolute left-0 top-0 w-8 h-8 bg-navy-900 border border-navy-700 rounded-full flex items-center justify-center z-10">
                                       <Phone className="w-4 h-4 text-orange-400" />
                                   </div>
                                   <div>
                                       <div className="text-white font-semibold text-sm">09:00 AM - Missed Call (Auto-logged)</div>
                                       <div className="text-xs text-slate-500">(Auto-logged)</div>
                                   </div>
                               </div>

                               {/* Item 2 */}
                               <div className="relative pl-10">
                                   <div className="absolute left-0 top-0 w-8 h-8 bg-navy-900 border border-navy-700 rounded-full flex items-center justify-center z-10">
                                       <MessageSquare className="w-4 h-4 text-green-400" />
                                   </div>
                                   <div>
                                       <div className="text-white font-semibold text-sm">09:01 AM - WhatsApp Auto-Reply Sent</div>
                                       <div className="text-xs text-slate-500 mt-1 bg-navy-900 p-2 rounded border border-navy-800">
                                           Hi, We saw you called. How can we assist you with your business today?
                                       </div>
                                   </div>
                               </div>

                               {/* Item 3 */}
                               <div className="relative pl-10">
                                   <div className="absolute left-0 top-0 w-8 h-8 bg-navy-900 border border-navy-700 rounded-full flex items-center justify-center z-10">
                                       <Calendar className="w-4 h-4 text-blue-400" />
                                   </div>
                                   <div>
                                       <div className="text-white font-semibold text-sm">09:05 AM - Appointment Confirmed by AI</div>
                                       <div className="text-xs text-slate-500">(Automated)</div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       {/* Right Panel */}
                       <div className="md:col-span-3 space-y-4">
                           <div className="bg-navy-950 rounded-xl p-4 border border-navy-800">
                               <h4 className="font-bold text-sm mb-4">Lead Intelligence</h4>
                               <div className="flex items-center gap-3 mb-3">
                                   <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
                                       <Check className="w-4 h-4 text-green-500" />
                                   </div>
                                   <div>
                                       <div className="text-xs text-slate-500">Lead Status</div>
                                       <div className="text-sm font-bold text-white">Qualified</div>
                                   </div>
                               </div>
                               <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                                       <Activity className="w-4 h-4 text-red-500" />
                                   </div>
                                   <div>
                                       <div className="text-xs text-slate-500">Urgency</div>
                                       <div className="text-sm font-bold text-white">High</div>
                                   </div>
                               </div>
                           </div>

                            <div className="bg-navy-950 rounded-xl p-4 border border-navy-800">
                               <h4 className="font-bold text-sm mb-4">Expansion</h4>
                               <div className="flex items-center gap-3">
                                   <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center">
                                       <Users className="w-4 h-4 text-blue-500" />
                                   </div>
                                   <div>
                                       <div className="text-xs text-slate-500">Status</div>
                                       <div className="text-sm font-bold text-white">Verified</div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
              </div>

              <div className="text-center mt-12">
                   <h3 className="text-2xl font-bold mb-2">No spreadsheets. No chaos.</h3>
                   <p className="text-slate-400">Just a clean, real-time view of your business conversations.</p>
              </div>
          </div>
      </section>

      {/* Why Wins (Gradient Text + Blue Grid) */}
      <section className="py-24 relative overflow-hidden bg-navy-950 border-t border-navy-800">
          <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 relative z-10 items-center">
              <div>
                  <h2 className="text-4xl font-bold mb-8 text-white">Why <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionVox Ai</span> Wins in the Region</h2>
                  <ul className="space-y-6">
                      {[
                          { title: "Localization", desc: "Arabic-ready from day one." },
                          { title: "Availability", desc: "True 24/7 uptime." },
                          { title: "Speed", desc: "Faster response leads to higher conversion." },
                          { title: "Security", desc: "Enterprise-grade data protection." },
                          { title: "Scalability", desc: "Grows from SMB to Enterprise seamlessly." }
                      ].map((item, i) => (
                          <li key={i} className="flex items-start gap-4">
                              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 mt-1">
                                  <Check className="w-4 h-4 text-white" />
                              </div>
                              <div>
                                  <span className="font-bold text-white">{item.title}:</span> <span className="text-slate-300">{item.desc}</span>
                              </div>
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="flex items-center justify-center">
                  <div className="bg-navy-900/50 backdrop-blur-md p-10 rounded-2xl border border-navy-700 text-center shadow-xl">
                      <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                          "You're not buying AI.<br/> You're hiring an <span className="text-indigo-400">AI employee</span>."
                      </p>
                  </div>
              </div>
          </div>
      </section>

      {/* Impact Stats (Screenshot 9) */}
      <section className="py-24 relative z-10 border-y border-navy-800">
          <div className="max-w-7xl mx-auto px-6">
              <div className="text-center mb-12">
                   <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">The Business Impact:</h2>
                   <p className="text-2xl text-slate-400">Real results from real clients.</p>
              </div>

              <div className="grid md:grid-cols-5 gap-4">
                  {/* Card 1 */}
                  <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                      <div className="mb-4 flex justify-center"><ArrowRight className="text-teal-400 w-8 h-8 rotate-90" /></div>
                      <div className="text-4xl font-bold text-white mb-2">90%</div>
                      <div className="text-sm text-slate-300">Reduction in Missed Calls</div>
                  </div>

                  {/* Card 2 */}
                  <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                      <div className="mb-4 flex justify-center"><Zap className="text-yellow-400 w-8 h-8" /></div>
                      <div className="text-4xl font-bold text-white mb-2">&lt; 5 Sec</div>
                      <div className="text-sm text-slate-300">Response Time</div>
                  </div>

                   {/* Card 3 */}
                  <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                      <div className="mb-4 flex justify-center"><TrendingUp className="text-green-400 w-8 h-8" /></div>
                      <div className="text-2xl font-bold text-white mb-2 pt-2">Higher</div>
                      <div className="text-sm text-slate-300">Conversion Rates</div>
                  </div>

                   {/* Card 4 */}
                  <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                      <div className="mb-4 flex justify-center"><Users className="text-indigo-400 w-8 h-8" /></div>
                      <div className="text-2xl font-bold text-white mb-2 pt-2">Reduced</div>
                      <div className="text-sm text-slate-300">Staff Overload</div>
                  </div>

                   {/* Card 5 */}
                  <div className="bg-gradient-to-br from-white/10 to-transparent border border-white/10 p-6 rounded-2xl text-center backdrop-blur-sm">
                      <div className="mb-4 flex justify-center"><Database className="text-blue-400 w-8 h-8" /></div>
                      <div className="text-4xl font-bold text-white mb-2">ROI</div>
                      <div className="text-sm text-slate-300">visible within weeks</div>
                  </div>
              </div>
          </div>
      </section>

      {/* Pricing Plans (Redesigned to match Home page style) */}
      <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  
                  {/* Tier 1: Start */}
                  <div className="bg-navy-900 border border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                       <div className="absolute top-0 left-0 w-full h-1 bg-slate-700"></div>
                       <h3 className="text-2xl font-bold text-white mb-2">Tier 1: Start</h3>
                       <div className="mb-4">
                           <span className="text-3xl font-bold text-white">AED 999</span>
                           <span className="text-slate-400 text-sm ml-2">/ month</span>
                       </div>
                       <div className="text-slate-400 mb-8 pb-4 border-b border-navy-800">Focus: Essentials</div>
                       
                       <ul className="space-y-4 mb-8 flex-1">
                           <li className="flex items-center gap-3">
                               <MessageSquare className="w-5 h-5 text-indigo-400" />
                               <span className="text-slate-300">WhatsApp AI</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <Filter className="w-5 h-5 text-indigo-400" />
                               <span className="text-slate-300">WhatsApp Lead Capture</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <Database className="w-5 h-5 text-indigo-400" />
                               <span className="text-slate-300">CRM Lite</span>
                           </li>
                       </ul>
                  </div>

                  {/* Tier 2: Growth (Highlighted) */}
                  <div className="bg-navy-900 border border-indigo-500/50 rounded-3xl p-8 relative overflow-hidden group shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] transform md:-translate-y-2 flex flex-col">
                       <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">RECOMMENDED</div>
                       <h3 className="text-2xl font-bold text-white mb-2">Tier 2: Growth</h3>
                       <div className="mb-4">
                           <span className="text-3xl font-bold text-white">AED 2999</span>
                           <span className="text-indigo-200 text-sm ml-2">/ month</span>
                       </div>
                       <div className="text-indigo-400 mb-8 pb-4 border-b border-indigo-500/20 font-medium">Focus: Full Power</div>
                       
                       <ul className="space-y-4 mb-8 flex-1">
                           <li className="flex items-center gap-3">
                               <Phone className="w-5 h-5 text-indigo-400" />
                               <span className="text-white font-medium">Voice AI Agent</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <MessageSquare className="w-5 h-5 text-indigo-400" />
                               <span className="text-white font-medium">WhatsApp AI</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <BarChart className="w-5 h-5 text-indigo-400" />
                               <span className="text-white font-medium">Lead Intelligence</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <Calendar className="w-5 h-5 text-indigo-400" />
                               <span className="text-white font-medium">Appointment Bookings</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <Database className="w-5 h-5 text-indigo-400" />
                               <span className="text-white font-bold">CRM Advanced</span>
                           </li>
                       </ul>
                  </div>

                   {/* Tier 3: Enterprise */}
                  <div className="bg-navy-900 border border-indigo-500/30 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col">
                       <div className="absolute top-0 left-0 w-full h-1 bg-purple-600"></div>
                       <h3 className="text-2xl font-bold text-white mb-2">Tier 3: Enterprise</h3>
                       <div className="mb-4">
                           <button 
                             onClick={(e) => { e.stopPropagation(); onNavigate(PageType.CONTACT); }}
                             className="bg-navy-800 hover:bg-navy-700 text-white text-sm font-semibold py-2 px-4 rounded-lg border border-navy-700 transition-colors flex items-center gap-2"
                           >
                             Get in touch for pricing <ArrowRight className="w-4 h-4" />
                           </button>
                       </div>
                       <div className="text-slate-400 mb-8 pb-4 border-b border-navy-800">Focus: Custom Scale</div>
                       
                       <ul className="space-y-4 mb-8 flex-1">
                           <li className="flex items-center gap-3">
                               <Shield className="w-5 h-5 text-indigo-400" />
                               <span className="text-slate-300">Private AI deployment</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <Settings className="w-5 h-5 text-indigo-400" />
                               <span className="text-slate-300">Custom workflows</span>
                           </li>
                           <li className="flex items-center gap-3">
                               <LayoutGrid className="w-5 h-5 text-indigo-400" />
                               <span className="text-slate-300">Deep integrations</span>
                           </li>
                       </ul>
                  </div>
              </div>
              
              <div className="text-center mt-16">
                  <button 
                      onClick={() => onNavigate(PageType.CONTACT)}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:from-indigo-400 hover:to-purple-500 transition-all shadow-xl shadow-indigo-500/20"
                  >
                      Get Started with AqionVox
                  </button>
              </div>
          </div>
      </section>

    </div>
  );
};

export default AqionVox;
