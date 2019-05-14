import { userReducer } from './userReducer';
import * as mockData from '../util/mockData/mockData';

describe('userReducer', () => {
	it('should return the initial state', () => {
		const expected = {
			email: '',
			id: 0,
			name: '',
			password: ''
		};

		const result = userReducer(undefined, {
			email: '',
			id: 0,
			name: '',
			password: ''
		});

		expect(result).toEqual(expected);
	});

	it('should return state with a new use Object', () => {
		const expected = mockData.mockUser;
		const result = userReducer(mockData.mockUser, {
			type: 'LOGIN',
			payload: {
				userData: mockData.mockUser
			}
		});

		expect(result).toEqual(expected);
	});

	it('should return state with a new use Object', () => {
		const expected = {
			email: '',
			id: 0,
			name: '',
			password: ''
		};
		const result = userReducer(mockData.mockUser, {
			type: 'LOGOUT'
		});

		expect(result).toEqual(expected);
	});
});
