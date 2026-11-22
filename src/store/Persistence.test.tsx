/** @jest-environment jsdom */
import { data, newestFirst, shareTitle } from '../../e2e/fixture';
import Favos from '../components/Favos';
import Sort from '../components/Select/Sort';
import Home from '../pages';
import { advance, render, screen } from '../test';

const stored = (key: string) => window.localStorage.getItem(key);

describe('読み込み', () => {
  test('保存されたソートが選択された状態になる', () => {
    render(<Sort />, { sort: 2 });

    expect(screen.getByRole('radio', { name: 'アーティスト名順' })).toBeChecked();
  });

  test('保存がなければ時系列順', () => {
    render(<Sort />);

    expect(screen.getByRole('radio', { name: '時系列順' })).toBeChecked();
  });

  test('保存されたお気に入りが登録済みになる', () => {
    const singing = data.singings[3];
    if (singing === undefined) throw new Error('fixture に歌唱データがない');

    render(<Favos />, { data, favos: [3] });

    expect(screen.getByRole('button', { name: `${shareTitle(singing)}をお気に入り解除` })).toBeInTheDocument();
  });

  test('解除済み（false）として保存されたものは登録済みにならない', () => {
    window.localStorage.setItem('favos', JSON.stringify([[3, false]]));

    render(<Favos />, { data });

    expect(screen.queryByRole('button', { name: /をお気に入り解除$/ })).not.toBeInTheDocument();
  });
});

describe('保存', () => {
  test('ソートを切り替えると sortedBy に保存される', async () => {
    const { user } = render(<Sort />);

    await user.click(screen.getByRole('radio', { name: '曲名順' }));
    expect(stored('sortedBy')).toBe('1');

    await user.click(screen.getByRole('radio', { name: 'アーティスト名順' }));
    expect(stored('sortedBy')).toBe('2');
  });

  test('お気に入りの登録と解除が favos に保存される', async () => {
    const singing = newestFirst[0];
    if (singing === undefined) throw new Error('fixture に歌唱データがない');
    const title = shareTitle(singing);
    // 歌唱データのID（古い順の連番）で保存される
    const id = data.singings.length - 1;
    const { user } = render(<Home {...data} />);
    advance(300);

    await user.click(screen.getByRole('button', { name: `${title}をお気に入り登録` }));
    expect(stored('favos')).toBe(JSON.stringify([[id, true]]));

    await user.click(screen.getByRole('button', { name: `${title}をお気に入り解除` }));
    expect(stored('favos')).toBe(JSON.stringify([[id, false]]));
  });

  test('初回描画では書き込まない（保存済みの値を既定値で上書きしない）', () => {
    const favos = JSON.stringify([[3, true]]);
    window.localStorage.setItem('favos', favos);
    window.localStorage.setItem('sortedBy', '2');
    const setItem = jest.spyOn(Storage.prototype, 'setItem');

    render(<Sort />);

    // 読み込んだ値を状態に入れたときに同じ値を書き戻すだけで、既定値（[] と 0）は一度も書かれない
    for (const [key, value] of setItem.mock.calls) {
      expect(value).toBe(key === 'favos' ? favos : '2');
    }
    expect(stored('favos')).toBe(favos);
    expect(stored('sortedBy')).toBe('2');
  });
});
