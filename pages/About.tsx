import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck, Microscope, Award, Globe, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Premium About Hero */}
      <section className="bg-brand-black pt-32 pb-48 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-blue/10 rounded-full blur-[150px] -mr-1/4 -mt-1/4 animate-pulse-slow"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <span className="text-brand-green font-black tracking-[0.6em] uppercase text-[10px] mb-8 block">Corporate Profile</span>
            <h1 className="text-6xl md:text-9xl font-display font-black text-white mb-12 tracking-tighter uppercase leading-[0.85] italic">
              Empowering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue to-white">Progress.</span>
            </h1>
            <p className="text-2xl text-gray-400 leading-relaxed font-medium italic border-l-4 border-brand-green pl-10 max-w-2xl">
              Elite Genetics LTD. is the bridge between world-class laboratory innovation and practical, high-profit dairy performance in India.
            </p>
          </div>
        </div>
      </section>

      {/* Company Identity */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="relative group">
              <div className="absolute -inset-4 bg-brand-green/10 rounded-[4rem] group-hover:bg-brand-green/20 transition-all duration-700"></div>
              <img 
                src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2521&auto=format&fit=crop" 
                alt="Corporate Office" 
                className="relative z-10 rounded-[3.5rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute -bottom-10 -right-10 bg-brand-blue p-12 rounded-[3rem] shadow-2xl z-20 hidden md:block group-hover:rotate-3 transition-transform duration-500">
                  <Globe size={48} className="text-white" />
              </div>
            </div>
            <div>
              <h2 className="text-4xl md:text-6xl font-display font-black text-brand-black mb-10 tracking-tighter uppercase leading-[1.1]">
                Leading with <br /><span className="text-brand-green italic">Data & Integrity.</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-10 font-medium">
                Headquartered in Punjab, Elite Genetics LTD. specializes in the distribution of high-performance Holstein genetics. We meticulously curate bloodlines that prioritize production, health, and commercial longevity.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                  <span className="text-4xl font-display font-black text-brand-blue block mb-2">3.3k+</span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Elite GTPI Ranking</span>
                </div>
                <div className="bg-slate-50 p-8 rounded-[2.5rem] border border-slate-100">
                  <span className="text-4xl font-display font-black text-brand-green block mb-2">100%</span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Certified Origin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values & Mission */}
      <section className="py-40 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
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
              <div key={i} className="bg-white p-14 rounded-[4rem] shadow-xl border border-slate-100 hover:shadow-2xl transition-all duration-700 group flex flex-col">
                <div className={`${v.color} w-20 h-20 rounded-3xl flex items-center justify-center text-white mb-10 group-hover:-translate-y-3 transition-transform duration-500`}>
                  <v.icon size={32} />
                </div>
                <h3 className="text-3xl font-display font-black text-brand-black mb-6 uppercase tracking-tight">{v.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed flex-grow">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners section update */}
      <section className="py-40 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-display font-black text-brand-black mb-20 uppercase tracking-tighter italic">Official Strategic Alliance</h2>
          <div className="flex flex-col items-center gap-10">
            <img src="https://aitotal.nl/assets/logo.svg" alt="AITotal" className="h-32 opacity-40 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 duration-1000" />
            <div className="h-px w-24 bg-brand-green"></div>
            <p className="text-xl text-gray-500 font-bold uppercase tracking-[0.4em]">International Genetics Group</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-48 bg-brand-black text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-9xl font-display font-black mb-16 uppercase tracking-tighter italic">Ready to <span className="text-brand-green">Lead?</span></h2>
          <Link to="/contact" className="bg-brand-green hover:bg-brand-darkGreen text-white px-20 py-8 rounded-[3rem] font-black uppercase tracking-[0.4em] text-[14px] shadow-2xl transition-all inline-block hover:scale-105 active:scale-95">
            Partner with Elite Genetics
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;