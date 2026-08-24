/**
 * Data source for the Aqion Vox CRM panel.
 *
 * The marketing site is a static build with no server, so the dashboard is fed
 * from this module rather than a live API. When a Vox backend is available,
 * replace the body of `useVoxCrmData` with the fetch/subscription and leave the
 * exported types alone — the CRM component reads nothing else.
 *
 * Every record below is synthetic: phone numbers are masked, company names are
 * invented and all addresses sit on the reserved example domain.
 */
import { useMemo } from 'react';

export type VoxAnalytics = {
  totalCalls: number;
  answered: number;
  qualified: number;
  meetings: number;
  avgDurationSeconds: number;
  avgResponseMs: number;
};

export type VoxCall = {
  id: string;
  caller: string;
  intent: string;
  /** ISO 8601, UTC. Rendered in the visitor's locale. */
  startedAt: string;
  durationSeconds: number;
  outcome: 'Qualified' | 'Booked' | 'Escalated' | 'Information';
  sentiment: 'Positive' | 'Neutral';
  summary: string;
  transcript: { speaker: 'agent' | 'caller'; text: string }[];
};

export type VoxLead = {
  id: string;
  name: string;
  company: string;
  interest: string;
  status: 'New' | 'Qualified' | 'Contacted';
  capturedAt: string;
};

export type VoxBooking = {
  id: string;
  title: string;
  attendee: string;
  scheduledAt: string;
  channel: string;
};

export type VoxEmailRecipient = {
  id: string;
  address: string;
  scope: string;
  frequency: 'Per call' | 'Daily digest';
};

export type VoxCrmSnapshot = {
  analytics: VoxAnalytics;
  calls: VoxCall[];
  leads: VoxLead[];
  bookings: VoxBooking[];
  recipients: VoxEmailRecipient[];
};

