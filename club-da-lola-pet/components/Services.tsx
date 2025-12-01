import React, { useState, useEffect } from 'react';
import { Home, Hotel, Scissors, LucideIcon, X, Check, Phone } from 'lucide-react';
import { Button } from './ui/Button';

interface ServiceDetails {
  title: string;
  description: string;
  fullDescription: string;
  details: string[];
  Icon: LucideIcon;
  color: string;
  delay?: string;
  whatsappMessage: string;
}

interface ServiceCardProps extends ServiceDetails {
  onClick: () => void;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, Icon, color, delay, onClick }) => (
  <div
    onClick={onClick}
    className={`group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border-b-8 border-lola-purple hover:-translate-y-2 relative overflow-hidden reveal ${delay} cursor-pointer h-full flex flex-col`}
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-lola-green/10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:bg-lola-green/20 transition-colors"></div>

    <div className="w-16 h-16 rounded-2xl bg-lola-purple text-lola-green flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform">
      <Icon className="w-8 h-8" />
    </div>

    <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
      {description}
    </p>

    <div className="flex items-center text-lola-purple font-bold group-hover:translate-x-2 transition-transform mt-auto">
      Saiba mais <span className="ml-2">→</span>
    </div>
  </div>
);

export const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ServiceDetails | null>(null);

  // Fecha o modal ao pressionar ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedService(null);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const services: ServiceDetails[] = [
    {
      title: "Creche (Daycare)",
      description: "Um dia cheio de atividades, socialização e carinho. Ideal para gastar energia e fazer novos aumigos em um ambiente seguro.",
      fullDescription: "O Daycare do Club da Lola é a solução perfeita para a saúde física e mental do seu cão. Aqui ele não fica preso! Oferecemos uma rotina estruturada com atividades que estimulam os instintos naturais, promovem a socialização e gastam energia de forma positiva.",
      details: [
        "Socialização monitorada 100% do tempo",
        "Enriquecimento ambiental diário",
        "Áreas separadas por porte e temperamento",
        "Descanso supervisionado e climatizado",
        "Relatórios com fotos e vídeos"
      ],
      Icon: Home,
      color: "lola-green",
      delay: "delay-100",
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Creche%20(Daycare)%20do%20Club%20da%20Lola."
    },
    {
      title: "Hotel (Hospedagem)",
      description: "Vai viajar? Hospedagem confortável e supervisionada 24h. Seu pet dorme tranquilo e você também.",
      fullDescription: "Viaje tranquilo sabendo que seu pet está em boas mãos. Nosso hotelzinho oferece o conforto de casa com a segurança profissional. Nada de baias frias ou solidão: aqui eles dormem em ambientes aconchegantes e participam da rotina da creche durante o dia.",
      details: [
        "Monitoramento presencial 24 horas",
        "Ambiente livre de gaiolas (dormem soltos/em caminhas)",
        "Participação nas atividades da creche inclusa",
        "Alimentação seguindo a rotina de casa",
        "Administração de medicamentos (se necessário)"
      ],
      Icon: Hotel,
      color: "lola-purple",
      delay: "delay-200",
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Hospedagem%20(Hotel)%20no%20Club%20da%20Lola."
    },
    {
      title: "Banho & Tosa",
      description: "Estética animal com produtos de alta qualidade e profissionais que respeitam o tempo e o bem-estar do seu bichinho.",
      fullDescription: "Nosso banho e tosa é focado no bem-estar. Utilizamos produtos de linha premium e técnicas que respeitam os sinais do animal, tornando o momento do banho o mais relaxante possível. Nossos profissionais são treinados para lidar com todos os tipos de pelagem.",
      details: [
        "Produtos hipoalergênicos e de alta performance",
        "Banho relaxante com água morna",
        "Tosa higiênica, na tesoura ou máquina",
        "Corte de unhas e limpeza de ouvidos inclusos",
        "Hidratação profunda"
      ],
      Icon: Scissors,
      color: "lola-brown",
      delay: "delay-300",
      whatsappMessage: "Ol%C3%A1!%20Gostaria%20de%20agendar%20um%20Banho%20e%20Tosa%20no%20Club%20da%20Lola."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-white relative scroll-mt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-lola-purple mb-4">Nossos Serviços</h2>
          <p className="text-lg text-gray-600">
            Tudo o que seu melhor amigo precisa para ser feliz, saudável e limpinho em um só lugar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              {...service}
              onClick={() => setSelectedService(service)}
            />
          ))}
        </div>
      </div>

      {/* Modal de Detalhes */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative animate-in zoom-in-95 slide-in-from-bottom-5 duration-300 flex flex-col max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header Fixo */}
            <div className="bg-lola-purple p-6 md:p-8 shrink-0 relative z-10">
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-2 transition-all"
              >
                <X size={24} />
              </button>

              <div className="flex items-center gap-4 pr-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-lola-green text-lola-purple flex items-center justify-center shadow-lg shrink-0">
                  <selectedService.Icon className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-white leading-tight">{selectedService.title}</h3>
              </div>
            </div>

            {/* Conteúdo Rolável (Meio) */}
            <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8 bg-white">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                {selectedService.fullDescription}
              </p>

              <div className="bg-lola-beige rounded-2xl p-5 md:p-6">
                <h4 className="font-bold text-lola-purple mb-4 flex items-center gap-2 text-sm md:text-base">
                  <Check className="w-5 h-5" /> O que está incluso:
                </h4>
                <ul className="space-y-2 md:space-y-3">
                  {selectedService.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm md:text-base">
                      <div className="w-1.5 h-1.5 rounded-full bg-lola-green mt-2 shrink-0"></div>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Fixo (Botão) */}
            <div className="p-4 md:p-6 border-t border-gray-100 bg-white shrink-0 z-10">
              <a
                href={`https://wa.me/5551997270171?text=${selectedService.whatsappMessage}`}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <Button fullWidth variant="primary" size="lg" className="gap-2 shadow-xl hover:shadow-2xl hover:-translate-y-1 text-sm md:text-lg py-3 md:py-4">
                  <Phone className="w-5 h-5" />
                  Tenho interesse neste serviço
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};