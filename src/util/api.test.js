import * as Api from './Api';
import { mockMovie } from './mockData/mockData';

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
    await expect(Api.fetchMovies()).rejects.toEqual(Error('Can\'t fetch movies.'))
  })
})