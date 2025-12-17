import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Share2, Activity, Droplets, Heart } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
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
      <div className="bg-gray-900 text-white pt-12 pb-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 bg-gradient-to-l from-brand-blue to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to Portfolio
          </Link>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
            <div>
              <div className="flex gap-3 mb-4">
                 {bull.badges.map((badge, idx) => (
                    <span key={idx} className="bg-brand-green text-xs font-bold px-3 py-1 rounded text-white uppercase">{badge}</span>
                 ))}
              </div>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-2 uppercase">{bull.name}</h1>
              <p className="text-xl text-gray-400 font-mono mb-4">{bull.naab} | {bull.regNo}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-2 text-sm text-gray-300 font-medium">
                <div>DOB: <span className="text-white">{bull.dob}</span></div>
                <div>Beta Casein: <span className="text-white">{bull.betaCasein}</span></div>
                <div>Kappa Casein: <span className="text-white">{bull.kappaCasein}</span></div>
                {bull.aaa && <div>aAa: <span className="text-white">{bull.aaa}</span></div>}
              </div>
              {bull.geneticCodes && (
                  <div className="mt-2 text-xs text-gray-500 font-mono">
                      {bull.geneticCodes}
                  </div>
              )}
            </div>
            <div className="flex gap-3">
                <button className="bg-white/10 hover:bg-white/20 border border-white/20 px-4 py-2 rounded text-sm font-bold flex items-center gap-2 transition-all">
                    <Share2 size={16} /> Share
                </button>
                <Link to="/contact" className="bg-brand-blue hover:bg-brand-darkBlue px-6 py-2 rounded text-sm font-bold transition-all shadow-lg shadow-blue-900/50">
                    Enquire Now
                </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-20 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Image, Pedigree, Key Stats */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <img src={bull.image} alt={bull.name} className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <div className="flex justify-between items-center border-b border-gray-100 pb-4 mb-4">
                            <div>
                                <span className="text-sm text-gray-500 uppercase font-bold">GTPI</span>
                                <div className="text-3xl font-bold text-brand-blue">+{bull.stats.gtpi}</div>
                            </div>
                            <div className="text-right">
                                <span className="text-sm text-gray-500 uppercase font-bold">Net Merit $</span>
                                <div className="text-3xl font-bold text-gray-800">${bull.stats.nm || bull.evaluations?.production.nm}</div>
                            </div>
                        </div>
                        
                        {/* Pedigree Tree */}
                        <div className="space-y-4">
                             <h3 className="font-bold text-gray-900 uppercase text-sm tracking-wide">Pedigree</h3>
                             <div className="relative pl-4 border-l-2 border-brand-green space-y-3">
                                {bull.extendedPedigree ? (
                                    <>
                                        <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">Sire</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.extendedPedigree.sire}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">Dam</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.extendedPedigree.dam}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">MGS</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.extendedPedigree.mgs}</span>
                                        </div>
                                         <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">MGD</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.extendedPedigree.mgd}</span>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">Sire</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.pedigree.sire}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">Dam</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.pedigree.dam}</span>
                                        </div>
                                        <div>
                                            <span className="text-[10px] text-gray-400 uppercase block">MGS</span>
                                            <span className="font-semibold text-sm text-gray-800 block">{bull.pedigree.mgs}</span>
                                        </div>
                                    </>
                                )}
                             </div>
                        </div>
                    </div>
                </div>

                {/* Legacy Radar Chart (Only if no full linear traits) */}
                {!bull.linearTraitsFull && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Trait Overview</h3>
                        <div className="h-[300px] w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <RadarChart cx="50%" cy="50%" outerRadius="70%" data={bull.traits}>
                                <PolarGrid />
                                <PolarAngleAxis dataKey="trait" tick={{ fontSize: 12 }} />
                                <PolarRadiusAxis angle={30} domain={[0, 100]} />
                                <Radar
                                    name={bull.name}
                                    dataKey="value"
                                    stroke="#0056b3"
                                    fill="#0056b3"
                                    fillOpacity={0.4}
                                />
                                </RadarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                )}
            </div>

            {/* Right Column: Detailed Stats */}
            <div className="lg:col-span-2 space-y-8">
                {/* Marketing Copy */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">Why {bull.name}?</h2>
                    <p className="text-gray-600 leading-relaxed text-lg mb-6">
                        {bull.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        {bull.badges.map((b, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                                <Check size={16} className="text-brand-green" /> {b}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CDCB EVALUATION TABLES */}
                {bull.evaluations && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        
                        {/* Production Stats */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                             <div className="flex items-center gap-2 mb-4">
                                <Droplets className="text-brand-blue" size={20} />
                                <h3 className="text-lg font-bold text-gray-900">Production</h3>
                             </div>
                             <div className="space-y-3">
                                 <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                     <span className="text-gray-600 text-sm">Milk</span>
                                     <span className="font-bold text-gray-900">+{bull.evaluations.production.milk}</span>
                                 </div>
                                 <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                     <span className="text-gray-600 text-sm">Fat</span>
                                     <span className="font-bold text-gray-900">+{bull.evaluations.production.fat} ({bull.evaluations.production.fatPct}%)</span>
                                 </div>
                                 <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                     <span className="text-gray-600 text-sm">Protein</span>
                                     <span className="font-bold text-gray-900">+{bull.evaluations.production.prot} ({bull.evaluations.production.protPct}%)</span>
                                 </div>
                                 <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                     <span className="text-gray-600 text-sm">CFP</span>
                                     <span className="font-bold text-gray-900">+{bull.evaluations.production.cfp}</span>
                                 </div>
                                 <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                     <span className="text-gray-600 text-sm">Net Merit $</span>
                                     <span className="font-bold text-brand-green">+{bull.evaluations.production.nm}</span>
                                 </div>
                                 <div className="flex justify-between items-center py-1 border-b border-gray-50">
                                     <span className="text-gray-600 text-sm">Cheese Merit $</span>
                                     <span className="font-bold text-gray-900">+{bull.evaluations.production.cm}</span>
                                 </div>
                                 <div className="flex justify-between items-center py-1">
                                     <span className="text-gray-600 text-sm">Dairy Wellness $</span>
                                     <span className="font-bold text-gray-900">+{bull.evaluations.production.dwp}</span>
                                 </div>
                             </div>
                        </div>

                        {/* Health & Functional */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                             <div className="flex items-center gap-2 mb-4">
                                <Heart className="text-red-500" size={20} />
                                <h3 className="text-lg font-bold text-gray-900">Health & Fertility</h3>
                             </div>
                             <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                                 <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-600">DPR</span>
                                     <span className="font-bold">{bull.evaluations.health.dpr}</span>
                                 </div>
                                 <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-600">PL</span>
                                     <span className="font-bold">+{bull.evaluations.health.pl}</span>
                                 </div>
                                 <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-600">SCS</span>
                                     <span className="font-bold">{bull.evaluations.health.scs}</span>
                                 </div>
                                 <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-600">LIV</span>
                                     <span className="font-bold">+{bull.evaluations.health.liv}</span>
                                 </div>
                                 <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-600">Mastitis</span>
                                     <span className="font-bold">+{bull.evaluations.health.mastitis}</span>
                                 </div>
                                  <div className="flex justify-between items-center text-sm">
                                     <span className="text-gray-600">Feed Eff.</span>
                                     <span className="font-bold">{bull.evaluations.health.fe}</span>
                                 </div>
                             </div>
                             <div className="mt-4 pt-4 border-t border-gray-100">
                                <h4 className="text-xs font-bold text-gray-400 uppercase mb-2">Calving</h4>
                                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sire CE</span>
                                        <span className="font-bold">{bull.evaluations.calving.sce}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Dtr CE</span>
                                        <span className="font-bold">{bull.evaluations.calving.dce}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Sire SB</span>
                                        <span className="font-bold">{bull.evaluations.calving.ssb}%</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-gray-600">Dtr SB</span>
                                        <span className="font-bold">{bull.evaluations.calving.dsb}%</span>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                )}

                {/* Linear Traits Visualizer */}
                {bull.linearTraitsFull && (
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                        <div className="flex items-center gap-2 mb-6">
                            <Activity className="text-purple-600" size={24} />
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">Linear Traits</h3>
                                <p className="text-xs text-gray-500">
                                    PTAT: <span className="font-bold text-gray-800">+{bull.evaluations?.type.ptat}</span> • 
                                    UDC: <span className="font-bold text-gray-800">+{bull.evaluations?.type.udc}</span> • 
                                    FLC: <span className="font-bold text-gray-800">{bull.evaluations?.type.flc}</span>
                                </p>
                            </div>
                        </div>

                        <div className="space-y-1">
                            {/* Header Row */}
                            <div className="grid grid-cols-12 gap-2 text-xs font-bold text-gray-400 uppercase mb-2 text-center">
                                <div className="col-span-3 text-left">Trait</div>
                                <div className="col-span-2 text-right px-2">Low</div>
                                <div className="col-span-5">Profile</div>
                                <div className="col-span-2 text-left px-2">High</div>
                            </div>

                            {bull.linearTraitsFull.map((trait, idx) => {
                                // Calculate position: -2 to +2 range typically, normalize to percentage (0-100)
                                // Let's assume range is -3 to +3 for visual safety
                                const normalizedValue = Math.min(Math.max((trait.value + 3) / 6 * 100, 0), 100);
                                const isPositive = trait.value >= 0;
                                const barWidth = Math.abs(trait.value) / 3 * 50; // Width relative to half center

                                return (
                                    <div key={idx} className="grid grid-cols-12 gap-2 text-sm items-center hover:bg-gray-50 py-1 rounded">
                                        <div className="col-span-3 font-medium text-gray-700 truncate" title={trait.trait}>{trait.trait}</div>
                                        <div className="col-span-2 text-right text-xs text-gray-400 truncate px-2">{trait.labelLow}</div>
                                        
                                        {/* Bar Visual */}
                                        <div className="col-span-5 relative h-6 bg-gray-100 rounded-sm">
                                            {/* Center Line */}
                                            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 z-10"></div>
                                            
                                            {/* The Bar */}
                                            <div 
                                                className={`absolute top-1 bottom-1 transition-all ${isPositive ? 'bg-blue-500' : 'bg-red-400'}`}
                                                style={{
                                                    left: isPositive ? '50%' : `calc(50% - ${Math.min(barWidth, 50)}%)`,
                                                    width: `${Math.min(barWidth, 50)}%`
                                                }}
                                            ></div>
                                            
                                            {/* Value Label */}
                                            <span 
                                                className="absolute top-1/2 -translate-y-1/2 text-[10px] font-bold z-20 px-1 text-gray-700 shadow-sm"
                                                style={{
                                                    left: isPositive ? `calc(50% + ${Math.min(barWidth, 50)}% + 2px)` : 'auto',
                                                    right: isPositive ? 'auto' : `calc(50% + ${Math.min(barWidth, 50)}% + 2px)`
                                                }}
                                            >
                                                {trait.value > 0 ? '+' : ''}{trait.value}
                                            </span>
                                        </div>

                                        <div className="col-span-2 text-left text-xs text-gray-400 truncate px-2">{trait.labelHigh}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}


                 {/* Pricing Block */}
                 <div className="bg-gray-900 rounded-2xl p-8 text-white flex flex-col md:flex-row justify-between items-center gap-6">
                    <div>
                        <h3 className="text-2xl font-bold mb-1">Pricing</h3>
                        <p className="text-gray-400 text-sm">Subject to availability</p>
                    </div>
                    <div className="flex gap-8 text-center">
                        <div>
                            <span className="block text-gray-400 text-xs uppercase mb-1">Conventional</span>
                            <span className="text-2xl font-bold text-brand-green">₹{bull.pricing.conventional}</span>
                        </div>
                        {bull.pricing.sexed && (
                             <div>
                                <span className="block text-gray-400 text-xs uppercase mb-1">Sexed</span>
                                <span className="text-2xl font-bold text-pink-400">₹{bull.pricing.sexed}</span>
                            </div>
                        )}
                    </div>
                    <Link to="/contact" className="bg-white text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                        Order Semen
                    </Link>
                 </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BullDetail;