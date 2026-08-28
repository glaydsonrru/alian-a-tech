import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/companyData';
import { CaseStudy } from '../types';
import { ArrowUpRight, CheckCircle2, Building, ShieldAlert, Cpu } from 'lucide-react';

interface CaseStudiesProps {
  onOpenQuote: () => void;
}

export const CaseStudies: React.FC<CaseStudiesProps> = ({ onOpenQuote }) => {
  const [activeCase, setActiveCase] = useState<CaseStudy | null>(null);

  return (
    <section id="cases" className="py-24 bg-[#0a0f1c] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              RESULTADOS COMPROVADOS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white">
              Cases reais de <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">transformação e estabilidade.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Conheça como a Aliança Tech destrava o potencial de empresas em diversos setores por meio de especialistas alocados e infraestrutura resiliente.
            </p>
          </div>

          <button
            onClick={onOpenQuote}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-cyan-400 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 transition-all shrink-0 cursor-pointer self-start md:self-auto"
          >
            <span>Ver Todos os Cases</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2x2 Grid of Cases (as seen in Screenshot 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {CASE_STUDIES.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveCase(item)}
              className="group relative rounded-3xl overflow-hidden bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 transition-all duration-300 shadow-2xl flex flex-col justify-between cursor-pointer min-h-[380px]"
            >
              {/* Background Image with Dark Vignette */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-40 contrast-125 group-hover:brightness-50"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/80 to-transparent" />
              </div>

              {/* Top Meta info */}
              <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-cyan-400">
                    0{index + 1} / {item.segment.toUpperCase()}
                  </span>
                </div>

                <div className="w-9 h-9 rounded-full bg-slate-900/80 border border-slate-700 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-6 sm:p-8 space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-cyan-300 font-bold block mb-1">
                    {item.clientName}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-tech text-white leading-snug group-hover:text-cyan-200 transition-colors">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 line-clamp-2">
                  {item.description}
                </p>

                {/* Impact Pill */}
                <div className="pt-2 flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-400">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {item.impactMetric}
                  </span>

                  <div className="flex gap-1.5">
                    {item.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950/70 border border-slate-800 text-slate-400">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Case Details Modal */}
      {activeCase && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#0e1628] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <span className="text-xs font-mono uppercase text-cyan-400 font-bold">
                  {activeCase.segment} • {activeCase.clientName}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-tech text-white mt-1">
                  {activeCase.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveCase(null)}
                className="p-2 text-slate-400 hover:text-white rounded-lg bg-slate-800"
              >
                ✕
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400">Desafio Inicial</h4>
                <p className="text-sm text-slate-300 mt-1">{activeCase.description}</p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase text-slate-400">Resultados & Impactos Atingidos</h4>
                <div className="space-y-2 mt-2">
                  {activeCase.results.map((res, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-emerald-300 bg-emerald-950/30 p-2.5 rounded-xl border border-emerald-500/20">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 flex justify-between items-center">
              <span className="text-xs font-mono text-cyan-400">{activeCase.impactMetric}</span>
              <button
                onClick={() => {
                  setActiveCase(null);
                  onOpenQuote();
                }}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-sm font-semibold cursor-pointer"
              >
                Quero Resultados Semelhantes
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
