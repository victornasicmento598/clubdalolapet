import React from 'react';
import { Instagram } from 'lucide-react';
import { handleScrollTo } from '../utils/scroll';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-lola-purple text-white pt-16 pb-8 rounded-t-[3rem] mt-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center border-2 border-lola-green overflow-hidden">
                <img src="/logo.png" alt="Logo Club da Lola" className="w-full h-full object-cover" />
              </div>
              <span className="font-bold text-xl">Club da Lola</span>
            </div>
            <p className="text-purple-200 text-sm leading-relaxed">
              Cuidando com amor e responsabilidade do seu melhor amigo desde 2018.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold text-lola-green mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#quem-somos" onClick={(e) => handleScrollTo(e, '#quem-somos')} className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="hover:text-white transition-colors">Serviços</a></li>
              <li><a href="#depoimentos" onClick={(e) => handleScrollTo(e, '#depoimentos')} className="hover:text-white transition-colors">Depoimentos</a></li>
              <li><a href="#contato" onClick={(e) => handleScrollTo(e, '#contato')} className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lola-green mb-4">Serviços</h4>
            <ul className="space-y-2 text-purple-100">
              <li><a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="hover:text-white transition-colors">Creche (Daycare)</a></li>
              <li><a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="hover:text-white transition-colors">Hotelzinho</a></li>
              <li><a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')} className="hover:text-white transition-colors">Banho e Tosa</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold text-lola-green mb-4">Siga-nos</h4>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/clubdalolapet/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-lola-green hover:text-lola-purple transition-all">
                <Instagram size={20} />
              </a>
            </div>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-purple-300">
          <p>© {new Date().getFullYear()} Club da Lola Pet. Todos os direitos reservados.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};