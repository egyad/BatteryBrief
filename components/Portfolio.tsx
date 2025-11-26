import React, { useState } from 'react';
import { PortfolioItem } from '../types';
import { ArrowUpRight, Plus } from 'lucide-react';

const categories = ['All', 'Materials', 'Mechanisms', 'Data Viz', 'Cover Art'];

// Helper type for grid sizing
type GridSize = 'large' | 'tall' | 'wide' | 'normal';

// Extended mock data to demonstrate the layout engine and "Load More" feature
const portfolioItems: (PortfolioItem & { size: GridSize })[] = [
  {
    id: '1',
    title: 'Solid-State Interface',
    category: 'Materials',
    imageUrl: 'https://picsum.photos/seed/crystal/1200/1200',
    description: '3D visualization of the electrolyte-anode interface stability.',
    size: 'large' // 2x2 Square (Good for high detail)
  },
  {
    id: '2',
    title: 'Dendrite Suppression',
    category: 'Mechanisms',
    imageUrl: 'https://picsum.photos/seed/lightning/600/1200',
    description: 'Depicting the effect of artificial SEI layers on lithium growth.',
    size: 'tall' // 1x2 Portrait
  },
  {
    id: '3',
    title: 'Cycle Efficiency',
    category: 'Data Viz',
    imageUrl: 'https://picsum.photos/seed/chart/600/600',
    description: 'Multi-variable plot showing coulombic efficiency.',
    size: 'normal' // 1x1 Square
  },
  {
    id: '5',
    title: 'Ion Pathways',
    category: 'Mechanisms',
    imageUrl: 'https://picsum.photos/seed/particles/600/600',
    description: 'Schematic of Li+ diffusion channels in perovskite structures.',
    size: 'normal' // 1x1 Square
  },
  {
    id: '4',
    title: 'Nature Energy Cover',
    category: 'Cover Art',
    imageUrl: 'https://picsum.photos/seed/abstract/1200/600',
    description: 'Conceptual artwork representing high-voltage cathode stability.',
    size: 'wide' // 2x1 Landscape
  },
  {
    id: '6',
    title: 'Flexible Mesh',
    category: 'Materials',
    imageUrl: 'https://picsum.photos/seed/mesh/800/400',
    description: 'Structural illustration of woven carbon nanotube collectors.',
    size: 'wide' // 2x1 Landscape
  },
  // --- New Items for "Load More" ---
  {
    id: '7',
    title: 'Thermal Runaway',
    category: 'Mechanisms',
    imageUrl: 'https://picsum.photos/seed/fire/600/1200',
    description: 'Simulation of heat propagation in a cylindrical cell pack.',
    size: 'tall' // 1x2 Portrait
  },
  {
    id: '8',
    title: 'Silicon Anode Expansion',
    category: 'Materials',
    imageUrl: 'https://picsum.photos/seed/silicon/1200/600',
    description: 'Visualizing volume expansion issues in silicon-based anodes.',
    size: 'wide' // 2x1 Landscape
  },
  {
    id: '9',
    title: 'Redox Flow',
    category: 'Data Viz',
    imageUrl: 'https://picsum.photos/seed/liquid/600/600',
    description: 'Schematic of tank design and membrane exchange.',
    size: 'normal' // 1x1
  },
  {
    id: '10',
    title: 'Joule Cover Feature',
    category: 'Cover Art',
    imageUrl: 'https://picsum.photos/seed/joule/1200/1200',
    description: 'Abstract representation of energy density vs. power density.',
    size: 'large' // 2x2
  },
  {
    id: '11',
    title: 'Nanowire Array',
    category: 'Materials',
    imageUrl: 'https://picsum.photos/seed/nano/600/600',
    description: 'SEM-inspired render of aligned nanowire structures.',
    size: 'normal' // 1x1
  },
  {
    id: '12',
    title: 'Quantum Tunneling',
    category: 'Mechanisms',
    imageUrl: 'https://picsum.photos/seed/quantum/1200/600',
    description: 'Visualizing electron tunneling effects at the nanoscale.',
    size: 'wide' // 2x1
  }
];

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleCount, setVisibleCount] = useState(6);

  const filteredItems = activeCategory === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = visibleCount < filteredItems.length;

  const handleLoadMore = () => {
    setVisibleCount(prev => prev + 6);
  };

  // Helper to determine grid span classes based on item size
  // Note: mobile layout forces col-span-1 to stack everything naturally
  const getGridClasses = (size: GridSize) => {
    switch(size) {
      case 'large': return 'md:col-span-2 md:row-span-2 h-[480px] md:h-full';
      case 'tall': return 'md:col-span-1 md:row-span-2 h-[480px] md:h-full';
      case 'wide': return 'md:col-span-2 md:row-span-1 h-[240px] md:h-full';
      default: return 'md:col-span-1 md:row-span-1 h-[240px] md:h-full';
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
          <div>
            <h2 className="text-energy-500 font-bold tracking-widest uppercase text-sm mb-3">Selected Work</h2>
            <p className="text-4xl md:text-5xl font-serif text-white font-bold">
              The Art of <span className="text-transparent bg-clip-text bg-gradient-to-r from-energy-400 to-volt-400">Electrochemistry</span>
            </p>
          </div>

          {/* Minimalist Tabs */}
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6); // Reset visible count on filter change
                }}
                className={`text-sm transition-all duration-300 relative pb-1 ${
                  activeCategory === cat
                    ? 'text-white font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-energy-500'
                    : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        {/* grid-flow-dense is CRITICAL here: it fills empty gaps with smaller items if they fit */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[240px] gap-4 grid-flow-dense">
          {visibleItems.map((item) => (
            <div 
              key={item.id}
              className={`group relative overflow-hidden rounded-2xl bg-slate-900 ${getGridClasses(item.size)} shadow-xl border border-slate-800/50 hover:border-energy-500/30 transition-all duration-500`}
            >
              {/* Image */}
              <img 
                src={item.imageUrl} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500"></div>
              
              {/* Hover Content */}
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className="flex justify-between items-end gap-4">
                    <div className="flex-1">
                      <span className="text-energy-400 text-xs font-bold uppercase tracking-wider mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {item.category}
                      </span>
                      <h3 className="text-xl font-bold text-white mb-1 leading-tight">
                        {item.title}
                      </h3>
                      {/* Description only shows on hover/focus to keep grid clean */}
                      <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500">
                         <p className="text-slate-300 text-sm overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                           {item.description}
                         </p>
                      </div>
                    </div>
                    
                    <div className="bg-white/10 backdrop-blur-md p-3 rounded-full text-white opacity-0 group-hover:opacity-100 hover:bg-energy-500 hover:text-white transition-all shrink-0 translate-x-4 group-hover:translate-x-0 duration-500">
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {hasMore && (
          <div className="mt-16 text-center">
            <button
              onClick={handleLoadMore}
              className="group inline-flex items-center gap-2 px-8 py-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-energy-500 text-white rounded-full transition-all duration-300"
            >
              <span>View Full Gallery</span>
              <Plus size={18} className="text-energy-500 group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <p className="mt-4 text-slate-500 text-sm">
              Showing {visibleCount} of {filteredItems.length} works
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Portfolio;