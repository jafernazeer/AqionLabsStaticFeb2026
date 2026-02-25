import { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Menu, X } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  const navLinks = [
    { label: 'Product', href: '#financial' },
    { label: 'Solutions', href: '#inventory' },
    { label: 'Pricing', href: '#cta' },
    { label: 'Contact', href: '#cta' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#070B14]/90 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full px-6 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#818cf8] to-[#c084fc] flex items-center justify-center">
              <span className="text-[#070B14] font-bold text-lg">A</span>
            </div>
            <span className="text-[#F4F7FF] font-semibold text-lg tracking-tight">
              AqionFlo
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="text-[#A7B1C8] hover:text-[#F4F7FF] text-sm font-medium transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button 
              onClick={() => scrollToSection('#cta')}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Request a demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-[#F4F7FF] p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#070B14]/95 backdrop-blur-md border-t border-white/5">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollToSection(link.href)}
                className="block w-full text-left text-[#A7B1C8] hover:text-[#F4F7FF] text-base font-medium py-2 transition-colors"
              >
                {link.label}
              </button>
            ))}
            <button 
              onClick={() => scrollToSection('#cta')}
              className="btn-primary w-full justify-center mt-4"
            >
              Request a demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
