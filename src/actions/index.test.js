import * as actions from './index';
import * as mockData from '../util/mockData/mockData';

describe('addTrendingMovies', () => {
	it('should return an action with type of "ADD_TRENDING" and a payload of an array of movies', () => {
		const expected = {
			type: 'ADD_TRENDING',
			payload: { movies: mockData.mockMovies }
		};

		const result = actions.addTrendingMovies(mockData.mockMovies);
		expect(result).toEqual(expected);
	});
});

describe('addTopRatedMovies', () => {
	it('should return an action with type of "ADD_TOP_RATED" and a payload of an array of movies', () => {
		const expected = {
			type: 'ADD_TOP_RATED',
			payload: { movies: mockData.mockMovies }
		};

		const result = actions.addTopRatedMovies(mockData.mockMovies);
		expect(result).toEqual(expected);
	});
});

describe('addNowPlayingMovies', () => {
	it('should return an action with type of "ADD_NOW_PLAYING" and a payload of an array of movies', () => {
		const expected = {
			type: 'ADD_NOW_PLAYING',
			payload: { movies: mockData.mockMovies }
		};

		const result = actions.addNowPlayingMovies(mockData.mockMovies);
		expect(result).toEqual(expected);
	});
});

describe('addUpcomingMovies', () => {
	it('should return an action with type of "ADD_UPCOMING" and a payload of an array of movies', () => {
		const expected = {
			type: 'ADD_UPCOMING',
			payload: { movies: mockData.mockMovies }
		};

		const result = actions.addUpcomingMovies(mockData.mockMovies);
		expect(result).toEqual(expected);
	});
});

describe('addMovieDetails', () => {
	it('should return an action with type of "ADD_MOVIE_DETAILS" and a payload of an array of movies', () => {
		const expected = {
			type: 'ADD_MOVIE_DETAILS',
			payload: { movie: mockData.mockMovie }
		};

		const result = actions.addMovieDetails(mockData.mockMovie);
		expect(result).toEqual(expected);
	});
});

describe('addFavorites', () => {
	it('should return an action with type of "ADD_FAVORITE" and a payload of an array of movies', () => {
		const expected = {
			type: 'ADD_FAVORITES',
			payload: { favorites: mockData.mockMovies }
		};

		const result = actions.addFavorites(mockData.mockMovies);
		expect(result).toEqual(expected);
	});
});

describe('login', () => {
	it('should return an action with type of "LOGIN" and a payload of a user', () => {
		const expected = {
			type: 'LOGIN',
			payload: { userData: mockData.mockUser }
		};
		const result = actions.login(mockData.mockUser);
		expect(result).toEqual(expected);
	});
});

describe('logout', () => {
	it('should return an action with type of "LOGOUT" and no payload', () => {
		const expected = {
			type: 'LOGOUT',
			payload: undefined
		};

		const result = actions.logout();
		expect(result).toEqual(expected);
	});
});
