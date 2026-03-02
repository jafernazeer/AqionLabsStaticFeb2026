
import React from 'react';
import { Instagram, Linkedin, Facebook, Brain } from 'lucide-react';
import { PageType } from '../types';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  
  const handleNav = (e: React.MouseEvent, page: PageType) => {
    e.preventDefault();
    if (onNavigate) onNavigate(page);
  };

  return (
    <footer className="relative w-full overflow-hidden bg-transparent text-white font-sans pt-20 z-10">
      <div className="max-w-7xl mx-auto px-6 pb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-5">
            {/* Logo & Tagline */}
            <div className="inline-flex flex-col mb-10 w-fit">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl border-2 border-indigo-400 flex items-center justify-center bg-navy-900/50 flex-shrink-0">
                        <Brain className="w-6 h-6 text-indigo-400" strokeWidth={2.5} />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">
                        AQIONLABS
                    </span>
                </div>
                
                <div className="w-full h-px bg-indigo-500/30 my-3"></div>
                
                <div className="w-full text-lg font-bold">
                    <span className="text-white">Intelligence That </span>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">Delivers Growth</span>
                </div>
            </div>
            <div className="flex gap-3">
              {[
                { Icon: Instagram, href: "https://instagram.com/aqionlabs" },
                { Icon: Linkedin, href: "https://www.linkedin.com/company/aqionlabs" },
                { Icon: Facebook, href: "https://www.facebook.com/share/18CcdAMyVk/?mibextid=wwXIfr" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-xl border border-navy-800 text-slate-500 hover:text-indigo-400 hover:bg-navy-900 hover:border-indigo-500/30 transition-all group"
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-12 lg:pl-16">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Company</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" onClick={(e) => handleNav(e, PageType.ABOUT)} className="hover:text-indigo-400 transition-colors">About Us</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, PageType.CAREERS)} className="hover:text-indigo-400 transition-colors">Careers</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, PageType.CONTACT)} className="hover:text-indigo-400 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Legal</h3>
              <ul className="space-y-3 text-slate-400">
                <li><a href="#" onClick={(e) => handleNav(e, PageType.PRIVACY)} className="hover:text-indigo-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, PageType.TERMS)} className="hover:text-indigo-400 transition-colors">Terms and Conditions</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center mt-16 mb-10 text-navy-800">
          <span>+</span>
          <div className="flex-1 mx-4 border-t border-dashed border-navy-800"></div>
          <span>+</span>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-mono uppercase tracking-widest">
          <span>© 2026 AqionLabs. All rights reserved.</span>
          <span className="flex items-center gap-1">
             Built in the UAE 🇦🇪 for the world.
          </span>
        </div>
      </div>
      
      {/* Decorative gradient at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-600 via-violet-600 to-purple-600"></div>
    </footer>
  );
};

export default Footer;
