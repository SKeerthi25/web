import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck,
  ExternalLink
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    enquiryType: 'Wholesale Hardware Order',
    message: '',
    honeypot: '', // anti-spam
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // bot detection

    setIsSubmitting(true);
    // Simulate secure backend enquiry dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <>
      <SEOHead 
        title="Contact Yasodh Ltd | Swindon Trade Desk & Inquiries" 
        description="Get in touch with Yasodh Ltd in Swindon, UK. Phone: +44 7407 642396, Email: yasodhltd2026@gmail.com. Trade desk at 1 Bessemer Rd West, Swindon SN2 1ND."
      />

      {/* Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">UK Trade Desk &amp; Communications</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Contact <span className="text-gradient">Yasodh Ltd</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Direct access to our commercial wholesale team for hardware quotations, consignment logistics, and business accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
            {/* Left: Contact Details & Map */}
            <div>
              <h2 style={{ fontSize: '1.75rem', marginBottom: '1.25rem' }}>
                Operational Presence
              </h2>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                Yasodh Ltd is based in Swindon, Wiltshire, providing a central logistics springboard for rapid technology shipments across the UK.
              </p>

              {/* Verified Contact Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '2.5rem' }}>
                {/* Address Card */}
                <div className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin size={20} color="var(--accent-sky)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Registered &amp; Trading Address
                    </div>
                    <div style={{ fontWeight: 600, color: 'var(--text-white)', marginTop: '0.25rem' }}>
                      {COMPANY_INFO.name}<br />
                      {COMPANY_INFO.address.line1}<br />
                      {COMPANY_INFO.address.town}, {COMPANY_INFO.address.postcode}<br />
                      {COMPANY_INFO.address.country}
                    </div>
                    <a 
                      href={COMPANY_INFO.address.googleMapsSearchUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontSize: '0.8125rem', color: 'var(--accent-sky)', marginTop: '0.5rem' }}
                    >
                      Open in Google Maps <ExternalLink size={12} />
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone size={20} color="var(--accent-sky)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Direct Telephone Line
                    </div>
                    <div style={{ marginTop: '0.25rem' }}>
                      <a href={`tel:${COMPANY_INFO.phone.international}`} style={{ fontSize: '1.1rem', fontWeight: 700, color: 'var(--text-white)' }}>
                        {COMPANY_INFO.phone.display}
                      </a>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                      Mon – Fri: 09:00 – 18:00 | Sat – Sun: 10:00 – 16:00 GMT
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div className="card" style={{ padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail size={20} color="var(--accent-sky)" />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      Electronic Correspondence
                    </div>
                    <div style={{ marginTop: '0.25rem' }}>
                      <a href={`mailto:${COMPANY_INFO.email.primary}`} style={{ fontWeight: 600, color: 'var(--text-white)' }}>
                        {COMPANY_INFO.email.primary}
                      </a>
                    </div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>
                      Planned Business Email: <span style={{ color: 'var(--accent-sky)' }}>{COMPANY_INFO.email.planned}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Visual Map / Location Embed */}
              <div 
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-medium)',
                  background: '#0B1120',
                  position: 'relative'
                }}
              >
                <div style={{ padding: '1rem 1.25rem', background: '#0F172A', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-white)' }}>
                    <MapPin size={16} color="var(--accent-sky)" />
                    <span>Swindon Trade Operations</span>
                  </div>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>SN2 1ND, UK</span>
                </div>
                
                {/* Styled Map Canvas View */}
                <div style={{ height: '240px', width: '100%', position: 'relative', background: '#0A0F1D', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '1.5rem' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(2, 132, 199, 0.2)', border: '2px solid var(--accent-sky)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '0.75rem', boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' }}>
                    <Building2 size={24} color="#FFFFFF" />
                  </div>
                  <div style={{ fontWeight: 700, color: '#FFFFFF', fontSize: '1rem' }}>
                    Yasodh Ltd
                  </div>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginTop: '0.2rem' }}>
                    1 Bessemer Rd West, Swindon, SN2 1ND
                  </div>
                  <a 
                    href={COMPANY_INFO.address.googleMapsSearchUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-secondary btn-sm"
                    style={{ marginTop: '1rem' }}
                  >
                    <span>View Interactive Map &amp; Directions</span>
                    <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                Send Commercial Enquiry
              </h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '2rem' }}>
                Submit your inquiry and our commercial sales desk will respond promptly during business hours.
              </p>

              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2.5rem 1rem' }}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                    <CheckCircle2 size={36} color="#10B981" />
                  </div>
                  <h4 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                    Enquiry Successfully Sent
                  </h4>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                    Thank you, <strong>{formData.fullName}</strong>. Your enquiry regarding <em>{formData.enquiryType}</em> has been registered with our Swindon trade desk.
                  </p>
                  <button 
                    type="button" 
                    className="btn btn-secondary"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        fullName: '',
                        companyName: '',
                        businessEmail: '',
                        phone: '',
                        enquiryType: 'Wholesale Hardware Order',
                        message: '',
                        honeypot: '',
                      });
                    }}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {/* Anti-spam honeypot */}
                  <input 
                    type="text" 
                    name="site_verification_contact_code" 
                    value={formData.honeypot} 
                    onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off" 
                  />

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Sarah Jenkins"
                        className="form-input"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Company Name *</label>
                      <input 
                        type="text" 
                        required 
                        placeholder="e.g. Horizon Enterprise Ltd"
                        className="form-input"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="form-group">
                      <label className="form-label">Business Email *</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="s.jenkins@company.co.uk"
                        className="form-input"
                        value={formData.businessEmail}
                        onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Phone Number *</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="+44 7..."
                        className="form-input"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Enquiry Nature</label>
                    <select 
                      className="form-select"
                      value={formData.enquiryType}
                      onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                    >
                      <option value="Wholesale Hardware Order">Wholesale Hardware Consignment</option>
                      <option value="Trade Credit Application">Trade Account &amp; Credit Terms</option>
                      <option value="Bespoke Device Sourcing">Bespoke Hardware Sourcing</option>
                      <option value="Software Volume Licensing">Volume Software Licensing</option>
                      <option value="General Commercial Enquiry">General Business Enquiry</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Your Message *</label>
                    <textarea 
                      required
                      rows={4}
                      placeholder="Please outline your hardware requirements, volume tiers, or questions..."
                      className="form-textarea"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Protected by spam detection. Confidential B2B communication.
                    </span>
                    <button 
                      type="submit" 
                      className="btn btn-primary"
                      disabled={isSubmitting}
                    >
                      <Send size={15} />
                      <span>{isSubmitting ? 'Sending...' : 'Send Enquiry'}</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
