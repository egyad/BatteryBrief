import React from 'react';
import { Mail, Linkedin, Twitter, BatteryCharging } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="p-1.5 bg-energy-500 rounded text-slate-950">
                <BatteryCharging size={20} />
              </div>
              <span className="font-serif text-2xl font-bold tracking-tight">Battery<span className="text-energy-500">Brief</span></span>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md font-light">
              We translate complex electrochemical data into high-impact visual narratives for top-tier academic journals.
            </p>
          </div>
          
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Studio</h4>
            <ul className="space-y-4 text-slate-300">
              <li><a href="#portfolio" className="hover:text-energy-400 transition-colors">Selected Work</a></li>
              <li><a href="#about" className="hover:text-energy-400 transition-colors">About the Artist</a></li>
              <li><a href="#contact" className="hover:text-energy-400 transition-colors">Commission Inquiry</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-6">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-energy-500 hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-energy-500 hover:text-white transition-all">
                <Linkedin size={18} />
              </a>
              <a href="mailto:hello@batterybrief.com" className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-900 hover:bg-energy-500 hover:text-white transition-all">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} BatteryBrief. All rights reserved.</p>
          <p className="mt-2 md:mt-0 opacity-50">London • New York</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;