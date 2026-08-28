import React, { useState } from 'react';
import { 
  ArrowRight, 
  ShieldCheck, 
  Server, 
  Users, 
  Cpu, 
  Activity, 
  CheckCircle2, 
  Sparkles,
  Zap,
  Clock,
  Download
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onOpenQuote: (type?: 'staffing' | 'infra' | 'general') => void;
  onOpenLeadMagnet: () => void;
  onOpenCareers: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote, onOpenLeadMagnet, onOpenCareers }) => {
  const [activeTelemetryTab, setActiveTelemetryTab] = useState<'security' | 'cloud' | 'staffing' | 'noc'>('security');

  const telemetryData = {
    security: {
      title: 'Shield 24/7 & SOC',
      status: 'PROTEGIDO',
      statusColor: 'text-emerald-400',
      metric: '99.9% Ameaças Bloqueadas',
      details: 'Firewall NGFW, Backup Imutável, EDR e Conformidade LGPD em execução.',
    },
    cloud: {
      title: 'Cloud & Modern Workplace',
      status: 'SINCRONIZADO',
      statusColor: 'text-cyan-400',
      metric: '99.98% Uptime SLA',
      details: 'Ambientes AWS, Azure e M365 com balanceamento dinâmico e disaster recovery.',
    },
    staffing: {
      title: 'Alocação de Especialistas',
      status: 'DISPONÍVEL',
      statusColor: 'text-blue-400',
      metric: 'Prazo médio de 7 dias',
      details: 'Squads dedicados e analistas N1/N2/N3 prontos para integração imediata.',
    },
    noc: {
      title: 'NOC & Suporte Proativo',
      status: 'MONITORANDO',
      statusColor: 'text-emerald-400',
      metric: '< 8 min Tempo Médio',
      details: 'Monitoramento contínuo de links, switches, servidores e chamados de usuários.',
    },
  };

  return (
    <section id="visao" className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-[#080b12] bg-grid-pattern">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-24 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Indicator Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-700/60 shadow-inner">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs uppercase font-bold tracking-wider text-slate-300">
                TECNOLOGIA OPERANDO. NEGÓCIOS AVANÇANDO.
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold font-tech tracking-tight text-white leading-[1.1]">
                Tecnologia, <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                  estratégia e
                </span>{' '}
                <span className="text-metallic">confiança.</span>
              </h1>
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed font-normal pt-2 max-w-2xl">
                Alocação de talentos especializados em TI, sustentação de infraestrutura, cloud e segurança para empresas que não podem parar.
              </p>
            </div>

            {/* Key Value Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Profissionais qualificados em 7 dias</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>NOC e Helpdesk 24/7 com SLA rigoroso</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span>Blindagem contra Ransomware e LGPD</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800/80">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Redução de até 45% nos custos de TI</span>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <button
                onClick={() => onOpenQuote('staffing')}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-lg shadow-blue-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Users className="w-5 h-5" />
                <span>Contratar Especialistas em TI</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenCareers}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-medium text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/80 hover:border-slate-600 transition-all cursor-pointer"
              >
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Trabalhe Conosco / Vagas</span>
              </button>
            </div>

            {/* Fast Stats Bar */}
            <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center gap-6 sm:gap-10 text-slate-400">
              <div>
                <span className="block text-2xl font-bold font-tech text-white">+380</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Empresas Atendidas</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="block text-2xl font-bold font-tech text-white">24/7/365</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">NOC & Monitoramento</span>
              </div>
              <div className="w-px h-8 bg-slate-800" />
              <div>
                <span className="block text-2xl font-bold font-tech text-emerald-400">99.98%</span>
                <span className="text-xs text-slate-400 uppercase tracking-wider">Uptime Garantido</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Tech Radar & Operation Telemetry Map */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-b from-slate-900/90 to-[#0c1220]/95 border border-slate-700/70 p-5 shadow-2xl backdrop-blur-xl glow-blue">
              
              {/* Telemetry Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-xs font-mono tracking-wider text-slate-400 uppercase">
                    ALIANÇA / OPERATION MAP
                  </span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  AMBIENTE ATIVO 24/7
                </div>
              </div>

              {/* Central Radar Visualizer */}
              <div className="relative my-4 aspect-square max-h-[300px] sm:max-h-[340px] mx-auto flex items-center justify-center">
                
                {/* Radar Concentric Rings */}
                <div className="absolute inset-0 rounded-full border border-slate-700/40" />
                <div className="absolute inset-8 rounded-full border border-blue-500/20" />
                <div className="absolute inset-16 rounded-full border border-slate-700/50" />
                <div className="absolute inset-24 rounded-full border border-cyan-500/30 animate-pulse-ring" />

                {/* Crosshair grid axes */}
                <div className="absolute inset-x-0 top-1/2 h-px bg-slate-800/80" />
                <div className="absolute inset-y-0 left-1/2 w-px bg-slate-800/80" />

                {/* Rotating Scanner Line */}
                <div className="absolute inset-0 flex items-center justify-center animate-radar-sweep pointer-events-none">
                  <div className="w-1/2 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-blue-500 origin-left shadow-[0_0_12px_#38bdf8]" />
                </div>

                {/* Central Brand Core Node */}
                <div className="relative z-10 w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 p-0.5 shadow-lg shadow-blue-500/40 flex items-center justify-center">
                  <div className="w-full h-full rounded-full bg-[#080b12] flex flex-col items-center justify-center">
                    <span className="text-xs font-tech font-bold text-white">ALIANÇA</span>
                    <span className="text-[9px] font-mono text-cyan-400">CORE</span>
                  </div>
                </div>

                {/* Interactive Orbital Orbit Nodes */}
                {/* Node 1: Security */}
                <button
                  onClick={() => setActiveTelemetryTab('security')}
                  className={`absolute top-6 left-12 p-2 rounded-xl text-xs font-mono transition-all z-20 flex items-center gap-2 cursor-pointer ${
                    activeTelemetryTab === 'security'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105 ring-2 ring-blue-400'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>01 SECURITY</span>
                </button>

                {/* Node 2: Cloud */}
                <button
                  onClick={() => setActiveTelemetryTab('cloud')}
                  className={`absolute top-10 right-6 p-2 rounded-xl text-xs font-mono transition-all z-20 flex items-center gap-2 cursor-pointer ${
                    activeTelemetryTab === 'cloud'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105 ring-2 ring-blue-400'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <Cpu className="w-3.5 h-3.5 text-blue-400" />
                  <span>02 CLOUD</span>
                </button>

                {/* Node 3: Staffing */}
                <button
                  onClick={() => setActiveTelemetryTab('staffing')}
                  className={`absolute bottom-8 left-8 p-2 rounded-xl text-xs font-mono transition-all z-20 flex items-center gap-2 cursor-pointer ${
                    activeTelemetryTab === 'staffing'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105 ring-2 ring-blue-400'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <Users className="w-3.5 h-3.5 text-cyan-300" />
                  <span>03 TALENTOS</span>
                </button>

                {/* Node 4: NOC */}
                <button
                  onClick={() => setActiveTelemetryTab('noc')}
                  className={`absolute bottom-6 right-10 p-2 rounded-xl text-xs font-mono transition-all z-20 flex items-center gap-2 cursor-pointer ${
                    activeTelemetryTab === 'noc'
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50 scale-105 ring-2 ring-blue-400'
                      : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700'
                  }`}
                >
                  <Server className="w-3.5 h-3.5 text-emerald-400" />
                  <span>04 NOC 24/7</span>
                </button>
              </div>

              {/* Dynamic Status Readout of Selected Node */}
              <div className="bg-slate-950/80 rounded-xl p-3.5 border border-slate-800 text-left space-y-1.5 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold text-white">
                      {telemetryData[activeTelemetryTab].title}
                    </span>
                  </div>
                  <span className={`text-[11px] font-mono font-bold ${telemetryData[activeTelemetryTab].statusColor}`}>
                    {telemetryData[activeTelemetryTab].status}
                  </span>
                </div>
                <div className="text-xs font-mono text-cyan-300">
                  {telemetryData[activeTelemetryTab].metric}
                </div>
                <p className="text-xs text-slate-400 leading-snug">
                  {telemetryData[activeTelemetryTab].details}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
