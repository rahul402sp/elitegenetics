import React, { useState } from 'react';
import { Filter } from 'lucide-react';
import BullCard from '../components/BullCard';
import { BULLS } from '../constants';

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'A2A2', 'Daughter Proven', 'High Milk', 'Type Specialist'];

  const filteredBulls = filter === 'All' 
    ? BULLS 
    : BULLS.filter(bull => bull.badges.includes(filter));

  return (
    <div className="pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">Sire Portfolio</h1>
          <p className="text-lg text-gray-600">
            Explore our carefully selected Holstein sire portfolio featuring proven and genomically elite bulls with exceptional performance traits.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-12">
          <div className="flex items-center gap-2 text-gray-500 font-medium mr-4">
            <Filter size={20} /> Filter by:
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                    ? 'bg-brand-blue text-white shadow-md' 
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        {filteredBulls.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBulls.map(bull => (
              <BullCard key={bull.id} bull={bull} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl border border-dashed border-gray-300">
            <p className="text-gray-500 text-lg">No bulls found matching this filter.</p>
            <button 
              onClick={() => setFilter('All')}
              className="mt-4 text-brand-blue font-bold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;