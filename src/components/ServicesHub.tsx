import React, { useState } from 'react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';
import { 
  ArrowRight, 
  CheckCircle2, 
  Server, 
  Shield, 
  Cloud, 
  Compass, 
  UserCheck, 
  Sparkles,
  Layers,
  Cpu
} from 'lucide-react';

interface ServicesHubProps {
  onOpenQuote: (serviceType?: string) => void;
}

export const ServicesHub: React.FC<ServicesHubProps> = ({ onOpenQuote }) => {
  const [activeServiceId, setActiveServiceId] = useState<string>(SERVICES[0].id);

  const activeService = SERVICES.find((s) => s.id === activeServiceId) || SERVICES[0];

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck':
        return <UserCheck className="w-5 h-5" />;
      case 'Server':
        return <Server className="w-5 h-5" />;
      case 'Shield':
        return <Shield className="w-5 h-5" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5" />;
      case 'Compass':
        return <Compass className="w-5 h-5" />;
      default:
        return <Layers className="w-5 h-5" />;
    }
  };

  return (
    <section id="solucoes" className="py-24 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              UMA TI. TODAS AS FRENTES.
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white">
              Soluções que se <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">conectam.</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-300">
              Explore nosso ecossistema de TI. Cada camada trabalha em conjunto para reduzir riscos operacionais, ganhar eficiência e sustentar sua expansão.
            </p>
          </div>

          <button
            onClick={() => onOpenQuote('general')}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-sm text-cyan-400 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/30 transition-all shrink-0 cursor-pointer self-start md:self-auto"
          >
            <span>Montar Solução Personalizada</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Interactive Solution Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Solution Selector Menu */}
          <div className="lg:col-span-5 space-y-3">
            {SERVICES.map((service, index) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-5 rounded-2xl transition-all duration-300 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-gradient-to-r from-blue-900/40 via-slate-900 to-slate-900 border-blue-500/80 shadow-lg shadow-blue-500/10'
                      : 'bg-slate-900/40 hover:bg-slate-900/80 border-slate-800/80 text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`font-mono text-xs font-bold ${isSelected ? 'text-cyan-400' : 'text-slate-600'}`}>
                      0{index + 1}
                    </span>
                    <div>
                      <div className={`text-base font-bold font-tech ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {service.title}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        {service.category}
                      </div>
                    </div>
                  </div>

                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform ${
                    isSelected ? 'bg-blue-600 text-white translate-x-1' : 'bg-slate-800 text-slate-500'
                  }`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Solution Deep Dive Panel */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-slate-900/90 to-[#0b101d] border border-blue-500/30 p-8 shadow-2xl relative space-y-8">
              
              {/* Top Header of the Solution Card */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400">
                    {getServiceIcon(activeService.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
                      {activeService.category}
                    </span>
                    <h3 className="text-2xl font-bold font-tech text-white">
                      {activeService.title}
                    </h3>
                  </div>
                </div>

                <div className="bg-slate-950/80 px-4 py-2 rounded-xl border border-slate-800 shrink-0">
                  <span className="block text-[10px] font-mono uppercase text-slate-400">
                    {activeService.metrics.label}
                  </span>
                  <span className="text-lg font-bold font-tech text-emerald-400">
                    {activeService.metrics.value}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-base text-slate-300 leading-relaxed">
                {activeService.fullDesc}
              </p>

              {/* Deliverables Checklist */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  O que está incluso na entrega:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies / Frameworks Stack */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Tecnologias & Especialidades:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeService.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-blue-950/40 text-cyan-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-slate-400">
                  Precisa deste serviço ou time dedicado para o seu projeto?
                </span>
                <button
                  onClick={() => onOpenQuote(activeService.id)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 rounded-xl shadow-lg shadow-blue-600/20 transition-all cursor-pointer"
                >
                  <span>Solicitar Proposta para este Serviço</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
