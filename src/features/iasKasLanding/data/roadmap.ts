import type { RoadmapYear } from '../types';

export const roadmapHeading = {
  title: 'THE 3-YEAR',
  highlight: 'ROADMAP',
  description:
    'A step-by-step journey designed to align with your graduation years.',
};

export const roadmapYears: RoadmapYear[] = [
  {
    year: 1,
    title: 'Year 1',
    phases: [
      {
        title: 'NCERTs & Basics',
        description:
          'Focus on NCERTs Text Book (6th-12th) and basic concepts to build a strong starting point.',
      },
      {
        title: 'Core Subjects',
        description:
          'Building a strong foundation in General Studies Subjects.',
      },
      {
        title: 'Foundation Check',
        description:
          'Consolidating basic knowledge and starting to analyze newspapers for current affairs.',
      },
    ],
    colors: {
      primary: '#D4AF37',   // gold
      secondary: '#B91C1C', // red
      tertiary: '#1B3A4B',  // navy
    },
  },
  {
    year: 2,
    title: 'Year 2',
    phases: [
      {
        title: 'Answer Writing',
        description:
          'Daily answer writing practice and Experts feedback to improve Content presentation and speed.',
      },
      {
        title: 'Optional Subject',
        description:
          'Selecting and preparing your optional subject thoroughly along with GS papers.',
      },
      {
        title: 'GS Papers',
        description:
          'Deep dive into General Studies papers (GS 1, GS 2, GS 3, and GS 4) with detailed study.',
      },
    ],
    colors: {
      primary: '#1B3A4B',  // navy
      secondary: '#0D6E6E', // teal
      tertiary: '#D4AF37',  // gold
    },
  },
  {
    year: 3,
    title: 'Year 3',
    phases: [
      {
        title: 'Intensive Mocks',
        description:
          'Regular weekly mock tests for both Prelims and Mains to build exam-day confidence.',
      },
      {
        title: 'Revision',
        description:
          'Intensive subject concept revision and integrating along with current affairs for the final push.',
      },
      {
        title: 'Personality Test Guidance',
        description:
          'Personality development and mock interviews for the final personality test.',
      },
    ],
    colors: {
      primary: '#D4AF37',  // gold
      secondary: '#B91C1C', // red
      tertiary: '#1B3A4B',  // navy
    },
  },
];
