import { useState } from 'react';
import { useReveal } from '../hooks/useReveal';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export default function ContactCTA() {
  const sectionRef = useReveal(0.1) as React.RefObject<HTMLElement>;
  const [form, setForm] = useState({ name: '', company: '', email: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.1)',
    color: 'var(--white)',
    fontSize: '14px',
    padding: '14px 16px',
    width: '100%',
    outline: 'none',
    transition: 'border-color 0.3s ease',
    fontFamily: 'inherit',
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative"
      style={{ background: 'var(--black)', paddingTop: '120px', paddingBottom: '0' }}
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* Section header */}
        <div className="text-center mb-20">
          <div className="reveal">
            <span className="section-label">Get in Touch</span>
          </div>
          <h2
            className="section-heading mt-4 reveal delay-100 mx-auto"
            style={{ color: 'var(--white)', maxWidth: '720px' }}
          >
            Ready to be Part of<br />
            <span style={{ color: 'var(--gold)' }}>Something Legendary?</span>
          </h2>
          <p
            className="reveal delay-200 mt-6 mx-auto leading-relaxed"
            style={{ color: 'rgba(255,255,255,0.5)', fontSize: '16px', fontWeight: 300, maxWidth: '520px' }}
          >
            Our commercial partnerships team is ready to create a bespoke opportunity
            tailored to your brand's ambitions.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 mb-24">

          {/* Left: Contact info */}
          <div className="lg:col-span-2">
            <div className="reveal space-y-8">
              <div>
                <p
                  className="font-semibold mb-6"
                  style={{ fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}
                >
                  How can we help?
                </p>
                <div className="space-y-4">
                  {[
                    { label: 'Retail & Luxury Leasing', href: 'mailto:leasing@thedubaimall.com' },
                    { label: 'Events & Activations', href: 'mailto:events@thedubaimall.com' },
                    { label: 'Sponsorship Partnerships', href: 'mailto:sponsorship@thedubaimall.com' },
                    { label: 'F&B Concepts', href: 'mailto:fnb@thedubaimall.com' },
                    { label: 'Pop-Up & Concept Spaces', href: 'mailto:leasing@thedubaimall.com' },
                  ].map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center justify-between p-4 group transition-all duration-300"
                      style={{
                        border: '1px solid rgba(255,255,255,0.07)',
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '13px',
                      }}
                    >
                      <span className="group-hover:text-white transition-colors duration-300">{item.label}</span>
                      <ArrowRight
                        size={14}
                        style={{ color: 'var(--gold)', transform: 'translateX(0)', transition: 'transform 0.3s ease' }}
                        className="group-hover:translate-x-1"
                      />
                    </a>
                  ))}
                </div>
              </div>

              <div className="space-y-5 pt-4">
                {[
                  { icon: <Phone size={14} />, label: '+971 4 362 7500' },
                  { icon: <Mail size={14} />, label: 'partnerships@thedubaimall.com' },
                  { icon: <MapPin size={14} />, label: 'Financial Centre Rd, Downtown Dubai, UAE' },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 flex-shrink-0 flex items-center justify-center mt-0.5"
                      style={{ background: 'rgba(201,169,110,0.08)', border: '1px solid rgba(201,169,110,0.2)', color: 'var(--gold)' }}
                    >
                      {item.icon}
                    </div>
                    <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)', paddingTop: '6px' }}>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3 reveal-right delay-200">
            {submitted ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center p-12"
                style={{ border: '1px solid rgba(201,169,110,0.25)', background: 'rgba(201,169,110,0.04)', minHeight: '400px' }}
              >
                <div
                  className="w-14 h-14 flex items-center justify-center mb-6"
                  style={{ border: '1px solid var(--gold)', color: 'var(--gold)' }}
                >
                  <Send size={20} />
                </div>
                <h3 className="font-bold mb-3" style={{ fontSize: '22px', color: 'var(--white)' }}>
                  Message Received
                </h3>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.5)', fontWeight: 300 }}>
                  Our partnerships team will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                  <div>
                    <label style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                      Company
                    </label>
                    <input
                      required
                      type="text"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      style={inputStyle}
                      onFocus={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                      onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                    />
                  </div>
                </div>
                <div>
                  <label style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <div>
                  <label style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Area of Interest
                  </label>
                  <select
                    required
                    value={form.interest}
                    onChange={(e) => setForm({ ...form, interest: e.target.value })}
                    style={{ ...inputStyle, appearance: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  >
                    <option value="" style={{ background: '#111' }}>Select an option...</option>
                    <option value="luxury" style={{ background: '#111' }}>Luxury / Fashion Avenue Leasing</option>
                    <option value="retail" style={{ background: '#111' }}>Flagship Retail Leasing</option>
                    <option value="fnb" style={{ background: '#111' }}>F&B Concept</option>
                    <option value="popup" style={{ background: '#111' }}>Pop-Up / Activation Space</option>
                    <option value="events" style={{ background: '#111' }}>Events & Activations</option>
                    <option value="sponsorship" style={{ background: '#111' }}>Sponsorship Partnership</option>
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: '10px', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.15em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                    onFocus={(e) => (e.target.style.borderColor = 'rgba(201,169,110,0.5)')}
                    onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
                  />
                </div>
                <button
                  type="submit"
                  className="btn-gold-fill w-full flex items-center justify-center gap-3"
                >
                  Send Enquiry <Send size={14} />
                </button>
                <p
                  style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)', textAlign: 'center' }}
                >
                  Your information is kept strictly confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          background: 'rgba(255,255,255,0.02)',
          borderTop: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 py-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <span
                className="font-bold tracking-widest uppercase"
                style={{ color: 'var(--gold)', letterSpacing: '0.25em', fontSize: '13px' }}
              >
                The Dubai Mall
              </span>
              <span
                className="ml-4"
                style={{ fontSize: '11px', color: 'rgba(255,255,255,0.25)' }}
              >
                A Emaar Malls Destination
              </span>
            </div>
            <p style={{ fontSize: '11px', color: 'rgba(255,255,255,0.2)' }}>
              © {new Date().getFullYear()} The Dubai Mall. All rights reserved.
            </p>
            <div className="flex gap-6">
              {['Leasing', 'Events', 'Sponsorship', 'Media'].map((link) => (
                <button
                  key={link}
                  onClick={() => document.getElementById(link.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ fontSize: '11px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
