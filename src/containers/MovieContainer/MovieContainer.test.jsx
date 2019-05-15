import React from 'react';
import {MovieContainer} from './MovieContainer';
import  { shallow } from 'enzyme';
import { mockMovies } from '../../util/mockData/mockData';

describe('MovieContainer', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieContainer section='top_rated' movies={mockMovies}/>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
