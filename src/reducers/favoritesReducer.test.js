import { favoritesReducer } from './favoritesReducers';
import { mockMovies, mockMovie } from '../util/mockData/mockData';

describe('favoritesReducer', () => {
	it('should return the initial state', () => {
		expect(
			favoritesReducer(undefined, {
				type: '',
				payload: { favorites: {} }
			})
		).toEqual([]);
	});

	it('should return state with favorite movies', () => {
		expect(
			favoritesReducer(undefined, {
				type: 'ADD_FAVORITES',
				payload: { favorites: mockMovies }
			})
		).toEqual(mockMovies);
	});

	it('should return state with favorite movies', () => {
		expect(
			favoritesReducer([mockMovie, mockMovie], {
				type: 'ADD_FAVORITES',
				payload: { favorites: mockMovies }
			})
		).toEqual(mockMovies);
	});
});
