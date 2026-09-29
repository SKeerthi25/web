import React, { useState } from 'react';
import { 
  FileText, 
  Send, 
  CheckCircle2, 
  Building2, 
  Truck, 
  ShieldCheck, 
  Clock, 
  Printer,
  Package
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { COMPANY_INFO } from '../data/company';

export const Quote: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    productOrService: 'Business Laptops Fleet',
    quantity: '10-25 units',
    budgetRange: '£5,000 - £15,000',
    deliveryTimeframe: 'Within 2-4 Weeks',
    message: '',
    honeypot: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteResult, setQuoteResult] = useState<{
    referenceId: string;
    submittedAt: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Honeypot spam catch

    setIsSubmitting(true);

    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      setQuoteResult({
        referenceId: `YAS-2026-${randomSuffix}`,
        submittedAt: new Date().toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short' }),
      });
      setIsSubmitting(false);
    }, 700);
  };

  return (
    <>
      <SEOHead 
        title="Request a Formal Trade Quotation | Yasodh Ltd" 
        description="Request a formal wholesale technology quotation from Yasodh Ltd. Bulk discounts on laptops, workstations, displays, and networking equipment."
      />

      {/* Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Formal B2B Quotations</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Request a <span className="text-gradient">Wholesale Quote</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Receive an itemized commercial quotation with volume-tiered discounts, delivery schedules, and transparent UK VAT documentation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '960px' }}>
          {quoteResult ? (
            <div 
              className="card"
              style={{
                padding: '3rem 2.5rem',
                textAlign: 'center',
                background: 'var(--bg-surface-elevated)',
                border: '1px solid var(--border-accent)',
                boxShadow: 'var(--shadow-lg)'
              }}
            >
              <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem auto' }}>
                <CheckCircle2 size={36} color="#10B981" />
              </div>

              <h2 style={{ fontSize: '1.85rem', color: 'var(--text-white)', marginBottom: '0.75rem' }}>
                Quotation Request Lodged
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2rem auto', lineHeight: 1.6 }}>
                Thank you for submitting your commercial requirements, <strong>{formData.fullName}</strong>. Our Swindon trade desk has received your request.
              </p>

              {/* Quotation Summary Card */}
              <div style={{ background: '#090E1A', border: '1px dashed var(--border-accent)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', maxWidth: '540px', margin: '0 auto 2.5rem auto', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Formal Reference:</span>
                  <span style={{ color: 'var(--accent-sky)', fontWeight: 700, fontSize: '1.1rem' }}>{quoteResult.referenceId}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Company Entity:</span>
                  <span style={{ color: 'var(--text-white)', fontWeight: 600 }}>{formData.companyName}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Equipment / Scope:</span>
                  <span style={{ color: 'var(--text-white)' }}>{formData.productOrService}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '0.75rem', marginBottom: '0.75rem' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Batch Volume:</span>
                  <span style={{ color: 'var(--text-white)' }}>{formData.quantity}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Submission Time:</span>
                  <span style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>{quoteResult.submittedAt}</span>
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
                <button 
                  type="button" 
                  className="btn btn-secondary"
                  onClick={() => window.print()}
                >
                  <Printer size={16} /> Print Confirmation
                </button>
                <button 
                  type="button" 
                  className="btn btn-primary"
                  onClick={() => {
                    setQuoteResult(null);
                    setFormData({
                      fullName: '',
                      companyName: '',
                      businessEmail: '',
                      phone: '',
                      productOrService: 'Business Laptops Fleet',
                      quantity: '10-25 units',
                      budgetRange: '£5,000 - £15,000',
                      deliveryTimeframe: 'Within 2-4 Weeks',
                      message: '',
                      honeypot: '',
                    });
                  }}
                >
                  Request Another Quote
                </button>
              </div>
            </div>
          ) : (
            <div style={{ background: 'var(--bg-surface-elevated)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '2.5rem', boxShadow: 'var(--shadow-md)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', borderBottom: '1px solid var(--border-subtle)', paddingBottom: '1.25rem' }}>
                <div style={{ width: '42px', height: '42px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <FileText size={22} color="var(--accent-sky)" />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', margin: 0 }}>
                    Commercial Wholesale Quotation Request
                  </h3>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    Response typically delivered within 2–4 hours during business days
                  </span>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Honeypot field for bot mitigation */}
                <input 
                  type="text" 
                  name="rfq_verification_field" 
                  value={formData.honeypot} 
                  onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
                  style={{ display: 'none' }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                />

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Richard Evans"
                      className="form-input"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Company / Organisation *</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="e.g. Sterling Tech Partners Ltd"
                      className="form-input"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Business Email *</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="r.evans@sterling.co.uk"
                      className="form-input"
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Contact Phone *</label>
                    <input 
                      type="tel" 
                      required 
                      placeholder="+44 7..."
                      className="form-input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Product / Service Required *</label>
                    <select 
                      className="form-select"
                      value={formData.productOrService}
                      onChange={(e) => setFormData({ ...formData, productOrService: e.target.value })}
                    >
                      <option value="Business Laptops Fleet">Business Laptops Fleet</option>
                      <option value="Desktop Workstation SFF">Desktop Workstations &amp; SFF</option>
                      <option value="Commercial Displays & Monitors">Commercial Displays &amp; Monitors</option>
                      <option value="Managed Network Switches">Managed Network Switches</option>
                      <option value="Server Storage & Components">Server Storage &amp; Components</option>
                      <option value="Peripherals Master Cartons">Peripherals Master Cartons</option>
                      <option value="Enterprise Software Licensing">Enterprise Software Licensing</option>
                      <option value="Custom Mixed Hardware Bill of Materials">Custom Mixed Hardware BOM</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Target Quantity *</label>
                    <select 
                      className="form-select"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    >
                      <option value="5-10 units">5 – 10 units (Minimum Tier)</option>
                      <option value="11-25 units">11 – 25 units</option>
                      <option value="26-50 units">26 – 50 units (Volume Discount)</option>
                      <option value="51-100 units">51 – 100 units (Fleet Discount)</option>
                      <option value="100+ units">100+ units (Master Wholesale)</option>
                    </select>
                  </div>
                </div>

                <div className="form-row-2">
                  <div className="form-group">
                    <label className="form-label">Estimated Budget Range (Optional)</label>
                    <select 
                      className="form-select"
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    >
                      <option value="Under £5,000">Under £5,000</option>
                      <option value="£5,000 - £15,000">£5,000 – £15,000</option>
                      <option value="£15,000 - £50,000">£15,000 – £50,000</option>
                      <option value="£50,000+">£50,000+</option>
                      <option value="To be determined">To be determined</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Desired Delivery Timeline</label>
                    <select 
                      className="form-select"
                      value={formData.deliveryTimeframe}
                      onChange={(e) => setFormData({ ...formData, deliveryTimeframe: e.target.value })}
                    >
                      <option value="Immediate / Next Available Batch">Immediate / Next Available Batch</option>
                      <option value="Within 2-4 Weeks">Within 2 – 4 Weeks</option>
                      <option value="1-2 Months (Phased Refresh)">1 – 2 Months (Phased Refresh)</option>
                      <option value="Future Budgeting / Next Quarter">Future Budgeting / Next Quarter</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Specification Details or Notes</label>
                  <textarea 
                    rows={4}
                    placeholder="List desired CPU tiers, memory/storage sizes, monitor stand requirements, or UK delivery postcode..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                    All quotations are issued with full UK VAT breakdown.
                  </div>
                  <button 
                    type="submit" 
                    className="btn btn-primary btn-lg"
                    disabled={isSubmitting}
                  >
                    <Send size={16} />
                    <span>{isSubmitting ? 'Processing...' : 'Request Formal Quote'}</span>
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
