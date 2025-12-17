import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Dna } from 'lucide-react';
import { COMPANY_INFO } from '../constants';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => 
    location.pathname === path 
      ? 'text-brand-blue font-bold uppercase tracking-wide text-sm' 
      : 'text-gray-600 hover:text-brand-blue font-medium uppercase tracking-wide text-sm transition-colors';

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Bar */}
      <div className="bg-brand-darkBlue text-white text-xs py-2 hidden md:block">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex gap-6">
            <span className="flex items-center gap-2"><Phone size={14} /> {COMPANY_INFO.phone}</span>
            <span className="flex items-center gap-2"><Mail size={14} /> {COMPANY_INFO.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Your Trusted Partner in Livestock Success</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-24">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 group">
              <div className="flex flex-col">
                <div className="flex items-baseline leading-none">
                    <span className="text-3xl font-display font-extrabold text-brand-green tracking-tight">Elite</span>
                    <span className="text-3xl font-display font-extrabold text-brand-blue ml-1.5 tracking-tight">Genetics</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5">
                   <div className="h-0.5 bg-brand-green w-8 rounded-full"></div>
                   <span className="text-[10px] text-gray-500 font-medium tracking-wide uppercase whitespace-nowrap hidden sm:block">
                    your Trusted Partner in Livestock Success
                   </span>
                   <div className="h-0.5 bg-gray-200 flex-grow rounded-full hidden sm:block"></div>
                </div>
              </div>
              <div className="hidden sm:block">
                  <Dna className="h-10 w-10 text-brand-blue" strokeWidth={2} />
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 items-center">
              <Link to="/" className={isActive('/')}>Home</Link>
              <Link to="/about" className={isActive('/about')}>About</Link>
              <Link to="/portfolio" className={isActive('/portfolio')}>Sire Portfolio</Link>
              <Link to="/pricing" className={isActive('/pricing')}>Pricing</Link>
              <Link to="/contact" className={`px-6 py-2.5 rounded-full text-white font-bold uppercase tracking-wide text-sm transition-all ${location.pathname === '/contact' ? 'bg-brand-darkBlue' : 'bg-brand-blue hover:bg-brand-darkBlue hover:shadow-lg'}`}>
                Contact Us
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t py-4 shadow-xl">
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              <Link to="/" className="text-gray-800 font-bold uppercase tracking-wide text-sm py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className="text-gray-800 font-bold uppercase tracking-wide text-sm py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/portfolio" className="text-gray-800 font-bold uppercase tracking-wide text-sm py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Sire Portfolio</Link>
              <Link to="/pricing" className="text-gray-800 font-bold uppercase tracking-wide text-sm py-2 border-b border-gray-100" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
              <Link to="/contact" className="bg-brand-blue text-center text-white font-bold uppercase tracking-wide text-sm py-3 rounded-lg mt-2" onClick={() => setIsMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow bg-slate-50">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div>
              {/* Footer Logo Variant */}
              <div className="flex items-center gap-4 mb-6">
                 <div className="flex flex-col">
                    <div className="flex items-baseline leading-none">
                        <span className="text-3xl font-display font-extrabold text-brand-green tracking-tight">Elite</span>
                        <span className="text-3xl font-display font-extrabold text-white ml-1.5 tracking-tight">Genetics</span>
                    </div>
                    <span className="text-[10px] text-gray-400 font-medium tracking-wider uppercase mt-1">
                        Livestock Success
                    </span>
                 </div>
              </div>
              
              <p className="mb-6 leading-relaxed">
                Specializing in delivering elite Holstein genetics sourced from globally proven bloodlines to improve productivity and longevity.
              </p>
            </div>
            
            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-l-4 border-brand-green pl-3 uppercase tracking-wide">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link to="/portfolio" className="hover:text-brand-green transition-colors">Sire Portfolio</Link></li>
                <li><Link to="/pricing" className="hover:text-brand-green transition-colors">Pricing & Availability</Link></li>
                <li><Link to="/about" className="hover:text-brand-green transition-colors">Why Elite Genetics?</Link></li>
                <li><Link to="/contact" className="hover:text-brand-green transition-colors">Get in Touch</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="text-white text-lg font-bold mb-6 border-l-4 border-brand-green pl-3 uppercase tracking-wide">Contact Info</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="text-brand-green mt-1 flex-shrink-0" size={20} />
                  <span>{COMPANY_INFO.address}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="text-brand-green flex-shrink-0" size={20} />
                  <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">{COMPANY_INFO.phone}</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="text-brand-green flex-shrink-0" size={20} />
                  <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white">{COMPANY_INFO.email}</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Elite Genetics LTD. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;