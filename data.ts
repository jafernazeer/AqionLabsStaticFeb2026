
import { DetailPageData, PageType, IndustryPageData } from './types';
import { 
  BookOpen, Bot, Globe, Handshake, Headphones, Megaphone, Server, Workflow
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
        "Aqion Engage Inventory enquiry",
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
        "Aqion Engage Citizen enquiry automation"
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
    ctaText: "Infographic showing how Aqion Engage will help the Financial sector industry to deal with customer enquiries"
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
    ctaText: "Infographic showing how Aqion Engage will help the hospitality industry to deal with customer enquiries"
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
    ctaText: "Infographic showing how Aqion Engage will help the Logistics & Transportation Firms to deal with customer service"
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
    title: "Aqion Engage",
    subtitle: "The AI customer support agent that answers, qualifies, and converts. Generating Revenue 24/7.",
    icon: Bot,
    sections: [
        {
            title: "What It Is",
            content: "Aqion Engage is a flagship all-in-one AI workforce platform. It combines voice capabilities, WhatsApp automation, and CRM intelligence into a single entity that acts as your best employee—one that never sleeps."
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
