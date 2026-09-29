import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowRight, FileText, CheckCircle2, Layers } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onRequestQuote: (productName: string, category: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onRequestQuote }) => {
  return (
    <div className="card" style={{ display: 'flex', flexDirection: 'column', height: '100%', padding: '0' }}>
      {/* Product Image Area */}
      <div style={{ position: 'relative', width: '100%', height: '220px', background: '#070B14', overflow: 'hidden', borderBottom: '1px solid var(--border-subtle)' }}>
        <img 
          src={product.image} 
          alt={product.name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
          className="product-img"
          onError={(e) => {
            // Fallback gracefully to high-res tech fallback if offline
            (e.target as HTMLImageElement).src = '/images/hero-tech.jpg';
          }}
        />

        {/* Top Badges */}
        <div style={{ position: 'absolute', top: '12px', left: '12px', display: 'flex', gap: '6px', zIndex: 2 }}>
          {product.badge && (
            <span style={{ fontSize: '0.7rem', padding: '0.2rem 0.55rem', borderRadius: '4px', background: 'rgba(2, 132, 199, 0.85)', color: '#FFFFFF', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
              {product.badge}
            </span>
          )}
        </div>

        <div style={{ position: 'absolute', top: '12px', right: '12px', zIndex: 2 }}>
          <span 
            className={`badge ${product.stockStatus === 'In Stock' ? 'badge-stock' : 'badge-batch'}`}
            style={{ backdropFilter: 'blur(8px)', background: 'rgba(15, 23, 42, 0.85)' }}
          >
            {product.stockStatus}
          </span>
        </div>

        {/* MOQ Tag */}
        <div style={{ position: 'absolute', bottom: '10px', left: '12px', zIndex: 2 }}>
          <span style={{ fontSize: '0.7rem', padding: '0.15rem 0.5rem', borderRadius: '4px', background: 'rgba(0, 0, 0, 0.75)', color: 'var(--text-secondary)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            MOQ: {product.minOrderQuantity} units
          </span>
        </div>
      </div>

      {/* Product Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <div style={{ fontSize: '0.75rem', color: 'var(--accent-sky)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.4rem' }}>
          {product.categoryLabel}
        </div>

        <h3 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginBottom: '0.6rem', lineHeight: 1.35 }}>
          <Link to={`/products/${product.id}`} style={{ color: 'inherit' }}>
            {product.name}
          </Link>
        </h3>

        <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.55 }}>
          {product.shortDescription}
        </p>

        {/* Key Specs Preview (First 2 specs) */}
        <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: '6px', padding: '0.75rem', marginBottom: '1.25rem', fontSize: '0.75rem' }}>
          {Object.entries(product.specifications).slice(0, 2).map(([key, val]) => (
            <div key={key} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.2rem 0', color: 'var(--text-muted)' }}>
              <span style={{ color: 'var(--text-secondary)' }}>{key}:</span>
              <span style={{ color: 'var(--text-white)', fontWeight: 500, textAlign: 'right', maxWidth: '60%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {val}
              </span>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.625rem', marginTop: 'auto' }}>
          <Link 
            to={`/products/${product.id}`} 
            className="btn btn-secondary btn-sm"
            style={{ width: '100%' }}
          >
            <span>Details</span>
            <ArrowRight size={13} />
          </Link>
          <button 
            type="button" 
            className="btn btn-outline-cyan btn-sm"
            style={{ width: '100%' }}
            onClick={() => onRequestQuote(product.name, product.categoryLabel)}
          >
            <FileText size={13} />
            <span>Quote</span>
          </button>
        </div>
      </div>
    </div>
  );
};
