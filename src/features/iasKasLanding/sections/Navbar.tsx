import { useState, useEffect, useCallback } from 'react';
import { Menu, X, ChevronDown, ArrowUpRight } from 'lucide-react';
import { navItems } from '../data/navigation';
import logoWebp from '../../../assets/images/logo.webp';

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
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);

      const sections = [
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

      const scrollPosition = currentScrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            break;
          }
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
      if (!target.closest('.dropdown-wrapper')) {
        setOpenDropdown(null);
      }
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
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    }
  }, []);

  const isItemActive = (href: string, children?: { href: string }[]) => {
    if (href === `#${activeSection}`) return true;
    if (children) {
      return children.some((child) => child.href === `#${activeSection}`);
    }
    return false;
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 ${
          isMobileOpen
            ? 'bg-white border-b border-ivory-300 shadow-md'
            : isVisible
            ? `translate-y-0 transition-all duration-300 transform bg-white border-b ${
                isScrolled ? 'border-ivory-300 shadow-md' : 'border-ivory-200 shadow-sm'
              }`
            : `-translate-y-full transition-all duration-300 transform bg-white border-b ${
                isScrolled ? 'border-ivory-300 shadow-md' : 'border-ivory-200 shadow-sm'
              }`
        }`}
      >
        <div className="mx-auto max-w-7xl pl-2 sm:pl-3 lg:pl-4 xl:pl-4 pr-4 sm:pr-6 lg:pr-12">
          <div className="flex items-center justify-between h-[72px] sm:h-[80px]">
            {/* Logo Brand Block */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#hero');
              }}
              className="flex items-center gap-2 sm:gap-3 shrink-0 py-1 group"
            >
              <img
                src={logoWebp}
                alt="Sri Lakshmi Emblem"
                className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-102 filter drop-shadow-xs shrink-0"
                width={56}
                height={56}
                decoding="async"
              />
              <div className="flex flex-col border-l border-navy-200 pl-2 sm:pl-3 justify-center py-0.5 shrink-0 max-w-[170px] sm:max-w-[220px]">
                <span className="text-[11px] sm:text-[13px] xl:text-[14px] font-extrabold text-navy-900 leading-tight uppercase tracking-tight font-sans">
                  Sri Lakshmi College of Management &amp; Science
                </span>
                <span className="text-[8.5px] sm:text-[9.5px] xl:text-[10px] font-bold text-teal-700 leading-snug uppercase tracking-widest font-sans mt-0.5 whitespace-nowrap">
                  SUNKADAKATTE, BANGALORE
                </span>
              </div>
            </a>

            {/* Desktop Center Navigation Links */}
            <nav className="hidden xl:flex items-center gap-7 2xl:gap-8 shrink-0">
              {navItems.map((item) => {
                const active = isItemActive(item.href, item.children);

                return (
                  <div
                    key={item.label}
                    className="relative flex items-center h-full dropdown-wrapper"
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
                      className={`inline-flex items-center gap-1.5 py-2 text-[14px] font-medium tracking-wide transition-colors relative whitespace-nowrap font-sans ${
                        active
                          ? 'text-[#087C73] font-semibold'
                          : 'text-[#082B50] hover:text-[#087C73]'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.children && (
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 shrink-0 ${
                            openDropdown === item.label ? 'rotate-180 text-[#087C73]' : 'text-[#082B50]'
                          }`}
                        />
                      )}
                      {active && (
                        <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#087C73] rounded-full" />
                      )}
                    </a>

                    {/* Dropdown Menu */}
                    {item.children && openDropdown === item.label && (
                      <div className="absolute top-full left-0 pt-2 min-w-[230px] z-50 before:content-[''] before:absolute before:-top-3 before:left-0 before:right-0 before:h-3">
                        <div className="bg-white border border-[#E5E1D8] rounded-xl shadow-xl py-2.5 animate-in fade-in slide-in-from-top-1 duration-150">
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
                                className={`flex items-center justify-between px-4 py-2.5 text-[13px] font-medium transition-colors font-sans ${
                                  childActive
                                    ? 'bg-teal-50 text-[#087C73] font-bold border-l-2 border-[#087C73]'
                                    : 'text-[#082B50] hover:bg-teal-50 hover:text-[#087C73]'
                                }`}
                              >
                                <span>{child.label}</span>
                                {childActive && (
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#087C73] shrink-0" />
                                )}
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

            {/* Desktop Right Action Buttons */}
            <div className="hidden xl:flex items-center gap-3.5 2xl:gap-4 shrink-0">
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#faq');
                }}
                className={`inline-flex items-center justify-center h-10 px-3.5 text-[14px] font-medium tracking-wide transition-colors rounded whitespace-nowrap font-sans ${
                  activeSection === 'faq'
                    ? 'text-[#087C73] font-semibold'
                    : 'text-[#082B50] hover:text-[#087C73]'
                }`}
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center justify-center h-10 px-6 text-[13px] font-bold uppercase tracking-wider text-white bg-[#087C73] hover:bg-[#075B55] rounded-lg transition-all duration-300 shadow-sm gap-2 whitespace-nowrap shrink-0 font-sans"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-4 h-4 shrink-0" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex xl:hidden items-center gap-2 shrink-0">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="inline-flex items-center justify-center bg-[#087C73] hover:bg-[#075B55] text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-[12px] sm:text-[13px] font-bold uppercase tracking-wider gap-1 shadow-xs whitespace-nowrap shrink-0 transition-all duration-300 font-sans"
              >
                <span>Contact</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>

              <button
                onClick={() => setIsMobileOpen((prev) => !prev)}
                type="button"
                className="p-2 text-navy-900 hover:text-teal-700 rounded-lg bg-ivory-100 hover:bg-teal-50 border border-ivory-300 transition-colors shrink-0 cursor-pointer"
                aria-label={isMobileOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMobileOpen}
              >
                {isMobileOpen ? <X className="w-6 h-6 text-teal-700" /> : <Menu className="w-6 h-6 text-navy-900" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay Rendered Outside Transformed Header */}
      {isMobileOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[72px] sm:top-[80px] bottom-0 bg-white z-[9999] overflow-y-auto flex flex-col justify-between p-5 sm:p-6 text-navy-900 border-t border-ivory-300 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="space-y-3">
            <div className="flex items-center justify-between border-b border-ivory-200 pb-3">
              <span className="text-xs font-bold text-navy-500 uppercase tracking-widest font-sans">
                Academy Navigation
              </span>
              <span className="text-[11px] font-bold text-teal-700 bg-teal-50 border border-teal-200 px-2.5 py-0.5 rounded font-sans">
                IAS &amp; KAS Academy
              </span>
            </div>

            <div className="space-y-1 pt-1">
              {navItems.map((item) => {
                const active = isItemActive(item.href, item.children);

                return (
                  <div key={item.label} className="border-b border-ivory-100 last:border-b-0 dropdown-wrapper">
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
                      className={`flex items-center justify-between w-full py-3 text-base font-medium transition-colors font-sans ${
                        active ? 'text-teal-700 font-bold' : 'text-navy-900 hover:text-teal-700'
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {item.label}
                        {active && (
                          <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                            Active
                          </span>
                        )}
                      </span>
                      {item.children && (
                        <ChevronDown
                          className={`w-4 h-4 text-navy-900 transition-transform ${
                            openDropdown === item.label ? 'rotate-180 text-teal-700' : ''
                          }`}
                        />
                      )}
                    </a>

                    {item.children && openDropdown === item.label && (
                      <div className="ml-2 my-2 space-y-1 bg-ivory-50 border border-ivory-300 rounded-xl p-3">
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
                                  ? 'bg-teal-50 text-teal-700 font-bold'
                                  : 'text-navy-900 hover:text-teal-700'
                              }`}
                            >
                              <span>{child.label}</span>
                              {childActive && (
                                <span className="w-2 h-2 rounded-full bg-teal-700 shrink-0" />
                              )}
                            </a>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="border-b border-ivory-100">
                <a
                  href="#faq"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick('#faq');
                  }}
                  className={`flex items-center justify-between w-full py-3 text-base font-medium transition-colors font-sans ${
                    activeSection === 'faq' ? 'text-teal-700 font-bold' : 'text-navy-900 hover:text-teal-700'
                  }`}
                >
                  <span>FAQ</span>
                  {activeSection === 'faq' && (
                    <span className="text-[10px] bg-teal-50 text-teal-700 border border-teal-200 px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                      Active
                    </span>
                  )}
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-ivory-300 mt-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="block w-full text-center py-3.5 bg-[#087C73] hover:bg-[#075B55] text-white font-bold uppercase tracking-wider text-[13px] rounded-lg shadow-sm flex items-center justify-center gap-1.5 transition-all duration-300 font-sans"
            >
              <span>Contact Admissions</span>
              <ArrowUpRight className="w-4 h-4 shrink-0" />
            </a>
          </div>
        </div>
      )}
    </>
  );
}
