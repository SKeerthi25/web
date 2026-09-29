import React from 'react';
import { Link } from 'react-router-dom';
import { HelpCircle, ArrowLeft, Home, Package, Phone } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Page Not Found (404)" 
        description="The page you are looking for does not exist on Yasodh Ltd."
      />

      <section className="section-hero" style={{ minHeight: '75vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
              <HelpCircle size={36} color="var(--accent-sky)" />
            </div>

            <div className="section-badge" style={{ marginBottom: '1rem' }}>Error 404</div>
            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '1rem' }}>
              Page Not Found
            </h1>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.6 }}>
              The technology resource or catalogue path you requested does not exist or has been relocated within our catalogue structure.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/" className="btn btn-primary">
                <Home size={16} /> Return to Homepage
              </Link>
              <Link to="/products" className="btn btn-secondary">
                <Package size={16} /> Browse Catalogue
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <Phone size={16} /> Contact Trade Desk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
