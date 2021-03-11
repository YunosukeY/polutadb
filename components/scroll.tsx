// https://reactrouter.com/web/guides/scroll-restoration
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export function ScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [router.pathname]);

  return null;
}