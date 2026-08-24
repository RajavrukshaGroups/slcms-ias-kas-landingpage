import { BookOpen, Award, Newspaper, PenLine, UsersRound, Building2 } from 'lucide-react';
import { courseOverviewHeading, courseCategories } from '../data/courses';
import { useInView } from '../hooks/useInView';
import { AcademyCard } from '../components/cards/AcademyCard';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  BookOpen,
  Award,
  Newspaper,
  PenLine,
  UsersRound,
  Building2,
};

export default function CourseOverview() {
  const { ref, isInView } = useInView();

  const handleScrollToContact = () => {
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-12 sm:py-16 lg:py-20 bg-premium-light bg-luxury-emblem border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-8 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[12px] sm:text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              ACADEMIC DIRECTORY
            </span>
          </div>

          <h2 className="font-sans text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {courseOverviewHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{courseOverviewHeading.highlight}</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#D9A900] mt-3 sm:mt-4 rounded-full" />
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            {courseOverviewHeading.description}
          </p>
        </div>

        {/* Varied Grid with Selective Featured Hierarchy */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 items-stretch">
          {courseCategories.map((course, idx) => {
            const IconComp = iconMap[course.icon];
            const isFeatured = idx === 1; // Module 02: Mains Answer Writing & Preparation

            return (
              <div
                key={course.title}
                className={`transition-all duration-700 ease-out ${
                  isFeatured ? 'sm:col-span-2 lg:col-span-1' : ''
                } ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <AcademyCard
                  title={course.title}
                  description={`${course.description} (${course.duration})`}
                  eyebrow={isFeatured ? `FEATURED • ${course.badge}` : course.badge}
                  icon={IconComp}
                  variant={isFeatured ? 'featured' : 'standard'}
                  ctaText="Enquire Module →"
                  ctaHref="#contact"
                  onClick={handleScrollToContact}
                />
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



