import React, { useState } from 'react';
import { Download, CheckCircle2, X, FileText, Sparkles } from 'lucide-react';

interface LeadMagnetBannerProps {
  onSuccessSubmit?: (email: string) => void;
}

export const LeadMagnetBanner: React.FC<LeadMagnetBannerProps> = ({ onSuccessSubmit }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [closed, setClosed] = useState(false);

  if (closed) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    if (onSuccessSubmit) onSuccessSubmit(email);
  };

  return (
    <aside aria-label="Material Gratuito" className="relative z-30 bg-[#0d1527] border-y border-blue-900/60 shadow-2xl py-3 px-4 transition-all">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
        
        {/* Left info label */}
        <div className="flex items-center gap-3 w-full lg:w-auto">
          <div className="hidden sm:flex w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 items-center justify-center text-cyan-400 shrink-0">
            <FileText className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-400 font-mono">
                MATERIAL GRATUITO
              </span>
              <span className="px-1.5 py-0.2 bg-blue-600/30 text-blue-300 text-[10px] rounded font-mono">
                PDF EXCLUSIVO
              </span>
            </div>
            <p className="text-sm font-semibold text-white">
              Guia Prático: <span className="text-slate-300 font-normal">10 riscos de TI que podem estar travando o crescimento da sua empresa</span>
            </p>
          </div>
        </div>

        {/* Right Form or Success State */}
        {submitted ? (
          <div className="flex items-center gap-3 bg-emerald-950/60 border border-emerald-500/40 px-4 py-2 rounded-xl text-emerald-300 text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
            <span>Material enviado com sucesso para seu e-mail! Baixando agora...</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full sm:w-44 px-3.5 py-2 text-sm bg-slate-900/90 border border-slate-700/80 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
              required
            />
            <input
              type="email"
              placeholder="Seu e-mail corporativo *"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full sm:w-56 px-3.5 py-2 text-sm bg-slate-900/90 border border-slate-700/80 rounded-lg text-white placeholder:text-slate-500 focus:outline-none focus:border-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-md transition-all shrink-0 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Receber eBook</span>
            </button>
            <button
              type="button"
              onClick={() => setClosed(true)}
              className="hidden lg:block p-1 text-slate-500 hover:text-slate-300 ml-1"
              title="Fechar banner"
            >
              <X className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </aside>
  );
};
