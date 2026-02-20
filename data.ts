
import { DetailPageData, PageType } from './types';
import { 
  LayoutGrid, Bot, Shield, Video, Presentation, 
  MessageSquare, Phone, UserCheck, FolderKanban, Workflow,
  Globe, Smartphone
} from 'lucide-react';

// New AI Solutions Data
export const SERVICE_DATA: Record<string, DetailPageData> = {
  [PageType.SOLUTION_WEB_DEV]: {
    title: "Custom Web App Development",
    subtitle: "Design and develop optimized Web browsing solutions to ensure your end-users can quickly and conveniently accomplish their tasks.",
    icon: Globe,
    sections: [
      {
        title: "The Power of Web Tech",
        content: "Whether you're addressing UI/UX challenges, responsiveness, performance optimization, or any other issues, we can unleash the full power of Web Tech for you. We build custom web apps, SaaS digital products, PWAs, and single-page solutions."
      },
      {
        title: "What We Offer",
        content: "Contact us for sites and custom Web solutions; CMS, CRM, and API development; Web integration and optimization projects."
      },
      {
        title: "UI/UX Excellence",
        content: "Our in-house UI/UX experts secure the translation of your ideas into impactful interfaces. Craft a look and feel that resonates with end-users and reflects your image, brand, advantages, and values. Outsource web design, product design, redesign services, UX/UI audits, and branding."
      },
      {
        title: "Marketing for Websites",
        content: "From SEO and analytics to site promotion and content strategy, we align each touchpoint with your business goals. We provide support in SEO (tech, on-page, off-page), AEO (AI SEO) strategy, conversion rate optimization, and comprehensive analytics setup."
      },
      {
        title: "Architecture Development",
        content: "We employ a talent pool of Software Architects prepared to take care of performance, scalability, and reliability end-to-end. Working with us is the best way to secure a robust and flexible basis for your digital solutions."
      }
    ],
    featuresTitle: "Architectural Offerings",
    features: [
      { title: "Architectural Drivers", description: "Defining architectural drivers and constraints." },
      { title: "Quality Attributes", description: "Specifying non-functional aspects through the quality attributes technique." },
      { title: "Infrastructure", description: "Defining infrastructure requirements (deployment, CI/CD, observability, etc.)." }
    ]
  },
  [PageType.SOLUTION_MOBILE_DEV]: {
    title: "Mobile App Development",
    subtitle: "Native, Cross-Platform, and Hybrid solutions built for the modern mobile ecosystem.",
    icon: Smartphone,
    sections: [
      {
        title: "Native Mobile App Development",
        content: "Native Android and iOS app development makes the most of mobile platform capabilities, supports comprehensive feature sets, and offers an intuitive look and feel."
      },
      {
        title: "Cross-Platform App Development",
        content: "Cross-platform engineering is the way to advanced and protected yet lightweight apps. We will adapt deliverables to multiple OSs and meet your expectations."
      },
      {
        title: "Hybrid App Development",
        content: "Hybrid app development solutions promise a single and easily maintainable code base, a broad reach, cost-effective access to native features, and increased compatibility."
      },
      {
        title: "Progressive Web App Development",
        content: "The pros of PWAs lie in their seamless UX, achieved through features like offline functionalities, push notifications, and home screen installation."
      }
    ],
    featuresTitle: "Our Mobile App Development Cycle",
    features: [
      { title: "Discovery Phase", description: "Requirements specification and initial research." },
      { title: "UX/UI Design", description: "Crafting intuitive and engaging mobile interfaces." },
      { title: "Architecture", description: "Designing scalable and robust mobile backends." },
      { title: "Development", description: "Front-end and back-end engineering." },
      { title: "Integrations", description: "Connecting your app to third-party services and APIs." },
      { title: "Quality Assurance", description: "Rigorous testing across devices and OS versions." },
      { title: "Launch & Scale", description: "Deployment, support, and continuous scaling." }
    ]
  },
  [PageType.SOLUTION_STRATEGY]: {
    title: "AI Strategy Consulting & Integration",
    subtitle: "From Vision to Technical Reality: Seamlessly Embedding AI into Your Enterprise.",
    icon: LayoutGrid,
    sections: [
      {
        title: "The Strategic & Technical Gap",
        content: "Many organizations struggle to move AI beyond the 'hype' phase because they lack two things: a clear commercial roadmap and the technical capability to integrate AI into legacy systems. Standalone AI tools create silos; true value comes when AI talks to your ERP, CRM, and databases."
      },
      {
        title: "Our Solution: Holistic Consulting",
        content: "AqionLabs provides a dual-layer approach. First, our consultants identify high-ROI use cases tailored to your specific industry. Second, our engineering teams handle the heavy lifting of system integration. We connect cutting-edge AI models directly into your existing infrastructure—whether that’s SAP, Salesforce, Oracle, or custom internal tools—ensuring that AI becomes a seamless part of your daily workflow, not just a novelty."
      },
      {
        title: "Business Impact",
        content: "By bridging strategy with hard-coded integration, we eliminate data silos and operational friction. Your business moves from 'experimenting with AI' to running on AI, resulting in measurable efficiency gains, automated decision-making pipelines, and a future-proof technology stack."
      }
    ],
    featuresTitle: "Integration & Strategy Capabilities",
    features: [
      { title: "Roadmap Development", description: "Defining a 12-24 month AI adoption strategy aligned with business KPIs." },
      { title: "Legacy System Integration", description: "API-first connections between LLMs and ERP/CRM/HRMS systems." },
      { title: "Tech Stack Audit", description: "Assessing current infrastructure for AI readiness and scalability." },
      { title: "Vendor Selection", description: "Unbiased guidance on choosing the right models (OpenAI, Anthropic, Open Source) for your needs." }
    ],
    processTitle: "How We Execute",
    process: [
      { title: "Assess", description: "We audit your data architecture and business bottlenecks." },
      { title: "Architect", description: "We design the middleware and API layers required to connect AI safely." },
      { title: "Integrate", description: "Our developers build the pipelines, ensuring secure data flow." },
      { title: "Optimize", description: "Continuous monitoring of model performance and system latency." }
    ]
  },
  [PageType.SOLUTION_GENAI]: {
    title: "Private GPT Development",
    subtitle: "Private GPTs & Enterprise Knowledge Bases: Turning Your Data into Intelligence.",
    icon: Bot,
    sections: [
      {
        title: "Unlocking Corporate Memory",
        content: "Your enterprise possesses a goldmine of data—PDFs, contracts, SOPs, and technical manuals—that is often hard to search and utilize. Public AI tools like ChatGPT don't know your business, and pasting sensitive data into them is a security risk. You need a brain that knows your company inside out."
      },
      {
        title: "Private GPT Architecture",
        content: "We build secure, Private GPT environments hosted within your infrastructure (or private cloud). We utilize RAG (Retrieval-Augmented Generation) technology to ingest your entire corporate knowledge base. This allows your employees to chat with your data: asking complex questions about policies, extracting clauses from contracts, or summarizing historical project data instantly, with zero risk of data leakage."
      },
      {
        title: "Business Impact",
        content: "This drastically reduces the 'time-to-knowledge' for your workforce. New hires onboard faster, support teams answer queries instantly using accurate internal data, and legal/compliance teams can audit thousands of documents in minutes. It turns your static file storage into an active, conversational intelligence engine."
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
  [PageType.SOLUTION_GOVERNANCE]: {
    title: "AI Governance & Security",
    subtitle: "Deploy with Confidence: Compliance, Ethics, and Security Guardrails.",
    icon: Shield,
    sections: [
      {
        title: "The Risk of Unchecked AI",
        content: "As AI adoption accelerates, so do the risks: data hallucinations, algorithmic bias, IP leakage, and regulatory non-compliance. In the UAE and globally, strict data sovereignty laws require that AI systems be not just powerful, but accountable and secure."
      },
      {
        title: "Secure Frameworks",
        content: "AqionLabs establishes robust governance frameworks for your AI operations. We implement 'Red Teaming' to test models for vulnerabilities, set up PII (Personal Identifiable Information) masking pipelines to protect customer data, and ensure all AI deployments align with local regulations (such as UAE Data Law)."
      },
      {
        title: "Business Impact",
        content: "Governance is not a blocker; it is an enabler. By ensuring your AI is secure and compliant, you mitigate legal risk and build trust with your customers. You can scale your AI initiatives aggressively, knowing the safety rails are firmly in place to prevent reputational damage."
      }
    ],
    featuresTitle: "Security Measures",
    features: [
      { title: "PII Redaction", description: "Automated masking of sensitive data before it touches AI models." },
      { title: "Bias Auditing", description: "Testing models to ensure fair outcomes across demographics." },
      { title: "Regulatory Compliance", description: "Alignment with UAE and GDPR data sovereignty standards." },
      { title: "Adversarial Testing", description: "Simulating attacks to find and fix security vulnerabilities in prompts." }
    ]
  },
  [PageType.SOLUTION_DIGITAL_HUMAN]: {
    title: "Human AI Avatars",
    subtitle: "The Face of Your Brand: Interactive, Intelligent, & Human-Like Avatars.",
    icon: Video,
    sections: [
      {
        title: "Beyond the Chatbot",
        content: "Text-based chatbots are functional, but they lack emotional connection. AqionLabs Human AI Avatars are hyper-realistic AI-powered avatars that interact with your users through voice, visuals, and text simultaneously. They provide a face-to-face experience that is digital yet deeply personal."
      },
      {
        title: "How It Works",
        content: "These avatars are powered by advanced LLMs for intelligence, ensuring they can handle complex conversations, not just scripted lines. They are deployed on interactive kiosks, websites, or mobile apps. They can exhibit micro-expressions, lip-sync perfectly in real-time, and speak multiple languages, including local Arabic dialects."
      },
      {
        title: "Business Impact",
        content: "Human AI Avatars revolutionize customer service and brand engagement. They act as 24/7 receptionists, sales assistants, or virtual concierges. They increase engagement time, improve customer satisfaction scores (CSAT), and provide a consistent brand personality that never has a bad day."
      }
    ],
    featuresTitle: "Avatar Capabilities",
    features: [
      { title: "Multi-Modal Interaction", description: "Communicates via voice, text, and visual gestures." },
      { title: "Real-Time Lip Sync", description: "Low-latency animation synced perfectly with AI-generated audio." },
      { title: "Emotional Intelligence", description: "Detects user sentiment and adjusts tone and facial expressions." },
      { title: "Omnichannel Deployment", description: "Works on 4K kiosks, web browsers, and mobile devices." }
    ]
  },
  [PageType.SOLUTION_CHATBOTS]: {
    title: "Intelligent Chatbots",
    subtitle: "Essential 24/7 engagement for your website visitors.",
    icon: MessageSquare,
    sections: [
      {
        title: "Website Chat Widgets",
        content: "Instant engagement is no longer optional. Our lightweight AI chat widgets sit perfectly on your website to greet every visitor, answer routine questions, and guide them to the right information instantly. Perfect for businesses needing immediate, low-latency support without the complexity of full voice agents."
      },
      {
        title: "Lead Capture Automation",
        content: "Stop losing traffic to silence. Our bots are designed to capture contact details naturally during the conversation. They collect names, emails, and requirements, then route these qualified leads directly to your team via email or simple CRM webhooks."
      },
      {
        title: "Looking for More Power?",
        content: "For enterprise needs requiring Voice AI, WhatsApp Automation, Deep CRM Integration, and Autonomous Scheduling, we recommend upgrading to AqionVox Ai."
      }
    ],
    featuresTitle: "Standard Capabilities",
    features: [
      { title: "FAQ Automation", description: "Instantly answers pricing, location, and service questions." },
      { title: "Lead Form Capture", description: "Collects visitor details (Name, Email, Phone) automatically." },
      { title: "Custom Branding", description: "Matches your website colors, logo, and tone of voice." },
      { title: "Email Handoff", description: "Transcripts of chats are emailed directly to your support team." }
    ]
  },
  // Legacy or Removed from Navigation
  [PageType.SOLUTION_WORKSHOPS]: {
    title: "AI Workshops",
    subtitle: "Legacy service.",
    sections: [],
    features: []
  }
};

// Keeping Product Data for Flagship and legacy references if needed
export const PRODUCT_DATA: Record<string, DetailPageData> = {
  [PageType.PRODUCT_AQIONVOX]: {
    title: "AqionVox Ai",
    subtitle: "The AI Employee for High-Velocity Sales & Support",
    icon: Bot,
    sections: [
        {
            title: "What It Is",
            content: "AqionVox Ai is a flagship all-in-one AI workforce platform. It combines voice capabilities, WhatsApp automation, and CRM intelligence into a single entity that acts as your best employee—one that never sleeps."
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
