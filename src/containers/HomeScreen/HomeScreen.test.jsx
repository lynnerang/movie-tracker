import React from 'react';
import HomeScreen, { mapStateToProps, mapDispatchToProps } from './HomeScreen';
import { getMovies } from '../../thunks/getMovies';
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { mockPath, mockProps, mockState } from '../../util/mockData/mockData';
Enzyme.configure({ adapter: new Adapter() })

jest.mock('../../thunks/getMovies') 

const mockStore = configureMockStore();
const store = mockStore({});


describe('HomeScreen', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><HomeScreen /></Provider>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an array of movies', () => {
      const expected = mockState;
      const mappedProps = mapStateToProps(mockState)

      expect(mappedProps).toEqual(expected)
    })
  })

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getMovies action when getMovies is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getMovies(mockPath, mockProps);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.getMovies(mockPath, mockProps);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    })
  })

});