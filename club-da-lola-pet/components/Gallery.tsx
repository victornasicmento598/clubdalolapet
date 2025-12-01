import React, { useState, useEffect } from 'react';
import { Instagram, Star, Quote, X, ZoomIn } from 'lucide-react';
import { Button } from './ui/Button';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Avaliações reais dos clientes
  const testimonials = [
    {
      name: "Júlia de Almeida Aguiar",
      text: "O MELHOR LUGAR PARA BANHO DE DOGUINHOS <3 Os donos são uns verdadeiros amores, casal e filha muito amorosos, tratam os cachorros como se fossem deles de tanto carinho e cuidado! Deixo a minha pet de olhos fechados com eles. Indico muito!",
      stars: 5
    },
    {
      name: "Leolibia Linden",
      text: "Clube da Lola é um ambiente familiar e acolhedor! O Roco se sentiu super em casa e teve uma rápida adaptação interagindo muito bem com outros dogs! Recomendadíssimo!",
      stars: 5
    },
    {
      name: "Renata Fortes da Cunha",
      text: "Super indico!!! Desde a primeira vez que deixamos nosso cachorrinho lá, foi perfeito. O contato no whats, na chegada do \"hóspede\", no carinho durante a estadia...",
      stars: 5
    },
    {
      name: "Tábata Marques",
      text: "Minha duplinha passou a semana do Natal hospedadas no club da Lola, pelos vídeos recebidos percebi que elas aproveitaram muito, brincaram, fizeram novas amizades...",
      stars: 5
    },
    {
      name: "Raquel Teixeira",
      text: "Eu só tive experiências positivas, os banhos são muito bem dados, elas voltam cheirosas e bem limpinhas e não voltam estressadas. Agora usei o serviço de hotelzinho e eles foram muito cuidadosos...",
      stars: 5
    },
    {
      name: "Helena Carina",
      text: "Estou muito feliz por ter encontrado um lugar maravilhoso e confiável para hospedar os meus pets. No Club da Lola, meus cãezinhos ficam muito bem cuidados e eu posso ficar tranquila.",
      stars: 5
    }
  ];

  // Fotos reais do Club da Lola
  const images = [
    "/creche.jpg",
    "/foto1.jpg",
    "/foto2.jpg",
    "/hotel.jpg"
  ];

  return (
    <section id="depoimentos" className="py-20 bg-lola-beige scroll-mt-32">
      <div className="container mx-auto px-4 md:px-6">

        {/* Seção de Depoimentos (Texto) */}
        <div className="mb-20">
          <div className="text-center mb-12 flex flex-col items-center reveal">
            {/* Badge Google */}
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-100 mb-8 transform hover:scale-105 transition-transform duration-300">
              <span className="font-bold text-2xl text-gray-800 leading-none">5.0</span>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <div className="h-8 w-px bg-gray-200 mx-1"></div>
              <span className="text-gray-600 font-medium text-sm leading-tight text-left">
                Excelente no<br />
                <span className="font-bold text-blue-600">G</span>
                <span className="font-bold text-red-500">o</span>
                <span className="font-bold text-yellow-500">o</span>
                <span className="font-bold text-blue-600">g</span>
                <span className="font-bold text-green-600">l</span>
                <span className="font-bold text-red-500">e</span>
              </span>
            </div>

            <span className="text-lola-purple font-bold tracking-wider uppercase text-sm block">Depoimentos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4 mt-2">O que os donos de pets dizem</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Quem ama confia. Veja as experiências de quem já faz parte da nossa família.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t, idx) => (
              <div key={idx} className={`bg-white p-8 rounded-3xl shadow-lg border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative group reveal delay-${(idx % 3) * 100}`}>
                <div className="absolute top-6 right-6 text-lola-green/30 w-10 h-10 group-hover:text-lola-green/50 transition-colors">
                  <Quote className="w-full h-full rotate-180 fill-current" />
                </div>

                <div className="flex gap-1 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed relative z-10 italic">
                  "{t.text}"
                </p>

                <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                  <div className="w-10 h-10 rounded-full bg-lola-purple/10 flex items-center justify-center text-lola-purple font-bold text-sm shrink-0">
                    {t.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                  </div>
                  <div className="overflow-hidden">
                    <h4 className="font-bold text-gray-900 text-sm truncate">{t.name}</h4>
                    <span className="text-xs text-gray-500 block">Cliente Club da Lola</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seção de Galeria (Fotos) */}
        <div className="text-center mb-12 border-t border-gray-200 pt-16 reveal">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Dia a dia no Club</h3>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira alguns momentos de diversão dos nossos pets.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12 reveal delay-100">
          {images.map((src, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-2xl shadow-md cursor-pointer aspect-square"
              onClick={() => setSelectedImage(src)}
            >
              <img
                src={src}
                alt={`Pet do Club da Lola ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-lola-purple/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <ZoomIn className="text-white w-8 h-8 scale-0 group-hover:scale-100 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center reveal delay-200">
          <a href="https://www.instagram.com/clubdalolapet/" target="_blank" rel="noreferrer">
            <Button variant="secondary" className="gap-2">
              <Instagram className="w-5 h-5" />
              Siga @ClubDaLolaPet no Instagram
            </Button>
          </a>
        </div>
      </div>

      {/* Modal / Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 text-white/80 hover:text-white bg-black/50 hover:bg-black/70 rounded-full p-2 transition-all"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>

          <img
            src={selectedImage}
            alt="Pet ampliado"
            className="max-w-full max-h-[85vh] md:max-h-[90vh] rounded-xl shadow-2xl object-contain animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Impede o fechamento ao clicar na imagem
          />
        </div>
      )}
    </section>
  );
};