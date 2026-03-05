import { useState, useEffect } from 'react';
import NeuralBackground from './components/NeuralBackground';
import Hero from './components/Hero';
import Features from './components/Features';
import LiveFeed from './components/LiveFeed';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white relative overflow-x-hidden">
      <NeuralBackground />
      <div className={`relative z-10 transition-all duration-1000 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Hero />
        <Features />
        <LiveFeed />
        <Footer />
      </div>
    </div>
  );
}

export default App;
