/** @jest-environment jsdom */

// src/pages に置くと Next.js がページとしてビルドしてしまうので、ページのテストはここに置く
import {
  MOBILE,
  advance,
  cards,
  currentPage,
  expectCount,
  pageCount,
  push,
  render,
  screen,
  scrollIntoView,
  within,
} from '..';
import { artistOf, data, newestFirst, shareTitle, typeIndex, videoOf } from '../../../e2e/fixture';
import type { Data, RawSinging } from '../../data/types';
import Home from '../../pages';

type RenderOptions = Parameters<typeof render>[1];

/** トップページを描画し、マウント直後の全文検索のデバウンス（300ms）が済んだ状態にする */
const renderHome = (options?: RenderOptions, pageData: Data = data) => {
  const result = render(<Home {...pageData} />, options);
  advance(300);
  return result;
};

type User = ReturnType<typeof render>['user'];

const combobox = (label: string) => screen.getByRole('combobox', { name: label });

const selectOption = async (user: User, label: string, option: string) => {
  await user.click(combobox(label));
  await user.click(screen.getByRole('option', { name: option }));
};

// クリアボタンはホバーするまで visibility: hidden なので、role では取れない
const clear = async (user: User, label: string) => {
  const root = combobox(label).closest<HTMLElement>('.MuiAutocomplete-root');
  if (root === null) throw new Error(`${label} の Autocomplete が見つからない`);
  await user.click(within(root).getByTitle('Clear'));
};

const favoLabel = (s: RawSinging) => `${shareTitle(s)}をお気に入り登録`;
const labels = (singings: RawSinging[]) => singings.map(favoLabel);
const songOption = (title: string) => `${title}（${artistOf({ video: '', song: title, start: '' })}）`;

const total = data.singings.length;
const type = '歌枠';
const ofType = newestFirst.filter((s) => videoOf(s).type === type);

describe('絞り込みと結果件数', () => {
  test('条件がなければ全件が対象になり、新しい順に1ページ分が表示される', () => {
    renderHome();

    expectCount(total, 'Results');
    expect(cards()).toEqual(labels(newestFirst.slice(0, 20)));
  });

  test('Autocomplete で選択すると絞り込まれ、クリアすると戻る', async () => {
    const { user } = renderHome();

    await selectOption(user, '動画のタイプ', type);
    expect(combobox('動画のタイプ')).toHaveValue(type);
    expectCount(ofType.length, 'Results');
    expect(cards()).toEqual(labels(ofType));
    expect(push).toHaveBeenLastCalledWith(`/?query=&type=${typeIndex(type)}&video=-1&song=-1&artist=-1`, undefined, {
      scroll: false,
    });

    await clear(user, '動画のタイプ');
    expect(combobox('動画のタイプ')).toHaveValue('');
    expectCount(total, 'Results');
    expect(push).toHaveBeenLastCalledWith('/?query=&type=-1&video=-1&song=-1&artist=-1', undefined, { scroll: false });
  });

  test('複数の条件はANDで絞り込まれる', async () => {
    const artist = 'アーティストA';
    const ofArtist = newestFirst.filter((s) => artistOf(s) === artist);
    const ofTypeAndArtist = ofType.filter((s) => artistOf(s) === artist);
    const query = '曲02';
    const ofArtistAndQuery = ofArtist.filter((s) => s.song === query);
    // 条件を足すたびに件数が変わるフィクスチャであること
    expect(new Set([total, ofType.length, ofTypeAndArtist.length, ofArtist.length, ofArtistAndQuery.length]).size).toBe(
      5,
    );
    const { user } = renderHome();

    await selectOption(user, '動画のタイプ', type);
    await selectOption(user, 'アーティスト', artist);
    expectCount(ofTypeAndArtist.length, 'Results');
    expect(cards()).toEqual(labels(ofTypeAndArtist));

    await clear(user, '動画のタイプ');
    expectCount(ofArtist.length, 'Results');
    expect(cards()).toEqual(labels(ofArtist));

    await user.type(screen.getByRole('textbox', { name: '全文検索' }), query);
    advance(300);
    expectCount(ofArtistAndQuery.length, 'Results');
    expect(cards()).toEqual(labels(ofArtistAndQuery));
  });

  test('動画で絞り込める', async () => {
    const singing = newestFirst[3];
    if (singing === undefined) throw new Error('fixture に歌唱データがない');
    const video = videoOf(singing);
    const { user } = renderHome();

    await selectOption(user, '動画', `${video.date}: ${video.title}`);

    expect(cards()).toEqual(labels([singing]));
  });

  test('1件のときは「Result」、0件のときは「Results」になる', async () => {
    const song = '曲07';
    const one = ofType.filter((s) => s.song === song);
    expect(one).toHaveLength(1);
    const { user } = renderHome();

    await selectOption(user, '動画のタイプ', type);
    await selectOption(user, '曲', songOption(song));
    expectCount(1, 'Result');
    expect(cards()).toEqual(labels(one));

    await user.type(screen.getByRole('textbox', { name: '全文検索' }), 'どれにも一致しない');
    advance(300);
    expectCount(0, 'Results');
    expect(cards()).toEqual([]);
    expect(pageCount()).toBe(0);
  });
});

