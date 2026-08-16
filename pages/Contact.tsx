
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';
import { ServiceMotionBackdrop } from '../components/OptimizedHeroMotion';

const countries = [
  { name: "Afghanistan", code: "+93" },
  { name: "Albania", code: "+355" },
  { name: "Algeria", code: "+213" },
  { name: "Andorra", code: "+376" },
  { name: "Angola", code: "+244" },
  { name: "Argentina", code: "+54" },
  { name: "Armenia", code: "+374" },
  { name: "Australia", code: "+61" },
  { name: "Austria", code: "+43" },
  { name: "Azerbaijan", code: "+994" },
  { name: "Bahrain", code: "+973" },
  { name: "Bangladesh", code: "+880" },
  { name: "Belarus", code: "+375" },
  { name: "Belgium", code: "+32" },
  { name: "Belize", code: "+501" },
  { name: "Benin", code: "+229" },
  { name: "Bhutan", code: "+975" },
  { name: "Bolivia", code: "+591" },
  { name: "Bosnia & Herzegovina", code: "+387" },
  { name: "Botswana", code: "+267" },
  { name: "Brazil", code: "+55" },
  { name: "Brunei", code: "+673" },
  { name: "Bulgaria", code: "+359" },
  { name: "Burkina Faso", code: "+226" },
  { name: "Cambodia", code: "+855" },
  { name: "Cameroon", code: "+237" },
  { name: "Canada", code: "+1" },
  { name: "Chile", code: "+56" },
  { name: "China", code: "+86" },
  { name: "Colombia", code: "+57" },
  { name: "Costa Rica", code: "+506" },
  { name: "Croatia", code: "+385" },
  { name: "Cuba", code: "+53" },
  { name: "Cyprus", code: "+357" },
  { name: "Czech Republic", code: "+420" },
  { name: "Denmark", code: "+45" },
  { name: "Egypt", code: "+20" },
  { name: "Estonia", code: "+372" },
  { name: "Ethiopia", code: "+251" },
  { name: "Finland", code: "+358" },
  { name: "France", code: "+33" },
  { name: "Georgia", code: "+995" },
  { name: "Germany", code: "+49" },
  { name: "Ghana", code: "+233" },
  { name: "Greece", code: "+30" },
  { name: "Hong Kong", code: "+852" },
  { name: "Hungary", code: "+36" },
  { name: "Iceland", code: "+354" },
  { name: "India", code: "+91" },
  { name: "Indonesia", code: "+62" },
  { name: "Iran", code: "+98" },
  { name: "Iraq", code: "+964" },
  { name: "Ireland", code: "+353" },
  { name: "Israel", code: "+972" },
  { name: "Italy", code: "+39" },
  { name: "Japan", code: "+81" },
  { name: "Jordan", code: "+962" },
  { name: "Kazakhstan", code: "+7" },
  { name: "Kenya", code: "+254" },
  { name: "Kuwait", code: "+965" },
  { name: "Latvia", code: "+371" },
  { name: "Lebanon", code: "+961" },
  { name: "Libya", code: "+218" },
  { name: "Lithuania", code: "+370" },
  { name: "Luxembourg", code: "+352" },
  { name: "Malaysia", code: "+60" },
  { name: "Maldives", code: "+960" },
  { name: "Mexico", code: "+52" },
  { name: "Morocco", code: "+212" },
  { name: "Nepal", code: "+977" },
  { name: "Netherlands", code: "+31" },
  { name: "New Zealand", code: "+64" },
  { name: "Nigeria", code: "+234" },
  { name: "Norway", code: "+47" },
  { name: "Oman", code: "+968" },
  { name: "Pakistan", code: "+92" },
  { name: "Philippines", code: "+63" },
  { name: "Poland", code: "+48" },
  { name: "Portugal", code: "+351" },
  { name: "Qatar", code: "+974" },
  { name: "Romania", code: "+40" },
  { name: "Russia", code: "+7" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Singapore", code: "+65" },
  { name: "South Africa", code: "+27" },
  { name: "South Korea", code: "+82" },
  { name: "Spain", code: "+34" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Sweden", code: "+46" },
  { name: "Switzerland", code: "+41" },
  { name: "Syria", code: "+963" },
  { name: "Taiwan", code: "+886" },
  { name: "Thailand", code: "+66" },
  { name: "Tunisia", code: "+216" },
  { name: "Turkey", code: "+90" },
  { name: "Ukraine", code: "+380" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "United Kingdom", code: "+44" },
  { name: "United States", code: "+1" },
  { name: "Vietnam", code: "+84" },
  { name: "Yemen", code: "+967" }
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

       <section className="mobile-section-tight relative z-10 px-5 py-20 sm:px-6 md:py-28">
           <div className="mx-auto flex max-w-7xl flex-col gap-8 lg:grid lg:grid-cols-12">
               <div className="mobile-page-center col-span-12 lg:col-span-5 lg:text-left">
                   <p className="eyebrow mb-4">[ Start a build conversation ]</p>
                   <h2 className="mobile-subheading font-display text-4xl leading-[1.02] tracking-tight md:text-6xl">
                       From idea to<br />
                       <span className="display-italic text-petrol">operating product.</span>
                   </h2>
                   <p className="mobile-copy-measure mt-5 text-[15px] leading-relaxed text-graphite md:hidden">
                       Share the workflow or product. Our build team will scope the next step.
                   </p>
                   <p className="mt-6 hidden text-lg leading-relaxed text-graphite md:block">
                       Use the form for new products, Aqion Vox demos, AI automation briefs, enterprise pilots or partnership conversations. The first response is handled by the team that scopes the work.
                   </p>
                   <div className="mobile-decorative-hide mt-8 rounded-[26px] border border-white/10 bg-[#0d0d10] p-6 text-bone md:block">
                       <p className="font-display text-2xl leading-tight">What helps us move quickly</p>
                       <div className="mt-5 grid gap-3 text-sm leading-relaxed text-bone/70">
                           {['The workflow or product you want to improve', 'The systems your team already uses', 'The decision timeline and deployment region'].map((item) => (
                               <div key={item} className="flex gap-3">
                                   <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-petrol" />
                                   <span>{item}</span>
                               </div>
                           ))}
                       </div>
                   </div>
               </div>

               <div className="col-span-12 lg:col-span-7">
                   <div className="relative min-w-0">
                       <div className="absolute -inset-8 rounded-full bg-petrol/12 blur-3xl"></div>
                       <form className="relative grid gap-4 rounded-[24px] border border-hairline bg-paper/88 p-4 text-left shadow-[0_30px_100px_-55px_rgba(28,25,23,0.45)] backdrop-blur md:gap-5 md:rounded-[34px] md:p-9">
                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-name" className="mb-2 block text-sm font-medium text-graphite">Name*</label>
                                    <input id="contact-name" name="name" autoComplete="name" type="text" required className="mobile-form-control w-full rounded-2xl border border-hairline bg-bone px-5 py-3.5 text-ink transition-colors focus:border-petrol focus:outline-none" placeholder="Full name" />
                                </div>
                                <div>
                                    <label htmlFor="contact-company" className="mb-2 block text-sm font-medium text-graphite">Company*</label>
                                    <input id="contact-company" name="company" autoComplete="organization" type="text" required className="mobile-form-control w-full rounded-2xl border border-hairline bg-bone px-5 py-3.5 text-ink transition-colors focus:border-petrol focus:outline-none" placeholder="Company" />
                                </div>
                            </div>

                            <div className="grid gap-5 md:grid-cols-2">
                                <div>
                                    <label htmlFor="contact-email" className="mb-2 block text-sm font-medium text-graphite">Email*</label>
                                    <input id="contact-email" name="email" autoComplete="email" type="email" required className="mobile-form-control w-full rounded-2xl border border-hairline bg-bone px-5 py-3.5 text-ink transition-colors focus:border-petrol focus:outline-none" placeholder="Email address" />
                                </div>
                                <div>
                                    <label htmlFor="contact-phone" className="mb-2 block text-sm font-medium text-graphite">Mobile number*</label>
                                    <div className="relative flex min-w-0 overflow-hidden rounded-2xl border border-hairline bg-bone transition-colors focus-within:border-petrol">
                                        <div className="flex min-w-[132px] cursor-pointer items-center border-r border-hairline bg-paper px-3 text-graphite sm:min-w-[150px] sm:px-4">
                                            <span className="mr-2 max-w-[86px] truncate text-sm">{selectedCountry.name}</span>
                                            <span className="mr-2 text-sm text-taupe">{selectedCountry.code}</span>
                                            <ChevronDown className="ml-auto h-3 w-3" />
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
                                        <input id="contact-phone" name="phone" autoComplete="tel" inputMode="tel" type="tel" required className="mobile-form-control min-w-0 flex-1 bg-transparent px-4 py-3.5 text-ink focus:outline-none sm:px-5" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="contact-brief" className="mb-2 block text-sm font-medium text-graphite">What should we build or improve?</label>
                                <textarea id="contact-brief" name="brief" className="mobile-form-control min-h-28 w-full resize-none rounded-2xl border border-hairline bg-bone px-5 py-4 text-ink transition-colors focus:border-petrol focus:outline-none md:min-h-32" placeholder="Tell us about the product, process or AI workflow." />
                            </div>

                            <button type="submit" className="mobile-action inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-7 py-4 text-sm font-medium text-bone shadow-lg shadow-ink/10 transition-colors hover:bg-petrolDeep">
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
