const upcomingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_UPCOMING':
      return action.payload.movies
    default:
      return state;
  }
}

export default upcomingMoviesReducer;