import { movieDetailsReducer } from './movieDetailsReducer';
import * as mockData from '../util/mockData/mockData';

describe('movieDetailsReducer', () => {
	it('should return the initial state', () => {
		const expected = [];
		const result = movieDetailsReducer(undefined, {});

		expect(result).toEqual(expected);
	});

	it('should return state with a new array of movies', () => {
		const expected = mockData.mockMovie;
		const result = movieDetailsReducer(mockData.mockMovie, {});

		expect(result).toEqual(expected);
	});
});
