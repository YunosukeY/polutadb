import { useEffect } from 'react';

export function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export function ScrollToSearch() {
  useEffect(() => {
    document.getElementById('search')?.scrollIntoView();
    window.scrollBy(0, -70);
  }, []);

  return null;
}
