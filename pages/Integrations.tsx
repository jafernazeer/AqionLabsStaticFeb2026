import React, { useEffect } from 'react';
import { PageType } from '../types';
import { Database, MessageSquare, CalendarDays, Plug, Rocket, Building2, ShieldCheck } from 'lucide-react';
import { PageHero, Section, FeatureGrid, FlowSteps, CTABand, PrimaryButton, GhostButton, BoneButton } from '../components/PageKit';

interface Props {
  onNavigate: (page: PageType) => void;
}

const orchestrationFlow = ['Customer Conversation', 'AQION', 'CRM / ERP / Calendar / Email', 'Business Action'];

const Integrations: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden font-sans text-ink">
      <PageHero
        eyebrow="Integrations"
        title={<>Keep Your Systems. <span className="display-italic text-petrol">Add Intelligence.</span></>}
        lede="AQION is designed to sit above the tools businesses already use — connecting customer conversations, business context and workflows without requiring organizations to replace their existing systems."
        actions={
          <>
            <PrimaryButton onClick={() => onNavigate(PageType.CONTACT)}>Discuss Your Integration</PrimaryButton>
            <GhostButton onClick={() => onNavigate(PageType.PLATFORM_AQION_CLOUD)}>See Aqion Cloud</GhostButton>
          </>
        }
      />

      <Section
        eyebrow="Orchestration layer"
        title={<>Your systems remain the <span className="display-italic text-petrol">system of record.</span></>}
        lede="AQION can act as an intelligence and orchestration layer around existing business applications. Potential workflows include:"
      >
        <FlowSteps steps={orchestrationFlow} />
      </Section>

      <Section
        tone="dark"
        eyebrow="Coverage"
        title={<>Built around the stack <span className="display-italic text-bone/90">you already run.</span></>}
        lede="Integration availability is validated during implementation and varies by customer environment."
      >
        <FeatureGrid
          tone="dark"
          columns={2}
          items={[
            {
              icon: Database,
              title: 'CRM & Customer Systems',
              body: 'Designed for integration workflows involving Zoho, HubSpot, Bitrix24, Odoo and other CRM platforms through APIs.',
              bullets: ['Create leads', 'Update contacts', 'Add conversation summaries', 'Create follow-up tasks', 'Log appointments', 'Update pipeline status'],
            },
            {
              icon: MessageSquare,
              title: 'Communication',
              body: 'Connect customer conversations across the channels your customers already use.',
              bullets: ['Voice', 'Email', 'Messaging', 'Web applications', 'Telephony infrastructure'],
            },
            {
              icon: CalendarDays,
              title: 'Productivity',
              body: 'Workflow integrations across the tools your teams work in daily.',
              bullets: ['Calendars', 'Microsoft 365', 'Google Workspace', 'Internal notification systems'],
            },
            {
              icon: Plug,
              title: 'Custom Business Systems',
              body: 'If it has an API, AQION can evaluate connecting to it.',
              bullets: ['REST APIs', 'Webhooks', 'Database services', 'Workflow automation', 'Custom connectors'],
            },
          ]}
        />
      </Section>

      <Section
        tone="parchment"
        eyebrow="Deployment"
        title={<>Deployment that grows <span className="display-italic text-petrol">with the use case.</span></>}
      >
        <FeatureGrid
          columns={3}
          items={[
            { icon: Rocket, title: 'Pilot Deployment', body: 'Validate one workflow quickly.' },
            { icon: Building2, title: 'Production Deployment', body: 'Connect AQION with live business systems and operational processes.' },
            { icon: ShieldCheck, title: 'Enterprise Deployment', body: 'Evaluate additional requirements including security, access controls, data residency, monitoring and custom infrastructure.' },
          ]}
        />
      </Section>

      <CTABand
        title={<>Connect AQION to <span className="display-italic">your stack.</span></>}
        body="Tell us which systems hold your customer and operational data. We will map the integration path for your first workflow."
        actions={<BoneButton onClick={() => onNavigate(PageType.CONTACT)}>Discuss Your Integration</BoneButton>}
      />
    </div>
  );
};

export default Integrations;
