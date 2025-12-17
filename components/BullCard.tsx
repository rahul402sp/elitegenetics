import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Droplets } from 'lucide-react';
import { Bull } from '../types';

interface BullCardProps {
  bull: Bull;
}

const BullCard: React.FC<BullCardProps> = ({ bull }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col h-full border border-gray-100 group">
      <div className="relative h-64 overflow-hidden bg-gray-200">
        <img 
          src={bull.image} 
          alt={bull.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {bull.badges.slice(0, 2).map((badge, idx) => (
            <span key={idx} className="bg-brand-blue/90 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-sm">
              {badge}
            </span>
          ))}
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-display font-bold text-gray-900">{bull.name}</h3>
            <p className="text-sm text-gray-500">{bull.code}</p>
          </div>
          <div className="bg-brand-green/10 text-brand-darkGreen px-3 py-1 rounded-lg font-bold text-sm">
            GTPI +{bull.stats.gtpi}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 rounded text-brand-blue">
                    <Droplets size={16} />
                </div>
                <div>
                    <span className="block text-xs text-gray-500">Milk</span>
                    <span className="font-bold text-gray-800">+{bull.stats.milk}</span>
                </div>
            </div>
            <div className="flex items-center gap-2">
                <div className="p-1.5 bg-purple-50 rounded text-purple-600">
                    <Activity size={16} />
                </div>
                <div>
                    <span className="block text-xs text-gray-500">UDC</span>
                    <span className="font-bold text-gray-800">+{bull.stats.udc.toFixed(2)}</span>
                </div>
            </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow">
            {bull.description}
        </p>

        <Link 
          to={`/bull/${bull.id}`} 
          className="w-full py-3 rounded-lg border-2 border-brand-blue text-brand-blue font-bold hover:bg-brand-blue hover:text-white transition-colors flex items-center justify-center gap-2"
        >
          View Full Profile <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default BullCard;