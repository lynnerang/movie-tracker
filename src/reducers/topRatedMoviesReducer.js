export const topRatedMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TOP_RATED':
      return action.payload.movies
    default:
      return state;
  }
}
