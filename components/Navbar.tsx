'use client';
import React, { useState, useEffect } from 'react';
import { useScrollSection } from '../hooks/useScrollSection';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Update scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeSection = useScrollSection(['hero', 'problem', 'solution', 'how-it-works', 'features', 'roadmap']);

  const navLinks = [
    { name: 'Problem', id: 'problem' },
    { name: 'Solution', id: 'solution' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'Features', id: 'features' },
    { name: 'Roadmap', id: 'roadmap' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-bold ${scrolled ? 'text-blue-950' : 'text-gray-900'}`}>
          Smart<span className="text-emerald-500">Cart</span> Co.
        </a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-8 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              className={`text-sm font-medium transition-colors hover:text-emerald-500 ${activeSection === link.id ? 'text-emerald-500' : 'text-slate-600'}`}
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2 rounded-full font-medium transition-all">
            Get a Demo
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-gray-800" onClick={() => setMenuOpen(!menuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 px-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`}
              onClick={() => setMenuOpen(false)}
              className="text-slate-600 font-medium"
            >
              {link.name}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="text-center bg-emerald-500 text-white px-5 py-2 rounded-full font-medium">
            Get a Demo
          </a>
        </div>
      )}
    </nav>
  );
};
