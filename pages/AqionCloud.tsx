import React, { useEffect } from 'react';
import { PageType } from '../types';
import { Sparkles, Cpu, Database, Workflow, Server, ShieldCheck } from 'lucide-react';
import { PageHero, Section, FeatureGrid, FlowSteps, CTABand, PrimaryButton, GhostButton, BoneButton } from '../components/PageKit';

interface Props {
  onNavigate: (page: PageType) => void;
}

const runtimeQuestions = [
  { title: 'What does this customer need?', body: 'Intent is interpreted from the live conversation rather than a fixed menu.' },
  { title: 'What should be asked next?', body: 'The runtime identifies what information is still missing before it can act.' },
  { title: 'Is the lead qualified?', body: 'Requirements are checked against the qualification logic defined for the workflow.' },
  { title: 'What action should follow?', body: 'The next approved step is selected and handed to the Workflow Engine.' },
];

const workflowActions = ['Create Lead', 'Update CRM', 'Schedule Meeting', 'Notify Team', 'Send Follow-Up', 'Create Task'];

const AqionCloud: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden font-sans text-ink">
      <PageHero
        eyebrow="Aqion Cloud"
        title={<>The Platform Behind<br className="hidden md:block" /> <span className="display-italic text-petrol">AQION&apos;s Agentic AI.</span></>}
        lede="AQION Cloud is the shared intelligence, memory and execution layer designed to power AQION&apos;s growing AI Workforce."
        body="It connects reasoning, business context, workflows, integrations and enterprise infrastructure so individual AI agents can operate as part of one connected platform rather than isolated automations."
        actions={
          <>
            <PrimaryButton onClick={() => onNavigate(PageType.CONTACT)}>Book a Platform Demo</PrimaryButton>
            <GhostButton onClick={() => onNavigate(PageType.WORKFORCE_ROADMAP)}>Explore the AI Workforce</GhostButton>
          </>
        }
      />

      <Section
        eyebrow="Agentic AI Layer"
        title={<>Specialized agents for <span className="display-italic text-petrol">specialized work.</span></>}
        lede="AQION&apos;s agentic AI solutions are designed around defined business responsibilities. Each solution can use the same underlying platform capabilities while operating within its own role, workflow and permissions."
      >
        <FeatureGrid
          columns={2}
          items={[
            {
              icon: Sparkles,
              badge: 'Available Now',
              title: 'AQION VOX',
              body: 'Agentic Voice AI for customer conversations — engaging customers, qualifying opportunities and triggering the next business action.',
            },
            {
              icon: Workflow,
              badge: 'Roadmap',
              title: 'AI Workforce',
              body: 'BRAIN • CHIEF • OPS • PROCURE • FIN • GROWTH — specialized agents planned across knowledge, operations, procurement, finance and growth.',
            },
          ]}
        />
      </Section>

      <Section
        tone="dark"
        eyebrow="AI Runtime"
        title={<>Think. Decide. <span className="display-italic text-bone/90">Coordinate.</span></>}
        lede="The AI Runtime determines how an AQION agent responds to a situation. It interprets intent, retrieves context, determines what information is missing, reasons about the next step and coordinates the actions needed to complete an approved workflow."
      >
        <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.16em] text-bone/45">For AQION VOX, this can mean determining:</p>
        <FeatureGrid tone="dark" columns={4} items={runtimeQuestions.map((q) => ({ ...q, icon: Cpu }))} />
      </Section>

      <Section
        eyebrow="Business Memory"
        title={<>Context That <span className="display-italic text-petrol">Follows the Work.</span></>}
        lede="Agentic AI becomes more useful when every interaction does not begin from zero."
      >
        <div className="grid grid-cols-12 items-start gap-8">
          <div className="col-span-12 lg:col-span-5">
            <p className="text-[15px] leading-relaxed text-graphite md:text-lg">
              Business Memory is designed to combine customer context, conversation history, company knowledge, documents, previous actions and structured business records.
            </p>
            <p className="mt-4 text-[14.5px] leading-relaxed text-taupe md:text-base">
              This gives AQION agents access to relevant context across interactions and workflows.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-6 lg:col-start-7">
            <FeatureGrid
              columns={2}
              items={[
                { icon: Database, title: 'Customer context', body: 'Who the customer is and what has happened before.' },
                { icon: Database, title: 'Conversation history', body: 'Prior calls, messages and captured outcomes.' },
                { icon: Database, title: 'Company knowledge', body: 'Documents, policies and approved reference material.' },
                { icon: Database, title: 'Business records', body: 'Structured records and previously executed actions.' },
              ]}
            />
          </div>
        </div>
      </Section>

      <Section
        tone="parchment"
        eyebrow="Workflow Engine"
        title={<>From Decision <span className="display-italic text-petrol">to Execution.</span></>}
        lede="The Workflow Engine converts AI decisions into approved business actions. The objective is simple: don&apos;t stop at answering. Complete the next step."
      >
        <FlowSteps steps={workflowActions} />
      </Section>

      <Section
        tone="dark"
        eyebrow="Enterprise Infrastructure"
        title={<>Built to Evolve From <span className="display-italic text-bone/90">Pilot to Enterprise.</span></>}
        lede="Customers interact with AQION&apos;s agentic AI solutions while AQION Cloud manages the platform capabilities underneath them."
      >
        <FeatureGrid
          tone="dark"
          columns={4}
          items={[
            { icon: ShieldCheck, title: 'Authentication & permissions', body: 'Role-based access and workflow-level permissions.' },
            { icon: Server, title: 'Deployment & storage', body: 'Deployment paths and data storage aligned to requirements.' },
            { icon: Cpu, title: 'Monitoring & logging', body: 'Activity logging and monitoring across agent actions.' },
            { icon: Workflow, title: 'Integrations & regions', body: 'Integrations plus regional deployment requirements.' },
          ]}
        />
      </Section>

      <CTABand
        title={<>One platform. <span className="display-italic">Every AQION agent.</span></>}
        body="Start with one workflow on AQION Cloud, then expand as the business case proves itself."
        actions={
          <>
            <BoneButton onClick={() => onNavigate(PageType.CONTACT)}>Book a Demo</BoneButton>
            <button
              onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-4 text-sm font-medium text-bone transition-colors hover:bg-white/15"
            >
              Explore Aqion Vox
            </button>
          </>
        }
      />
    </div>
  );
};

export default AqionCloud;
