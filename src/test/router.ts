import type { ParsedUrlQuery } from 'querystring';
import { useMemo, useSyncExternalStore } from 'react';

// next/router のモック（src/test/setup.ts で差し替えている）。
// アプリが使っている pathname、query、isReady、push、events だけを持つ。
// push すると pathname と query が変わり、useRouter を使っているコンポーネントが再描画される

type Location = { pathname: string; query: ParsedUrlQuery; isReady: boolean };

const parse = (url: string): Location => {
  const u = new URL(url, 'http://localhost');
  return { pathname: u.pathname, query: Object.fromEntries(u.searchParams), isReady: true };
};

let location: Location = parse('/');
const listeners = new Set<() => void>();

const subscribe = (listener: () => void) => {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
};

/** router.push のモック。呼び出しの検証に使う */
export const push = jest.fn((url: string, _as?: string, _options?: { scroll?: boolean }) => {
  location = parse(url);
  listeners.forEach((listener) => listener());
  return Promise.resolve(true);
});

const events = { on: jest.fn(), off: jest.fn() };

export const useRouter = () => {
  const current = useSyncExternalStore(subscribe, () => location);
  return useMemo(() => ({ ...current, push, events }), [current]);
};

// isReady が false の間に隠しておくURL
let pending: Location | undefined;

/**
 * 現在のURLを差し替え、push の呼び出し履歴を消す。描画の前に呼ぶ。
 * ready を false にすると、Next.js の getStaticProps のページをクエリ付きのURLで開いた直後と同じく、
 * readyRouter を呼ぶまで query が空で isReady が false になる
 */
export const resetRouter = (url = '/', ready = true) => {
  const parsed = parse(url);
  pending = ready ? undefined : parsed;
  location = ready ? parsed : { ...parsed, query: {}, isReady: false };
  push.mockClear();
};

/** resetRouter で ready を false にしたルーターに、URLのクエリを届ける。act の中で呼ぶ */
export const readyRouter = () => {
  if (pending === undefined) throw new Error('ルーターはすでに ready になっている');
  location = pending;
  pending = undefined;
  listeners.forEach((listener) => listener());
};
