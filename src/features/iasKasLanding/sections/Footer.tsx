import { MapPin, Phone, Mail, ChevronRight, Globe } from 'lucide-react';
import { footerData } from '../data/footer';
import logoWebp from '../../../assets/images/logo.webp';

function SocialIcon({ name, className }: { name: string; className?: string }) {
  const cn = className || 'w-4 h-4';
  switch (name) {
    case 'Facebook':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="currentColor">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      );
    case 'Twitter':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'Instagram':
      return (
        <svg className={cn} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      );
    case 'Globe':
    case 'Website':
      return <Globe className={cn} />;
    default:
      return <Globe className={cn} />;
  }
}

export default function Footer() {
  const scrollToSection = (e: React.MouseEvent, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const el = document.querySelector(href);
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#061C30] text-white border-t border-navy-800 pb-16 lg:pb-0">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Brand (5 columns) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={logoWebp}
                alt="Sri Lakshmi Logo"
                className="w-12 h-12 object-contain"
                width={48}
                height={48}
                loading="lazy"
                decoding="async"
              />
              <div>
                <p className="font-bold text-sm tracking-wide uppercase font-sans text-white">
                  SRI LAKSHMI COLLEGE
                </p>
                <p className="text-[#D9A900] text-[10px] tracking-widest uppercase font-sans">
                  Management &amp; Science &bull; Bangalore
                </p>
              </div>
            </div>

            <p className="text-white/80 text-[14px] font-normal leading-[1.6] max-w-md font-sans pt-1">
              {footerData.brandDescription}
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {footerData.socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="w-9 h-9 rounded bg-[#082B50] hover:bg-[#D9A900] hover:text-[#061C30] flex items-center justify-center transition-colors border border-navy-800"
                  aria-label={social.platform}
                >
                  <SocialIcon name={social.icon} className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links (3 columns) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-sans font-bold text-[14px] text-[#D9A900] tracking-wide border-b border-navy-800 pb-2 uppercase">
              Quick Links
            </h3>
            <ul className="grid grid-cols-1 gap-2">
              {footerData.columns[0]?.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="inline-flex items-center gap-1.5 text-white/80 hover:text-[#D9A900] text-[13px] sm:text-[14px] font-normal tracking-wide transition-colors group font-sans"
                  >
                    <ChevronRight className="w-3 h-3 text-[#D9A900] group-hover:text-[#D9A900] transition-colors shrink-0" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info (4 columns) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="font-sans font-bold text-[14px] text-[#D9A900] tracking-wide border-b border-navy-800 pb-2 uppercase">
              Get In Touch
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D9A900] mt-1 shrink-0" />
                <span className="text-white/80 text-[14px] font-normal leading-[1.6] font-sans">
                  {footerData.contactInfo.address}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${footerData.contactInfo.phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 text-white/80 hover:text-[#D9A900] text-[14px] font-normal transition-colors font-sans"
                >
                  <Phone className="w-4 h-4 text-[#D9A900] shrink-0" />
                  {footerData.contactInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${footerData.contactInfo.email}`}
                  className="flex items-center gap-3 text-white/80 hover:text-[#D9A900] text-[14px] font-normal transition-colors font-sans"
                >
                  <Mail className="w-4 h-4 text-[#D9A900] shrink-0" />
                  {footerData.contactInfo.email}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-navy-900 bg-[#041321] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-[#64748B] font-sans">
          <p>{footerData.copyright}</p>
          <div className="flex items-center gap-4">
            <span>IAS &amp; KAS Civil Services Cell</span>
            <span>•</span>
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="hover:text-[#D9A900] transition-colors">
              Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
