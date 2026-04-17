import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { ATTRACTIONS } from '../data/config';

export default function AttractionsEntertainment() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [active, setActive] = useState(0);

  return (
    <section
      id="attractions"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--black)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="section-label">Attractions & Entertainment</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-8 mt-4">
            <h2
              className="section-heading reveal delay-100"
              style={{ color: 'var(--white)' }}
            >
              Beyond Retail.<br />
              <span style={{ color: 'var(--gold)' }}>Beyond Expectations.</span>
            </h2>
            <p
              className="reveal-right delay-200 leading-relaxed self-end"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300 }}
            >
              Six world-class entertainment anchors drive repeat visitation and
              extend dwell times — turning shoppers into loyalists.
            </p>
          </div>
        </div>

        {/* Attraction selector */}
        <div className="grid lg:grid-cols-5 gap-0 reveal delay-200" style={{ minHeight: '560px' }}>

          {/* Left: Tabs */}
          <div
            className="lg:col-span-2 flex flex-col"
            style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}
          >
            {ATTRACTIONS.map((attraction, i) => (
              <button
                key={attraction.title}
                onClick={() => setActive(i)}
                className="text-left p-8 transition-all duration-300 group relative"
                style={{
                  background: active === i ? 'rgba(201,169,110,0.06)' : 'transparent',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  borderLeft: active === i ? '3px solid var(--gold)' : '3px solid transparent',
                }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="tag-gold mb-3 block">{attraction.tag}</span>
                    <h3
                      className="font-bold"
                      style={{
                        fontSize: '18px',
                        color: active === i ? 'var(--white)' : 'rgba(255,255,255,0.55)',
                        letterSpacing: '-0.01em',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {attraction.title}
                    </h3>
                    <p
                      style={{
                        fontSize: '12px',
                        color: active === i ? 'var(--gold)' : 'rgba(255,255,255,0.3)',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {attraction.subtitle}
                    </p>
                  </div>
                  <div
                    className="mt-1 transition-transform duration-300"
                    style={{
                      transform: active === i ? 'translateX(4px)' : 'translateX(0)',
                      color: active === i ? 'var(--gold)' : 'rgba(255,255,255,0.2)',
                    }}
                  >
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Right: Visual */}
          <div className="lg:col-span-3 relative overflow-hidden" style={{ minHeight: '400px' }}>
            {ATTRACTIONS.map((attraction, i) => (
              <div
                key={attraction.title}
                className="absolute inset-0 transition-all duration-700"
                style={{
                  opacity: active === i ? 1 : 0,
                  transform: active === i ? 'scale(1)' : 'scale(1.03)',
                  pointerEvents: active === i ? 'all' : 'none',
                }}
              >
                <img
                  src={`${attraction.image}?auto=compress&cs=tinysrgb&w=900`}
                  alt={attraction.title}
                  className="w-full h-full object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.2) 50%, transparent 100%)',
                  }}
                />
                <div
                  className="absolute bottom-0 left-0 right-0 p-10"
                >
                  <div
                    className="flex items-end justify-between flex-wrap gap-6"
                  >
                    <div>
                      <h3
                        className="font-bold mb-2"
                        style={{ fontSize: '28px', color: 'var(--white)', letterSpacing: '-0.02em' }}
                      >
                        {attraction.title}
                      </h3>
                      <p
                        className="leading-relaxed"
                        style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', maxWidth: '380px', fontWeight: 300 }}
                      >
                        {attraction.description}
                      </p>
                    </div>
                    <div
                      className="glass-card-gold p-5 text-center flex-shrink-0"
                    >
                      <div
                        className="font-bold"
                        style={{ fontSize: '28px', color: 'var(--gold)' }}
                      >
                        {attraction.stat}
                      </div>
                      <div
                        style={{ fontSize: '10px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '4px' }}
                      >
                        {attraction.statLabel}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          className="mt-20 text-center reveal delay-400"
        >
          <p
            className="font-light"
            style={{
              fontSize: 'clamp(20px, 3vw, 36px)',
              color: 'rgba(255,255,255,0.35)',
              letterSpacing: '-0.01em',
            }}
          >
            "A day at The Dubai Mall is never just about shopping —
            <br />
            <span style={{ color: 'rgba(255,255,255,0.65)' }}>it's an experience you plan for."</span>
          </p>
        </div>
      </div>
    </section>
  );
}
