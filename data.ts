
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
    subtitle: "Private LLMs, retrieval, evals, and observability — inside your VPC, with UAE data residency by default.",
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
        title: "UAE data residency by default",
        content: "We design for UAE and GCC hosting patterns, VPC deployments, strict data boundaries, and operational controls that account for UAE PDPL, the UAE AI Charter, UAE IA expectations, and NCEMA business-continuity standards."
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
    context: "Hospitals and clinics face high call volumes, appointment delays, and administrative overload.",
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
    context: "Real Estate Firms & Builders face high volume of unqualified leads and missed enquiries.",
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
    context: "The Education Sector faces high admission enquiry volume and manual tracking issues.",
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
        "Aqion Vox Inventory enquiry",
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
        "Aqion Vox Citizen enquiry automation"
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
    context: "Financial institutions require high-security AI solutions for customer onboarding and advisory.",
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
    ctaText: "Infographic showing how Aqion Vox will help the Financial sector industry to deal with customer enquiries"
  },
  [PageType.INDUSTRY_HOSPITALITY]: {
    title: "Hospitality",
    headline: "Elevate Guest Experience with AI Automation",
    context: "The Hospitality industry needs 24/7 guest support and booking automation.",
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
    ctaText: "Infographic showing how Aqion Vox will help the hospitality industry to deal with customer enquiries"
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
    ctaText: "Infographic showing how Aqion Vox will help the Logistics & Transportation Firms to deal with customer service"
  },
  [PageType.INDUSTRY_PROFESSIONAL]: {
    title: "Legal Services",
    headline: "AI for Legal and Consulting",
    context: "Legal services firms need efficient client communication and knowledge management.",
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
      "Missed client calls and WhatsApp messages",
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
    title: "Aqion Vox",
    subtitle: "The AI customer support agent that answers, qualifies, and converts. Generating Revenue 24/7.",
    icon: Bot,
    sections: [
        {
            title: "What It Is",
            content: "Aqion Vox is a flagship all-in-one AI workforce platform. It combines voice capabilities, WhatsApp automation, and CRM intelligence into a single entity that acts as your best employee—one that never sleeps."
        }
    ],
    howAiIsLeveraged: [
        "End-to-end autonomous conversation handling",
        "Real-time voice synthesis with <500ms latency",
        "Deep CRM injection of conversation data",
        "Predictive lead scoring based on voice tone and text sentiment"
    ],
    differentiation: [
        "Unified Platform: Voice + Text + CRM in one.",
        "UAE Optimized: Dialect-aware Arabic processing.",
        "Revenue Focused: Built to close deals, not just chat."
    ],
    useCases: [
        { title: "Real Estate", items: ["Lead qualification", "Viewing scheduling"] },
        { title: "Healthcare", items: ["Patient intake", "Appointment reminders"] },
        { title: "Logistics", items: ["Delivery coordination", "Driver support"] }
    ],
    pricing: [
        { name: "Start", price: "Custom", features: ["WhatsApp AI", "Basic CRM"] },
        { name: "Growth", price: "Custom", features: ["Voice Agent", "Full CRM", "Calendar Booking"], highlight: true },
        { name: "Enterprise", price: "Custom", features: ["Dedicated Instances", "Custom API Integrations"] }
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
    title: "CX Agents",
    subtitle: "Voice, WhatsApp and web — one agent across every channel a customer actually uses, in Arabic and English.",
    icon: Headphones,
    showcase: {
      kind: 'screenshots',
      eyebrow: 'Inside the product',
      title: 'Aqion Vox, running live.',
      body: 'Every call the agent takes lands here: the lead it captured, the meeting it booked, the transcript it kept and the summary it emailed you. These are captures from the deployed product, not concept art.',
      cta: { label: 'See the full Aqion Vox product', href: '/products/aqion-voice' },
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
        title: "Every channel, one brain",
        content: "Aqion Vox answers the phone, replies on WhatsApp and handles web chat from a single knowledge base and a single set of rules. A customer who calls, then messages an hour later, is not starting over — the agent already knows the conversation."
      },
      {
        title: "Answer, qualify, book, follow up",
        content: "It does not just deflect tickets. It qualifies the enquiry, books the appointment straight into the calendar, captures the lead into CRM, and follows up if the customer goes quiet. Missed calls stop being lost revenue."
      },
      {
        title: "Escalation that respects the customer",
        content: "When the agent hits the edge of what it should decide, it hands to a human with the full transcript and context attached — no repeating, no re-explaining. Your team picks up mid-conversation instead of cold."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Inbound voice", description: "Picks up 24/7, in Gulf Arabic or English, with sub-second turn latency." },
      { title: "WhatsApp", description: "Two-way conversation, media, and booking links on the channel the UAE actually uses." },
      { title: "Web chat", description: "Same agent embedded on the site, with full session and CRM context." },
      { title: "Human handoff", description: "Escalates with transcript, intent and customer record attached." }
    ]
  },

  [PageType.AGENT_KNOWLEDGE]: {
    title: "Knowledge Agents",
    subtitle: "Company brain and internal chatbots — every policy, SOP and contract answered in seconds, not three emails.",
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
        title: "Your documents, actually usable",
        content: "Aqion Brain ingests the policies, SOPs, contracts, price lists and past project files scattered across drives and inboxes, and turns them into something staff can simply ask a question of. Retrieval is grounded, so answers cite the source document rather than inventing one."
      },
      {
        title: "Built for what staff actually ask",
        content: "\"What is the leave policy for a probation employee?\" \"What did we quote this client last year?\" \"Which supplier has the shorter lead time?\" These are the questions that quietly consume senior people's days. The agent absorbs them."
      },
      {
        title: "Permissions that hold",
        content: "Access mirrors your existing structure. Finance documents answer to finance, HR to HR. The agent will decline rather than leak, and every answer is traceable back to the document and the version it came from."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Grounded retrieval", description: "Answers cite source documents; no ungrounded generation." },
      { title: "Role-aware access", description: "Respects existing permission boundaries per department." },
      { title: "Multi-format ingest", description: "PDFs, spreadsheets, decks, email threads and wiki pages." },
      { title: "Freshness", description: "Re-indexes as documents change, so answers do not go stale." }
    ]
  },

  [PageType.AGENT_WORKFORCE]: {
    title: "Workforce Agents",
    subtitle: "Job dispatch, tickets and site operations — routed, chased and closed without anyone rekeying a thing.",
    icon: Wrench,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From request to signed-off job.',
      body: 'A request arrives on any channel and leaves as a closed job, with the confirmations and chasing handled in between.',
      steps: [
        { label: 'Request lands', detail: 'Call, WhatsApp, form or email, classified by urgency and service type.' },
        { label: 'Job created', detail: 'Matched to the technician by skill, load and proximity, then scheduled.' },
        { label: 'Confirmed and chased', detail: 'Customer and crew reminded, with no-show flagged before the slot is lost.' },
        { label: 'Closed out', detail: 'Completion notes, photos and sign-off captured, then passed to invoicing.' },
      ],
    },
    sections: [
      {
        title: "From request to dispatched job",
        content: "Aqion Desk takes an inbound request — call, WhatsApp, form or email — and turns it into a scheduled job with the right technician, the right slot and the right parts noted. The coordinator stops being a routing switchboard."
      },
      {
        title: "Confirmation and chasing",
        content: "It confirms with the customer, reminds the crew, re-confirms the morning of, and flags no-shows before they cost you the slot. The follow-up work that gets skipped when the office is busy simply happens."
      },
      {
        title: "Site operations closure",
        content: "After the visit it collects completion notes, photos and sign-off, updates the job record, and triggers invoicing. Jobs stop sitting half-closed in someone's notebook for a fortnight."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Intake and triage", description: "Classifies urgency, service type and location from a free-text request." },
      { title: "Dispatch", description: "Matches job to technician by skill, load and proximity." },
      { title: "Confirmations", description: "Customer and crew reminders, with no-show detection." },
      { title: "Closure", description: "Completion capture, sign-off and handoff to invoicing." }
    ]
  },

  [PageType.AGENT_FINANCE]: {
    title: "Finance & Back-Office Agents",
    subtitle: "Collections, document handling and UAE e-invoicing readiness — the back office that reconciles itself.",
    icon: Receipt,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From document to reconciled ledger.',
      body: 'Invoices and receipts arrive as PDFs and photos. They leave as matched, filed and chased records.',
      steps: [
        { label: 'Document in', detail: 'Invoice, PO or delivery note, from email or a photo on the site.' },
        { label: 'Fields extracted', detail: 'Line items, totals, dates and party details read and structured.' },
        { label: 'Matched', detail: 'Checked three ways against the order and the receipt; mismatches flagged.' },
        { label: 'Chased to paid', detail: 'Tiered bilingual reminders, escalating to a human before the relationship strains.' },
      ],
    },
    sections: [
      {
        title: "Collections without the awkwardness",
        content: "Aqion Ledger tracks what is owed, when it aged, and who to chase. It sends the polite reminder on day seven and the firmer one on day thirty, in the customer's language, and escalates to a human before the relationship is at risk. Cash comes in earlier without anyone having to make the uncomfortable call."
      },
      {
        title: "Documents that file themselves",
        content: "Invoices, purchase orders, delivery notes and receipts arrive as PDFs and photos. The agent extracts the fields, matches them against the order, flags mismatches, and files them where finance expects. Three-way matching stops being a manual afternoon."
      },
      {
        title: "UAE e-invoicing readiness",
        content: "The UAE's e-invoicing mandate changes how invoices must be structured, transmitted and archived. We build the pipeline so your invoice data is already in the shape the regime expects — schema, validation and archival — rather than scrambling at the deadline."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Receivables chasing", description: "Aged-debt tracking with tiered, bilingual reminder sequences." },
      { title: "Document extraction", description: "Field-level capture from invoices, POs and delivery notes." },
      { title: "Matching and exceptions", description: "Three-way matching with mismatches flagged for review." },
      { title: "E-invoicing readiness", description: "Schema, validation and archival aligned to the UAE mandate." }
    ]
  },

  [PageType.AGENT_REVENUE]: {
    title: "Revenue Agents",
    subtitle: "Speed-to-lead, RFQ-to-quote and procurement — both sides of the deal, handled at machine speed.",
    icon: TrendingUp,
    showcase: {
      kind: 'flow',
      eyebrow: 'How it runs',
      title: 'From enquiry to quote, in minutes.',
      body: 'Speed decides who wins the deal. The agent answers while intent is still high, then does the paperwork.',
      steps: [
        { label: 'Lead lands', detail: 'Any channel, any hour, answered in seconds rather than the next morning.' },
        { label: 'Qualified', detail: 'Budget, timeline, scope and authority captured in the conversation.' },
        { label: 'Quote drafted', detail: 'RFQ or tender parsed, priced from catalogue and past deals, routed for approval.' },
        { label: 'Meeting booked', detail: 'Placed in the calendar with context, and the CRM updated behind it.' },
      ],
    },
    sections: [
      {
        title: "Speed-to-lead",
        content: "The single largest determinant of whether an inbound lead converts is how fast you respond. Aqion Procure answers in seconds, not hours — qualifying, capturing requirements and booking the meeting while the buyer is still interested. Leads that arrive at 11pm on a Friday are handled at 11pm on a Friday."
      },
      {
        title: "RFQ to quote",
        content: "On the sell side it reads the incoming RFQ or tender, pulls the relevant line items and past pricing, drafts the quote, and routes it for approval. The work that took a day of someone's week compresses into a review."
      },
      {
        title: "Procurement, the buy side",
        content: "It sources suppliers, compares quotes on landed cost rather than headline price, and routes purchase orders through your approval chain. The same agent that helps you sell also helps you buy well."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Instant lead response", description: "Qualifies and books while intent is still high." },
      { title: "RFQ and tender parsing", description: "Extracts line items, specs and deadlines from documents." },
      { title: "Quote drafting", description: "Builds priced quotes from catalogue and historical deals." },
      { title: "Supplier sourcing", description: "Comparison on landed cost, lead time and reliability." }
    ]
  },

  [PageType.AGENT_EXECUTIVE]: {
    title: "Executive AI Agents",
    subtitle: "A Jarvis-style agent for owners and senior management — briefings, decisions and follow-through with the whole business behind it.",
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
        title: "The morning brief",
        content: "Aqion Chief reads across the systems you already run — sales, operations, finance, support — and gives you the short version before the day starts. What moved, what slipped, what needs you specifically. Not a dashboard you have to go and interrogate."
      },
      {
        title: "Ask anything about your own business",
        content: "\"Why did margin drop in the Sharjah branch last month?\" \"Which clients have not been contacted in ninety days?\" The agent has the access to answer, and the judgment to tell you when the data does not actually support a conclusion."
      },
      {
        title: "Follow-through",
        content: "Decisions made in a meeting tend to evaporate. The agent captures the commitment, assigns it, chases it, and tells you when it has not moved. It is the chief of staff function, running continuously."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Cross-system briefing", description: "Daily and weekly synthesis across sales, ops and finance." },
      { title: "Ad-hoc analysis", description: "Natural-language questions answered against live business data." },
      { title: "Commitment tracking", description: "Captures decisions and chases them to closure." },
      { title: "Exception alerting", description: "Surfaces what broke pattern, rather than reporting everything." }
    ]
  },

  [PageType.AGENT_GROWTH]: {
    title: "Growth Agents",
    subtitle: "Omnichannel copy, video and distribution — with a human approval loop before anything ships.",
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
        title: "Copy that sounds like you",
        content: "Aqion Social learns your positioning, tone and proof points, then drafts across channels — social, email, landing pages, ad variants — in Arabic and English. The output is a first draft good enough to edit, not a blank page."
      },
      {
        title: "Video and distribution",
        content: "It cuts long-form material into short-form, writes the hooks and captions, and schedules distribution per channel. The content calendar stops depending on one person having a free afternoon."
      },
      {
        title: "Approval before anything is public",
        content: "Nothing publishes without a human clicking approve. The agent proposes; you decide. That boundary is deliberate — brand risk is not worth the saved minute."
      }
    ],
    featuresTitle: "What it handles",
    features: [
      { title: "Multichannel drafting", description: "Social, email, landing and ad copy, bilingual." },
      { title: "Video repurposing", description: "Long-form cut to short-form with hooks and captions." },
      { title: "Scheduling", description: "Channel-appropriate timing and cadence." },
      { title: "Human approval loop", description: "Nothing ships without explicit sign-off." }
    ]
  }
};

