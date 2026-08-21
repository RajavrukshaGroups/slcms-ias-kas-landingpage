import { useState } from 'react';
import { BookOpen, PenTool, FileCheck, Newspaper, Award, MapPin, ShieldCheck, CheckCircle2, FileText, Download, ChevronRight } from 'lucide-react';
import { studyMaterialsHeading, studyMaterials } from '../data/studyMaterials';
import { useInView } from '../hooks/useInView';

const materialIcons = [BookOpen, PenTool, FileCheck, Newspaper, Award, MapPin];

const materialDetails: Record<string, { scope: string; highlights: string[]; pages: string }> = {
  'NCERT Summary Notes': {
    scope: 'Class 6th–12th History, Geography, Polity & Economics Gist',
    highlights: ['Chapter-wise Mind Maps & Diagram Notes', 'High-Yield UPSC Prelims Fact Sheets', 'Quick 10-Minute Concept Revision Bullet Points'],
    pages: '450+ Pages Notes',
  },
  'Mains Answer Writing': {
    scope: 'GS Papers 1 to 4 Model Answer Frameworks & Marking Schemes',
    highlights: ['Intro-Body-Conclusion Structuring Templates', 'Previous 10 Years UPSC & KPSC Solved Questions', 'Mentor Feedback Benchmarks & Best Copies'],
    pages: '280+ Solved Answers',
  },
  'Ethics Case Studies': {
    scope: 'GS Paper 4 Ethics, Integrity & Aptitude Real-life Case Scenarios',
    highlights: ['Ethical Dilemma Resolution Strategies', 'Quotations & Moral Thinkers Matrix', '20+ Administrative Case Study Worksheets'],
    pages: '180+ Pages Guide',
  },
  'Current Affairs Monthly': {
    scope: 'The Hindu, Indian Express, PIB & Yojana Monthly Analysis',
    highlights: ['Pre-cum-Mains Integrated Topic Overviews', 'Government Schemes & Policy Analysis', 'Monthly Quiz & Practice Question Bank'],
    pages: 'Updated Monthly',
  },
  'Prelims Test Series': {
    scope: 'Subject-wise Sectional Tests & Full-Length Mock Exams',
    highlights: ['Detailed Answer Key with Explanations', 'Negative Marking Self-Assessment Tracker', 'Current Affairs & Static Integration'],
    pages: '25+ Mock Tests',
  },
  'Geography Atlas & Maps': {
    scope: 'Indian & World Geography Mapping Notes & Diagrams',
    highlights: ['River Basins, Mountain Passes & Minerals', 'International Biosphere & Wetland Markers', 'High-Frequency Prelims Location Diagrams'],
    pages: '120+ Map Guides',
  },
};

