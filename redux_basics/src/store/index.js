/**
 * !Note: We need to create Store...
 * !Will have store that contain method to access state from any react child components
 *
 */
import { createStore } from "redux";

const initialState = {
	posts: [],
	signUpModel: {
		open: false
	}
};
/**
 ** What is redux reducer are..
 ** Redux reducer : take two args.. state and action
 */

const reducer = (state = initialState, action) => {
	if (action.type === "ADD_POST") {
		// state.posts.push(action.payload);
		return Object.assign({}, state, {
			posts: state.posts.concat(action.payload)
		});
	}

	if (action.type === "LOAD_POSTS") {
		return { ...state, posts: state.posts.concat(action.payload) };
	}

	return state;
};
const store = createStore(reducer);
export default store;

/**
 * !Store API contain some functions
 * ! 1. getState() == for accessing the current state from your react application
 * ! 2. dispatch == for changing (initial or current)state via actions
 * ! 3. subscribe == for responding to state changes..
 */
