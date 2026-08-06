import type { Data } from './types';

const load = async () => {
  const deployId = 'AKfycbw5PJ8ehZkqAgMuzs4NCLiZA9zNfqKY-ILVZAcoRBoL1sInlAKdntYS1yA4QttJHhTs';
  const res = await fetch(`https://script.google.com/macros/s/${deployId}/exec`);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: Data = await res.json();

  const m = new Map(data.videos.map((v) => [v.title, v.date]));
  data.singings.sort((a, b) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const aDate = m.get(a.video)!;
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const bDate = m.get(b.video)!;
    if (aDate > bDate) return 1;
    else if (aDate < bDate) return -1;
    else return 0;
  });

  return data;
};

// ビルド時に 4 ページの getStaticProps から呼ばれる。Apps Script は同一 IP からの
// 連続アクセスを絞って JSON ではなく HTML を返すことがあるので、取得は 1 回に共有する
let inflight: Promise<Data> | undefined;

export const fetchData = () => {
  inflight ??= load();
  return inflight;
};
