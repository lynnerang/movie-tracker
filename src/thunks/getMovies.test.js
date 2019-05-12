import { getMovies } from './getMovies';
import { updateMovieData } from './updateMovieData';
import { mockMovies, mockPath, mockProps } from '../util/mockData/mockData'

jest.mock('./updateMovieData')

describe('getMovies', () => {
  let mockDispatch;
  let mockFetchMovies;
  let thunk;

  beforeEach(() => {
    mockDispatch = jest.fn();
    mockFetchMovies = jest.fn();
    thunk = getMovies(mockMovies, mockPath, mockProps);
  })

  it('calls fetchMovies with the correct path', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(fetchMovies(mockPath));
  })

  it('should dispatch updateMovieData with the correct params', () => {
    thunk(mockDispatch);

    expect(mockDispatch).toHaveBeenCalledWith(updateMovieData(mockMovies, mockPath, mockProps));
  })

})

