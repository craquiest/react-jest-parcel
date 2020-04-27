import React from 'react';
import { shallow } from 'enzyme';
import App from '../js/App';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });


describe("App works", () => {
    const app = shallow(<App />);
  
    it("Should render an 'h1' title", () => {
      expect(app.find('h1').exists()).toBe(true);
      // expect(3+5).toEqual(8)
    });
});