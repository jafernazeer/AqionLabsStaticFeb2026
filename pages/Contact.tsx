
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';

const countries = [
  { name: "Afghanistan", code: "+93", flag: "🇦🇫" },
  { name: "Albania", code: "+355", flag: "🇦🇱" },
  { name: "Algeria", code: "+213", flag: "🇩🇿" },
  { name: "Andorra", code: "+376", flag: "🇦🇩" },
  { name: "Angola", code: "+244", flag: "🇦🇴" },
  { name: "Argentina", code: "+54", flag: "🇦🇷" },
  { name: "Armenia", code: "+374", flag: "🇦🇲" },
  { name: "Australia", code: "+61", flag: "🇦🇺" },
  { name: "Austria", code: "+43", flag: "🇦🇹" },
  { name: "Azerbaijan", code: "+994", flag: "🇦🇿" },
  { name: "Bahrain", code: "+973", flag: "🇧🇭" },
  { name: "Bangladesh", code: "+880", flag: "🇧🇩" },
  { name: "Belarus", code: "+375", flag: "🇧🇾" },
  { name: "Belgium", code: "+32", flag: "🇧🇪" },
  { name: "Belize", code: "+501", flag: "🇧🇿" },
  { name: "Benin", code: "+229", flag: "🇧🇯" },
  { name: "Bhutan", code: "+975", flag: "🇧🇹" },
  { name: "Bolivia", code: "+591", flag: "🇧🇴" },
  { name: "Bosnia & Herzegovina", code: "+387", flag: "🇧🇦" },
  { name: "Botswana", code: "+267", flag: "🇧🇼" },
  { name: "Brazil", code: "+55", flag: "🇧🇷" },
  { name: "Brunei", code: "+673", flag: "🇧🇳" },
  { name: "Bulgaria", code: "+359", flag: "🇧🇬" },
  { name: "Burkina Faso", code: "+226", flag: "🇧🇫" },
  { name: "Cambodia", code: "+855", flag: "🇰🇭" },
  { name: "Cameroon", code: "+237", flag: "🇨🇲" },
  { name: "Canada", code: "+1", flag: "🇨🇦" },
  { name: "Chile", code: "+56", flag: "🇨🇱" },
  { name: "China", code: "+86", flag: "🇨🇳" },
  { name: "Colombia", code: "+57", flag: "🇨🇴" },
  { name: "Costa Rica", code: "+506", flag: "🇨🇷" },
  { name: "Croatia", code: "+385", flag: "🇭🇷" },
  { name: "Cuba", code: "+53", flag: "🇨🇺" },
  { name: "Cyprus", code: "+357", flag: "🇨🇾" },
  { name: "Czech Republic", code: "+420", flag: "🇨🇿" },
  { name: "Denmark", code: "+45", flag: "🇩🇰" },
  { name: "Egypt", code: "+20", flag: "🇪🇬" },
  { name: "Estonia", code: "+372", flag: "🇪🇪" },
  { name: "Ethiopia", code: "+251", flag: "🇪🇹" },
  { name: "Finland", code: "+358", flag: "🇫🇮" },
  { name: "France", code: "+33", flag: "🇫🇷" },
  { name: "Georgia", code: "+995", flag: "🇬🇪" },
  { name: "Germany", code: "+49", flag: "🇩🇪" },
  { name: "Ghana", code: "+233", flag: "🇬🇭" },
  { name: "Greece", code: "+30", flag: "🇬🇷" },
  { name: "Hong Kong", code: "+852", flag: "🇭🇰" },
  { name: "Hungary", code: "+36", flag: "🇭🇺" },
  { name: "Iceland", code: "+354", flag: "🇮🇸" },
  { name: "India", code: "+91", flag: "🇮🇳" },
  { name: "Indonesia", code: "+62", flag: "🇮🇩" },
  { name: "Iran", code: "+98", flag: "🇮🇷" },
  { name: "Iraq", code: "+964", flag: "🇮🇶" },
  { name: "Ireland", code: "+353", flag: "🇮🇪" },
  { name: "Israel", code: "+972", flag: "🇮🇱" },
  { name: "Italy", code: "+39", flag: "🇮🇹" },
  { name: "Japan", code: "+81", flag: "🇯🇵" },
  { name: "Jordan", code: "+962", flag: "🇯🇴" },
  { name: "Kazakhstan", code: "+7", flag: "🇰🇿" },
  { name: "Kenya", code: "+254", flag: "🇰🇪" },
  { name: "Kuwait", code: "+965", flag: "🇰🇼" },
  { name: "Latvia", code: "+371", flag: "🇱🇻" },
  { name: "Lebanon", code: "+961", flag: "🇱🇧" },
  { name: "Libya", code: "+218", flag: "🇱🇾" },
  { name: "Lithuania", code: "+370", flag: "🇱🇹" },
  { name: "Luxembourg", code: "+352", flag: "🇱🇺" },
  { name: "Malaysia", code: "+60", flag: "🇲🇾" },
  { name: "Maldives", code: "+960", flag: "🇲🇻" },
  { name: "Mexico", code: "+52", flag: "🇲🇽" },
  { name: "Morocco", code: "+212", flag: "🇲🇦" },
  { name: "Nepal", code: "+977", flag: "🇳🇵" },
  { name: "Netherlands", code: "+31", flag: "🇳🇱" },
  { name: "New Zealand", code: "+64", flag: "🇳🇿" },
  { name: "Nigeria", code: "+234", flag: "🇳🇬" },
  { name: "Norway", code: "+47", flag: "🇳🇴" },
  { name: "Oman", code: "+968", flag: "🇴🇲" },
  { name: "Pakistan", code: "+92", flag: "🇵🇰" },
  { name: "Philippines", code: "+63", flag: "🇵🇭" },
  { name: "Poland", code: "+48", flag: "🇵🇱" },
  { name: "Portugal", code: "+351", flag: "🇵🇹" },
  { name: "Qatar", code: "+974", flag: "🇶🇦" },
  { name: "Romania", code: "+40", flag: "🇷🇴" },
  { name: "Russia", code: "+7", flag: "🇷🇺" },
  { name: "Saudi Arabia", code: "+966", flag: "🇸🇦" },
  { name: "Singapore", code: "+65", flag: "🇸🇬" },
  { name: "South Africa", code: "+27", flag: "🇿🇦" },
  { name: "South Korea", code: "+82", flag: "🇰🇷" },
  { name: "Spain", code: "+34", flag: "🇪🇸" },
  { name: "Sri Lanka", code: "+94", flag: "🇱🇰" },
  { name: "Sweden", code: "+46", flag: "🇸🇪" },
  { name: "Switzerland", code: "+41", flag: "🇨🇭" },
  { name: "Syria", code: "+963", flag: "🇸🇾" },
  { name: "Taiwan", code: "+886", flag: "🇹🇼" },
  { name: "Thailand", code: "+66", flag: "🇹🇭" },
  { name: "Tunisia", code: "+216", flag: "🇹🇳" },
  { name: "Turkey", code: "+90", flag: "🇹🇷" },
  { name: "Ukraine", code: "+380", flag: "🇺🇦" },
  { name: "United Arab Emirates", code: "+971", flag: "🇦🇪" },
  { name: "United Kingdom", code: "+44", flag: "🇬🇧" },
  { name: "United States", code: "+1", flag: "🇺🇸" },
  { name: "Vietnam", code: "+84", flag: "🇻🇳" },
  { name: "Yemen", code: "+967", flag: "🇾🇪" }
];

