import { useState, useEffect, useRef } from 'react';
import { roadmapHeading, roadmapYears } from '../data/roadmap';
import { useInView } from '../hooks/useInView';
import { GraduationCap, Sparkles } from 'lucide-react';

const yearSubtitles = [
  'Foundation & Basics',
  'Advanced Preparation',
  'Final Exam & Personality Test',
];

function YearMilestoneHeader({
  year,
  yearIdx,
}: {
  year: number;
  yearIdx: number;
}) {
  const headerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={headerRef}
      className={`relative flex items-center justify-start lg:justify-center mb-12 pl-12 sm:pl-16 lg:pl-0 z-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-85 translate-y-6'
        }`}
    >
      <div className="inline-flex items-center gap-3 bg-[#061C30] text-white px-5 py-2.5 rounded-full border-2 border-[#D9A900] shadow-md group hover:scale-105 transition-transform">
        <GraduationCap className="w-4 h-4 text-[#D9A900] group-hover:rotate-12 transition-transform" />
        <span className="flex items-center gap-1.5 text-xs sm:text-sm tracking-wider uppercase whitespace-nowrap">
          <span className="font-sans font-bold text-[#D9A900]">
            YEAR
          </span>
          <span className="font-sans font-bold text-[#D9A900]">
            {year}
          </span>
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-[#D9A900]" />
        <span className="font-sans text-xs text-white/90 uppercase tracking-wider font-semibold">
          {yearSubtitles[yearIdx]}
        </span>
      </div>
    </div>
  );
}

function TimelinePhaseItem({
  phase,
  phaseIdx,
  globalPhaseNum,
  isEven,
}: {
  phase: { title: string; description: string };
  phaseIdx: number;
  globalPhaseNum: number;
  isEven: boolean;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = itemRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
        rootMargin: '-30px 0px -30px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={itemRef}
      className={`relative flex flex-col lg:flex-row items-start lg:items-center transition-all duration-700 ease-out ${isVisible
        ? 'opacity-100 lg:translate-x-0 translate-y-0 scale-100'
        : isEven
          ? 'opacity-0 lg:-translate-x-16 translate-y-8 scale-95'
          : 'opacity-0 lg:translate-x-16 translate-y-8 scale-95'
        }`}
    >
      {/* Timeline Circle Node on Spine */}
      <div className="absolute left-5 sm:left-8 lg:left-1/2 top-1.5 -translate-x-1/2 z-20 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div
            className={`w-8 h-8 rounded-full bg-white border-2 border-[#D9A900] flex items-center justify-center shadow-xs transition-all duration-500 ${isVisible ? 'scale-110 ring-4 ring-[#D9A900]/30 shadow-md' : 'scale-90'
              }`}
          >
            <div className="w-3 h-3 rounded-full bg-[#087C73]" />
          </div>
          {isVisible && (
            <div className="absolute inset-0 rounded-full border border-[#D9A900] animate-ping opacity-40" />
          )}
        </div>
      </div>

      {/* Content Container */}
      <div
        className={`w-full lg:w-1/2 pl-14 sm:pl-20 lg:pl-0 ${isEven ? 'lg:pr-14 lg:text-right' : 'lg:ml-auto lg:pl-14 lg:text-left'
          }`}
      >
        <div className="space-y-2 group p-5 bg-white border border-[#E5E1D8] rounded-2xl transition-all duration-300 hover:border-[#D9A900] hover:shadow-xs">
          {/* Metadata Eyebrow */}
          <div
            className={`flex items-center gap-2 text-xs font-bold tracking-wider uppercase text-[#087C73] ${isEven ? 'lg:justify-end' : 'lg:justify-start'
              }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A87C00] shrink-0" />
            <span>Phase 0{phaseIdx + 1}</span>
            <span className="text-[#A87C00]">•</span>
            <span className="text-[#64748B] font-medium">Step {globalPhaseNum} of 9</span>
          </div>

          {/* Phase Title */}
          <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] group-hover:text-[#087C73] transition-colors leading-[1.2]">
            {phase.title}
          </h3>

          {/* Phase Description */}
          <p
            className={`text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] font-sans max-w-lg ${isEven ? 'lg:ml-auto' : 'lg:mr-auto'
              }`}
          >
            {phase.description}
          </p>

          {/* Dynamic Accent Line */}
          <div
            className={`pt-2 flex ${isEven ? 'lg:justify-end' : 'lg:justify-start'}`}
          >
            <div className="w-12 h-1 bg-[#D9A900]/80 rounded-full group-hover:w-20 transition-all duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Roadmap() {
  const { ref, isInView } = useInView(0.1);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Calculate scroll progress through the roadmap section
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.8;
      const totalDist = rect.height;
      const currentDist = start - rect.top;

      const rawProgress = (currentDist / totalDist) * 100;
      const clamped = Math.min(Math.max(rawProgress, 0), 100);
      setScrollProgress(clamped);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return (
    <section id="roadmap" className="py-16 sm:py-20 bg-premium-light bg-luxury-emblem border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              STRUCTURED ACADEMIC TIMELINE
            </span>
          </div>

          <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {roadmapHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{roadmapHeading.highlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#D9A900] mt-4 rounded-full" />
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            {roadmapHeading.description}
          </p>
        </div>

        {/* Dynamic Animated Timeline Structure */}
        <div className="relative">

          {/* Base Inactive Vertical Spine Track */}
          <div className="absolute top-4 bottom-4 left-5 sm:left-8 lg:left-1/2 w-1 -translate-x-1/2 bg-ivory-300/80 rounded-full" />

          {/* Dynamic Scroll-Drawn Active Timeline Line */}
          <div
            className="absolute top-4 left-5 sm:left-8 lg:left-1/2 w-1 -translate-x-1/2 bg-gradient-to-b from-gold-400 via-teal-600 to-navy-900 rounded-full transition-all duration-300 ease-out shadow-xs"
            style={{ height: `${scrollProgress}%` }}
          />

          {/* Glowing Traveling Beam Pulse Node on Progress Line */}
          {scrollProgress > 2 && scrollProgress < 98 && (
            <div
              className="absolute left-5 sm:left-8 lg:left-1/2 w-3.5 h-3.5 rounded-full bg-gold-400 shadow-[0_0_15px_#D4AF37] -translate-x-1/2 z-30 transition-all duration-300 pointer-events-none"
              style={{ top: `${scrollProgress}%` }}
            >
              <div className="w-full h-full rounded-full bg-gold-300 animate-ping opacity-75" />
            </div>
          )}

          {/* Years Iteration */}
          <div className="space-y-16 lg:space-y-24 relative z-10">
            {roadmapYears.map((year, yearIdx) => (
              <div key={year.year} className="space-y-12">

                {/* Year Milestone Banner Node */}
                <YearMilestoneHeader year={year.year} yearIdx={yearIdx} />

                {/* Timeline Phases */}
                <div className="space-y-12 lg:space-y-16">
                  {year.phases.map((phase, phaseIdx) => {
                    const globalPhaseNum = yearIdx * 3 + phaseIdx + 1;
                    const isEven = phaseIdx % 2 === 0;

                    return (
                      <TimelinePhaseItem
                        key={phase.title}
                        phase={phase}
                        phaseIdx={phaseIdx}
                        globalPhaseNum={globalPhaseNum}
                        isEven={isEven}
                      />
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
