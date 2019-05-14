import * as Api from './Api';
import { mockMovie, mockUser, mockPost, mockMovies } from './mockData/mockData';

describe('fetchMovies', () => {
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockMovie)
			})
		);
	});

	it('should call fetch with the correct arguments', async () => {
		const expectedUrl = `https://api.themoviedb.org/3/movie/undefined?api_key=${process.env.REACT_APP_API_KEY}`;
		await Api.fetchMovies();
		expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
	});

	it('should return a parsed version of the result', async () => {
		const expectedData = await Api.fetchMovies();
		expect(expectedData).toEqual(mockMovie);
	});

	it("should throw an error if the fetch isn't successful", async () => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: false
			})
		);
		await expect(Api.fetchMovies()).rejects.toEqual(Error('Failed to fetch movie data.'));
	});
});

describe('fetchUser', () => {
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: true,
				json: () => Promise.resolve(mockUser)
			})
		);
	});

	it('should call fetch with the correct arguments', async () => {
		const expectedUrl = 'http://localhost:3000/api/users/';
		await Api.fetchUser({ email: mockUser.email, password: mockUser.password }, '');
		expect(window.fetch).toHaveBeenCalledWith(expectedUrl, mockPost);
	});

	it('should return a parsed version of the result', async () => {
		const expectedData = await Api.fetchUser();
		expect(expectedData).toEqual(mockUser);
	});

	it("should throw an error if the fetch isn't successful", async () => {
		window.fetch = jest.fn().mockImplementation(() =>
			Promise.resolve({
				ok: false
			})
		);
		await expect(Api.fetchUser()).rejects.toEqual(Error('Failed to post user data.'));
	});
});

describe('fetchMovies', () => {
	beforeEach(() => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: true,
				json: () => {
					return Promise.resolve(mockMovies);
				}
			});
		});
	});

	it('should call fetch with the correct paramters', async () => {
		const { REACT_APP_API_KEY, REACT_APP_BASE_URL } = process.env;
		const path = 'top_rated';
		const expected = `${REACT_APP_BASE_URL}/movie/${path}?api_key=${REACT_APP_API_KEY}`;
		await Api.fetchMovies(path);
		expect(window.fetch).toHaveBeenCalledWith(expected);
	});

	it('should return a parsed version of the response if successful', async () => {
		const path = 'trending';
		const res = await Api.fetchMovies(path);
		expect(res).toEqual(mockMovies);
	});

	it('should throw an error if it fails', async () => {
		window.fetch = jest.fn().mockImplementation(() => {
			return Promise.resolve({
				ok: false
			});
		});
		await expect(Api.fetchMovies('trending')).rejects.toEqual(Error('Failed to fetch movie data.'));
	});
});

describe('fetchUser', () => {
	describe('sign up', () => {
		beforeEach(() => {
			const expected = { status: 'success', message: 'New user created', id: 77 };
			window.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					ok: true,
					json: () => Promise.resolve(expected)
				});
			});
		});

		it('should call fetch with the correct params', async () => {
			const params = [{ email: 'test@example.com', password: 'password' }, 'new'];
			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(params[0])
			};
			const url = `http://localhost:3000/api/users/${params[1]}`;
			await Api.fetchUser(...params);
			expect(window.fetch).toHaveBeenCalledWith(url, options);
		});

		it('should return a parsed version of the user on success', async () => {
			const params = [{ email: 'test@example.com', password: 'password' }, 'new'];
			const res = await Api.fetchUser(...params);
			expect(res).toEqual({ status: 'success', message: 'New user created', id: 77 });
		});

		it('should return an error on fail', async () => {
			const params = [{ email: 'test@example.com', password: 'password' }, 'new'];
			window.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					ok: false
				});
			});
			await expect(Api.fetchUser(...params)).rejects.toEqual(Error('Failed to post user data.'));
		});
	});

	describe('login', () => {
		beforeEach(() => {
			const expected = {
				status: 'success',
				data: {
					id: 77,
					name: 'Lynne',
					password: 'password',
					email: 'text@example.com'
				},
				message: 'Retrieved ONE User'
			};

			window.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					ok: true,
					json: () => Promise.resolve(expected)
				});
			});
		});

		it('should call fetch with the correct params', async () => {
			const params = [
				{
					password: 'password',
					email: 'text@example.com'
				},
				null
			];

			const options = {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(params[0])
			};
			const url = `http://localhost:3000/api/users/${params[1]}`;
			await Api.fetchUser(...params);
			expect(window.fetch).toHaveBeenCalledWith(url, options);
		});

		it('should return a parsed version of the response on success', async () => {
			const expected = {
				status: 'success',
				data: {
					id: 77,
					name: 'Lynne',
					password: 'password',
					email: 'text@example.com'
				},
				message: 'Retrieved ONE User'
			};

			const params = [{ email: 'test@example.com', password: 'password' }, 'new'];
			const res = await Api.fetchUser(...params);
			expect(res).toEqual(expected);
		});

		it('should return an error on fail', async () => {
			const params = [{ email: 'test@example.com', password: 'password' }, null];
			window.fetch = jest.fn().mockImplementation(() => {
				return Promise.resolve({
					ok: false
				});
			});
			await expect(Api.fetchUser(...params)).rejects.toEqual(Error('Failed to post user data.'));
		});
	});
});
