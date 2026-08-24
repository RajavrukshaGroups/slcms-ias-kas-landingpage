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
      className="relative pt-[100px] sm:pt-[125px] lg:pt-[155px] pb-0 overflow-hidden bg-[#031A2E] flex flex-col justify-between min-h-[100dvh] lg:min-h-screen"
    >
      {/* HERO BACKGROUND IMAGE */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <img
          src={heroBg}
          alt="Sri Lakshmi College of Management & Science Campus Building"
          className="w-full h-full object-cover object-[75%_center] lg:object-right-center brightness-[1.02] contrast-[1.02]"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* NAVY GRADIENT OVERLAY */}
      <div className="absolute inset-0 pointer-events-none z-[1] bg-[linear-gradient(to_bottom,rgba(3,26,46,0.95)_0%,rgba(3,26,46,0.92)_25%,rgba(3,26,46,0.85)_50%,rgba(3,26,46,0.4)_75%,rgba(3,26,46,0.2)_100%)] lg:bg-[linear-gradient(to_right,#031A2E_0%,#031A2E_36%,rgba(3,26,46,0.85)_50%,rgba(3,26,46,0.25)_70%,rgba(3,26,46,0.05)_90%)]" />

      {/* NAVBAR TOP PROTECTION GRADIENT */}
      <div className="absolute top-0 left-0 right-0 h-[130px] bg-gradient-to-b from-[#031A2E]/90 to-transparent pointer-events-none z-[1]" />

      {/* GOLD DOT GRID ACCENT */}
      <div className="absolute left-6 lg:left-10 top-44 w-36 h-80 bg-[radial-gradient(#F5B400_1.5px,transparent_1.5px)] [background-size:18px_18px] opacity-20 pointer-events-none hidden lg:block z-[2]" />

      {/* MAIN HERO CONTENT CONTAINER */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-[45px] xl:px-[55px] flex-1 flex flex-col justify-between pt-2 lg:pt-4">

        {/* LEFT CONTENT COLUMN (Bounded max-width 600px) */}
        <div className="w-full max-w-[600px] text-left animate-in fade-in slide-in-from-bottom-4 duration-500 my-auto py-2">

          {/* EYEBROW */}
          <div className="flex items-center gap-2.5 sm:gap-3.5 mb-2 sm:mb-3">
            <span className="font-sans text-[13px] sm:text-[15px] lg:text-[16px] font-extrabold uppercase tracking-[1.5px] sm:tracking-[2px] leading-none text-[#F5B400]">
              DREAM. PREPARE. SERVE.
            </span>
            <div className="w-[40px] sm:w-[60px] h-[2px] bg-[#F5B400] rounded-full shrink-0" />
          </div>

          {/* IAS | KAS MAIN HEADING */}
          <div className="mb-2 sm:mb-3">
            <h1 className="font-sans text-[clamp(38px,8.5vw,96px)] font-black text-white leading-[0.92] tracking-[-1.5px] sm:tracking-[-3px] flex items-center gap-2.5 sm:gap-4 flex-nowrap whitespace-nowrap">
              <span>IAS</span>
              <span className="w-[3px] sm:w-[4px] h-[40px] sm:h-[72px] lg:h-[96px] bg-[#F5B400] inline-block rounded-[2px] shrink-0" />
              <span>KAS</span>
            </h1>

            {/* SECONDARY HEADING: FOUNDATION COURSES */}
            <p className="font-sans font-extrabold text-[clamp(18px,4.5vw,42px)] text-[#F5B400] tracking-[1px] sm:tracking-[2px] uppercase mt-1 sm:mt-1.5 mb-1.5 sm:mb-2 leading-none">
              FOUNDATION COURSES
            </p>

            {/* GOLD UNDERLINE ACCENT BAR */}
            <div className="w-12 sm:w-20 h-[2.5px] sm:h-[3px] bg-[#F5B400] my-2 sm:my-3 rounded-full" />
          </div>

          {/* HERO DESCRIPTION */}
          <p className="font-sans text-[14px] sm:text-[18px] lg:text-[20px] font-normal leading-[1.5] sm:leading-[1.6] tracking-[-0.2px] text-[#F2F5F7] max-w-[600px] mb-5 sm:mb-7">
            Shaping Future Officers. Building Better India.<br className="hidden sm:inline" />
            Integrated 3-Year Degree + UPSC/KPSC<br className="hidden sm:inline" />
            Civil Services Preparation in Bangalore.
          </p>

          {/* FEATURE HIGHLIGHTS */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3.5 sm:gap-0 sm:divide-x divide-white/15 mb-5 sm:mb-7">
            {features.map((feature, idx) => (
              <div
                key={feature.title}
                className={`flex items-center gap-3 sm:gap-3.5 ${
                  idx === 0 ? 'sm:pr-4 lg:pr-6' : idx === features.length - 1 ? 'sm:pl-4 lg:pl-6' : 'sm:px-4 lg:px-6'
                }`}
              >
                <div className="w-10 h-10 sm:w-[48px] sm:h-[48px] rounded-lg border border-[#F5B400]/40 bg-[#F5B400]/10 flex items-center justify-center text-[#F5B400] shrink-0">
                  <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 text-[#F5B400]" />
                </div>
                <div>
                  <span className="font-sans font-extrabold text-[12px] sm:text-[13px] lg:text-[14px] leading-[1.2] tracking-normal text-white block uppercase whitespace-nowrap">
                    {feature.title}
                  </span>
                  <span className="font-sans text-[12px] sm:text-[13px] font-normal leading-[1.4] text-[#D5DDE4] block mt-0.5 whitespace-nowrap">
                    {feature.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* SUPPORTING REASSURANCE STATEMENT */}
          <div className="flex items-center gap-2.5 text-[13px] sm:text-[16px] font-medium leading-[1.4] text-[#F2F5F7] font-sans mb-5 sm:mb-6">
            <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border border-[#F5B400] flex items-center justify-center text-[#F5B400] shrink-0">
              <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#F5B400]" />
            </div>
            <span>3-Year Integrated Degree + IAS/KAS Preparation</span>
          </div>

        </div>

        {/* FLOATING STATISTICS PANEL */}
        <div className="w-full max-w-[1440px] mx-auto mt-2 mb-4 sm:mb-5 bg-[rgba(3,25,42,0.85)] border border-white/22 rounded-2xl p-3.5 sm:p-5 lg:py-4.5 lg:px-8 backdrop-blur-md shadow-2xl text-white">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-0 lg:divide-x divide-white/20">
            {stats.map((stat, idx) => (
              <div
                key={stat.label}
                className={`flex items-center gap-3 sm:gap-4 lg:px-6 ${idx === 0 ? 'lg:pl-2' : ''} ${
                  idx === stats.length - 1 ? 'lg:pr-2' : ''
                }`}
              >
                <div className="w-9 h-9 sm:w-11 sm:h-11 lg:w-[50px] lg:h-[50px] rounded-full border border-[#F5B400]/50 bg-[#F5B400]/10 flex items-center justify-center text-[#F5B400] shrink-0">
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-[#F5B400]" />
                </div>
                <div className="text-left font-sans min-w-0">
                  <span className="font-sans font-extrabold text-[26px] sm:text-[34px] lg:text-[42px] leading-none tracking-[-1px] text-[#F5B400] block">
                    {stat.value}
                  </span>
                  <span className="font-sans font-bold text-[11px] sm:text-[13px] lg:text-[14px] leading-[1.2] tracking-[0.1px] text-white uppercase block mt-1 truncate">
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