import React from 'react';
import { Star, Trophy, CheckCircle2 } from 'lucide-react';

export interface TestimonialCardProps {
  name: string;
  designation: string;
  quote: string;
  rating?: number;
  achievement?: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  designation,
  quote,
  rating = 5,
  achievement = 'Academy Aspirant',
  isActive = false,
  onClick,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-8 border transition-all duration-500 ease-out flex flex-col justify-between relative group cursor-pointer h-full ${
        isActive
          ? 'border-[#D9A900] shadow-[0_16px_36px_-8px_rgba(217,169,0,0.22)] ring-2 ring-[#D9A900]/30'
          : 'border-[#E5E1D8] shadow-xs hover-premium-card'
      } ${className}`}
    >
      {/* Large Decorative Quotation Mark Watermark */}
      <div className="absolute right-5 top-4 font-serif text-[72px] sm:text-[90px] font-black text-[#082B50]/5 group-hover:text-[#D9A900]/15 leading-none select-none pointer-events-none transition-colors duration-500">
        &ldquo;
      </div>

      <div className="space-y-4 relative z-10">
        {/* Achievement Badge & Rating */}
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#E5E1D8] text-[#A87C00] text-[11px] font-bold uppercase tracking-wider font-sans animate-shimmer-badge">
            <Trophy className="w-3.5 h-3.5 text-[#A87C00] shrink-0 group-hover:rotate-12 transition-transform" />
            <span>{achievement}</span>
          </div>

          <div className="flex items-center gap-1">
            {[...Array(rating)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 text-[#D9A900] fill-[#D9A900] transition-transform duration-300 ${
                  isActive ? 'scale-110' : 'group-hover:scale-125'
                }`}
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>

        {/* Testimonial Statement */}
        <p className="font-sans text-[15px] sm:text-[17px] text-[#24496B] font-normal leading-[1.6] pt-1 italic">
          &ldquo;{quote}&rdquo;
        </p>
      </div>

      {/* Author Footer */}
      <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center gap-3.5 relative z-10">
        <div
          className={`w-11 h-11 rounded-full font-sans font-bold text-base flex items-center justify-center transition-all duration-300 shrink-0 ${
            isActive
              ? 'bg-[#061C30] text-[#D9A900] border-2 border-[#D9A900] shadow-[0_0_12px_rgba(217,169,0,0.4)] scale-105'
              : 'bg-[#061C30] text-[#D9A900] border border-[#D9A900] shadow-xs group-hover:scale-105'
          }`}
        >
          {name.charAt(0)}
        </div>
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-sans font-bold text-[#082B50] text-[15px] sm:text-[16px]">
              {name}
            </h4>
            <CheckCircle2 className="w-4 h-4 text-[#087C73] shrink-0" />
          </div>
          <span className="text-[11px] sm:text-[12px] text-[#64748B] font-sans font-medium uppercase tracking-wider block mt-0.5">
            {designation}
          </span>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
