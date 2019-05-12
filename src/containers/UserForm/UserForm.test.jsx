import React from 'react';
import { UserForm } from './UserForm';
import Enzyme, { shallow } from 'enzyme';
import { mockMovies } from '../../util/mockData/mockData';

describe('UserForm', () => {
  let wrapper;

  it('Should match the snapshot', () => {
    wrapper = shallow(<UserForm type="Log In" />)

    expect(wrapper).toMatchSnapshot();
  });

  it('Should match the snapshot', () => {
    wrapper = shallow(<UserForm type="Sign Up" />)

    expect(wrapper).toMatchSnapshot();
  });

  //simulate change then simulate submit
  it('Should match the snapshot', () => {
    wrapper = shallow(<UserForm type="Sign Up" />)

    expect(wrapper).toMatchSnapshot();
  });

})
