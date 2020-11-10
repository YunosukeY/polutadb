import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { shallow, render } from 'enzyme';
import { App } from '../app/app';
import { Header, Main, Footer } from '../app/layout';

describe('大まかなコンポーネントが描画されているか', () => {
  test('check basic components', () => {
    const wrapper = shallow(<App />);

    expect(wrapper.find(Header).length).toBe(1);
    expect(wrapper.find(Main).length).toBe(1);
    expect(wrapper.find(Footer).length).toBe(1);
  });

  test('check components at \'/\'', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#about').length).toBe(1);
    expect(wrapper.find('#select').length).toBe(1);
    expect(wrapper.find('#result').length).toBe(0);
    expect(wrapper.find('#stats').length).toBe(0);
    expect(wrapper.find('#releases').length).toBe(0);
  });

  test('check components at \'/?hoge=piyo\'', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/?hoge=piyo']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#about').length).toBe(1);
    expect(wrapper.find('#select').length).toBe(1);
    expect(wrapper.find('#result').length).toBe(1);
    expect(wrapper.find('#stats').length).toBe(0);
    expect(wrapper.find('#releases').length).toBe(0);
  });

  test('check components at \'/stats\'', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/stats']}><Main /></MemoryRouter>
    );

    expect(wrapper.find('#about').length).toBe(0);
    expect(wrapper.find('#select').length).toBe(0);
    expect(wrapper.find('#result').length).toBe(0);
    expect(wrapper.find('#stats').length).toBe(1);
    expect(wrapper.find('.chartdiv').length).toBe(3);
    expect(wrapper.find('#releases').length).toBe(0);
  });

  test('check components at \'/releases\'', () => {
    const wrapper = render(
      <MemoryRouter initialEntries={['/releases']}><Main /></MemoryRouter>
    );
    expect(wrapper.find('#about').length).toBe(0);
    expect(wrapper.find('#select').length).toBe(0);
    expect(wrapper.find('#result').length).toBe(0);
    expect(wrapper.find('#stats').length).toBe(0);
    expect(wrapper.find('#releases').length).toBe(1);
  });
});
