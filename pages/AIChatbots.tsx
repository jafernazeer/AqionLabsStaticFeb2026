
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
    <div className="mesh-bg min-h-screen text-ink pt-20 font-sans relative">
      <div className="fixed inset-0 pointer-events-none z-0 bg-hairline-grid opacity-80"></div>

      {/* Hero Section */}
      <section className="mobile-section-tight relative py-24 px-6 max-w-7xl mx-auto z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-petrol/30 bg-petrol/30 text-petrol text-xs font-semibold tracking-wider mb-8">
           <MessageSquare className="w-3 h-3" />
           AI Service
        </div>
        <h1 className="text-[2.7rem] leading-tight md:text-6xl font-bold text-ink mb-6">
          Intelligent Chatbots & <span className="text-petrol display-italic">Web Widgets</span>
        </h1>
        <p className="mobile-clamp-3 text-lg text-taupe max-w-2xl mx-auto leading-relaxed md:text-xl">
          Essential 24/7 engagement for your website visitors. Automate support and capture leads without lifting a finger.
        </p>
      </section>

      {/* Core Features Grid */}
      <section className="mobile-section-tight py-16 relative z-10">
        <div className="mobile-priority-two max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          
          {/* Feature 1: Website Chat Widget */}
          <div className="mobile-card-compact bg-parchment/60 border border-hairline p-8 rounded-3xl hover:border-petrol/30 transition-all">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-700">
              <MessageSquare className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-4">Website Chat Widget</h3>
            <p className="mobile-clamp-3 text-taupe leading-relaxed text-sm">
              A lightweight, responsive chat interface that lives on your website. It greets every visitor, offers immediate assistance, and keeps engagement high even when your team is offline.
            </p>
          </div>

          {/* Feature 2: FAQ Automation */}
          <div className="mobile-card-compact bg-parchment/60 border border-hairline p-8 rounded-3xl hover:border-petrol/30 transition-all">
            <div className="w-12 h-12 bg-brass/10 rounded-xl flex items-center justify-center mb-6 text-brass">
              <HelpCircle className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-4">Basic FAQ Automation</h3>
            <p className="mobile-clamp-3 text-taupe leading-relaxed text-sm">
              Stop answering the same questions repeatedly. The bot instantly resolves common queries about pricing, hours, locations, and services, freeing your human team for complex issues.
            </p>
          </div>

          {/* Feature 3: Lead Capture */}
          <div className="mobile-card-compact bg-parchment/60 border border-hairline p-8 rounded-3xl hover:border-petrol/30 transition-all">
            <div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-ink mb-4">Simple Lead Capture</h3>
            <p className="mobile-clamp-3 text-taupe leading-relaxed text-sm">
              Turn anonymous traffic into contacts. The bot naturally collects names, emails, and phone numbers during the conversation and sends them directly to your inbox or CRM.
            </p>
          </div>

        </div>
      </section>

      {/* CTA for Standard Bot */}
      <div className="text-center pb-14 md:pb-24 relative z-10">
        <button 
          onClick={() => onNavigate(PageType.CONTACT)}
          className="px-8 py-4 rounded-full bg-parchment text-ink font-bold hover:bg-sand transition-all border border-dune shadow-lg"
        >
          Get a Standard Chatbot
        </button>
      </div>

      {/* UPSELL SECTION: Aqion Engage */}
      <section className="mobile-section-tight py-24 relative border-t border-hairline bg-gradient-to-b from-bone to-petrol/20">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-petrol text-bone text-xs font-bold tracking-wider mb-6 shadow-lg shadow-petrol/50">
                <Zap className="w-3 h-3 fill-current" />
                ENTERPRISE UPGRADE
              </div>
              <h2 className="text-[2.45rem] leading-tight md:text-4xl font-bold text-ink mb-6">Need More Than Just Text? Upgrade to <span className="text-petrol display-italic">Aqion Engage</span></h2>
              <p className="mobile-clamp-3 text-base md:text-lg text-graphite leading-relaxed mb-8">
                Conventional chatbots are reactive—they wait for customers to type. <strong className="text-petrol display-italic">Aqion Engage</strong> is a proactive AI workforce. It speaks, it texts on WhatsApp, and it closes deals autonomously.
              </p>
              
              <button 
                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-petrol text-bone font-bold hover:bg-petrolDeep transition-all shadow-xl shadow-petrol/40"
              >
                Explore Aqion Engage Capabilities <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Comparison Table */}
            <div className="mobile-visual-hide bg-paper rounded-3xl border border-hairline overflow-hidden shadow-2xl">
              <div className="grid grid-cols-2 text-center border-b border-hairline">
                <div className="p-6 bg-bone/50 text-taupe font-semibold text-sm uppercase tracking-wider">
                  Conventional Chatbot
                </div>
                <div className="p-6 bg-petrol/20 text-petrol font-bold text-sm uppercase tracking-wider relative">
                  Aqion Engage
                  <div className="absolute top-0 right-0 w-full h-1 bg-petrol"></div>
                </div>
              </div>

              <div className="divide-y divide-hairline">
                {/* Row 1 */}
                <div className="grid grid-cols-2 p-6 hover:bg-parchment/30 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2 text-taupe text-sm">
                    <MessageSquare className="w-5 h-5 mb-1" />
                    Text Only (Website)
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-ink font-semibold text-sm">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-petrol" />
                      <MessageSquare className="w-4 h-4 text-indigo-600" />
                    </div>
                    Voice + WhatsApp + Web
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-2 p-6 hover:bg-parchment/30 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2 text-taupe text-sm">
                    <div className="w-6 h-6 rounded-full bg-parchment flex items-center justify-center"><XIcon className="w-3 h-3" /></div>
                    Reactive (Waits for user)
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-ink font-semibold text-sm">
                    <div className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center"><Check className="w-3 h-3 text-violet-500" /></div>
                    Proactive (Outbound Calls)
                  </div>
                </div>

                {/* Row 3 */}
                <div className="grid grid-cols-2 p-6 hover:bg-parchment/30 transition-colors">
                  <div className="flex flex-col items-center justify-center gap-2 text-taupe text-sm">
                    Basic Form Capture
                  </div>
                  <div className="flex flex-col items-center justify-center gap-2 text-ink font-semibold text-sm text-center">
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
