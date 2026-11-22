/** @jest-environment jsdom */

import { data, newestFirst, shareTitle, shareUrl } from '../../../../../../../e2e/fixture';
import { Singing } from '../../../../../../data/types';
import { advance, render, screen } from '../../../../../../test';
import ShareButtons from '.';

const raw = newestFirst[0];
if (raw === undefined) throw new Error('fixture に歌唱データがない');
const title = shareTitle(raw);
const url = shareUrl(raw);

const renderButtons = () =>
  render(<ShareButtons singing={new Singing(0, raw.video, raw.song, raw.start)} fontsize={32} />, { data });

/** クリックで開かれたURL */
const opened = (open: jest.SpyInstance) => {
  expect(open).toHaveBeenCalledTimes(1);
  return new URL(String(open.mock.calls[0]?.[0]));
};

test('Xのシェアボタンで開くURLに文言、URL、ハッシュタグが含まれる', async () => {
  const open = jest.spyOn(window, 'open').mockReturnValue(null);
  const { user } = renderButtons();

  await user.click(screen.getByRole('button', { name: `${title}をXでシェア` }));

  const shared = opened(open);
  expect(shared.origin + shared.pathname).toBe('https://x.com/intent/post');
  expect(shared.searchParams.get('text')).toBe(title);
  expect(shared.searchParams.get('url')).toBe(url);
  expect(shared.searchParams.get('hashtags')).toBe('ぽるうた,尾丸ポルカ');
});

test('LINEのシェアボタンで開くURLに文言とURLが含まれる', async () => {
  const open = jest.spyOn(window, 'open').mockReturnValue(null);
  const { user } = renderButtons();

  await user.click(screen.getByRole('button', { name: `${title}をLINEでシェア` }));

  const shared = opened(open);
  expect(shared.origin + shared.pathname).toBe('https://social-plugins.line.me/lineit/share');
  expect(shared.searchParams.get('text')).toBe(title);
  expect(shared.searchParams.get('url')).toBe(url);
});

test('コピーボタンでクリップボードに文言とURLが入り、Copied! が表示されて6秒後に消える', async () => {
  const { user } = renderButtons();
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();

  await user.click(screen.getByRole('button', { name: `${title}のリンクをコピー` }));

  expect(await window.navigator.clipboard.readText()).toBe(`${title} ${url}`);
  expect(screen.getByRole('alert')).toHaveTextContent('Copied!');

  // 6秒で閉じ始め、閉じるアニメーションの後に消える
  advance(6000);
  advance(1000);
  expect(screen.queryByRole('alert')).not.toBeInTheDocument();
});
