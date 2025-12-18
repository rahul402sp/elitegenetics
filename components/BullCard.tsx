import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Droplets, Target, ChevronRight, Zap } from 'lucide-react';
import { Bull } from '../types';

interface BullCardProps {
  bull: Bull;
}

const BullCard: React.FC<BullCardProps> = ({ bull }) => {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,113,188,0.15)] transition-all duration-700 overflow-hidden flex flex-col h-full border border-slate-100 group relative">
      {/* Visual Header / Image Container */}
      <div className="relative h-80 overflow-hidden bg-slate-50 flex items-center justify-center p-8">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-blue/10 rounded-full blur-[60px]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-green/10 rounded-full blur-[60px]"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #0071bc05 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <img 
          src={bull.image} 
          alt={bull.name} 
          className="w-full h-full object-contain relative z-10 group-hover:scale-110 transition-transform duration-[1s] ease-out drop-shadow-[0_20px_30px_rgba(0,0,0,0.15)]" 
        />
        
        {/* Top Badges */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
          {bull.badges.slice(0, 2).map((badge, idx) => (
            <span key={idx} className="bg-white/80 backdrop-blur-md text-brand-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest border border-white shadow-sm">
              {badge}
            </span>
          ))}
        </div>

        {/* Floating GTPI Indicator - Premium Glassmorphism */}
        <div className="absolute bottom-6 right-6 z-20">
            <div className="bg-brand-black text-white px-5 py-3 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl group-hover:bg-brand-blue transition-colors duration-500">
                <span className="text-[8px] font-black uppercase tracking-[0.2em] block opacity-60 leading-none mb-1.5">Elite Index</span>
                <div className="flex items-baseline gap-1">
                   <span className="text-xs font-black text-brand-green">GTPI</span>
                   <span className="text-xl font-display font-black leading-none tracking-tighter">+{bull.stats.gtpi}</span>
                </div>
            </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-10 flex flex-col flex-grow">
        <div className="mb-10">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-3xl font-display font-black text-brand-black tracking-tighter uppercase leading-none group-hover:text-brand-blue transition-colors duration-500">
                  {bull.name}
              </h3>
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:text-brand-green transition-colors">
                <Zap size={16} fill="currentColor" className="opacity-20 group-hover:opacity-100 transition-opacity" />
              </div>
            </div>
            <p className="text-[10px] text-gray-400 font-mono tracking-[0.2em] uppercase font-bold flex items-center gap-2">
              <span className="w-4 h-px bg-slate-200"></span> {bull.naab}
            </p>
        </div>

        {/* Stats Grid - Redesigned as Premium Tiles */}
        <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="bg-slate-50/50 p-5 rounded-[1.75rem] border border-slate-100 group-hover:bg-brand-blue/[0.03] group-hover:border-brand-blue/10 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-brand-blue shadow-sm">
                      <Droplets size={14} />
                    </div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Milk PTA</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-2xl text-brand-black">{bull.stats.milk > 0 ? '+' : ''}{bull.stats.milk}</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">lbs</span>
                </div>
            </div>
            <div className="bg-slate-50/50 p-5 rounded-[1.75rem] border border-slate-100 group-hover:bg-brand-green/[0.03] group-hover:border-brand-green/10 transition-all duration-500">
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-7 h-7 bg-white rounded-lg flex items-center justify-center text-brand-green shadow-sm">
                      <Target size={14} />
                    </div>
                    <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Type PTAT</span>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="font-display font-black text-2xl text-brand-black">+{bull.stats.ptat.toFixed(2)}</span>
                  <span className="text-[10px] font-bold text-slate-300 uppercase">pts</span>
                </div>
            </div>
        </div>
        
        <p className="text-gray-500 text-[13px] mb-12 line-clamp-2 flex-grow leading-relaxed font-medium italic border-l-2 border-slate-100 pl-4">
            "{bull.description}"
        </p>

        {/* Dynamic CTA Button */}
        <Link 
          to={`/bull/${bull.id}`} 
          className="w-full relative overflow-hidden group/btn"
        >
          <div className="absolute inset-0 bg-brand-black group-hover:bg-brand-blue transition-colors duration-500 rounded-2xl"></div>
          <div className="relative py-5 px-8 flex items-center justify-between text-white">
            <span className="font-black uppercase tracking-[0.3em] text-[10px]">View Profile</span>
            <div className="flex items-center gap-1">
              <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
              <ArrowRight size={16} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all duration-300" />
            </div>
          </div>
        </Link>
      </div>

      {/* Subtle Border Glow on Card Hover */}
      <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/10 rounded-[2.5rem] transition-colors pointer-events-none duration-700"></div>
    </div>
  );
};

export default BullCard;