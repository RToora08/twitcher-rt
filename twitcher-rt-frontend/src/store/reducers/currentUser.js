import { SET_CURRENT_USER } from '../actionTypes';

const DEFAULT_STATE = {
	isAuthenticated: false, // will be true, when user is logged in
	user: {} // all the user's information when they're logged in
};

export default (state = DEFAULT_STATE, action) => {
	console.log(action);
	switch (action.type) {
		case SET_CURRENT_USER:
			return {
				// if user object(line 5) doesn't have any keys;
				// isAuthenticated: false, when user object(line 5) keys = 0
				// isAuthenticated: true, when user object(line 5) keys > 0
				isAuthenticated: !!Object.keys(action.user).length,
				// !! will turn an empty object into false or if there are keys true
				// could also be written as
				// isAuthenticated: Object.keys(action.user).length > 0,

				user: action.user
			};
		default:
			return state;
	}
};
