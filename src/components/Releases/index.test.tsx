/** @jest-environment jsdom */

import { data } from '../../../e2e/fixture';
import { render, screen } from '../../test';
import Releases from '.';

// 最も古いリリースノートの文言。最新以外は「Old Release Notes」の中にある
const oldest = '・本サイトを公開しました';

test('過去のリリースノートは閉じていて、見出しのクリックで開閉する', async () => {
  const { user } = render(<Releases />, { data });
  expect(screen.getByRole('heading', { name: 'Latest Release Note' })).toBeInTheDocument();
  expect(screen.queryByText(oldest)).not.toBeInTheDocument();

  await user.click(screen.getByRole('heading', { name: 'Old Release Notes' }));
  expect(screen.getByText(oldest)).toBeInTheDocument();

  await user.click(screen.getByRole('heading', { name: 'Old Release Notes' }));
  expect(screen.queryByText(oldest)).not.toBeInTheDocument();
});

test('最新のリリースノートは最初から表示され、追加した動画のタイトルが入る', () => {
  render(<Releases />, { data });

  // 最新の1件分だけ。日付の見出しは1つ
  expect(screen.getAllByRole('heading', { level: 5 })).toHaveLength(1);
  expect(screen.getByText('データの追加')).toBeInTheDocument();
  expect(screen.getAllByText(/^・『テスト動画 \d{3}』分を追加しました$/).length).toBeGreaterThan(0);
});
