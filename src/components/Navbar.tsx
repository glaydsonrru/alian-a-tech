import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Phone, 
  MessageSquare, 
  Menu, 
  X, 
  Briefcase, 
  Building2, 
  ShieldCheck, 
  ArrowUpRight,
  Calculator
} from 'lucide-react';

interface NavbarProps {
  onOpenQuote: (type?: 'staffing' | 'infra' | 'general') => void;
  onOpenCareers: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote, onOpenCareers }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState<'empresas' | 'talentos'>('empresas');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Visão', href: '#visao' },
    { label: 'Soluções', href: '#solucoes' },
    { label: 'Radar Tech', href: '#radar' },
    { label: 'Simulador', href: '#simulador' },
    { label: 'Cases', href: '#cases' },
    { label: 'Trabalhe Conosco', href: '#carreiras', isCareers: true },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080b12]/90 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-xl'
            : 'bg-gradient-to-b from-[#080b12]/95 to-transparent py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="focus:outline-none" aria-label="Aliança Tech Home">
            <Logo size="md" variant="full" />
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`px-3 py-1.5 text-sm font-medium rounded-lg transition-colors ${
                  link.isCareers
                    ? 'text-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 border border-cyan-500/20'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct WhatsApp Call */}
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20as%20solu%C3%A7%C3%B5es%20da%20Alian%C3%A7a%20Tech.`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-emerald-400 transition-colors border border-slate-700/60"
              title="Fale via WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>

            {/* Primary Action Button */}
            <button
              onClick={() => onOpenQuote('general')}
              className="group relative inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 rounded-lg shadow-lg shadow-blue-500/20 transition-all active:scale-95 cursor-pointer"
            >
              <span>Fale com um Especialista</span>
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-slate-800/80 text-slate-300 hover:text-white"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#080b12]/98 backdrop-blur-xl pt-24 px-6 flex flex-col justify-between pb-8 lg:hidden animate-in fade-in duration-200">
          <div className="space-y-4">
            <div className="flex bg-slate-900/90 p-1 rounded-xl border border-slate-800 mb-6">
              <button
                onClick={() => setActiveAudience('empresas')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeAudience === 'empresas'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Para Empresas
              </button>
              <button
                onClick={() => {
                  setActiveAudience('talentos');
                  onOpenCareers();
                  setMobileMenuOpen(false);
                }}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeAudience === 'talentos'
                    ? 'bg-cyan-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Trabalhe Conosco
              </button>
            </div>

            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-medium text-slate-200 hover:bg-slate-800/70 border border-transparent hover:border-slate-700/50"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </nav>
          </div>

          <div className="space-y-3 pt-6 border-t border-slate-800">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote('general');
              }}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl shadow-lg"
            >
              Fale com um Especialista
            </button>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1,%20gostaria%20de%20um%20atendimento%20da%20Alian%C3%A7a%20Tech.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 flex items-center justify-center gap-2 font-medium text-emerald-400 bg-slate-900 border border-slate-800 rounded-xl"
            >
              <MessageSquare className="w-4 h-4" />
              WhatsApp Direto: {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      )}
    </>
  );
};
