#!/bin/bash

# Create necessary directories
mkdir -p components
mkdir -p pages
mkdir -p public

# Write index.tsx
cat << 'AQION_EOF' > index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
AQION_EOF

# Write metadata.json
cat << 'AQION_EOF' > metadata.json
{
  "name": "Copy of Final version",
  "description": "Aqionlabs",
  "requestFramePermissions": []
}
AQION_EOF

# Write index.html
cat << 'AQION_EOF' > index.html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>AqionLabs | Global AI Intelligence Hub</title>
    <meta name="title" content="AqionLabs | Global AI Intelligence Hub" />
    <meta name="description" content="Enable real-world AI adoption through an integrated ecosystem of certified consultants, developers, and products." />
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#050A18" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://aqionlabs.com/" />
    <meta property="og:title" content="AqionLabs | Global AI Intelligence Hub" />
    <meta property="og:description" content="Driving practical AI adoption through a connected ecosystem that delivers measurable business results." />
    <meta property="og:image" content="/og-image.png" />

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://aqionlabs.com/" />
    <meta property="twitter:title" content="AqionLabs | Global AI Intelligence Hub" />
    <meta property="twitter:description" content="Driving practical AI adoption through a connected ecosystem that delivers measurable business results." />
    <meta property="twitter:image" content="/og-image.png" />

    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/lucide@latest"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
            },
            colors: {
              navy: {
                950: '#050A18',
                900: '#0B1221',
                800: '#1E293B',
                700: '#334155',
              },
              slate: {
                850: '#151e2e',
                900: '#0f172a',
                950: '#020617',
              }
            },
            animation: {
              'float': 'float 6s ease-in-out infinite',
            },
            keyframes: {
              float: {
                '0%, 100%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
              }
            }
          }
        }
      }
    </script>
    <style>
      body {
        font-family: 'Inter', sans-serif;
        color: #f8fafc;
        background-color: #050A18;
      }
      
      /* Grid Background Pattern */
      .bg-grid-pattern {
        background-size: 40px 40px;
        background-image: linear-gradient(to right, rgba(30, 58, 138, 0.1) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(30, 58, 138, 0.1) 1px, transparent 1px);
        mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
        -webkit-mask-image: linear-gradient(to bottom, black 40%, transparent 100%);
      }

      /* Full page grid for specific sections */
      .bg-grid-slate {
        background-size: 50px 50px;
        /* Decreased opacity for subtle visibility */
        background-image: linear-gradient(to right, rgba(59, 130, 246, 0.06) 1px, transparent 1px),
                          linear-gradient(to bottom, rgba(59, 130, 246, 0.06) 1px, transparent 1px);
      }
      
      .animate-entry {
        animation: fadeInUpBlur 1s cubic-bezier(0.2,0.8,0.2,1) both;
      }
      @keyframes fadeInUpBlur{
        0% { opacity:0; transform:translateY(20px); filter:blur(10px) }
        100% { opacity:1; transform:translateY(0); filter:blur(0) }
      }

      /* Custom Dark Scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
      }
      ::-webkit-scrollbar-track {
        background: #050A18; 
      }
      ::-webkit-scrollbar-thumb {
        background: #1E293B; 
        border-radius: 5px;
        border: 2px solid #050A18;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: #334155; 
      }
    </style>
<script type="importmap">
{
  "imports": {
    "@vitejs/plugin-react": "https://esm.sh/@vitejs/plugin-react@^5.1.2",
    "lucide-react": "https://esm.sh/lucide-react@^0.563.0",
    "vite": "https://esm.sh/vite@^7.3.1",
    "react-dom/": "https://esm.sh/react-dom@^19.2.4/",
    "react": "https://esm.sh/react@^19.2.4",
    "react/": "https://esm.sh/react@^19.2.4/"
  }
}
</script>
</head>
  <body>
    <div id="root"></div>
    <script type="module" src="/index.tsx"></script>
  </body>
</html>
AQION_EOF

# Write types.ts
cat << 'AQION_EOF' > types.ts
export enum PageType {
  HOME = 'HOME',
  SERVICE_STRATEGY = 'SERVICE_STRATEGY',
  SERVICE_GPT = 'SERVICE_GPT',
  SERVICE_AGENTS_SUPPORT = 'SERVICE_AGENTS_SUPPORT',
  SERVICE_GEO = 'SERVICE_GEO',
  SERVICE_MARKETING = 'SERVICE_MARKETING',
  SERVICE_WORKSHOPS = 'SERVICE_WORKSHOPS',
  PRODUCT_WHATSAPP = 'PRODUCT_WHATSAPP',
  PRODUCT_CALLER = 'PRODUCT_CALLER',
  PRODUCT_AVATAR_INTERACTIVE = 'PRODUCT_AVATAR_INTERACTIVE',
  PRODUCT_CRM = 'PRODUCT_CRM',
  PRODUCT_ERP = 'PRODUCT_ERP',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  CAREERS = 'CAREERS',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export interface NavItem {
  label: string;
  page?: PageType;
  children?: NavItem[];
}

export interface ContentSection {
  title: string;
  content: string | string[];
  bullets?: string[];
}

export interface DetailPageData {
  title: string;
  subtitle: string;
  icon?: any;
  heroImage?: string;
  sections: ContentSection[];
  featuresTitle?: string;
  features?: {
    title: string;
    description: string;
  }[];
  processTitle?: string;
  process?: {
    title: string;
    description: string;
  }[];
}
AQION_EOF

# Write data.ts
cat << 'AQION_EOF' > data.ts
import { DetailPageData, PageType } from './types';
import { 
  LayoutGrid, Bot, Headphones, Search, Megaphone, Presentation, 
  MessageSquare, Phone, Video, UserCheck, FolderKanban 
} from 'lucide-react';

export const SERVICE_DATA: Record<string, DetailPageData> = {
  [PageType.SERVICE_STRATEGY]: {
    title: "AI Integration",
    subtitle: "Turn AI from ambition into action.",
    icon: LayoutGrid,
    sections: [
      {
        title: "Overview",
        content: "Getting started with AI is often the hardest step. The pace of change is intense, which is exactly why planning matters. AqionLabs gives you a practical, commercially focused route into AI so your teams see real outcomes, not hype. We help you pick the right use cases, prove value fast and scale with confidence."
      }
    ],
    processTitle: "Here’s how we work",
    process: [
      {
        title: "Commercial Operations Review",
        description: "We examine how your business currently operates. That includes your customer experience, sales funnel, and marketing output, to find areas where AI can deliver measurable results."
      },
      {
        title: "Execution-Focused Strategy",
        description: "We move fast. Our strategic plans come with actionable steps and clear implementation milestones so your teams can move from planning to real outcomes."
      },
      {
        title: "Stakeholder Workshops",
        description: "We guide teams in using AI to remove repetitive tasks. Instead of replacing people, we help employees improve productivity through smart automation, addressing internal fears surrounding AI adoption."
      },
      {
        title: "Ongoing AI Support",
        description: "AI capabilities continue to evolve rapidly. We stay on top of what’s new and relevant so you don’t have to. Let us be your AI partner, keeping your systems up-to-date and effective."
      }
    ]
  },
  [PageType.SERVICE_GPT]: {
    title: "Custom GPTs",
    subtitle: "Secure, instant company answers powered by trusted data.",
    icon: Bot,
    sections: [
      {
        title: "The Problem",
        content: "Your company generates a host of valuable content each day across strategy decks, proposals, client notes, and campaign reports. However, much of it ends up buried in folders, shared drives, or forgotten entirely. Furthermore, AI is only as good as the knowledge it can trust—without structured data, answers are unreliable."
      },
      {
        title: "Our Solution",
        content: [
            "Our combined Internal GPT and Knowledge Management service helps your team leverage these documents with fast, secure access while ensuring the underlying data is accurate. By designing around your internal workflows, our systems make it easy to retrieve what you need when you need it.",
            "We build and manage the knowledge foundations that power your custom GPTs. We work closely with your team to map out critical information, flag outdated entries, and build internal processes that keep your AI systems responsive, reliable, and hallucination-free."
        ],
        bullets: [
            "Can your team find examples of past proposals or pricing models instantly?",
            "Is your data structured to prevent AI hallucinations?",
            "What knowledge walks out the door when someone leaves?"
        ]
      }
    ],
    featuresTitle: "Core Capabilities",
    features: [
      { title: "GPT Framework Build", description: "We create a custom internal GPT using your data sources. Searchable by department, role, or content type." },
      { title: "Data Structuring & Permissions", description: "We define what should be accessible to whom, ensuring data security and relevance." },
      { title: "Knowledge Architecture", description: "Taxonomy, tagging, and content models for products, policies, processes, and FAQs." },
      { title: "Quality Assurance", description: "Golden test sets, automated checks, and human review with ongoing improvement plans." }
    ]
  },
  [PageType.SERVICE_AGENTS_SUPPORT]: {
    title: "AI Agents & Customer Support",
    subtitle: "Automate internal tasks and deliver instant customer service.",
    icon: Headphones,
    sections: [
      {
        title: "Intelligent Agents for Every Function",
        content: "AqionLabs builds AI agents that remove the manual, repetitive tasks that slow your team down, while simultaneously handling high volumes of customer inquiries. Whether facing your customers or supporting your staff, our agents assist rather than replace, focusing on performance, usability, and measurable results."
      },
      {
        title: "Customer Support Automation",
        content: "Resolve common questions instantly, escalate complex cases with full context, and keep systems in sync. Our AI solutions reduce manual support tickets by up to 90% by answering policy, product, and order queries with knowledge grounding."
      },
      {
        title: "Internal Workflow Automation",
        content: "We create agents with clear workflows and defined boundaries to coordinate tasks across systems—qualifying leads, drafting emails, booking meetings, and logging outcomes automatically."
      }
    ],
    featuresTitle: "Agent Capabilities",
    features: [
      { title: "Customer Resolution", description: "Answers policy and product queries. Detects intent, language, and sentiment to resolve issues instantly." },
      { title: "Smart Routing", description: "Creates tickets with summaries, tags, and priority. Escalates to humans with full transcript when needed." },
      { title: "Task Automation", description: "Single purpose bots that complete narrow jobs like enriching leads, creating tickets, or updating records." },
      { title: "Workflow Orchestration", description: "Multi-step agents that coordinate tasks: qualify, draft, book, and log outcomes." }
    ]
  },
  [PageType.SERVICE_GEO]: {
    title: "Generative Engine Optimisation (GEO)",
    subtitle: "Optimizing for AI Overviews and Answers Engines",
    icon: Search,
    sections: [
        {
            title: "The Shift in Search",
            content: "Search is shifting from ten blue links to direct answers. Generative systems prefer structured facts, trusted sources and clear entities. Our GSO aligns your web, content and data so AI systems can index your truth, cite you as a source and route users to conversion paths that you control."
        }
    ],
    featuresTitle: "What we optimise",
    features: [
        { title: "Entities and brand graph", description: "Define your entities. Create an entity map and relationships." },
        { title: "Source of truth pack", description: "Authoritative pages with clear facts, FAQs and policy statements." },
        { title: "Structured data and feeds", description: "JSON-LD for organisation, product, service, FAQ. Data feeds for catalogues." },
        { title: "LLM-ready content", description: "Short fact blocks and glossaries that models can parse." }
    ]
  },
  [PageType.SERVICE_MARKETING]: {
    title: "AI Marketing",
    subtitle: "Hyper-personalization and automated content at scale.",
    icon: Megaphone,
    sections: [
      {
        title: "The New Era of Marketing",
        content: "Marketing is no longer about generic campaigns; it's about precision. AqionLabs leverages advanced AI tools to generate creative content, predict customer behavior, and automate complex segmentation. We help you move from reactive campaigns to proactive, data-driven engagement."
      },
      {
        title: "Generative Content & Strategy",
        content: "We implement tools that instantly create on-brand copy, visuals, and video assets, allowing your team to test hundreds of variations to find what truly resonates. Beyond creation, our AI models analyze performance data to refine messaging in real-time."
      }
    ],
    featuresTitle: "Marketing Capabilities",
    features: [
      { title: "Predictive Analytics", description: "Forecast trends and customer churn using historical data to intervene before you lose sales." },
      { title: "Automated Segmentation", description: "Dynamic clustering of audiences based on behavior, not just demographics, for hyper-targeted ads." },
      { title: "Content Generation", description: "Scale your creative output with AI tools that produce blogs, social posts, and ad copy in seconds." },
      { title: "Personalization Engines", description: "Deliver unique product recommendations and email journeys for every single user." }
    ]
  },
  [PageType.SERVICE_WORKSHOPS]: {
    title: "Corporate Workshops",
    subtitle: "AI moves fast. Your people need clarity.",
    icon: Presentation,
    sections: [
        {
            title: "Outcome-driven workshops",
            content: "AqionLabs runs outcome-driven workshops that align leaders, upskill teams and convert ideas into PoCs. These are practical sessions where your team learns by doing, focused on business value, not theory."
        }
    ],
    processTitle: "Workshop formats",
    process: [
        { title: "Executive AI Briefing", description: "A concise session for senior leaders covering market shifts, risks, opportunities and a 90-day plan." },
        { title: "AI Strategy Sprint", description: "Cross-functional working session that maps value, feasibility and data readiness, then prioritises a pilot." },
        { title: "AI for Growth", description: "Revenue-focused workshop on WhatsApp AI, voice agents, interactive avatars and conversational commerce." },
        { title: "AI for Service", description: "Customer support agents, knowledge management and deflection strategies." }
    ]
  }
};

export const PRODUCT_DATA: Record<string, DetailPageData> = {
  [PageType.PRODUCT_WHATSAPP]: {
    title: "WhatsApp AI",
    subtitle: "Growth, Service & Sales on the world's most popular app.",
    icon: MessageSquare,
    sections: [
        {
            title: "Overview",
            content: "Engage customers in the channel they use most. Capture leads, answer questions, take payments and track orders directly inside WhatsApp with secure CRM integration and measurable outcomes. Whether you need an AI-powered WhatsApp solution for sales, support, or both, we provide a better customer experience through 24/7 speed and consistency."
        }
    ],
    featuresTitle: "What WhatsApp AI does",
    features: [
        { title: "Acquire", description: "Instant lead capture with validated contact details. Smart qualification and meeting booking." },
        { title: "Serve", description: "Knowledge-aware answers for 70–90% of routine questions. Ticket creation and handover to live agents." },
        { title: "Sell", description: "Catalogue browsing, size or availability checks. Cart build inside WhatsApp with payment links." }
    ]
  },
  [PageType.PRODUCT_CALLER]: {
    title: "Caller AI",
    subtitle: "AI Sales Calling Agents for Outbound at Scale",
    icon: Phone,
    sections: [
        {
            title: "Automate outbound prospecting",
            content: "Reach more prospects, qualify with consistency and book meetings automatically. Our AI voice agents handle first contact and follow-ups, then hand off to your team with full context. Make thousands of calls in parallel, with full tracking, call listening, and real-time reporting."
        }
    ],
    featuresTitle: "What the agent does",
    features: [
        { title: "Acquire", description: "Calls new and warm leads instantly when forms, WhatsApp or ads generate interest." },
        { title: "Qualify", description: "Scores leads against your criteria. Handles objections and FAQs with brand-safe answers." },
        { title: "Book", description: "Offers calendar slots and sends confirmations and reminders." },
        { title: "Nurture", description: "Runs polite follow-up cadences across call, SMS and WhatsApp." }
    ]
  },
  [PageType.PRODUCT_AVATAR_INTERACTIVE]: {
    title: "Interactive AI Avatars",
    subtitle: "Add a human face to your digital experience.",
    icon: Video,
    sections: [
        {
            title: "Face-to-face AI",
            content: "Customers engage longer when information feels personal. Our Interactive Avatars deliver face-to-face, on-brand conversations on your site and apps. They combine natural video, real-time chat or voice, and secure access to your content and systems. Powered by leading Large Language Models (LLMs) and your company’s knowledge base."
        }
    ],
    featuresTitle: "Key Capabilities",
    features: [
        { title: "Q&A and Support", description: "Answer questions and provide virtual assistance with clarity." },
        { title: "Sales", description: "Qualify leads and give tailored recommendations." },
        { title: "HR & Training", description: "Help to schedule meetings and hand off to your team." }
    ]
  },
  [PageType.PRODUCT_CRM]: {
    title: "AI CRM System",
    subtitle: "Intelligent customer relationships that drive themselves.",
    icon: UserCheck,
    sections: [
        {
            title: "Overview",
            content: "AqionLabs' AI CRM doesn't just store data; it understands it. By integrating deep AI capabilities directly into the workflow, our system automates data entry from emails and calls, scores leads based on behavioral patterns, and provides sentiment analysis on every interaction."
        },
        {
            title: "Seamless Integration",
            content: "Our AI layer sits on top of your existing data, syncing automatically to provide 'next best action' recommendations. Sales teams spend less time logging activity and more time closing deals, supported by an assistant that knows the history of every prospect."
        }
    ],
    featuresTitle: "Smart Features",
    features: [
        { title: "Automated Data Entry", description: "Automatically logs emails, calls, and meeting notes, keeping records pristine without manual effort." },
        { title: "Predictive Lead Scoring", description: "AI algorithms analyze prospect behavior to prioritize leads most likely to convert." },
        { title: "Sentiment Analysis", description: "Real-time analysis of customer communications to flag risks or upsell opportunities." },
        { title: "Next Best Action", description: "Intelligent prompts telling sales reps exactly what to do next to move a deal forward." }
    ]
  },
  [PageType.PRODUCT_ERP]: {
    title: "AI ERP System",
    subtitle: "The central nervous system of your business, upgraded.",
    icon: FolderKanban,
    sections: [
        {
            title: "Next-Gen Resource Planning",
            content: "Modern businesses generate too much data for manual processing. AqionLabs' AI ERP system integrates artificial intelligence across finance, supply chain, and HR to predict needs before they arise. From automated financial reporting to intelligent demand forecasting, we make your operations proactive."
        }
    ],
    featuresTitle: "Operational Advantages",
    features: [
        { title: "Demand Forecasting", description: "Predict inventory needs with high accuracy using historical sales and market trend data." },
        { title: "Supply Chain Optimization", description: "Real-time route and vendor analysis to reduce costs and prevent delays." },
        { title: "Automated Reporting", description: "Generate complex financial and operational reports instantly with natural language queries." },
        { title: "Predictive Maintenance", description: "For manufacturing clients, anticipate equipment failure before it disrupts production." }
    ]
  }
};
AQION_EOF

# Write components/Navbar.tsx
cat << 'AQION_EOF' > components/Navbar.tsx
import React, { useState } from 'react';
import { Menu, X, ChevronDown, Brain } from