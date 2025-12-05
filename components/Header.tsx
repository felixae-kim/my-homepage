import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Language, NavItem } from '../types';

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
  navItems: NavItem[];
}

const Header: React.FC<HeaderProps> = ({ lang, setLang, navItems }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-charcoal/90 backdrop-blur-sm py-4 shadow-sm border-b border-paper/5' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <button 
          onClick={() => scrollTo('home')} 
          className="text-xl font-display font-bold text-paper tracking-tight"
        >
          Seongjae Kim
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-sm font-medium text-paper/60 hover:text-paper transition-colors uppercase tracking-wider"
            >
              {item.label}
            </button>
          ))}
          
          <div className="w-[1px] h-4 bg-paper/20 mx-2"></div>
          
          <button 
            onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}
            className="text-sm font-medium text-paper/60 hover:text-paper transition-colors flex gap-1"
          >
            <span className={lang === 'ko' ? 'text-paper font-bold' : ''}>KO</span>
            <span>/</span>
            <span className={lang === 'en' ? 'text-paper font-bold' : ''}>EN</span>
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-paper"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-charcoal border-b border-paper/10 shadow-lg md:hidden p-6 flex flex-col gap-6 items-center">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className="text-lg font-medium text-paper"
            >
              {item.label}
            </button>
          ))}
           <div className="w-full h-[1px] bg-paper/10 my-2"></div>
           <button 
            onClick={() => {
              setLang(lang === 'ko' ? 'en' : 'ko');
              setIsMenuOpen(false);
            }}
            className="text-lg font-medium text-paper flex gap-2"
          >
            <span className={lang === 'ko' ? 'font-bold underline' : 'opacity-60'}>KO</span>
            <span className="opacity-60">/</span>
            <span className={lang === 'en' ? 'font-bold underline' : 'opacity-60'}>EN</span>
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;