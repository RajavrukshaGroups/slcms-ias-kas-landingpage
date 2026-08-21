import { useState, useEffect } from 'react';
import { Star, Trophy, Quote, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsHeading, testimonials } from '../data/testimonials';
import { useInView } from '../hooks/useInView';

export default function Testimonials() {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  // Auto-cycle active testimonial card every 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-premium-light bg-arch-watermark border-b border-[#E5E1D8] text-[#082B50] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              ASPIRANT SUCCESS STORIES
            </span>
          </div>

          <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {testimonialsHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{testimonialsHeading.highlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#D9A900] mt-4 rounded-full" />
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            {testimonialsHeading.description}
          </p>
        </div>

        {/* 3-Column Uniform Testimonial Grid with Interactive Carousel Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((testimonial, idx) => {
            const isActive = activeIndex === idx;

            return (
              <div
                key={testimonial.name}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`bg-white/95 backdrop-blur-xs rounded-2xl p-6 sm:p-7 border transition-all duration-500 ease-out flex flex-col justify-between relative group cursor-pointer h-full ${
                  isActive
                    ? 'border-[#D9A900] shadow-[0_16px_36px_-8px_rgba(217,169,0,0.22)] -translate-y-2 ring-2 ring-[#D9A900]/30'
                    : 'border-[#E5E1D8] shadow-xs hover-premium-card'
                } ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'}`}
                style={{ transitionDelay: `${idx * 140}ms` }}
              >
                {/* Low-Opacity Decorative Watermark Quote Icon with Rotation Animation */}
                <Quote
                  className={`absolute right-6 top-6 w-8 h-8 pointer-events-none transition-all duration-500 shrink-0 ${
                    isActive ? 'text-[#D9A900]/35 scale-125 rotate-0' : 'text-[#E5E1D8] rotate-180 group-hover:text-[#D9A900]/25 group-hover:scale-110 group-hover:rotate-0'
                  }`}
                />

                <div className="space-y-4">
                  {/* Achievement Badge */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#E5E1D8] text-[#A87C00] text-[11px] font-bold uppercase tracking-wider font-sans animate-shimmer-badge">
                    <Trophy className="w-3.5 h-3.5 text-[#A87C00] shrink-0 group-hover:rotate-12 transition-transform" />
                    <span>{testimonial.achievement || 'Academy Aspirant'}</span>
                  </div>

                  {/* 5-Star Rating with Bouncing Animation */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating || 5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 text-[#D9A900] fill-[#D9A900] transition-transform duration-300 ${
                          isActive ? 'scale-110' : 'group-hover:scale-125'
                        }`}
                        style={{ transitionDelay: `${i * 50}ms` }}
                      />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="font-sans text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] relative z-10 pt-1">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                {/* Subtle Neutral Divider & Student Profile */}
                <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center gap-3.5">
                  <div
                    className={`w-10 h-10 rounded-full font-sans font-bold text-sm flex items-center justify-center transition-all duration-300 shrink-0 ${
                      isActive
                        ? 'bg-[#061C30] text-[#D9A900] border-2 border-[#D9A900] shadow-[0_0_12px_rgba(217,169,0,0.4)] scale-110'
                        : 'bg-[#061C30] text-[#D9A900] border border-[#D9A900] shadow-xs group-hover:scale-105'
                    }`}
                  >
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-sans font-bold text-[#082B50] text-[16px]">
                        {testimonial.name}
                      </h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#087C73] shrink-0" />
                    </div>
                    <span className="text-[12px] text-[#64748B] font-sans font-medium uppercase tracking-wider block mt-0.5">
                      {testimonial.designation}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Carousel Pagination Dots & Arrow Controls */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-9 h-9 rounded-full bg-white border border-[#E5E1D8] text-[#082B50] hover:bg-[#082B50] hover:text-[#D9A900] hover:border-[#082B50] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsAutoPlaying(false);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === idx ? 'w-8 bg-[#D9A900] shadow-xs' : 'w-2.5 bg-[#E5E1D8] hover:bg-[#082B50]/40'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-9 h-9 rounded-full bg-white border border-[#E5E1D8] text-[#082B50] hover:bg-[#082B50] hover:text-[#D9A900] hover:border-[#082B50] flex items-center justify-center transition-all shadow-xs cursor-pointer"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Premium Bottom CTA Banner */}
        <div
          className={`mt-12 sm:mt-16 bg-premium-dark text-white rounded-2xl p-6 sm:p-8 border border-navy-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-6 relative z-20 transition-all duration-700 ease-out delay-300 ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
        >
          <div className="flex items-center gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#D9A900] flex items-center justify-center shrink-0 animate-float">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-base sm:text-lg text-white leading-tight">
                Join 500+ Aspirants Prepared at Sri Lakshmi Academy
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-sans mt-1">
                Integrated 3-Year Degree + IAS/KAS Coaching built for early civil services success.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="px-6 py-3 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] font-bold uppercase tracking-wider text-[12px] sm:text-[13px] rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0"
          >
            Start Your Journey
          </a>
        </div>

      </div>
    </section>
  );
}
