import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, Package, RefreshCw, X, ArrowUpDown } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { ProductCard } from '../components/ProductCard';
import { PRODUCTS } from '../data/products';
import { ProductCategory, Product } from '../types';

interface ProductsProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const Products: React.FC<ProductsProps> = ({ onOpenQuoteModal }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [sortBy, setSortBy] = useState<'featured' | 'name-asc' | 'moq-asc'>('featured');
  const [stockFilter, setStockFilter] = useState<'all' | 'in-stock'>('all');

  // Keep state synced with URL query param if user clicked a link
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  const categories: { key: string; label: string; count: number }[] = useMemo(() => {
    const counts: Record<string, number> = {};
    PRODUCTS.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });

    return [
      { key: 'all', label: 'All Equipment', count: PRODUCTS.length },
      { key: 'laptops', label: 'Laptops', count: counts['laptops'] || 0 },
      { key: 'desktops', label: 'Desktop PCs', count: counts['desktops'] || 0 },
      { key: 'monitors', label: 'Monitors', count: counts['monitors'] || 0 },
      { key: 'networking', label: 'Networking', count: counts['networking'] || 0 },
      { key: 'storage', label: 'Storage', count: counts['storage'] || 0 },
      { key: 'components', label: 'Components', count: counts['components'] || 0 },
      { key: 'peripherals', label: 'Peripherals', count: counts['peripherals'] || 0 },
      { key: 'software', label: 'Software', count: counts['software'] || 0 },
      { key: 'accessories', label: 'Accessories', count: counts['accessories'] || 0 },
    ];
  }, []);

  const handleCategoryChange = (key: string) => {
    setSelectedCategory(key);
    if (key === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: key });
    }
  };

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category filter
      if (selectedCategory !== 'all' && product.category !== selectedCategory) {
        return false;
      }
      // Stock filter
      if (stockFilter === 'in-stock' && product.stockStatus !== 'In Stock') {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = product.name.toLowerCase().includes(q);
        const matchesDesc = product.shortDescription.toLowerCase().includes(q);
        const matchesCat = product.categoryLabel.toLowerCase().includes(q);
        const matchesSpecs = Object.values(product.specifications).some((val) =>
          val.toLowerCase().includes(q)
        );
        if (!matchesName && !matchesDesc && !matchesCat && !matchesSpecs) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'name-asc') {
        return a.name.localeCompare(b.name);
      }
      if (sortBy === 'moq-asc') {
        return a.minOrderQuantity - b.minOrderQuantity;
      }
      // featured
      return (b.popular ? 1 : 0) - (a.popular ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, sortBy, stockFilter]);

  return (
    <>
      <SEOHead 
        title="Products Catalogue | Wholesale Computers, Peripherals & Software"
        description="Browse the complete Yasodh Ltd B2B product catalogue: Enterprise laptops, desktop workstations, commercial monitors, networking switches, storage, and software."
      />

      {/* Catalogue Header */}
      <section className="section-hero" style={{ paddingBottom: '2.5rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">B2B Wholesale Equipment</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Product <span className="text-gradient">Catalogue</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Explore commercial-grade IT equipment, systems, components, and software available for business and institutional batch supply.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogue Area */}
      <section className="section" style={{ paddingTop: '3rem' }}>
        <div className="container">
          {/* Controls Bar: Search, Filters, Sorting */}
          <div 
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '1.75rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Search Input */}
            <div style={{ position: 'relative', flex: '1 1 280px', width: '100%' }}>
              <Search 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input 
                type="text" 
                placeholder="Search models, specs (e.g. DDR5, NVMe, QHD, PoE)..."
                className="form-input"
                style={{ paddingLeft: '2.6rem' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', padding: '4px' }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Filter Controls */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center', width: 'auto' }}>
              {/* Stock Filter Toggle */}
              <button 
                type="button" 
                className={`btn btn-sm ${stockFilter === 'in-stock' ? 'btn-primary' : 'btn-secondary'}`}
                style={{ minHeight: '40px' }}
                onClick={() => setStockFilter(stockFilter === 'all' ? 'in-stock' : 'all')}
              >
                <Package size={14} />
                <span>In Stock Only</span>
              </button>

              {/* Sort Dropdown */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ArrowUpDown size={14} color="var(--text-muted)" />
                <select 
                  className="form-select"
                  style={{ padding: '0.45rem 0.85rem', fontSize: '0.85rem', width: 'auto', minHeight: '40px' }}
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                >
                  <option value="featured">Sort: Featured</option>
                  <option value="name-asc">Sort: Name (A-Z)</option>
                  <option value="moq-asc">Sort: Lowest MOQ</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Tabs with horizontal swipe on mobile */}
          <div className="category-tabs-container">
            {categories.map((cat) => (
              <button
                key={cat.key}
                type="button"
                className={`btn btn-sm ${selectedCategory === cat.key ? 'btn-primary' : 'btn-secondary'}`}
                style={{ borderRadius: 'var(--radius-full)', whiteSpace: 'nowrap', flexShrink: 0, minHeight: '38px' }}
                onClick={() => handleCategoryChange(cat.key)}
              >
                <span>{cat.label}</span>
                <span style={{ opacity: 0.75, fontSize: '0.75rem' }}>({cat.count})</span>
              </button>
            ))}
          </div>

          {/* Results Summary */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
            <div>
              Showing <strong>{filteredProducts.length}</strong> technology products
              {selectedCategory !== 'all' && <span> in <strong>{selectedCategory}</strong></span>}
            </div>
            {(selectedCategory !== 'all' || searchQuery || stockFilter !== 'all') && (
              <button 
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchQuery('');
                  setStockFilter('all');
                  searchParams.delete('category');
                  setSearchParams(searchParams);
                }}
                style={{ background: 'transparent', border: 'none', color: 'var(--accent-sky)', cursor: 'pointer', fontSize: '0.8125rem' }}
              >
                Reset All Filters
              </button>
            )}
          </div>

          {/* Product Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid-3">
              {filteredProducts.map((product) => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onRequestQuote={(name, cat) => onOpenQuoteModal(name, cat)}
                />
              ))}
            </div>
          ) : (
            <div style={{ textAlign: 'center', padding: '4rem 1.5rem', background: 'var(--bg-surface)', borderRadius: 'var(--radius-md)', border: '1px dashed var(--border-medium)' }}>
              <Package size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem auto' }} />
              <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No products match your search</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                We frequently procure custom specifications and hard-to-find hardware not listed in standard stock.
              </p>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenQuoteModal()}
              >
                Request Custom Sourcing
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
