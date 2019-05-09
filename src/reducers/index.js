import { combineReducers } from 'redux';
import { trendingMoviesReducer } from './trendingMoviesReducer';
import { topRatedMoviesReducer } from './topRatedMoviesReducer';

const rootReducer = combineReducers({
  trendingMovies: trendingMoviesReducer,
  topRatedMovies: topRatedMoviesReducer
});

export default rootReducer;
