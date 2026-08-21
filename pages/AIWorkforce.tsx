import React, { useEffect } from 'react';
import { PageType } from '../types';
import { Headphones, Brain, Briefcase, Wrench, ShoppingCart, Receipt, Share2, Cpu, Database, Workflow, Server } from 'lucide-react';
import { PageHero, Section, FeatureGrid, StatusPill, CTABand, PrimaryButton, GhostButton, BoneButton } from '../components/PageKit';

interface Props {
  onNavigate: (page: PageType) => void;
}

const roadmapAgents = [
  { icon: Brain, title: 'AQION BRAIN', role: 'Business Knowledge Agent', body: 'Designed to work across company documents, procedures, policies and organizational knowledge.' },
  { icon: Briefcase, title: 'AQION CHIEF', role: 'Executive Intelligence Agent', body: 'Designed to surface business summaries, important events, alerts and decision-support intelligence for business leaders.' },
  { icon: Wrench, title: 'AQION OPS', role: 'Operations Agent', body: 'Designed to coordinate tasks, tickets, requests, escalations and operational workflows.' },
  { icon: ShoppingCart, title: 'AQION PROCURE', role: 'Procurement Agent', body: 'Designed to assist with RFQs, supplier communications, information collection and procurement workflows.' },
  { icon: Receipt, title: 'AQION FIN', role: 'Finance Operations Agent', body: 'Designed around invoice workflows, collections, document processing and finance administration.' },
  { icon: Share2, title: 'AQION GROWTH', role: 'Growth Agent', body: 'Designed to coordinate content, campaigns, lead nurturing and human-approved marketing workflows.' },
];

const platformLayers = [
  { icon: Cpu, title: 'AI Runtime', body: 'Think · Decide · Coordinate' },
  { icon: Database, title: 'Business Memory', body: 'Customers · Knowledge · Documents · Context' },
  { icon: Workflow, title: 'Workflow Engine', body: 'Automate · Integrate · Execute' },
  { icon: Server, title: 'Enterprise Infrastructure', body: 'Secure · Govern · Scale' },
];

const AIWorkforce: React.FC<Props> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mesh-bg min-h-screen overflow-x-hidden font-sans text-ink">
      <PageHero
        eyebrow="AQION Agentic AI Workforce"
        title={<>AI That Doesn&apos;t Just Respond. <span className="display-italic text-petrol">It Acts.</span></>}
        lede="AQION develops agentic AI solutions capable of understanding context, reasoning through business workflows and taking approved actions across customer and internal operations."
        body="Start with AQION VOX, then expand through the AQION AI Workforce."
        actions={
          <>
            <PrimaryButton onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}>Explore AQION VOX</PrimaryButton>
            <GhostButton onClick={() => onNavigate(PageType.PLATFORM_AQION_CLOUD)}>See Aqion Cloud</GhostButton>
          </>
        }
      />

      <Section eyebrow="Available now" title={<>AQION VOX — <span className="display-italic text-petrol">Agentic Voice AI.</span></>}>
        <div className="relative overflow-hidden rounded-[28px] border border-hairline bg-paper/85 p-6 shadow-[0_28px_90px_-52px_rgba(28,25,23,0.4)] backdrop-blur md:p-10">
          <div aria-hidden className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-petrol/10 blur-3xl" />
          <div className="relative grid grid-cols-12 items-center gap-8">
            <div className="col-span-12 lg:col-span-7">
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-hairline bg-parchment text-petrol">
                  <Headphones className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <StatusPill label="Available Now" />
              </div>
              <h3 className="font-display text-2xl leading-tight text-ink md:text-4xl">AQION VOX</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-graphite md:text-lg">
                Engage customers, understand requirements, qualify opportunities, capture structured information and trigger the next business action.
              </p>
              <div className="mt-6">
                <PrimaryButton onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}>Explore AQION VOX</PrimaryButton>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section
        tone="dark"
        eyebrow="AI Workforce"
        title={<>Specialized Agents. <span className="display-italic text-bone/90">Shared Intelligence.</span></>}
        lede="AQION&apos;s long-term vision extends beyond customer conversations. AQION Cloud is being designed to support a connected workforce of specialized AI agents across the organization."
      >
        <FeatureGrid
          tone="dark"
          columns={3}
          items={roadmapAgents.map((a) => ({ icon: a.icon, title: a.title, badge: 'Roadmap', body: `${a.role}. ${a.body}` }))}
        />
      </Section>

      <Section
        tone="parchment"
        eyebrow="One platform"
        title={<>Different agents. Shared intelligence. <span className="display-italic text-petrol">One platform.</span></>}
        lede="Every AQION agent is intended to share the same AI Runtime, Business Memory, Workflow Engine and Enterprise Infrastructure through AQION Cloud."
      >
        <FeatureGrid columns={4} items={platformLayers} />
        <p className="mt-8 text-center text-[14.5px] leading-relaxed text-taupe md:text-base">
          Each agent has a specialized role. AQION Cloud provides the shared intelligence underneath them.
        </p>
      </Section>

      <CTABand
        eyebrow="Design partners"
        title={<>Help shape the <span className="display-italic">AI Workforce.</span></>}
        body="We are selecting design partners for the roadmap agents. Bring the workflow; we will scope the agent around it."
        actions={<BoneButton onClick={() => onNavigate(PageType.CONTACT)}>Become a Design Partner</BoneButton>}
      />
    </div>
  );
};

export default AIWorkforce;
