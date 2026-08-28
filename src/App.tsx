import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LeadMagnetBanner } from './components/LeadMagnetBanner';
import { PillarsSection } from './components/PillarsSection';
import { RadarEcosystem } from './components/RadarEcosystem';
import { ServicesHub } from './components/ServicesHub';
import { StaffingCalculator } from './components/StaffingCalculator';
import { ExecutiveTeamSection } from './components/ExecutiveTeamSection';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { CareersHub } from './components/CareersHub';
import { ContactSection } from './components/ContactSection';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { QuoteModal } from './components/QuoteModal';
import { JobApplyModal } from './components/JobApplyModal';
import { LeadMagnetModal } from './components/LeadMagnetModal';
import { JobOpening } from './types';

export default function App() {
  // Modal states
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteType, setQuoteType] = useState<string>('general');
  const [quoteDetails, setQuoteDetails] = useState<any>(undefined);

  const [jobModalOpen, setJobModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);

  const [leadMagnetOpen, setLeadMagnetOpen] = useState(false);

  // Modal Triggers
  const handleOpenQuote = (type: string = 'general') => {
    setQuoteType(type);
    setQuoteDetails(undefined);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithDetails = (details: {
    role: string;
    seniority: string;
    headcount: number;
    model: string;
  }) => {
    setQuoteType('staffing');
    setQuoteDetails(details);
    setQuoteModalOpen(true);
  };

  const handleApplyJob = (job: JobOpening | null) => {
    setSelectedJob(job);
    setJobModalOpen(true);
  };

  const handleOpenCareers = () => {
    const el = document.getElementById('carreiras');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 selection:bg-blue-600 selection:text-white relative">
      {/* Top Floating Glass Navigation */}
      <Navbar
        onOpenQuote={handleOpenQuote}
        onOpenCareers={handleOpenCareers}
      />

      {/* Main Content Area */}
      <main>
        {/* 1. Hero Section with Live Telemetry Radar */}
        <Hero
          onOpenQuote={handleOpenQuote}
          onOpenLeadMagnet={() => setLeadMagnetOpen(true)}
          onOpenCareers={handleOpenCareers}
        />

        {/* 2. Sticky Lead Magnet Bar */}
        <LeadMagnetBanner onSuccessSubmit={() => setLeadMagnetOpen(true)} />

        {/* 3. 4 Core Pillars from Aliança Tech Identity */}
        <PillarsSection
          onOpenQuote={handleOpenQuote}
        />

        {/* 4. Radar Ecosystem ("Complexidade invisível. Resultado evidente.") */}
        <RadarEcosystem onOpenQuote={() => handleOpenQuote('infra')} />

        {/* 5. Services Hub ("Soluções que se conectam") */}
        <ServicesHub onOpenQuote={handleOpenQuote} />

        {/* 6. Staffing & ROI Calculator */}
        <StaffingCalculator
          onOpenQuoteWithDetails={handleOpenQuoteWithDetails}
        />

        {/* 7. Executive Team & Leadership ("Próximos no contato. Precisos na entrega.") */}
        <ExecutiveTeamSection onOpenQuote={() => handleOpenQuote('general')} />

        {/* 8. Case Studies ("Cases Reais de Transformação e Estabilidade") */}
        <CaseStudies onOpenQuote={() => handleOpenQuote('general')} />

        {/* 9. Testimonials ("Confiança para seguir em frente") */}
        <Testimonials />

        {/* 10. Careers & Talent Hub ("Espaço do Colaborador / Trabalhe Conosco") */}
        <CareersHub onApplyJob={handleApplyJob} />

        {/* 11. B2B & Contact Section ("Preencha seus dados para uma conversa") */}
        <ContactSection />

        {/* 12. FAQ Section */}
        <FAQSection onOpenQuote={() => handleOpenQuote('general')} />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenCareers={handleOpenCareers}
      />

      {/* Interactive Modals */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialType={quoteType}
        initialDetails={quoteDetails}
      />

      <JobApplyModal
        isOpen={jobModalOpen}
        onClose={() => setJobModalOpen(false)}
        job={selectedJob}
      />

      <LeadMagnetModal
        isOpen={leadMagnetOpen}
        onClose={() => setLeadMagnetOpen(false)}
      />

      {/* Floating WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
