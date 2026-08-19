
import { DetailPageData, PageType, IndustryPageData } from './types';
import { 
  BookOpen, Bot, Globe, Handshake, Headphones, Megaphone, Server, Workflow,
  Brain, Briefcase, Compass, LayoutTemplate, Receipt, Share2, TrendingUp, Wrench
} from 'lucide-react';

// Agentic AI Services Data
export const SERVICE_DATA: Record<string, DetailPageData> = {
  [PageType.SERVICE_DIGITAL_PRESENCE_STUDIO]: {
    title: "AI Creative Suite",
    subtitle: "Production-grade web and mobile, shipped in weeks — not quarters. AI woven into the spine, not bolted on top.",
    icon: Globe,
    sections: [
      {
        title: "Your digital front door",
        content: "We design, build, and redesign your customer-facing surfaces so they look sharp, load fast, and convert. Websites, mobile apps, portals, booking flows, landing pages, commerce journeys — all built with the release discipline of a senior product team."
      },
      {
        title: "Agents that keep improving",
        content: "After launch, the work does not sit still. We embed agents that watch analytics, surface friction, test new copy, flag broken funnels, and recommend improvements before conversion drops."
      },
      {
        title: "Built for the UAE operating rhythm",
        content: "Bilingual surfaces, WhatsApp-first journeys, lead capture, CRM updates, local hosting options, and clean handoff into sales or support. The site stops being a brochure. It becomes a working part of the business."
      }
    ],
    featuresTitle: "Studio Operating Model",
    features: [
      { title: "Diagnose", description: "Map the customer journey, revenue leak, tracking gaps, and surfaces worth rebuilding first." },
      { title: "Ship", description: "Design, engineer, integrate, and launch production-grade web or mobile experiences in tight cycles." },
      { title: "Instrument", description: "Connect analytics, funnels, lead capture, CRM, search, and campaign attribution from day one." },
      { title: "Optimize", description: "Use agents to monitor performance, propose changes, and keep the product improving after launch." }
    ]
  },
  [PageType.SERVICE_MARKETING_AGENT]: {
    title: "Marketing Automation",
    subtitle: "A full marketing operator that plans campaigns, generates content, publishes, tests, and reallocates spend to what works.",
    icon: Megaphone,
    sections: [
      {
        title: "A department that runs itself",
        content: "The agent briefs itself on your brand, audience, offer, and targets. Then it plans the campaign, writes the assets, schedules the posts, prepares the email, drafts the landing page, and reports what moved."
      },
      {
        title: "English and Arabic by default",
        content: "Campaigns are built for the way UAE customers actually move: Arabic and English copy, WhatsApp follow-up, regional offers, landing-page variants, and channel logic that respects the market."
      },
      {
        title: "Spend follows performance",
        content: "The agent reads the numbers, compares variants, finds the channel that is pulling weight, and recommends where to move budget. Plain numbers. No vanity dashboard."
      }
    ],
    featuresTitle: "Marketing Loop",
    features: [
      { title: "Plan", description: "Campaign calendars, audience segments, offers, creative angles, and channel plans." },
      { title: "Create", description: "Ads, social posts, email, landing copy, WhatsApp scripts, and Arabic-English variants." },
      { title: "Publish", description: "Scheduling, approvals, asset handoff, and channel-specific formatting." },
      { title: "Learn", description: "A/B tests, weekly performance notes, budget recommendations, and next best experiments." }
    ]
  },
  [PageType.SERVICE_SALES_AGENT]: {
    title: "Sales Copilot",
    subtitle: "An autonomous SDR that catches every inquiry, qualifies demand, books meetings, and updates the CRM itself.",
    icon: Handshake,
    sections: [
      {
        title: "No lead goes cold",
        content: "The agent captures inquiries across web, WhatsApp, forms, ads, and voice. It responds immediately, asks the qualifying questions, researches the account, and keeps the lead warm until a human should enter."
      },
      {
        title: "Follow-up without fatigue",
        content: "Most pipelines leak because follow-up is boring, repetitive, and easy to defer. The agent handles reminders, context-rich nudges, meeting links, objections, and CRM updates without losing the thread."
      },
      {
        title: "Priced on outcomes",
        content: "The goal is not another seat. It is booked meetings, revived leads, cleaner pipeline data, and a sales team that spends more time selling to qualified buyers."
      }
    ],
    featuresTitle: "Revenue Workflow",
    features: [
      { title: "Capture", description: "Centralize inquiries from WhatsApp, website, voice, paid media, and forms." },
      { title: "Qualify", description: "Score intent, budget, timeline, authority, source, and urgency before handoff." },
      { title: "Book", description: "Find calendar slots, confirm meetings, send reminders, and reduce no-shows." },
      { title: "Update", description: "Write CRM notes, stages, tags, transcripts, tasks, and next-step reminders." }
    ]
  },
  [PageType.SERVICE_CUSTOMER_CONVERSATION_AGENT]: {
    title: "Multilingual AI Customer Support",
    subtitle: "Voice and chat agents fluent in English and Gulf Arabic, built for regulated contact centers.",
    icon: Headphones,
    sections: [
      {
        title: "Support that scales without hiring",
        content: "The agent answers the question, qualifies the contact, books the action, and knows when to hand off. It works across voice, chat, and WhatsApp — the channels customers actually use."
      },
      {
        title: "Built for regulated operations",
        content: "Every deployment includes approved knowledge, escalation rules, transcript capture, audit trails, and human takeover. The agent is fast, but it is not loose."
      },
      {
        title: "Arabic and English, not translation theater",
        content: "We tune flows for Gulf Arabic, English, code-switching, and local service expectations so the conversation feels operational, not generic."
      }
    ],
    featuresTitle: "Contact Center Layer",
    features: [
      { title: "Answer", description: "Resolve common requests across voice, WhatsApp, and web with approved responses." },
      { title: "Book", description: "Schedule appointments, demos, site visits, service calls, and follow-up actions." },
      { title: "Escalate", description: "Route high-risk, emotional, or complex cases with full context attached." },
      { title: "Audit", description: "Keep transcripts, summaries, sentiment, latency, and handoff trails visible." }
    ]
  },
  [PageType.SERVICE_OPERATIONS_AGENT]: {
    title: "Process & Workflow Automation",
    subtitle: "The back office, automated. Invoices, contracts, onboarding, approvals — handled by agents that document themselves.",
    icon: Workflow,
    sections: [
      {
        title: "Paperwork before breakfast",
        content: "Invoices, purchase orders, contracts, KYC, onboarding packs, VAT prep, reconciliation, approvals, and exceptions — read, extracted, routed, logged, and escalated with a full audit trail.",
        bullets: [
          "Invoice and PO extraction",
          "Contract intake and routing",
          "KYC and onboarding checks",
          "Approval chains and audit logs"
        ]
      },
      {
        title: "Agents that document themselves",
        content: "Every workflow writes its own trail: what it read, what it decided, who approved, what changed, and where the exception went. Operators get speed without losing control.",
        bullets: [
          "System-of-record updates",
          "Exception queues",
          "Role-based approvals",
          "Operator dashboards"
        ]
      },
      {
        title: "Built around existing systems",
        content: "The agent sits across ERP, CRM, helpdesk, finance, HR, email, and document stores. It reduces the coordination load without forcing a full platform migration.",
        bullets: [
          "ERP and CRM triggers",
          "Document classification",
          "Email and ticket routing",
          "Reconciliation support"
        ]
      }
    ],
    featuresTitle: "Operating Gains",
    features: [
      { title: "Cycle time", description: "Shorter turnaround across finance, HR, procurement, legal, and operations." },
      { title: "Control", description: "Audit trails, role boundaries, human approvals, and exception handling." },
      { title: "Accuracy", description: "Less copy-paste, fewer missed steps, and cleaner system records." },
      { title: "Visibility", description: "Dashboards that show bottlenecks, ageing work, and owner-level accountability." }
    ]
  },
  [PageType.SERVICE_INTERNAL_KNOWLEDGE_AGENT]: {
    title: "Enterprise RAG assistant",
    subtitle: "Your policies, SOPs, and documents, turned into an agent your team can simply ask.",
    icon: BookOpen,
    sections: [
      {
        title: "Your company's memory, instant",
        content: "Every policy, SOP, contract, handbook, deck, ticket, and document becomes searchable through a controlled assistant. Onboarding, HR, IT, compliance, finance, and operations get answers in seconds, not three emails."
      },
      {
        title: "Answers with source discipline",
        content: "The agent cites the internal source, respects permissions, flags uncertainty, and routes unanswered questions to the right owner. It does not invent policy. It makes approved knowledge usable."
      },
      {
        title: "Sharper with every question",
        content: "Usage patterns show what teams keep asking, which SOPs are unclear, and where knowledge is missing. The agent becomes an operating signal, not just a search box."
      }
    ],
    featuresTitle: "Knowledge Layer",
    features: [
      { title: "Ingest", description: "Connect policy libraries, SOPs, PDFs, wikis, decks, tickets, and databases." },
      { title: "Permission", description: "Respect role-based access and keep sensitive knowledge inside approved boundaries." },
      { title: "Answer", description: "Respond with grounded sources, next actions, and escalation when confidence is low." },
      { title: "Improve", description: "Report unanswered questions, stale documents, and knowledge gaps by team." }
    ]
  },
  [PageType.SERVICE_SOVEREIGN_AI_FOUNDATION]: {
    title: "On Prem & Private LLM deployment",
    subtitle: "Private LLMs, retrieval, evals, and observability — with UAE data-residency options for supported workloads.",
    icon: Server,
    sections: [
      {
        title: "The ground the others stand on",
        content: "This is the infrastructure every agent above runs on: private models, retrieval, evaluation, observability, access control, logs, and deployment patterns built for regulated and cautious organizations.",
        bullets: [
          "Private LLM deployment",
          "Retrieval and grounding",
          "Evaluation harnesses",
          "Observability and audit logs"
        ]
      },
      {
        title: "UAE deployment options",
        content: "We design for UAE and GCC hosting patterns, VPC deployment paths, strict data boundaries and operational controls. Exact residency and processing requirements are reviewed per workload before launch."
      },
      {
        title: "Governance that lets teams say yes",
        content: "Policy frameworks aligned to UAE AI governance and operational resilience expectations, model-risk controls, evals, escalation rules, human review, and deployment guardrails are part of the build — not a document bolted on at the end."
      }
    ],
    featuresTitle: "Foundation Controls",
    features: [
      { title: "Private by design", description: "Keep data, prompts, retrieval stores, and model access inside approved environments." },
      { title: "Measured quality", description: "Evaluate retrieval accuracy, answer quality, latency, refusals, and policy adherence." },
      { title: "Observable agents", description: "Monitor traces, costs, errors, usage, escalations, and operator feedback." },
      { title: "Regulated ready", description: "Build for privacy, data residency, business continuity, and executive sign-off." }
    ]
  }
};

