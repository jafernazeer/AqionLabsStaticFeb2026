import React, { useEffect } from 'react';
import { ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';
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
  <div className={`bg-paper/90 backdrop-blur border border-dune rounded-xl overflow-hidden shadow-2xl ${className}`}>
    <div className="h-10 bg-bone border-b border-hairline flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
         <div className="flex gap-1.5">
           <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
           <div className="w-2.5 h-2.5 rounded-full bg-indigo-500/50"></div>
         </div>
         <span className="text-xs font-medium text-taupe ml-2">{title}</span>
      </div>
      <div className="text-[10px] text-ash font-mono">AI_ENABLED</div>
    </div>
    <div className="p-4 relative">
      <div className="absolute inset-0 bg-hairline-grid opacity-[0.03] pointer-events-none"></div>
      {children}
    </div>
  </div>
);

const AqionFlo: React.FC<AqionFloProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="aqionflo-mobile mesh-bg min-h-screen text-ink pt-20 font-sans relative overflow-x-hidden">
      <div className="fixed inset-0 pointer-events-none z-0 bg-hairline-grid opacity-80"></div>

      {/* Hero Section */}
      <section className="mobile-section-tight relative py-32 px-6 max-w-7xl mx-auto z-10 overflow-hidden text-center">
          {/* The same wave ribbon every other hero carries. */}
          <ServiceMotionBackdrop className="opacity-60" />

          <div className="relative z-10 max-w-5xl mx-auto">
              <div className="mb-8 inline-block">
                  <h1 className="text-[3.2rem] md:text-8xl font-bold tracking-tighter">
                      <span className="text-petrol display-italic">AqionFlo</span>
                  </h1>
              </div>
              
              <h2 className="text-xl md:text-4xl font-light text-ink mb-8 tracking-tight">
                  The <span className="font-semibold text-petrol">AI Operating System</span> for Modern Business
              </h2>
              
              <p className="mobile-clamp-3 text-base md:text-lg text-taupe max-w-2xl mx-auto mb-10 md:mb-12 leading-relaxed">
                  Unified ERP intelligence that doesn't just record history—it predicts the future. 
                  Embedded with generative AI to automate, analyze, and advise.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button 
                      onClick={() => onNavigate(PageType.CONTACT)}
                      className="mobile-action bg-petrol text-bone px-8 py-4 rounded-full font-bold hover:bg-petrolDeep transition-all shadow-lg shadow-petrol/25 flex items-center justify-center gap-2"
                  >
                      <Sparkles className="w-5 h-5" />
                      Request AI Demo
                  </button>
                  <button className="mobile-action px-8 py-4 rounded-full bg-paper border border-dune text-ink font-semibold hover:bg-parchment transition-all flex items-center justify-center gap-2">
                      View Architecture <ArrowRight className="w-4 h-4" />
                  </button>
              </div>
          </div>
      </section>

      {/* Feature 1: Financial Intelligence + AI Forecasting */}
      <section className="mobile-section-tight py-24 bg-paper/30 border-y border-hairline relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="mobile-visual-hide order-2 lg:order-1">
                  <DashboardCard title="Financial Command Center">
                      <div className="space-y-6">
                          {/* AI Insight Banner */}
                          <div className="bg-petrol/10 border border-petrol/20 rounded-lg p-3 flex items-start gap-3">
                              <Sparkles className="w-5 h-5 text-petrol flex-shrink-0 mt-0.5" />
                              <div>
                                  <div className="text-sm font-bold text-petrol">AI Insight: Cash Flow Alert</div>
                                  <div className="text-xs text-taupe">Predicted cash dip in 14 days due to delayed receivables. Recommendation: Trigger early payment discount for Client X.</div>
                              </div>
                          </div>

                          {/* Main Chart Area */}
                          <div className="grid grid-cols-2 gap-4">
                              <div className="bg-bone p-4 rounded-lg border border-hairline">
                                  <div className="text-xs text-ash mb-1">Current Liquidity</div>
                                  <div className="text-2xl font-bold text-ink">$1.24M</div>
                                  <div className="text-xs text-indigo-600 flex items-center gap-1 mt-1">
                                      <TrendingUp className="w-3 h-3" /> +12% vs last month
                                  </div>
                              </div>
                              <div className="bg-bone p-4 rounded-lg border border-hairline">
                                  <div className="text-xs text-ash mb-1">Projected (30 Days)</div>
                                  <div className="text-2xl font-bold text-petrol">$1.45M</div>
                                  <div className="text-xs text-petrol/70 mt-1">AI Confidence: 94%</div>
                              </div>
                          </div>

                          {/* Visual Graph Mockup - Optimized */}
                          <div className="h-40 flex items-end justify-between gap-1 px-2">
                              {[30, 45, 35, 60, 50, 75, 65, 80, 70, 90].map((h, i) => (
                                  <div key={i} className="w-full bg-parchment rounded-t-sm relative group">
                                      <div 
                                        className={`absolute bottom-0 w-full rounded-t-sm transition-all duration-1000 ${i > 7 ? 'bg-petrol/50 border-t border-petrol border-dashed' : 'bg-petrol'}`} 
                                        style={{ height: `${h}%` }}
                                      ></div>
                                  </div>
                              ))}
                          </div>
                      </div>
                  </DashboardCard>
              </div>
              <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-petrol/10 text-petrol text-xs font-bold mb-6 border border-petrol/20">
                      <Brain className="w-3 h-3" /> FINANCE AI
                  </div>
                  <h2 className="text-[2.35rem] leading-tight md:text-5xl font-bold mb-6">Predictive Financial Intelligence.</h2>
                  <p className="mobile-clamp-3 text-base md:text-lg text-taupe mb-6">
                      Don't just track where your money went—know where it's going. AqionFlo uses historical data to forecast cash flow, identify anomalies, and suggest optimization strategies.
                  </p>
                  <ul className="mobile-priority-two space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-petrol/20 p-1 rounded text-petrol"><TrendingUp className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Smart Cash Flow Forecasting</strong>
                              <span className="text-sm text-taupe">AI models predict liquidity positions 30-90 days out based on AP/AR trends.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-petrol/20 p-1 rounded text-petrol"><AlertCircle className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Anomaly Detection</strong>
                              <span className="text-sm text-taupe">Automatically flags unusual expenses or duplicate invoices before payment.</span>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold mb-6 border border-indigo-200">
                      <Zap className="w-3 h-3" /> SALES AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Deal Probability & Pipeline Scoring.</h2>
                  <p className="text-lg text-taupe mb-6">
                      Stop chasing dead leads. AqionFlo analyzes interaction history, email sentiment, and engagement velocity to score every deal in your pipeline.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-100 p-1 rounded text-indigo-600"><CheckCircle2 className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Win Probability Score</strong>
                              <span className="text-sm text-taupe">Know exactly which deals to focus on to hit quota.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-indigo-100 p-1 rounded text-indigo-600"><MessageSquare className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Sentiment Analysis</strong>
                              <span className="text-sm text-taupe">Real-time analysis of customer emails to gauge interest levels.</span>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <DashboardCard title="Sales Pipeline Intelligence">
                      <div className="grid grid-cols-1 gap-4">
                          {/* Deal Card 1 */}
                          <div className="bg-bone p-4 rounded-lg border border-hairline flex items-center justify-between group hover:border-violet-500/50 transition-colors">
                              <div>
                                  <div className="font-bold text-ink">Acme Corp Enterprise License</div>
                                  <div className="text-xs text-ash">Stage: Negotiation • $125,000</div>
                              </div>
                              <div className="text-right">
                                  <div className="text-2xl font-bold text-indigo-600">92%</div>
                                  <div className="text-[10px] text-violet-500/70 font-bold uppercase">Win Probability</div>
                              </div>
                          </div>

                          {/* Deal Card 2 */}
                          <div className="bg-bone p-4 rounded-lg border border-hairline flex items-center justify-between group hover:border-yellow-500/50 transition-colors">
                              <div>
                                  <div className="font-bold text-ink">Global Tech Expansion</div>
                                  <div className="text-xs text-ash">Stage: Proposal • $85,000</div>
                              </div>
                              <div className="text-right">
                                  <div className="text-2xl font-bold text-yellow-700">45%</div>
                                  <div className="text-[10px] text-yellow-500/70 font-bold uppercase">Win Probability</div>
                              </div>
                          </div>

                          {/* AI Recommendation */}
                          <div className="bg-parchment/60 rounded-lg p-3 border border-dune mt-2">
                              <div className="flex items-center gap-2 mb-2">
                                  <Bot className="w-4 h-4 text-petrol" />
                                  <span className="text-xs font-bold text-ink">AI Coach Recommendation</span>
                              </div>
                              <p className="text-xs text-graphite italic">
                                  "The Global Tech deal is stalling. Decision maker hasn't opened last 2 emails. Suggest sending 'Case Study ROI' sequence to re-engage."
                              </p>
                              <button className="mt-3 w-full py-2 bg-petrol hover:bg-petrol text-bone text-xs font-bold rounded transition-colors">
                                  Auto-Draft Re-engagement Email
                              </button>
                          </div>
                      </div>
                  </DashboardCard>
              </div>
          </div>
      </section>

      {/* Feature 3: Inventory + Demand Forecasting */}
      <section className="py-24 bg-paper/30 border-y border-hairline relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                  <DashboardCard title="Smart Inventory Management">
                      <div className="space-y-6">
                          {/* Stock Chart */}
                          <div className="relative h-48 bg-bone rounded-lg border border-hairline p-4 overflow-hidden">
                              <div className="absolute top-4 right-4 flex gap-4 text-[10px] font-bold">
                                  <span className="flex items-center gap-1 text-taupe"><div className="w-2 h-2 bg-slate-500 rounded-full"></div> Historical</span>
                                  <span className="flex items-center gap-1 text-petrol"><div className="w-2 h-2 bg-petrol rounded-full"></div> AI Forecast</span>
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
                              <div className="absolute bottom-8 right-8 bg-paper border border-red-500/50 p-3 rounded-lg shadow-xl max-w-[180px]">
                                  <div className="flex items-center gap-2 text-red-700 text-xs font-bold mb-1">
                                      <AlertCircle className="w-3 h-3" /> Stockout Risk
                                  </div>
                                  <div className="text-[10px] text-graphite">
                                      Item #SKU-99 will deplete in 12 days based on current velocity.
                                  </div>
                              </div>
                          </div>

                          {/* Auto-Reorder Action */}
                          <div className="flex items-center justify-between bg-bone p-3 rounded-lg border border-hairline">
                              <div className="flex items-center gap-3">
                                  <Package className="w-8 h-8 text-petrol bg-petrol/10 p-1.5 rounded-lg" />
                                  <div>
                                      <div className="text-sm font-bold text-ink">Smart Reorder</div>
                                      <div className="text-xs text-ash">Suggested Qty: 500 units</div>
                                  </div>
                              </div>
                              <button className="px-3 py-1.5 bg-petrol text-bone text-xs font-bold rounded hover:bg-petrol transition-colors">
                                  Approve PO
                              </button>
                          </div>
                      </div>
                  </DashboardCard>
              </div>
              <div className="order-1 lg:order-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold mb-6 border border-orange-200">
                      <Layers className="w-3 h-3" /> SUPPLY CHAIN AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Predictive Demand & Smart Reordering.</h2>
                  <p className="text-lg text-taupe mb-6">
                      Eliminate stockouts and overstocking. AqionFlo's AI analyzes seasonality, market trends, and sales velocity to predict exactly what you need, when you need it.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-orange-100 p-1 rounded text-orange-700"><Activity className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Dynamic Reorder Points</strong>
                              <span className="text-sm text-taupe">Static thresholds are obsolete. AI adjusts reorder levels based on real-time demand.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-orange-100 p-1 rounded text-orange-700"><Factory className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Vendor Performance Scoring</strong>
                              <span className="text-sm text-taupe">Automatically rates suppliers on delivery speed and quality to optimize procurement.</span>
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
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-clay/10 text-clay text-xs font-bold mb-6 border border-clay/20">
                      <Users className="w-3 h-3" /> WORKFORCE AI
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">Talent Retention & Sentiment Analysis.</h2>
                  <p className="text-lg text-taupe mb-6">
                      Your people are your biggest asset. AqionFlo helps you keep them happy by analyzing engagement patterns and predicting retention risks before they become resignations.
                  </p>
                  <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-clay/20 p-1 rounded text-clay"><ShieldCheck className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Retention Risk Modeling</strong>
                              <span className="text-sm text-taupe">Identify high-performers at risk of leaving based on workload and engagement data.</span>
                          </div>
                      </li>
                      <li className="flex items-start gap-3">
                          <div className="mt-1 bg-clay/20 p-1 rounded text-clay"><Briefcase className="w-4 h-4" /></div>
                          <div>
                              <strong className="text-ink block">Smart Resource Allocation</strong>
                              <span className="text-sm text-taupe">AI suggests the best team composition for projects based on skills and availability.</span>
                          </div>
                      </li>
                  </ul>
              </div>
              <div>
                  <DashboardCard title="Workforce Intelligence">
                      <div className="grid grid-cols-2 gap-4">
                          {/* Employee Card */}
                          <div className="col-span-2 bg-bone p-4 rounded-lg border border-hairline flex items-center gap-4">
                              <div className="w-12 h-12 rounded-full bg-parchment border border-hairline flex items-center justify-center text-xl font-bold text-ink">JD</div>
                              <div className="flex-1">
                                  <div className="font-bold text-ink">John Doe</div>
                                  <div className="text-xs text-ash">Senior Developer</div>
                              </div>
                              <div className="text-right">
                                  <div className="inline-block px-2 py-1 bg-red-50 text-red-700 text-[10px] font-bold rounded border border-red-200">High Burnout Risk</div>
                              </div>
                          </div>

                          {/* Stats */}
                          <div className="bg-bone p-4 rounded-lg border border-hairline text-center">
                              <div className="text-xs text-ash mb-1">Avg. Overtime</div>
                              <div className="text-xl font-bold text-ink">14 hrs</div>
                              <div className="text-[10px] text-red-700">Critical Level</div>
                          </div>
                          <div className="bg-bone p-4 rounded-lg border border-hairline text-center">
                              <div className="text-xs text-ash mb-1">Engagement</div>
                              <div className="text-xl font-bold text-ink">Low</div>
                              <div className="text-[10px] text-taupe">Last 30 days</div>
                          </div>

                          {/* AI Action */}
                          <div className="col-span-2 bg-petrol/10 border border-petrol/20 p-3 rounded-lg">
                              <div className="flex items-center gap-2 mb-2">
                                  <Sparkles className="w-4 h-4 text-petrol" />
                                  <span className="text-xs font-bold text-petrol">AI Suggestion</span>
                              </div>
                              <p className="text-xs text-graphite mb-3">
                                  "John has worked 3 consecutive weekends. Risk of churn is 78%. Suggest approving immediate 2-day leave or workload redistribution."
                              </p>
                              <div className="flex gap-2">
                                  <button className="flex-1 py-1.5 bg-parchment hover:bg-sand text-ink text-xs font-bold rounded border border-hairline transition-colors">
                                      View Schedule
                                  </button>
                                  <button className="flex-1 py-1.5 bg-petrol hover:bg-petrol text-bone text-xs font-bold rounded transition-colors">
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
      <section className="py-24 relative z-10 border-t border-hairline">
          <div className="max-w-4xl mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-ink mb-8">Ready to upgrade your operating system?</h2>
              <p className="text-xl text-taupe mb-10">
                  Join the forward-thinking enterprises running on AqionFlo.
              </p>
              <button 
                  onClick={() => onNavigate(PageType.CONTACT)}
                  className="bg-ink text-bone px-10 py-5 rounded-full font-bold text-lg hover:bg-petrolDeep transition-all shadow-[0_10px_40px_-10px_rgba(28,25,23,0.2)]"
              >
                  Schedule a Consultation
              </button>
          </div>
      </section>

    </div>
  );
};

export default AqionFlo;
