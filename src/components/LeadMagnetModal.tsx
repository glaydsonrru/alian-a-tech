import React, { useState } from 'react';
import { X, CheckCircle2, Download, FileText } from 'lucide-react';

interface LeadMagnetModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnetModal: React.FC<LeadMagnetModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-[#0c1220] border border-blue-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800"
        >
          <X className="w-5 h-5" />
        </button>

        {downloaded ? (
          <div className="text-center py-8 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold font-tech text-white">
              Download Liberado!
            </h4>
            <p className="text-sm text-slate-300">
              Enviamos também uma cópia completa em PDF do guia &ldquo;10 Riscos Críticos de TI e Como Reduzir Custos de Staffing&rdquo; para <strong>{email}</strong>.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
              >
                Continuar Navegando
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-5">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-950 border border-blue-500/30 text-cyan-400 text-xs font-mono font-semibold">
                <FileText className="w-3.5 h-3.5" />
                E-BOOK ESTRATÉGICO GRATUITO
              </div>
              <h3 className="text-2xl font-bold font-tech text-white leading-tight">
                10 Erros de TI que Travam Empresas e Como Solucionar
              </h3>
              <p className="text-xs text-slate-300">
                Aprenda como estruturar squads de tecnologia, terceirizar com segurança e blindar sua operação contra paradas não programadas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Seu Nome *</label>
                <input
                  type="text"
                  required
                  placeholder="Nome completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">E-mail Corporativo *</label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@empresa.com.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Nome da Empresa</label>
                <input
                  type="text"
                  placeholder="Sua empresa"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
              >
                <Download className="w-4 h-4" />
                <span>BAIXAR GUIA GRATUITAMENTE EM PDF</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
