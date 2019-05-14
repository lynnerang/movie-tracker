import { topRatedMoviesReducer } from './topRatedMoviesReducer';
import * as mockData from '../util/mockData/mockData';

describe('topRatedMoviesReducer', () => {
	it('should return the initial state', () => {
		const expected = [];
		const result = topRatedMoviesReducer(undefined, {});

		expect(result).toEqual(expected);
	});

  it('should return state with a new array of movies', () => {
		const expected = mockData.mockMovies;
		const result = topRatedMoviesReducer(mockData.mockMovies, {});

		expect(result).toEqual(expected);
	});
});
