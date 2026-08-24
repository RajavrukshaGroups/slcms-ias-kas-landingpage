import { BookOpen, Target, Users, GraduationCap, ShieldCheck, Landmark, CheckCircle2, Megaphone, FileEdit } from 'lucide-react';
import heroBg from '../../../assets/images/hero-bg.jpg';

export default function Hero() {

  const tickerStripItems = [
    'TEST SERIES WITH REAL EXAM PATTERN',
    'NCERT + STANDARD BOOKS COVERAGE',
    'DAILY CURRENT AFFAIRS INTEGRATION',
    'ANSWER WRITING WITH EXPERT FEEDBACK',
  ];

  const features = [
    { icon: BookOpen, title: 'EXPERT FACULTY', subtitle: 'Learn from the best' },
    { icon: Target, title: 'PROVEN STRATEGY', subtitle: 'Result-oriented approach' },
    { icon: Users, title: 'PERSONALIZED GUIDANCE', subtitle: 'Mentorship at every step' },
  ];

  const stats = [
    { icon: GraduationCap, value: '3+', label: 'DECADES OF EXCELLENCE' },
    { icon: Users, value: '50K+', label: 'SUCCESSFUL ASPIRANTS' },
    { icon: ShieldCheck, value: '100%', label: 'COMMITMENT TO SUCCESS' },
    { icon: Landmark, value: '1', label: 'MISSION NATION FIRST' },
  ];

  return (
    <section
      id="hero"
      className="relative pt-[155px] sm:pt-[165px] lg:pt-[175px] pb-0 overflow-hidden bg-[#031A2E] flex flex-col justify-between min-h-[900px] lg:min-h-screen"
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src={heroBg}
          alt="Sri Lakshmi College of Management & Science Campus Building"
          className="w-full h-full object-cover object-center lg:object-right-center brightness-[1.02] contrast-[1.02]"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* NAVY GRADIENT OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[linear-gradient(to_right,#031A2E_0%,#031A2E_36%,rgba(3,26,46,0.85)_50%,rgba(3,26,46,0.25)_70%,rgba(3,26,46,0.05)_90%)]" />

      {/* NAVBAR TOP PROTECTION GRADIENT */}
      <div className="absolute top-0 left-0 right-0 h-[130px] bg-gradient-to-b from-[#031A2E]/90 to-transparent pointer-events-none z-[1]" />

      {/* GOLD DOT GRID ACCENT */}
      <div className="absolute left-6 lg:left-10 top-44 w-36 h-80 bg-[radial-gradient(#F5B400_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-20 pointer-events-none hidden lg:block z-[2]" />

      {/* MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-[45px] xl:px-[55px] flex-1 flex flex-col justify-between pt-2 lg:pt-4">

        {/* LEFT CONTENT COLUMN (Bounded max-width 600px) */}
        <div className="w-full max-w-[600px] text-left animate-in fade-in slide-in-from-bottom-4 duration-500 my-auto py-2">

          {/* EYEBROW */}
          <div className="flex items-center gap-3.5 mb-3">
            <span className="font-sans text-[15px] sm:text-[16px] font-extrabold uppercase tracking-[2px] leading-none text-[#F5B400]">
              DREAM. PREPARE. SERVE.
            </span>
            <div className="w-[60px] h-[2px] bg-[#F5B400] rounded-full shrink-0" />
          </div>

          {/* IAS | KAS MAIN HEADING */}
          <div className="mb-3">
            <h1 className="font-sans text-[clamp(76px,6vw,96px)] font-black text-white leading-[0.92] tracking-[-3px] flex items-center gap-3 sm:gap-4 flex-nowrap whitespace-nowrap">
              <span>IAS</span>
              <span className="w-[4px] h-[80px] sm:h-[92px] lg:h-[104px] bg-[#F5B400] inline-block rounded-[2px] shrink-0" />
              <span>KAS</span>
            </h1>

            {/* SECONDARY HEADING: FOUNDATION COURSES */}
            <p className="font-sans font-extrabold text-[clamp(36px,3vw,42px)] text-[#F5B400] tracking-[2px] uppercase mt-1.5 mb-2 leading-none">
              FOUNDATION COURSES
            </p>

            {/* GOLD UNDERLINE ACCENT BAR */}
            <div className="w-16 sm:w-20 h-[3px] bg-[#F5B400] my-3 rounded-full" />
          </div>

          {/* HERO DESCRIPTION */}
          <p className="font-sans text-[17px] sm:text-[19px] lg:text-[20px] font-normal leading-[1.6] tracking-[-0.2px] text-[#F2F5F7] max-w-[600px] mb-7">
            Shaping Future Officers. Building Better India.<br className="hidden sm:inline" />
            Integrated 3-Year Degree + UPSC/KPSC<br className="hidden sm:inline" />
            Civil Services Preparation in Bangalore.
          </p>

          {/* FEATURE HIGHLIGHTS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0 sm:divide-x divide-white/15 mb-7">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`flex items-center gap-3.5 ${
                  idx === 0 ? 'sm:pr-6' : idx === features.length - 1 ? 'sm:pl-6' : 'sm:px-6'
                }`}
              >
                <div className="w-[48px] h-[48px] rounded-lg border border-[#F5B400]/40 bg-[#F5B400]/10 flex items-center justify-center text-[#F5B400] shrink-0">
                  <feature.icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#F5B400]" />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-[13px] lg:text-[14px] leading-[1.2] tracking-normal text-white block uppercase whitespace-nowrap">
                    {feature.title}
                  </span>
                  <span className="font-sans text-[13px] font-normal leading-[1.4] text-[#D5DDE4] block mt-0.5 whitespace-nowrap">
                    {feature.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* SUPPORTING REASSURANCE STATEMENT */}
          <div className="flex items-center gap-3 text-[16px] font-medium leading-[1.4] text-[#F2F5F7] font-sans mb-6">
            <div className="w-5 h-5 rounded-full border border-[#F5B400] flex items-center justify-center text-[#F5B400] shrink-0">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F5B400]" />
            </div>
            <span>3-Year Integrated Degree + IAS/KAS Preparation</span>
          </div>

        </div>

        {/* FLOATING STATISTICS PANEL */}
        <div className="w-[92%] max-w-[1440px] mx-auto mt-2 mb-5 bg-[rgba(3,25,42,0.85)] border border-white/22 rounded-2xl p-4 lg:py-4.5 lg:px-8 backdrop-blur-md shadow-2xl text-white">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/20">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex items-center gap-4 lg:px-6 ${idx === 0 ? 'lg:pl-2' : ''} ${
                  idx === stats.length - 1 ? 'lg:pr-2' : ''
                }`}
              >
                <div className="w-11 h-11 lg:w-[50px] lg:h-[50px] rounded-full border border-[#F5B400]/50 bg-[#F5B400]/10 flex items-center justify-center text-[#F5B400] shrink-0">
                  <stat.icon className="w-5 h-5 lg:w-6 lg:h-6 text-[#F5B400]" />
                </div>
                <div className="text-left font-sans">
                  <span className="font-sans font-extrabold text-[36px] lg:text-[42px] leading-none tracking-[-1px] text-[#F5B400] block">
                    {stat.value}
                  </span>
                  <span className="font-sans font-bold text-[13px] lg:text-[14px] leading-[1.2] tracking-[0.2px] text-white uppercase block mt-1">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* BOTTOM INFORMATION TICKER STRIP */}
      <div className="w-full bg-[#087C73] h-[58px] sm:h-[60px] border-t border-b border-white/15 overflow-hidden relative z-20 flex items-center shrink-0">
        <div className="px-5 shrink-0 flex items-center justify-center text-[#F5B400] border-r border-white/15 h-full z-10 bg-[#087C73]">
          <Megaphone className="w-5 h-5 text-[#F5B400]" />
        </div>

        <div className="flex animate-marquee whitespace-nowrap items-center h-full">
          {[...tickerStripItems, ...tickerStripItems, ...tickerStripItems].map((item, idx) => (
            <span
              key={idx}
              className="mx-8 text-[13px] lg:text-[14px] leading-[1.2] font-sans font-bold tracking-[0.1px] text-[#F2F5F7] uppercase flex items-center gap-8"
            >
              {item}
              <span className="text-[#F5B400]">•</span>
            </span>
          ))}
        </div>

        <div className="px-5 shrink-0 flex items-center justify-center text-[#F5B400] border-l border-white/15 h-full z-10 bg-[#087C73]">
          <FileEdit className="w-5 h-5 text-[#F5B400]" />
        </div>
      </div>
    </section>
  );
}