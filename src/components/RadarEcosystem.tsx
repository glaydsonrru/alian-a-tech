import React, { useState } from 'react';
import { RADAR_NODES } from '../data/companyData';
import { RadarNode } from '../types';
import { ShieldCheck, Server, Database, Cloud, Radio, CheckCircle, ArrowRight } from 'lucide-react';

interface RadarEcosystemProps {
  onOpenQuote: () => void;
}

export const RadarEcosystem: React.FC<RadarEcosystemProps> = ({ onOpenQuote }) => {
  const [selectedNode, setSelectedNode] = useState<RadarNode>(RADAR_NODES[0]);

  return (
    <section id="radar" className="py-24 bg-[#080c14] relative overflow-hidden border-b border-slate-800/80">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading & Philosophy */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
              ARQUITETURA & ECOSSISTEMA
            </div>

            <div className="space-y-2">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white leading-tight">
                Complexidade invisível. <br />
                <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Resultado evidente.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal pt-2">
                Por trás de cada operação fluida existe uma infraestrutura bem pensada. Unimos visão consultiva, engenharia rigorosa e acompanhamento próximo para transformar tecnologia em crescimento sustentável.
              </p>
            </div>

            {/* Selected Node Detail Box */}
            <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 to-[#0e1628] border border-blue-500/30 p-6 shadow-xl space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-blue-600/30 border border-blue-500/40 text-cyan-400 font-mono text-xs flex items-center justify-center font-bold">
                    {selectedNode.number}
                  </span>
                  <span className="font-tech font-bold text-white text-base">
                    {selectedNode.label}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase font-bold bg-emerald-950 border border-emerald-500/30 text-emerald-400">
                  {selectedNode.status}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {selectedNode.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-slate-800">
                {selectedNode.details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom mini-pills */}
            <div className="flex flex-wrap gap-4 pt-2 text-xs font-mono uppercase tracking-widest text-slate-400">
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> INFRAESTRUTURA</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span> SEGURANÇA</span>
              <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> CONTINUIDADE</span>
            </div>

          </div>

          {/* Right Column: High-Tech Interactive Radar Graphic */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="relative w-full max-w-[500px] aspect-square rounded-full bg-gradient-to-b from-slate-900/60 to-[#070b14]/90 border border-slate-800 p-6 shadow-2xl flex items-center justify-center">
              
              {/* Radar Concentric Rings */}
              <div className="absolute inset-4 rounded-full border border-slate-700/40" />
              <div className="absolute inset-16 rounded-full border border-blue-500/20" />
              <div className="absolute inset-28 rounded-full border border-cyan-500/30" />
              <div className="absolute inset-40 rounded-full border border-slate-700/50" />

              {/* Orbit Text Labels on Rings */}
              <span className="absolute top-8 right-20 text-[10px] font-mono tracking-widest text-slate-500 select-none">
                Cloud Layer
              </span>
              <span className="absolute bottom-12 left-16 text-[10px] font-mono tracking-widest text-slate-500 select-none">
                Data & Storage
              </span>
              <span className="absolute bottom-6 right-24 text-[10px] font-mono tracking-widest text-slate-500 select-none">
                Security Perimeter
              </span>

              {/* Central Core Emblem */}
              <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 p-1 shadow-lg shadow-blue-500/50 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[#080b12] flex flex-col items-center justify-center">
                  <div className="w-7 h-7 flex items-center justify-center text-cyan-400">
                    <Radio className="w-6 h-6 animate-pulse" />
                  </div>
                  <span className="text-[9px] font-mono font-bold text-white tracking-widest">NOC/SOC</span>
                </div>
              </div>

              {/* Interactive Radar Ring Nodes */}
              {RADAR_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                
                // Position calculations around the circular radar
                const rad = (node.angle * Math.PI) / 180;
                // Offset percentages from center (50%)
                const distancePercent = 38; // Distance from center
                const leftPercent = 50 + distancePercent * Math.cos(rad);
                const topPercent = 50 + distancePercent * Math.sin(rad);

                return (
                  <button
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{
                      left: `${leftPercent}%`,
                      top: `${topPercent}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-20 group p-3 rounded-2xl transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/60 scale-110 ring-4 ring-cyan-400/40'
                        : 'bg-slate-900/90 text-slate-300 hover:text-white border border-slate-700/80 hover:border-blue-400/60 hover:scale-105'
                    }`}
                  >
                    <span className="w-6 h-6 rounded-lg bg-black/40 flex items-center justify-center text-xs font-mono font-bold text-cyan-300">
                      {node.number}
                    </span>
                    <span className="text-xs font-semibold whitespace-nowrap hidden sm:inline-block">
                      {node.label.split('&')[0]}
                    </span>
                  </button>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
