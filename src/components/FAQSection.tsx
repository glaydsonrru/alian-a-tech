import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/companyData';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';

interface FAQSectionProps {
  onOpenQuote: () => void;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ onOpenQuote }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 bg-[#080c14] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            DÚVIDAS FREQUENTES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-tech tracking-tight text-white">
            Tudo o que você precisa saber sobre a <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aliança Tech</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            Respostas claras sobre contratação, alocação de talentos, segurança e níveis de serviço.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="font-tech font-bold text-base sm:text-lg text-white">
                    {item.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-300 shrink-0 transition-transform ${isOpen ? 'rotate-180 bg-blue-600 text-white' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 animate-in fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center bg-slate-900/40 p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-bold font-tech text-white text-base">Ainda ficou com alguma dúvida?</h4>
            <p className="text-xs text-slate-400">Nossa equipe consultiva está pronta para detalhar nossa operação.</p>
          </div>
          <button
            onClick={onOpenQuote}
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shrink-0 cursor-pointer"
          >
            Falar com Consultor
          </button>
        </div>

      </div>
    </section>
  );
};
