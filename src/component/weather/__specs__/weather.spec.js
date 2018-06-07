/**
 * @jest-environment node
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import Weather from '..//weather'
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('Weather', () => {
  it('should render HomeView components', () => {
    let weatherData = '{"city":"Ahmedabad","country":"IN","list":{"04-04-2018":{"temp_min":21.34,"temp_max":26.73,"day":"Wednesday"},"05-04-2018":{"temp_min":19.92,"temp_max":38.17,"day":"Thursday"},"06-04-2018":{"temp_min":19.83,"temp_max":38.63,"day":"Friday"},"07-04-2018":{"temp_min":21.02,"temp_max":39.57,"day":"Saturday"},"08-04-2018":{"temp_min":20.65,"temp_max":39.96,"day":"Sunday"},"09-04-2018":{"temp_min":20.93,"temp_max":38.11,"day":"Monday"}}}'
    const wrapper = shallow(
      <Weather
        weatherData={JSON.parse(weatherData)}
      />
    );
    // console.log(wrapper;
    expect(wrapper.find('.fivedays')).to.have.length(1);
  });


});
