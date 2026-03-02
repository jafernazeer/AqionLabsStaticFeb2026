
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
    if (path === '/products/aqionvox-ai') return PageType.PRODUCT_AQIONVOX;
    if (path === '/products/aqionflo') return PageType.PRODUCT_AQIONFLO;
    
    // Services
    if (path === '/services/rapid-application-engineering') return PageType.SERVICE_RAPID_APP;
    if (path === '/services/conversational-ai') return PageType.SERVICE_CONVERSATIONAL_AI;
    if (path === '/services/ai-automation') return PageType.SERVICE_AI_AUTOMATION;
    if (path === '/services/enterprise-ai-solutions') return PageType.SERVICE_ENTERPRISE_AI;
    if (path === '/services/ai-strategy-governance') return PageType.SERVICE_AI_STRATEGY;

    // Industries
    if (path === '/industries/healthcare') return PageType.INDUSTRY_HEALTHCARE;
    if (path === '/industries/real-estate') return PageType.INDUSTRY_REAL_ESTATE;
    if (path === '/industries/education') return PageType.INDUSTRY_EDUCATION;
    if (path === '/industries/retail') return PageType.INDUSTRY_RETAIL;
    if (path === '/industries/government') return PageType.INDUSTRY_GOVERNMENT;
    if (path === '/industries/financial-services') return PageType.INDUSTRY_FINANCE;
    if (path === '/industries/hospitality') return PageType.INDUSTRY_HOSPITALITY;
    if (path === '/industries/logistics') return PageType.INDUSTRY_LOGISTICS;
    if (path === '/industries/professional-services') return PageType.INDUSTRY_PROFESSIONAL;

    return PageType.HOME;
  };

  const currentPage = getPageTypeFromPath(location.pathname);

  const handleNavigate = (page: PageType) => {
    const pathMap: Record<string, string> = {
      [PageType.HOME]: '/',
      [PageType.ABOUT]: '/about',
      [PageType.CONTACT]: '/contact',
      [PageType.CAREERS]: '/careers',
      [PageType.PRIVACY]: '/privacy',
      [PageType.TERMS]: '/terms',
      
      [PageType.PRODUCT_AQIONVOX]: '/products/aqionvox-ai',
      [PageType.PRODUCT_AQIONFLO]: '/products/aqionflo',
      
      [PageType.SERVICE_RAPID_APP]: '/services/rapid-application-engineering',
      [PageType.SERVICE_CONVERSATIONAL_AI]: '/services/conversational-ai',
      [PageType.SERVICE_AI_AUTOMATION]: '/services/ai-automation',
      [PageType.SERVICE_ENTERPRISE_AI]: '/services/enterprise-ai-solutions',
      [PageType.SERVICE_AI_STRATEGY]: '/services/ai-strategy-governance',

      [PageType.INDUSTRY_HEALTHCARE]: '/industries/healthcare',
      [PageType.INDUSTRY_REAL_ESTATE]: '/industries/real-estate',
      [PageType.INDUSTRY_EDUCATION]: '/industries/education',
      [PageType.INDUSTRY_RETAIL]: '/industries/retail',
      [PageType.INDUSTRY_GOVERNMENT]: '/industries/government',
      [PageType.INDUSTRY_FINANCE]: '/industries/financial-services',
      [PageType.INDUSTRY_HOSPITALITY]: '/industries/hospitality',
      [PageType.INDUSTRY_LOGISTICS]: '/industries/logistics',
      [PageType.INDUSTRY_PROFESSIONAL]: '/industries/professional-services',
    };
    
    const path = pathMap[page] || '/';
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-slate-200 bg-navy-950">
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
            <Route path="/products/aqionvox-ai" element={<AqionVox onNavigate={handleNavigate} />} />
            <Route path="/products/aqionflo" element={<AqionFlo onNavigate={handleNavigate} />} />
            
            {/* New Services */}
            <Route path="/services/rapid-application-engineering" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_RAPID_APP]} onNavigate={handleNavigate} />} />
            <Route path="/services/conversational-ai" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_CONVERSATIONAL_AI]} onNavigate={handleNavigate} />} />
            <Route path="/services/ai-automation" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_AI_AUTOMATION]} onNavigate={handleNavigate} />} />
            <Route path="/services/enterprise-ai-solutions" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_ENTERPRISE_AI]} onNavigate={handleNavigate} />} />
            <Route path="/services/ai-strategy-governance" element={<ServiceDetail data={SERVICE_DATA[PageType.SERVICE_AI_STRATEGY]} onNavigate={handleNavigate} />} />

            {/* Industries */}
            <Route path="/industries/healthcare" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_HEALTHCARE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/real-estate" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_REAL_ESTATE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/education" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_EDUCATION]} onNavigate={handleNavigate} />} />
            <Route path="/industries/retail" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_RETAIL]} onNavigate={handleNavigate} />} />
            <Route path="/industries/government" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_GOVERNMENT]} onNavigate={handleNavigate} />} />
            <Route path="/industries/financial-services" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_FINANCE]} onNavigate={handleNavigate} />} />
            <Route path="/industries/hospitality" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_HOSPITALITY]} onNavigate={handleNavigate} />} />
            <Route path="/industries/logistics" element={<IndustryDetail data={INDUSTRY_DATA[PageType.INDUSTRY_LOGISTICS]} onNavigate={handleNavigate} />} />
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
