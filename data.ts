
import { DetailPageData, PageType, IndustryPageData } from './types';
import { 
  Bot, Shield, MessageSquare, Workflow,
  Globe, Server
} from 'lucide-react';

// New AI Solutions Data
export const SERVICE_DATA: Record<string, DetailPageData> = {
  [PageType.SERVICE_RAPID_APP]: {
    title: "Web & Mobile Application Development",
    subtitle: "Accelerate digital transformation with secure, custom-built web and mobile applications delivered rapidly using advanced AI-driven development frameworks.",
    icon: Globe,
    sections: [
      {
        title: "Custom Web App Development",
        content: "Design and develop optimized Web browsing solutions. We build custom web apps, SaaS digital products, PWAs, and single-page solutions. Whether you're addressing UI/UX challenges, responsiveness, or performance optimization, we unleash the full power of Web Tech for you."
      },
      {
        title: "Mobile App Development",
        content: "Native, Cross-Platform, and Hybrid solutions built for the modern mobile ecosystem. From Native Android and iOS app development to Cross-platform engineering, we adapt deliverables to multiple OSs to meet your expectations."
      },
      {
        title: "Architecture & Scalability",
        content: "We employ a talent pool of Software Architects prepared to take care of performance, scalability, and reliability end-to-end. Working with us is the best way to secure a robust and flexible basis for your digital solutions."
      }
    ],
    featuresTitle: "Development Cycle",
    features: [
      { title: "Discovery Phase", description: "Requirements specification and initial research." },
      { title: "UX/UI Design", description: "Crafting intuitive and engaging interfaces." },
      { title: "Development", description: "Front-end and back-end engineering." },
      { title: "Launch & Scale", description: "Deployment, support, and continuous scaling." }
    ]
  },
  [PageType.SERVICE_CONVERSATIONAL_AI]: {
    title: "Conversational AI",
    subtitle: "Custom AI Chat, Avatar, and Voice Agent Systems.",
    icon: MessageSquare,
    sections: [
      {
        title: "Intelligent Chatbots",
        content: "Instant engagement is no longer optional. Our lightweight AI chat widgets sit perfectly on your website to greet every visitor, answer routine questions, and guide them to the right information instantly. Perfect for businesses needing immediate, low-latency support."
      },
      {
        title: "Human AI Avatars",
        content: "Text-based chatbots are functional, but they lack emotional connection. AqionLabs Human AI Avatars are hyper-realistic AI-powered avatars that interact with your users through voice, visuals, and text simultaneously. They provide a face-to-face experience that is digital yet deeply personal."
      },
      {
        title: "AqionVox: The Premium Solution",
        content: "For enterprise needs requiring Voice AI, WhatsApp Automation, Deep CRM Integration, and Autonomous Scheduling, we recommend upgrading to AqionVox—our flagship all-in-one AI workforce platform that combines voice capabilities, WhatsApp automation, and CRM intelligence."
      }
    ],
    featuresTitle: "Capabilities",
    features: [
      { title: "Multi-Modal Interaction", description: "Communicates via voice, text, and visual gestures." },
      { title: "Lead Capture", description: "Collects visitor details automatically." },
      { title: "Emotional Intelligence", description: "Detects user sentiment and adjusts tone." },
      { title: "Omnichannel", description: "Works on kiosks, web, and mobile." }
    ]
  },
  [PageType.SERVICE_AI_AUTOMATION]: {
    title: "AI Automation",
    subtitle: "Streamline workflows and operational processes.",
    icon: Workflow,
    sections: [
      {
        title: "Workflow Automation",
        content: "Workflow automation focuses on automating internal task flows between people and systems. Example: A customer submits a form, it routes automatically, approval is triggered, notification is sent, and data is recorded. No manual intervention.",
        bullets: [
          "Automated approval chains",
          "Digital document routing",
          "Smart task assignment",
          "CRM-triggered actions",
          "AI-based ticket routing"
        ]
      },
      {
        title: "Business Process Automation (BPA)",
        content: "BPA goes beyond tasks — it automates entire business processes across departments. Example: Customer onboarding, Claims processing, HR recruitment workflows, Procurement approval.",
        bullets: [
          "End-to-end process redesign",
          "AI-enhanced data validation",
          "Intelligent decision routing",
          "System integrations (ERP, CRM, HIS)"
        ]
      },
      {
        title: "AI-Driven Operational Optimization",
        content: "Using AI models to improve operational decision-making. Example: Predictive staffing, Demand forecasting, Automated reporting, Anomaly detection.",
        bullets: [
          "AI analytics dashboards",
          "Predictive models",
          "Smart alerts",
          "Performance optimization systems"
        ]
      }
    ],
    featuresTitle: "Business Impact",
    features: [
      { title: "Efficiency", description: "Faster internal response times and reduced operational errors." },
      { title: "Cost Reduction", description: "Lower administrative costs and reduced waste." },
      { title: "Scalability", description: "Scalable operations with clear accountability." },
      { title: "Intelligence", description: "Data-driven decisions and improved margins." }
    ]
  },
  [PageType.SERVICE_ENTERPRISE_AI]: {
    title: "Enterprise AI Solutions",
    subtitle: "Private GPT, secure AI deployments, knowledge systems.",
    icon: Server,
    sections: [
      {
        title: "Private GPT Development",
        content: "Your enterprise possesses a goldmine of data—PDFs, contracts, SOPs, and technical manuals. We build secure, Private GPT environments hosted within your infrastructure. We utilize RAG (Retrieval-Augmented Generation) technology to ingest your entire corporate knowledge base, allowing employees to chat with your data with zero risk of data leakage."
      },
      {
        title: "Secure AI Deployments",
        content: "We ensure your AI infrastructure is robust and secure. From on-premise deployments to private cloud environments, we architect systems that meet strict security standards and data sovereignty requirements."
      },
      {
        title: "Knowledge Systems",
        content: "Turn your static file storage into an active, conversational intelligence engine. New hires onboard faster, support teams answer queries instantly using accurate internal data, and legal/compliance teams can audit thousands of documents in minutes."
      }
    ],
    featuresTitle: "Development Capabilities",
    features: [
      { title: "Private GPT Build", description: "Custom LLM deployment secure from public training data." },
      { title: "RAG Implementation", description: "Connecting AI to your live documents, databases, and wikis." },
      { title: "Model Fine-Tuning", description: "Training models on your specific industry terminology and tone." },
      { title: "Multi-Modal Agents", description: "Systems that can generate text, analyze images, and read charts." }
    ]
  },
  [PageType.SERVICE_AI_STRATEGY]: {
    title: "AI Strategy, Governance & Advisory",
    subtitle: "AI readiness, advisory, compliance frameworks.",
    icon: Shield,
    sections: [
      {
        title: "AI Readiness Assessment",
        content: "Evaluating whether your organisation is prepared for AI adoption. We assess data maturity, infrastructure, security posture, organisational readiness, and regulatory exposure.",
        bullets: [
          "AI maturity score",
          "Risk assessment",
          "Opportunity mapping",
          "Executive Summary"
        ]
      },
      {
        title: "AI Implementation Roadmap",
        content: "A structured, phased deployment strategy preventing scattered AI experiments. Includes priority use cases, budget planning, timeline, risk mitigation plan, and ROI forecast."
      },
      {
        title: "Enterprise AI Advisory",
        content: "Ongoing advisory for AI architecture decisions, vendor selection, enterprise AI scaling, and board-level guidance. Ideal for large enterprises, semi-government, and regulated industries."
      },
      {
        title: "AI Governance & Compliance",
        content: "In regulated environments (healthcare, finance, government), governance is mandatory. We cover responsible AI frameworks, data privacy alignment, model risk management, AI policy development, audit trails, and ethical AI guidelines."
      }
    ],
    featuresTitle: "Why It Matters",
    features: [
      { title: "Risk Mitigation", description: "Prevent security risks, compliance issues, and reputational damage." },
      { title: "Strategic Alignment", description: "Ensure AI is implemented responsibly and aligned with business goals." },
      { title: "Compliance", description: "Adhere to strict data sovereignty and regulatory standards." },
      { title: "Future-Proofing", description: "Build a sustainable and scalable AI foundation." }
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
        "AqionVox Inventory enquiry",
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
        "AqionVox Citizen enquiry automation"
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
    ctaText: "Infographic showing how AqionVox will help the Financial sector industry to deal with customer enquiries"
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
    ctaText: "Infographic showing how AqionVox will help the hospitality industry to deal with customer enquiries"
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
    ctaText: "Infographic showing how AqionVox will help the Logistics & Transportation Firms to deal with customer service"
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
  }
};

// Keeping Product Data for Flagship and legacy references if needed
export const PRODUCT_DATA: Record<string, DetailPageData> = {
  [PageType.PRODUCT_AQIONVOX]: {
    title: "AqionVox",
    subtitle: "The AI customer support agent that answers, qualifies, and converts. Generating Revenue 24/7.",
    icon: Bot,
    sections: [
        {
            title: "What It Is",
            content: "AqionVox is a flagship all-in-one AI workforce platform. It combines voice capabilities, WhatsApp automation, and CRM intelligence into a single entity that acts as your best employee—one that never sleeps."
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
