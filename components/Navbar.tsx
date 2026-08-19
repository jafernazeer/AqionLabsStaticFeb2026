
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Headphones, Brain, Briefcase, Wrench, ShoppingCart, Receipt, Share2, LayoutTemplate, Server, Compass, Stethoscope, Building2, CreditCard, Scale, Hotel, GraduationCap, ArrowUpRight } from 'lucide-react';
import { PageType, NavItem } from '../types';

interface NavbarProps {
  onNavigate: (page: PageType, scrollToDemo?: boolean, scrollToIndustries?: boolean) => void;
  currentPage: PageType;
}

const navItems: NavItem[] = [
  { label: 'Home', page: PageType.HOME },
  {
    label: 'AI Workforce',
    page: PageType.AGENTIC_AI,
    href: '/agentic-ai',
    children: [
      { label: 'AQION VOX', page: PageType.AGENT_CUSTOMER_SUPPORT, href: '/agents/customer-support' },
      { label: 'AQION BRAIN', page: PageType.AGENT_KNOWLEDGE, href: '/agents/knowledge' },
      { label: 'AQION CHIEF', page: PageType.AGENT_EXECUTIVE, href: '/agents/executive' },
      { label: 'AQION OPS', page: PageType.AGENT_WORKFORCE, href: '/agents/workforce' },
      { label: 'AQION PROCURE', page: PageType.AGENT_REVENUE, href: '/agents/revenue' },
      { label: 'AQION FIN', page: PageType.AGENT_FINANCE, href: '/agents/finance' },
      { label: 'AQION GROWTH', page: PageType.AGENT_GROWTH, href: '/agents/growth' },
    ],
  },
  {
    label: 'Platform',
    children: [
      { label: 'AQION Cloud', page: PageType.SERVICE_WEB_STUDIO, href: '/services/web-studio' },
      { label: 'Sovereign AI deployment', page: PageType.SERVICE_SOVEREIGN_INFRA, href: '/services/sovereign-infrastructure' },
      { label: 'AI Strategy & Discovery', page: PageType.SERVICE_AI_STRATEGY, href: '/services/ai-strategy' },
    ],
  },
  {
    label: 'Industries',
    children: [
      { label: 'Healthcare', page: PageType.INDUSTRY_HEALTHCARE, href: '/industries/healthcare' },
      { label: 'Real Estate', page: PageType.INDUSTRY_REAL_ESTATE, href: '/industries/real-estate' },
      { label: 'Financial Services', page: PageType.INDUSTRY_FINANCE, href: '/industries/financial-services' },
      { label: 'Legal & Professional', page: PageType.INDUSTRY_PROFESSIONAL, href: '/industries/professional-services' },
      { label: 'Hospitality', page: PageType.INDUSTRY_HOSPITALITY, href: '/industries/hospitality' },
      { label: 'Education', page: PageType.INDUSTRY_EDUCATION, href: '/industries/education' },
    ],
  },
  { label: 'About', page: PageType.ABOUT },
  { label: 'Contact', page: PageType.CONTACT },
];

const childIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  'AQION VOX': Headphones,
  'AQION BRAIN': Brain,
  'AQION CHIEF': Briefcase,
  'AQION OPS': Wrench,
  'AQION PROCURE': ShoppingCart,
  'AQION FIN': Receipt,
  'AQION GROWTH': Share2,
  'AQION Cloud': LayoutTemplate,
  'Sovereign AI deployment': Server,
  'AI Strategy & Discovery': Compass,
  'Healthcare': Stethoscope,
  'Real Estate': Building2,
  'Financial Services': CreditCard,
  'Legal & Professional': Scale,
  'Hospitality': Hotel,
  'Education': GraduationCap,
};

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [industryOpen, setIndustryOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopHover, setDesktopHover] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const handleNavigate = (page: PageType, scrollToIndustries?: boolean) => {
    onNavigate(page, false, scrollToIndustries);
    setIsOpen(false);
    setIndustryOpen(false);
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

  useEffect(() => {
    setIndustryOpen(false);
  }, [currentPage]);

  useEffect(() => {
    if (!industryOpen) return undefined;

    const closeOnOutsideTap = (event: PointerEvent) => {
      const target = event.target as Element | null;
      if (!target?.closest('[data-industry-switcher]')) setIndustryOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIndustryOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideTap);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideTap);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [industryOpen]);

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

          <div className="hidden lg:block">
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
                        className={`px-3.5 py-2 rounded-full text-[13.5px] font-medium tracking-[-0.01em] flex items-center gap-1 focus:outline-none transition-colors cursor-pointer ${
                          desktopHover === item.label ? 'text-ink' : 'text-graphite hover:text-ink'
                        }`}
                      >
                        {item.label}
                        <ChevronDown className="w-3.5 h-3.5 opacity-60" />
                      </button>

                      {desktopHover === item.label && (
                        <div className="absolute left-0 top-full z-50 w-[19rem] pt-3">
                          <div className="overflow-hidden rounded-[22px] border border-white/70 bg-white/95 shadow-[0_30px_80px_-32px_rgba(28,25,23,0.45)] backdrop-blur-2xl">
                            <div className="p-2.5">
                              {item.children.map(child => {
                                const childClassName = `group flex w-full cursor-pointer items-center justify-between rounded-2xl px-3.5 py-3 text-left text-[14px] font-medium tracking-[-0.01em] transition-colors ${
                                  currentPage === child.page ? 'bg-gradient-to-r from-[#4f46e5]/12 to-[#9333ea]/10 text-ink' : 'text-graphite hover:bg-parchment/80 hover:text-ink'
                                }`;
                                const childContent = (
                                  <>
                                    <span className="flex items-center gap-2.5">
                                      {(() => {
                                        const ChildIcon = childIcons[child.label];
                                        return ChildIcon ? <ChildIcon className="h-4 w-4 shrink-0 text-petrol" /> : null;
                                      })()}
                                      <span className="text-ink">{child.label}</span>
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
                      className={`px-3.5 py-2 rounded-full text-[13.5px] font-medium tracking-[-0.01em] transition-colors cursor-pointer ${
                        isCurrentPage(item.page) ? 'text-ink' : 'text-graphite hover:text-ink'
                      }`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}

            </div>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => {
                setIsOpen(!isOpen);
                setIndustryOpen(false);
              }}
              className="z-50 inline-flex min-h-11 min-w-11 cursor-pointer items-center justify-center rounded-full border border-ink/10 bg-paper text-ink shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] transition-colors hover:bg-parchment focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-x-3 top-[4.5rem] z-40 lg:hidden">
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
                          const ChildIcon = childIcons[child.label];
                          const childContent = (
                            <span className="flex items-center gap-2.5 text-graphite">
                              {ChildIcon && <ChildIcon className="h-4 w-4 shrink-0 text-petrol" />}
                              <span>{child.label}</span>
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
