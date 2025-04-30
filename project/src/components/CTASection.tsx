import React from 'react';

const CTASection: React.FC = () => {
  return (
    <section className="py-14 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <a 
          href="https://theylor.pay.yampi.com.br/r/PHHTHLP0U9" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block text-xl md:text-2xl font-bold text-white bg-red-600 hover:bg-red-700 transition-all duration-300 
                    py-4 px-10 rounded-lg shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
        >
          Iniciar a Missão Agora
        </a>
        
        <div className="mt-8 text-center">
          <p className="text-yellow-300 text-lg md:text-xl font-medium mb-2">⚠️ Últimas cópias por R$10</p>
          <p className="text-gray-300">Quando o limite for atingido, o valor será reajustado para R$47</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
