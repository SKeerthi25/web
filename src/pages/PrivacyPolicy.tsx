import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Privacy Policy | UK GDPR Compliance" 
        description="Privacy policy and data protection statement for Yasodh Ltd (Company No: 17485685) in compliance with the UK Data Protection Act 2018 and UK GDPR."
      />

      <section className="section-hero" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Legal &amp; Compliance</div>
            <h1 style={{ marginBottom: '1rem' }}>Privacy Policy</h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              Last updated: September 2026 • Yasodh Ltd (Company Registration: 17485685)
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            <div style={{ padding: '1rem 1.25rem', background: 'rgba(6, 182, 212, 0.08)', border: '1px solid rgba(6, 182, 212, 0.25)', borderRadius: 'var(--radius-sm)', color: 'var(--text-primary)', fontSize: '0.875rem' }}>
              <strong>Notice:</strong> This policy outlines how <strong>{COMPANY_INFO.name}</strong> collects, uses, and safeguards personal information when you use our website ({COMPANY_INFO.website.url}) or engage in commercial trade with our business.
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>1. Data Controller Information</h2>
              <p>
                The data controller responsible for your personal data is:<br />
                <strong>{COMPANY_INFO.legalName}</strong><br />
                Company Number: {COMPANY_INFO.companyNumber}<br />
                Registered Office: {COMPANY_INFO.address.fullFormatted}<br />
                Email: {COMPANY_INFO.email.primary} (Planned: {COMPANY_INFO.email.planned})<br />
                Telephone: {COMPANY_INFO.phone.display}
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>2. What Information We Collect</h2>
              <p>As a business-to-business (B2B) wholesale supplier, we primarily process business contact information, including:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li>Name and business job title</li>
                <li>Company or organization name and trading address</li>
                <li>Business email address and business telephone number</li>
                <li>Commercial quotation requests, hardware specifications, and delivery locations</li>
                <li>IP address and anonymous website browsing metrics (subject to cookie consent)</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>3. Lawful Basis for Processing</h2>
              <p>We process your data under one or more of the following lawful bases under UK GDPR:</p>
              <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem', display: 'flex', flexDirection: 'column', gap: '0.35rem' }}>
                <li><strong>Contractual Necessity:</strong> To prepare formal quotations, process purchase orders, and fulfill hardware consignment deliveries.</li>
                <li><strong>Legal Obligation:</strong> For statutory accounting, VAT compliance, and Companies House documentation.</li>
                <li><strong>Legitimate Interests:</strong> To communicate effectively with commercial clients regarding relevant B2B hardware supply.</li>
                <li><strong>Consent:</strong> For non-essential analytics cookies, where actively granted via our cookie management tool.</li>
              </ul>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>4. Data Sharing &amp; Third Parties</h2>
              <p>
                We do not sell, rent, or trade your personal or business data. We only share details with trusted logistics partners (such as pallet freight and tracked UK parcel couriers) solely to complete hardware delivery to your designated facility.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>5. Data Retention &amp; Security</h2>
              <p>
                We implement robust security measures to prevent unauthorized access or disclosure. Commercial transaction data is retained in accordance with statutory UK HMRC retention periods (normally six full accounting years).
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>6. Your Legal Rights</h2>
              <p>
                Under the UK Data Protection Act 2018, you possess the right to access, rectify, or request erasure of your personal data held by Yasodh Ltd. To exercise these rights, please email our trade desk at <a href={`mailto:${COMPANY_INFO.email.primary}`} style={{ color: 'var(--accent-sky)' }}>{COMPANY_INFO.email.primary}</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
