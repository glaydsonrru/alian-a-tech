import React from 'react';

interface LogoProps {
  variant?: 'full' | 'compact' | 'icon-only';
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({ variant = 'full', className = '', size = 'md' }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  const titleSizes = {
    sm: 'text-base tracking-wider',
    md: 'text-xl tracking-wider',
    lg: 'text-2xl tracking-widest',
    xl: 'text-4xl tracking-widest',
  };

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Aliança Tech Iconic "A" with circuits and orbital crescent */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-[0_0_12px_rgba(0,140,255,0.6)]">
          <defs>
            {/* Metallic Silver Gradient */}
            <linearGradient id="metallicSilver" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#e2e8f0" />
              <stop offset="70%" stopColor="#94a3b8" />
              <stop offset="100%" stopColor="#64748b" />
            </linearGradient>

            {/* Glowing Cyber Electric Blue Gradient */}
            <linearGradient id="cyberBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="50%" stopColor="#0284c7" />
              <stop offset="100%" stopColor="#004ae8" />
            </linearGradient>

            {/* Subtle glow filter */}
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Left Circuit Lines & Nodes (Circuit Board effect) */}
          <g stroke="#38bdf8" strokeWidth="2.5" fill="none" opacity="0.95">
            {/* Circuit 1 */}
            <path d="M 28 35 L 14 35" />
            <circle cx="12" cy="35" r="3" fill="#00e5ff" />

            {/* Circuit 2 */}
            <path d="M 24 50 L 8 50" />
            <circle cx="6" cy="50" r="3.5" fill="#38bdf8" />

            {/* Circuit 3 */}
            <path d="M 20 65 L 12 65 L 8 72" />
            <circle cx="8" cy="74" r="3" fill="#0284c7" />

            {/* Circuit 4 */}
            <path d="M 26 80 L 16 80 L 14 86" />
            <circle cx="14" cy="88" r="2.5" fill="#38bdf8" />
          </g>

          {/* Stylized Sharp Metallic "A" */}
          <path
            d="M 52 14 
               L 82 86 
               L 66 86 
               L 57 63 
               L 42 63 
               L 33 86 
               L 18 86 
               L 48 14 
               Z
               M 50 32 
               L 44 50 
               L 55 50 
               Z"
            fill="url(#metallicSilver)"
            stroke="#ffffff"
            strokeWidth="0.8"
          />

          {/* Dynamic Blue Orbital Swoosh Arc (Swirling across the A) */}
          <path
            d="M 22 84 C 42 78, 86 64, 88 32 C 89 20, 80 18, 70 24 C 60 30, 48 45, 26 82"
            fill="none"
            stroke="url(#cyberBlue)"
            strokeWidth="4.5"
            strokeLinecap="round"
            filter="url(#neonGlow)"
          />
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'icon-only' && (
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-tech font-extrabold uppercase text-white tracking-widest ${titleSizes[size]}`}>
              ALIANÇA
            </span>
            <span className={`font-tech font-extrabold uppercase bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ${titleSizes[size]}`}>
              TECH
            </span>
          </div>

          {variant === 'full' && (
            <div className="mt-1 flex flex-col gap-0.5">
              <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-[0.2em] text-slate-300">
                Mão de Obra Especializada em TI
              </span>
              <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.16em] text-blue-400 font-medium">
                Soluções Inteligentes para Empresas
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
