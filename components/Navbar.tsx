
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Bot, Activity, ArrowUpRight } from 'lucide-react';
import { PageType, NavItem } from '../types';

interface NavbarProps {
  onNavigate: (page: PageType, scrollToDemo?: boolean, scrollToIndustries?: boolean) => void;
  currentPage: PageType;
}

const navItems: NavItem[] = [
  { label: 'Home', page: PageType.HOME },
  {
    label: 'Products',
    children: [
      { label: 'AqionVox', page: PageType.PRODUCT_AQIONVOX },
    ],
  },
  {
    label: 'Agentic AI',
    children: [
      { label: 'Digital Presence Studio', page: PageType.SERVICE_DIGITAL_PRESENCE_STUDIO, href: '/services/digital-presence-studio' },
      { label: 'Marketing Agent', page: PageType.SERVICE_MARKETING_AGENT, href: '/services/marketing-agent' },
      { label: 'Sales Agent', page: PageType.SERVICE_SALES_AGENT, href: '/services/sales-agent' },
      { label: 'Customer Conversation Agent', page: PageType.SERVICE_CUSTOMER_CONVERSATION_AGENT, href: '/services/customer-conversation-agent' },
      { label: 'Operations Agent', page: PageType.SERVICE_OPERATIONS_AGENT, href: '/services/operations-agent' },
      { label: 'Internal Knowledge Agent', page: PageType.SERVICE_INTERNAL_KNOWLEDGE_AGENT, href: '/services/internal-knowledge-agent' },
      { label: 'Sovereign AI Foundation', page: PageType.SERVICE_SOVEREIGN_AI_FOUNDATION, href: '/services/sovereign-ai-foundation' },
    ],
  },
  {
    label: 'Industries',
    page: PageType.INDUSTRIES,
  },
  { label: 'About', page: PageType.ABOUT },
  { label: 'Contact', page: PageType.CONTACT },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopHover, setDesktopHover] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = (page: PageType, scrollToIndustries?: boolean) => {
    onNavigate(page, false, scrollToIndustries);
    setIsOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(prev => (prev === label ? null : label));
  };

  const isCurrentPage = (page?: PageType) => {
    if (!page) return false;
    return currentPage === page || (page === PageType.INDUSTRIES && currentPage.startsWith('INDUSTRY_'));
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 border-b transition-colors duration-300 ${
        scrolled || isOpen ? 'border-hairline bg-bone shadow-[0_10px_34px_-28px_rgba(28,25,23,0.45)]' : 'border-hairline/70 bg-bone'
      }`}
    >
      <div className="mx-auto h-16 max-w-7xl px-4 sm:px-6 lg:h-20 lg:px-8">
        <div className="flex items-center justify-between h-full transition-all duration-300">
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-2.5" onClick={() => handleNavigate(PageType.HOME)}>
            <img
              src="/Aqionlabsicon-clean.png"
              alt="AqionLabs icon"
              className="h-9 w-9 object-contain lg:h-10 lg:w-10"
            />
            <span className="font-hero text-[17px] font-semibold tracking-[-0.03em] text-ink lg:text-[18px]">
              Aqionlabs<span className="bg-gradient-to-r from-[#4f46e5] to-[#9333ea] bg-clip-text text-transparent">.</span>ai
            </span>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1 h-full">
              {navItems.map(item => (
                <div key={item.label} className="relative group h-full flex items-center">
                  {item.children ? (
                    <div
                      onMouseEnter={() => setDesktopHover(item.label)}
                      onMouseLeave={() => setDesktopHover(null)}
                      className="relative h-full flex items-center"
                    >
                      <button
                        className={`px-3 py-2 rounded-md text-[13px] font-medium flex items-center gap-1 focus:outline-none transition-colors cursor-pointer ${
                          desktopHover === item.label ? 'text-ink' : 'text-graphite hover:text-ink'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </button>

                      {desktopHover === item.label && (
                        <div className="absolute left-0 top-full pt-3 w-80 z-50">
                          <div className="rounded-xl bg-paper border border-hairline shadow-[0_24px_60px_-20px_rgba(28,25,23,0.18)] overflow-hidden">
                            <div className="p-2">
                              {item.children.map(child => {
                                const childClassName = `w-full text-left px-3 py-2.5 text-sm rounded-md transition-colors flex items-center justify-between group cursor-pointer ${
                                  currentPage === child.page ? 'bg-parchment text-ink' : 'text-graphite hover:bg-parchment hover:text-ink'
                                }`;
                                const childContent = (
                                  <>
                                    <span className="flex items-center gap-2.5">
                                      {child.label === 'AqionVox' && <Bot className="w-4 h-4 text-petrol" />}
                                      {child.label === 'AqionFlo' && <Activity className="w-4 h-4 text-petrol" />}
                                      <span className={
                                        child.label === 'Explore All'
                                          ? 'bg-gradient-to-r from-[#4f46e5] to-[#9333ea] bg-clip-text font-semibold text-transparent'
                                          : (child.label === 'AqionVox' || child.label === 'AqionFlo') ? 'font-medium text-ink' : ''
                                      }>
                                        {child.label}
                                      </span>
                                    </span>
                                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 text-petrol transition-opacity" />
                                  </>
                                );

                                return child.href ? (
                                  <a key={child.label} href={child.href} className={childClassName}>
                                    {childContent}
                                  </a>
                                ) : (
                                  <button
                                    key={child.label}
                                    onClick={() => handleNavigate(child.page!, child.label === 'Explore All')}
                                    className={childClassName}
                                  >
                                    {childContent}
                                  </button>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => item.page && handleNavigate(item.page)}
                      className={`px-3 py-2 rounded-md text-[13px] font-medium transition-colors cursor-pointer ${
                        isCurrentPage(item.page) ? 'text-ink' : 'text-graphite hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

              <button
                onClick={() => handleNavigate(PageType.CONTACT)}
                className="ml-4 inline-flex items-center gap-1.5 bg-ink text-bone text-[13px] font-medium px-4 py-2 rounded-full hover:bg-petrolDeep transition-colors cursor-pointer"
              >
                Book a call
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="z-50 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-ink/10 bg-paper text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-parchment focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-x-3 top-[4.5rem] z-40 md:hidden">
          <div className="mx-auto max-w-md overflow-hidden rounded-[28px] border border-white/55 bg-white/68 px-3 py-3 shadow-[0_24px_70px_-34px_rgba(28,25,23,0.45)] backdrop-blur-2xl">
            {navItems.map(item => (
              <div key={item.label} className="border-b border-hairline/70">
                {item.children ? (
                  <div>
                    <button
                      className={`flex min-h-14 w-full cursor-pointer items-center justify-between rounded-2xl px-4 text-left font-display text-[1.35rem] transition-colors ${
                        mobileExpanded === item.label ? 'bg-parchment text-ink' : 'text-ink hover:bg-parchment'
                      }`}
                      onClick={() => toggleMobileSection(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-5 h-5 text-petrol transform transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="mb-3 grid gap-1 rounded-2xl border border-hairline bg-paper p-1.5">
                        {item.children.map(child => {
                          const childClassName = "flex min-h-11 w-full cursor-pointer items-center rounded-xl px-4 text-left text-sm transition-colors hover:bg-bone";
                          const childContent = (
                            <span className={`${
                              child.label === 'Explore All'
                                ? 'bg-gradient-to-r from-[#4f46e5] to-[#9333ea] bg-clip-text font-semibold text-transparent'
                                : child.label === 'AqionVox' || child.label === 'AqionFlo' ? 'font-medium text-ink' : 'text-graphite'
                            }`}>
                              {child.label}
                            </span>
                          );

                          return child.href ? (
                            <a key={child.label} href={child.href} className={childClassName}>
                              {childContent}
                            </a>
                          ) : (
                            <button
                              key={child.label}
                              onClick={() => handleNavigate(child.page!, child.label === 'Explore All')}
                              className={childClassName}
                            >
                              {childContent}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => item.page && handleNavigate(item.page)}
                    className={`min-h-14 w-full cursor-pointer rounded-2xl px-4 text-left font-display text-[1.35rem] transition-all ${
                      isCurrentPage(item.page) ? 'bg-parchment text-ink' : 'text-ink hover:bg-parchment'
                    }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
