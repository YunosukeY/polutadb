import { songs } from '../src/data/songs';
import { artists } from '../src/data/artists';
import { singings } from '../src/data/singings';
import { videos, types } from '../src/data/videos';

describe('外部キー代わりの添字が範囲内か', () => {
  test('アーティスト->曲', () => {
    for (const song of songs) {
      expect(song.artist).toBeGreaterThanOrEqual(-1); // アーティストが空のものがある
      expect(song.artist).toBeLessThan(artists.length);
    }
  });

  test('タイプ->動画', () => {
    for (const video of videos) {
      expect(video.type).toBeGreaterThanOrEqual(0);
      expect(video.type).toBeLessThan(types.length);
    }
  });

  test('曲->歌', () => {
    for (const singing of singings) {
      expect(singing.songId).toBeGreaterThanOrEqual(0);
      expect(singing.songId).toBeLessThan(songs.length);
    }
  });

  test('動画->歌', () => {
    for (const singing of singings) {
      expect(singing.videoId).toBeGreaterThanOrEqual(0);
      expect(singing.videoId).toBeLessThan(videos.length);
    }
  });
});
