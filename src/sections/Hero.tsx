import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative w-full overflow-hidden"
      style={{ height: '100vh', minHeight: '600px' }}
    >
      {/* Background Video with local source */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster="https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=1920"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          filter: 'brightness(0.99)',
          animation: loaded ? 'heroZoom 20s cubic-bezier(0.16, 1, 0.3, 1) forwards' : 'none',
          willChange: 'transform',
        }}
      >
        <source 
          src="/assets/videos/background.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>

      {/* Video is the primary background element */}

      {/* Multi-layer overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(8,8,8,0.2) 0%, rgba(8,8,8,0.45) 40%, rgba(8,8,8,0.85) 80%, rgba(8,8,8,1) 100%)',
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(8,8,8,0.6) 0%, transparent 60%)',
        }}
      />

      {/* Cinematic top bar */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(8,8,8,0.7), transparent)',
        }}
      />

      {/* Content */}
      <div
        className="absolute inset-0 flex flex-col justify-center"
        style={{ 
          paddingLeft: 'max(6vw, 32px)', 
          paddingRight: 'max(6vw, 32px)',
          paddingTop: '160px',
          paddingBottom: '240px' 
        }}
      >
        <div className="max-w-4xl">
          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s',
            }}
          >
            <span className="section-label">Dubai, UAE · Est. 2008</span>
          </div>

          <div
            className="mt-6"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            <h1 className="hero-headline" style={{ color: 'var(--white)' }}>
              More Than<br />
              <span className="text-gold-shimmer">a Mall.</span>
            </h1>
          </div>

          <div
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1.1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s',
            }}
          >
            <h1 className="hero-headline" style={{ color: 'var(--white)' }}>
              A Global<br />Destination.
            </h1>
          </div>

          <div
            className="mt-4"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s',
            }}
          >
            <p
              className="max-w-xl leading-relaxed"
              style={{ color: 'rgba(255,255,255,0.65)', fontSize: '15px', fontWeight: 300 }}
            >
              The world's most visited shopping and entertainment destination.
              105 million annual visitors. One iconic address.
            </p>
          </div>

          <div
            className="mt-6 flex items-center gap-5 flex-wrap"
            style={{
              opacity: loaded ? 1 : 0,
              transform: loaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.2s',
            }}
          >
            <button
              onClick={() => document.getElementById('leasing')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-gold-fill"
            >
              Explore Leasing
            </button>
            <button
              onClick={scrollToNext}
              className="btn-gold"
            >
              <span>Discover More</span>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom stats strip */}
      <div
        className="absolute bottom-0 left-0 right-0"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.5s',
        }}
      >
        <div
          className="max-w-screen-xl mx-auto px-6 lg:px-12 pb-10"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-4 pt-6">
            {[
              { v: '105M+', l: 'Annual Visitors' },
              { v: '#1', l: 'Most Visited' },
              { v: '1,300+', l: 'Retail Brands' },
              { v: '200+', l: 'F&B Concepts' },
              { v: '130+', l: 'Countries' },
              { v: '2008', l: 'Established' },
            ].map((item) => (
              <div key={item.l} className="text-center">
                <div
                  className="font-bold mb-1"
                  style={{ fontSize: '18px', color: 'var(--gold)' }}
                >
                  {item.v}
                </div>
                <div
                  style={{ fontSize: '9px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}
                >
                  {item.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute"
        style={{
          bottom: '220px',
          left: '50%',
          transform: 'translateX(-50%)',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 2s',
          animation: loaded ? 'float 3s ease-in-out infinite' : 'none',
          color: 'rgba(255,255,255,0.5)',
        }}
      >
        <ChevronDown size={24} />
      </button>

      {/* Side label */}
      <div
        className="absolute right-8 top-1/2 hidden xl:flex items-center gap-3"
        style={{
          transform: 'translateY(-50%) rotate(90deg)',
          transformOrigin: 'center',
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.8s',
        }}
      >
        <span style={{ fontSize: '9px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)' }}>
          Scroll to explore
        </span>
        <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
      </div>
    </section>
  );
}
