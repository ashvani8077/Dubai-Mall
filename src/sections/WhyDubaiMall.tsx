import { useReveal } from '../hooks/useReveal';
import AnimatedCounter from '../components/AnimatedCounter';
import { STATS } from '../data/config';
import { Globe, TrendingUp, Users, Star } from 'lucide-react';

export default function WhyDubaiMall() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--black)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Top accent line */}
      <div className="divider" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 mb-24">
          <div>
            <div className="reveal">
              <span className="section-label">The Opportunity</span>
            </div>
            <h2
              className="section-heading mt-4 reveal delay-100"
              style={{ color: 'var(--white)' }}
            >
              Why The<br />
              <span className="text-gold-shimmer">Dubai Mall</span>
            </h2>
          </div>
          <div
            className="flex items-end reveal-right delay-200"
          >
            <p
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '520px', fontWeight: 300 }}
            >
              No other retail destination on earth combines scale, luxury,
              international appeal, and entertainment at this level.
              The Dubai Mall is not a venue — it is a platform.
            </p>
          </div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16 mb-24">
          {STATS.map((stat, i) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              description={stat.description}
              delay={i * 120}
            />
          ))}
        </div>

        {/* Divider */}
        <div className="divider mb-24" />

        {/* Positioning cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {[
            {
              icon: <Globe size={20} />,
              title: 'Global Audience',
              desc: 'Visitors from 130+ countries. A truly international stage for your brand.',
            },
            {
              icon: <TrendingUp size={20} />,
              title: 'Proven Performance',
              desc: 'Consistent footfall growth year-on-year, driven by tourism and local loyalty.',
            },
            {
              icon: <Users size={20} />,
              title: 'Premium Demographics',
              desc: 'Affluent, brand-conscious shoppers with high purchase intent.',
            },
            {
              icon: <Star size={20} />,
              title: 'Iconic Location',
              desc: 'Steps from Burj Khalifa, the most photographed building on earth.',
            },
          ].map((card, i) => (
            <div
              key={card.title}
              className="reveal glass-card p-8"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div
                className="mb-5 w-10 h-10 flex items-center justify-center"
                style={{
                  background: 'rgba(201,169,110,0.1)',
                  border: '1px solid rgba(201,169,110,0.25)',
                  color: 'var(--gold)',
                }}
              >
                {card.icon}
              </div>
              <h3
                className="font-semibold mb-3"
                style={{ fontSize: '15px', color: 'var(--white)', letterSpacing: '-0.01em' }}
              >
                {card.title}
              </h3>
              <p
                className="leading-relaxed"
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}
              >
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Map / Location section */}
        <div className="mt-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="reveal">
                <span className="section-label">Strategic Location</span>
              </div>
              <h3
                className="reveal delay-100 mt-4 font-bold"
                style={{ fontSize: 'clamp(28px, 3.5vw, 52px)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--white)' }}
              >
                At the Heart of<br />Downtown Dubai
              </h3>
              <p
                className="reveal delay-200 mt-5 leading-relaxed"
                style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', fontWeight: 300, maxWidth: '420px' }}
              >
                Adjacent to the Burj Khalifa. Served by Dubai Metro.
                Surrounded by 5-star hotels, residences, and corporate towers.
                The most desirable address in the Middle East.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 reveal delay-300">
                {[
                  { label: 'From Dubai Airport', value: '25 min' },
                  { label: 'Hotel Rooms Nearby', value: '8,000+' },
                  { label: 'Metro Direct Access', value: 'Yes' },
                  { label: 'Annual Tourists', value: '16M' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="p-4"
                    style={{ border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    <div
                      className="font-bold mb-1"
                      style={{ fontSize: '20px', color: 'var(--gold)' }}
                    >
                      {item.value}
                    </div>
                    <div
                      style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.12em', textTransform: 'uppercase' }}
                    >
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual map placeholder */}
            <div
              className="reveal-right delay-200 relative"
              style={{ height: '480px', background: 'var(--dark-2)' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url('https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=1200')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  opacity: 0.6,
                }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(135deg, rgba(8,8,8,0.8) 0%, rgba(8,8,8,0.3) 100%)' }}
              />
              {/* Location pin */}
              <div
                className="absolute"
                style={{ top: '42%', left: '48%', transform: 'translate(-50%, -50%)' }}
              >
                <div
                  className="map-pulse"
                  style={{
                    width: '16px',
                    height: '16px',
                    borderRadius: '50%',
                    background: 'var(--gold)',
                  }}
                />
              </div>
              <div
                className="absolute bottom-6 left-6 right-6"
              >
                <div
                  className="glass-card-gold p-4"
                >
                  <p
                    className="font-bold mb-1"
                    style={{ fontSize: '14px', color: 'var(--white)' }}
                  >
                    The Dubai Mall
                  </p>
                  <p
                    style={{ fontSize: '11px', color: 'rgba(255,255,255,0.5)' }}
                  >
                    Financial Centre Road, Downtown Dubai
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider mt-24" />
    </section>
  );
}
