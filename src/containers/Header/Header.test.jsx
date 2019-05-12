import React from 'react';
import Header from './Header';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});

describe('Header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><Header /></Provider>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})