import type { NavItem, TopBarLink } from '../types';

export const topBarLinks: TopBarLink[] = [
  { label: 'College Main Site', href: 'https://srilakshmimanagement.org/' },
  { label: 'E-Library', href: 'https://srilakshmimanagement.org/e-library' },
  { label: 'Campus Life', href: 'https://srilakshmimanagement.org/gallery' },
  { label: 'Helpline: +91 95350 03404', href: 'tel:+919535003404' },
];

export const navItems: NavItem[] = [
  { label: 'Home', href: '#hero' },
  { label: 'Why Integrated?', href: '#why-start' },
  {
    label: 'Programs & Roadmap',
    href: '#courses',
    children: [
      { label: 'Course Overview & Modules', href: '#courses' },
      { label: 'Sri Lakshmi Advantage', href: '#program-difference' },
      { label: '3-Year Officer Roadmap', href: '#roadmap' },
    ],
  },
  {
    label: 'Academics & Materials',
    href: '#experts',
    children: [
      { label: 'Curriculum & Expert Faculty', href: '#experts' },
      { label: 'Curated Study Materials', href: '#study-materials' },
    ],
  },
  { label: 'Success Stories', href: '#testimonials' },
];

export const collegeName = 'SRI LAKSHMI COLLEGE OF MANAGEMENT & SCIENCE';
export const collegeLocation = 'SUNKADAKATTE, BANGALORE';
export const cellName = 'CIVIL SERVICES PREPARATION CELL';