describe('全文検索', () => {
  test('入力が止まってから300ms後に絞り込まれる', async () => {
    const query = '曲10';
    const expected = newestFirst.filter((s) => s.song === query);
    const { user } = renderHome();
    push.mockClear();

    await user.type(screen.getByRole('textbox', { name: '全文検索' }), query);
    advance(299);
    expect(push).not.toHaveBeenCalled();
    expectCount(total, 'Results');

    advance(1);
    expect(push).toHaveBeenCalledTimes(1);
    expect(push).toHaveBeenLastCalledWith(`/?query=${query}&type=-1&video=-1&song=-1&artist=-1`, undefined, {
      scroll: false,
    });
    expectCount(expected.length, 'Results');
    expect(cards()).toEqual(labels(expected));
  });
});

describe('ソート', () => {
  test('切り替えると並びが変わる', async () => {
    // 同じキーの中では新しい順のまま
    const bySong = [...newestFirst].sort((a, b) => (a.song > b.song ? 1 : a.song < b.song ? -1 : 0));
    const byArtist = [...newestFirst].sort((a, b) =>
      artistOf(a) > artistOf(b) ? 1 : artistOf(a) < artistOf(b) ? -1 : 0,
    );
    const { user } = renderHome();
    expect(screen.getByRole('radio', { name: '時系列順' })).toBeChecked();

    await user.click(screen.getByRole('radio', { name: '曲名順' }));
    expect(screen.getByRole('radio', { name: '曲名順' })).toBeChecked();
    expect(cards()).toEqual(labels(bySong.slice(0, 20)));

    await user.click(screen.getByRole('radio', { name: 'アーティスト名順' }));
    expect(screen.getByRole('radio', { name: 'アーティスト名順' })).toBeChecked();
    expect(cards()).toEqual(labels(byArtist.slice(0, 20)));

    await user.click(screen.getByRole('radio', { name: '時系列順' }));
    expect(cards()).toEqual(labels(newestFirst.slice(0, 20)));
  });
});

describe('ページ送り', () => {
  test('PCでは1ページ20件。ページ数は切り上げで、最後のページは端数だけ表示される', async () => {
    const { user } = renderHome();
    expect(pageCount()).toBe(Math.ceil(total / 20));
    expect(currentPage()).toHaveAccessibleName('page 1');

    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(currentPage()).toHaveAccessibleName('page 2');
    expect(cards()).toEqual(labels(newestFirst.slice(20, 40)));
    // ページを送ると結果の先頭までスクロールする
    expect(scrollIntoView).toHaveBeenCalledWith({ behavior: 'smooth' });

    await user.click(screen.getByRole('button', { name: 'Go to page 3' }));
    expect(cards()).toEqual(labels(newestFirst.slice(40)));
    // 件数は全体のまま
    expectCount(total, 'Results');
  });

  test('モバイルでは1ページ10件', async () => {
    const { user } = renderHome({ width: MOBILE });
    expect(pageCount()).toBe(Math.ceil(total / 10));
    expect(cards()).toEqual(labels(newestFirst.slice(0, 10)));

    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(cards()).toEqual(labels(newestFirst.slice(10, 20)));
  });

  test('絞り込みを変えると1ページ目に戻る', async () => {
    const song = '曲01';
    const ofSong = newestFirst.filter((s) => s.song === song);
    const { user } = renderHome({ width: MOBILE });

    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(currentPage()).toHaveAccessibleName('page 2');

    await selectOption(user, '曲', songOption(song));
    expect(currentPage()).toHaveAccessibleName('page 1');
    expect(pageCount()).toBe(Math.ceil(ofSong.length / 10));
    expect(cards()).toEqual(labels(ofSong.slice(0, 10)));

    // 全文検索でも戻る
    await user.click(screen.getByRole('button', { name: 'Go to page 2' }));
    expect(currentPage()).toHaveAccessibleName('page 2');
    await user.type(screen.getByRole('textbox', { name: '全文検索' }), 'テスト動画');
    advance(300);
    expect(currentPage()).toHaveAccessibleName('page 1');
  });
});

