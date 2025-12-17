import React from 'react';
import { Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">About Elite Genetics</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Committed to advancing the Indian dairy industry through superior genetics and proven breeding strategies.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
                <img 
                    src="https://picsum.photos/id/400/800/600" 
                    alt="Dairy Farm" 
                    className="rounded-2xl shadow-xl w-full"
                />
            </div>
            <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">Who We Are</h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                    Elite Genetics LTD is an Indian breeding and genetics company based in VPO Mana Singh Wala, District Ferozpur, Punjab. We specialize in delivering elite Holstein genetics sourced from globally proven bloodlines.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                    Our mission is to help dairy farmers improve productivity, longevity, udder health, and profitability through scientifically proven breeding solutions. We bridge the gap between international genetic excellence and local farming needs.
                </p>
                <Link to="/portfolio" className="text-brand-blue font-bold hover:text-brand-darkBlue flex items-center gap-2">
                    Explore Our Portfolio <Target size={18} />
                </Link>
            </div>
        </div>

        <div className="bg-slate-50 rounded-3xl p-8 md:p-12">
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="inline-flex p-4 rounded-full bg-blue-100 text-brand-blue mb-4">
                        <TrendingUp size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Genetic Progress</h3>
                    <p className="text-gray-600">Focusing on high TPI, Net Merit, and health traits to ensure every generation is better than the last.</p>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="inline-flex p-4 rounded-full bg-green-100 text-brand-green mb-4">
                        <Target size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Accuracy</h3>
                    <p className="text-gray-600">Relying on genomic testing and reliable daughter data from the USA and Europe.</p>
                </div>
                 <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                    <div className="inline-flex p-4 rounded-full bg-purple-100 text-purple-600 mb-4">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Farmer First</h3>
                    <p className="text-gray-600">Your profitability is our priority. We provide support and consultation for optimal sire selection.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default About;