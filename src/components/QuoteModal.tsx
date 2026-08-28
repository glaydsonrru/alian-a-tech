import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialType?: string;
  initialDetails?: { role: string; seniority: string; headcount: number; model: string };
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialType = 'general',
  initialDetails,
}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    serviceType: initialType === 'staffing' ? 'Alocação de Especialistas / Squad' : 'Infraestrutura & Suporte 24/7',
    role: initialDetails?.role || 'Desenvolvedor / Especialista Cloud',
    seniority: initialDetails?.seniority || 'Sênior',
    headcount: initialDetails?.headcount || 2,
    name: '',
    email: '',
    company: '',
    phone: '',
    urgency: 'Imediato (em até 7 dias)',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0c1220] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              ORÇAMENTO & STAFFING RÁPIDO
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-tech text-white">
              Monte seu Plano ou Equipe de TI
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-tech text-white">
              Proposta em Elaboração!
            </h4>
            <p className="text-sm text-slate-300">
              Recebemos suas especificações. Nosso diretor de tecnologia e operações entrará em contato via WhatsApp/E-mail com a estimativa e perfis compatíveis.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
            >
              Fechar Janela
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Tipo de Demanda:</label>
              <select
                value={formData.serviceType}
                onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Alocação de Especialistas / Squad">Mão de Obra / Alocação de Especialistas</option>
                <option value="Infraestrutura & Suporte 24/7">Gestão de Infraestrutura & Suporte 24/7</option>
                <option value="Segurança da Informação / SOC">Cibersegurança, SOC & LGPD</option>
                <option value="Migração para Cloud AWS/Azure">Cloud & Migração para Nuvem</option>
                <option value="Diagnóstico Completo de TI">Diagnóstico & Consultoria de TI</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Seu Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Nome completo"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">E-mail Corporativo *</label>
                <input
                  type="email"
                  required
                  placeholder="nome@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Empresa *</label>
                <input
                  type="text"
                  required
                  placeholder="Nome da empresa"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">WhatsApp para Contato *</label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Urgência para Início:</label>
              <select
                value={formData.urgency}
                onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
                className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
              >
                <option value="Imediato (em até 7 dias)">Imediato (em até 7 dias úteis)</option>
                <option value="Próximos 30 dias">Próximos 30 dias</option>
                <option value="Planejamento para próximo trimestre">Planejamento para o próximo trimestre</option>
              </select>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Solicitar Orçamento Executivo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
