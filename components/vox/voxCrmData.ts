/**
 * Data source for the Aqion Vox CRM panel.
 *
 * Mirrors the current product screenshots in `public/aqion-voice-dashboard-*.png`
 * — overview, call transcripts, leads, bookings and email updates — carrying
 * Aqion Vox branding in place of the older Aqion Voice wordmark.
 *
 * The marketing site is a static build with no server, so the dashboard is fed
 * from this module rather than a live API. When a Vox backend exists, replace
 * the body of `useVoxCrmData` and leave the exported types alone. Timestamps
 * are display strings, matching the screenshots; nothing here is parsed.
 */
import { useMemo } from 'react';

export type VoxStat = {
  label: string;
  value: string;
  sub: string;
  delta: string;
  tone: 'emerald' | 'blue' | 'violet';
};

export type VoxFunnelStage = {
  label: string;
  value: string;
  pct: string;
  width: number;
  tone: string;
};

export type VoxPersona = {
  initial: string;
  name: string;
  role: string;
  language: string;
  calls: string;
  badge: 'Primary' | 'Active';
};

export type VoxTurn = {
  speaker: 'agent' | 'customer';
  name: string;
  at: string;
  text: string;
};

export type VoxCallRecord = {
  id: string;
  caller: string;
  phone: string;
  direction: 'Inbound' | 'Outbound';
  agent: string;
  at: string;
  duration: string;
  outcome: 'Meeting Booked' | 'Qualified Lead' | 'Escalated';
  cost: string;
  summary: string;
  turns: VoxTurn[];
};

export type VoxLead = {
  id: string;
  ref: string;
  name: string;
  phone: string;
  company: string;
  region: string;
  email: string;
  quality: 'Hot' | 'Warm' | 'Cold';
  score: number;
  language: string;
  captured: string;
  status: 'New' | 'Contacted' | 'Qualified';
  notes: string;
};

export type VoxBooking = {
  id: string;
  source: 'Voice AI' | 'Direct Intake';
  name: string;
  company: string;
  phone: string;
  when: string;
  duration: string;
  status: 'Confirmed' | 'Pending' | 'Completed';
  notes: string;
};

export type VoxRecipient = {
  id: string;
  name: string;
  email: string;
  team: string;
};

export type VoxTrigger = {
  id: string;
  title: string;
  detail: string;
  enabled: boolean;
};

export type VoxCrmSnapshot = {
  stats: VoxStat[];
  funnel: VoxFunnelStage[];
  personas: VoxPersona[];
  calls: VoxCallRecord[];
  leads: VoxLead[];
  bookings: VoxBooking[];
  recipients: VoxRecipient[];
  triggers: VoxTrigger[];
};

