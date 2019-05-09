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
  }
}
