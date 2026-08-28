import React from 'react';
import { CORE_PILLARS, CORE_VALUES } from '../data/companyData';
import { Users, MonitorCheck, ShieldAlert, TrendingUp, CheckCircle, ShieldCheck } from 'lucide-react';

interface PillarsSectionProps {
  onSelectPillar?: (pillarId: string) => void;
  onOpenQuote: (type?: 'staffing' | 'infra' | 'general') => void;
}

export const PillarsSection: React.FC<PillarsSectionProps> = ({ onSelectPillar, onOpenQuote }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Users: <Users className="w-7 h-7 text-blue-400" />,
    MonitorCheck: <MonitorCheck className="w-7 h-7 text-cyan-400" />,
    ShieldLock: <ShieldCheck className="w-7 h-7 text-blue-400" />,
    TrendingUp: <TrendingUp className="w-7 h-7 text-emerald-400" />,
  };

  return (
    <section className="py-20 bg-[#0a0f1c] relative overflow-hidden border-b border-slate-800/60">
      {/* Background subtleties */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            NOSSA IDENTIDADE & COMPROMISSO
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-tech tracking-tight text-white">
            Os 4 Pilares Estratégicos da <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aliança Tech</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Combinamos inteligência humana, processos certificados e tecnologia de ponta para sustentar o crescimento contínuo de nossos clientes.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CORE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="group relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0e1628]/80 border border-slate-800 hover:border-blue-500/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner">
                    {iconMap[pillar.icon] || <Users className="w-7 h-7 text-blue-400" />}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-blue-950/70 border border-blue-500/30 text-cyan-300">
                    {pillar.badge}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-slate-500">
                    PILAR 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold font-tech text-white group-hover:text-cyan-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <div className="text-xs font-semibold text-blue-400 mt-0.5">
                    {pillar.subtitle}
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800/80">
                <button
                  onClick={() => onOpenQuote(pillar.id === 'profissionais' ? 'staffing' : 'infra')}
                  className="w-full py-2 px-3 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/60 hover:bg-blue-600 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Conhecer detalhes</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* 4 Core Values Bar */}
        <div className="mt-16 rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 sm:p-8">
          <div className="text-center mb-6">
            <span className="text-xs uppercase font-mono tracking-widest text-slate-400">
              VALORES FUNDAMENTAIS DA NOSSA PARCERIA
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {CORE_VALUES.map((val, index) => (
              <div key={val.label} className="space-y-1">
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span className="font-tech font-bold text-lg text-white uppercase tracking-wider">
                    {val.label}
                  </span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed max-w-[200px] mx-auto">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