const snapshot: VoxCrmSnapshot = {
  analytics: {
    totalCalls: 412,
    answered: 408,
    qualified: 236,
    meetings: 87,
    avgDurationSeconds: 214,
    avgResponseMs: 690,
  },
  calls: [
    {
      id: 'call-1',
      caller: '+971 4 •• •• 118',
      intent: 'Clinic appointment',
      startedAt: '2026-08-24T09:14:00Z',
      durationSeconds: 232,
      outcome: 'Booked',
      sentiment: 'Positive',
      summary:
        'Caller asked for a dermatology slot this week. Aqion Vox confirmed insurance, offered two times and booked Thursday 4:30pm.',
      transcript: [
        { speaker: 'agent', text: 'Good morning, this is Aqion Vox. How can I help you today?' },
        { speaker: 'caller', text: 'Hi, I need to see a dermatologist sometime this week if possible.' },
        { speaker: 'agent', text: 'I can help with that. Are you using insurance, or paying directly?' },
        { speaker: 'caller', text: 'Insurance — I have Daman.' },
        { speaker: 'agent', text: 'Daman is accepted. I have Thursday at 4:30pm or Friday at 11am. Which suits you?' },
        { speaker: 'caller', text: "Thursday's better." },
        { speaker: 'agent', text: 'Booked for Thursday 4:30pm. A confirmation is on its way by SMS.' },
      ],
    },
    {
      id: 'call-2',
      caller: '+971 50 •• •• 402',
      intent: 'Property viewing',
      startedAt: '2026-08-24T08:41:00Z',
      durationSeconds: 188,
      outcome: 'Qualified',
      sentiment: 'Positive',
      summary:
        'Buyer enquiry on a Marina two-bedroom. Budget and timeline captured, viewing request routed to the listing agent.',
      transcript: [
        { speaker: 'agent', text: 'Thanks for calling. Which listing are you interested in?' },
        { speaker: 'caller', text: 'The two-bedroom in Dubai Marina from the portal.' },
        { speaker: 'agent', text: 'May I ask your budget range so I route you to the right agent?' },
        { speaker: 'caller', text: 'Around 2.4 million, and I would like to move within two months.' },
        { speaker: 'agent', text: "Noted. I'm passing this to the listing agent, who will call you to arrange a viewing." },
      ],
    },
    {
      id: 'call-3',
      caller: '+971 2 •• •• 067',
      intent: 'Billing question',
      startedAt: '2026-08-23T15:07:00Z',
      durationSeconds: 143,
      outcome: 'Escalated',
      sentiment: 'Neutral',
      summary:
        'Dispute over a duplicated invoice line. Outside the agent boundary for refunds, so escalated to the finance team with full context.',
      transcript: [
        { speaker: 'agent', text: 'How can I help you today?' },
        { speaker: 'caller', text: "I've been charged twice for last month." },
        { speaker: 'agent', text: 'I can see two entries against the same invoice. Refunds need a person to approve.' },
        { speaker: 'caller', text: 'Can you sort it out?' },
        { speaker: 'agent', text: "I'm escalating to our finance team now with your invoice reference. They will call you back today." },
      ],
    },
    {
      id: 'call-4',
      caller: '+971 55 •• •• 913',
      intent: 'Course enquiry',
      startedAt: '2026-08-23T11:52:00Z',
      durationSeconds: 267,
      outcome: 'Qualified',
      sentiment: 'Positive',
      summary:
        'Prospective student asked about the data programme. Eligibility checked and a counsellor callback scheduled.',
      transcript: [
        { speaker: 'agent', text: 'Which programme were you asking about?' },
        { speaker: 'caller', text: 'The data analytics diploma. Do I need a degree for it?' },
        { speaker: 'agent', text: 'A bachelor degree in any field, or two years of relevant work. Do either apply?' },
        { speaker: 'caller', text: 'I have three years in finance operations.' },
        { speaker: 'agent', text: "That qualifies. I'll have an admissions counsellor call you tomorrow morning." },
      ],
    },
  ],
  leads: [
    { id: 'lead-1', name: 'Layla H.', company: 'Meridian Clinics', interest: 'Appointment automation', status: 'Qualified', capturedAt: '2026-08-24T09:18:00Z' },
    { id: 'lead-2', name: 'Omar S.', company: 'Marina Estates', interest: 'Viewing coordination', status: 'New', capturedAt: '2026-08-24T08:44:00Z' },
    { id: 'lead-3', name: 'Priya R.', company: 'Gulf Analytics Institute', interest: 'Admissions intake', status: 'Contacted', capturedAt: '2026-08-23T11:57:00Z' },
    { id: 'lead-4', name: 'Khalid M.', company: 'Falcon Logistics', interest: 'After-hours support line', status: 'Qualified', capturedAt: '2026-08-23T09:31:00Z' },
  ],
  bookings: [
    { id: 'booking-1', title: 'Dermatology consultation', attendee: 'Layla H.', scheduledAt: '2026-08-27T12:30:00Z', channel: 'Clinic — Room 4' },
    { id: 'booking-2', title: 'Marina 2BR viewing', attendee: 'Omar S.', scheduledAt: '2026-08-26T13:00:00Z', channel: 'On site' },
    { id: 'booking-3', title: 'Admissions callback', attendee: 'Priya R.', scheduledAt: '2026-08-25T06:00:00Z', channel: 'Phone' },
  ],
  recipients: [
    { id: 'recipient-1', address: 'operations@example.ae', scope: 'All call summaries', frequency: 'Per call' },
    { id: 'recipient-2', address: 'sales@example.ae', scope: 'Qualified leads only', frequency: 'Per call' },
    { id: 'recipient-3', address: 'management@example.ae', scope: 'Performance digest', frequency: 'Daily digest' },
  ],
};

export function useVoxCrmData(): VoxCrmSnapshot {
  return useMemo(() => snapshot, []);
}

export function formatDuration(seconds: number) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, '0')}`;
}

export function formatTimestamp(iso: string) {
  return new Date(iso).toLocaleString(undefined, {
    day: 'numeric',
    month: 'short',
    hour: 'numeric',
    minute: '2-digit',
  });
}
