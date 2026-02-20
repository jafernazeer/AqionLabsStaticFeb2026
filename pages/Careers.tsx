
import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Upload, Briefcase, User, Mail, Phone, Link as LinkIcon, FileText } from 'lucide-react';

const Careers: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    }
  };

  return (
    <div className="bg-navy-950 min-h-screen text-white pt-20 font-sans relative">
       <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

       <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
           <div className="text-center mb-16">
               <span className="text-indigo-500 font-semibold tracking-wider text-sm uppercase mb-4 block">Careers</span>
               <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Intelligence Revolution</h1>
               <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                   We are looking for visionaries, engineers, and strategists to help build the future of enterprise AI. If you are obsessed with impact, we want to hear from you.
               </p>
           </div>

           <div className="relative">
               <div className="absolute inset-0 bg-indigo-600/5 blur-3xl rounded-full"></div>
               <form className="relative bg-navy-900 border border-navy-800 p-8 md:p-10 rounded-3xl shadow-2xl">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Briefcase className="text-indigo-500" />
                        Apply Now
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Full Name*</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input type="text" required className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="John Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Email Address*</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input type="email" required className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                         <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">Phone Number*</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input type="tel" required className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-slate-300 mb-2">LinkedIn / Portfolio URL</label>
                            <div className="relative">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                                <input type="url" className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500 transition-colors" placeholder="https://linkedin.com/in/..." />
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Resume/CV*</label>
                        <div className="relative group">
                            <input 
                                type="file" 
                                id="resume-upload" 
                                className="hidden" 
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileChange}
                            />
                            <label 
                                htmlFor="resume-upload" 
                                className="w-full flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-navy-800 rounded-xl cursor-pointer hover:border-indigo-500/50 hover:bg-navy-950/50 transition-all bg-navy-950/30"
                            >
                                <Upload className="w-8 h-8 text-indigo-500 mb-3" />
                                <span className="text-sm text-slate-300 font-medium">
                                    {fileName ? fileName : "Click to upload your resume"}
                                </span>
                                <span className="text-xs text-slate-500 mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-slate-300 mb-2">Cover Letter</label>
                        <div className="relative">
                             <FileText className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                             <textarea 
                                rows={4} 
                                className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-navy-950 border border-navy-800 text-white focus:outline-none focus:border-indigo-500 transition-colors resize-none" 
                                placeholder="Tell us why you're a great fit..." 
                             />
                        </div>
                    </div>

                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-indigo-400 hover:to-purple-500 transition-all flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg shadow-indigo-900/20">
                        Submit Application <ArrowUpRight className="w-5 h-5" />
                    </button>
               </form>
           </div>
       </div>
    </div>
  );
};

export default Careers;
