import React, { useState } from 'react';
import { JobOpening } from '../types';
import { X, CheckCircle2, UploadCloud, FileText, Send, MapPin } from 'lucide-react';

interface JobApplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  job: JobOpening | null;
}

export const JobApplyModal: React.FC<JobApplyModalProps> = ({ isOpen, onClose, job }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    github: '',
    salaryExpectation: '',
    seniority: job?.level || 'Pleno',
    notes: '',
  });

  const [fileName, setFileName] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFileName(e.dataTransfer.files[0].name);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#0c1220] border border-cyan-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-left max-h-[90vh] overflow-y-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
              {job ? `CANDIDATURA: ${job.department.toUpperCase()}` : 'BANCO DE TALENTOS DE TI'}
            </span>
            <h3 className="text-xl sm:text-2xl font-bold font-tech text-white">
              {job ? job.title : 'Cadastro Geral de Talentos'}
            </h3>
            {job && (
              <div className="flex items-center gap-3 text-xs text-slate-400 mt-1">
                <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5 text-cyan-400" /> {job.location}</span>
                <span>•</span>
                <span>{job.contract}</span>
                {job.salaryRange && <span>• {job.salaryRange}</span>}
              </div>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white rounded-xl bg-slate-800/80 hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-lg">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold font-tech text-white">
              Currículo Recebido com Sucesso!
            </h4>
            <p className="text-sm text-slate-300">
              Obrigado pelo interesse na Aliança Tech! Nosso time de Tech Hunting analisará seu perfil técnico e entrará em contato via WhatsApp/E-mail.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold"
            >
              Concluir
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Nome Completo *</label>
                <input
                  type="text"
                  required
                  placeholder="Seu nome"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">E-mail de Contato *</label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">WhatsApp com DDD *</label>
                <input
                  type="tel"
                  required
                  placeholder="(11) 99999-9999"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Perfil no LinkedIn *</label>
                <input
                  type="url"
                  required
                  placeholder="https://linkedin.com/in/seuperfil"
                  value={formData.linkedin}
                  onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">Pretensão Salarial (CLT ou PJ)</label>
                <input
                  type="text"
                  placeholder="Ex: R$ 8.000 CLT ou R$ 11.000 PJ"
                  value={formData.salaryExpectation}
                  onChange={(e) => setFormData({ ...formData, salaryExpectation: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-medium text-slate-300">GitHub / Portfólio (Opcional)</label>
                <input
                  type="url"
                  placeholder="https://github.com/seuperfil"
                  value={formData.github}
                  onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
                />
              </div>
            </div>

            {/* Resume File Upload (Drag and Drop & Click) */}
            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Currículo (PDF, DOCX até 10MB) *</label>
              <div
                onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`border-2 border-dashed rounded-2xl p-4 text-center transition-all cursor-pointer ${
                  isDragging
                    ? 'border-cyan-400 bg-cyan-950/40'
                    : fileName
                    ? 'border-emerald-500/60 bg-emerald-950/20'
                    : 'border-slate-800 bg-slate-950 hover:border-slate-700'
                }`}
              >
                <input
                  type="file"
                  id="resume-upload"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <label htmlFor="resume-upload" className="cursor-pointer block">
                  {fileName ? (
                    <div className="flex items-center justify-center gap-2 text-emerald-400 text-xs font-medium">
                      <FileText className="w-5 h-5" />
                      <span>{fileName} (Anexado)</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <UploadCloud className="w-6 h-6 text-cyan-400 mx-auto" />
                      <p className="text-xs text-slate-300">
                        <span className="font-semibold text-cyan-400">Clique para selecionar</span> ou arraste o arquivo aqui
                      </p>
                      <p className="text-[10px] text-slate-500">PDF, DOC ou DOCX</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-medium text-slate-300">Principais Tecnologias & Resumo das suas Skills:</label>
              <textarea
                rows={2}
                placeholder="Ex: 5 anos de experiência com AWS, Docker, Kubernetes, Linux, Terraform..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 bg-slate-950 border border-slate-800 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-cyan-400"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar Minha Candidatura</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </div>
  );
};
