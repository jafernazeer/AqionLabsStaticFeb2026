
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { PageType } from './types';
import { INDUSTRY_DATA } from './data';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const IndustryDetail = lazy(() => import('./pages/IndustryDetail'));
const Industries = lazy(() => import('./pages/Industries'));
const AqionVox = lazy(() => import('./pages/AqionVox'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));
const AqionCloud = lazy(() => import('./pages/AqionCloud'));
const Integrations = lazy(() => import('./pages/Integrations'));
const SecurityData = lazy(() => import('./pages/SecurityData'));
const AIWorkforce = lazy(() => import('./pages/AIWorkforce'));
const Pricing = lazy(() => import('./pages/Pricing'));
const InvestorEnquiries = lazy(() => import('./pages/InvestorEnquiries'));

// Helper to sync PageType with URL if needed, but we'll mostly use Routes
const AppContent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Map path to PageType for Navbar highlighting
  const getPageTypeFromPath = (path: string): PageType => {
    if (path === '/') return PageType.HOME;
    if (path === '/about') return PageType.ABOUT;
    if (path === '/contact') return PageType.CONTACT;
    if (path === '/privacy') return PageType.PRIVACY;
    if (path === '/terms') return PageType.TERMS;
    if (path === '/agents/customer-support') return PageType.AGENT_CUSTOMER_SUPPORT;
    if (path === '/platform/aqion-cloud') return PageType.PLATFORM_AQION_CLOUD;
    if (path === '/platform/integrations') return PageType.PLATFORM_INTEGRATIONS;
    if (path === '/platform/security-data') return PageType.PLATFORM_SECURITY_DATA;
    if (path === '/ai-workforce/roadmap') return PageType.WORKFORCE_ROADMAP;
    if (path === '/pricing') return PageType.PRICING;
    if (path === '/resources/investor-enquiries') return PageType.RESOURCE_INVESTOR_ENQUIRIES;

    // Products
    if (path === '/products/aqion-voice' || path === '/products/aqionvox-ai') return PageType.PRODUCT_AQIONVOX;
    
    // Agentic AI Services

    // Industries
    if (path === '/industries') return PageType.INDUSTRIES;
    if (path === '/industries/healthcare') return PageType.INDUSTRY_HEALTHCARE;
    if (path === '/industries/real-estate') return PageType.INDUSTRY_REAL_ESTATE;
    if (path === '/industries/education') return PageType.INDUSTRY_EDUCATION;
    if (path === '/industries/financial-services') return PageType.INDUSTRY_FINANCE;
    if (path === '/industries/hospitality') return PageType.INDUSTRY_HOSPITALITY;
    if (path === '/industries/professional-services') return PageType.INDUSTRY_PROFESSIONAL;

    return PageType.HOME;
  };

  const currentPage = getPageTypeFromPath(location.pathname);

  const handleNavigate = (page: PageType, scrollToDemo?: boolean, scrollToIndustries?: boolean) => {
    const pathMap: Record<string, string> = {
      [PageType.HOME]: '/',
      [PageType.ABOUT]: '/about',
      [PageType.CONTACT]: '/contact',
      [PageType.PRIVACY]: '/privacy',
      [PageType.TERMS]: '/terms',
      [PageType.INDUSTRIES]: '/industries',
      [PageType.AGENT_CUSTOMER_SUPPORT]: '/agents/customer-support',

      [PageType.PLATFORM_AQION_CLOUD]: '/platform/aqion-cloud',
      [PageType.PLATFORM_INTEGRATIONS]: '/platform/integrations',
      [PageType.PLATFORM_SECURITY_DATA]: '/platform/security-data',
      [PageType.WORKFORCE_ROADMAP]: '/ai-workforce/roadmap',
      [PageType.PRICING]: '/pricing',
      [PageType.RESOURCE_INVESTOR_ENQUIRIES]: '/resources/investor-enquiries',

      [PageType.PRODUCT_AQIONVOX]: '/products/aqion-voice',
      

      [PageType.INDUSTRY_HEALTHCARE]: '/industries/healthcare',
      [PageType.INDUSTRY_REAL_ESTATE]: '/industries/real-estate',
      [PageType.INDUSTRY_EDUCATION]: '/industries/education',
      [PageType.INDUSTRY_FINANCE]: '/industries/financial-services',
      [PageType.INDUSTRY_HOSPITALITY]: '/industries/hospitality',
      [PageType.INDUSTRY_PROFESSIONAL]: '/industries/professional-services',
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
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            {/* Agent families */}
            <Route path="/agents/customer-support" element={<AqionVox onNavigate={handleNavigate} />} />

            {/* Platform services */}
            <Route path="/platform/aqion-cloud" element={<AqionCloud onNavigate={handleNavigate} />} />

            {/* Awaiting copy — beige canvas placeholders */}
            <Route path="/platform/integrations" element={<Integrations onNavigate={handleNavigate} />} />
            <Route path="/platform/security-data" element={<SecurityData onNavigate={handleNavigate} />} />
            <Route path="/ai-workforce/roadmap" element={<AIWorkforce onNavigate={handleNavigate} />} />
            <Route path="/pricing" element={<Pricing onNavigate={handleNavigate} />} />
            <Route path="/resources/investor-enquiries" element={<InvestorEnquiries onNavigate={handleNavigate} />} />

            {/* Retired index pages redirect to their first child */}
            <Route path="/agentic-ai" element={<Navigate to="/agents/customer-support" replace />} />

            {/* Products */}
            <Route path="/products/aqion-voice" element={<AqionVox onNavigate={handleNavigate} />} />
            <Route path="/products/aqionvox-ai" element={<Navigate to="/products/aqion-voice" replace />} />
            
            {/* Agentic AI Services */}

            {/* Legacy service redirects */}

            {/* Industries */}
            <Route path="/industries" element={<Industries onNavigate={handleNavigate} />} />
            <Route path="/industries/healthcare" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_HEALTHCARE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/real-estate" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_REAL_ESTATE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/education" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_EDUCATION]} onNavigate={handleNavigate} />} />
            <Route path="/industries/financial-services" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_FINANCE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/hospitality" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_HOSPITALITY]} onNavigate={handleNavigate} />} />
            <Route path="/industries/professional-services" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_PROFESSIONAL]} onNavigate={handleNavigate} />} />
            
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
