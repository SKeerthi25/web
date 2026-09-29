import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Laptop, 
  Server, 
  Monitor, 
  Network, 
  HardDrive, 
  Cpu, 
  Keyboard, 
  ShieldCheck, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  Shield, 
  Truck, 
  Headphones, 
  FileText, 
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  Award
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { SOLUTIONS } from '../data/solutions';
import { INDUSTRIES } from '../data/industries';
import { RESOURCES } from '../data/resources';
import { COMPANY_INFO } from '../data/company';

interface HomeProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenQuoteModal }) => {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <>
      <SEOHead 
        title="Wholesale Computers, Peripherals & Software Solutions" 
        description="Yasodh Ltd (Company No: 17485685) is an established UK B2B technology wholesaler based in Swindon. Supplying enterprise computers, laptops, peripherals, networking equipment, and software."
      />

      {/* 1. HERO SECTION */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            {/* Left Content */}
            <div style={{ maxWidth: '640px' }}>
              <div className="section-badge">
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-sky)', display: 'inline-block' }} />
                <span>UK Wholesale Technology Supplier • SIC 46510</span>
              </div>

              <h1 style={{ marginBottom: '1.5rem', lineHeight: '1.15' }}>
                Powering Businesses With <span className="text-gradient">Smarter Technology</span>
              </h1>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: '1.65', marginBottom: '2.25rem' }}>
                Yasodh Ltd supplies computers, peripherals and software solutions to businesses seeking reliable technology and professional service.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
                <Link to="/products" className="btn btn-primary btn-lg">
                  <span>Explore Products</span>
                  <ArrowRight size={18} />
                </Link>
                <button 
                  type="button" 
                  onClick={() => onOpenQuoteModal()} 
                  className="btn btn-secondary btn-lg"
                >
                  <FileText size={18} color="var(--accent-sky)" />
                  <span>Request a Quote</span>
                </button>
              </div>

              {/* Quick trust metrics */}
              <div className="hero-metrics-grid" style={{ paddingTop: '1.75rem', borderTop: '1px solid var(--border-subtle)' }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', fontFamily: 'var(--font-heading)' }}>
                    46510
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    UK SIC Wholesale Code
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--accent-sky)', fontFamily: 'var(--font-heading)' }}>
                    17485685
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    UK Registered Entity
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-white)', fontFamily: 'var(--font-heading)' }}>
                    Swindon
                  </div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    Wiltshire Distribution
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div style={{ position: 'relative' }}>
              <div 
                style={{
                  position: 'relative',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-medium)',
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7), 0 0 40px -10px rgba(6, 182, 212, 0.25)',
                  background: '#0B1120'
                }}
              >
                <img 
                  src="/images/hero-tech.jpg" 
                  alt="Enterprise IT hardware showcase including modern laptops, monitors, and server infrastructure" 
                  style={{ width: '100%', height: 'auto', display: 'block', transform: 'scale(1.01)', transition: 'transform 0.6s ease' }}
                />

                {/* Overlay Floating Specs Card */}
                <div 
                  className="hero-visual-card"
                  style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '20px',
                    right: '20px',
                    background: 'rgba(9, 14, 26, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    borderRadius: 'var(--radius-sm)',
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    boxShadow: 'var(--shadow-md)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Server size={20} color="var(--accent-sky)" />
                    </div>
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-white)' }}>
                        Commercial Hardware Consignments
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                        Direct B2B quotes • Nationwide dispatch
                      </div>
                    </div>
                  </div>
                  <Link to="/products" className="btn btn-outline-cyan btn-sm">
                    View Fleet
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED TECHNOLOGY PARTNER BAR */}
      <section style={{ background: '#070B14', borderBottom: '1px solid var(--border-subtle)', padding: '2rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Building2 size={20} color="var(--accent-sky)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-white)', fontSize: '0.9375rem' }}>UK Registered Business</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Swindon, SN2 1ND, UK</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Layers size={20} color="var(--accent-sky)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-white)', fontSize: '0.9375rem' }}>Wholesale B2B Supplier</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Hardware, systems &amp; software</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Truck size={20} color="var(--accent-sky)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-white)', fontSize: '0.9375rem' }}>Consignment Delivery</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Courier &amp; palletised freight</div>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={20} color="var(--accent-sky)" />
              </div>
              <div>
                <div style={{ fontWeight: 600, color: 'var(--text-white)', fontSize: '0.9375rem' }}>Transparent B2B Supply</div>
                <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>Verified itemised invoicing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT WE SUPPLY (9 Core Categories) */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Core Hardware Categories</div>
            <h2 className="section-title">What We Supply</h2>
            <p className="section-subtitle">
              Comprehensive wholesale supply of commercial technology equipment, components, and software solutions for business requirements.
            </p>
          </div>

          <div className="grid-3">
            {/* 1. Computers & Laptops */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Laptop size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Business Laptops</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Ultra-slim corporate notebooks, rugged mobile workstations, and executive ultrabooks designed for mobile productivity.
              </p>
              <Link to="/products?category=laptops" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Laptops →
              </Link>
            </div>

            {/* 2. Desktop Systems */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Server size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Desktop Systems</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Compact Small Form Factor (SFF) office PCs, micro desktops, and expandable towers engineered for continuous operation.
              </p>
              <Link to="/products?category=desktops" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Desktops →
              </Link>
            </div>

            {/* 3. Monitors */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Monitor size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Monitors &amp; Displays</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Ergonomic IPS business monitors, QHD multi-screen setups, and commercial displays with integrated USB hubs.
              </p>
              <Link to="/products?category=monitors" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Monitors →
              </Link>
            </div>

            {/* 4. Computer Components */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Cpu size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Computer Components</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Enterprise processors, DDR4/DDR5 ECC memory modules, motherboards, and replacement power supplies.
              </p>
              <Link to="/products?category=components" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Components →
              </Link>
            </div>

            {/* 5. Storage */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <HardDrive size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Storage Solutions</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                High-endurance PCIe Gen4 NVMe solid state drives, enterprise SATA SSDs, and bulk tray drives for data pools.
              </p>
              <Link to="/products?category=storage" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Storage →
              </Link>
            </div>

            {/* 6. Networking Equipment */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Network size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Networking Equipment</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Managed 24 and 48-port Gigabit PoE+ rack switches, optical 10G SFP+ modules, and commercial routers.
              </p>
              <Link to="/products?category=networking" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Networking →
              </Link>
            </div>

            {/* 7. Computer Peripherals */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Keyboard size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Computer Peripherals</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Master-carton keyboard and mouse bundles, noise-cancelling commercial headsets, and HD webcams.
              </p>
              <Link to="/products?category=peripherals" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Peripherals →
              </Link>
            </div>

            {/* 8. Software */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Software &amp; Licensing</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Genuine volume electronic operating system keys, office productivity licenses, and security tools.
              </p>
              <Link to="/products?category=software" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Software →
              </Link>
            </div>

            {/* 9. Accessories */}
            <div className="card">
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Layers size={24} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>Accessories &amp; Docks</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '1.25rem' }}>
                Thunderbolt 4 / USB-C docking hubs, certified video cables, VESA monitor arms, and surge protectors.
              </p>
              <Link to="/products?category=accessories" className="nav-link" style={{ padding: 0, color: 'var(--accent-sky)', fontWeight: 600 }}>
                Explore Accessories →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BUSINESS SOLUTIONS */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Integrated B2B Deployments</div>
            <h2 className="section-title">Business Solutions</h2>
            <p className="section-subtitle">
              Configured hardware packages and volume supply models aligned to commercial workplace environments.
            </p>
          </div>

          <div className="grid-3">
            {SOLUTIONS.slice(0, 6).map((solution) => (
              <div key={solution.id} className="card card-glass" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Sparkles size={20} color="var(--accent-sky)" />
                  </div>
                  <h3 style={{ fontSize: '1.15rem', margin: 0 }}>{solution.title}</h3>
                </div>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
                  {solution.description}
                </p>

                <div style={{ marginBottom: '1.25rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '0.875rem' }}>
                  <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                    Key Advantages
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.8125rem', color: 'var(--text-primary)' }}>
                    {solution.benefits.slice(0, 3).map((benefit, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={14} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {solution.targetSectors[0]}
                  </span>
                  <Link to="/solutions" style={{ fontSize: '0.85rem', color: 'var(--accent-sky)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    View Solution <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <Link to="/solutions" className="btn btn-secondary">
              <span>View All Solutions &amp; Hardware Bundles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div className="section-badge">Catalogue Showcase</div>
              <h2 className="section-title" style={{ margin: 0 }}>Featured B2B Products</h2>
            </div>
            <Link to="/products" className="btn btn-secondary">
              <span>Browse Full Catalogue ({PRODUCTS.length}+ Items)</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {featuredProducts.map((prod) => (
              <ProductCard 
                key={prod.id} 
                product={prod} 
                onRequestQuote={(name, cat) => onOpenQuoteModal(name, cat)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* 6. WHY YASODH LTD */}
      <section className="section" style={{ background: '#080D18', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Wholesale Value Proposition</div>
            <h2 className="section-title">Why UK Businesses Partner With Yasodh Ltd</h2>
            <p className="section-subtitle">
              We focus squarely on business technology supply with structured batch pricing, verified UK incorporation, and direct customer care.
            </p>
          </div>

          <div className="grid-3">
            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Truck size={22} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Reliable Domestic Supply</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Centrally located in Swindon, Wiltshire, enabling responsive road and freight distribution across mainland UK business centres.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <TrendingUp size={22} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Competitive Wholesale Terms</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Tailored quantity discounts for rollouts of 10, 50, or 200+ units, helping you maximize your IT capital expenditure.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <ShieldCheck size={22} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Verified Quality Hardware</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Brand-new, sealed commercial-grade equipment covered by manufacturer warranties and verified serial tracking.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Building2 size={22} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>UK Registered Business Presence</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Legitimately incorporated in England &amp; Wales (Company No: 17485685) operating under SIC 46510 wholesale classification.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <FileText size={22} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Business-Focused Service</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Direct access to trade sales coordinators who understand technical specifications, BOM schedules, and procurement workflows.
              </p>
            </div>

            <div className="card">
              <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem' }}>
                <Headphones size={22} color="var(--accent-sky)" />
              </div>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '0.6rem' }}>Dedicated Procurement Desk</h3>
              <p style={{ fontSize: '0.875rem' }}>
                Prompt quotation turnarounds within 2 to 4 hours during operating hours, backed by phone and direct email support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INDUSTRIES WE SERVE */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div className="section-badge">Sector Support</div>
            <h2 className="section-title">Industries We Serve</h2>
            <p className="section-subtitle">
              Supplying technology tailored to the specific operational demands of UK commercial and public sectors.
            </p>
          </div>

          <div className="grid-4">
            {INDUSTRIES.map((ind) => (
              <div key={ind.id} className="card" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.05rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                  {ind.name}
                </h3>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)', marginBottom: '1rem', flexGrow: 1, lineHeight: 1.5 }}>
                  {ind.headline}
                </p>
                <div style={{ borderTop: '1px solid var(--border-subtle)', paddingTop: '0.75rem' }}>
                  <Link to="/industries" style={{ fontSize: '0.8125rem', color: 'var(--accent-sky)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Sector Details <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. ABOUT YASODH FACTUAL SPOTLIGHT */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'center' }}>
            <div>
              <div className="section-badge">Company Background</div>
              <h2 className="section-title">
                Factual, Established UK B2B Technology Wholesale
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: '1.65' }}>
                Yasodh Ltd is an active UK private limited company incorporated under Companies House Registration Number <strong>17485685</strong>.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.75rem', lineHeight: '1.65' }}>
                Operating under SIC 46510 (Wholesale of computers, computer peripheral equipment and software), our registered and trading facilities in Swindon serve as a dependable procurement bridge for businesses requiring genuine IT hardware and volume technology supplies.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-sky)" />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                    Official Trading Address: 1 Bessemer Rd West, Swindon, SN2 1ND, UK
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-sky)" />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                    Standard UK Business Hours: Mon – Fri 09:00 – 18:00 | Sat – Sun 10:00 – 16:00 GMT
                  </span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={18} color="var(--accent-sky)" />
                  <span style={{ fontSize: '0.9375rem', color: 'var(--text-primary)' }}>
                    Direct Sales Inquiries: +44 7407 642396
                  </span>
                </div>
              </div>

              <Link to="/about" className="btn btn-secondary">
                <span>Learn More About Yasodh Ltd</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ fontSize: '0.8125rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '1rem' }}>
                Verified Corporate Details
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.9rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Entity Name:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>{COMPANY_INFO.name}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Company Number:</span>
                  <span style={{ color: 'var(--accent-sky)', fontWeight: 700 }}>{COMPANY_INFO.companyNumber}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Company Director:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>{COMPANY_INFO.director.fullName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Officer Verification:</span>
                  <span style={{ color: '#10B981', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={14} /> Requirements Complete
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Business Nature:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>SIC 46510 Wholesale</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Registered Office:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500, textAlign: 'right', maxWidth: '60%' }}>Swindon, SN2 1ND, UK</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Official Email:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 500 }}>{COMPANY_INFO.email.primary}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)' }}>Planned Enterprise Email:</span>
                  <span style={{ color: 'var(--accent-sky)', fontWeight: 500 }}>{COMPANY_INFO.email.planned}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. BUSINESS CTA BANNER */}
      <section className="section" style={{ position: 'relative', overflow: 'hidden' }}>
        <div className="container">
          <div 
            style={{
              background: 'linear-gradient(135deg, #0F1A2E 0%, #07101E 100%)',
              border: '1px solid var(--border-accent)',
              borderRadius: 'var(--radius-lg)',
              padding: '3.5rem 2.5rem',
              boxShadow: 'var(--shadow-lg), 0 0 50px -10px rgba(6, 182, 212, 0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative'
            }}
          >
            <div style={{ maxWidth: '680px' }}>
              <div className="section-badge" style={{ marginBottom: '1rem' }}>
                Commercial Inquiries Welcome
              </div>
              <h2 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)', color: 'var(--text-white)', marginBottom: '1rem' }}>
                Looking for the right technology for your business?
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: 1.6 }}>
                Submit your hardware bill of materials or speak with our commercial procurement desk to receive competitive volume quotation tiers.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <Link to="/contact" className="btn btn-primary btn-lg">
                  <span>Talk to Yasodh</span>
                  <ArrowRight size={18} />
                </Link>
                <button 
                  type="button" 
                  onClick={() => onOpenQuoteModal()} 
                  className="btn btn-secondary btn-lg"
                >
                  <FileText size={18} color="var(--accent-sky)" />
                  <span>Request Instant Quotation</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LATEST RESOURCES */}
      <section className="section" style={{ background: '#070B14', borderTop: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'flex-end', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '3rem' }}>
            <div>
              <div className="section-badge">Knowledge Hub</div>
              <h2 className="section-title" style={{ margin: 0 }}>Latest Technology Guides &amp; Insights</h2>
            </div>
            <Link to="/resources" className="btn btn-secondary">
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid-3">
            {RESOURCES.slice(0, 3).map((res) => (
              <div key={res.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-sky)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {res.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {res.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.125rem', color: 'var(--text-white)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  <Link to={`/resources/${res.slug}`} style={{ color: 'inherit' }}>
                    {res.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.55 }}>
                  {res.summary}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {res.date}
                  </span>
                  <Link to={`/resources/${res.slug}`} style={{ fontSize: '0.8125rem', color: 'var(--accent-sky)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Guide <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FINAL CONTACT CALLOUT */}
      <section className="section" style={{ borderTop: '1px solid var(--border-subtle)', paddingBottom: '6rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', padding: '2.5rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
                Let's build your technology solution.
              </h3>
              <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                Connect with our Swindon team for reliable wholesale hardware, software licensing, and tailored procurement.
              </p>
            </div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">
                Contact Our Desk
              </Link>
              <a href={`tel:${COMPANY_INFO.phone.international}`} className="btn btn-secondary">
                Call {COMPANY_INFO.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
