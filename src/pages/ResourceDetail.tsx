import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, BookOpen, Share2, FileText, CheckCircle2 } from 'lucide-react';
import { SEOHead } from '../components/SEOHead';
import { RESOURCES } from '../data/resources';

interface ResourceDetailProps {
  onOpenQuoteModal: (productName?: string, category?: string) => void;
}

export const ResourceDetail: React.FC<ResourceDetailProps> = ({ onOpenQuoteModal }) => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  const article = RESOURCES.find((r) => r.slug === slug);

  if (!article) {
    return (
      <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2>Article Not Found</h2>
          <p style={{ marginBottom: '2rem' }}>The requested knowledge guide could not be located.</p>
          <Link to="/resources" className="btn btn-primary">
            Return to Knowledge Hub
          </Link>
        </div>
      </div>
    );
  }

  const related = RESOURCES.filter((r) => r.id !== article.id).slice(0, 2);

  return (
    <>
      <SEOHead 
        title={`${article.title} | Knowledge Hub`}
        description={article.summary}
      />

      <section className="section-hero" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem', fontSize: '0.875rem' }}>
            <button 
              type="button" 
              onClick={() => navigate(-1)} 
              className="btn btn-secondary btn-sm"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}
            >
              <ArrowLeft size={14} /> Back
            </button>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <Link to="/resources" style={{ color: 'var(--text-secondary)' }}>Resources</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span style={{ color: 'var(--text-white)' }}>{article.category}</span>
          </div>

          <div style={{ maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
              <span className="section-badge" style={{ marginBottom: 0 }}>{article.category}</span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Clock size={14} /> {article.readTime}
              </span>
              <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Calendar size={14} /> {article.date}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', lineHeight: 1.25, marginBottom: '1.5rem', color: 'var(--text-white)' }}>
              {article.title}
            </h1>

            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2.5rem', borderLeft: '3px solid var(--accent-sky)', paddingLeft: '1.25rem' }}>
              {article.summary}
            </p>

            {/* Key Takeaways Box */}
            <div style={{ background: '#0B1222', border: '1px solid var(--border-accent)', borderRadius: 'var(--radius-sm)', padding: '1.75rem', marginBottom: '3rem' }}>
              <h4 style={{ color: 'var(--accent-sky)', marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookOpen size={18} /> Executive Summary &amp; Key Takeaways
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
                {article.keyTakeaways.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.9rem', color: 'var(--text-primary)' }}>
                    <CheckCircle2 size={16} color="var(--accent-sky)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Body Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75 }}>
              {article.content.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* In-Article B2B Quotation Callout */}
            <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'var(--bg-surface)', border: '1px solid var(--border-medium)', borderRadius: 'var(--radius-md)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '1.5rem' }}>
              <div>
                <h4 style={{ color: 'var(--text-white)', fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                  Planning a Fleet or Hardware Rollout?
                </h4>
                <p style={{ margin: 0, fontSize: '0.875rem' }}>
                  Our Swindon trade desk provides customized volume quotations for UK corporate and institutional clients.
                </p>
              </div>
              <button 
                type="button" 
                className="btn btn-primary"
                onClick={() => onOpenQuoteModal(article.title, 'Consultation / Fleet')}
              >
                <FileText size={16} /> Request Consultation Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
