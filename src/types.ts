export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  technologies: string[];
  metrics: { label: string; value: string };
  icon: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  segment: string;
  title: string;
  description: string;
  results: string[];
  impactMetric: string;
  image: string;
  tags: string[];
}

export interface JobOpening {
  id: string;
  title: string;
  department: 'Desenvolvimento' | 'Infraestrutura' | 'Segurança' | 'Suporte' | 'Cloud & DevOps' | 'Gestão de TI';
  level: 'Júnior' | 'Pleno' | 'Sênior' | 'Especialista' | 'Líder Técnico';
  location: 'Remoto' | 'Híbrido (SP)' | 'Híbrido (RJ)' | 'Presencial';
  contract: 'CLT' | 'PJ' | 'Ambos';
  salaryRange?: string;
  description: string;
  requirements: string[];
  desirable: string[];
  benefits: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
  metric: string;
}

export interface RadarNode {
  id: string;
  number: string;
  label: string;
  category: 'Security' | 'Cloud' | 'Infra' | 'Data' | 'Continuity';
  status: 'Active' | 'Optimal' | 'Secured' | 'Synced';
  description: string;
  details: string[];
  angle: number; // For circular rendering
  radius: number;
}
