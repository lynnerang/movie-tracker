import { combineReducers } from 'redux';
import { trendingMoviesReducer } from './trendingMoviesReducer';
import { topRatedMoviesReducer } from './topRatedMoviesReducer';
import { nowPlayingMoviesReducer } from './nowPlayingMoviesReducer';
import { upcomingMoviesReducer } from './upcomingMoviesReducer';
import { userReducer } from './userReducer';
import { movieDetailsReducer } from './movieDetailsReducer';
import { favoritesReducer } from './favoritesReducers';

const rootReducer = combineReducers({
	trendingMovies: trendingMoviesReducer,
	topRatedMovies: topRatedMoviesReducer,
	nowPlayingMovies: nowPlayingMoviesReducer,
	upcomingMovies: upcomingMoviesReducer,
	movieDetails: movieDetailsReducer,
	user: userReducer,
	favorites: favoritesReducer
});

export default rootReducer;
