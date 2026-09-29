import React, { useState, useEffect } from 'react';

export const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // 2-second timer with smooth percentage increment
    const duration = 2000;
    const interval = 20;
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    // Start fade-out at exactly 2 seconds (2000ms)
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2000);

    // Fully remove from DOM once fade transition completes
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2450);

    return () => {
      clearInterval(timer);
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div 
      className={`preloader-overlay ${fade ? 'preloader-fade' : ''}`}
      id="site-preloader"
      aria-label="Loading Yasodh Ltd"
      role="status"
    >
      <div className="preloader-card">
        {/* Glowing Logo Icon Badge */}
        <div className="preloader-logo-container">
          <div className="preloader-glow" />
          <div 
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, #090D16 0%, #0F172A 100%)',
              border: '2px solid rgba(56, 189, 248, 0.45)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 8px 30px rgba(2, 132, 199, 0.35)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <svg width="34" height="34" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 6L16 17V26" stroke="#38BDF8" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M25 6L16 17" stroke="#0284C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="16" cy="17" r="2.5" fill="#E0F2FE" />
              <circle cx="7" cy="6" r="2" fill="#38BDF8" />
              <circle cx="25" cy="6" r="2" fill="#0284C7" />
              <circle cx="16" cy="26" r="2" fill="#38BDF8" />
            </svg>
          </div>
        </div>

        {/* Brand Name YASODH LTD */}
        <div className="preloader-brand-title">
          <span className="preloader-brand-name">YASODH</span>
          <span className="preloader-brand-suffix">LTD</span>
        </div>

        {/* Industry classification */}
        <div className="preloader-tagline">
          Wholesale Technology Hardware • UK SIC 46510
        </div>

        {/* Progress Bar (Fills in 2 seconds) */}
        <div className="preloader-progress-track">
          <div 
            className="preloader-progress-fill" 
            style={{ width: `${progress}%` }} 
          />
        </div>

        {/* Loading status & percentage */}
        <div className="preloader-status-text">
          <span>Initialising B2B wholesale platform...</span>
          <span style={{ color: 'var(--accent-sky)', fontWeight: 600 }}>{Math.round(progress)}%</span>
        </div>
      </div>
    </div>
  );
};
