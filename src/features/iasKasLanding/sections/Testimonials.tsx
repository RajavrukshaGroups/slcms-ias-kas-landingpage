import { useState, useEffect } from 'react';
import { Star, Trophy, Quote, CheckCircle2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonialsHeading, testimonials } from '../data/testimonials';
import { useInView } from '../hooks/useInView';

export default function Testimonials() {
  const { ref, isInView } = useInView();
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(true);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [cardsPerPage, setCardsPerPage] = useState<number>(3);

  // Touch Swipe Handling
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 40;

  const totalTestimonials = testimonials.length;
  // Calculate effective visible cards based on screen size and total available testimonials
  const effectiveVisibleCards = Math.min(cardsPerPage, totalTestimonials);
  const cardWidthPercent = 100 / effectiveVisibleCards;

  // Extended array to support seamless infinite sliding loop
  const extendedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  // Responsive window resize listener
  useEffect(() => {
    const updateCardsPerPage = () => {
      const w = window.innerWidth;
      if (w < 640) {
        setCardsPerPage(1);
      } else if (w < 1024) {
        setCardsPerPage(2);
      } else {
        setCardsPerPage(3);
      }
    };

    updateCardsPerPage();
    window.addEventListener('resize', updateCardsPerPage);
    return () => window.removeEventListener('resize', updateCardsPerPage);
  }, []);

  // Auto-cycle active testimonial card every 5 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, activeIndex]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (activeIndex >= totalTestimonials || activeIndex < 0) {
      setIsTransitioning(false);
      setActiveIndex(((activeIndex % totalTestimonials) + totalTestimonials) % totalTestimonials);
    }
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
  };

  const activeDotIndex = ((activeIndex % totalTestimonials) + totalTestimonials) % totalTestimonials;

  return (
    <section id="testimonials" className="py-12 sm:py-16 lg:py-20 bg-premium-light bg-arch-watermark border-b border-[#E5E1D8] text-[#082B50] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-8 sm:mb-12 transition-all duration-300 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[12px] sm:text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              ASPIRANT SUCCESS STORIES
            </span>
          </div>

          <h2 className="font-sans text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {testimonialsHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{testimonialsHeading.highlight}</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#D9A900] mt-3 sm:mt-4 rounded-full" />
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            {testimonialsHeading.description}
          </p>
        </div>

        {/* Responsive Infinite Carousel Track Viewport */}
        <div
          className="overflow-hidden relative touch-pan-y py-2"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex"
            onTransitionEnd={handleTransitionEnd}
            style={{
              transform: `translateX(-${(activeIndex + totalTestimonials) * cardWidthPercent}%)`,
              transition: isTransitioning ? 'transform 450ms cubic-bezier(0.25, 1, 0.5, 1)' : 'none',
            }}
          >
            {extendedTestimonials.map((testimonial, idx) => {
              const originalIndex = idx % totalTestimonials;
              const isActive = originalIndex === activeDotIndex;

              return (
                <div
                  key={`${testimonial.name}-${idx}`}
                  style={{ width: `${cardWidthPercent}%` }}
                  className="shrink-0 px-2 sm:px-3 lg:px-4"
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setIsTransitioning(true);
                    setActiveIndex(idx - totalTestimonials);
                  }}
                >
                  <div
                    className={`bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-7 border transition-all duration-500 ease-out flex flex-col justify-between relative group cursor-pointer h-full ${
                      isActive
                        ? 'border-[#D9A900] shadow-[0_16px_36px_-8px_rgba(217,169,0,0.22)] ring-2 ring-[#D9A900]/30'
                        : 'border-[#E5E1D8] shadow-xs hover-premium-card'
                    }`}
                  >
                    <Quote
                      className={`absolute right-6 top-6 w-8 h-8 pointer-events-none transition-all duration-500 shrink-0 ${
                        isActive ? 'text-[#D9A900]/35 scale-125 rotate-0' : 'text-[#E5E1D8] rotate-180 group-hover:text-[#D9A900]/25 group-hover:scale-110 group-hover:rotate-0'
                      }`}
                    />

                    <div className="space-y-4">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F8F7F3] border border-[#E5E1D8] text-[#A87C00] text-[11px] font-bold uppercase tracking-wider font-sans animate-shimmer-badge">
                        <Trophy className="w-3.5 h-3.5 text-[#A87C00] shrink-0 group-hover:rotate-12 transition-transform" />
                        <span>{testimonial.achievement || 'Academy Aspirant'}</span>
                      </div>

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

                      <p className="font-sans text-[14.5px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] relative z-10 pt-1">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#E5E1D8] flex items-center gap-3.5">
                      <div
                        className={`w-10 h-10 rounded-full font-sans font-bold text-sm flex items-center justify-center transition-all duration-300 shrink-0 ${
                          isActive
                            ? 'bg-[#061C30] text-[#D9A900] border-2 border-[#D9A900] shadow-[0_0_12px_rgba(217,169,0,0.4)] scale-105'
                            : 'bg-[#061C30] text-[#D9A900] border border-[#D9A900] shadow-xs group-hover:scale-105'
                        }`}
                      >
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="font-sans font-bold text-[#082B50] text-[15px] sm:text-[16px]">
                            {testimonial.name}
                          </h4>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#087C73] shrink-0" />
                        </div>
                        <span className="text-[11px] sm:text-[12px] text-[#64748B] font-sans font-medium uppercase tracking-wider block mt-0.5">
                          {testimonial.designation}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
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
                  setIsAutoPlaying(false);
                  setIsTransitioning(true);
                  setActiveIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDotIndex === idx ? 'w-8 bg-[#D9A900] shadow-xs' : 'w-2.5 bg-[#E5E1D8] hover:bg-[#082B50]/40'
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
          className={`mt-12 sm:mt-16 bg-premium-dark text-white rounded-2xl p-5 sm:p-8 border border-navy-800 shadow-2xl flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 relative z-20 transition-all duration-700 ease-out delay-300 ${
            isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
          }`}
        >
          <div className="flex items-center gap-3.5 sm:gap-4 text-left">
            <div className="w-10 h-10 rounded-xl bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#D9A900] flex items-center justify-center shrink-0 animate-float">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-sans font-bold text-sm sm:text-lg text-white leading-tight">
                Join 500+ Aspirants Prepared at Sri Lakshmi Academy
              </h4>
              <p className="text-xs sm:text-sm text-white/80 font-sans mt-1">
                Integrated 3-Year Degree + IAS/KAS Coaching built for early civil services success.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="w-full sm:w-auto text-center px-6 py-3 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] font-bold uppercase tracking-wider text-[12px] sm:text-[13px] rounded-lg shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all whitespace-nowrap shrink-0 cursor-pointer font-sans"
          >
            Start Your Journey
          </a>
        </div>

      </div>
    </section>
  );
}
