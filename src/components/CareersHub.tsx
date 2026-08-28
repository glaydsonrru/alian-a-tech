import React, { useState } from 'react';
import { OPEN_JOBS } from '../data/companyData';
import { JobOpening } from '../types';
import { 
  Briefcase, 
  MapPin, 
  DollarSign, 
  CheckCircle2, 
  Search, 
  ArrowRight, 
  Sparkles, 
  HeartHandshake, 
  GraduationCap, 
  Laptop, 
  Send
} from 'lucide-react';

interface CareersHubProps {
  onApplyJob: (job: JobOpening | null) => void;
}

export const CareersHub: React.FC<CareersHubProps> = ({ onApplyJob }) => {
  const [selectedDept, setSelectedDept] = useState<string>('Todos');
  const [searchTerm, setSearchTerm] = useState('');

  const departments = ['Todos', 'Desenvolvimento', 'Cloud & DevOps', 'Infraestrutura', 'Segurança', 'Suporte'];

  const filteredJobs = OPEN_JOBS.filter((job) => {
    const matchesDept = selectedDept === 'Todos' || job.department === selectedDept;
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.requirements.some((r) => r.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesDept && matchesSearch;
  });

  return (
    <section id="carreiras" className="py-24 bg-[#0a0f1c] relative overflow-hidden border-b border-slate-800/80">
      {/* Visual background ambient glow */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
            ESPAÇO DO COLABORADOR & CARREIRAS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-tech tracking-tight text-white">
            Trabalhe na <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Aliança Tech</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300">
            Conectamos os melhores talentos de tecnologia a projetos desafiadores nas maiores empresas do país. Cresça com autonomia, suporte contínuo e remuneração de alto nível.
          </p>
        </div>

        {/* Culture & Benefits Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Laptop className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-tech text-white">Trabalho Remoto & Flexível</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Vagas 100% home office ou híbridas com auxílio ergonomia e setup de ponta (Dell/Apple).
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-tech text-white">Verba para Certificações</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Incentivo financeiro para você tirar suas certificações AWS, Azure, Cisco, Fortinet e CompTIA.
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-emerald-600/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-tech text-white">Saúde e Bem-Estar Top</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Planos de saúde e odontológico nacionais, Gympass/TotalPass e apoio psicológico para sua família.
            </p>
          </div>

          <div className="bg-slate-900/60 p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-12 h-12 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold font-tech text-white">Plano de Carreira Claro</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Trilhas de liderança técnica, especialista ou gestão com avaliações semestrais e bônus.
            </p>
          </div>
        </div>

        {/* Job Board Filters and Search */}
        <div className="bg-slate-900/90 rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-2xl space-y-6">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-tech text-white">
                Vagas em Aberto ({filteredJobs.length})
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                Selecione uma posição ou envie seu currículo para nosso Banco Geral de Talentos.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar cargo, tech ou skill..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-slate-950/80 border border-slate-700/80 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400"
              />
            </div>
          </div>

          {/* Department Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-800">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  selectedDept === dept
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                    : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>

          {/* Job Openings List */}
          <div className="space-y-4 pt-4">
            {filteredJobs.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <p className="text-slate-400 text-sm">Nenhuma vaga específica encontrada com esses filtros.</p>
                <button
                  onClick={() => onApplyJob(null)}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold"
                >
                  Cadastrar no Banco de Talentos
                </button>
              </div>
            ) : (
              filteredJobs.map((job) => (
                <div
                  key={job.id}
                  className="group bg-slate-950/70 hover:bg-slate-900 border border-slate-800 hover:border-cyan-500/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-bold bg-blue-950 text-cyan-400 border border-blue-500/30">
                        {job.department}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-800 text-slate-300">
                        {job.level}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-800 text-slate-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-cyan-400" />
                        {job.location}
                      </span>
                      <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-800 text-slate-300">
                        {job.contract}
                      </span>
                      {job.salaryRange && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-emerald-950/70 text-emerald-400 border border-emerald-500/30">
                          {job.salaryRange}
                        </span>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-bold font-tech text-white group-hover:text-cyan-300 transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                        {job.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span key={idx} className="text-[11px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                          ✓ {req}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end gap-3 shrink-0">
                    <button
                      onClick={() => onApplyJob(job)}
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/30 transition-all cursor-pointer"
                    >
                      <span>Candidatar-se</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Banco de Talentos Card */}
          <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-slate-950 to-blue-950/40 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold font-tech text-white">
                Não encontrou sua vaga ideal agora?
              </h4>
              <p className="text-xs text-slate-300 mt-0.5">
                Cadastre seu currículo no nosso Banco de Talentos de TI. Quando surgir uma oportunidade compatível com seu perfil, chamamos você!
              </p>
            </div>
            <button
              onClick={() => onApplyJob(null)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs sm:text-sm text-cyan-300 bg-cyan-900/40 hover:bg-cyan-800/60 border border-cyan-500/40 transition-all shrink-0 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Enviar CV para Banco Geral</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
