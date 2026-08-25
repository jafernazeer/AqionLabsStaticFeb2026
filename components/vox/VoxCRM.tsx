import { useMemo, useState } from 'react';
import {
  CalendarDays,
  LayoutGrid,
  Mail,
  Moon,
  PhoneCall,
  Search,
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

type TabId = 'overview' | 'transcripts' | 'leads' | 'bookings' | 'email';
type QualityFilter = 'All Leads' | VoxLead['quality'];

const INK = 'text-[#0f172a]';

/**
 * `short` is the label the mobile tab bar uses: six tabs share the width of a
 * handset, so each one gets a single word under its icon.
 */
const NAV: { id: TabId; label: string; short: string; icon: LucideIcon; count?: number }[] = [
  { id: 'overview', label: 'Overview', short: 'Overview', icon: LayoutGrid },
  { id: 'transcripts', label: 'Call Transcripts', short: 'Calls', icon: PhoneCall, count: 4 },
  { id: 'leads', label: 'Leads', short: 'Leads', icon: UsersRound, count: 10 },
  { id: 'bookings', label: 'Bookings', short: 'Bookings', icon: CalendarDays, count: 4 },
  { id: 'email', label: 'Email Updates', short: 'Email', icon: Mail },
];

const HEADINGS: Record<TabId, { title: string; sub: string }> = {
  overview: { title: 'Overview', sub: 'AI call performance & key metrics at a glance' },
  transcripts: { title: 'Call Transcripts', sub: 'View past calls, turn-by-turn transcripts, and export reports' },
  leads: { title: 'Leads', sub: 'Leads captured directly from live call transcripts' },
  bookings: { title: 'Bookings', sub: 'Scheduled appointments and client consultations' },
  email: { title: 'Email Updates', sub: 'Manage email recipients for call summaries and daily digests' },
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
          className={`rounded-md px-2.5 py-1 text-[9.5px] sm:text-[11px] font-medium ${
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
        {/* Brand rail — desktop only; the handset gets an app bar and bottom tabs */}
        <div className="hidden shrink-0 flex-col border-slate-200 bg-white lg:flex lg:w-[13.5rem] lg:border-r">
          <div className="flex items-center gap-2.5 px-4 py-4">
            <img src="/AqionVoxLogoIcon-clean.png" alt="" aria-hidden="true" className="h-8 w-8 object-contain" />
            <div className="min-w-0 leading-tight">
              <p className={`truncate text-[14px] sm:text-[17px] font-bold tracking-[-0.02em] ${INK}`}>AqionVox</p>
              <p className="text-[9px] sm:text-[10.5px] text-slate-400">by AqionLabs</p>
            </div>
          </div>

          <nav
            aria-label="Aqion Vox CRM sections"
            className="flex flex-1 flex-col gap-0.5 overflow-y-auto p-2.5 pt-1"
          >
            {NAV.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-11 w-full shrink-0 cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-[11px] sm:text-[13px] font-medium transition-colors ${
                    active ? 'bg-emerald-50 text-emerald-700' : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.7} />
                  <span className="whitespace-nowrap">{item.label}</span>
                  {item.count !== undefined && (
                    <span className="ml-auto rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8.5px] sm:text-[10px] font-semibold text-emerald-700">
                      {item.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="flex items-center gap-2.5 border-t border-slate-200 px-4 py-3">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[9.5px] sm:text-[11px] font-bold text-white">
              AQ
            </span>
            <div className="min-w-0">
              <p className={`truncate text-[10px] sm:text-[12px] font-semibold ${INK}`}>AqionVox Hub</p>
              <p className="truncate text-[9px] sm:text-[10.5px] text-slate-500">Enterprise Plan</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          {/* App chrome */}
          <header className="flex shrink-0 items-center gap-2.5 border-b border-slate-200 bg-white px-4 py-3 lg:gap-3">
            <img
              src="/AqionVoxLogoIcon-clean.png"
              alt=""
              aria-hidden="true"
              className="h-7 w-7 shrink-0 object-contain lg:hidden"
            />
            {/* The mobile app bar carries the product name: the bottom tabs already
                say which view is open. Desktop keeps the view title, because the
                rail beside it is what carries the branding there. */}
            <div className="min-w-0 lg:hidden">
              <p className={`truncate text-[12.5px] sm:text-[15px] font-bold tracking-[-0.02em] ${INK}`}>AqionVox</p>
              <p className="truncate text-[9.5px] sm:text-[11px] text-slate-500">by AqionLabs</p>
            </div>
            <div className="hidden min-w-0 lg:block">
              <p className={`truncate text-[12.5px] sm:text-[15px] font-bold tracking-[-0.01em] ${INK}`}>{heading.title}</p>
              <p className="truncate text-[9.5px] sm:text-[11px] text-slate-500">{heading.sub}</p>
            </div>
            <div className="ml-auto flex shrink-0 items-center gap-1.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[9.5px] sm:text-[11px] font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                <span className="hidden sm:inline">AqionVox&nbsp;</span>Live
              </span>
              <span className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[9.5px] sm:text-[11px] font-medium text-slate-600 sm:inline-flex">
                <Zap className="h-3 w-3 text-amber-500" strokeWidth={2} />
                180ms
              </span>
              <span
                aria-hidden="true"
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 md:flex"
              >
                <Moon className="h-3.5 w-3.5" strokeWidth={1.7} />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1d4ed8] text-[9px] sm:text-[10.5px] font-bold text-white">
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
                    <h3 className={`text-[12.5px] sm:text-[15px] font-bold ${INK}`}>Voice Call Overview</h3>
                    <p className="text-[9.5px] sm:text-[11.5px] text-slate-500">
                      Real-time voice AI performance metrics for UAE &amp; Gulf operations
                    </p>
                  </div>
                  <Segmented options={['Today', 'Week', 'Month', 'Quarter', 'Year']} value="Week" />
                </div>

                <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-3">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-3.5">
                      <div className="flex items-start justify-between gap-3">
                        <p className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
                        <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${statIconTone[stat.tone]}`}>
                          <PhoneCall className="h-3.5 w-3.5" strokeWidth={1.8} />
                        </span>
                      </div>
                      <p className={`mt-2 text-[1.3rem] sm:text-[1.7rem] font-bold leading-none tracking-[-0.02em] ${INK}`}>{stat.value}</p>
                      <div className="mt-2 flex items-baseline justify-between gap-2">
                        <span className="truncate text-[9px] sm:text-[10.5px] text-slate-500">{stat.sub}</span>
                        <span className="shrink-0 text-[9px] sm:text-[10.5px] font-semibold text-emerald-600">↑ {stat.delta}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl border border-slate-200 bg-white p-4">
                  <p className={`text-[11px] sm:text-[13px] font-semibold ${INK}`}>Call Conversion Funnel</p>
                  <p className="text-[9.5px] sm:text-[11px] text-slate-500">AI intake to scheduled booking</p>
                  <div className="mt-3.5 grid gap-2.5">
                    {funnel.map((stage) => (
                      <div key={stage.label}>
                        <div className="flex items-baseline justify-between gap-3">
                          <span className="text-[9.5px] sm:text-[11.5px] text-slate-600">{stage.label}</span>
                          <span className={`text-[9.5px] sm:text-[11px] font-semibold ${INK}`}>
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
                      <p className={`text-[11px] sm:text-[13px] font-semibold ${INK}`}>Active Voice AI Personas</p>
                      <p className="text-[9.5px] sm:text-[11px] text-slate-500">Deploys bilingual speech models for client call handling</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[8.5px] sm:text-[10px] font-semibold text-emerald-700">
                      4 Active Personas
                    </span>
                  </div>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {personas.map((persona) => (
                      <div key={persona.name} className="rounded-lg border border-slate-200 p-3">
                        <div className="flex items-center justify-between gap-2">
                          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-[9.5px] sm:text-[11px] font-bold text-emerald-700">
                            {persona.initial}
                          </span>
                          <span
                            className={`rounded-full px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-semibold ${
                              persona.badge === 'Primary' ? 'bg-emerald-50 text-emerald-700' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {persona.badge}
                          </span>
                        </div>
                        <p className={`mt-2 text-[10.5px] sm:text-[12.5px] font-semibold ${INK}`}>{persona.name}</p>
                        <p className="text-[9px] sm:text-[10.5px] text-slate-500">{persona.role}</p>
                        <div className="mt-2 flex items-baseline justify-between gap-2 border-t border-slate-100 pt-2">
                          <span className="truncate text-[9px] sm:text-[10.5px] text-slate-500">{persona.language}</span>
                          <span className={`shrink-0 text-[9px] sm:text-[10.5px] font-semibold ${INK}`}>{persona.calls}</span>
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
                    <p className={`text-[10.5px] sm:text-[12.5px] font-semibold ${INK}`}>Past Call Records</p>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[8.5px] sm:text-[10px] font-semibold text-emerald-700">
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
                          <p className={`truncate text-[10.5px] sm:text-[12.5px] font-semibold ${INK}`}>{call.caller}</p>
                          <span className="shrink-0 text-[8.5px] sm:text-[10px] text-slate-400">{call.at}</span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-1.5">
                          <span className="text-[9px] sm:text-[10.5px] text-slate-500">{call.phone}</span>
                          <span
                            className={`rounded px-1.5 py-0.5 text-[8.5px] sm:text-[9.5px] font-medium ${
                              call.direction === 'Inbound' ? 'bg-emerald-50 text-emerald-700' : 'bg-blue-50 text-blue-600'
                            }`}
                          >
                            {call.direction}
                          </span>
                          <span className="ml-auto text-[8.5px] sm:text-[10px] text-slate-400">{call.duration}</span>
                        </div>
                        <div className="mt-1.5 flex items-center justify-between gap-2">
                          <span className="truncate text-[9px] sm:text-[10.5px] text-slate-500">Agent: {call.agent}</span>
                          <span
                            className={`shrink-0 rounded px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-semibold ${outcomeTone[call.outcome]}`}
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
                      <p className={`text-[12px] sm:text-[14px] font-bold ${INK}`}>{openCall.caller}</p>
                      <p className="text-[9.5px] sm:text-[11px] text-slate-500">
                        {openCall.phone} · {openCall.at}
                      </p>
                    </div>
                    <div className="shrink-0 text-right">
                      <span className={`rounded px-2 py-0.5 text-[8.5px] sm:text-[10px] font-semibold ${outcomeTone[openCall.outcome]}`}>
                        {openCall.outcome}
                      </span>
                      <p className="mt-1 text-[8.5px] sm:text-[10px] text-slate-400">Cost: {openCall.cost}</p>
                    </div>
                  </div>

                  <div className="mt-3 rounded-lg border border-emerald-100 bg-emerald-50/60 p-3">
                    <p className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.1em] text-emerald-700">AI call summary</p>
                    <p className="mt-1.5 text-[9.5px] sm:text-[11.5px] leading-relaxed text-slate-700">{openCall.summary}</p>
                  </div>

                  <p className={`mt-4 text-[10px] sm:text-[12px] font-semibold ${INK}`}>
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
                          className={`mb-0.5 text-[8.5px] sm:text-[9.5px] font-semibold ${
                            turn.speaker === 'agent' ? 'text-emerald-700' : 'text-right text-blue-600'
                          }`}
                        >
                          {turn.speaker === 'agent' ? `AI Agent (${turn.name})` : turn.name} {turn.at}
                        </p>
                        <p
                          className={`rounded-lg border px-3 py-2 text-[9.5px] sm:text-[11.5px] leading-relaxed ${
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
                      className="mobile-form-control h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-[10.5px] sm:text-[12.5px] text-[#0f172a] placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <div className="flex shrink-0 flex-wrap gap-1.5">
                    {(['All Leads', 'Hot', 'Warm', 'Cold'] as const).map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setQuality(option)}
                        aria-pressed={quality === option}
                        className={`min-h-11 shrink-0 cursor-pointer rounded-lg border px-3 text-[9.5px] sm:text-[11.5px] font-medium transition-colors ${
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
                      <p className={`text-[10.5px] sm:text-[12.5px] font-semibold ${INK}`}>Captured Leads ({visibleLeads.length})</p>
                      <p className="hidden text-[9px] sm:text-[10.5px] text-slate-400 sm:block">
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
                                className="whitespace-nowrap px-3 py-2 text-[8.5px] sm:text-[10px] font-semibold text-slate-500"
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
                                <p className={`whitespace-nowrap text-[10.5px] sm:text-[12.5px] font-semibold ${INK}`}>{lead.name}</p>
                                <p className="whitespace-nowrap text-[9px] sm:text-[10.5px] text-slate-500">{lead.phone}</p>
                              </td>
                              <td className="whitespace-nowrap px-3 py-2.5 text-[10px] sm:text-[12px] text-slate-700">{lead.company}</td>
                              <td className="px-3 py-2.5">
                                <span
                                  className={`inline-block whitespace-nowrap rounded-full px-2 py-0.5 text-[9px] sm:text-[10.5px] font-semibold ${qualityTone[lead.quality]}`}
                                >
                                  {lead.quality} ({lead.score})
                                </span>
                              </td>
                              <td className="whitespace-nowrap px-3 py-2.5 text-[9.5px] sm:text-[11.5px] text-slate-600">
                                {lead.language}
                              </td>
                              <td className="whitespace-nowrap px-3 py-2.5 text-[9px] sm:text-[10.5px] text-slate-400">
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
                      <span className="text-[9px] sm:text-[10.5px] font-semibold text-slate-400">{openLead.ref}</span>
                      <span
                        className={`rounded-full px-2 py-0.5 text-[8.5px] sm:text-[10px] font-semibold ${qualityTone[openLead.quality]}`}
                      >
                        {openLead.quality} Quality · Score {openLead.score}/100
                      </span>
                    </div>
                    <p className={`mt-2.5 text-[0.95rem] sm:text-[1.15rem] font-bold tracking-[-0.01em] ${INK}`}>{openLead.name}</p>
                    <p className="text-[9.5px] sm:text-[11.5px] text-slate-500">
                      {openLead.company} · {openLead.region}
                    </p>

                    <div className="mt-3.5 grid gap-1.5 border-t border-slate-100 pt-3">
                      {[
                        ['Phone Number:', openLead.phone],
                        ['Email Address:', openLead.email],
                        ['Spoken Language:', openLead.language],
                      ].map(([label, value]) => (
                        <p key={label} className="text-[9.5px] sm:text-[11.5px] text-slate-500">
                          {label}
                          <span className={`font-semibold ${INK}`}> {value}</span>
                        </p>
                      ))}
                      <p className="text-[9.5px] sm:text-[11.5px] text-slate-500">
                        Lead Status:
                        <span className="font-semibold text-emerald-600"> {openLead.status}</span>
                      </p>
                    </div>

                    <div className="mt-3.5 rounded-lg border border-slate-200 bg-slate-50/70 p-3">
                      <p className="text-[8.5px] sm:text-[9.5px] font-bold uppercase tracking-[0.1em] text-slate-500">
                        Extracted transcript notes
                      </p>
                      <p className="mt-1.5 text-[9.5px] sm:text-[11.5px] leading-relaxed text-slate-700">{openLead.notes}</p>
                    </div>
                  </aside>
                </div>
              </div>
            )}

            {tab === 'bookings' && (
              <div className="grid gap-3">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className={`text-[12.5px] sm:text-[15px] font-bold ${INK}`}>Client Bookings &amp; Consultations</h3>
                    <p className="text-[9.5px] sm:text-[11.5px] text-slate-500">
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
                          <p className="text-[8.5px] sm:text-[10px] font-bold uppercase tracking-[0.08em] text-emerald-700">
                            {booking.source}
                          </p>
                          <span
                            className={`inline-flex shrink-0 items-center gap-1.5 rounded-full px-2 py-0.5 text-[8.5px] sm:text-[10px] font-semibold ${
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
                        <p className={`mt-1 text-[0.9rem] sm:text-[1.05rem] font-bold tracking-[-0.01em] ${INK}`}>{booking.name}</p>
                        <p className="text-[9.5px] sm:text-[11.5px] text-slate-500">
                          {booking.company} · {booking.phone}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-lg border border-slate-200 bg-slate-50/70 px-3 py-2.5">
                          <div className="min-w-0">
                            <p className={`truncate text-[10px] sm:text-[12px] font-semibold ${INK}`}>{booking.when}</p>
                            <p className="truncate text-[9px] sm:text-[10.5px] text-slate-500">Duration: {booking.duration}</p>
                          </div>
                          <span className="shrink-0 text-[9.5px] sm:text-[11px] font-semibold text-emerald-700">View Cal.com ↗</span>
                        </div>

                        <p className={`mt-3 text-[9.5px] sm:text-[11.5px] font-semibold ${INK}`}>Call Context Notes:</p>
                        <p className="text-[9.5px] sm:text-[11.5px] leading-relaxed text-slate-600">{booking.notes}</p>
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
                    <h3 className={`text-[12.5px] sm:text-[15px] font-bold ${INK}`}>Email Updates &amp; Call Notifications</h3>
                    <p className="text-[9.5px] sm:text-[11.5px] text-slate-500">
                      Configure automated email dispatch for lead details, call summaries, and daily analytics
                    </p>
                  </div>
                  <span className="shrink-0 rounded-lg bg-emerald-600 px-3 py-2 text-[9.5px] sm:text-[11.5px] font-semibold text-white">
                    Send Test Email Report
                  </span>
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className={`text-[11px] sm:text-[13px] font-semibold ${INK}`}>Email Recipients ({recipients.length})</p>
                    <p className="text-[9.5px] sm:text-[11px] text-slate-500">
                      Team members receiving live call summaries and daily performance reports
                    </p>
                    <div className="mt-3 grid gap-2">
                      {recipients.map((recipient) => (
                        <div
                          key={recipient.id}
                          className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
                        >
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-[9.5px] sm:text-[11px] font-bold text-emerald-700">
                            {recipient.name.charAt(0)}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className={`truncate text-[10.5px] sm:text-[12.5px] font-semibold ${INK}`}>{recipient.name}</p>
                            <p className="truncate text-[9px] sm:text-[10.5px] text-slate-500">
                              {recipient.email} · <span className="text-emerald-600">{recipient.team}</span>
                            </p>
                          </div>
                          <span className="shrink-0 rounded border border-red-200 px-2 py-0.5 text-[9px] sm:text-[10.5px] font-semibold text-red-500">
                            Remove
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className={`text-[11px] sm:text-[13px] font-semibold ${INK}`}>Notification Triggers</p>
                    <p className="text-[9.5px] sm:text-[11px] text-slate-500">Select when email updates should be sent to your team</p>
                    <div className="mt-3 grid gap-2">
                      {triggers.map((trigger) => (
                        <div
                          key={trigger.id}
                          className="flex items-start gap-3 rounded-lg border border-slate-200 px-3 py-2.5"
                        >
                          <div className="min-w-0 flex-1">
                            <p className={`text-[10px] sm:text-[12px] font-semibold ${INK}`}>{trigger.title}</p>
                            <p className="text-[9px] sm:text-[10.5px] leading-relaxed text-slate-500">{trigger.detail}</p>
                          </div>
                          <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-emerald-600 text-[9.5px] sm:text-[11px] font-bold text-white">
                            ✓
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

          </div>

          {/* Bottom tab bar — the mobile route into each view */}
          <nav
            aria-label="Aqion Vox CRM sections"
            className="flex shrink-0 items-stretch border-t border-slate-200 bg-white lg:hidden"
          >
            {NAV.map((item) => {
              const active = tab === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative flex min-h-14 flex-1 cursor-pointer flex-col items-center justify-center gap-1 px-0.5 py-1.5 transition-colors ${
                    active ? 'text-emerald-700' : 'text-slate-500'
                  }`}
                >
                  {active && (
                    <span aria-hidden="true" className="absolute inset-x-2.5 top-0 h-0.5 rounded-full bg-emerald-600" />
                  )}
                  <span className="relative">
                    <item.icon className="h-[18px] w-[18px]" strokeWidth={active ? 2 : 1.7} />
                    {item.count !== undefined && (
                      <span className="absolute -right-2.5 -top-1.5 min-w-[15px] rounded-full bg-emerald-600 px-1 text-center text-[8px] sm:text-[9px] font-bold leading-[15px] text-white">
                        {item.count}
                      </span>
                    )}
                  </span>
                  <span className="text-[8.5px] sm:text-[9.5px] font-medium leading-none tracking-[-0.01em]">{item.short}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </div>
  );
}
