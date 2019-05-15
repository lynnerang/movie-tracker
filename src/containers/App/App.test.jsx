import React from 'react';
import { shallow, mount } from 'enzyme';
import { mockPath, mockProps, mockState, mockUser } from '../../util/mockData/mockData';
import { App, mapStateToProps, mapDispatchToProps } from './App';
import { login } from '../../actions';
import { getMovies } from '../../thunks/getMovies';

jest.mock('../../thunks/getMovies');
jest.mock('../../util/api');

describe('App', () => {
	let wrapper, mockGetMovies, mockLogin, mockAddFavorites;

	beforeEach(() => {
		mockGetMovies = jest.fn();
		mockLogin = jest.fn();
		mockAddFavorites = jest.fn();
		wrapper = shallow(<App getMovies={mockGetMovies} login={mockLogin} />);
	});

	afterEach(() => {
		mockGetMovies.mockClear();
	});

	it('Should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	describe('componentDidMount', () => {
		it('should call checkLogin on mount', () => {
			jest.spyOn(wrapper.instance(), 'checkLogin');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().checkLogin).toHaveBeenCalled();
		});

		it('should call getMovies 4 times on mount', () => {
			expect(mockGetMovies).toHaveBeenCalledTimes(4);
		});
	});

	describe('checkLogin', () => {
		it('checks localStorage', () => {
			const mockLS = jest.spyOn(window.localStorage.__proto__, 'getItem');
			wrapper.instance().checkLogin();
			expect(mockLS).toHaveBeenCalled();
		});

		it.skip('should check if localStorage has a user, and call the login action with their data if so', () => {
			const user = {
				email: 'test@example.com',
				password: 'password',
				id: 1,
				name: 'Dummy'
			};
			window.localStorage.user = user;
			wrapper.instance().checkLogin();
			expect(mockLogin).toHaveBeenCalledWith(user);
		});

		it('should not call props.login if there is no user', () => {
			wrapper.instance().checkLogin();
			expect(mockLogin).toHaveBeenCalledTimes(0);
		});
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
});