const Contact: React.FC = () => {
    
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(
    countries.find(c => c.name === "United Arab Emirates") || countries[0]
  );

  return (
    <div className="mesh-bg relative min-h-screen overflow-x-hidden pt-20 font-sans text-ink">
       <div className="pointer-events-none fixed inset-0 z-0 bg-hairline-grid opacity-80"></div>

       <section className="mesh-bg mobile-section-tight relative z-10 overflow-hidden border-b border-hairline px-5 py-20 sm:px-6 md:py-28">
           <ServiceMotionBackdrop className="mobile-visual-reduce opacity-50" />
           <div aria-hidden className="absolute inset-0 bg-gradient-to-b from-bone/84 via-bone/70 to-bone/92" />
           <div aria-hidden className="absolute inset-0 bg-hairline-grid opacity-25" />
           <div aria-hidden className="absolute left-1/2 top-1/2 h-[560px] w-[560px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-petrol/10 blur-[120px]" />
           <div className="relative mx-auto flex min-w-0 max-w-7xl flex-col gap-8 lg:grid lg:grid-cols-12">
               <div className="mobile-page-center col-span-12 lg:col-span-7 lg:text-left">
                   <p className="eyebrow mb-5">[ Contact AqionLabs ]</p>
                   <h1 className="mobile-heading font-display text-[2.75rem] leading-[0.98] tracking-tight text-ink md:text-7xl">
                       Build the AI layer<br />
                       <span className="display-italic text-petrol">your team can trust.</span>
                   </h1>
                   <p className="mobile-copy-measure mt-5 text-[15px] leading-relaxed text-taupe md:hidden">
                       Tell us what you want to launch, automate or scale.
                   </p>
                   <p className="mt-7 hidden max-w-2xl text-xl leading-relaxed text-taupe md:block">
                       Tell us what you are trying to launch, automate or scale. We will map the right product path, the AI stack, and the fastest responsible route to deployment.
                   </p>
               </div>

               <div className="col-span-12 min-w-0 lg:col-span-5">
                   <div className="grid min-w-0 gap-3 rounded-[26px] border border-hairline bg-paper/80 p-3 shadow-[0_30px_90px_-55px_rgba(28,25,23,0.4)] backdrop-blur md:rounded-[30px] md:p-5">
                       {[
                           { icon: Mail, label: 'Email', value: 'connect@aqionlabs.ai' },
                           { icon: Phone, label: 'Call', value: '+971 58 849 9663' },
                       ].map(({ icon: Icon, label, value }) => (
                           <div key={label} className="mobile-center-row flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-bone/70 p-4 md:flex-row md:gap-4 md:p-5 md:text-left">
                               <span className="mobile-contact-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#9333ea] text-white md:h-11 md:w-11">
                                   <Icon className="h-5 w-5" />
                               </span>
                               <div className="min-w-0">
                                   <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">{label}</p>
                                   <p className="mt-1 break-words font-display text-lg leading-tight text-ink md:text-xl">{value}</p>
                               </div>
                           </div>
                       ))}
                       <div className="mobile-center-row flex flex-col items-center gap-3 rounded-2xl border border-hairline bg-bone/70 p-4 md:flex-row md:items-start md:gap-4 md:p-5 md:text-left">
                           <span className="mobile-contact-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#4f46e5] to-[#9333ea] text-white md:h-11 md:w-11">
                               <MapPin className="h-5 w-5" />
                           </span>
                           <div className="min-w-0">
                               <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-ash">HQ</p>
                               <p className="mt-1 break-words font-display text-lg leading-tight text-ink md:text-xl">
                                   Rakez Business Zone, United Arab Emirates,<br />
                                   P.O. Box No. 10055
                               </p>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </section>

       <section className="mobile-section-tight relative z-10 overflow-hidden bg-[#0d0d10] px-5 py-20 text-bone sm:px-6 md:py-28">
           <div
             aria-hidden
             className="pointer-events-none absolute bottom-0 left-1/2 h-[420px] w-[640px] -translate-x-1/2 translate-y-1/3 rounded-full bg-[#9333ea]/10 blur-[110px]"
           />
           <div className="relative mx-auto flex max-w-7xl flex-col gap-8 lg:grid lg:grid-cols-12">
               <div className="mobile-page-center col-span-12 lg:col-span-5 lg:text-left">
                   <p className="eyebrow mb-4 !text-[#a5b4fc]">[ Start a build conversation ]</p>
                   <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight text-bone md:text-6xl">
                       From idea to<br />
                       <span className="display-italic bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(90deg, #4f46e5, #9333ea)' }}>operating product.</span>
                   </h2>
                   <p className="mobile-copy-measure mt-5 text-[15px] leading-relaxed text-bone/72 md:hidden">
                       Share the workflow or product. Our build team will scope the next step.
                   </p>
                   <p className="mt-6 hidden text-lg leading-relaxed text-bone/72 md:block">
                       Use the form for new products, Aqion Vox demos, AI automation briefs, enterprise pilots or partnership conversations. The first response is handled by the team that scopes the work.
                   </p>
                   <div className="mobile-decorative-hide mt-8 rounded-[26px] border border-white/10 bg-white/[0.04] p-6 text-bone md:block">
                       <p className="font-display text-2xl leading-tight">What helps us move quickly</p>
                       <div className="mt-5 grid gap-3 text-sm leading-relaxed text-bone/70">
                           {['The workflow or product you want to improve', 'The systems your team already uses', 'The decision timeline and deployment region'].map((item) => (
                               <div key={item} className="flex gap-3">
                                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a5b4fc]" />
                                   <span>{item}</span>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>

               <div className="col-span-12 lg:col-span-7">
                   <div className="relative min-w-0">
                       <div className="absolute -inset-8 rounded-full bg-[#4f46e5]/16 blur-3xl"></div>
                       <form className="relative grid gap-4 rounded-[24px] border border-white/15 bg-black/35 p-4 text-left shadow-[0_30px_100px_-40px_rgba(0,0,0,0.7)] backdrop-blur-2xl md:gap-5 md:rounded-[34px] md:p-9">
                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-bone/80">Name*</label>
                                    <input id="contact-name" name="name" autoComplete="name" type="text" required className="mobile-form-control w-full rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-3.5 text-bone placeholder-bone/35 backdrop-blur-sm transition-colors focus:border-[#7C6BFF]/60 focus:bg-white/[0.08] focus:outline-none" placeholder="Full name" />
                                </div>
                                <div>
                                    <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-bone/80">Company*</label>
                                    <input id="contact-company" name="company" autoComplete="organization" type="text" required className="mobile-form-control w-full rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-3.5 text-bone placeholder-bone/35 backdrop-blur-sm transition-colors focus:border-[#7C6BFF]/60 focus:bg-white/[0.08] focus:outline-none" placeholder="Company" />
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-bone/80">Email*</label>
                                    <input id="contact-email" name="email" autoComplete="email" type="email" required className="mobile-form-control w-full rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-3.5 text-bone placeholder-bone/35 backdrop-blur-sm transition-colors focus:border-[#7C6BFF]/60 focus:bg-white/[0.08] focus:outline-none" placeholder="Email address" />
                                </div>
                                <div>
                                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-bone/80">Mobile number*</label>
                                    <div className="relative flex min-w-0 overflow-hidden rounded-2xl border border-white/15 bg-white/[0.05] backdrop-blur-sm transition-colors focus-within:border-[#7C6BFF]/60">
                                        <div className="flex min-w-[92px] cursor-pointer items-center gap-2 border-r border-white/15 bg-white/[0.04] px-3 text-bone sm:px-4">
                                            <span className="text-lg leading-none" aria-hidden>{selectedCountry.flag}</span>
                                            <span className="text-sm text-bone/70">{selectedCountry.code}</span>
                                            <ChevronDown className="ml-auto h-3 w-3 text-bone/50" />
                                        </div>
                                        <select 
                                            aria-label="Country calling code"
                                            className="absolute left-0 top-0 h-full w-[150px] cursor-pointer opacity-0"
                                            value={selectedCountry.name}
                                            onChange={(e) => {
                                                const country = countries.find(c => c.name === e.target.value);
                                                if (country) setSelectedCountry(country);
                                            }}
                                        >
                                            {countries.map((c) => (
                                                <option key={c.name} value={c.name} className="text-black">{c.name}</option>
                                            ))}
                                        </select>
                                        <input id="contact-phone" name="phone" autoComplete="tel" inputMode="tel" type="tel" required className="mobile-form-control min-w-0 flex-1 bg-transparent px-4 py-3.5 text-bone placeholder-bone/35 focus:outline-none sm:px-5" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-brief" className="mb-2 block text-sm font-medium text-bone/80">What should we build or improve?</label>
                                <textarea id="contact-brief" name="brief" className="mobile-form-control min-h-28 w-full resize-none rounded-2xl border border-white/15 bg-white/[0.05] px-5 py-4 text-bone placeholder-bone/35 backdrop-blur-sm transition-colors focus:border-[#7C6BFF]/60 focus:bg-white/[0.08] focus:outline-none md:min-h-32" placeholder="Tell us about the product, process or AI workflow." />
                            </div>

                            <button type="submit" className="mobile-action group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-bone shadow-lg shadow-ink/10 transition-all duration-300 hover:bg-[linear-gradient(90deg,#4f46e5,#9333ea)] hover:shadow-[0_16px_40px_-14px_rgba(79,70,229,0.55)]">
                                Book a consultation <ArrowRight className="h-4 w-4" />
                            </button>
                       </form>
                   </div>
               </div>
           </div>
       </section>
    </div>
  );
};

export default Contact;
