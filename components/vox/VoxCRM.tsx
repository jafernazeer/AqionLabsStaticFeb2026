import { useMemo, useState } from 'react';
import {
  CalendarDays,
  LayoutGrid,
  Mail,
  Moon,
  PhoneCall,
  Search,
  Smartphone,
  UsersRound,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useVoxCrmData, type VoxLead } from './voxCrmData';

/**
 * The Aqion Vox CRM, rendered as the product itself: brand rail, app chrome and
 * the working views behind a live call, following the current dashboard.
 *
 * The shell is a fixed height with its own scrolling body, so switching tabs
 * never resizes the page around it.
 */

type TabId = 'overview' | 'transcripts' | 'leads' | 'bookings' | 'email' | 'agent';
type QualityFilter = 'All Leads' | VoxLead['quality'];

const INK = 'text-[#0f172a]';

const NAV: { id: TabId; label: string; icon: LucideIcon; count?: number }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'transcripts', label: 'Call Transcripts', icon: PhoneCall, count: 4 },
  { id: 'leads', label: 'Leads', icon: UsersRound, count: 10 },
  { id: 'bookings', label: 'Bookings', icon: CalendarDays, count: 4 },
  { id: 'email', label: 'Email Updates', icon: Mail },
  { id: 'agent', label: 'Test Voice Agent', icon: Smartphone },
];

const HEADINGS: Record<TabId, { title: string; sub: string }> = {
  overview: { title: 'Overview', sub: 'AI call performance & key metrics at a glance' },
  transcripts: { title: 'Call Transcripts', sub: 'View past calls, turn-by-turn transcripts, and export reports' },
  leads: { title: 'Leads', sub: 'Leads captured directly from live call transcripts' },
  bookings: { title: 'Bookings', sub: 'Scheduled appointments and client consultations' },
  email: { title: 'Email Updates', sub: 'Manage email recipients for call summaries and daily digests' },
  agent: { title: 'Test Voice Agent', sub: 'Place a live call and watch the transcript build' },
};

const qualityTone: Record<VoxLead['quality'], string> = {
  Hot: 'bg-red-50 text-red-600',
  Warm: 'bg-amber-50 text-amber-700',
  Cold: 'bg-blue-50 text-blue-600',
};

const outcomeTone: Record<string, string> = {
  'Meeting Booked': 'bg-emerald-50 text-emerald-700',
  'Qualified Lead': 'bg-blue-50 text-blue-600',
  Escalated: 'bg-amber-50 text-amber-700',
};

const statIconTone: Record<string, string> = {
  emerald: 'bg-emerald-50 text-emerald-600',
  blue: 'bg-blue-50 text-blue-600',
  violet: 'bg-violet-50 text-violet-600',
};

function Segmented({ options, value }: { options: string[]; value: string }) {
  return (
    <div className="flex shrink-0 gap-1 rounded-lg border border-slate-200 bg-white p-1">
      {options.map((option) => (
        <span
          key={option}
          className={`rounded-md px-2.5 py-1 text-[11px] font-medium ${
            option === value ? 'bg-emerald-600 text-white' : 'text-slate-500'
          }`}
        >
          {option}
        </span>
      ))}
    </div>
  );
}

