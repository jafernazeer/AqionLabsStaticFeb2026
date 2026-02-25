
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Brain, Bot } from 'lucide-react';
import { PageType, NavItem } from '../types';

interface NavbarProps {
  onNavigate: (page: PageType) => void;
  currentPage: PageType;
}

const navItems: NavItem[] = [
  { label: 'Home', page: PageType.HOME },
  {
    label: 'Core AI Products',
    children: [
      { label: 'AqionFlo', page: PageType.PRODUCT_AQIONFLO },
      { label: 'AqionVox Ai', page: PageType.PRODUCT_AQIONVOX }
    ]
  },
  {
    label: 'Core AI Services',
    children: [
      { label: 'Custom Web App Development', page: PageType.SOLUTION_WEB_DEV },
      { label: 'Mobile App Development', page: PageType.SOLUTION_MOBILE_DEV },
      { label: 'AI Strategy Consulting', page: PageType.SOLUTION_STRATEGY },
      { label: 'Private GPT Development', page: PageType.SOLUTION_GENAI },
      { label: 'AI Governance & Security', page: PageType.SOLUTION_GOVERNANCE },
      { label: 'Human AI Avatars', page: PageType.SOLUTION_DIGITAL_HUMAN },
      { label: 'Intelligent Chatbots', page: PageType.SOLUTION_CHATBOTS },
    ]
  },
  { label: 'About Us', page: PageType.ABOUT },
  { label: 'Careers', page: PageType.CAREERS },
  { label: 'Contact Us', page: PageType.CONTACT },
];

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [desktopHover, setDesktopHover] = useState<string | null>(null);

  const handleNavigate = (page: PageType) => {
    onNavigate(page);
    setIsOpen(false);
    setMobileExpanded(null);
  };

  const toggleMobileSection = (label: string) => {
    setMobileExpanded(prev => prev === label ? null : label);
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className="fixed w-full z-50 bg-navy-950 border-b border-navy-800 h-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer flex items-center gap-3" onClick={() => handleNavigate(PageType.HOME)}>
            <div className="w-10 h-10 rounded-xl border-2 border-indigo-400 flex items-center justify-center bg-navy-900/50">
              <Brain className="w-6 h-6 text-indigo-400" strokeWidth={2.5} />
            </div>
            <span className="text-2xl font-bold text-white tracking-tight">
              AQION<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">LABS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6 h-full">
              {navItems.map((item) => (
                <div key={item.label} className="relative group h-full flex items-center">
                  {item.children ? (
                    <div
                      onMouseEnter={() => setDesktopHover(item.label)}
                      onMouseLeave={() => setDesktopHover(null)}
                      className="relative h-full flex items-center"
                    >
                      <button
                        className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 focus:outline-none transition-colors ${desktopHover === item.label ? 'text-white' : 'text-slate-300 hover:text-white'}`}
                      >
                        {item.label} <ChevronDown className="w-4 h-4" />
                      </button>

                      {desktopHover === item.label && (
                        /* Use top-full and pt-4 to create a transparent hit area bridge */
                        <div className="absolute left-0 top-full pt-4 w-72 z-50">
                          <div className="rounded-xl shadow-2xl bg-navy-900/80 backdrop-blur-xl ring-1 ring-white/10 border border-navy-800 overflow-hidden">
                            <div className="p-1">
                              {item.children.map((child) => (
                                <button
                                  key={child.label}
                                  onClick={() => handleNavigate(child.page!)}
                                  className={`block w-full text-left px-4 py-3 text-sm transition-all rounded-lg group ${currentPage === child.page ? 'bg-white/10' : 'hover:bg-white/10'
                                    }`}
                                >
                                  <span className={`block ${child.label.includes('Aqion')
                                      ? 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold'
                                      : 'text-slate-300 group-hover:text-white transition-colors'
                                    }`}>
                                    {child.label.includes('Aqion') ? (
                                      <span className="flex items-center gap-2">
                                        <Bot className="w-4 h-4 text-indigo-400" /> {child.label}
                                      </span>
                                    ) : child.label}
                                  </span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => item.page && handleNavigate(item.page)}
                      className={`${currentPage === item.page
                          ? 'text-white bg-navy-800'
                          : 'text-slate-300'
                        } hover:text-white hover:bg-navy-800 px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-navy-800 focus:outline-none transition-colors z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-navy-950 z-40 overflow-y-auto border-t border-navy-800">
          <div className="flex flex-col min-h-full pb-10">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-navy-800">
                {item.children ? (
                  <div>
                    <button
                      className={`w-full text-left px-6 py-5 text-lg font-bold flex justify-between items-center transition-colors ${mobileExpanded === item.label ? 'bg-navy-900 text-white' : 'text-slate-200 hover:bg-navy-900/50'
                        }`}
                      onClick={() => toggleMobileSection(item.label)}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-6 h-6 text-indigo-500 transform transition-transform duration-300 ${mobileExpanded === item.label ? 'rotate-180' : ''}`}
                      />
                    </button>

                    {/* Expanded Content */}
                    {mobileExpanded === item.label && (
                      <div className="bg-navy-900/50 border-t border-navy-800/50">
                        {item.children.map((child) => (
                          <button
                            key={child.label}
                            onClick={() => handleNavigate(child.page!)}
                            className="block w-full text-left px-8 py-4 text-base hover:bg-indigo-500/10 hover:pl-10 transition-all flex items-center border-l-4 border-transparent hover:border-indigo-500 group"
                          >
                            <span className={`w-2 h-2 rounded-full mr-3 transition-colors ${currentPage === child.page
                                ? 'bg-indigo-500'
                                : 'bg-slate-700 group-hover:bg-indigo-400'
                              }`}></span>
                            <span className={`transition-all ${child.label.includes('Aqion')
                                ? 'bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold'
                                : 'text-slate-300 group-hover:text-white'
                              }`}>
                              {child.label}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => item.page && handleNavigate(item.page)}
                    className={`w-full text-left px-6 py-5 text-lg font-bold transition-all ${currentPage === item.page ? 'bg-navy-900 text-white border-l-4 border-indigo-500' : 'text-slate-200 hover:bg-navy-900/50 hover:text-white'
                      }`}
                  >
                    {item.label}
                  </button>
                )}
              </div>
            ))}

            {/* Mobile Contact Button */}
            <div className="p-6 mt-4">
              <button
                onClick={() => handleNavigate(PageType.CONTACT)}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg text-center hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg shadow-indigo-900/30 active:scale-95"
              >
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
