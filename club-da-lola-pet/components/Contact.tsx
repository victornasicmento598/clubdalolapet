import React from 'react';
import { MapPin, Phone, Clock, Car, Accessibility, HeartHandshake, Gem, Store, Navigation } from 'lucide-react';
import { Button } from './ui/Button';

export const Contact: React.FC = () => {
  const whatsappLink = "https://wa.me/5551997270171?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20Club%20da%20Lola.";
  const googleMapsDirectionsLink = "https://www.google.com/maps/dir/?api=1&destination=Av.+Dr.+Campos+Velho,+460+-+Cristal,+Porto+Alegre+-+RS";

  return (
    <section id="contato" className="py-20 bg-white relative overflow-hidden scroll-mt-32">
      {/* Decorative bubbles */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-lola-green/20 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 reveal">
          
          {/* Info Side */}
          <div className="p-8 md:p-12 space-y-8 flex flex-col justify-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-lola-purple mb-4">Venha nos visitar!</h2>
              <p className="text-gray-600">
                Agende uma visita para conhecer nossa estrutura e nossa equipe antes de trazer seu melhor amigo.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-lola-beige p-3 rounded-full text-lola-purple shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Endereço</h4>
                  <p className="text-gray-600">Av. Doutor Campos Velho, 460<br/>Cristal – Lojas 3, 4 e 5<br/>Porto Alegre – RS</p>
                </div>
              </div>

              {/* Link do WhatsApp Clicável */}
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-start gap-4 group cursor-pointer transition-all hover:translate-x-1"
                title="Clique para abrir o WhatsApp"
              >
                <div className="bg-lola-beige p-3 rounded-full text-lola-purple shrink-0 group-hover:bg-lola-green transition-colors">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-lola-purple transition-colors">WhatsApp</h4>
                  <p className="text-gray-600 group-hover:text-lola-purple font-medium transition-colors underline decoration-dotted underline-offset-4 decoration-lola-purple/30 group-hover:decoration-lola-purple">
                    (51) 99727-0171
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="bg-lola-beige p-3 rounded-full text-lola-purple shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800">Horário de Funcionamento</h4>
                  <p className="text-gray-600">Segunda a Sexta: 07h às 19h<br/>Sábados: 09h às 17h</p>
                </div>
              </div>

              {/* Badges de Informações Adicionais */}
              <div className="pt-4 border-t border-gray-100">
                <h4 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide text-lola-purple">Facilidades e Inclusão</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-lola-green/10 transition-colors">
                    <Car className="w-4 h-4 text-lola-purple" />
                    <span>Estacionamento gratuito</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-lola-green/10 transition-colors">
                    <Accessibility className="w-4 h-4 text-lola-purple" />
                    <span>Acessibilidade PCD</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-lola-green/10 transition-colors">
                    <Gem className="w-4 h-4 text-lola-purple" />
                    <span>Liderado por mulheres</span>
                  </div>

                   <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg hover:bg-lola-green/10 transition-colors">
                    <HeartHandshake className="w-4 h-4 text-lola-purple" />
                    <span>LGBTQ+ Friendly</span>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg sm:col-span-2 hover:bg-lola-green/10 transition-colors">
                    <HeartHandshake className="w-4 h-4 text-lola-purple" />
                    <span>Espaço seguro para pessoas transgênero</span>
                  </div>

                   <div className="flex items-center gap-2 text-sm text-gray-600 bg-gray-50 p-2 rounded-lg sm:col-span-2 hover:bg-lola-green/10 transition-colors">
                    <Store className="w-4 h-4 text-lola-purple" />
                    <span>Serviços no local</span>
                  </div>

                </div>
              </div>
            </div>

            <a href={whatsappLink} target="_blank" rel="noreferrer">
                <Button fullWidth variant="primary" size="lg">
                Falar no WhatsApp
                </Button>
            </a>
          </div>

          {/* Map Side */}
          <div className="bg-gray-200 h-64 md:h-full min-h-[400px] relative group">
            <iframe 
              src="https://maps.google.com/maps?q=Av.%20Doutor%20Campos%20Velho%2C%20460%2C%20Cristal%2C%20Porto%20Alegre%20-%20RS&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen={true} 
              loading="lazy" 
              className="absolute inset-0 grayscale group-hover:grayscale-0 transition-all duration-500"
            ></iframe>
            
            {/* Card flutuante com botão Traçar Rota */}
            <div className="absolute bottom-4 left-4 right-4 md:left-auto md:right-4 bg-white p-4 rounded-xl shadow-2xl border border-gray-100 max-w-sm animate-in slide-in-from-bottom-5 duration-700">
               <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                     <p className="font-bold text-lola-purple text-sm">Club da Lola</p>
                     <p className="text-xs text-gray-500">Av. Dr. Campos Velho, 460</p>
                  </div>
                  <div className="bg-lola-beige p-2 rounded-lg">
                     <MapPin className="w-5 h-5 text-lola-purple" />
                  </div>
               </div>
               <a href={googleMapsDirectionsLink} target="_blank" rel="noreferrer" className="block w-full">
                  <Button variant="primary" size="sm" fullWidth className="gap-2 text-xs font-bold shadow-sm hover:shadow-md">
                    <Navigation className="w-4 h-4" />
                    Traçar rota
                  </Button>
               </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};