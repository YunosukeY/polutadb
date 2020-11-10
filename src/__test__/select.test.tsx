import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { Main } from '../app/layout';
import { genres, types, videos, songs, artists } from '../app/data';

describe('選択肢が正しく追加されているか', () => {
  test('check select option number', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#genre-selector')[0].children.length).toBe(genres.length + 1);
    expect(wrapper.find('#type-selector')[0].children.length).toBe(types.length + 1);
    expect(wrapper.find('#video-selector')[0].children.length).toBe(videos.length + 1);
    expect(wrapper.find('#song-selector')[0].children.length).toBe(songs.length + 1);
    expect(wrapper.find('#artist-selector')[0].children.length).toBe(artists.length + 1);
  });
});
