import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import ComboPackages from './components/ComboPackages';
import PriceCalculator from './components/PriceCalculator';
import ProcessSection from './components/ProcessSection';
import Testimonials from './components/Testimonials';
import FoundersSection from './components/FoundersSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import QuoteModal from './components/QuoteModal';
import LegalModal from './components/LegalModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [selectedServiceForModal, setSelectedServiceForModal] = useState(null);
  const [estimatorDetails, setEstimatorDetails] = useState(null);
  
  // Legal Modal State (Privacy Policy & Terms)
  const [legalModalOpen, setLegalModalOpen] = useState(false);
  const [legalTab, setLegalTab] = useState('privacy');

  // Sync dark class to html document
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleOpenQuote = (service = null) => {
    setSelectedServiceForModal(service);
    setEstimatorDetails(null);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithEstimator = (details) => {
    setEstimatorDetails(details);
    setSelectedServiceForModal(null);
    setQuoteModalOpen(true);
  };

  const handleSelectCombo = (pkg) => {
    setSelectedServiceForModal(pkg);
    setQuoteModalOpen(true);
  };

  const handleOpenLegal = (tab = 'privacy') => {
    setLegalTab(tab);
    setLegalModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      
      {/* Sticky Header */}
      <Navbar 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
        onOpenQuote={() => handleOpenQuote()} 
      />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero 
          onOpenQuote={() => handleOpenQuote()} 
        />

        {/* 2. Services Overview with Tab Filter & Full Cards */}
        <ServicesSection 
          onSelectService={(service) => handleOpenQuote(service)}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* 3. Combo Packages with Most Popular Badge */}
        <ComboPackages 
          onSelectCombo={handleSelectCombo}
        />

        {/* 4. Interactive Live Price Calculator in ₹ INR */}
        <PriceCalculator 
          onOpenQuoteWithDetails={handleOpenQuoteWithEstimator}
        />

        {/* 5. How We Work (4 Milestone Steps) */}
        <ProcessSection />

        {/* 6. Equal Co-Founders & Leadership Team */}
        <FoundersSection />

        {/* 7. Indian Founders Testimonials */}
        <Testimonials />

        {/* 8. Contact Section with Input Validation */}
        <ContactSection 
          selectedService={selectedServiceForModal}
          prefillDetails={estimatorDetails}
        />
      </main>

      {/* 9. Footer with quick links, official social icons & legal policies */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Floating Action Buttons: WhatsApp & Callback */}
      <FloatingWhatsApp />

      {/* Pop-up Quote & Consultation Modal */}
      <QuoteModal 
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={selectedServiceForModal}
        initialDetails={estimatorDetails}
      />

      {/* Pop-up Privacy Policy & Terms of Service Modal */}
      <LegalModal
        isOpen={legalModalOpen}
        onClose={() => setLegalModalOpen(false)}
        defaultTab={legalTab}
      />

    </div>
  );
}
