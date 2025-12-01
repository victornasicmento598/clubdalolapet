import React from 'react';

export const About: React.FC = () => {
  return (
    <section id="quem-somos" className="py-20 md:py-28 bg-lola-beige scroll-mt-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">

          {/* Image Grid */}
          <div className="flex-1 grid grid-cols-2 gap-4 relative reveal">
            <div className="absolute -z-10 -top-6 -left-6 w-24 h-24 bg-lola-green rounded-full opacity-50 blur-xl animate-pulse"></div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-32 h-32 bg-lola-purple rounded-full opacity-20 blur-xl animate-pulse delay-100"></div>

            <img
              src="/fotos5.jpg"
              alt="Pets no Club da Lola"
              className="rounded-2xl shadow-lg transform translate-y-8 hover:-translate-y-2 transition-transform duration-500 object-cover h-64 w-full"
            />
            <img
              src="/foto8.jpg"
              alt="Pets no Club da Lola"
              className="rounded-2xl shadow-lg hover:-translate-y-2 transition-transform duration-500 object-cover h-64 w-full"
            />
          </div>

          {/* Content */}
          <div className="flex-1 space-y-6 reveal delay-200">
            <span className="text-lola-purple font-bold tracking-wider uppercase text-sm">Quem Somos</span>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800">
              Mais que um espaço, <br />uma <span className="text-lola-purple underline decoration-lola-green decoration-4 underline-offset-4">família.</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              O <strong>Club da Lola</strong> nasceu do amor incondicional pelos animais. Localizados no bairro Cristal, zona sul de Porto Alegre, criamos um ambiente onde seu pet não é apenas um hóspede, mas parte da nossa matilha.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Entendemos que eles são filhos de 4 patas. Por isso, oferecemos uma estrutura segura, cheia de brincadeiras e com monitoramento constante, para que você possa trabalhar ou viajar com a tranquilidade de saber que ele está feliz.
            </p>

            <div className="pt-4 grid grid-cols-2 gap-6">
              <div className="flex flex-col group cursor-default">
                <span className="text-4xl font-bold text-lola-purple group-hover:scale-110 transition-transform origin-left">5+</span>
                <span className="text-gray-500 font-medium">Anos de amor</span>
              </div>
              <div className="flex flex-col group cursor-default">
                <span className="text-4xl font-bold text-lola-purple group-hover:scale-110 transition-transform origin-left">1000+</span>
                <span className="text-gray-500 font-medium">Pets felizes</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};