import { useReveal } from '../hooks/useReveal';
import { EVENTS } from '../data/config';
import { Calendar, Users, Mic2, Star } from 'lucide-react';

const ICONS = [Calendar, Users, Mic2, Star];

export default function EventsPlatform() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--dark)', paddingTop: '120px', paddingBottom: '120px' }}
    >
      {/* Background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 80% 50%, rgba(201,169,110,0.04) 0%, transparent 70%)',
        }}
      />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="reveal">
              <span className="section-label">Events & Platform</span>
            </div>
            <h2
              className="section-heading mt-4 reveal delay-100"
              style={{ color: 'var(--white)' }}
            >
              A Global Stage<br />
              <span
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontStyle: 'italic',
                  color: 'var(--gold)',
                }}
              >
                for Your Brand.
              </span>
            </h2>
          </div>
          <div className="reveal-right delay-200 flex flex-col justify-end gap-8">
            <p
              className="leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300 }}
            >
              From intimate product launches to mega concerts,
              The Dubai Mall delivers audience reach, prestige, and global media coverage
              that no other venue in the region can match.
            </p>
            <div className="flex gap-8">
              {[
                { v: '300K+', l: 'Daily Footfall' },
                { v: '50K', l: 'Peak Capacity' },
                { v: '200+', l: 'Events / Year' },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-bold" style={{ fontSize: '24px', color: 'var(--gold)' }}>{s.v}</div>
                  <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.15em', textTransform: 'uppercase', marginTop: '4px' }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Event types grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-20">
          {EVENTS.map((event, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={event.title}
                className="event-card reveal"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="relative overflow-hidden" style={{ height: '240px' }}>
                  <img
                    src={`${event.image}?auto=compress&cs=tinysrgb&w=700`}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(8,8,8,0.95) 100%)' }}
                  />
                  <div
                    className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center"
                    style={{ background: 'rgba(201,169,110,0.15)', border: '1px solid rgba(201,169,110,0.3)', color: 'var(--gold)' }}
                  >
                    <Icon size={16} />
                  </div>
                </div>
                <div className="p-6">
                  <h3
                    className="font-bold mb-2"
                    style={{ fontSize: '20px', color: 'var(--white)', letterSpacing: '-0.01em' }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="mb-4 leading-relaxed"
                    style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}
                  >
                    {event.description}
                  </p>
                  <div className="flex items-center justify-between flex-wrap gap-3">
                    <div
                      className="flex items-center gap-2"
                      style={{ fontSize: '11px', color: 'var(--gold)' }}
                    >
                      <Users size={12} />
                      <span style={{ letterSpacing: '0.08em' }}>{event.capacity}</span>
                    </div>
                    <div className="flex gap-2 flex-wrap">
                      {event.past.map((p) => (
                        <span
                          key={p}
                          style={{
                            fontSize: '9px',
                            padding: '3px 8px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            color: 'rgba(255,255,255,0.35)',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div
          className="reveal delay-300 relative overflow-hidden"
          style={{
            background: 'var(--black)',
            border: '1px solid rgba(201,169,110,0.2)',
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,169,110,0.06) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 p-12 lg:p-16 text-center">
            <span className="section-label">Book an Event</span>
            <h3
              className="font-bold mt-4 mb-5"
              style={{ fontSize: 'clamp(28px, 4vw, 52px)', color: 'var(--white)', letterSpacing: '-0.02em' }}
            >
              Your Brand Deserves<br />the Biggest Stage
            </h3>
            <p
              className="leading-relaxed mb-10 mx-auto"
              style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', fontWeight: 300, maxWidth: '520px' }}
            >
              Launches, shows, concerts, and activations — our events team
              will craft an experience your audience will never forget.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="mailto:events@thedubaimall.com"
                className="btn-gold-fill"
              >
                Book Your Event
              </a>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-gold"
              >
                <span>Speak to Our Team</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
