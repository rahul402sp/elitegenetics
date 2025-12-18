import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Share2, Activity, Droplets, Heart, ShieldCheck, Award, Zap, Ruler, Beaker, TrendingUp, Info } from 'lucide-react';
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
          <Link to="/portfolio" className="inline-flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-2xl font-bold transition-all hover:bg-brand-darkBlue shadow-lg shadow-brand-blue/20">
            <ArrowLeft size={18} /> Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Premium Header */}
      <div className="bg-[#001a2c] text-white pt-12 pb-32 relative overflow-hidden">
        {/* Abstract Background Gradient */}
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[120%] bg-gradient-to-br from-brand-blue via-brand-green to-transparent rounded-full blur-[120px]"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/portfolio" className="group inline-flex items-center text-gray-400 hover:text-white mb-8 transition-all font-bold uppercase tracking-[0.2em] text-[11px]">
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Sire Catalog
          </Link>
          
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
            <div className="max-w-4xl">
              <div className="flex flex-wrap gap-2 mb-6">
                 {bull.badges.map((badge, idx) => (
                    <span key={idx} className="bg-white/5 border border-white/10 text-brand-green text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">{badge}</span>
                 ))}
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black mb-2 tracking-tighter uppercase leading-none">
                {bull.name}
              </h1>
              <p className="text-lg md:text-xl text-brand-blue font-display font-bold tracking-wide opacity-90 italic">
                {bull.fullName || bull.name}
              </p>
            </div>
            
            <div className="flex gap-4 w-full lg:w-auto">
                <Link to="/contact" className="flex-1 lg:flex-none bg-brand-green hover:bg-brand-darkGreen text-white px-10 py-4 rounded-xl text-xs font-black uppercase tracking-widest text-center transition-all shadow-xl shadow-brand-green/20">
                    Order Semen
                </Link>
                <button className="flex-1 lg:flex-none bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all">
                    <Share2 size={16} /> Share
                </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Panel: High Performance Image & Summary */}
            <div className="lg:col-span-5 space-y-8">
                {/* Image Fix: Better alignment and responsive container */}
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 flex flex-col">
                    <div className="bg-slate-100 aspect-[5/4] sm:aspect-[4/3] flex items-center justify-center p-4 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-100 opacity-50"></div>
                        <img 
                          src={bull.image} 
                          alt={bull.name} 
                          className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition-transform duration-700 group-hover:scale-[1.03]" 
                        />
                        <div className="absolute bottom-4 right-4 z-20">
                          <div className="bg-brand-darkBlue text-white p-3 rounded-2xl flex items-center gap-3 shadow-xl backdrop-blur-md">
                            <ShieldCheck size={20} className="text-brand-green" />
                            <div>
                              <div className="text-[9px] uppercase font-black tracking-widest leading-none mb-1 opacity-70">Official Rank</div>
                              <div className="text-lg font-black leading-none">GTPI +{bull.stats.gtpi}</div>
                            </div>
                          </div>
                        </div>
                    </div>
                    
                    <div className="p-10">
                        <div className="grid grid-cols-2 gap-6 mb-8 border-b border-gray-100 pb-8">
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">NAAB Code</span>
                            <span className="text-lg font-mono font-bold text-gray-800">{bull.naab}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">D.O.B.</span>
                            <span className="text-lg font-mono font-bold text-gray-800">{bull.dob}</span>
                          </div>
                          <div>
                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Beta Casein</span>
                            <span className="text-lg font-mono font-bold text-brand-blue">{bull.betaCasein}</span>
                          </div>
                          <div className="text-right">
                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Kappa Casein</span>
                            <span className="text-lg font-mono font-bold text-brand-green">{bull.kappaCasein}</span>
                          </div>
                        </div>

                        <div className="space-y-6">
                             <h3 className="font-black text-gray-900 uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                                <Zap size={14} className="text-brand-green" /> Lineage Information
                             </h3>
                             <div className="space-y-4">
                                {[
                                    { label: 'Sire', val: bull.extendedPedigree?.sire || bull.pedigree.sire },
                                    { label: 'Dam', val: bull.extendedPedigree?.dam || bull.pedigree.dam },
                                    { label: 'MGS', val: bull.extendedPedigree?.mgs || bull.pedigree.mgs }
                                ].map((item, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100 transition-colors hover:bg-white hover:shadow-md">
                                        <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest">{item.label}</span>
                                        <span className="font-bold text-gray-900 text-sm text-right leading-tight max-w-[70%]">{item.val}</span>
                                    </div>
                                ))}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Pricing / Investment Card */}
                <div className="bg-brand-darkBlue rounded-[2.5rem] p-10 text-white shadow-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full blur-2xl -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-1000"></div>
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center text-brand-green">
                        <TrendingUp size={24} />
                      </div>
                      <h4 className="text-xl font-display font-black uppercase tracking-tight">Price Index</h4>
                    </div>
                    <div className="space-y-4 mb-10">
                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                            <span className="text-xs font-bold text-blue-200/60 uppercase tracking-widest">Conventional</span>
                            <span className="text-3xl font-display font-black text-white">₹{bull.pricing.conventional.toLocaleString()}</span>
                        </div>
                        {bull.pricing.sexed && (
                            <div className="flex justify-between items-center pb-4 border-b border-white/10">
                                <span className="text-xs font-bold text-blue-200/60 uppercase tracking-widest">Sexed (AITotal)</span>
                                <span className="text-3xl font-display font-black text-brand-green">₹{bull.pricing.sexed.toLocaleString()}</span>
                            </div>
                        )}
                    </div>
                    <Link to="/contact" className="block w-full bg-brand-green text-white text-center py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-brand-darkGreen transition-all active:scale-95 shadow-xl">
                        Check Availability
                    </Link>
                </div>
            </div>

            {/* Right Panel: Detailed Data Sheets */}
            <div className="lg:col-span-7 space-y-8">
                
                {/* Introduction & Highlights */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-10 lg:p-12">
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-blue">
                            <Info size={28} />
                        </div>
                        <h2 className="text-2xl font-display font-black text-gray-900 tracking-tight">Breeding Profile</h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-lg mb-10 font-medium">
                        {bull.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                        {bull.badges.map((b, i) => (
                            <div key={i} className="flex items-center gap-3 text-[10px] font-black text-gray-700 bg-slate-50 border border-slate-100 px-6 py-3 rounded-xl uppercase tracking-widest">
                                <div className="w-2 h-2 rounded-full bg-brand-green"></div> {b}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Production Evaluation Section */}
                {bull.evaluations && (
                  <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                    <div className="bg-slate-900 p-8 flex flex-col sm:flex-row justify-between items-center gap-6 text-white">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center text-brand-blue">
                          <Droplets size={28} />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-black tracking-tight uppercase">Genetics Evaluation</h3>
                          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-0.5">Updated August 2025</p>
                        </div>
                      </div>
                      <div className="bg-white/10 px-8 py-3 rounded-2xl border border-white/10 text-center">
                        <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-1">Production Rel.</span>
                        <span className="text-2xl font-display font-black text-brand-green">{bull.evaluations.production.reliability}%</span>
                      </div>
                    </div>

                    <div className="p-10">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
                        {[
                          { label: 'Milk', val: bull.evaluations.production.milk, unit: 'lbs', color: 'text-gray-900' },
                          { label: 'Fat', val: bull.evaluations.production.fat, unit: 'lbs', color: 'text-brand-blue' },
                          { label: 'Protein', val: bull.evaluations.production.prot, unit: 'lbs', color: 'text-brand-green' },
                          { label: 'CFP', val: bull.evaluations.production.cfp, unit: 'lbs', color: 'text-gray-900' },
                        ].map((stat, i) => (
                          <div key={i} className="text-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <span className="text-[9px] text-gray-400 font-black uppercase tracking-widest block mb-2">{stat.label}</span>
                            <span className={`text-xl font-display font-black ${stat.color}`}>+{stat.val}<span className="text-[10px] ml-0.5 opacity-60 font-sans">{stat.unit}</span></span>
                          </div>
                        ))}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                          { label: 'Net Merit $', val: bull.evaluations.production.nm, highlight: true },
                          { label: 'Wellness Profit DWP$', val: bull.evaluations.production.dwp },
                          { label: 'Cheese Merit CM$', val: bull.evaluations.production.cm },
                        ].map((m, i) => (
                          <div key={i} className={`p-6 rounded-2xl border ${m.highlight ? 'bg-brand-green/5 border-brand-green/20' : 'bg-slate-50 border-slate-100'}`}>
                            <span className="text-[9px] text-gray-400 font-black uppercase block mb-2 tracking-widest">{m.label}</span>
                            <span className={`text-2xl font-display font-black ${m.highlight ? 'text-brand-darkGreen' : 'text-gray-800'}`}>+${m.val}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* Linear Type Analysis Visualizer */}
                {bull.linearTraitsFull && (
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-10 lg:p-12">
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center text-brand-blue">
                                    <Ruler size={24} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-black text-gray-900 tracking-tight">Linear Type Analysis</h3>
                                    <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest mt-0.5">Type Reliability: {bull.evaluations?.type.reliability}%</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6 bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                                <div className="text-center">
                                    <span className="text-[9px] text-gray-400 font-black uppercase block mb-1">PTAT</span>
                                    <span className="text-2xl font-display font-black text-gray-900">+{bull.evaluations?.type.ptat}</span>
                                </div>
                                <div className="w-px h-10 bg-slate-200"></div>
                                <div className="text-center">
                                    <span className="text-[9px] text-gray-400 font-black uppercase block mb-1">UDC</span>
                                    <span className="text-2xl font-display font-black text-brand-blue">+{bull.evaluations?.type.udc}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            {bull.linearTraitsFull.map((trait, idx) => {
                                const isPositive = trait.value >= 0;
                                const barWidth = Math.min(Math.abs(trait.value) / 3 * 100, 100); 

                                return (
                                    <div key={idx} className="group grid grid-cols-12 gap-3 items-center py-3 px-4 rounded-xl transition-all hover:bg-slate-50 border border-transparent hover:border-slate-100">
                                        <div className="col-span-12 sm:col-span-3 font-black text-gray-800 uppercase tracking-tight text-[10px] sm:mb-0">{trait.trait}</div>
                                        <div className="col-span-4 sm:col-span-2 text-right text-[9px] font-black text-gray-400 uppercase tracking-widest italic">{trait.labelLow}</div>
                                        
                                        <div className="col-span-4 sm:col-span-5 relative h-3 bg-slate-100 rounded-full border border-slate-200 flex items-center">
                                            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-300 z-10"></div>
                                            <div 
                                                className={`absolute h-full transition-all duration-1000 ease-out rounded-full ${isPositive ? 'bg-brand-blue shadow-sm' : 'bg-brand-green shadow-sm'}`}
                                                style={{
                                                    left: isPositive ? '50%' : `calc(50% - ${barWidth / 2}%)`,
                                                    width: `${barWidth / 2}%`
                                                }}
                                            ></div>
                                        </div>

                                        <div className="col-span-4 sm:col-span-2 text-left text-[9px] font-black text-gray-400 uppercase tracking-widest italic">{trait.labelHigh}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Health & Functional Traits */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-slate-900 px-10 py-6 text-white flex items-center justify-between border-b-4 border-brand-green">
                            <div className="flex items-center gap-4">
                                <Activity size={24} className="text-brand-green" />
                                <h3 className="font-display font-black uppercase text-sm tracking-widest">Functional Traits</h3>
                            </div>
                        </div>
                        <div className="p-8 space-y-2">
                            {[
                                { l: 'Fertility Index', v: bull.evaluations?.health.fi, icon: <Heart size={14} className="text-red-400" /> },
                                { l: 'DPR', v: bull.evaluations?.health.dpr, icon: <Activity size={14} className="text-blue-400" /> },
                                { l: 'Productive Life', v: bull.evaluations?.health.pl, icon: <TrendingUp size={14} className="text-brand-green" /> },
                                { l: 'Somatic Cell Score', v: bull.evaluations?.health.scs, icon: <Beaker size={14} className="text-orange-400" /> },
                                { l: 'Milking Speed', v: bull.evaluations?.health.milkingSpeed, icon: <Zap size={14} className="text-yellow-400" /> },
                            ].map((tr, i) => (
                                <div key={i} className="flex justify-between items-center py-3 border-b border-slate-50 last:border-0 hover:bg-slate-50 transition-colors px-2 rounded-lg">
                                    <span className="flex items-center gap-3 text-gray-500 uppercase text-[10px] font-black tracking-widest">
                                        {tr.icon} {tr.l}
                                    </span>
                                    <span className="text-sm font-black text-gray-900">
                                        {tr.v > 0 && tr.l !== 'Somatic Cell Score' ? '+' : ''}{tr.v}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                        <div className="bg-slate-900 px-10 py-6 text-white flex items-center justify-between border-b-4 border-brand-blue">
                            <div className="flex items-center gap-4">
                                <ShieldCheck size={24} className="text-brand-blue" />
                                <h3 className="font-display font-black uppercase text-sm tracking-widest">Calving Performance</h3>
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                {[
                                    { label: 'Sire Ease', val: bull.evaluations?.calving.sce },
                                    { label: 'Dtr Ease', val: bull.evaluations?.calving.dce },
                                ].map((c, i) => (
                                    <div key={i} className="bg-slate-50 p-6 rounded-2xl border border-slate-100 text-center">
                                        <span className="text-[9px] text-gray-400 uppercase font-black block mb-1 tracking-widest">{c.label}</span>
                                        <span className="text-2xl font-display font-black text-gray-900">{c.val}<span className="text-[10px] ml-0.5 opacity-60 font-sans">%</span></span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center text-xs font-bold text-gray-600 uppercase tracking-widest">
                                    <span>Feed Efficiency</span>
                                    <span className="text-brand-blue">+{bull.evaluations?.health.fe}</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-brand-blue" style={{ width: '80%' }}></div>
                                </div>
                                <div className="flex justify-between items-center text-xs font-bold text-gray-600 uppercase tracking-widest">
                                    <span>Feed Saved</span>
                                    <span className="text-brand-green">+{bull.evaluations?.health.feedSaved} lbs</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                                  <div className="h-full bg-brand-green" style={{ width: '65%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BullDetail;