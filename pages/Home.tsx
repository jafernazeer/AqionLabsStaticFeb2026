
import React, { useState } from 'react';
import { PageType } from '../types';
import {
    ArrowRight, LayoutGrid, Bot, MessageSquare, Shield, Video,
    Phone, Check, Activity, Globe, Users, Code, GraduationCap,
    Smartphone
} from 'lucide-react';
import AqionFloLogoIcon from '../components/aqionflo-sections/AqionFloLogoIcon';

interface HomeProps {
    onNavigate: (page: PageType) => void;
}

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

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
    // Default to UAE
    const [selectedCountry, setSelectedCountry] = useState(
        countries.find(c => c.name === "United Arab Emirates") || countries[0]
    );

    const scrollToServices = () => {
        const element = document.getElementById('core-ai-services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="bg-navy-950 text-white overflow-x-hidden font-sans relative">

            {/* Background Grid - Global for Home - Increased opacity */}
            <div className="fixed inset-0 pointer-events-none z-0 bg-grid-indigo opacity-80"></div>

            {/* Subtle Indigo Glows */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-900/10 blur-[120px] rounded-full"></div>
            </div>

            {/* Hero Section */}
            <main className="relative pt-40 pb-32 px-6 max-w-7xl mx-auto z-10 flex flex-col items-center text-center">

                <h1 className="font-bold text-white mb-8 max-w-6xl tracking-tight animate-entry delay-[100ms] flex flex-col items-center">
                    <span className="text-3xl md:text-5xl lg:text-7xl leading-tight text-slate-200">Intelligence That</span>
                    <span className="text-5xl md:text-7xl lg:text-9xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400 leading-[0.9] mt-2 pb-4 drop-shadow-2xl">Delivers Growth</span>
                </h1>

                <p className="text-lg md:text-xl text-slate-400 max-w-3xl mb-12 leading-relaxed animate-entry delay-[200ms] font-light">
                    At AqionLabs, we help businesses across the UAE turn AI into measurable revenue, operational efficiency, and real competitive advantage. Through our integrated AI ecosystem, we convert strategy into fully deployed solutions, enabling scalable growth from pilot projects to enterprise-wide implementation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 animate-entry delay-[300ms] w-full justify-center">
                    <button
                        onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                        className="group px-8 py-4 rounded-full bg-white text-navy-950 font-bold hover:bg-slate-200 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px] shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                        <span className="group-hover:bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all duration-300">
                            Explore AqionVox Ai
                        </span>
                        <Bot className="w-4 h-4 group-hover:text-indigo-400 transition-colors" />
                    </button>
                    <button
                        onClick={scrollToServices}
                        className="px-8 py-4 rounded-full bg-indigo-600/10 border border-indigo-500/50 text-white font-bold hover:bg-indigo-600 hover:border-indigo-500 transition-all duration-300 flex items-center justify-center gap-2 min-w-[200px]"
                    >
                        Explore AI Services <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </main>

            {/* Flagship Product Showcase: AqionVox Ai */}
            <section className="py-24 relative z-10 border-y border-navy-800 bg-navy-900/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-400">AqionVox Ai</span></h2>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                Your new AI revenue engine, built to transform every inbound interaction into growth. From instant call handling to WhatsApp engagement and autonomous appointment booking, it turns conversations into qualified opportunities and revenue.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Answers phone calls instantly in natural Arabic and English",
                                    "Engages and nurtures leads on WhatsApp 24/7",
                                    "Qualifies leads based on intent and books slots",
                                    "Unified CRM view of every interaction"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-emerald-500" />
                                        </div>
                                        <span className="text-slate-400">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onNavigate(PageType.PRODUCT_AQIONVOX)}
                                className="bg-gradient-to-r from-indigo-400 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:from-indigo-300 hover:to-purple-500 transition-all shadow-lg shadow-indigo-500/20 flex items-center gap-2"
                            >
                                Explore AqionVox Ai <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Visual Representation */}
                        <div className="relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-purple-600/20 blur-3xl rounded-full"></div>
                            <div className="relative bg-navy-900 border border-navy-800 rounded-3xl p-8 shadow-2xl transform rotate-y-6 group-hover:rotate-0 transition-all duration-700">
                                {/* Mock UI Elements */}
                                <div className="flex items-center justify-between mb-8 border-b border-navy-800 pb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="text-xs text-slate-500 font-mono">AqionVox Engine</div>
                                </div>

                                <div className="grid grid-cols-2 gap-4 mb-6">
                                    <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                                        <Phone className="w-6 h-6 text-indigo-400 mb-2" />
                                        <div className="text-2xl font-bold text-white">0s</div>
                                        <div className="text-xs text-slate-500">Hold Time</div>
                                    </div>
                                    <div className="bg-navy-950 p-4 rounded-xl border border-navy-800">
                                        <Activity className="w-6 h-6 text-emerald-400 mb-2" />
                                        <div className="text-2xl font-bold text-white">24/7</div>
                                        <div className="text-xs text-slate-500">Availability</div>
                                    </div>
                                </div>

                                <div className="bg-navy-950 rounded-xl p-4 border border-navy-800 space-y-3">
                                    <div className="flex gap-3">
                                        <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                                        <div className="bg-navy-800 rounded-lg rounded-tl-none p-3 text-sm text-slate-300">
                                            Hello! I'd like to book an appointment for tomorrow.
                                        </div>
                                    </div>
                                    <div className="flex gap-3 flex-row-reverse">
                                        <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                                            <Bot className="w-4 h-4 text-white" />
                                        </div>
                                        <div className="bg-indigo-900/30 border border-indigo-500/30 rounded-lg rounded-tr-none p-3 text-sm text-indigo-100">
                                            I can help with that. We have slots at 10:00 AM and 2:00 PM. Which works best for you?
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Flagship Product Showcase: AqionFlo */}
            <section className="py-24 relative z-10 border-b border-navy-800 bg-navy-950">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center lg:flex-row-reverse">

                        {/* Visual Representation (Mock Dashboard) - Placed First for alternating layout on desktop */}
                        <div className="order-2 lg:order-1 relative group perspective-1000">
                            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-indigo-600/20 blur-3xl rounded-full"></div>
                            <div className="relative bg-[#0A0F1C] border border-white/10 rounded-3xl overflow-hidden shadow-2xl transform rotate-y-[-6deg] group-hover:rotate-0 transition-all duration-700 flex h-[350px]">
                                {/* Sidebar */}
                                <div className="w-48 bg-[#0F1524] border-r border-white/5 p-4 flex flex-col items-start hidden sm:flex">
                                    <div className="flex items-center gap-2 mb-8">
                                        <AqionFloLogoIcon className="w-6 h-6" />
                                        <span className="text-white font-semibold text-sm">AqionFlo</span>
                                    </div>
                                    <div className="space-y-2 w-full">
                                        <div className="h-8 rounded bg-white/10 w-full mb-4"></div>
                                        <div className="h-6 rounded bg-white/5 w-3/4"></div>
                                        <div className="h-6 rounded bg-white/5 w-5/6"></div>
                                        <div className="h-6 rounded bg-white/5 w-4/6"></div>
                                    </div>
                                </div>
                                {/* Main Area */}
                                <div className="flex-1 p-6 flex flex-col">
                                    {/* Header */}
                                    <div className="flex justify-between items-center mb-6">
                                        <div className="h-6 w-32 bg-white/10 rounded"></div>
                                        <div className="flex gap-2">
                                            <div className="h-8 w-8 bg-white/10 rounded-full"></div>
                                        </div>
                                    </div>
                                    {/* Content area */}
                                    <div className="grid grid-cols-2 gap-4 mb-4">
                                        <div className="bg-[#151B2B] p-4 rounded-xl border border-white/5">
                                            <LayoutGrid className="w-5 h-5 text-blue-400 mb-2" />
                                            <div className="text-xl font-bold text-white mb-1"><span className="text-slate-500 text-sm mr-1">$</span>124.5K</div>
                                            <div className="text-xs text-slate-500">Monthly Revenue</div>
                                        </div>
                                        <div className="bg-[#151B2B] p-4 rounded-xl border border-white/5">
                                            <Activity className="w-5 h-5 text-emerald-400 mb-2" />
                                            <div className="text-xl font-bold text-white mb-1">+24%</div>
                                            <div className="text-xs text-slate-500">Efficiency Margin</div>
                                        </div>
                                    </div>
                                    {/* Large Chart Area */}
                                    <div className="flex-1 bg-[#151B2B] rounded-xl border border-white/5 p-4 relative overflow-hidden">
                                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-blue-500/20 to-transparent"></div>
                                        <div className="flex items-end justify-between h-full px-2 gap-2 opacity-60">
                                            {/* Mock bars */}
                                            <div className="w-full bg-blue-500/40 rounded-t h-1/4"></div>
                                            <div className="w-full bg-blue-500/50 rounded-t h-2/4"></div>
                                            <div className="w-full bg-blue-500/60 rounded-t h-1/3"></div>
                                            <div className="w-full bg-blue-500/80 rounded-t h-3/4"></div>
                                            <div className="w-full bg-blue-400 rounded-t h-full"></div>
                                            <div className="w-full bg-blue-500/70 rounded-t h-2/3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="order-1 lg:order-2 lg:pl-12">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Meet <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">AqionFlo</span></h2>
                            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                                An AI-integrated ERP that connects finance, operations, and sales—so your team moves as one system.
                            </p>

                            <div className="space-y-4 mb-10">
                                {[
                                    "Unify financial health and predictive accounting",
                                    "Intelligent inventory & supply chain tracking",
                                    "Automated quote-to-cash workflows",
                                    "A unified enterprise data ecosystem"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <Check className="w-4 h-4 text-blue-500" />
                                        </div>
                                        <span className="text-slate-400">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={() => onNavigate(PageType.PRODUCT_AQIONFLO)}
                                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-full font-bold hover:from-blue-400 hover:to-indigo-500 transition-all shadow-lg shadow-blue-500/20 flex items-center gap-2"
                            >
                                Explore AqionFlo <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core AI Services Section */}
            <section id="core-ai-services" className="py-24 relative bg-navy-950/50 z-10">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Core AI Services</h2>
                        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                            Comprehensive strategies, development, and governance to integrate intelligence into your business fabric.
                        </p>
                        <div className="w-24 h-1 bg-indigo-600 mx-auto mt-8 rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-8">
                        {/* Solution: Custom Web App Development */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_WEB_DEV)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <Globe className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Custom Web App Development</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Design and develop optimized Web browsing solutions. We build custom web apps, SaaS digital products, PWAs, and single-page solutions.
                                </p>
                            </div>
                            <Globe className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Solution: Mobile App Development */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_MOBILE_DEV)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <Smartphone className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Mobile App Development</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Native, Cross-Platform, and Hybrid solutions built for the modern mobile ecosystem. We adapt deliverables to multiple OSs.
                                </p>
                            </div>
                            <Smartphone className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Solution 1: Strategy */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_STRATEGY)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <LayoutGrid className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">AI Strategy Consulting</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Bridge the gap between vision and technical reality. We roadmap your AI journey and handle the complex integration into your existing systems.
                                </p>
                            </div>
                            <LayoutGrid className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Solution 2: Private GPT Development (Renamed) */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_GENAI)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <Bot className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Private GPT Development</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Build secure, internal AI brains trained on your corporate data. Deploy RAG (Retrieval-Augmented Generation) systems that empower employees while keeping data safe.
                                </p>
                            </div>
                            <Bot className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Solution 3: AI Governance */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_GOVERNANCE)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <Shield className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">AI Governance & Security</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Deploy with confidence. We implement rigorous testing, Red Teaming, and PII protection frameworks to ensure your AI complies with UAE data laws.
                                </p>
                            </div>
                            <Shield className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Solution 4: Human AI Avatars */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_DIGITAL_HUMAN)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <Video className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Human AI Avatars</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Give your brand a face. Deploy hyper-realistic, interactive AI avatars for customer service kiosks, mobile apps, and digital concierge services.
                                </p>
                            </div>
                            <Video className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>

                        {/* Solution 5: Intelligent Chatbots */}
                        <div
                            onClick={() => onNavigate(PageType.SOLUTION_CHATBOTS)}
                            className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] bg-navy-900 border border-navy-800 rounded-3xl p-8 relative overflow-hidden group hover:border-indigo-500/50 hover:shadow-[0_0_30px_-10px_rgba(99,102,241,0.2)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                        >
                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-indigo-900/20 rounded-xl flex items-center justify-center border border-indigo-500/20 mb-6 text-indigo-500">
                                    <MessageSquare className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">Intelligent Chatbots</h3>
                                <p className="text-slate-400 text-sm leading-relaxed">
                                    Essential 24/7 engagement. We implement lightweight website widgets for instant FAQ automation and simple lead form capture.
                                </p>
                            </div>
                            <MessageSquare className="absolute -bottom-4 -right-4 w-40 h-40 text-navy-800 opacity-20 rotate-12 group-hover:scale-110 transition-transform duration-500" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Ecosystem Section */}
            <section className="py-24 relative z-10 bg-navy-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-6">The AqionLabs Ecosystem</h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                            We don't just build software; we orchestrate an entire network of intelligence to deliver enterprise-grade outcomes.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Consultants */}
                        <div className="bg-navy-950 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all group hover:-translate-y-2 duration-300">
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                <Users className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Certified Consultants</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                A curated network of AI strategists who guide your roadmap, ensuring every deployment aligns with business value and ROI targets.
                            </p>
                        </div>

                        {/* Developers */}
                        <div className="bg-navy-950 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all group hover:-translate-y-2 duration-300">
                            <div className="w-14 h-14 bg-indigo-500/10 rounded-2xl flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                                <Code className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Developer Partners</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Accredited engineers who handle the heavy lifting of API integration, model fine-tuning, and system architecture.
                            </p>
                        </div>

                        {/* Tech Partners */}
                        <div className="bg-navy-950 border border-navy-800 p-8 rounded-3xl hover:border-indigo-500/30 transition-all group hover:-translate-y-2 duration-300">
                            <div className="w-14 h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                <GraduationCap className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Research & Tech Partners</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Access to the latest models and frameworks through our partnerships with leading technology providers and research labs.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-32 relative z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/40 to-navy-950"></div>
                <div className="max-w-4xl mx-auto px-6 text-center relative z-20">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to transform your business?</h2>
                    <p className="text-xl text-slate-300 mb-12">
                        Whether you need a strategic roadmap or a fully deployed AI workforce, AqionLabs is your partner in intelligence.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => onNavigate(PageType.CONTACT)}
                            className="px-10 py-5 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold text-lg hover:from-indigo-400 hover:to-purple-500 transition-all shadow-xl shadow-indigo-900/40"
                        >
                            Book a Consultation
                        </button>
                        <button
                            onClick={() => onNavigate(PageType.ABOUT)}
                            className="px-10 py-5 rounded-full bg-navy-800 text-white font-bold text-lg hover:bg-navy-700 transition-all border border-navy-700"
                        >
                            Learn More About Us
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
