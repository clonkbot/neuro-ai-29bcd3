import { useState } from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function FeatureCard({ icon, title, description, delay }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-5 md:p-6 transition-all duration-500 hover:border-cyan-400/50 hover:scale-[1.02] cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Glow effect */}
      <div className={`absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />

      {/* Icon */}
      <div className="relative mb-4 md:mb-5">
        <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-cyan-500/20 to-teal-500/20 rounded-xl flex items-center justify-center border border-cyan-500/30">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="relative font-orbitron text-base md:text-lg font-semibold text-cyan-100 mb-2 md:mb-3">{title}</h3>
      <p className="relative text-sm md:text-base text-gray-400 leading-relaxed">{description}</p>

      {/* Corner accent */}
      <div className="absolute top-0 right-0 w-16 md:w-20 h-16 md:h-20 overflow-hidden rounded-tr-2xl">
        <div className={`absolute top-2 md:top-3 right-2 md:right-3 w-2 h-2 bg-cyan-400 rounded-full transition-all duration-300 ${isHovered ? 'scale-150 opacity-100' : 'scale-100 opacity-50'}`} />
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'AI Meme Generator',
      description: 'Neural networks trained on viral meme formats create fresh content 24/7, optimized for maximum engagement.',
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
      title: 'Trend Predictions',
      description: 'Machine learning models analyze X sentiment, whale wallets, and social signals to predict the next big move.',
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Community Quests',
      description: 'Complete AI-generated challenges to earn rewards. The more you engage, the smarter $NEURO becomes.',
    },
    {
      icon: (
        <svg className="w-6 h-6 md:w-7 md:h-7 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: 'Sentiment Signals',
      description: 'Real-time trading signals powered by sentiment analysis across Base ecosystem and beyond.',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 relative">
      {/* Section header */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="font-orbitron text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
          <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
            Neural Capabilities
          </span>
        </h2>
        <p className="text-sm md:text-base text-gray-400 max-w-xl mx-auto px-4">
          Powered by advanced machine learning, $NEURO evolves with every interaction
        </p>
      </div>

      {/* Features grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
        {features.map((feature, i) => (
          <FeatureCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            delay={i * 100}
          />
        ))}
      </div>

      {/* Stats bar */}
      <div className="max-w-4xl mx-auto mt-12 md:mt-16 grid grid-cols-3 gap-4 md:gap-8 bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-4 md:p-6">
        {[
          { value: '42K+', label: 'Holders' },
          { value: '$2.1M', label: 'Market Cap' },
          { value: '∞', label: 'Memes Generated' },
        ].map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="font-orbitron text-xl sm:text-2xl md:text-3xl font-bold text-cyan-400">{stat.value}</div>
            <div className="text-xs md:text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
