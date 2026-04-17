import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { RETAIL_CATEGORIES, LUXURY_BRANDS } from '../data/config';
import { ArrowRight } from 'lucide-react';

export default function Retail() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section
      id="retail"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--black)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <div className="reveal">
              <span className="section-label">Retail Portfolio</span>
            </div>
            <h2
              className="section-heading mt-4 reveal delay-100"
              style={{ color: 'var(--white)' }}
            >
              1,300+ Brands.<br />
              <span style={{ color: 'var(--gold)' }}>One Address.</span>
            </h2>
          </div>
          <p
            className="reveal-right delay-200 max-w-sm leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '15px', fontWeight: 300 }}
          >
            From world-renowned luxury flagships to emerging concepts,
            The Dubai Mall hosts the most diverse retail ecosystem in the world.
          </p>
        </div>

        {/* Category tabs */}
        <div
          className="reveal delay-200 flex gap-1 mb-10 p-1"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.07)',
            display: 'inline-flex',
          }}
        >
          {RETAIL_CATEGORIES.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className="px-6 py-2.5 text-xs font-medium tracking-widest uppercase transition-all duration-300"
              style={{
                background: activeCategory === i ? 'var(--gold)' : 'transparent',
                color: activeCategory === i ? 'var(--black)' : 'rgba(255,255,255,0.5)',
                letterSpacing: '0.12em',
                fontSize: '10px',
              }}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Active category card */}
        <div className="grid lg:grid-cols-2 gap-0 mb-20 reveal delay-300" style={{ minHeight: '440px' }}>
          <div
            className="img-zoom relative overflow-hidden"
            style={{ minHeight: '340px' }}
          >
            <img
              src={`${RETAIL_CATEGORIES[activeCategory].image}?auto=compress&cs=tinysrgb&w=800`}
              alt={RETAIL_CATEGORIES[activeCategory].title}
              className="w-full h-full object-cover transition-all duration-700"
              style={{ position: 'absolute', inset: 0 }}
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, transparent 50%, rgba(8,8,8,0.95) 100%)' }}
            />
            <div
              className="absolute top-6 left-6"
            >
              <span className="tag-gold">{RETAIL_CATEGORIES[activeCategory].tag}</span>
            </div>
          </div>
          <div
            className="flex flex-col justify-center p-10 lg:p-14"
            style={{ background: 'var(--dark-2)', border: '1px solid rgba(255,255,255,0.06)', borderLeft: 'none' }}
          >
            <h3
              className="font-bold mb-4"
              style={{ fontSize: '32px', color: 'var(--white)', letterSpacing: '-0.02em' }}
            >
              {RETAIL_CATEGORIES[activeCategory].title}
            </h3>
            <div className="gold-line visible mb-6" style={{ transform: 'scaleX(1)' }} />
            <p
              className="leading-relaxed mb-6"
              style={{ fontSize: '15px', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
            >
              {RETAIL_CATEGORIES[activeCategory].description}
            </p>
            <div
              className="flex items-center gap-3 mb-8"
            >
              <span
                className="font-bold"
                style={{ fontSize: '22px', color: 'var(--gold)' }}
              >
                {RETAIL_CATEGORIES[activeCategory].count}
              </span>
            </div>
            <button
              onClick={() => document.getElementById('leasing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold self-start"
            >
              <span className="flex items-center gap-2">
                Enquire About This Space <ArrowRight size={14} />
              </span>
            </button>
          </div>
        </div>

        {/* Brand logos grid */}
        <div>
          <div className="reveal mb-8">
            <span className="section-label">Featured Brands</span>
          </div>
          <div
            className="reveal delay-100 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-px"
            style={{ background: 'rgba(255,255,255,0.05)' }}
          >
            {LUXURY_BRANDS.map((brand, i) => (
              <div
                key={brand}
                className="brand-item"
                style={{
                  background: 'var(--black)',
                  transitionDelay: `${(i % 6) * 50}ms`,
                  opacity: 1,
                }}
              >
                <span
                  className="font-semibold text-center block"
                  style={{
                    fontSize: '11px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.4)',
                  }}
                >
                  {brand}
                </span>
              </div>
            ))}
          </div>
          <p
            className="reveal delay-200 mt-6 text-center"
            style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}
          >
            + 1,282 more brands across all categories
          </p>
        </div>
      </div>
    </section>
  );
}
