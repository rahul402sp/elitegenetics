import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Share2, Activity, Droplets, Heart, ShieldCheck, 
  Award, Zap, Ruler, Beaker, TrendingUp, Info, LayoutList, 
  ClipboardCheck, ChevronRight, BarChart4, Facebook, Twitter, Linkedin,
  FileText, Activity as HealthIcon, Target
} from 'lucide-react';
import { useBulls } from '../context/BullContext';

const BullDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { getBull } = useBulls();
  const bull = getBull(id || '');

  if (!bull) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center p-8 sm:p-12 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-md w-full">
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-400">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900 mb-4">Sire Not Found</h2>
          <p className="text-gray-500 mb-8 font-medium">The bull you are looking for might have been moved or removed from our inventory.</p>
          <Link to="/portfolio" className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-3 rounded-xl font-bold transition-all hover:bg-brand-blue shadow-lg">
            <ArrowLeft size={18} /> Back to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const shareText = `Check out ${bull.name} at Elite Genetics - GTPI +${bull.stats.gtpi}!`;

  const socialLinks = [
    { 
      icon: Facebook, 
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`,
      label: 'Facebook'
    },
    { 
      icon: Twitter, 
      url: `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareText)}`,
      label: 'X'
    },
    { 
      icon: Linkedin, 
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`,
      label: 'LinkedIn'
    }
  ];

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Elite Genetics - ${bull.name}`,
          text: shareText,
          url: shareUrl,
        });
      } catch (err) {
        console.log('Share failed', err);
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard');
    }
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen pb-24 sm:pb-40">
      {/* Dynamic Header */}
      <div className="bg-brand-black text-white pt-10 pb-24 sm:pb-32 relative overflow-hidden px-4">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[140%] bg-gradient-to-br from-white/20 via-brand-green/20 to-transparent rounded-full blur-[100px] sm:blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <nav className="flex items-center gap-2 text-white/60 font-bold uppercase tracking-[0.2em] text-[9px] sm:text-[10px] mb-8">
            <Link to="/portfolio" className="hover:text-white transition-colors">Sire Portfolio</Link>
            <ChevronRight size={10} />
            <span className="text-brand-green">{bull.name} Profile</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div className="w-full lg:w-auto">
              <div className="flex flex-wrap gap-2 mb-6">
                 {bull.badges.map((badge, idx) => (
                    <span key={idx} className="bg-white/10 border border-white/20 text-brand-green text-[8px] sm:text-[9px] font-black px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">{badge}</span>
                 ))}
                 <span className="bg-white/10 border border-white/20 text-white text-[8px] sm:text-[9px] font-black px-3 sm:px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">Official Cdcb Evaluation</span>
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black mb-2 tracking-tighter uppercase leading-none break-words">
                {bull.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-3xl text-white/80 font-display font-bold tracking-tight opacity-90 italic">
                {bull.fullName || bull.name}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto items-stretch sm:items-center">
                <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-[11px] text-center transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                    Order straws
                </Link>
                
                <div className="flex gap-2 justify-center">
                    <button 
                      onClick={handleNativeShare}
                      className="flex-grow sm:flex-none bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-4 sm:py-5 rounded-2xl text-[10px] sm:text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                    >
                        <Share2 size={16} /> <span className="hidden sm:inline">Share</span>
                    </button>
                    
                    {socialLinks.map((social) => (
                      <a 
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 border border-white/10 p-4 sm:p-5 rounded-2xl transition-all flex items-center justify-center text-white"
                        aria-label={`Share on ${social.label}`}
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10 sm:-mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(57,130,217,0.1)] border border-slate-100 overflow-hidden flex flex-col">
              <div className="bg-slate-50 relative aspect-video sm:aspect-[4/3] flex items-center justify-center p-4 sm:p-6 border-b border-slate-50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-white pointer-events-none opacity-50"></div>
                <img 
                  src={bull.image} 
                  alt={bull.name} 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
                    <div className="bg-brand-black text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl backdrop-blur-md shadow-xl border border-white/20">
                      <div className="text-[7px] sm:text-[8px] uppercase font-black tracking-widest leading-none mb-1 opacity-60">GTPI Rank</div>
                      <div className="text-lg sm:text-xl font-display font-black leading-none tracking-tighter">+{bull.stats.gtpi}</div>
                    </div>
                </div>
              </div>

              <div className="p-6 sm:p-10 space-y-8 sm:space-y-10">
                <div className="grid grid-cols-1 gap-3 sm:gap-4">
                  <h3 className="font-black text-gray-900 uppercase text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] flex items-center gap-2 mb-2">
                    <ClipboardCheck size={14} className="text-brand-green" /> Sire Identification
                  </h3>
                  {[
                    { label: 'NAAB Code', val: bull.naab, mono: true },
                    { label: 'Registration', val: bull.regNo, mono: true },
                    { label: 'Date of Birth', val: bull.dob, mono: true },
                    { label: 'Beta Casein', val: bull.betaCasein, color: 'text-brand-black', mono: true },
                    { label: 'Kappa Casein', val: bull.kappaCasein, color: 'text-brand-green', mono: true },
                    { label: 'aAa Code', val: bull.aaa || 'N/A', mono: true },
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 bg-slate-50/50 rounded-xl sm:rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all group">
                      <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-black tracking-widest group-hover:text-gray-600 transition-colors">{item.label}</span>
                      <span className={`${item.mono ? 'font-mono' : ''} font-bold text-[11px] sm:text-xs ${item.color || 'text-gray-900'} break-all text-right ml-2`}>{item.val}</span>
                    </div>
                  ))}
                  {bull.geneticCodes && (
                    <div className="mt-2 p-4 sm:p-5 bg-brand-black rounded-xl sm:rounded-2xl border border-white/10 shadow-xl">
                      <span className="text-[8px] sm:text-[9px] text-white/50 uppercase font-black tracking-widest block mb-2">Genetic Codes</span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-brand-green font-bold tracking-tight break-words">{bull.geneticCodes}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-black text-gray-900 uppercase text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.25em] flex items-center gap-2 mb-6 sm:mb-8">
                    <Zap size={14} className="text-brand-green" /> High-Performance Pedigree
                  </h3>
                  <div className="relative pl-6 border-l-2 border-brand-green/20 space-y-6 sm:space-y-8">
                    {[
                      { label: 'Sire', val: bull.extendedPedigree?.sire || bull.pedigree.sire },
                      { label: 'Dam', val: bull.extendedPedigree?.dam || bull.pedigree.dam },
                      { label: 'MGS', val: bull.extendedPedigree?.mgs || bull.pedigree.mgs },
                      { label: 'MGD', val: bull.extendedPedigree?.mgd || 'N/A' },
                      { label: 'MGGS', val: bull.extendedPedigree?.mggs || 'N/A' },
                      { label: 'MGGD', val: bull.extendedPedigree?.mggd || 'N/A' },
                    ].map((item, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[31px] top-1 w-2 h-2 rounded-full bg-brand-green shadow-[0_0_8px_rgba(140,198,63,0.4)]"></div>
                        <span className="text-[8px] sm:text-[9px] text-gray-400 uppercase font-black tracking-widest block mb-1">{item.label}</span>
                        <span className="font-bold text-gray-900 text-[13px] sm:text-sm leading-tight block break-words">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-black rounded-[2rem] sm:rounded-[2.5rem] p-8 sm:p-10 text-white shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="flex items-center gap-4 mb-8 sm:mb-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-green">
                    <TrendingUp size={20} className="sm:size-24" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-display font-black uppercase tracking-tight italic">Market Value Index</h4>
                </div>
                <div className="space-y-6 mb-8 sm:mb-10">
                    <div className="flex justify-between items-center pb-4 sm:pb-5 border-b border-white/10">
                        <span className="text-[9px] sm:text-[10px] font-black text-white/50 uppercase tracking-[0.15em] sm:tracking-[0.2em]">Conventional</span>
                        <span className="text-2xl sm:text-3xl font-display font-black text-white tracking-tighter">₹{bull.pricing.conventional.toLocaleString()}</span>
                    </div>
                    {bull.pricing.sexed && (
                        <div className="flex justify-between items-center pb-4 sm:pb-5 border-b border-white/10">
                            <span className="text-[9px] sm:text-[10px] font-black text-white/50 uppercase tracking-[0.15em] sm:tracking-[0.2em]">Sexed Straws</span>
                            <span className="text-2xl sm:text-3xl font-display font-black text-brand-green tracking-tighter">₹{bull.pricing.sexed.toLocaleString()}</span>
                        </div>
                    )}
                </div>
                <Link to="/contact" className="block w-full bg-white text-brand-black text-center py-4 sm:py-5 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] hover:bg-brand-green hover:text-white transition-all active:scale-95 shadow-2xl">
                    Check Inventory Availability
                </Link>
            </div>
          </div>

          {/* Right Panel - Detailed Evaluation */}
          <div className="lg:col-span-8 space-y-8 lg:space-y-10">
            {/* Bull Bio */}
            <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_15px_30px_-5px_rgba(57,130,217,0.05)] border border-slate-100 p-8 sm:p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-6 sm:mb-8">
                    <div className="w-10 h-10 sm:w-14 sm:h-14 bg-blue-50 rounded-xl sm:rounded-2xl flex items-center justify-center text-brand-black">
                        <Info size={24} className="sm:size-30" />
                    </div>
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-display font-black text-gray-900 tracking-tight italic uppercase">Breeder's Strategic Summary</h2>
                        <p className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-1">Professional Genetic Insight</p>
                    </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-lg sm:text-2xl mb-8 sm:mb-12 font-medium tracking-tight">
                    {bull.description}
                </p>
            </div>

            {/* Genetics Evaluation Section */}
            {bull.evaluations && (
              <div className="space-y-8 lg:space-y-10">
                {/* 1. Production Evaluation */}
                <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_15px_30px_-5px_rgba(57,130,217,0.05)] border border-slate-100 overflow-hidden">
                    <div className="bg-brand-blue/5 p-8 sm:p-10 flex flex-col sm:flex-row justify-between items-center gap-6 text-brand-black border-b border-slate-100">
                        <div className="flex items-center gap-4 sm:gap-6">
                            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-brand-blue rounded-2xl flex items-center justify-center text-white shadow-lg">
                                <Droplets size={24} />
                            </div>
                            <h3 className="text-xl sm:text-2xl font-display font-black tracking-tight uppercase italic">Production <span className="text-brand-blue">Evaluation</span></h3>
                        </div>
                        <div className="text-[9px] sm:text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">Reliability: {bull.evaluations.production.reliability}%</div>
                    </div>
                    <div className="p-8 sm:p-12">
                        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-10">
                            {[
                                { label: 'Milk', val: bull.evaluations.production.milk, unit: 'lbs' },
                                { label: 'Fat %', val: `+${bull.evaluations.production.fatPct}%` },
                                { label: 'Fat', val: `+${bull.evaluations.production.fat}`, unit: 'lbs' },
                                { label: 'Prot %', val: `+${bull.evaluations.production.protPct}%` },
                                { label: 'Prot', val: `+${bull.evaluations.production.prot}`, unit: 'lbs' },
                            ].map((p, i) => (
                                <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                    <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest block mb-2">{p.label}</span>
                                    <span className="text-xl font-display font-black text-brand-black">{p.val}</span>
                                    {p.unit && <span className="text-[9px] font-bold text-gray-400 block mt-1">{p.unit}</span>}
                                </div>
                            ))}
                        </div>
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
                            {[
                                { label: 'Net Merit $', val: `+$${bull.evaluations.production.nm}` },
                                { label: 'DWP$', val: `+$${bull.evaluations.production.dwp}` },
                                { label: 'Cheese Merit $', val: `+$${bull.evaluations.production.cm}` },
                                { label: 'Combined F+P', val: `+${bull.evaluations.production.cfp}` },
                            ].map((m, i) => (
                                <div key={i} className="flex justify-between items-center p-5 bg-white border border-slate-100 rounded-xl">
                                    <span className="text-[9px] font-black uppercase text-gray-400 tracking-widest">{m.label}</span>
                                    <span className="font-display font-black text-brand-black">{m.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 2. Functional & Calving Traits */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                    {/* Calving Traits */}
                    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col">
                        <div className="bg-slate-900 p-8 flex items-center gap-4 text-white">
                            <Target size={24} className="text-brand-green" />
                            <h3 className="font-display font-black uppercase tracking-tight text-lg">Calving Traits</h3>
                        </div>
                        <div className="p-8 space-y-4 flex-grow">
                            {[
                                { label: 'Sire Calving Ease', val: `${bull.evaluations.calving.sce}%` },
                                { label: 'Daughter Calving Ease', val: `${bull.evaluations.calving.dce}%` },
                                { label: 'Sire Still Birth', val: `${bull.evaluations.calving.ssb}%` },
                                { label: 'Daughter Still Birth', val: `${bull.evaluations.calving.dsb}%` },
                            ].map((c, i) => (
                                <div key={i} className="flex justify-between items-center py-4 border-b border-slate-50 last:border-0">
                                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{c.label}</span>
                                    <span className="font-display font-black text-brand-black">{c.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Functional Traits */}
                    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 overflow-hidden flex flex-col">
                        <div className="bg-brand-blue p-8 flex items-center gap-4 text-white">
                            <HealthIcon size={24} className="text-white" />
                            <h3 className="font-display font-black uppercase tracking-tight text-lg">Health & Functional</h3>
                        </div>
                        <div className="p-8 grid grid-cols-2 gap-x-8 gap-y-4">
                            {[
                                { label: 'FI', val: `+${bull.evaluations.health.fi}` },
                                { label: 'DPR', val: bull.evaluations.health.dpr },
                                { label: 'HCR', val: `+${bull.evaluations.health.hcr}` },
                                { label: 'CCR', val: `+${bull.evaluations.health.ccr}` },
                                { label: 'Mastitis', val: `+${bull.evaluations.health.mastitis}` },
                                { label: 'SCS', val: bull.evaluations.health.scs },
                                { label: 'PL', val: `+${bull.evaluations.health.pl}` },
                                { label: 'FE', val: bull.evaluations.health.fe },
                            ].map((h, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0">
                                    <span className="text-[10px] font-black uppercase text-gray-400 tracking-widest">{h.label}</span>
                                    <span className="font-display font-black text-brand-black">{h.val}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 3. Linear Traits - Visual Chart */}
                {bull.linearTraitsFull && (
                    <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] border border-slate-100 overflow-hidden">
                        <div className="bg-slate-50 p-8 sm:p-10 flex items-center justify-between border-b border-slate-100">
                             <div className="flex items-center gap-4">
                                <Ruler size={24} className="text-brand-blue" />
                                <h3 className="font-display font-black uppercase text-xl italic">Linear <span className="text-brand-blue">Traits</span></h3>
                             </div>
                             <div className="flex gap-4 text-[9px] font-black uppercase tracking-widest text-gray-400">
                                <span>-2.0</span>
                                <span>-1.0</span>
                                <span className="text-brand-blue">0</span>
                                <span>+1.0</span>
                                <span>+2.0</span>
                             </div>
                        </div>
                        <div className="p-8 sm:p-12 space-y-6">
                            {bull.linearTraitsFull.map((lt, idx) => (
                                <div key={idx} className="grid grid-cols-12 gap-4 items-center">
                                    <div className="col-span-3 text-right">
                                        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">{lt.trait}</span>
                                    </div>
                                    <div className="col-span-2 text-right">
                                        <span className="text-[10px] font-bold text-gray-400">{lt.labelLow}</span>
                                    </div>
                                    <div className="col-span-2 relative h-4 bg-slate-100 rounded-full flex items-center">
                                        {/* Simplified visual bar from -2 to +2 */}
                                        <div className="absolute left-1/2 w-[2px] h-full bg-slate-300 -translate-x-1/2 z-0"></div>
                                        <div 
                                            className={`absolute h-3 w-3 rounded-full shadow-lg transition-all duration-1000 z-10 ${lt.value > 0 ? 'bg-brand-green' : 'bg-brand-blue'}`}
                                            style={{ 
                                                left: `${50 + (lt.value * 25)}%`,
                                                transform: 'translateX(-50%)' 
                                            }}
                                        ></div>
                                    </div>
                                    <div className="col-span-2 text-left">
                                        <span className="text-[10px] font-bold text-gray-400">{lt.labelHigh}</span>
                                    </div>
                                    <div className="col-span-3 text-left">
                                        <span className={`text-[11px] font-black font-display ${lt.value > 0 ? 'text-brand-green' : 'text-brand-blue'}`}>
                                            {lt.value > 0 ? '+' : ''}{lt.value.toFixed(2)}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-slate-50 grid grid-cols-3 gap-8 text-center border-t border-slate-100">
                             <div>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">PTAT</span>
                                <span className="text-xl font-display font-black text-brand-black">+{bull.evaluations.type.ptat.toFixed(2)}</span>
                             </div>
                             <div>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Udder Composite</span>
                                <span className="text-xl font-display font-black text-brand-green">+{bull.evaluations.type.udc.toFixed(2)}</span>
                             </div>
                             <div>
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest block mb-1">Feet & Legs</span>
                                <span className="text-xl font-display font-black text-brand-blue">{bull.evaluations.type.flc.toFixed(2)}</span>
                             </div>
                        </div>
                    </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Disclaimer */}
      <div className="container mx-auto px-4 mt-20">
         <div className="bg-slate-50 p-8 rounded-[2rem] border border-slate-100 text-center">
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] leading-relaxed max-w-4xl mx-auto">
                * Genetic data provided by CDCB and official breed associations. Evaluations are subject to change based on new genomic data points. Elite Genetics LTD. guarantees the highest standards of storage and logistics but not the specific outcome of individual matings.
            </p>
         </div>
      </div>
    </div>
  );
};

export default BullDetail;