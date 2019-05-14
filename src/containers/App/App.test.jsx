import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { mockPath, mockProps, mockState, mockUser } from '../../util/mockData/mockData';
import { mapStateToProps, mapDispatchToProps } from './App';
import { login } from '../../actions';
import { getMovies } from '../../thunks/getMovies';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.mock('../../thunks/getMovies');
const mockStore = configureMockStore();
const store = mockStore({});
const localStorageMock = {
  getItem: JSON.stringify(mockUser)
};
global.localStorage = localStorageMock;



describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Provider store={store}><App /></Provider>)
  })

  it('Should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should check if a user is currently logged in on page refresh, and call the login action with their data if so', () => {
    wrapper.instance().checkLogin();
  });

  describe('mapStateToProps', () => {
    it('should return an object with an array of movies', () => {
      const expected = mockState;
      const mappedProps = mapStateToProps(mockState);

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a getMovies action when getMovies is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = getMovies(mockPath, mockProps);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.getMovies(mockPath, mockProps);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a login action when login is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = login(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.login(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  });

})


