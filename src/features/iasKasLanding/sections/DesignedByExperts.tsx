import { Award, Layers, CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';
import heroBg from '../../../assets/images/hero-bg.jpg';

const expertPillars = [
  {
    title: "Designed by Experts",
    category: "Academic Rigor",
    icon: Award,
    description: "Our curriculum is meticulously crafted by former civil servants and subject matter experts to ensure 100% alignment with the latest UPSC/KPSC patterns.",
    highlights: ["Expert-Led Frameworks", "UPSC/KPSC Syllabus Mapping", "Strategic Subject Depth"]
  },
  {
    title: "Latest UPSC Pattern",
    category: "Analytical Focus",
    icon: Layers,
    description: "Stay ahead with study materials and test series that reflect the evolving nature of the civil services examination, focusing on analytical depth.",
    highlights: ["Current Trend Analysis", "Analytical Question Banks", "Real-time Exam Simulation"]
  }
];

export default function DesignedByExperts() {
  const { ref, isInView } = useInView();

  const feature1 = expertPillars[0];
  const feature2 = expertPillars[1];
  const Icon1 = feature1.icon;
  const Icon2 = feature2.icon;

  return (
    <section 
      id="experts" 
      className="py-9 sm:py-16 lg:py-20 bg-premium-light bg-arch-watermark border-b border-[#E5E1D8] relative overflow-hidden pb-20 sm:pb-16 lg:pb-20" 
      ref={ref}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-8 sm:mb-14 transition-all duration-700 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[11px] sm:text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              CURRICULUM ARCHITECTURE
            </span>
          </div>

          <h2 className="font-sans text-[24px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.15] sm:leading-[1.1] tracking-tight text-[#082B50]">
            Curriculum <span className="text-[#087C73] inline-block px-1">Architecture</span>
          </h2>
          <div className="w-12 sm:w-16 h-1 bg-[#D9A900] mt-2.5 sm:mt-4 rounded-full" />
          <p className="mt-3.5 sm:mt-5 text-[14px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans px-1 sm:px-0">
            Designed by senior civil servants, academicians, and subject experts to ensure complete alignment with UPSC and KPSC syllabus standards.
          </p>
        </div>

        {/* Editorial Content Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-7 sm:gap-8 lg:gap-12 items-center transition-all duration-700 delay-150 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Dominant Hero Image Banner (7 cols on desktop) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden shadow-xl border border-[#E5E1D8] group">
            <img
              src={heroBg}
              alt="Sri Lakshmi College Campus & Learning Environment"
              className="w-full h-[220px] sm:h-[380px] lg:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              loading="lazy"
              decoding="async"
            />
            {/* Subtle Gradient & Badge Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#061C30]/90 via-[#061C30]/40 to-transparent flex flex-col justify-end p-5 sm:p-8 text-white">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-[#D9A900] text-[#061C30] text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider font-sans mb-1.5 sm:mb-2 w-fit">
                <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>EXCELLENCE IN PEDAGOGY</span>
              </span>
              <h3 className="font-sans text-lg sm:text-2xl lg:text-3xl font-bold text-white leading-snug sm:leading-tight">
                Academic Environment Designed for Civil Service Aspirants
              </h3>
            </div>
          </div>

          {/* Unboxed Editorial Content Pillars (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col font-sans">
            
            {/* FEATURE 1: Academic Rigor */}
            <div className="space-y-3">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50 border border-teal-200/80 text-[#087C73] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Icon1 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold text-[#A87C00] uppercase tracking-[0.14em] block mb-0.5">
                    {feature1.category}
                  </span>
                  <h4 className="font-sans font-bold text-[20px] sm:text-2xl text-[#082B50] leading-snug">
                    {feature1.title}
                  </h4>
                </div>
              </div>

              <p className="text-[14px] sm:text-[15.5px] text-[#24496B] font-normal leading-[1.6]">
                {feature1.description}
              </p>

              <div className="space-y-2 pt-0.5">
                {feature1.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-[13px] sm:text-sm font-semibold text-[#082B50]">
                    <CheckCircle2 className="w-4 h-4 text-[#087C73] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* SUBTLE DIVIDER / SEPARATION (24-32px spacing) */}
            <div className="my-7 sm:my-8 border-t border-[#E5E1D8]/80" />

            {/* FEATURE 2: Analytical Focus (with subtle variation to signal new feature) */}
            <div className="space-y-3 pl-3.5 sm:pl-0 border-l-2 border-[#087C73]/35 sm:border-l-0">
              <div className="flex items-start gap-3 sm:gap-3.5">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-teal-50/90 border border-teal-200/90 text-[#087C73] flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                  <Icon2 className="w-4.5 h-4.5 sm:w-5 sm:h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[11px] font-bold text-[#A87C00] uppercase tracking-[0.14em] block mb-0.5">
                    {feature2.category}
                  </span>
                  <h4 className="font-sans font-bold text-[20px] sm:text-2xl text-[#082B50] leading-snug">
                    {feature2.title}
                  </h4>
                </div>
              </div>

              <p className="text-[14px] sm:text-[15.5px] text-[#24496B] font-normal leading-[1.6]">
                {feature2.description}
              </p>

              <div className="space-y-2 pt-0.5">
                {feature2.highlights.map((h) => (
                  <div key={h} className="flex items-start gap-2.5 text-[13px] sm:text-sm font-semibold text-[#082B50]">
                    <CheckCircle2 className="w-4 h-4 text-[#087C73] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA - Visually placed ~24-28px after second checklist */}
            <div className="pt-6 sm:pt-7">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-[13px] font-bold uppercase tracking-wider text-[#082B50] hover:text-[#087C73] transition-colors font-sans group"
              >
                <span>EXPLORE CURRICULUM DETAILS</span>
                <ArrowRight className="w-4 h-4 text-[#A87C00] group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}



