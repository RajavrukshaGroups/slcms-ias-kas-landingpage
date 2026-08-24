import { Clock, Target, CheckCircle, PenTool, ArrowRight, Trophy } from 'lucide-react';
import { whyStartHeading, whyStartCards } from '../data/whyStart';
import { useInView } from '../hooks/useInView';
import { AcademyCard } from '../components/cards/AcademyCard';

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
    <section id="why-start" className="py-12 sm:py-16 lg:py-20 bg-premium-light bg-arch-watermark border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

          {/* Left Column: Editorial Sticky Content (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-4 sm:space-y-6">
            
            {/* Section Eyebrow */}
            <div className="flex items-center gap-2">
              <span className="text-[12px] sm:text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
                {whyStartHeading.label}
              </span>
            </div>

            {/* Main H2 Section Heading */}
            <h2 className="font-sans text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
              {whyStartHeading.title}{' '}
              <span className="text-[#D9A900] block mt-1">{whyStartHeading.highlight}</span>
            </h2>

            {/* Short Gold Decorative Underline */}
            <div className="w-14 sm:w-16 h-1 bg-[#D9A900] rounded-full" />

            {/* Body Description */}
            <p className="font-sans text-[14px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6]">
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

          {/* Right Column: Key Advantage Cards with Selective Hierarchy (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
            {whyStartCards.map((card, idx) => {
              const IconComp = iconMap[card.icon] || Trophy;
              const isFirstFeatured = idx === 0;

              return (
                <div
                  key={card.title}
                  className={`transition-all duration-700 ease-out ${
                    isFirstFeatured ? 'sm:col-span-2' : ''
                  } ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                  style={{ transitionDelay: `${idx * 130}ms` }}
                >
                  <AcademyCard
                    title={card.title}
                    description={card.description}
                    icon={IconComp}
                    variant={isFirstFeatured ? 'featured' : 'standard'}
                    eyebrow={isFirstFeatured ? 'KEY ACADEMIC HIGHLIGHT' : `ADVANTAGE 0${idx + 1}`}
                    ctaText="Explore Advantage →"
                    ctaHref="#courses"
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}


