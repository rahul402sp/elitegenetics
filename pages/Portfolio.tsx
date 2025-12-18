import React, { useState } from 'react';
import { Filter, Search, Grid, List } from 'lucide-react';
import BullCard from '../components/BullCard';
import { useBulls } from '../context/BullContext';

const Portfolio: React.FC = () => {
  const { bulls } = useBulls();
  const [filter, setFilter] = useState<string>('All');

  // Only show published bulls in public portfolio
  const liveBulls = bulls.filter(b => b.published !== false);

  const categories = ['All', 'A2A2', 'Daughter Proven', 'High Milk', 'Type Specialist', 'Polled'];

  const filteredBulls = filter === 'All' 
    ? liveBulls 
    : liveBulls.filter(bull => bull.badges.some(b => b.includes(filter)));

  return (
    <div className="bg-white min-h-screen">
      {/* Portfolio Header */}
      <section className="bg-brand-black py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <span className="text-brand-green font-black tracking-[0.6em] uppercase text-[10px] mb-6 block">Premium Inventory</span>
          <h1 className="text-5xl md:text-7xl font-display font-black text-white mb-8 tracking-tighter uppercase italic">
            Sire <span className="text-brand-blue">Portfolio</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Explore the top 1% of global Holstein genetics. Each bull is selected for peak commercial performance and multi-generational profit.
          </p>
        </div>
      </section>

      {/* Control Bar */}
      <section className="sticky top-20 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100 py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] transition-all ${
                    filter === cat 
                      ? 'bg-brand-green text-white shadow-xl shadow-brand-green/20' 
                      : 'bg-slate-50 text-gray-400 hover:bg-slate-100 border border-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            
            <div className="flex items-center gap-4 text-gray-400 font-bold text-[10px] uppercase tracking-widest">
              <span className="bg-slate-100 px-4 py-2 rounded-xl text-brand-blue">{filteredBulls.length} Sires Found</span>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          {filteredBulls.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {filteredBulls.map(bull => (
                <div key={bull.id} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                  <BullCard bull={bull} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-40 bg-slate-50 rounded-[4rem] border-2 border-dashed border-slate-200">
              <Search size={64} className="text-slate-200 mx-auto mb-8" />
              <p className="text-gray-500 text-xl font-bold uppercase tracking-widest">No matching sires in current inventory.</p>
              <button 
                onClick={() => setFilter('All')}
                className="mt-10 text-brand-blue font-black uppercase tracking-[0.3em] text-xs hover:text-brand-green transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Dynamic CTA */}
      <section className="py-32 bg-brand-black text-white overflow-hidden relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/5 rounded-full blur-[150px]"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-12 uppercase tracking-tighter italic">Cannot find a specific bull?</h2>
          <p className="text-xl text-gray-400 mb-16 max-w-2xl mx-auto font-medium">We can facilitate custom imports for bulk requirements through our global network of breeding partners.</p>
          <button className="bg-brand-blue hover:bg-brand-darkBlue text-white px-16 py-7 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[12px] shadow-2xl transition-all hover:scale-105">
            Submit Custom Request
          </button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;