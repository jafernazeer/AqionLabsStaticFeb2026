
import React, { useEffect } from 'react';
import { PageType } from '../types';
import { 
  MessageSquare, HelpCircle, FileText, ArrowRight, 
  Zap, Check, X as XIcon, Phone 
} from 'lucide-react';

interface AIChatbotsProps {
  onNavigate: (page: PageType) => void;
}

const AIChatbots: React.FC<AIChatbotsProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

      {/* Hero Section */}
      <section className="relative py-24 px-6 max-w-7xl mx-auto z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-indigo-500/30 bg-indigo-950/30 text-indigo-300 text-xs font-semibold tracking-wider mb-8">
           <MessageSquare className="w-3 h-3" />
           AI Service
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Intelligent Chatbots & <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Web Widgets</span>
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
          Essential 24/7 engagement for your website visitors. Automate support and capture leads without lifting a finger.
        </p>
      </section>

      {/* Core Features Grid */}
      <section className="py-16 relative z-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          {/* Feature 1: Website Chat Widget */}
          <div className="bg-navy-900/50 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 text-blue-400">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Website Chat Widget</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              A lightweight, responsive chat interface that lives on your website. It greets every visitor, offers immediate assistance, and keeps engagement high even when your team is offline.
            </p>
          </div>

          {/* Feature 2: FAQ Automation */}
          <div className="bg-navy-900/50 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Basic FAQ Automation</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Stop answering the same questions repeatedly. The bot instantly resolves common queries about pricing, hours, locations, and services, freeing your human team for complex issues.
            </p>
          </div>

          {/* Feature 3: Lead Capture */}
          <div className="bg-navy-900/50 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all">
            <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-400">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Simple Lead Capture</h3>
            <p className="text-slate-400 leading-relaxed text-sm">
              Turn anonymous traffic into contacts. The bot naturally collects names, emails, and phone numbers during the conversation and sends them directly to your inbox or CRM.
            </p>
          </div>

        </div>
      </section>

      {/* CTA for Standard Bot */}
      <div className="text-center pb-24 relative z-10">
        <button 
          onClick={() => onNavigate(PageType.CONTACT)}
          className="px-8 py-4 rounded-full bg-navy-800 text-white font-bold hover:bg-navy-700 transition-all border border-navy-700 shadow-lg"
        >
          Get a Standard Chatbot
        </button>
      </div>

      {/* UPSELL SECTION: AqionVox */}
      <section className="py-24 relative border-t border-navy-800 bg-gradient-to-b from-navy-950 to-indigo-950/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold tracking-wider mb-6 shadow-lg shadow-indigo-900/50">
                <Zap className="w-3 h-3 fill-current" />
                ENTERPRISE UPGRADE
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Need More Than Just Text? Upgrade to <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionVox</span></h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Conventional chatbots are reactive—they wait for customers to type. <strong className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionVox</strong> is a proactive AI workforce. It speaks, it texts on WhatsApp, and it closes deals autonomously.
              </p>
              
              <button 
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold hover:from-indigo-400 hover:to-purple-500 transition-all shadow-xl shadow-indigo-900/40"
              >
                Explore AqionVox Capabilities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="bg-navy-900 rounded-3xl border border-navy-800 overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-center border-b border-navy-800">
                <div className="p-6 bg-navy-950/50 text-slate-400 font-semibold text-sm uppercase tracking-wider">
                  Conventional Chatbot
                </div>
                <div className="p-6 bg-indigo-900/20 text-indigo-400 font-bold text-sm uppercase tracking-wider relative">
                  AqionVox
                  <div className="absolute top-0 right-0 w-full h-1 bg-indigo-500"></div>
                </div>
              </div>

              <div className="divide-y divide-navy-800">
                {/* Row 1 */}
                <div className="grid grid-cols-2 p-6 hover:bg-navy-800/30 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2 text-slate-400 text-sm">
                    <MessageSquare className="w-5 h-5 mb-1" />
                    Text Only (Website)
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-white font-semibold text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-indigo-400" />
                      <MessageSquare className="w-4 h-4 text-green-400" />
                    </div>
                    Voice + WhatsApp + Web
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 p-6 hover:bg-navy-800/30 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2 text-slate-400 text-sm">
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center"><XIcon className="w-3 h-3" /></div>
                    Reactive (Waits for user)
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-white font-semibold text-sm">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check className="w-3 h-3 text-emerald-500" /></div>
                    Proactive (Outbound Calls)
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 p-6 hover:bg-navy-800/30 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2 text-slate-400 text-sm">
                    Basic Form Capture
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-white font-semibold text-sm text-center">
                    Autonomous Appointment Booking & CRM Sync
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AIChatbots;
