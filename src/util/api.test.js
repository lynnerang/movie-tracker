import * as Api from './Api';
import { mockMovie, mockUser, mockPost } from './mockData/mockData';

describe('fetchMovies', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovie)
    }));
  })

  it('should call fetch with the correct arguments', async () => {
    const expectedUrl = `https://api.themoviedb.org/3/movie/undefined?api_key=${process.env.REACT_APP_API_KEY}`;
    await Api.fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl);
  })

  it('should return a parsed version of the result', async () => {
    const expectedData = await Api.fetchMovies();
    expect(expectedData).toEqual(mockMovie);
  })

  it('should throw an error if the fetch isn\'t successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(Api.fetchMovies()).rejects.toEqual(Error('Failed to fetch movie data.'))
  })
})

describe('fetchUser', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockUser)
    }));
  })

  it('should call fetch with the correct arguments', async () => {
    const expectedUrl = 'http://localhost:3000/api/users/';
    await Api.fetchUser({ email: mockUser.email, password: mockUser.password }, '');
    expect(window.fetch).toHaveBeenCalledWith(expectedUrl, mockPost);
  })

  it('should return a parsed version of the result', async () => {
    const expectedData = await Api.fetchUser();
    expect(expectedData).toEqual(mockUser);
  })

  it('should throw an error if the fetch isn\'t successful', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(Api.fetchUser()).rejects.toEqual(Error('Failed to post user data.'))
  })
})

describe('fetchMovies', () => {
  it('should')
})