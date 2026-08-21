import { Clock, Target, CheckCircle, PenTool, ArrowRight, Trophy } from 'lucide-react';
import { whyStartHeading, whyStartCards } from '../data/whyStart';
import { useInView } from '../hooks/useInView';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Clock,
  Target,
  CheckCircle,
  PenTool,
  Trophy,
};

export default function WhyStart() {
  const { ref, isInView } = useInView();

  return (
    <section id="why-start" className="py-16 sm:py-20 bg-premium-light bg-arch-watermark border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">

          {/* Left Column: Editorial Sticky Content (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
                {whyStartHeading.label}
              </span>
            </div>

            {/* Main H2 Section Heading */}
            <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
              {whyStartHeading.title}{' '}
              <span className="text-[#D9A900] block mt-1">{whyStartHeading.highlight}</span>
            </h2>

            {/* Short Gold Decorative Underline */}
            <div className="w-16 h-1 bg-[#D9A900] rounded-full" />

            {/* Body Description */}
            <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
              {whyStartHeading.description}{' '}
              <span className="text-[#087C73] font-semibold block mt-2">
                {whyStartHeading.highlightedDescription}
              </span>
            </p>

            <div className="pt-2">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#087C73] hover:bg-[#075B55] text-white font-bold text-[12px] sm:text-[13px] uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <span>View Program Details</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Column: 4 Key Advantage Cards (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {whyStartCards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Trophy;

              return (
                <div
                  key={card.title}
                  className={`bg-white/90 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5E1D8] shadow-xs hover-premium-card transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                    }`}
                  style={{ transitionDelay: `${idx * 130}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#F8F7F3] border border-[#E5E1D8] flex items-center justify-center mb-5 shrink-0">
                    <IconComp className="w-6 h-6 text-[#A87C00]" />
                  </div>

                  <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] mb-3 leading-[1.2]">
                    {card.title}
                  </h3>

                  <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
                    {card.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
