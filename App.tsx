
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { PageType } from './types';
import { SERVICE_DATA, INDUSTRY_DATA, AGENT_DATA, PLATFORM_SERVICE_DATA } from './data';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const AqionVox = lazy(() => import('./pages/AqionVox'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const AqionFlo = lazy(() => import('./pages/AqionFlo'));
const AqionCloud = lazy(() => import('./pages/AqionCloud'));
const BlankCanvas = lazy(() => import('./pages/BlankCanvas'));

// Helper to sync PageType with URL if needed, but we'll mostly use Routes
const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Map path to PageType for Navbar highlighting
  const getPageTypeFromPath = (path: string): PageType => {
    if (path === '/') return PageType.HOME;
    if (path === '/about') return PageType.ABOUT;
    if (path === '/contact') return PageType.CONTACT;
    if (path === '/careers') return PageType.CAREERS;
    if (path === '/privacy') return PageType.PRIVACY;
    if (path === '/terms') return PageType.TERMS;
    if (path === '/agents/customer-support') return PageType.AGENT_CUSTOMER_SUPPORT;
    if (path === '/agents/knowledge') return PageType.AGENT_KNOWLEDGE;
    if (path === '/agents/workforce') return PageType.AGENT_WORKFORCE;
    if (path === '/agents/finance') return PageType.AGENT_FINANCE;
    if (path === '/agents/revenue') return PageType.AGENT_REVENUE;
    if (path === '/agents/executive') return PageType.AGENT_EXECUTIVE;
    if (path === '/agents/growth') return PageType.AGENT_GROWTH;
    if (path === '/platform/aqion-cloud') return PageType.PLATFORM_AQION_CLOUD;
    if (path === '/platform/integrations') return PageType.PLATFORM_INTEGRATIONS;
    if (path === '/platform/security-data') return PageType.PLATFORM_SECURITY_DATA;
    if (path === '/ai-workforce/roadmap') return PageType.WORKFORCE_ROADMAP;
    if (path === '/pricing') return PageType.PRICING;
    if (path === '/resources/ethikcorp-pilot') return PageType.RESOURCE_ETHIKCORP_PILOT;
    if (path === '/resources/investor-enquiries') return PageType.RESOURCE_INVESTOR_ENQUIRIES;
    if (path === '/legal/data-processing') return PageType.DATA_PROCESSING;
    if (path === '/services/web-studio') return PageType.SERVICE_WEB_STUDIO;
    if (path === '/services/sovereign-infrastructure') return PageType.SERVICE_SOVEREIGN_INFRA;
    if (path === '/services/ai-strategy') return PageType.SERVICE_AI_STRATEGY;

    // Products
    if (path === '/products/aqion-voice' || path === '/products/aqionvox-ai') return PageType.PRODUCT_AQIONVOX;
    if (path === '/products/aqionflo') return PageType.PRODUCT_AQIONFLO;
    
    // Agentic AI Services
    if (path === '/services/digital-presence-studio') return PageType.SERVICE_DIGITAL_PRESENCE_STUDIO;
    if (path === '/services/marketing-agent') return PageType.SERVICE_MARKETING_AGENT;
    if (path === '/services/sales-agent') return PageType.SERVICE_SALES_AGENT;
    if (path === '/services/customer-conversation-agent') return PageType.SERVICE_CUSTOMER_CONVERSATION_AGENT;
    if (path === '/services/operations-agent') return PageType.SERVICE_OPERATIONS_AGENT;
    if (path === '/services/internal-knowledge-agent') return PageType.SERVICE_INTERNAL_KNOWLEDGE_AGENT;
    if (path === '/services/sovereign-ai-foundation') return PageType.SERVICE_SOVEREIGN_AI_FOUNDATION;

    // Industries
    if (path === '/industries') return PageType.INDUSTRIES;
    if (path === '/industries/healthcare') return PageType.INDUSTRY_HEALTHCARE;
    if (path === '/industries/real-estate') return PageType.INDUSTRY_REAL_ESTATE;
    if (path === '/industries/education') return PageType.INDUSTRY_EDUCATION;
    if (path === '/industries/retail') return PageType.INDUSTRY_RETAIL;
    if (path === '/industries/government') return PageType.INDUSTRY_GOVERNMENT;
    if (path === '/industries/financial-services') return PageType.INDUSTRY_FINANCE;
    if (path === '/industries/hospitality') return PageType.INDUSTRY_HOSPITALITY;
    if (path === '/industries/logistics') return PageType.INDUSTRY_LOGISTICS;
    if (path === '/industries/professional-services') return PageType.INDUSTRY_PROFESSIONAL;
    if (path === '/industries/media-events') return PageType.INDUSTRY_MEDIA_EVENTS;
    if (path === '/industries/marketing-design') return PageType.INDUSTRY_MARKETING_DESIGN;
    if (path === '/industries/architecture-planning') return PageType.INDUSTRY_ARCHITECTURE;

    return PageType.HOME;
  };

  const currentPage = getPageTypeFromPath(location.pathname);

  const handleNavigate = (page: PageType, scrollToDemo?: boolean, scrollToIndustries?: boolean) => {
    const pathMap: Record<string, string> = {
      [PageType.HOME]: '/',
      [PageType.ABOUT]: '/about',
      [PageType.CONTACT]: '/contact',
      [PageType.CAREERS]: '/careers',
      [PageType.PRIVACY]: '/privacy',
      [PageType.TERMS]: '/terms',
      [PageType.INDUSTRIES]: '/industries',
      [PageType.AGENT_CUSTOMER_SUPPORT]: '/agents/customer-support',
      [PageType.AGENT_KNOWLEDGE]: '/agents/knowledge',
      [PageType.AGENT_WORKFORCE]: '/agents/workforce',
      [PageType.AGENT_FINANCE]: '/agents/finance',
      [PageType.AGENT_REVENUE]: '/agents/revenue',
      [PageType.AGENT_EXECUTIVE]: '/agents/executive',
      [PageType.AGENT_GROWTH]: '/agents/growth',
      [PageType.SERVICE_WEB_STUDIO]: '/services/web-studio',
      [PageType.SERVICE_SOVEREIGN_INFRA]: '/services/sovereign-infrastructure',
      [PageType.SERVICE_AI_STRATEGY]: '/services/ai-strategy',

      [PageType.PLATFORM_AQION_CLOUD]: '/platform/aqion-cloud',
      [PageType.PLATFORM_INTEGRATIONS]: '/platform/integrations',
      [PageType.PLATFORM_SECURITY_DATA]: '/platform/security-data',
      [PageType.WORKFORCE_ROADMAP]: '/ai-workforce/roadmap',
      [PageType.PRICING]: '/pricing',
      [PageType.RESOURCE_ETHIKCORP_PILOT]: '/resources/ethikcorp-pilot',
      [PageType.RESOURCE_INVESTOR_ENQUIRIES]: '/resources/investor-enquiries',
      [PageType.DATA_PROCESSING]: '/legal/data-processing',

      [PageType.PRODUCT_AQIONVOX]: '/products/aqion-voice',
      [PageType.PRODUCT_AQIONFLO]: '/products/aqionflo',
      
      [PageType.SERVICE_DIGITAL_PRESENCE_STUDIO]: '/services/digital-presence-studio',
      [PageType.SERVICE_MARKETING_AGENT]: '/services/marketing-agent',
      [PageType.SERVICE_SALES_AGENT]: '/services/sales-agent',
      [PageType.SERVICE_CUSTOMER_CONVERSATION_AGENT]: '/services/customer-conversation-agent',
      [PageType.SERVICE_OPERATIONS_AGENT]: '/services/operations-agent',
      [PageType.SERVICE_INTERNAL_KNOWLEDGE_AGENT]: '/services/internal-knowledge-agent',
      [PageType.SERVICE_SOVEREIGN_AI_FOUNDATION]: '/services/sovereign-ai-foundation',

      [PageType.INDUSTRY_HEALTHCARE]: '/industries/healthcare',
      [PageType.INDUSTRY_REAL_ESTATE]: '/industries/real-estate',
      [PageType.INDUSTRY_EDUCATION]: '/industries/education',
      [PageType.INDUSTRY_RETAIL]: '/industries/retail',
      [PageType.INDUSTRY_GOVERNMENT]: '/industries/government',
      [PageType.INDUSTRY_FINANCE]: '/industries/financial-services',
      [PageType.INDUSTRY_HOSPITALITY]: '/industries/hospitality',
      [PageType.INDUSTRY_LOGISTICS]: '/industries/logistics',
      [PageType.INDUSTRY_PROFESSIONAL]: '/industries/professional-services',
      [PageType.INDUSTRY_MEDIA_EVENTS]: '/industries/media-events',
      [PageType.INDUSTRY_MARKETING_DESIGN]: '/industries/marketing-design',
      [PageType.INDUSTRY_ARCHITECTURE]: '/industries/architecture-planning',
    };
    
    let path = pathMap[page] || '/';
    if (scrollToDemo && page === PageType.PRODUCT_AQIONVOX) {
        path += '?demo=true';
    } else if (scrollToIndustries && page === PageType.PRODUCT_AQIONVOX) {
        path += '?industries=true';
    }
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-ink mesh-bg">
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />
      <main className="flex-grow">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home onNavigate={handleNavigate} />} />
            <Route path="/about" element={<About onNavigate={handleNavigate} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Agent families */}
            <Route path="/agents/customer-support" element={<AqionVox onNavigate={handleNavigate} />} />
            <Route path="/agents/knowledge" element={<ServiceDetail data={AGENT_DATA[PageType.AGENT_KNOWLEDGE]} onNavigate={handleNavigate} />} />
            <Route path="/agents/workforce" element={<ServiceDetail data={AGENT_DATA[PageType.AGENT_WORKFORCE]} onNavigate={handleNavigate} />} />
            <Route path="/agents/finance" element={<ServiceDetail data={AGENT_DATA[PageType.AGENT_FINANCE]} onNavigate={handleNavigate} />} />
            <Route path="/agents/revenue" element={<ServiceDetail data={AGENT_DATA[PageType.AGENT_REVENUE]} onNavigate={handleNavigate} />} />
            <Route path="/agents/executive" element={<ServiceDetail data={AGENT_DATA[PageType.AGENT_EXECUTIVE]} onNavigate={handleNavigate} />} />
            <Route path="/agents/growth" element={<ServiceDetail data={AGENT_DATA[PageType.AGENT_GROWTH]} onNavigate={handleNavigate} />} />

            {/* Platform services */}
            <Route path="/platform/aqion-cloud" element={<AqionCloud onNavigate={handleNavigate} />} />

            {/* Awaiting copy — beige canvas placeholders */}
            <Route path="/platform/integrations" element={<BlankCanvas />} />
            <Route path="/platform/security-data" element={<BlankCanvas />} />
            <Route path="/ai-workforce/roadmap" element={<BlankCanvas />} />
            <Route path="/pricing" element={<BlankCanvas />} />
            <Route path="/resources/ethikcorp-pilot" element={<BlankCanvas />} />
            <Route path="/resources/investor-enquiries" element={<BlankCanvas />} />
            <Route path="/legal/data-processing" element={<BlankCanvas />} />
            <Route path="/services/web-studio" element={<ServiceDetail data={PLATFORM_SERVICE_DATA[PageType.SERVICE_WEB_STUDIO]} onNavigate={handleNavigate} />} />
            <Route path="/services/sovereign-infrastructure" element={<ServiceDetail data={PLATFORM_SERVICE_DATA[PageType.SERVICE_SOVEREIGN_INFRA]} onNavigate={handleNavigate} />} />
            <Route path="/services/ai-strategy" element={<ServiceDetail data={PLATFORM_SERVICE_DATA[PageType.SERVICE_AI_STRATEGY]} onNavigate={handleNavigate} />} />

            {/* Retired index pages redirect to their first child */}
            <Route path="/agentic-ai" element={<Navigate to="/agents/customer-support" replace />} />
            <Route path="/services" element={<Navigate to="/services/web-studio" replace />} />

            {/* Products */}
            <Route path="/products/aqion-voice" element={<AqionVox onNavigate={handleNavigate} />} />
            <Route path="/products/aqionvox-ai" element={<Navigate to="/products/aqion-voice" replace />} />
            <Route path="/products/aqionflo" element={<AqionFlo onNavigate={handleNavigate} />} />
            <Route path="/products/aqionflo-ai" element={<Navigate to="/products/aqionflo" replace />} />
            
            {/* Agentic AI Services */}
            <Route path="/services/digital-presence-studio" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_DIGITAL_PRESENCE_STUDIO]} onNavigate={handleNavigate} />} />
            <Route path="/services/marketing-agent" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_MARKETING_AGENT]} onNavigate={handleNavigate} />} />
            <Route path="/services/sales-agent" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_SALES_AGENT]} onNavigate={handleNavigate} />} />
            <Route path="/services/customer-conversation-agent" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_CUSTOMER_CONVERSATION_AGENT]} onNavigate={handleNavigate} />} />
            <Route path="/services/operations-agent" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_OPERATIONS_AGENT]} onNavigate={handleNavigate} />} />
            <Route path="/services/internal-knowledge-agent" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_INTERNAL_KNOWLEDGE_AGENT]} onNavigate={handleNavigate} />} />
            <Route path="/services/sovereign-ai-foundation" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_SOVEREIGN_AI_FOUNDATION]} onNavigate={handleNavigate} />} />

            {/* Legacy service redirects */}
            <Route path="/services/rapid-application-engineering" element={<Navigate to="/services/digital-presence-studio" replace />} />
            <Route path="/services/conversational-ai" element={<Navigate to="/services/customer-conversation-agent" replace />} />
            <Route path="/services/ai-automation" element={<Navigate to="/services/operations-agent" replace />} />
            <Route path="/services/enterprise-ai-solutions" element={<Navigate to="/services/sovereign-ai-foundation" replace />} />
            <Route path="/services/ai-strategy-governance" element={<Navigate to="/services/sovereign-ai-foundation" replace />} />

            {/* Industries */}
            <Route path="/industries" element={<Industries onNavigate={handleNavigate} />} />
            <Route path="/industries/healthcare" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_HEALTHCARE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/real-estate" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_REAL_ESTATE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/education" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_EDUCATION]} onNavigate={handleNavigate} />} />
            <Route path="/industries/retail" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_RETAIL]} onNavigate={handleNavigate} />} />
            <Route path="/industries/government" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_GOVERNMENT]} onNavigate={handleNavigate} />} />
            <Route path="/industries/financial-services" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_FINANCE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/hospitality" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_HOSPITALITY]} onNavigate={handleNavigate} />} />
            <Route path="/industries/logistics" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_LOGISTICS]} onNavigate={handleNavigate} />} />
            <Route path="/industries/professional-services" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_PROFESSIONAL]} onNavigate={handleNavigate} />} />
            <Route path="/industries/media-events" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_MEDIA_EVENTS]} onNavigate={handleNavigate} />} />
            <Route path="/industries/marketing-design" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_MARKETING_DESIGN]} onNavigate={handleNavigate} />} />
            <Route path="/industries/architecture-planning" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_ARCHITECTURE]} onNavigate={handleNavigate} />} />
            
            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
