import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';
import AqionFloLogoIcon from "./AqionFloLogoIcon";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: [
      { label: 'Features', href: '#modules' },
      { label: 'Dashboard', href: '#showcase' },
      { label: 'AI Integration', href: '#ai' },
      { label: 'Pricing', href: '#cta' },
    ],
    Solutions: [
      { label: 'Small Business', href: '#cta' },
      { label: 'Enterprise', href: '#cta' },
      { label: 'Manufacturing', href: '#inventory' },
      { label: 'Retail', href: '#sales' },
    ],
    Company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Contact', href: '#cta' },
    ],
    Legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Twitter size={20} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={20} />, href: '#', label: 'LinkedIn' },
    { icon: <Github size={20} />, href: '#', label: 'GitHub' },
    { icon: <Instagram size={20} />, href: '#', label: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    if (href === '#') return;
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-[#070B14] border-t border-white/5" style={{ zIndex: 30 }}>
      <div className="w-full px-6 lg:px-12 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto">
          {/* Top Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12 mb-12">
            {/* Brand Column */}
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#818cf8] to-[#c084fc] flex items-center justify-center">
                  <span className="text-[#070B14] font-bold text-xl">A</span>
                </div>
                <span className="text-[#F4F7FF] font-semibold text-xl">AqionFlo</span>
              </div>
              <p className="text-[#A7B1C8] text-sm leading-relaxed mb-6 max-w-xs">
                Unified Logic. Infinite Flow. The AI-integrated ERP that connects finance, operations, and sales.
              </p>

              {/* Social Links */}
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#A7B1C8] hover:text-[#818cf8] hover:border-[#818cf8]/30 transition-all"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="text-[#F4F7FF] font-semibold text-sm mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link, index) => (
                    <li key={index}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-[#A7B1C8] text-sm hover:text-[#F4F7FF] transition-colors"
                      >
                        {link.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/5 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <div className="text-[#A7B1C8] text-sm">
                © {currentYear} AqionFlo by <span className="text-[#F4F7FF]">AqionLabs</span>. All rights reserved.
              </div>

              {/* Badges */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
                  <span className="text-[#A7B1C8] text-xs">System Operational</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                  <span className="text-[#A7B1C8] text-xs">Made in UAE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
