import { ArrowRight, BookOpen, Target, TrendingUp, GraduationCap, Users, ShieldCheck, Landmark } from 'lucide-react';
import { heroData } from '../data/hero';
import heroBg from '../../../assets/images/hero-bg.jpg';

export default function Hero() {
  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-32 pb-0 overflow-hidden flex flex-col justify-between min-h-[calc(100vh-80px)] lg:min-h-[660px]"
    >
      {/* Background Campus Image with Slow-Zoom Animation */}
      <img
        src={heroBg}
        alt="Sri Lakshmi College of Management & Science Campus Building"
        className="absolute inset-0 w-full h-full object-cover object-left-top sm:object-center animate-slow-zoom transition-transform duration-1000"
        fetchPriority="high"
        decoding="async"
      />

      {/* Balanced Overlay that makes Campus Building clearly visible while preserving text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061C30]/85 via-[#061C30]/60 to-[#061C30]/35 pointer-events-none" />

      {/* Main Hero Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10 my-auto py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Empty Left Column to let Campus Building shine clearly (5 cols) */}
          <div className="hidden lg:block lg:col-span-5" />

          {/* Right-Aligned Hero Content Column (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left animate-in fade-in slide-in-from-bottom-6 duration-700">
            
            {/* Top Eyebrow: DREAM. PREPARE. SERVE. */}
            <div className="flex items-center gap-3">
              <span className="font-sans text-[13px] font-semibold uppercase tracking-[0.18em] text-[#D9A900] drop-shadow-sm">
                DREAM. PREPARE. SERVE.
              </span>
              <div className="w-12 h-px bg-[#D9A900]/60" />
            </div>

            {/* Main Headline Stack: IAS | KAS + FOUNDATION COURSES */}
            <div className="space-y-2">
              <h1 className="font-sans text-[36px] sm:text-[48px] lg:text-[56px] font-extrabold text-white leading-[1.1] sm:leading-[1.05] tracking-tight drop-shadow-md">
                IAS <span className="text-[#D9A900] font-light mx-2">|</span> KAS
              </h1>
              <p className="font-sans font-bold text-[18px] sm:text-[22px] lg:text-[26px] text-[#D9A900] tracking-[0.18em] uppercase drop-shadow-sm">
                FOUNDATION COURSES
              </p>
              <div className="w-16 h-1 bg-[#D9A900] mt-3 rounded-full shadow-xs" />
            </div>

            {/* Sub-headline */}
            <p className="font-sans text-[15px] sm:text-[16px] text-white/95 font-normal leading-[1.6] max-w-xl pt-1 drop-shadow-sm">
              Shaping Future Officers. Building Better India. Integrated 3-Year Degree + UPSC/KPSC Civil Services Preparation in Bangalore.
            </p>

            {/* Lightweight Horizontal Feature Row */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-2">
              {/* Feature 1 */}
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#D9A900] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <BookOpen className="w-4 h-4 text-[#D9A900]" />
                </div>
                <div>
                  <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-white block drop-shadow-xs">
                    EXPERT FACULTY
                  </span>
                  <span className="font-sans text-[12px] text-white/80 font-normal block">
                    Learn from the best
                  </span>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#D9A900] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Target className="w-4 h-4 text-[#D9A900]" />
                </div>
                <div>
                  <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-white block drop-shadow-xs">
                    PROVEN STRATEGY
                  </span>
                  <span className="font-sans text-[12px] text-white/80 font-normal block">
                    Result-oriented approach
                  </span>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-center gap-3 group">
                <div className="w-9 h-9 rounded-lg bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#D9A900] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <TrendingUp className="w-4 h-4 text-[#D9A900]" />
                </div>
                <div>
                  <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-white block drop-shadow-xs">
                    PERSONALIZED GUIDANCE
                  </span>
                  <span className="font-sans text-[12px] text-white/80 font-normal block">
                    Mentorship at every step
                  </span>
                </div>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3">
              <a
                href="#courses"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#courses');
                }}
                className="inline-flex items-center justify-center gap-2 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] px-8 py-3.5 rounded-lg font-sans font-bold text-[12px] sm:text-[13px] uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 cursor-pointer"
              >
                <span>EXPLORE COURSES</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('#contact');
                }}
                className="inline-flex items-center justify-center gap-2 border border-white/80 hover:bg-white hover:text-[#061C30] text-white px-8 py-3.5 rounded-lg font-sans font-bold text-[12px] sm:text-[13px] uppercase tracking-wider transition-all duration-300 backdrop-blur-md cursor-pointer shadow-sm"
              >
                <span>ADMISSION ENQUIRY</span>
              </a>
            </div>

          </div>

        </div>

        {/* Bottom Full-Width Slim Statistics Bar */}
        <div className="mt-12 bg-[#061C30]/80 border border-white/20 rounded-2xl p-5 sm:p-6 backdrop-blur-md shadow-2xl text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-white/15">
            {/* Metric 1 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pr-4 group">
              <div className="w-10 h-10 rounded-xl bg-[#D9A900] text-[#061C30] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <span className="font-sans font-bold text-[30px] sm:text-[36px] text-[#D9A900] leading-none block">
                  3+
                </span>
                <span className="font-sans font-bold text-[12px] text-white uppercase tracking-[0.12em] block mt-1">
                  DECADES OF EXCELLENCE
                </span>
              </div>
            </div>

            {/* Metric 2 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4 group">
              <div className="w-10 h-10 rounded-xl bg-[#D9A900] text-[#061C30] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <span className="font-sans font-bold text-[30px] sm:text-[36px] text-[#D9A900] leading-none block">
                  50K+
                </span>
                <span className="font-sans font-bold text-[12px] text-white uppercase tracking-[0.12em] block mt-1">
                  SUCCESSFUL ASPIRANTS
                </span>
              </div>
            </div>

            {/* Metric 3 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:px-4 group">
              <div className="w-10 h-10 rounded-xl bg-[#D9A900] text-[#061C30] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <span className="font-sans font-bold text-[30px] sm:text-[36px] text-[#D9A900] leading-none block">
                  100%
                </span>
                <span className="font-sans font-bold text-[12px] text-white uppercase tracking-[0.12em] block mt-1">
                  COMMITMENT TO SUCCESS
                </span>
              </div>
            </div>

            {/* Metric 4 */}
            <div className="flex items-center gap-3.5 pt-2 sm:pt-0 sm:pl-4 group">
              <div className="w-10 h-10 rounded-xl bg-[#D9A900] text-[#061C30] flex items-center justify-center shrink-0 shadow-sm group-hover:scale-105 transition-transform">
                <Landmark className="w-5 h-5" />
              </div>
              <div className="text-left font-sans">
                <span className="font-sans font-bold text-[30px] sm:text-[36px] text-[#D9A900] leading-none block">
                  1
                </span>
                <span className="font-sans font-bold text-[12px] text-white uppercase tracking-[0.12em] block mt-1">
                  MISSION NATION FIRST
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Marquee Ticker Bar */}
      <div className="mt-8 mb-0 bg-[#061C30] py-3.5 border-t border-[#D9A900]/30 border-b-0 overflow-hidden relative z-20">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...heroData.marqueeItems, ...heroData.marqueeItems].map((item, idx) => (
            <span
              key={idx}
              className="mx-8 text-[12px] font-sans font-bold tracking-[0.18em] text-[#D9A900] uppercase flex items-center gap-6"
            >
              {item}
              <span className="text-[#D9A900]">•</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
