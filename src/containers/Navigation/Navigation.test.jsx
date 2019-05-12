import React from 'react';
import Navigation from './Navigation';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});

describe('Navigation', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Navigation /></Provider>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})