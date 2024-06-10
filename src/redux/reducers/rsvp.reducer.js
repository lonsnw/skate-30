import { combineReducers } from "redux";

const rsvp = (state = [], action) => {
    switch (action.type) {
        case 'SET_RSVP':
            return action.payload;
        case 'DELETE_SVP':
            return [];
        // This is the DetailRSVPToggle setting the RSVP data in the reducer
        case 'SAVE_RSVP':
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
    rsvp,
});