describe('お気に入り', () => {
  test('登録と解除でボタンのラベルが切り替わる', async () => {
    const singing = newestFirst[0];
    if (singing === undefined) throw new Error('fixture に歌唱データがない');
    const title = shareTitle(singing);
    const { user } = renderHome();

    await user.click(screen.getByRole('button', { name: `${title}をお気に入り登録` }));
    expect(screen.getByRole('button', { name: `${title}をお気に入り解除` })).toBeInTheDocument();
    expect(screen.queryByRole('button', { name: `${title}をお気に入り登録` })).not.toBeInTheDocument();
    // 他のカードは変わらない
    expect(cards().filter((label) => label?.endsWith('解除'))).toHaveLength(1);

    await user.click(screen.getByRole('button', { name: `${title}をお気に入り解除` }));
    expect(screen.getByRole('button', { name: `${title}をお気に入り登録` })).toBeInTheDocument();
    expect(cards()).toEqual(labels(newestFirst.slice(0, 20)));
  });
});

describe('カード', () => {
  const video = (n: number) => ({ id: `id${n}`, title: `動画${n}`, date: `2024/01/0${n + 1}`, type: '歌枠' });
  const small: Data = {
    types: [{ name: '歌枠' }],
    artists: [{ name: 'アーティストA' }],
    videos: [video(0), video(1)],
    songs: [
      { title: '曲X', artist: 'アーティストA' },
      { title: '曲Y', artist: '' },
    ],
    // 古い順
    singings: [
      { video: '動画0', song: '曲X', start: '0:10' },
      { video: 'データにない動画', song: '曲Y', start: '0:20' },
      { video: '動画1', song: '曲X', start: '0:30' },
      { video: '動画1', song: '曲Y', start: '0:40' },
    ],
  };
  const label = (videoTitle: string, song: string, artist: string) =>
    `『${videoTitle}』より『${song}』 / ${artist}をお気に入り登録`;

  test('動画が見つからない歌唱データのカードは描画されない', () => {
    renderHome(undefined, small);

    expect(cards()).toEqual([
      label('動画1', '曲Y', ''),
      label('動画1', '曲X', 'アーティストA'),
      label('動画0', '曲X', 'アーティストA'),
    ]);
  });

  test('その曲を初めて歌ったときのカードにだけ「First Time!」が表示される', () => {
    renderHome(undefined, small);

    const firstTimes = screen.getAllByText('First Time!').map((chip) => {
      const card = chip.closest<HTMLElement>('.MuiCard-root');
      if (card === null) throw new Error('カードが見つからない');
      return within(card)
        .getByRole('button', { name: /をお気に入り登録$/ })
        .getAttribute('aria-label');
    });
    // 曲Y の初回は「データにない動画」なので、動画1 の 曲Y は2回目
    expect(firstTimes).toEqual([label('動画0', '曲X', 'アーティストA')]);
  });
});

describe('URLクエリ', () => {
  test('描画時点のクエリからフォームと結果が復元される', () => {
    const query = '曲01';
    const expected = ofType.filter((s) => s.song === query);
    expect(expected.length).toBeGreaterThan(0);

    renderHome({ url: `/?query=${encodeURIComponent(query)}&type=${typeIndex(type)}` });
    // 復元された全文検索の入力がデバウンスを経て反映されても、他の条件は消えない
    advance(300);

    expect(screen.getByRole('textbox', { name: '全文検索' })).toHaveValue(query);
    expect(combobox('動画のタイプ')).toHaveValue(type);
    expect(combobox('動画')).toHaveValue('');
    expect(combobox('曲')).toHaveValue('');
    expect(combobox('アーティスト')).toHaveValue('');
    expectCount(expected.length, 'Results');
    expect(cards()).toEqual(labels(expected));
  });
});
