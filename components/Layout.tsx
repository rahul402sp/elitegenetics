import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Globe, Dna, Lock } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => 
    location.pathname === path 
      ? 'text-[#005b96] font-black uppercase tracking-[0.1em] text-[11px] border-b-2 border-[#005b96] pb-1' 
      : 'text-gray-500 hover:text-[#005b96] font-black uppercase tracking-[0.1em] text-[11px] transition-all';

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-blue selection:text-white">
      {/* Top Bar */}
      <div className="bg-brand-black text-white text-[10px] py-2.5 hidden md:block border-b border-white/10 relative z-[60]">
        <div className="container mx-auto px-6 flex justify-between items-center uppercase font-black tracking-[0.2em]">
          <div className="flex gap-8">
            <a href={`tel:${COMPANY_INFO.phone}`} className="flex items-center gap-2.5 hover:text-brand-green transition-colors">
              <Phone size={12} className="text-brand-green" /> {COMPANY_INFO.phone}
            </a>
            <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-2.5 hover:text-brand-green transition-colors">
              <Mail size={12} className="text-brand-green" /> {COMPANY_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link to="/admin/login" className="flex items-center gap-2 text-white/40 hover:text-brand-green transition-colors">
              <Lock size={10} /> Staff Portal
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className={`sticky top-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-xl py-2' : 'bg-white py-4'}`}>
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* Logo - Matching Screenshot */}
            <Link to="/" className="flex items-center gap-2 group">
              <div className="flex flex-col items-center">
                  <div className="flex items-baseline leading-none">
                      <span className="text-2xl sm:text-3xl font-display font-black text-[#8cc63f] tracking-tighter uppercase italic">Elite</span>
                      <span className="text-2xl sm:text-3xl font-display font-black text-[#005b96] ml-2 tracking-tighter uppercase italic">Genetics Ltd.</span>
                  </div>
                  <div className="flex items-center gap-2 mt-0.5">
                     <span className="text-[7px] sm:text-[9px] text-gray-400 font-bold tracking-[0.15em] uppercase whitespace-nowrap">
                      Your Trusted Partner in Success
                     </span>
                     <div className="h-[1.5px] bg-[#8cc63f] w-8 rounded-full"></div>
                  </div>
              </div>
              <div className="relative w-8 h-8 flex items-center justify-center ml-2">
                 <Dna size={28} className="text-[#005b96] rotate-12 group-hover:rotate-45 transition-transform duration-700" />
                 <Dna size={28} className="text-[#8cc63f] absolute -rotate-12 group-hover:-rotate-45 transition-transform duration-700 opacity-40" />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-10 items-center">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/about" className={isActive('/about')}>About</Link>
              <Link to="/portfolio" className={isActive('/portfolio')}>Sire Portfolio</Link>
              <Link to="/pricing" className={isActive('/pricing')}>Pricing</Link>
              <Link to="/contact" className="px-8 py-3 bg-[#0f172a] text-white rounded-full font-black uppercase tracking-[0.1em] text-[11px] transition-all duration-300 hover:bg-[#005b96] flex items-center gap-2 shadow-lg">
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden p-2 text-brand-black bg-slate-50 rounded-xl" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t py-8 shadow-2xl absolute top-full left-0 w-full animate-in slide-in-from-top-4 z-50">
            <div className="container mx-auto px-6 flex flex-col space-y-2">
              <Link to="/" className="text-gray-900 font-black uppercase tracking-widest text-[13px] py-4 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-900 font-black uppercase tracking-widest text-[13px] py-4 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/portfolio" className="text-gray-900 font-black uppercase tracking-widest text-[13px] py-4 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Sire Portfolio</Link>
              <Link to="/pricing" className="text-gray-900 font-black uppercase tracking-widest text-[13px] py-4 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link to="/contact" className="bg-[#0f172a] text-center text-white font-black uppercase tracking-widest text-[13px] py-5 rounded-xl mt-4" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-brand-black text-white/80 pt-16 pb-12 border-t border-white/10 relative overflow-hidden">
        <Dna size={800} className="absolute -bottom-64 -left-64 text-white/[0.03] pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
            <div className="md:col-span-5">
              <div className="mb-8">
                <div className="flex items-baseline leading-none mb-2">
                    <span className="text-3xl font-display font-black text-[#8cc63f] tracking-tighter uppercase italic">Elite</span>
                    <span className="text-3xl font-display font-black text-white ml-2 tracking-tighter uppercase italic">Genetics Ltd.</span>
                </div>
                <div className="flex items-center gap-3">
                   <div className="h-[1.5px] bg-[#8cc63f] w-8 rounded-full"></div>
                   <span className="text-[9px] text-white/60 font-black tracking-[0.2em] uppercase">
                    Your Trusted Partner in Success
                   </span>
                </div>
              </div>
              <p className="mb-8 leading-relaxed text-[15px] max-w-md font-medium">
                The leading distributor of elite Holstein genetics across the Indian subcontinent. Delivering global laboratory precision to the progressive farm gate.
              </p>
            </div>
            <div className="md:col-span-3">
              <h3 className="text-white text-[10px] font-black mb-8 uppercase tracking-[0.4em] flex items-center gap-3">
                <span className="w-6 h-[2px] bg-brand-green"></span> Company Index
              </h3>
              <ul className="space-y-4 text-[14px] font-bold">
                <li><Link to="/portfolio" className="hover:text-brand-green transition-all">Sire Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-green transition-all">Pricing</Link></li>
                <li><Link to="/about" className="hover:text-brand-green transition-all">About</Link></li>
                <li><Link to="/contact" className="hover:text-brand-green transition-all">Genetic Consultation</Link></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <h3 className="text-white text-[10px] font-black mb-8 uppercase tracking-[0.4em] flex items-center gap-3">
                <span className="w-6 h-[2px] bg-white"></span> Headquarters
              </h3>
              <div className="space-y-6 text-[14px] font-medium">
                <div className="flex items-start gap-4 group">
                  <MapPin className="text-brand-green mt-1 flex-shrink-0" size={18} />
                  <span className="leading-relaxed group-hover:text-white transition-colors">{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-4 group">
                  <Phone className="text-brand-green flex-shrink-0" size={18} />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
                </div>
                <div className="flex items-center gap-4 group">
                  <Mail className="text-brand-green flex-shrink-0" size={18} />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[9px] font-black uppercase tracking-[0.3em] text-white/40 text-center md:text-left">
            <p>&copy; {new Date().getFullYear()} Elite Genetics Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;