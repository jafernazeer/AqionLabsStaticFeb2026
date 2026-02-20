
import React, { useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from 'lucide-react';

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
    <div className="bg-navy-950 min-h-screen text-white pt-20 font-sans relative">
       <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

       <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
           <div className="grid lg:grid-cols-2 gap-16">
               
               {/* Contact Info */}
               <div>
                   <h1 className="text-4xl md:text-5xl font-bold mb-6">Let's start the conversation.</h1>
                   <p className="text-slate-400 text-lg mb-12">
                       Ready to turn AI potential into business outcomes? Fill out the form, and our consultants will get back to you within 24 hours.
                   </p>
                   
                   <div className="space-y-8">
                       <div className="flex items-start">
                           <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-500 mr-6 flex-shrink-0">
                               <Mail className="w-6 h-6" />
                           </div>
                           <div>
                               <h3 className="text-xl font-bold text-white mb-1">Email Us</h3>
                               <p className="text-slate-400">contact@aqionlabs.com</p>
                           </div>
                       </div>
                       
                       <div className="flex items-start">
                           <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-500 mr-6 flex-shrink-0">
                               <MapPin className="w-6 h-6" />
                           </div>
                           <div>
                               <h3 className="text-xl font-bold text-white mb-1">Global HQ</h3>
                               <p className="text-slate-400">
                                   Rakez Business Zone, United Arab Emirates,<br/>
                                   P.O. Box No. 10055
                               </p>
                           </div>
                       </div>

                       <div className="flex items-start">
                           <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center text-indigo-500 mr-6 flex-shrink-0">
                               <Phone className="w-6 h-6" />
                           </div>
                           <div>
                               <h3 className="text-xl font-bold text-white mb-1">Call Us</h3>
                               <p className="text-slate-400">+971 58 849 9663</p>
                           </div>
                       </div>
                   </div>
               </div>

               {/* Form */}
               <div className="relative">
                   <div className="absolute inset-0 bg-indigo-600/10 blur-3xl rounded-full"></div>
                   <form className="relative bg-navy-900 border border-navy-800 p-8 md:p-10 rounded-3xl shadow-2xl">
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Name*</label>
                            <input type="text" required className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500" placeholder="Full Name" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Company*</label>
                            <input type="text" required className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500" placeholder="Company" />
                        </div>

                        <div className="mb-6">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email*</label>
                            <input type="email" required className="w-full px-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500" placeholder="Email Address" />
                        </div>

                        <div className="mb-8">
                            <label className="block text-sm font-medium text-slate-300 mb-2">Mobile Number*</label>
                            <div className="flex rounded-xl bg-navy-950 border border-navy-800 overflow-hidden focus-within:border-indigo-500 relative">
                                <div className="flex items-center px-4 bg-navy-900 border-r border-navy-800 text-slate-300 cursor-pointer min-w-[150px]">
                                    <span className="text-sm mr-2 truncate max-w-[90px]">{selectedCountry.name}</span>
                                    <span className="text-sm text-slate-400 mr-2">{selectedCountry.code}</span>
                                    <ChevronDown className="w-3 h-3 ml-auto" />
                                </div>
                                <select 
                                    className="absolute top-0 left-0 w-[150px] h-full opacity-0 cursor-pointer"
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
                                <input type="tel" required className="flex-1 px-5 py-3.5 bg-transparent text-white focus:outline-none" />
                            </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-full hover:from-indigo-400 hover:to-purple-500 transition-all shadow-lg shadow-indigo-900/30 flex items-center justify-center gap-2 uppercase tracking-wide text-sm">
                            Book a Consultation <ArrowRight className="w-5 h-5" />
                        </button>
                   </form>
               </div>
           </div>
       </div>
    </div>
  );
};

export default Contact;