export const INDUSTRY_DATA: Record<string, IndustryPageData> = {
  [PageType.INDUSTRY_HEALTHCARE]: {
    title: "Healthcare",
    headline: "AI-Powered Patient Engagement & Operational Efficiency",
    context: "Best fit for voice agents, booking, follow-ups, multilingual support, knowledge retrieval, approvals, and personal assistant workflows. Hospitals and clinics face high call volumes, appointment delays, and administrative overload.",
    challenges: [
      "Missed patient calls",
      "Long booking wait times",
      "Manual follow-ups",
      "Overloaded reception teams",
      "Compliance requirements"
    ],
    solutions: {
      aqionVox: [
        "24/7 Arabic & English call answering",
        "Automated appointment booking",
        "Missed call recovery",
        "Patient enquiry qualification"
      ],
      aiAutomation: [
        "Internal workflow automation",
        "Document processing",
        "Internal AI assistants"
      ],
      governance: [
        "Data privacy compliance",
        "Secure AI deployment"
      ]
    },
    outcome: [
      "Increased appointment bookings",
      "Reduced front desk load",
      "Improved patient satisfaction"
    ],
    ctaText: "Infographic showing how Aqion can Transform Your Clinic with AI"
  },
  [PageType.INDUSTRY_REAL_ESTATE]: {
    title: "Real Estate",
    headline: "Convert Property Enquiries into Qualified Buyers — Automatically",
    context: "Strong for lead qualification, WhatsApp follow-up, viewing scheduling, CRM-style routing, document handling, and agent support. Real Estate Firms & Builders face high volume of unqualified leads and missed enquiries.",
    challenges: [
      "High volume of unqualified leads",
      "Missed WhatsApp enquiries",
      "Delayed agent response",
      "Lead leakage"
    ],
    solutions: {
      aqionVox: [
        "24/7 enquiry handling",
        "AI lead qualification",
        "Property-specific filtering",
        "Automatic agent routing",
        "Follow-up automation"
      ],
      aiAutomation: [
        "CRM integration",
        "Developer sales tracking"
      ]
    },
    outcome: [
      "Higher conversion rates",
      "Faster response times",
      "Reduced agent workload"
    ],
    ctaText: "Infographic showing how AqionLabs will help Activate AI Lead Conversion"
  },
  [PageType.INDUSTRY_EDUCATION]: {
    title: "Education",
    headline: "Automate Student Enquiries & Admissions with AI",
    context: "Useful for admissions, student enquiries, programme qualification, scheduling, follow-up, support assistants, and knowledge-base access. The Education Sector faces high admission enquiry volume and manual tracking issues.",
    challenges: [
      "High admission enquiry volume",
      "Manual application tracking",
      "Delayed response times"
    ],
    solutions: {
      aqionVox: [
        "24/7 admission enquiry handling",
        "Programme qualification",
        "WhatsApp engagement"
      ],
      enterpriseAi: [
        "Internal knowledge assistants",
        "Student support bots"
      ]
    },
    outcome: [
      "Increased enrolments",
      "Faster admissions processing"
    ],
    ctaText: "Infographic showing how AqionLabs will help Modernise Student Engagement"
  },
  [PageType.INDUSTRY_RETAIL]: {
    title: "Retail",
    headline: "Turn Customer Conversations into Sales — Online & In-Store",
    context: "The Retail Sector struggles with missed product enquiries and inconsistent support.",
    challenges: [
      "Missed product enquiries",
      "Delayed responses",
      "Inconsistent customer support"
    ],
    solutions: {
      aqionVox: [
        "WhatsApp sales automation",
        "Order status handling",
        "Lead capture",
        "Upsell automation"
      ],
      aiAutomation: [
        "AQION VOX inventory enquiry",
        "Internal staff assistants"
      ]
    },
    outcome: [
      "Higher conversion",
      "Improved customer satisfaction"
    ],
    ctaText: "Infographic showing how AqionLabs will deploy AI for Retail Growth"
  },
  [PageType.INDUSTRY_GOVERNMENT]: {
    title: "Government",
    headline: "Secure AI Deployment for Citizen Engagement & Digital Transformation",
    context: "We support government entities and regulated industries in implementing secure, compliant, and scalable AI systems aligned with national digital transformation objectives.",
    challenges: [
      "High public enquiry volume",
      "Compliance requirements",
      "Multilingual communication"
    ],
    solutions: {
      aqionVox: [
        "AQION VOX citizen enquiry automation"
      ],
      enterpriseAi: [
        "Private GPT deployment",
        "Secure AI infrastructure"
      ],
      governance: [
        "AI Governance frameworks"
      ]
    },
    outcome: [
      "Improved public response",
      "Operational efficiency",
      "Regulatory alignment"
    ],
    ctaText: "Infographic showing how AqionLabs Will help Government sector Explore Secure AI Solutions"
  },
  [PageType.INDUSTRY_FINANCE]: {
    title: "Financial Services",
    headline: "Secure & Compliant AI for Financial Services",
    context: "High-value fit for secure onboarding, compliant knowledge access, advisory workflows, approvals, document support, and service automation. Financial institutions require high-security AI solutions for customer onboarding and advisory.",
    challenges: [
      "Complex compliance requirements",
      "High volume of customer queries",
      "Need for secure data handling"
    ],
    solutions: {
      aqionVox: [
        "Customer onboarding automation"
      ],
      enterpriseAi: [
        "Secure AI advisory systems",
        "Internal knowledge assistants",
        "Compliance-ready AI"
      ]
    },
    outcome: [
      "Streamlined onboarding",
      "Enhanced security",
      "Improved customer experience"
    ],
    ctaText: "See AQION for financial-services customer workflows"
  },
  [PageType.INDUSTRY_HOSPITALITY]: {
    title: "Hospitality",
    headline: "Elevate Guest Experience with AI Automation",
    context: "Strong for booking support, guest requests, concierge workflows, multilingual calls, updates, and direct reservation automation. The Hospitality industry needs 24/7 guest support and booking automation.",
    challenges: [
      "24/7 guest enquiry handling",
      "Booking management",
      "Multilingual support needs"
    ],
    solutions: {
      aqionVox: [
        "Booking automation",
        "WhatsApp concierge AI",
        "Guest enquiry automation"
      ]
    },
    outcome: [
      "Increased direct bookings",
      "Improved guest satisfaction",
      "Reduced front desk workload"
    ],
    ctaText: "See AQION for hospitality customer workflows"
  },
  [PageType.INDUSTRY_LOGISTICS]: {
    title: "Logistics",
    headline: "Streamline Logistics & Transportation with AI",
    context: "Logistics firms face challenges in shipment tracking and operational efficiency.",
    challenges: [
      "High volume of shipment enquiries",
      "Operational delays",
      "Communication gaps"
    ],
    solutions: {
      aqionVox: [
        "Shipment enquiry automation"
      ],
      aiAutomation: [
        "Operational AI assistants"
      ]
    },
    outcome: [
      "Real-time shipment updates",
      "Improved operational efficiency",
      "Reduced support costs"
    ],
    ctaText: "See AQION for logistics customer-service workflows"
  },
  [PageType.INDUSTRY_PROFESSIONAL]: {
    title: "Legal Services",
    headline: "AI for Legal and Consulting",
    context: "Good for client intake, consultation booking, matter screening, document retrieval, approval workflows, and assistant-led follow-up. Legal services firms need efficient client communication and knowledge management.",
    challenges: [
      "Client communication management",
      "Knowledge retrieval",
      "Document processing"
    ],
    solutions: {
      aqionVox: [
        "Customer service automation"
      ],
      enterpriseAi: [
        "Internal knowledge GPT",
        "Document processing"
      ]
    },
    outcome: [
      "Efficient client handling",
      "Faster knowledge access",
      "Automated document workflows"
    ],
    ctaText: "Infographic showing how AqionLabs will help Legal Services"
  },
  [PageType.INDUSTRY_MARKETING_DESIGN]: {
    title: "Marketing & Design",
    headline: "AI-Powered Engagement & Automation for Marketing & Creative Agencies",
    context: "Marketing and creative agencies operate in fast-paced environments where response speed, lead management, and operational efficiency directly impact revenue. From handling client enquiries to managing campaigns and internal coordination, AI can reduce delays and improve performance across the entire workflow.",
    challenges: [
      "High volume of inbound enquiries",
      "Missed client calls and slow enquiry response",
      "Delayed proposal follow-ups",
      "Manual campaign coordination",
      "Repetitive client reporting tasks",
      "Inefficient internal communication"
    ],
    solutions: {
      aqionVox: [
        "Instant response to new client enquiries",
        "Arabic & English call answering",
        "WhatsApp automation for campaign enquiries",
        "Lead qualification before human sales contact",
        "Appointment booking for consultations",
        "Automated follow-up on proposals"
      ],
      aiAutomation: [
        "Automated proposal routing",
        "Campaign approval workflows",
        "Client onboarding processes",
        "Task assignment automation",
        "Automated reporting generation",
        "Contract approval flows",
        "Invoice processing automation"
      ],
      enterpriseAi: [
        "Private GPT for internal knowledge assistants",
        "AI content assistance systems",
        "Secure client data handling",
        "AI governance frameworks"
      ]
    },
    outcome: [
      "Faster client response times",
      "Improved lead conversion rates",
      "Reduced administrative workload",
      "Enhanced client satisfaction",
      "Scalable operational efficiency"
    ],
    ctaText: "Deploy AI for Smarter Campaign Operations"
  },
  [PageType.INDUSTRY_MEDIA_EVENTS]: {
    title: "Media & Events",
    headline: "AI-Powered Engagement for Media & Events",
    context: "Media and event companies handle massive spikes in customer interactions, especially around big music festivals, conferences, and product launches. AI ensures every fan and attendee gets instant support.",
    challenges: [
      "High volume of ticketing enquiries during peak times",
      "Managing event schedules and FAQ requests",
      "Handling cancellations and refunds efficiently",
      "Coordinating attendee communications"
    ],
    solutions: {
      aqionVox: [
        "Instant response to ticketing enquiries for big music festivals and events",
        "Automated FAQ handling for event details (parking, schedules, prohibited items)",
        "WhatsApp automation for attendee updates",
        "Multilingual support for international events"
      ],
      aiAutomation: [
        "Automated refund and cancellation processing",
        "Vendor and sponsor coordination workflows",
        "Post-event feedback collection"
      ]
    },
    outcome: [
      "Zero wait times for ticketing support",
      "Seamless attendee experience",
      "Reduced load on human support staff during peak spikes",
      "Higher engagement and satisfaction rates"
    ],
    ctaText: "Deploy AI for Smarter Event Management"
  },
  [PageType.INDUSTRY_ARCHITECTURE]: {
    title: "Architecture & Planning",
    headline: "AI-Driven Efficiency for Architecture & Planning Firms",
    context: "Architecture and planning firms manage complex projects, approvals, client communication, and coordination between multiple stakeholders. AI enables these firms to automate communication, streamline documentation, and improve project visibility.",
    challenges: [
      "High volume of project enquiries",
      "Missed calls from potential clients",
      "Manual documentation workflows",
      "Complex approval processes",
      "Coordination between design teams and stakeholders",
      "Time-consuming reporting"
    ],
    solutions: {
      aqionVox: [
        "24/7 enquiry handling in Arabic & English",
        "Automatic qualification of project enquiries",
        "Consultation booking automation",
        "Missed call recovery",
        "Client follow-up automation"
      ],
      aiAutomation: [
        "Digital approval routing",
        "Permit application tracking",
        "Internal review workflows",
        "RFI management automation",
        "Automated proposal generation",
        "Contract workflow management",
        "Vendor coordination processes"
      ],
      enterpriseAi: [
        "Private GPT for technical knowledge queries",
        "AI-powered design document search",
        "Secure AI infrastructure deployment",
        "Compliance-ready AI governance frameworks"
      ]
    },
    outcome: [
      "Faster client onboarding",
      "Reduced administrative workload",
      "Improved project visibility",
      "Better stakeholder communication",
      "Scalable firm operations"
    ],
    ctaText: "Transform Architectural Operations with AI"
  }
};

