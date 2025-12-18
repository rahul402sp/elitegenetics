import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck, Microscope, Award, Globe, Zap, GraduationCap, BarChart3, Binary, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Premium About Hero */}
      <section className="bg-brand-black pt-20 sm:pt-32 pb-24 sm:pb-48 relative overflow-hidden px-4">
        {/* Dynamic Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 rounded-full blur-[100px] sm:blur-[150px] -mr-1/4 -mt-1/4 animate-pulse-slow"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-brand-green/5 rounded-full blur-[120px]"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
               <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></span>
               <span className="text-white font-black tracking-[0.4em] uppercase text-[9px] sm:text-[10px]">Established 2024</span>
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-display font-black text-white mb-8 sm:mb-12 tracking-tighter uppercase leading-[0.9] italic">
              Empowering <br />
              <span className="text-brand-green">Indian</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Dairy.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-medium italic border-l-0 sm:border-l-4 border-brand-green sm:pl-10 max-w-3xl">
              Elite Genetics delivers superior genomic solutions, bridging the gap between world-class laboratory innovation and the progressive dairy farmer in India.
            </p>
          </div>
        </div>
      </section>

      {/* Core Narrative Section */}
      <section className="py-24 sm:py-40 bg-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[2.5rem] sm:rounded-[4rem] group-hover:bg-brand-green/20 transition-all duration-700"></div>
              
              {/* Majestic Cow Image Container */}
              <div className="relative z-10 rounded-[2rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl border-4 border-white aspect-square bg-slate-50">
                <img 
                  src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2674&auto=format&fit=crop" 
                  alt="Elite Holstein Genetics" 
                  className="w-full h-full object-cover object-center transition-all duration-1000 scale-100 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/20 via-transparent to-transparent opacity-30"></div>
              </div>

              {/* Decorative Floating Label */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-10 sm:-left-10 bg-brand-black p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl z-20 hidden md:block group-hover:rotate-3 transition-transform duration-500 border border-white/10">
                  <div className="text-brand-green font-display font-black text-3xl italic leading-none">AITOTAL</div>
                  <div className="text-white font-black uppercase text-[10px] tracking-widest mt-2 text-center opacity-60">Sole Distributor</div>
              </div>
            </div>
            
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-brand-black mb-8 sm:mb-10 tracking-tighter uppercase leading-[1.1]">
                Leading the nation’s <br /><span className="text-brand-blue italic">Dairy Advance.</span>
              </h2>
              <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed font-medium">
                <p>
                  Elite Genetics, established in 2024 in India, is a leading provider of premium imported bovine semen dedicated to advancing the nation’s dairy sector. As the sole distributor of <span className="text-brand-black font-black">AITOTAL</span>, a globally recognized supplier of high-quality bovine semen, Elite Genetics delivers superior genetic solutions to dairy farmers across India.
                </p>
                <p>
                  Our mission is to enhance milk production and improve breed characteristics in <span className="text-brand-blue font-bold">Holstein Friesian (HF) cows</span>, enabling farmers to achieve healthier herds, better fertility, and sustainable profitability.
                </p>
                <p>
                  By combining world-class genetics with a deep understanding of Indian dairy farming, Elite Genetics is committed to driving long-term genetic progress and productivity.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 sm:gap-8 mt-12">
                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all text-center">
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Established</span>
                  <span className="text-2xl sm:text-4xl font-display font-black text-brand-black block">2024</span>
                </div>
                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl transition-all text-center">
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest block mb-2">Global Partner</span>
                  <span className="text-2xl sm:text-4xl font-display font-black text-brand-black block">AITOTAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Summary */}
      <section className="py-24 sm:py-40 bg-slate-50 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-16 max-w-6xl mx-auto">
            {/* Vision Card */}
            <div className="bg-white p-10 sm:p-16 rounded-[3rem] sm:rounded-[4rem] shadow-xl border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-blue rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-8 sm:mb-12 shadow-lg shadow-brand-blue/20">
                  <Target size={32} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-brand-black mb-8 uppercase tracking-tight italic">Vision Statement</h3>
                <p className="text-lg sm:text-xl text-gray-500 font-bold leading-relaxed italic opacity-80">
                  "To become a trusted leader in dairy genetics by empowering Indian dairy farmers with world-class bovine genetics that enhance productivity, improve breed quality, and support sustainable dairy farming."
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-brand-black p-10 sm:p-16 rounded-[3rem] sm:rounded-[4rem] shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-green/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-1000"></div>
              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-brand-green rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-8 sm:mb-12 shadow-lg shadow-brand-green/20">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-3xl sm:text-4xl font-display font-black text-white mb-8 uppercase tracking-tight italic">Mission Statement</h3>
                <p className="text-lg sm:text-xl text-white/70 font-bold leading-relaxed italic">
                  "Our mission is to deliver superior imported bovine semen through exclusive partnerships with global genetic leaders like AITOTAL, helping dairy farmers improve milk yield, fertility, and genetic traits in Holstein Friesian cows. We are committed to ethical practices, farmer education, and long-term genetic advancement for a profitable and sustainable dairy future in India."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Product Description Section */}
      <section className="py-24 sm:py-48 bg-white px-4 relative overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
            <div className="lg:w-1/2">
              <span className="text-brand-blue font-black tracking-[0.5em] uppercase text-[10px] sm:text-[11px] mb-6 block">Premium Inventory</span>
              <h2 className="text-4xl sm:text-6xl font-display font-black text-brand-black mb-10 tracking-tighter uppercase italic leading-[0.95]">
                Imported Bovine <br />
                <span className="text-brand-green">Semen Specialist.</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 font-medium leading-relaxed">
                <p>
                  Elite Genetics offers premium imported bovine semen sourced from internationally proven genetics through AITOTAL, a globally respected supplier. Our semen is carefully selected to enhance milk production, fertility, longevity, and overall breed characteristics in Holstein Friesian (HF) cows.
                </p>
                <p>
                  Each dose meets stringent international quality standards, ensuring high conception rates and consistent genetic performance. Designed to meet Indian farming conditions, our products help dairy farmers build healthier herds, improve farm efficiency, and achieve long-term genetic progress.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                {[
                  "Stringent Quality Checks",
                  "High Conception Rates",
                  "Global Performance Proof",
                  "Indian Farm Optimized"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 bg-brand-green/10 rounded-xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-xs font-black text-brand-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Additional Cow Feature Image */}
            <div className="lg:w-1/2 relative">
               <div className="absolute -inset-6 bg-slate-50 rounded-[4rem] -z-10 rotate-3"></div>
               <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white group">
                  <img 
                    src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=2670&auto=format&fit=crop" 
                    alt="Elite Livestock Quality" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[2s]"
                  />
               </div>
               {/* Floating Data Badge */}
               <div className="absolute top-10 -right-8 bg-brand-blue p-8 rounded-[2.5rem] text-white shadow-2xl hidden md:block">
                  <Microscope size={32} className="mb-4" />
                  <div className="text-[10px] font-black uppercase tracking-widest opacity-60">Purity Score</div>
                  <div className="text-3xl font-display font-black">100%</div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Partnership Display */}
      <section className="py-24 sm:py-40 bg-slate-50 px-4">
        <div className="container mx-auto text-center">
          <span className="text-brand-blue font-black tracking-[0.5em] uppercase text-[10px] sm:text-[11px] mb-8 block">Our Strategic Partner</span>
          <h2 className="text-4xl sm:text-5xl font-display font-black text-brand-black mb-16 uppercase tracking-tighter italic">World-Class <span className="text-brand-green">AITOTAL</span> Distribution</h2>
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-10 bg-white p-12 sm:p-20 rounded-[4rem] shadow-xl border border-white relative group">
              <div className="absolute inset-0 bg-brand-green opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none rounded-[4rem]"></div>
              
              {/* Fix AITotal Logo Display */}
              <div className="flex items-center justify-center min-h-[140px] w-full max-w-[400px]">
                <img 
                  src="https://aitotal.nl/assets/logo.svg" 
                  alt="AITotal Logo" 
                  className="w-full h-auto max-h-32 object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-5xl sm:text-7xl font-display font-black text-brand-black tracking-tighter uppercase text-center flex flex-col items-center';
                      fallback.innerHTML = 'AITOTAL<span class="text-brand-green text-xl sm:text-2xl tracking-[0.6em] mt-2">GLOBAL</span>';
                      parent.appendChild(fallback);
                    }
                  }}
                />
              </div>

              <div className="h-1.5 w-32 bg-brand-green rounded-full"></div>
              <p className="text-lg sm:text-2xl text-gray-500 font-bold leading-relaxed max-w-2xl italic">
                "AITotal is a globally respected supplier of high-quality bovine semen. As their exclusive distributor in India, we ensure that every straw delivered to your farm maintains the highest genetic integrity."
              </p>
              
              <div className="flex gap-4 sm:gap-8 flex-wrap justify-center mt-6">
                <div className="flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                  <Globe className="text-brand-blue" size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-black">Global Lab Access</span>
                </div>
                <div className="flex items-center gap-3 bg-slate-50 px-8 py-4 rounded-2xl border border-slate-100">
                  <ShieldCheck className="text-brand-green" size={18} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-brand-black">Certified Logistics</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section (Knowledge Addition) */}
      <section className="py-24 sm:py-48 bg-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
             <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <GraduationCap className="text-brand-blue mb-8" size={40} />
                <h4 className="text-xl font-display font-black uppercase mb-4 italic">Farmer Education</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">Beyond semen sales, we provide training on modern herd management and nutritional optimization to ensure genetic potential is fully realized.</p>
             </div>
             <div className="p-10 bg-brand-black rounded-[3rem] text-white">
                <Binary className="text-brand-green mb-8" size={40} />
                <h4 className="text-xl font-display font-black uppercase mb-4 italic text-white">Genomic Auditing</h4>
                <p className="text-white/60 font-medium text-sm leading-relaxed">Every sire in our portfolio is selected based on multi-index genomic data (GTPI, NM$, DWP$) to guarantee consistent performance in Indian climates.</p>
             </div>
             <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100">
                <Users className="text-brand-blue mb-8" size={40} />
                <h4 className="text-xl font-display font-black uppercase mb-4 italic">Community Wealth</h4>
                <p className="text-gray-500 font-medium text-sm leading-relaxed">Our ultimate success is defined by the prosperity of the Indian dairy community, one high-performing calf at a time.</p>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 sm:py-48 bg-brand-black text-white px-4 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-brand-green/5 rounded-full blur-[180px]"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl sm:text-7xl md:text-[10rem] font-display font-black mb-12 sm:mb-16 uppercase tracking-tighter italic leading-none">The <span className="text-brand-green">Elite</span> Era.</h2>
          <p className="text-xl sm:text-3xl text-white/50 mb-16 sm:mb-24 max-w-3xl mx-auto font-bold italic leading-relaxed">
            Join the ranks of high-performing dairy breeders. Secure your genetic legacy today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link to="/portfolio" className="bg-brand-green hover:bg-brand-darkGreen text-white px-12 sm:px-20 py-6 sm:py-8 rounded-[2rem] sm:rounded-[3rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[11px] sm:text-[14px] shadow-[0_20px_50px_-10px_rgba(140,198,63,0.3)] transition-all inline-block hover:scale-105 active:scale-95">
              Browse Sires
            </Link>
            <Link to="/contact" className="bg-white/10 hover:bg-white/20 text-white border-2 border-white/20 px-12 sm:px-20 py-6 sm:py-8 rounded-[2rem] sm:rounded-[3rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[11px] sm:text-[14px] backdrop-blur-md transition-all inline-block hover:scale-105 active:scale-95">
              Consult a Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;