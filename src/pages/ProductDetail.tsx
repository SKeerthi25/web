import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  FileText, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Truck, 
  ShieldCheck, 
  Package, 
  Layers, 
  Clock,
  Share2
} from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { COMPANY_INFO } from '../data/company';

interface ProductDetailProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ onOpenQuoteModal }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <Package size={56} color="var(--text-muted)" style={{ margin: '0 auto 1.5rem auto' }} />
          <h2 style={{ marginBottom: '1rem' }}>Product Not Found</h2>
          <p style={{ marginBottom: '2rem' }}>The requested equipment entry is not available in our current catalogue.</p>
          <Link to="/products" className="btn btn-primary">
            Back to Products Catalogue
          </Link>
        </div>
      </div>
    );
  }

  // Related products from the same category or others
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <>
      <SEOHead 
        title={`${product.name} | Wholesale Supply`}
        description={`${product.name} - ${product.shortDescription} Wholesale supply from Yasodh Ltd, UK.`}
      />

      <section className="section-hero" style={{ paddingBottom: '4rem' }}>
        <div className="container">
          {/* Breadcrumb / Back button */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.6rem', marginBottom: '1.75rem', fontSize: '0.875rem' }}>
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', minHeight: '36px' }}
            >
              <ArrowLeft size={14} /> Back
            </button>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <Link to="/products" style={{ color: 'var(--text-secondary)' }}>Products</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <Link to={`/products?category=${product.category}`} style={{ color: 'var(--text-secondary)' }}>
              {product.categoryLabel}
            </Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-white)', fontWeight: 500 }}>{product.name}</span>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3.5rem', alignItems: 'flex-start' }}>
            {/* Left: Product Image & Gallery */}
            <div>
              <div 
                style={{
                  borderRadius: 'var(--radius-md)',
                  overflow: 'hidden',
                  border: '1px solid var(--border-medium)',
                  background: '#070B14',
                  position: 'relative',
                  boxShadow: 'var(--shadow-md)'
                }}
              >
                <img 
                  src={product.image} 
                  alt={product.name}
                  style={{ width: '100%', height: 'auto', maxHeight: '480px', objectFit: 'cover' }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/images/hero-tech.jpg';
                  }}
                />

                <div style={{ position: 'absolute', top: '16px', right: '16px' }}>
                  <span 
                    className={`badge ${product.stockStatus === 'In Stock' ? 'badge-stock' : 'badge-batch'}`}
                    style={{ backdropFilter: 'blur(8px)', background: 'rgba(15, 23, 42, 0.9)', padding: '0.35rem 0.8rem', fontSize: '0.8rem' }}
                  >
                    {product.stockStatus}
                  </span>
                </div>
              </div>

              {/* Wholesale Batch Notice */}
              <div style={{ marginTop: '1.25rem', padding: '1rem 1.25rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                <Package size={18} color="var(--accent-sky)" style={{ flexShrink: 0 }} />
                <span>
                  <strong>Wholesale MOQ:</strong> Standard batch minimum is <strong>{product.minOrderQuantity} units</strong>. Mixed fleet orders can be arranged via custom quote.
                </span>
              </div>
            </div>

            {/* Right: Product Details & Actions */}
            <div>
              <div className="section-badge" style={{ marginBottom: '0.75rem' }}>
                {product.categoryLabel}
              </div>

              <h1 style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.35rem)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {product.name}
              </h1>

              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                {product.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem', paddingBottom: '2rem', borderBottom: '1px solid var(--border-subtle)' }}>
                <button 
                  type="button" 
                  className="btn btn-primary btn-lg"
                  onClick={() => onOpenQuoteModal(product.name, product.categoryLabel)}
                >
                  <FileText size={18} />
                  <span>Request Wholesale Quote</span>
                </button>

                <Link to="/contact" className="btn btn-secondary btn-lg">
                  <Phone size={18} color="var(--accent-sky)" />
                  <span>Contact Sales Desk</span>
                </Link>
              </div>

              {/* Verified Technical Specifications */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-white)' }}>
                  Technical Specifications
                </h3>
                <div style={{ background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  {Object.entries(product.specifications).map(([key, val], idx) => (
                    <div 
                      key={key} 
                      style={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'baseline',
                        flexWrap: 'wrap',
                        gap: '0.5rem',
                        padding: '0.85rem 1.15rem', 
                        fontSize: '0.875rem',
                        background: idx % 2 === 0 ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                        borderBottom: idx === Object.keys(product.specifications).length - 1 ? 'none' : '1px solid var(--border-subtle)'
                      }}
                    >
                      <span style={{ color: 'var(--text-muted)', fontWeight: 500, flexShrink: 0 }}>{key}</span>
                      <span style={{ color: 'var(--text-white)', fontWeight: 600, textAlign: 'right' }}>{val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div style={{ marginBottom: '2.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--text-white)' }}>
                  Wholesale &amp; Deployment Features
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {product.features.map((feat, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                      <CheckCircle2 size={16} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Suggested Business Use */}
              <div style={{ padding: '1.25rem', background: '#0B1120', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--accent-sky)', fontWeight: 700, marginBottom: '0.35rem' }}>
                  Recommended Business Use
                </div>
                <div style={{ fontSize: '0.9rem', color: 'var(--text-white)' }}>
                  {product.suggestedUse}
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div style={{ marginTop: '5rem', paddingTop: '3.5rem', borderTop: '1px solid var(--border-subtle)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                  <div className="section-badge">Alternative Options</div>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--text-white)', margin: 0 }}>
                    Complementary Equipment
                  </h3>
                </div>
                <Link to="/products" style={{ color: 'var(--accent-sky)', fontSize: '0.875rem', fontWeight: 600 }}>
                  View All Products →
                </Link>
              </div>

              <div className="grid-3">
                {relatedProducts.map((p) => (
                  <ProductCard 
                    key={p.id} 
                    product={p} 
                    onRequestQuote={(name, cat) => onOpenQuoteModal(name, cat)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
