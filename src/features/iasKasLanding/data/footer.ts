import type { FooterData } from '../types';

export const footerData: FooterData = {
  brandDescription:
    'Empowering minds and shaping futures through quality education and innovative learning environments. Sri Lakshmi IAS/KAS Academy is committed to civil services excellence in Bangalore.',
  columns: [
    {
      title: 'Quick Links',
      links: [
        { label: 'Courses Overview', href: '#courses' },
        { label: 'Program Advantages', href: '#program-difference' },
        { label: '3-Year Roadmap', href: '#roadmap' },
        { label: 'FAQ', href: '#faq' },
        { label: 'Admissions & Contact', href: '#contact' },
      ],
    },
  ],
  contactInfo: {
    address:
      'Sri Lakshmi College of Management & Science, Sunkadakatte, Off Magadi Road, Bengaluru, Karnataka 560091',
    phone: '+91 95350 03404',
    email: 'slgi2k3@gmail.com',
  },
  socialLinks: [
    { platform: 'Facebook', href: 'https://www.facebook.com/srilakshmimanagement', icon: 'Facebook' },
    { platform: 'Instagram', href: 'https://www.instagram.com/srilakshmicollegebangalore/', icon: 'Instagram' },
    { platform: 'Website', href: 'https://srilakshmimanagement.org/', icon: 'Globe' },
  ],
  copyright: `© ${new Date().getFullYear()} Sri Lakshmi College of Management & Science. All rights reserved.`,
};
