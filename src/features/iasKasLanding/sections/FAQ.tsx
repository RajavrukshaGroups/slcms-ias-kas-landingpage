import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { faqHeading, faqs } from '../data/faqs';
import { useInView } from '../hooks/useInView';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const { ref, isInView } = useInView();

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 lg:py-20 bg-premium-light bg-luxury-emblem border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div
          className={`flex flex-col items-center text-center mb-8 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[12px] sm:text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              FREQUENTLY ASKED QUESTIONS
            </span>
          </div>

          <h2 className="font-sans text-[26px] sm:text-[36px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {faqHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{faqHeading.highlight}</span>
          </h2>
          <div className="w-14 sm:w-16 h-1 bg-[#D9A900] mt-3 sm:mt-4 rounded-full" />
          <p className="mt-4 sm:mt-5 text-[14px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-xl font-sans">
            {faqHeading.description}
          </p>
        </div>

        {/* Numbered Editorial Accordion List */}
        <div
          className={`divide-y divide-[#E5E1D8] border-t border-b border-[#E5E1D8] transition-all duration-700 delay-150 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const contentId = `faq-content-${index}`;
            const headingId = `faq-heading-${index}`;
            const numStr = `0${index + 1}`;

            return (
              <div key={index} className="py-4 sm:py-6 group">
                <button
                  id={headingId}
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D9A900] focus-visible:ring-offset-2 rounded cursor-pointer"
                  aria-expanded={isOpen}
                  aria-controls={contentId}
                >
                  <div className="flex items-center gap-3 sm:gap-6 pr-3">
                    <span className="font-sans font-bold text-[14px] sm:text-[16px] text-[#D9A900] shrink-0">
                      {numStr}
                    </span>
                    <span className="text-[14px] sm:text-[16px] font-sans font-semibold text-[#082B50] group-hover:text-[#087C73] transition-colors leading-snug">
                      {faq.question}
                    </span>
                  </div>

                  <div
                    className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${isOpen ? 'bg-[#082B50] text-[#D9A900]' : 'bg-[#F8F7F3] text-[#082B50] border border-[#E5E1D8] group-hover:bg-[#D9A900] group-hover:text-[#061C30]'
                      }`}
                  >
                    {isOpen ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                  </div>
                </button>

                <div
                  id={contentId}
                  role="region"
                  aria-labelledby={headingId}
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100 mt-2.5 sm:mt-3' : 'max-h-0 opacity-0'
                    }`}
                >
                  <div className="pl-7 sm:pl-12 pr-2 sm:pr-4">
                    <p className="text-[#24496B] text-[13.5px] sm:text-[15px] font-normal leading-[1.6] font-sans">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
