'use client';

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { OperatingFramework } from './components/OperatingFramework';
import { IndustryMatrix } from './components/IndustryMatrix';
import { RegionalFootprint } from './components/RegionalFootprint';
import { AboutSection } from './components/AboutSection';
import { InsightsSection } from './components/InsightsSection';
import { InlineLeadForm } from './components/InlineLeadForm';
import { Footer } from './components/Footer';
import { QualificationModal } from './components/QualificationModal';

export function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedVertical, setSelectedVertical] = useState('');
  const [selectedMarket, setSelectedMarket] = useState('');
  const [activeSection, setActiveSection] = useState('hero');

  const handleOpenModal = (vertical = '', market = '') => {
    setSelectedVertical(vertical);
    setSelectedMarket(market);
    setModalOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans overflow-x-hidden">
      
      {/* High-Impact Body Background Africa Map Watermark Graphic */}
      <div className="fixed top-24 right-[-5%] lg:right-[-2%] w-[42rem] md:w-[54rem] lg:w-[68rem] opacity-25 pointer-events-none select-none z-0 transition-opacity mix-blend-multiply">
        <img
          src="/africa.png"
          alt="West Africa Regional Map Silhouette"
          className="w-full h-auto object-contain filter drop-shadow-2xl brightness-110 saturate-125"
        />
      </div>

      {/* Header Navigation */}
      <Navbar 
        onOpenModal={() => handleOpenModal()} 
        activeSection={activeSection} 
      />

      {/* Main Sections */}
      <main className="relative z-10">
        <Hero onOpenModal={() => handleOpenModal()} />
        <ProblemSection onOpenModal={() => handleOpenModal()} />
        <OperatingFramework onOpenModal={() => handleOpenModal()} />
        <IndustryMatrix onOpenModal={(vert) => handleOpenModal(vert)} />
        <RegionalFootprint onOpenModal={(market) => handleOpenModal('', market)} />
        <AboutSection onOpenModal={() => handleOpenModal()} />
        <InsightsSection onOpenModal={() => handleOpenModal()} />
        <InlineLeadForm />
      </main>

      {/* Footer */}
      <Footer onOpenModal={() => handleOpenModal()} />

      {/* Qualification Modal Overlay */}
      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultVertical={selectedVertical}
        defaultMarket={selectedMarket}
      />
    </div>
  );
}

export default App;
