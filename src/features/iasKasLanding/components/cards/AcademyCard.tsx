import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export interface AcademyCardProps {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: React.ComponentType<{ className?: string }>;
  variant?: 'standard' | 'featured' | 'dark-featured';
  highlights?: string[];
  ctaText?: string;
  ctaHref?: string;
  onClick?: () => void;
  className?: string;
}

export const AcademyCard: React.FC<AcademyCardProps> = ({
  title,
  description,
  eyebrow,
  icon: IconComp,
  variant = 'standard',
  highlights,
  ctaText,
  ctaHref,
  onClick,
  className = '',
}) => {
  const isFeatured = variant === 'featured';
  const isDarkFeatured = variant === 'dark-featured';

  const cardContent = (
    <div
      className={`rounded-2xl transition-all duration-300 flex flex-col justify-between group h-full relative overflow-hidden ${
        isDarkFeatured
          ? 'bg-[#061C30] text-white p-7 sm:p-8 border-2 border-[#D9A900] shadow-xl'
          : isFeatured
          ? 'bg-white p-7 sm:p-8 border-2 border-[#D9A900] shadow-md ring-4 ring-[#D9A900]/10'
          : 'bg-white/95 p-6 sm:p-7 border border-[#E5E1D8] shadow-xs hover:border-[#087C73] hover:shadow-md'
      } ${className}`}
    >
      {/* Subtle Top Gold Bar for Featured Cards */}
      {(isFeatured || isDarkFeatured) && (
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#D9A900]" />
      )}

      <div>
        {/* Top Header: Icon & Eyebrow Badge */}
        <div className="flex items-center justify-between mb-5">
          {IconComp && (
            <div
              className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                isDarkFeatured
                  ? 'bg-[#D9A900]/20 text-[#D9A900] border border-[#D9A900]/40'
                  : isFeatured
                  ? 'bg-[#082B50] text-[#D9A900]'
                  : 'bg-[#F8F7F3] text-[#A87C00] border border-[#E5E1D8] group-hover:bg-[#082B50] group-hover:text-[#D9A900]'
              }`}
            >
              <IconComp className="w-6 h-6" />
            </div>
          )}

          {eyebrow && (
            <span
              className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md font-sans inline-flex items-center gap-1 ${
                isDarkFeatured
                  ? 'bg-[#082B50] text-[#D9A900] border border-[#D9A900]/30'
                  : isFeatured
                  ? 'bg-amber-50 text-[#A87C00] border border-[#D9A900]/40 font-extrabold'
                  : 'bg-teal-50 text-[#087C73] border border-teal-200'
              }`}
            >
              {isFeatured && <Sparkles className="w-3 h-3 text-[#D9A900]" />}
              <span>{eyebrow}</span>
            </span>
          )}
        </div>

        {/* Title */}
        <h3
          className={`font-sans font-bold leading-[1.2] mb-3 ${
            isDarkFeatured
              ? 'text-2xl sm:text-3xl text-white group-hover:text-[#D9A900] transition-colors'
              : isFeatured
              ? 'text-2xl sm:text-3xl text-[#082B50] group-hover:text-[#087C73] transition-colors'
              : 'text-[20px] sm:text-[22px] text-[#082B50] group-hover:text-[#087C73] transition-colors'
          }`}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className={`font-sans font-normal leading-[1.6] ${
            isDarkFeatured
              ? 'text-white/85 text-[15px] sm:text-[16px]'
              : isFeatured
              ? 'text-[#24496B] text-[15px] sm:text-[16.5px]'
              : 'text-[#24496B] text-[14.5px] sm:text-[15.5px]'
          }`}
        >
          {description}
        </p>

        {/* Optional Bullet Points */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-2.5 pt-3 mt-3 border-t border-[#E5E1D8]/60">
            {highlights.map((h, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-2.5 text-sm font-sans ${
                  isDarkFeatured ? 'text-white/90' : 'text-[#082B50]'
                }`}
              >
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 ${
                    isDarkFeatured ? 'text-[#D9A900]' : 'text-[#087C73]'
                  }`}
                />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Trigger Link */}
      {ctaText && (
        <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
          <span
            className={`inline-flex items-center gap-1.5 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider transition-colors font-sans ${
              isDarkFeatured
                ? 'text-[#D9A900] group-hover:translate-x-1 transition-transform'
                : 'text-[#082B50] group-hover:text-[#087C73]'
            }`}
          >
            <span>{ctaText}</span>
            <ArrowRight
              className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${
                isDarkFeatured ? 'text-[#D9A900]' : 'text-[#A87C00]'
              }`}
            />
          </span>
        </div>
      )}
    </div>
  );

  if (ctaHref) {
    return (
      <a href={ctaHref} onClick={onClick} className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
};

export default AcademyCard;
