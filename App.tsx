import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        
        {/* About Section */}
        <section id="about" className="py-32 bg-white relative">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="relative inline-block mb-8 group">
                   <div className="absolute inset-0 bg-energy-400 rounded-full blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                   <img src="https://picsum.photos/seed/artist/200/200" alt="Artist Profile" className="relative w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-xl" />
                </div>
                
                <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">The Artist & Scientist</h2>
                <div className="w-16 h-1 bg-energy-500 mx-auto mb-8 rounded-full"></div>
                
                <p className="text-xl text-slate-600 leading-relaxed mb-8 font-light">
                    "I hold a <span className="font-semibold text-slate-800">PhD in Electrochemistry</span>, which gives me a unique advantage: I don't just draw your research; I understand it. I bridge the gap between complex raw data and the high-impact visual narrative required by top-tier journals like <span className="italic">Nature</span> and <span className="italic">Joule</span>."
                </p>
                
                <div className="flex justify-center gap-8 text-sm font-semibold text-slate-400 uppercase tracking-widest">
                    <span>London</span>
                    <span>•</span>
                    <span>New York</span>
                    <span>•</span>
                    <span>Remote</span>
                </div>
            </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;