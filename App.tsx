
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageLoader from './components/PageLoader';
import { PageType } from './types';
import { SERVICE_DATA, PRODUCT_DATA } from './data';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const AqionVox = lazy(() => import('./pages/AqionVox'));
const AIChatbots = lazy(() => import('./pages/AIChatbots'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Careers = lazy(() => import('./pages/Careers'));
const Privacy = lazy(() => import('./pages/Privacy'));
const Terms = lazy(() => import('./pages/Terms'));

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
    if (path === '/products/aqionvox-ai') return PageType.PRODUCT_AQIONVOX;
    if (path === '/services/intelligent-chatbots') return PageType.SOLUTION_CHATBOTS;
    if (path === '/services/custom-web-app-development') return PageType.SOLUTION_WEB_DEV;
    if (path === '/services/mobile-app-development') return PageType.SOLUTION_MOBILE_DEV;
    if (path === '/services/ai-strategy-consulting') return PageType.SOLUTION_STRATEGY;
    if (path === '/services/private-gpt-development') return PageType.SOLUTION_GENAI;
    if (path === '/services/ai-governance-security') return PageType.SOLUTION_GOVERNANCE;
    if (path === '/services/human-ai-avatars') return PageType.SOLUTION_DIGITAL_HUMAN;
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
      [PageType.SOLUTION_CHATBOTS]: '/services/intelligent-chatbots',
      [PageType.SOLUTION_WEB_DEV]: '/services/custom-web-app-development',
      [PageType.SOLUTION_MOBILE_DEV]: '/services/mobile-app-development',
      [PageType.SOLUTION_STRATEGY]: '/services/ai-strategy-consulting',
      [PageType.SOLUTION_GENAI]: '/services/private-gpt-development',
      [PageType.SOLUTION_GOVERNANCE]: '/services/ai-governance-security',
      [PageType.SOLUTION_DIGITAL_HUMAN]: '/services/human-ai-avatars',
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
            
            {/* Services */}
            <Route path="/services/intelligent-chatbots" element={<AIChatbots onNavigate={handleNavigate} />} />
            <Route path="/services/custom-web-app-development" element={<ServiceDetail data={SERVICE_DATA[PageType.SOLUTION_WEB_DEV]} onNavigate={handleNavigate} />} />
            <Route path="/services/mobile-app-development" element={<ServiceDetail data={SERVICE_DATA[PageType.SOLUTION_MOBILE_DEV]} onNavigate={handleNavigate} />} />
            <Route path="/services/ai-strategy-consulting" element={<ServiceDetail data={SERVICE_DATA[PageType.SOLUTION_STRATEGY]} onNavigate={handleNavigate} />} />
            <Route path="/services/private-gpt-development" element={<ServiceDetail data={SERVICE_DATA[PageType.SOLUTION_GENAI]} onNavigate={handleNavigate} />} />
            <Route path="/services/ai-governance-security" element={<ServiceDetail data={SERVICE_DATA[PageType.SOLUTION_GOVERNANCE]} onNavigate={handleNavigate} />} />
            <Route path="/services/human-ai-avatars" element={<ServiceDetail data={SERVICE_DATA[PageType.SOLUTION_DIGITAL_HUMAN]} onNavigate={handleNavigate} />} />
            
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
