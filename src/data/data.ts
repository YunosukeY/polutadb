import { Data } from './types';

export const fetchData = async () => {
  const deployId = 'AKfycbw5PJ8ehZkqAgMuzs4NCLiZA9zNfqKY-ILVZAcoRBoL1sInlAKdntYS1yA4QttJHhTs';
  const res = await fetch(`https://script.google.com/macros/s/${deployId}/exec`);
  const data: Data = await res.json();

  const m = new Map(data.videos.map((v) => [v.title, v.date]));
  data.singings.sort((a, b) => {
    const aDate = m.get(a.video)!;
    const bDate = m.get(b.video)!;
    if (aDate > bDate) return 1;
    else if (aDate < bDate) return -1;
    else return 0;
  });

  return data;
};
