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
    
    // Add animation classes on scroll
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