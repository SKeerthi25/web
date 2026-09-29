import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  Laptop, 
  Monitor, 
  Server, 
  HardDrive, 
  Cpu, 
  Keyboard, 
  ShieldCheck, 
  Network, 
  Phone, 
  Mail, 
  FileText,
  Briefcase,
  Layers,
  Building2,
  GraduationCap
} from 'lucide-react';
import { Logo } from './Logo';
import { COMPANY_INFO } from '../data/company';

interface HeaderProps {
  onOpenQuoteModal?: (productName?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<'products' | 'solutions' | 'services' | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveMega(null);
  }, [location.pathname]);

  return (
    <header className={`header-sticky ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="container" style={{ height: '100%' }}>
        <div className="header-inner">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="nav-desktop" style={{ display: 'none' }} id="desktop-nav">
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
            >
              Home
            </Link>

            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              About
            </Link>

            {/* Products Mega Dropdown */}
            <div 
              className="nav-dropdown-item"
              onMouseEnter={() => setActiveMega('products')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link 
                to="/products" 
                className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Products <ChevronDown size={14} />
              </Link>

              {activeMega === 'products' && (
                <div className="mega-menu" style={{ minWidth: '720px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '0.75rem' }}>
                        Systems & Displays
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <Link to="/products?category=laptops" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Laptop size={16} color="var(--accent-sky)" /> Business Laptops
                        </Link>
                        <Link to="/products?category=desktops" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Server size={16} color="var(--accent-sky)" /> Desktop Workstations
`                        </Link>
                        <Link to="/products?category=monitors" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Monitor size={16} color="var(--accent-sky)" /> Commercial Monitors
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '0.75rem' }}>
                        Infrastructure & Parts
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <Link to="/products?category=networking" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Network size={16} color="var(--accent-sky)" /> Managed Networking
                        </Link>
                        <Link to="/products?category=storage" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <HardDrive size={16} color="var(--accent-sky)" /> Enterprise Storage
                        </Link>
                        <Link to="/products?category=components" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Cpu size={16} color="var(--accent-sky)" /> Processors & RAM
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '0.75rem' }}>
                        Peripherals & Software
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                        <Link to="/products?category=peripherals" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Keyboard size={16} color="var(--accent-sky)" /> Office Peripherals
                        </Link>
                        <Link to="/products?category=software" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <ShieldCheck size={16} color="var(--accent-sky)" /> Volume Software
                        </Link>
                        <Link to="/products?category=accessories" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.4rem 0' }}>
                          <Layers size={16} color="var(--accent-sky)" /> Docks & Adapters
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div style={{ marginTop: '1.25rem', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                      Wholesale B2B supply under UK SIC 46510
                    </span>
                    <Link to="/products" style={{ fontSize: '0.85rem', color: 'var(--accent-sky)', fontWeight: 600 }}>
                      View Full Product Catalogue →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div 
              className="nav-dropdown-item"
              onMouseEnter={() => setActiveMega('solutions')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link 
                to="/solutions" 
                className={`nav-link ${location.pathname.startsWith('/solutions') ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Solutions <ChevronDown size={14} />
              </Link>

              {activeMega === 'solutions' && (
                <div className="mega-menu" style={{ minWidth: '600px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.25rem' }}>
                    <Link to="/solutions" className="card" style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', display: 'block' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <Laptop size={18} color="var(--accent-sky)" />
                        <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Workplace Computing</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', margin: 0 }}>Standardised business laptop & desktop fleets with matching docks.</p>
                    </Link>

                    <Link to="/solutions" className="card" style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', display: 'block' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <Network size={18} color="var(--accent-sky)" />
                        <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>IT Infrastructure</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', margin: 0 }}>Managed PoE switches, enterprise server SSDs, and rack hardware.</p>
                    </Link>

                    <Link to="/solutions" className="card" style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', display: 'block' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <GraduationCap size={18} color="var(--accent-sky)" />
                        <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Educational IT Labs</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', margin: 0 }}>Durable, cost-effective computing suites for schools and colleges.</p>
                    </Link>

                    <Link to="/solutions" className="card" style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', display: 'block' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                        <ShieldCheck size={18} color="var(--accent-sky)" />
                        <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Software & Compliance</span>
                      </div>
                      <p style={{ fontSize: '0.8125rem', margin: 0 }}>Genuine volume OS and commercial licenses with audit trails.</p>
                    </Link>
                  </div>
                  <div style={{ marginTop: '1rem', textAlign: 'right' }}>
                    <Link to="/solutions" style={{ fontSize: '0.85rem', color: 'var(--accent-sky)', fontWeight: 600 }}>
                      Explore All Business Solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div 
              className="nav-dropdown-item"
              onMouseEnter={() => setActiveMega('services')}
              onMouseLeave={() => setActiveMega(null)}
            >
              <Link 
                to="/services" 
                className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`}
                style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
              >
                Services <ChevronDown size={14} />
              </Link>

              {activeMega === 'services' && (
                <div className="mega-menu" style={{ minWidth: '480px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <Link to="/services" className="nav-link" style={{ padding: '0.5rem' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-white)' }}>Business IT Equipment Supply</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Core volume wholesale delivery across the UK.</div>
                      </div>
                    </Link>
                    <Link to="/services" className="nav-link" style={{ padding: '0.5rem' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-white)' }}>Peripherals & Sourcing</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Carton-quantity input devices, docks, and custom components.</div>
                      </div>
                    </Link>
                    <Link to="/services" className="nav-link" style={{ padding: '0.5rem' }}>
                      <div>
                        <div style={{ fontWeight: 600, color: 'var(--text-white)' }}>B2B Technology Consultation</div>
                        <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Objective hardware specification and compatibility advice.</div>
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/industries" 
              className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`}
            >
              Industries
            </Link>

            <Link 
              to="/resources" 
              className={`nav-link ${location.pathname.startsWith('/resources') ? 'active' : ''}`}
            >
              Resources
            </Link>

            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs & Phone */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <a 
              href={`tel:${COMPANY_INFO.phone.international}`} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'none' }}
              id="header-phone-cta"
            >
              <Phone size={14} color="var(--accent-sky)" />
              <span>{COMPANY_INFO.phone.display}</span>
            </a>

            <button 
              type="button"
              onClick={() => onOpenQuoteModal ? onOpenQuoteModal() : window.location.href = '/quote'}
              className="btn btn-primary btn-sm header-quote-btn"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
            >
              <FileText size={14} />
              <span>Request a Quote</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button 
              type="button"
              className="btn btn-secondary btn-sm"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation menu"
              style={{ display: 'inline-flex', padding: '0.55rem', minWidth: '40px', minHeight: '40px', alignItems: 'center', justifyContent: 'center' }}
              id="mobile-nav-toggle"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>



      {/* Mobile Drawer */}
      <div 
        className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div 
          className="mobile-drawer-content"
          onClick={(e) => e.stopPropagation()}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem', paddingBottom: '1rem', borderBottom: '1px solid var(--border-subtle)' }}>
            <Logo showSubtitle={false} />
            <button 
              type="button" 
              className="btn btn-secondary btn-sm" 
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
              style={{ padding: '0.45rem', minWidth: '38px', minHeight: '38px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <X size={18} />
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', marginBottom: '1.5rem' }}>
            <Link 
              to="/" 
              className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              About Yasodh
            </Link>
            <Link 
              to="/products" 
              className={`nav-link ${location.pathname.startsWith('/products') ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Products Catalogue
            </Link>
            <Link 
              to="/solutions" 
              className={`nav-link ${location.pathname.startsWith('/solutions') ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Business Solutions
            </Link>
            <Link 
              to="/services" 
              className={`nav-link ${location.pathname.startsWith('/services') ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Services &amp; Supply
            </Link>
            <Link 
              to="/industries" 
              className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Industries Served
            </Link>
            <Link 
              to="/resources" 
              className={`nav-link ${location.pathname.startsWith('/resources') ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Knowledge &amp; Guides
            </Link>
            <Link 
              to="/faq" 
              className={`nav-link ${location.pathname === '/faq' ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              B2B FAQs
            </Link>
            <Link 
              to="/contact" 
              className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} 
              style={{ fontSize: '1rem', minHeight: '44px', display: 'flex', alignItems: 'center', padding: '0.6rem 0.85rem', borderRadius: '6px' }}
            >
              Contact Us
            </Link>
          </div>

          <div style={{ marginTop: 'auto', paddingTop: '1.25rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
            <button 
              type="button"
              className="btn btn-primary btn-full"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenQuoteModal) onOpenQuoteModal();
                else window.location.href = '/quote';
              }}
            >
              <FileText size={16} /> Request Formal Quote
            </button>

            <a 
              href={`tel:${COMPANY_INFO.phone.international}`}
              className="btn btn-secondary btn-full"
            >
              <Phone size={15} color="var(--accent-sky)" /> Call {COMPANY_INFO.phone.display}
            </a>

            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
              Company No: {COMPANY_INFO.companyNumber} • SIC 46510
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
