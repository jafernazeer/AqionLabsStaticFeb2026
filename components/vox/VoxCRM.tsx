import { useMemo, useState } from 'react';
import {
  Bell,
  CalendarDays,
  LayoutGrid,
  MessageCircle,
  Moon,
  Phone,
  Search,
  Settings,
  UsersRound,
  Zap,
  type LucideIcon,
} from 'lucide-react';
import { useVoxCrmData, type VoxLead } from './voxCrmData';

/**
 * The Aqion Vox CRM, rendered as the product itself rather than a summary of
 * it: brand rail, app chrome and the working views behind a live call.
 *
 * The shell is a fixed height with its own scrolling body, so switching tabs
 * never resizes the page around it.
 */

type TabId = 'overview' | 'leads' | 'conversations' | 'calls' | 'meetings' | 'whatsapp' | 'settings';

const NAV: { id: TabId; label: string; icon: LucideIcon; count?: number }[] = [
  { id: 'overview', label: 'Overview', icon: LayoutGrid },
  { id: 'leads', label: 'Leads', icon: UsersRound, count: 3 },
  { id: 'conversations', label: 'Conversations', icon: MessageCircle, count: 6 },
  { id: 'calls', label: 'Call Logs', icon: Phone },
  { id: 'meetings', label: 'Meetings', icon: CalendarDays, count: 2 },
  { id: 'whatsapp', label: 'WhatsApp', icon: MessageCircle, count: 5 },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const HEADINGS: Record<TabId, { title: string; sub: string }> = {
  overview: { title: 'Overview', sub: 'AI performance at a glance' },
  leads: { title: 'Lead Management', sub: 'Capture, qualify, and convert' },
  conversations: { title: 'Conversations', sub: 'Unified customer journey timeline' },
  calls: { title: 'Call Logs', sub: 'Every voice conversation, transcribed' },
  meetings: { title: 'Meetings', sub: 'Scheduled appointments and demos' },
  whatsapp: { title: 'WhatsApp', sub: 'Business inbox handled by AI' },
  settings: { title: 'Settings', sub: 'Agent behaviour and routing rules' },
};

const statusTone: Record<VoxLead['status'], string> = {
  Qualified: 'bg-emerald-50 text-emerald-700',
  Contacted: 'bg-amber-50 text-amber-700',
  New: 'bg-violet-50 text-violet-700',
};

const qualityTone: Record<VoxLead['quality'], string> = {
  Hot: 'bg-red-50 text-red-600',
  Warm: 'bg-amber-50 text-amber-700',
  Cold: 'bg-blue-50 text-blue-600',
};

const scoreTone = (score: number) => (score >= 80 ? 'bg-red-500' : score >= 60 ? 'bg-amber-500' : 'bg-blue-500');

const timelineTone: Record<string, string> = {
  message: 'text-emerald-600',
  ai: 'text-blue-600',
  intent: 'text-violet-600',
  booked: 'text-emerald-600',
  call: 'text-blue-600',
  qualified: 'text-amber-600',
  meeting: 'text-violet-600',
  followup: 'text-emerald-600',
};

function Chip({
  label,
  active,
  tone = 'emerald',
  onClick,
}: {
  label: string;
  active: boolean;
  tone?: 'emerald' | 'amber';
  onClick: () => void;
}) {
  const activeClass =
    tone === 'amber' ? 'border-amber-400 bg-amber-50 text-amber-700' : 'border-emerald-400 bg-emerald-50 text-emerald-700';

  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`shrink-0 cursor-pointer rounded-lg border px-2.5 py-1.5 text-[11.5px] font-medium transition-colors ${
        active ? activeClass : 'border-slate-200 bg-white text-slate-600 hover:bg-slate-50'
      }`}
    >
      {label}
    </button>
  );
}

function CountPill({ value, label, tone }: { value: string | number; label: string; tone: string }) {
  return (
    <div className="flex shrink-0 items-baseline gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-2">
      <span className={`text-[15px] font-semibold ${tone}`}>{value}</span>
      <span className="text-[11px] text-slate-500">{label}</span>
    </div>
  );
}

