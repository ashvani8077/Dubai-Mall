import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { LEASING_TYPES, SPONSORSHIP_TIERS } from '../data/config';
import { Check } from 'lucide-react';

type Tab = 'leasing' | 'sponsorship';

export default function LeasingPaths() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [activeTab, setActiveTab] = useState<Tab>('leasing');
  const [activeLease, setActiveLease] = useState(0);

  return (
    <section
      id="leasing"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--black)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="mb-16">
          <div className="reveal">
            <span className="section-label">Commercial Opportunities</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-10 mt-4">
            <h2
              className="section-heading reveal delay-100"
              style={{ color: 'var(--white)' }}
            >
              Your Place in the<br />
              <span style={{ color: 'var(--gold)' }}>World's Mall.</span>
            </h2>
            <p
              className="reveal-right delay-200 leading-relaxed self-end"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300 }}
            >
              Whether you're securing a flagship location, launching a brand activation,
              or building a strategic sponsorship partnership — we have a commercial
              path designed for your ambitions.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div
          className="reveal delay-200 flex gap-0 mb-14"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
        >
          {(['leasing', 'sponsorship'] as Tab[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="px-8 py-4 text-xs font-medium tracking-widest uppercase transition-all duration-300 relative"
              style={{
                color: activeTab === tab ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
                letterSpacing: '0.18em',
              }}
            >
              {tab === 'leasing' ? 'Leasing Paths' : 'Sponsorship Packages'}
              {activeTab === tab && (
                <div
                  className="absolute bottom-0 left-0 right-0 h-px"
                  style={{ background: 'var(--gold)' }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Leasing Tab */}
        {activeTab === 'leasing' && (
          <div>
            {/* Type selector */}
            <div className="flex flex-wrap gap-3 mb-10 reveal delay-100">
              {LEASING_TYPES.map((type, i) => (
                <button
                  key={type.id}
                  onClick={() => setActiveLease(i)}
                  className="px-5 py-2.5 text-xs font-medium uppercase tracking-widest transition-all duration-300"
                  style={{
                    background: activeLease === i ? 'var(--gold)' : 'transparent',
                    color: activeLease === i ? 'var(--black)' : 'rgba(255,255,255,0.45)',
                    border: `1px solid ${activeLease === i ? 'var(--gold)' : 'rgba(255,255,255,0.12)'}`,
                    letterSpacing: '0.15em',
                    fontSize: '10px',
                  }}
                >
                  {type.title}
                </button>
              ))}
            </div>

            {/* Active leasing card */}
            <div
              className="grid lg:grid-cols-2 gap-0 reveal delay-200"
              style={{ minHeight: '480px' }}
            >
              {/* Image */}
              <div className="leasing-card" style={{ minHeight: '360px' }}>
                <img
                  src={`${LEASING_TYPES[activeLease].image}?auto=compress&cs=tinysrgb&w=900`}
                  alt={LEASING_TYPES[activeLease].title}
                  className="w-full h-full object-cover absolute inset-0"
                  style={{ position: 'absolute', height: '100%' }}
                />
                <div className="leasing-overlay" />
                <div className="leasing-content">
                  <span className="tag-gold">{LEASING_TYPES[activeLease].subtitle}</span>
                  <h3
                    className="font-bold mt-3"
                    style={{ fontSize: '28px', color: 'var(--white)', letterSpacing: '-0.02em' }}
                  >
                    {LEASING_TYPES[activeLease].title}
                  </h3>
                  <div className="leasing-extra">
                    <p
                      className="mt-2"
                      style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}
                    >
                      {LEASING_TYPES[activeLease].description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Info panel */}
              <div
                className="p-10 lg:p-12 flex flex-col justify-between"
                style={{
                  background: 'var(--dark-2)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderLeft: 'none',
                }}
              >
                <div>
                  <div className="mb-2">
                    <span className="section-label">{LEASING_TYPES[activeLease].subtitle}</span>
                  </div>
                  <h3
                    className="font-bold mb-4"
                    style={{ fontSize: '28px', color: 'var(--white)', letterSpacing: '-0.02em' }}
                  >
                    {LEASING_TYPES[activeLease].title} Spaces
                  </h3>
                  <div className="gold-line visible mb-6" style={{ transform: 'scaleX(1)' }} />
                  <p
                    className="leading-relaxed mb-8"
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
                  >
                    {LEASING_TYPES[activeLease].description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {LEASING_TYPES[activeLease].features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.25)' }}
                        >
                          <Check size={10} style={{ color: 'var(--gold)' }} />
                        </div>
                        <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="p-4 mb-8"
                    style={{ background: 'rgba(201,169,110,0.06)', border: '1px solid rgba(201,169,110,0.2)' }}
                  >
                    <span
                      style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                    >
                      Typical Unit Size
                    </span>
                    <div
                      className="font-bold mt-1"
                      style={{ fontSize: '20px', color: 'var(--gold)' }}
                    >
                      {LEASING_TYPES[activeLease].sqm}
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:leasing@thedubaimall.com"
                  className="btn-gold-fill text-center"
                >
                  Request a Leasing Package
                </a>
              </div>
            </div>

            {/* All 4 leasing type cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
              {LEASING_TYPES.map((type, i) => (
                <button
                  key={type.id}
                  onClick={() => setActiveLease(i)}
                  className="reveal text-left p-6 transition-all duration-400 group"
                  style={{
                    transitionDelay: `${i * 80}ms`,
                    border: `1px solid ${activeLease === i ? 'rgba(201,169,110,0.4)' : 'rgba(255,255,255,0.07)'}`,
                    background: activeLease === i ? 'rgba(201,169,110,0.05)' : 'transparent',
                  }}
                >
                  <div
                    className="font-bold mb-1"
                    style={{ fontSize: '14px', color: activeLease === i ? 'var(--gold)' : 'var(--white)', transition: 'color 0.3s ease' }}
                  >
                    {type.title}
                  </div>
                  <div
                    style={{ fontSize: '11px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.05em' }}
                  >
                    {type.sqm}
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Sponsorship Tab */}
        {activeTab === 'sponsorship' && (
          <div>
            <div
              className="reveal mb-10"
            >
              <p
                className="leading-relaxed"
                style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300, maxWidth: '600px' }}
              >
                Partner with the world's most visited mall. Our sponsorship packages
                deliver unmatched audience reach, brand visibility, and measurable ROI.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {SPONSORSHIP_TIERS.map((tier, i) => (
                <div
                  key={tier.name}
                  className={`tier-card reveal p-8 ${tier.featured ? 'featured' : ''}`}
                  style={{
                    transitionDelay: `${i * 100}ms`,
                    background: tier.featured ? 'rgba(201,169,110,0.04)' : 'var(--dark-2)',
                  }}
                >
                  {tier.featured && (
                    <div
                      className="mb-4"
                      style={{
                        display: 'inline-block',
                        padding: '3px 12px',
                        background: 'var(--gold)',
                        color: 'var(--black)',
                        fontSize: '9px',
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        fontWeight: 700,
                      }}
                    >
                      Most Popular
                    </div>
                  )}
                  <div
                    className="section-label mb-1"
                    style={{ fontSize: '10px' }}
                  >
                    {tier.name} Package
                  </div>
                  <div
                    className="font-bold my-4"
                    style={{ fontSize: '28px', color: 'var(--white)', letterSpacing: '-0.02em' }}
                  >
                    {tier.price}
                  </div>
                  <div className="gold-line visible mb-4" style={{ transform: 'scaleX(1)' }} />
                  <p
                    className="mb-6"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}
                  >
                    {tier.description}
                  </p>
                  <div
                    className="mb-6 py-3 px-4 flex items-center gap-2"
                    style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <span style={{ fontSize: '10px', color: 'var(--gold)', letterSpacing: '0.1em' }}>REACH:</span>
                    <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)' }}>{tier.reach}</span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {tier.inclusions.map((item) => (
                      <div key={item} className="flex items-start gap-3">
                        <div
                          className="w-4 h-4 flex-shrink-0 flex items-center justify-center mt-0.5"
                          style={{ background: 'rgba(201,169,110,0.1)', border: '1px solid rgba(201,169,110,0.2)' }}
                        >
                          <Check size={8} style={{ color: 'var(--gold)' }} />
                        </div>
                        <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href="mailto:sponsorship@thedubaimall.com"
                    className={tier.featured ? 'btn-gold-fill w-full text-center block' : 'btn-gold w-full text-center block'}
                  >
                    {tier.featured ? <span>Get Started</span> : <span>Enquire Now</span>}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
