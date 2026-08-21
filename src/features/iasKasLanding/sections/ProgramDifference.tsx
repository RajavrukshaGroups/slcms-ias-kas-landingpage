import { useState } from 'react';
import {
  CheckCircle, Zap, TrendingUp, Users, Globe, Clock,
  GraduationCap, Map, CalendarCheck, BarChart3, ShieldCheck
} from 'lucide-react';
import {
  programDifferenceHeading,
  programFeaturesList,
  programFeatureCards,
  programTagline,
} from '../data/programFeatures';
import { useInView } from '../hooks/useInView';
import slcmsLogo from '/slcms_logo-BUxcAeo8.webp';

const listIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CheckCircle, Zap, TrendingUp, Users, Globe, Clock,
};

const cardIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  GraduationCap, Map, CalendarCheck, Globe, BarChart3, Users,
};
export default function ProgramDifference() {
  const { ref, isInView } = useInView();
  const [activeAdvantageIdx, setActiveAdvantageIdx] = useState<number | null>(null);

  return (
    <section id="program-difference" className="py-16 sm:py-20 bg-premium-light bg-gold-arc border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-start">

          {/* Left Column: Editorial Sticky Heading & Advantages List (6 cols) */}
          <div className="lg:col-span-6 space-y-6 lg:sticky lg:top-28">
            
            {/* Header Content */}
            <div
              className={`space-y-4 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
            >
              {/* Section Eyebrow */}
              <div className="flex items-center gap-2">
                <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
                  DISTINCT ADVANTAGES
                </span>
              </div>

              {/* Main H2 Heading */}
              <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
                How Our Program <span className="text-[#087C73]">Differs</span>
              </h2>

              {/* Short Gold Underline */}
              <div className="w-16 h-1 bg-[#D9A900] rounded-full" />

              <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
                We bridge the gap between traditional university academics and competitive civil service requirements through structured, dual-track learning.
              </p>
            </div>

            {/* Interactive Advantages List */}
            <div className="space-y-3.5 pt-2">
              {programFeaturesList.map((adv, idx) => {
                const IconComp = listIconMap[adv.icon] || CheckCircle;
                const isActive = activeAdvantageIdx === idx;

                return (
                  <div
                    key={adv.text}
                    onMouseEnter={() => setActiveAdvantageIdx(idx)}
                    onMouseLeave={() => setActiveAdvantageIdx(null)}
                    className={`p-5 rounded-2xl border transition-all duration-700 ease-out cursor-pointer font-sans hover-premium-card ${isActive
                      ? 'bg-white border-[#D9A900] shadow-md -translate-y-1'
                      : 'bg-white/95 border-[#E5E1D8] shadow-xs'
                      } ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                    style={{ transitionDelay: `${idx * 100}ms` }}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-colors ${isActive ? 'bg-[#087C73] text-white' : 'bg-[#F8F7F3] text-[#A87C00] border border-[#E5E1D8]'
                          }`}
                      >
                        <IconComp className="w-5 h-5" />
                      </div>

                      <div className="space-y-1">
                        <h3 className="font-sans font-bold text-[#082B50] text-[18px] sm:text-[20px] leading-[1.2]">
                          {adv.text}
                        </h3>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* Right Column: Dark Feature Panel (6 cols) */}
          <div
            className={`lg:col-span-6 transition-all duration-700 delay-200 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'
              }`}
          >
            {/* Dark Feature Panel */}
            <div className="bg-premium-dark bg-progression-watermark border border-navy-800 rounded-2xl lg:rounded-3xl p-7 sm:p-9 lg:p-10 text-white shadow-2xl relative overflow-hidden">

              {/* Institutional College Emblem & Name Header */}
              <div className="flex items-center justify-center gap-3 border-b border-navy-800 pb-5 mb-6">
                <img
                  src={slcmsLogo}
                  alt="Sri Lakshmi Emblem"
                  className="w-10 h-10 sm:w-12 sm:h-12 object-contain shrink-0"
                  width={48}
                  height={48}
                  loading="lazy"
                  decoding="async"
                />
                <div className="text-left font-sans">
                  <p className="font-bold text-sm sm:text-base text-white leading-tight uppercase tracking-tight">
                    SRI LAKSHMI COLLEGE OF
                  </p>
                  <p className="font-bold text-xs sm:text-sm text-[#D9A900] leading-snug uppercase tracking-wider">
                    MANAGEMENT &amp; SCIENCE
                  </p>
                </div>
              </div>

              {/* Panel Center Title Block */}
              <div className="text-center mb-8 space-y-1.5">
                <span className="font-sans text-white/80 text-sm sm:text-base tracking-wide block font-medium">
                  {programDifferenceHeading.title}
                </span>
                <h3 className="font-sans font-bold text-2xl sm:text-3xl text-[#D9A900] uppercase tracking-wider leading-none">
                  {programDifferenceHeading.highlight.toUpperCase()}
                </h3>
              </div>

              {/* 2-Column Grid for 6 Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-5">
                {programFeatureCards.map((card, idx) => {
                  const IconComp = cardIconMap[card.icon];
                  const numStr = `0${idx + 1}`;

                  return (
                    <div
                      key={card.title}
                      className="bg-[#082B50]/90 border border-navy-800 hover:border-[#D9A900] rounded-xl p-5 shadow-xs transition-all duration-200 cursor-pointer group flex flex-col justify-between"
                    >
                      <div>
                        {/* Gold Index Number & Subtle Icon */}
                        <div className="flex items-center justify-between mb-3">
                          <span className="font-sans font-bold text-xs text-[#D9A900] uppercase tracking-wider">
                            {numStr}
                          </span>
                          <div className="w-8 h-8 rounded-lg bg-[#D9A900]/20 text-[#D9A900] group-hover:bg-[#D9A900] group-hover:text-[#061C30] flex items-center justify-center shrink-0 border border-[#D9A900]/30 transition-colors duration-200">
                            {IconComp ? <IconComp className="w-4 h-4" /> : <ShieldCheck className="w-4 h-4" />}
                          </div>
                        </div>

                        {/* Feature Title */}
                        <h4 className="font-sans text-xs sm:text-sm font-bold text-white group-hover:text-[#D9A900] uppercase tracking-wider mb-1.5 transition-colors">
                          {card.title}
                        </h4>

                        {/* Feature Description */}
                        <p className="text-white/80 text-xs sm:text-[13px] leading-relaxed font-sans group-hover:text-white">
                          {card.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Quiet Panel Footer */}
              <div className="mt-8 pt-6 border-t border-navy-800 text-center space-y-1.5">
                <p className="text-[#D9A900] font-sans font-semibold text-xs sm:text-sm tracking-wider uppercase">
                  {programTagline}
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
