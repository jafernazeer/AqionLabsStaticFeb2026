import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageType } from '../types';

// Importing copied components from aqionflo
import HeroSection from '../components/aqionflo-sections/HeroSection';
import FeatureSection from '../components/aqionflo-sections/FeatureSection';
import AIIntegrationSection from '../components/aqionflo-sections/AIIntegrationSection';
import ModulesSection from '../components/aqionflo-sections/ModulesSection';
import DashboardShowcase from '../components/aqionflo-sections/DashboardShowcase';
import CTASection from '../components/aqionflo-sections/CTASection';

gsap.registerPlugin(ScrollTrigger);

interface AqionFloProps {
  onNavigate: (page: PageType) => void;
}

const AqionFlo: React.FC<AqionFloProps> = ({ onNavigate }) => {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Global snap for pinned sections
    const setupGlobalSnap = () => {
      const pinned = ScrollTrigger.getAll()
        .filter(st => st.vars.pin)
        .sort((a, b) => a.start - b.start);
      
      const maxScroll = ScrollTrigger.maxScroll(window);
      if (!maxScroll || pinned.length === 0) return;

      const pinnedRanges = pinned.map(st => ({
        start: st.start / maxScroll,
        end: (st.end ?? st.start) / maxScroll,
        center: (st.start + ((st.end ?? st.start) - st.start) * 0.5) / maxScroll,
      }));

      ScrollTrigger.create({
        snap: {
          snapTo: (value: number) => {
            const inPinned = pinnedRanges.some(r => value >= r.start - 0.02 && value <= r.end + 0.02);
            if (!inPinned) return value;

            const target = pinnedRanges.reduce((closest, r) =>
              Math.abs(r.center - value) < Math.abs(closest - value) ? r.center : closest,
              pinnedRanges[0]?.center ?? 0
            );
            return target;
          },
          duration: { min: 0.15, max: 0.35 },
          delay: 0,
          ease: "power2.out"
        }
      });
    };

    // Delay to ensure all ScrollTriggers are created
    const timer = setTimeout(setupGlobalSnap, 500);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach(st => st.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative bg-[#070B14]">
      {/* Grain Overlay */}
      <div className="grain-overlay" />
      
      {/* Main Content (without global Nav and Footer since AqionLabs handles it) */}
      <main className="relative pt-20"> {/* Add padding top to account for AqionLabs navbar */}
        {/* Hero Section */}
        <HeroSection />
        
        {/* Feature Sections */}
        <FeatureSection 
          id="financial"
          eyebrow="Financial Health"
          headline="Visibility at the Speed of Business."
          body="The Command Center aggregates millions of data points into immediate intelligence—liquidity, receivables, and obligations in one view."
          cta="See the dashboard"
          image="/images/dashboard-home.jpg"
          bgImage="/images/bg-warehouse.jpg"
          reverse={false}
        />
        
        <FeatureSection 
          id="interactive"
          eyebrow="Interactive Intelligence"
          headline="Static reports are obsolete."
          body="Filter by personnel or timeline directly from the visualization. Click any point to open the underlying source report—instantly."
          cta="Explore analytics"
          image="/images/dashboard-trade.jpg"
          bgImage="/images/bg-team.jpg"
          reverse={true}
          showAnnotation={true}
        />
        
        <FeatureSection 
          id="sales"
          eyebrow="Sales Pipeline"
          headline="Convert opportunity into revenue with zero friction."
          body="Track the lifecycle of every deal—from open quotation to closed invoice—with real-time margin visibility."
          cta="See sales features"
          image="/images/dashboard-sales.jpg"
          bgImage="/images/bg-retail.jpg"
          reverse={false}
        />
        
        <FeatureSection 
          id="workflow"
          eyebrow="Workflow & Context"
          headline="The Flow: from Quotation to Invoice."
          body="Convert quotations to orders and orders to invoices automatically. Use Expand to view payment history and delivery status without leaving your list."
          cta="Watch the flow"
          image="/images/dashboard-orders.jpg"
          bgImage="/images/bg-logistics.jpg"
          reverse={true}
        />
        
        <FeatureSection 
          id="inventory"
          eyebrow="Inventory"
          headline="Inventory Control & Asset Valuation."
          body="Manage physical assets with digital precision. Real-time stock valuation ensures supply chain data is as accessible as financial data."
          cta="Explore inventory"
          image="/images/dashboard-inventory.jpg"
          bgImage="/images/bg-storage.jpg"
          reverse={false}
        />
        
        <FeatureSection 
          id="fulfillment"
          eyebrow="Fulfillment"
          headline="Automated Fulfillment Oversight."
          body="Prevent stockouts and production delays. The system monitors asset levels in real time and triggers alerts when critical items dip below thresholds."
          cta="See automation"
          image="/images/dashboard-overview.jpg"
          bgImage="/images/bg-loading.jpg"
          reverse={true}
        />
        
        <FeatureSection 
          id="finance"
          eyebrow="Finance"
          headline="Financial Oversight & Banking."
          body="Beyond simple bookkeeping. Visualize the liquidity pulse over time and manage banking obligations to prevent errors."
          cta="Explore finance"
          image="/images/dashboard-accounts.jpg"
          bgImage="/images/bg-office.jpg"
          reverse={false}
        />
        
        <FeatureSection 
          id="reporting"
          eyebrow="Reporting"
          headline="Comprehensive Reporting Suite."
          body="One-click generation of essential financial instruments. From regulatory tax reports to internal balance sheets—all automated and instant."
          cta="View reports"
          image="/images/dashboard-reports.jpg"
          bgImage="/images/bg-architecture.jpg"
          reverse={true}
        />
        
        {/* AI Integration Section */}
        <AIIntegrationSection />
        
        {/* Modules Section */}
        <ModulesSection />
        
        {/* Dashboard Showcase */}
        <DashboardShowcase />
        
        {/* CTA Section */}
        <CTASection />
      </main>
    </div>
  );
}

export default AqionFlo;
