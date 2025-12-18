import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, 
  Award, Zap, ChevronRight, Binary, Globe2, 
  Dna, Microscope, ArrowUpRight, BarChart3, Database
} from 'lucide-react';
import BullCard from '../components/BullCard';
import { BULLS } from '../constants';

const Home: React.FC = () => {
  // Featured Bulls: Selection for the portfolio teaser
  const satelliteBull = BULLS.find(b => b.id === 'satellite');
  const otherFeaturedBulls = BULLS.filter(b => b.id !== 'satellite').slice(0, 2);
  const featuredBulls = satelliteBull ? [satelliteBull, ...otherFeaturedBulls] : BULLS.slice(0, 3);

  return (
    <div className="w-full bg-white overflow-x-hidden">
      {/* --- Section 1: The Immersive Elite Hero --- */}
      <section className="relative min-h-[90vh] flex items-center bg-brand-black pt-20 overflow-hidden">
        {/* Advanced Background Layers with Logo Colors */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-full lg:w-3/4 h-full bg-gradient-to-l from-white/10 via-transparent to-transparent"></div>
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }}></div>
          {/* Animated Glows matching logo */}
          <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[140px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[160px]"></div>
          {/* Scientific Grid */}
          <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-7/12 text-white">
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/20 px-6 py-3 rounded-full mb-10 transition-all hover:bg-white/20 cursor-default">
                <span className="flex h-2.5 w-2.5 rounded-full bg-brand-green relative">
                  <span className="animate-ping absolute inset-0 rounded-full bg-brand-green opacity-75"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white">Leading The Genomic Era</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl xl:text-9xl font-display font-black leading-[0.85] mb-10 tracking-tighter uppercase">
                <span className="text-brand-green">Elite</span> <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/70">
                  Genetics.
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-white/80 mb-14 leading-relaxed max-w-2xl font-medium border-l-4 border-brand-green pl-8">
                Your Trusted Partner in Livestock Success. Empowering modern dairy breeders with the world's most elite Holstein bloodlines.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6">
                <Link 
                  to="/portfolio" 
                  className="group bg-brand-green hover:bg-brand-darkGreen text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-4 shadow-[0_25px_50px_-15px_rgba(140,198,63,0.5)] hover:-translate-y-1 active:scale-95"
                >
                  Explore Portfolio <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link 
                  to="/about" 
                  className="bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white px-12 py-6 rounded-2xl font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center hover:border-white/40 active:scale-95"
                >
                  Our Philosophy
                </Link>
              </div>

              {/* Indicators */}
              <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl border-t border-white/10 pt-12">
                <div className="group cursor-default">
                  <div className="text-4xl font-display font-black text-white group-hover:text-brand-green transition-colors">+3301</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-black mt-2">Max GTPI Level</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-display font-black text-white">A2A2</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-black mt-2">Casein Lines</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-display font-black text-white">+$984</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-black mt-2">Wellness Index</div>
                </div>
                <div className="group cursor-default">
                  <div className="text-4xl font-display font-black text-brand-green">100%</div>
                  <div className="text-[9px] uppercase tracking-[0.3em] text-white/50 font-black mt-2">Certified Supply</div>
                </div>
              </div>
            </div>

            <div className="lg:w-5/12 relative hidden lg:block">
              <div className="relative z-10 animate-float">
                <div className="relative rounded-[4rem] overflow-hidden shadow-[0_60px_100px_-20px_rgba(0,0,0,0.3)] border-4 border-white/20 aspect-[4/5] bg-brand-black">
                  <img 
                    src="https://images.unsplash.com/photo-1546445317-29f4545e9d53?q=80&w=2502&auto=format&fit=crop" 
                    alt="Elite Holstein" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-[2s] opacity-90 hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/60 via-transparent to-transparent"></div>
                </div>

                <div className="absolute -bottom-10 -left-10 bg-white p-10 rounded-[3rem] shadow-2xl border-4 border-slate-50 max-w-[340px] transition-transform hover:-rotate-2 duration-500">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="w-16 h-16 bg-brand-blue/10 rounded-2xl flex items-center justify-center text-brand-blue shadow-inner">
                      <Binary size={32} />
                    </div>
                    <div>
                      <h4 className="font-black text-gray-900 uppercase text-[11px] tracking-tight">Verified Genomic Data</h4>
                      <p className="text-[9px] text-brand-green font-black uppercase tracking-widest mt-1">Updated Aug 2025</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-bold">
                    Elite inventory selection based on the top 1% of CDCB genomic rankings worldwide. Precision you can trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 2: Professional Pillars --- */}
      <section className="py-48 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-28 gap-12">
            <div className="max-w-2xl">
              <span className="text-brand-blue font-black tracking-[0.5em] uppercase text-[11px] mb-8 block">Our Methodology</span>
              <h2 className="text-6xl md:text-8xl font-display font-black text-gray-900 tracking-tighter uppercase leading-[0.9]">
                Precision <br />
                <span className="text-brand-green italic">Success</span>
              </h2>
            </div>
            <p className="text-gray-500 max-w-sm font-bold leading-relaxed text-xl border-l-4 border-brand-blue pl-8">
              Elite Genetics LTD. bridges the gap between global innovation and practical, high-profit dairy performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { 
                icon: Database, 
                title: "Data Integrity", 
                color: "text-brand-blue",
                desc: "Every sire is vetted through multi-stage genomic testing, ensuring the traits match the calves delivered." 
              },
              { 
                icon: Globe2, 
                title: "Global Supply", 
                color: "text-brand-green",
                desc: "Direct-import partnerships with global facilities like AITotal for absolute fresh quality straws." 
              },
              { 
                icon: TrendingUp, 
                title: "Profit Alpha", 
                color: "text-brand-blue",
                desc: "We prioritize components and calving ease to maximize the commercial viability of your dairy operation." 
              },
              { 
                icon: ShieldCheck, 
                title: "Bio-Security", 
                color: "text-brand-green",
                desc: "Certified high-health status for every straw, meeting the most rigorous international standards." 
              },
            ].map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div key={idx} className="group p-12 bg-slate-50 rounded-[4rem] border-2 border-transparent hover:border-brand-black/10 hover:bg-white hover:shadow-[0_60px_120px_-30px_rgba(57,130,217,0.1)] transition-all duration-700 flex flex-col">
                  <div className={`w-24 h-24 bg-white rounded-3xl flex items-center justify-center ${feature.color} shadow-lg mb-14 group-hover:scale-110 transition-transform duration-700`}>
                    <IconComponent size={40} />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-8 tracking-tight uppercase leading-[1.1]">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-medium text-[16px] mb-12 flex-grow">{feature.desc}</p>
                  <div className={`h-2 w-20 ${feature.color.replace('text', 'bg')} group-hover:w-full transition-all duration-700 rounded-full opacity-60`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* --- Section 3: Premium Inventory Teaser --- */}
      <section className="py-48 bg-brand-black relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-[0.05] pointer-events-none">
            <div className="grid grid-cols-12 h-full w-full">
                {[...Array(12)].map((_, i) => <div key={i} className="border-r border-white/10 h-full"></div>)}
            </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-32 gap-12">
            <div>
              <span className="text-brand-green font-black tracking-[0.5em] uppercase text-[12px] mb-8 block">Elite Inventory</span>
              <h2 className="text-6xl md:text-9xl font-display font-black text-white tracking-tighter uppercase italic leading-none">The Portfolio</h2>
            </div>
            <Link to="/portfolio" className="group flex items-center gap-6 bg-white text-brand-black px-12 py-7 rounded-[2.5rem] font-black uppercase tracking-[0.3em] text-[12px] hover:bg-white/90 hover:scale-105 transition-all shadow-2xl">
              Browse Catalog <ArrowUpRight size={26} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
            {featuredBulls.map(bull => (
              <div key={bull.id} className="relative group">
                <div className="absolute -inset-2 bg-gradient-to-tr from-white to-brand-green rounded-[3rem] opacity-0 group-hover:opacity-20 blur-2xl transition duration-700"></div>
                <div className="relative">
                    <BullCard bull={bull} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 4: Strategic Partner Spotlight --- */}
      <section className="py-48 bg-white">
        <div className="container mx-auto px-4">
          <div className="bg-slate-50 rounded-[6rem] p-16 lg:p-32 flex flex-col lg:flex-row items-center gap-28 border border-slate-100 hover:shadow-2xl transition-all duration-[1.5s]">
            <div className="lg:w-3/5">
              <h2 className="text-5xl md:text-7xl font-display font-black text-gray-900 tracking-tighter uppercase mb-12 leading-[0.9]">
                Strategic Alliance: <br />
                <span className="text-brand-black">AITotal Global</span>
              </h2>
              <p className="text-2xl text-gray-600 mb-16 leading-relaxed font-bold italic opacity-80">
                Our exclusive partnership with AITotal Global delivers the world's most productive genetics to the Indian landscape. 
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                {[
                  "Fresh Imported Stock",
                  "Certified Reliability",
                  "Premium Cold Chain",
                  "Expert Genetic Consultation"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-6 group">
                     <div className="w-16 h-16 bg-brand-black text-white rounded-3xl flex items-center justify-center transition-all group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-brand-black/20">
                       <CheckCircle2 size={28} />
                     </div>
                     <span className="text-[14px] font-black text-gray-900 uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-2/5 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-all duration-1000">
              <img 
                src="https://aitotal.nl/assets/logo.svg" 
                alt="AITotal Logo" 
                className="max-w-[400px] w-full mb-8 grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const fallback = document.createElement('div');
                    fallback.className = 'text-6xl font-display font-black text-brand-black tracking-tighter uppercase text-center';
                    fallback.innerHTML = 'AITOTAL<br/><span class="text-brand-green text-3xl tracking-[0.5em]">GLOBAL</span>';
                    parent.appendChild(fallback);
                  }
                }}
              />
              <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em]">Official Distribution Partner</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 5: Final Performance CTA --- */}
      <section className="py-56 bg-brand-black text-white relative overflow-hidden">
        {/* Dynamic lighting */}
        <div className="absolute top-0 right-0 w-3/4 h-full bg-white/10 rounded-full blur-[200px] -mr-1/4 -mt-1/4"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-full bg-brand-green/20 rounded-full blur-[180px] -ml-1/4 -mb-1/4"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
            <span className="text-white font-black tracking-[0.8em] uppercase text-xs mb-12 block">Accelerate Your Progress</span>
            <h2 className="text-7xl md:text-[10rem] font-display font-black mb-20 tracking-tighter uppercase leading-[0.8]">
              Lead the <br />
              <span className="text-brand-green">Success.</span>
            </h2>
            <p className="text-2xl md:text-4xl text-white/60 mb-24 max-w-5xl mx-auto leading-relaxed font-bold italic">
              "Successful breeding isn't a gamble—it's a calculated strategy with Elite Genetics LTD."
            </p>
            <div className="flex flex-wrap justify-center gap-10">
              <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-20 py-8 rounded-[3rem] font-black uppercase tracking-[0.3em] text-[13px] shadow-[0_30px_70px_-15px_rgba(0,0,0,0.3)] transition-all hover:scale-105 active:scale-95">
                  Secure Your Inventory
              </Link>
              <Link to="/pricing" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-20 py-8 rounded-[3rem] font-black uppercase tracking-[0.3em] text-[13px] backdrop-blur-2xl transition-all hover:border-white/40 active:scale-95">
                  View Price Index
              </Link>
            </div>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-30px) rotate(1deg); }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Home;