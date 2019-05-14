import * as Cleaners from './cleaners';
import { mockMovie } from './mockData/mockData';

describe('cleanMovies', () => {
	it('should return a cleaned version of the movie data', () => {
		const cleanMovie = {
			poster_path: `${process.env.REACT_APP_BASE_IMAGE_URL}/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
			movie_id: 299534,
			title: 'Avengers: Endgame'
		};

		const res = Cleaners.cleanMovies([mockMovie, mockMovie]);
		expect(res).toEqual([cleanMovie, cleanMovie]);
	});
});

describe('cleanMovieDetails', () => {
	it('should return a cleaned movie', () => {
		const cleanMovie = {
			poster_path: `${process.env.REACT_APP_BASE_IMAGE_URL}/w342/or06FN3Dka5tukK1e9sl16pB3iy.jpg`,
			backdrop: `${process.env.REACT_APP_BASE_IMAGE_URL}/w1280/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg`,
			genres: ['Action', 'Adventure', 'Science Fiction'],
			movie_id: 299534,
			rating: 8.5,
			title: 'Avengers: Endgame',
			language: 'EN',
			releaseDate: '2019',
			description:
				"After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
			runtime: 181,
			popularity: 335.962,
			production: 'Marvel Studios',
			boxOffice: 2489617092,
			cast: '/credits',
			recommendatoins: '/recommendations'
		};

		const res = Cleaners.cleanMovieDetails(mockMovie);
		expect(res).toEqual(cleanMovie);
	});
});
