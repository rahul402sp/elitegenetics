import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck, Microscope, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Premium About Hero */}
      <section className="bg-brand-black pt-20 sm:pt-32 pb-24 sm:pb-48 relative overflow-hidden px-4">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 rounded-full blur-[100px] sm:blur-[150px] -mr-1/4 -mt-1/4 animate-pulse-slow"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl text-center sm:text-left">
            <span className="text-brand-green font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[9px] sm:text-[10px] mb-6 sm:mb-8 block">Corporate Profile</span>
            <h1 className="text-4xl sm:text-6xl md:text-8xl xl:text-9xl font-display font-black text-white mb-8 sm:mb-12 tracking-tighter uppercase leading-[0.9] italic">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Progress.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-400 leading-relaxed font-medium italic border-l-0 sm:border-l-4 border-brand-green sm:pl-10 max-w-2xl mx-auto sm:mx-0">
              Elite Genetics LTD. is the bridge between world-class laboratory innovation and practical, high-profit dairy performance in India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Identity */}
      <section className="py-24 sm:py-40 bg-white px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[2.5rem] sm:rounded-[4rem] group-hover:bg-brand-green/20 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2521&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="relative z-10 rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-6 -right-6 sm:-bottom-10 sm:-right-10 bg-brand-blue p-8 sm:p-12 rounded-[2rem] sm:rounded-[3rem] shadow-2xl z-20 hidden md:block group-hover:rotate-3 transition-transform duration-500">
                  <Globe size={48} className="text-white" />
              </div>
            </div>
            <div className="text-center lg:text-left">
              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-black text-brand-black mb-8 sm:mb-10 tracking-tighter uppercase leading-[1.1]">
                Leading with <br /><span className="text-brand-green italic">Data & Integrity.</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 sm:mb-10 font-medium">
                Headquartered in Punjab, Elite Genetics LTD. specializes in the distribution of high-performance Holstein genetics. We meticulously curate bloodlines that prioritize production, health, and commercial longevity.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-slate-100">
                  <span className="text-3xl sm:text-4xl font-display font-black text-brand-blue block mb-1 sm:mb-2">3.3k+</span>
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest">Elite GTPI Ranking</span>
                </div>
                <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-slate-100">
                  <span className="text-3xl sm:text-4xl font-display font-black text-brand-green block mb-1 sm:mb-2">100%</span>
                  <span className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest">Certified Origin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-24 sm:py-40 bg-slate-50 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
            {[
              { 
                icon: Target, 
                title: "Vision", 
                color: "bg-brand-blue",
                desc: "To be the trusted catalyst for genomic progress in India, delivering genetics that redefine what is possible in dairy productivity." 
              },
              { 
                icon: Zap, 
                title: "Excellence", 
                color: "bg-brand-green",
                desc: "We accept only the top 1% of global rankings. Quality isn't just a metric; it is our foundational promise to every breeder." 
              },
              { 
                icon: Users, 
                title: "Partnership", 
                color: "bg-brand-black",
                desc: "Our success is defined solely by your herd's performance. We provide the expertise to turn high data into high profit." 
              }
            ].map((v, i) => (
              <div key={i} className="bg-white p-10 sm:p-14 rounded-[2.5rem] sm:rounded-[4rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-700 group flex flex-col text-center lg:text-left">
                <div className={`${v.color} w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center text-white mb-8 sm:mb-10 group-hover:-translate-y-3 transition-transform duration-500 mx-auto lg:mx-0`}>
                  <v.icon size={28} className="sm:size-32" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-black text-brand-black mb-4 sm:mb-6 uppercase tracking-tight">{v.title}</h3>
                <p className="text-sm sm:text-base text-gray-500 font-medium leading-relaxed flex-grow">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section update */}
      <section className="py-24 sm:py-40 bg-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-black mb-12 sm:mb-20 uppercase tracking-tighter italic">Official Strategic Alliance</h2>
          <div className="flex flex-col items-center gap-6 sm:gap-10">
            <img src="https://aitotal.nl/assets/logo.svg" alt="AITotal" className="h-20 sm:h-32 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-1000" />
            <div className="h-px w-16 sm:w-24 bg-brand-green"></div>
            <p className="text-lg sm:text-xl text-gray-500 font-bold uppercase tracking-[0.2em] sm:tracking-[0.4em]">International Genetics Group</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 sm:py-48 bg-brand-black text-white px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl sm:text-6xl md:text-9xl font-display font-black mb-12 sm:mb-16 uppercase tracking-tighter italic leading-none">Ready to <span className="text-brand-green">Lead?</span></h2>
          <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-10 sm:px-20 py-6 sm:py-8 rounded-[2rem] sm:rounded-[3rem] font-black uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[11px] sm:text-[14px] shadow-2xl transition-all inline-block hover:scale-105 active:scale-95">
            Partner with Elite Genetics
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;