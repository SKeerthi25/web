import React from 'react';
import { Link } from 'react-router-dom';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

interface CookiePolicyProps {
  onOpenCookieSettings?: () => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onOpenCookieSettings }) => {
  return (
    <>
      <SEOHead 
        title="Cookie Policy | Transparency & Consent" 
        description="Cookie policy for Yasodh Ltd (Company No: 17485685). Learn how we utilize necessary, analytics, and functional cookies."
      />

      <section className="section-hero" style={{ paddingBottom: '3rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Privacy &amp; Compliance</div>
            <h1 style={{ marginBottom: '1rem' }}>Cookie Policy</h1>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>
              Last updated: September 2026 • Yasodh Ltd (17485685)
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: '840px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
            <div style={{ padding: '1.25rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
              <div>
                <strong style={{ color: 'var(--text-white)' }}>Manage Your Cookie Preferences</strong>
                <p style={{ margin: 0, fontSize: '0.85rem' }}>You can modify your consent settings for analytics and marketing cookies at any time.</p>
              </div>
              {onOpenCookieSettings && (
                <button type="button" className="btn btn-outline-cyan btn-sm" onClick={onOpenCookieSettings}>
                  Open Cookie Settings
                </button>
              )}
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>1. What Are Cookies?</h2>
              <p>
                Cookies are small text files placed on your computer or mobile device when you visit websites. They are widely used to ensure websites function efficiently and to provide reporting information to site owners.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>2. How Yasodh Ltd Uses Cookies</h2>
              <p>
                We use cookies on <strong>{COMPANY_INFO.website.url}</strong> to maintain site security, remember your quotation preferences, and understand website traffic patterns.
              </p>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>3. Types of Cookies We Use</h2>

              {/* Table */}
              <div style={{ marginTop: '1rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ background: 'rgba(255, 255, 255, 0.04)', borderBottom: '1px solid var(--border-subtle)', color: 'var(--text-white)' }}>
                      <th style={{ padding: '0.75rem 1rem' }}>Cookie Category</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Purpose</th>
                      <th style={{ padding: '0.75rem 1rem' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-white)' }}>Necessary / Technical</td>
                      <td style={{ padding: '0.75rem 1rem' }}>Enables page routing, session security, and remembers your cookie consent choice.</td>
                      <td style={{ padding: '0.75rem 1rem', color: 'var(--accent-sky)' }}>Always Active</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-white)' }}>Analytics &amp; Performance</td>
                      <td style={{ padding: '0.75rem 1rem' }}>Measures anonymous visitor numbers and navigation paths across product categories.</td>
                      <td style={{ padding: '0.75rem 1rem' }}>User Opt-in Only</td>
                    </tr>
                    <tr>
                      <td style={{ padding: '0.75rem 1rem', fontWeight: 600, color: 'var(--text-white)' }}>Marketing / Commercial</td>
                      <td style={{ padding: '0.75rem 1rem' }}>Evaluates B2B campaign response and commercial referral effectiveness.</td>
                      <td style={{ padding: '0.75rem 1rem' }}>User Opt-in Only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h2 style={{ fontSize: '1.4rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>4. Browser Cookie Management</h2>
              <p>
                In addition to our on-site settings, most web browsers allow you to control cookies through their configuration settings. You may set your browser to refuse all cookies or notify you when a cookie is being sent.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
