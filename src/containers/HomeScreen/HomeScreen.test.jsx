import React from 'react';
import HomeScreen from './HomeScreen';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('HomeScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<HomeScreen />)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

});