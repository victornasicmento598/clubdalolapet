import React from 'react';
import { Button } from './ui/Button';
import { PawPrint, CalendarHeart, Star } from 'lucide-react';
import { handleScrollTo } from '../utils/scroll';

export const Hero: React.FC = () => {
  const whatsappLink = "https://wa.me/5551997270171?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Club%20da%20Lola.";

  return (
    <section className="relative pt-28 pb-20 md:pt-32 md:pb-32 overflow-hidden bg-lola-purple rounded-b-[3rem] md:rounded-b-[5rem]">
      {/* Background Animated Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Blob 1 (Verde) */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-lola-green/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>

        {/* Blob 2 (Roxo Claro/Rosa) */}
        <div className="absolute top-0 -right-4 w-72 h-72 bg-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>

        {/* Blob 3 (Central Inferior) */}
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-400/30 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>

        {/* Overlay de textura sutil (opcional, mantendo limpo por enquanto) */}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Text Content */}
          <div className="flex-1 text-center md:text-left space-y-6 reveal">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white text-lola-purple font-bold text-sm tracking-wide mb-2 animate-pulse">
              🐾 Seu pet em boas mãos
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-[1.1]">
              A segunda <span className="text-lola-green">casa</span> do seu pet!
            </h1>
            <p className="text-lg md:text-xl text-gray-200 max-w-lg mx-auto md:mx-0 font-medium">
              Creche, Hotel e Banho & Tosa na Zona Sul de Porto Alegre – ele ama e você confia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
              <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button variant="primary" size="lg" className="w-full sm:w-auto gap-2 hover:scale-105 transition-transform">
                  <PawPrint className="w-5 h-5" />
                  Agende pelo WhatsApp
                </Button>
              </a>
              <a href="#servicos" onClick={(e) => handleScrollTo(e, '#servicos')}>
                <Button variant="outline" size="lg" className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:!text-lola-purple gap-2 hover:scale-105 transition-all duration-300">
                  <CalendarHeart className="w-5 h-5" />
                  Conheça nossa creche
                </Button>
              </a>
            </div>

            {/* Google Rating Highlight */}
            <div className="flex items-center justify-center md:justify-start gap-3 pt-2">
              <div className="flex gap-1 animate-bounce-slow" style={{ animationDuration: '3s' }}>
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400 drop-shadow-sm" />
                ))}
              </div>
              <div className="text-white text-sm">
                <span className="font-bold text-base mr-1">5.0</span>
                <span className="opacity-90">no Google Avaliações</span>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 w-full relative reveal delay-200">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Circle behind image */}
              <div className="absolute inset-0 bg-lola-green/20 rounded-full animate-pulse transform scale-105"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl overflow-hidden border-4 border-lola-green transition-transform duration-500 hover:scale-[1.02]">
                <img
                  src="/frente.png"
                  alt="Cachorro feliz no Club da Lola"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};