import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send, Globe, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    location: '',
    requirement: 'Milk'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Strategic Enquiry Received. An Elite Genetics representative will contact you within 24 business hours.');
    setFormData({ name: '', mobile: '', location: '', requirement: 'Milk' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Contact Hero */}
      <section className="bg-brand-black py-20 sm:py-24 border-b border-white/5 relative overflow-hidden px-4">
        <div className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none">
           <Globe size={800} className="absolute -bottom-40 -right-40 text-brand-blue animate-pulse-slow" />
        </div>
        <div className="container mx-auto relative z-10 text-center">
          <span className="text-brand-green font-black tracking-[0.4em] sm:tracking-[0.6em] uppercase text-[9px] sm:text-[10px] mb-6 block">Direct Conduit</span>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-display font-black text-white mb-6 sm:mb-8 tracking-tighter uppercase italic">
            Get in <span className="text-brand-blue">Touch.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto font-medium">
            Contact our genetic consultants to optimize your herd's potential.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-32 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-7xl mx-auto items-start">
            
            {/* Contact Details */}
            <div className="space-y-12 sm:space-y-16">
              <div>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-black mb-8 sm:mb-12 uppercase tracking-tighter italic">Headquarters</h2>
                <div className="space-y-10 sm:space-y-12">
                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 group text-center sm:text-left items-center sm:items-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm flex-shrink-0">
                      <MapPin size={24} className="sm:size-28" />
                    </div>
                    <div>
                      <h3 className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-2 sm:mb-3">Principal Address</h3>
                      <p className="text-lg sm:text-xl font-bold text-gray-900 leading-relaxed max-w-xs">{COMPANY_INFO.address}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 group text-center sm:text-left items-center sm:items-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-green group-hover:bg-brand-green group-hover:text-white transition-all shadow-sm flex-shrink-0">
                      <Phone size={24} className="sm:size-28" />
                    </div>
                    <div>
                      <h3 className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-2 sm:mb-3">Direct Hotline</h3>
                      <p className="text-xl sm:text-2xl font-mono font-black text-gray-900">{COMPANY_INFO.phone}</p>
                      <p className="text-brand-blue font-black uppercase text-[9px] sm:text-[10px] mt-1 tracking-widest">Attn: {COMPANY_INFO.contactPerson}</p>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 group text-center sm:text-left items-center sm:items-start">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-brand-black group-hover:bg-brand-blue group-hover:text-white transition-all shadow-sm flex-shrink-0">
                      <Mail size={24} className="sm:size-28" />
                    </div>
                    <div>
                      <h3 className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] sm:tracking-[0.4em] mb-2 sm:mb-3">Corporate Email</h3>
                      <p className="text-lg sm:text-xl font-bold text-gray-900 break-all">{COMPANY_INFO.email}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="bg-slate-900 p-8 sm:p-12 rounded-[2.5rem] sm:rounded-[3.5rem] text-white">
                 <h4 className="text-base sm:text-lg font-display font-black uppercase tracking-[0.15em] sm:tracking-[0.2em] mb-6 sm:mb-8 text-brand-green italic text-center sm:text-left">Operational Logistics</h4>
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-[10px] sm:text-[11px] font-black uppercase tracking-widest text-gray-500">
                    <div className="flex items-center gap-3"><ChevronRight size={14} className="text-brand-green" /> National Distribution</div>
                    <div className="flex items-center gap-3"><ChevronRight size={14} className="text-brand-green" /> Global Cold Chain</div>
                    <div className="flex items-center gap-3"><ChevronRight size={14} className="text-brand-green" /> Certified Handling</div>
                    <div className="flex items-center gap-3"><ChevronRight size={14} className="text-brand-green" /> Expert Sourcing</div>
                 </div>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white rounded-[2.5rem] sm:rounded-[4rem] p-6 sm:p-12 lg:p-20 shadow-[0_40px_100px_-20px_rgba(0,113,188,0.1)] border border-slate-100">
              <h2 className="text-2xl sm:text-3xl font-display font-black text-brand-black mb-8 sm:mb-12 uppercase tracking-tight italic text-center sm:text-left">Submit Strategic Enquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-10">
                <div className="space-y-2 sm:space-y-4">
                  <label className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Full Identity</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-[1.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-bold text-black text-sm sm:text-base"
                    placeholder="Enter full name"
                  />
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <label className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Communication Line</label>
                  <input
                    type="tel"
                    name="mobile"
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-[1.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-mono font-bold text-black text-sm sm:text-base"
                    placeholder="+91 Mobile Number"
                  />
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <label className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Geographic Location</label>
                  <input
                    type="text"
                    name="location"
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-[1.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-bold text-black text-sm sm:text-base"
                    placeholder="City / District / State"
                  />
                </div>

                <div className="space-y-2 sm:space-y-4">
                  <label className="text-[9px] sm:text-[10px] font-black text-gray-400 uppercase tracking-widest ml-4">Breeding Priority</label>
                  <select
                    name="requirement"
                    value={formData.requirement}
                    onChange={handleChange}
                    className="w-full px-6 sm:px-8 py-4 sm:py-5 rounded-xl sm:rounded-[1.5rem] bg-slate-50 border border-slate-100 focus:bg-white focus:ring-4 focus:ring-brand-blue/10 focus:border-brand-blue outline-none transition-all font-black uppercase text-[10px] tracking-widest appearance-none cursor-pointer text-black"
                  >
                    <option value="Milk">Elite Production (Milk)</option>
                    <option value="Udder">Confirmation Specialist (Udders)</option>
                    <option value="A2A2">Genetic Profile (A2A2)</option>
                    <option value="Sexed">Technology Choice (Sexed)</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-green hover:bg-brand-darkGreen text-white font-black py-5 sm:py-7 rounded-[1.5rem] sm:rounded-[2rem] transition-all flex items-center justify-center gap-3 sm:gap-4 shadow-xl shadow-brand-green/20 uppercase tracking-[0.2em] sm:tracking-[0.4em] text-[10px] sm:text-[11px] active:scale-95 group"
                >
                  Authorize Transmission <Send size={20} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;