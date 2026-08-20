'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { ProblemSection } from '@/components/ProblemSection';
import { OperatingFramework } from '@/components/OperatingFramework';
import { IndustryMatrix } from '@/components/IndustryMatrix';
import { RegionalFootprint } from '@/components/RegionalFootprint';
import { AboutSection } from '@/components/AboutSection';
import { InsightsSection } from '@/components/InsightsSection';
import { InlineLeadForm } from '@/components/InlineLeadForm';
import { Footer } from '@/components/Footer';
import { QualificationModal } from '@/components/QualificationModal';

export default function Home() {
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
    <div className="min-h-screen bg-white text-slate-900 selection:bg-red-600 selection:text-white font-sans">
      {/* Header Navigation */}
      <Navbar 
        onOpenModal={() => handleOpenModal()} 
        activeSection={activeSection} 
      />

      {/* Main Sections */}
      <main>
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

      {/* Lead Qualification Modal */}
      <QualificationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultVertical={selectedVertical}
        defaultMarket={selectedMarket}
      />
    </div>
  );
}
