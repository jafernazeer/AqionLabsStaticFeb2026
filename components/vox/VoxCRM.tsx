import { useMemo, useState } from 'react';
import {
  CalendarDays,
  Grid2X2,
  Mail,
  PhoneCall,
  RefreshCw,
  Search,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';
import {
  formatDuration,
  formatTimestamp,
  useVoxCrmData,
  type VoxCall,
  type VoxLead,
} from './voxCrmData';

/**
 * The Aqion Vox CRM: what the operator sees after a call ends. Five views over
 * the same conversation record — analytics, transcripts, captured leads,
 * bookings and the email routing that fans summaries out to the team.
 */

type TabId = 'overview' | 'calls' | 'leads' | 'bookings' | 'email';
type TemperatureFilter = 'All' | VoxLead['temperature'];

const NAV: { id: TabId; label: string; shortLabel: string; icon: LucideIcon }[] = [
  { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: Grid2X2 },
  { id: 'calls', label: 'Call Transcripts', shortLabel: 'Calls', icon: PhoneCall },
  { id: 'leads', label: 'Leads', shortLabel: 'Leads', icon: UsersRound },
  { id: 'bookings', label: 'Bookings', shortLabel: 'Bookings', icon: CalendarDays },
  { id: 'email', label: 'Email Updates', shortLabel: 'Email', icon: Mail },
];

const TEMPERATURES: TemperatureFilter[] = ['All', 'Hot', 'Warm', 'Cold'];

const outcomeTone: Record<VoxCall['outcome'], string> = {
  Booked: 'border-[#4f46e5]/25 bg-[#4f46e5]/10 text-petrol',
  Qualified: 'border-emerald-600/20 bg-emerald-600/10 text-emerald-700',
  Escalated: 'border-amber-600/25 bg-amber-500/10 text-amber-700',
  Information: 'border-hairline bg-parchment text-taupe',
};

const temperatureTone: Record<VoxLead['temperature'], string> = {
  Hot: 'border-emerald-600/25 bg-emerald-600/12 text-emerald-700',
  Warm: 'border-amber-600/25 bg-amber-500/12 text-amber-700',
  Cold: 'border-hairline bg-parchment text-taupe',
};

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-hairline bg-paper p-4 sm:p-5">
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">{label}</p>
      <p className="mt-2 font-display text-[1.75rem] leading-none tracking-tight text-ink sm:text-[2rem]">{value}</p>
      {sub && <p className="mt-1.5 text-[11px] leading-snug text-taupe">{sub}</p>}
    </div>
  );
}

function Bar({ label, value, total }: { label: string; value: number; total: number }) {
  const pct = total > 0 ? Math.round((value / total) * 100) : 0;

  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between gap-3">
        <span className="text-[12px] font-medium text-graphite">{label}</span>
        <span className="font-mono text-[11px] text-taupe">
          {value} · {pct}%
        </span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-parchment">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}
        />
      </div>
    </div>
  );
}

/** A value the agent never managed to capture reads as an em dash, not a blank. */
function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-hairline py-2 last:border-b-0">
      <span className="shrink-0 text-[11.5px] text-taupe">{label}</span>
      <span className={`truncate text-right text-[12.5px] ${value ? 'text-ink' : 'text-taupe'}`}>{value || '—'}</span>
    </div>
  );
}