// Keeping Product Data for Flagship and legacy references if needed
export const PRODUCT_DATA: Record<string, DetailPageData> = {
  [PageType.PRODUCT_AQIONVOX]: {
    title: "AQION VOX",
    subtitle: "The AI voice employee that answers calls, qualifies opportunities, supports customers and moves conversations to the next business action.",
    icon: Bot,
    sections: [
        {
            title: "What It Is",
            content: "AQION VOX is the first visible AI employee on AQION Cloud. It handles customer conversations, captures structured information and triggers approved workflows across your existing systems."
        }
    ],
    howAiIsLeveraged: [
        "Inbound and outbound conversation handling",
        "Approved company-knowledge answers",
        "CRM-ready call data capture",
        "Human handoff when judgment is needed"
    ],
    differentiation: [
        "Conversation to action: calls become leads, bookings, summaries or escalations.",
        "Regional workflows: Arabic and English customer conversations.",
        "Shared platform: VOX runs on the same AQION Cloud foundation as the rest of the AI workforce."
    ],
    useCases: [
        { title: "Real Estate", items: ["Lead qualification", "Viewing scheduling"] },
        { title: "Healthcare", items: ["Patient intake", "Appointment reminders"] },
        { title: "Logistics", items: ["Delivery coordination", "Driver support"] }
    ],
    pricing: [
        { name: "Start", price: "Custom", features: ["Voice call workflows", "Lead capture", "Call summaries"] },
        { name: "Growth", price: "Custom", features: ["Voice CRM", "Calendar booking", "Email updates"], highlight: true },
        { name: "Enterprise", price: "Custom", features: ["Integration review", "Custom workflows", "Deployment controls"] }
    ]
  },
  // Legacy Data retained for fallback types
  [PageType.PRODUCT_CRM]: { title: "Legacy CRM", subtitle: "", sections: [] },
  [PageType.PRODUCT_ERP]: { title: "Legacy ERP", subtitle: "", sections: [] },
  [PageType.PRODUCT_WHATSAPP]: { title: "Legacy WhatsApp", subtitle: "", sections: [] },
  [PageType.PRODUCT_CALLER]: { title: "Legacy Caller", subtitle: "", sections: [] },
  [PageType.PRODUCT_AVATAR_INTERACTIVE]: { title: "Legacy Avatar", subtitle: "", sections: [] },
};