const snapshot: VoxCrmSnapshot = {
  stats: [
    { label: 'Total AI Calls', value: '3,291', sub: '2,876 answered (87.4%)', delta: '8.7%', tone: 'emerald' },
    { label: 'Total Lead Captured', value: '1,847', sub: 'Live transcription extraction', delta: '12.4%', tone: 'blue' },
    { label: 'Total Meetings Booked', value: '412', sub: 'Auto-scheduled by Aqion Vox', delta: '18.2%', tone: 'violet' },
  ],
  funnel: [
    { label: 'Total AI Calls', value: '3,291', pct: '100%', width: 100, tone: 'bg-emerald-500' },
    { label: 'Answered & Triaged', value: '2,876', pct: '87.4%', width: 87.4, tone: 'bg-blue-500' },
    { label: 'Leads Captured', value: '1,847', pct: '56.1%', width: 56.1, tone: 'bg-cyan-400' },
    { label: 'Hot Qualified', value: '894', pct: '27.2%', width: 27.2, tone: 'bg-violet-500' },
    { label: 'Meetings Booked', value: '412', pct: '12.5%', width: 12.5, tone: 'bg-orange-500' },
  ],
  personas: [
    { initial: 'T', name: 'Tariq', role: 'Executive Assistant', language: 'Bilingual Gulf Arabic / English', calls: '1,420 calls', badge: 'Primary' },
    { initial: 'J', name: 'James', role: 'Real Estate Advisor', language: 'British English', calls: '890 calls', badge: 'Active' },
    { initial: 'N', name: 'Nour', role: 'Healthcare Concierge', language: 'Saudi Arabic', calls: '640 calls', badge: 'Active' },
    { initial: 'R', name: 'Raj', role: 'Fintech Specialist', language: 'Indian Executive English', calls: '341 calls', badge: 'Active' },
  ],
  calls: [
    {
      id: 'call-1',
      caller: 'Omar Al-Fayed',
      phone: '+971 50 123 4567',
      direction: 'Inbound',
      agent: 'Tariq',
      at: '2026-03-03 09:15',
      duration: '2:34',
      outcome: 'Meeting Booked',
      cost: '$0.11',
      summary:
        'Inbound clinic enquiry. Caller asked about triage automation across three branches and booked an enterprise demo.',
      turns: [
        { speaker: 'agent', name: 'Tariq', at: '0:00', text: 'Good morning, this is Tariq from Aqion Vox. How can I help you today?' },
        { speaker: 'customer', name: 'Customer', at: '0:04', text: 'We run three clinics and miss a lot of calls at peak hours.' },
        { speaker: 'agent', name: 'Tariq', at: '0:12', text: 'Our voice agent answers every call, checks insurance and books directly into your scheduler.' },
        { speaker: 'customer', name: 'Customer', at: '0:31', text: 'Can we see that working on one branch first?' },
        { speaker: 'agent', name: 'Tariq', at: '0:38', text: 'Absolutely. I have booked an enterprise demo for Mar 10 at 10:00 AM.' },
      ],
    },
    {
      id: 'call-2',
      caller: 'Sara Al-Rashid',
      phone: '+971 55 234 5678',
      direction: 'Outbound',
      agent: 'James',
      at: '2026-03-03 14:30',
      duration: '1:52',
      outcome: 'Qualified Lead',
      cost: '$0.08',
      summary:
        'Follow-up call regarding luxury off-plan buyer qualification. Client confirmed 100+ agents and requested executive pitch deck.',
      turns: [
        { speaker: 'agent', name: 'James', at: '0:00', text: 'Good afternoon, this is James from Aqion Vox. Am I speaking with Sara Al-Rashid?' },
        { speaker: 'customer', name: 'Customer', at: '0:05', text: 'Yes, hello James. I wanted to learn how your AI agent handles off-plan buyer inquiries.' },
        { speaker: 'agent', name: 'James', at: '0:12', text: 'Our voice agent pre-qualifies high-net-worth investors, checks budget criteria, and schedules private VIP viewings automatically.' },
        { speaker: 'customer', name: 'Customer', at: '0:28', text: 'That is exactly what our agency requires. Please email me the technical overview.' },
        { speaker: 'agent', name: 'James', at: '0:35', text: 'I will dispatch the full documentation to your email immediately, Sara. Thank you for your time.' },
      ],
    },
    {
      id: 'call-3',
      caller: 'Ahmed Hassan',
      phone: '+966 50 345 6789',
      direction: 'Inbound',
      agent: 'Nour',
      at: '2026-03-04 09:30',
      duration: '3:12',
      outcome: 'Escalated',
      cost: '$0.14',
      summary:
        'Sovereign cloud architecture questions across six hospitals. Beyond the agent boundary, so escalated to solutions engineering.',
      turns: [
        { speaker: 'agent', name: 'Nour', at: '0:00', text: 'Thank you for calling Aqion Vox. How may I assist?' },
        { speaker: 'customer', name: 'Customer', at: '0:06', text: 'We need to understand where patient call data would be stored.' },
        { speaker: 'agent', name: 'Nour', at: '0:15', text: 'UAE deployment options are supported. Architecture detail needs our solutions engineer.' },
        { speaker: 'customer', name: 'Customer', at: '0:44', text: 'Please arrange that conversation.' },
        { speaker: 'agent', name: 'Nour', at: '0:52', text: 'Escalating now with the full context of this call.' },
      ],
    },
    {
      id: 'call-4',
      caller: 'Priya Sharma',
      phone: '+971 52 456 7890',
      direction: 'Inbound',
      agent: 'Raj',
      at: '2026-03-04 11:00',
      duration: '2:08',
      outcome: 'Meeting Booked',
      cost: '$0.09',
      summary: 'Compliance and CBUAE logging requirements evaluation. Review call scheduled with the finance team.',
      turns: [
        { speaker: 'agent', name: 'Raj', at: '0:00', text: 'Good morning, Aqion Vox speaking. How can I help?' },
        { speaker: 'customer', name: 'Customer', at: '0:05', text: 'We need call logging that satisfies CBUAE requirements.' },
        { speaker: 'agent', name: 'Raj', at: '0:14', text: 'Every call is transcribed and retained with an exportable audit trail.' },
        { speaker: 'customer', name: 'Customer', at: '0:39', text: 'Let us walk through that with our compliance lead.' },
        { speaker: 'agent', name: 'Raj', at: '0:47', text: 'Booked for Mar 11 at 11:30 AM.' },
      ],
    },
  ],
  leads: [
    { id: 'l1', ref: 'LD_001', name: 'Omar Al-Fayed', phone: '+971 50 123 4567', company: 'Al-Fayed Clinics', region: 'UAE', email: 'omar@alfayed.ae', quality: 'Hot', score: 88, language: 'Gulf Arabic', captured: '2026-03-03 09:15', status: 'Qualified', notes: 'Clinic group in Dubai running three branches. Wants after-hours triage and insurance pre-checks before booking.' },
    { id: 'l2', ref: 'LD_002', name: 'Sara Al-Rashid', phone: '+971 55 234 5678', company: 'Rashid Realty', region: 'UAE', email: 'sara@rashid-realty.com', quality: 'Warm', score: 65, language: 'English', captured: '2026-03-03 14:30', status: 'Contacted', notes: 'Luxury off-plan brokerage with 100+ agents. Requested executive pitch deck and technical overview by email.' },
    { id: 'l3', ref: 'LD_003', name: 'Ahmed Hassan', phone: '+966 50 345 6789', company: 'Saudi Med Group', region: 'Saudi Arabia', email: 'a.hassan@medgroup.sa', quality: 'Hot', score: 92, language: 'Saudi Arabic', captured: '2026-03-04 09:30', status: 'Qualified', notes: 'Sovereign cloud voice AI architecture review for six hospitals. Escalated to solutions engineering.' },
    { id: 'l4', ref: 'LD_004', name: 'Priya Sharma', phone: '+971 52 456 7890', company: 'Emirates Finance', region: 'UAE', email: 'priya@emiratesfinance.com', quality: 'Hot', score: 79, language: 'English', captured: '2026-03-04 11:00', status: 'Qualified', notes: 'Compliance and CBUAE logging requirements evaluation ahead of a finance-team review.' },
    { id: 'l5', ref: 'LD_005', name: 'Adaeze Okonkwo', phone: '+971 54 567 8901', company: 'Dubai Restaurants LLC', region: 'UAE', email: 'adaeze@dubairestaurants.com', quality: 'Warm', score: 58, language: 'English', captured: '2026-03-04 15:45', status: 'Contacted', notes: 'Restaurant chain in Dubai Downtown looking for table booking voice concierge.' },
    { id: 'l6', ref: 'LD_006', name: 'Hassan Al-Kuwaiti', phone: '+965 60 678 9012', company: 'Ministry of Services KW', region: 'Kuwait', email: 'h.kuwaiti@gov.kw', quality: 'Hot', score: 95, language: 'Kuwaiti Arabic', captured: '2026-03-05 08:45', status: 'Qualified', notes: 'Public sector digital transformation AI voice RFP presentation requested.' },
    { id: 'l7', ref: 'LD_007', name: 'Tarek Masri', phone: '+961 3 789 0123', company: 'Masri Properties', region: 'Lebanon', email: 'tarek@masri-properties.lb', quality: 'Warm', score: 52, language: 'Arabic', captured: '2026-03-05 13:20', status: 'New', notes: 'Regional property portfolio. Asked for pricing across a small agent seat count.' },
    { id: 'l8', ref: 'LD_008', name: 'Dr. Amina Hassan', phone: '+971 50 890 1234', company: 'City Hospital Dubai', region: 'UAE', email: 'amina@cityhospital.ae', quality: 'Hot', score: 87, language: 'English / Arabic', captured: '2026-03-05 16:10', status: 'Qualified', notes: 'Bilingual patient intake for a hospital switchboard handling high daytime volume.' },
    { id: 'l9', ref: 'LD_009', name: 'Ali Al-Bahraini', phone: '+973 36 901 2345', company: 'Al-Bahraini Trading', region: 'Bahrain', email: 'ali@albahraini.bh', quality: 'Cold', score: 32, language: 'Arabic', captured: '2026-03-06 10:00', status: 'New', notes: 'General enquiry about pricing. Ended the call before requirements were captured.' },
    { id: 'l10', ref: 'LD_010', name: 'Fatima Al-Zahra', phone: '+971 58 012 3456', company: 'Al-Zahra Luxury Design', region: 'UAE', email: 'fatima@alzahradesign.ae', quality: 'Warm', score: 61, language: 'Emirati Arabic', captured: '2026-03-06 14:15', status: 'Contacted', notes: 'Interior design studio wanting consultation booking and follow-up reminders.' },
  ],
  bookings: [
    { id: 'b1', source: 'Voice AI', name: 'Omar Al-Fayed', company: 'Al-Fayed Clinics', phone: '+971 50 123 4567', when: 'Mar 10, 2026 10:00 AM', duration: '30 Minutes', status: 'Confirmed', notes: 'Enterprise clinic triage automation demo. 3 branch setup.' },
    { id: 'b2', source: 'Voice AI', name: 'Ahmed Hassan', company: 'Saudi Med Group', phone: '+966 50 345 6789', when: 'Mar 10, 2026 02:00 PM', duration: '45 Minutes', status: 'Confirmed', notes: 'Sovereign cloud voice AI architecture review for 6 hospitals.' },
    { id: 'b3', source: 'Voice AI', name: 'Priya Sharma', company: 'Emirates Finance', phone: '+971 52 456 7890', when: 'Mar 11, 2026 11:30 AM', duration: '30 Minutes', status: 'Pending', notes: 'Compliance and CBUAE logging requirements evaluation.' },
    { id: 'b4', source: 'Direct Intake', name: 'Hassan Al-Kuwaiti', company: 'Ministry of Services KW', phone: '+965 60 678 9012', when: 'Mar 12, 2026 09:00 AM', duration: '60 Minutes', status: 'Confirmed', notes: 'Public sector digital transformation AI voice RFP presentation.' },
  ],
  recipients: [
    { id: 'r1', name: 'Operations Team', email: 'operations@example.ae', team: 'Operations' },
  ],
  triggers: [
    { id: 't1', title: 'Instant Call Summary Emails', detail: 'Send lead details & transcript summary immediately after each call', enabled: true },
    { id: 't2', title: 'Daily Call Analytics Summary', detail: 'Send daily report of call volume, leads captured & meetings booked', enabled: true },
    { id: 't3', title: 'Hot Lead High-Priority Alerts', detail: 'Urgent notification when a Hot Lead is qualified by Aqion Vox', enabled: true },
  ],
};

export function useVoxCrmData(): VoxCrmSnapshot {
  return useMemo(() => snapshot, []);
}
