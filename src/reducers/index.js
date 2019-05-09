import { combineReducers } from 'redux';
import { trendingMoviesReducer } from './trendingMoviesReducer';
import { topRatedMoviesReducer } from './topRatedMoviesReducer';
import { nowPlayingMoviesReducer } from './nowPlayingMoviesReducer';
import { upcomingMoviesReducer } from './upcomingMoviesReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer,
  nowPlayingMovies: nowPlayingMoviesReducer,
  upcomingMovies: upcomingMoviesReducer,
  user: userReducer
});

export default rootReducer;