export const AGENT_DATA: Record<string, DetailPageData> = {
  [PageType.AGENT_CUSTOMER_SUPPORT]: {
    title: "AQION VOX",
    kicker: "Customer conversations",
    accent: "#4F46E5",
    subtitle: "An AI voice employee that answers calls, qualifies opportunities, supports customers and moves conversations to the next business action — 24/7.",
    icon: Headphones,
    showcase: {
      kind: 'screenshots',
      eyebrow: 'Inside the product',
      title: 'AQION VOX, running live.',
      body: 'Every call can land here: the lead captured, the meeting booked, the transcript retained and the summary emailed to the right team.',
      cta: { label: 'See the full AQION VOX product', href: '/products/aqion-voice' },
      images: [
        { src: '/aqion-voice-dashboard-overview.png', caption: 'Overview' },
        { src: '/aqion-voice-dashboard-leads.png', caption: 'Leads' },
        { src: '/aqion-voice-dashboard-meetings.png', caption: 'Meetings' },
        { src: '/aqion-voice-dashboard-transcripts.png', caption: 'Transcripts' },
        { src: '/aqion-voice-dashboard-email-updates.png', caption: 'Email updates' },
      ],
    },
    sections: [
      {
        title: "From hello to next step",
        content: "AQION VOX is an AI voice employee that answers calls, qualifies opportunities, supports customers and moves the conversation to the next business action — 24/7. Inbound and outbound workflows run from approved knowledge, defined rules and clear escalation boundaries."
      },
      {
        title: "Make every call useful",
        content: "Vox captures structured information during the conversation and triggers the workflow that should follow: create a lead, schedule an appointment, notify a team member, update a system or escalate to a person. Missed calls stop being lost opportunities."
      },
      {
        title: "Know when to hand over",
        content: "Define when Vox should resolve a conversation, ask another question, trigger an action or transfer to a human. AI handles the repeatable work; your team stays available for judgment, negotiation and high-value conversations."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "24/7 call handling", description: "Inbound and outbound calling workflows in Gulf Arabic or English." },
      { title: "Qualify & book", description: "Lead qualification, appointment and meeting booking captured in the call." },
      { title: "Knowledge answers", description: "Company-knowledge responses and CRM/customer-data capture." },
      { title: "Human handoff", description: "Transfer and escalation with transcript, intent and record attached." }
    ]
  },

  [PageType.AGENT_KNOWLEDGE]: {
    title: "AQION BRAIN",
    kicker: "Business knowledge",
    accent: "#0EA5E9",
    subtitle: "Turn company documents, policies, product information and operational knowledge into trusted answers available across your organization.",
    icon: Brain,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From question to cited answer.',
      body: 'Staff ask in plain language. The agent retrieves from your own documents, checks permission, and answers with the source attached.',
      steps: [
        { label: 'Question asked', detail: 'Plain language, Arabic or English, from chat or the intranet.' },
        { label: 'Scope checked', detail: 'Access is matched to the person’s role before anything is read.' },
        { label: 'Grounded retrieval', detail: 'The answer is assembled from your documents, not from open training data.' },
        { label: 'Answer with source', detail: 'Delivered in seconds, with the file and version it came from.' },
      ],
    },
    sections: [
      {
        title: "Your company knowledge, ready to work",
        content: "AQION BRAIN turns the policies, SOPs, contracts, product information and operational knowledge scattered across drives and inboxes into trusted answers your team and other AI employees can simply ask for. Retrieval is grounded, so answers cite the source document rather than inventing one."
      },
      {
        title: "Stop searching. Start asking.",
        content: "Instead of hunting through folders, messages and old documents, employees can ask Brain directly and get an answer grounded in approved company sources. The questions that quietly consume senior people's days get absorbed."
      },
      {
        title: "Permission-aware by design",
        content: "Access mirrors your existing structure. Finance documents answer to finance, HR to HR. The agent declines rather than leaks, and every answer is traceable back to the document and the version it came from — a trusted knowledge source for the rest of your AI workforce."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Document ingestion", description: "PDFs, SOPs, policies, decks and product and service knowledge." },
      { title: "Source-linked answers", description: "Contextual responses with the file and version attached." },
      { title: "Permission-aware access", description: "Respects existing permission boundaries per department." },
      { title: "Content lifecycle", description: "Knowledge updates and re-indexing so answers do not go stale." }
    ]
  },

  [PageType.AGENT_WORKFORCE]: {
    title: "AQION OPS",
    kicker: "Operations",
    accent: "#F59E0B",
    subtitle: "Coordinate routine operational work across requests, tickets, assignments, approvals and follow-ups — so nothing stalls waiting on a chase.",
    icon: Wrench,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From request to closed-out work.',
      body: 'A request arrives on any channel and leaves as closed work, with the triage, routing and chasing handled in between.',
      steps: [
        { label: 'Request lands', detail: 'Call, WhatsApp, form or email, classified by urgency and service type.' },
        { label: 'Triaged and routed', detail: 'A work order is created and assigned by skill, load and proximity.' },
        { label: 'Confirmed and chased', detail: 'Status collected, SLA and escalation workflows triggered before a slot is lost.' },
        { label: 'Closed out', detail: 'Completion captured and signed off, then passed to the next system.' },
      ],
    },
    sections: [
      {
        title: "AI coordination for everyday operations",
        content: "AQION OPS takes an inbound request — call, form or email — triages it, creates the work order, and routes it to the right owner with the right priority. The coordinator stops being a routing switchboard."
      },
      {
        title: "Reduce the follow-up tax",
        content: "Ops tracks the repetitive coordination work that consumes managers' time: who owns the task, what is waiting, what is overdue and what should happen next. Confirmations, reminders and escalations that get skipped when the office is busy simply happen."
      },
      {
        title: "Standardize the routine",
        content: "SLA workflows, approval coordination and operational summaries run the same way every time. Manual handoffs drop, response times improve, and every step leaves a visible trail."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Intake and triage", description: "Classifies urgency and service type from a free-text request." },
      { title: "Assignment and routing", description: "Work-order creation matched to the right owner." },
      { title: "SLA and escalation", description: "Status collection with escalation before a deadline slips." },
      { title: "Approval coordination", description: "Operational alerts, summaries and sign-off tracking." }
    ]
  },

  [PageType.AGENT_FINANCE]: {
    title: "AQION FIN",
    kicker: "Finance operations",
    accent: "#10B981",
    subtitle: "Automate repetitive finance administration, collections follow-up and document workflows — so finance teams can focus on judgment and control.",
    icon: Receipt,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From document to reconciled ledger.',
      body: 'Invoices and receipts arrive as PDFs and photos. They leave as matched, filed and chased records — with people approving what matters.',
      steps: [
        { label: 'Document in', detail: 'Invoice, PO or delivery note, from email or a photo on the site.' },
        { label: 'Fields extracted', detail: 'Line items, totals, dates and party details read and structured.' },
        { label: 'Matched and flagged', detail: 'Checked against the order and receipt; exceptions surfaced for review.' },
        { label: 'Chased and routed', detail: 'Tiered bilingual reminders and approval routing, with people in control.' },
      ],
    },
    sections: [
      {
        title: "Let AI handle the repetitive finance workload",
        content: "AQION FIN handles invoice and document capture, accounts-receivable follow-up, payment-status reminders and document extraction. It tracks what is owed, when it aged and who to chase, so cash comes in earlier without anyone making the uncomfortable call."
      },
      {
        title: "Built around review and approval",
        content: "High-impact financial decisions stay under appropriate human controls. Fin prepares, routes, follows up and highlights exceptions rather than silently making material financial decisions."
      },
      {
        title: "Synced to your systems",
        content: "Documents match against the order, mismatches are flagged, and records sync to your ERP and accounting systems where finance expects them. Three-way matching stops being a manual afternoon."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Document capture", description: "Field-level extraction from invoices, POs and delivery notes." },
      { title: "Receivables follow-up", description: "Aged-debt tracking with tiered, bilingual reminders." },
      { title: "Exception flagging", description: "Mismatches surfaced for human review and approval routing." },
      { title: "ERP synchronization", description: "Records synced to accounting and ERP systems." }
    ]
  },

  [PageType.AGENT_REVENUE]: {
    title: "AQION PROCURE",
    kicker: "Procurement",
    accent: "#EC4899",
    subtitle: "Automate repetitive procurement administration from request and RFQ through approval and supplier follow-up — while keeping commercial decisions with people.",
    icon: TrendingUp,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From request to purchase, faster.',
      body: 'The agent prepares information and coordinates suppliers while people keep control of selection and commitments.',
      steps: [
        { label: 'Request in', detail: 'Purchase-request intake captured and structured from any channel.' },
        { label: 'RFQ prepared', detail: 'Requirements extracted, suppliers contacted, quotes gathered.' },
        { label: 'Compared', detail: 'Structured vendor comparison on landed cost, lead time and reliability.' },
        { label: 'Routed for approval', detail: 'Purchase order handed off through your approval chain, with audit history.' },
      ],
    },
    sections: [
      {
        title: "Less chasing. More controlled purchasing.",
        content: "AQION PROCURE prepares purchase requests and RFQs, coordinates supplier communication, extracts quotes and builds structured comparisons. The administrative work that took a day of someone's week compresses into a review."
      },
      {
        title: "Automate administration, not accountability",
        content: "Procure moves requests through defined approval stages while preserving human control over supplier selection, commitments and exceptions. Purchasing gets faster without losing oversight."
      },
      {
        title: "A clearer procurement record",
        content: "Every request, quote comparison and approval is logged with audit history. Pending approvals are visible, manual supplier follow-up drops, and purchasing records stop living in scattered inboxes."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Request and RFQ intake", description: "Purchase-request capture and RFQ preparation." },
      { title: "Supplier workflows", description: "Communication, quote extraction and follow-up." },
      { title: "Vendor comparison", description: "Structured comparison on landed cost and lead time." },
      { title: "Approval routing", description: "Purchase-order handoff with audit history." }
    ]
  },

  [PageType.AGENT_EXECUTIVE]: {
    title: "AQION CHIEF",
    kicker: "Executive intelligence",
    accent: "#8B5CF6",
    subtitle: "Helps leaders understand what changed, what matters and what needs attention — without waiting for another manual report.",
    icon: Briefcase,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From scattered systems to one brief.',
      body: 'The agent reads across the business overnight and tells you what actually needs you.',
      steps: [
        { label: 'Systems read', detail: 'Sales, operations, finance and support, pulled together without you asking.' },
        { label: 'Exceptions surfaced', detail: 'What broke pattern, rather than a dashboard of everything that is fine.' },
        { label: 'Brief delivered', detail: 'The short version before the day starts, with the detail one question away.' },
        { label: 'Chased to done', detail: 'Decisions captured, assigned, and followed up until they close.' },
      ],
    },
    sections: [
      {
        title: "Your business, summarized around decisions",
        content: "AQION CHIEF reads across the systems you already run — sales, operations, finance, support — and gives you the short version before the day starts. Daily briefings, KPI summaries, meeting preparation and decision briefs, instead of a dashboard you have to go and interrogate."
      },
      {
        title: "Focus on exceptions, not dashboards",
        content: "Chief is designed to surface what changed and where management attention is required, instead of forcing leaders to manually inspect every system. Exception and risk alerts reach you before they become problems."
      },
      {
        title: "Follow-through that holds",
        content: "Decisions made in a meeting tend to evaporate. The agent captures the commitment, assigns it, chases it, and tells you when it has not moved — the chief-of-staff function, running continuously."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Executive briefings", description: "Daily and weekly synthesis across sales, ops and finance." },
      { title: "Cross-system questions", description: "Natural-language answers against live business data." },
      { title: "Exception alerting", description: "Surfaces what broke pattern, and where attention is needed." },
      { title: "Action tracking", description: "Captures decisions and chases them to closure." }
    ]
  },

  [PageType.AGENT_GROWTH]: {
    title: "AQION GROWTH",
    kicker: "Growth & marketing",
    accent: "#F43F5E",
    subtitle: "Create, coordinate, personalize and measure marketing activity while keeping brand approval in human hands.",
    icon: Share2,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From brief to published, with you in the loop.',
      body: 'The agent drafts across channels and schedules the calendar. Nothing goes public without a human approving it.',
      steps: [
        { label: 'Brief in', detail: 'Positioning, tone and proof points learned from what you have already published.' },
        { label: 'Drafts generated', detail: 'Social, email, landing and ad variants, in Arabic and English.' },
        { label: 'You approve', detail: 'Every asset waits for a human click. The agent proposes; you decide.' },
        { label: 'Published', detail: 'Scheduled per channel, with performance fed back into the next round.' },
      ],
    },
    sections: [
      {
        title: "From campaign idea to consistent execution",
        content: "AQION GROWTH handles content drafting, campaign planning, CRM audience segmentation, email and messaging campaigns and social-content repurposing — in Arabic and English. The output is a first draft good enough to edit, not a blank page."
      },
      {
        title: "Keep the brand human. Automate the workload around it.",
        content: "Growth handles preparation, personalization, scheduling and lead-nurture follow-up while your team stays responsible for strategy, voice and final approval. Campaign output goes up without brand governance going down."
      },
      {
        title: "Approval before anything is public",
        content: "Nothing publishes without a human clicking approve. The agent proposes; you decide. That boundary is deliberate — brand risk is not worth the saved minute — and performance summaries feed the next round."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Multichannel drafting", description: "Social media, email, landing and ad copy, bilingual." },
      { title: "Campaign planning", description: "Audience segmentation and lead-nurture workflows." },
      { title: "Video repurposing", description: "Long-form cut to short-form with hooks and captions." },
      { title: "Human approval loop", description: "Nothing ships without explicit sign-off." }
    ]
  }
};

