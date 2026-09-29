import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title: string;
  description: string;
  canonicalPath?: string;
}

export const SEOHead: React.FC<SEOHeadProps> = ({ title, description, canonicalPath }) => {
  const location = useLocation();

  useEffect(() => {
    // Set document title
    document.title = `${title} | Yasodh Ltd UK`;

    // Set meta description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Set canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    const currentPath = canonicalPath || location.pathname;
    canonical.setAttribute('href', `https://www.yasodh.co.uk${currentPath}`);

    // Scroll to top on page route change
    window.scrollTo(0, 0);
  }, [title, description, canonicalPath, location.pathname]);

  return null;
};
