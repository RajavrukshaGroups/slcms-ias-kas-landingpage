import { ArrowRight, PhoneCall, CheckCircle, Star, ShieldCheck } from 'lucide-react';
import { finalCTAData } from '../data/cta';
import { useInView } from '../hooks/useInView';

export default function FinalCTA() {
  const { ref, isInView } = useInView();

  return (
    <section id="final-cta" className="py-10 sm:py-14 lg:py-16 bg-navy-950 text-white relative border-b border-navy-900" ref={ref}>
      
      {/* Top Gold Line Accent */}
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-gold-400 via-gold-300 to-gold-500" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div
          className={`bg-navy-900 border-2 border-navy-800 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content (7 columns) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 text-xs font-bold uppercase tracking-widest">
                <ShieldCheck className="w-4 h-4 text-gold-400" />
                <span>{finalCTAData.badge}</span>
              </div>

              {/* Editorial Title */}
              <h2 className="space-y-2">
                <span className="block font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  {finalCTAData.title}
                </span>
                <span className="block font-sans text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold text-gold-400 italic pl-1 pr-1">
                  {finalCTAData.highlightedTitle}
                </span>
              </h2>

              <p className="text-base sm:text-lg text-ivory-200 leading-relaxed font-sans max-w-xl">
                {finalCTAData.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
                <a
                  href={finalCTAData.primaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 bg-gold-400 hover:bg-gold-500 text-navy-950 px-8 py-4 rounded font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5"
                >
                  {finalCTAData.primaryCTA.label}
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={finalCTAData.secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 border-2 border-ivory-300 text-white hover:bg-white hover:text-navy-900 px-8 py-4 rounded font-sans font-bold text-sm uppercase tracking-wider transition-all duration-300"
                >
                  {finalCTAData.secondaryCTA.label}
                  <PhoneCall className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Supporting Checklist & Stats (5 columns) */}
            <div className="lg:col-span-5 bg-navy-800/90 border border-navy-700/80 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="font-sans text-xl font-bold text-gold-400 border-b border-navy-700 pb-3">
                Why Choose Sri Lakshmi IAS/KAS
              </h3>

              {/* Checklist */}
              <ul className="space-y-3">
                {finalCTAData.features.map((feature) => (
                  <li key={feature.text} className="flex items-center gap-3 text-ivory-100 text-sm font-medium">
                    <CheckCircle className="w-5 h-5 text-teal-400 shrink-0" />
                    <span>{feature.text}</span>
                  </li>
                ))}
              </ul>

              {/* Mini Stats Bar */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-navy-700 text-center">
                {finalCTAData.stats.map((stat) => (
                  <div key={stat.label} className="bg-navy-900/60 p-2.5 rounded-lg border border-navy-700/60">
                    <span className="block font-sans text-xl font-bold text-gold-400">
                      {stat.value}
                    </span>
                    <span className="text-[10px] text-ivory-300/80 font-sans uppercase tracking-wider block mt-0.5">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Badge */}
              <div className="flex items-center justify-center gap-2 text-xs text-ivory-300/80 pt-2">
                <Star className="w-4 h-4 text-gold-400 fill-gold-400" />
                <span>{finalCTAData.trustText}</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
