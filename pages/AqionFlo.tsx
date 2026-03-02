import React, { useEffect } from 'react';
import { PageType } from '../types';
import { 
  Activity, Package, Users, Briefcase, 
  Factory, ShieldCheck, ArrowRight, Layers,
  CheckCircle2, AlertCircle, Brain,
  Sparkles, TrendingUp, Zap, MessageSquare, Bot
} from 'lucide-react';

interface AqionFloProps {
    onNavigate: (page: PageType) => void;
}

// Reusable Dashboard Container
const DashboardCard = ({ title, children, className = "" }: { title: string, children: React.ReactNode, className?: string }) => (
  <div className={`bg-navy-900/80 border border-navy-700 rounded-xl overflow-hidden shadow-2xl ${className}`}>
    <div className="h-10 bg-navy-950 border-b border-navy-800 flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
         <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
         </div>
         <span className="text-xs font-medium text-slate-400 ml-2">{title}</span>
      </div>
      <div className="text-[10px] text-slate-600 font-mono">AI_ENABLED</div>
    </div>
    <div className="p-4 relative">
      <div className="absolute inset-0 bg-grid-indigo opacity-[0.03] pointer-events-none"></div>
      {children}
    </div>
  </div>
);

const AqionFlo: React.FC<AqionFloProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

      {/* Hero Section */}
      <section className="relative py-32 px-6 max-w-7xl mx-auto z-10 overflow-hidden text-center">
          {/* Background Waves - Optimized */}
          <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-center">
             <div className="w-[500px] h-[500px] border border-indigo-500/20 rounded-full animate-[spin_30s_linear_infinite] absolute"></div>
             <div className="w-[600px] h-[600px] border border-purple-500/10 rounded-full animate-[spin_40s_linear_infinite_reverse] absolute"></div>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
              <div className="mb-8 inline-block">
                  <h1 className="text-6xl md:text-8xl font-bold tracking-tighter">
                      <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionFlo</span>
                  </h1>
              </div>
              
              <h2 className="text-2xl md:text-4xl font-light text-white mb-8 tracking-tight">
                  The <span className="font-semibold text-indigo-400">AI Operating System</span> for Modern Business
              </h2>
              
              <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 leading-relaxed">
                  Unified ERP intelligence that doesn't just record history—it predicts the future. 
                  Embedded with generative AI to automate, analyze, and advise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                      onClick={() => onNavigate(PageType.CONTACT)}
                      className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2"
                  >
                      <Sparkles className="w-5 h-5" />
                      Request AI Demo
                  </button>
                  <button className="px-8 py-4 rounded-full bg-navy-900 border border-navy-700 text-white font-semibold hover:bg-navy-800 transition-all flex items-center justify-center gap-2">
                      View Architecture <ArrowRight className="w-4 h-4" />
                  </button>
              </div>
          </div>
      </section>

      {/* Feature 1: Financial Intelligence + AI Forecasting */}
      <section className="py-24 bg-navy-900/30 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <DashboardCard title="Financial Command Center">
                      <div className="space-y-6">
                          {/* AI Insight Banner */}
                          <div className="bg-indigo-500/10 border border-indigo-500/20 rounded-lg p-3 flex items-start gap-3">
                              <Sparkles className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                              <div>
                                  <div className="text-sm font-bold text-indigo-300">AI Insight: Cash Flow Alert</div>
                                  <div className="text-xs text-slate-400">Predicted cash dip in 14 days due to delayed receivables. Recommendation: Trigger early payment discount for Client X.</div>
                              </div>
                          </div>

                          {/* Main Chart Area */}
                          <div className="grid grid-cols-2 gap-4">
                              <div className="bg-navy-950 p-4 rounded-lg border border-navy-800">
                                  <div className="text-xs text-slate-500 mb-1">Current Liquidity</div>
                                  <div className="text-2xl font-bold text-white">$1.24M</div>
                                  <div className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                                      <TrendingUp className="w-3 h-3" /> +12% vs last month
                                  </div>
                              </div>
                              <div className="bg-navy-950 p-4 rounded-lg border border-navy-800">
                                  <div className="text-xs text-slate-500 mb-1">Projected (30 Days)</div>
                                  <div className="text-2xl font-bold text-indigo-400">$1.45M</div>
                                  <div className="text-xs text-indigo-400/70 mt-1">AI Confidence: 94%</div>
                              </div>
                          </div>

                          {/* Visual Graph Mockup - Optimized */}
                          <div className="h-40 flex items-end justify-between gap-1 px-2">
                              {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90].map((h, i) => (
                                  <div key={i} className="w-full bg-navy-800 rounded-t-sm relative group">
                                      <div 
                                        className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-1000 ${i > 7 ? 'bg-indigo-500/50 border-t border-indigo-400 border-dashed' : 'bg-gradient-to-t from-indigo-600 to-purple-500'}`} 
                                        style={{ height: `${h}%` }}
                                      ></div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </DashboardCard>
              </div>
              <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-bold mb-6 border border-indigo-500/20">
                      <Brain className="w-3 h-3" /> FINANCE AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Predictive Financial Intelligence.</h2>
                  <p className="text-lg text-slate-400 mb-6">
                      Don't just track where your money went—know where it's going. AqionFlo uses historical data to forecast cash flow, identify anomalies, and suggest optimization strategies.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-500/20 p-1 rounded text-indigo-400"><TrendingUp className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Smart Cash Flow Forecasting</strong>
                              <span className="text-sm text-slate-400">AI models predict liquidity positions 30-90 days out based on AP/AR trends.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-500/20 p-1 rounded text-indigo-400"><AlertCircle className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Anomaly Detection</strong>
                              <span className="text-sm text-slate-400">Automatically flags unusual expenses or duplicate invoices before payment.</span>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Feature 2: Sales + AI Scoring */}
      <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold mb-6 border border-emerald-500/20">
                      <Zap className="w-3 h-3" /> SALES AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Deal Probability & Pipeline Scoring.</h2>
                  <p className="text-lg text-slate-400 mb-6">
                      Stop chasing dead leads. AqionFlo analyzes interaction history, email sentiment, and engagement velocity to score every deal in your pipeline.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-emerald-500/20 p-1 rounded text-emerald-400"><CheckCircle2 className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Win Probability Score</strong>
                              <span className="text-sm text-slate-400">Know exactly which deals to focus on to hit quota.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-emerald-500/20 p-1 rounded text-emerald-400"><MessageSquare className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Sentiment Analysis</strong>
                              <span className="text-sm text-slate-400">Real-time analysis of customer emails to gauge interest levels.</span>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <DashboardCard title="Sales Pipeline Intelligence">
                      <div className="grid grid-cols-1 gap-4">
                          {/* Deal Card 1 */}
                          <div className="bg-navy-950 p-4 rounded-lg border border-navy-800 flex items-center justify-between group hover:border-emerald-500/50 transition-colors">
                              <div>
                                  <div className="font-bold text-white">Acme Corp Enterprise License</div>
                                  <div className="text-xs text-slate-500">Stage: Negotiation • $125,000</div>
                              </div>
                              <div className="text-right">
                                  <div className="text-2xl font-bold text-emerald-400">92%</div>
                                  <div className="text-[10px] text-emerald-500/70 font-bold uppercase">Win Probability</div>
                              </div>
                          </div>

                          {/* Deal Card 2 */}
                          <div className="bg-navy-950 p-4 rounded-lg border border-navy-800 flex items-center justify-between group hover:border-yellow-500/50 transition-colors">
                              <div>
                                  <div className="font-bold text-white">Global Tech Expansion</div>
                                  <div className="text-xs text-slate-500">Stage: Proposal • $85,000</div>
                              </div>
                              <div className="text-right">
                                  <div className="text-2xl font-bold text-yellow-400">45%</div>
                                  <div className="text-[10px] text-yellow-500/70 font-bold uppercase">Win Probability</div>
                              </div>
                          </div>

                          {/* AI Recommendation */}
                          <div className="bg-navy-800/50 rounded-lg p-3 border border-navy-700 mt-2">
                              <div className="flex items-center gap-2 mb-2">
                                  <Bot className="w-4 h-4 text-indigo-400" />
                                  <span className="text-xs font-bold text-white">AI Coach Recommendation</span>
                              </div>
                              <p className="text-xs text-slate-300 italic">
                                  "The Global Tech deal is stalling. Decision maker hasn't opened last 2 emails. Suggest sending 'Case Study ROI' sequence to re-engage."
                              </p>
                              <button className="mt-3 w-full py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded transition-colors">
                                  Auto-Draft Re-engagement Email
                              </button>
                          </div>
                      </div>
                  </DashboardCard>
              </div>
          </div>
      </section>

      {/* Feature 3: Inventory + Demand Forecasting */}
      <section className="py-24 bg-navy-900/30 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <DashboardCard title="Smart Inventory Management">
                      <div className="space-y-6">
                          {/* Stock Chart */}
                          <div className="relative h-48 bg-navy-950 rounded-lg border border-navy-800 p-4 overflow-hidden">
                              <div className="absolute top-4 right-4 flex gap-4 text-[10px] font-bold">
                                  <span className="flex items-center gap-1 text-slate-400"><div className="w-2 h-2 bg-slate-500 rounded-full"></div> Historical</span>
                                  <span className="flex items-center gap-1 text-indigo-400"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> AI Forecast</span>
                              </div>
                              
                              {/* Graph Lines (CSS Art) */}
                              <svg className="w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
                                  {/* Historical Line */}
                                  <path d="M0,40 Q10,35 20,38 T40,30 T60,25" fill="none" stroke="#64748b" strokeWidth="0.5" />
                                  {/* Forecast Line (Dashed) */}
                                  <path d="M60,25 Q70,15 80,10 T100,5" fill="none" stroke="#818cf8" strokeWidth="0.5" strokeDasharray="1,1" />
                                  {/* Threshold Area */}
                                  <rect x="0" y="45" width="100" height="5" fill="#ef4444" fillOpacity="0.1" />
                              </svg>

                              {/* Alert Overlay */}
                              <div className="absolute bottom-8 right-8 bg-navy-900 border border-red-500/50 p-3 rounded-lg shadow-xl max-w-[180px]">
                                  <div className="flex items-center gap-2 text-red-400 text-xs font-bold mb-1">
                                      <AlertCircle className="w-3 h-3" /> Stockout Risk
                                  </div>
                                  <div className="text-[10px] text-slate-300">
                                      Item #SKU-99 will deplete in 12 days based on current velocity.
                                  </div>
                              </div>
                          </div>

                          {/* Auto-Reorder Action */}
                          <div className="flex items-center justify-between bg-navy-950 p-3 rounded-lg border border-navy-800">
                              <div className="flex items-center gap-3">
                                  <Package className="w-8 h-8 text-indigo-400 bg-indigo-500/10 p-1.5 rounded-lg" />
                                  <div>
                                      <div className="text-sm font-bold text-white">Smart Reorder</div>
                                      <div className="text-xs text-slate-500">Suggested Qty: 500 units</div>
                                  </div>
                              </div>
                              <button className="px-3 py-1.5 bg-indigo-600 text-white text-xs font-bold rounded hover:bg-indigo-500 transition-colors">
                                  Approve PO
                              </button>
                          </div>
                      </div>
                  </DashboardCard>
              </div>
              <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold mb-6 border border-orange-500/20">
                      <Layers className="w-3 h-3" /> SUPPLY CHAIN AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Predictive Demand & Smart Reordering.</h2>
                  <p className="text-lg text-slate-400 mb-6">
                      Eliminate stockouts and overstocking. AqionFlo's AI analyzes seasonality, market trends, and sales velocity to predict exactly what you need, when you need it.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-orange-500/20 p-1 rounded text-orange-400"><Activity className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Dynamic Reorder Points</strong>
                              <span className="text-sm text-slate-400">Static thresholds are obsolete. AI adjusts reorder levels based on real-time demand.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-orange-500/20 p-1 rounded text-orange-400"><Factory className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Vendor Performance Scoring</strong>
                              <span className="text-sm text-slate-400">Automatically rates suppliers on delivery speed and quality to optimize procurement.</span>
                          </div>
                      </li>
                  </ul>
              </div>
          </div>
      </section>

      {/* Feature 4: HR + Talent Intelligence */}
      <section className="py-24 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold mb-6 border border-pink-500/20">
                      <Users className="w-3 h-3" /> WORKFORCE AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Talent Retention & Sentiment Analysis.</h2>
                  <p className="text-lg text-slate-400 mb-6">
                      Your people are your biggest asset. AqionFlo helps you keep them happy by analyzing engagement patterns and predicting retention risks before they become resignations.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-pink-500/20 p-1 rounded text-pink-400"><ShieldCheck className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Retention Risk Modeling</strong>
                              <span className="text-sm text-slate-400">Identify high-performers at risk of leaving based on workload and engagement data.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-pink-500/20 p-1 rounded text-pink-400"><Briefcase className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-white block">Smart Resource Allocation</strong>
                              <span className="text-sm text-slate-400">AI suggests the best team composition for projects based on skills and availability.</span>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <DashboardCard title="Workforce Intelligence">
                      <div className="grid grid-cols-2 gap-4">
                          {/* Employee Card */}
                          <div className="col-span-2 bg-navy-950 p-4 rounded-lg border border-navy-800 flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-slate-700 flex items-center justify-center text-xl font-bold text-white">JD</div>
                              <div className="flex-1">
                                  <div className="font-bold text-white">John Doe</div>
                                  <div className="text-xs text-slate-500">Senior Developer</div>
                              </div>
                              <div className="text-right">
                                  <div className="inline-block px-2 py-1 bg-red-500/10 text-red-400 text-[10px] font-bold rounded border border-red-500/20">High Burnout Risk</div>
                              </div>
                          </div>

                          {/* Stats */}
                          <div className="bg-navy-950 p-4 rounded-lg border border-navy-800 text-center">
                              <div className="text-xs text-slate-500 mb-1">Avg. Overtime</div>
                              <div className="text-xl font-bold text-white">14 hrs</div>
                              <div className="text-[10px] text-red-400">Critical Level</div>
                          </div>
                          <div className="bg-navy-950 p-4 rounded-lg border border-navy-800 text-center">
                              <div className="text-xs text-slate-500 mb-1">Engagement</div>
                              <div className="text-xl font-bold text-white">Low</div>
                              <div className="text-[10px] text-slate-400">Last 30 days</div>
                          </div>

                          {/* AI Action */}
                          <div className="col-span-2 bg-indigo-500/10 border border-indigo-500/20 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                  <Sparkles className="w-4 h-4 text-indigo-400" />
                                  <span className="text-xs font-bold text-indigo-300">AI Suggestion</span>
                              </div>
                              <p className="text-xs text-slate-300 mb-3">
                                  "John has worked 3 consecutive weekends. Risk of churn is 78%. Suggest approving immediate 2-day leave or workload redistribution."
                              </p>
                              <div className="flex gap-2">
                                  <button className="flex-1 py-1.5 bg-navy-800 hover:bg-navy-700 text-white text-xs font-bold rounded border border-navy-600 transition-colors">
                                      View Schedule
                                  </button>
                                  <button className="flex-1 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-bold rounded transition-colors">
                                      Approve Leave
                                  </button>
                              </div>
                          </div>
                      </div>
                  </DashboardCard>
              </div>
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative z-10 border-t border-navy-800">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to upgrade your operating system?</h2>
              <p className="text-xl text-slate-400 mb-10">
                  Join the forward-thinking enterprises running on AqionFlo.
              </p>
              <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="bg-white text-navy-950 px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-200 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                  Schedule a Consultation
              </button>
          </div>
      </section>

    </div>
  );
};

export default AqionFlo;
