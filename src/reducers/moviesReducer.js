export const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      return action.payload.movies
    default:
      return state;
  }
}