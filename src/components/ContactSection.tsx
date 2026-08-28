import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Send, 
  Clock, 
  MessageSquare, 
  ShieldCheck, 
  ArrowRight
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    role: '',
    segment: '',
    companySize: '',
    phone: '',
    message: '',
    interest: 'staffing',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <section id="contato" className="py-24 bg-[#080b12] relative overflow-hidden border-b border-slate-800/80">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Contact Channels (as seen in Screenshot 1) */}
          <div className="lg:col-span-5 space-y-8">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                FALE CONOSCO
              </div>
              <h2 className="text-4xl sm:text-5xl font-extrabold font-tech tracking-tight text-white leading-tight">
                Preencha seus dados <br />
                <span className="text-metallic">para uma conversa.</span>
              </h2>
              <p className="text-base text-slate-300 leading-relaxed font-normal pt-2">
                Fale com nosso time de consultores executivos e descubra como a Aliança Tech pode apoiar a estabilidade e a expansão da sua empresa.
              </p>
            </div>

            {/* Direct Commercial Badge */}
            <div className="rounded-2xl bg-gradient-to-br from-blue-950/80 to-slate-900 border border-blue-500/40 p-6 shadow-xl space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400 font-bold block">
                RETORNO COMERCIAL PRIORITÁRIO
              </span>
              <div className="text-xl sm:text-2xl font-bold font-tech text-white break-all">
                {COMPANY_INFO.commercialEmail}
              </div>
              <div className="text-xs text-slate-300 flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Resposta em até 2 horas em dias úteis</span>
              </div>
            </div>

            {/* Contact Information List */}
            <div className="space-y-4 text-sm text-slate-300">
              <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <Phone className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase">Central Telefônica & WhatsApp</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.phone}</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-slate-500 block uppercase">Sede Corporativa</span>
                  <span className="font-semibold text-white">{COMPANY_INFO.address}</span>
                </div>
              </div>
            </div>

            {/* WhatsApp Quick CTA */}
            <div>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Ol%C3%A1,%20gostaria%20de%20um%20diagn%C3%B3stico%20de%20TI%20com%20a%20Alian%C3%A7a%20Tech.`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm text-emerald-400 bg-emerald-950/50 hover:bg-emerald-900/60 border border-emerald-500/40 transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Iniciar Conversa Imediata no WhatsApp</span>
              </a>
            </div>

          </div>

          {/* Right Column: High-Conversion Form Box (as seen in Screenshot 1) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-[#0e1628] border border-blue-500/30 p-6 sm:p-10 shadow-2xl relative">
              
              {submitted ? (
                <div className="text-center py-16 space-y-5 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-emerald-950 border border-emerald-500/50 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-tech text-white">
                    Solicitação Recebida com Sucesso!
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Agradecemos seu contato. Um de nossos especialistas executivos entrará em contato em até 2 horas para apresentar o diagnóstico personalizado para sua empresa.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        role: '',
                        segment: '',
                        companySize: '',
                        phone: '',
                        message: '',
                        interest: 'staffing',
                      });
                    }}
                    className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div className="border-b border-slate-800 pb-4 mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold block mb-1">
                      SOLICITAÇÃO DE CONTATO EXECUTIVO
                    </span>
                    <p className="text-xs text-slate-400">
                      Preencha os campos abaixo para montarmos uma proposta sob medida.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Nome completo *</label>
                      <input
                        type="text"
                        required
                        placeholder="Ex: Roberto Silva"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">E-mail corporativo *</label>
                      <input
                        type="email"
                        required
                        placeholder="nome@suaempresa.com.br"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Empresa *</label>
                      <input
                        type="text"
                        required
                        placeholder="Nome da sua empresa"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Cargo atual *</label>
                      <select
                        required
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Selecione seu cargo</option>
                        <option value="Diretor / C-Level (CEO, CTO, CIO, COO)">Diretor / C-Level (CEO, CTO, CIO)</option>
                        <option value="Gerente de TI / Infraestrutura">Gerente de TI / Infraestrutura</option>
                        <option value="Coordenador de TI / Suporte">Coordenador de TI / Suporte</option>
                        <option value="Recursos Humanos / Talent Acquisition">Recursos Humanos / Talent Acquisition</option>
                        <option value="Sócio / Proprietário">Sócio / Proprietário</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Qual o segmento? *</label>
                      <select
                        required
                        value={formData.segment}
                        onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Selecione o segmento</option>
                        <option value="Serviços Financeiros / Fintech">Serviços Financeiros / Fintech</option>
                        <option value="Logística & Transportes">Logística & Transportes</option>
                        <option value="Saúde & Hospitais">Saúde & Hospitais</option>
                        <option value="Indústria & Manufatura">Indústria & Manufatura</option>
                        <option value="Varejo & E-commerce">Varejo & E-commerce</option>
                        <option value="Tecnologia & Software">Tecnologia & Software</option>
                        <option value="Construção & Engenharia">Construção & Engenharia</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-medium text-slate-300">Sua empresa conta com: *</label>
                      <select
                        required
                        value={formData.companySize}
                        onChange={(e) => setFormData({ ...formData, companySize: e.target.value })}
                        className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white focus:outline-none focus:border-blue-500"
                      >
                        <option value="">Tamanho da empresa</option>
                        <option value="10 a 50 colaboradores / endpoints">10 a 50 computadores/colaboradores</option>
                        <option value="51 a 200 colaboradores / endpoints">51 a 200 computadores/colaboradores</option>
                        <option value="201 a 500 colaboradores">201 a 500 computadores/colaboradores</option>
                        <option value="+500 colaboradores">+500 computadores/colaboradores</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">WhatsApp / Telefone com DDD *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(11) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-medium text-slate-300">Descreva brevemente o desafio ou necessidade de TI:</label>
                    <textarea
                      rows={3}
                      placeholder="Ex: Preciso de 2 analistas de suporte N2 e suporte 24/7 para nossa matriz e filiais..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-slate-950/80 border border-slate-700/80 rounded-xl text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
                    />
                  </div>

                  <p className="text-[11px] text-slate-500 leading-tight">
                    Ao enviar, você concorda com o tratamento de dados de acordo com a nossa Política de Privacidade e LGPD.
                  </p>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 px-6 rounded-xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 shadow-xl shadow-blue-600/30 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Enviando dados...</span>
                    ) : (
                      <>
                        <span>ENVIAR MENSAGEM & SOLICITAR DIAGNÓSTICO</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
