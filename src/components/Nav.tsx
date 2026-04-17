import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_SECTIONS } from '../data/config';
import { useActiveSection, useScrollProgress } from '../hooks/useScrollProgress';

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const progress = useScrollProgress();
  const sectionIds = NAV_SECTIONS.map((s) => s.id);
  const activeSection = useActiveSection(sectionIds);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      <div
        className="scroll-progress"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled ? 'py-4' : 'py-6'
        }`}
        style={{
          background: scrolled
            ? 'rgba(8,8,8,0.92)'
            : 'linear-gradient(to bottom, rgba(8,8,8,0.7), transparent)',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : 'none',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between">
          <button
            onClick={() => scrollTo('hero')}
            className="flex flex-col leading-none"
          >
            <span
              className="font-bold tracking-widest uppercase text-sm"
              style={{ color: 'var(--gold)', letterSpacing: '0.25em' }}
            >
              The Dubai Mall
            </span>
            <span
              className="text-xs mt-0.5"
              style={{ color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', fontSize: '9px' }}
            >
              A Global Destination
            </span>
          </button>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_SECTIONS.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollTo(section.id)}
                className="text-xs tracking-widest uppercase transition-all duration-300 font-medium"
                style={{
                  color: activeSection === section.id ? 'var(--gold)' : 'rgba(255,255,255,0.5)',
                  letterSpacing: '0.15em',
                }}
              >
                {section.label}
              </button>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <a
              href="mailto:partnerships@thedubaimall.com"
              className="btn-gold"
              style={{ padding: '10px 24px', fontSize: '10px' }}
            >
              <span>Contact Us</span>
            </a>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2"
            style={{ color: 'var(--white)' }}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 lg:hidden transition-all duration-500"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? 'all' : 'none',
          background: 'rgba(8,8,8,0.97)',
          backdropFilter: 'blur(24px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_SECTIONS.map((section, i) => (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="text-2xl font-bold tracking-widest uppercase transition-all duration-300"
              style={{
                color: activeSection === section.id ? 'var(--gold)' : 'rgba(255,255,255,0.7)',
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s`,
              }}
            >
              {section.label}
            </button>
          ))}
          <a
            href="mailto:partnerships@thedubaimall.com"
            className="btn-gold-fill mt-4"
          >
            Contact Us
          </a>
        </div>
      </div>

      {/* Side nav dots (desktop) */}
      <div
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col gap-3"
      >
        {NAV_SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollTo(section.id)}
            className={`nav-dot ${activeSection === section.id ? 'active' : ''}`}
            title={section.label}
          />
        ))}
      </div>
    </>
  );
}
