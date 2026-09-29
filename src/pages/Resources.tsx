import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, Clock, Calendar, ArrowRight, X, FileText } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { RESOURCES } from '../data/resources';
import { ResourceArticle } from '../types';

export const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Buying Guides', 'Technology Guides', 'Hardware Insights', 'Business IT Tips'];

  const filteredArticles = useMemo(() => {
    return RESOURCES.filter((art) => {
      if (selectedCategory !== 'All' && art.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        return (
          art.title.toLowerCase().includes(q) ||
          art.summary.toLowerCase().includes(q) ||
          art.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const featured = RESOURCES[0];

  return (
    <>
      <SEOHead 
        title="Resources & B2B Technology Guides | Yasodh Ltd" 
        description="Comprehensive UK business IT procurement guides, hardware lifecycle planning, commercial monitor setup, and wholesale technology insights."
      />

      {/* Hero */}
      <section className="section-hero" style={{ borderBottom: '1px solid var(--border-subtle)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <div className="section-badge">Knowledge Centre</div>
            <h1 style={{ marginBottom: '1.25rem' }}>
              Technology Guides &amp; <span className="text-gradient">Procurement Insights</span>
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.65 }}>
              Practical advice, technical considerations, and hardware buying strategies to help UK organisations navigate commercial IT investments.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="section">
        <div className="container">
          {/* Featured Article Banner */}
          {featured && selectedCategory === 'All' && !searchQuery && (
            <div 
              className="card"
              style={{
                padding: '2.5rem',
                background: 'linear-gradient(135deg, #0C1527 0%, #060B14 100%)',
                border: '1px solid var(--border-accent)',
                marginBottom: '3.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2.5rem',
                alignItems: 'center'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <span className="badge badge-batch">Featured Guide</span>
                  <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{featured.readTime}</span>
                </div>

                <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', color: 'var(--text-white)', marginBottom: '1rem', lineHeight: 1.3 }}>
                  <Link to={`/resources/${featured.slug}`} style={{ color: 'inherit' }}>
                    {featured.title}
                  </Link>
                </h2>

                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                  {featured.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', fontSize: '0.8125rem', color: 'var(--text-muted)', marginBottom: '1.75rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Calendar size={14} /> {featured.date}
                  </span>
                  <span>•</span>
                  <span>Category: {featured.category}</span>
                </div>

                <Link to={`/resources/${featured.slug}`} className="btn btn-primary">
                  <span>Read Full Article</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)', padding: '2rem' }}>
                <h4 style={{ color: 'var(--accent-sky)', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <BookOpen size={18} /> In This Guide:
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                  {featured.keyTakeaways.map((takeaway, i) => (
                    <div key={i} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <span style={{ color: 'var(--accent-sky)', fontWeight: 700 }}>✓</span>
                      <span>{takeaway}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Search & Categories Bar */}
          <div 
            style={{
              background: 'var(--bg-surface)',
              border: '1px solid var(--border-medium)',
              borderRadius: 'var(--radius-md)',
              padding: '1.25rem',
              marginBottom: '2.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            {/* Search */}
            <div style={{ position: 'relative', flex: '1 1 300px' }}>
              <Search 
                size={18} 
                color="var(--text-muted)" 
                style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} 
              />
              <input 
                type="text" 
                placeholder="Search articles and procurement guides..."
                className="form-input"
                style={{ paddingLeft: '2.6rem' }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button 
                  type="button" 
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'transparent', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Categories */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={`btn btn-sm ${selectedCategory === cat ? 'btn-primary' : 'btn-secondary'}`}
                  style={{ borderRadius: 'var(--radius-full)' }}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid-3">
            {filteredArticles.map((article) => (
              <div key={article.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                  <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-sky)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                    {article.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.15rem', color: 'var(--text-white)', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                  <Link to={`/resources/${article.slug}`} style={{ color: 'inherit' }}>
                    {article.title}
                  </Link>
                </h3>

                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {article.summary}
                </p>

                <div style={{ marginTop: 'auto', paddingTop: '1rem', borderTop: '1px solid var(--border-subtle)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {article.date}
                  </span>
                  <Link to={`/resources/${article.slug}`} style={{ fontSize: '0.85rem', color: 'var(--accent-sky)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                    Read Article <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
