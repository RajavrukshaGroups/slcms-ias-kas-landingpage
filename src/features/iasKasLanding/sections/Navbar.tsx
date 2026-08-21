import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/navigation';
import logoWebp from '../../../assets/images/logo.webp';

const SECTION_IDS = [
  'hero',
  'why-start',
  'courses',
  'program-difference',
  'roadmap',
  'experts',
  'study-materials',
  'testimonials',
  'faq',
  'final-cta',
  'contact',
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (isMobileOpen) {
        setIsVisible(true);
        return;
      }

      if (currentScrollY > 100) {
        setIsVisible(currentScrollY <= lastScrollY);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      const scrollPosition = currentScrollY + 100;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(SECTION_IDS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileOpen]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.dropdown-wrapper')) setOpenDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileOpen(false);
    setOpenDropdown(null);
    setIsVisible(true);
    if (href.startsWith('#')) {
      const targetId = href.substring(1);
      const el = document.getElementById(targetId);
      if (el) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
      }
    }
  }, []);

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (href === `#${activeSection}`) return true;
    if (children) return children.some((child) => child.href === `#${activeSection}`);
    return false;
  };

  const navLinksWithFaq = [...navItems, { label: 'FAQ', href: '#faq' }];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transform transition-all duration-300 ${
          isVisible ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled
            ? 'bg-[#031A2E]/95 backdrop-blur-md border-b border-white/10 shadow-xl'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="w-full max-w-[1536px] mx-auto px-5 sm:px-8 lg:px-[36px] xl:px-[44px] 2xl:px-[52px] box-border">
          <div className="grid grid-cols-[auto_1fr_auto] items-center h-[88px] lg:h-[92px] xl:h-[96px]">

            {/* REGION 1: BRAND LOCKUP */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center gap-3.5 shrink-0 w-[280px] xl:w-[300px] group"
            >
              <img
                src={logoWebp}
                alt="Sri Lakshmi Emblem"
                className="h-[52px] w-[52px] lg:h-[56px] lg:w-[56px] object-contain shrink-0 filter drop-shadow-md transition-transform duration-200 group-hover:scale-105"
                width={56}
                height={56}
                decoding="async"
              />
              <div className="flex flex-col justify-center shrink-0">
                <span className="text-[14px] xl:text-[15px] font-extrabold text-white leading-[1.05] tracking-[-0.2px] uppercase font-sans">
                  SRI LAKSHMI COLLEGE OF<br />
                  MANAGEMENT &amp; SCIENCE
                </span>
                <span className="text-[10px] xl:text-[11px] font-bold text-[#20C4C7] leading-none tracking-[1px] uppercase font-sans mt-1">
                  SUNKADAKATTE, BANGALORE
                </span>
              </div>
            </a>

            {/* REGION 2: NAVIGATION */}
            <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-[30px] 2xl:gap-[36px] shrink-0 px-4">
              {navLinksWithFaq.map((item) => {
                const active = isItemActive(item.href, item.children);

                return (
                  <div
                    key={item.label}
                    className="relative flex items-center h-full dropdown-wrapper group"
                    onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.children) {
                          setOpenDropdown((prev) => (prev === item.label ? null : item.label));
                        }
                        if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                      }}
                      className={`inline-flex items-center py-1 text-[14px] xl:text-[15px] leading-none tracking-[-0.1px] transition-colors duration-150 relative whitespace-nowrap font-sans ${
                        active ? 'text-[#F5B400] font-bold' : 'text-[#F1F4F7] font-semibold hover:text-[#F5B400]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          className={`w-[13px] h-[13px] ml-[5px] stroke-[1.8] transition-transform duration-200 shrink-0 ${
                            openDropdown === item.label
                              ? 'rotate-180 text-[#F5B400]'
                              : active
                              ? 'text-[#F5B400]'
                              : 'text-white/80 group-hover:text-[#F5B400]'
                          }`}
                        />
                      )}
                      
                      {/* Active Home / Nav Underline (#F5B400, 2px height, 46px width, ~14px below text) */}
                      {active && (
                        <span className="absolute -bottom-[14px] left-1/2 -translate-x-1/2 w-[46px] h-[2px] bg-[#F5B400] rounded-full" />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {item.children && openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[240px] z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                        <div className="bg-[#031A2E]/98 border border-white/15 rounded-xl shadow-2xl py-2 backdrop-blur-md animate-in fade-in slide-in-from-top-1 duration-150">
                          {item.children.map((child) => {
                            const childActive = activeSection === child.href.substring(1);
                            return (
                              <a
                                key={child.label}
                                href={child.href}
                                onClick={(e) => {
                                  if (child.href.startsWith('#')) {
                                    e.preventDefault();
                                    handleNavClick(child.href);
                                  }
                                }}
                                className={`flex items-center justify-between px-4 py-2.5 text-[13.5px] font-medium transition-colors font-sans ${
                                  childActive
                                    ? 'bg-[#F5B400]/15 text-[#F5B400] font-bold border-l-2 border-[#F5B400]'
                                    : 'text-[#F2F5F7] hover:bg-white/10 hover:text-[#F5B400]'
                                }`}
                              >
                                <span>{child.label}</span>
                                {childActive && <span className="w-1.5 h-1.5 rounded-full bg-[#F5B400] shrink-0" />}
                              </a>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* REGION 3: CONTACT CTA BUTTON */}
            <div className="hidden lg:flex items-center justify-end shrink-0 w-[280px] xl:w-[300px]">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center justify-center h-[48px] min-w-[126px] px-[22px] bg-[#F5B400] hover:bg-[#F7C126] text-[#071827] rounded-lg font-sans font-extrabold text-[14px] tracking-[0.2px] uppercase transition-all duration-200 gap-2 shrink-0 cursor-pointer shadow-md hover:-translate-y-0.5"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-[15px] h-[15px] stroke-[2.2] shrink-0" />
              </a>
            </div>

            {/* Mobile / Compact Controls */}
            <div className="flex lg:hidden items-center justify-end gap-2.5 shrink-0 col-start-3">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center justify-center bg-[#F5B400] text-[#071827] px-4 py-2 rounded-lg text-[12px] font-extrabold uppercase tracking-wider gap-1 shrink-0 font-sans shadow-sm"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              <button
                onClick={() => setIsMobileOpen((prev) => !prev)}
                type="button"
                className="p-2 text-white hover:text-[#F5B400] rounded-lg bg-white/10 border border-white/20 transition-colors shrink-0 cursor-pointer"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-5 h-5 text-[#F5B400]" /> : <Menu className="w-5 h-5 text-white" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bottom-0 bg-[#021321] z-[9999] overflow-y-auto flex flex-col justify-between p-6 text-white border-t border-white/15 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b border-white/15 pb-3">
              <span className="text-xs font-bold text-white/60 uppercase tracking-widest font-sans">
                Navigation
              </span>
              <span className="text-[11px] font-bold text-[#F5B400] bg-[#F5B400]/10 border border-[#F5B400]/30 px-2.5 py-0.5 rounded font-sans">
                IAS &amp; KAS Academy
              </span>
            </div>

            <div className="space-y-1 pt-1">
              {navLinksWithFaq.map((item) => {
                const active = isItemActive(item.href, item.children);

                return (
                  <div key={item.label} className="border-b border-white/10 last:border-b-0 dropdown-wrapper">
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.children) {
                          e.preventDefault();
                          setOpenDropdown(openDropdown === item.label ? null : item.label);
                        } else if (item.href.startsWith('#')) {
                          e.preventDefault();
                          handleNavClick(item.href);
                        }
                      }}
                      className={`flex items-center justify-between w-full py-3.5 text-base font-semibold transition-colors font-sans ${
                        active ? 'text-[#F5B400] font-bold' : 'text-[#F2F5F7] hover:text-[#F5B400]'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {active && (
                          <span className="text-[10px] bg-[#F5B400]/20 text-[#F5B400] border border-[#F5B400]/40 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </span>
                      {item.children && (
                        <ChevronDown
                          className={`w-4 h-4 text-white/80 transition-transform ${
                            openDropdown === item.label ? 'rotate-180 text-[#F5B400]' : ''
                          }`}
                        />
                      )}
                    </a>

                    {item.children && openDropdown === item.label && (
                      <div className="ml-2 my-2 space-y-1 bg-white/5 border border-white/15 rounded-xl p-3">
                        {item.children.map((child) => {
                          const childActive = activeSection === child.href.substring(1);
                          return (
                            <a
                              key={child.label}
                              href={child.href}
                              onClick={(e) => {
                                if (child.href.startsWith('#')) {
                                  e.preventDefault();
                                  handleNavClick(child.href);
                                } else {
                                  setIsMobileOpen(false);
                                }
                              }}
                              className={`flex items-center justify-between py-2 px-3 rounded-lg text-sm font-medium transition-colors font-sans ${
                                childActive
                                  ? 'bg-[#F5B400]/20 text-[#F5B400] font-bold'
                                  : 'text-[#F2F5F7] hover:text-[#F5B400]'
                              }`}
                            >
                              <span>{child.label}</span>
                              {childActive && <span className="w-2 h-2 rounded-full bg-[#F5B400] shrink-0" />}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-white/15 mt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="w-full text-center py-4 bg-[#F5B400] hover:bg-[#F7C126] text-[#071827] font-black uppercase tracking-wider text-[14px] rounded-lg shadow-md flex items-center justify-center gap-2 transition-all duration-150 font-sans"
            >
              <span>CONTACT ADMISSIONS</span>
              <ArrowUpRight className="w-4.5 h-4.5 shrink-0" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}