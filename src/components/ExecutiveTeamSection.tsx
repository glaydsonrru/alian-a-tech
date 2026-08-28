import React from 'react';
import { Shield, Users, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface ExecutiveTeamProps {
  onOpenQuote: () => void;
}

export const ExecutiveTeamSection: React.FC<ExecutiveTeamProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-24 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Executive Team & Modern Headquarters Presentation */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-700/70 shadow-2xl group">
              <img
                src="/src/assets/images/tech_team_consultants_1787916248200.jpg"
                alt="Equipe Executiva e Consultores Aliança Tech"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080b12] via-[#080b12]/30 to-transparent" />

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 left-6 right-6 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 p-4 rounded-2xl flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 block">
                    ALIANÇA TECH CORPO EXECUTIVO
                  </span>
                  <span className="text-sm font-bold font-tech text-white">
                    Liderança Técnica & Governança Sênior
                  </span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Consultative Copy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
              TECNOLOGIA FEITA POR PESSOAS
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white leading-tight">
                Próximos no contato. <br />
                <span className="text-metallic">Precisos na entrega.</span>
              </h2>
            </div>

            {/* Quote Block */}
            <div className="border-l-2 border-blue-500 pl-4 py-1 text-slate-300 italic text-base sm:text-lg">
              &ldquo;A Aliança Tech entende a dor do seu negócio antes de propor qualquer tecnologia. É esse diagnóstico sem rodeios que faz cada solução gerar economia e valor de verdade.&rdquo;
            </div>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Não entregamos apenas tickets fechados ou horas trabalhadas. Fornecemos parceiros estratégicos que se integram à sua rotina, antecipam incidentes e constroem um roadmap tecnológico sólido para que sua diretoria durma tranquila.
            </p>

            {/* 3 Metric Columns (as in screenshot 4) */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-800">
              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-tech text-white block">
                  +380
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">
                  EMPRESAS ATENDIDAS
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-tech text-cyan-400 block">
                  24/7
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">
                  OPERAÇÃO MONITORADA
                </span>
              </div>

              <div className="space-y-1">
                <span className="text-2xl sm:text-3xl font-extrabold font-tech text-white block">
                  +15 ANOS
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider font-mono">
                  CONSTRUINDO CONFIANÇA
                </span>
              </div>
            </div>

            {/* Consultation Action */}
            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Agendar Conversa com um Consultor Executivo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