export default function VoxCRM() {
  const { stats, funnel, personas, calls, leads, bookings, recipients, triggers } = useVoxCrmData();

  const [tab, setTab] = useState<TabId>('overview');
  const [quality, setQuality] = useState<QualityFilter>('All Leads');
  const [leadQuery, setLeadQuery] = useState('');
  const [openLeadId, setOpenLeadId] = useState(leads[4]?.id ?? leads[0]?.id ?? '');
  const [openCallId, setOpenCallId] = useState(calls[1]?.id ?? calls[0]?.id ?? '');

  const visibleLeads = useMemo(() => {
    const needle = leadQuery.trim().toLowerCase();
    return leads.filter((lead) => {
      if (quality !== 'All Leads' && lead.quality !== quality) return false;
      if (!needle) return true;
      return [lead.name, lead.company, lead.phone].join(' ').toLowerCase().includes(needle);
    });
  }, [leads, leadQuery, quality]);

  const openLead = visibleLeads.find((l) => l.id === openLeadId) ?? visibleLeads[0] ?? leads[0];
  const openCall = calls.find((c) => c.id === openCallId) ?? calls[0];
  const heading = HEADINGS[tab];

  return (
    <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-[#F5F7FB] shadow-[0_30px_90px_-50px_rgba(15,23,42,0.5)] md:rounded-[22px]">
      {/* Fixed shell height keeps the page still while tabs change */}
      <div className="flex h-[30rem] flex-col sm:h-[34rem] lg:h-[40rem] lg:flex-row">
        {/* Brand rail */}
        <div className="flex shrink-0 flex-col border-b border-slate-200 bg-white lg:w-[13.5rem] lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-2.5 border-b border-slate-100 px-4 py-2.5 lg:border-b-0 lg:py-4">
            <img src="/AqionVoxLogoIcon-clean.png" alt="" aria-hidden="true" className="h-6 w-6 object-contain lg:h-8 lg:w-8" />
            <div className="min-w-0 leading-tight">
              <p className={`truncate text-[15px] font-bold tracking-[-0.02em] lg:text-[17px] ${INK}`}>AqionVox</p>
              <p className="hidden text-[10.5px] text-slate-400 lg:block">by AqionLabs</p>
            </div>
          </div>

          <nav
            aria-label="Aqion Vox CRM sections"
            className="flex gap-1 overflow-x-auto p-2 lg:flex-1 lg:flex-col lg:gap-0.5 lg:overflow-y-auto lg:p-2.5 lg:pt-1"
          >
            {NAV.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-[13px] font-medium transition-colors lg:w-full ${
                    active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.7} />
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.count !== undefined && (
                    <span className="ml-auto hidden rounded-full bg-emerald-100 px-1.5 py-0.5 text-[10px] font-semibold text-emerald-700 lg:inline">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 border-t border-slate-200 px-4 py-3 lg:flex">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[11px] font-bold text-white">
              AQ
            </span>
            <div className="min-w-0">
              <p className={`truncate text-[12px] font-semibold ${INK}`}>AqionVox Hub</p>
              <p className="truncate text-[10.5px] text-slate-500">Enterprise Plan</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          {/* App chrome */}
          <header className="flex shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
            <div className="min-w-0">
              <p className={`truncate text-[15px] font-bold tracking-[-0.01em] ${INK}`}>{heading.title}</p>
              <p className="truncate text-[11px] text-slate-500">{heading.sub}</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                AqionVox Live
              </span>
              <span className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:inline-flex">
                <Zap className="h-3 w-3 text-amber-500" strokeWidth={2} />
                180ms
              </span>
              <span
                aria-hidden="true"
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 md:flex"
              >
                <Moon className="h-3.5 w-3.5" strokeWidth={1.7} />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d4ed8] text-[10.5px] font-bold text-white">
                AQ
              </span>
            </div>
          </header>

          {/* Scrolling body — the only part that changes with the tab */}
          <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
            {tab === 'overview' && (
              <div className="grid gap-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-[15px] font-bold ${INK}`}>Voice Call Overview</h3>
                    <p className="text-[11.5px] text-slate-500">
                      Real-time voice AI performance metrics for UAE &amp; Gulf operations
                    </p>
                  </div>
                  <Segmented options={['Today', 'Week', 'Month', 'Quarter', 'Year']} value="Week" />
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[9.5px] font-bold uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${statIconTone[stat.tone]}`}>
                          <PhoneCall className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                      </div>
                      <p className={`mt-2 text-[1.7rem] font-bold leading-none tracking-[-0.02em] ${INK}`}>{stat.value}</p>
                      <div className="mt-2 flex items-baseline justify-between gap-2">
                        <span className="truncate text-[10.5px] text-slate-500">{stat.sub}</span>
                        <span className="shrink-0 text-[10.5px] font-semibold text-emerald-600">↑ {stat.delta}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className={`text-[13px] font-semibold ${INK}`}>Call Conversion Funnel</p>
                  <p className="text-[11px] text-slate-500">AI intake to scheduled booking</p>
                  <div className="mt-3.5 grid gap-2.5">
                    {funnel.map((stage) => (
                      <div key={stage.label}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[11.5px] text-slate-600">{stage.label}</span>
                          <span className={`text-[11px] font-semibold ${INK}`}>
                            {stage.value} <span className="font-normal text-slate-400">({stage.pct})</span>
                          </span>
                        </div>
                        <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                          <div className={`h-full rounded-full ${stage.tone}`} style={{ width: `${stage.width}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <div>
                      <p className={`text-[13px] font-semibold ${INK}`}>Active Voice AI Personas</p>
                      <p className="text-[11px] text-slate-500">Deploys bilingual speech models for client call handling</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      4 Active Personas
                    </span>
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {personas.map((persona) => (
                      <div key={persona.name} className="rounded-lg border border-slate-200 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-700">
                            {persona.initial}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[9.5px] font-semibold ${
                              persona.badge === 'Primary' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {persona.badge}
                          </span>
                        </div>
                        <p className={`mt-2 text-[12.5px] font-semibold ${INK}`}>{persona.name}</p>
                        <p className="text-[10.5px] text-slate-500">{persona.role}</p>
                        <div className="mt-2 flex items-baseline justify-between gap-2 border-t border-slate-100 pt-2">
                          <span className="truncate text-[10.5px] text-slate-500">{persona.language}</span>
                          <span className={`shrink-0 text-[10.5px] font-semibold ${INK}`}>{persona.calls}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {tab === 'transcripts' && openCall && (
              <div className="grid gap-3 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="flex items-baseline justify-between gap-2 border-b border-slate-200 px-3 py-2.5">
                    <p className={`text-[12.5px] font-semibold ${INK}`}>Past Call Records</p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                      {calls.length} Calls
                    </span>
                  </div>
                  {calls.map((call) => {
                    const active = call.id === openCall.id;
                    return (
                      <button
                        key={call.id}
                        type="button"
                        onClick={() => setOpenCallId(call.id)}
                        className={`block w-full cursor-pointer border-b border-slate-100 p-3 text-left transition-colors last:border-b-0 ${
                          active ? 'border-l-2 border-l-emerald-500 bg-emerald-50/60' : 'hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <p className={`truncate text-[12.5px] font-semibold ${INK}`}>{call.caller}</p>
                          <span className="shrink-0 text-[10px] text-slate-400">{call.at}</span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-1.5">
                          <span className="text-[10.5px] text-slate-500">{call.phone}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[9.5px] font-medium ${
                              call.direction === 'Inbound' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-600'
                            }`}
                          >
                            {call.direction}
                          </span>
                          <span className="ml-auto text-[10px] text-slate-400">{call.duration}</span>
                        </div>
                        <div className="mt-1.5 flex items-center justify-between gap-2">
                          <span className="truncate text-[10.5px] text-slate-500">Agent: {call.agent}</span>
                          <span
                            className={`shrink-0 rounded px-2 py-0.5 text-[9.5px] font-semibold ${outcomeTone[call.outcome]}`}
                          >
                            {call.outcome}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div className="min-w-0">
                      <p className={`text-[14px] font-bold ${INK}`}>{openCall.caller}</p>
                      <p className="text-[11px] text-slate-500">
                        {openCall.phone} · {openCall.at}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className={`rounded px-2 py-0.5 text-[10px] font-semibold ${outcomeTone[openCall.outcome]}`}>
                        {openCall.outcome}
                      </span>
                      <p className="mt-1 text-[10px] text-slate-400">Cost: {openCall.cost}</p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-emerald-700">AI call summary</p>
                    <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-700">{openCall.summary}</p>
                  </div>

                  <p className={`mt-4 text-[12px] font-semibold ${INK}`}>
                    Turn-by-Turn Dialogue Transcript ({openCall.turns.length} turns)
                  </p>
                  <ol className="mt-2 grid gap-2">
                    {openCall.turns.map((turn, idx) => (
                      <li
                        key={`${openCall.id}-${idx}`}
                        className={turn.speaker === 'agent' ? 'justify-self-start' : 'justify-self-end'}
                        style={{ maxWidth: '88%' }}
                      >
                        <p
                          className={`mb-0.5 text-[9.5px] font-semibold ${
                            turn.speaker === 'agent' ? 'text-emerald-700' : 'text-right text-blue-600'
                          }`}
                        >
                          {turn.speaker === 'agent' ? `AI Agent (${turn.name})` : turn.name} {turn.at}
                        </p>
                        <p
                          className={`rounded-lg border px-3 py-2 text-[11.5px] leading-relaxed ${
                            turn.speaker === 'agent'
                              ? 'border-emerald-100 bg-emerald-50/50 text-slate-700'
                              : 'border-blue-100 bg-blue-50/60 text-slate-700'
                          }`}
                        >
                          {turn.text}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {tab === 'leads' && openLead && (
              <div className="grid gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <label className="relative min-w-0 flex-1 basis-52">
                    <span className="sr-only">Search leads</span>
                    <Search
                      aria-hidden="true"
                      className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="search"
                      value={leadQuery}
                      onChange={(event) => setLeadQuery(event.target.value)}
                      placeholder="Search leads by name, company, or phone..."
                      className="mobile-form-control h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-[12.5px] text-[#0f172a] placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <div className="flex shrink-0 flex-wrap gap-1.5">
                    {(['All Leads', 'Hot', 'Warm', 'Cold'] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setQuality(option)}
                        aria-pressed={quality === option}
                        className={`min-h-11 shrink-0 cursor-pointer rounded-lg border px-3 text-[11.5px] font-medium transition-colors ${
                          quality === option
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid gap-3 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
                  <div className="min-w-0 overflow-hidden rounded-xl border border-slate-200 bg-white">
                    <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-slate-200 px-3 py-2.5">
                      <p className={`text-[12.5px] font-semibold ${INK}`}>Captured Leads ({visibleLeads.length})</p>
                      <p className="hidden text-[10.5px] text-slate-400 sm:block">
                        Auto-extracted from live call transcripts
                      </p>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[34rem] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-slate-200">
                            {['Lead Profile', 'Company', 'Quality', 'Language', 'Captured'].map((column) => (
                              <th
                                key={column}
                                scope="col"
                                className="whitespace-nowrap px-3 py-2 text-[10px] font-semibold text-slate-500"
                              >
                                {column}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {visibleLeads.map((lead) => (
                            <tr
                              key={lead.id}
                              onClick={() => setOpenLeadId(lead.id)}
                              className={`cursor-pointer border-b border-slate-100 transition-colors last:border-b-0 ${
                                lead.id === openLead.id ? 'bg-emerald-50/70' : 'hover:bg-slate-50'
                              }`}
                            >
                              <td className="px-3 py-2.5">
                                <p className={`whitespace-nowrap text-[12.5px] font-semibold ${INK}`}>{lead.name}</p>
                                <p className="whitespace-nowrap text-[10.5px] text-slate-500">{lead.phone}</p>
                              </td>
                              <td className="whitespace-nowrap px-3 py-2.5 text-[12px] text-slate-700">{lead.company}</td>
                              <td className="px-3 py-2.5">
                                <span
                                  className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[10.5px] font-semibold ${qualityTone[lead.quality]}`}
                                >
                                  {lead.quality} ({lead.score})
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">
                                {lead.language}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2.5 text-[10.5px] text-slate-400">
                                {lead.captured}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <aside className="min-w-0 rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="text-[10.5px] font-semibold text-slate-400">{openLead.ref}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${qualityTone[openLead.quality]}`}
                      >
                        {openLead.quality} Quality · Score {openLead.score}/100
                      </span>
                    </div>
                    <p className={`mt-2.5 text-[1.15rem] font-bold tracking-[-0.01em] ${INK}`}>{openLead.name}</p>
                    <p className="text-[11.5px] text-slate-500">
                      {openLead.company} · {openLead.region}
                    </p>

                    <div className="mt-3.5 grid gap-1.5 border-t border-slate-100 pt-3">
                      {[
                        ['Phone Number:', openLead.phone],
                        ['Email Address:', openLead.email],
                        ['Spoken Language:', openLead.language],
                      ].map(([label, value]) => (
                        <p key={label} className="text-[11.5px] text-slate-500">
                          {label}
                          <span className={`font-semibold ${INK}`}> {value}</span>
                        </p>
                      ))}
                      <p className="text-[11.5px] text-slate-500">
                        Lead Status:
                        <span className="font-semibold text-emerald-600"> {openLead.status}</span>
                      </p>
                    </div>

                    <div className="mt-3.5 rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Extracted transcript notes
                      </p>
                      <p className="mt-1.5 text-[11.5px] leading-relaxed text-slate-700">{openLead.notes}</p>
                    </div>
                  </aside>
                </div>
              </div>
            )}

            {tab === 'bookings' && (
              <div className="grid gap-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-[15px] font-bold ${INK}`}>Client Bookings &amp; Consultations</h3>
                    <p className="text-[11.5px] text-slate-500">
                      Appointments auto-scheduled by Aqion Vox agents via Cal.com
                    </p>
                  </div>
                  <Segmented options={['All', 'Confirmed', 'Pending', 'Completed']} value="All" />
                </div>

                <div className="grid gap-3 xl:grid-cols-2">
                  {bookings.map((booking) => (
                    <div
                      key={booking.id}
                      className={`overflow-hidden rounded-xl border border-slate-200 bg-white border-t-[3px] ${
                        booking.status === 'Pending' ? 'border-t-orange-500' : 'border-t-emerald-500'
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex items-start justify-between gap-2">
                          <p className="text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                            {booking.source}
                          </p>
                          <span
                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                              booking.status === 'Pending'
                                ? 'bg-orange-50 text-orange-700'
                                : 'bg-emerald-50 text-emerald-700'
                            }`}
                          >
                            <span
                              className={`h-1.5 w-1.5 rounded-full ${
                                booking.status === 'Pending' ? 'bg-orange-500' : 'bg-emerald-500'
                              }`}
                            />
                            {booking.status}
                          </span>
                        </div>
                        <p className={`mt-1 text-[1.05rem] font-bold tracking-[-0.01em] ${INK}`}>{booking.name}</p>
                        <p className="text-[11.5px] text-slate-500">
                          {booking.company} · {booking.phone}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5">
                          <div className="min-w-0">
                            <p className={`truncate text-[12px] font-semibold ${INK}`}>{booking.when}</p>
                            <p className="truncate text-[10.5px] text-slate-500">Duration: {booking.duration}</p>
                          </div>
                          <span className="shrink-0 text-[11px] font-semibold text-emerald-700">View Cal.com ↗</span>
                        </div>

                        <p className={`mt-3 text-[11.5px] font-semibold ${INK}`}>Call Context Notes:</p>
                        <p className="text-[11.5px] leading-relaxed text-slate-600">{booking.notes}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {tab === 'email' && (
              <div className="grid gap-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-[15px] font-bold ${INK}`}>Email Updates &amp; Call Notifications</h3>
                    <p className="text-[11.5px] text-slate-500">
                      Configure automated email dispatch for lead details, call summaries, and daily analytics
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-emerald-600 px-3 py-2 text-[11.5px] font-semibold text-white">
                    Send Test Email Report
                  </span>
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className={`text-[13px] font-semibold ${INK}`}>Email Recipients ({recipients.length})</p>
                    <p className="text-[11px] text-slate-500">
                      Team members receiving live call summaries and daily performance reports
                    </p>
                    <div className="mt-3 grid gap-2">
                      {recipients.map((recipient) => (
                        <div
                          key={recipient.id}
                          className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[11px] font-bold text-emerald-700">
                            {recipient.name.charAt(0)}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className={`truncate text-[12.5px] font-semibold ${INK}`}>{recipient.name}</p>
                            <p className="truncate text-[10.5px] text-slate-500">
                              {recipient.email} · <span className="text-emerald-600">{recipient.team}</span>
                            </p>
                          </div>
                          <span className="shrink-0 rounded border border-red-200 px-2 py-0.5 text-[10.5px] font-semibold text-red-500">
                            Remove
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className={`text-[13px] font-semibold ${INK}`}>Notification Triggers</p>
                    <p className="text-[11px] text-slate-500">Select when email updates should be sent to your team</p>
                    <div className="mt-3 grid gap-2">
                      {triggers.map((trigger) => (
                        <div
                          key={trigger.id}
                          className="flex items-start gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
                        >
                          <div className="min-w-0 flex-1">
                            <p className={`text-[12px] font-semibold ${INK}`}>{trigger.title}</p>
                            <p className="text-[10.5px] leading-relaxed text-slate-500">{trigger.detail}</p>
                          </div>
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-600 text-[11px] font-bold text-white">
                            ✓
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === 'agent' && (
              <div className="grid gap-3">
                <div className="rounded-xl border border-slate-200 bg-white p-5 text-center">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-700">
                    <PhoneCall className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <p className={`mt-3 text-[15px] font-bold ${INK}`}>Test the voice agent</p>
                  <p className="mx-auto mt-1.5 max-w-md text-[11.5px] leading-relaxed text-slate-500">
                    The handset above places a real call. Start it and the turn-by-turn transcript builds on screen, then
                    the lead, booking and summary land in these tabs.
                  </p>
                  <a
                    href="#live-demo"
                    className="mt-4 inline-flex min-h-11 items-center justify-center rounded-lg bg-emerald-600 px-4 text-[12.5px] font-semibold text-white transition-colors hover:bg-emerald-700"
                  >
                    Go to the live console
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
