export const favoritesReducer = (state = [], action) => {
	const { type, payload } = action;
	switch (type) {
		case 'ADD_FAVORITES':
			return payload.favorites;
		default:
			return state;
	}
};
