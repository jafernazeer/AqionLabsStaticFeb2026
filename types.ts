
import { LucideIcon } from 'lucide-react';

export enum PageType {
  HOME = 'HOME',

  // Primary sections

  // Agent families
  AGENT_CUSTOMER_SUPPORT = 'AGENT_CUSTOMER_SUPPORT',

  // Platform
  PLATFORM_AQION_CLOUD = 'PLATFORM_AQION_CLOUD',
  PLATFORM_INTEGRATIONS = 'PLATFORM_INTEGRATIONS',
  PLATFORM_SECURITY_DATA = 'PLATFORM_SECURITY_DATA',

  // AI workforce
  WORKFORCE_ROADMAP = 'WORKFORCE_ROADMAP',

  // Commercial
  PRICING = 'PRICING',

  // Resources
  RESOURCE_INVESTOR_ENQUIRIES = 'RESOURCE_INVESTOR_ENQUIRIES',

  // Legal

  // Platform services

  // Agentic AI Services

  // Industries
  INDUSTRIES = 'INDUSTRIES',
  INDUSTRY_HEALTHCARE = 'INDUSTRY_HEALTHCARE',
  INDUSTRY_REAL_ESTATE = 'INDUSTRY_REAL_ESTATE',
  INDUSTRY_EDUCATION = 'INDUSTRY_EDUCATION',
  INDUSTRY_FINANCE = 'INDUSTRY_FINANCE',
  INDUSTRY_HOSPITALITY = 'INDUSTRY_HOSPITALITY',
  INDUSTRY_PROFESSIONAL = 'INDUSTRY_PROFESSIONAL',

  // Flagship Product
  PRODUCT_AQIONVOX = 'PRODUCT_AQIONVOX', 
  
  // Legacy types (kept for safety/reference in existing code but will be unused in UI)

  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  PRIVACY = 'PRIVACY',
  TERMS = 'TERMS'
}

export interface NavItem {
  label: string;
  page?: PageType;
  href?: string;
  /** Small status pill rendered beside the label, e.g. "Available Now". */
  badge?: string;
  children?: NavItem[];
}

export interface ContentSection {
  title: string;
  content: string | string[];
  bullets?: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  features?: string[]; 
  highlight?: boolean;
}

export interface UseCase {
  title: string;
  items: string[];
}

export interface AgentShowcase {
  /** 'screenshots' renders real product captures; 'flow' renders an animated workflow schematic. */
  kind: 'screenshots' | 'flow';
  eyebrow: string;
  title: string;
  body: string;
  /** kind: 'screenshots' */
  images?: { src: string; caption: string }[];
  /** kind: 'flow' */
  steps?: { label: string; detail: string }[];
  /** Optional link out to a live product page. */
  cta?: { label: string; href: string };
}

export interface DetailPageData {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  heroImage?: string;
  kicker?: string;
  accent?: string;
  titleBlackPart?: string;
  showcase?: AgentShowcase;
  sections: ContentSection[];
  
  // Service/Solution specific
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

  // Product specific
  howAiIsLeveraged?: string[];
  differentiation?: string[];
  useCases?: UseCase[];
  
  // Both
  pricing?: PricingTier[];
}

export interface IndustryPageData {
  title: string;
  headline: string;
  context: string;
  challenges: string[];
  solutions: {
    aqionVox?: string[];
    aiAutomation?: string[];
    governance?: string[];
    enterpriseAi?: string[];
  };
  outcome: string[];
  ctaText: string;
}
