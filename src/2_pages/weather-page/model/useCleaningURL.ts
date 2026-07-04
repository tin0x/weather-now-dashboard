import { useEffect } from 'react';

export const useCleaningURL = () => {
  useEffect(() => {
    const cleanUrl = () => {
      const { search, hash, pathname } = window.location;

      if (search || hash) {
        window.history.replaceState(null, '', pathname);
      }
    };

    cleanUrl();
    window.addEventListener('popstate', cleanUrl);
    return () => window.removeEventListener('popstate', cleanUrl);
  }, []);
};
