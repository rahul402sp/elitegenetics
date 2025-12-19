
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Share2, Activity, Droplets, Heart, ShieldCheck, 
  Award, Zap, Ruler, Beaker, TrendingUp, Info, 
  ClipboardCheck, ChevronRight, Facebook, Twitter, Linkedin,
  Activity as HealthIcon, Target, Scale, Gauge, 
  FileText, Download, UserPlus, CheckCircle2, ChevronDown,
  Binary, GitFork, ChevronLeft, ChevronUp
} from 'lucide-react';
import { useBulls } from '../context/BullContext';

const BullDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getBull } = useBulls();
  const bull = getBull(id || '');
  const [activeSection, setActiveSection] = useState('production');
  const [mobilePedigreeOpen, setMobilePedigreeOpen] = useState(false);

  // Handle scroll to section
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Adjusted for sticky nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  if (!bull) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center p-8 sm:p-12 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-400">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900 mb-4">Sire Not Found</h2>
          <p className="text-gray-500 mb-8 font-medium">The bull you are looking for might have been moved or removed.</p>
          <Link to="/portfolio" className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-brand-blue shadow-lg">
            <ArrowLeft size={18} /> Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  // Refined Ancestor Node Component
  const PedigreeNode = ({ 
    label, 
    name, 
    type, 
    acronym, 
    description 
  }: { 
    label: string, 
    name: string, 
    type: 'sire' | 'dam' | 'main', 
    acronym?: string, 
    description?: string
  }) => {
    const colorClass = type === 'main' ? 'bg-brand-black text-white border-white/10' : 
                       type === 'sire' ? 'bg-brand-blue/5 border-brand-blue/20' : 
                       'bg-brand-green/5 border-brand-green/20';
    
    const labelColor = type === 'main' ? 'text-brand-green' : 
                       type === 'sire' ? 'text-brand-blue' : 
                       'text-brand-green';

    return (
      <div className={`flex-grow relative z-10 p-4 sm:p-5 rounded-2xl sm:rounded-3xl border ${colorClass} transition-all duration-300 hover:shadow-xl group/node`}>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className={`text-[7px] sm:text-[8px] font-black uppercase tracking-[0.2em] ${labelColor}`}>{label}</span>
            {acronym && (
              <span className="text-[7px] bg-slate-200 text-slate-500 px-1.5 py-0.5 rounded font-black uppercase tracking-widest">{acronym}</span>
            )}
          </div>
          {description && (
            <div className="relative">
              <Info size={10} className="text-slate-300 cursor-help peer" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-48 sm:w-56 p-3 sm:p-4 bg-brand-black text-white text-[9px] font-bold rounded-2xl opacity-0 peer-hover:opacity-100 transition-all pointer-events-none shadow-2xl z-50 uppercase tracking-widest leading-relaxed border border-white/10">
                {description}
              </div>
            </div>
          )}
        </div>
        <p className={`font-display font-black leading-tight uppercase tracking-tight group-hover/node:translate-x-1 transition-transform ${type === 'main' ? 'text-lg sm:text-xl italic' : 'text-xs sm:text-sm text-brand-black'}`}>
          {name}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="bg-brand-black text-white pt-8 pb-20 sm:pt-12 sm:pb-32 lg:pb-48 relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[120%] bg-brand-blue rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[80%] bg-brand-green rounded-full blur-[100px]"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #ffffff10 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <nav className="flex items-center gap-2 text-white/40 font-black uppercase tracking-[0.2em] text-[8px] sm:text-[10px] mb-8 sm:mb-12">
            <Link to="/portfolio" className="hover:text-brand-green transition-colors">Sire Portfolio</Link>
            <ChevronRight size={10} />
            <span className="text-white">{bull.name}</span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 lg:items-center">
            <div className="flex-grow">
              <div className="flex flex-wrap gap-2 mb-6 sm:mb-8">
                {bull.badges.map((badge, idx) => (
                  <span key={idx} className="bg-white/10 border border-white/20 text-brand-green text-[8px] sm:text-[9px] font-black px-3 py-1.5 sm:px-4 sm:py-2 rounded-full uppercase tracking-widest backdrop-blur-md">
                    {badge}
                  </span>
                ))}
              </div>
              <h1 className="text-4xl sm:text-7xl lg:text-9xl font-display font-black tracking-tighter uppercase leading-[0.85] mb-4 italic break-words">
                {bull.name}
              </h1>
              <p className="text-lg sm:text-2xl text-white/60 font-display font-bold italic mb-8 sm:mb-10 tracking-tight">
                {bull.fullName || bull.name}
              </p>

              {/* Index Cards - Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-4xl">
                <div className="bg-brand-green/10 border border-brand-green/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-md group hover:bg-brand-green/20 transition-all shadow-xl shadow-brand-green/5">
                  <div className="text-[8px] sm:text-[10px] font-black text-brand-green uppercase tracking-widest mb-1">GTPI Score</div>
                  <div className="text-2xl sm:text-4xl font-display font-black text-white">+{bull.stats.gtpi}</div>
                </div>
                <div className="bg-brand-blue/10 border border-brand-blue/20 p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-md group hover:bg-brand-blue/20 transition-all shadow-xl shadow-brand-blue/5">
                  <div className="text-[8px] sm:text-[10px] font-black text-brand-blue uppercase tracking-widest mb-1">Net Merit $</div>
                  <div className="text-2xl sm:text-4xl font-display font-black text-white">+{bull.evaluations?.production.nm || bull.stats.nm}</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-md group hover:bg-white/10 transition-all">
                  <div className="text-[8px] sm:text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">DWP Index</div>
                  <div className="text-2xl sm:text-4xl font-display font-black text-white">+{bull.evaluations?.production.dwp || '984'}</div>
                </div>
                <div className="bg-white/5 border border-white/10 p-4 sm:p-6 rounded-2xl sm:rounded-3xl backdrop-blur-md group hover:bg-white/10 transition-all">
                  <div className="text-[8px] sm:text-[10px] font-black text-white/40 uppercase tracking-widest mb-1">A2A2 Status</div>
                  <div className="text-lg sm:text-2xl font-display font-black text-white uppercase italic leading-tight">{bull.betaCasein} / {bull.kappaCasein}</div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="relative group mx-auto max-w-[320px] lg:max-w-none">
                <div className="absolute -inset-4 bg-brand-green/20 rounded-[3rem] sm:rounded-[4rem] blur-2xl group-hover:bg-brand-green/30 transition-all"></div>
                <div className="relative aspect-square sm:aspect-[4/5] bg-slate-900 rounded-[2rem] sm:rounded-[3rem] border-4 border-white/10 overflow-hidden shadow-2xl">
                  <img src={bull.image} alt={bull.name} className="w-full h-full object-contain p-4 sm:p-8 group-hover:scale-110 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none"></div>
                  <button 
                    onClick={() => { if (navigator.share) navigator.share({ title: bull.name, url: window.location.href }); }}
                    className="absolute top-4 right-4 sm:top-6 sm:right-6 p-3 sm:p-4 bg-white/10 backdrop-blur-md text-white rounded-xl sm:rounded-2xl border border-white/20 hover:bg-brand-green transition-all"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation - Horizontally scrollable on mobile */}
      <nav className="sticky top-20 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 py-1 overflow-x-auto no-scrollbar">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-6 sm:gap-10 min-w-max">
            {[
              { id: 'production', label: 'Production', icon: Droplets },
              { id: 'health', label: 'Functional', icon: Heart },
              { id: 'pedigree', label: 'Lineage', icon: Binary },
              { id: 'linear', label: 'Linear', icon: Ruler },
              { id: 'pricing', label: 'Pricing', icon: TrendingUp },
            ].map((nav) => (
              <button
                key={nav.id}
                onClick={() => scrollTo(nav.id)}
                className={`py-3 px-1 flex items-center gap-2 text-[8px] sm:text-[10px] font-black uppercase tracking-widest transition-all border-b-2 whitespace-nowrap ${
                  activeSection === nav.id ? 'border-brand-blue text-brand-blue' : 'border-transparent text-slate-400 hover:text-slate-900'
                }`}
              >
                <nav.icon size={12} className="hidden sm:block" /> {nav.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content Dashboard */}
      <div className="container mx-auto px-4 sm:px-6 py-12 space-y-12 sm:space-y-24">
        
        {/* IDENTIFICATION BLOCK */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] shadow-sm border border-slate-100">
              <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-6 sm:mb-8 flex items-center gap-2">
                <ClipboardCheck size={14} className="text-brand-blue" /> Sire Information
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { label: 'NAAB Code', val: bull.naab },
                  { label: 'Reg.no.', val: bull.regNo },
                  { label: 'D.O.B.', val: bull.dob },
                  { label: 'aAa Index', val: bull.aaa || 'N/A' },
                  { label: 'Beta Casein', val: bull.betaCasein },
                  { label: 'Kappa Casein', val: bull.kappaCasein },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-3 sm:py-4 border-b border-slate-50 last:border-0 group">
                    <span className="text-[8px] sm:text-[10px] font-bold text-slate-400 group-hover:text-brand-blue transition-colors uppercase tracking-widest">{item.label}</span>
                    <span className="font-mono text-xs sm:text-base font-black text-brand-black">{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-brand-black p-6 sm:p-10 rounded-[2rem] sm:rounded-[2.5rem] text-white relative group overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:rotate-45 transition-transform duration-700">
                <Binary size={100} />
              </div>
              <h3 className="text-[10px] font-black text-brand-green uppercase tracking-[0.3em] mb-4 sm:mb-6 relative z-10">Genetic Codes</h3>
              <p className="font-mono text-[10px] sm:text-xs font-bold text-white tracking-[0.1em] leading-relaxed relative z-10 uppercase italic">
                {bull.geneticCodes || 'No Significant Codes'}
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 bg-white p-6 sm:p-16 rounded-[2rem] sm:rounded-[3rem] shadow-sm border border-slate-100 relative overflow-hidden group">
            <div className="absolute bottom-0 right-0 p-10 text-slate-50 opacity-50 group-hover:text-brand-blue group-hover:opacity-10 transition-all">
                <ShieldCheck size={160} />
            </div>
            <div className="flex items-center gap-4 mb-6 sm:mb-10 relative z-10">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-blue/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-blue">
                <Info size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl font-display font-black text-brand-black uppercase italic tracking-tight">Breeder Insight</h2>
                <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Strategic Genomic Advantage</p>
              </div>
            </div>
            <p className="text-sm sm:text-2xl text-slate-600 font-medium leading-relaxed italic border-l-4 border-brand-green pl-6 sm:pl-10 relative z-10">
              "{bull.description}"
            </p>
          </div>
        </section>

        {/* PRODUCTION SECTION */}
        <section id="production" className="bg-white rounded-[2rem] sm:rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden">
          <div className="bg-brand-blue/5 p-6 sm:p-10 flex flex-col sm:flex-row justify-between items-center border-b border-slate-100 gap-6">
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue rounded-xl sm:rounded-3xl flex items-center justify-center text-white shadow-xl shadow-brand-blue/20 flex-shrink-0">
                <Droplets size={24} />
              </div>
              <div>
                <h2 className="text-lg sm:text-2xl font-display font-black text-brand-black uppercase italic tracking-tight leading-tight">Production Evaluation <span className="text-brand-blue sm:block md:inline sm:text-xs md:text-2xl">(08/2025)</span></h2>
                <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Dtrs: {bull.evaluations?.production.dtrs} / Herds: {bull.evaluations?.production.herds}</p>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-2 rounded-xl border border-slate-100 shadow-sm w-full sm:w-auto justify-center">
              <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest">Rel %</span>
              <span className="text-xl sm:text-3xl font-display font-black text-brand-black">{bull.evaluations?.production.reliability}%</span>
            </div>
          </div>

          <div className="p-6 sm:p-20">
            {/* Primary PTAM Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-8 mb-12 sm:mb-20">
              {[
                { label: 'PTAM (Milk)', val: `+${bull.evaluations?.production.milk}`, unit: 'Lbs', color: 'text-brand-black' },
                { label: 'Fat %', val: `+${bull.evaluations?.production.fatPct}%`, unit: 'Component', color: 'text-brand-green' },
                { label: 'Fat (Lbs)', val: `+${bull.evaluations?.production.fat}`, unit: 'Yield', color: 'text-brand-black' },
                { label: 'Prot %', val: `+${bull.evaluations?.production.protPct}%`, unit: 'Component', color: 'text-brand-green' },
                { label: 'Prot (Lbs)', val: `+${bull.evaluations?.production.prot}`, unit: 'Yield', color: 'text-brand-black' },
              ].map((p, i) => (
                <div key={i} className={`text-center group p-4 sm:p-6 bg-slate-50/50 rounded-2xl sm:rounded-[2.5rem] border border-transparent hover:border-brand-blue hover:bg-white transition-all shadow-sm ${i === 4 && 'col-span-2 sm:col-span-1'}`}>
                  <span className="text-[8px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-2 sm:mb-4 group-hover:text-brand-blue">{p.label}</span>
                  <span className={`text-xl sm:text-4xl font-display font-black block ${p.color}`}>{p.val}</span>
                  <span className="text-[8px] font-black text-slate-300 uppercase mt-2 block tracking-widest">{p.unit}</span>
                </div>
              ))}
            </div>

            {/* Economic Index Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {[
                { label: 'Net Merit $', val: `+${bull.evaluations?.production.nm}`, info: 'Aggregate Economic Value', color: 'text-brand-blue' },
                { label: 'DWP$ Score', val: `+${bull.evaluations?.production.dwp}`, info: 'Dairy Wellness Profit', color: 'text-brand-black' },
                { label: 'Cheese Merit CM$', val: `+${bull.evaluations?.production.cm}`, info: 'Optimal for Cheese Yield', color: 'text-brand-black' },
                { label: 'Fluid Merit FM$', val: `+${bull.evaluations?.production.fm}`, info: 'Optimized for Liquid Milk', color: 'text-brand-black' },
                { label: 'Grazing Merit GM$', val: `+${bull.evaluations?.production.gm}`, info: 'Low Input Efficiency', color: 'text-brand-black' },
                { label: 'Combined F+P CFP', val: `+${bull.evaluations?.production.cfp}`, info: 'Total Component Yield', color: 'text-brand-green' },
              ].map((m, i) => (
                <div key={i} className="bg-slate-50/30 p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:bg-white hover:shadow-xl transition-all group">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[8px] sm:text-[10px] font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-blue">{m.label}</span>
                    <Info size={12} className="text-slate-200" />
                  </div>
                  <div className={`text-xl sm:text-2xl font-display font-black ${m.color} mb-1`}>{m.val}</div>
                  <p className="text-[8px] sm:text-[9px] text-slate-400 font-bold italic tracking-tight uppercase">{m.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HEALTH & FUNCTIONAL SECTION */}
        <section id="health" className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-10">
          <div className="bg-white rounded-[2rem] sm:rounded-[3.5rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-brand-green/5 p-6 sm:p-10 flex items-center gap-4 sm:gap-6 border-b border-slate-100">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-green rounded-xl sm:rounded-2xl flex items-center justify-center text-white">
                 <HealthIcon size={24} />
               </div>
               <div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-brand-black uppercase italic tracking-tight">Functional Traits</h3>
                  <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Genetic Health Indicators</p>
               </div>
            </div>
            <div className="p-6 sm:p-10 grid grid-cols-2 gap-x-4 sm:gap-x-8 gap-y-2 sm:gap-y-4">
               {[
                 { label: 'FI Index', val: `+${bull.evaluations?.health.fi}` },
                 { label: 'Preg Rate DPR', val: bull.evaluations?.health.dpr },
                 { label: 'HCR Rate', val: `+${bull.evaluations?.health.hcr}` },
                 { label: 'CCR Rate', val: `+${bull.evaluations?.health.ccr}` },
                 { label: 'Mastitis', val: `+${bull.evaluations?.health.mastitis}` },
                 { label: 'SCS Score', val: bull.evaluations?.health.scs },
                 { label: 'Prod Life PL', val: `+${bull.evaluations?.health.pl}` },
                 { label: 'LIV Rate', val: `+${bull.evaluations?.health.liv}`, highlight: true },
                 { label: 'Feed Eff', val: bull.evaluations?.health.fe },
                 { label: 'RFI Intake', val: bull.evaluations?.health.rfi },
                 { label: 'Feed Saved', val: `+${bull.evaluations?.health.feedSaved}` },
                 { label: 'Milk Speed', val: bull.evaluations?.health.milkingSpeed },
               ].map((h, i) => (
                 <div key={i} className={`flex justify-between items-center py-2 sm:py-4 border-b border-slate-50 group hover:px-1 transition-all ${h.highlight ? 'bg-brand-green/5 rounded-lg border-b-transparent px-2' : ''}`}>
                    <span className="text-[7px] sm:text-[9px] font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-green">{h.label}</span>
                    <span className="text-sm sm:text-lg font-display font-black text-brand-black">{h.val}</span>
                 </div>
               ))}
            </div>
          </div>

          <div className="bg-brand-black rounded-[2rem] sm:rounded-[3.5rem] text-white overflow-hidden shadow-2xl relative">
            <div className="bg-white/5 p-6 sm:p-10 flex items-center gap-4 sm:gap-6 border-b border-white/5">
               <div className="w-12 h-12 sm:w-14 sm:h-14 bg-brand-green rounded-xl sm:rounded-2xl flex items-center justify-center text-white">
                 <Target size={24} />
               </div>
               <div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-white uppercase italic tracking-tight">Calving Evaluation</h3>
                  <p className="text-[8px] sm:text-[10px] text-white/40 font-bold uppercase tracking-widest mt-1">Birthing Performance</p>
               </div>
            </div>
            <div className="p-8 sm:p-20 space-y-12 sm:space-y-16">
               <div className="grid grid-cols-2 gap-8 sm:gap-12">
                  <div className="space-y-8 sm:space-y-10">
                     <div className="group">
                        <span className="text-[8px] sm:text-[10px] font-black text-brand-green uppercase tracking-[0.2em] block mb-2 sm:mb-3">Sire CE</span>
                        <div className="text-4xl sm:text-6xl font-display font-black text-white">{bull.evaluations?.calving.sce}%</div>
                     </div>
                     <div>
                        <span className="text-[8px] sm:text-[10px] font-black text-brand-green uppercase tracking-[0.2em] block mb-2 sm:mb-3">Sire Still Birth</span>
                        <div className="text-4xl sm:text-6xl font-display font-black text-white">{bull.evaluations?.calving.ssb}%</div>
                     </div>
                  </div>
                  <div className="space-y-8 sm:space-y-10">
                     <div>
                        <span className="text-[8px] sm:text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] block mb-2 sm:mb-3">Daughter CE</span>
                        <div className="text-4xl sm:text-6xl font-display font-black text-white">{bull.evaluations?.calving.dce}%</div>
                     </div>
                     <div>
                        <span className="text-[8px] sm:text-[10px] font-black text-brand-blue uppercase tracking-[0.2em] block mb-2 sm:mb-3">Daughter SB</span>
                        <div className="text-4xl sm:text-6xl font-display font-black text-white">{bull.evaluations?.calving.dsb}%</div>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* 🧬 FULL GENETIC LINEAGE */}
        <section id="pedigree" className="bg-white p-6 sm:p-20 rounded-[2rem] sm:rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-20 opacity-5 -z-10 rotate-12 pointer-events-none">
             <GitFork size={400} />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 sm:mb-16 gap-6 sm:gap-8 relative z-10">
            <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-black rounded-xl sm:rounded-[1.5rem] flex items-center justify-center text-brand-green shadow-xl">
                <GitFork size={24} />
              </div>
              <div>
                <h2 className="text-xl sm:text-3xl font-display font-black text-brand-black uppercase italic tracking-tight leading-tight">Full Genetic <span className="text-brand-blue">Lineage</span></h2>
                <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Multi-Generational Ancestry</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 sm:gap-6 bg-slate-50 px-6 py-3 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl border border-slate-100 shadow-inner w-full sm:w-auto justify-center">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-blue"></div>
                <span className="text-[8px] font-black uppercase text-slate-500">Sire Line</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-brand-green"></div>
                <span className="text-[8px] font-black uppercase text-slate-500">Dam Line</span>
              </div>
            </div>
          </div>

          {/* PEDIGREE TREE VIEW - DESKTOP HORIZONTAL */}
          <div className="hidden lg:block relative min-h-[600px] select-none">
            {/* Horizontal Branch Connectors */}
            <div className="absolute inset-0 pointer-events-none z-0">
               <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M220 300 H280 M280 150 V450 M280 150 H340 M280 450 H340" stroke="#e2e8f0" strokeWidth="2" />
                  <path d="M540 450 H600 M600 375 V525 M600 375 H660 M600 525 H660" stroke="#8cc63f" strokeWidth="2" strokeOpacity="0.4" />
                  <path d="M860 525 H890 M890 490 V560 M890 490 H920 M890 560 H920" stroke="#8cc63f" strokeWidth="2" strokeOpacity="0.2" />
               </svg>
            </div>

            <div className="grid grid-cols-4 gap-12 items-center h-full">
               <div className="col-span-1 flex items-center justify-center">
                  <div className="w-full">
                    <PedigreeNode label="Sire Asset" name={bull.name} type="main" description="Current evaluation subject." />
                  </div>
               </div>
               <div className="col-span-1 flex flex-col justify-around h-full py-16">
                  <PedigreeNode label="Paternal Sire" name={bull.pedigree.sire} type="sire" />
                  <PedigreeNode label="Maternal Dam" name={bull.pedigree.dam} type="dam" />
               </div>
               <div className="col-span-1 flex flex-col justify-end h-full pb-8">
                  <div className="space-y-[110px]">
                    <PedigreeNode label="Grand Sire" name={bull.pedigree.mgs} acronym="MGS" type="dam" />
                    <PedigreeNode label="Grand Dam" name={bull.extendedPedigree?.mgd || 'N/A'} acronym="MGD" type="dam" />
                  </div>
               </div>
               <div className="col-span-1 flex flex-col justify-end h-full pb-0">
                  <div className="space-y-[35px]">
                    <PedigreeNode label="Sire of Dam" name={bull.extendedPedigree?.mggs || 'N/A'} acronym="MGGS" type="dam" />
                    <PedigreeNode label="Dam of Dam" name={bull.extendedPedigree?.mggd || 'N/A'} acronym="MGGD" type="dam" />
                  </div>
               </div>
            </div>
          </div>

          {/* PEDIGREE VIEW - MOBILE ACCORDION */}
          <div className="lg:hidden space-y-6">
             <div className="mb-4">
                <PedigreeNode label="Primary Sire" name={bull.name} type="main" />
             </div>
             <div className="space-y-3">
                <span className="text-[8px] font-black uppercase text-slate-400 tracking-widest px-1">Direct Parents</span>
                <div className="grid grid-cols-1 gap-3">
                  <PedigreeNode label="Sire" name={bull.pedigree.sire} type="sire" />
                  <PedigreeNode label="Dam" name={bull.pedigree.dam} type="dam" />
                </div>
             </div>
             <div className="pt-4">
                <button 
                  onClick={() => setMobilePedigreeOpen(!mobilePedigreeOpen)}
                  className="w-full flex items-center justify-between p-4 bg-slate-50 border border-slate-100 rounded-xl group transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Binary size={16} className="text-brand-blue" />
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-600">Extended Ancestry</span>
                  </div>
                  {mobilePedigreeOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                </button>
                {mobilePedigreeOpen && (
                  <div className="mt-4 space-y-4 animate-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-1 gap-3">
                       <PedigreeNode label="MGS" name={bull.pedigree.mgs} type="dam" />
                       <PedigreeNode label="MGD" name={bull.extendedPedigree?.mgd || 'N/A'} type="dam" />
                       <PedigreeNode label="MGGS" name={bull.extendedPedigree?.mggs || 'N/A'} type="dam" />
                       <PedigreeNode label="MGGD" name={bull.extendedPedigree?.mggd || 'N/A'} type="dam" />
                    </div>
                  </div>
                )}
             </div>
          </div>
        </section>

        {/* LINEAR TRAITS SECTION */}
        {bull.linearTraitsFull && (
          <section id="linear" className="bg-white rounded-[2rem] sm:rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden">
            <div className="bg-slate-50 p-6 sm:p-14 border-b border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-6">
               <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue/10 rounded-xl sm:rounded-3xl flex items-center justify-center text-brand-blue flex-shrink-0">
                    <Ruler size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg sm:text-3xl font-display font-black text-brand-black uppercase italic tracking-tight leading-tight">Linear Profile (Rel: {bull.evaluations?.type.reliability}%)</h2>
                    <p className="text-[8px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">Conformation Evaluation</p>
                  </div>
               </div>
               <div className="bg-brand-black text-white px-6 py-2 sm:px-8 sm:py-3 rounded-xl sm:rounded-2xl font-display font-black text-lg sm:text-xl italic tracking-tighter shadow-lg w-full sm:w-auto text-center">
                  PTAT +{bull.evaluations?.type.ptat.toFixed(2)}
               </div>
            </div>

            <div className="p-6 sm:p-20 space-y-6 sm:space-y-8">
              {/* Chart Scale Header - Desktop only */}
              <div className="hidden md:grid grid-cols-12 gap-4 items-center mb-8 border-b border-slate-100 pb-4">
                <div className="col-span-3"></div>
                <div className="col-span-1 text-right text-[10px] font-black text-slate-300 uppercase italic">Min -2</div>
                <div className="col-span-6 flex justify-between px-2 text-[11px] font-black text-slate-400">
                  <span>-1.0</span>
                  <span className="text-brand-blue">0.0</span>
                  <span>+1.0</span>
                </div>
                <div className="col-span-1 text-left text-[10px] font-black text-slate-300 uppercase italic">Max +2</div>
                <div className="col-span-1"></div>
              </div>

              {bull.linearTraitsFull.map((lt, idx) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-4 items-center group py-2 border-b border-slate-50 last:border-0">
                  <div className="md:col-span-3 flex justify-between md:block">
                    <span className="text-[9px] sm:text-[11px] font-black uppercase tracking-widest text-slate-600 group-hover:text-brand-blue transition-colors">{lt.trait}</span>
                    <span className="md:hidden text-[9px] font-black font-display text-brand-blue">{lt.value > 0 ? '+' : ''}{lt.value.toFixed(2)}</span>
                  </div>
                  <div className="hidden md:block md:col-span-1 text-right">
                    <span className="text-[10px] font-bold text-slate-400 italic">{lt.labelLow}</span>
                  </div>
                  <div className="col-span-1 md:col-span-6 relative h-5 sm:h-6 bg-slate-100/50 rounded-full flex items-center overflow-hidden border border-slate-100">
                    <div className="absolute left-1/2 w-[2px] h-full bg-slate-300/30 -translate-x-1/2 z-10"></div>
                    <div 
                      className={`absolute h-full transition-all duration-1000 ${lt.value > 0 ? 'bg-brand-green/20' : 'bg-brand-blue/20'}`}
                      style={{ left: lt.value > 0 ? '50%' : `${50 + (lt.value * 25)}%`, width: `${Math.abs(lt.value) * 25}%` }}
                    ></div>
                    <div 
                      className={`absolute h-3 w-3 sm:h-4 sm:w-4 rounded-full shadow-lg z-20 transition-all duration-1000 border-2 border-white ${lt.value > 0 ? 'bg-brand-green' : 'bg-brand-blue'}`}
                      style={{ left: `${50 + (lt.value * 25)}%`, transform: 'translateX(-50%)' }}
                    ></div>
                  </div>
                  <div className="hidden md:block md:col-span-1 text-left">
                    <span className="text-[10px] font-bold text-slate-400 italic">{lt.labelHigh}</span>
                  </div>
                  <div className="hidden md:block md:col-span-1 text-right">
                    <span className={`text-xs font-black font-display ${lt.value > 0 ? 'text-brand-green' : 'text-brand-blue'}`}>
                      {lt.value > 0 ? '+' : ''}{lt.value.toFixed(2)}
                    </span>
                  </div>
                  {/* Mobile labels */}
                  <div className="flex justify-between md:hidden px-1">
                    <span className="text-[7px] font-black uppercase text-slate-300 italic">{lt.labelLow}</span>
                    <span className="text-[7px] font-black uppercase text-slate-300 italic">{lt.labelHigh}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Composite Stats Footer */}
            <div className="bg-brand-black p-6 sm:p-14 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
               {[
                 { label: 'UDC Comp', val: `+${bull.evaluations?.type.udc.toFixed(2)}`, color: 'text-brand-green' },
                 { label: 'FLC Comp', val: bull.evaluations?.type.flc.toFixed(2), color: 'text-brand-blue' },
                 { label: 'BWC Comp', val: bull.evaluations?.type.bwc.toFixed(2), color: 'text-white' },
                 { label: 'Dtrs/Herds', val: `${bull.evaluations?.production.dtrs}/${bull.evaluations?.production.herds}`, color: 'text-white/40' },
               ].map((st, i) => (
                 <div key={i} className="text-center">
                    <span className="text-[7px] sm:text-[10px] font-black text-white/30 uppercase tracking-[0.2em] block mb-2">{st.label}</span>
                    <span className={`text-lg sm:text-3xl font-display font-black ${st.color}`}>{st.val}</span>
                 </div>
               ))}
            </div>
          </section>
        )}

        {/* PRICING & PROCUREMENT */}
        <section id="pricing" className="bg-white rounded-[2rem] sm:rounded-[4rem] shadow-sm border border-slate-100 overflow-hidden">
           <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Pricing Cards */}
              <div className="p-6 sm:p-24 space-y-12 sm:space-y-16">
                 <div>
                   <h2 className="text-2xl sm:text-4xl font-display font-black text-brand-black uppercase italic tracking-tight mb-4 sm:mb-6 leading-tight">Investment <span className="text-brand-green">Value</span></h2>
                   <p className="text-sm sm:text-xl text-slate-500 font-medium leading-relaxed italic border-l-2 border-brand-green pl-6">
                     Secure elite genetics for your progressive breeding program.
                   </p>
                 </div>
                 
                 <div className="space-y-4 sm:space-y-6">
                    <div className="flex justify-between items-center p-6 sm:p-10 bg-slate-50 rounded-2xl sm:rounded-[3rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
                       <div className="flex items-center gap-4 sm:gap-6">
                          <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-xl sm:rounded-3xl flex items-center justify-center text-slate-400 shadow-sm group-hover:bg-brand-blue/10 transition-colors">
                             <CheckCircle2 size={20} />
                          </div>
                          <div>
                             <span className="text-[8px] sm:text-[11px] font-black text-slate-400 uppercase tracking-widest group-hover:text-brand-blue transition-colors">Conventional</span>
                             <p className="hidden sm:block text-xs font-bold text-slate-600">Standard Straws</p>
                          </div>
                       </div>
                       <div className="text-xl sm:text-4xl font-display font-black text-brand-black">₹{bull.pricing.conventional.toLocaleString()}</div>
                    </div>

                    {bull.pricing.sexed && (
                      <div className="flex justify-between items-center p-6 sm:p-10 bg-brand-green text-white rounded-2xl sm:rounded-[3rem] shadow-2xl shadow-brand-green/20 hover:scale-[1.03] transition-all cursor-pointer">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/20 rounded-xl sm:rounded-3xl flex items-center justify-center text-white">
                                <Zap size={20} />
                            </div>
                            <div>
                                <span className="text-[8px] sm:text-[11px] font-black text-white/70 uppercase tracking-widest">Sexed Ultra™</span>
                                <p className="hidden sm:block text-xs font-bold text-white">90%+ Female Accuracy</p>
                            </div>
                        </div>
                        <div className="text-xl sm:text-4xl font-display font-black">₹{bull.pricing.sexed.toLocaleString()}</div>
                      </div>
                    )}
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/contact" className="flex-grow bg-brand-black text-white px-8 py-5 sm:py-6 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] sm:text-[12px] text-center shadow-xl hover:bg-brand-blue transition-all active:scale-95">
                       Authorize Order
                    </Link>
                    <button className="px-8 py-5 sm:py-6 bg-slate-50 text-slate-400 border border-slate-200 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] sm:text-[12px] hover:bg-white hover:text-slate-900 transition-all flex items-center justify-center gap-3">
                       <Download size={16} /> Official Proof
                    </button>
                 </div>
              </div>

              {/* Policy Sidebar */}
              <div className="bg-slate-900 p-8 sm:p-24 text-white relative">
                 <div className="absolute top-0 right-0 p-16 opacity-5 -z-10 rotate-12">
                    <Scale size={320} />
                 </div>
                 <h3 className="text-xl sm:text-2xl font-display font-black uppercase italic tracking-tight mb-12 sm:mb-16 flex items-center gap-4 sm:gap-6">
                    <div className="w-1.5 h-8 sm:h-10 bg-brand-green rounded-full shadow-[0_0_15px_rgba(140,198,63,0.5)]"></div> Procurement Policy
                 </h3>
                 <div className="space-y-8 sm:space-y-10">
                    {[
                      { icon: ShieldCheck, title: "Laboratory Verified", desc: "Sourced directly from AITOTAL certified global facilities with full transparency." },
                      { icon: Target, title: "Compliance Standards", desc: "Full adherence to NDDB & INAPH tagging. Farmer ID verification required for all orders." },
                      { icon: Scale, title: "Thermal Integrity", desc: "Maintained at -196°C pharmaceutical-grade cold chain through entire logistics journey." },
                      { icon: UserPlus, title: "Genetic Consulting", desc: "Access to professional mating programs and genetic roadmap strategy services." },
                    ].map((term, i) => (
                      <div key={i} className="flex gap-4 sm:gap-8 items-start group">
                         <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white/5 rounded-xl sm:rounded-3xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all flex-shrink-0">
                            <term.icon size={20} />
                         </div>
                         <div>
                            <h4 className="text-[11px] sm:text-[14px] font-black uppercase tracking-widest text-white group-hover:text-brand-green transition-colors mb-1 sm:mb-2">{term.title}</h4>
                            <p className="text-[10px] sm:text-sm text-white/40 font-medium leading-relaxed max-w-sm">{term.desc}</p>
                         </div>
                      </div>
                    ))}
                 </div>
              </div>
           </div>
        </section>

      </div>

      {/* FOOTER */}
      <footer className="bg-slate-50 py-16 sm:py-24 px-4 border-t border-slate-100">
         <div className="container mx-auto max-w-4xl text-center">
            <div className="w-12 h-1 bg-brand-green/20 mx-auto mb-8 rounded-full"></div>
            <p className="text-[8px] sm:text-[11px] text-slate-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] leading-loose italic px-4">
               * Genetic data based on August 2025 CDCB cycle. Evaluations subject to change. Elite Genetics LTD guarantees physical integrity of semen straws but not specific mating outcomes.
            </p>
         </div>
      </footer>
    </div>
  );
};

export default BullDetail;
