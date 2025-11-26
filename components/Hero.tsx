import React, { useMemo } from 'react';
import { ArrowRight, Zap, BatteryCharging, ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  // Generate particles statically to avoid hydration mismatches and ensure consistent performance
  const particles = useMemo(() => {
    return [...Array(25)].map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `-${Math.random() * 20}%`,
      // Wider range of speeds for dynamic feel (2s to 8s)
      duration: `${2 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
      // Variable trail lengths
      width: `${60 + Math.random() * 100}px`,
      opacity: 0.1 + Math.random() * 0.5,
    }));
  }, []);

  const bubbles = useMemo(() => {
    return [...Array(15)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${4 + Math.random() * 6}s`,
      delay: `${Math.random() * 5}s`,
      size: `${4 + Math.random() * 6}px`
    }));
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
      
      {/* --- Animated Background: Ionic Flow --- */}
      <div className="absolute inset-0 z-0 opacity-30">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        
        {/* Glowing Orbs (Ions) */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-science-600 rounded-full mix-blend-screen filter blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-energy-500 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

        {/* Moving Particles (Current) */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute h-[2px] bg-gradient-to-r from-transparent via-volt-400 to-transparent rounded-full"
              style={{
                top: p.top,
                left: p.left,
                width: p.width,
                opacity: p.opacity,
                animation: `flowRight ${p.duration} linear infinite`,
                animationDelay: p.delay
              }}
            ></div>
          ))}
          
          {/* Vertical rising bubbles (Electrolytes) */}
          {bubbles.map((b) => (
            <div
              key={`v-${b.id}`}
              className="absolute bg-science-400/50 rounded-full blur-[1px]"
              style={{
                width: b.size,
                height: b.size,
                bottom: '-20px',
                left: b.left,
                animation: `flowUp ${b.duration} linear infinite`,
                animationDelay: b.delay
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* --- Content --- */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-science-500/30 bg-science-900/30 backdrop-blur-md text-science-300 text-sm font-semibold uppercase tracking-wide mb-8 animate-float">
          <Zap size={16} className="mr-2 text-energy-400 fill-energy-400" />
          Powering High-Impact Research
        </div>
        
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-white tracking-tight mb-8 leading-tight">
          Visualizing the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-400 via-volt-400 to-science-400 animate-pulse-fast">
            Future of Energy
          </span>
        </h1>
        
        <p className="mt-4 max-w-2xl text-xl text-slate-300 leading-relaxed font-light">
          Premium scientific illustration for battery research. 
          Specializing in solid-state electrolytes, cathode materials, and reaction mechanisms for journals like 
          <span className="italic font-serif text-science-300"> Nature Energy</span> & <span className="italic font-serif text-energy-400">Joule</span>.
        </p>
        
        <div className="mt-12 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a
            href="#portfolio"
            className="group relative inline-flex items-center justify-center px-8 py-4 border-2 border-transparent text-base font-bold rounded-full text-slate-900 bg-white hover:bg-slate-100 md:text-lg transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)]"
          >
            <BatteryCharging className="mr-2 h-5 w-5 text-science-600 group-hover:animate-pulse" />
            View Battery Portfolio
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 border border-slate-700 text-base font-medium rounded-full text-white bg-slate-900/50 hover:bg-slate-800 hover:border-science-500 md:text-lg transition-all backdrop-blur-sm"
          >
            Commission Work <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500">
        <ChevronDown size={32} />
      </div>
    </div>
  );
};

export default Hero;