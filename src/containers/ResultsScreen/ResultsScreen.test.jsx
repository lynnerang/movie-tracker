import React from 'react';
import { ResultsScreen, mapStateToProps } from './ResultsScreen';
import { shallow } from 'enzyme';
import { mockMovies } from '../../util/mockData/mockData';

const mockState = {
  trending: mockMovies,
  top_rated: mockMovies,
  now_playing: mockMovies,
  upcoming: mockMovies,
  favorites: mockMovies
};

describe('ResultsScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ResultsScreen movies={mockMovies} />)
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