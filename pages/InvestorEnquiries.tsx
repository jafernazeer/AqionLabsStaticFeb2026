import React, { useEffect } from 'react';
import { PageType } from '../types';
import { Headphones, Brain, Briefcase, Wrench, ShoppingCart, Receipt, Share2 } from 'lucide-react';
import { PageHero, Section, FeatureGrid, FlowSteps, CTABand, PrimaryButton, GhostButton, BoneButton } from '../components/PageKit';

interface Props {
  onNavigate: (page: PageType) => void;
}

const platformStack = ['Agentic AI', 'AI Runtime', 'Business Memory', 'Workflow Engine', 'Enterprise Infrastructure'];

const workforce = [
  { icon: Headphones, title: 'VOX', body: 'Customer Engagement', badge: 'Available Now' },
  { icon: Brain, title: 'BRAIN', body: 'Knowledge', badge: 'Roadmap' },
  { icon: Briefcase, title: 'CHIEF', body: 'Executive Intelligence', badge: 'Roadmap' },
  { icon: Wrench, title: 'OPS', body: 'Operations', badge: 'Roadmap' },
  { icon: ShoppingCart, title: 'PROCURE', body: 'Procurement', badge: 'Roadmap' },
  { icon: Receipt, title: 'FIN', body: 'Finance', badge: 'Roadmap' },
  { icon: Share2, title: 'GROWTH', body: 'Growth', badge: 'Roadmap' },
];

const InvestorEnquiries: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden font-sans text-ink">
      <PageHero
        eyebrow="Investors"
        title={<>Building the Agentic AI Platform for <span className="display-italic text-petrol">UAE and GCC Businesses.</span></>}
        lede="AQION Labs is building a platform for deploying specialized AI agents across customer and business workflows."
        body="We are starting with AQION VOX, our agentic voice AI solution, and expanding through AQION Cloud toward a connected AI Workforce."
        actions={
          <>
            <PrimaryButton onClick={() => onNavigate(PageType.CONTACT)}>Investor Enquiries</PrimaryButton>
            <GhostButton onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}>See AQION VOX</GhostButton>
          </>
        }
      />

      <Section
        eyebrow="The wedge"
        title={<>AQION VOX — <span className="display-italic text-petrol">a working product.</span></>}
        lede="A working agentic voice AI solution that turns customer conversations into structured business opportunities and actions."
      >
        <FeatureGrid
          columns={3}
          items={[
            { icon: Headphones, title: 'Live deployment', badge: 'Available Now', body: 'Deployed with EthikCorp as the first pilot customer.' },
            { icon: Brain, title: 'Structured output', body: 'Conversations become qualified leads, records and triggered actions.' },
            { icon: Wrench, title: 'Platform pull-through', body: 'Every VOX deployment builds reusable platform capability.' },
          ]}
        />
      </Section>

      <Section
        tone="dark"
        eyebrow="The platform"
        title={<>AQION Cloud — <span className="display-italic text-bone/90">the compounding layer.</span></>}
        lede="Shared runtime, memory, workflow execution and infrastructure underneath every agent."
      >
        <FlowSteps tone="dark" steps={platformStack} />
      </Section>

      <Section
        tone="parchment"
        eyebrow="The expansion"
        title={<>AQION <span className="display-italic text-petrol">AI Workforce.</span></>}
        lede="A connected portfolio of specialized agents across customer and internal operations."
      >
        <FeatureGrid columns={4} items={workforce} />
        <p className="mt-10 mx-auto max-w-3xl text-center font-display text-xl leading-snug text-ink md:text-2xl">
          AQION is starting with voice as the wedge, while building the shared platform required to deploy Agentic AI across the enterprise.
        </p>
      </Section>

      <CTABand
        eyebrow="Investors"
        title={<>Request the <span className="display-italic">investor material.</span></>}
        body="For enquiries about the platform, roadmap and pilot traction."
        actions={<BoneButton onClick={() => onNavigate(PageType.CONTACT)}>Contact Investor Relations</BoneButton>}
      />
    </div>
  );
};

export default InvestorEnquiries;
