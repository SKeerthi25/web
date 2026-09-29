import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  MapPin, 
  FileText, 
  CheckCircle2, 
  Target, 
  Compass, 
  Shield, 
  Truck, 
  Layers, 
  Phone, 
  Mail,
  ArrowRight
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export const About: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="About Us | Factual UK Technology Wholesaler"
        description="Learn about Yasodh Ltd (Company No: 17485685), a dedicated UK technology wholesaler registered under SIC 46510 supplying computers, peripherals, and software from Swindon."
      />

      {/* Hero Header */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Company Profile &amp; Incorporation</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              About <span className="text-gradient">Yasodh Ltd</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              A dedicated UK technology wholesaler supplying commercial computers, computer peripheral equipment, and software solutions under UK SIC 46510.
            </p>
          </div>
        </div>
      </section>

      {/* Company Introduction & Verified Credentials */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
            <div>
              <h2 style={{ marginBottom: '1.25rem', fontSize: '1.85rem' }}>
                Corporate Background &amp; Focus
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                <strong>Yasodh Ltd</strong> is an active private limited company incorporated in the United Kingdom under Companies House Registration Number <strong>{COMPANY_INFO.companyNumber}</strong>.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Our officially registered Nature of Business classification is <strong>{COMPANY_INFO.businessType}</strong>. We operate exclusively as a business-to-business (B2B) trade partner, bridging high-demand commercial organisations, educational institutions, IT resellers, and public bodies with dependable technology hardware.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2rem' }}>
                Operating from our business address at <strong>{COMPANY_INFO.address.line1}, {COMPANY_INFO.address.town}, {COMPANY_INFO.address.postcode}</strong>, we ensure transparent transactions, standardized trade invoices, and structured consignment logistics across the United Kingdom.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link to="/products" className="btn btn-primary">
                  Explore Product Catalogue
                </Link>
                <Link to="/quote" className="btn btn-secondary">
                  Request Trade Quotation
                </Link>
              </div>
            </div>

            {/* Factual Credential Card */}
            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '2.25rem', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1rem' }}>
                <ShieldCheck size={28} color="var(--accent-sky)" />
                <div>
                  <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--text-white)' }}>
                    Statutory Company Information
                  </h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    Companies House &amp; HMRC Registered
                  </span>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '0.9rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Company Legal Name</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '1rem' }}>{COMPANY_INFO.name}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Company Registration Number</span>
                  <span style={{ color: 'var(--accent-sky)', fontWeight: 700, fontSize: '1.1rem' }}>{COMPANY_INFO.companyNumber}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Standard Industrial Classification (SIC)</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500 }}>{COMPANY_INFO.businessType}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Company Director</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{COMPANY_INFO.director.fullName}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Trading &amp; Registered Address</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500 }}>
                    {COMPANY_INFO.address.fullFormatted}
                  </span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Registered Email</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500 }}>{COMPANY_INFO.email.primary}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase' }}>Corporate Domain Email (Planned)</span>
                  <span style={{ color: 'var(--accent-sky)', fontWeight: 500 }}>{COMPANY_INFO.email.planned}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Officers & Verified Governance (Companies House UK Record) */}
      <section className="section" style={{ background: '#090F1E', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Companies House Verified Officer</div>
            <h2 className="section-title">Corporate Leadership &amp; Officers</h2>
            <p className="section-subtitle">
              Public statutory leadership registered and verified with Companies House, the Executive Agency of the UK Government.
            </p>
          </div>

          <div style={{ maxWidth: '820px', margin: '0 auto' }}>
            <div className="officer-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.25rem' }}>
                    <h3 style={{ fontSize: '1.45rem', margin: 0, color: 'var(--text-white)' }}>
                      {COMPANY_INFO.director.fullName}
                    </h3>
                    <span className="officer-badge-active">
                      ● Active
                    </span>
                  </div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                    Companies House Listing: <strong style={{ color: 'var(--accent-sky)' }}>{COMPANY_INFO.director.officialListing}</strong>
                  </div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '0.5rem 0.85rem', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-subtle)' }}>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Statutory Count</div>
                  <div style={{ fontSize: '0.85rem', color: 'var(--text-white)', fontWeight: 600 }}>{COMPANY_INFO.director.officerCount}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.35rem', marginBottom: '1.5rem' }}>
                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Role</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{COMPANY_INFO.director.role}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Appointed On</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{COMPANY_INFO.director.appointedOn}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Date of Birth</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{COMPANY_INFO.director.dateOfBirth}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Nationality</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{COMPANY_INFO.director.nationality}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Country of Residence</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600, fontSize: '0.95rem' }}>{COMPANY_INFO.director.residence}</span>
                </div>

                <div>
                  <span style={{ color: 'var(--text-muted)', display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', marginBottom: '0.2rem' }}>Correspondence Address</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500, fontSize: '0.875rem', lineHeight: 1.4, display: 'block' }}>
                    {COMPANY_INFO.director.correspondenceAddress}
                  </span>
                </div>
              </div>

              {/* Identity verification status box */}
              <div className="officer-verified-box">
                <CheckCircle2 size={20} color="#10B981" />
                <div style={{ fontSize: '0.875rem' }}>
                  <strong style={{ color: '#10B981' }}>Identity Verification Status: </strong>
                  <span style={{ color: 'var(--text-white)' }}>{COMPANY_INFO.director.identityVerification}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="grid-2">
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Target size={26} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our Mission</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                To provide UK commercial enterprises, educational bodies, and technology resellers with reliable wholesale access to authentic computing hardware, peripherals, and software, backed by straightforward communication and prompt fulfillment.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Compass size={26} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem' }}>Our Vision</h3>
              <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                To be recognized across the United Kingdom as an established, trustworthy B2B technology supply partner known for operational integrity, transparent wholesale terms, and dependable logistics execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Operational Principles</div>
            <h2 className="section-title">Our Core Values</h2>
            <p className="section-subtitle">
              The foundational principles guiding every commercial quotation and consignment delivery.
            </p>
          </div>

          <div className="grid-4">
            <div className="card">
              <h4 style={{ color: 'var(--accent-sky)', marginBottom: '0.5rem' }}>Factual Transparency</h4>
              <p style={{ fontSize: '0.85rem' }}>
                We uphold strict truth in commerce. No fabricated certifications, no artificial inflated claims—only verified specifications and genuine commercial terms.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: 'var(--accent-sky)', marginBottom: '0.5rem' }}>Supply Reliability</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Delivering exact component models, identical batch revisions, and on-schedule consignment dispatch from our Swindon distribution hub.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: 'var(--accent-sky)', marginBottom: '0.5rem' }}>Commercial Value</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Providing tiered volume pricing that reflects genuine wholesale advantages for rollouts of 10, 50, or hundreds of hardware units.
              </p>
            </div>

            <div className="card">
              <h4 style={{ color: 'var(--accent-sky)', marginBottom: '0.5rem' }}>Responsive Communication</h4>
              <p style={{ fontSize: '0.85rem' }}>
                Prompt quotation turnaround times, clear order status tracking, and direct telephone and electronic communication during UK business hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Business Scope</div>
            <h2 className="section-title">What We Do</h2>
            <p className="section-subtitle">
              Specialized wholesale activities under our registered business classification.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-sky)" />
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Computer &amp; System Wholesale</h3>
              </div>
              <p style={{ fontSize: '0.875rem' }}>
                Supplying bulk fleets of commercial laptops, Small Form Factor (SFF) office desktops, and high-performance engineering workstations.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-sky)" />
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Peripherals &amp; Displays</h3>
              </div>
              <p style={{ fontSize: '0.875rem' }}>
                Supplying master cartons of commercial keyboards, optical mice, ergonomic 4K/QHD monitors, and Thunderbolt 4 docking stations.
              </p>
            </div>

            <div className="card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.75rem' }}>
                <CheckCircle2 size={18} color="var(--accent-sky)" />
                <h3 style={{ fontSize: '1.15rem', margin: 0 }}>Software &amp; Licensing</h3>
              </div>
              <p style={{ fontSize: '0.875rem' }}>
                Distributing genuine volume electronic software licenses, operating systems, and productivity packages with documented audit compliance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* UK Business Presence */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
            <div>
              <div className="section-badge">Strategic UK Location</div>
              <h2 className="section-title">Swindon Logistics &amp; Operations</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
                Our operations in Swindon, Wiltshire position Yasodh Ltd directly alongside key UK arterial transport routes including the M4 corridor.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                This strategic positioning facilitates rapid freight distribution across London, the Thames Valley, the South West, Midlands, and national freight hubs.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <MapPin size={18} color="var(--accent-sky)" />
                  <span style={{ fontSize: '0.9rem' }}>1 Bessemer Rd West, Swindon, SN2 1ND, United Kingdom</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Phone size={18} color="var(--accent-sky)" />
                  <span style={{ fontSize: '0.9rem' }}>+44 7407 642396</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Mail size={18} color="var(--accent-sky)" />
                  <span style={{ fontSize: '0.9rem' }}>yasodhltd2026@gmail.com</span>
                </div>
              </div>

              <Link to="/contact" className="btn btn-primary">
                Contact Swindon Desk
              </Link>
            </div>

            <div style={{ background: '#0B1120', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '2rem' }}>
              <h4 style={{ color: 'var(--text-white)', marginBottom: '1rem' }}>Operating Hours</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span>Monday – Friday:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>09:00 – 18:00 GMT</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span>Saturday – Sunday:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>10:00 – 16:00 GMT</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Online Quote Portal:</span>
                  <span style={{ color: 'var(--accent-sky)', fontWeight: 600 }}>Active 24/7</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
