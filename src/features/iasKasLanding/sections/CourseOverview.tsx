import { ArrowUpRight, BookOpen, Award, Newspaper, PenLine, UsersRound, Building2, Clock } from 'lucide-react';
import { courseOverviewHeading, courseCategories } from '../data/courses';
import { useInView } from '../hooks/useInView';

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

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="courses" className="py-16 sm:py-20 bg-premium-light bg-luxury-emblem border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              ACADEMIC DIRECTORY
            </span>
          </div>

          <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {courseOverviewHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{courseOverviewHeading.highlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#D9A900] mt-4 rounded-full" />
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            {courseOverviewHeading.description}
          </p>
        </div>

        {/* 3-Column Uniform Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {courseCategories.map((course, idx) => {
            const IconComp = iconMap[course.icon];
            const courseNumber = `0${idx + 1}`;

            return (
              <div
                key={course.title}
                className={`bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border border-[#E5E1D8] shadow-xs hover-premium-card transition-all duration-700 ease-out flex flex-col justify-between h-full group relative overflow-hidden ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
                  }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div>
                  {/* Top Bar: Module Number + Badge & Icon */}
                  <div className="flex items-center justify-between border-b border-[#E5E1D8] pb-4 mb-5">
                    <div className="flex items-center gap-3">
                      <span className="font-sans font-bold text-2xl text-[#082B50]/60 group-hover:text-[#D9A900] transition-colors">
                        {courseNumber}
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#087C73] bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded-md font-sans">
                        {course.badge}
                      </span>
                    </div>

                    <div className="w-11 h-11 rounded-xl bg-[#F8F7F3] text-[#A87C00] group-hover:bg-[#082B50] group-hover:text-[#D9A900] flex items-center justify-center shrink-0 border border-[#E5E1D8] transition-colors">
                      {IconComp ? <IconComp className="w-5 h-5" /> : null}
                    </div>
                  </div>

                  {/* Course Title & Description */}
                  <div className="space-y-3 mb-5">
                    <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-[#082B50] group-hover:text-[#087C73] transition-colors leading-[1.2]">
                      {course.title}
                    </h3>
                    <p className="text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] font-sans">
                      {course.description}
                    </p>
                  </div>

                  {/* Duration / Hours Tag */}
                  <div className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#082B50] bg-[#F8F7F3] px-3 py-1.5 rounded-lg border border-[#E5E1D8] font-sans">
                    <Clock className="w-3.5 h-3.5 text-[#A87C00]" />
                    <span>{course.duration}</span>
                  </div>
                </div>

                {/* Bottom Action Button */}
                <div className="mt-8 pt-4 border-t border-[#E5E1D8] flex items-center justify-between">
                  <a
                    href="#contact"
                    onClick={scrollToContact}
                    className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-[#082B50] group-hover:text-[#087C73] transition-colors font-sans"
                  >
                    <span>ENQUIRE MODULE</span>
                    <ArrowUpRight className="w-4 h-4 text-[#A87C00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>

                  <span className="text-[11px] font-bold text-[#64748B] uppercase tracking-wider font-sans">
                    Module {courseNumber}
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
