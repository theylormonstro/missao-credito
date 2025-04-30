import React, { useEffect, useRef } from 'react';
import PhaseCard from './PhaseCard';

const PhaseSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = document.querySelectorAll('.phase-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('animate-in');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const phases = [
    {
      phase: 1,
      title: 'Radar Invisível',
      description: 'Descubra o que seu CPF mostra pros sistemas de crédito — e por que você é recusado sem saber o motivo.',
      icon: 'radar',
    },
    {
      phase: 2,
      title: 'Mensagem de Ruptura',
      description: 'A mensagem exata que destrava negociação com empresas e faz o WhatsApp responder mesmo com nome negativado.',
      icon: 'message',
    },
    {
      phase: 3,
      title: 'Reconquista',
      description: 'Como voltar a ser aprovado por bancos, apps e lojas mesmo com histórico quebrado.',
      icon: 'reconquest',
    },
  ];

  return (
    <section ref={sectionRef} className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            As 3 Fases da Missão
          </span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {phases.map((phase) => (
            <div key={phase.phase} className="phase-card opacity-0 translate-y-8 transition-all duration-500">
              <PhaseCard {...phase} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhaseSection;