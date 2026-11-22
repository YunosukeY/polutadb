import { data } from './fixture';

// 各ページで、データが描画されたことがわかる要素
export const pages = [
  { path: '/', ready: { role: 'heading', name: 'Results' } },
  { path: '/favos', ready: { role: 'heading', name: 'Favorites' } },
  { path: '/stats', ready: { role: 'heading', name: `${data.songs.length} Songs` } },
  { path: '/releases', ready: { role: 'heading', name: 'Latest Release Note' } },
  { path: '/about', ready: { role: 'heading', name: 'About' } },
] as const;
