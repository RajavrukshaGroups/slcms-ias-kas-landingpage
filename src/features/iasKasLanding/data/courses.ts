export interface CourseCategoryExtended {
  icon: string;
  title: string;
  badge: string;
  duration: string;
  description: string;
  items: string[];
  accentColor: string;
}

export const courseOverviewHeading = {
  title: 'Comprehensive',
  highlight: 'Course Overview',
  description:
    'A step-by-step preparation system designed to take you from fundamentals to final selection in Civil Services.',
};

export const courseCategories: CourseCategoryExtended[] = [
  {
    icon: 'BookOpen',
    title: 'Foundation Course',
    badge: 'Stage 1 • Basics',
    duration: '600+ Hours Training',
    description: 'Master core NCERT concepts and foundational subjects essential for UPSC & KPSC Prelims.',
    items: [
      'NCERT Class 6th–12th Subject Coverage',
      'Basic Polity, History & Geography Concepts',
      'Fundamental Economics & Science & Tech',
      'Weekly Conceptual Assessment Tests',
    ],
    accentColor: 'gold',
  },
  {
    icon: 'Award',
    title: 'Advanced Preparation',
    badge: 'Stage 2 • Core GS',
    duration: '450+ Mains Hours',
    description: 'In-depth coverage of GS Papers 1 to 4, Essay strategies, and high-scoring optional subjects.',
    items: [
      'GS Paper 1 (History, Heritage & Geography)',
      'GS Paper 2 (Governance, Constitution & IR)',
      'GS Paper 3 (Economy, Environment & Security)',
      'GS Paper 4 (Ethics, Integrity & Aptitude)',
    ],
    accentColor: 'teal',
  },
  {
    icon: 'Newspaper',
    title: 'Current Affairs',
    badge: 'Daily & Monthly',
    duration: 'Continuous Updates',
    description: 'Integrated daily news analysis, editorial breakdowns, and national policy discussions.',
    items: [
      'Daily Analysis of The Hindu & PIB',
      'Yojana & Kurukshetra Monthly Summaries',
      'Current Affairs Prelims Fact Sheets',
      'Monthly Current Affairs Quiz & Answer Keys',
    ],
    accentColor: 'gold',
  },
  {
    icon: 'PenLine',
    title: 'Answer Writing Program',
    badge: 'Mains Focus',
    duration: '200+ Model Answers',
    description: 'Rigorous daily mains answer writing practice with 1-on-1 feedback from former officers.',
    items: [
      'Intro-Body-Conclusion Structuring Format',
      'Diagrams, Maps & Flowchart Techniques',
      'Previous 10 Years Solved Question Papers',
      'Personalized Mentor Evaluation & Corrections',
    ],
    accentColor: 'gold',
  },
  {
    icon: 'UsersRound',
    title: 'Mock Tests & Interview',
    badge: 'Stage 3 • Final Selection',
    duration: '35+ Full Test Series',
    description: 'Comprehensive Prelims & Mains test series followed by mock interviews with retired bureaucrats.',
    items: [
      '35+ Prelims Sectional & Full Mock Tests',
      'Mains Simulation Exams with Ranking',
      'Personality Test & Body Language Guidance',
      'Panel Mock Interview with Former Officers',
    ],
    accentColor: 'gold',
  },
  {
    icon: 'Building2',
    title: 'Campus & Facilities',
    badge: 'Bangalore Campus',
    duration: '24/7 Access',
    description: 'World-class infrastructure designed to foster a focused and undisturbed academic environment.',
    items: [
      'Comprehensive NCERT & Standard Book Library',
      '24/7 Silent Reading Rooms & Wi-Fi Access',
      'On-Campus Student Hostel & Mess Facility',
      'Dedicated Mentor Consultation Desks',
    ],
    accentColor: 'teal',
  },
];
