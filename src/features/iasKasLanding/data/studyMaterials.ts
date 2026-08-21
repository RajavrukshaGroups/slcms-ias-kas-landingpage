import type { StudyMaterial } from '../types';

export const studyMaterialsHeading = {
  title: 'Premium',
  highlight: 'Study Materials',
  description:
    'Get exclusive access to our meticulously researched notes and practice papers.',
};

export const studyMaterials: StudyMaterial[] = [
  {
    category: 'FOUNDATION',
    title: 'NCERT Summary Notes',
    description: 'Class 6th–12th Gist, Mind Maps & Quick Concept Summaries',
    colorClass: 'from-amber-100 to-amber-50',
  },
  {
    category: 'PRACTICE',
    title: 'Mains Answer Writing',
    description: 'Daily Model Answers, Key Structure Guidelines & Mentor Feedback',
    colorClass: 'from-emerald-100 to-emerald-50',
  },
  {
    category: 'ADVANCED',
    title: 'Ethics Case Studies',
    description: 'GS Paper 4 Real-world Case Studies & Ethical Decision Frameworks',
    colorClass: 'from-orange-100 to-orange-50',
  },
  {
    category: 'UPDATES',
    title: 'Current Affairs Monthly',
    description: 'The Hindu, Indian Express & PIB Curated Analytical Compilations',
    colorClass: 'from-green-800/20 to-green-700/10',
  },
  {
    category: 'ASSESSMENT',
    title: 'Prelims Test Series',
    description: 'Sectional & Full-Length Mock Papers with Detailed Explanations',
    colorClass: 'from-cream-300 to-cream-100',
  },
  {
    category: 'RESOURCES',
    title: 'Geography Atlas & Maps',
    description: 'High-Yield Mapping Notes & Spatial Location Diagrams for Prelims',
    colorClass: 'from-orange-200 to-orange-50',
  },
];
