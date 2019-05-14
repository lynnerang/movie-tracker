import trendingMoviesReducer from './trendingMoviesReducer';
import * as mockData from '../util/mockData/mockData'

describe('trendingMoviesReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = trendingMoviesReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('trendingMoviesReducer', () => {
  it('should return state with a new array of movies', () => {
    const expected = mockData.mockMovies;

    const result = trendingMoviesReducer(mockData.mockMovies, {})

    expect(result).toEqual(expected)
  })
})