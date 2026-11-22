import type { ParsedUrlQuery } from 'querystring';
import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

/**
 * URLのクエリが読めるようになった時点で、1回だけ onReady を呼ぶ。
 * getStaticProps のページでは、最初の描画の router.query は空で、クエリはあとからクライアント側で届く。
 * マウント時に読むと空になるので、router.isReady を待つ
 */
export const useRouterReady = (onReady: (query: ParsedUrlQuery) => void) => {
  const router = useRouter();
  const done = useRef(false);
  useEffect(() => {
    if (!router.isReady || done.current) return;
    done.current = true;
    onReady(router.query);
  });
};
