import { useState } from 'react';
import {
  CalendarDays,
  Grid2X2,
  Mail,
  PhoneCall,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';
import {
  formatDuration,
  formatTimestamp,
  useVoxCrmData,
  type VoxCall,
} from './voxCrmData';

/**
 * The Aqion Vox CRM: what the operator sees after a call ends. Five views over
 * the same conversation record — analytics, transcripts, captured leads,
 * bookings and the email routing that fans summaries out to the team.
 */

type TabId = 'overview' | 'calls' | 'leads' | 'bookings' | 'email';

const NAV: { id: TabId; label: string; shortLabel: string; icon: LucideIcon }[] = [
  { id: 'overview', label: 'Overview', shortLabel: 'Overview', icon: Grid2X2 },
  { id: 'calls', label: 'Call transcripts', shortLabel: 'Calls', icon: PhoneCall },
  { id: 'leads', label: 'Leads', shortLabel: 'Leads', icon: UsersRound },
  { id: 'bookings', label: 'Bookings', shortLabel: 'Bookings', icon: CalendarDays },
  { id: 'email', label: 'Email updates', shortLabel: 'Email', icon: Mail },
];

const outcomeTone: Record<VoxCall['outcome'], string> = {
  Booked: 'border-[#4f46e5]/25 bg-[#4f46e5]/10 text-petrol',
  Qualified: 'border-emerald-600/20 bg-emerald-600/10 text-emerald-700',
  Escalated: 'border-amber-600/25 bg-amber-500/10 text-amber-700',
  Information: 'border-hairline bg-parchment text-taupe',
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

export default function VoxCRM() {
  const { analytics, calls, leads, bookings, recipients } = useVoxCrmData();
  const [tab, setTab] = useState<TabId>('overview');
  const [openCallId, setOpenCallId] = useState<string>(calls[0]?.id ?? '');

  const selectedCall = calls.find((call) => call.id === openCallId) ?? calls[0];

  return (
    <div className="overflow-hidden rounded-[24px] border border-hairline bg-paper shadow-[0_28px_90px_-50px_rgba(28,25,23,0.45)] md:rounded-[28px]">
      {/* Window chrome */}
      <div className="flex items-center gap-3 border-b border-hairline bg-parchment/60 px-4 py-3 sm:px-5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink/12" />
        </div>
        <p className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-taupe sm:text-[11px]">
          Aqion Vox CRM
        </p>
        <span className="ml-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-600/20 bg-emerald-600/10 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em] text-emerald-700">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-600" />
          Live
        </span>
      </div>

      <div className="lg:flex">
        {/* Nav — rail on desktop, scrolling tabs on mobile */}
        <nav
          aria-label="Aqion Vox CRM sections"
          className="flex gap-1 overflow-x-auto border-b border-hairline p-2 lg:w-52 lg:shrink-0 lg:flex-col lg:gap-0.5 lg:border-b-0 lg:border-r lg:p-3"
        >
          {NAV.map((item) => {
            const active = tab === item.id;
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
                {item.id === 'calls' && (
                  <span className="ml-auto hidden rounded-full bg-parchment px-1.5 py-0.5 font-mono text-[10px] text-taupe lg:inline">
                    {calls.length}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        <div className="min-w-0 flex-1 p-4 sm:p-5 lg:p-6">
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

          {tab === 'leads' && (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[34rem] border-collapse text-left">
                <thead>
                  <tr className="border-b border-hairline">
                    {['Contact', 'Interest', 'Status', 'Captured'].map((heading) => (
                      <th
                        key={heading}
                        scope="col"
                        className="px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-taupe"
                      >
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead) => (
                    <tr key={lead.id} className="border-b border-hairline last:border-b-0">
                      <td className="px-3 py-3">
                        <p className="text-[13.5px] font-medium text-ink">{lead.name}</p>
                        <p className="text-[11.5px] text-taupe">{lead.company}</p>
                      </td>
                      <td className="px-3 py-3 text-[13px] text-graphite">{lead.interest}</td>
                      <td className="px-3 py-3">
                        <span
                          className={`inline-block rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.1em] ${
                            lead.status === 'Qualified'
                              ? 'border-emerald-600/20 bg-emerald-600/10 text-emerald-700'
                              : lead.status === 'New'
                                ? 'border-[#4f46e5]/25 bg-[#4f46e5]/10 text-petrol'
                                : 'border-hairline bg-parchment text-taupe'
                          }`}
                        >
                          {lead.status}
                        </span>
                      </td>
                      <td className="px-3 py-3 font-mono text-[11.5px] text-taupe">{formatTimestamp(lead.capturedAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