export default function VoxCRM() {
  const { analytics, calls, leads, bookings, recipients } = useVoxCrmData();
  const [tab, setTab] = useState<TabId>('leads');
  const [openCallId, setOpenCallId] = useState<string>(calls[0]?.id ?? '');
  const [openLeadId, setOpenLeadId] = useState<string>(leads[0]?.id ?? '');
  const [query, setQuery] = useState('');
  const [temperature, setTemperature] = useState<TemperatureFilter>('All');

  const selectedCall = calls.find((call) => call.id === openCallId) ?? calls[0];

  const visibleLeads = useMemo(() => {
    const needle = query.trim().toLowerCase();

    return leads.filter((lead) => {
      if (temperature !== 'All' && lead.temperature !== temperature) return false;
      if (!needle) return true;
      return [lead.name, lead.company, lead.phone, lead.interest].join(' ').toLowerCase().includes(needle);
    });
  }, [leads, query, temperature]);

  const selectedLead = visibleLeads.find((lead) => lead.id === openLeadId) ?? visibleLeads[0] ?? leads[0];

  return (
    <div className="overflow-hidden rounded-[20px] border border-hairline bg-paper shadow-[0_28px_90px_-50px_rgba(28,25,23,0.45)] md:rounded-[24px]">
      <div className="lg:flex">
        {/* Nav — branded rail on desktop, scrolling tabs on mobile */}
        <div className="flex flex-col border-b border-hairline lg:w-56 lg:shrink-0 lg:border-b-0 lg:border-r">
          <div className="hidden items-center gap-2.5 px-4 py-4 lg:flex">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#4f46e5]">
              <img src="/AqionVoxLogoIcon-clean.png" alt="" aria-hidden="true" className="h-6 w-6 object-contain" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[13.5px] font-semibold tracking-tight text-ink">AqionVox</p>
              <p className="truncate text-[10.5px] text-taupe">Aqion Vox CRM</p>
            </div>
          </div>

          <nav
            aria-label="Aqion Vox CRM sections"
            className="flex gap-1 overflow-x-auto p-2 lg:flex-1 lg:flex-col lg:gap-0.5 lg:p-3 lg:pt-0"
          >
            {NAV.map((item) => {
              const active = tab === item.id;
              const count = item.id === 'calls' ? calls.length : item.id === 'leads' ? leads.length : null;

              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setTab(item.id)}
                  aria-current={active ? 'page' : undefined}
                  className={`inline-flex min-h-11 shrink-0 cursor-pointer items-center gap-2 rounded-xl px-3 py-2 text-[13px] font-medium transition-colors lg:w-full ${
                    active ? 'bg-[#4f46e5]/10 text-petrol' : 'text-graphite hover:bg-parchment'
                  }`}
                >
                  <item.icon className="h-4 w-4 shrink-0" strokeWidth={1.6} />
                  <span className="lg:hidden">{item.shortLabel}</span>
                  <span className="hidden lg:inline">{item.label}</span>
                  {count !== null && (
                    <span className="ml-auto hidden rounded-full bg-parchment px-1.5 py-0.5 font-mono text-[10px] text-taupe lg:inline">
                      {count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2.5 border-t border-hairline px-4 py-3.5 lg:flex">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#4f46e5]">
              <img src="/AqionVoxLogoIcon-clean.png" alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
            </span>
            <div className="min-w-0">
              <p className="truncate text-[11.5px] font-medium text-ink">Aqion Vox CRM</p>
              <p className="truncate text-[10px] text-taupe">Live demo</p>
            </div>
          </div>
        </div>

        <div className="min-w-0 flex-1 p-4 sm:p-5">
          {tab === 'leads' && (
            <>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-display text-xl tracking-tight text-ink">Leads</h3>
                  <p className="mt-0.5 text-[12.5px] text-taupe">Leads captured directly from live call transcripts</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-2.5 py-1.5 text-[11px] font-medium text-emerald-700">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
                    Vox Agent Ready
                  </span>
                  <span
                    aria-hidden="true"
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-hairline text-taupe"
                  >
                    <RefreshCw className="h-3.5 w-3.5" strokeWidth={1.6} />
                  </span>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-2">
                <label className="relative min-w-0 flex-1 basis-56">
                  <span className="sr-only">Search leads</span>
                  <Search
                    aria-hidden="true"
                    className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-taupe"
                    strokeWidth={1.6}
                  />
                  <input
                    type="search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search leads by name, company, or phone..."
                    className="mobile-form-control h-11 w-full rounded-xl border border-hairline bg-paper pl-9 pr-3 text-[13px] text-ink placeholder:text-taupe focus:border-[#4f46e5]/40 focus:outline-none focus:ring-2 focus:ring-[#4f46e5]/20"
                  />
                </label>
                <div className="flex shrink-0 gap-1.5">
                  {TEMPERATURES.map((option) => {
                    const active = temperature === option;
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => setTemperature(option)}
                        aria-pressed={active}
                        className={`min-h-11 cursor-pointer rounded-xl px-3 text-[12px] font-medium transition-colors ${
                          active
                            ? 'bg-emerald-600 text-white'
                            : 'border border-hairline bg-paper text-graphite hover:bg-parchment'
                        }`}
                      >
                        {option === 'All' ? 'All Leads' : option}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 grid gap-4 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)]">
                <div className="min-w-0 overflow-hidden rounded-2xl border border-hairline">
                  <div className="flex items-baseline justify-between gap-3 border-b border-hairline bg-parchment/50 px-3 py-2.5">
                    <p className="text-[12.5px] font-semibold text-ink">Captured Leads ({visibleLeads.length})</p>
                    <p className="hidden text-[11px] text-taupe sm:block">Auto-extracted from live call transcripts</p>
                  </div>

                  {visibleLeads.length === 0 ? (
                    <p className="px-3 py-8 text-center text-[12.5px] text-taupe">No leads match that search.</p>
                  ) : (
                    <div className="overflow-x-auto">
                      <table className="w-full min-w-[30rem] border-collapse text-left">
                        <thead>
                          <tr className="border-b border-hairline">
                            {['Lead Profile', 'Company', 'Quality', 'Interest', 'Captured'].map((heading) => (
                              <th
                                key={heading}
                                scope="col"
                                className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.1em] text-taupe"
                              >
                                {heading}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {visibleLeads.map((lead) => {
                            const active = selectedLead?.id === lead.id;
                            return (
                              <tr
                                key={lead.id}
                                onClick={() => setOpenLeadId(lead.id)}
                                className={`cursor-pointer border-b border-hairline transition-colors last:border-b-0 ${
                                  active ? 'bg-emerald-600/[0.06]' : 'hover:bg-parchment/50'
                                }`}
                              >
                                <td className="px-3 py-2.5">
                                  <p className="text-[12.5px] font-semibold text-ink">{lead.name}</p>
                                  <p className="font-mono text-[10.5px] text-taupe">
                                    {lead.phone || 'No number captured'}
                                  </p>
                                </td>
                                <td className="px-3 py-2.5 text-[12px] text-graphite">{lead.company || '—'}</td>
                                <td className="px-3 py-2.5">
                                  <span
                                    className={`inline-block whitespace-nowrap rounded-full border px-2 py-0.5 text-[10.5px] font-semibold ${temperatureTone[lead.temperature]}`}
                                  >
                                    {lead.temperature} ({lead.quality})
                                  </span>
                                </td>
                                <td className="px-3 py-2.5 text-[12px] text-graphite">{lead.language}</td>
                                <td className="px-3 py-2.5 font-mono text-[10.5px] text-taupe">
                                  {formatTimestamp(lead.capturedAt)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  )}
                </div>

                {selectedLead && (
                  <aside className="min-w-0 rounded-2xl border border-hairline bg-parchment/40 p-4">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span className="font-mono text-[10.5px] uppercase tracking-[0.12em] text-taupe">
                        {selectedLead.ref}
                      </span>
                      <span
                        className={`rounded-full border px-2 py-0.5 text-[10.5px] font-semibold ${temperatureTone[selectedLead.temperature]}`}
                      >
                        {selectedLead.temperature} Quality · Score {selectedLead.quality}/100
                      </span>
                    </div>

                    <h4 className="mt-3 font-display text-xl tracking-tight text-ink">{selectedLead.name}</h4>
                    <p className="text-[12px] text-taupe">{selectedLead.company || 'Company not captured'}</p>

                    <div className="mt-4">
                      <Field label="Phone Number" value={selectedLead.phone} />
                      <Field label="Email Address" value={selectedLead.email} />
                      <Field label="Service Interest" value={selectedLead.interest} />
                      <Field label="Lead Status" value={selectedLead.status} />
                    </div>

                    <div className="mt-4 rounded-xl border border-hairline bg-paper p-3">
                      <p className="text-[9.5px] font-semibold uppercase tracking-[0.14em] text-taupe">
                        Extracted transcript notes
                      </p>
                      <p className="mt-2 text-[12.5px] leading-relaxed text-graphite">{selectedLead.transcriptNotes}</p>
                    </div>
                  </aside>
                )}
              </div>
            </>
          )}

          {tab === 'overview' && (
            <div className="grid gap-4">
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                <StatCard label="Total calls" value={String(analytics.totalCalls)} sub="Last 30 days" />
                <StatCard
                  label="Answered"
                  value={`${Math.round((analytics.answered / analytics.totalCalls) * 100)}%`}
                  sub={`${analytics.answered} of ${analytics.totalCalls}`}
                />
                <StatCard label="Avg duration" value={formatDuration(analytics.avgDurationSeconds)} sub="Per conversation" />
                <StatCard label="Avg response" value={`${analytics.avgResponseMs}ms`} sub="Time to first word" />
              </div>

              <div className="grid gap-4 rounded-2xl border border-hairline bg-parchment/40 p-4 sm:p-5 lg:grid-cols-2 lg:gap-8">
                <div className="grid content-start gap-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">Call outcomes</p>
                  <Bar label="Answered" value={analytics.answered} total={analytics.totalCalls} />
                  <Bar label="Qualified leads" value={analytics.qualified} total={analytics.totalCalls} />
                  <Bar label="Meetings booked" value={analytics.meetings} total={analytics.totalCalls} />
                </div>
                <div className="grid content-start gap-2.5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">Latest activity</p>
                  {calls.slice(0, 3).map((call) => (
                    <div
                      key={call.id}
                      className="flex items-center justify-between gap-3 rounded-xl border border-hairline bg-paper px-3 py-2.5"
                    >
                      <div className="min-w-0">
                        <p className="truncate text-[13px] font-medium text-ink">{call.intent}</p>
                        <p className="truncate font-mono text-[10.5px] text-taupe">{formatTimestamp(call.startedAt)}</p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] ${outcomeTone[call.outcome]}`}
                      >
                        {call.outcome}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === 'calls' && selectedCall && (
            <div className="grid gap-4 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-5">
              <div className="grid content-start gap-2">
                {calls.map((call) => {
                  const active = call.id === selectedCall.id;
                  return (
                    <button
                      key={call.id}
                      type="button"
                      onClick={() => setOpenCallId(call.id)}
                      className={`cursor-pointer rounded-2xl border p-3 text-left transition-colors ${
                        active ? 'border-[#4f46e5]/35 bg-[#4f46e5]/[0.06]' : 'border-hairline bg-paper hover:bg-parchment/50'
                      }`}
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="truncate text-[13px] font-semibold text-ink">{call.intent}</p>
                        <span className="shrink-0 font-mono text-[10.5px] text-taupe">
                          {formatDuration(call.durationSeconds)}
                        </span>
                      </div>
                      <p className="mt-1 truncate font-mono text-[11px] text-taupe">{call.caller}</p>
                      <p className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-taupe/80">
                        {formatTimestamp(call.startedAt)}
                      </p>
                    </button>
                  );
                })}
              </div>

              <div className="min-w-0 rounded-2xl border border-hairline bg-parchment/40 p-4 sm:p-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] ${outcomeTone[selectedCall.outcome]}`}
                  >
                    {selectedCall.outcome}
                  </span>
                  <span className="rounded-full border border-hairline bg-paper px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-taupe">
                    {selectedCall.sentiment}
                  </span>
                  <span className="ml-auto font-mono text-[10.5px] text-taupe">{selectedCall.caller}</span>
                </div>

                <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">AI summary</p>
                <p className="mt-1.5 text-[13.5px] leading-relaxed text-graphite">{selectedCall.summary}</p>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe">Transcript</p>
                <ol className="mt-2.5 grid max-h-72 gap-2 overflow-y-auto pr-1">
                  {selectedCall.transcript.map((line, idx) => (
                    <li
                      key={`${selectedCall.id}-${idx}`}
                      className={`max-w-[88%] rounded-2xl border px-3 py-2 text-[13px] leading-snug ${
                        line.speaker === 'agent'
                          ? 'justify-self-start border-[#4f46e5]/20 bg-[#4f46e5]/[0.07] text-graphite'
                          : 'justify-self-end border-hairline bg-paper text-taupe'
                      }`}
                    >
                      <span className="mb-0.5 block font-mono text-[9px] uppercase tracking-[0.14em] text-taupe/80">
                        {line.speaker === 'agent' ? 'Aqion Vox' : 'Caller'}
                      </span>
                      {line.text}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )}

          {tab === 'bookings' && (
            <div className="grid gap-2.5">
              {bookings.map((booking) => (
                <div
                  key={booking.id}
                  className="flex flex-wrap items-center gap-3 rounded-2xl border border-hairline bg-parchment/40 px-4 py-3.5"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline bg-paper text-petrol">
                    <CalendarDays className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[13.5px] font-medium text-ink">{booking.title}</p>
                    <p className="truncate text-[11.5px] text-taupe">
                      {booking.attendee} · {booking.channel}
                    </p>
                  </div>
                  <span className="font-mono text-[11.5px] text-graphite">{formatTimestamp(booking.scheduledAt)}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'email' && (
            <div className="grid gap-4">
              <p className="max-w-2xl text-[13.5px] leading-relaxed text-taupe">
                Add the people who should hear about a conversation. Summaries, transcripts and lead details are sent
                after the call ends, or bundled into a daily digest.
              </p>
              <div className="grid gap-2.5">
                {recipients.map((recipient) => (
                  <div
                    key={recipient.id}
                    className="flex flex-wrap items-center gap-3 rounded-2xl border border-hairline bg-parchment/40 px-4 py-3.5"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-hairline bg-paper text-petrol">
                      <Mail className="h-5 w-5" strokeWidth={1.6} />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate font-mono text-[12.5px] text-ink">{recipient.address}</p>
                      <p className="truncate text-[11.5px] text-taupe">{recipient.scope}</p>
                    </div>
                    <span className="rounded-full border border-hairline bg-paper px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] text-taupe">
                      {recipient.frequency}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