export const PLATFORM_SERVICE_DATA: Record<string, DetailPageData> = {
  [PageType.SERVICE_WEB_STUDIO]: {
    title: "AI-Ready Web Studio",
    subtitle: "Web and mobile designed and built to ship in weeks — and structured so agents can read, update and act on them from day one.",
    icon: LayoutTemplate,
    sections: [
      {
        title: "Not a brochure",
        content: "Most sites are built as static marketing artefacts, then have AI bolted on afterwards at three times the cost. We build the content model, the data layer and the integration points from the start, so adding an agent later is configuration rather than a rebuild."
      },
      {
        title: "Weeks, not quarters",
        content: "Design, engineering, integration and launch run as one tight cycle with a senior team. You see working software early and often, and the scope conversation happens against something real rather than a wireframe."
      },
      {
        title: "Instrumented from launch",
        content: "Analytics, funnels, lead capture, CRM sync and attribution are wired before go-live, not retrofitted after the first month of blind traffic. You know what the site is doing from the day it is public."
      }
    ],
    featuresTitle: "How we work",
    features: [
      { title: "Diagnose", description: "Map the journey, the revenue leak and the surfaces worth rebuilding first." },
      { title: "Ship", description: "Production-grade web or mobile, launched in tight cycles." },
      { title: "Instrument", description: "Analytics, CRM, lead capture and attribution wired from day one." },
      { title: "Agent-ready", description: "Content model and APIs structured for agents to read and act on." }
    ]
  },

  [PageType.SERVICE_SOVEREIGN_INFRA]: {
    title: "Sovereign Infrastructure Deployment",
    subtitle: "The ground your agents stand on. Private models, retrieval and observability inside your own boundary — with UAE data residency by default.",
    icon: Server,
    sections: [
      {
        title: "Data residency",
        content: "Application, database and all records live in me-central-1. Never replicated cross-region. This is a deployment fact you can audit, not a policy statement in a PDF."
      },
      {
        title: "Processing choice",
        content: "Inference runs on international providers under DPA, on UAE endpoints, or fully on-premise. You pick, per workload — and the agent behaves the same either way, because the choice sits behind an abstraction rather than in the application logic."
      },
      {
        title: "Portability",
        content: "Open frameworks and open-weight models. No vendor lock-in anywhere in the pipeline. If you want to move a workload to a different model or a different host in eighteen months, that is a config change, not a rewrite."
      }
    ],
    featuresTitle: "What we deploy",
    features: [
      { title: "Private inference", description: "In your VPC or on-premise, with UAE endpoint options." },
      { title: "Retrieval layer", description: "Vector store, chunking and grounding pipeline you own." },
      { title: "Observability", description: "Tracing, evaluation and audit logs on every agent action." },
      { title: "Compliance controls", description: "Residency, retention and access aligned to UAE expectations." }
    ]
  },

  [PageType.SERVICE_AI_STRATEGY]: {
    title: "AI Strategy & Discovery",
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
