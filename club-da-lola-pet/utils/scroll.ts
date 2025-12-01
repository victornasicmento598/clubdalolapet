import React from 'react';

export const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string, callback?: () => void) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);

    if (element) {
        // Configuração fina de rolagem para cada seção
        let headerOffset = -40; // Padrão (Quem somos, Contato) - Fica bem colado

        if (targetId === 'servicos') {
            headerOffset = 30; // Um pouco mais pro topo que antes
        } else if (targetId === 'depoimentos') {
            headerOffset = 100; // Mais pra baixo para mostrar a nota do Google sem cortar
        } else if (targetId === 'contato') {
            headerOffset = -10; // Um pouco mais de espaço que o padrão (-40), mas sutil
        }

        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });

        if (callback) {
            callback();
        }
    }
};
