const trendingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TRENDING':
      return action.payload.movies
    default:
      return state;
  }
}

export default trendingMoviesReducer;