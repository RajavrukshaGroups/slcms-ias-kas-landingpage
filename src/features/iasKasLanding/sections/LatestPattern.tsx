import { expertSections } from '../data/experts';
import { useInView } from '../hooks/useInView';
import { Layers, FileText, CheckCircle2 } from 'lucide-react';

export default function LatestPattern() {
  const { ref, isInView } = useInView();
  const patternData = expertSections[1];

  return (
    <section className="py-12 sm:py-16 bg-navy-950 text-white border-b border-navy-900" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`bg-navy-900 border border-navy-800 rounded-2xl p-8 sm:p-12 transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="flex items-center gap-2">
                <span className="font-sans font-extrabold text-xl text-gold-500">06</span>
                <span className="text-xs font-bold tracking-[0.25em] text-gold-400 uppercase font-sans">
                  CURRENT PATTERN BRIEFING
                </span>
              </div>

              <h2 className="font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white pl-0.5 tracking-tight">
                {patternData.title}
              </h2>

              <p className="text-base sm:text-lg text-ivory-200 leading-relaxed font-sans max-w-3xl">
                {patternData.description}
              </p>
            </div>

            {/* Right Actionable Features */}
            <div className="lg:col-span-4 space-y-3 border-t lg:border-t-0 lg:border-l border-navy-800 pt-6 lg:pt-0 lg:pl-8">
              <div className="flex items-center gap-3 text-ivory-100 text-sm font-semibold">
                <CheckCircle2 className="w-5 h-5 text-gold-400 shrink-0" />
                <span>Analytical Depth & Core Focus</span>
              </div>
              <div className="flex items-center gap-3 text-ivory-100 text-sm font-semibold">
                <FileText className="w-5 h-5 text-teal-400 shrink-0" />
                <span>Evolving Question Format Practice</span>
              </div>
              <div className="flex items-center gap-3 text-ivory-100 text-sm font-semibold">
                <Layers className="w-5 h-5 text-gold-400 shrink-0" />
                <span>Real Exam Simulation Mocks</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
