import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Truck, 
  Layers, 
  ShieldCheck, 
  Search, 
  MessageSquare, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Clock,
  Building
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SERVICES } from '../data/services';

interface ServicesProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEOHead 
        title="Services & Supply Capabilities | Yasodh Ltd" 
        description="Wholesale IT hardware supply, peripheral distribution, volume software licensing, and custom device sourcing across the UK."
      />

      {/* Services Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Wholesale Operations &amp; Sourcing</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Services &amp; <span className="text-gradient">Supply Capabilities</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Dedicated B2B procurement, direct hardware supply, and commercial technology services designed for UK businesses and institutions.
            </p>
          </div>
        </div>
      </section>

      {/* Scope Disclaimer / Clarity Notice */}
      <section style={{ background: '#070B14', borderBottom: '1px solid var(--border-subtle)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            <span className="badge badge-stock" style={{ flexShrink: 0 }}>Verified Scope</span>
            <span>
              <strong>Primary Wholesale Operations:</strong> Under UK SIC 46510, Yasodh Ltd specializes in physical technology supply and authorized volume licensing. Bespoke sourcing and consultation are offered as specialized procurement support services.
            </span>
          </div>
        </div>
      </section>

      {/* Services Breakdown */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {SERVICES.map((srv, index) => (
              <div 
                key={srv.id}
                id={srv.slug}
                className="card"
                style={{
                  padding: '2.5rem',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-surface)'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Truck size={22} color="var(--accent-sky)" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-sky)', fontWeight: 700 }}>
                        {srv.category} Service
                      </span>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-white)', margin: 0 }}>
                        {srv.title}
                      </h2>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-primary btn-sm"
                    onClick={() => onOpenQuoteModal(srv.title, srv.category)}
                  >
                    <FileText size={14} /> Enquire About Service
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                  <div>
                    <h4 style={{ color: 'var(--text-white)', marginBottom: '0.75rem' }}>Overview</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                      {srv.description}
                    </p>

                    <h4 style={{ color: 'var(--text-white)', marginBottom: '0.75rem' }}>Service Deliverables</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {srv.deliverables.map((item, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={16} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process Steps */}
                  <div style={{ background: '#090E1A', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.75rem' }}>
                    <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '1rem' }}>
                      Standard Engagement Process
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {srv.process.map((step) => (
                        <div key={step.step} style={{ display: 'flex', gap: '0.875rem' }}>
                          <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(56, 189, 248, 0.15)', color: 'var(--accent-sky)', fontWeight: 700, fontSize: '0.8125rem', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                            {step.step}
                          </div>
                          <div>
                            <div style={{ fontWeight: 600, color: 'var(--text-white)', fontSize: '0.875rem' }}>{step.title}</div>
                            <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{step.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Contact Banner */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Ready to Discuss Trade Procurement?</h2>
            <p style={{ marginBottom: '2rem' }}>
              Connect with our Swindon trade desk for account onboarding, credit applications, and volume quotations.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Procurement Desk
              </Link>
              <Link to="/quote" className="btn btn-secondary">
                Request a Formal Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
