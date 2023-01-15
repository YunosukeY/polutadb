import { Data } from './interfaces';

export const fetchData = async () => {
  const deployId = 'AKfycbw5PJ8ehZkqAgMuzs4NCLiZA9zNfqKY-ILVZAcoRBoL1sInlAKdntYS1yA4QttJHhTs';
  const res = await fetch(`https://script.google.com/macros/s/${deployId}/exec`);
  const data: Data = await res.json();
  return data;
};
