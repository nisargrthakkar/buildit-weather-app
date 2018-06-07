/**
 * @jest-environment node
 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import React from 'react';
import HomeView from '../HomeView'
import { shallow } from 'enzyme';
import sinon from 'sinon';

let weatherData;
beforeEach(() => {
    // Initial Values of Props
    weatherData: {}
});

describe('HomeView', () => {
    it('should render HomeView components', () => {
        const wrapper = shallow(
            <HomeView
                weatherData={weatherData}
                getWeatherForcast={jest.fn}
            />
        );
        console.log(wrapper.debug());
        /*expect(wrapper.find(Foo)).to.have.length(3);*/
    });

    /*it('should render an `.icon-star`', () => {
      const wrapper = shallow(<MyComponent />);
      expect(wrapper.find('.icon-star')).to.have.length(1);
    });
  
    it('should render children when passed in', () => {
      const wrapper = shallow((
        <MyComponent>
          <div className="unique" />
        </MyComponent>
      ));
      expect(wrapper.contains(<div className="unique" />)).to.equal(true);
    });
  
    it('simulates click events', () => {
      const onButtonClick = sinon.spy();
      const wrapper = shallow(<Foo onButtonClick={onButtonClick} />);
      wrapper.find('button').simulate('click');
      expect(onButtonClick.calledOnce).to.equal(true);
    });*/
});
