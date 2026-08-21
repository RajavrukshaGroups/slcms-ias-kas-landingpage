// ─── Navigation ───
export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: NavItem[];
}

export interface TopBarLink {
  label: string;
  href: string;
}

// ─── Hero ───
export interface HeroBadge {
  icon: string;
  text: string;
}

export interface HeroData {
  title: string;
  subtitle: string;
  badges: HeroBadge[];
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  marqueeItems: string[];
}

// ─── Why Start ───
export interface WhyStartCardData {
  icon: string;
  title: string;
  description: string;
  accentColor: string;
}

// ─── Course Overview ───
export interface CourseCategory {
  icon: string;
  title: string;
  items: string[];
  accentColor: string;
}

// ─── Program Features ───
export interface ProgramFeatureItem {
  icon: string;
  text: string;
}

export interface ProgramFeatureCard {
  icon: string;
  title: string;
  description: string;
}

// ─── Roadmap ───
export interface RoadmapPhase {
  title: string;
  description: string;
}

export interface RoadmapYear {
  year: number;
  title: string;
  phases: RoadmapPhase[];
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
}

// ─── Statistics ───
export interface Statistic {
  value: string;
  suffix: string;
  label: string;
}

// ─── Experts / UPSC Pattern ───
export interface ExpertSection {
  title: string;
  description: string;
}

// ─── Study Materials ───
export interface StudyMaterial {
  category: string;
  title: string;
  description?: string;
  colorClass: string;
}

// ─── Testimonials ───
export interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  achievement?: string;
  rating?: number;
  avatar?: string;
}

// ─── FAQ ───
export interface FAQItem {
  question: string;
  answer: string;
}

// ─── CTA ───
export interface CTAFeature {
  text: string;
}

export interface CTAStat {
  value: string;
  label: string;
}

export interface FinalCTAData {
  badge: string;
  title: string;
  highlightedTitle: string;
  description: string;
  primaryCTA: { label: string; href: string };
  secondaryCTA: { label: string; href: string };
  features: CTAFeature[];
  stats: CTAStat[];
  trustText: string;
}

// ─── Footer ───
export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  title: string;
  links: FooterLink[];
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}

export interface FooterData {
  brandDescription: string;
  columns: FooterColumn[];
  contactInfo: ContactInfo;
  socialLinks: SocialLink[];
  copyright: string;
}
