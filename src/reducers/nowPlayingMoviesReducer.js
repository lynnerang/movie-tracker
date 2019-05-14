export const nowPlayingMoviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NOW_PLAYING':
      return action.payload.movies
    default:
      return state;
  }
}

