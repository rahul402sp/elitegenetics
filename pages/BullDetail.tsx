import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Check, Download, Share2 } from 'lucide-react';
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
              <h1 className="text-5xl md:text-6xl font-display font-bold mb-2">{bull.name}</h1>
              <p className="text-xl text-gray-400 font-mono">{bull.code} | {bull.regNo}</p>
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
            {/* Left Column - Image & Quick Stats */}
            <div className="lg:col-span-1 space-y-8">
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                    <img src={bull.image} alt={bull.name} className="w-full h-auto object-cover" />
                    <div className="p-6">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Genetic Summary</h3>
                        <div className="grid grid-cols-2 gap-y-4">
                            <div>
                                <span className="block text-xs text-gray-500 uppercase">GTPI</span>
                                <span className="text-2xl font-bold text-brand-blue">+{bull.stats.gtpi}</span>
                            </div>
                            <div>
                                <span className="block text-xs text-gray-500 uppercase">Milk</span>
                                <span className="text-2xl font-bold text-gray-800">+{bull.stats.milk}</span>
                            </div>
                             <div>
                                <span className="block text-xs text-gray-500 uppercase">UDC</span>
                                <span className="text-xl font-bold text-gray-800">+{bull.stats.udc.toFixed(2)}</span>
                            </div>
                             <div>
                                <span className="block text-xs text-gray-500 uppercase">SCS</span>
                                <span className="text-xl font-bold text-gray-800">{bull.stats.scs}</span>
                            </div>
                             <div>
                                <span className="block text-xs text-gray-500 uppercase">DPR</span>
                                <span className="text-xl font-bold text-gray-800">{bull.stats.dpr > 0 ? '+' : ''}{bull.stats.dpr}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                     <h3 className="font-bold text-brand-darkBlue mb-4">Pedigree</h3>
                     <ul className="space-y-3 text-sm">
                        <li className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase">Sire</span>
                            <span className="font-semibold text-gray-900">{bull.pedigree.sire}</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase">Dam</span>
                            <span className="font-semibold text-gray-900">{bull.pedigree.dam}</span>
                        </li>
                         <li className="flex flex-col">
                            <span className="text-xs text-gray-500 uppercase">MGS</span>
                            <span className="font-semibold text-gray-900">{bull.pedigree.mgs}</span>
                        </li>
                     </ul>
                </div>
            </div>

            {/* Right Column - Details & Charts */}
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

                 {/* Visualization */}
                 <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Trait Profile</h3>
                    <div className="h-[350px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={bull.traits}>
                            <PolarGrid />
                            <PolarAngleAxis dataKey="trait" />
                            <PolarRadiusAxis angle={30} domain={[0, 100]} />
                            <Radar
                                name={bull.name}
                                dataKey="value"
                                stroke="#0056b3"
                                fill="#0056b3"
                                fillOpacity={0.4}
                            />
                            <Tooltip />
                            </RadarChart>
                        </ResponsiveContainer>
                    </div>
                    <p className="text-center text-sm text-gray-400 mt-2">* Visualization relative to breed average</p>
                 </div>

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