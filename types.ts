
export enum PageType {
  HOME = 'HOME',

  // New AI Solutions
  SOLUTION_STRATEGY = 'SOLUTION_STRATEGY', // Strategy & Integration
  SOLUTION_GENAI = 'SOLUTION_GENAI',       // Private GPT (formerly GenAI)
  SOLUTION_GOVERNANCE = 'SOLUTION_GOVERNANCE', // Governance & Security
  SOLUTION_DIGITAL_HUMAN = 'SOLUTION_DIGITAL_HUMAN', // Human AI Avatars
  SOLUTION_CHATBOTS = 'SOLUTION_CHATBOTS', // Intelligent Chatbots
  SOLUTION_WEB_DEV = 'SOLUTION_WEB_DEV', // Custom Web App Development
  SOLUTION_MOBILE_DEV = 'SOLUTION_MOBILE_DEV', // Mobile App Development
  SOLUTION_WORKSHOPS = 'SOLUTION_WORKSHOPS', // Workshops (Legacy/Removed from Nav)

  // Flagship Product
  PRODUCT_AQIONVOX = 'PRODUCT_AQIONVOX',
  PRODUCT_AQIONFLO = 'PRODUCT_AQIONFLO',

  // Legacy types (kept for safety/reference in existing code but will be unused in UI)
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
  icon?: any;
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
