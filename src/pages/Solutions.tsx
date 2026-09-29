import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Network, 
  GraduationCap, 
  Store, 
  ShieldCheck, 
  RefreshCw, 
  CheckCircle2, 
  ArrowRight, 
  FileText,
  Building2,
  Package
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { SOLUTIONS } from '../data/solutions';

interface SolutionsProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const Solutions: React.FC<SolutionsProps> = ({ onOpenQuoteModal }) => {
  return (
    <>
      <SEOHead 
        title="Business Technology Solutions | Yasodh Ltd" 
        description="Comprehensive business computing, workplace hardware, educational labs, network backbones, and device lifecycle solutions from Yasodh Ltd."
      />

      {/* Solutions Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '820px' }}>
            <div className="section-badge">Commercial Solutions Architecture</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Business <span className="text-gradient">Technology Solutions</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Tailored hardware procurement frameworks and commercial computing solutions designed to solve IT fleet deployment challenges across UK businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions List */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
            {SOLUTIONS.map((solution, index) => (
              <div 
                key={solution.id}
                id={solution.slug}
                className="card"
                style={{
                  padding: '2.5rem',
                  background: 'var(--bg-surface-elevated)',
                  border: '1px solid var(--border-medium)',
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                  gap: '2.5rem',
                  alignItems: 'center'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Laptop size={22} color="var(--accent-sky)" />
                    </div>
                    <div>
                      <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sky)', fontWeight: 700 }}>
                        Solution #{index + 1}
                      </span>
                      <h2 style={{ fontSize: '1.65rem', margin: 0, color: 'var(--text-white)' }}>
                        {solution.title}
                      </h2>
                    </div>
                  </div>

                  <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                    {solution.description}
                  </p>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                      Operational Benefits
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {solution.benefits.map((b, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-primary)' }}>
                          <CheckCircle2 size={16} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    <button 
                      type="button" 
                      className="btn btn-primary"
                      onClick={() => onOpenQuoteModal(solution.title, 'Solutions Package')}
                    >
                      <FileText size={16} />
                      <span>Request Solution Quote</span>
                    </button>
                    <Link to="/contact" className="btn btn-secondary">
                      Discuss Requirements
                    </Link>
                  </div>
                </div>

                {/* Right Column: Hardware Bundle & Target Sectors */}
                <div style={{ background: '#090E1A', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '1.75rem' }}>
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Package size={14} /> Recommended Hardware Bundle
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                      {solution.suggestedHardware.map((hw, i) => (
                        <div key={i} style={{ padding: '0.6rem 0.85rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: '4px', fontSize: '0.85rem', color: 'var(--text-white)' }}>
                          {hw}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <Building2 size={14} /> Suitable Sectors
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                      {solution.targetSectors.map((sector, i) => (
                        <span key={i} style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)' }}>
                          {sector}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions CTA */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '640px', margin: '0 auto' }}>
            <h2 style={{ marginBottom: '1rem' }}>Need a Customised Hardware Package?</h2>
            <p style={{ marginBottom: '2rem' }}>
              Our procurement team can assemble a bespoke bill of materials combining systems, displays, docking, and accessories tailored to your exact deployment roadmap.
            </p>
            <button 
              type="button" 
              className="btn btn-primary btn-lg"
              onClick={() => onOpenQuoteModal()}
            >
              Request Custom Package Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
