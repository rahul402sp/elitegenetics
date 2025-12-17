import React from 'react';
import { Target, Users, TrendingUp, ShieldCheck, Microscope, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <div className="bg-slate-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
            <img 
                src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?q=80&w=2674&auto=format&fit=crop" 
                alt="Background" 
                className="w-full h-full object-cover"
            />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <span className="text-brand-green font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Corporate Profile</span>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-6">
            Empowering Indian Dairy <br/> <span className="text-brand-blue">Genetic Excellence</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Leading the transformation of India's livestock sector through strategic global partnerships and scientifically-proven bovine genetics.
          </p>
        </div>
      </div>

      {/* Corporate Identity Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
                <img 
                    src="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?q=80&w=2521&auto=format&fit=crop" 
                    alt="Elite Genetics Corporate" 
                    className="rounded-2xl shadow-2xl w-full relative z-10"
                />
                <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-brand-green/10 rounded-2xl -z-0 hidden lg:block"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-blue/10 rounded-full -z-0 hidden lg:block"></div>
            </div>
            <div>
                <h2 className="text-3xl font-display font-bold text-gray-900 mb-6 border-l-4 border-brand-blue pl-4">Our Corporate Identity</h2>
                <p className="text-gray-600 leading-relaxed mb-6 text-lg">
                    Elite Genetics LTD is a premier Indian breeding and genetics enterprise headquartered in VPO Mana Singh Wala, District Ferozpur, Punjab. We are dedicated to the distribution of elite Holstein genetics, meticulously curated from globally recognized bloodlines.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                    By bridging the gap between international genetic innovation and the specific requirements of the Indian dairy landscape, we provide farmers with the tools necessary to optimize productivity, enhance udder health, and secure long-term herd longevity.
                </p>
                <div className="flex items-center gap-6">
                    <div className="flex flex-col">
                        <span className="text-brand-blue font-bold text-2xl">Proven</span>
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Bloodlines</span>
                    </div>
                    <div className="h-10 w-px bg-gray-200"></div>
                    <div className="flex flex-col">
                        <span className="text-brand-green font-bold text-2xl">Global</span>
                        <span className="text-gray-500 text-sm uppercase tracking-wider">Standards</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Vision & Mission Statements */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
            <div className="bg-brand-darkBlue p-10 rounded-2xl text-white shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <TrendingUp size={120} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
                    <span className="p-2 bg-brand-green rounded-lg text-white"><Target size={24} /></span>
                    Vision Statement
                </h3>
                <p className="text-blue-100 leading-relaxed text-lg italic">
                    "To become a trusted leader in dairy genetics by empowering Indian dairy farmers with world-class bovine genetics that enhance productivity, improve breed quality, and support sustainable dairy farming."
                </p>
            </div>
            <div className="bg-white p-10 rounded-2xl border border-gray-100 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-110 transition-transform">
                    <Award size={120} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-gray-900 flex items-center gap-3">
                    <span className="p-2 bg-brand-blue rounded-lg text-white"><Microscope size={24} /></span>
                    Mission Statement
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                    Our mission is to deliver superior imported bovine semen through exclusive partnerships with global genetic leaders like <span className="text-brand-blue font-bold">AITOTAL</span>, helping dairy farmers improve milk yield, fertility, and genetic traits in Holstein Friesian cows. We are committed to ethical practices, farmer education, and long-term genetic advancement for a profitable and sustainable dairy future in India.
                </p>
            </div>
        </div>

        {/* Product Solutions Description */}
        <div className="bg-slate-900 rounded-3xl p-8 md:p-16 text-white mb-24 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <path d="M0 0 L100 100 M100 0 L0 100" stroke="white" strokeWidth="0.1" />
                </svg>
            </div>
            <div className="max-w-4xl relative z-10">
                <h2 className="text-3xl font-display font-bold mb-8 flex items-center gap-4">
                    <span className="h-px w-12 bg-brand-green"></span>
                    Premium Imported Bovine Semen
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed mb-10">
                    Elite Genetics offers premium imported bovine semen sourced from internationally proven genetics through <span className="text-white font-bold">AITOTAL</span>, a globally respected supplier. Our semen is carefully selected to enhance milk production, fertility, longevity, and overall breed characteristics in Holstein Friesian (HF) cows. 
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-400">
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="text-brand-green mt-1 flex-shrink-0" size={20} />
                        <span>Stringent international quality standards for high conception rates.</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="text-brand-green mt-1 flex-shrink-0" size={20} />
                        <span>Consistent genetic performance optimized for Indian farming conditions.</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="text-brand-green mt-1 flex-shrink-0" size={20} />
                        <span>Exclusive access to globally recognized AITOTAL genetic lines.</span>
                    </div>
                    <div className="flex items-start gap-3">
                        <ShieldCheck className="text-brand-green mt-1 flex-shrink-0" size={20} />
                        <span>Supporting healthier herds and long-term farm efficiency.</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Strategic Foundations (Core Values) */}
        <div>
            <h2 className="text-3xl font-display font-bold text-center text-gray-900 mb-12">Strategic Foundations</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="inline-flex p-4 rounded-full bg-blue-50 text-brand-blue mb-6">
                        <TrendingUp size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Genetic Progress</h3>
                    <p className="text-gray-600 leading-relaxed">Focusing on high TPI, Net Merit, and health traits to ensure every subsequent generation exceeds the last in performance.</p>
                </div>
                <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="inline-flex p-4 rounded-full bg-green-50 text-brand-green mb-6">
                        <Award size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Uncompromising Quality</h3>
                    <p className="text-gray-600 leading-relaxed">Each dose meets rigorous international standards, delivering reliability that Indian dairy breeders can trust implicitly.</p>
                </div>
                 <div className="text-center p-8 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="inline-flex p-4 rounded-full bg-purple-50 text-purple-600 mb-6">
                        <Users size={32} />
                    </div>
                    <h3 className="text-xl font-bold mb-4">Farmer Prosperity</h3>
                    <p className="text-gray-600 leading-relaxed">Our ultimate metric of success is the profitability of our clients. We provide consultation for data-driven sire selection.</p>
                </div>
            </div>
        </div>

        <div className="mt-24 text-center">
            <Link to="/portfolio" className="bg-brand-blue hover:bg-brand-darkBlue text-white px-10 py-4 rounded-lg font-bold text-lg shadow-lg transition-all inline-flex items-center gap-3">
                View Sire Portfolio <TrendingUp size={20} />
            </Link>
        </div>
      </div>
    </div>
  );
};

export default About;