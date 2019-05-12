import { addTrendingMovies, addTopRatedMovies, addNowPlayingMovies, addUpcomingMovies } from '../actions';

export const updateMovieData = (movies, category, props) => {
  return async dispatch => {
    const { trendingMovies, topRatedMovies, nowPlayingMovies, upcomingMovies } = props;

    switch (category) {
      case 'popular':
        !trendingMovies.length && dispatch(addTrendingMovies(movies));
        break;
      case 'top_rated':
        !topRatedMovies.length && dispatch(addTopRatedMovies(movies));
        break;
      case 'now_playing':
        !nowPlayingMovies.length && dispatch(addNowPlayingMovies(movies));
        break;
      case 'upcoming':
        !upcomingMovies.length && dispatch(addUpcomingMovies(movies));
        break;
      default:
        break;
    }
  }
};