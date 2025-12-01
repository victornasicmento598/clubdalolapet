import React, { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Benefits } from './components/Benefits';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  // Configuração global para animações de scroll e carregamento inicial
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        threshold: 0.1, // Dispara quando 10% do elemento está visível
        rootMargin: '0px 0px -50px 0px' // Um pequeno offset
      }
    );

    const elements = document.querySelectorAll('.reveal');

    // Anima elementos que já estão visíveis ao carregar (como o Hero)
    setTimeout(() => {
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

        if (isVisible) {
          el.classList.add('active');
        }

        observer.observe(el);
      });
    }, 100); // Pequeno delay para garantir que o DOM está pronto

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Benefits />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;