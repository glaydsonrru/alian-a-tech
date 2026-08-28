import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('Olá! Gostaria de saber mais sobre a alocação de profissionais de TI e serviços da Aliança Tech.');

  const handleSendMessage = () => {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encoded}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Quick Chat Box */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-88 bg-[#0c1220] border border-emerald-500/40 rounded-3xl p-5 shadow-2xl space-y-4 animate-in fade-in slide-in-from-bottom-5 text-left">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="relative">
                <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold">
                  AT
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c1220]" />
              </div>
              <div>
                <h4 className="text-sm font-bold font-tech text-white">Aliança Tech Atendimento</h4>
                <span className="text-[10px] text-emerald-400 font-mono">Online • Resposta em minutos</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white rounded-lg"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="bg-slate-900/80 p-3 rounded-2xl border border-slate-800 text-xs text-slate-300 space-y-1">
            <p className="font-semibold text-white">Como podemos acelerar sua TI hoje?</p>
            <p className="text-slate-400 text-[11px]">
              Selecione ou edite sua mensagem abaixo para falar com nosso plantão de especialistas.
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex flex-wrap gap-1.5">
              <button
                type="button"
                onClick={() => setMessage('Olá! Preciso contratar especialistas em TI / Squad sob medida.')}
                className="text-[10px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              >
                🏢 Quero contratar TI
              </button>
              <button
                type="button"
                onClick={() => setMessage('Olá! Sou profissional de TI e quero enviar meu currículo para vagas.')}
                className="text-[10px] px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-300 hover:text-white"
              >
                👨‍💻 Trabalhe conosco / Vagas
              </button>
            </div>

            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-2.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-emerald-400"
            />
          </div>

          <button
            onClick={handleSendMessage}
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Abrir no WhatsApp</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 p-3.5 sm:px-4 sm:py-3.5 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white shadow-2xl shadow-emerald-500/40 transition-all hover:scale-105 active:scale-95 cursor-pointer border border-emerald-400/40"
        aria-label="Atendimento via WhatsApp"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-6 h-6" />
        <span className="hidden sm:inline-block font-semibold text-xs tracking-wide">
          WhatsApp de Plantão
        </span>
      </button>
    </div>
  );
};
