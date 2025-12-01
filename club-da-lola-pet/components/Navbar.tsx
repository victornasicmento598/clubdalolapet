import React, { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from './ui/Button';
import { handleScrollTo } from '../utils/scroll';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Muda a cor após rolar um pouco a página (50px)
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Quem somos', href: '#quem-somos' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Contato', href: '#contato' },
  ];

  const whatsappLink = "https://wa.me/5551997270171?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Club%20da%20Lola.";

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ease-in-out rounded-b-3xl ${isScrolled
        ? 'bg-lola-purple/[0.85] backdrop-blur-md shadow-xl py-2'
        : 'bg-white shadow-lg py-4'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group"
          >
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center border-2 shadow-lg transition-all group-hover:scale-105 overflow-hidden bg-white ${isScrolled ? 'border-lola-green' : 'border-lola-green'}`}>
              <img src="/logo.png" alt="Logo Club da Lola" className="w-full h-full object-cover" />
            </div>
            {/* Texto do logo: Branco no header roxo, Roxo no header branco */}
            <span className={`font-bold text-lg md:text-xl tracking-tight hidden sm:block drop-shadow-sm transition-colors ${isScrolled ? 'text-white' : 'text-lola-purple'}`}>
              Club da Lola
            </span>
          </a>

          {/* Navegação Desktop */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className={`text-sm font-semibold transition-colors ${isScrolled ? 'text-purple-100 hover:text-lola-green' : 'text-gray-700 hover:text-lola-purple'}`}
              >
                {link.name}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noreferrer">
              <Button variant="primary" size="sm" className="gap-2">
                <Phone className="w-4 h-4" /> WhatsApp
              </Button>
            </a>
          </div>

          {/* Botão Menu Mobile */}
          <button
            className={`md:hidden p-2 transition-colors ${isScrolled ? 'text-lola-green' : 'text-lola-purple'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Menu Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-white shadow-xl rounded-2xl border border-gray-100 p-4 flex flex-col gap-3 animate-in fade-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href, () => setIsOpen(false))}
                className="text-base font-medium text-gray-700 hover:text-lola-purple py-2 px-4 rounded-lg hover:bg-purple-50"
              >
                {link.name}
              </a>
            ))}
            <a href={whatsappLink} target="_blank" rel="noreferrer" className="mt-2">
              <Button fullWidth variant="primary" className="justify-center">
                Agendar Visita
              </Button>
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};