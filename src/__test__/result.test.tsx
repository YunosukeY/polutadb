import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render } from 'enzyme';
import { Main } from '../app/layout';
import { singings } from '../app/data';

describe('結果の件数が正しいか', () => {
  test('dummy path', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/?hoge=piyo']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#result-header')[0].firstChild.data).toBe(`${singings.length} Results`);
  });

  test('search with \'hologram\'', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/?query=hologram']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#result-header')[0].firstChild.data).toBe(`3 Results`);
  });

  test('0 Results', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/?withInst=false&aCappella=false&full=false&onechorus=false']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#result-header')[0].firstChild.data).toBe(`0 Results`);
  });

  test('1 Result', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/?video=1']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#result-header')[0].firstChild.data).toBe(`1 Result`);
  });
});
