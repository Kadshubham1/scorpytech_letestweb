import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { Menu, X } from 'lucide-react';

export default function Header({ onApplyNow, onNavigate, activePage }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', page: 'home' },
    { name: 'Services', page: 'services' },
    { name: 'About Us', page: 'aboutus' },
    { name: 'Industries', page: 'industries' },
    { name: 'Careers', page: 'careers' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
          <img src={logo} alt="Scorpy Tech Logo" className="h-16 w-auto object-contain scale-125 origin-left" />
        </div>
        
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.page}
              onClick={() => onNavigate(link.page)} 
              className={`font-medium hover:text-primary transition-colors ${activePage === link.page ? 'text-primary' : 'text-gray-600'}`}
            >
              {link.name}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={onApplyNow} className="hidden md:inline-flex bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-dark transition-colors font-medium">
            Contact Us
          </button>
          <button className="md:hidden p-2 text-gray-600" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 absolute w-full left-0 p-4 flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => (
            <button 
              key={link.page}
              onClick={() => { onNavigate(link.page); setMobileMenuOpen(false); }} 
              className={`text-left font-medium py-2 ${activePage === link.page ? 'text-primary' : 'text-gray-600'}`}
            >
              {link.name}
            </button>
          ))}
          <button onClick={() => { onApplyNow(); setMobileMenuOpen(false); }} className="bg-primary text-white px-6 py-3 rounded-md font-medium text-center w-full mt-2">
            Contact Us
          </button>
        </div>
      )}
    </header>
  );
}