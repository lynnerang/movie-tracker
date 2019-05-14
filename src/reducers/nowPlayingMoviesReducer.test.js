import nowPlayingMoviesReducer from './nowPlayingMoviesReducer';
import * as mockData from '../util/mockData/mockData'

describe('nowPlayingMoviesReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = nowPlayingMoviesReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('nowPlayingMoviesReducer', () => {
  it('should return state with a new array of movies', () => {
    const expected = mockData.mockMovies;

    const result = nowPlayingMoviesReducer(mockData.mockMovies, {})

    expect(result).toEqual(expected)
  })
})