export const PLATFORM_SERVICE_DATA: Record<string, DetailPageData> = {
  [PageType.SERVICE_WEB_STUDIO]: {
    title: "AQION Cloud",
    titleBlackPart: "AQION",
    subtitle: "One platform. An entire AI workforce. AQION Cloud gives every AI employee the intelligence, business memory, workflows and enterprise foundation it needs to work across your organization.",
    icon: LayoutTemplate,
    sections: [
      {
        title: "The operating layer behind every AQION employee",
        content: "Instead of building isolated AI bots for every department, AQION Cloud provides shared capabilities that power an entire workforce: an AI Runtime that decides what should happen, Business Memory that gives every employee organizational context, and a Workflow Engine that executes approved actions across the systems you already run."
      },
      {
        title: "One employee learns. The platform gets stronger.",
        content: "Shared infrastructure means new AQION employees do not recreate integrations, business context and workflow logic from zero. The platform becomes more valuable as more of the organization is connected."
      },
      {
        title: "Built for enterprise evolution",
        content: "Start with managed cloud infrastructure. Add stricter data controls, private deployment paths and sovereign-AI options as the organization and regulatory requirements evolve — UAE deployment options, auditability, role-based controls, human approval, model flexibility and integration APIs."
      }
    ],
    featuresTitle: "Inside AQION Cloud",
    features: [
      { title: "AI Runtime", description: "Think · Decide · Coordinate. Role, goals, context and guardrails for each employee." },
      { title: "Business Memory", description: "Know · Remember · Understand. Shared customers, conversations, documents and data." },
      { title: "Workflow Engine", description: "Automate · Integrate · Execute. Turns decisions into approved actions across systems." },
      { title: "Enterprise Infrastructure", description: "Secure · Govern · Scale. Isolation, access control and UAE deployment options." }
    ]
  },

  [PageType.SERVICE_SOVEREIGN_INFRA]: {
    title: "Sovereign Infrastructure Deployment",
    titleBlackPart: "Sovereign Infrastructure",
    subtitle: "The enterprise deployment path for private models, retrieval and observability — with UAE data-residency options for supported workloads.",
    icon: Server,
    sections: [
      {
        title: "Data-residency options",
        content: "AQION supports UAE-hosted deployment options for supported workloads. Exact processing locations depend on the products, AI models, communications providers and deployment configuration selected for your organization."
      },
      {
        title: "Processing choice",
        content: "Workloads can be scoped across managed cloud, approved AI providers, UAE-oriented configurations or private deployment paths as enterprise requirements evolve."
      },
      {
        title: "Sovereign AI roadmap",
        content: "The architecture is designed to evolve toward private and sovereign AI deployment models as regulated and mission-critical requirements grow."
      }
    ],
    featuresTitle: "What we deploy",
    features: [
      { title: "Private deployment paths", description: "VPC and private infrastructure options where the workload requires stricter boundaries." },
      { title: "Retrieval layer", description: "Vector store, chunking and grounding pipeline you own." },
      { title: "Observability", description: "Tracing, evaluation and audit logs on every agent action." },
      { title: "Enterprise controls", description: "Role-based access, auditability, retention planning and human approval patterns." }
    ]
  },

  [PageType.SERVICE_AI_STRATEGY]: {
    title: "AI Strategy & Discovery",
    titleBlackPart: "AI Strategy",
    subtitle: "A one-week diagnostic that ends in a deployment plan, not a slide deck — including what is not worth doing yet.",
    icon: Compass,
    sections: [
      {
        title: "One week, real access",
        content: "We sit with the people doing the work, watch the actual workflows, and read the actual systems. Not a workshop where everyone describes an idealised version of the process — the real one, with the spreadsheet nobody mentions in meetings."
      },
      {
        title: "Sized, not hand-waved",
        content: "Each candidate workflow gets a number: hours consumed today, realistic automation share, and the integration work required. That is what separates a plan from a wish list, and it is what tells you which two things to do first."
      },
      {
        title: "What not to build",
        content: "The most valuable output is often the list of things to leave alone — workflows where the data is not ready, the volume does not justify it, or a rules engine would beat an agent. We would rather tell you that in week one than bill you for it in month six."
      }
    ],
    featuresTitle: "What you get",
    features: [
      { title: "Workflow map", description: "Where time and margin actually go, observed rather than reported." },
      { title: "Prioritised backlog", description: "Ranked by return and integration effort, not novelty." },
      { title: "Costed plan", description: "Fixed-price deployment path for the first two workflows." },
      { title: "Honest exclusions", description: "What to defer, and the condition that would change that." }
    ]
  }
};
