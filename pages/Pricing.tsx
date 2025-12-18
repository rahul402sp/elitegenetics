import React from 'react';
import { PRICING_LIST } from '../constants';
import { AlertCircle, FileText, Download, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-slate-50 py-16 sm:py-24 border-b border-slate-100 px-4">
        <div className="container mx-auto text-center">
          <span className="text-brand-blue font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[9px] sm:text-[10px] mb-4 sm:mb-6 block">Transparent Value</span>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-black text-brand-black mb-6 sm:mb-8 tracking-tighter uppercase italic">
            Price <span className="text-brand-green">Index</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto font-medium">
            Strategic pricing for elite-tier genomic straws. Updated for the August 2025 genetic evaluation cycle.
          </p>
        </div>
      </section>

      {/* Pricing Table Section */}
      <section className="py-16 sm:py-32 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white rounded-[2rem] sm:rounded-[4rem] shadow-[0_40px_80px_-20px_rgba(0,113,188,0.1)] border border-slate-100 overflow-hidden mb-12 sm:mb-20">
              <div className="overflow-x-auto -mx-1">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="bg-brand-black text-white">
                      <th className="px-6 sm:px-12 py-6 sm:py-10 font-display font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em]">Sire Name</th>
                      <th className="px-6 sm:px-12 py-6 sm:py-10 font-display font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-right">Conventional (₹)</th>
                      <th className="px-6 sm:px-12 py-6 sm:py-10 font-display font-black text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-right">Sexed Ultra 4M (₹)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-50">
                    {PRICING_LIST.map((item, idx) => (
                      <tr key={idx} className="hover:bg-brand-blue/[0.02] transition-colors group">
                        <td className="px-6 sm:px-12 py-6 sm:py-8">
                          <span className="text-lg sm:text-2xl font-display font-black text-brand-black group-hover:text-brand-blue transition-colors uppercase italic">{item.bullName}</span>
                          <div className="flex gap-2 mt-1 sm:mt-2">
                             <div className="h-1 w-6 sm:w-8 bg-brand-green rounded-full opacity-40"></div>
                          </div>
                        </td>
                        <td className="px-6 sm:px-12 py-6 sm:py-8 text-right">
                          <span className="text-lg sm:text-2xl font-mono font-bold text-gray-900">₹{item.conventional.toLocaleString()}</span>
                        </td>
                        <td className="px-6 sm:px-12 py-6 sm:py-8 text-right">
                          {item.sexed ? (
                            <span className="text-lg sm:text-2xl font-mono font-bold text-brand-green">₹{item.sexed.toLocaleString()}</span>
                          ) : (
                            <span className="text-gray-300 font-bold uppercase text-[9px] sm:text-[10px] tracking-widest">N/A</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Compliance Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
              <div className="bg-slate-900 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 sm:p-10 opacity-10">
                  <AlertCircle size={80} className="sm:size-100" />
                </div>
                <h3 className="text-xl sm:text-2xl font-display font-black mb-6 sm:mb-8 uppercase tracking-tight flex items-center gap-4 italic">
                  <span className="w-8 sm:w-10 h-1 bg-brand-green"></span> Compliance Requirements
                </h3>
                <ul className="space-y-4 sm:space-y-6">
                  {[
                    "Valid INAPH Tag ID is mandatory for all sales.",
                    "Semen is delivered via strict nitrogen cold chain.",
                    "Volume discounts available for verified herd programs.",
                    "Returns are not accepted once the seal is broken."
                  ].map((text, i) => (
                    <li key={i} className="flex items-start gap-4 sm:gap-5 text-gray-400 font-medium text-sm sm:text-base">
                      <CheckCircle size={18} className="text-brand-green flex-shrink-0 mt-1" />
                      <span>{text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-brand-blue/5 rounded-[2rem] sm:rounded-[3rem] p-8 sm:p-12 border border-brand-blue/10 flex flex-col justify-center text-center">
                 <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-black mb-4 sm:mb-6 uppercase tracking-tight">Need a Formal Quote?</h3>
                 <p className="text-sm sm:text-lg text-gray-500 mb-8 sm:mb-10 font-medium leading-relaxed">Our specialists can provide a customized genetic roadmap and volume-based pricing for your farm operation.</p>
                 <Link to="/contact" className="bg-brand-blue hover:bg-brand-darkBlue text-white px-8 sm:px-12 py-4 sm:py-6 rounded-xl sm:rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] sm:text-[11px] transition-all shadow-xl hover:scale-105 inline-block">
                   Request Official Invoice
                 </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Pricing;