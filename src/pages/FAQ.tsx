import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, HelpCircle, Phone, Mail, FileText, Search } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { FAQS } from '../data/faqs';
import { COMPANY_INFO } from '../data/company';

export const FAQ: React.FC = () => {
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', 'Wholesale & Orders', 'Quotes & Pricing', 'Logistics & Delivery', 'Hardware & Warranty', 'Software & Compliance'];

  const toggleAccordion = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredFaqs = FAQS.filter((faq) => {
    if (activeCategory !== 'All' && faq.category !== activeCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return faq.question.toLowerCase().includes(q) || faq.answer.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <>
      <SEOHead 
        title="Frequently Asked Questions (FAQ) | Wholesale B2B"
        description="Answers to common questions regarding wholesale IT hardware supply, minimum order quantities, quotation timelines, UK delivery, and warranties at Yasodh Ltd."
      />

      {/* Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Client Support Centre</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Clear answers regarding wholesale ordering, minimum quantities, delivery logistics, quotations, and commercial trade terms with Yasodh Ltd.
            </p>
          </div>
        </div>
      </section>

      {/* Accordion Section */}
      <section className="section">
        <div className="container" style={{ maxWidth: '900px' }}>
          {/* Search & Category Filter */}
          <div style={{ marginBottom: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ position: 'relative' }}>
              <Search 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input 
                type="text" 
                placeholder="Search FAQ questions..."
                className="form-input"
                style={{ paddingLeft: '2.6rem' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`btn btn-sm ${activeCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ borderRadius: 'var(--radius-full)' }}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Accordion Items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '3.5rem' }}>
            {filteredFaqs.map((faq) => {
              const isOpen = openIds.includes(faq.id);
              return (
                <div 
                  key={faq.id} 
                  className={`faq-accordion-item ${isOpen ? 'open' : ''}`}
                >
                  <div 
                    className="faq-accordion-header"
                    onClick={() => toggleAccordion(faq.id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') toggleAccordion(faq.id); }}
                  >
                    <span style={{ fontSize: '1.05rem', color: isOpen ? 'var(--accent-sky)' : 'var(--text-white)' }}>
                      {faq.question}
                    </span>
                    <ChevronDown 
                      size={18} 
                      color={isOpen ? 'var(--accent-sky)' : 'var(--text-muted)'} 
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease', flexShrink: 0 }}
                    />
                  </div>

                  {isOpen && (
                    <div className="faq-accordion-body">
                      <p style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--text-secondary)' }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Still Have Questions Box */}
          <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', padding: '2.5rem', textAlign: 'center' }}>
            <HelpCircle size={40} color="var(--accent-sky)" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontSize: '1.35rem', color: 'var(--text-white)', marginBottom: '0.5rem' }}>
              Have a Specific Wholesale Question?
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--text-secondary)', marginBottom: '1.5rem', maxWidth: '520px', margin: '0 auto 1.5rem auto' }}>
              Our commercial trade desk in Swindon is available to assist with bespoke bill of materials, trade credit applications, or scheduling requirements.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-primary">
                <Mail size={16} /> Contact Support Desk
              </Link>
              <a href={`tel:${COMPANY_INFO.phone.international}`} className="btn btn-secondary">
                <Phone size={16} /> Call {COMPANY_INFO.phone.display}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
