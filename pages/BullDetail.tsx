import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Share2, Activity, Droplets, Heart, ShieldCheck, Award, Zap } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { BULLS } from '../constants';

const BullDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const bull = BULLS.find(b => b.id === id);

  if (!bull) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Bull Not Found</h2>
          <Link to="/portfolio" className="text-brand-blue font-bold hover:underline">Back to Portfolio</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Header/Hero */}
      <div className="bg-[#001a2c] text-white pt-12 pb-24 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-brand-blue to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-full opacity-5 bg-gradient-to-r from-brand-green to-transparent pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-10 transition-colors font-bold uppercase tracking-widest text-xs">
            <ArrowLeft size={16} className="mr-2" /> Back to Full Portfolio
          </Link>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10">
            <div className="animate-fade-in">
              <div className="flex flex-wrap gap-2 mb-6">
                 {bull.badges.map((badge, idx) => (
                    <span key={idx} className="bg-brand-green/20 border border-brand-green/30 text-brand-green text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">{badge}</span>
                 ))}
                 <span className="bg-white/10 border border-white/20 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest">AITOTAL Partner</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-black mb-4 tracking-tighter uppercase leading-none">
                {bull.name}
              </h1>
              {bull.fullName && (
                <p className="text-brand-blue font-display font-bold text-lg md:text-xl mb-6 tracking-wide opacity-80 italic">
                  {bull.fullName}
                </p>
              )}
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-4 text-sm text-gray-400 font-bold uppercase tracking-wider">
                <div>NAAB: <span className="text-white ml-2">{bull.naab}</span></div>
                <div>Reg No: <span className="text-white ml-2">{bull.regNo}</span></div>
                <div>DOB: <span className="text-white ml-2">{bull.dob}</span></div>
                <div>aAa: <span className="text-white ml-2">{bull.aaa || 'N/A'}</span></div>
                <div>Beta Casein: <span className="text-white ml-2">{bull.betaCasein}</span></div>
                <div>Kappa Casein: <span className="text-white ml-2">{bull.kappaCasein}</span></div>
                {bull.geneticCodes && (
                  <div className="col-span-2">Codes: <span className="text-brand-green ml-2 font-mono text-xs">{bull.geneticCodes}</span></div>
                )}
              </div>
            </div>
            
            <div className="flex gap-4">
                <button className="bg-white/5 hover:bg-white/10 border border-white/10 px-6 py-3 rounded-2xl text-xs font-bold uppercase tracking-widest flex items-center gap-2 transition-all">
                    <Share2 size={16} /> Share Profile
                </button>
                <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-xl shadow-brand-green/20">
                    Enquire Now
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column: Image, Pedigree */}
            <div className="lg:col-span-1 space-y-12">
                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-gray-100 p-2">
                    <div className="rounded-[2.25rem] overflow-hidden aspect-[4/5]">
                        <img src={bull.image} alt={bull.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8">
                        <div className="grid grid-cols-2 gap-8 border-b border-gray-100 pb-8 mb-8">
                            <div>
                                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">GTPI Score</span>
                                <div className="text-4xl font-display font-black text-brand-blue tracking-tighter">+{bull.stats.gtpi}</div>
                            </div>
                            <div className="text-right">
                                <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-2">Net Merit $</span>
                                <div className="text-4xl font-display font-black text-gray-800 tracking-tighter">${bull.stats.nm || bull.evaluations?.production.nm}</div>
                            </div>
                        </div>
                        
                        {/* Pedigree Tree */}
                        <div>
                             <h3 className="font-black text-gray-900 uppercase text-xs tracking-[0.2em] mb-8 flex items-center gap-3">
                                <Zap size={16} className="text-brand-green" /> Genetic Lineage
                             </h3>
                             <div className="relative pl-6 border-l-2 border-brand-green/30 space-y-8">
                                {bull.extendedPedigree ? (
                                    <>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Sire</span>
                                            <span className="font-bold text-gray-800 leading-tight block">{bull.extendedPedigree.sire}</span>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Dam</span>
                                            <span className="font-bold text-gray-800 leading-tight block">{bull.extendedPedigree.dam}</span>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">MGS</span>
                                            <span className="font-bold text-gray-800 leading-tight block">{bull.extendedPedigree.mgs}</span>
                                        </div>
                                         <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green/30 rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">MGD</span>
                                            <span className="font-bold text-gray-800 leading-tight block italic text-sm">{bull.extendedPedigree.mgd}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Sire</span>
                                            <span className="font-bold text-gray-800 leading-tight block">{bull.pedigree.sire}</span>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">Dam</span>
                                            <span className="font-bold text-gray-800 leading-tight block">{bull.pedigree.dam}</span>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute -left-[27px] top-2 w-3 h-3 bg-brand-green rounded-full"></div>
                                            <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest block mb-1">MGS</span>
                                            <span className="font-bold text-gray-800 leading-tight block">{bull.pedigree.mgs}</span>
                                        </div>
                                    </>
                                )}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Legacy Chart (Only if no full linear traits) */}
                {!bull.linearTraitsFull && (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-gray-100 p-10">
                        <h3 className="font-black text-gray-900 mb-8 uppercase text-xs tracking-widest">Trait Radar</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={bull.traits}>
                                <PolarGrid stroke="#e2e8f0" />
                                <PolarAngleAxis dataKey="trait" tick={{ fontSize: 10, fontWeight: 700, fill: '#64748b' }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} axisLine={false} tick={false} />
                                <Radar
                                    name={bull.name}
                                    dataKey="value"
                                    stroke="#0071bc"
                                    fill="#0071bc"
                                    fillOpacity={0.1}
                                />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Column: Detailed Evaluation Sheets */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Introduction */}
                <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-12">
                    <h2 className="text-3xl font-display font-black text-gray-900 mb-6 tracking-tight">Breeder's Summary</h2>
                    <p className="text-gray-600 leading-relaxed text-xl mb-10 font-medium">
                        {bull.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {bull.badges.map((b, i) => (
                            <div key={i} className="flex items-center gap-3 text-sm font-bold text-gray-800 bg-slate-50 border border-slate-100 px-6 py-3 rounded-2xl shadow-sm">
                                <Check size={18} className="text-brand-green" /> {b}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CDCB GENETICS EVALUATION */}
                {bull.evaluations && (
                    <div className="space-y-12">
                        
                        {/* Production Stats Table */}
                        <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                             <div className="bg-brand-darkBlue px-10 py-6 flex justify-between items-center text-white">
                                <div className="flex items-center gap-4">
                                    <Droplets className="text-brand-green" size={24} />
                                    <div>
                                        <h3 className="text-lg font-display font-black tracking-tight uppercase">Production Evaluation</h3>
                                        <p className="text-[10px] text-blue-200 font-bold tracking-widest uppercase">CDCB Genetics Evaluation (08/2025)</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <span className="text-[10px] text-blue-300 font-black uppercase tracking-widest block">Reliability</span>
                                    <span className="text-2xl font-black">{bull.evaluations.production.reliability}%</span>
                                </div>
                             </div>
                             
                             <div className="p-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-2 mb-10 text-sm font-bold uppercase tracking-widest text-gray-400">
                                    <div className="flex justify-between border-b border-gray-50 py-3">
                                        <span>Daughters: <span className="text-gray-900 ml-2">{bull.evaluations.production.dtrs}</span></span>
                                        <span>Herds: <span className="text-gray-900 ml-2">{bull.evaluations.production.herds || '0'}</span></span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 py-3">
                                        <span>PTAM (Milk)</span>
                                        <span className="text-gray-900">+{bull.evaluations.production.milk} lbs</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 py-3">
                                        <span>Fat</span>
                                        <span className="text-gray-900">+{bull.evaluations.production.fat} lbs (+{bull.evaluations.production.fatPct}%)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 py-3">
                                        <span>Protein</span>
                                        <span className="text-gray-900">+{bull.evaluations.production.prot} lbs (+{bull.evaluations.production.protPct}%)</span>
                                    </div>
                                    <div className="flex justify-between border-b border-gray-50 py-3">
                                        <span>Combined F+P CFP</span>
                                        <span className="text-gray-900">+{bull.evaluations.production.cfp} lbs</span>
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                                    {[
                                        { label: 'Net Merit $', val: bull.evaluations.production.nm, color: 'text-brand-green' },
                                        { label: 'Dairy Wellness $', val: bull.evaluations.production.dwp, color: 'text-gray-800' },
                                        { label: 'Cheese Merit $', val: bull.evaluations.production.cm, color: 'text-gray-800' },
                                        { label: 'Fluid Merit $', val: bull.evaluations.production.fm, color: 'text-gray-800' },
                                        { label: 'Grazing Merit $', val: bull.evaluations.production.gm, color: 'text-gray-800' },
                                    ].map((m, idx) => (
                                        <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-center">
                                            <span className="text-[10px] text-gray-400 uppercase font-black block mb-2">{m.label}</span>
                                            <span className={`text-xl font-black ${m.color}`}>+${m.val}</span>
                                        </div>
                                    ))}
                                </div>
                             </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            {/* Functional Traits Table */}
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden">
                                <div className="bg-slate-900 px-8 py-5 text-white flex items-center gap-3">
                                    <Activity size={20} className="text-brand-green" />
                                    <h3 className="font-display font-black uppercase text-sm tracking-widest">Functional Traits</h3>
                                </div>
                                <div className="p-8 space-y-1">
                                    {[
                                        { l: 'Fertility Index FI', v: bull.evaluations.health.fi },
                                        { l: 'Dtr Pregnancy Rate DPR', v: bull.evaluations.health.dpr },
                                        { l: 'Heifer Conception HCR', v: bull.evaluations.health.hcr },
                                        { l: 'Cow Conception CCR', v: bull.evaluations.health.ccr },
                                        { l: 'Mastitis Index', v: bull.evaluations.health.mastitis },
                                        { l: 'Somatic Cell Score SCS', v: bull.evaluations.health.scs },
                                        { l: 'Productive Life PL', v: bull.evaluations.health.pl },
                                        { l: 'Livability LIV', v: bull.evaluations.health.liv },
                                        { l: 'Feed Efficiency FE', v: bull.evaluations.health.fe },
                                        { l: 'RFI', v: bull.evaluations.health.rfi },
                                        { l: 'Feed Saved', v: bull.evaluations.health.feedSaved },
                                        { l: 'Milking Speed', v: bull.evaluations.health.milkingSpeed },
                                    ].map((tr, i) => (
                                        <div key={i} className="flex justify-between items-center py-2 border-b border-gray-50 text-sm font-bold">
                                            <span className="text-gray-500 uppercase text-[10px] tracking-widest">{tr.l}</span>
                                            <span className={tr.v > 0 && tr.l !== 'SCS' ? 'text-brand-green' : 'text-gray-900'}>
                                                {tr.v > 0 && tr.l !== 'SCS' && tr.l !== 'FE' && tr.l !== 'Milking Speed' ? '+' : ''}{tr.v}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Calving Traits Table */}
                            <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 overflow-hidden h-fit">
                                <div className="bg-slate-900 px-8 py-5 text-white flex items-center gap-3">
                                    <Heart size={20} className="text-red-400" />
                                    <h3 className="font-display font-black uppercase text-sm tracking-widest">Calving Traits</h3>
                                </div>
                                <div className="p-8 space-y-4">
                                    <div className="grid grid-cols-2 gap-8">
                                        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
                                            <span className="text-[10px] text-gray-400 uppercase font-black block mb-2">Sire Calving Ease</span>
                                            <span className="text-2xl font-black text-gray-900">{bull.evaluations.calving.sce}%</span>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
                                            <span className="text-[10px] text-gray-400 uppercase font-black block mb-2">Dtr Calving Ease</span>
                                            <span className="text-2xl font-black text-gray-900">{bull.evaluations.calving.dce}%</span>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
                                            <span className="text-[10px] text-gray-400 uppercase font-black block mb-2">Sire Still Birth</span>
                                            <span className="text-2xl font-black text-gray-900">{bull.evaluations.calving.ssb}%</span>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-2xl text-center border border-slate-100">
                                            <span className="text-[10px] text-gray-400 uppercase font-black block mb-2">Dtr Still Birth</span>
                                            <span className="text-2xl font-black text-gray-900">{bull.evaluations.calving.dsb}%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Linear Traits Visualizer */}
                {bull.linearTraitsFull && (
                    <div className="bg-white rounded-[2.5rem] shadow-sm border border-gray-100 p-12">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600">
                                    <ShieldCheck size={32} />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-display font-black text-gray-900 tracking-tight">Linear Type Analysis</h3>
                                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] mt-1">Reliability: {bull.evaluations?.type.reliability}%</p>
                                </div>
                            </div>
                            <div className="flex gap-8">
                                <div className="text-center">
                                    <span className="text-[10px] text-gray-400 font-black uppercase block mb-1">PTAT</span>
                                    <span className="text-2xl font-black text-gray-900">+{bull.evaluations?.type.ptat}</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] text-gray-400 font-black uppercase block mb-1">UDC</span>
                                    <span className="text-2xl font-black text-brand-blue">+{bull.evaluations?.type.udc}</span>
                                </div>
                                <div className="text-center">
                                    <span className="text-[10px] text-gray-400 font-black uppercase block mb-1">FLC</span>
                                    <span className="text-2xl font-black text-gray-800">{bull.evaluations?.type.flc}</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-1">
                            {/* Header Row */}
                            <div className="grid grid-cols-12 gap-4 text-[10px] font-black text-gray-400 uppercase mb-4 text-center tracking-widest px-2">
                                <div className="col-span-3 text-left">Linear Trait</div>
                                <div className="col-span-2 text-right">Low/Frail</div>
                                <div className="col-span-5">Genetic Profile</div>
                                <div className="col-span-2 text-left">High/Strong</div>
                            </div>

                            {bull.linearTraitsFull.map((trait, idx) => {
                                const isPositive = trait.value >= 0;
                                const barWidth = Math.abs(trait.value) / 3 * 50; // Scale relative to center

                                return (
                                    <div key={idx} className="grid grid-cols-12 gap-4 text-sm items-center hover:bg-slate-50 py-1.5 px-2 rounded-xl transition-colors">
                                        <div className="col-span-3 font-bold text-gray-800 truncate text-xs" title={trait.trait}>{trait.trait}</div>
                                        <div className="col-span-2 text-right text-[10px] font-bold text-gray-400 uppercase tracking-tight">{trait.labelLow}</div>
                                        
                                        {/* Bar Visual */}
                                        <div className="col-span-5 relative h-8 bg-slate-100 rounded-lg overflow-hidden">
                                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-300 z-10"></div>
                                            <div 
                                                className={`absolute top-1 bottom-1 transition-all rounded-md shadow-sm ${isPositive ? 'bg-brand-blue' : 'bg-brand-green'}`}
                                                style={{
                                                    left: isPositive ? '50%' : `calc(50% - ${Math.min(barWidth, 50)}%)`,
                                                    width: `${Math.min(barWidth, 50)}%`
                                                }}
                                            ></div>
                                            <span 
                                                className="absolute top-1/2 -translate-y-1/2 text-[10px] font-black z-20 px-2 text-white bg-slate-900/40 rounded-full"
                                                style={{
                                                    left: isPositive ? `calc(50% + ${Math.min(barWidth, 50)}% - 10px)` : 'auto',
                                                    right: isPositive ? 'auto' : `calc(50% + ${Math.min(barWidth, 50)}% - 10px)`
                                                }}
                                            >
                                                {trait.value > 0 ? '+' : ''}{trait.value}
                                            </span>
                                        </div>

                                        <div className="col-span-2 text-left text-[10px] font-bold text-gray-400 uppercase tracking-tight">{trait.labelHigh}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}


                 {/* Pricing Block */}
                 <div className="bg-[#001a2c] rounded-[2.5rem] p-12 text-white flex flex-col md:flex-row justify-between items-center gap-10 shadow-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
                        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <pattern id="pricing-grid" width="10" height="10" patternUnits="userSpaceOnUse">
                                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#pricing-grid)" />
                        </svg>
                    </div>
                    <div className="relative z-10 text-center md:text-left">
                        <h3 className="text-4xl font-display font-black mb-2 tracking-tighter">Availability</h3>
                        <p className="text-blue-200 text-sm font-bold uppercase tracking-[0.2em]">Contact us for immediate dispatch</p>
                    </div>
                    <div className="relative z-10 flex gap-12 text-center">
                        <div>
                            <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">Conventional</span>
                            <span className="text-4xl font-display font-black text-brand-green">₹{bull.pricing.conventional.toLocaleString()}</span>
                        </div>
                        {bull.pricing.sexed && (
                             <div>
                                <span className="block text-gray-400 text-[10px] font-black uppercase tracking-widest mb-2">Sexed Semen</span>
                                <span className="text-4xl font-display font-black text-pink-400">₹{bull.pricing.sexed.toLocaleString()}</span>
                            </div>
                        )}
                    </div>
                    <Link to="/contact" className="relative z-10 bg-white text-brand-darkBlue px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-green hover:text-white transition-all shadow-xl active:scale-95">
                        Place Your Order
                    </Link>
                 </div>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>
    </div>
  );
};

export default BullDetail;