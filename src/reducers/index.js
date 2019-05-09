import { combineReducers } from 'redux';
import { trendingMoviesReducer } from './trendingMoviesReducer';
import { topRatedMoviesReducer } from './topRatedMoviesReducer';
import { nowPlayingMoviesReducer } from './nowPlayingMoviesReducer';
import { upcomingMoviesReducer } from './upcomingMoviesReducer';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  upcomingMovies: upcomingMoviesReducer
});

export default rootReducer;
