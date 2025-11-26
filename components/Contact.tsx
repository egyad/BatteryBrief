import React from 'react';
import { Mail, Battery, ArrowUpRight } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 bg-slate-950 text-white relative overflow-hidden">
      {/* Abstract Energy Background */}
      <div className="absolute inset-0 z-0">
         <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-science-900/20 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-energy-900/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-slate-800 bg-slate-900/80 mb-8">
            <div className="w-2 h-2 rounded-full bg-volt-400 animate-pulse"></div>
            <span className="text-xs font-medium tracking-wide text-slate-400 uppercase">Accepting New Commissions</span>
        </div>

        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 leading-tight">
          Let's visualize your <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-400 to-volt-400">breakthrough.</span>
        </h2>
        
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
          Specialized illustration for high-impact journals. Send your abstract or draft, and receive a concept sketch within 24 hours.
        </p>

        <a 
          href="mailto:hello@batterybrief.com" 
          className="group relative inline-flex items-center gap-4 px-8 py-5 bg-white text-slate-950 rounded-full text-xl font-bold hover:bg-slate-200 transition-all shadow-[0_0_40px_rgba(255,255,255,0.1)] hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]"
        >
          <Mail className="w-6 h-6" />
          <span>hello@batterybrief.com</span>
          <ArrowUpRight className="w-6 h-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
        </a>

      </div>
    </section>
  );
};

export default Contact;