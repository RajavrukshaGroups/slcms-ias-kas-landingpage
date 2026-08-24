import React from 'react';
import { ArrowRight } from 'lucide-react';

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ComponentType<{ className?: string }>;
  eyebrow?: string;
  ctaText?: string;
  ctaHref?: string;
  onClick?: () => void;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon: IconComp,
  eyebrow,
  ctaText = 'Explore →',
  ctaHref,
  onClick,
  className = '',
}) => {
  const content = (
    <div
      className={`bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5E1D8] shadow-xs hover-premium-card transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden ${className}`}
    >
      {/* Subtle background highlight indicator */}
      <div className="absolute top-0 left-0 w-1 h-full bg-[#087C73] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div>
        {/* Top Row: Icon & Eyebrow Badge */}
        <div className="flex items-center justify-between mb-5">
          {IconComp && (
            <div className="w-12 h-12 rounded-xl bg-[#F8F7F3] border border-[#E5E1D8] text-[#A87C00] group-hover:bg-[#082B50] group-hover:text-[#D9A900] group-hover:border-[#082B50] flex items-center justify-center shrink-0 transition-colors duration-300">
              <IconComp className="w-6 h-6" />
            </div>
          )}

          {eyebrow && (
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#087C73] bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md font-sans">
              {eyebrow}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] group-hover:text-[#087C73] transition-colors leading-[1.2] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
          {description}
        </p>
      </div>

      {/* CTA Trigger */}
      {ctaText && (
        <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#082B50] group-hover:text-[#087C73] transition-colors font-sans">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 text-[#A87C00] group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      )}
    </div>
  );

  if (ctaHref) {
    return (
      <a href={ctaHref} onClick={onClick} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

export default FeatureCard;
