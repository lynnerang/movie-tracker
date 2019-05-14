import upcomingMoviesReducer from './upcomingMoviesReducer';
import * as mockData from '../util/mockData/mockData'

describe('upcomingMoviesReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = upcomingMoviesReducer(undefined, {})

    expect(result).toEqual(expected)
  })
})

describe('upcomingMoviesReducer', () => {
  it('should return state with a new array of movies', () => {
    const expected = mockData.mockMovies;

    const result = upcomingMoviesReducer(mockData.mockMovies, {})

    expect(result).toEqual(expected)
  })
})