import React from 'react';
import UserForm from './UserForm';
import Enzyme, { shallow } from 'enzyme';
import { mockMovies } from '../../util/mockData/mockData';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('UserForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserForm type="Log In" />)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
