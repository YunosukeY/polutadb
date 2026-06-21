import { useAtomValue } from 'jotai/react';
import { artistsAtom, songsAtom, typesAtom, videosAtom } from '../store/dataAtom';

export function useTypes() {
  const types = useAtomValue(typesAtom);

  let typeNames: { name: string; i: number }[] = [];
  types?.forEach((type, i) => {
    if (type.name !== 'その他') {
      typeNames.push({ name: type.name, i: i });
    }
  });
  typeNames = typeNames.sort((a, b) => (a.name > b.name ? 1 : -1));
  typeNames.push({ name: 'その他', i: 5 });
  return typeNames;
}

export function useVideos() {
  const videos = useAtomValue(videosAtom);

  // データは五十音順になっていないので，ソートしてから選択肢に追加する
  let videoNames: { date: string; title: string; i: number }[] = [];
  videos?.forEach((video, i) => videoNames.push({ date: video.date, title: video.title, i: i }));
  videoNames = videoNames.sort((a, b) => {
    if (a.date > b.date) return -1;
    else if (a.date < b.date) return 1;
    else return a.title > b.title ? -1 : 1;
  });
  return videoNames;
}

export function useSongs() {
  const songs = useAtomValue(songsAtom);

  let songNames: { title: string; i: number }[] = [];
  songs?.forEach((song, i) => {
    const artist = song.artist;
    if (artist === '') {
      songNames.push({ title: song.title, i: i });
    } else {
      songNames.push({ title: `${song.title}（${artist}）`, i: i });
    }
  });
  songNames = songNames.sort((a, b) => (a.title > b.title ? 1 : -1));
  return songNames;
}

export function useArtists() {
  const artists = useAtomValue(artistsAtom);

  let artistNames: { name: string; i: number }[] = [];
  artists?.forEach((artist, i) => artistNames.push({ name: artist.name, i: i }));
  artistNames = artistNames.sort((a, b) => (a.name > b.name ? 1 : -1));
  return artistNames;
}

export const useUrl = (video: string) => {
  const videos = useAtomValue(videosAtom);
  return videos?.find((v) => v.title === video)?.id;
};
export const useGetArtist = () => {
  const songs = useAtomValue(songsAtom);
  return (song: string) => songs?.find((s) => s.title === song)?.artist ?? '';
};
export const useGetType = () => {
  const videos = useAtomValue(videosAtom);
  return (video: string) => videos?.find((v) => v.title === video)?.type;
};
export const useVideo = (videoId: number | undefined) => {
  const videos = useAtomValue(videosAtom);
  if (videoId === undefined) return undefined;
  return videos?.[videoId]?.title;
};
export const useVideoId = (video: string) => {
  const videos = useAtomValue(videosAtom);
  return videos?.find((v) => v.title === video)?.id;
};

export const parseTime = (s: string) => {
  let t = 0;
  s.split(':').forEach((v) => {
    t *= 60;
    t += Number.parseInt(v, 10);
  });
  return t;
};
