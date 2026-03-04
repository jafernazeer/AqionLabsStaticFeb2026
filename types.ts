
import { LucideIcon } from 'lucide-react';

export enum PageType {
  HOME = 'HOME',
  
  // New AI Services
  SERVICE_RAPID_APP = 'SERVICE_RAPID_APP',
  SERVICE_CONVERSATIONAL_AI = 'SERVICE_CONVERSATIONAL_AI',
  SERVICE_AI_AUTOMATION = 'SERVICE_AI_AUTOMATION',
  SERVICE_ENTERPRISE_AI = 'SERVICE_ENTERPRISE_AI',
  SERVICE_AI_STRATEGY = 'SERVICE_AI_STRATEGY',

  // Industries
  INDUSTRY_HEALTHCARE = 'INDUSTRY_HEALTHCARE',
  INDUSTRY_REAL_ESTATE = 'INDUSTRY_REAL_ESTATE',
  INDUSTRY_EDUCATION = 'INDUSTRY_EDUCATION',
  INDUSTRY_RETAIL = 'INDUSTRY_RETAIL',
  INDUSTRY_GOVERNMENT = 'INDUSTRY_GOVERNMENT',
  INDUSTRY_FINANCE = 'INDUSTRY_FINANCE',
  INDUSTRY_HOSPITALITY = 'INDUSTRY_HOSPITALITY',
  INDUSTRY_LOGISTICS = 'INDUSTRY_LOGISTICS',
  INDUSTRY_PROFESSIONAL = 'INDUSTRY_PROFESSIONAL',
  INDUSTRY_MEDIA_EVENTS = 'INDUSTRY_MEDIA_EVENTS',
  INDUSTRY_MARKETING_DESIGN = 'INDUSTRY_MARKETING_DESIGN',
  INDUSTRY_ARCHITECTURE = 'INDUSTRY_ARCHITECTURE',

  // Flagship Product
  PRODUCT_AQIONVOX = 'PRODUCT_AQIONVOX', 
  PRODUCT_AQIONFLO = 'PRODUCT_AQIONFLO',
  
  // Legacy types (kept for safety/reference in existing code but will be unused in UI)
  SOLUTION_STRATEGY = 'SOLUTION_STRATEGY', 
  SOLUTION_GENAI = 'SOLUTION_GENAI',       
  SOLUTION_GOVERNANCE = 'SOLUTION_GOVERNANCE', 
  SOLUTION_DIGITAL_HUMAN = 'SOLUTION_DIGITAL_HUMAN', 
  SOLUTION_CHATBOTS = 'SOLUTION_CHATBOTS', 
  SOLUTION_WEB_DEV = 'SOLUTION_WEB_DEV', 
  SOLUTION_MOBILE_DEV = 'SOLUTION_MOBILE_DEV', 
  SOLUTION_WORKSHOPS = 'SOLUTION_WORKSHOPS',
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

export interface DetailPageData {
  title: string;
  subtitle: string;
  icon?: LucideIcon;
  heroImage?: string;
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
