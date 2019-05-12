import React from 'react';
import ResultsScreen, { mapStateToProps } from './ResultsScreen';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from "react-redux";
import { mockMovies } from '../../util/mockData/mockData';
import configureMockStore from "redux-mock-store";
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

const mockStore = configureMockStore();
const store = mockStore({});
const mockState = {
  trending: mockMovies,
  top_rated: mockMovies,
  now_playing: mockMovies,
  upcoming: mockMovies
};

describe('ResultsScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><ResultsScreen section='popular' /></Provider>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an array of movies', () => {
      const expected = mockState;
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

})