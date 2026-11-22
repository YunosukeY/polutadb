/** @jest-environment jsdom */

import Menu from '.';
import { advance, push, render, screen } from '../../../../test';

const items = [
  ['Search', '/'],
  ['Favorites', '/favos'],
  ['Statistics', '/stats'],
  ['Releases Notes', '/releases'],
  ['About', '/about'],
] as const;

const openMenu = async () => {
  const result = render(<Menu />);
  await result.user.click(screen.getByRole('button', { name: 'メニュー' }));
  return result;
};

/** ドロワーの中の項目。ドロワーが閉じていれば空 */
const menuItems = () =>
  screen
    .queryAllByRole('button')
    .map((button) => button.textContent)
    .filter((text) => text !== '');

test('メニューを開くまで項目は表示されず、開くと5項目がこの順で並ぶ', async () => {
  const { user } = render(<Menu />);
  expect(menuItems()).toEqual([]);

  await user.click(screen.getByRole('button', { name: 'メニュー' }));

  expect(menuItems()).toEqual(items.map(([name]) => name));
});

test.each(items)('%s を選ぶと %s に遷移し、ドロワーが閉じる', async (name, url) => {
  const { user } = await openMenu();

  await user.click(screen.getByRole('button', { name }));

  expect(push).toHaveBeenCalledTimes(1);
  expect(push).toHaveBeenCalledWith(url);
  // 閉じるアニメーションの後に消える
  advance(1000);
  expect(menuItems()).toEqual([]);
});
