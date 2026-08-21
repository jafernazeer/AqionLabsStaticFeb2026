import React, { useEffect } from 'react';
import { PageType } from '../types';
import { Rocket, TrendingUp, Building2 } from 'lucide-react';
import { PageHero, Section, FeatureGrid, CTABand, PrimaryButton, GhostButton, BoneButton } from '../components/PageKit';

interface Props {
  onNavigate: (page: PageType) => void;
}

const Pricing: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden font-sans text-ink">
      <PageHero
        eyebrow="Pricing"
        title={<>Start With One <span className="display-italic text-petrol">Agentic AI Workflow.</span></>}
        lede="Prove value around a specific business process before expanding."
        body="Pilot → Growth → Enterprise. Pricing depends on the workflow, usage and deployment requirements, so every plan is scoped with you."
        actions={
          <>
            <PrimaryButton onClick={() => onNavigate(PageType.CONTACT)}>Talk to Sales</PrimaryButton>
            <GhostButton onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}>Explore Aqion Vox</GhostButton>
          </>
        }
      />

      <Section
        eyebrow="Plans"
        title={<>Three stages. <span className="display-italic text-petrol">One direction.</span></>}
        lede="Each stage builds on the last — validate a single workflow, move it into live operations, then extend across systems and infrastructure requirements."
      >
        <FeatureGrid
          columns={3}
          items={[
            {
              icon: Rocket,
              title: 'Pilot',
              body: 'Validate AQION VOX around one defined customer workflow.',
              bullets: ['One agentic workflow', 'Core integrations', 'Dashboard access', 'Measured outcome review'],
            },
            {
              icon: TrendingUp,
              title: 'Growth',
              body: 'Move Agentic AI into live business operations.',
              bullets: ['Live operational deployment', 'Higher usage volumes', 'Expanded integrations', 'Analytics and reporting'],
            },
            {
              icon: Building2,
              title: 'Enterprise',
              body: 'Deploy Agentic AI across more complex systems, workflows and infrastructure requirements.',
              bullets: ['Multiple workflows and agents', 'Enterprise identity and controls', 'Security and data review', 'Custom deployment options'],
            },
          ]}
        />
      </Section>

      <CTABand
        title={<>Start with one <span className="display-italic">workflow.</span></>}
        body="Tell us the process costing your team the most time. We will scope the pilot around it."
        actions={<BoneButton onClick={() => onNavigate(PageType.CONTACT)}>Book a Demo</BoneButton>}
      />
    </div>
  );
};

export default Pricing;
