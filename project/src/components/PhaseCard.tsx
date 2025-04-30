import React from 'react';
import { Eye, MessageCircle, TrendingUp } from 'lucide-react';

interface PhaseCardProps {
  phase: number;
  title: string;
  description: string;
  icon: 'radar' | 'message' | 'reconquest';
}

const PhaseCard: React.FC<PhaseCardProps> = ({ phase, title, description, icon }) => {
  const getIcon = () => {
    switch (icon) {
      case 'radar':
        return <Eye className="h-8 w-8 text-blue-400" />;
      case 'message':
        return <MessageCircle className="h-8 w-8 text-green-400" />;
      case 'reconquest':
        return <TrendingUp className="h-8 w-8 text-red-400" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-600 h-full">
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center mr-3">
          <span className="font-bold text-white">{phase}</span>
        </div>
        <div className="ml-auto">{getIcon()}</div>
      </div>
      
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default PhaseCard;