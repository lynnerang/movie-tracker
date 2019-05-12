import { updateMovieData } from './updateMovieData';
import { fetchMovies } from '../util/api';
import { cleanMovies } from '../util/cleaners';

export const getMovies = (path, props) => {
  return async dispatch => {
    try {
      //add isloading to state
      const res = await fetchMovies(path);
      const movies = cleanMovies(res.results);
      //remove isLoading from state
      dispatch(updateMovieData(movies, path, props));
    } catch (err) {
      console.log(err);
    }
  }
};
