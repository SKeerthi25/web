import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  GraduationCap, 
  Store, 
  HeartPulse, 
  Hammer, 
  Briefcase, 
  Layers, 
  CheckCircle2, 
  ArrowRight,
  FileText,
  Package
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { INDUSTRIES } from '../data/industries';

interface IndustriesProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const Industries: React.FC<IndustriesProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEOHead 
        title="Industries We Serve | Sector Technology Supply" 
        description="Factual hardware and software supply tailored to Corporate Offices, Education, Retail, Healthcare Admin, Construction, and Professional Services across the UK."
      />

      {/* Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">UK Commercial Sectors</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Industries <span className="text-gradient">We Serve</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Supplying dependable computing hardware, peripherals, and software solutions aligned with the practical operational demands of key UK industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Cards Grid */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {INDUSTRIES.map((ind) => (
              <div 
                key={ind.id}
                id={ind.slug}
                className="card"
                style={{
                  padding: '2.5rem',
                  border: '1px solid var(--border-medium)',
                  background: 'var(--bg-surface)'
                }}
              >
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Building2 size={22} color="var(--accent-sky)" />
                    </div>
                    <div>
                      <h2 style={{ fontSize: '1.5rem', color: 'var(--text-white)', margin: 0 }}>
                        {ind.name}
                      </h2>
                      <div style={{ fontSize: '0.85rem', color: 'var(--accent-sky)' }}>
                        {ind.headline}
                      </div>
                    </div>
                  </div>

                  <button 
                    type="button" 
                    className="btn btn-outline-cyan btn-sm"
                    onClick={() => onOpenQuoteModal(ind.name, 'Industry Package')}
                  >
                    <FileText size={14} /> Request Sector Quote
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                  {/* Overview & Challenges */}
                  <div>
                    <h4 style={{ color: 'var(--text-white)', marginBottom: '0.75rem' }}>Operational Demands</h4>
                    <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                      {ind.description}
                    </p>

                    <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '0.5rem' }}>
                      Key Operational Challenges
                    </h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                      {ind.keyChallenges.map((ch, i) => (
                        <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                          <span style={{ color: 'var(--accent-sky)', fontWeight: 700 }}>•</span>
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions & Recommended Hardware */}
                  <div style={{ background: '#090E1A', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '0.75rem' }}>
                      How Yasodh Ltd Supports This Sector
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      {ind.technologySolutions.map((sol, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.85rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={15} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{sol}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Package size={13} /> Recommended Hardware Models
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        {ind.recommendedHardware.map((hw, i) => (
                          <div key={i} style={{ fontSize: '0.8125rem', color: 'var(--text-white)', padding: '0.4rem 0.6rem', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '4px' }}>
                            {hw}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
