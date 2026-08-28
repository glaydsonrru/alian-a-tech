import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/companyData';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-24 bg-[#080c14] relative overflow-hidden border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Nav Arrows */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">
              07 / RELAÇÕES DE CONFIANÇA • QUEM VIVE A PARCERIA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white">
              Confiança para <br className="hidden sm:inline" />
              <span className="text-slate-400">seguir em frente.</span>
            </h2>
          </div>

          <div className="flex items-center gap-3 self-end sm:self-auto">
            <span className="text-xs font-mono text-slate-500 mr-2">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-slate-700 bg-slate-900/80 hover:bg-slate-800 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/40 rounded-3xl p-6 sm:p-10 border border-slate-800">
          
          {/* Avatar / Profile */}
          <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left gap-4">
            <div className="relative">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-cyan-500/40 shadow-xl">
                <img
                  src={current.avatar}
                  alt={current.name}
                  className="w-full h-full object-cover grayscale contrast-125"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-blue-600 text-white shadow-md">
                <Quote className="w-3.5 h-3.5" />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold font-tech text-white">
                {current.name}
              </h3>
              <p className="text-xs text-cyan-400 font-mono mt-0.5">
                {current.role}
              </p>
              <span className="inline-block mt-1 text-xs text-slate-400 font-semibold uppercase tracking-wider">
                {current.company}
              </span>
            </div>

            <div className="px-3 py-1 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-emerald-400 text-xs font-mono font-semibold">
              {current.metric}
            </div>
          </div>

          {/* Quote Text */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-slate-500 block">
              {current.company.toUpperCase()}
            </span>
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-100 font-normal leading-relaxed">
              &ldquo;{current.quote}&rdquo;
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
