import { useEffect, useRef, useState } from 'react';
import { useAnimatedCounter } from '../hooks/useAnimatedCounter';

interface Props {
  value: number;
  suffix?: string;
  label: string;
  description?: string;
  delay?: number;
}

export default function AnimatedCounter({ value, suffix = '', label, description, delay = 0 }: Props) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useAnimatedCounter(value, 2200, started);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setStarted(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className="reveal"
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex items-end gap-1 mb-3">
        <span className="stat-number" style={{ color: 'var(--white)' }}>
          {count.toLocaleString()}
        </span>
        <span
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--gold)' }}
        >
          {suffix}
        </span>
      </div>
      <div
        className="gold-line mb-3 visible"
        style={{ transform: 'scaleX(1)' }}
      />
      <p
        className="font-semibold tracking-widest uppercase mb-1"
        style={{ fontSize: '11px', color: 'var(--white)', letterSpacing: '0.2em' }}
      >
        {label}
      </p>
      {description && (
        <p
          className="text-sm leading-relaxed mt-1"
          style={{ color: 'rgba(255,255,255,0.45)', fontSize: '13px' }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
