import React from 'react';

export interface NumberCardProps {
  number: string | number;
  label: string;
  description?: string;
  subLabel?: string;
  variant?: 'light' | 'dark' | 'borderless';
  className?: string;
}

export const NumberCard: React.FC<NumberCardProps> = ({
  number,
  label,
  description,
  subLabel,
  variant = 'light',
  className = '',
}) => {
  if (variant === 'borderless') {
    return (
      <div className={`text-center px-4 py-4 sm:py-6 group ${className}`}>
        {subLabel && (
          <span className="font-sans font-semibold text-[10px] sm:text-[11px] text-[#D9A900]/90 uppercase tracking-[0.18em] block mb-1.5">
            {subLabel}
          </span>
        )}
        <div className="font-sans text-[36px] sm:text-[48px] lg:text-[54px] font-extrabold text-[#D9A900] leading-none mb-2 tracking-tight group-hover:scale-105 transition-transform duration-300">
          {number}
        </div>
        <p className="text-[11px] sm:text-[13px] font-bold text-white tracking-[0.14em] uppercase font-sans">
          {label}
        </p>
        {description && (
          <p className="text-[13px] sm:text-[14px] text-white/80 font-normal mt-2 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  if (variant === 'dark') {
    return (
      <div className={`bg-[#082B50]/90 border border-navy-800 hover:border-[#D9A900] rounded-2xl p-6 shadow-xs transition-all duration-300 group ${className}`}>
        <div className="flex items-center justify-between mb-3">
          <span className="font-sans font-black text-3xl sm:text-4xl text-[#D9A900] tracking-tight group-hover:scale-105 transition-transform">
            {number}
          </span>
          {subLabel && (
            <span className="text-[10px] font-bold uppercase tracking-wider text-teal-300 bg-teal-900/50 px-2 py-0.5 rounded border border-teal-700/50">
              {subLabel}
            </span>
          )}
        </div>
        <h4 className="font-sans font-bold text-base sm:text-lg text-white uppercase tracking-wide mb-2 group-hover:text-[#D9A900] transition-colors">
          {label}
        </h4>
        {description && (
          <p className="text-white/80 text-xs sm:text-sm font-sans leading-relaxed">
            {description}
          </p>
        )}
      </div>
    );
  }

  // Default 'light' variant
  return (
    <div className={`bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5E1D8] shadow-xs hover-premium-card transition-all duration-300 group ${className}`}>
      {subLabel && (
        <span className="text-[11px] font-bold uppercase tracking-widest text-[#087C73] block mb-2 font-sans">
          {subLabel}
        </span>
      )}
      <div className="font-sans text-[40px] sm:text-[52px] font-extrabold text-[#082B50] group-hover:text-[#D9A900] leading-none mb-3 transition-colors tracking-tight">
        {number}
      </div>
      <h3 className="font-sans text-[18px] sm:text-[20px] font-bold text-[#082B50] leading-tight mb-2">
        {label}
      </h3>
      {description && (
        <p className="font-sans text-[14px] sm:text-[15px] text-[#24496B] font-normal leading-[1.6]">
          {description}
        </p>
      )}
    </div>
  );
};

export default NumberCard;
