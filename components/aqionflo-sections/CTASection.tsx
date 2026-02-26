import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

const CTASection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', company: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section
      id="cta"
      className="relative py-24 lg:py-32 bg-[#0B1220]"
      style={{ zIndex: 30 }}
    >
      {/* Background Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="text-[20vw] font-bold text-[#F4F7FF] opacity-[0.02] whitespace-nowrap">
          AqionFlo
        </span>
      </div>

      {/* Radial Gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-[#818cf8]/5 via-transparent to-transparent opacity-50" />

      <div className="relative w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Left Column - Info */}
            <div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-semibold text-[#F4F7FF] leading-tight mb-6">
                Ready to unify your <span className="text-gradient">operations?</span>
              </h2>
              <p className="text-[#A7B1C8] text-lg leading-relaxed mb-8">
                Tell us what you're building. We'll recommend the right modules and deployment plan for your business.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center">
                    <Mail size={18} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-[#A7B1C8] text-sm">Email us</div>
                    <div className="text-[#F4F7FF]">hello@aqionflo.io</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center">
                    <Phone size={18} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-[#A7B1C8] text-sm">Call us</div>
                    <div className="text-[#F4F7FF]">+971 4 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center">
                    <MapPin size={18} className="text-[#818cf8]" />
                  </div>
                  <div>
                    <div className="text-[#A7B1C8] text-sm">Visit us</div>
                    <div className="text-[#F4F7FF]">Dubai, United Arab Emirates</div>
                  </div>
                </div>
              </div>

              {/* Quick CTA */}
              <button className="btn-secondary">
                Book a 15-min call
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Right Column - Form */}
            <div>
              <div className="glass-panel p-8">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#818cf8]/20 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle size={32} className="text-[#818cf8]" />
                    </div>
                    <h3 className="text-[#F4F7FF] text-xl font-semibold mb-2">Thank you!</h3>
                    <p className="text-[#A7B1C8]">We'll be in touch within 24 hours.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-[#A7B1C8] text-sm mb-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FF] placeholder:text-white/30 focus:outline-none focus:border-[#818cf8]/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A7B1C8] text-sm mb-2">Work Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FF] placeholder:text-white/30 focus:outline-none focus:border-[#818cf8]/50 transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-[#A7B1C8] text-sm mb-2">Company</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FF] placeholder:text-white/30 focus:outline-none focus:border-[#818cf8]/50 transition-colors"
                        placeholder="Acme Inc."
                      />
                    </div>
                    <div>
                      <label className="block text-[#A7B1C8] text-sm mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F4F7FF] placeholder:text-white/30 focus:outline-none focus:border-[#818cf8]/50 transition-colors resize-none"
                        placeholder="Tell us about your project..."
                      />
                    </div>
                    <button type="submit" className="btn-primary w-full justify-center">
                      Request a demo
                      <Send size={16} />
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
