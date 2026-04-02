import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export function ScrollToTop() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  // Also force scroll to top on initial load regardless of previous state
  useEffect(() => {
    // If there's a hash in the URL on initial load, remove it so the browser doesn't jump
    if (window.location.hash) {
      navigate(window.location.pathname + window.location.search, { replace: true });
    }

    // Force scroll to top immediately
    window.scrollTo(0, 0);
    
    // Double check after tiny delays to beat native browser behavior
    const t1 = setTimeout(() => window.scrollTo(0, 0), 10);
    const t2 = setTimeout(() => window.scrollTo(0, 0), 100);
    const t3 = setTimeout(() => window.scrollTo(0, 0), 300);
    
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [navigate]);

  return null;
}
