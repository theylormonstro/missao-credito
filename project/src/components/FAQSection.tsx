import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        className="w-full text-left py-4 flex justify-between items-center focus:outline-none"
        onClick={onClick}
        aria-expanded={isOpen}
      >
        <span className="text-lg font-medium text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-blue-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="pb-4 text-gray-300">{answer}</p>
      </div>
    </div>
  );
};

const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'É curso?',
      answer: 'Não é um curso tradicional. É um guia estratégico prático com etapas claras para você implementar e recuperar seu crédito de forma independente, sem precisar de consultoria ou assistência contínua.'
    },
    {
      question: 'Funciona mesmo com nome sujo há anos?',
      answer: 'Sim. O material foi desenvolvido especificamente para casos persistentes e difíceis. Quanto mais tempo você está com o nome negativado, mais impacto as estratégias da "Missão Crédito Limpo" podem ter na sua situação.'
    },
    {
      question: 'Score importa?',
      answer: 'O material aborda estratégias para pessoas em diferentes níveis de score, desde os mais baixos até scores medianos. Independente do seu score atual, você encontrará estratégias aplicáveis para a sua situação.'
    },
    {
      question: 'Tem reembolso?',
      answer: 'Sim. Oferecemos garantia de satisfação de 7 dias. Se você seguir as estratégias e não perceber nenhum resultado ou caminho claro para a recuperação do seu crédito, devolveremos 100% do seu investimento.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
          Perguntas Frequentes
        </h2>
        
        <div className="bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;const faqs = [
  {
    question: 'É curso?',
    answer: 'Não é um curso tradicional. É um guia estratégico prático com etapas claras para você implementar e recuperar seu crédito de forma independente, sem precisar de consultoria ou assistência contínua.'
  },
  {
    question: 'Funciona mesmo com nome sujo há anos?',
    answer: 'Sim. O material foi desenvolvido especificamente para casos persistentes e difíceis. Quanto mais tempo você está com o nome negativado, mais impacto as estratégias da "Missão Crédito Limpo" podem ter na sua situação.'
  },
  {
    question: 'Score importa?',
    answer: 'O material aborda estratégias para pessoas em diferentes níveis de score, desde os mais baixos até scores medianos. Independente do seu score atual, você encontrará estratégias aplicáveis para a sua situação.'
  },
  {
    question: 'Tem reembolso?',
    answer: 'Não. Esse é um material direto ao ponto, sem enrolação e com preço simbólico. O acesso é imediato, e por isso não oferecemos garantia. A proposta é simples: quem entende, age. Quem duvida, não entra.'
  }
];
