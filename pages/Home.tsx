import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Award } from 'lucide-react';
import BullCard from '../components/BullCard';
import { BULLS } from '../constants';

const Home: React.FC = () => {
  // Select top 3 bulls for the homepage
  const featuredBulls = BULLS.slice(0, 3);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center bg-gray-900">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/id/237/1920/1080" 
            alt="Holstein Cow in Field" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <span className="bg-brand-green text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide mb-6 inline-block uppercase">
              Proven Performance
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Elite Genetics <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-green-400">
                Livestock Success
              </span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Unlock the genetic potential of your herd with our world-class Holstein sires. 
              Top rankings in TPI, Milk, and Udder health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/portfolio" 
                className="bg-brand-green hover:bg-brand-darkGreen text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center gap-2"
              >
                View Sire Portfolio <ArrowRight size={20} />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white px-8 py-4 rounded-lg font-bold text-lg transition-all flex items-center justify-center"
              >
                Enquire Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Why Partner With Us?</h2>
            <p className="text-gray-600 text-lg">We deliver scientifically proven genetics to maximize your dairy farm profitability.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <Award className="w-10 h-10 text-brand-blue" />, 
                title: "Top Ranking Bulls", 
                desc: "Sires sourced from globally proven USA & European bloodlines." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10 text-brand-green" />, 
                title: "A2A2 & Polled", 
                desc: "Specialized genetics including A2A2 Beta Casein and Polled traits." 
              },
              { 
                icon: <TrendingUp className="w-10 h-10 text-brand-blue" />, 
                title: "Production & Health", 
                desc: "Balanced breeding for high milk yield, strong udders, and better fertility." 
              },
              { 
                icon: <CheckCircle2 className="w-10 h-10 text-brand-green" />, 
                title: "Trusted Partner", 
                desc: "Serving progressive dairy farms with transparent data and support." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1">
                <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center shadow-sm mb-6 mx-auto md:mx-0">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center md:text-left">{feature.title}</h3>
                <p className="text-gray-600 text-center md:text-left">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sires */}
      <section className="py-20 bg-slate-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <span className="text-brand-blue font-bold tracking-wider uppercase text-sm">Our Portfolio</span>
              <h2 className="text-4xl font-display font-bold text-gray-900 mt-2">Featured Holstein Sires</h2>
            </div>
            <Link to="/portfolio" className="hidden md:flex items-center gap-2 text-brand-blue font-bold hover:text-brand-darkBlue transition-colors">
              View All Bulls <ArrowRight size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBulls.map(bull => (
              <BullCard key={bull.id} bull={bull} />
            ))}
          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/portfolio" className="inline-flex items-center gap-2 text-brand-blue font-bold hover:text-brand-darkBlue transition-colors">
              View All Bulls <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-16 bg-brand-darkBlue text-white">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-display font-bold mb-6">Ready to improve your herd's performance?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">Contact us today for availability and expert breeding advice.</p>
            <Link to="/contact" className="inline-block bg-brand-green hover:bg-brand-darkGreen text-white px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all">
                Get in Touch
            </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;