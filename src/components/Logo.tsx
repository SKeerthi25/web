import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark' | 'simple';
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = true }) => {
  return (
    <Link to="/" className={`inline-flex items-center gap-3 group text-decoration-none ${className}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      <div 
        style={{
          width: '42px',
          height: '42px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #090D16 0%, #0F172A 100%)',
          border: '1.5px solid rgba(56, 189, 248, 0.35)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 14px rgba(2, 132, 199, 0.25)',
          position: 'relative',
          overflow: 'hidden',
          flexShrink: 0
        }}
      >
        <div 
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(circle at 30% 20%, rgba(6, 182, 212, 0.25) 0%, transparent 70%)'
          }} 
        />
        <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 6L16 17V26" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M25 6L16 17" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="16" cy="17" r="2.5" fill="#E0F2FE" />
          <circle cx="7" cy="6" r="2" fill="#38BDF8" />
          <circle cx="25" cy="6" r="2" fill="#0284C7" />
          <circle cx="16" cy="26" r="2" fill="#38BDF8" />
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 800, 
              fontSize: '1.35rem', 
              letterSpacing: '-0.02em', 
              color: '#FFFFFF' 
            }}
          >
            YASODH
          </span>
          <span 
            style={{ 
              fontFamily: 'var(--font-heading)', 
              fontWeight: 700, 
              fontSize: '0.85rem', 
              color: '#38BDF8', 
              letterSpacing: '0.05em' 
            }}
          >
            LTD
          </span>
        </div>
        {showSubtitle && (
          <span 
            style={{ 
              fontSize: '0.6875rem', 
              color: 'var(--text-muted)', 
              letterSpacing: '0.04em', 
              textTransform: 'uppercase', 
              lineHeight: 1 
            }}
          >
            Technology Wholesale
          </span>
        )}
      </div>
    </Link>
  );
};
