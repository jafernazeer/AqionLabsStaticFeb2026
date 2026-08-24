/**
 * Data source for the Aqion Vox CRM panel.
 *
 * Mirrors the shipped product screenshots in `public/` (overview-light.png,
 * leads-light.png, conversations-light.png, meetings-light.png) so the embedded
 * demo reads as the same application.
 *
 * The marketing site is a static build with no server, so the dashboard is fed
 * from this module rather than a live API. When a Vox backend exists, replace
 * the body of `useVoxCrmData` and leave the exported types alone — the CRM
 * component reads nothing else. Timestamps are display strings, matching the
 * screenshots; nothing here is parsed as a date.
 */
import { useMemo } from 'react';

export type VoxStat = {
  label: string;
  value: string;
  sub: string;
  delta: string;
};

export type VoxFunnelStage = {
  label: string;
  value: number;
  pct: number;
  tone: string;
};

export type VoxAgent = {
  initials: string;
  name: string;
  detail: string;
  resolved: string;
};

export type VoxAction = {
  title: string;
  detail: string;
  priority: 'High' | 'Medium';
};

export type VoxLead = {
  id: string;
  name: string;
  region: string;
  language: string;
  phone: string;
  email: string;
  company: string;
  status: 'New' | 'Contacted' | 'Qualified';
  quality: 'Hot' | 'Warm' | 'Cold';
  source: 'Voice' | 'WhatsApp' | 'Ads' | 'Website';
  score: number;
  lastContact: string;
};

export type VoxTimelineEntry = {
  label: string;
  channel: string;
  detail: string;
  at: string;
  tone: 'message' | 'ai' | 'intent' | 'booked' | 'call' | 'qualified' | 'meeting' | 'followup';
};

export type VoxConversation = {
  id: string;
  name: string;
  channel: 'WA' | 'Voice';
  state: 'Open' | 'Resolved' | 'Assigned';
  preview: string;
  routedTo?: string;
  unread?: number;
  at: string;
  phone: string;
  timeline: VoxTimelineEntry[];
};

export type VoxMeeting = {
  id: string;
  lead: string;
  phone: string;
  company: string;
  scheduled: string;
  duration: string;
  source: 'Voice AI' | 'WhatsApp AI' | 'Manual';
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Cancelled';
};

export type VoxCallLog = {
  id: string;
  lead: string;
  company: string;
  at: string;
  duration: string;
  language: string;
  outcome: 'Qualified' | 'Booked' | 'Escalated' | 'Information';
};

export type VoxWhatsAppThread = {
  id: string;
  name: string;
  preview: string;
  at: string;
  unread: number;
};

export type VoxCrmSnapshot = {
  stats: VoxStat[];
  funnel: VoxFunnelStage[];
  agents: VoxAgent[];
  actions: VoxAction[];
  channelMix: { label: string; value: number; tone: string }[];
  leads: VoxLead[];
  conversations: VoxConversation[];
  meetings: VoxMeeting[];
  callLogs: VoxCallLog[];
  whatsapp: VoxWhatsAppThread[];
};

