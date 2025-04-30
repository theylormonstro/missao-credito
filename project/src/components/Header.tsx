import React from 'react';
import { Shield } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center py-12 md:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-transparent opacity-70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex justify-center mb-6">
          <Shield className="h-16 w-16 text-blue-500" />
        </div>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
          Você está a <span className="text-red-500">3 fases</span> de voltar a ter crédito
        </h1>
        
        <h2 className="text-xl md:text-2xl text-gray-300 font-light">
          Sem pagar consultoria. Sem call. Sem enrolação.
        </h2>
      </div>
    </header>
  );
};

export default Header;