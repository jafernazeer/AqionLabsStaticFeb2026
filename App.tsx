
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { PageType } from './types';
import { SERVICE_DATA, INDUSTRY_DATA } from './data';

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
