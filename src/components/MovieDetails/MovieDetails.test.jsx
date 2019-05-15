import React from 'react';
import { MovieDetails } from './MovieDetails';
import { shallow } from 'enzyme';
import * as Api from '../../util/api';
import * as Cleaners from '../../util/cleaners';
import { mockMovie, mockMovies, mockUser, mockMovieDetails } from '../../util/mockData/mockData';

jest.mock('../../util/api');
jest.mock('../../util/cleaners');

describe('MovieDetails', () => {
	let wrapper, mockAddMovieDetails;

	beforeEach(() => {
		window.scrollTo = jest.fn();
		mockAddMovieDetails = jest.fn();
		wrapper = shallow(
			<MovieDetails
				id={mockMovie.id}
				key={mockMovie.id}
				movies={mockMovies}
				favorites={mockMovies}
				user={mockUser}
				movieDetails={mockMovieDetails}
				addMovieDetails={mockAddMovieDetails}
			/>
		);
	});

	it('Should match the snapshot', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('Should match the snapshot with the Loader', () => {
		wrapper.setState({ loading: true });
		expect(wrapper).toMatchSnapshot();
	});

	it('Should match the snapshot with the empty favorite icon', () => {
		wrapper = shallow(
			<MovieDetails
				id={mockMovie.id}
				key={mockMovie.id}
				movies={mockMovies}
				favorites={[]}
				user={mockUser}
				movieDetails={mockMovieDetails}
			/>
		);
		expect(wrapper).toMatchSnapshot();
	});

	it('should scroll to the top on update', () => {
		wrapper.instance().componentDidUpdate();
		expect(window.scrollTo).toHaveBeenCalledWith(0, 0);
	});

	describe('componentDidMount', () => {
		it('should set state if it finds details', () => {
			jest.spyOn(wrapper.instance(), 'getMovieDetails');
			wrapper.instance().componentDidMount();
			expect(wrapper.state('details')).toEqual({ ...mockMovie, movie_id: mockMovie.id });
			expect(wrapper.instance().getMovieDetails).toHaveBeenCalledTimes(0);
		});

		it('should call getMovieDetails if there are no details', () => {
			wrapper = shallow(
				<MovieDetails
					id={mockMovie.id}
					key={mockMovie.id}
					movies={mockMovies}
					favorites={mockMovies}
					user={mockUser}
					movieDetails={[]}
				/>
			);
			jest.spyOn(wrapper.instance(), 'getMovieDetails');
			wrapper.instance().componentDidMount();
			expect(wrapper.instance().getMovieDetails).toHaveBeenCalled();
		});
	});

	describe('deleteFavorite', () => {
		it('should call deleteFavorite with the body', async () => {
			const body = {
				user_id: mockUser.id,
				movie_id: mockMovie.id
			};
			await wrapper.instance().deleteFavorite();
			expect(Api.deleteFavorite).toHaveBeenCalledWith(body);
		});

		it.skip('should set state to the error if it fails', async () => {
			wrapper = shallow(
				<MovieDetails
					id={mockMovie.id}
					key={mockMovie.id}
					movies={mockMovies}
					favorites={mockMovies}
					user={mockUser}
					movieDetails={[]}
				/>
			);
			await wrapper.instance().deleteFavorite();
			expect(wrapper.state('error')).toEqual('Could not delete favorite');
		});
	});

	describe('addFavorite', () => {
		it('should call addFavorite with the body', async () => {
			const body = {
				movie_id: mockMovie.id,
				user_id: mockUser.id,
				poster_path: mockMovie.poster_path,
				release_date: mockMovie.releaseDate,
				vote_average: mockMovie.rating,
				title: mockMovie.title,
				overview: mockMovie.description
			};
			await wrapper.instance().addFavorite();
			expect(Api.addFavorite).toHaveBeenCalledWith(body);
		});

		it.skip('should set state to the error if it fails', async () => {
			wrapper = shallow(
				<MovieDetails
					id={mockMovie.id}
					key={mockMovie.id}
					movies={mockMovies}
					favorites={mockMovies}
					user={{ ...mockUser, id: 111 }}
					movieDetails={[]}
				/>
			);
			await wrapper.instance().deleteFavorite();
			expect(wrapper.state('error')).toEqual('Could not delete favorite');
		});
	});

	describe('getMovieDetails', () => {
		beforeEach(() => {
			window.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					ok: true,
					json: () => Promise.resolve(mockMovie)
				});
			});
		});

		it('should call fetch with the correct params', async () => {
			const { REACT_APP_BASE_URL, REACT_APP_API_KEY } = process.env;
			const url = `${REACT_APP_BASE_URL}/movie/${mockMovie.id}?api_key=${REACT_APP_API_KEY}`;
			await wrapper.instance().getMovieDetails();
			expect(window.fetch).toHaveBeenCalledWith(url);
		});

		it('should call cleanMovieDetails', async () => {
			await wrapper.instance().getMovieDetails();
			expect(Cleaners.cleanMovieDetails).toHaveBeenCalled();
		});

		it.skip('should call addMovieDetails', async () => {
			await wrapper.instance().getMovieDetails();
			expect(mockAddMovieDetails).toHaveBeenCalled();
		});

		it('should set state with the details', async () => {
			await wrapper.instance().getMovieDetails();
			expect(wrapper.state('details')).toEqual({ ...mockMovie, movie_id: mockMovie.id });
		});
	});

	describe('handleClick', () => {
		it('should call deleteFavorite', async () => {
			await wrapper.instance().handleClick();
			expect(Api.deleteFavorite).toHaveBeenCalled();
		});

		it.skip('should call addFavorite', async () => {
			wrapper = shallow(
				<MovieDetails
					id={mockMovie.id}
					key={mockMovie.id}
					movies={mockMovies}
					favorites={[]}
					user={{ ...mockUser, id: 111 }}
					movieDetails={[]}
				/>
			);
			await wrapper.instance().handleClick();
			expect(Api.addFavorite).toHaveBeenCalled();
		});

		it.skip('should call addFavorites', async () => {
			const mockAddFavorites = jest.fn();
			wrapper = shallow(
				<MovieDetails
					id={mockMovie.id}
					key={mockMovie.id}
					movies={mockMovies}
					favorites={[]}
					user={{ ...mockUser, movie_id: 111 }}
					movieDetails={[]}
					addFavorites={mockAddFavorites}
				/>
			);
			await wrapper.instance().getMovieDetails();
			expect(mockAddFavorites).toHaveBeenCalled();
		});
	});
});
