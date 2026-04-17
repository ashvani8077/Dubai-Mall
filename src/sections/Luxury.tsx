import { useReveal } from '../hooks/useReveal';

const LUXURY_FEATURES = [
  {
    number: '01',
    title: 'Fashion Avenue',
    description: 'A dedicated luxury boulevard spanning 220,000 sqft — home to the world\'s most coveted names in fashion, accessories, and jewellery.',
  },
  {
    number: '02',
    title: 'Private Entrances',
    description: 'Exclusive VIP access points and dedicated valet for luxury clientele, ensuring an uncompromised arrival experience.',
  },
  {
    number: '03',
    title: 'Affluent Audience',
    description: 'A captive audience of UHNWI, HNW tourists, and aspirational shoppers. Average luxury transaction exceeds AED 8,000.',
  },
  {
    number: '04',
    title: 'Brand Integrity',
    description: 'Curated adjacencies ensure only complementary luxury brands share your space. Zero discounters. Zero compromise.',
  },
];

export default function Luxury() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="luxury"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--black)', paddingTop: '0', paddingBottom: '0' }}
    >
      {/* Full-bleed hero image */}
      <div
        className="relative w-full"
        style={{ height: '70vh', minHeight: '500px' }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(8,8,8,0.1) 0%, rgba(8,8,8,0.5) 50%, rgba(8,8,8,1) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(8,8,8,0.85) 0%, transparent 60%)',
          }}
        />

        <div
          className="absolute inset-0 flex flex-col justify-center"
          style={{ paddingLeft: 'max(6vw, 32px)' }}
        >
          <div className="reveal">
            <span className="section-label">Luxury & Prestige</span>
          </div>
          <h2
            className="section-heading mt-4 reveal delay-100"
            style={{ color: 'var(--white)', maxWidth: '640px' }}
          >
            Fashion Avenue.<br />
            <span
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontStyle: 'italic',
                color: 'var(--gold)',
              }}
            >
              Where Prestige Lives.
            </span>
          </h2>
          <p
            className="reveal delay-200 mt-5 leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.55)', fontSize: '16px', maxWidth: '480px', fontWeight: 300 }}
          >
            The Middle East's premier luxury retail destination.
            220,000 sqft of dedicated luxury space, curated for the world's most discerning clientele.
          </p>
        </div>
      </div>

      {/* Features section */}
      <div
        className="max-w-screen-xl mx-auto px-6 lg:px-12"
        style={{ paddingTop: '80px', paddingBottom: '120px' }}
      >
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Feature list */}
          <div className="space-y-0">
            {LUXURY_FEATURES.map((feature, i) => (
              <div
                key={feature.number}
                className="reveal"
                style={{
                  transitionDelay: `${i * 100}ms`,
                  padding: '28px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.07)',
                }}
              >
                <div className="flex gap-6 items-start">
                  <span
                    className="font-bold flex-shrink-0 mt-1"
                    style={{ fontSize: '11px', color: 'var(--gold)', letterSpacing: '0.15em' }}
                  >
                    {feature.number}
                  </span>
                  <div>
                    <h3
                      className="font-semibold mb-2"
                      style={{ fontSize: '17px', color: 'var(--white)', letterSpacing: '-0.01em' }}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}
                    >
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Visual + CTA */}
          <div className="reveal-right delay-300 lg:sticky lg:top-32">
            <div
              className="relative overflow-hidden"
              style={{ height: '420px' }}
            >
              <img
                src="https://images.pexels.com/photos/1005638/pexels-photo-1005638.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury retail interior"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 50%)' }}
              />
              <div className="absolute bottom-8 left-8 right-8">
                <div
                  className="glass-card-gold p-6"
                >
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: '22px', color: 'var(--white)' }}
                  >
                    180+
                  </p>
                  <p
                    style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.15em', textTransform: 'uppercase' }}
                  >
                    Luxury brands in one destination
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-8 p-8"
              style={{ background: 'var(--dark-2)', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p
                className="font-semibold mb-2"
                style={{ fontSize: '12px', color: 'var(--gold)', letterSpacing: '0.2em', textTransform: 'uppercase' }}
              >
                Luxury Leasing
              </p>
              <h4
                className="font-bold mb-3"
                style={{ fontSize: '22px', color: 'var(--white)', letterSpacing: '-0.01em' }}
              >
                Secure your flagship position
              </h4>
              <p
                className="leading-relaxed mb-6"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}
              >
                Limited fashion avenue spaces available. Our team will work with you
                to identify the perfect position for your brand.
              </p>
              <button
                onClick={() => document.getElementById('leasing')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold-fill w-full text-center"
              >
                Request Leasing Information
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
