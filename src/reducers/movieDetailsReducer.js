export const movieDetailsReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_MOVIE_DETAILS':
			return [...state, payload.movie];
		default:
			return state;
	}
};
