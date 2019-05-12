import { updateMovieData } from './updateMovieData';
import { fetchMovies } from '../util/api';
import { cleanMovies } from '../util/cleaners';

export const getMovies = (path, props) => {
  return async dispatch => {
    try {
      const res = await fetchMovies(path);
      const movies = cleanMovies(res.results);
      dispatch(updateMovieData(movies, path, props));
    } catch (err) {
      console.log(err);
    }
  }
};
