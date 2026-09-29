import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export const Disclaimer: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Website Disclaimer | Commercial Information" 
        description="Official commercial website disclaimer for Yasodh Ltd (Company No: 17485685), Swindon, United Kingdom."
      />

      <section className="section-hero" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Legal Information</div>
            <h1 style={{ marginBottom: '1rem' }}>Website Disclaimer</h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              Last updated: September 2026 • Yasodh Ltd (17485685)
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)' }}>
              <strong>Notice:</strong> The information contained on this website is for general business information and commercial enquiry purposes only, provided by <strong>{COMPANY_INFO.name}</strong>.
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>1. Product Information &amp; Technical Accuracy</h2>
              <p>
                While Yasodh Ltd makes every effort to ensure the accuracy of hardware specifications, descriptions, and compatibility details displayed on our website, manufacturer revisions and part number changes may occur. Formal technical specifications are confirmed within itemised written quotations prior to contract execution.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>2. Independence &amp; Trademarks</h2>
              <p>
                Yasodh Ltd is an independent UK technology wholesaler operating under SIC 46510. All third-party brand names, trademarks, product lines, and logos referenced on this website remain the sole intellectual property of their respective manufacturer owners. References to specific brands or operating systems are strictly for descriptive hardware compatibility purposes.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>3. External Links &amp; Third-Party Services</h2>
              <p>
                This website may contain links to external sites (such as Google Maps or courier tracking tools). Yasodh Ltd has no control over the nature, content, and availability of external third-party services.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>4. Company Verification</h2>
              <p>
                To verify statutory details of Yasodh Ltd, consult the official UK Companies House register under Company Registration Number <strong>{COMPANY_INFO.companyNumber}</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