export default function VoxCRM() {
  const { stats, funnel, agents, actions, channelMix, leads, conversations, meetings, callLogs, whatsapp } =
    useVoxCrmData();

  const [tab, setTab] = useState<TabId>('overview');
  const [status, setStatus] = useState<'All Status' | VoxLead['status']>('All Status');
  const [quality, setQuality] = useState<'All Quality' | VoxLead['quality']>('All Quality');
  const [query, setQuery] = useState('');
  const [openConversationId, setOpenConversationId] = useState(conversations[0]?.id ?? '');

  const visibleLeads = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return leads.filter((lead) => {
      if (status !== 'All Status' && lead.status !== status) return false;
      if (quality !== 'All Quality' && lead.quality !== quality) return false;
      if (!needle) return true;
      return [lead.name, lead.company, lead.phone].join(' ').toLowerCase().includes(needle);
    });
  }, [leads, query, status, quality]);

  const openConversation = conversations.find((c) => c.id === openConversationId) ?? conversations[0];
  const heading = HEADINGS[tab];

  return (
    <div className="overflow-hidden rounded-[18px] border border-slate-200 bg-[#F7F8FB] shadow-[0_30px_90px_-50px_rgba(15,23,42,0.5)] md:rounded-[22px]">
      {/* Fixed shell height keeps the page still while tabs change */}
      <div className="flex h-[30rem] flex-col sm:h-[34rem] lg:h-[40rem] lg:flex-row">
        {/* Brand rail */}
        <div className="flex shrink-0 flex-col border-b border-slate-200 bg-white lg:w-52 lg:border-b-0 lg:border-r">
          {/* Brand row rides above the tabs on narrow screens too, so the app is
              recognisably Aqion Vox at every width */}
          <div className="flex items-center gap-2 border-b border-slate-100 px-4 py-2.5 lg:border-b-0 lg:py-4">
            <img src="/AqionVoxLogoIcon-clean.png" alt="" aria-hidden="true" className="h-6 w-6 object-contain lg:h-7 lg:w-7" />
            <p className="text-[15px] font-bold tracking-[-0.02em] text-[#0f172a] lg:text-[17px]">AqionVox</p>
          </div>

          <nav
            aria-label="Aqion Vox CRM sections"
            className="flex gap-1 overflow-x-auto p-2 lg:flex-1 lg:flex-col lg:gap-0.5 lg:overflow-y-auto lg:p-2.5 lg:pt-0"
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
              <p className="truncate text-[12px] font-semibold text-[#0f172a]">AqionLabs Demo</p>
              <p className="truncate text-[10.5px] text-slate-500">Professional Plan</p>
            </div>
          </div>
        </div>

        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          {/* App chrome */}
          <header className="flex shrink-0 items-center gap-3 border-b border-slate-200 bg-white px-4 py-3">
            <div className="min-w-0">
              <p className="truncate text-[15px] font-bold tracking-[-0.01em] text-[#0f172a]">{heading.title}</p>
              <p className="truncate text-[11px] text-slate-500">{heading.sub}</p>
            </div>

            <div className="ml-auto hidden min-w-0 flex-1 justify-center px-4 xl:flex">
              <div className="relative w-full max-w-sm">
                <Search
                  aria-hidden="true"
                  className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-slate-400"
                />
                <div className="h-9 w-full rounded-full border border-slate-200 bg-white pl-9 pr-3 text-[12px] leading-9 text-slate-400">
                  Search leads, calls, transcripts
                </div>
              </div>
            </div>

            <div className="ml-auto flex shrink-0 items-center gap-1.5 xl:ml-0">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[11px] font-medium text-emerald-700">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500" />
                AI Live
              </span>
              <span className="hidden items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 sm:inline-flex">
                <Zap className="h-3 w-3 text-amber-500" strokeWidth={2} />
                342ms
              </span>
              <span
                aria-hidden="true"
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 md:flex"
              >
                <Moon className="h-3.5 w-3.5" strokeWidth={1.7} />
              </span>
              <span
                aria-hidden="true"
                className="hidden h-8 w-8 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 md:flex"
              >
                <Bell className="h-3.5 w-3.5" strokeWidth={1.7} />
              </span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-[10.5px] font-bold text-white">
                AQ
              </span>
            </div>
          </header>

          {/* Scrolling body — the only part that changes with the tab */}
          <div className="min-h-0 flex-1 overflow-y-auto p-3 sm:p-4">
            {tab === 'overview' && (
              <div className="grid gap-3">
                <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                  {stats.map((stat) => (
                    <div key={stat.label} className="rounded-xl border border-slate-200 bg-white p-3.5">
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.08em] text-slate-500">{stat.label}</p>
                      <p className="mt-2 text-[1.6rem] font-bold leading-none tracking-[-0.02em] text-[#0f172a]">
                        {stat.value}
                      </p>
                      <div className="mt-2 flex items-baseline justify-between gap-2">
                        <span className="truncate text-[10.5px] text-slate-500">{stat.sub}</span>
                        <span className="shrink-0 text-[10.5px] font-semibold text-emerald-600">{stat.delta}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-[13px] font-semibold text-[#0f172a]">Channel Mix</p>
                    <p className="text-[11px] text-slate-500">Automation volume by source</p>
                    <div className="mt-4 flex h-32 items-end gap-3">
                      {channelMix.map((channel) => (
                        // h-full gives the bar a definite parent to size its percentage against
                        <div key={channel.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5">
                          <div
                            className={`w-full rounded-t ${channel.tone}`}
                            style={{ height: `${Math.max(channel.value, 6)}%` }}
                          />
                          <span className="text-[9.5px] text-slate-500">{channel.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <p className="text-[13px] font-semibold text-[#0f172a]">Conversion Path</p>
                    <p className="text-[11px] text-slate-500">Lead to revenue intent</p>
                    <div className="mt-3.5 grid gap-2.5">
                      {funnel.map((stage) => (
                        <div key={stage.label}>
                          <div className="flex items-baseline justify-between gap-3">
                            <span className="text-[11.5px] text-slate-600">{stage.label}</span>
                            <span className="text-[11px] font-semibold text-[#0f172a]">
                              {stage.value.toLocaleString()}{' '}
                              <span className="font-normal text-slate-400">({stage.pct}%)</span>
                            </span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div className={`h-full rounded-full ${stage.tone}`} style={{ width: `${stage.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 lg:grid-cols-2">
                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <div>
                        <p className="text-[13px] font-semibold text-[#0f172a]">Action Queue</p>
                        <p className="text-[11px] text-slate-500">Escalations needing human follow-up</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold text-red-600">
                        4 open
                      </span>
                    </div>
                    <div className="mt-3 grid gap-2.5">
                      {actions.map((action) => (
                        <div key={action.title} className="flex items-start gap-2.5">
                          <span
                            className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                              action.priority === 'High' ? 'bg-red-500' : 'bg-amber-500'
                            }`}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="text-[12px] font-semibold leading-snug text-[#0f172a]">{action.title}</p>
                            <p className="text-[10.5px] text-slate-500">{action.detail}</p>
                          </div>
                          <span
                            className={`shrink-0 text-[10.5px] font-semibold ${
                              action.priority === 'High' ? 'text-red-600' : 'text-amber-600'
                            }`}
                          >
                            {action.priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-slate-200 bg-white p-4">
                    <div className="flex items-baseline justify-between gap-3">
                      <div>
                        <p className="text-[13px] font-semibold text-[#0f172a]">AI Agent Health</p>
                        <p className="text-[11px] text-slate-500">Live voice personas</p>
                      </div>
                      <span className="shrink-0 rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                        5 online
                      </span>
                    </div>
                    <div className="mt-3 grid gap-2.5">
                      {agents.map((agent) => (
                        <div key={agent.name} className="flex items-center gap-2.5">
                          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-100 text-[10px] font-bold text-slate-600">
                            {agent.initials}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[12px] font-semibold text-[#0f172a]">{agent.name}</p>
                            <p className="truncate text-[10.5px] text-slate-500">{agent.detail}</p>
                          </div>
                          <div className="shrink-0 text-right">
                            <p className="text-[12px] font-semibold text-[#0f172a]">{agent.resolved}</p>
                            <p className="text-[9.5px] text-slate-400">resolved</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {tab === 'leads' && (
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
                      value={query}
                      onChange={(event) => setQuery(event.target.value)}
                      placeholder="Search leads by name, phone, company"
                      className="mobile-form-control h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-[12.5px] text-[#0f172a] placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-100"
                    />
                  </label>
                  <div className="flex flex-wrap gap-1.5">
                    {(['All Status', 'New', 'Contacted', 'Qualified'] as const).map((option) => (
                      <Chip key={option} label={option} active={status === option} onClick={() => setStatus(option)} />
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {(['All Quality', 'Hot', 'Warm', 'Cold'] as const).map((option) => (
                      <Chip
                        key={option}
                        label={option}
                        tone="amber"
                        active={quality === option}
                        onClick={() => setQuality(option)}
                      />
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  <CountPill value={leads.length} label="Total" tone="text-[#0f172a]" />
                  <CountPill value={leads.filter((l) => l.quality === 'Hot').length} label="Hot" tone="text-red-600" />
                  <CountPill value={leads.filter((l) => l.quality === 'Warm').length} label="Warm" tone="text-amber-600" />
                  <CountPill value={leads.filter((l) => l.quality === 'Cold').length} label="Cold" tone="text-blue-600" />
                  <CountPill
                    value={leads.filter((l) => l.status === 'Qualified').length}
                    label="Qualified"
                    tone="text-emerald-600"
                  />
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[46rem] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-200">
                          {['Name', 'Contact', 'Company', 'Status', 'Quality', 'Source', 'Score', 'Last Contact'].map(
                            (column) => (
                              <th
                                key={column}
                                scope="col"
                                className="whitespace-nowrap px-3 py-2 text-[9.5px] font-bold uppercase tracking-[0.06em] text-slate-500"
                              >
                                {column}
                              </th>
                            ),
                          )}
                        </tr>
                      </thead>
                      <tbody>
                        {visibleLeads.map((lead) => (
                          <tr key={lead.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                            <td className="px-3 py-2.5">
                              <p className="whitespace-nowrap text-[12.5px] font-semibold text-[#0f172a]">{lead.name}</p>
                              <p className="whitespace-nowrap text-[10px] text-slate-500">
                                {lead.region} · {lead.language}
                              </p>
                            </td>
                            <td className="px-3 py-2.5">
                              <p className="whitespace-nowrap text-[11.5px] text-slate-700">{lead.phone}</p>
                              <p className="whitespace-nowrap text-[10.5px] text-emerald-600">{lead.email}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[12px] text-slate-700">{lead.company}</td>
                            <td className="px-3 py-2.5">
                              <span
                                className={`inline-block whitespace-nowrap rounded px-2 py-0.5 text-[10.5px] font-semibold ${statusTone[lead.status]}`}
                              >
                                {lead.status}
                              </span>
                            </td>
                            <td className="px-3 py-2.5">
                              <span
                                className={`inline-block whitespace-nowrap rounded px-2 py-0.5 text-[10.5px] font-semibold ${qualityTone[lead.quality]}`}
                              >
                                {lead.quality}
                              </span>
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">{lead.source}</td>
                            <td className="px-3 py-2.5">
                              <div className="flex items-center gap-2">
                                <span className="h-1 w-14 overflow-hidden rounded-full bg-slate-100">
                                  <span
                                    className={`block h-full rounded-full ${scoreTone(lead.score)}`}
                                    style={{ width: `${lead.score}%` }}
                                  />
                                </span>
                                <span className="text-[11.5px] font-semibold text-[#0f172a]">{lead.score}</span>
                              </div>
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[11px] text-slate-500">
                              {lead.lastContact}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-slate-200 px-3 py-2 text-[11px] text-slate-500">
                    Showing {visibleLeads.length} of {leads.length} leads
                  </div>
                </div>
              </div>
            )}

            {tab === 'conversations' && openConversation && (
              <div className="grid gap-3 lg:grid-cols-[minmax(0,15rem)_minmax(0,1fr)]">
                <div className="grid content-start gap-2">
                  {conversations.map((conversation) => {
                    const active = conversation.id === openConversation.id;
                    return (
                      <button
                        key={conversation.id}
                        type="button"
                        onClick={() => setOpenConversationId(conversation.id)}
                        className={`cursor-pointer rounded-xl border p-2.5 text-left transition-colors ${
                          active ? 'border-emerald-300 bg-emerald-50/60' : 'border-slate-200 bg-white hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-baseline justify-between gap-2">
                          <p className="truncate text-[12.5px] font-semibold text-[#0f172a]">{conversation.name}</p>
                          <span className="shrink-0 text-[10px] text-slate-400">{conversation.at}</span>
                        </div>
                        <div className="mt-1 flex flex-wrap items-center gap-1.5">
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9.5px] font-semibold text-slate-600">
                            {conversation.channel}
                          </span>
                          <span
                            className={`text-[9.5px] font-semibold ${
                              conversation.state === 'Resolved'
                                ? 'text-emerald-600'
                                : conversation.state === 'Assigned'
                                  ? 'text-blue-600'
                                  : 'text-amber-600'
                            }`}
                          >
                            {conversation.state}
                          </span>
                          {conversation.unread ? (
                            <span className="ml-auto flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                              {conversation.unread}
                            </span>
                          ) : null}
                        </div>
                        <p className="mt-1.5 truncate text-[11px] text-slate-500">{conversation.preview}</p>
                        {conversation.routedTo && (
                          <p className="mt-1 truncate text-[10px] text-emerald-600">→ {conversation.routedTo}</p>
                        )}
                      </button>
                    );
                  })}
                </div>

                <div className="min-w-0 rounded-xl border border-slate-200 bg-white p-4">
                  <p className="text-[13.5px] font-bold text-[#0f172a]">{openConversation.name} — Customer Journey</p>
                  <p className="text-[11px] text-slate-500">
                    Unified timeline across all channels · {openConversation.phone}
                  </p>

                  <ol className="mt-4 grid gap-2.5">
                    {openConversation.timeline.map((entry, idx) => (
                      <li key={`${openConversation.id}-${idx}`} className="grid gap-1">
                        <div className="flex flex-wrap items-baseline gap-2">
                          <span className={`text-[12px] font-semibold ${timelineTone[entry.tone] ?? 'text-slate-700'}`}>
                            {entry.label}
                          </span>
                          <span className="rounded bg-slate-100 px-1.5 py-0.5 text-[9.5px] font-medium text-slate-500">
                            {entry.channel}
                          </span>
                          <span className="ml-auto text-[10px] text-slate-400">{entry.at}</span>
                        </div>
                        <p className="rounded-lg border border-slate-100 bg-slate-50/70 px-3 py-2 text-[11.5px] leading-relaxed text-slate-700">
                          {entry.detail}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            )}

            {tab === 'calls' && (
              <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="overflow-x-auto">
                  <table className="w-full min-w-[36rem] border-collapse text-left">
                    <thead>
                      <tr className="border-b border-slate-200">
                        {['Lead', 'Company', 'Time', 'Duration', 'Language', 'Outcome'].map((column) => (
                          <th
                            key={column}
                            scope="col"
                            className="whitespace-nowrap px-3 py-2 text-[9.5px] font-bold uppercase tracking-[0.06em] text-slate-500"
                          >
                            {column}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {callLogs.map((log) => (
                        <tr key={log.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                          <td className="whitespace-nowrap px-3 py-2.5 text-[12.5px] font-semibold text-[#0f172a]">
                            {log.lead}
                          </td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-[12px] text-slate-700">{log.company}</td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">{log.at}</td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">{log.duration}</td>
                          <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">{log.language}</td>
                          <td className="px-3 py-2.5">
                            <span className="inline-block whitespace-nowrap rounded bg-emerald-50 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-700">
                              {log.outcome}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {tab === 'meetings' && (
              <div className="grid gap-3">
                <div className="grid gap-2.5 sm:grid-cols-2 xl:grid-cols-4">
                  {[
                    { value: meetings.filter((m) => m.status === 'Pending').length, label: 'Pending', tone: 'text-amber-600' },
                    { value: meetings.filter((m) => m.status === 'Confirmed').length, label: 'Confirmed', tone: 'text-emerald-600' },
                    { value: meetings.filter((m) => m.status === 'Completed').length, label: 'Completed', tone: 'text-blue-600' },
                    { value: meetings.filter((m) => m.status === 'Cancelled').length, label: 'Cancelled', tone: 'text-red-600' },
                  ].map((card) => (
                    <div key={card.label} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                      <p className={`text-[1.5rem] font-bold leading-none ${card.tone}`}>{card.value}</p>
                      <p className="mt-1 text-[11px] text-slate-500">{card.label}</p>
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                  <div className="overflow-x-auto">
                    <table className="w-full min-w-[42rem] border-collapse text-left">
                      <thead>
                        <tr className="border-b border-slate-200">
                          {['Lead', 'Company', 'Scheduled', 'Duration', 'Source', 'Status'].map((column) => (
                            <th
                              key={column}
                              scope="col"
                              className="whitespace-nowrap px-3 py-2 text-[9.5px] font-bold uppercase tracking-[0.06em] text-slate-500"
                            >
                              {column}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {meetings.map((meeting) => (
                          <tr key={meeting.id} className="border-b border-slate-100 last:border-b-0 hover:bg-slate-50">
                            <td className="px-3 py-2.5">
                              <p className="whitespace-nowrap text-[12.5px] font-semibold text-[#0f172a]">
                                {meeting.lead}
                              </p>
                              <p className="whitespace-nowrap text-[10px] text-emerald-600">{meeting.phone}</p>
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[12px] text-slate-700">
                              {meeting.company}
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">
                              {meeting.scheduled}
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">
                              {meeting.duration}
                            </td>
                            <td className="whitespace-nowrap px-3 py-2.5 text-[11.5px] text-slate-600">
                              {meeting.source}
                            </td>
                            <td className="px-3 py-2.5">
                              <span
                                className={`inline-block whitespace-nowrap rounded px-2 py-0.5 text-[10.5px] font-semibold ${
                                  meeting.status === 'Confirmed'
                                    ? 'bg-emerald-50 text-emerald-700'
                                    : meeting.status === 'Pending'
                                      ? 'bg-amber-50 text-amber-700'
                                      : meeting.status === 'Completed'
                                        ? 'bg-blue-50 text-blue-600'
                                        : 'bg-red-50 text-red-600'
                                }`}
                              >
                                {meeting.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="border-t border-slate-200 px-3 py-2 text-[11px] text-slate-500">
                    {meetings.length} meetings · AI auto-booked: {meetings.filter((m) => m.source !== 'Manual').length}
                  </div>
                </div>
              </div>
            )}

            {tab === 'whatsapp' && (
              <div className="grid gap-2">
                {whatsapp.map((thread) => (
                  <div
                    key={thread.id}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3.5 py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <MessageCircle className="h-4 w-4" strokeWidth={1.8} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate text-[12.5px] font-semibold text-[#0f172a]">{thread.name}</p>
                        <span className="shrink-0 text-[10px] text-slate-400">{thread.at}</span>
                      </div>
                      <p className="truncate text-[11.5px] text-slate-500">{thread.preview}</p>
                    </div>
                    {thread.unread > 0 && (
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-[10px] font-bold text-white">
                        {thread.unread}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}

            {tab === 'settings' && (
              <div className="grid gap-2.5">
                {[
                  { title: 'Voice personas', detail: 'Gulf Arabic, Saudi Arabic, British English, Indian English' },
                  { title: 'Escalation rules', detail: 'Refunds, legal and pricing overrides route to a person' },
                  { title: 'Working hours', detail: 'Always on · UAE time zone · overflow to voicemail disabled' },
                  { title: 'Data residency', detail: 'UAE deployment options for supported workloads' },
                  { title: 'Email recipients', detail: 'operations@ · sales@ · management@ daily digest' },
                ].map((row) => (
                  <div key={row.title} className="rounded-xl border border-slate-200 bg-white px-4 py-3">
                    <p className="text-[12.5px] font-semibold text-[#0f172a]">{row.title}</p>
                    <p className="mt-0.5 text-[11.5px] text-slate-500">{row.detail}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
