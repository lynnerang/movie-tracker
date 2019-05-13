export const addTrendingMovies = movies => {
	return {
		type: 'ADD_TRENDING',
		payload: { movies }
	};
};

export const addTopRatedMovies = movies => {
	return {
		type: 'ADD_TOP_RATED',
		payload: { movies }
	};
};

export const addNowPlayingMovies = movies => {
	return {
		type: 'ADD_NOW_PLAYING',
		payload: { movies }
	};
};

export const addUpcomingMovies = movies => {
	return {
		type: 'ADD_UPCOMING',
		payload: { movies }
	};
};

export const login = userData => {
	return {
		type: 'LOGIN',
		payload: { userData }
	};
};

export const logout = () => {
	return {
		type: 'LOGOUT'
	};
};

export const addMovieDetails = movie => {
	return {
		type: 'ADD_MOVIE_DETAILS',
		payload: { movie }
	};
};

export const addFavorites = favorites => {
	return {
		type: 'ADD_FAVORITES',
		payload: { favorites }
	};
};
