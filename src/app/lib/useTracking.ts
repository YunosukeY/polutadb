import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

declare global {
  interface Window {
    gtag?: (key: string, trackingId: string, config: { page_path: string }) => void;
  }
}

export const useTracking = (measurementId: string) => {
  const { listen } = useHistory();

  useEffect(() => {
    initializeGA(measurementId);

    const unlisten = listen((location) => {
      if (!window.gtag) return;
      window.gtag('config', measurementId, { page_path: location.pathname });
    });

    return unlisten;
  }, [measurementId, listen]);
};

function initializeGA(measurementId: string) {
  // load gtag.js:  https://developers.google.com/analytics/devguides/collection/gtagjs
  const script1 = document.createElement('script');
  script1.src = 'https://www.googletagmanager.com/gtag/js?id=' + measurementId;
  script1.async = true;
  document.body.appendChild(script1);

  const script2 = document.createElement('script');
  // プレーンテキスト、グローバルな window.gtag 関数を定義するため
  script2.text = `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');`;
  document.body.appendChild(script2);
}
