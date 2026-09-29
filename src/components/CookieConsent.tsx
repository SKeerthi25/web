import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Settings, X, Check, Cookie } from 'lucide-react';

export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: string;
}

const STORAGE_KEY = 'yasodh_cookie_consent_v1';

interface CookieConsentProps {
  forceOpenSettings?: boolean;
  onCloseSettings?: () => void;
}

export const CookieConsent: React.FC<CookieConsentProps> = ({ 
  forceOpenSettings = false,
  onCloseSettings 
}) => {
  const [showBanner, setShowBanner] = useState<boolean>(false);
  const [showSettingsModal, setShowSettingsModal] = useState<boolean>(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always true
    analytics: false,
    marketing: false,
    timestamp: '',
  });

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setPreferences(JSON.parse(stored));
        setShowBanner(false);
      } else {
        // First visit
        setShowBanner(true);
      }
    } catch {
      setShowBanner(true);
    }
  }, []);

  useEffect(() => {
    if (forceOpenSettings) {
      setShowSettingsModal(true);
    }
  }, [forceOpenSettings]);

  const savePreferences = (newPrefs: CookiePreferences) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    } catch {
      // Ignore
    }
    setPreferences(newPrefs);
    setShowBanner(false);
    setShowSettingsModal(false);
    if (onCloseSettings) onCloseSettings();
  };

  const handleAcceptAll = () => {
    savePreferences({
      necessary: true,
      analytics: true,
      marketing: true,
      timestamp: new Date().toISOString(),
    });
  };

  const handleRejectNonEssential = () => {
    savePreferences({
      necessary: true,
      analytics: false,
      marketing: false,
      timestamp: new Date().toISOString(),
    });
  };

  const handleCustomSave = () => {
    savePreferences({
      ...preferences,
      necessary: true,
      timestamp: new Date().toISOString(),
    });
  };

  return (
    <>
      {/* Floating First-Visit Banner */}
      {showBanner && !showSettingsModal && (
        <div className="cookie-banner" role="dialog" aria-label="Cookie consent banner">
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.875rem' }}>
            <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Cookie size={20} color="var(--accent-sky)" />
            </div>
            <div>
              <h4 style={{ fontSize: '0.9375rem', color: 'var(--text-white)', marginBottom: '0.25rem' }}>
                Privacy &amp; Cookie Preferences
              </h4>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.5, margin: 0 }}>
                We use cookies to improve your experience, understand website usage and support essential website functionality. Read our <Link to="/cookie-policy" style={{ color: 'var(--accent-sky)', textDecoration: 'underline' }}>Cookie Policy</Link> for details.
              </p>
            </div>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: '0.625rem', marginTop: '0.5rem' }}>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={() => setShowSettingsModal(true)}
            >
              <Settings size={14} /> Cookie Settings
            </button>
            <button 
              type="button" 
              className="btn btn-secondary btn-sm"
              onClick={handleRejectNonEssential}
            >
              Reject Non-Essential
            </button>
            <button 
              type="button" 
              className="btn btn-primary btn-sm"
              onClick={handleAcceptAll}
            >
              <Check size={14} /> Accept All
            </button>
          </div>
        </div>
      )}

      {/* Granular Cookie Settings Modal */}
      {showSettingsModal && (
        <div className="modal-overlay" onClick={() => { setShowSettingsModal(false); if (onCloseSettings) onCloseSettings(); }}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <ShieldCheck size={24} color="var(--accent-sky)" />
                <h3 style={{ margin: 0, fontSize: '1.25rem' }}>Cookie &amp; Consent Management</h3>
              </div>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={() => { setShowSettingsModal(false); if (onCloseSettings) onCloseSettings(); }}
                style={{ padding: '0.35rem' }}
                aria-label="Close"
              >
                <X size={18} />
              </button>
            </div>

            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
              Yasodh Ltd respects your data privacy under UK GDPR and PECR regulations. You may customize your consent preferences below.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.75rem' }}>
              {/* Necessary */}
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Necessary Cookies</span>
                  <span className="badge badge-stock" style={{ fontSize: '0.7rem' }}>Always Active</span>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
                  Essential for basic site navigation, secure session management, and quotation cart stability. These cannot be disabled.
                </p>
              </div>

              {/* Analytics */}
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Analytics Cookies</span>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem' }}>
                    <input 
                      type="checkbox" 
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--accent-sky)' }}
                    />
                    <span style={{ fontSize: '0.75rem', color: preferences.analytics ? 'var(--accent-sky)' : 'var(--text-muted)' }}>
                      {preferences.analytics ? 'Enabled' : 'Disabled'}
                    </span>
                  </label>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
                  Help us understand how business visitors interact with catalogue pages and navigation paths so we can refine performance.
                </p>
              </div>

              {/* Marketing */}
              <div style={{ padding: '1rem', background: 'rgba(255, 255, 255, 0.02)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-sm)' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.35rem' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-white)' }}>Marketing &amp; Targeting Cookies</span>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem' }}>
                    <input 
                      type="checkbox" 
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                      style={{ width: '18px', height: '18px', accentColor: 'var(--accent-sky)' }}
                    />
                    <span style={{ fontSize: '0.75rem', color: preferences.marketing ? 'var(--accent-sky)' : 'var(--text-muted)' }}>
                      {preferences.marketing ? 'Enabled' : 'Disabled'}
                    </span>
                  </label>
                </div>
                <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', margin: 0 }}>
                  Used to evaluate B2B technology campaigns and measure commercial referral effectiveness.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'flex-end', gap: '0.75rem' }}>
              <button 
                type="button" 
                className="btn btn-secondary btn-sm"
                onClick={handleRejectNonEssential}
              >
                Reject Non-Essential
              </button>
              <button 
                type="button" 
                className="btn btn-primary btn-sm"
                onClick={handleCustomSave}
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
