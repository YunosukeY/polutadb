import { format } from 'util';
import { StyledEngineProvider, ThemeProvider, createTheme } from '@mui/material';
import { act, render as rtlRender, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import type * as React from 'react';
import { RecoilRoot } from 'recoil';
import { type Data, Singing } from '../data/types';
import Persistence from '../store/Persistence';
import { initializeSelector } from '../store/dataAtom';
import { push, readyRouter, resetRouter } from './router';

// コンポーネントのテストの共通ヘルパー。
// 状態（Recoil、localStorage、URL、画面幅）の初期化とプロバイダをここにまとめる。
// テスト本体は Recoil のAPIを直接使わず、render のオプションと画面の操作だけで状態を作る

export { act, screen, within } from '@testing-library/react';
/** router.push のモック */
export { push };

// 表示件数（useDisplayNum）は画面幅で変わるが、jsdom ではメディアクエリが動かないので、
// MUI の useMediaQuery が使う matchMedia を「min-width を幅と比べるだけ」のモックにする
const PC = 1024; // md: 1ページ20件
export const MOBILE = 500; // xs: 1ページ10件
let viewportWidth = PC;

window.matchMedia = (query: string) => {
  const min = /^\(min-width:\s*([\d.]+)px\)$/.exec(query)?.[1];
  if (min === undefined) throw new Error(`matchMedia のモックが対応していないクエリ: ${query}`);
  return {
    matches: viewportWidth >= Number(min),
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  };
};

// jsdom に無い。ページ送りのときに呼ばれる（common/Result）
export const scrollIntoView = jest.fn();
window.HTMLElement.prototype.scrollIntoView = scrollIntoView;

// console.error と console.warn が出たらテストを失敗させる（E2Eと同じ方針）。
// React や MUI の警告を、依存を更新したときに見落とさないため。
// 現状のアプリで出ている既知の警告だけを個別に許可する
const allowedConsoleMessages = [
  // 未選択を null ではなく空の選択肢で表している（Select/Search の各 Autocomplete）
  /^MUI: The value provided to Autocomplete is invalid/,
  // styled に渡した fontsize がそのまま svg に渡っている（ResultCard/Star）
  /^Warning: Invalid DOM property `fontsize`/,
];
let unexpectedConsoleMessages: string[] = [];

// デバウンスやMUIのトランジションを待たずに進められるよう、タイマーは偽物にする。
// 時間を進めるときは advance を使う
beforeEach(() => {
  unexpectedConsoleMessages = [];
  for (const level of ['error', 'warn'] as const) {
    jest.spyOn(console, level).mockImplementation((...args: unknown[]) => {
      const message = format(...args);
      if (!allowedConsoleMessages.some((re) => re.test(message))) {
        unexpectedConsoleMessages.push(`console.${level}: ${message}`);
      }
    });
  }
  jest.useFakeTimers();
  window.localStorage.clear();
  viewportWidth = PC;
  resetRouter();
  scrollIntoView.mockClear();
  // 「何回目か」のカウンタは static なので、テストをまたいで持ち越さないようにする
  Singing.counter.clear();
});
afterEach(() => {
  jest.useRealTimers();
  jest.restoreAllMocks();
  expect(unexpectedConsoleMessages).toEqual([]);
});

/** render の routerReady を false にしたルーターに、URLのクエリを届ける */
export const ready = () => {
  act(() => {
    readyRouter();
  });
};

/** 時間を進める */
export const advance = (ms: number) => {
  act(() => {
    jest.advanceTimersByTime(ms);
  });
};

/** 表示中のカードを、お気に入りボタンの aria-label（文言 + 「を」 + 登録/解除）の並びで返す */
export const cards = () =>
  screen
    .queryAllByRole('button', { name: /をお気に入り(登録|解除)$/ })
    .map((button) => button.getAttribute('aria-label'));

/** ページ送りのボタンの数（= ページ数） */
export const pageCount = () => screen.queryAllByRole('button', { name: /page \d+$/ }).length;

/** いま表示しているページのボタン */
export const currentPage = () => screen.getByRole('button', { current: true });

/** 件数の見出し（「45 Results」「1 Favorite」など）が表示されていること */
export const expectCount = (count: number, unit: string) => {
  expect(screen.getByRole('heading', { name: String(count) })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: unit })).toBeInTheDocument();
};

type Options = {
  /** 描画時点のURL。既定は / */
  url?: string;
  /** false にすると、ready を呼ぶまでURLのクエリが届かない（router.isReady が false）。既定は true */
  routerReady?: boolean;
  /** 画面幅（px）。既定はPC（1ページ20件） */
  width?: number;
  /** 取得済みにしておくデータ。ページ（src/pages）は props で受け取って自分で初期化するので不要 */
  data?: Data;
  /** localStorage に保存済みのお気に入り（歌唱データのID） */
  favos?: number[];
  /** localStorage に保存済みのソート */
  sort?: number;
};

/** _app.tsx と同じプロバイダで包んで描画する */
export const render = (ui: React.ReactElement, { url, routerReady, width, data, favos, sort }: Options = {}) => {
  resetRouter(url, routerReady);
  if (width !== undefined) viewportWidth = width;
  if (favos !== undefined) window.localStorage.setItem('favos', JSON.stringify(favos.map((id) => [id, true])));
  if (sort !== undefined) window.localStorage.setItem('sortedBy', String(sort));

  const user = userEvent.setup({ advanceTimers: jest.advanceTimersByTime });
  const result = rtlRender(
    <RecoilRoot
      initializeState={({ set }) => {
        if (data !== undefined) set(initializeSelector, data);
      }}
    >
      <StyledEngineProvider injectFirst>
        {/* テーマは色とフォントだけの違いなので既定のものを使う。見た目はVRTで確認する */}
        <ThemeProvider theme={createTheme()}>
          <Persistence />
          {ui}
        </ThemeProvider>
      </StyledEngineProvider>
    </RecoilRoot>,
  );
  return { user, ...result };
};
