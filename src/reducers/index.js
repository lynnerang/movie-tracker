import { combineReducers } from 'redux';
import { trendingMoviesReducer } from './trendingMoviesReducer';

const rootReducer = combineReducers({
	trendingMovies: trendingMoviesReducer
});

export default rootReducer;
