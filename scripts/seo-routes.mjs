/**
 * One source of truth for every public route: the sitemap, the prerenderer and
 * the per-page metadata all read from here.
 */
export const SITE = 'https://aqionlabs.ai';
export const BRAND = 'AqionLabs';

const t = (title, description, priority = 0.7) => ({ title, description, priority });

export const ROUTES = {
  '/': t(
    'AqionLabs — Agentic AI for UAE and GCC Businesses',
    'AqionLabs builds agentic AI that answers calls, qualifies leads and moves work into your systems. Aqion Vox voice AI and Aqion Cloud, built for the UAE and GCC.',
    1.0),
  '/about': t('About AqionLabs — Team and Approach',
    'The team building agentic AI in Dubai: founder-led engineering, forward-deployed delivery and a UAE-first product direction.', 0.8),
  '/contact': t('Contact AqionLabs — Book a Demo',
    'Talk to the AqionLabs team about deploying an AI voice employee or the Aqion Cloud platform for your business.', 0.8),
  '/careers': t('Careers at AqionLabs',
    'Join a small UAE team shipping agentic AI into production for regional businesses.', 0.5),
  '/pricing': t('AqionLabs Pricing — Platform, Implementation and Usage',
    'Transparent pricing for Aqion Vox and Aqion Cloud: monthly platform tiers, implementation, consumption and enterprise agreements.', 0.8),
  '/products/aqion-voice': t('Aqion Vox — AI Voice Agent for Customer Care',
    'Aqion Vox answers every call in Arabic and English, qualifies the caller, books the meeting and writes the lead into your CRM. Try the live demo.', 0.9),
  '/agents/customer-support': t('Aqion Vox — AI Customer Support Agent',
    'An AI voice employee for customer care: live transcription, lead capture, bookings and a full CRM behind every conversation.', 0.9),
  '/platform/aqion-cloud': t('Aqion Cloud — The Platform Behind Agentic AI',
    'Aqion Cloud is the shared intelligence, memory and execution layer powering the AqionLabs AI workforce.', 0.9),
  '/platform/integrations': t('Integrations — Connect Aqion to Your Stack',
    'Connect Aqion agents to CRM, calendar, WhatsApp, email and the business systems your team already runs on.', 0.7),
  '/platform/security-data': t('Security and Data — AqionLabs',
    'Access control, audit, observability and UAE deployment options for supported workloads.', 0.7),
  '/agentic-ai': t('Agentic AI — The AqionLabs AI Workforce',
    'Specialised AI agents for customer conversation, knowledge, operations, finance and growth.', 0.8),
  '/ai-workforce/roadmap': t('AI Workforce Roadmap — AqionLabs',
    'How the AqionLabs agent portfolio expands from customer engagement into the wider operating layer.', 0.6),
  '/industries': t('Industries — Agentic AI by Sector',
    'How UAE healthcare, real estate, finance, legal, hospitality and education teams deploy Aqion agents.', 0.8),
  '/resources/investor-enquiries': t('Investor Enquiries — AqionLabs',
    'Information for investors following AqionLabs, an agentic AI company building from the UAE.', 0.6),
  '/privacy': t('Privacy Policy — AqionLabs', 'How AqionLabs collects, processes and protects personal data.', 0.3),
  '/terms': t('Terms of Use — AqionLabs', 'The terms governing use of AqionLabs websites and services.', 0.3),
  '/legal/data-processing': t('Data Processing — AqionLabs', 'AqionLabs data processing terms and sub-processor information.', 0.3),
};

/** Everything else gets a readable title derived from its own path. */
const titleCase = (s) => s.replace(/[-/]/g, ' ').trim().replace(/\s+/g, ' ')
  .split(' ').map(w => w ? w[0].toUpperCase() + w.slice(1) : w).join(' ');

export function metaFor(path) {
  if (ROUTES[path]) return ROUTES[path];
  const label = titleCase(path.split('/').pop() || 'Page');
  const section = path.startsWith('/industries/') ? `Agentic AI for ${label}`
    : path.startsWith('/services/') ? `${label} — AqionLabs Services`
    : path.startsWith('/agents/') ? `${label} — AqionLabs AI Agent`
    : `${label} — AqionLabs`;
  return t(section,
    `${label} from AqionLabs — agentic AI built for businesses across the UAE and GCC.`,
    path.startsWith('/industries/') ? 0.6 : 0.5);
}
