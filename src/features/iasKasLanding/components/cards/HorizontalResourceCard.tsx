import React from 'react';
import { ChevronRight } from 'lucide-react';

export interface HorizontalResourceCardProps {
  title: string;
  category: string;
  icon: React.ComponentType<{ className?: string }>;
  isSelected?: boolean;
  onClick?: () => void;
  badge?: string;
  className?: string;
}

export const HorizontalResourceCard: React.FC<HorizontalResourceCardProps> = ({
  title,
  category,
  icon: IconComp,
  isSelected = false,
  onClick,
  badge,
  className = '',
}) => {
  return (
    <div
      onClick={onClick}
      className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between group font-sans hover-premium-card ${
        isSelected
          ? 'bg-white border-[#D9A900] shadow-md -translate-y-0.5 ring-2 ring-[#D9A900]/20'
          : 'bg-white/95 border-[#E5E1D8] shadow-xs'
      } ${className}`}
    >
      <div className="flex items-center gap-3 sm:gap-3.5 min-w-0">
        <div
          className={`w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
            isSelected
              ? 'bg-[#082B50] text-[#D9A900]'
              : 'bg-[#F8F7F3] text-[#A87C00] border border-[#E5E1D8] group-hover:bg-[#082B50] group-hover:text-[#D9A900]'
          }`}
        >
          <IconComp className="w-4 h-4 sm:w-5 sm:h-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="font-sans font-bold text-[#082B50] text-[15px] sm:text-[16px] leading-tight truncate group-hover:text-[#087C73] transition-colors">
              {title}
            </h3>
            {badge && (
              <span className="text-[10px] font-bold text-[#087C73] bg-teal-50 border border-teal-200 px-2 py-0.5 rounded uppercase tracking-wider shrink-0">
                {badge}
              </span>
            )}
          </div>
          <span className="text-[11px] sm:text-[12px] text-[#64748B] font-sans font-medium block mt-0.5 truncate">
            {category}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0 ml-2">
        {isSelected && (
          <span className="w-2 h-2 rounded-full bg-[#D9A900] animate-pulse" />
        )}
        <div
          className={`w-7 h-7 rounded-lg flex items-center justify-center transition-colors ${
            isSelected
              ? 'bg-[#087C73] text-white'
              : 'bg-[#F8F7F3] text-[#64748B] group-hover:bg-[#087C73] group-hover:text-white'
          }`}
        >
          <ChevronRight
            className={`w-4 h-4 transition-transform duration-200 ${
              isSelected ? 'rotate-90 lg:rotate-0 lg:translate-x-0.5' : 'group-hover:translate-x-0.5'
            }`}
          />
        </div>
      </div>
    </div>
  );
};

export default HorizontalResourceCard;
