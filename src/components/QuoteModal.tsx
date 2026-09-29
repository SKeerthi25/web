import React, { useState } from 'react';
import { X, CheckCircle2, FileText, Send, Building, Mail, Phone, User, Package, Calendar } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProduct?: string;
  defaultCategory?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultProduct = '',
  defaultCategory = 'Laptops & Computers',
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    businessEmail: '',
    phone: '',
    category: defaultCategory,
    productName: defaultProduct,
    quantity: '10',
    timeframe: 'Standard (1-2 Weeks)',
    notes: '',
    honeypot: '', // Spam protection
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteReference, setQuoteReference] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.honeypot) return; // Silent discard for bot

    setIsSubmitting(true);

    // Simulate backend B2B quote dispatch & reference generation
    setTimeout(() => {
      const randomSuffix = Math.floor(1000 + Math.random() * 9000);
      const generatedRef = `YAS-2026-${randomSuffix}`;
      setQuoteReference(generatedRef);
      setIsSubmitting(false);
    }, 600);
  };

  const handleReset = () => {
    setQuoteReference(null);
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="quote-modal-title">
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
            <div style={{ width: '38px', height: '38px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <FileText size={20} color="var(--accent-sky)" />
            </div>
            <div>
              <h3 id="quote-modal-title" style={{ margin: 0, fontSize: '1.25rem' }}>
                Request Wholesale Quotation
              </h3>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                {COMPANY_INFO.name} • Registered No: {COMPANY_INFO.companyNumber}
              </span>
            </div>
          </div>
          <button 
            type="button" 
            className="btn btn-secondary btn-sm"
            onClick={onClose}
            aria-label="Close modal"
            style={{ padding: '0.35rem' }}
          >
            <X size={18} />
          </button>
        </div>

        {quoteReference ? (
          <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
            <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(16, 185, 129, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem auto' }}>
              <CheckCircle2 size={32} color="#10B981" />
            </div>
            <h4 style={{ fontSize: '1.25rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
              Quotation Request Received
            </h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.25rem' }}>
              Thank you, <strong>{formData.fullName}</strong>. Your quotation request has been lodged with our commercial trade desk in Swindon.
            </p>
            <div style={{ background: 'rgba(15, 23, 42, 0.8)', border: '1px dashed var(--border-accent)', padding: '1rem', borderRadius: 'var(--radius-sm)', maxWidth: '320px', margin: '0 auto 1.5rem auto' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'block', textTransform: 'uppercase' }}>Reference ID</span>
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--accent-sky)', letterSpacing: '0.05em' }}>
                {quoteReference}
              </span>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              A formal itemised quote with volume pricing will be delivered to <strong>{formData.businessEmail}</strong> within 2 to 4 business hours.
            </p>
            <button type="button" className="btn btn-primary" onClick={handleReset}>
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Honeypot for spam bot mitigation */}
            <input 
              type="text" 
              name="website_verify_hp" 
              value={formData.honeypot} 
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })} 
              style={{ display: 'none' }} 
              tabIndex={-1} 
              autoComplete="off" 
            />

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">
                  <span>Full Name *</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. David Clarke"
                  className="form-input"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span>Company Name *</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="e.g. Apex Solutions Ltd"
                  className="form-input"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                />
              </div>
            </div>

            <div className="form-row-2">
              <div className="form-group">
                <label className="form-label">
                  <span>Business Email *</span>
                </label>
                <input 
                  type="email" 
                  required
                  placeholder="name@company.co.uk"
                  className="form-input"
                  value={formData.businessEmail}
                  onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">
                  <span>Contact Phone *</span>
                </label>
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
                <label className="form-label">Category</label>
                <select 
                  className="form-select"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                >
                  <option value="Laptops & Computers">Laptops &amp; Computers</option>
                  <option value="Desktop Systems">Desktop Systems &amp; Towers</option>
                  <option value="Monitors & Displays">Monitors &amp; Displays</option>
                  <option value="Networking Equipment">Managed Networking</option>
                  <option value="Storage & Components">Storage &amp; Components</option>
                  <option value="Peripherals & Accessories">Peripherals &amp; Docks</option>
                  <option value="Software Licensing">Software Licensing</option>
                  <option value="Mixed IT Rollout">Mixed IT Fleet Rollout</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Estimated Quantity *</label>
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

            <div className="form-group">
              <label className="form-label">Specific Product or Model (Optional)</label>
              <input 
                type="text" 
                placeholder="e.g. Enterprise UltraBook Pro 14 or general requirements"
                className="form-input"
                value={formData.productName}
                onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label className="form-label">Notes &amp; Delivery Instructions</label>
              <textarea 
                rows={3}
                placeholder="Specify memory/storage requirements, delivery location, or rollout schedule..."
                className="form-textarea"
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '1.5rem', gap: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                No credit card required. Formal B2B invoice.
              </span>
              <button 
                type="submit" 
                className="btn btn-primary"
                style={{ minWidth: '180px' }}
                disabled={isSubmitting}
              >
                <Send size={15} />
                <span>{isSubmitting ? 'Generating Quote...' : 'Submit Quote Request'}</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
