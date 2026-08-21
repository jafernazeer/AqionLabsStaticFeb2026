
import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const footerColumns: { heading: string; links: { label: string; page: PageType }[] }[] = [
    {
      heading: 'Platform',
      links: [
        { label: 'Aqion Cloud', page: PageType.PLATFORM_AQION_CLOUD },
        { label: 'Integrations', page: PageType.PLATFORM_INTEGRATIONS },
        { label: 'Security & Data', page: PageType.PLATFORM_SECURITY_DATA },
      ],
    },
    {
      heading: 'Agentic AI',
      links: [
        { label: 'Aqion Vox', page: PageType.AGENT_CUSTOMER_SUPPORT },
        { label: 'AI Workforce', page: PageType.WORKFORCE_ROADMAP },
      ],
    },
    {
      heading: 'Solutions',
      links: [
        { label: 'Healthcare', page: PageType.INDUSTRY_HEALTHCARE },
        { label: 'Real Estate', page: PageType.INDUSTRY_REAL_ESTATE },
        { label: 'Financial Services', page: PageType.INDUSTRY_FINANCE },
        { label: 'Legal & Professional', page: PageType.INDUSTRY_PROFESSIONAL },
        { label: 'Hospitality', page: PageType.INDUSTRY_HOSPITALITY },
        { label: 'Education', page: PageType.INDUSTRY_EDUCATION },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Platform Overview', page: PageType.PLATFORM_AQION_CLOUD },
        { label: 'EthikCorp Pilot', page: PageType.RESOURCE_ETHIKCORP_PILOT },
        { label: 'Live VOX Demo', page: PageType.PRODUCT_AQIONVOX },
        { label: 'Investor Enquiries', page: PageType.RESOURCE_INVESTOR_ENQUIRIES },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About', page: PageType.ABOUT },
        { label: 'Pricing', page: PageType.PRICING },
        { label: 'Contact', page: PageType.CONTACT },
        { label: 'Book a Demo', page: PageType.CONTACT },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', page: PageType.PRIVACY },
        { label: 'Terms of Use', page: PageType.TERMS },
        { label: 'Data Processing Notice', page: PageType.DATA_PROCESSING },
      ],
    },
  ];

  const handleNav = (e: React.MouseEvent, page: PageType) => {
    e.preventDefault();
    if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="relative w-full overflow-hidden mesh-bg text-ink font-sans pt-14 md:pt-24 z-10 border-t border-hairline">
      {/* Oversized wordmark */}
      <div aria-hidden className="pointer-events-none absolute -bottom-3 left-0 w-full select-none whitespace-nowrap text-center font-display text-[27vw] leading-none tracking-[-0.055em] text-ink/[0.045] md:-bottom-8 md:text-[27vw]">
        aqionlabs
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-5">
            <p className="eyebrow mb-4">[ The next chapter ]</p>
            <h2 className="font-display text-[2.65rem] md:text-6xl tracking-tight text-ink leading-[0.95]">
              Let's build something <span className="display-italic">unmistakably yours</span>.
            </h2>
            <p className="mobile-clamp-3 mt-5 text-taupe max-w-md leading-relaxed">
              We partner with operators in Dubai, Abu Dhabi and across the GCC to deploy AI employees that answer customers, use company knowledge and execute approved workflows.
            </p>
            <a
              href="#"
              onClick={(e) => handleNav(e, PageType.CONTACT)}
              className="mt-8 inline-flex items-center gap-2 bg-ink text-bone px-6 py-3.5 rounded-full text-sm font-medium hover:bg-petrolDeep transition-colors cursor-pointer"
            >
              Start a conversation
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex gap-2 mt-8">
              {[
                { Icon: Instagram, href: 'https://instagram.com/aqionlabs', label: 'Instagram' },
                { Icon: Linkedin, href: 'https://www.linkedin.com/company/aqionlabs', label: 'LinkedIn' },
                { Icon: Facebook, href: 'https://www.facebook.com/share/18CcdAMyVk/?mibextid=wwXIfr', label: 'Facebook' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-hairline text-graphite hover:text-ink hover:border-ink/40 transition-colors cursor-pointer"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-3 lg:col-span-7 lg:gap-x-8">
            {footerColumns.map(({ heading, links }) => (
              <div key={heading}>
                <h3 className="eyebrow mb-5">{heading}</h3>
                <ul className="space-y-3 text-sm text-graphite">
                  {links.map(({ label, page }) => (
                    <li key={`${heading}-${label}`}>
                      <a href="#" onClick={(e) => handleNav(e, page)} className="transition-colors hover:text-petrol">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-hairline pt-8 md:mt-20 md:flex-row md:items-baseline md:gap-4">
          <p className="font-display text-xl leading-none tracking-tight text-ink">AQION Labs</p>
          <p className="text-sm leading-relaxed text-taupe">
            The AI Workforce Platform for UAE and GCC businesses.
          </p>
        </div>

        <div className="mt-14 md:mt-20 pt-6 md:pt-8 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[10px] md:text-xs text-ash font-mono uppercase tracking-[0.14em] md:tracking-[0.18em]">
          <span>© 2026 AqionLabs FZ-LLC · Dubai, UAE</span>
          <span className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-sage animate-pulse" />
            Operational · GCC time
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
