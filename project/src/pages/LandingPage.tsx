import React, { useEffect } from 'react';
import Header from '../components/Header';
import ConnectionBlock from '../components/ConnectionBlock';
import PhaseSection from '../components/PhaseSection';
import CTASection from '../components/CTASection';
import FAQSection from '../components/FAQSection';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Missão Crédito Limpo | Recupere seu crédito';

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-active');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.fade-in').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />

      <main>
        <div className="fade-in">
          <ConnectionBlock />
        </div>

        <div className="fade-in">
          <PhaseSection />
        </div>

        <div className="fade-in">
          <section className="bg-gray-800/50 rounded-lg p-4 md:p-6 mt-8 border border-gray-700 shadow-md mx-4 md:mx-auto max-w-2xl">
            <ul className="space-y-3 text-sm md:text-base text-gray-300 list-disc list-inside">
              <li>Os primeiros 30 que aplicaram o código já relataram desbloqueio em menos de 7 dias.</li>
              <li>Não é só teoria. Tem gente aplicando isso agora enquanto você lê.</li>
              <li>Essa missão ainda tá no início, mas já tem gente mandando foto do cartão ativado.</li>
            </ul>
          </section>
        </div>

        <div className="fade-in">
          <CTASection />
        </div>

        <div className="fade-in">
          <FAQSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
