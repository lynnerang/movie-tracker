import trendingMoviesReducer from '../trendingMoviesReducer';
import * as mockData from '../util/mockData/mockData'

describe('trendingMoviesReducer', () => {
  it('should return the initial state', () => {
    const expected = []

    const result = trendingMoviesReducer()

    expect(result).toEqual(expected)
  })
})

// describe('trendingMoviesReducer', () => {
//   it('should return the initial state', () => {
//     const expected = []

//     const result = trendingMoviesReducer(mockData.mockMovies)

//     expect(result).toEqual(expected)
//   })
// })