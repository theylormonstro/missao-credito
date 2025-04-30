import React from 'react';
import { Shield } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <div className="flex items-center mb-4">
          <Shield className="h-6 w-6 text-blue-500 mr-2" />
          <span className="text-lg font-medium text-white">Missão Crédito Limpo</span>
        </div>
        
        <p className="text-sm text-gray-400 text-center max-w-lg">
          Este material é protegido por lei. Qualquer cópia será rastreada e punida.
        </p>
        
        <div className="mt-6 text-xs text-gray-500 text-center">
          <p>© {new Date().getFullYear()} Missão Crédito Limpo. Todos os direitos reservados.</p>
          <p className="mt-1">
            <a href="#" className="text-gray-500 hover:text-blue-400 mx-2 transition-colors duration-300">Termos de Uso</a>
            <a href="#" className="text-gray-500 hover:text-blue-400 mx-2 transition-colors duration-300">Política de Privacidade</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;