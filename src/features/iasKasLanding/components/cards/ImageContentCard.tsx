import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2 } from 'lucide-react';
import heroBg from '../../../../assets/images/hero-bg.jpg';

export interface ImageContentCardProps {
  title: string;
  description: string;
  category?: string;
  imageSrc?: string;
  imageAlt?: string;
  highlights?: string[];
  ctaText?: string;
  ctaHref?: string;
  icon?: React.ComponentType<{ className?: string }>;
  className?: string;
}

export const ImageContentCard: React.FC<ImageContentCardProps> = ({
  title,
  description,
  category,
  imageSrc = heroBg,
  imageAlt = 'Sri Lakshmi College Campus',
  highlights,
  ctaText = 'Explore Architecture',
  ctaHref,
  icon: IconComp,
  className = '',
}) => {
  const content = (
    <div
      className={`bg-white/95 backdrop-blur-xs rounded-2xl border border-[#E5E1D8] shadow-xs hover-premium-card transition-all duration-300 overflow-hidden flex flex-col justify-between group h-full ${className}`}
    >
      <div>
        {/* Top Image Banner Header */}
        <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-[#061C30]">
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 brightness-[0.95]"
            loading="lazy"
            decoding="async"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061C30]/80 via-transparent to-transparent" />

          {/* Top Category Badge */}
          {category && (
            <div className="absolute top-4 left-4 z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#061C30]/90 backdrop-blur-md border border-[#D9A900]/40 text-[#D9A900] text-[11px] font-bold uppercase tracking-wider font-sans">
                <Sparkles className="w-3.5 h-3.5 text-[#D9A900]" />
                <span>{category}</span>
              </span>
            </div>
          )}

          {/* Icon Badge Overlay */}
          {IconComp && (
            <div className="absolute bottom-4 right-4 z-10 w-11 h-11 rounded-xl bg-white border border-[#E5E1D8] text-[#A87C00] flex items-center justify-center shadow-md">
              <IconComp className="w-5 h-5" />
            </div>
          )}
        </div>

        {/* Card Body Content */}
        <div className="p-5 sm:p-7 space-y-4">
          <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] group-hover:text-[#087C73] transition-colors leading-[1.2]">
            {title}
          </h3>

          <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
            {description}
          </p>

          {highlights && highlights.length > 0 && (
            <div className="space-y-2 pt-2 border-t border-[#E5E1D8]">
              {highlights.map((h, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-[14px] text-[#082B50] font-sans">
                  <CheckCircle2 className="w-4 h-4 text-[#087C73] shrink-0" />
                  <span>{h}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      {ctaText && (
        <div className="px-5 pb-5 sm:px-7 sm:pb-7">
          <div className="pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
            <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#082B50] group-hover:text-[#087C73] transition-colors font-sans">
              <span>{ctaText}</span>
              <ArrowRight className="w-4 h-4 text-[#A87C00] group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
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

export default ImageContentCard;
