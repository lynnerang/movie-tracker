export const addTrendingMovies = movies => {
	return {
		type: 'ADD_MOVIES',
		payload: { movies }
	};
};
