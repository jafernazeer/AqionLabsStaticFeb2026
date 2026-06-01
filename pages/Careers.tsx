
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
    <div className="mesh-bg min-h-screen text-ink pt-20 font-sans relative">
       <div className="fixed inset-0 pointer-events-none z-0 bg-hairline-grid opacity-80"></div>

       <div className="max-w-4xl mx-auto px-6 py-16 relative z-10">
           <div className="text-center mb-16">
               <span className="text-petrol font-semibold tracking-wider text-sm uppercase mb-4 block">Careers</span>
               <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Intelligence Revolution</h1>
               <p className="text-taupe text-lg max-w-2xl mx-auto">
                   We are looking for visionaries, engineers, and strategists to help build the future of enterprise AI. If you are obsessed with impact, we want to hear from you.
               </p>
           </div>

           <div className="relative">
               <div className="absolute inset-0 bg-petrol/5 blur-3xl rounded-full"></div>
               <form className="relative bg-paper border border-hairline p-8 md:p-10 rounded-3xl shadow-2xl">
                    <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                        <Briefcase className="text-petrol" />
                        Apply Now
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-graphite mb-2">Full Name*</label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ash" />
                                <input type="text" required className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-bone border border-hairline text-ink focus:outline-none focus:border-petrol transition-colors" placeholder="John Doe" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-graphite mb-2">Email Address*</label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ash" />
                                <input type="email" required className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-bone border border-hairline text-ink focus:outline-none focus:border-petrol transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                         <div>
                            <label className="block text-sm font-medium text-graphite mb-2">Phone Number*</label>
                            <div className="relative">
                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ash" />
                                <input type="tel" required className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-bone border border-hairline text-ink focus:outline-none focus:border-petrol transition-colors" placeholder="+1 (555) 000-0000" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-graphite mb-2">LinkedIn / Portfolio URL</label>
                            <div className="relative">
                                <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ash" />
                                <input type="url" className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-bone border border-hairline text-ink focus:outline-none focus:border-petrol transition-colors" placeholder="https://linkedin.com/in/..." />
                            </div>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-graphite mb-2">Resume/CV*</label>
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
                                className="w-full flex flex-col items-center justify-center px-6 py-8 border-2 border-dashed border-hairline rounded-xl cursor-pointer hover:border-petrol/50 hover:bg-bone/50 transition-all bg-bone/30"
                            >
                                <Upload className="w-8 h-8 text-petrol mb-3" />
                                <span className="text-sm text-graphite font-medium">
                                    {fileName ? fileName : "Click to upload your resume"}
                                </span>
                                <span className="text-xs text-ash mt-1">PDF, DOC, DOCX (Max 5MB)</span>
                            </label>
                        </div>
                    </div>

                    <div className="mb-8">
                        <label className="block text-sm font-medium text-graphite mb-2">Cover Letter</label>
                        <div className="relative">
                             <FileText className="absolute left-4 top-4 w-5 h-5 text-ash" />
                             <textarea 
                                rows={4} 
                                className="w-full pl-12 pr-5 py-3.5 rounded-xl bg-bone border border-hairline text-ink focus:outline-none focus:border-petrol transition-colors resize-none" 
                                placeholder="Tell us why you're a great fit..." 
                             />
                        </div>
                    </div>

                    <button className="w-full bg-petrol text-bone font-bold py-4 rounded-xl hover:bg-petrolDeep transition-all flex items-center justify-center gap-2 uppercase tracking-wide shadow-lg shadow-petrol/20">
                        Submit Application <ArrowUpRight className="w-5 h-5" />
                    </button>
               </form>
           </div>
       </div>
    </div>
  );
};

export default Careers;
