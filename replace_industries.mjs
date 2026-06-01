import fs from 'fs';

const file = 'pages/AqionVox.tsx';
let content = fs.readFileSync(file, 'utf8');

// 1. Replace the `const industries = [...]` array with the new data structure.
const oldIndustriesStart = content.indexOf('const industries = [');
const oldIndustriesEnd = content.indexOf('];', oldIndustriesStart) + 2;

const newIndustriesArray = `  const colorMap = {
    teal: { ring: 'ring-teal-500/30', icon: 'text-teal-400', bgHover: 'hover:bg-teal-950/20', borderHover: 'group-hover:border-teal-500/30' },
    amber: { ring: 'ring-amber-500/30', icon: 'text-amber-400', bgHover: 'hover:bg-amber-950/20', borderHover: 'group-hover:border-amber-500/30' },
    emerald: { ring: 'ring-emerald-500/30', icon: 'text-emerald-400', bgHover: 'hover:bg-emerald-950/20', borderHover: 'group-hover:border-emerald-500/30' },
    slate: { ring: 'ring-slate-400/30', icon: 'text-slate-300', bgHover: 'hover:bg-slate-800/30', borderHover: 'group-hover:border-slate-500/30' },
    blue: { ring: 'ring-blue-500/30', icon: 'text-blue-400', bgHover: 'hover:bg-blue-950/20', borderHover: 'group-hover:border-blue-500/30' },
    indigo: { ring: 'ring-indigo-500/30', icon: 'text-indigo-400', bgHover: 'hover:bg-indigo-950/20', borderHover: 'group-hover:border-indigo-500/30' },
    rose: { ring: 'ring-rose-500/30', icon: 'text-rose-400', bgHover: 'hover:bg-rose-950/20', borderHover: 'group-hover:border-rose-500/30' },
    orange: { ring: 'ring-orange-500/30', icon: 'text-orange-400', bgHover: 'hover:bg-orange-950/20', borderHover: 'group-hover:border-orange-500/30' },
    sky: { ring: 'ring-sky-500/30', icon: 'text-sky-400', bgHover: 'hover:bg-sky-950/20', borderHover: 'group-hover:border-sky-500/30' },
    purple: { ring: 'ring-purple-500/30', icon: 'text-purple-400', bgHover: 'hover:bg-purple-950/20', borderHover: 'group-hover:border-purple-500/30' },
    cyan: { ring: 'ring-cyan-500/30', icon: 'text-cyan-400', bgHover: 'hover:bg-cyan-950/20', borderHover: 'group-hover:border-cyan-500/30' },
    pink: { ring: 'ring-pink-500/30', icon: 'text-pink-400', bgHover: 'hover:bg-pink-950/20', borderHover: 'group-hover:border-pink-500/30' }
  } as Record<string, { ring: string; icon: string; bgHover: string; borderHover: string }>;

  const industryTiers = [
    {
      title: "High Demand",
      subtitle: "Primary verticals with proven high-ROI automation",
      items: [
        { id: 'healthcare', name: 'Healthcare', icon: Stethoscope, colorGroup: 'teal', desc: 'Patient booking, symptom triage & follow-up.', isTop: true },
        { id: 'realestate', name: 'Real Estate', icon: Building, colorGroup: 'amber', desc: 'Property inquiry qualification & viewing scheduling.', isTop: true },
        { id: 'finance', name: 'Finance', icon: Banknote, colorGroup: 'emerald', desc: 'Account servicing & secure intent routing.', isTop: true },
        { id: 'government', name: 'Government', icon: Landmark, colorGroup: 'slate', desc: 'Public service inquiries & citizen support triage.', isTop: true }
      ]
    },
    {
      title: "Growing Sectors",
      subtitle: "Rapidly adopting AI conversational flows",
      items: [
        { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingBag, colorGroup: 'blue', desc: 'Order tracking, returns & product FAQs.', isTop: false },
        { id: 'education', name: 'Education', icon: GraduationCap, colorGroup: 'indigo', desc: 'Prospective student enrollment & program inquiries.', isTop: false },
        { id: 'hospitality', name: 'Hospitality', icon: Coffee, colorGroup: 'rose', desc: 'Reservation & booking management.', isTop: false },
        { id: 'logistics', name: 'Logistics', icon: Truck, colorGroup: 'orange', desc: 'Shipment tracking & delivery coordination.', isTop: false }
      ]
    },
    {
      title: "Emerging Use Cases",
      subtitle: "Custom deployments for specialized needs",
      items: [
        { id: 'professional', name: 'Legal', icon: Briefcase, colorGroup: 'sky', desc: 'Client onboarding & initial case qualification.', isTop: false },
        { id: 'media_events', name: 'Media & Events', icon: Ticket, colorGroup: 'purple', desc: 'Event ticketing & schedule inquiries.', isTop: false },
        { id: 'architecture', name: 'Architecture', icon: Ruler, colorGroup: 'cyan', desc: 'Project inquiries & consultant scheduling.', isTop: false },
        { id: 'marketing_design', name: 'Marketing', icon: Megaphone, colorGroup: 'pink', desc: 'Campaign strategy and inbound lead capture.', isTop: false }
      ]
    }
  ];`;

content = content.substring(0, oldIndustriesStart) + newIndustriesArray + content.substring(oldIndustriesEnd);

// 2. Replace the HTML rendering of `industries.map`
const oldRenderStart = content.indexOf('<div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4">');
const oldRenderEnd = content.indexOf('Differentiation: Each industry runs on custom conversation logic, not generic bots.') + 85 + 23; // including trailing div

if (oldRenderStart !== -1 && oldRenderEnd !== -1) {
    const newRenderHTML = `<div className="space-y-16">
                   {industryTiers.map((tier, tIdx) => (
                       <div key={tIdx} className="space-y-8">
                           {/* Section Header */}
                           <div className="flex flex-col md:flex-row md:items-baseline md:justify-between border-b border-navy-800 pb-4">
                               <div>
                                   <h3 className="text-2xl font-bold text-white mb-2">{tier.title}</h3>
                                   <p className="text-slate-400">{tier.subtitle}</p>
                               </div>
                           </div>

                           {/* Grid */}
                           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                               {tier.items.map((item, i) => {
                                   const col = colorMap[item.colorGroup];
                                   return (
                                     <div 
                                         key={i} 
                                         onClick={() => {
                                             demoSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
                                         }}
                                         className={\`group relative rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm p-6 cursor-pointer transition-all duration-300 \${col.bgHover} \${col.borderHover} flex flex-col h-full\`}
                                     >
                                         <div className="flex items-start justify-between mb-4">
                                             <div className={\`p-3 rounded-xl bg-navy-900 border border-white/10 \${col.icon} ring-1 ring-inset \${col.ring} group-hover:scale-110 transition-transform duration-300\`}>
                                                 <item.icon strokeWidth={1.5} className="w-6 h-6" />
                                             </div>
                                             {item.isTop && (
                                                 <span className="text-[10px] uppercase tracking-wider font-bold text-white bg-white/10 px-2 py-1 rounded-full backdrop-blur-md border border-white/10">
                                                     Top Priority
                                                 </span>
                                             )}
                                         </div>
                                         <h4 className="text-lg font-semibold text-white mb-2">{item.name}</h4>
                                         <p className="text-slate-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                                     </div>
                                   );
                               })}
                           </div>
                       </div>
                   ))}
               </div>`;
    content = content.substring(0, oldRenderStart) + newRenderHTML + content.substring(oldRenderEnd);
} else {
    console.log("Could not find render area.");
}

fs.writeFileSync(file, content);
