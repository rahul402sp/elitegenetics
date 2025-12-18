import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, Share2, Activity, Droplets, Heart, ShieldCheck, 
  Award, Zap, Ruler, Beaker, TrendingUp, Info, LayoutList, 
  ClipboardCheck, ChevronRight, BarChart4, Facebook, Twitter, Linkedin
} from 'lucide-react';
import { BULLS } from '../constants';

const BullDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const bull = BULLS.find(b => b.id === id);

  if (!bull) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center bg-slate-50">
        <div className="text-center p-12 bg-white rounded-3xl shadow-xl border border-slate-100 max-w-md">
          <div className="w-20 h-20 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-6 text-slate-400">
            <ShieldCheck size={40} />
          </div>
          <h2 className="text-3xl font-display font-black text-gray-900 mb-4">Sire Not Found</h2>
          <p className="text-gray-500 mb-8 font-medium">The bull you are looking for might have been moved or removed from our inventory.</p>
          <Link to="/portfolio" className="inline-flex items-center gap-2 bg-brand-black text-white px-8 py-3 rounded-2xl font-bold transition-all hover:bg-brand-blue shadow-lg">
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
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard');
    }
  };

  return (
    <div className="bg-[#fcfdfe] min-h-screen">
      {/* Dynamic Header */}
      <div className="bg-brand-black text-white pt-10 pb-32 relative overflow-hidden">
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-30%] right-[-10%] w-[70%] h-[140%] bg-gradient-to-br from-white/20 via-brand-green/20 to-transparent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <nav className="flex items-center gap-2 text-white/60 font-bold uppercase tracking-[0.2em] text-[10px] mb-8">
            <Link to="/portfolio" className="hover:text-white transition-colors">Sire Portfolio</Link>
            <ChevronRight size={10} />
            <span className="text-brand-green">{bull.name} Profile</span>
          </nav>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
            <div>
              <div className="flex flex-wrap gap-2 mb-6">
                 {bull.badges.map((badge, idx) => (
                    <span key={idx} className="bg-white/10 border border-white/20 text-brand-green text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">{badge}</span>
                 ))}
                 <span className="bg-white/10 border border-white/20 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">Official Cdcb Evaluation</span>
              </div>
              <h1 className="text-6xl md:text-8xl font-display font-black mb-2 tracking-tighter uppercase leading-none">
                {bull.name}
              </h1>
              <p className="text-xl md:text-3xl text-white/80 font-display font-bold tracking-tight opacity-90 italic">
                {bull.fullName || bull.name}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 w-full lg:w-auto items-center">
                <Link to="/contact" className="flex-1 lg:flex-none bg-brand-green hover:bg-brand-darkGreen text-white px-12 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] text-center transition-all shadow-2xl hover:-translate-y-1 active:scale-95">
                    Order straws
                </Link>
                
                <div className="flex gap-2 w-full sm:w-auto">
                    <button 
                      onClick={handleNativeShare}
                      className="flex-grow sm:flex-none bg-white/10 hover:bg-white/20 border border-white/10 px-6 py-5 rounded-2xl text-[11px] font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all"
                    >
                        <Share2 size={16} /> <span className="hidden sm:inline">Share</span>
                    </button>
                    
                    {socialLinks.map((social) => (
                      <a 
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/10 hover:bg-white/20 border border-white/10 p-5 rounded-2xl transition-all flex items-center justify-center text-white"
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

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Sidebar */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-8">
            <div className="bg-white rounded-[2.5rem] shadow-[0_25px_60px_-15px_rgba(57,130,217,0.1)] border border-slate-100 overflow-hidden flex flex-col">
              <div className="bg-slate-50 relative aspect-[4/3] flex items-center justify-center p-6 border-b border-slate-50 overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-100/50 to-white pointer-events-none opacity-50"></div>
                <img 
                  src={bull.image} 
                  alt={bull.name} 
                  className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute bottom-4 right-4 z-20 flex flex-col gap-2">
                    <div className="bg-brand-black text-white px-4 py-2 rounded-xl backdrop-blur-md shadow-xl border border-white/20">
                      <div className="text-[8px] uppercase font-black tracking-widest leading-none mb-1 opacity-60">GTPI Rank</div>
                      <div className="text-xl font-display font-black leading-none tracking-tighter">+{bull.stats.gtpi}</div>
                    </div>
                </div>
              </div>

              <div className="p-10 space-y-10">
                <div className="grid grid-cols-1 gap-4">
                  <h3 className="font-black text-gray-900 uppercase text-[10px] tracking-[0.25em] flex items-center gap-2 mb-2">
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
                    <div key={i} className="flex justify-between items-center px-6 py-4 bg-slate-50/50 rounded-2xl border border-slate-100/50 hover:bg-white hover:shadow-md transition-all group">
                      <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest group-hover:text-gray-600 transition-colors">{item.label}</span>
                      <span className={`${item.mono ? 'font-mono' : ''} font-bold text-xs ${item.color || 'text-gray-900'}`}>{item.val}</span>
                    </div>
                  ))}
                  {bull.geneticCodes && (
                    <div className="mt-2 p-5 bg-brand-black rounded-2xl border border-white/10 shadow-xl">
                      <span className="text-[9px] text-white/50 uppercase font-black tracking-widest block mb-2">Genetic Codes</span>
                      <span className="font-mono text-[10px] text-brand-green font-bold tracking-tight">{bull.geneticCodes}</span>
                    </div>
                  )}
                </div>

                <div>
                  <h3 className="font-black text-gray-900 uppercase text-[10px] tracking-[0.25em] flex items-center gap-2 mb-8">
                    <Zap size={14} className="text-brand-green" /> High-Performance Pedigree
                  </h3>
                  <div className="relative pl-6 border-l-2 border-brand-green/20 space-y-8">
                    {[
                      { label: 'Sire', val: bull.extendedPedigree?.sire || bull.pedigree.sire },
                      { label: 'Dam', val: bull.extendedPedigree?.dam || bull.pedigree.dam },
                      { label: 'MGS', val: bull.extendedPedigree?.mgs || bull.pedigree.mgs },
                      { label: 'MGD', val: bull.extendedPedigree?.mgd || 'N/A' },
                    ].map((item, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[31px] top-1.5 w-2 h-2 rounded-full bg-brand-green shadow-[0_0_10px_rgba(140,198,63,0.4)]"></div>
                        <span className="text-[9px] text-gray-400 uppercase font-black tracking-widest block mb-1">{item.label}</span>
                        <span className="font-bold text-gray-900 text-sm leading-tight block">{item.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brand-black rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group border border-white/10">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-1000"></div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green">
                    <TrendingUp size={24} />
                  </div>
                  <h4 className="text-xl font-display font-black uppercase tracking-tight italic">Market Value Index</h4>
                </div>
                <div className="space-y-6 mb-10">
                    <div className="flex justify-between items-center pb-5 border-b border-white/10">
                        <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Conventional</span>
                        <span className="text-3xl font-display font-black text-white tracking-tighter">₹{bull.pricing.conventional.toLocaleString()}</span>
                    </div>
                    {bull.pricing.sexed && (
                        <div className="flex justify-between items-center pb-5 border-b border-white/10">
                            <span className="text-[10px] font-black text-white/50 uppercase tracking-[0.2em]">Sexed Straws</span>
                            <span className="text-3xl font-display font-black text-brand-green tracking-tighter">₹{bull.pricing.sexed.toLocaleString()}</span>
                        </div>
                    )}
                </div>
                <Link to="/contact" className="block w-full bg-white text-brand-black text-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[11px] hover:bg-brand-green hover:text-white transition-all active:scale-95 shadow-2xl">
                    Check Inventory Availability
                </Link>
            </div>
          </div>

          {/* Right Panel */}
          <div className="lg:col-span-8 space-y-10">
            <div className="bg-white rounded-[2.5rem] shadow-[0_15px_30px_-5px_rgba(57,130,217,0.05)] border border-slate-100 p-10 lg:p-14">
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-black">
                        <Info size={30} />
                    </div>
                    <div>
                        <h2 className="text-3xl font-display font-black text-gray-900 tracking-tight italic">Breeder's Strategic Summary</h2>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.3em] mt-1">High Profit Potential Sire</p>
                    </div>
                </div>
                <p className="text-gray-600 leading-relaxed text-2xl mb-12 font-medium tracking-tight">
                    {bull.description}
                </p>
            </div>

            {bull.evaluations && (
              <div className="bg-white rounded-[2.5rem] shadow-[0_15px_30px_-5px_rgba(57,130,217,0.05)] border border-slate-100 overflow-hidden">
                <div className="bg-brand-black p-10 flex flex-col sm:flex-row justify-between items-center gap-8 text-white border-b-4 border-brand-green">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/10 rounded-3xl flex items-center justify-center text-brand-green shadow-inner">
                      <Droplets size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-black tracking-tight uppercase">Genetics Evaluation</h3>
                      <p className="text-[10px] text-white/50 font-bold uppercase tracking-[0.3em] mt-1 italic">CDCB Evaluation Data (Updated 08/2025)</p>
                    </div>
                  </div>
                  <div className="bg-white/10 px-10 py-6 rounded-[2.5rem] border border-white/20 text-center backdrop-blur-md">
                    <span className="text-[10px] text-white/60 font-black uppercase tracking-widest block mb-2">Production Reliability</span>
                    <span className="text-4xl font-display font-black text-brand-green">{bull.evaluations.production.reliability}%</span>
                  </div>
                </div>

                <div className="p-12">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {[
                      { label: 'PTAM (Milk)', val: bull.evaluations.production.milk, unit: 'lbs', color: 'text-gray-900' },
                      { label: 'PTA Fat', val: `${bull.evaluations.production.fat} lbs`, sub: `+${bull.evaluations.production.fatPct}%`, color: 'text-brand-black' },
                      { label: 'PTA Protein', val: `${bull.evaluations.production.prot} lbs`, sub: `+${bull.evaluations.production.protPct}%`, color: 'text-brand-green' },
                      { label: 'Combined F+P', val: bull.evaluations.production.cfp, unit: 'lbs', color: 'text-gray-900' },
                    ].map((stat, i) => (
                      <div key={i} className="text-center p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-2xl transition-all">
                        <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest block mb-4">{stat.label}</span>
                        <span className={`text-3xl font-display font-black block ${stat.color}`}>
                          {stat.val.toString().startsWith('+') || typeof stat.val === 'number' && stat.val > 0 ? '+' : ''}{stat.val}
                        </span>
                        {stat.sub && <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-2 block">{stat.sub}</span>}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BullDetail;