/** @jest-environment jsdom */

import { MOBILE, cards, currentPage, expectCount, pageCount, render, screen } from '..';
import { data, shareTitle } from '../../../e2e/fixture';
import FavosPage from '../../pages/favos';

// お気に入りは歌唱データのID（古い順の連番）で持つ
const title = (id: number) => {
  const singing = data.singings[id];
  if (singing === undefined) throw new Error(`fixture に歌唱データ ${id} がない`);
  return shareTitle(singing);
};
const unfavoLabel = (id: number) => `${title(id)}をお気に入り解除`;
const range = (length: number) => Array.from({ length }, (_, i) => i);
/** 画面に並ぶ順（新しい順）のラベル */
const labels = (ids: number[]) => [...ids].sort((a, b) => b - a).map(unfavoLabel);

describe('件数', () => {
  test('お気に入りがなければ「0 Favorites」', () => {
    render(<FavosPage {...data} />);

    expectCount(0, 'Favorites');
    expect(cards()).toEqual([]);
    expect(pageCount()).toBe(0);
  });

  test('1件のときは「Favorite」', () => {
    render(<FavosPage {...data} />, { favos: [7] });

    expectCount(1, 'Favorite');
    expect(cards()).toEqual(labels([7]));
  });

  test('2件以上は「Favorites」で、新しい順に並ぶ', () => {
    render(<FavosPage {...data} />, { favos: [7, 44, 0] });

    expectCount(3, 'Favorites');
    expect(cards()).toEqual([unfavoLabel(44), unfavoLabel(7), unfavoLabel(0)]);
  });
});

describe('解除', () => {
  test('解除したカードは一覧から消え、件数が減る', async () => {
    const { user } = render(<FavosPage {...data} />, { favos: [7, 44] });

    await user.click(screen.getByRole('button', { name: unfavoLabel(44) }));

    expectCount(1, 'Favorite');
    expect(cards()).toEqual(labels([7]));
  });

  test('ページ内の最後の1件を解除すると前のページに戻る', async () => {
    // PCは1ページ20件。2ページ目は最も古い1件だけ
    const { user } = render(<FavosPage {...data} />, { favos: range(21) });
    expect(pageCount()).toBe(2);
    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(cards()).toEqual(labels([0]));

    await user.click(screen.getByRole('button', { name: unfavoLabel(0) }));

    expectCount(20, 'Favorites');
    expect(pageCount()).toBe(1);
    expect(currentPage()).toHaveAccessibleName('page 1');
    expect(cards()).toEqual(labels(range(21).slice(1)));
  });

  test('ページ内にまだ残っていれば同じページのまま', async () => {
    // モバイルは1ページ10件。2ページ目は古い2件
    const { user } = render(<FavosPage {...data} />, { favos: range(12), width: MOBILE });
    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(cards()).toEqual(labels([0, 1]));

    await user.click(screen.getByRole('button', { name: unfavoLabel(1) }));

    expect(currentPage()).toHaveAccessibleName('page 2');
    expect(cards()).toEqual(labels([0]));
  });

  test('最後の1件を解除しても1ページ目より前には戻らない', async () => {
    const { user } = render(<FavosPage {...data} />, { favos: [7] });

    await user.click(screen.getByRole('button', { name: unfavoLabel(7) }));

    expectCount(0, 'Favorites');
    expect(cards()).toEqual([]);
  });
});
