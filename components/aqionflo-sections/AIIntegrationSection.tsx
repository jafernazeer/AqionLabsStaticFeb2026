import { Brain, Sparkles, MessageSquare, Phone, Calendar, TrendingUp, Check } from 'lucide-react';

const AIIntegrationSection = () => {

  const aiFeatures = [
    {
      icon: <Phone size={24} />,
      title: 'AI Voice Assistant',
      description: 'Answers calls instantly in natural Arabic and English with zero hold time.',
      color: 'from-violet-500 to-purple-600'
    },
    {
      icon: <MessageSquare size={24} />,
      title: 'WhatsApp Intelligence',
      description: 'Engages and nurtures leads on WhatsApp 24/7 with automated replies.',
      color: 'from-emerald-500 to-teal-600'
    },
    {
      icon: <Brain size={24} />,
      title: 'Intent Recognition',
      description: 'Qualifies leads based on intent and books slots autonomously.',
      color: 'from-amber-500 to-orange-600'
    },
    {
      icon: <Calendar size={24} />,
      title: 'Smart Scheduling',
      description: 'Books appointments directly during calls without human intervention.',
      color: 'from-rose-500 to-pink-600'
    },
    {
      icon: <TrendingUp size={24} />,
      title: 'Revenue Engine',
      description: 'Converts conversations into tangible revenue with unified CRM view.',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      icon: <Sparkles size={24} />,
      title: 'Predictive Analytics',
      description: 'Forecasts trends and suggests optimal actions for your business.',
      color: 'from-indigo-500 to-violet-600'
    }
  ];

  const benefits = [
    'Handles interruptions naturally (non-linear conversation)',
    'Intelligently escalates to humans only when necessary',
    'Unified context across Voice + WhatsApp channels',
    'Real-time sentiment analysis and response optimization'
  ];

  return (
    <section
      id="ai"
      className="relative py-24 lg:py-32 bg-[#070B14]"
      style={{ zIndex: 30 }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(46, 233, 168, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative w-full px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#818cf8]/10 border border-[#818cf8]/20 mb-6">
            <Sparkles size={16} className="text-[#818cf8]" />
            <span className="text-[#818cf8] text-sm font-medium">Powered by AqionLabs AI</span>
          </div>

          <h2 className="text-[clamp(32px,4vw,52px)] font-semibold text-[#F4F7FF] leading-tight mb-6">
            Intelligence That <span className="text-gradient">Delivers Growth</span>
          </h2>

          <p className="text-[#A7B1C8] text-lg leading-relaxed">
            AqionFlo integrates cutting-edge AI capabilities from AqionLabs, transforming every interaction into qualified opportunities and measurable revenue.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {aiFeatures.map((feature, index) => (
            <div
              key={index}
              className="ai-card glass-panel p-6 hover:border-[#818cf8]/30 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <span className="text-white">{feature.icon}</span>
              </div>
              <h3 className="text-[#F4F7FF] font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-[#A7B1C8] text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-3xl mx-auto">
          <div className="glass-panel p-8">
            <h3 className="text-[#F4F7FF] font-semibold text-xl mb-6 text-center">
              The One Conversation Rule
            </h3>
            <p className="text-[#A7B1C8] text-center mb-8">
              Voice + WhatsApp = One Context. No silos. No lost information.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#818cf8]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check size={12} className="text-[#818cf8]" />
                  </div>
                  <span className="text-[#A7B1C8] text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIIntegrationSection;
