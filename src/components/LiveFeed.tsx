import { useState, useEffect } from 'react';

interface FeedItem {
  id: number;
  type: 'meme' | 'prediction' | 'quest' | 'signal';
  content: string;
  timestamp: string;
}

function LiveFeed() {
  const [feedItems, setFeedItems] = useState<FeedItem[]>([
    { id: 1, type: 'meme', content: 'New meme generated: "When $NEURO pumps 50%..."', timestamp: '2s ago' },
    { id: 2, type: 'prediction', content: 'Bullish sentiment detected on Base ecosystem', timestamp: '15s ago' },
    { id: 3, type: 'signal', content: 'Buy signal triggered: RSI oversold + whale accumulation', timestamp: '32s ago' },
    { id: 4, type: 'quest', content: 'Community quest completed: 1000 retweets achieved!', timestamp: '1m ago' },
    { id: 5, type: 'meme', content: 'Viral alert: "AI traders be like..." hitting 10K likes', timestamp: '2m ago' },
  ]);

  const [pulseIndex, setPulseIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulseIndex(prev => (prev + 1) % feedItems.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [feedItems.length]);

  useEffect(() => {
    const messages = [
      { type: 'meme' as const, content: 'Fresh meme cooking: "POV: You bought $NEURO early"' },
      { type: 'prediction' as const, content: 'Neural network detecting unusual activity on X' },
      { type: 'signal' as const, content: 'Sentiment shift: Community mood turning euphoric' },
      { type: 'quest' as const, content: 'New quest available: Share your $NEURO journey' },
    ];

    const interval = setInterval(() => {
      const newItem = messages[Math.floor(Math.random() * messages.length)];
      setFeedItems(prev => [
        { id: Date.now(), ...newItem, timestamp: 'just now' },
        ...prev.slice(0, 4)
      ]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getTypeIcon = (type: FeedItem['type']) => {
    switch (type) {
      case 'meme':
        return (
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-orange-500/20 flex items-center justify-center shrink-0">
            <span className="text-sm md:text-base">🎨</span>
          </div>
        );
      case 'prediction':
        return (
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-purple-500/20 flex items-center justify-center shrink-0">
            <span className="text-sm md:text-base">🔮</span>
          </div>
        );
      case 'quest':
        return (
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
            <span className="text-sm md:text-base">⚔️</span>
          </div>
        );
      case 'signal':
        return (
          <div className="w-7 h-7 md:w-8 md:h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center shrink-0">
            <span className="text-sm md:text-base">📊</span>
          </div>
        );
    }
  };

  return (
    <section className="py-12 md:py-20 px-4 relative">
      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      <div className="absolute right-0 top-1/4 w-48 md:w-96 h-48 md:h-96 bg-teal-500/5 rounded-full blur-3xl" />

      <div className="max-w-3xl mx-auto relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 md:mb-8">
          <div>
            <h2 className="font-orbitron text-xl md:text-2xl font-bold text-cyan-100">Neural Activity Feed</h2>
            <p className="text-xs md:text-sm text-gray-500 mt-1">Real-time AI operations</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-green-500"></span>
            </span>
            <span className="text-xs md:text-sm text-green-400 font-mono">LIVE</span>
          </div>
        </div>

        {/* Feed container */}
        <div className="bg-black/40 backdrop-blur-sm border border-cyan-500/20 rounded-2xl overflow-hidden">
          {/* Terminal header */}
          <div className="flex items-center gap-2 px-4 py-2 md:py-3 border-b border-cyan-500/10 bg-black/40">
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-red-500/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-yellow-500/80" />
            <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-green-500/80" />
            <span className="ml-2 md:ml-4 text-[10px] md:text-xs text-gray-500 font-mono">neuro://neural-feed</span>
          </div>

          {/* Feed items */}
          <div className="p-3 md:p-4 space-y-2 md:space-y-3">
            {feedItems.map((item, index) => (
              <div
                key={item.id}
                className={`flex items-start gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-all duration-500 ${
                  index === pulseIndex ? 'bg-cyan-500/10 border border-cyan-500/20' : 'bg-white/[0.02]'
                }`}
              >
                {getTypeIcon(item.type)}
                <div className="flex-1 min-w-0">
                  <p className="text-xs md:text-sm text-gray-200 leading-relaxed break-words">{item.content}</p>
                  <span className="text-[10px] md:text-xs text-gray-600 mt-1 block">{item.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Processing indicator */}
          <div className="px-4 py-2 md:py-3 border-t border-cyan-500/10 bg-black/40">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
              </div>
              <span className="text-[10px] md:text-xs text-gray-500 font-mono">Neural network processing...</span>
            </div>
          </div>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 md:gap-6 mt-8 md:mt-10">
          {[
            { name: 'X (Twitter)', icon: '𝕏' },
            { name: 'Telegram', icon: '✈️' },
            { name: 'Discord', icon: '💬' },
          ].map((social) => (
            <button
              key={social.name}
              className="group flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 bg-black/40 border border-cyan-500/20 rounded-lg hover:border-cyan-400/50 hover:bg-cyan-500/5 transition-all"
            >
              <span className="text-base md:text-lg">{social.icon}</span>
              <span className="text-xs md:text-sm text-gray-400 group-hover:text-cyan-400 transition-colors hidden sm:inline">{social.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LiveFeed;
