import { useState, useEffect } from 'react';

function Hero() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [tokenPrice, setTokenPrice] = useState(0.00042);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 5000);

    const priceInterval = setInterval(() => {
      setTokenPrice(prev => {
        const change = (Math.random() - 0.48) * 0.00005;
        return Math.max(0.0001, prev + change);
      });
    }, 2000);

    return () => {
      clearInterval(glitchInterval);
      clearInterval(priceInterval);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 py-12 md:py-20 relative">
      {/* Floating price ticker */}
      <div className="absolute top-4 right-4 md:top-8 md:right-8 bg-black/60 backdrop-blur-md border border-cyan-500/30 rounded-lg px-3 py-2 md:px-4 md:py-2">
        <div className="flex items-center gap-2 md:gap-3">
          <span className="text-cyan-400 font-mono text-xs md:text-sm">$NEURO</span>
          <span className="text-white font-mono text-sm md:text-base">${tokenPrice.toFixed(5)}</span>
          <span className="text-green-400 text-xs animate-pulse">+12.4%</span>
        </div>
      </div>

      {/* Logo / Brand */}
      <div className="mb-6 md:mb-8 relative">
        <div className="w-20 h-20 md:w-28 md:h-28 relative">
          {/* Brain icon with neural effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl opacity-20 blur-xl animate-pulse" />
          <div className="absolute inset-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-16 h-16 md:w-20 md:h-20">
              <defs>
                <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00d4c2" />
                  <stop offset="100%" stopColor="#0891b2" />
                </linearGradient>
              </defs>
              {/* Brain outline */}
              <path
                d="M50 10C30 10 20 25 20 40C20 50 25 55 25 60C25 70 20 75 25 85C30 95 45 95 50 95C55 95 70 95 75 85C80 75 75 70 75 60C75 55 80 50 80 40C80 25 70 10 50 10Z"
                fill="none"
                stroke="url(#brainGrad)"
                strokeWidth="2"
                className="animate-pulse"
              />
              {/* Neural connections */}
              <circle cx="35" cy="35" r="3" fill="#00d4c2" className="animate-ping" style={{ animationDuration: '2s' }} />
              <circle cx="65" cy="35" r="3" fill="#00d4c2" className="animate-ping" style={{ animationDuration: '2.5s' }} />
              <circle cx="50" cy="50" r="4" fill="#00d4c2" className="animate-ping" style={{ animationDuration: '1.5s' }} />
              <circle cx="40" cy="65" r="3" fill="#00d4c2" className="animate-ping" style={{ animationDuration: '3s' }} />
              <circle cx="60" cy="65" r="3" fill="#00d4c2" className="animate-ping" style={{ animationDuration: '2.2s' }} />
              <line x1="35" y1="35" x2="50" y2="50" stroke="#00d4c2" strokeWidth="1" opacity="0.5" />
              <line x1="65" y1="35" x2="50" y2="50" stroke="#00d4c2" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="50" x2="40" y2="65" stroke="#00d4c2" strokeWidth="1" opacity="0.5" />
              <line x1="50" y1="50" x2="60" y2="65" stroke="#00d4c2" strokeWidth="1" opacity="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Main heading */}
      <h1
        className={`font-orbitron text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-center mb-4 md:mb-6 tracking-tight transition-all ${
          glitchActive ? 'translate-x-1 text-red-500' : ''
        }`}
        style={{
          textShadow: glitchActive
            ? '-2px 0 #ff0040, 2px 0 #00d4c2'
            : '0 0 40px rgba(0, 212, 194, 0.5), 0 0 80px rgba(0, 212, 194, 0.3)'
        }}
      >
        <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
          $NEURO
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-cyan-100/80 font-light tracking-wide mb-6 md:mb-8 text-center px-4">
        "The AI That Trades the Memes."
      </p>

      {/* Fire emoji + concept */}
      <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-xl px-4 py-4 md:px-8 md:py-6 max-w-2xl mx-4">
        <div className="flex items-start gap-3 md:gap-4">
          <span className="text-2xl md:text-3xl">🔥</span>
          <div>
            <h2 className="font-orbitron text-lg md:text-xl font-semibold text-cyan-400 mb-2 md:mb-3">Concept</h2>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed mb-3 md:mb-4">
              $NEURO is an AI-powered memecoin that "learns" from social trends, X engagement, Base ecosystem chatter, and meme virality — then automatically generates:
            </p>
            <ul className="space-y-1.5 md:space-y-2">
              {[
                'Meme content',
                'Trend predictions',
                'Community quests',
                'Trading sentiment signals'
              ].map((item, i) => (
                <li
                  key={item}
                  className="flex items-center gap-2 md:gap-3 text-sm md:text-base text-gray-200"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 md:mt-10 w-full px-4 sm:w-auto">
        <button className="group relative px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-cyan-500 to-teal-500 rounded-lg font-orbitron font-semibold text-sm md:text-base text-black overflow-hidden transition-all hover:scale-105 active:scale-95">
          <span className="relative z-10">Buy $NEURO</span>
          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
        </button>
        <button className="px-6 md:px-8 py-3 md:py-4 border border-cyan-500/50 rounded-lg font-orbitron font-semibold text-sm md:text-base text-cyan-400 hover:bg-cyan-500/10 transition-all hover:border-cyan-400">
          View Chart
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 md:w-6 md:h-10 border-2 border-cyan-500/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
