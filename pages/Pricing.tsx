import React from 'react';
import { PRICING_LIST } from '../constants';
import { AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Pricing: React.FC = () => {
  return (
    <div className="bg-white min-h-screen pt-12 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Pricing & Availability</h1>
            <p className="text-gray-600 text-lg">Transparent pricing for premium genetics.</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden mb-12">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-brand-darkBlue text-white">
                    <th className="p-4 md:p-6 font-bold text-lg">Bull Name</th>
                    <th className="p-4 md:p-6 font-bold text-lg text-right">Conventional (₹)</th>
                    <th className="p-4 md:p-6 font-bold text-lg text-right">Sexed (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {PRICING_LIST.map((item, idx) => (
                    <tr key={idx} className="hover:bg-blue-50 transition-colors">
                      <td className="p-4 md:p-6 font-bold text-gray-900">{item.bullName}</td>
                      <td className="p-4 md:p-6 text-right text-gray-700 font-mono">
                        {item.conventional.toLocaleString()}
                      </td>
                      <td className="p-4 md:p-6 text-right font-mono font-medium">
                        {item.sexed ? (
                          <span className="text-pink-600">{item.sexed.toLocaleString()}</span>
                        ) : (
                          <span className="text-gray-300">-</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 flex items-start gap-4">
            <AlertCircle className="text-brand-blue flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-bold text-brand-darkBlue mb-2">Terms & Conditions</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
                <li>Pricing is subject to change without prior notice.</li>
                <li><strong>INAPH Tag ID</strong> is mandatory for the sale of semen.</li>
                <li>Semen straws once sold will be considered as the final sale; no returns or exchanges unless damaged on delivery.</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
             <Link to="/contact" className="inline-block bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-3 rounded-lg font-bold shadow-md transition-all">
                Place an Order
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;