const snapshot: VoxCrmSnapshot = {
  stats: [
    { label: 'Leads Captured', value: '1,847', sub: '5 hot accounts', delta: '+12.4%' },
    { label: 'Meetings Booked', value: '412', sub: 'AI-scheduled demos', delta: '+18.2%' },
    { label: 'Voice Calls', value: '3,291', sub: '2,876 answered', delta: '+8.7%' },
    { label: 'AI Cost', value: '$387.42', sub: '$0.12 avg voice call', delta: '+4.1%' },
  ],
  funnel: [
    { label: 'Leads Captured', value: 1847, pct: 100, tone: 'bg-emerald-500' },
    { label: 'AI Responded', value: 1623, pct: 87.9, tone: 'bg-emerald-500' },
    { label: 'Qualified', value: 894, pct: 48.4, tone: 'bg-blue-500' },
    { label: 'Meeting Booked', value: 412, pct: 22.3, tone: 'bg-violet-500' },
    { label: 'Meeting Completed', value: 287, pct: 15.5, tone: 'bg-orange-500' },
    { label: 'Converted', value: 143, pct: 7.7, tone: 'bg-red-500' },
  ],
  agents: [
    { initials: 'FA', name: 'Fatima', detail: 'Gulf Arabic · 89 calls today', resolved: '94%' },
    { initials: 'JA', name: 'James', detail: 'British English · 67 calls today', resolved: '91%' },
    { initials: 'NO', name: 'Nour', detail: 'Saudi Arabic · 54 calls today', resolved: '88%' },
    { initials: 'RA', name: 'Raj', detail: 'Indian English · 43 calls today', resolved: '86%' },
  ],
  actions: [
    { title: 'Enterprise healthcare lead needs HMS integration brief', detail: 'Solutions · due 24m', priority: 'High' },
    { title: 'Government proposal draft requested after AI handoff', detail: 'Sales Ops · due 43m', priority: 'High' },
    { title: 'Real estate pricing question waiting in WhatsApp', detail: 'Growth · due 1h', priority: 'Medium' },
  ],
  channelMix: [
    { label: 'WhatsApp', value: 100, tone: 'bg-emerald-500' },
    { label: 'Voice', value: 34, tone: 'bg-blue-500' },
    { label: 'Web chat', value: 27, tone: 'bg-violet-500' },
    { label: 'Inbound', value: 21, tone: 'bg-orange-500' },
    { label: 'Campaigns', value: 17, tone: 'bg-teal-500' },
  ],
  leads: [
    { id: 'l1', name: 'Omar Al-Fayed', region: 'UAE', language: 'Arabic', phone: '+971 50 123 4567', email: 'omar@alfayed.ae', company: 'Al-Fayed Clinics', status: 'Qualified', quality: 'Hot', source: 'Voice', score: 88, lastContact: '2h ago' },
    { id: 'l2', name: 'Sara Al-Rashid', region: 'UAE', language: 'English', phone: '+971 55 234 5678', email: 'sara@rashid-realty.com', company: 'Rashid Realty', status: 'Contacted', quality: 'Warm', source: 'WhatsApp', score: 65, lastContact: '5h ago' },
    { id: 'l3', name: 'Ahmed Hassan', region: 'Saudi Arabia', language: 'Arabic', phone: '+966 50 345 6789', email: 'a.hassan@medgroup.sa', company: 'Saudi Med Group', status: 'Qualified', quality: 'Hot', source: 'Voice', score: 92, lastContact: '1h ago' },
    { id: 'l4', name: 'Priya Sharma', region: 'UAE', language: 'English', phone: '+971 52 456 7890', email: 'priya@emiratesfinance.com', company: 'Emirates Finance', status: 'Qualified', quality: 'Hot', source: 'Voice', score: 79, lastContact: '3h ago' },
    { id: 'l5', name: 'Adaeze Okonkwo', region: 'UAE', language: 'English', phone: '+971 54 567 8901', email: 'adaeze@dubairestaurants.com', company: 'Dubai Restaurants LLC', status: 'Contacted', quality: 'Warm', source: 'Ads', score: 58, lastContact: '6h ago' },
    { id: 'l6', name: 'Hassan Al-Kuwaiti', region: 'Kuwait', language: 'Arabic', phone: '+965 60 678 9012', email: 'h.kuwaiti@gov.kw', company: 'Ministry of Services KW', status: 'Qualified', quality: 'Hot', source: 'Voice', score: 95, lastContact: '45min ago' },
    { id: 'l7', name: 'Tarek Masri', region: 'Lebanon', language: 'Arabic', phone: '+961 3 789 0123', email: 'tarek@masri-properties.lb', company: 'Masri Properties', status: 'New', quality: 'Warm', source: 'Website', score: 52, lastContact: '1d ago' },
    { id: 'l8', name: 'Dr. Amina Hassan', region: 'UAE', language: 'English', phone: '+971 50 890 1234', email: 'amina@cityhospital.ae', company: 'City Hospital', status: 'Qualified', quality: 'Hot', source: 'Voice', score: 87, lastContact: '2h ago' },
  ],
  conversations: [
    {
      id: 'c1',
      name: 'Omar Al-Fayed',
      channel: 'WA',
      state: 'Resolved',
      preview: 'شكراً جزيلاً، انتظر التاكيد',
      at: '2h ago',
      phone: '+971 50 123 4567',
      timeline: [
        { label: 'Message', channel: 'Whatsapp', detail: 'Lead sent first inquiry about clinic appointment pricing', at: 'Mar 3, 09:10 AM', tone: 'message' },
        { label: 'AI Response', channel: 'Whatsapp', detail: 'AI responded with pricing details and booking offer', at: 'Mar 3, 09:10 AM', tone: 'ai' },
        { label: 'Meeting Intent', channel: 'Whatsapp', detail: 'AI detected meeting booking intent', at: 'Mar 3, 09:13 AM', tone: 'intent' },
        { label: 'Booking Confirmed', channel: 'Whatsapp', detail: 'Appointment booked: Mar 4, 10:00 AM via Cal.com', at: 'Mar 3, 09:13 AM', tone: 'booked' },
        { label: 'Inbound Call', channel: 'Voice', detail: 'AI voice call — 2:34 min — Gulf Arabic — Fatima agent', at: 'Mar 3, 09:15 AM', tone: 'call' },
        { label: 'Lead Qualified', channel: 'Voice', detail: 'Lead score updated: 45 → 88 (Hot). Enterprise interest confirmed.', at: 'Mar 3, 09:15 AM', tone: 'qualified' },
        { label: 'Demo Meeting', channel: 'Meeting', detail: 'Attended enterprise demo — 45 min — Solutions team', at: 'Mar 4, 10:00 AM', tone: 'meeting' },
        { label: 'Follow-up', channel: 'Whatsapp', detail: 'AI sent post-demo follow-up with enterprise proposal', at: 'Mar 4, 11:30 AM', tone: 'followup' },
      ],
    },
    {
      id: 'c2',
      name: 'Sara Al-Rashid',
      channel: 'WA',
      state: 'Open',
      preview: 'Can you send me the pricing details?',
      routedTo: 'Sales Team',
      unread: 2,
      at: '45min ago',
      phone: '+971 55 234 5678',
      timeline: [
        { label: 'Message', channel: 'Whatsapp', detail: 'Asked for a full pricing breakdown across plans', at: 'Mar 3, 11:02 AM', tone: 'message' },
        { label: 'AI Response', channel: 'Whatsapp', detail: 'AI shared plan comparison and offered a callback', at: 'Mar 3, 11:02 AM', tone: 'ai' },
        { label: 'Routed', channel: 'Whatsapp', detail: 'Handed to Sales Team — custom pricing requested', at: 'Mar 3, 11:06 AM', tone: 'intent' },
      ],
    },
    {
      id: 'c3',
      name: 'Ahmed Hassan',
      channel: 'Voice',
      state: 'Assigned',
      preview: 'Escalated to human agent',
      routedTo: 'Enterprise Sales',
      at: '1h ago',
      phone: '+966 50 345 6789',
      timeline: [
        { label: 'Inbound Call', channel: 'Voice', detail: 'AI voice call — 4:12 min — Saudi Arabic — Nour agent', at: 'Mar 3, 10:41 AM', tone: 'call' },
        { label: 'Lead Qualified', channel: 'Voice', detail: 'Lead score updated: 60 → 92 (Hot). Multi-site rollout.', at: 'Mar 3, 10:45 AM', tone: 'qualified' },
        { label: 'Escalated', channel: 'Voice', detail: 'Handed to Enterprise Sales with full call context', at: 'Mar 3, 10:46 AM', tone: 'followup' },
      ],
    },
    {
      id: 'c4',
      name: 'Priya Sharma',
      channel: 'WA',
      state: 'Resolved',
      preview: 'Meeting confirmed for Wed 10 AM ✓',
      at: '3h ago',
      phone: '+971 52 456 7890',
      timeline: [
        { label: 'Message', channel: 'Whatsapp', detail: 'Requested a product walkthrough for the finance team', at: 'Mar 3, 08:20 AM', tone: 'message' },
        { label: 'Booking Confirmed', channel: 'Whatsapp', detail: 'Appointment booked: Mar 5, 10:00 AM via Cal.com', at: 'Mar 3, 08:24 AM', tone: 'booked' },
      ],
    },
    {
      id: 'c5',
      name: 'Hassan Al-Kuwaiti',
      channel: 'WA',
      state: 'Open',
      preview: 'Please send the formal proposal document',
      unread: 1,
      at: '30min ago',
      phone: '+965 60 678 9012',
      timeline: [
        { label: 'Message', channel: 'Whatsapp', detail: 'Government tender — asked for a formal written proposal', at: 'Mar 3, 11:18 AM', tone: 'message' },
        { label: 'AI Response', channel: 'Whatsapp', detail: 'AI confirmed scope and flagged for proposal drafting', at: 'Mar 3, 11:19 AM', tone: 'ai' },
      ],
    },
  ],
  meetings: [
    { id: 'm1', lead: 'Omar Al-Fayed', phone: '+971 50 123 4567', company: 'Al-Fayed Clinics', scheduled: 'Tue Mar 4, 10:00 AM', duration: '45 min', source: 'Voice AI', status: 'Confirmed' },
    { id: 'm2', lead: 'Sara Al-Rashid', phone: '+971 55 234 5678', company: 'Rashid Realty', scheduled: 'Thu Mar 6, 2:00 PM', duration: '30 min', source: 'Voice AI', status: 'Confirmed' },
    { id: 'm3', lead: 'Priya Sharma', phone: '+971 52 456 7890', company: 'Emirates Finance', scheduled: 'Wed Mar 5, 10:00 AM', duration: '60 min', source: 'Voice AI', status: 'Completed' },
    { id: 'm4', lead: 'Hassan Al-Kuwaiti', phone: '+965 60 678 9012', company: 'Ministry of Services KW', scheduled: 'Sun Mar 9, 10:00 AM', duration: '60 min', source: 'Voice AI', status: 'Pending' },
    { id: 'm5', lead: 'Dr. Amina Hassan', phone: '+971 50 890 1234', company: 'City Hospital', scheduled: 'Mon Mar 9, 11:00 AM', duration: '60 min', source: 'Voice AI', status: 'Confirmed' },
    { id: 'm6', lead: 'Adaeze Okonkwo', phone: '+971 54 567 8901', company: 'Dubai Restaurants LLC', scheduled: 'Wed Mar 11, 3:00 PM', duration: '30 min', source: 'WhatsApp AI', status: 'Pending' },
    { id: 'm7', lead: 'Rania Khalil', phone: '+20 10 1234 5678', company: 'Khalil Tech Egypt', scheduled: 'Mon Mar 3, 2:00 PM', duration: '30 min', source: 'Manual', status: 'Cancelled' },
  ],
  callLogs: [
    { id: 'cl1', lead: 'Omar Al-Fayed', company: 'Al-Fayed Clinics', at: 'Mar 3, 09:15 AM', duration: '2:34', language: 'Gulf Arabic', outcome: 'Booked' },
    { id: 'cl2', lead: 'Ahmed Hassan', company: 'Saudi Med Group', at: 'Mar 3, 10:41 AM', duration: '4:12', language: 'Saudi Arabic', outcome: 'Escalated' },
    { id: 'cl3', lead: 'Priya Sharma', company: 'Emirates Finance', at: 'Mar 3, 08:20 AM', duration: '3:08', language: 'English', outcome: 'Qualified' },
    { id: 'cl4', lead: 'Dr. Amina Hassan', company: 'City Hospital', at: 'Mar 2, 04:52 PM', duration: '5:01', language: 'English', outcome: 'Qualified' },
    { id: 'cl5', lead: 'Tarek Masri', company: 'Masri Properties', at: 'Mar 2, 01:14 PM', duration: '1:47', language: 'Arabic', outcome: 'Information' },
  ],
  whatsapp: [
    { id: 'w1', name: 'Sara Al-Rashid', preview: 'Can you send me the pricing details?', at: '45min ago', unread: 2 },
    { id: 'w2', name: 'Hassan Al-Kuwaiti', preview: 'Please send the formal proposal document', at: '30min ago', unread: 1 },
    { id: 'w3', name: 'Rania Khalil', preview: "Yes I'm interested! What plans do you offer?", at: '1h ago', unread: 3 },
    { id: 'w4', name: 'Ali Al-Bahraini', preview: 'Hi Ali, we tried to reach you — free to talk?', at: '8h ago', unread: 0 },
    { id: 'w5', name: 'Omar Al-Fayed', preview: 'شكراً جزيلاً، انتظر التاكيد', at: '2h ago', unread: 0 },
  ],
};

export function useVoxCrmData(): VoxCrmSnapshot {
  return useMemo(() => snapshot, []);
}
