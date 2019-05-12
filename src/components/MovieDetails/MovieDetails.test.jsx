import React from 'react';
import MovieDetails from './MovieDetails';
import Enzyme, { shallow } from 'enzyme';
import { mockMovies } from '../../util/mockData/mockData';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() })

describe('MovieDetails', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MovieDetails id={mockMovies[0].id} key={mockMovies[0].id}/>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

})
