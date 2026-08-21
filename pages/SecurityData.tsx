import React, { useEffect } from 'react';
import { PageType } from '../types';
import { KeyRound, FileText, Eye, ScrollText, Server, Lock } from 'lucide-react';
import { PageHero, Section, FeatureGrid, FlowSteps, CTABand, PrimaryButton, GhostButton, BoneButton } from '../components/PageKit';

interface Props {
  onNavigate: (page: PageType) => void;
}

const oversight = ['Human Review', 'Human Approval', 'Human Escalation', 'Human Handoff'];

const SecurityData: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden font-sans text-ink">
      <PageHero
        eyebrow="Trust"
        title={<>Agentic AI Needs Control, <span className="display-italic text-petrol">Not Just Intelligence.</span></>}
        lede="AQION is designed around a simple principle: AI should have enough access to complete its job — and no more."
        body="Security, data handling and human oversight are considered as part of each deployment rather than added after an AI agent goes live."
        actions={
          <>
            <PrimaryButton onClick={() => onNavigate(PageType.CONTACT)}>Request a Security &amp; Data Review</PrimaryButton>
            <GhostButton onClick={() => onNavigate(PageType.PLATFORM_AQION_CLOUD)}>See Aqion Cloud</GhostButton>
          </>
        }
      />

      <Section
        eyebrow="Access scope"
        title={<>Know what the AI <span className="display-italic text-petrol">can access.</span></>}
        lede="Each deployment defines the information required for the approved workflow. Access should be scoped according to the role the AI agent performs."
      >
        <FeatureGrid
          columns={3}
          items={[
            { icon: KeyRound, title: 'Customer details', body: 'Only the identity fields the workflow actually needs.' },
            { icon: FileText, title: 'Conversation transcripts', body: 'Captured according to the retention rules agreed for the deployment.' },
            { icon: FileText, title: 'Lead information', body: 'Structured qualification data produced during the conversation.' },
            { icon: FileText, title: 'Business documents', body: 'Approved reference material scoped to the agent role.' },
            { icon: ScrollText, title: 'CRM records', body: 'Read and write access limited to the connected objects.' },
            { icon: ScrollText, title: 'Workflow status', body: 'State needed to progress and audit the approved workflow.' },
          ]}
        />
      </Section>

      <Section
        tone="dark"
        eyebrow="Oversight"
        title={<>Human oversight <span className="display-italic text-bone/90">where it matters.</span></>}
        lede="Not every action should be autonomous. AQION workflows can be designed so selected actions require explicit human involvement."
      >
        <FlowSteps tone="dark" steps={oversight} compact />
        <p className="mx-auto mt-8 max-w-2xl text-center text-[14px] leading-relaxed text-bone/60 md:text-base">
          Controlled autonomy, defined permissions, monitoring and auditability have become key requirements for production agent deployments.
        </p>
      </Section>

      <Section
        eyebrow="Data residency"
        title={<>Transparent <span className="display-italic text-petrol">by design.</span></>}
      >
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[15px] leading-relaxed text-graphite md:text-lg">
              AQION can evaluate UAE-hosted deployment options for supported data and workloads based on customer requirements. However, data location depends on the complete deployment architecture.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6">
            <p className="text-[14.5px] leading-relaxed text-taupe md:text-base">
              Where third-party AI, speech or infrastructure services are involved, processing locations may vary by configuration. Before production deployment, AQION can document the relevant data flow and review the architecture with the customer.
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="parchment"
        eyebrow="Access & Governance"
        title={<>Deployments designed <span className="display-italic text-petrol">around control.</span></>}
      >
        <FeatureGrid
          columns={4}
          items={[
            { icon: Lock, title: 'Role-based access', body: 'Scoped to the role the agent performs.' },
            { icon: KeyRound, title: 'Authentication', body: 'Identity controls across platform surfaces.' },
            { icon: Server, title: 'Controlled integrations', body: 'Connections approved per workflow.' },
            { icon: Eye, title: 'Activity logging', body: 'Auditability across agent actions and escalations.' },
          ]}
        />
      </Section>

      <CTABand
        eyebrow="Enterprise requirements"
        title={<>Stricter infrastructure or <span className="display-italic">residency requirements?</span></>}
        body="We will document the data flow, review the architecture and scope the controls before anything goes to production."
        actions={<BoneButton onClick={() => onNavigate(PageType.CONTACT)}>Request a Security &amp; Data Review</BoneButton>}
      />
    </div>
  );
};

export default SecurityData;