export default function StudyMaterials() {
  const { ref, isInView } = useInView();
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const filteredMaterials = studyMaterials;

  const currentMaterial = filteredMaterials[selectedIndex] || filteredMaterials[0] || studyMaterials[0];
  const currentDetail = materialDetails[currentMaterial.title] || {
    scope: 'Comprehensive study notes and reference material.',
    highlights: ['Curated by former IAS/KAS officers', 'Updated for 2026 syllabus', 'Free access for enrolled academy students'],
    pages: 'Exclusive Material',
  };

  const CurrentIcon = materialIcons[selectedIndex % materialIcons.length];

  return (
    <section id="study-materials" className="py-16 sm:py-20 bg-premium-light bg-luxury-emblem border-b border-[#E5E1D8] relative overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div
          className={`flex flex-col items-center text-center mb-10 sm:mb-12 transition-all duration-700 ease-out ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <div className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-[14px] font-semibold tracking-[0.18em] text-[#082B50] uppercase font-sans">
              ACADEMIC RESOURCE LIBRARY
            </span>
          </div>

          <h2 className="font-sans text-[30px] sm:text-[38px] lg:text-[48px] font-bold text-[#082B50] leading-[1.1] tracking-tight">
            {studyMaterialsHeading.title}{' '}
            <span className="text-[#D9A900] inline-block pl-1.5 pr-1.5">{studyMaterialsHeading.highlight}</span>
          </h2>
          <div className="w-16 h-1 bg-[#D9A900] mt-4 rounded-full" />
          <p className="mt-5 text-[15px] sm:text-[16px] text-[#24496B] font-normal leading-[1.6] max-w-2xl font-sans">
            {studyMaterialsHeading.description}
          </p>
        </div>

        {/* 12-Col Master Directory Layout */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch transition-all duration-700 delay-150 ease-out ${isInView ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-12 scale-95'
            }`}
        >
          {/* Left Column (5 cols): Resource Directory Selection Tabs */}
          <div className="lg:col-span-5 space-y-3.5">
            <div className="border-b border-[#E5E1D8] pb-3 mb-2 flex items-center justify-between">
              <span className="font-sans font-bold text-[12px] uppercase tracking-wider text-[#082B50]">
                Select Resource Module
              </span>
              <span className="font-sans text-[11px] text-[#64748B] font-medium">
                {studyMaterials.length} Modules Available
              </span>
            </div>

            {studyMaterials.map((material, idx) => {
              const IconComp = materialIcons[idx % materialIcons.length];
              const isSelected = selectedIndex === idx;

              return (
                <div
                  key={material.title}
                  onClick={() => setSelectedIndex(idx)}
                  className={`p-4 rounded-2xl border transition-all duration-700 ease-out cursor-pointer flex items-center justify-between group font-sans hover-premium-card ${isSelected
                    ? 'bg-white border-[#D9A900] shadow-md -translate-y-0.5'
                    : 'bg-white/95 border-[#E5E1D8] shadow-xs'
                    }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${isSelected ? 'bg-[#082B50] text-[#D9A900]' : 'bg-[#F8F7F3] text-[#A87C00] border border-[#E5E1D8]'
                        }`}
                    >
                      <IconComp className="w-5 h-5" />
                    </div>

                    <div>
                      <h3 className="font-sans font-bold text-[#082B50] text-[16px] leading-tight">
                        {material.title}
                      </h3>
                      <span className="text-[12px] text-[#64748B] font-sans font-medium block mt-0.5">
                        {material.category}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    {isSelected && (
                      <span className="w-2 h-2 rounded-full bg-[#D9A900] animate-pulse" />
                    )}
                    <ChevronRight
                      className={`w-4 h-4 transition-transform ${isSelected ? 'text-[#087C73] translate-x-1' : 'text-[#64748B]'
                        }`}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column (7 cols): Active Resource Detail Showcase Console */}
          <div className="lg:col-span-7 bg-premium-dark bg-progression-watermark text-white rounded-2xl sm:rounded-3xl p-8 sm:p-10 border border-navy-800 shadow-2xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#D9A900]" />

            <div className="space-y-6">
              {/* Header inside Showcase */}
              <div className="flex items-center justify-between border-b border-navy-800 pb-5">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#D9A900]/20 border border-[#D9A900]/40 text-[#D9A900] flex items-center justify-center shrink-0">
                    <CurrentIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#D9A900] uppercase tracking-wider block">
                      {currentMaterial.category} ARCHIVE MODULE
                    </span>
                    <h3 className="font-sans text-[20px] sm:text-[24px] font-bold text-white mt-0.5 leading-[1.2]">
                      {currentMaterial.title}
                    </h3>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#082B50] border border-navy-800 text-white text-xs font-bold">
                  <FileText className="w-4 h-4 text-[#087C73]" />
                  <span>{currentDetail.pages}</span>
                </div>
              </div>

              {/* Scope Overview */}
              <div className="space-y-2">
                <span className="text-xs font-bold text-white/70 uppercase tracking-wider block">Syllabus Scope & Coverage</span>
                <p className="text-[15px] sm:text-[16px] text-white/90 font-normal font-sans leading-[1.6]">
                  {currentDetail.scope}
                </p>
              </div>

              {/* Key Module Highlights */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-[#D9A900] uppercase tracking-wider block">Key Module Highlights</span>
                <ul className="space-y-2.5">
                  {currentDetail.highlights.map((highlight: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 text-[14px] sm:text-[15px] text-white/90 font-sans">
                      <CheckCircle2 className="w-4 h-4 text-[#087C73] shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Bottom Action Area */}
            <div className="pt-8 mt-8 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-white/80">
                <ShieldCheck className="w-4 h-4 text-[#D9A900]" />
                <span>Verified Academic Material</span>
              </div>

              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#D9A900] hover:bg-[#A87C00] text-[#061C30] font-bold uppercase tracking-wider text-[12px] sm:text-[13px] px-6 py-3 rounded-lg shadow-md transition-all"
              >
                <span>Request Sample PDF</span>
                <Download className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
