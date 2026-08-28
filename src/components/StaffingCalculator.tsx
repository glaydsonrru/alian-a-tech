import React, { useState } from 'react';
import { 
  Calculator, 
  Users, 
  Clock, 
  TrendingDown, 
  ShieldCheck, 
  ArrowRight, 
  Sparkles,
  Zap
} from 'lucide-react';

interface StaffingCalculatorProps {
  onOpenQuoteWithDetails: (details: { role: string; seniority: string; headcount: number; model: string }) => void;
}

export const StaffingCalculator: React.FC<StaffingCalculatorProps> = ({ onOpenQuoteWithDetails }) => {
  const [role, setRole] = useState('devops');
  const [seniority, setSeniority] = useState('senior');
  const [headcount, setHeadcount] = useState(2);
  const [model, setModel] = useState('dedicated');

  const roleLabels: Record<string, { title: string; baseMarketCost: number }> = {
    suporte: { title: 'Analista de Suporte & NOC', baseMarketCost: 6500 },
    devops: { title: 'Engenheiro Cloud & DevOps', baseMarketCost: 16000 },
    fullstack: { title: 'Desenvolvedor Full Stack', baseMarketCost: 14500 },
    security: { title: 'Especialista em Cibersegurança / SOC', baseMarketCost: 15500 },
    architect: { title: 'Arquiteto de Soluções & vCIO', baseMarketCost: 21000 },
  };

  const seniorityMultipliers: Record<string, number> = {
    junior: 0.65,
    pleno: 1.0,
    senior: 1.45,
    specialist: 1.8,
  };

  const currentRole = roleLabels[role] || roleLabels.devops;
  const currentMultiplier = seniorityMultipliers[seniority] || 1.0;

  // Traditional internal hiring cost includes recruiting fee, CLT overhead (80%+), replacement risks
  const estimatedMarketMonthlyPerHead = Math.round(currentRole.baseMarketCost * currentMultiplier * 1.75);
  const totalTraditionalMonthly = estimatedMarketMonthlyPerHead * headcount;

  // Aliança Tech Outsourced model offers ~35-40% savings in overhead, zero recruitment fees, free replacement
  const estimatedAliancaMonthly = Math.round(totalTraditionalMonthly * 0.65);
  const estimatedMonthlySavings = totalTraditionalMonthly - estimatedAliancaMonthly;
  const estimatedAnnualSavings = estimatedMonthlySavings * 12;

  return (
    <section id="simulador" className="py-24 bg-[#0a0f1c] relative overflow-hidden border-b border-slate-800/80">
      {/* Background accents */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            SIMULADOR INTERATIVO
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white">
            Simule o Tamanho da sua <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Equipe de TI</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Compare o tempo de contratação e os custos entre recrutamento tradicional e a alocação acelerada da Aliança Tech.
          </p>
        </div>

        {/* Calculator Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Role Selection */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  1. Perfil / Especialidade Desejada:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {Object.entries(roleLabels).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setRole(key)}
                      className={`p-3 rounded-xl text-left text-xs font-medium transition-all border cursor-pointer ${
                        role === key
                          ? 'bg-blue-600/30 border-blue-500 text-white font-bold ring-1 ring-blue-400'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Seniority */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  2. Nível de Senioridade:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'junior', label: 'Júnior' },
                    { id: 'pleno', label: 'Pleno' },
                    { id: 'senior', label: 'Sênior' },
                    { id: 'specialist', label: 'Especialista' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSeniority(s.id)}
                      className={`py-2 px-3 rounded-xl text-xs font-medium text-center transition-all border cursor-pointer ${
                        seniority === s.id
                          ? 'bg-cyan-600/30 border-cyan-500 text-cyan-300 font-bold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Headcount Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    3. Quantidade de Profissionais:
                  </label>
                  <span className="px-3 py-1 bg-blue-600 text-white font-mono text-sm font-bold rounded-lg">
                    {headcount} {headcount === 1 ? 'Profissional' : 'Profissionais'}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="12"
                  step="1"
                  value={headcount}
                  onChange={(e) => setHeadcount(Number(e.target.value))}
                  className="w-full accent-blue-500 bg-slate-800 rounded-lg h-2 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>1 pessoa</span>
                  <span>Squad (4-6)</span>
                  <span>12+ especialistas</span>
                </div>
              </div>

              {/* Allocation Model */}
              <div className="space-y-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  4. Modelo de Contratação:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'dedicated', label: 'Alocação Dedicada' },
                    { id: 'squad', label: 'Squad Ágil Fechado' },
                    { id: 'ondemand', label: 'Suporte 24/7 N1-N3' },
                  ].map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setModel(m.id)}
                      className={`p-2.5 rounded-xl text-[11px] font-medium text-center transition-all border cursor-pointer ${
                        model === m.id
                          ? 'bg-blue-600/30 border-blue-500 text-white font-bold'
                          : 'bg-slate-950/60 border-slate-800 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garantia de reposição em até 5 dias úteis sem nenhum custo adicional.</span>
            </div>
          </div>

          {/* Results Comparison Column */}
          <div className="lg:col-span-6 rounded-3xl bg-gradient-to-b from-blue-950/50 via-slate-900 to-[#0c1220] border border-blue-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            
            <div className="space-y-6">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-blue-900/60">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-cyan-400">
                    DIAGNÓSTICO COMPARATIVO ESTIMADO
                  </span>
                  <h3 className="text-xl font-bold font-tech text-white mt-0.5">
                    {currentRole.title} ({headcount}x)
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-cyan-400">
                  <Calculator className="w-5 h-5" />
                </div>
              </div>

              {/* Time to Hire Comparison */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-slate-950/70 p-4 rounded-2xl border border-slate-800 space-y-1">
                  <span className="text-[10px] font-mono uppercase text-slate-500 block">
                    Recrutamento Interno
                  </span>
                  <div className="text-xl sm:text-2xl font-bold font-tech text-slate-400">
                    45 a 60 dias
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Triagem lenta + risco de contratação errada
                  </span>
                </div>

                <div className="bg-blue-950/60 p-4 rounded-2xl border border-cyan-500/40 space-y-1 ring-1 ring-cyan-400/30">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase text-cyan-400 font-bold block">
                      Aliança Tech
                    </span>
                    <Zap className="w-3.5 h-3.5 text-cyan-300" />
                  </div>
                  <div className="text-xl sm:text-2xl font-bold font-tech text-cyan-300">
                    7 dias úteis
                  </div>
                  <span className="text-[11px] text-cyan-200">
                    Squad pronto e testado tecnicamente
                  </span>
                </div>
              </div>

              {/* Savings Highlights */}
              <div className="bg-gradient-to-r from-emerald-950/60 to-slate-950 p-5 rounded-2xl border border-emerald-500/30 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Economia Anual Estimada em Encargos & Gestão
                  </span>
                  <TrendingDown className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold font-tech text-white">
                  R$ {estimatedAnnualSavings.toLocaleString('pt-BR')} <span className="text-sm font-normal text-emerald-400">/ano</span>
                </div>
                <p className="text-xs text-slate-300">
                  Economize com honorários de hunting, tributos trabalhistas, rescisões e gestão de TI.
                </p>
              </div>

              {/* Included Services */}
              <div className="space-y-1.5 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Acompanhamento quinzenal de desempenho e métricas de entrega</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>Acesso à retaguarda técnica de Arquitetos e Especialistas Sêniores</span>
                </div>
              </div>

            </div>

            {/* Action Trigger */}
            <div className="pt-6 border-t border-blue-900/60 mt-6">
              <button
                onClick={() =>
                  onOpenQuoteWithDetails({
                    role: currentRole.title,
                    seniority,
                    headcount,
                    model,
                  })
                }
                className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Proposta com Esta Configuração</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
