
import React from 'react';
import { Instagram, Linkedin, Facebook, ArrowUpRight } from 'lucide-react';
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
    <footer className="relative w-full overflow-hidden mesh-bg text-ink font-sans pt-14 md:pt-24 z-10 border-t border-hairline">
      {/* Oversized wordmark */}
      <div aria-hidden className="select-none pointer-events-none absolute -bottom-6 left-1/2 -translate-x-1/2 font-display text-[28vw] leading-none tracking-[-0.06em] text-ink/[0.045] whitespace-nowrap">
        aqionlabs
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-20 md:pb-32 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
          <div className="lg:col-span-6">
            <p className="eyebrow mb-4">[ The next chapter ]</p>
            <h2 className="font-display text-[2.65rem] md:text-6xl tracking-tight text-ink leading-[0.95]">
              Let's build something <span className="display-italic">unmistakably yours</span>.
            </h2>
            <p className="mobile-clamp-3 mt-5 text-taupe max-w-md leading-relaxed">
              We partner with operators in Dubai, Abu Dhabi and across the GCC to ship AI products that move boardroom metrics — not demo videos.
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

          <div className="lg:col-span-6 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-10">
            <div>
              <h3 className="eyebrow mb-5">Company</h3>
              <ul className="space-y-3 text-graphite text-sm">
                <li><a href="#" onClick={(e) => handleNav(e, PageType.ABOUT)} className="hover:text-petrol transition-colors">About</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, PageType.CAREERS)} className="hover:text-petrol transition-colors">Careers</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, PageType.CONTACT)} className="hover:text-petrol transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="eyebrow mb-5">Products</h3>
              <ul className="space-y-3 text-graphite text-sm">
                <li><a href="#" onClick={(e) => handleNav(e, PageType.PRODUCT_AQIONVOX)} className="hover:text-petrol transition-colors">AqionVox</a></li>
              </ul>
            </div>
            <div>
              <h3 className="eyebrow mb-5">Legal</h3>
              <ul className="space-y-3 text-graphite text-sm">
                <li><a href="#" onClick={(e) => handleNav(e, PageType.PRIVACY)} className="hover:text-petrol transition-colors">Privacy</a></li>
                <li><a href="#" onClick={(e) => handleNav(e, PageType.TERMS)} className="hover:text-petrol transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
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
