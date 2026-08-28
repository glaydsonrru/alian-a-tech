import React from 'react';
import { Logo } from './Logo';
import { COMPANY_INFO, CORE_VALUES } from '../data/companyData';
import { Phone, Mail, MapPin, ArrowUp, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface FooterProps {
  onOpenQuote: (type?: string) => void;
  onOpenCareers: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenCareers }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05070d] border-t border-slate-800/80 pt-16 pb-12 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-slate-900">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="lg" variant="full" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm pt-2">
              A Aliança Tech é referência em alocação de mão de obra especializada em TI, gestão de infraestrutura de missão crítica, cibersegurança e sustentação de nuvem para empresas em todo o Brasil.
            </p>
            
            {/* 4 Values Mini Grid */}
            <div className="flex flex-wrap gap-2 pt-2">
              {CORE_VALUES.map((v) => (
                <span
                  key={v.label}
                  className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold bg-slate-900 border border-slate-800 text-cyan-300"
                >
                  ✓ {v.label}
                </span>
              ))}
            </div>
          </div>

          {/* Column 2: Soluções Corporativas */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest">
              Para Empresas
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#solucoes" className="hover:text-cyan-300 transition-colors">
                  Alocação de Especialistas
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-300 transition-colors">
                  Gestão de Infra & Helpdesk
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-300 transition-colors">
                  Segurança & SOC 24/7
                </a>
              </li>
              <li>
                <a href="#solucoes" className="hover:text-cyan-300 transition-colors">
                  Cloud & Modern Workplace
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-cyan-300 transition-colors">
                  Simulador de Staffing
                </a>
              </li>
              <li>
                <a href="#cases" className="hover:text-cyan-300 transition-colors">
                  Cases de Sucesso
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Talentos & Carreiras */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest">
              Para Profissionais
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#carreiras" onClick={onOpenCareers} className="hover:text-cyan-300 transition-colors">
                  Vagas Abertas em TI
                </a>
              </li>
              <li>
                <a href="#carreiras" onClick={onOpenCareers} className="hover:text-cyan-300 transition-colors">
                  Banco de Talentos
                </a>
              </li>
              <li>
                <a href="#carreiras" className="hover:text-cyan-300 transition-colors">
                  Benefícios & Carreira
                </a>
              </li>
              <li>
                <a href="#carreiras" className="hover:text-cyan-300 transition-colors">
                  Trabalho Remoto & Híbrido
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-cyan-300 transition-colors">
                  Canal do Candidato
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contato & Localização */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase font-bold text-white tracking-widest">
              Atendimento
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span className="break-all">{COMPANY_INFO.commercialEmail}</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="pt-2">
                <button
                  onClick={() => onOpenQuote('general')}
                  className="w-full py-2 px-3 text-center bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-xs transition-colors cursor-pointer"
                >
                  Solicitar Contato Comercial
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
            <span>© {new Date().getFullYear()} Aliança Tech. Todos os direitos reservados.</span>
            <span>CNPJ & Política de Privacidade LGPD</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Ambiente Seguro e Monitorado 24/7
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors"
              title="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
