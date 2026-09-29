import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Shield, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/company';

interface FooterProps {
  onOpenCookieSettings?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenCookieSettings }) => {
  return (
    <footer style={{ background: '#050811', borderTop: '1px solid var(--border-subtle)', paddingTop: '4.5rem', paddingBottom: '2.5rem', marginTop: 'auto' }}>
      <div className="container">
        {/* Top Tier: Company info & NAP */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '3rem', marginBottom: '3.5rem' }}>
          {/* Column 1: Brand & Incorporation */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Logo />
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Yasodh Ltd is an established UK technology wholesaler specialising in business computers, peripherals, networking infrastructure, and commercial software solutions under SIC 46510.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={15} color="var(--accent-sky)" />
                <span>UK Company Registered No: <strong>{COMPANY_INFO.companyNumber}</strong></span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={15} color="var(--accent-sky)" />
                <span>SIC Classification: <strong>{COMPANY_INFO.sicCode}</strong></span>
              </div>
            </div>
          </div>

          {/* Column 2: Products Catalogue */}
          <div>
            <h4 style={{ color: 'var(--text-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Products Catalogue
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li><Link to="/products?category=laptops" className="nav-link" style={{ padding: 0 }}>Business Laptops & Ultrabooks</Link></li>
              <li><Link to="/products?category=desktops" className="nav-link" style={{ padding: 0 }}>Workstation & SFF Desktops</Link></li>
              <li><Link to="/products?category=monitors" className="nav-link" style={{ padding: 0 }}>Commercial IPS Monitors</Link></li>
              <li><Link to="/products?category=networking" className="nav-link" style={{ padding: 0 }}>Managed PoE Switches & Routers</Link></li>
              <li><Link to="/products?category=storage" className="nav-link" style={{ padding: 0 }}>Enterprise NVMe & Server Storage</Link></li>
              <li><Link to="/products?category=peripherals" className="nav-link" style={{ padding: 0 }}>Office Peripherals & Input Bundles</Link></li>
              <li><Link to="/products?category=software" className="nav-link" style={{ padding: 0 }}>Volume OS & Software Licensing</Link></li>
            </ul>
          </div>

          {/* Column 3: Solutions & Services */}
          <div>
            <h4 style={{ color: 'var(--text-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Solutions & Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.625rem', fontSize: '0.875rem' }}>
              <li><Link to="/solutions" className="nav-link" style={{ padding: 0 }}>Workplace Hybrid Computing</Link></li>
              <li><Link to="/solutions" className="nav-link" style={{ padding: 0 }}>IT Infrastructure Backbone</Link></li>
              <li><Link to="/solutions" className="nav-link" style={{ padding: 0 }}>Educational Computer Labs</Link></li>
              <li><Link to="/services" className="nav-link" style={{ padding: 0 }}>Technology Procurement & Sourcing</Link></li>
              <li><Link to="/services" className="nav-link" style={{ padding: 0 }}>Wholesale IT Hardware Supply</Link></li>
              <li><Link to="/industries" className="nav-link" style={{ padding: 0 }}>Industries & Sectors</Link></li>
              <li><Link to="/quote" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>Request a Formal Quote →</Link></li>
            </ul>
          </div>

          {/* Column 4: Contact & Operations */}
          <div>
            <h4 style={{ color: 'var(--text-white)', fontSize: '0.9375rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.25rem' }}>
              Swindon Operations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={18} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>
                  <strong>{COMPANY_INFO.name}</strong><br />
                  {COMPANY_INFO.address.line1}<br />
                  {COMPANY_INFO.address.town}, {COMPANY_INFO.address.postcode}<br />
                  {COMPANY_INFO.address.country}
                </span>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={18} color="var(--accent-sky)" style={{ flexShrink: 0 }} />
                <a href={`tel:${COMPANY_INFO.phone.international}`} style={{ color: 'var(--text-white)', fontWeight: 600 }}>
                  {COMPANY_INFO.phone.display}
                </a>
              </div>

              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={18} color="var(--accent-sky)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${COMPANY_INFO.email.primary}`} style={{ color: 'var(--text-primary)' }}>
                  {COMPANY_INFO.email.primary}
                </a>
              </div>

              <div style={{ marginTop: '0.5rem', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '6px', border: '1px solid var(--border-subtle)', fontSize: '0.8125rem' }}>
                <div style={{ color: 'var(--text-muted)' }}>Corporate Mailbox (Planned):</div>
                <div style={{ color: 'var(--accent-sky)', fontWeight: 500 }}>{COMPANY_INFO.email.planned}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Tier: Trust verification bar */}
        <div style={{ padding: '1.25rem 1.5rem', background: 'rgba(15, 23, 42, 0.6)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <Shield size={16} color="var(--accent-sky)" />
            <span>Companies House UK No. <strong>{COMPANY_INFO.companyNumber}</strong> • Director: <strong>{COMPANY_INFO.director.fullName}</strong></span>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            <span>Officer Status: <strong style={{ color: '#10B981' }}>Active (Verified)</strong></span>
            <span>Operating Hours: <strong>Mon – Fri 09:00 – 18:00 | Sat – Sun 10:00 – 16:00 GMT</strong></span>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div style={{ paddingTop: '1.5rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.25rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
          <div>
            © 2026 {COMPANY_INFO.name}. All rights reserved. Registered in England &amp; Wales.
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.25rem' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--text-secondary)' }}>Privacy Policy</Link>
            <Link to="/cookie-policy" style={{ color: 'var(--text-secondary)' }}>Cookie Policy</Link>
            <Link to="/terms" style={{ color: 'var(--text-secondary)' }}>Terms &amp; Conditions</Link>
            <Link to="/disclaimer" style={{ color: 'var(--text-secondary)' }}>Website Disclaimer</Link>
            {onOpenCookieSettings && (
              <button 
                type="button" 
                onClick={onOpenCookieSettings} 
                style={{ background: 'transparent', border: 'none', color: 'var(--accent-sky)', cursor: 'pointer', fontSize: '0.8125rem' }}
              >
                Cookie Settings
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};
