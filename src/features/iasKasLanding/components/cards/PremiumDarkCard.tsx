import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';

export interface PremiumDarkCardProps {
  title: string;
  description: string;
  eyebrow?: string;
  icon?: React.ComponentType<{ className?: string }>;
  ctaText?: string;
  ctaHref?: string;
  highlights?: string[];
  className?: string;
}

export const PremiumDarkCard: React.FC<PremiumDarkCardProps> = ({
  title,
  description,
  eyebrow,
  icon: IconComp,
  ctaText = 'Explore Module →',
  ctaHref,
  highlights,
  className = '',
}) => {
  const content = (
    <div
      className={`bg-premium-dark bg-progression-watermark text-white rounded-2xl p-6 sm:p-8 border border-navy-800 hover:border-[#D9A900] shadow-2xl transition-all duration-300 flex flex-col justify-between group relative overflow-hidden h-full ${className}`}
    >
      {/* Top Gold Accent Border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9A900]" />

      <div>
        {/* Top Eyebrow + Icon */}
        <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-5">
          {eyebrow && (
            <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#D9A900] uppercase tracking-wider bg-[#082B50] px-3 py-1 rounded-full border border-navy-700 font-sans">
              <Sparkles className="w-3 h-3 text-[#D9A900]" />
              <span>{eyebrow}</span>
            </span>
          )}

          {IconComp && (
            <div className="w-11 h-11 rounded-xl bg-[#D9A900]/20 text-[#D9A900] border border-[#D9A900]/30 group-hover:bg-[#D9A900] group-hover:text-[#061C30] flex items-center justify-center shrink-0 transition-colors duration-300">
              <IconComp className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Title */}
        <h3 className="font-sans text-[22px] sm:text-[26px] font-bold text-white group-hover:text-[#D9A900] transition-colors leading-[1.2] mb-3">
          {title}
        </h3>

        {/* Description */}
        <p className="font-sans text-[14.5px] sm:text-[16px] text-white/85 font-normal leading-[1.6] mb-4">
          {description}
        </p>

        {/* Optional Highlights List */}
        {highlights && highlights.length > 0 && (
          <div className="space-y-2 pt-2 border-t border-navy-800/80 mb-4">
            {highlights.map((h, i) => (
              <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-white/90 font-sans">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#087C73] shrink-0" />
                <span>{h}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* CTA Footer */}
      {ctaText && (
        <div className="pt-5 border-t border-navy-800 flex items-center justify-between mt-4">
          <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#D9A900] group-hover:translate-x-1 transition-transform font-sans">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 text-[#D9A900]" />
          </span>
        </div>
      )}
    </div>
  );

  if (ctaHref) {
    return (
      <a href={ctaHref} className="block h-full">
        {content}
      </a>
    );
  }

  return content;
};

export default PremiumDarkCard;
