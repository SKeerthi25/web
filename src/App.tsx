import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { QuoteModal } from './components/QuoteModal';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Products } from './pages/Products';
import { ProductDetail } from './pages/ProductDetail';
import { Solutions } from './pages/Solutions';
import { Services } from './pages/Services';
import { Industries } from './pages/Industries';
import { Resources } from './pages/Resources';
import { ResourceDetail } from './pages/ResourceDetail';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { Quote } from './pages/Quote';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { CookiePolicy } from './pages/CookiePolicy';
import { Terms } from './pages/Terms';
import { Disclaimer } from './pages/Disclaimer';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState<{
    productName: string;
    category: string;
  }>({
    productName: '',
    category: 'Laptops & Computers',
  });

  const [cookieSettingsOpen, setCookieSettingsOpen] = useState(false);

  const handleOpenQuoteModal = (productName?: string, category?: string) => {
    setQuoteModalData({
      productName: productName || '',
      category: category || 'Laptops & Computers',
    });
    setQuoteModalOpen(true);
  };

  return (
    <Router>
      {/* 2-Second Website Intro Preloader */}
      <Preloader />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {/* Sticky Header with Mega-Menu & Quote CTA */}
        <Header onOpenQuoteModal={handleOpenQuoteModal} />

        {/* Main Content Router */}
        <main style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/products/:id" element={<ProductDetail onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/solutions" element={<Solutions onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/services" element={<Services onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/industries" element={<Industries onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/resources/:slug" element={<ResourceDetail onOpenQuoteModal={handleOpenQuoteModal} />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/quote" element={<Quote />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route 
              path="/cookie-policy" 
              element={<CookiePolicy onOpenCookieSettings={() => setCookieSettingsOpen(true)} />} 
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Corporate Footer with NAP & Legal Information */}
        <Footer onOpenCookieSettings={() => setCookieSettingsOpen(true)} />

        {/* Global Quick Quote Modal */}
        <QuoteModal
          isOpen={quoteModalOpen}
          onClose={() => setQuoteModalOpen(false)}
          defaultProduct={quoteModalData.productName}
          defaultCategory={quoteModalData.category}
        />

        {/* GDPR Cookie Consent Banner & Granular Settings Modal */}
        <CookieConsent
          forceOpenSettings={cookieSettingsOpen}
          onCloseSettings={() => setCookieSettingsOpen(false)}
        />
      </div>
    </Router>
  );
};

export default App;
