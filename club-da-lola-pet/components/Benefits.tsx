import React from 'react';
import { CheckCircle, Heart, ShieldCheck, Sun } from 'lucide-react';

export const Benefits: React.FC = () => {
  const benefits = [
    { text: "Ambiente 100% monitorado e seguro", icon: ShieldCheck },
    { text: "Equipe apaixonada e treinada", icon: Heart },
    { text: "Área externa ampla para recreação", icon: Sun },
    { text: "Socialização separada por porte", icon: CheckCircle },
    { text: "Rotina equilibrada: brincadeira e descanso", icon: CheckCircle },
    { text: "Relatórios diários com fotos e vídeos", icon: CheckCircle },
  ];

  return (
    <section className="py-20 bg-lola-purple text-white rounded-3xl md:rounded-[4rem] mx-4 md:mx-8 my-10 shadow-2xl relative overflow-hidden reveal">
      {/* Background patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10 animate-pulse pointer-events-none">
        <Heart size={300} fill="white" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          <div className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight reveal delay-100">
              Por que escolher o <br />
              <span className="text-lola-green">Club da Lola?</span>
            </h2>
            <p className="text-purple-100 text-lg max-w-xl reveal delay-200">
              Sabemos que a confiança é fundamental. Aqui, cuidamos de cada detalhe para garantir a saúde física e mental do seu pet.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-6 reveal delay-300">
              {benefits.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 hover:translate-x-2 transition-transform duration-300">
                  <div className="bg-lola-green/20 p-2 rounded-full text-lola-green">
                    <item.icon size={20} strokeWidth={3} />
                  </div>
                  <span className="font-medium text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1 w-full flex justify-center lg:justify-end reveal delay-200">
            <div className="relative pb-16 sm:pb-20">
              <div className="absolute inset-0 bg-lola-green rounded-full transform rotate-6 translate-x-2 translate-y-2 animate-blob"></div>
              <img
                src="/foto9.jpg"
                alt="Cachorro sorrindo"
                className="relative rounded-full border-8 border-white shadow-xl w-64 h-64 md:w-80 md:h-80 object-cover"
              />

              {/* Floating review card */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white text-gray-800 p-4 rounded-xl shadow-lg max-w-[240px] sm:max-w-[260px] hidden sm:block transform hover:scale-105 transition-transform">
                <div className="flex text-yellow-400 mb-1 text-sm">★★★★★</div>
                <p className="text-xs font-bold">"Lugar super acolhedor, meus cachorros adoraram, indico de olhos fechados!"</p>
                <p className="text-xs text-gray-500 mt-2">- Benhur Da Rosa</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};