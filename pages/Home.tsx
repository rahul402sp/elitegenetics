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
      <section className="relative min-h-[95vh] flex items-center bg-[#001a2c] overflow-hidden">
        {/* Modern Background Decorations */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[5%] w-[50%] h-[50%] bg-brand-blue/20 rounded-full blur-[120px]"></div>
          <div className="absolute -bottom-[10%] -right-[5%] w-[40%] h-[40%] bg-brand-green/10 rounded-full blur-[100px]"></div>
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-brand-blue/5 rounded-full blur-[80px]"></div>
        </div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            {/* Left Column: Value Proposition */}
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-xl border border-white/10 text-brand-green px-5 py-2 rounded-full text-xs font-bold tracking-[0.2em] mb-10 uppercase animate-fade-in shadow-2xl">
                <Award size={14} className="animate-pulse" /> World-Class Bovine Genetics
              </div>
              
              <h1 className="text-6xl md:text-8xl font-display font-black leading-[1] mb-8 tracking-tight">
                Elite <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-brand-blue to-blue-400">
                  Performance
                </span>
              </h1>
              
              <p className="text-xl text-gray-400 mb-12 leading-relaxed max-w-lg font-medium">
                Transforming the Indian dairy landscape with globally proven Holstein genetics. 
                Superior milk yield, exceptional udders, and unmatched longevity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/portfolio" 
                  className="bg-brand-green hover:bg-brand-darkGreen text-white px-10 py-5 rounded-[1.25rem] font-bold text-lg transition-all flex items-center justify-center gap-3 shadow-2xl shadow-brand-green/30 hover:-translate-y-1 active:scale-95 group"
                >
                  View Sire Portfolio <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  to="/contact" 
                  className="bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-[1.25rem] font-bold text-lg transition-all flex items-center justify-center hover:border-white/40 active:scale-95"
                >
                  Contact Expert
                </Link>
              </div>

              {/* Statistics / Trust Bar */}
              <div className="mt-20 flex items-center gap-10 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                <div>
                  <div className="text-3xl font-display font-black text-white">+3300</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">GTPI Elite</div>
                </div>
                <div className="h-10 w-px bg-white/10"></div>
                <div>
                  <div className="text-3xl font-display font-black text-brand-green">100%</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Proven Accuracy</div>
                </div>
                <div className="h-10 w-px bg-white/10"></div>
                <div>
                  <div className="text-3xl font-display font-black text-blue-400">AITotal</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold mt-1">Global Partner</div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Cow Image */}
            <div className="lg:w-1/2 relative">
              {/* Outer Glow */}
              <div className="absolute -inset-10 bg-brand-blue/20 rounded-full blur-[120px] animate-pulse"></div>
              
              <div className="relative z-10 w-full max-w-[620px] mx-auto group">
                {/* Image Frame */}
                <div className="relative rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.6)] border-2 border-white/10 aspect-[4/5] sm:aspect-square md:aspect-[4/3] lg:aspect-square">
                  <img 
                    src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2502&auto=format&fit=crop" 
                    alt="Champion Holstein Cow" 
                    className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[2.5s] ease-out"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001a2c]/60 via-transparent to-transparent pointer-events-none"></div>
                </div>

                {/* Floating Metric Badges */}
                <div className="absolute -top-8 -right-8 bg-brand-darkBlue/80 backdrop-blur-2xl p-6 rounded-[2.5rem] border border-white/20 shadow-2xl animate-float hidden md:block">
                  <div className="bg-brand-green w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-3 shadow-lg shadow-brand-green/20">
                    <TrendingUp size={24} />
                  </div>
                  <div className="text-xs font-black text-white uppercase tracking-widest leading-none">High Productivity</div>
                  <div className="text-[10px] text-brand-green font-bold mt-1 uppercase tracking-widest">Global Ranking #1</div>
                </div>

                <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[2.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-100 hidden md:flex items-center gap-5 transition-all duration-500 group-hover:-translate-y-2">
                  <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue">
                    <ShieldCheck size={36} />
                  </div>
                  <div>
                    <div className="text-gray-900 font-black text-xl leading-none uppercase tracking-tight">Elite Health</div>
                    <div className="text-gray-500 text-xs font-bold uppercase tracking-[0.15em] mt-2">A2A2 & Polled Lines</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Highlights Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-brand-blue font-bold tracking-[0.4em] uppercase text-xs mb-4 block">Our Advantage</span>
            <h2 className="text-4xl md:text-5xl font-display font-black text-gray-900 mb-8 tracking-tight italic">Precision Breeding. Guaranteed Progress.</h2>
            <p className="text-gray-600 text-lg leading-relaxed font-medium">
              We provide the genetic foundation for modern, profitable dairy farming. Our sires are selected for balanced breeding goals that deliver results in Indian conditions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { 
                icon: <Award className="w-10 h-10 text-brand-blue" />, 
                title: "Elite Ranking Bulls", 
                desc: "Handpicked sires from globally proven USA & European AITotal bloodlines." 
              },
              { 
                icon: <ShieldCheck className="w-10 h-10 text-brand-green" />, 
                title: "Trait Specialization", 
                desc: "Leading genetics for A2A2 Beta Casein and Polled characteristics." 
              },
              { 
                icon: <TrendingUp className="w-10 h-10 text-brand-blue" />, 
                title: "Production Prowess", 
                desc: "Engineered for maximum milk solids, protein, and fat percentages." 
              },
              { 
                icon: <CheckCircle2 className="w-10 h-10 text-brand-green" />, 
                title: "Technical Support", 
                desc: "Expert mating advice and technical assistance for all dairy partners." 
              },
            ].map((feature, idx) => (
              <div key={idx} className="group p-12 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:shadow-[0_50px_100px_-20px_rgba(0,113,188,0.12)] transition-all duration-500">
                <div className="bg-white w-20 h-20 rounded-3xl flex items-center justify-center shadow-sm mb-10 group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-5 tracking-tight leading-tight">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sires Section */}
      <section className="py-32 bg-slate-50 border-y border-slate-200 relative overflow-hidden">
        {/* Subtle Decorative Grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
          <svg width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" stroke="black" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div>
              <span className="text-brand-blue font-bold tracking-widest uppercase text-xs mb-3 block">Premium Inventory</span>
              <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 tracking-tighter">Elite Holstein Sires</h2>
            </div>
            <Link to="/portfolio" className="inline-flex items-center gap-4 bg-white px-10 py-5 rounded-[1.5rem] shadow-sm border border-slate-200 text-brand-blue font-bold hover:bg-brand-blue hover:text-white hover:shadow-2xl transition-all duration-300 group">
              Explore Full Portfolio <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredBulls.map(bull => (
              <BullCard key={bull.id} bull={bull} />
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="py-40 bg-[#001a2c] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-blue/10 to-transparent"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-black mb-12 tracking-tighter italic">Secure Your Herd's Future.</h2>
            <p className="text-xl md:text-3xl text-blue-100/60 mb-20 max-w-4xl mx-auto leading-relaxed font-medium">
              Join the elite league of dairy breeders using our world-class genetic solutions. Contact our expert team for a customized breeding strategy.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-16 py-7 rounded-[2.5rem] font-bold text-2xl shadow-2xl shadow-brand-green/30 transition-all hover:-translate-y-2 active:scale-95">
                  Connect With Us Now
              </Link>
              <Link to="/pricing" className="bg-white/5 hover:bg-white/10 text-white border border-white/20 px-16 py-7 rounded-[2.5rem] font-bold text-2xl backdrop-blur-md transition-all hover:border-white/40 active:scale-95">
                  View Price List
              </Link>
            </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;