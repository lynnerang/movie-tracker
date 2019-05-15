import React from 'react';
import { UserForm } from './UserForm';
import { shallow } from 'enzyme';
import { mockUser, mockMovies } from '../../util/mockData/mockData';
import { mapStateToProps, mapDispatchToProps } from './UserForm';
import { login, logout, addFavorites } from '../../actions';

describe('UserForm', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<UserForm type="Sign Up" />)
  })

  it('Should match the snapshot as a log in form', () => {
    wrapper = shallow(<UserForm type="Log In" />)

    expect(wrapper).toMatchSnapshot();
  });

  it('Should match the snapshot as a sign up form', () => {
    wrapper = shallow(<UserForm type="Sign Up" />)

    expect(wrapper).toMatchSnapshot();
  });

  //simulate change then simulate submit
  it('Should have a default state with four values for inputs and showing error flag', () => {
    expect(wrapper.state()).toEqual({
      name: '',
      email: '',
      password: '',
      showErr: false
    });
  });

  // it.skip('Should get a name input in JSX when the getName method is called', () => {
  //   const name = wrapper.instance().getName();

  //   expect(name).toEqual(<div>
  //        <label
  //          htmlFor="user-name"
  //        />
  //      <input
  //          className="detail-input"
  //          id="user-name"
  //          name="name"
  //          onChange={this.handleChange}
  //          placeholder="name"
  //          value=""
  //        />
  //    </div>);
  // });

  it('Should get an appropriate error message when getErrorMsg is called', () => {
    const name = wrapper.instance().getErrorMsg();

    expect(name).toEqual(<p className="error">Email already exists as an account.Please log in.</p>);
  });

  it.skip('Should update state when input values change', () => {

  });

  describe('mapStateToProps', () => {
    it('should return an object wiht user data', () => {
      const expected = { user: mockUser };
      const mappedProps = mapStateToProps({ user: mockUser });

      expect(mappedProps).toEqual(expected);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls dispatch with a login action when login is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = login(mockUser);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.login(mockUser);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a logout action when logout is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = logout();
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.logout();

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });

    it('calls dispatch with a addFavorites action when addFavorites is called', () => {
      const mockDispatch = jest.fn();
      const actionToDispatch = addFavorites(mockMovies);
      const mappedProps = mapDispatchToProps(mockDispatch);

      mappedProps.addFavorites(mockMovies);

      expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch);
    });
  })
})
