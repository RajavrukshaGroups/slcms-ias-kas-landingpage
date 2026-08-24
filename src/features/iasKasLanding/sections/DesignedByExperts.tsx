import { Award, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const iconMap = {
  Award: Award,
  Layers: Layers,
};

const expertPillars = [
  {
    title: "Designed by Experts",
    category: "Academic Rigor",
    icon: "Award" as const,
    description: "Our curriculum is meticulously crafted by former civil servants and subject matter experts to ensure 100% alignment with the latest UPSC/KPSC patterns.",
    highlights: ["Expert-Led Frameworks", "UPSC/KPSC Syllabus Mapping", "Strategic Subject Depth"]
  },
  {
    title: "Latest UPSC Pattern",
    category: "Analytical Focus",
    icon: "Layers" as const,
    description: "Stay ahead with study materials and test series that reflect the evolving nature of the civil services examination, focusing on analytical depth.",
    highlights: ["Current Trend Analysis", "Analytical Question Banks", "Real-time Exam Simulation"]
  }
];

export default function DesignedByExperts() {
  const { ref, isInView } = useInView();

  return (
    <section id="experts" className="py-12 sm:py-16 lg:py-20 bg-premium-light bg-arch-watermark border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header Eyebrow & Main H2 Heading */}
        <div
          className={`flex flex-col items-center text-center mb-8 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[12px] sm:text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              CURRICULUM ARCHITECTURE
            </span>
          </div>

          <h2 className="font-sans text-[26px] sm:text-[36px] lg:text-[48px] font-bold leading-[1.1] tracking-tight text-[#082B50]">
            Curriculum <span className="text-[#087C73] inline-block pl-1.5 pr-1.5">Architecture</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#D9A900] mt-3 sm:mt-4 rounded-full" />
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            Designed by senior civil servants, academicians, and subject experts to ensure complete alignment with UPSC and KPSC syllabus standards.
          </p>
        </div>

        {/* 2 Equal Structured Pillar Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8 items-stretch">
          {expertPillars.map((pillar, idx) => {
            const IconComp = iconMap[pillar.icon];

            return (
              <div
                key={pillar.title}
                className={`bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-8 border border-[#E5E1D8] shadow-xs hover-premium-card transition-all duration-700 ease-out flex flex-col justify-between h-full ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                  }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className="space-y-6">
                  {/* Top Bar: Icon & Category */}
                  <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#F8F7F3] border border-[#E5E1D8] flex items-center justify-center shrink-0">
                      <IconComp className="w-6 h-6 text-[#A87C00]" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-teal-50 border border-teal-200 text-[#087C73] text-[11px] font-bold uppercase tracking-wider font-sans">
                      <Sparkles className="w-3.5 h-3.5 text-[#087C73]" />
                      <span>{pillar.category}</span>
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-2">
                    <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] leading-[1.2]">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Highlights List */}
                  <div className="space-y-2.5 pt-2">
                    {pillar.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2.5 text-[14px] text-[#082B50] font-sans">
                        <CheckCircle2 className="w-4 h-4 text-[#087C73] shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="mt-8 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#082B50] hover:text-[#087C73] transition-colors font-sans"
                  >
                    <span>EXPLORE ARCHITECTURE</span>
                    <ArrowRight className="w-4 h-4 text-[#A87C00]" />
                  </a>

                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider font-sans">
                    Pillar 0{idx + 1}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
