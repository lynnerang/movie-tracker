import React from 'react';
import MovieDetails from './MovieDetails';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { mockMovies } from '../../util/mockData/mockData';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});

describe('MovieDetails', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><MovieDetails id={mockMovies[0].id} key={mockMovies[0].id} /></Provider>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
