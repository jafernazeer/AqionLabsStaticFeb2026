import fs from 'fs';

const content = fs.readFileSync('pages/AqionVox.tsx', 'utf8');

const startTag = '{/* Core Capabilities */}';
const endTag = '{/* Why Wins (Gradient Text + Blue Grid) */}';

const startIndex = content.indexOf(startTag);
const endIndex = content.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
  const newSections = `
      {/* 1. Overview */}
      <section className="py-24 bg-navy-900/50 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center mb-6">
                      <BarChart className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Complete Visibility at a Glance</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      See your performance instantly. Track leads captured, meetings booked, voice calls, and AI cost. Monitor conversion paths, channel mix, action queue, and AI agent health.
                  </p>
                  <ul className="space-y-4">
                      {["Track ROI in real-time", "Monitor AI agent health", "Identify top channels"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400">
                              <Check className="w-5 h-5 text-indigo-500" />
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="relative bg-slate-100 rounded-2xl p-4 shadow-2xl border border-white/10 group overflow-hidden flex items-center justify-center min-h-[400px]">
                  <img src="https://placehold.co/1200x800/f8fafc/0f172a?text=Overview+Dashboard+(Light+Mode)" alt="Overview Dashboard" className="rounded-xl shadow-lg w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
          </div>
      </section>

      {/* 2. Leads */}
      <section className="py-24 bg-navy-950 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative bg-navy-900 rounded-2xl p-4 shadow-2xl border border-navy-700 group overflow-hidden flex items-center justify-center min-h-[400px]">
                  <img src="https://placehold.co/1200x800/0f172a/f8fafc?text=Lead+Management+(Dark+Mode)" alt="Lead Management" className="rounded-xl shadow-lg w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="order-1 lg:order-2">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center mb-6">
                      <Filter className="w-6 h-6 text-orange-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Capture, Qualify, and Convert</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      Easily search leads by name, phone, or company. Filter by status (New, Contacted, Qualified) and quality (Hot, Warm, Cold). See source, score, and last contact time at a glance.
                  </p>
                  <ul className="space-y-4">
                      {["Automated Lead Scoring", "Instant Intent Filtering", "Priority Queuing"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400">
                              <Check className="w-5 h-5 text-orange-500" />
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </section>

      {/* 3. Conversations */}
      <section className="py-24 bg-navy-900/50 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                      <Users className="w-6 h-6 text-purple-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Unified Journey Timeline</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      Track every interaction in a unified customer journey across all channels. Whether it's voice, WhatsApp, meeting intent, or a follow-up, it’s assigned directly to your leads in a unified interface.
                  </p>
                  <ul className="space-y-4">
                      {["Omnichannel History", "Context-Aware Handovers", "Zero Information Loss"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400">
                              <Check className="w-5 h-5 text-purple-500" />
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="relative bg-slate-100 rounded-2xl p-4 shadow-2xl border border-white/10 group overflow-hidden flex items-center justify-center min-h-[400px]">
                  <img src="https://placehold.co/1200x800/f8fafc/0f172a?text=Conversations+(Light+Mode)" alt="Conversations Timeline" className="rounded-xl shadow-lg w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
          </div>
      </section>

      {/* 4. Meetings */}
      <section className="py-24 bg-navy-950 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative bg-navy-900 rounded-2xl p-4 shadow-2xl border border-navy-700 group overflow-hidden flex items-center justify-center min-h-[400px]">
                  <img src="https://placehold.co/1200x800/0f172a/f8fafc?text=Meetings+(Dark+Mode)" alt="Meetings Dashboard" className="rounded-xl shadow-lg w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="order-1 lg:order-2">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                      <Calendar className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Smart Appointment Automation</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      Scheduled appointments and demos fully automated. Filter by Pending, Confirmed, Completed, and Cancelled status. See source (Voice AI, WhatsApp AI, Manual) and manage actions available instantly.
                  </p>
                  <ul className="space-y-4">
                      {["Zero Human Wait Times", "Automatic Diary Syncing", "Multi-Agent Support"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400">
                              <Check className="w-5 h-5 text-blue-500" />
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
          </div>
      </section>

      {/* 5. WhatsApp */}
      <section className="py-24 bg-navy-900/50 border-y border-navy-800 relative z-10">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                  <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center mb-6">
                      <MessageSquare className="w-6 h-6 text-green-400" />
                  </div>
                  <h2 className="text-4xl font-bold mb-6 text-white">Native WhatsApp Panel</h2>
                  <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                      Messaging, campaigns, bots, and contacts natively managed. Monitor direct chats, organize automated campaigns, and track contact statuses. Seamlessly integrates with leads and allows for instant manual intervention when needed.
                  </p>
                  <ul className="space-y-4">
                      {["Automated FAQ handling", "Outbound Nurturing", "Direct Human Takeover"].map((item, i) => (
                          <li key={i} className="flex items-center gap-3 text-slate-400">
                              <Check className="w-5 h-5 text-green-500" />
                              {item}
                          </li>
                      ))}
                  </ul>
              </div>
              <div className="relative bg-slate-100 rounded-2xl p-4 shadow-2xl border border-white/10 group overflow-hidden flex items-center justify-center min-h-[400px]">
                  <img src="https://placehold.co/1200x800/f8fafc/0f172a?text=WhatsApp+(Light+Mode)" alt="WhatsApp Dashboard" className="rounded-xl shadow-lg w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
          </div>
      </section>

      `;

  const newContent = content.substring(0, startIndex) + newSections + content.substring(endIndex);
  fs.writeFileSync('pages/AqionVox.tsx', newContent);
  console.log('Successfully replaced sections');
} else {
  console.error('Tags not found');
}
