import React from 'react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export const Terms: React.FC = () => {
  return (
    <>
      <SEOHead 
        title="Terms & Conditions | B2B Commercial Supply" 
        description="Terms and conditions of commercial wholesale supply for Yasodh Ltd (Company No: 17485685), Swindon, UK."
      />

      <section className="section-hero" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Commercial Trade Terms</div>
            <h1 style={{ marginBottom: '1rem' }}>Terms &amp; Conditions</h1>
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
              <strong>Notice:</strong> These Terms and Conditions govern business-to-business (B2B) wholesale transactions and website use for <strong>{COMPANY_INFO.name}</strong> (Company Registration No: {COMPANY_INFO.companyNumber}). Consumer statutory rights for retail distance selling do not apply to commercial wholesale contracts.
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>1. Incorporation &amp; Scope</h2>
              <p>
                {COMPANY_INFO.legalName} is a private company registered in England and Wales under Company Number <strong>{COMPANY_INFO.companyNumber}</strong>, with registered offices at <strong>{COMPANY_INFO.address.fullFormatted}</strong>. We operate under Standard Industrial Classification (SIC) 46510: Wholesale of computers, computer peripheral equipment and software.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>2. Quotations &amp; Order Formation</h2>
              <p>
                All website product listings, specifications, and catalogue entries represent invitations to treat rather than binding offers. A contract is formed only when a formal written Purchase Order (PO) or quotation confirmation is formally accepted by Yasodh Ltd in writing.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>3. Minimum Order Quantities (MOQs) &amp; Pricing</h2>
              <p>
                As a trade wholesaler, products are subject to category-specific minimum order quantities. Wholesale quotations are provided in Pounds Sterling (GBP) exclusive of United Kingdom Value Added Tax (VAT), which will be itemized at the prevailing rate on commercial VAT invoices.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>4. Delivery &amp; Title</h2>
              <p>
                Hardware delivery is executed to commercial business addresses across the United Kingdom. Risk of loss passes to the client upon courier handover. Legal title to all supplied hardware remains with Yasodh Ltd until payment has cleared in full.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>5. Manufacturer Warranties &amp; Inspection</h2>
              <p>
                Supplied equipment includes standard manufacturer warranties. The buyer is responsible for inspecting consignments within 3 business days of delivery and notifying Yasodh Ltd of any visible transit discrepancies.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>6. Governing Law &amp; Jurisdiction</h2>
              <p>
                These terms and any disputes arising out of commercial supply shall be governed by and construed in accordance with the laws of England and Wales. Both parties submit to the exclusive jurisdiction of the English courts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
