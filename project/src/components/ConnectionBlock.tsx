import React from 'react';

const ConnectionBlock: React.FC = () => {
  return (
    <section className="py-10 md:py-14">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-gray-800/50 rounded-lg p-6 md:p-8 border border-gray-700 shadow-lg transform transition-all duration-300 hover:shadow-blue-900/10">
          <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
            Enquanto outros conseguem crédito, celular e limite aprovado, você ainda está travado em algo que nem entende.
          </p>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Essa missão foi feita pra virar esse jogo. <span className="text-white font-medium">Em silêncio. Com resultado real.</span>
          </p>
        </div>

        {/* Imagem fora do bloco cinza */}
        <div className="flex justify-center mt-10">
          <img 
            src="https://imgur.com/orcaKAD.png" 
            alt="Ilustração missão" 
            className="w-80 md:w-[28rem] lg:w-[36rem] h-auto object-contain drop-shadow-2xl rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default ConnectionBlock;
