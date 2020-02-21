// import action types
import {
	FETCH_DATA,
	FETCH_SUCCESS,
	FETCH_FAIL,
	POST_DATA,
	POST_SUCCESS,
	POST_FAIL
} from '../actions';

// setup initialState
const initialState = {
	players: [],
	isFetching: false,
	isPosting: false,
	errors: ''
};

// setup  an empty reducer
const playerReducer = (state = initialState, action) => {
	// setup swtich, cases, and default
	switch (action.type) {
		case FETCH_DATA:
			return {
				...state,
				isFetching: true
			};
		case FETCH_SUCCESS:
			return {
				...state,
				players: action.payload,
				isFetching: false
			};
		case FETCH_FAIL:
			return {
				...state,
				isFetching: false,
				errors: ''
			};
		case POST_DATA:
			return {
				...state,
				isPosting: true,
				players: [...state.players],
				errors: ''
			};
		case POST_SUCCESS:
			return {
				...state,
				isPosting: false,
				players: action.payload
			};
		case POST_FAIL:
			return {
				...state,
				isPosting: false,
				errors: action.payload
			};
		default:
			return state;
	}
};

// export the reducer
export default playerReducer;
