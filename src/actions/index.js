export const addMovies = movies => {
	return {
		type: 'ADD_MOVIES',
		payload: { movies }
	};
};
