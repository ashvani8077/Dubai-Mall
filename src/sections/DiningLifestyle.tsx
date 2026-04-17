import { useReveal } from '../hooks/useReveal';
import { DINING } from '../data/config';

export default function DiningLifestyle() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="dining"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--dark)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="reveal">
              <span className="section-label">Dining & Lifestyle</span>
            </div>
            <h2
              className="section-heading mt-4 reveal delay-100"
              style={{ color: 'var(--white)' }}
            >
              Destination<br />
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  color: 'var(--gold)',
                }}
              >
                Dining.
              </span>
            </h2>
          </div>
          <div className="reveal-right delay-200 flex items-end">
            <p
              className="leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300, maxWidth: '480px' }}
            >
              200+ culinary concepts across casual, lifestyle, and fine dining —
              from Michelin-starred chefs to beloved regional institutions.
              Every meal, a reason to return.
            </p>
          </div>
        </div>

        {/* Featured dining grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
          {DINING.map((item, i) => (
            <div
              key={item.title}
              className="img-zoom reveal"
              style={{
                transitionDelay: `${i * 120}ms`,
                position: 'relative',
                height: i === 0 ? '520px' : '340px',
              }}
            >
              <img
                src={`${item.image}?auto=compress&cs=tinysrgb&w=700`}
                alt={item.title}
                className="w-full h-full object-cover absolute inset-0"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to top, rgba(8,8,8,0.95) 0%, rgba(8,8,8,0.3) 50%, transparent 100%)',
                }}
              />
              <div className="absolute top-5 left-5">
                <span className="tag-gold">{item.tag}</span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3
                  className="font-bold mb-2"
                  style={{ fontSize: '20px', color: 'var(--white)', letterSpacing: '-0.01em' }}
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* F&B Stats strip */}
        <div
          className="reveal delay-200 grid grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ background: 'rgba(255,255,255,0.05)' }}
        >
          {[
            { value: '200+', label: 'F&B Concepts' },
            { value: '30+', label: 'Cuisines Represented' },
            { value: '70+', label: 'Food Hall Concepts' },
            { value: '50M+', label: 'Dining Covers / Year' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center py-10 px-4"
              style={{ background: 'var(--dark)' }}
            >
              <div
                className="font-bold mb-2"
                style={{ fontSize: '36px', color: 'var(--gold)', letterSpacing: '-0.02em' }}
              >
                {stat.value}
              </div>
              <div
                style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.18em', textTransform: 'uppercase' }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="reveal delay-300 mt-16 p-10 lg:p-14 relative overflow-hidden"
          style={{
            background: 'var(--dark-2)',
            border: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <div
            className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block"
            style={{
              backgroundImage: `url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.25,
            }}
          />
          <div className="relative z-10 max-w-xl">
            <span className="section-label">F&B Leasing</span>
            <h3
              className="font-bold mt-4 mb-4"
              style={{ fontSize: '28px', color: 'var(--white)', letterSpacing: '-0.02em' }}
            >
              Bring Your Culinary Vision to<br />the World Stage
            </h3>
            <p
              className="leading-relaxed mb-8"
              style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
            >
              Waterfront terrace positions. Fountain views. Peak-hour footfall exceeding
              300,000 daily visitors. Your concept deserves the best address.
            </p>
            <button
              onClick={() => document.getElementById('leasing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold-fill"
            >
              Explore F&B Opportunities
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
