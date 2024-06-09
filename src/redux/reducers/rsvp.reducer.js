import { combineReducers } from "redux";

const rsvp = (state = [], action) => {
    switch (action.type) {
        case 'SET_RSVP':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    rsvp,
});