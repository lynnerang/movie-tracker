import { fetchMovies } from '../src/util/api';
import { loading } from '../src/actions';

export const getMovies = url => {
  return async dispatch => {
    try {
      dispatch(loading(true))
      const res = await fetchMovies(url);
      const movies = cleaners.cleanMovies(res.results);
      updateMovieData(movies, path);
      dispatch(loading(false))
    } catch (error) {
      dispatch(hasErrored(error.message))
    }
  }
}