import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Droplets, 
  Target, 
  ChevronRight, 
  Zap, 
  Calendar, 
  Scale, 
  ShieldCheck,
  Award
} from 'lucide-react';
import { Bull } from '../types';

interface BullCardProps {
  bull: Bull;
}

const BullCard: React.FC<BullCardProps> = ({ bull }) => {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] hover:shadow-[0_40px_80px_-20px_rgba(0,113,188,0.15)] transition-all duration-700 overflow-hidden flex flex-col h-full border border-slate-100 group relative hover:-translate-y-2">
      {/* Visual Header / Image Container */}
      <div className="relative h-80 overflow-hidden bg-slate-50">
        {/* Subtle Decorative Background Elements */}
        <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
          <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-brand-blue/10 rounded-full blur-[60px]"></div>
          <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-brand-green/10 rounded-full blur-[60px]"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #0071bc05 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>

        <img 
          src={bull.image} 
          alt={bull.name} 
          className="w-full h-full object-cover relative z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-110" 
        />
        
        {/* Top Badges - Premium Overlay */}
        <div className="absolute top-6 left-6 flex flex-wrap gap-2 z-20">
          {bull.badges.slice(0, 1).map((badge, idx) => (
            <span key={idx} className="bg-brand-green text-white text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-lg shadow-brand-green/20">
              {badge}
            </span>
          ))}
          <span className="bg-white/90 backdrop-blur-md text-brand-black text-[9px] font-black px-4 py-2 rounded-full uppercase tracking-widest border border-white/50 shadow-sm">
            {bull.breed || "Holstein"}
          </span>
        </div>

        {/* GTPI Floating Indicator */}
        <div className="absolute top-6 right-6 z-20">
            <div className="bg-brand-black/80 backdrop-blur-md text-white px-4 py-2 rounded-2xl border border-white/10 flex items-center gap-2">
                <Award size={14} className="text-brand-green" />
                <span className="text-xs font-display font-black">+{bull.stats.gtpi}</span>
            </div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-3xl font-display font-black text-brand-black tracking-tighter uppercase leading-none group-hover:text-brand-blue transition-colors duration-500">
                  {bull.name}
              </h3>
              <div className="text-brand-blue/20 group-hover:text-brand-blue transition-colors duration-500">
                <Zap size={20} fill="currentColor" />
              </div>
            </div>
            <div className="flex items-center gap-2 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
              <ShieldCheck size={12} className="text-brand-blue" />
              <span>Reg: {bull.regNo.slice(-6)}</span>
              <span className="text-slate-200">|</span>
              <span>NAAB: {bull.naab}</span>
            </div>
        </div>

        {/* Premium Stats Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-colors group-hover:bg-brand-blue/5">
                <Calendar size={16} className="text-brand-blue mb-2" />
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Age</span>
                <span className="text-xs font-bold text-brand-black">{bull.age || "3.5 Years"}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-colors group-hover:bg-brand-green/5">
                <Scale size={16} className="text-brand-green mb-2" />
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Weight</span>
                <span className="text-xs font-bold text-brand-black">{bull.weight || "850 kg"}</span>
            </div>
            <div className="bg-slate-50 p-4 rounded-2xl flex flex-col items-center justify-center text-center transition-colors group-hover:bg-brand-blue/5">
                <Droplets size={16} className="text-brand-blue mb-2" />
                <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-1">Milk Yield</span>
                <span className="text-xs font-bold text-brand-black">+{bull.stats.milk} lb</span>
            </div>
        </div>
        
        <p className="text-gray-500 text-[13px] mb-8 line-clamp-2 flex-grow leading-relaxed font-medium">
            {bull.description}
        </p>

        {/* CTA Button */}
        <Link 
          to={`/bull/${bull.id}`} 
          className="group/btn block w-full bg-[#0f172a] hover:bg-brand-blue text-white rounded-2xl py-5 px-8 transition-all duration-300 shadow-lg shadow-slate-200 active:scale-95"
        >
          <div className="flex items-center justify-between">
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">View Profile</span>
            <div className="flex items-center gap-1">
              <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
              <ArrowRight size={16} className="opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-1 transition-all" />
            </div>
          </div>
        </Link>
      </div>

      {/* Decorative Glow */}
      <div className="absolute inset-0 border-2 border-brand-blue/0 group-hover:border-brand-blue/10 rounded-[2.5rem] transition-colors pointer-events-none duration-700"></div>
    </div>
  );
};

export default BullCard;