const initialState = { email: '', id: 0, name: '', password: '' };

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'LOGIN':
			return action.payload.userData;
		case 'LOGOUT':
			return initialState;
		default:
			return state;
	}
};