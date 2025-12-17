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
      <section className="relative min-h-[90vh] flex items-center bg-gray-900 overflow-hidden">
        {/* Abstract Background Elements */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left Column: Text Content */}
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-brand-green px-4 py-1.5 rounded-full text-xs font-bold tracking-widest mb-8 uppercase animate-fade-in">
                <Award size={14} className="animate-pulse" /> Pioneering Genetic Progress
              </div>
              <h1 className="text-5xl md:text-8xl font-display font-black leading-[1.05] mb-8 tracking-tighter">
                Elite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-blue-400 to-brand-blue">
                  Genetics
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg">
                Your trusted partner for globally proven Holstein bloodlines. We deliver elite-tier genetics that maximize production, longevity, and overall herd profitability.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link 
                  to="/portfolio" 
                  className="bg-brand-green hover:bg-brand-darkGreen text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-2xl shadow-brand-green/20 hover:-translate-y-1 active:scale-95"
                >
                  Explore Sires <ArrowRight size={22} />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all flex items-center justify-center hover:border-white/40 active:scale-95"
                >
                  Consult an Expert
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="mt-16 flex items-center gap-8 grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">3300+</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">GTPI Range</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">Global</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Standard</span>
                </div>
                <div className="h-8 w-px bg-white/10"></div>
                <div className="flex flex-col">
                    <span className="text-2xl font-bold text-white">100%</span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold">Traceable</span>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Cow Picture */}
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-10 bg-brand-green/10 rounded-full blur-[100px] group-hover:bg-brand-blue/10 transition-colors duration-1000"></div>
              
              {/* Image Container with Custom Shape/Mask */}
              <div className="relative z-10 w-full max-w-[600px] mx-auto">
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-square xl:aspect-[4/5]">
                  <img 
                    src="https://images.unsplash.com/photo-1545468843-2796674f1df5?q=80&w=2670&auto=format&fit=crop" 
                    alt="Elite Holstein Cow Champion" 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2000ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Trait Badges */}
                <div className="absolute -top-6 -left-6 bg-white/10 backdrop-blur-xl p-4 rounded-3xl border border-white/20 shadow-2xl animate-bounce-slow">
                   <div className="bg-brand-green w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-2 shadow-lg">
                      <TrendingUp size={24} />
                   </div>
                   <div className="text-[10px] text-brand-green font-black uppercase tracking-widest">High Milk</div>
                </div>

                <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 hidden md:flex items-center gap-5 group-hover:translate-y-[-10px] transition-transform duration-500">
                  <div className="w-14 h-14 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                    <ShieldCheck size={32} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-black text-lg leading-tight uppercase tracking-tight">Elite Health</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-wider">A2A2 & Polled Available</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Advantage</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 tracking-tight">Excellence by Design</h2>
            <p className="text-gray-600 text-lg leading-relaxed">We provide more than just semen straws; we provide the foundation for your herd's future profitability and success.</p>
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
              <div key={idx} className="group p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:shadow-[0_40px_80px_-20px_rgba(0,113,188,0.1)] transition-all duration-500">
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center shadow-sm mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sires */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3 block">Premier Selection</span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 tracking-tighter">Elite Holstein Sires</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-2xl shadow-sm border border-slate-200 text-brand-blue font-bold hover:bg-brand-blue hover:text-white hover:shadow-xl transition-all group">
              View All Sires <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {featuredBulls.map(bull => (
              <BullCard key={bull.id} bull={bull} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-32 bg-brand-darkBlue text-white relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-[-50%] right-[-10%] w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-30%] left-[-10%] w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-10 tracking-tighter">Future-Proof Your Herd</h2>
            <p className="text-xl md:text-2xl text-blue-100/80 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Join the elite group of dairy enterprises using our globally proven genetics. Contact our technical team for a personalized breeding plan.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-14 py-6 rounded-[2rem] font-bold text-xl shadow-2xl shadow-brand-green/30 transition-all hover:-translate-y-2 active:scale-95">
                  Connect With Us
              </Link>
              <Link to="/pricing" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-14 py-6 rounded-[2rem] font-bold text-xl backdrop-blur-md transition-all hover:border-white/40 active:scale-95">
                  View Price List
              </Link>
            </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;