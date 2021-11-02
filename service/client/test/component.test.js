import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import App from './src/App';
import Adapter from 'enzyme-adapter-react-16';
import 'regenerator-runtime/runtime';

configure({ adapter: new Adapter() });

describe("Rendering App components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });

  test("renders App component hostedBy without crashing", async () => {
    const wrapper = await mount(<App />);
    const content = (<span id='forTest'></span>);
    expect(wrapper.contains(content)).toEqual(true);
  });
});

