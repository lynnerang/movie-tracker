import * as Api from './Api';

const mockMovie = {
  'vote_count': 4354,
  'id': 299534,
  'video': false,
  'vote_average': 8.6,
  'title': 'Avengers: Endgame',
  'popularity': 395.542,
  'poster_path': '/or06FN3Dka5tukK1e9sl16pB3iy.jpg',
  'original_language': 'en',
  'original_title': 'Avengers: Endgame',
  'genre_ids': [
    12,
    878,
    28
  ],
  'backdrop_path': '/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg',
  'adult': false,
  'overview': "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
  'release_date': '2019-04-24'
}

describe('fetchMovies', () => {
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve(mockMovie)
    }));
  })

  it('should call fetch with the correct arguments', async () => {
    const expectedUrl = 'https://api.themoviedb.org/3/movie/undefined?api_key=3f473facbf0990fef2896fe714e2aebd';
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